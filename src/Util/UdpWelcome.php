<?php

// UDP Social — first-run walkthrough + owner welcome post (Cat2 — new file)
//
// The walkthrough (/udp/welcome) is a short server-rendered tour. It auto-launches once, from /timeline,
// for accounts registered in the last AUTO_LAUNCH_DAYS days that haven't finished or skipped it
// (pconfig udp.tour_done). It can be relaunched any time from the help box or /help.
//
// When the node owner (site admin) leaves the tour (finish or skip), they get a one-time "Only me"
// welcome post in their timeline: private, allow_cid = their own self contact, so the Notifier
// finds no recipients and nothing leaves the node (pconfig udp.welcome_post holds its uri-id).

namespace Friendica\Util;

use Friendica\DI;
use Friendica\Model\Item;
use Friendica\Model\Post;
use Friendica\Model\User;

class UdpWelcome
{
	const PCONFIG_CAT       = 'udp';
	const KEY_TOUR_DONE     = 'tour_done';
	const KEY_WELCOME_POST  = 'welcome_post';
	const AUTO_LAUNCH_DAYS  = 14;

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
	 * True when /timeline should send this user to the tour: a recent account that has never
	 * finished or skipped it. Older accounts (everyone already on a node when this shipped)
	 * are never redirected; they can still open it from Help.
	 */
	public static function shouldAutoLaunch(int $uid): bool
	{
		if (!$uid || self::isTourDone($uid)) {
			return false;
		}
		// Delegated / "manage as" sessions belong to someone else's account — don't hijack them.
		if (DI::userSession()->getSubManagedUserId()) {
			return false;
		}
		$user = User::getById($uid, ['register_date']);
		if (empty($user['register_date'])) {
			return false;
		}
		$registered = strtotime($user['register_date'] . ' UTC');
		return $registered !== false && $registered >= time() - self::AUTO_LAUNCH_DAYS * 86400;
	}

	// ── Steps ─────────────────────────────────────────────────────────────────

	/**
	 * The walkthrough. Each step: key, icon (Font Awesome 4 name), title, body (trusted HTML —
	 * dynamic values are escaped here), optional try_url/try_label (a local path to see it for real).
	 * Admin-only steps are spliced in after the welcome step for the node owner.
	 */
	public static function steps(bool $isAdmin): array
	{
		$site  = self::e((string) DI::config()->get('system', 'sitename', 'your community'));
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
				: '<p>' . $site . ' is a small, private social network run by <strong>' . $admin . '</strong> for the people they know.</p>'
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
			],
			[
				'key'       => 'neighbors',
				'icon'      => 'link',
				'title'     => 'Neighboring communities',
				'body'      => '<p>Your sister runs her own community? Your book club has one? You can <strong>pair</strong> with them.</p>'
					. '<p>Paired communities make up your <strong>neighborhood</strong>. Posts marked "Your neighborhood" reach them, and nobody else.</p>',
				'try_url'   => 'admin/node-pair',
				'try_label' => 'See node pairing',
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
			],
			[
				'key'       => 'posting',
				'icon'      => 'pencil',
				'title'     => 'Posting, and who sees it',
				'body'      => '<p>Tap <strong>Post</strong> to write something or share photos. Before you send, you pick who sees it:</p>'
					. '<ul>'
					. '<li><strong>All followers</strong>: people who follow you</li>'
					. '<li><strong>Your neighborhood</strong>: everyone in ' . $site . ' and the communities it\'s paired with</li>'
					. '<li><strong>Lists</strong> or <strong>specific people</strong>: just the ones you pick</li>'
					. '</ul>'
					. '<p>New posts start out private. You widen the audience one post at a time, only when you mean to.</p>',
				'try_url'   => 'compose',
				'try_label' => 'Write a post',
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
			],
			[
				'key'       => 'profile',
				'icon'      => 'user-circle',
				'title'     => 'Make it yours',
				'body'      => '<p>Add a profile photo so people recognize you. A real face (or a favorite dog) makes a big difference.</p>'
					. '<p>Your profile isn\'t on the open web: search engines and strangers can\'t see it. You choose what goes on it.</p>',
				'try_url'   => 'settings/profile/photo',
				'try_label' => 'Add a photo',
			],
			[
				'key'       => 'notifications',
				'icon'      => 'bell',
				'title'     => 'Quiet by default',
				'body'      => '<p>We keep email quiet. You\'ll hear from us when something is meant for you: a direct message, a mention, a comment on your post, or someone asking to connect.</p>'
					. '<p>Everything else waits under <strong>Alerts</strong> until you\'re ready. You can change this under Settings → Account.</p>',
				'try_url'   => 'notification',
				'try_label' => 'See your alerts',
			],
		];

		$help = [
			'key'   => 'help',
			'icon'  => 'question-circle',
			'title' => 'Help is always close',
			'body'  => '<p>See the <strong><i class="fa fa-question-circle" aria-hidden="true"></i> Help</strong> button in the bottom corner? It shows guide articles for whatever page you\'re on.</p>'
				. '<p>You can take this tour again any time from <strong>Menu → Help</strong>.</p>'
				. ($isAdmin
					? '<p>That\'s it. Your first post is waiting in your timeline.</p>'
					: '<p>Questions? Ask <strong>' . $admin . '</strong>. That\'s what neighbors are for.</p>'),
		];

		return array_merge([$welcome], $isAdmin ? $adminSteps : [], $memberSteps, [$help]);
	}

	// ── Owner welcome post ────────────────────────────────────────────────────

	/**
	 * Create the one-time "Only me" welcome post for the node owner. Idempotent (pconfig).
	 * Returns the new item id, or 0 when skipped or failed. Never throws.
	 */
	public static function ensureWelcomePost(int $uid): int
	{
		try {
			if (!$uid || !User::isSiteAdmin($uid)
				|| DI::pConfig()->get($uid, self::PCONFIG_CAT, self::KEY_WELCOME_POST)) {
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
		$site = (string) DI::config()->get('system', 'sitename', 'your community');

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
