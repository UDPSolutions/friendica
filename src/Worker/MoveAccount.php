<?php

// Copyright (C) 2010-2024, the Friendica project
// SPDX-FileCopyrightText: 2010-2024 the Friendica project
//
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace Friendica\Worker;

use Friendica\Core\Worker;
use Friendica\DI;
use Friendica\Model\User;
use Friendica\Protocol\ActivityPub;

/**
 * Broadcasts an AP Move activity to all followers of a user, notifying them
 * that the account has relocated to a new server.
 *
 * Usage: Worker::add(Worker::PRIORITY_HIGH, 'MoveAccount', $uid, $target_url);
 * Or via console: php bin/console.php move-account <uid> <target_url>
 */
class MoveAccount
{
	public static function execute(int $uid, string $target_url): void
	{
		if (empty($uid) || empty($target_url)) {
			DI::logger()->warning('MoveAccount: missing uid or target_url', ['uid' => $uid, 'target' => $target_url]);
			return;
		}

		$owner = User::getOwnerDataById($uid);
		if (empty($owner)) {
			DI::logger()->warning('MoveAccount: user not found', ['uid' => $uid]);
			return;
		}

		// UDP: re-check at send time (the queue may outlive a suspension or a withdrawn claim).
		$refusal = \Friendica\UDP\Federation\AccountMove::sourceRefusal($uid, $target_url);
		if ($refusal !== '') {
			DI::logger()->notice('MoveAccount: refused at send time', ['uid' => $uid, 'target' => $target_url, 'reason' => $refusal]);
			return;
		}

		// Publish movedTo in the actor document before anyone is told.
		\Friendica\UDP\Federation\AccountMove::setLocalMovedTo($uid, $target_url);

		$inboxes = ActivityPub\Transmitter::fetchTargetInboxesforUser($uid);

		DI::logger()->info('MoveAccount: dispatching Move activity', ['uid' => $uid, 'target' => $target_url, 'inboxes' => count($inboxes)]);

		foreach ($inboxes as $inbox => $receivers) {
			Worker::add(
				['priority' => Worker::PRIORITY_HIGH, 'dont_fork' => true],
				'APMoveDelivery',
				$uid,
				$inbox,
				$target_url
			);
		}
	}
}
