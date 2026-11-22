<?php

// SPDX-FileCopyrightText: 2026 UDP Solutions, LLC
//
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace Friendica\Module\Security;

use Friendica\App\Arguments;
use Friendica\App\BaseURL;
use Friendica\BaseModule;
use Friendica\Core\L10n;
use Friendica\Core\Session\Capability\IHandleUserSessions;
use Friendica\Database\DBA;
use Friendica\Model\User;
use Friendica\Module\Response;
use Friendica\Security\Authentication;
use Friendica\Security\UdpPasskey;
use Friendica\Util\Profiler;
use Psr\Log\LoggerInterface;

/**
 * JSON endpoints for the passkey ceremonies, driven by view/js/udp-passkey.js.
 *
 *   POST /passkey/login-options     anonymous  → PublicKeyCredentialRequestOptions
 *   POST /passkey/login             anonymous  → logs in, returns {redirect}
 *   POST /passkey/register-options  logged in  → PublicKeyCredentialCreationOptions
 *   POST /passkey/register          logged in  → stores the credential, returns {name}
 *
 * Register actions require the X-CSRF-Token header (form security token 'udp_passkey').
 */
final class Passkey extends BaseModule
{
	private Authentication $auth;
	private IHandleUserSessions $session;

	public function __construct(
		Authentication $auth,
		IHandleUserSessions $session,
		L10n $l10n,
		BaseURL $baseUrl,
		Arguments $args,
		LoggerInterface $logger,
		Profiler $profiler,
		Response $response,
		array $server,
		array $parameters = []
	) {
		parent::__construct($l10n, $baseUrl, $args, $logger, $profiler, $response, $server, $parameters);

		$this->auth    = $auth;
		$this->session = $session;
	}

	protected function post(array $request = [])
	{
		if (!UdpPasskey::enabled()) {
			$this->jsonError(404, ['error' => 'Not found']);
		}

		switch ($this->parameters['action'] ?? '') {
			case 'login-options':
				$this->loginOptions();
			case 'login':
				$this->login($request);
			case 'register-options':
				$this->requireRegisterAccess();
				$this->registerOptions();
			case 'register':
				$this->requireRegisterAccess();
				$this->register($request);
			default:
				$this->jsonError(404, ['error' => 'Unknown action']);
		}
	}

	private function fail(int $code, string $message)
	{
		$this->jsonError($code, ['error' => $message]);
	}

	// ------------------------------------------------------------------ login

	private function loginOptions()
	{
		$server = UdpPasskey::server();
		// No allowCredentials: discoverable credentials, the authenticator offers the account.
		$args = $server->getGetArgs([], UdpPasskey::CEREMONY_TIMEOUT, true, true, true, true, true, true);
		UdpPasskey::storeChallenge('login', $server->getChallenge());
		$this->jsonExit($args);
	}

	private function login(array $request)
	{
		$failure = $this->t('That passkey could not be verified. Please try again, or sign in another way.');

		$challenge = UdpPasskey::takeChallenge('login');
		if ($challenge === null) {
			$this->fail(400, $this->t('The sign-in request expired. Please try again.'));
		}

		$credentialId      = UdpPasskey::b64uDecode($request['id'] ?? '');
		$clientDataJSON    = UdpPasskey::b64uDecode($request['clientDataJSON'] ?? '');
		$authenticatorData = UdpPasskey::b64uDecode($request['authenticatorData'] ?? '');
		$signature         = UdpPasskey::b64uDecode($request['signature'] ?? '');
		$userHandle        = UdpPasskey::b64uDecode($request['userHandle'] ?? '');

		$passkey = $credentialId ? UdpPasskey::findByCredentialId($credentialId) : null;
		if (!$passkey) {
			$this->logger->info('Passkey login: unknown credential');
			$this->fail(401, $this->t('This passkey is not registered on this site. It may have been removed.'));
		}

		if (!UdpPasskey::checkOrigin($clientDataJSON)) {
			$this->logger->notice('Passkey login: origin mismatch', ['uid' => $passkey['uid']]);
			$this->fail(401, $failure);
		}

		if ($userHandle !== '' && !hash_equals(UdpPasskey::userHandle($passkey['uid']), $userHandle)) {
			$this->logger->notice('Passkey login: user handle mismatch', ['uid' => $passkey['uid']]);
			$this->fail(401, $failure);
		}

		$server = UdpPasskey::server();
		try {
			$server->processGet(
				$clientDataJSON,
				$authenticatorData,
				$signature,
				$passkey['public_key'],
				$challenge,
				(int)$passkey['sign_count'],
				true, // user verification required
				true
			);
		} catch (\Throwable $e) {
			$this->logger->notice('Passkey login: verification failed', ['uid' => $passkey['uid'], 'error' => $e->getMessage()]);
			$this->fail(401, $failure);
		}

		$user = DBA::selectFirst(
			'user',
			['uid', 'username', 'nickname', 'email', 'theme', 'password', 'prvkey',
			 'timezone', 'register_date', 'page-flags', 'language'],
			['uid' => $passkey['uid'], 'verified' => true, 'blocked' => false,
			 'account_removed' => false, 'account_expired' => false]
		);
		if (!DBA::isResult($user)) {
			$this->fail(403, $this->t('This account cannot sign in right now.'));
		}

		UdpPasskey::recordUse($passkey['id'], (int)($server->getSignatureCounter() ?? 0));

		// A user-verified passkey is itself multi-factor (device + PIN/biometric):
		// mark the session as 2FA-passed so TOTP users aren't asked for a code.
		$this->session->set('2fa', true);
		$this->auth->setForUser($user, true, false);

		$this->logger->info('Passkey login', ['uid' => $user['uid'], 'passkey' => $passkey['id']]);
		$this->jsonExit(['redirect' => $this->safeReturnUrl($request['return_path'] ?? '')]);
	}

