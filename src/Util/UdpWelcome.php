<?php

// UDP Social — first-run walkthrough + owner welcome post (Cat2 — new file)
//
// The walkthrough (/udp/welcome) is a short server-rendered tour. It auto-launches once, from /timeline,
// for every account (new or existing) that hasn't finished or skipped it (pconfig udp.tour_done).
// It can be relaunched any time from the help box or /help.
//
// When the node owner (site admin) leaves the tour (finish or skip) and their timeline is still
// near-empty (< NEAR_EMPTY_THREADS threads), they get a one-time "Only me" welcome post: private,
// allow_cid = their own self contact, so the Notifier finds no recipients and nothing leaves the node
// (pconfig udp.welcome_post holds its uri-id). Established owners get no post.

namespace Friendica\Util;

use Friendica\Database\DBA;
use Friendica\DI;
use Friendica\Model\Item;
use Friendica\Model\Post;
use Friendica\Model\User;

class UdpWelcome
{
	const PCONFIG_CAT        = 'udp';
	const KEY_TOUR_DONE      = 'tour_done';
	const KEY_WELCOME_POST   = 'welcome_post';
	const NEAR_EMPTY_THREADS = 5;

	// ── Tour state ────────────────────────────────────────────────────────────

	public static function isTourDone(int $uid): bool
	{
		return (bool) DI::pConfig()->get($uid, self::PCONFIG_CAT, self::KEY_TOUR_DONE, false);
	}

	public static function markTourDone(int $uid): void
	{
		DI::pConfig()->set($uid, self::PCONFIG_CAT, self::KEY_TOUR_DONE, DateTimeFormat::utcNow());
	}

	/**
	 * True when /timeline should send this user to the tour: any account that has never
	 * finished or skipped it, including accounts that existed before the tour shipped.
	 */
	public static function shouldAutoLaunch(int $uid): bool
	{
		if (!$uid || self::isTourDone($uid)) {
			return false;
		}
		// Delegated / "manage as" sessions belong to someone else's account — don't hijack them.
		return !DI::userSession()->getSubManagedUserId();
	}

	/**
	 * True when leaving the tour will create the owner's welcome post: site admin, no welcome post
	 * yet, and a near-empty timeline (fewer than NEAR_EMPTY_THREADS threads of any kind).
	 */
	public static function welcomePostPending(int $uid): bool
	{
		return $uid
			&& User::isSiteAdmin($uid)
			&& !DI::pConfig()->get($uid, self::PCONFIG_CAT, self::KEY_WELCOME_POST)
			&& DBA::count('post-thread-user', ['uid' => $uid]) < self::NEAR_EMPTY_THREADS;
	}

	// ── Steps ─────────────────────────────────────────────────────────────────

