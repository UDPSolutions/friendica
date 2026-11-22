<?php

// Copyright (C) 2010-2024, the Friendica project
// SPDX-FileCopyrightText: 2010-2024 the Friendica project
//
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace Friendica\Module\Security;

use Friendica\App\Arguments;
use Friendica\App\BaseURL;
use Friendica\BaseModule;
use Friendica\Core\L10n;
use Friendica\Core\Renderer;
use Friendica\Database\DBA;
use Friendica\DI;
use Friendica\Navigation\SystemMessages;
use Friendica\Security\Authentication;
use Friendica\Util\DateTimeFormat;
use Friendica\Util\Profiler;
use Friendica\Util\Strings;
use Psr\Log\LoggerInterface;

/**
 * Magic-link login module.
 *
 * Handles one-click login from the welcome email sent to new accounts.
 *
 * - GET  /login/magic/{token} only validates the token and shows a "Sign in" button.
 *   It never consumes the token, so mail scanners that prefetch links (Outlook Safe
 *   Links, corporate gateways) can't burn it before the user clicks.
 * - POST /login/magic/{token} consumes the token and logs the user in.
 *
 * The token shares the pwdreset/pwdreset_time columns with LostPass, but is hashed with
 * a domain prefix so a password-reset token can't be used as a login link (or the reverse).
 * Issuing either kind replaces any pending token of the other kind. The token is cleared
 * on first use or on password change.
 *
 * Two-factor: Authentication::setForUser() redirects users with TOTP enabled to /2fa,
 * so a magic link alone never bypasses 2FA.
 */
final class MagicLogin extends BaseModule
{
	/** How long a magic link stays valid (strtotime-relative). */
	const TOKEN_TTL = '24 hours';

	/** Human-readable TTL for email copy. */
	const TOKEN_TTL_LABEL = '24 hours';

	private const TOKEN_DOMAIN = 'udp-magic-login:';

	private SystemMessages $sysMessages;
	private Authentication $auth;

	public function __construct(
		Authentication $auth,
		SystemMessages $sysMessages,
		L10n $l10n,
		BaseURL $baseUrl,
		Arguments $args,
		LoggerInterface $logger,
		Profiler $profiler,
		\Friendica\Module\Response $response,
		array $server,
		array $parameters = []
	) {
		parent::__construct($l10n, $baseUrl, $args, $logger, $profiler, $response, $server, $parameters);

		$this->auth        = $auth;
		$this->sysMessages = $sysMessages;
	}

	/**
	 * Hash a raw magic-link token for storage/lookup.
	 */
	public static function hashToken(string $token): string
	{
		return hash('sha256', self::TOKEN_DOMAIN . $token);
	}

	/**
	 * Create a new magic-link token for the user, replacing any pending one.
	 *
	 * @return string The raw token to put in the link (/login/magic/{token})
	 */
	public static function issueToken(int $uid): string
	{
		$token = Strings::getRandomHex(32);
		DBA::update('user', [
			'pwdreset'      => self::hashToken($token),
			'pwdreset_time' => DateTimeFormat::utcNow(),
		], ['uid' => $uid]);

		return $token;
	}

	/**
	 * Email a sign-in link to an existing user (the "Email me a sign-in link" form).
	 * The welcome email for new accounts is User::sendRegisterOpenEmail().
	 *
	 * @param array $user needs uid, username, nickname, email, language
	 */
	public static function sendLoginLink(array $user): bool
	{
		$token    = self::issueToken($user['uid']);
		$siteurl  = (string)DI::baseUrl();
		$sitename = DI::config()->get('config', 'sitename');
		$l10n     = DI::l10n()->withLang($user['language'] ?: 'en');

		$preamble = $l10n->t('Hi %s,', $user['username']);
		$body     = Strings::deindent($l10n->t(
			'
			Here is your sign-in link for %1$s. It works once and expires in 24 hours.

			  %2$s

			Your username: %3$s

			If you didn\'t ask for this, you can ignore this email. Nobody can sign in without the link.',
			$sitename,
			$siteurl . '/login/magic/' . $token,
			$user['nickname'],
		));

		$email = DI::emailer()
			->newSystemMail()
			->withMessage($l10n->t('Your sign-in link for %s', $sitename), $preamble, $body)
			->forUser($user)
			->withRecipient($user['email'])
			->build();
		return DI::emailer()->send($email);
	}

	/**
	 * Look up and validate the token from the route. Redirects (and exits) when invalid
	 * or expired; returns the user record otherwise. Does not consume the token.
	 */
	private function requireValidUser(): array
	{
		$token = $this->parameters['token'] ?? '';
		if (!$token) {
			$this->baseUrl->redirect('login');
		}

		$user = DBA::selectFirst(
			'user',
			['uid', 'username', 'nickname', 'email', 'theme', 'password', 'prvkey',
			 'timezone', 'register_date', 'page-flags', 'pwdreset_time', 'language'],
			['pwdreset' => self::hashToken($token), 'verified' => true, 'blocked' => false,
			 'account_removed' => false, 'account_expired' => false]
		);

		if (!DBA::isResult($user)) {
			$this->sysMessages->addNotice($this->l10n->t('Login link is invalid or has already been used.'));
			$this->baseUrl->redirect('login');
		}

		if ($user['pwdreset_time'] < DateTimeFormat::utc('now - ' . self::TOKEN_TTL)) {
			DBA::update('user', ['pwdreset' => null, 'pwdreset_time' => null], ['uid' => $user['uid']]);
			$this->sysMessages->addNotice($this->l10n->t('Login link has expired. Please use the forgot password form to request a new one.'));
			$this->baseUrl->redirect('lostpass');
		}

		return $user;
	}

	protected function post(array $request = [])
	{
		$user = $this->requireValidUser();

		// Clear the token — it is single-use
		DBA::update('user', ['pwdreset' => null, 'pwdreset_time' => null], ['uid' => $user['uid']]);

		// Set before setForUser(): for TOTP users, setForUser() redirects to /2fa and never returns.
		DI::session()->set('magic_login', true);

		// Pass $interactive=false to suppress Friendica's built-in first-login redirect
		// to settings/profile/photo/new — we handle the post-magic-link redirect ourselves.
		$this->auth->setForUser($user, true, false);

		$this->baseUrl->redirect('firstlogin');
	}

	protected function content(array $request = []): string
	{
		$user = $this->requireValidUser();

		$tpl = Renderer::getMarkupTemplate('security/magic_login.tpl');
		return Renderer::replaceMacros($tpl, [
			'$sitename'     => DI::config()->get('config', 'sitename'),
			'$action'       => 'login/magic/' . rawurlencode($this->parameters['token']),
			'$intro'        => $this->l10n->t('Welcome, %s. Press the button below to sign in.', $user['username']),
			'$label_submit' => $this->l10n->t('Sign in'),
		]);
	}
}
