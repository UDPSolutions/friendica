<?php

// UDP Social — first-run walkthrough (Cat2 — new file)
//
// GET  /udp/welcome[?step=N]  one step of the tour (steps from UdpWelcome::steps()).
// POST /udp/welcome           action=finish|skip → marks the tour done, creates the owner's
//                             "Only me" welcome post (site admin only, once), goes to /timeline.
//
// Server-rendered on purpose: works without JS, on any phone, and Back/Next are plain links.

namespace Friendica\Module\Udp;

use Friendica\BaseModule;
use Friendica\Core\Renderer;
use Friendica\DI;
use Friendica\Util\UdpWelcome;

class Welcome extends BaseModule
{
	const FORM_TOKEN = 'udp_welcome';

	protected function post(array $request = []): void
	{
		$uid = DI::userSession()->getLocalUserId();
		if (!$uid) {
			DI::baseUrl()->redirect('login');
		}
		self::checkFormSecurityTokenRedirectOnError('/udp/welcome', self::FORM_TOKEN);

		$action = $request['action'] ?? '';
		if ($action === 'finish' || $action === 'skip') {
			UdpWelcome::markTourDone($uid);
			// Delegated sessions act on someone else's account — don't post into it.
			if (!DI::userSession()->getSubManagedUserId()) {
				UdpWelcome::ensureWelcomePost($uid);
			}
		}

		DI::baseUrl()->redirect('timeline');
	}

	protected function content(array $request = []): string
	{
		$uid = DI::userSession()->getLocalUserId();
		if (!$uid) {
			DI::baseUrl()->redirect('login');
		}

		$isAdmin = DI::userSession()->isSiteAdmin();
		$steps   = UdpWelcome::steps($isAdmin);
		$count   = count($steps);
		$index   = max(0, min($count - 1, (int) ($request['step'] ?? 0)));
		$step    = $steps[$index];

		DI::page()['title'] = strip_tags($step['title']);

		return Renderer::replaceMacros(Renderer::getMarkupTemplate('udp/welcome.tpl'), [
			'$step'                => $step,
			'$index'               => $index,
			'$number'              => $index + 1,
			'$count'               => $count,
			'$dots'                => array_keys($steps),
			'$prev'                => $index > 0 ? $index - 1 : null,
			'$next'                => $index < $count - 1 ? $index + 1 : null,
			'$is_last'             => $index === $count - 1,
			'$form_security_token' => self::getFormSecurityToken(self::FORM_TOKEN),
		]);
	}
}