	/**
	 * The walkthrough. Each step: key, icon (Font Awesome 4 name), title, body (trusted HTML —
	 * dynamic values are escaped here), optional try_url/try_label (a local path to see it for real),
	 * optional show = trail keys from trails() for the "Show me" buttons (list, or key => button label).
	 * Admin-only steps are spliced in after the welcome step for the node owner.
	 */
	public static function steps(bool $isAdmin, bool $postPending = false): array
	{
		$site  = self::e(self::siteName());
		$Site  = self::e(self::siteName(true)); // sentence start
		$admin = self::e(self::adminName());

		$welcome = [
			'key'   => 'welcome',
			'icon'  => 'home',
			'title' => 'Welcome to ' . $site,
			'body'  => $isAdmin
				? '<p>This is <strong>your</strong> corner of the internet: a small, private social network for the people you choose. '
				. 'You run it; UDP keeps the lights on.</p>'
				. '<p>No ads. No algorithm deciding what you see. Nobody training AI on your family\'s photos.</p>'
				. '<p>This short tour shows you around. It takes about two minutes, and you can skip it any time.</p>'
				: '<p>' . $Site . ' is a small, private social network run by <strong>' . $admin . '</strong> for the people they know.</p>'
				. '<p>No ads. No algorithm deciding what you see. Nobody training AI on your photos.</p>'
				. '<p>This short tour shows you around. It takes about two minutes, and you can skip it any time.</p>',
		];

		$adminSteps = [
			[
				'key'   => 'your-node',
				'icon'  => 'key',
				'title' => 'What you signed up for',
				'body'  => '<p>You have your own community, at its own web address. You decide who gets in. Nobody joins without your say-so.</p>'
					. '<p><strong>UDP handles the rest:</strong> servers, security updates, email delivery, and connections to neighboring communities.</p>'
					. '<p>You don\'t need to be technical. If something looks broken, email <a href="mailto:support@udp.social">support@udp.social</a> and a person will answer.</p>',
			],
			[
				'key'       => 'invite',
				'icon'      => 'envelope-open',
				'title'     => 'Bring your people',
				'body'      => '<p>Your community comes alive when the people you\'d actually call are in it. Start small: three to five people is plenty.</p>'
					. '<p>Send an invitation by email. When members want to invite someone, the request comes to you to approve, so you always know who\'s joining.</p>'
					. '<p class="udp-tour-tip"><i class="fa fa-lightbulb-o" aria-hidden="true"></i> Our experience is that sitting with someone for five minutes beats any invitation email. Help them make their first post.</p>',
				'try_url'   => 'invite',
				'try_label' => 'Invite someone',
				'show'      => ['invite'],
			],
			[
				'key'       => 'neighbors',
				'icon'      => 'link',
				'title'     => 'Neighboring communities',
				'body'      => '<p>Your sister runs her own community? Your book club has one? You can <strong>pair</strong> with them.</p>'
					. '<p>Paired communities make up your <strong>neighborhood</strong>. Posts marked "Your neighborhood" reach them, and nobody else.</p>',
				'try_url'   => 'admin/node-pair',
				'try_label' => 'See node pairing',
				'show'      => ['neighbors'],
			],
		];

		$memberSteps = [
			[
				'key'       => 'timeline',
				'icon'      => 'newspaper-o',
				'title'     => 'Your timeline',
				'body'      => '<p><strong>Home</strong> is your timeline: posts from the people you follow, with the newest conversations on top.</p>'
					. '<p>Nothing is ranked or promoted. You see everything from the people you chose, in order, and nothing from anyone else.</p>',
				'try_url'   => 'timeline',
				'try_label' => 'Open your timeline',
				'show'      => ['timeline'],
			],
			[
				'key'       => 'posting',
				'icon'      => 'pencil',
				'title'     => 'Posting, and who sees it',
				'body'      => '<p>Tap <strong>Post</strong> to write something or share photos. Before you send, you pick who sees it:</p>'
					. '<ul>'
					. '<li><strong>All followers</strong>: people who follow you</li>'
					. '<li><strong>Your neighborhood</strong>: everyone in ' . $site . ' and the communities it\'s paired with</li>'
					. '<li>A <strong>circle</strong> or <strong>specific people</strong>: just the ones you pick</li>'
					. '</ul>'
					. '<p>New posts start out private. You widen the audience one post at a time, only when you mean to.</p>',
				'try_url'   => 'compose',
				'try_label' => 'Write a post',
				'show'      => ['posting'],
			],
			[
				'key'       => 'connecting',
				'icon'      => 'users',
				'title'     => 'Finding your people',
				'body'      => '<p>Everyone here has an address that looks like an email address, like <code>name@' . self::e(DI::baseUrl()->getHost()) . '</code>. '
					. 'Follow someone by searching for their name or pasting their address under <strong>Contacts</strong>.</p>'
					. '<p>Know someone who should be here? Use <strong>Invite</strong>. '
					. ($isAdmin ? 'As the owner, your invitations go straight out.' : $admin . ' approves new members, so the community stays people you know.')
					. '</p>',
				'try_url'   => 'contact',
				'try_label' => 'Go to Contacts',
				'show'      => ['connecting'],
			],
			[
				'key'       => 'circles-groups',
				'icon'      => 'object-group',
				'title'     => 'Circles and Groups',
				'body'      => '<p><strong>Circles</strong> are just for you. Sort the people and sites you follow into circles like '
					. '<em>Family</em>, <em>Neighbors</em> or <em>News</em>. Pick a circle to read only those posts, or to send a post only to them. '
					. 'Nobody can see which circles you\'ve put them in.</p>'
					. '<p><strong>Groups</strong> are shared spaces. Everyone in a group can post to it, and every member sees every post. '
					. 'Think family chat, team, or book club. Start one under <strong>Groups</strong>, then post from the group\'s page, '
					. 'or type <code>#!</code> and the group\'s name in any post.</p>'
					. '<p class="udp-tour-tip"><i class="fa fa-lightbulb-o" aria-hidden="true"></i> Rule of thumb: a circle is <em>your</em> view of people; a group is a room you share with them.</p>',
				'try_url'   => 'udp/group',
				'try_label' => 'See your Groups',
				'show'      => ['circles' => 'Show me Circles', 'groups' => 'Show me Groups'],
			],
			[
				'key'       => 'profile',
				'icon'      => 'user-circle',
				'title'     => 'Make it yours',
				'body'      => '<p>Add a profile photo so people recognize you. A real face (or a favorite dog) makes a big difference.</p>'
					. '<p>Your profile isn\'t on the open web: search engines and strangers can\'t see it. You choose what goes on it.</p>',
				'try_url'   => 'settings/profile/photo',
				'try_label' => 'Add a photo',
				'show'      => ['profile'],
			],
			[
				'key'   => 'home-screen',
				'icon'  => 'mobile',
				'title' => 'Put it on your home screen',
				'body'  => '<p>There\'s no app to download. ' . $Site . ' runs in your phone\'s web browser, and you can give it its own icon:</p>'
					. '<ul>'
					. '<li><strong>iPhone (Safari):</strong> tap <strong>Share</strong> <i class="fa fa-share-square-o" aria-hidden="true"></i>, then <strong>Add to Home Screen</strong>.</li>'
					. '<li><strong>Android (Chrome):</strong> tap the <strong>⋮</strong> menu, then <strong>Add to Home screen</strong> or <strong>Install app</strong>.</li>'
					. '</ul>'
					. '<p>It opens full-screen, just like an app. On a computer right now? Open <strong>' . self::e(DI::baseUrl()->getHost()) . '</strong> on your phone to do this.</p>'
					. '<p class="udp-tour-tip"><i class="fa fa-shield" aria-hidden="true"></i> <strong>Safer than an app.</strong> '
					. 'A home-screen icon can\'t read your contacts or follow your location in the background, has no ad-tracking code tucked inside, '
					. 'and never needs updating. You always get the latest version.</p>',
			],
			[
				'key'       => 'feeds',
				'icon'      => 'rss',
				'title'     => 'Follow your favorite sites',
				'body'      => '<p>Many news sites, blogs and podcasts publish an <strong>RSS feed</strong>. Follow one here and its new articles show up in your timeline, right alongside your people.</p>'
					. '<ol>'
					. '<li>Find the site\'s feed address: look for the <i class="fa fa-rss" aria-hidden="true"></i> RSS icon. Or just try the site\'s main address; that often works too.</li>'
					. '<li>Under <strong>Contacts</strong>, paste it into <strong>Add New Contact</strong> and follow it.</li>'
					. '</ol>'
					. '<p>Feeds only come in. Nothing you post goes back to the site.</p>'
					. '<p class="udp-tour-tip"><i class="fa fa-lightbulb-o" aria-hidden="true"></i> Busy sites post a lot. Put them in their own <strong>circle</strong> (say, "News") so they don\'t crowd out your people.</p>',
				'try_url'   => 'contact',
				'try_label' => 'Add a feed',
				'show'      => ['feeds'],
			],
			[
				'key'       => 'notifications',
				'icon'      => 'bell',
				'title'     => 'Quiet by default',
				'body'      => '<p>We keep email quiet. You\'ll hear from us when something is meant for you: a direct message, a mention, a comment on your post, or someone asking to connect.</p>'
					. '<p>Everything else waits under <strong>Alerts</strong> until you\'re ready. You can change this under Settings → Account.</p>',
				'try_url'   => 'notification',
				'try_label' => 'See your alerts',
				'show'      => ['notifications'],
			],
		];

		$help = [
			'key'   => 'help',
			'icon'  => 'question-circle',
			'title' => 'Help is always close',
			'body'  => '<p>See the <strong><i class="fa fa-question-circle" aria-hidden="true"></i> Help</strong> button in the bottom corner? It shows guide articles for whatever page you\'re on.</p>'
				. '<p>You can take this tour again any time from <strong>Menu → Help</strong>.</p>'
				. ($isAdmin
					? ($postPending ? '<p>That\'s it. Your first post is waiting in your timeline.</p>' : '<p>That\'s it. Questions? <a href="mailto:support@udp.social">support@udp.social</a> reaches a person.</p>')
					: '<p>Questions? Ask <strong>' . $admin . '</strong>. That\'s what neighbors are for.</p>'),
			'show'      => ['help'],
		];

		return array_merge([$welcome], $isAdmin ? $adminSteps : [], $memberSteps, [$help]);
	}

