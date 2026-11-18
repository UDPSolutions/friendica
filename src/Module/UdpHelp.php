<?php

// UDP Social — context-aware help page (Cat2 — new file)
//
// GET  /help  user guide (from blog.udp.social via UdpHelpFeed), admin contact, and the
//             show/hide switch for the floating help button.
// POST /help  action=hide|show toggles the floating help button (pconfig udp.help_hidden),
//             then returns to `return` (a local path) or /help.

namespace Friendica\Module;

use Friendica\App;
use Friendica\BaseModule;
use Friendica\Core\Config\Capability\IManageConfigValues;
use Friendica\Core\L10n;
use Friendica\Core\Renderer;
use Friendica\Core\Session\Capability\IHandleUserSessions;
use Friendica\DI;
use Friendica\Model\User;
use Friendica\Util\Profiler;
use Friendica\Util\UdpHelpFeed;
use Psr\Log\LoggerInterface;

class UdpHelp extends BaseModule
{
	const FORM_TOKEN = 'udp_help';

	private IHandleUserSessions $session;
	private IManageConfigValues $config;

	public function __construct(
		IHandleUserSessions $session,
		IManageConfigValues $config,
		L10n $l10n,
		App\BaseURL $baseUrl,
		App\Arguments $args,
		LoggerInterface $logger,
		Profiler $profiler,
		Response $response,
		array $server,
		array $parameters = []
	) {
		parent::__construct($l10n, $baseUrl, $args, $logger, $profiler, $response, $server, $parameters);
		$this->session = $session;
		$this->config  = $config;
	}

	protected function post(array $request = [])
	{
		$uid = $this->session->getLocalUserId();
		if (!$uid) {
			$this->baseUrl->redirect('help');
		}
		self::checkFormSecurityTokenRedirectOnError('/help', self::FORM_TOKEN);

		$action = $request['action'] ?? '';
		if ($action === 'hide') {
			UdpHelpFeed::setHidden($uid, true);
			DI::sysmsg()->addInfo($this->t('Help button hidden. You can bring it back any time from the menu → Help.'));
		} elseif ($action === 'show') {
			UdpHelpFeed::setHidden($uid, false);
			DI::sysmsg()->addInfo($this->t('Help button is back. Look for it in the bottom corner.'));
		}

		$this->baseUrl->redirect(self::safeReturnPath((string) ($request['return'] ?? '')));
	}

	protected function content(array $request = []): string
	{
		$uid     = $this->session->getLocalUserId();
		$isAdmin = $this->session->isSiteAdmin();

		$guide  = [];
		$admins = [];
		foreach (UdpHelpFeed::forAudience($isAdmin) as $item) {
			if ($item['audience'] === 'admin') {
				$admins[] = $item;
			} else {
				$guide[] = $item;
			}
		}

		$vars = [
			'$is_admin'            => $isAdmin,
			'$guide'               => $guide,
			'$admin_guide'         => $admins,
			'$help_center_url'     => UdpHelpFeed::HELP_CENTER_URL,
			'$logged_in'           => (bool) $uid,
			'$box_hidden'          => $uid ? UdpHelpFeed::isHidden($uid) : false,
			'$form_security_token' => self::getFormSecurityToken(self::FORM_TOKEN),
		];

		if (!$isAdmin) {
			// Regular user — resolve the first registered admin (lowest uid wins)
			$adminList = User::getAdminList(['nickname', 'username', 'email']);
			$admin     = $adminList[0] ?? null;
			$vars += [
				'$admin_name'    => $admin['username'] ?? 'your admin',
				'$admin_email'   => $admin['email']    ?? '',
				'$admin_profile' => !empty($admin['nickname']) ? ((string) $this->baseUrl . '/profile/' . $admin['nickname']) : '',
			];
		}

		return Renderer::replaceMacros(Renderer::getMarkupTemplate('udp/help.tpl'), $vars);
	}

	/**
	 * Only same-site relative paths; anything else falls back to /help.
	 */
	public static function safeReturnPath(string $path): string
	{
		$path = ltrim($path, '/');
		if ($path === '' || str_contains($path, '://') || str_starts_with($path, '/') || str_contains($path, '\\')
			|| preg_match('/[\x00-\x1f]/', $path)) {
			return 'help';
		}
		return $path;
	}
}
