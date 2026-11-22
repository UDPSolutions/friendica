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
use Friendica\DI;
use Friendica\Model\User;
use Friendica\Module\Settings\Passkeys;
use Friendica\Navigation\SystemMessages;
use Friendica\Security\UdpPasskey;
use Friendica\Util\Profiler;
use Psr\Log\LoggerInterface;

/**
 * "How would you like to sign in next time?" — shown after a magic-link login.
 *
 * Option A (decided 2026-11-22):
 * - Device has a built-in authenticator → passkey is the main choice; "Set a password
 *   instead" reveals the password form.
 * - Otherwise → password form (one field + show/hide; no confirm field).
 * - Always: "Skip for now" — the user can sign in later with an emailed link (/login/email).
 *
 * The session flag 'magic_login' gates access — anyone without it is redirected home.
 */
final class FirstLogin extends BaseModule
{
	private SystemMessages $sysMessages;

	public function __construct(
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
		$this->sysMessages = $sysMessages;
	}

	/** @var string|null Inline error to display on the form after a failed POST */
	private ?string $formError = null;

	private function requireMagicSession(): void
	{
		if (!DI::userSession()->isAuthenticated()) {
			$this->baseUrl->redirect('login');
		}

		if (!DI::session()->get('magic_login')) {
			$this->baseUrl->redirect();
		}
	}

	private function finish(string $message): void
	{
		DI::session()->remove('magic_login');
		$this->sysMessages->addInfo($message);
		$this->baseUrl->redirect();
	}

	protected function post(array $request = []): void
	{
		$this->requireMagicSession();
		self::checkFormSecurityTokenRedirectOnError('firstlogin', 'first_login');

		$uid = DI::userSession()->getLocalUserId();

		switch ($request['action'] ?? 'password') {
			case 'skip':
				$this->finish($this->l10n->t('Welcome! Next time, choose "Email me a sign-in link" on the sign-in page.'));

			case 'passkey_done':
				if (UdpPasskey::countForUser($uid) > 0) {
					$this->finish($this->l10n->t('Passkey saved. Welcome to your node!'));
				}
				$this->baseUrl->redirect('firstlogin');
		}

		$password = $request['password'] ?? '';
		if ($password === '') {
			$this->formError = $this->l10n->t('Please enter a password.');
			return;
		}

		try {
			$result = User::updatePassword($uid, $password);
		} catch (\Exception $e) {
			$this->formError = $e->getMessage();
			return;
		}

		if (empty($result)) {
			$this->formError = $this->l10n->t('Password could not be saved. Please try again.');
			return;
		}

		$this->finish($this->l10n->t('Password set. Welcome to your node!'));
	}

	protected function content(array $request = []): string
	{
		$this->requireMagicSession();

		$tpl = Renderer::getMarkupTemplate('security/first_login.tpl');
		return Renderer::replaceMacros($tpl, [
			'$sitename'            => DI::config()->get('config', 'sitename'),
			'$intro'               => $this->l10n->t("You're in! How would you like to sign in next time?"),
			'$error'               => $this->formError,
			'$form_security_token' => self::getFormSecurityToken('first_login'),

			// Passkey (shown only when the device has a built-in authenticator)
			'$passkey_title'       => $this->l10n->t('Sign in the way you unlock this device'),
			'$passkey_help'        => $this->l10n->t('Use your face, fingerprint or PIN — nothing to type or remember. Your device will ask to save a passkey for this site.'),
			'$passkey_button'      => $this->l10n->t('Set it up'),
			'$passkey_csrf'        => self::getFormSecurityToken('udp_passkey'),
			'$passkey_options_url' => $this->baseUrl . '/passkey/register-options',
			'$passkey_register_url'=> $this->baseUrl . '/passkey/register',
			'$passkey_name'        => $this->l10n->t('Passkey added %s', date('Y-m-d')),
			'$passkey_js'          => Passkeys::scriptUrl(),
			'$msg_duplicate'       => $this->l10n->t('This device already has a passkey for your account.'),
			'$password_instead'    => $this->l10n->t('Set a password instead'),

			// Password
			'$password_title'      => $this->l10n->t('Choose a password'),
			'$password_rules'      => $this->l10n->t('a–z, A–Z, 0–9 and special characters except spaces. Max 72 characters.'),
			'$password_regexp'     => User::getPasswordRegExp(),
			'$label_password'      => $this->l10n->t('Password'),
			'$label_show'          => $this->l10n->t('Show password'),
			'$label_submit'        => $this->l10n->t('Save password and continue'),

			// Skip
			'$skip_label'          => $this->l10n->t('Skip for now'),
			'$skip_help'           => $this->l10n->t('You can always sign in with a link sent to your email.'),
		]);
	}
}
