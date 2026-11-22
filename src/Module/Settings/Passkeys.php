<?php

// SPDX-FileCopyrightText: 2026 UDP Solutions, LLC
//
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace Friendica\Module\Settings;

use Friendica\App;
use Friendica\Core\L10n;
use Friendica\Core\Renderer;
use Friendica\Core\Session\Capability\IHandleUserSessions;
use Friendica\Module\BaseSettings;
use Friendica\Module\Response;
use Friendica\Module\Security\Login;
use Friendica\Navigation\SystemMessages;
use Friendica\Security\UdpPasskey;
use Friendica\Util\DateTimeFormat;
use Friendica\Util\Profiler;
use Psr\Log\LoggerInterface;

/**
 * Settings → Passkeys: list, add, rename and remove passkeys.
 * Adding happens in JS via /passkey/register-options + /passkey/register.
 */
class Passkeys extends BaseSettings
{
	private SystemMessages $systemMessages;

	public function __construct(SystemMessages $systemMessages, IHandleUserSessions $session, App\Page $page, L10n $l10n, App\BaseURL $baseUrl, App\Arguments $args, LoggerInterface $logger, Profiler $profiler, Response $response, array $server, array $parameters = [])
	{
		parent::__construct($session, $page, $l10n, $baseUrl, $args, $logger, $profiler, $response, $server, $parameters);

		$this->systemMessages = $systemMessages;
	}

	protected function post(array $request = [])
	{
		$uid = $this->session->getLocalUserId();
		if (!$uid) {
			return;
		}

		self::checkFormSecurityTokenRedirectOnError('settings/passkeys', 'settings_passkeys');

		$id = (int)($request['passkey_id'] ?? 0);

		switch ($request['action'] ?? '') {
			case 'rename':
				$name = trim(strip_tags($request['name'] ?? ''));
				if ($id && $name !== '' && UdpPasskey::rename($uid, $id, $name)) {
					$this->systemMessages->addInfo($this->t('Passkey renamed.'));
				}
				break;

			case 'delete':
				if ($id && UdpPasskey::delete($uid, $id)) {
					$this->systemMessages->addInfo($this->t('Passkey removed. It will no longer work for signing in here.'));
				}
				break;
		}

		$this->baseUrl->redirect('settings/passkeys');
	}

	protected function content(array $request = []): string
	{
		$uid = $this->session->getLocalUserId();
		if (!$uid) {
			return Login::form('settings/passkeys');
		}

		parent::content();

		$passkeys = [];
		foreach (UdpPasskey::listForUser($uid) as $row) {
			$passkeys[] = [
				'id'        => $row['id'],
				'name'      => $row['name'],
				'created'   => DateTimeFormat::local($row['created'], 'M j, Y'),
				'last_used' => $row['last_used'] ? DateTimeFormat::local($row['last_used'], 'M j, Y') : $this->t('Never'),
			];
		}

		return Renderer::replaceMacros(Renderer::getMarkupTemplate('settings/passkeys.tpl'), [
			'$title'               => $this->t('Passkeys'),
			'$intro'               => $this->t('A passkey lets you sign in the way you unlock your phone or computer — face, fingerprint or PIN — with nothing to type. Passkeys can\'t be phished or leaked, because they only work on this site.'),
			'$passkeys'            => $passkeys,
			'$none'                => $this->t('You have no passkeys yet.'),
			'$label_name'          => $this->t('Name'),
			'$label_created'       => $this->t('Added'),
			'$label_last_used'     => $this->t('Last used'),
			'$label_rename'        => $this->t('Rename'),
			'$label_delete'        => $this->t('Remove'),
			'$confirm_delete'      => $this->t('Remove this passkey? You will no longer be able to sign in with it.'),
			'$add_title'           => $this->t('Add a passkey'),
			'$add_help'            => $this->t('Give it a name you will recognize, like "My phone" or "Work laptop".'),
			'$name_placeholder'    => $this->t('My phone'),
			'$label_add'           => $this->t('Add a passkey'),
			'$unsupported'         => $this->t('This browser does not support passkeys. Try a recent version of Safari, Chrome, Edge or Firefox.'),
			'$msg_duplicate'       => $this->t('This device already has a passkey for your account.'),
			'$guide_title'         => $this->t('Where should I keep my passkey?'),
			'$guide'               => $this->t('Any passkey works here. Your phone or computer can keep it for you (Apple, Google or Microsoft will sync it to your other devices). If you prefer not to rely on them, a password manager you control (KeePassXC, Bitwarden/Vaultwarden) or a hardware security key (YubiKey, SoloKey) works too.'),
			'$form_security_token' => self::getFormSecurityToken('settings_passkeys'),
			'$passkey_csrf'        => self::getFormSecurityToken('udp_passkey'),
			'$options_url'         => $this->baseUrl . '/passkey/register-options',
			'$register_url'        => $this->baseUrl . '/passkey/register',
			'$passkey_js'          => self::scriptUrl(),
		]);
	}

	/**
	 * Cache-busted URL of view/js/udp-passkey.js.
	 */
	public static function scriptUrl(): string
	{
		$file = 'view/js/udp-passkey.js';
		return $file . '?udp=' . (@filemtime($file) ?: '0');
	}
}
