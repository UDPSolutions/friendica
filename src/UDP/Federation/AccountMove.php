<?php

// Copyright (C) 2026 UDP Solutions, LLC
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace Friendica\UDP\Federation;

use Friendica\DI;
use Friendica\Model\User;
use Friendica\Util\HTTPSignature;
use Friendica\Util\JsonLD;
use Friendica\Util\Strings;

/**
 * UDP: the cryptographic handoff for an ActivityPub account Move.
 *
 * A Move is honoured only when the DESTINATION actor claims the source in `alsoKnownAs`
 * (proof the mover controls both accounts) and the SOURCE node is willing to vouch
 * (it signs the Move; it refuses for suspended/removed accounts so a move can't launder
 * moderation). Receivers additionally require the destination's domain to be allowlisted
 * — until per-account move allowances exist, a Move cannot widen a node's federation.
 *
 * Local state lives in pconfig, category 'udp_move':
 *   also_known_as  array of old actor URLs this account claims (set by /user/import)
 *   moved_to       new actor URL once this account has moved away (set when the Move is sent)
 * Both are published in the actor document (Transmitter::getProfile).
 */
class AccountMove
{
	const PCONFIG_CAT = 'udp_move';

	/** @return string[] old actor URLs this local account claims */
	public static function getLocalAliases(int $uid): array
	{
		$aliases = DI::pConfig()->get($uid, self::PCONFIG_CAT, 'also_known_as', []);
		return array_values(array_filter(is_array($aliases) ? $aliases : [$aliases]));
	}

	public static function addLocalAlias(int $uid, string $oldActorUrl): void
	{
		$aliases = self::getLocalAliases($uid);
		if (!in_array($oldActorUrl, $aliases)) {
			$aliases[] = $oldActorUrl;
			DI::pConfig()->set($uid, self::PCONFIG_CAT, 'also_known_as', $aliases);
		}
	}

	public static function getLocalMovedTo(int $uid): string
	{
		return (string) DI::pConfig()->get($uid, self::PCONFIG_CAT, 'moved_to', '');
	}

	public static function setLocalMovedTo(int $uid, string $newActorUrl): void
	{
		DI::pConfig()->set($uid, self::PCONFIG_CAT, 'moved_to', $newActorUrl);
	}

	/**
	 * Does the (remote or local) actor at $newActorUrl list $oldActorUrl in alsoKnownAs?
	 * Always fetches fresh — a cached actor could predate (or outlive) the claim.
	 */
	public static function destinationClaims(string $newActorUrl, string $oldActorUrl): bool
	{
		$actor = HTTPSignature::fetch($newActorUrl);
		if (empty($actor)) {
			DI::logger()->notice('UDP move: destination actor not fetchable', ['new' => $newActorUrl]);
			return false;
		}

		$compacted = JsonLD::compact($actor);
		if (empty($compacted)) {
			return false;
		}

		// The fetched document must BE the destination (no redirect to someone else's actor).
		if (Strings::normaliseLink(JsonLD::fetchElement($compacted, '@id') ?? '') !== Strings::normaliseLink($newActorUrl)) {
			DI::logger()->notice('UDP move: destination id mismatch', ['new' => $newActorUrl, 'id' => JsonLD::fetchElement($compacted, '@id')]);
			return false;
		}

		$aliases = JsonLD::fetchElementArray($compacted, 'as:alsoKnownAs', '@id') ?? [];
		$old     = Strings::normaliseLink($oldActorUrl);
		foreach ($aliases as $alias) {
			if (is_string($alias) && Strings::normaliseLink($alias) === $old) {
				return true;
			}
		}

		DI::logger()->notice('UDP move: destination does not claim source', ['new' => $newActorUrl, 'old' => $oldActorUrl, 'aliases' => $aliases]);
		return false;
	}

	/**
	 * Source-side gate, shared by /udp/move-account, `console move-account` and the worker.
	 *
	 * @return string '' when this node will vouch for the move, otherwise a user-facing reason
	 */
	public static function sourceRefusal(int $uid, string $targetUrl): string
	{
		$user = User::getById($uid, ['blocked', 'account_removed', 'account_expired', 'verified']);
		if (empty($user)) {
			return DI::l10n()->t('Account not found.');
		}
		if ($user['blocked'] || $user['account_removed'] || $user['account_expired'] || !$user['verified']) {
			return DI::l10n()->t('This account cannot be moved while it is suspended or closed. Contact your node admin.');
		}

		$owner = User::getOwnerDataById($uid);
		if (empty($owner['url'])) {
			return DI::l10n()->t('Account not found.');
		}
		if (Strings::normaliseLink($owner['url']) === Strings::normaliseLink($targetUrl)) {
			return DI::l10n()->t('The destination must be a different account.');
		}
		if (!self::destinationClaims($targetUrl, $owner['url'])) {
			return DI::l10n()->t('The account at %s has not confirmed it is yours. Create or import it there first, so it lists %s as its previous address.', $targetUrl, $owner['url']);
		}

		return '';
	}

	/**
	 * Receiver-side gate for an incoming Move from $oldActorUrl to $newActorUrl.
	 *
	 * @return string '' to honour the Move, otherwise the reason it is refused (for the log)
	 */
	public static function receiverRefusal(string $oldActorUrl, string $newActorUrl): string
	{
		if (Strings::normaliseLink($oldActorUrl) === Strings::normaliseLink($newActorUrl)) {
			return 'target is the actor';
		}

		$domain = parse_url($newActorUrl, PHP_URL_HOST) ?: '';
		if (!DI::federationGateway()->isAllowedOutbound($domain)) {
			return 'destination domain not allowlisted';
		}

		if (!self::destinationClaims($newActorUrl, $oldActorUrl)) {
			return 'destination does not list the source in alsoKnownAs';
		}

		return '';
	}
}
