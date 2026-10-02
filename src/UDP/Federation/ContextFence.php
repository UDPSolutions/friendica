<?php

namespace Friendica\UDP\Federation;

use Friendica\Database\Database;
use Friendica\Model\Post;

/**
 * Manages per-user context fence rules.
 *
 * A fence rule says: "when I (uid) post/reply, never relay content that
 * involves node_a to node_c, or vice versa." The check is symmetric.
 */
class ContextFence
{
	public function __construct(private Database $dba)
	{
	}

	/**
	 * True if the uid's fence rules say that origin_node and recipient_node
	 * should not exchange content.
	 */
	public function isFenced(int $uid, string $originNode, string $recipientNode): bool
	{
		if (empty($originNode) || empty($recipientNode) || $originNode === $recipientNode) {
			return false;
		}

		return $this->dba->exists('udp_context_fence', [
			'`uid` = ? AND `node_a` IN (?, ?) AND `node_c` IN (?, ?)',
			$uid, $originNode, $recipientNode, $originNode, $recipientNode,
		]);
	}

	/**
	 * Collect distinct author hostnames from all ancestors of a post.
	 * Walks thr-parent-id upward until no further parent is found.
	 * Returns an empty array for root posts (no ancestors).
	 */
	public function getAncestorNodes(int $uriId): array
	{
		$nodes   = [];
		$visited = [];
		$current = $uriId;

		while (true) {
			if (isset($visited[$current])) {
				break;
			}
			$visited[$current] = true;

			$row = Post::selectFirstPost(['thr-parent-id', 'author-link'], ['uri-id' => $current]);
			if (empty($row)) {
				break;
			}

			$host = parse_url($row['author-link'], PHP_URL_HOST) ?? '';
			if (!empty($host)) {
				$nodes[$host] = true;
			}

			$parentId = (int) ($row['thr-parent-id'] ?? 0);
			if ($parentId === 0 || $parentId === $current) {
				break;
			}
			$current = $parentId;
		}

		return array_keys($nodes);
	}

	/**
	 * True if any ancestor node of a post is fenced against the recipient node
	 * for the given user.
	 */
	public function isAncestorFenced(int $uid, int $uriId, string $recipientNode): bool
	{
		foreach ($this->getAncestorNodes($uriId) as $ancestorNode) {
			if ($this->isFenced($uid, $ancestorNode, $recipientNode)) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Add a fence rule for a user.
	 */
	public function add(int $uid, int $contactA, string $nodeA, int $contactC, string $nodeC): bool
	{
		// Normalize order so the UNIQUE index on (uid, contact_a, contact_c) works
		// regardless of which direction the user entered the pair.
		if ($contactA > $contactC) {
			[$contactA, $contactC] = [$contactC, $contactA];
			[$nodeA, $nodeC]       = [$nodeC, $nodeA];
		}

		return $this->dba->insert('udp_context_fence', [
			'uid'       => $uid,
			'contact_a' => $contactA,
			'node_a'    => $nodeA,
			'contact_c' => $contactC,
			'node_c'    => $nodeC,
			'created'   => gmdate('Y-m-d H:i:s'),
		], Database::INSERT_IGNORE);
	}

	/**
	 * Remove a fence rule by its id, asserting ownership.
	 */
	public function remove(int $id, int $uid): bool
	{
		return $this->dba->delete('udp_context_fence', ['id' => $id, 'uid' => $uid]);
	}

	/**
	 * Return all fence rules for a user, joined with contact names for display.
	 */
	public function listForUser(int $uid): array
	{
		$rows = $this->dba->selectToArray('udp_context_fence', ['id', 'contact_a', 'node_a', 'contact_c', 'node_c', 'created'], ['uid' => $uid]);
		return $rows ?: [];
	}
}
