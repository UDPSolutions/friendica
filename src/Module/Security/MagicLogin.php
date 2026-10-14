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
use Friendica\Database\DBA;
use Friendica\Navigation\SystemMessages;
use Friendica\Security\Authentication;
use Friendica\Util\DateTimeFormat;
use Friendica\Util\Profiler;
use Psr\Log\LoggerInterface;

/**
 * Magic-link login module.
 *
 * Handles one-click login from the welcome email sent to new accounts.
 * The token is stored in the pwdreset/pwdreset_time columns (same as LostPass)
 * and is cleared on first use or on password change.
 */
final class MagicLogin extends BaseModule
{
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

	protected function content(array $request = []): string
	{
		$token = $this->parameters['token'] ?? '';
		if (!$token) {
			$this->baseUrl->redirect('login');
		}

		$user = DBA::selectFirst(
			'user',
			['uid', 'username', 'nickname', 'email', 'theme', 'password', 'prvkey',
			 'timezone', 'register_date', 'login_date', 'page-flags', 'pwdreset_time', 'language'],
			['pwdreset' => hash('sha256', $token), 'verified' => true, 'blocked' => false,
			 'account_removed' => false, 'account_expired' => false]
		);

		if (!DBA::isResult($user)) {
			$this->sysMessages->addNotice($this->l10n->t('Login link is invalid or has already been used.'));
			$this->baseUrl->redirect('login');
		}

		if ($user['pwdreset_time'] < DateTimeFormat::utc('now - 1 hour')) {
			DBA::update('user', ['pwdreset' => null, 'pwdreset_time' => null], ['uid' => $user['uid']]);
			$this->sysMessages->addNotice($this->l10n->t('Login link has expired. Please use the forgot password form to request a new one.'));
			$this->baseUrl->redirect('lostpass');
		}

		// Clear the token — it is single-use
		DBA::update('user', ['pwdreset' => null, 'pwdreset_time' => null], ['uid' => $user['uid']]);

		$isFirstLogin = ($user['login_date'] <= DBA::NULL_DATETIME);

		// setForUser handles 2FA redirect and the "new member" welcome redirect internally.
		// We only add the password nudge for first-time logins where no redirect fires from 2FA.
		$this->auth->setForUser($user, true, true);

		if ($isFirstLogin) {
			$this->sysMessages->addInfo($this->l10n->t('Welcome! Set a password below — and consider enabling two-factor authentication for extra security.'));
			$this->baseUrl->redirect('settings/account');
		}

		$this->baseUrl->redirect();
	}
}