	// ── Spotlight trails ("Show me where" / "Show me on this server") ─────────

	/**
	 * Spotlight trails by topic key. The tour's steps point at these ('show'), and so do help-box
	 * articles: a WordPress article whose "Show-me trail" field holds a key here gets a
	 * "Show me on this server" link next to its blog link.
	 *
	 * path = hops in order: {spot: [[key, label], …] (candidates in priority order), page?: 'contact'}.
	 * key  = a data-udp-spot value or a CSS selector starting with # or [ (runtime: theme udp/spot.tpl).
	 * Every trail ends ON the destination (the field or button you actually use there), and the runtime
	 * tells the person "You're there" on that last hop. Keep it that way: a trail that ends on the
	 * link to a page leaves people on a page with no idea what to do next.
	 * Mobile reveals (Menu ⋮, the » side panel, collapsed widgets) are their own hops; on desktop they
	 * are skipped automatically because the runtime jumps to the furthest hop already visible.
	 */
	public static function trails(bool $isAdmin): array
	{
		$toContacts = [
			['spot' => [['menu', 'Tap Menu ⋮.']]],
			['spot' => [['contacts', 'Open Contacts.'], ['m-contacts', 'Tap Contacts.']]],
			['page' => 'contact', 'spot' => [['sidebar', 'Tap » to open the side panel.']]],
		];

		$trails = [
			'timeline' => [
				['spot' => [['timeline', 'This is Home: your timeline. Newest conversations are on top.']]],
			],
			'posting' => [
				['spot' => [['post', 'Tap Post.'], ['timeline', 'Open Home.']]],
				['spot' => [['compose-option', 'Choose "Compose a post".']]],
				['page' => 'timeline', 'spot' => [['jot', 'Tap here to start a new post.']]],
				['page' => 'compose', 'spot' => [['compose-body', 'Write here. Before you send, pick who sees it.']]],
			],
			'connecting' => array_merge($toContacts, [
				['page' => 'contact', 'spot' => [['follow-url', 'Type a name or paste an address here, then tap Follow.']]],
			]),
			'feeds' => array_merge($toContacts, [
				['page' => 'contact', 'spot' => [['follow-url', 'Paste the feed address here, then tap Follow.']]],
			]),
			'invite' => array_merge($toContacts, [
				['page' => 'contact', 'spot' => [['invite', 'Tap Send an invitation.']]],
				['page' => 'udp/member-invite', 'spot' => [['#contact', 'Type their email address here, then send.']]],
			]),
			'circles' => [
				['spot' => [['menu', 'Tap Menu ⋮.']]],
				['spot' => [['contacts', 'Open Contacts.'], ['m-contacts', 'Tap Contacts.']]],
				['page' => 'contact', 'spot' => [['[class~="flexMenu-viewMore"] > a', 'Open More.']]],
				['page' => 'contact', 'spot' => [['[href="circle"]', 'Open Circles.']]],
				['page' => 'circle', 'spot' => [['sidebar', 'Tap » to open the side panel.']]],
				['page' => 'circle', 'spot' => [['#circle-sidebar-inflated', 'Tap Circles to open the list.']]],
				['page' => 'circle', 'spot' => [['#sidebar-new-circle', 'Tap + to make a new circle, then add people to it.']]],
			],
			'groups' => [
				['spot' => [['menu', 'Tap Menu ⋮.']]],
				['spot' => [['groups', 'Open Groups.'], ['m-groups', 'Tap Groups.']]],
				['page' => 'udp/group', 'spot' => [['group-create', 'Start a group here. Everyone you add can post to it.']]],
			],
			'profile' => [
				['spot' => [['menu', 'Open your menu.']]],
				['spot' => [['#nav-settings-link', 'Open Settings.'], ['m-settings', 'Tap Settings.']]],
				['page' => 'settings', 'spot' => [['sidebar', 'Tap » to open the side panel.']]],
				['page' => 'settings', 'spot' => [['[href="settings/profile"]', 'Open Profile.']]],
				['page' => 'settings/profile', 'spot' => [['#photo-upload .accordion-toggle', 'Tap the profile photo section to open it.']]],
				['page' => 'settings/profile', 'spot' => [['#profile-photo-upload', 'Choose a photo here, then tap Upload.']]],
			],
			'notifications' => [
				['spot' => [['alerts', 'Alerts: everything that\'s waiting for you.']]],
			],
			'help' => [
				['spot' => [['menu', 'Tap Menu ⋮.']]],
				['spot' => [['#nav-help-link', 'Open Help.'], ['m-help', 'Tap Help.']]],
				['page' => 'help', 'spot' => [['help-page', 'This is Help: guides, the tour, and how to reach a person.']]],
			],
		];

		if ($isAdmin) {
			$trails['neighbors'] = array_merge($toContacts, [
				['page' => 'contact', 'spot' => [['node-pair', 'Tap Node pairing.']]],
				['page' => 'admin/node-pair', 'spot' => [['pair-share', 'Make a pairing token here and send it to the other community\'s owner.']]],
			]);
		}

		return $trails;
	}

