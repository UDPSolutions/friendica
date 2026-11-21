<?php

// UDP Social — "Leave feedback" hand-off to blog.udp.social/feedback (Cat2 — new file)
//
// GET /udp/feedback         Logged-in local users only. Mints a one-time code (cache, 15 min) bound to
//                           the user, then redirects to the feedback page with ?from=nick@host&t=code.
// GET /udp/feedback/verify  Server-to-server, called by WordPress: ?t=code → {"nick": "..."} and the
//                           code is consumed; 404 if unknown/expired/used. No session needed.
//
// Proves "whoever clicked was signed in as nick on this host" without any shared secret: WordPress
// trusts the answer because it fetched it over HTTPS from the host named in `from`.
// Plan: ~/udp/Help-Box-Plan.md (Feedback link section).

namespace Friendica\Module\Udp;

use Friendica\BaseModule;
use Friendica\Core\System;
use Friendica\DI;
use Friendica\Model\User;

class Feedback extends BaseModule
{
	const DEFAULT_URL  = 'https://blog.udp.social/feedback/';
	const CACHE_PREFIX = 'udp_feedback_code:';
	const CODE_TTL     = 900; // seconds — long enough to survive a slow page load, short enough to not linger

	protected function content(array $request = []): string
	{
		if (($this->parameters['action'] ?? '') === 'verify') {
			$this->verify((string) ($request['t'] ?? ''));
		}

		$uid  = DI::userSession()->getLocalUserId();
		$user = $uid ? User::getById($uid, ['nickname']) : false;
		if (empty($user['nickname'])) {
			// Not signed in here: send them to the page anyway, just unverified.
			System::externalRedirect($this->feedbackUrl());
		}

		$code = bin2hex(random_bytes(16));
		DI::cache()->set(self::CACHE_PREFIX . $code, $user['nickname'], self::CODE_TTL);

		$handle = $user['nickname'] . '@' . DI::baseUrl()->getHost();
		$url    = $this->feedbackUrl();
		System::externalRedirect($url . (str_contains($url, '?') ? '&' : '?')
			. http_build_query(['from' => $handle, 't' => $code]));
	}

	/**
	 * @return never
	 */
	private function verify(string $code): void
	{
		if (!preg_match('/^[0-9a-f]{32}$/', $code)) {
			$this->jsonError(404, ['error' => 'unknown']);
		}

		$key  = self::CACHE_PREFIX . $code;
		$nick = DI::cache()->get($key);
		if (!is_string($nick) || $nick === '') {
			$this->jsonError(404, ['error' => 'unknown']);
		}
		DI::cache()->delete($key); // one use only

		$this->jsonExit(['nick' => $nick]);
	}

	private function feedbackUrl(): string
	{
		$url = (string) DI::config()->get('udp', 'feedback_url', self::DEFAULT_URL);
		return str_starts_with($url, 'https://') ? $url : self::DEFAULT_URL;
	}
}
