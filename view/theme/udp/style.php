<?php
// Output frio's complete CSS (colors, schemes, all frio rules) first.
// Capture it so we can catch the 304 NotModifiedException cleanly.
ob_start();
try {
	require_once 'view/theme/frio/style.php';
} catch (\Friendica\Network\HTTPException\NotModifiedException $e) {
	ob_end_clean();
	throw $e;
}
echo ob_get_clean();

// After require_once frio/style.php, its local vars ($nav_bg, $nav_icon_color, etc.)
// are in our scope. Provide safe fallbacks in case a scheme sets them empty.
$udp_nav_bg         = !empty($nav_bg)         ? $nav_bg         : '#1565c0';
$udp_nav_icon_color = !empty($nav_icon_color) ? $nav_icon_color : '#ffffff';

// Mobile tab strip colors: white bar + nav-colored text on light schemes; mirror
// frio's dark/black #topbar-second treatment (nav_bg bar, link_color text).
$udp_dark_scheme   = isset($scheme) && in_array($scheme, ['dark', 'black'], true);
$udp_tabstrip_bg   = $udp_dark_scheme ? $udp_nav_bg : '#ffffff';
$udp_tabstrip_text = $udp_dark_scheme ? (!empty($link_color) ? $link_color : '#ffffff') : $udp_nav_bg;

// Pre-compute base URL here (before CSS output mode) to avoid DI::baseUrl()
// being called inline inside the template, which fatals if DI isn't fully
// initialized in the theme compilation context.
$udp_base_url = rtrim((string) \Friendica\DI::baseUrl(), '/');
?>

/* ====================================================================
   UDP Mobile Theme — responsive overrides
   Mobile PWA layout at ≤767px; frio desktop layout at ≥768px.
   ==================================================================== */

/* ---- Mobile only: suppress frio's desktop top bars + body offset ---- */
@media (max-width: 767px) {
	#topbar-first,
	#topbar-second,
	#site-location,
	#banner,
	#search-mobile,
	#frio-nav-public {
		display: none !important;
	}

	body {
		padding-top: 48px !important;
		padding-bottom: 70px !important;
	}
}

/* ---- UDP chrome styling (display controlled by breakpoint below) ---- */
#udp-topbar {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 48px;
	background-color: <?= $udp_nav_bg ?>;
	color: <?= $udp_nav_icon_color ?>;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 12px;
	z-index: 1020;
	box-shadow: 0 1px 3px rgba(0,0,0,0.25);
}

#udp-topbar .udp-site-name {
	color: <?= $udp_nav_icon_color ?>;
	font-size: 18px;
	font-weight: 600;
	text-decoration: none;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: calc(100% - 80px);
}

.udp-topbar-btn {
	background: none;
	border: none;
	color: <?= $udp_nav_icon_color ?>;
	font-size: 20px;
	padding: 4px 10px;
	cursor: pointer;
	opacity: 0.85;
	line-height: 1;
}
.udp-topbar-btn:hover, .udp-topbar-btn:active { opacity: 1; }

/* ---- Fixed bottom navigation bar ---- */
#udp-bottom-nav {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 56px;
	background-color: <?= $udp_nav_bg ?>;
	display: flex;
	justify-content: space-around;
	align-items: stretch;
	z-index: 1020;
	border-top: 1px solid rgba(0,0,0,0.15);
	padding-bottom: env(safe-area-inset-bottom, 0);
}

.udp-bottom-nav-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
	color: rgba(255,255,255,0.6);
	text-decoration: none;
	font-size: 10px;
	position: relative;
	background: none;
	border: none;
	padding: 0;
	-webkit-tap-highlight-color: transparent;
	cursor: pointer;
	transition: color 0.12s;
}

.udp-bottom-nav-item:hover,
.udp-bottom-nav-item.active,
.udp-bottom-nav-item:focus {
	color: #ffffff;
	text-decoration: none;
	outline: none;
}

