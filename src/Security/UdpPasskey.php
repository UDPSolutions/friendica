<?php

// SPDX-FileCopyrightText: 2026 UDP Solutions, LLC
//
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace Friendica\Security;

use Friendica\Database\DBA;
use Friendica\DI;
use Friendica\Util\DateTimeFormat;
use lbuchs\WebAuthn\Binary\ByteBuffer;
use lbuchs\WebAuthn\WebAuthn;

/**
 * UDP passkeys (WebAuthn): storage, challenges and server configuration.
 *
 * Design decisions (see memory: project-passkeys-roadmap):
 * - RP ID = this slot's host ({slug}.udp.social), never the shared parent domain.
 * - attestation "none": any authenticator is welcome (KeePassXC, YubiKey, iCloud, ...),
 *   and nothing device-identifying (AAGUID) is stored.
 * - User verification (PIN / biometric / device unlock) is required, so a passkey login
 *   also satisfies Friendica's TOTP 2FA.
 * - Discoverable credentials ("resident keys") so login works without typing a username.
 */
final class UdpPasskey
{
	const TABLE = 'udp_passkey';

	/** Seconds a ceremony challenge stays valid. */
	const CHALLENGE_TTL = 300;

	/** Seconds the browser may wait for the authenticator. */
	const CEREMONY_TIMEOUT = 120;

	/**
	 * Passkeys are a FUTURE FEATURE (shelved 2026-11-22: registration failed via LastPass
	 * and via Windows→Android hybrid; the browser never reached /passkey/register).
	 * Off unless `console config udp passkeys 1` — the harness K suite turns it on.
	 * When off: no login button, no settings tab, no first-login option, endpoints 404.
	 */
	public static function enabled(): bool
	{
		return (bool)DI::config()->get('udp', 'passkeys', false);
	}

	public static function rpId(): string
	{
		return DI::baseUrl()->getHost();
	}

	/**
	 * Exact origin of this slot, e.g. https://alice.udp.social
	 */
	public static function origin(): string
	{
		$url    = DI::baseUrl();
		$origin = $url->getScheme() . '://' . $url->getHost();
		if ($url->getPort()) {
			$origin .= ':' . $url->getPort();
		}
		return $origin;
	}

	public static function server(): WebAuthn
	{
		$name = (string)(DI::config()->get('config', 'sitename') ?: self::rpId());
		// ['none'] → attestation "none"; true → base64url in JSON (decoded in udp-passkey.js)
		return new WebAuthn($name, self::rpId(), ['none'], true);
	}

	/**
	 * The library's origin check is a suffix match (evilalice.udp.social would pass for
	 * alice.udp.social; the rpIdHash check still blocks it). Belt and braces: exact match.
	 */
	public static function checkOrigin(string $clientDataJSON): bool
	{
		$clientData = json_decode($clientDataJSON);
		return is_object($clientData) && isset($clientData->origin) && $clientData->origin === self::origin();
	}

	public static function b64uDecode(string $value): string
	{
		$value = strtr($value, '-_', '+/');
		$pad   = strlen($value) % 4;
		if ($pad) {
			$value .= str_repeat('=', 4 - $pad);
		}
		$decoded = base64_decode($value, true);
		return $decoded === false ? '' : $decoded;
	}

	public static function b64uEncode(string $binary): string
	{
		return rtrim(strtr(base64_encode($binary), '+/', '-_'), '=');
	}

	/**
	 * Opaque, random WebAuthn user handle for this user (not the uid, not the public guid).
	 *
	 * @return string binary
	 */
	public static function userHandle(int $uid): string
	{
		$stored = DI::pConfig()->get($uid, 'udp_passkey', 'handle');
		if (empty($stored)) {
			$stored = self::b64uEncode(random_bytes(32));
			DI::pConfig()->set($uid, 'udp_passkey', 'handle', $stored);
		}
		return self::b64uDecode($stored);
	}

	// ------------------------------------------------------------------ challenges

	public static function storeChallenge(string $purpose, ByteBuffer $challenge): void
	{
		DI::session()->set('udp_passkey_challenge_' . $purpose, [
			'value'   => $challenge->getHex(),
			'expires' => time() + self::CHALLENGE_TTL,
		]);
	}