	/**
	 * A step's "Show me" buttons: [{label, path}], only for trails this viewer has.
	 * 'show' is a list of trail keys (label "Show me where") or key => label.
	 */
	public static function stepButtons(array $step, bool $isAdmin): array
	{
		$trails  = self::trails($isAdmin);
		$buttons = [];
		foreach ($step['show'] ?? [] as $k => $v) {
			[$key, $label] = is_int($k) ? [$v, 'Show me where'] : [$k, $v];
			if (isset($trails[$key])) {
				$buttons[] = ['label' => $label, 'path' => json_encode($trails[$key], JSON_UNESCAPED_UNICODE)];
			}
		}
		return $buttons;
	}

	/**
	 * Blog article for a step: the first help-feed item (visible to this viewer) tagged with one of
	 * the step's trail keys. '' when none is tagged.
	 */
	public static function stepBlogUrl(array $step, bool $isAdmin): string
	{
		$keys = [];
		foreach ($step['show'] ?? [] as $k => $v) {
			$keys[] = is_int($k) ? $v : $k;
		}
		if (!$keys) {
			return '';
		}
		try {
			foreach (UdpHelpFeed::forAudience($isAdmin) as $item) {
				if (in_array($item['topic'] ?? '', $keys, true)) {
					return $item['url'];
				}
			}
		} catch (\Throwable $e) {
			// The blog link is optional; the tour must render without it.
		}
		return '';
	}