.udp-bottom-nav-item i {
	font-size: 22px;
	margin-bottom: 2px;
	line-height: 1;
}

.udp-nav-label {
	font-size: 10px;
	line-height: 1;
}

/* Badges on bottom nav items */
.udp-bottom-nav-item .badge {
	position: absolute;
	top: 5px;
	left: calc(50% + 5px);
	min-width: 16px;
	height: 16px;
	border-radius: 8px;
	background-color: #e53935;
	color: #fff !important;
	font-size: 9px;
	line-height: 16px;
	padding: 0 3px;
	pointer-events: none;
	font-weight: 700;
}

.udp-bottom-nav-item .badge:empty { display: none; }

/* Compose button — visually prominent center anchor */
.udp-bottom-nav-compose { color: rgba(255,255,255,0.9) !important; }
.udp-bottom-nav-compose i { font-size: 30px !important; }

/* Avatar in Me tab */
.udp-nav-avatar {
	width: 26px;
	height: 26px;
	border-radius: 50%;
	margin-bottom: 2px;
	object-fit: cover;
}

/* ---- Desktop only: hide UDP chrome, let frio nav bars render naturally ---- */
@media (min-width: 768px) {
	#udp-topbar,
	#udp-bottom-nav,
	#udp-search-bar,
	#udp-user-menu,
	#udp-compose-sheet {
		display: none !important;
	}
}

/* ---- Mobile only: compact container ---- */
@media (max-width: 767px) {
	.container { padding-left: 8px; padding-right: 8px; }
}

/* ---- Mobile tab strip (common_tabs.tpl) — replaces #topbar-second tabs ---- */
#udp-tabstrip { display: none; }

@media (max-width: 767px) {
	#udp-tabstrip {
		display: block;
		position: sticky;
		top: 48px;
		z-index: 1010;
		margin: 0 0 8px;
		background: <?= $udp_tabstrip_bg ?>;
		border-bottom: 1px solid rgba(0,0,0,0.12);
		box-shadow: 0 1px 2px rgba(0,0,0,0.06);
	}
	#udp-tabstrip ul {
		position: relative;
		display: flex;
		gap: 4px;
		margin: 0;
		padding: 0 8px;
		list-style: none;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: none;
	}
	#udp-tabstrip ul::-webkit-scrollbar { display: none; }
	#udp-tabstrip li { flex: 0 0 auto; }
	#udp-tabstrip a {
		display: block;
		padding: 10px 10px 8px;
		font-size: 14px;
		white-space: nowrap;
		color: <?= $udp_tabstrip_text ?>;
		border-bottom: 3px solid transparent;
		text-decoration: none;
	}
	#udp-tabstrip li.active a {
		font-weight: 600;
		border-bottom-color: <?= $udp_tabstrip_text ?>;
	}

	/* Slide-out side menu (frio: aside z-index 10, padding-top 100px for its two-row header).
	   Sit above the sticky tab strip (1010) so the menu and its dim overlay cover it, but below
	   #udp-topbar (1020). Closed aside is display:none (jasny .offcanvas), so it can't block taps.
	   Padding matches the single 48px UDP top bar. */
	aside {
		z-index: 1012 !important;
		padding-top: 56px !important;
	}
}

/* ---- Search bar (toggleable below top bar) ---- */
#udp-search-bar {
	position: fixed;
	top: 48px;
	left: 0;
	right: 0;
	background-color: <?= $udp_nav_bg ?>;
	padding: 6px 12px 8px;
	z-index: 1015;
	display: none;
	box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

#udp-search-bar.open { display: block; }

#udp-search-bar form { display: flex; gap: 6px; align-items: center; }

#udp-search-bar input[type="search"] {
	flex: 1;
	height: 36px;
	border-radius: 18px;
	border: none;
	padding: 0 14px;
	font-size: 15px;
	background: rgba(255,255,255,0.18);
	color: <?= $udp_nav_icon_color ?>;
}

#udp-search-bar input[type="search"]::placeholder { color: rgba(255,255,255,0.55); }