	/**
	 * Only same-site relative paths; anything else goes to the home page.
	 */
	private function safeReturnUrl(string $path): string
	{
		$path = ltrim(trim($path), '/');
		if ($path === '' || str_contains($path, '//') || str_contains($path, '\\') || preg_match('/^[a-z][a-z0-9+.-]*:/i', $path)
			|| preg_match('#^(login|logout|lostpass|firstlogin|passkey)\b#', $path)) {
			return (string)$this->baseUrl;
		}
		return $this->baseUrl . '/' . $path;
	}

	// ------------------------------------------------------------------ registration

	private function requireRegisterAccess(): void
	{
		if (!$this->session->getLocalUserId()) {
			$this->fail(401, $this->t('Please sign in first.'));
		}
		if (!self::checkFormSecurityToken('udp_passkey')) {
			$this->fail(403, $this->t('The page is out of date. Please reload it and try again.'));
		}
	}

	private function registerOptions()
	{
		$uid  = $this->session->getLocalUserId();
		$user = User::getById($uid, ['nickname', 'username']);

		$server = UdpPasskey::server();
		$args   = $server->getCreateArgs(
			UdpPasskey::userHandle($uid),
			$user['nickname'] . '@' . UdpPasskey::rpId(), // what the passkey manager shows as the account
			$user['username'] ?: $user['nickname'],
			UdpPasskey::CEREMONY_TIMEOUT,
			true,  // discoverable credential (username-less login)
			true,  // user verification required
			null,  // any attachment: platform, security key or phone
			UdpPasskey::credentialIdsForUser($uid)
		);

		// Password-manager compatibility (LastPass rejected registrations 2026-11-22):
		// - lbuchs adds a nonstandard extension {"exts": true}; drop it.
		// - lbuchs lists EdDSA (-8) first; many managers only do ES256 and some fail on the
		//   first unsupported entry instead of skipping it. Order: ES256, RS256, EdDSA.
		unset($args->publicKey->extensions);
		$rank = [-7 => 0, -257 => 1, -8 => 2];
		usort($args->publicKey->pubKeyCredParams, fn($a, $b) => ($rank[$a->alg] ?? 9) <=> ($rank[$b->alg] ?? 9));

		UdpPasskey::storeChallenge('register', $server->getChallenge());
		$this->jsonExit($args);
	}

	private function register(array $request)
	{
		$uid = $this->session->getLocalUserId();

		$challenge = UdpPasskey::takeChallenge('register');
		if ($challenge === null) {
			$this->fail(400, $this->t('The request expired. Please try again.'));
		}

		$clientDataJSON    = UdpPasskey::b64uDecode($request['clientDataJSON'] ?? '');
		$attestationObject = UdpPasskey::b64uDecode($request['attestationObject'] ?? '');

		if (!UdpPasskey::checkOrigin($clientDataJSON)) {
			$this->fail(400, $this->t('The passkey could not be saved. Please try again.'));
		}

		try {
			$data = UdpPasskey::server()->processCreate(
				$clientDataJSON,
				$attestationObject,
				$challenge,
				true,  // user verification required
				true,  // user presence required
				false, // no root certificate checks (attestation "none")
				false
			);
		} catch (\Throwable $e) {
			$this->logger->notice('Passkey registration failed', ['uid' => $uid, 'error' => $e->getMessage()]);
			$this->fail(400, $this->t('The passkey could not be saved. Please try again.'));
		}

		if (UdpPasskey::findByCredentialId($data->credentialId)) {
			$this->fail(409, $this->t('This passkey is already registered.'));
		}

		$name = trim(strip_tags($request['name'] ?? ''));
		if ($name === '') {
			$name = $this->t('Passkey added %s', date('Y-m-d'));
		}

		if (!UdpPasskey::add($uid, $data->credentialId, $data->credentialPublicKey, (int)($data->signatureCounter ?? 0), $name)) {
			$this->fail(500, $this->t('The passkey could not be saved. Please try again.'));
		}

		UdpPasskey::notifyAdded($uid, $name);
		$this->logger->info('Passkey registered', ['uid' => $uid]);
		$this->jsonExit(['name' => $name]);
	}
}
