<?php

// UDP Social — help box feed (Cat2 — new file)
//
// Fetches the user-guide link list from blog.udp.social (GET /wp-json/udp/v1/help,
// served by wordpress-customizations/wp-content/mu-plugins/udp-help-feed.php),
// server-side, so users' browsers never contact udp.social. Plan: ~/udp/Help-Box-Plan.md
//
// Caching:
//   udp_help_feed            fresh copy, 1 day
//   udp_help_feed_fail       set for 15 min after a failed fetch, so a blog outage
//                            costs one slow page load per 15 min, not every page
//   udp_help_feed_last_good  (key-value store, no expiry) served while the blog is down

namespace Friendica\Util;

use Friendica\Core\Cache\Enum\Duration;
use Friendica\DI;
use Friendica\Network\HTTPClient\Client\HttpClientAccept;
use Friendica\Network\HTTPClient\Client\HttpClientOptions;
use Friendica\Network\HTTPClient\Client\HttpClientRequest;

class UdpHelpFeed
{
	const DEFAULT_FEED_URL = 'https://blog.udp.social/wp-json/udp/v1/help';
	const HELP_CENTER_URL  = 'https://blog.udp.social/user-guide/';

	const CACHE_KEY     = 'udp_help_feed';
	const FAIL_KEY      = 'udp_help_feed_fail';
	const LAST_GOOD_KEY = 'udp_help_feed_last_good';

	const PCONFIG_CAT = 'udp';
	const PCONFIG_KEY = 'help_hidden';

	/**
	 * Friendica module (first path segment) → help page key.
	 * Page keys are what gets typed into "Show on pages" in the WordPress editor.
	 */
	const PAGE_KEYS = [
		'timeline'      => 'network',
		'network'       => 'network',
		'feed'          => 'network',
		'community'     => 'network',
		'channel'       => 'network',
		'display'       => 'network',
		'compose'       => 'compose',
		'contact'       => 'contact',
		'directory'     => 'contact',
		'search'        => 'contact',
		'suggestions'   => 'contact',
		'follow'        => 'contact',
		'invite'        => 'contact',
		'profile'       => 'profile',
		'photos'        => 'photos',
		'media'         => 'photos',
		'settings'      => 'settings',
		'notifications' => 'notifications',
		'notify'        => 'notifications',
		'calendar'      => 'calendar',
		'events'        => 'calendar',
		'message'       => 'messages',
		'circle'        => 'circles',
		'admin'         => 'admin',
		'moderation'    => 'admin',
	];

	/**
	 * All published help items (any audience), sorted as WordPress returned them.
	 *
	 * topic = a spotlight trail key (UdpWelcome::trails()), or '' — WordPress field "Show-me trail".
	 *
	 * @return array<int, array{title: string, url: string, pages: string[], order: int, audience: string, topic: string}>
	 */
	public static function items(): array
	{
		$cached = DI::cache()->get(self::CACHE_KEY);
		if (is_array($cached)) {
			return $cached;
		}
		if (DI::cache()->get(self::FAIL_KEY)) {
			return self::lastGood();
		}

		$items = self::fetch();
		if ($items === null) {
			DI::cache()->set(self::FAIL_KEY, 1, Duration::QUARTER_HOUR);
			return self::lastGood();
		}

		DI::cache()->set(self::CACHE_KEY, $items, Duration::DAY);
		DI::keyValue()->set(self::LAST_GOOD_KEY, $items);
		return $items;
	}

	/**
	 * Items for the floating box: this page's articles first, then general ones.
	 */
	public static function forPage(string $pageKey, bool $isAdmin, int $limit = 6): array
	{
		$matching = [];
		$general  = [];
		foreach (self::forAudience($isAdmin) as $item) {
			if ($pageKey !== '' && in_array($pageKey, $item['pages'], true)) {
				$matching[] = $item;
			} elseif (empty($item['pages'])) {
				$general[] = $item;
			}
		}
		return array_slice(array_merge($matching, $general), 0, $limit);
	}

	/**
	 * Every item this viewer may see (admin items only for node admins).
	 */
	public static function forAudience(bool $isAdmin): array
	{
		return array_values(array_filter(
			self::items(),
			fn(array $i): bool => $i['audience'] !== 'admin' || $isAdmin
		));
	}

	/**
	 * Help page key for the current request ('' when no mapping).
	 */
	public static function currentPageKey(): string
	{
		$argv   = DI::args()->getArgv();
		$module = DI::args()->getModuleName();
		if ($module === 'udp' && ($argv[1] ?? '') === 'group') {
			return 'groups';
		}
		return self::PAGE_KEYS[$module] ?? '';
	}

	public static function isHidden(int $uid): bool
	{
		return (bool) DI::pConfig()->get($uid, self::PCONFIG_CAT, self::PCONFIG_KEY, false);
	}

	public static function setHidden(int $uid, bool $hidden): void
	{
		if ($hidden) {
			DI::pConfig()->set($uid, self::PCONFIG_CAT, self::PCONFIG_KEY, true);
		} else {
			DI::pConfig()->delete($uid, self::PCONFIG_CAT, self::PCONFIG_KEY);
		}
	}

	private static function lastGood(): array
	{
		$items = DI::keyValue()->get(self::LAST_GOOD_KEY);
		return is_array($items) ? $items : [];
	}

	/**
	 * @return array|null null on any failure (network, HTTP status, bad JSON)
	 */
	private static function fetch(): ?array
	{
		$url = (string) DI::config()->get('udp', 'help_feed_url', self::DEFAULT_FEED_URL);
		try {
			$res = DI::httpClient()->get($url, HttpClientAccept::JSON, [
				HttpClientOptions::TIMEOUT => 4,
				HttpClientOptions::REQUEST => HttpClientRequest::SITEINFO,
			]);
		} catch (\Throwable $e) {
			DI::logger()->notice('UDP help feed fetch failed', ['url' => $url, 'error' => $e->getMessage()]);
			return null;
		}
		if (!$res->isSuccess()) {
			DI::logger()->notice('UDP help feed fetch failed', ['url' => $url, 'code' => $res->getReturnCode()]);
			return null;
		}

		$data = json_decode((string) $res->getBodyString(), true);
		if (!is_array($data)) {
			DI::logger()->notice('UDP help feed returned non-JSON', ['url' => $url]);
			return null;
		}

		$items = [];
		foreach ($data as $row) {
			$item = self::sanitize($row);
			if ($item !== null) {
				$items[] = $item;
			}
		}
		return $items;
	}

	/**
	 * Accept only well-formed rows with an http(s) URL — the feed is remote data.
	 */
	private static function sanitize($row): ?array
	{
		if (!is_array($row)) {
			return null;
		}
		$title = trim((string) ($row['title'] ?? ''));
		$url   = trim((string) ($row['url'] ?? ''));
		$scheme = strtolower((string) parse_url($url, PHP_URL_SCHEME));
		if ($title === '' || !in_array($scheme, ['https', 'http'], true)) {
			return null;
		}
		$pages = array_values(array_filter(array_map(
			fn($p) => preg_replace('/[^a-z0-9_-]/', '', strtolower((string) $p)),
			is_array($row['pages'] ?? null) ? $row['pages'] : []
		), 'strlen'));

		return [
			'title'    => mb_substr($title, 0, 120),
			'url'      => $url,
			'pages'    => $pages,
			'order'    => (int) ($row['order'] ?? 0),
			'audience' => ($row['audience'] ?? 'user') === 'admin' ? 'admin' : 'user',
			'topic'    => preg_replace('/[^a-z0-9_-]/', '', strtolower((string) ($row['topic'] ?? ''))),
		];
	}
}