#udp-search-bar button {
	background: none;
	border: none;
	color: <?= $udp_nav_icon_color ?>;
	font-size: 18px;
	padding: 0 6px;
	cursor: pointer;
	opacity: 0.85;
}

/* ---- User menu panel (slides up from bottom) ---- */
#udp-user-menu {
	position: fixed;
	inset: 0;
	z-index: 2000;
	display: none;
}

#udp-user-menu.open { display: block; }

.udp-user-menu-backdrop {
	position: absolute;
	inset: 0;
	background: rgba(0,0,0,0.5);
}

.udp-user-menu-panel {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background: #fff;
	border-radius: 16px 16px 0 0;
	max-height: 80vh;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
	padding-bottom: env(safe-area-inset-bottom, 0);
	transform: translateY(100%);
	transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

#udp-user-menu.open .udp-user-menu-panel { transform: translateY(0); }

.udp-user-menu-header {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 16px;
	border-bottom: 1px solid #eee;
}

.udp-menu-avatar {
	width: 48px;
	height: 48px;
	border-radius: 50%;
	object-fit: cover;
	flex-shrink: 0;
}

.udp-user-menu-header > div { flex: 1; min-width: 0; }

.udp-user-menu-header strong { display: block; font-size: 15px; font-weight: 600; }

.udp-menu-remote {
	font-size: 12px;
	color: #888;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.udp-menu-close {
	background: none;
	border: none;
	font-size: 28px;
	color: #999;
	padding: 0 4px;
	cursor: pointer;
	line-height: 1;
	flex-shrink: 0;
}

.udp-menu-list {
	list-style: none;
	padding: 8px 0 16px;
	margin: 0;
}

.udp-menu-list li a {
	display: flex;
	align-items: center;
	gap: 14px;
	padding: 12px 20px;
	color: #222;
	text-decoration: none;
	font-size: 15px;
	min-height: 48px;
}

.udp-menu-list li a i {
	width: 20px;
	text-align: center;
	color: #666;
	font-size: 17px;
}

.udp-menu-list li a:active { background: #f0f0f0; }

.udp-menu-list li.divider {
	border-top: 1px solid #eee;
	margin: 4px 0;
}

/* ---- Compose chooser sheet (slides up from bottom, mobile only) ---- */
#udp-compose-sheet {
	position: fixed;
	inset: 0;
	z-index: 2000;
	display: none;
}

#udp-compose-sheet.open { display: block; }

.udp-compose-sheet-backdrop {
	position: absolute;
	inset: 0;
	background: rgba(0,0,0,0.5);
}

.udp-compose-sheet-panel {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background: #fff;
	border-radius: 16px 16px 0 0;
	padding-bottom: env(safe-area-inset-bottom, 0);
	transform: translateY(100%);
	transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

#udp-compose-sheet.open .udp-compose-sheet-panel { transform: translateY(0); }

.udp-compose-sheet-header {
	padding: 16px 20px 12px;
	font-size: 12px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.07em;
	color: #999;
	border-bottom: 1px solid #eee;
}

.udp-compose-option {
	display: flex;
	align-items: center;
	gap: 16px;
	padding: 14px 20px;
	text-decoration: none;
	color: #222;
	border-bottom: 1px solid #f0f0f0;
}

.udp-compose-option:last-child {
	border-bottom: none;
	padding-bottom: calc(18px + env(safe-area-inset-bottom, 0));
}

.udp-compose-option:active { background: #f5f5f5; }
.udp-compose-option:hover  { text-decoration: none; color: #222; }

.udp-compose-option-icon {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: #f0f0f0;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 17px;
	color: #555;
	flex-shrink: 0;
}

.udp-compose-option-text strong {
	display: block;
	font-size: 15px;
	font-weight: 600;
	line-height: 1.2;
	margin-bottom: 3px;
}

.udp-compose-option-text small {
	font-size: 12px;
	color: #888;
	line-height: 1.35;
}

/* ---- Fix Friendica logo mask: frio CSS uses a relative path that breaks when
   served from view/theme/udp/style.php. Pin to the absolute URL. ---- */
header #banner #logo-img,
.navbar-brand #logo-img {
	-webkit-mask-image: url("<?= $udp_base_url ?>/view/theme/frio/img/friendica-25.png");
}

/* ---- Login page — make the background photo fill the visible area.
   Applies to both /login (mod-login) and / (mod-home, which also renders the
   login form for unauthenticated visitors on non-single-user instances).
   Frio sets background-color:#fff on .login-content-wrapper which hides the
   body background-image in the form column. Clear it here so the semi-
   transparent .login-panel-content is what the eye sees against the photo. ---- */
.mod-home,
.mod-login {
	min-height: 100vh;
	background-image: linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.35)), url("<?= $udp_base_url ?>/view/theme/udp/img/login_bg.jpg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
.mod-home #content > h1 { display: none; }
.mod-home .login-content-wrapper,
.mod-login .login-content-wrapper {
	background-color: transparent;
}
.mod-login #login-head h1,
.mod-login #openid-header,
.mod-login #login-lost-password-link a,
.mod-login #login-extra-links,
.mod-login #new-here {
	color: #ffffff;
	text-shadow: 0 1px 3px rgba(0,0,0,0.6);
}
.mod-login #content #login-form #div_id_remember label {
	color: #ffffff;
	text-shadow: 0 1px 3px rgba(0,0,0,0.6);
}

/* ---- UDP version badge ---- */
.udp-version {
	display: none; /* hidden everywhere by default; enabled below on desktop only */
	font-size: 9px;
	font-weight: 700;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	white-space: nowrap;
	opacity: 0.6;
}

/* In #banner (logged-in): flex the <a> so version sits to the right of the logo */
a.udp-banner-brand {
	display: flex !important;
	align-items: flex-end;
	gap: 5px;
	text-decoration: none;
}
#banner .udp-version {
	display: block;
	color: <?= $udp_nav_icon_color ?>;
	padding-bottom: 3px; /* baseline-align with bottom of 25px logo */
}

