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
use Friendica\Navigation\SystemMessages;
use Friendica\Util\Profiler;
use Psr\Log\LoggerInterface;

/**
 * First-login password setup page.
 *
 * Shown after magic-link login when the user has no password yet.
 * The session flag 'magic_login' gates access — anyone without it
 * is redirected to the home timeline.
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

	protected function post(array $request = []): void
	{
		if (!DI::userSession()->isAuthenticated()) {
			$this->baseUrl->redirect('login');
		}

		if (!DI::session()->get('magic_login')) {
			$this->baseUrl->redirect();
		}

		$password = $request['password'] ?? '';
		$confirm  = $request['confirm']  ?? '';

		if (empty($password)) {
			$this->formError = $this->l10n->t('Please enter a password.');
			return;
		}

		if ($password !== $confirm) {
			$this->formError = $this->l10n->t('Passwords do not match.');
			return;
		}

		try {
			$result = User::updatePassword(DI::userSession()->getLocalUserId(), $password);
		} catch (\Exception $e) {
			$this->formError = $e->getMessage();
			return;
		}

		if (empty($result)) {
			$this->formError = $this->l10n->t('Password could not be saved. Please try again.');
			return;
		}

		DI::session()->remove('magic_login');
		$this->sysMessages->addInfo($this->l10n->t('Password set. Welcome to your node!'));
		$this->baseUrl->redirect();
	}

	protected function content(array $request = []): string
	{
		if (!DI::userSession()->isAuthenticated()) {
			$this->baseUrl->redirect('login');
		}

		if (!DI::session()->get('magic_login')) {
			$this->baseUrl->redirect();
		}

		$sitename = DI::config()->get('config', 'sitename');

		$tpl = Renderer::getMarkupTemplate('security/first_login.tpl');
		return Renderer::replaceMacros($tpl, [
			'$sitename'            => $sitename,
			'$intro'               => $this->l10n->t("You're in. Set a password to secure your account — you can always change it later from Settings."),
			'$error'               => $this->formError,
			'$form_security_token' => self::getFormSecurityToken('first_login'),
			'$password_rules'      => $this->l10n->t('a–z, A–Z, 0–9 and special characters except spaces. Max 72 characters.'),
			'$password_regexp'     => User::getPasswordRegExp(),
			'$label_password'      => $this->l10n->t('Choose a password'),
			'$label_confirm'       => $this->l10n->t('Confirm password'),
			'$label_submit'        => $this->l10n->t('Set password and continue'),
		]);
	}
}
