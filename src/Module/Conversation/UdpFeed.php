<?php

// UDP Social customization — unified feed for private family/friends instances
// SPDX-FileCopyrightText: 2010-2024 the Friendica project
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace Friendica\Module\Conversation;

use Friendica\Content\Conversation\Entity\Network as NetworkEntity;
use Friendica\Content\Nav;
use Friendica\Database\DBA;
use Friendica\Model\Item;
use Friendica\Model\Post;

/**
 * UDP Social unified feed — merges the followed-accounts (/network) feed with
 * locally-originated public and unlisted posts so everyone on a private family
 * instance sees everything in one stream.
 *
 * Block/ignore lists are respected: a blocked contact's posts are excluded even
 * if they posted publicly on this server.
 *
 * New file = zero upstream merge conflict risk (no core files patched).
 */
class UdpFeed extends Network
{
	protected function parseRequest(array $request): void
	{
		if (!$this->session->getLocalUserId()) {
			$this->baseUrl->redirect('login');
		}

		parent::parseRequest($request);

		// Channel filters (e.g. "For You") route to getChannelItems() and bypass
		// getItems() entirely — showing nothing on a small network. Reset any
		// persisted channel selection so the unified feed always runs getItems().
		if ($this->channel->isTimeline($this->selectedTab)
			|| $this->userDefinedChannel->isTimeline($this->selectedTab, $this->session->getLocalUserId())
		) {
			$this->selectedTab = NetworkEntity::COMMENTED;
			$this->order       = 'commented';
			$this->session->set('network-tab', NetworkEntity::COMMENTED);
			$this->pConfig->set($this->session->getLocalUserId(), 'network.view', 'selected_tab', NetworkEntity::COMMENTED);
		}
	}

	protected function content(array $request = []): string
	{
		if (!$this->session->getLocalUserId()) {
			$this->baseUrl->redirect('login');
		}

		$o = parent::content($request);

		Nav::setSelected('network');

		return $o;
	}

	protected function getItems(): array
	{
		$uid = $this->session->getLocalUserId();

		// Fetch 2× network items to leave room after deduplication against community items
		$savedLimit         = $this->itemsPerPage;
		$this->itemsPerPage = $savedLimit * 2;
		$networkItems       = parent::getItems();
		$this->itemsPerPage = $savedLimit;

		// Index by uri-id; network items take precedence (they carry the full row from network-thread-view).
		// RSS feeds are excluded from network items automatically via their channel-only flag.
		$merged = [];
		foreach ($networkItems as $item) {
			$merged[$item['uri-id']] = $item;
		}

		// Local-origin posts: PUBLIC (private=0) and UNLISTED (private=2)
		// TODO: circle back to map all database-side `private` values and `post-reason` codes to their UI labels
		//   private=0 (Item::PUBLIC)    → visible to everyone, appears on public timelines
		//   private=2 (Item::UNLISTED)  → Mastodon "unlisted"; federated but not on public timelines
		//   private=1 (Item::PRIVATE)   → followers-only; intentionally excluded here
		$condition = ["`wall` AND `origin` AND `private` IN (?, ?)", Item::PUBLIC, Item::UNLISTED];

		// Respect per-user block and ignore lists so blocked contacts' posts don't sneak in via community
		$condition = DBA::mergeConditions($condition, [
			"NOT `owner-id` IN (SELECT `cid` FROM `user-contact` WHERE `uid` = ? AND (`blocked` OR `ignored`))",
			$uid,
		]);

		// Group Circle posts must not appear on the general feed.
		$condition = DBA::mergeConditions($condition, [
			"`uri-id` NOT IN (SELECT `uri-id` FROM `udp-group-post`)",
		]);

		// Apply the same cursor constraints the network feed uses for pagination.
		// Use 'received' as the sort/cursor field for community items (origin posts
		// don't go through the network-thread-view so 'commented' is unavailable there;
		// 'received' == 'created' == 'commented' for wall-origin posts anyway).
		if (isset($this->maxId)) {
			$condition = DBA::mergeConditions($condition, ["`received` < ?", $this->maxId]);
		}
		if (isset($this->minId)) {
			$condition = DBA::mergeConditions($condition, ["`received` > ?", $this->minId]);
		}

		// post-thread-origin-view exposes 'received', 'created', 'commented' but not
		// 'effective_created'.  For origin posts received==created==commented so we
		// synthesise the missing fields after fetching.
		$params = ['order' => ['received' => true], 'limit' => $savedLimit * 2];
		$result = Post::selectOriginThread(['uri-id', 'received', 'commented', 'created'], $condition, $params);
		while ($row = $this->database->fetch($result)) {
			if (!isset($merged[$row['uri-id']])) {
				// Synthesise effective_created so Network::content()'s pager field lookup
				// never returns null for community-only rows.
				$row['effective_created'] = $row['created'];
				$merged[$row['uri-id']] = $row;
			}
		}
		$this->database->close($result);

		// Unified sort: newest first by received timestamp, preserving uri-id keys.
		uasort($merged, fn($a, $b) => strcmp($b['received'] ?? '', $a['received'] ?? ''));

		// Trim to one page while keeping uri-id as the array key (BoundariesPager uses
		// array_key_first/last to find the first and last item, not numeric offsets).
		return array_slice($merged, 0, $savedLimit, true);
	}
}