	/**
	 * Fetch and discard the pending challenge (single use).
	 *
	 * @return string|null binary challenge, or null when missing/expired
	 */
	public static function takeChallenge(string $purpose): ?string
	{
		$key    = 'udp_passkey_challenge_' . $purpose;
		$stored = DI::session()->get($key);
		DI::session()->remove($key);

		if (!is_array($stored) || empty($stored['value']) || ($stored['expires'] ?? 0) < time()) {
			return null;
		}
		return ByteBuffer::fromHex($stored['value'])->getBinaryString();
	}

	// ------------------------------------------------------------------ storage

	public static function listForUser(int $uid): array
	{
		return DBA::selectToArray(self::TABLE, ['id', 'name', 'created', 'last_used'], ['uid' => $uid], ['order' => ['created']]);
	}

	public static function countForUser(int $uid): int
	{
		return DBA::count(self::TABLE, ['uid' => $uid]);
	}

	/**
	 * @return string[] binary credential IDs
	 */
	public static function credentialIdsForUser(int $uid): array
	{
		$ids = [];
		foreach (DBA::selectToArray(self::TABLE, ['credential_id'], ['uid' => $uid]) as $row) {
			$ids[] = self::b64uDecode($row['credential_id']);
		}
		return $ids;
	}

	public static function findByCredentialId(string $credentialId): ?array
	{
		$row = DBA::selectFirst(self::TABLE, [], ['credential_hash' => hash('sha256', $credentialId)]);
		return DBA::isResult($row) ? $row : null;
	}

	public static function add(int $uid, string $credentialId, string $publicKeyPem, int $signCount, string $name): bool
	{
		return DBA::insert(self::TABLE, [
			'uid'             => $uid,
			'credential_hash' => hash('sha256', $credentialId),
			'credential_id'   => self::b64uEncode($credentialId),
			'public_key'      => $publicKeyPem,
			'sign_count'      => $signCount,
			'name'            => mb_substr($name, 0, 255),
			'created'         => DateTimeFormat::utcNow(),
		]);
	}

	public static function recordUse(int $id, int $signCount): void
	{
		DBA::update(self::TABLE, ['sign_count' => $signCount, 'last_used' => DateTimeFormat::utcNow()], ['id' => $id]);
	}

	public static function rename(int $uid, int $id, string $name): bool
	{
		return DBA::update(self::TABLE, ['name' => mb_substr($name, 0, 255)], ['id' => $id, 'uid' => $uid]);
	}

	public static function delete(int $uid, int $id): bool
	{
		return DBA::delete(self::TABLE, ['id' => $id, 'uid' => $uid]);
	}

	/**
	 * Tell the account owner a passkey was added (a hijacked session could otherwise
	 * plant a persistent login silently).
	 */
	public static function notifyAdded(int $uid, string $name): void
	{
		$user = DBA::selectFirst('user', ['uid', 'username', 'email', 'language'], ['uid' => $uid]);
		if (!DBA::isResult($user) || empty($user['email'])) {
			return;
		}

		$l10n     = DI::l10n()->withLang($user['language'] ?: 'en');
		$sitename = DI::config()->get('config', 'sitename');
		$siteurl  = (string)DI::baseUrl();

		$preamble = $l10n->t('Hi %s,', $user['username']);
		$body     = $l10n->t(
			"A new passkey (\"%1\$s\") was just added to your %2\$s account. You can now sign in with it.\n\nIf this wasn't you, remove it right away at %3\$s/settings/passkeys and change your password.",
			$name,
			$sitename,
			$siteurl
		);

		try {
			$email = DI::emailer()
				->newSystemMail()
				->withMessage($l10n->t('A passkey was added to your %s account', $sitename), $preamble, $body)
				->forUser($user)
				->withRecipient($user['email'])
				->build();
			DI::emailer()->send($email);
		} catch (\Throwable $e) {
			DI::logger()->warning('Passkey added notification failed', ['uid' => $uid, 'error' => $e->getMessage()]);
		}
	}
}