/* In navbar-brand (logged-out): #navbrand-container is already flex */
#navbrand-container .udp-version {
	display: block;
	color: <?= $udp_nav_icon_color ?>;
	align-self: flex-end;
	padding-bottom: 1px;
}

/* ---- Login attribution footer ---- */
#udp-login-attribution {
	position: fixed;
	bottom: 6px;
	right: 12px;
	font-size: 10px;
	color: rgba(255,255,255,0.45);
	margin: 0;
	pointer-events: none;
}

/* ---- Mobile only: touch-friendliness + misc ---- */
@media (max-width: 767px) {
	/* Prevent iOS zoom on input focus */
	.jot-text, .profile-jot-text-full, #profile-jot-text,
	textarea, input[type="text"], input[type="email"],
	input[type="password"], input[type="search"], select {
		font-size: 16px !important;
	}

	/* Back to top button — clear of bottom nav */
	#back-to-top { bottom: 70px; }

	/* Post items — edge-to-edge feel */
	.wall-item-container { border-radius: 0; border-left: none; border-right: none; }
	.panel { border-radius: 0; }
	.panel + .panel { margin-top: 4px; }
}

/* ---- Contact card: prevent single-char orphans on long addresses ---- */
aside .vcard .p-addr { word-break: break-all; }

/* ---- Floating help box (theme.php udp_help_box + udp/help_box.tpl) ----
   Bottom-right; frio's back-to-top button moves up to sit above it. */
