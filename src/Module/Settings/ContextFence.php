<?php

namespace Friendica\Module\Settings;

use Friendica\App;
use Friendica\Core\L10n;
use Friendica\Core\Renderer;
use Friendica\Core\Session\Capability\IHandleUserSessions;
use Friendica\Database\Database;
use Friendica\DI;
use Friendica\Model\Contact;
use Friendica\Module\BaseSettings;
use Friendica\Module\Response;
use Friendica\Network\HTTPException;
use Friendica\Util\Profiler;
use Psr\Log\LoggerInterface;

class ContextFence extends BaseSettings
{
	public function __construct(
		private Database $dba,
		IHandleUserSessions $session,
		App\Page $page,
		L10n $l10n,
		App\BaseURL $baseUrl,
		App\Arguments $args,
		LoggerInterface $logger,
		Profiler $profiler,
		Response $response,
		array $server,
		array $parameters = []
	) {
		parent::__construct($session, $page, $l10n, $baseUrl, $args, $logger, $profiler, $response, $server, $parameters);
	}

	protected function post(array $request = [])
	{
		$uid = $this->session->getLocalUserId();
		if (!$uid) {
			throw new HTTPException\ForbiddenException($this->t('Permission denied.'));
		}

		self::checkFormSecurityTokenRedirectOnError('/settings/context-fences', 'settings_context_fences');

		$fence = DI::contextFence();

		if (!empty($request['remove_fence'])) {
			$fence->remove((int)$request['remove_fence'], $uid);
			DI::sysmsg()->addInfo($this->t('Context fence removed.'));
			return;
		}

		if (!empty($request['add_fence'])) {
			$handleA = trim($request['contact_a'] ?? '');
			$handleC = trim($request['contact_c'] ?? '');

			if (empty($handleA) || empty($handleC)) {
				DI::sysmsg()->addNotice($this->t('Please provide both contacts.'));
				return;
			}

			$contactA = Contact::getByURLForUser($handleA, $uid, false, ['id', 'url']);
			$contactC = Contact::getByURLForUser($handleC, $uid, false, ['id', 'url']);

			if (empty($contactA['id']) || empty($contactC['id'])) {
				DI::sysmsg()->addNotice($this->t('One or both contacts could not be found in your contact list.'));
				return;
			}

			if ($contactA['id'] === $contactC['id']) {
				DI::sysmsg()->addNotice($this->t('Please provide two different contacts.'));
				return;
			}

			$nodeA = parse_url($contactA['url'], PHP_URL_HOST) ?? '';
			$nodeC = parse_url($contactC['url'], PHP_URL_HOST) ?? '';

			if (empty($nodeA) || empty($nodeC)) {
				DI::sysmsg()->addNotice($this->t('Could not determine home nodes for the given contacts.'));
				return;
			}

			if ($nodeA === $nodeC) {
				DI::sysmsg()->addNotice($this->t('Both contacts are on the same node — no fence needed.'));
				return;
			}

			$fence->add($uid, (int)$contactA['id'], $nodeA, (int)$contactC['id'], $nodeC);
			DI::sysmsg()->addInfo($this->t('Context fence added.'));
		}
	}

	protected function content(array $request = []): string
	{
		parent::content($request);

		$uid = $this->session->getLocalUserId();
		if (!$uid) {
			$this->baseUrl->redirect('login');
		}

		$fence  = DI::contextFence();
		$rows   = $fence->listForUser($uid);
		$entries = [];

		foreach ($rows as $row) {
			$cA = Contact::getById((int)$row['contact_a'], ['name', 'url', 'thumb']);
			$cC = Contact::getById((int)$row['contact_c'], ['name', 'url', 'thumb']);
			$entries[] = [
				'id'      => $row['id'],
				'name_a'  => $cA['name']  ?? $row['node_a'],
				'url_a'   => $cA['url']   ?? '',
				'thumb_a' => $cA['thumb'] ?? '',
				'node_a'  => $row['node_a'],
				'name_c'  => $cC['name']  ?? $row['node_c'],
				'url_c'   => $cC['url']   ?? '',
				'thumb_c' => $cC['thumb'] ?? '',
				'node_c'  => $row['node_c'],
			];
		}

		$tpl = Renderer::getMarkupTemplate('settings/context_fence.tpl');
		return Renderer::replaceMacros($tpl, [
			'$form_security_token' => self::getFormSecurityToken('settings_context_fences'),
			'$baseurl'             => $this->baseUrl->get(),
			'$l10n' => [
				'title'       => $this->t('Context Fences'),
				'intro'       => $this->t('Context fences prevent your replies from bridging content between people who should not see each other\'s posts. When you reply to a post from one fenced node, no activity is delivered to the other fenced node.'),
				'addtitle'    => $this->t('Add a fence'),
				'contact_a'   => [$this->t('Contact A'), '', $this->t('Profile URL or handle (e.g. alice@example.social)')],
				'contact_c'   => [$this->t('Contact C'), '', $this->t('Profile URL or handle (e.g. carol@other.example)')],
				'addsubmit'   => $this->t('Add fence'),
				'listtitle'   => $this->t('Active fences'),
				'node_a_lbl'  => $this->t('Node'),
				'node_c_lbl'  => $this->t('Node'),
				'remove'      => $this->t('Remove'),
				'nofences'    => $this->t('No context fences configured.'),
			],
			'$entries' => $entries,
		]);
	}
}
