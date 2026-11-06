<?php

// UDP Social — event join page: scan QR → enter name+email → magic link sent → account created as admin
// SPDX-FileCopyrightText: 2010-2024 the Friendica project
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace Friendica\Module\Udp;

use Friendica\App\Arguments;
use Friendica\App\BaseURL;
use Friendica\BaseModule;
use Friendica\Core\L10n;
use Friendica\Core\Renderer;
use Friendica\Database\DBA;
use Friendica\DI;
use Friendica\Model\User;
use Friendica\Navigation\SystemMessages;
use Friendica\Util\Profiler;
use Psr\Log\LoggerInterface;

/**
 * Event-scoped self-registration page.
 *
 * GET  /join?t=TOKEN — renders the sign-up form (or "closed" if token missing/expired)
 * POST /join?t=TOKEN — creates account as admin, sends magic link, shows confirmation
 *
 * Configuration keys (set once at deploy time):
 *   udp_join_event.token      — the secret baked into the QR code URL
 *   udp_join_event.expires_at — unix timestamp after which the form closes
 */
class JoinEvent extends BaseModule
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

	protected function post(array $request = []): void
	{
		if (!$this->isOpen($request['t'] ?? '')) {
			return;
		}

		self::checkFormSecurityTokenRedirectOnError('/join', 'udp_join_event');

		$name  = trim($request['username'] ?? '');
		$email = strtolower(trim($request['email'] ?? ''));

		if (!$name || !$email) {
			$this->sysMessages->addNotice($this->l10n->t('Please fill in your name and email address.'));
			return;
		}

		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$this->sysMessages->addNotice($this->l10n->t('That doesn\'t look like a valid email address.'));
			return;
		}

		// Derive a nickname from the local part of the email, keeping only safe chars.
		$nickname = strtolower(preg_replace('/[^a-z0-9_]/', '', preg_replace('/@.*/', '', $email)));
		if (strlen($nickname) < 3) {
			$nickname = 'dad' . substr(md5($email), 0, 6);
		}

		// Ensure uniqueness by appending a counter if needed.
		$base = $nickname;
		$i    = 1;
		while (DBA::exists('user', ['nickname' => $nickname])) {
			$nickname = $base . $i++;
		}

		try {
			$result = User::create([
				'username'       => $name,
				'nickname'       => $nickname,
				'email'          => $email,
				'verified'       => true,
				'ignore_invites' => true,
			]);
		} catch (\Exception $e) {
			$this->sysMessages->addNotice($e->getMessage());
			return;
		}

		$user = $result['user'];

		// Grant admin by appending to the admin_email list.
		$existing = DI::config()->get('config', 'admin_email', '');
		$adminList = array_filter(array_map('trim', explode(',', $existing)));
		if (!in_array($email, $adminList)) {
			$adminList[] = $email;
			DI::config()->set('config', 'admin_email', implode(',', $adminList));
		}

		$sitename = DI::config()->get('config', 'sitename');
		$siteurl  = (string) DI::baseUrl();

		User::sendRegisterOpenEmail(DI::l10n(), $user, $sitename, $siteurl, $result['password']);

		DI::session()->set('udp_join_success', true);
		$this->baseUrl->redirect('join?t=' . urlencode($request['t'] ?? ''));
	}

	protected function content(array $request = []): string
	{
		$token = $request['t'] ?? '';

		if (DI::session()->get('udp_join_success')) {
			DI::session()->remove('udp_join_success');
			return Renderer::replaceMacros(Renderer::getMarkupTemplate('udp/join_event.tpl'), [
				'$state'    => 'success',
				'$sitename' => DI::config()->get('config', 'sitename'),
			]);
		}

		if (!$this->isOpen($token)) {
			return Renderer::replaceMacros(Renderer::getMarkupTemplate('udp/join_event.tpl'), [
				'$state'    => 'closed',
				'$sitename' => DI::config()->get('config', 'sitename'),
			]);
		}

		return Renderer::replaceMacros(Renderer::getMarkupTemplate('udp/join_event.tpl'), [
			'$state'                => 'open',
			'$sitename'             => DI::config()->get('config', 'sitename'),
			'$token'                => $token,
			'$form_security_token'  => self::getFormSecurityToken('udp_join_event'),
		]);
	}

	private function isOpen(string $token): bool
	{
		$expected   = DI::config()->get('udp_join_event', 'token', '');
		$expires_at = (int) DI::config()->get('udp_join_event', 'expires_at', 0);

		return $token && $expected && $token === $expected
			&& ($expires_at === 0 || time() < $expires_at);
	}
}
