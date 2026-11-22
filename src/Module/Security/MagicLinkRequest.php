<?php

// SPDX-FileCopyrightText: 2026 UDP Solutions, LLC
//
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace Friendica\Module\Security;

use Friendica\App\Arguments;
use Friendica\App\BaseURL;
use Friendica\BaseModule;
use Friendica\Core\L10n;
use Friendica\Core\Renderer;
use Friendica\Core\Session\Capability\IHandleUserSessions;
use Friendica\Database\DBA;
use Friendica\DI;
use Friendica\Module\Response;
use Friendica\Navigation\SystemMessages;
use Friendica\Util\DateTimeFormat;
use Friendica\Util\Profiler;
use Psr\Log\LoggerInterface;

/**
 * /login/email — "Email me a sign-in link".
 *
 * Sends a magic link (MagicLogin) to an existing account. The response is the same
 * whether or not the account exists, so the form can't be used to discover accounts.
 * Requests are limited to one per account every RESEND_INTERVAL.
 */
final class MagicLinkRequest extends BaseModule
{
	const RESEND_INTERVAL = '2 minutes';

	private SystemMessages $sysMessages;
	private IHandleUserSessions $session;

	public function __construct(
		SystemMessages $sysMessages,
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

		$this->sysMessages = $sysMessages;
		$this->session     = $session;
	}

	protected function post(array $request = [])
	{
		if ($this->session->getLocalUserId()) {
			$this->baseUrl->redirect();
		}

		self::checkFormSecurityTokenRedirectOnError('login/email', 'udp_magic_link_request');

		$login = trim($request['login'] ?? '');
		if ($login !== '') {
			$user = DBA::selectFirst(
				'user',
				['uid', 'username', 'nickname', 'email', 'language', 'pwdreset_time'],
				["(`email` = ? OR `nickname` = ?) AND `verified` AND NOT `blocked` AND NOT `account_removed` AND NOT `account_expired` AND `uid` != 0",
				 $login, $login]
			);

			if (DBA::isResult($user) && !empty($user['email'])) {
				$recent = !empty($user['pwdreset_time']) && $user['pwdreset_time'] > DateTimeFormat::utc('now - ' . self::RESEND_INTERVAL);
				if ($recent) {
					$this->logger->info('Sign-in link request throttled', ['uid' => $user['uid']]);
				} else {
					try {
						MagicLogin::sendLoginLink($user);
						$this->logger->info('Sign-in link sent', ['uid' => $user['uid']]);
					} catch (\Throwable $e) {
						$this->logger->warning('Sign-in link email failed', ['uid' => $user['uid'], 'error' => $e->getMessage()]);
					}
				}
			}
		}

		$this->sysMessages->addInfo($this->t('If that account exists, we\'ve emailed it a sign-in link. It may take a minute to arrive — check your spam folder too.'));
		$this->baseUrl->redirect('login');
	}

	protected function content(array $request = []): string
	{
		if ($this->session->getLocalUserId()) {
			$this->baseUrl->redirect();
		}

		$tpl = Renderer::getMarkupTemplate('security/magic_link_request.tpl');
		return Renderer::replaceMacros($tpl, [
			'$sitename'            => DI::config()->get('config', 'sitename'),
			'$title'               => $this->t('Email me a sign-in link'),
			'$intro'               => $this->t('Enter your email address or username. We\'ll email you a link that signs you in — no password needed.'),
			'$label_login'         => $this->t('Email or username'),
			'$label_submit'        => $this->t('Send me a link'),
			'$back'                => $this->t('Back to sign in'),
			'$form_security_token' => self::getFormSecurityToken('udp_magic_link_request'),
		]);
	}
}