	/**
	 * Help-feed items with a ready-to-use trail path ('trail' = JSON, or '' when the item has no
	 * topic or this viewer has no such trail), for the help box and /help.
	 */
	public static function withTrails(array $items, bool $isAdmin): array
	{
		$trails = self::trails($isAdmin);
		foreach ($items as &$item) {
			$topic         = $item['topic'] ?? '';
			$item['trail'] = ($topic !== '' && isset($trails[$topic]))
				? json_encode($trails[$topic], JSON_UNESCAPED_UNICODE) : '';
		}
		return $items;
	}

	// ── Owner welcome post ────────────────────────────────────────────────────

	/**
	 * Create the one-time "Only me" welcome post for the node owner, only while their timeline is
	 * near-empty (see welcomePostPending). Idempotent (pconfig). Returns the new item id, or 0 when
	 * skipped or failed. Never throws.
	 */
	public static function ensureWelcomePost(int $uid): int
	{
		try {
			if (!self::welcomePostPending($uid)) {
				return 0;
			}

			$owner = User::getOwnerDataById($uid);
			if (empty($owner['id'])) {
				return 0;
			}

			$item = [
				'uid'       => $uid,
				'title'     => 'Welcome to your new home on the web',
				'body'      => self::welcomePostBody(),
				// Only me: the owner's own self contact. Notifier excludes self, so there are no recipients.
				'allow_cid' => '<' . (int) $owner['id'] . '>',
				'allow_gid' => '',
				'deny_cid'  => '',
				'deny_gid'  => '',
				'private'   => Item::PRIVATE,
			];
			$item = DI::contentItem()->initializePost($item);
			$item = DI::contentItem()->finalizePost($item, false);

			$id = Item::insert($item);
			if ($id) {
				$post = Post::selectFirst(['uri-id'], ['id' => $id]);
				DI::pConfig()->set($uid, self::PCONFIG_CAT, self::KEY_WELCOME_POST, (int) ($post['uri-id'] ?? $id));
				DI::logger()->info('UDP welcome post created', ['uid' => $uid, 'id' => $id]);
			}
			return (int) $id;
		} catch (\Throwable $e) {
			DI::logger()->warning('UDP welcome post failed', ['uid' => $uid, 'error' => $e->getMessage()]);
			return 0;
		}
	}

