<?php

// UDP Social — Node health metrics for the local node admin.
// SPDX-FileCopyrightText: 2010-2024 the Friendica project
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace Friendica\Module\Admin;

use Friendica\Core\Renderer;
use Friendica\Database\DBA;
use Friendica\DI;
use Friendica\Module\BaseAdmin;

/**
 * Admin page showing local-disk usage, queue depth, and R2 storage for this slot.
 *
 * Route: GET /admin/node-metrics
 *
 * Data sources:
 *   - Queue depth:    udp_node_metrics (scraped by global_worker every 10 min)
 *   - Local disk:     udp_node_metrics
 *   - R2 usage:       udp_storage_usage (incremental accounting from S3Client)
 */
class NodeMetrics extends BaseAdmin
{
	protected function content(array $request = []): string
	{
		parent::content();

		$slot_domain = DI::baseUrl()->getHost();

		// ── Latest snapshot ──────────────────────────────────────────────────
		$latest = DBA::selectFirst(
			'udp_node_metrics',
			[],
			['slot_domain' => $slot_domain, 'bin_size' => '10min'],
			['order' => ['collected_at' => true]]
		);

		// ── R2 usage ─────────────────────────────────────────────────────────
		$r2_row = DBA::selectFirst('udp_storage_usage', ['r2_bytes', 'updated_at'], ['slot_domain' => $slot_domain]);
		$r2_bytes  = $r2_row ? (int) $r2_row['r2_bytes']  : 0;
		$r2_updated = $r2_row ? $r2_row['updated_at'] : null;

		// ── 30-day history (one row per bin) ────────────────────────────────
		$since = date('Y-m-d H:i:s', strtotime('-30 days'));
		$raw_history = DBA::selectToArray(
			'udp_node_metrics',
			['collected_at', 'bin_size', 'queue_depth', 'disk_local_used'],
			["`slot_domain` = ? AND `collected_at` >= ?", $slot_domain, $since],
			['order' => ['collected_at' => false]]
		);
		$history = array_map(function ($row) {
			$row['disk_local_used_fmt'] = self::fmtBytes((int) $row['disk_local_used']);
			return $row;
		}, $raw_history);

		// ── R2 quota (100 GB hard-coded per slot) ────────────────────────────
		$r2_quota_bytes = 100 * 1024 * 1024 * 1024;

		return Renderer::replaceMacros(Renderer::getMarkupTemplate('admin/node_metrics.tpl'), [
			'$title'             => DI::l10n()->t('Administration'),
			'$page'              => DI::l10n()->t('Node Metrics'),
			'$slot_domain'       => $slot_domain,
			'$latest'            => $latest,
			'$history'           => $history,
			'$r2_bytes'          => $r2_bytes,
			'$r2_bytes_fmt'      => self::fmtBytes($r2_bytes),
			'$r2_quota_bytes'    => $r2_quota_bytes,
			'$r2_quota_fmt'      => self::fmtBytes($r2_quota_bytes),
			'$r2_pct'            => $r2_quota_bytes > 0 ? round($r2_bytes / $r2_quota_bytes * 100, 1) : 0,
			'$r2_updated'        => $r2_updated,
			'$disk_used_fmt'     => $latest ? self::fmtBytes((int) $latest['disk_local_used'])  : '—',
			'$disk_quota_fmt'    => $latest ? self::fmtBytes((int) $latest['disk_local_quota']) : '—',
			'$disk_pct'          => $latest && $latest['disk_local_quota'] > 0
				? round($latest['disk_local_used'] / $latest['disk_local_quota'] * 100, 1)
				: 0,
			'$queue_depth'       => $latest ? (int) $latest['queue_depth'] : '—',
			'$last_post_at'      => $latest ? $latest['last_post_at'] : null,
			'$collected_at'      => $latest ? $latest['collected_at'] : null,
			'$baseurl'           => (string) DI::baseUrl(),
		]);
	}

	private static function fmtBytes(int $bytes): string
	{
		if ($bytes >= 1024 ** 3) {
			return round($bytes / 1024 ** 3, 2) . ' GB';
		}
		if ($bytes >= 1024 ** 2) {
			return round($bytes / 1024 ** 2, 1) . ' MB';
		}
		if ($bytes >= 1024) {
			return round($bytes / 1024, 1) . ' KB';
		}
		return $bytes . ' B';
	}
}