#udp-help {
	position: fixed;
	right: 20px;
	bottom: 20px;
	z-index: 1030; /* above #udp-bottom-nav (1020), below Bootstrap modals (1050) */
}
.udp-help-toggle {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	height: 40px;
	padding: 0 16px;
	border: none;
	border-radius: 20px;
	background-color: <?= $udp_nav_bg ?>;
	color: <?= $udp_nav_icon_color ?>;
	font-weight: 600;
	box-shadow: 0 2px 8px rgba(0,0,0,0.25);
	cursor: pointer;
}
.udp-help-toggle .fa { font-size: 1.3em; }
.udp-help-toggle:focus-visible { outline: 3px solid <?= $udp_nav_bg ?>; outline-offset: 3px; }
.udp-help-panel {
	position: absolute;
	right: 0;
	bottom: 52px;
	width: 300px;
	max-width: calc(100vw - 24px);
	max-height: 60vh;
	overflow-y: auto;
	margin: 0;
	padding: 12px 14px;
	border-radius: 10px;
	box-shadow: 0 6px 24px rgba(0,0,0,0.25);
}
.udp-help-panel[hidden] { display: none; }
.udp-help-head {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 6px;
}
.udp-help-close {
	background: none;
	border: none;
	font-size: 1.5em;
	line-height: 1;
	padding: 0 4px;
	color: inherit;
	opacity: 0.6;
	cursor: pointer;
}
.udp-help-close:hover { opacity: 1; }
.udp-help-links { list-style: none; margin: 0; padding: 0; }
.udp-help-links li a {
	display: block;
	padding: 8px 2px;
	border-bottom: 1px solid rgba(128,128,128,0.2);
}
.udp-help-links li:last-child a { border-bottom: none; }
/* Two-link items: article title, then "Show me on this server" · "Show me at the blog".
   Used in the floating box and on /help (.udp-help-list). */
.udp-help-links li.udp-help-item-pair {
	padding: 8px 2px;
	border-bottom: 1px solid rgba(128,128,128,0.2);
}
.udp-help-links li.udp-help-item-pair:last-child { border-bottom: none; }
.udp-help-links li.udp-help-item-pair a { display: inline; padding: 0; border: none; }
.udp-help-item-title { display: block; font-weight: 600; margin-bottom: 4px; }
.udp-help-item-links {
	display: flex;
	flex-wrap: wrap;
	gap: 4px 14px;
	font-size: 0.92em;
}
.udp-help-here {
	background: none;
	border: none;
	padding: 0;
	color: <?= !empty($link_color) ? $link_color : '#337ab7' ?>; /* match frio's link colour */
	cursor: pointer;
	text-align: left;
}
.udp-help-here:hover { text-decoration: underline; }
.udp-help-here[hidden] { display: none; }
.udp-help-list li { margin-bottom: 8px; }
.udp-help-foot {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	margin-top: 8px;
	padding-top: 8px;
	border-top: 1px solid rgba(128,128,128,0.2);
	font-size: 0.9em;
}
.udp-help-foot form { margin: 0; }
.udp-help-hide {
	background: none;
	border: none;
	padding: 0;
	color: inherit;
	opacity: 0.7;
	text-decoration: underline;
	cursor: pointer;
}
.udp-help-hide:hover { opacity: 1; }
body.udp-help-on #back-to-top { bottom: 72px; }

@media (max-width: 767px) {
	/* Clear the fixed bottom nav (56px + iOS safe area); icon-only button */
	#udp-help { right: 10px; bottom: calc(66px + env(safe-area-inset-bottom, 0px)); }
	.udp-help-toggle { width: 44px; height: 44px; padding: 0; justify-content: center; border-radius: 50%; }
	.udp-help-toggle .udp-help-label { display: none; }
	.udp-help-panel { bottom: 54px; }
	body.udp-help-on #back-to-top { bottom: calc(120px + env(safe-area-inset-bottom, 0px)); }
}

.udp-help-feedback,
.udp-help-tour { margin: 8px 0 0; font-weight: 600; }