	private static function welcomePostBody(): string
	{
		$base = (string) DI::baseUrl();
		$site = self::siteName(true);

		return "[b]This is your first post, and only you can see it.[/b] We put it here so your timeline isn't empty on day one. "
			. "Delete it whenever you like.\n\n"
			. $site . " is yours. Nobody ranks this timeline, nobody sells ads against it, and nobody trains AI on your family's photos. "
			. "You decide who joins.\n\n"
			. "[b]Three things for your first week:[/b]\n"
			. "[list]\n"
			. "[*][url=" . $base . "/settings/profile/photo]Add a profile photo[/url] so people recognize you.\n"
			. "[*][url=" . $base . "/invite]Invite your first few people[/url]. Start with the ones you'd actually call.\n"
			. "[*][url=" . $base . "/compose]Write your first real post[/url]. A photo from this week is perfect.\n"
			. "[/list]\n\n"
			. "Practice here: leave a comment on this post, or star it from its menu. It's private, so nothing you do here reaches anyone else.\n\n"
			. "Stuck? Look for the Help button in the bottom corner, or [url=" . $base . "/udp/welcome]take the tour again[/url].\n\n"
			. "— The UDP team";
	}

	// ── Helpers ───────────────────────────────────────────────────────────────

	/**
	 * The node's name, or "your community" when sitename is unset/empty. The fallback is capitalized
	 * when it starts a sentence; a real sitename is never altered.
	 */
	private static function siteName(bool $sentenceStart = false): string
	{
		// config.sitename is Friendica's canonical key (page titles, emails, web manifest);
		// system.sitename is what deploy_slot.yml sets. Prefer the canonical one.
		$name = trim((string) DI::config()->get('config', 'sitename', ''))
			?: trim((string) DI::config()->get('system', 'sitename', ''));
		if ($name !== '') {
			return $name;
		}
		return $sentenceStart ? 'Your community' : 'your community';
	}

	private static function adminName(): string
	{
		$admins = User::getAdminList(['username']);
		return (string) ($admins[0]['username'] ?? 'your admin');
	}

	private static function e(string $s): string
	{
		return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
	}
}
