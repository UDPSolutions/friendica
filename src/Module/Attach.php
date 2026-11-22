<?php

// Copyright (C) 2010-2024, the Friendica project
// SPDX-FileCopyrightText: 2010-2024 the Friendica project
//
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace Friendica\Module;

use Friendica\BaseModule;
use Friendica\Core\System;
use Friendica\DI;
use Friendica\Model\Attach as MAttach;

/**
 * Attach Module
 */
class Attach extends BaseModule
{
	/**
	 * Return to user an attached file given the id
	 */
	protected function rawContent(array $request = [])
	{
		if (empty($this->parameters['item'])) {
			throw new \Friendica\Network\HTTPException\BadRequestException();
		}

		$item_id = intval($this->parameters['item']);

		// Check for existence
		$item = MAttach::exists(['id' => $item_id]);
		if ($item === false) {
			throw new \Friendica\Network\HTTPException\NotFoundException(DI::l10n()->t('Item was not found.'));
		}

		// Now we'll fetch the item, if we have enough permission
		$item = MAttach::getByIdWithPermission($item_id);
		if ($item === false) {
			throw new \Friendica\Network\HTTPException\ForbiddenException(DI::l10n()->t('Permission denied.'));
		}

		$size = (int) $item['filesize'];
		$etag = '"' . md5($item['id'] . '-' . $size . '-' . $item['edited']) . '"';

		// UDP: revalidation is cheap (permission check + one row, no storage read).
		// Short max-age so takedowns aren't outlived by browser caches.
		header_remove('Pragma');
		header_remove('Expires');
		header('Cache-Control: private, max-age=3600');
		header('ETag: ' . $etag);
		header('Accept-Ranges: bytes');

		// Use quotes around the filename to prevent a "multiple Content-Disposition"
		// error in Chrome for filenames with commas in them
		$isInline = str_starts_with($item['filetype'], 'video/') || str_starts_with($item['filetype'], 'audio/');
		header('Content-type: ' . $item['filetype']);
		header('Content-disposition: ' . ($isInline ? 'inline' : 'attachment') . '; filename="' . $item['filename'] . '"');

		if (trim($_SERVER['HTTP_IF_NONE_MATCH'] ?? '') === $etag) {
			http_response_code(304);
			System::exit();
		}

		// UDP: HTTP Range support. Browsers request video in ranges (metadata, seeking,
		// progressive play) and iOS refuses to play without it. Previously every range
		// request got the whole file, pulled in full from storage into PHP memory.
		$range = $this->parseRange($_SERVER['HTTP_RANGE'] ?? '', $size);
		if ($range !== null && !empty($_SERVER['HTTP_IF_RANGE']) && trim($_SERVER['HTTP_IF_RANGE']) !== $etag) {
			$range = null; // file changed since the client's partial copy: send it whole
		}

		if ($range === false) {
			http_response_code(416);
			header('Content-Range: bytes */' . $size);
			System::exit();
		}

		if ($range !== null) {
			[$from, $to] = $range;
			$data = MAttach::getDataRange($item, $from, $to);
			if (is_null($data) || strlen($data) !== $to - $from + 1) {
				$this->logger->notice('Bad ranged data for attachment', ['id' => $item['id'], 'from' => $from, 'to' => $to, 'got' => is_null($data) ? null : strlen($data)]);
				throw new \Friendica\Network\HTTPException\NotFoundException(DI::l10n()->t('Item was not found.'));
			}
			http_response_code(206);
			header('Content-Range: bytes ' . $from . '-' . $to . '/' . $size);
			header('Content-length: ' . strlen($data));
			echo $data;
			System::exit();
		}

		$data = MAttach::getData($item);
		if (is_null($data)) {
			$this->logger->notice('NULL data for attachment with id ' . $item['id']);
			throw new \Friendica\Network\HTTPException\NotFoundException(DI::l10n()->t('Item was not found.'));
		}

		header('Content-length: ' . $item['filesize']);
		echo $data;
		System::exit();
		// NOTREACHED
	}

	/** Largest slice served per range request; clients ask again for the rest. */
	const MAX_RANGE_BYTES = 2 * 1024 * 1024;

	/**
	 * Parse a single-range "Range: bytes=..." header.
	 *
	 * @return array|false|null [from, to] inclusive and capped to MAX_RANGE_BYTES;
	 *                          false if unsatisfiable (416); null to send the whole file
	 */
	private function parseRange(string $header, int $size)
	{
		// Multi-range ("bytes=0-1,5-9") is rare for media; answering with the
		// first range only is allowed and browsers handle it.
		if ($size <= 0 || !preg_match('/^bytes=\s*(\d*)\s*-\s*(\d*)/i', trim($header), $m)) {
			return null;
		}

		if ($m[1] === '' && $m[2] === '') {
			return null;
		}

		if ($m[1] === '') {
			// Suffix range: last N bytes
			$length = (int) $m[2];
			if ($length === 0) {
				return false;
			}
			$from = max(0, $size - $length);
			$to   = $size - 1;
		} else {
			$from = (int) $m[1];
			$to   = $m[2] === '' ? $size - 1 : min((int) $m[2], $size - 1);
			if ($from >= $size || $to < $from) {
				return false;
			}
		}

		// Short reads are allowed (Content-Range says what was sent), and keep one
		// request from pulling a whole 17 MB phone video through a PHP worker.
		$to = min($to, $from + self::MAX_RANGE_BYTES - 1);

		return [$from, $to];
	}
}