/* ---- First-run walkthrough (/udp/welcome — Module\Udp\Welcome + udp/welcome.tpl) ---- */
.udp-tour { max-width: 560px; margin: 0 auto; }
.udp-tour-top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
	font-size: 0.9em;
	opacity: 0.8;
}
.udp-tour-skip { margin: 0; }
.udp-tour-skip button {
	background: none;
	border: none;
	padding: 4px 0;
	color: inherit;
	text-decoration: underline;
	cursor: pointer;
}
.udp-tour-dots {
	display: flex;
	gap: 6px;
	list-style: none;
	margin: 0 0 18px;
	padding: 0;
}
.udp-tour-dots li { flex: 1; }
.udp-tour-dots a {
	display: block;
	height: 6px;
	border-radius: 3px;
	background: rgba(128,128,128,0.25);
}
.udp-tour-dots li.done a,
.udp-tour-dots li.active a { background: <?= $udp_nav_bg ?>; }
.udp-tour-dots li.done a { opacity: 0.5; }
.udp-tour-card { text-align: left; }
.udp-tour-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 64px;
	height: 64px;
	margin-bottom: 12px;
	border-radius: 50%;
	background: <?= $udp_nav_bg ?>;
	color: <?= $udp_nav_icon_color ?>;
	font-size: 30px;
}
.udp-tour-card h2 { margin: 0 0 12px; font-size: 1.6em; line-height: 1.25; }
.udp-tour-body { font-size: 1.08em; line-height: 1.55; }
.udp-tour-body ul { padding-left: 1.2em; }
.udp-tour-body li { margin-bottom: 4px; }
.udp-tour-tip {
	padding: 10px 12px;
	border-left: 4px solid <?= $udp_nav_bg ?>;
	background: rgba(128,128,128,0.08);
	border-radius: 4px;
}
.udp-tour-try { margin-top: 14px; font-weight: 600; }
.udp-tour-nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	margin-top: 24px;
	padding-top: 16px;
	border-top: 1px solid rgba(128,128,128,0.2);
}
.udp-tour-nav form { margin: 0; }
.udp-tour-nav .btn { min-height: 44px; padding-left: 18px; padding-right: 18px; }
.udp-tour-try { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 16px; }
.udp-spot-show[hidden] { display: none; } /* .btn's display would otherwise beat [hidden] */
.udp-tour-blog { margin-top: 10px; font-weight: 600; }

/* Tour spotlight (udp/welcome.tpl): dim everything except one real nav button.
   z-index above the nav bars (1020), help box (1030) and the mobile menu/compose sheets (2000),
   so a hop inside an open sheet can still be spotlighted. */
.udp-spot[hidden] { display: none; }
.udp-spot-mask {
	position: fixed;
	inset: 0;
	z-index: 2100;
	background: rgba(0,0,0,0.62);
	cursor: pointer;
}
.udp-spot-ring {
	position: fixed;
	z-index: 2101;
	border-radius: 10px;
	box-shadow: 0 0 0 3px #fff, 0 0 0 6px <?= $udp_nav_bg ?>;
	pointer-events: none; /* clicks reach the real button underneath */
	animation: udp-spot-pulse 1.6s ease-in-out infinite;
}
.udp-spot-callout {
	position: fixed;
	box-sizing: border-box; /* JS sets width incl. padding, keeping a 12px screen margin */
	z-index: 2102;
	padding: 12px 14px;
	border-radius: 10px;
	background: #fff;
	color: #222;
	box-shadow: 0 6px 24px rgba(0,0,0,0.35);
	font-size: 1.05em;
	line-height: 1.4;
}
.udp-spot-text { margin: 0 0 10px; }
.udp-spot-there { margin: 0 0 4px; font-weight: 700; color: #1a7f37; }
.udp-spot-actions { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.udp-spot-back[hidden] { display: none; }
@keyframes udp-spot-pulse {
	0%, 100% { box-shadow: 0 0 0 3px #fff, 0 0 0 6px <?= $udp_nav_bg ?>; }
	50%      { box-shadow: 0 0 0 3px #fff, 0 0 0 12px <?= $udp_nav_bg ?>; }
}
@media (prefers-reduced-motion: reduce) {
	.udp-spot-ring { animation: none; }
}

@media print {
	#udp-help { display: none; }
}
