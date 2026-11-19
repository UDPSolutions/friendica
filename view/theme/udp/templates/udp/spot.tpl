{{*
  * UDP spotlight runtime — injected into every page's footer for logged-in users (theme.php udp_spot_runtime()).
  * Started by the tour's "Show me where" button (window.udpSpot.start). Follows a multi-hop path across pages:
  *   path = [{spot: [[key, label], …], page?: 'contact'}, …]  (hops in order; candidates in priority order)
  *   key  = a data-udp-spot value (nav.tpl, widget/follow.tpl, jot.tpl) or a CSS selector starting with # or [
  * State {path, at, ret, where, exp} lives in sessionStorage (per tab, 15 min), so it survives page loads;
  * `where` is the page the trail expects next (the tapped link's target), so wandering elsewhere ends it.
  * On each page (and shortly after each tapped hop, for same-page reveals like menus and side panels)
  * it highlights the furthest remaining hop that is visible here. Tapping the target advances the trail;
  * Stop / Esc / tapping the dim area ends it. If no remaining hop is visible on a fresh page, it ends quietly.
  *}}
<div id="udp-spot" class="udp-spot" hidden>
	<div class="udp-spot-mask"></div>
	<div class="udp-spot-ring" aria-hidden="true"></div>
	<div class="udp-spot-callout" role="dialog" aria-live="polite">
		<p class="udp-spot-text"></p>
		<div class="udp-spot-actions">
			<button type="button" class="btn btn-default btn-sm udp-spot-stop">Stop</button>
			<a class="udp-spot-back" href="udp/welcome">Back to the tour</a>
		</div>
	</div>
</div>
<script>
(function () {
	var KEY = 'udp_spot_trail', TTL = 15 * 60 * 1000;
	var box = document.getElementById('udp-spot');
	if (!box) return;
	var mask = box.querySelector('.udp-spot-mask');
	var ring = box.querySelector('.udp-spot-ring');
	var callout = box.querySelector('.udp-spot-callout');
	var textEl = box.querySelector('.udp-spot-text');
	var back = box.querySelector('.udp-spot-back');
	var trail = null, current = null;

	function load() {
		try {
			var t = JSON.parse(sessionStorage.getItem(KEY) || 'null');
			return t && t.exp > Date.now() && Array.isArray(t.path) ? t : null;
		} catch (e) { return null; }
	}
	function save() {
		try { trail ? sessionStorage.setItem(KEY, JSON.stringify(trail)) : sessionStorage.removeItem(KEY); } catch (e) {}
	}
	function norm(p) { return (p || '/').replace(/\/+$/, '') || '/'; }
	function query(key) {
		var sel = /^[#\[]/.test(key) ? key : '[data-udp-spot="' + key + '"]';
		try { return document.querySelectorAll(sel); } catch (e) { return []; }
	}
	// Displayed and horizontally on screen; vertical is fixed by scrolling (e.g. a long side panel).
	function shown(el) {
		if (!el.getClientRects().length) return false;
		var r = el.getBoundingClientRect(), cs = getComputedStyle(el);
		return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && r.right > 0 && r.left < innerWidth;
	}
	function onPage(hop) {
		if (!hop.page) return true;
		var path = location.pathname.replace(/^\/+/, '');
		return path === hop.page || path.indexOf(hop.page + '/') === 0;
	}
	// Furthest hop (from the end back to trail.at) with a visible candidate.
	function find(path, from) {
		for (var i = path.length - 1; i >= from; i--) {
			if (!onPage(path[i])) continue;
			var c = path[i].spot || [];
			for (var k = 0; k < c.length; k++) {
				var els = query(c[k][0]);
				for (var j = 0; j < els.length; j++) {
					if (shown(els[j])) return { hop: i, el: els[j], text: c[k][1] };
				}
			}
		}
		return null;
	}

	function place() {
		if (!current) return;
		var r = current.el.getBoundingClientRect(), pad = 6;
		var x = Math.max(0, r.left - pad), y = Math.max(0, r.top - pad);
		var w = r.width + pad * 2, h = r.height + pad * 2, W = innerWidth, H = innerHeight;
		mask.style.clipPath = 'path(evenodd, "M0 0H' + W + 'V' + H + 'H0Z M' + x + ' ' + y
			+ 'h' + w + 'v' + h + 'h' + (-w) + 'Z")';
		ring.style.cssText = 'left:' + x + 'px;top:' + y + 'px;width:' + w + 'px;height:' + h + 'px';
		var cw = Math.min(290, W - 24);
		callout.style.width = cw + 'px';
		callout.style.left = Math.min(Math.max(12, r.left + r.width / 2 - cw / 2), W - cw - 12) + 'px';
		if (r.top + r.height / 2 < H / 2) {
			callout.style.top = (y + h + 12) + 'px'; callout.style.bottom = '';
		} else {
			callout.style.bottom = (H - y + 12) + 'px'; callout.style.top = '';
		}
	}
	function hide() { box.hidden = true; current = null; }
	function stop() { trail = null; save(); hide(); }

	function onTargetClick(e) {
		if (!current || e.currentTarget !== current.el) return;
		trail.at = current.hop + 1;
		// Where the trail should pick up next: a link's destination, or this page for same-page reveals.
		// Use the browser-resolved .href: Friendica links are relative ("contact") and resolve against
		// <base href="…/">, not the current page, so resolving the raw attribute here would be wrong.
		var raw = current.el.tagName === 'A' ? (current.el.getAttribute('href') || '') : '';
		trail.where = (raw && raw.charAt(0) !== '#') ? norm(new URL(current.el.href).pathname) : norm(location.pathname);
		var done = trail.at >= trail.path.length;
		done ? (trail = null) : (trail.exp = Date.now() + TTL);
		save();
		hide();
		// Same-page reveals (menu sheet, side panel, dropdown) need a moment to open; a navigation
		// simply unloads the page and the next page picks the trail up from sessionStorage.
		if (!done) { setTimeout(function () { show(false); }, 350); setTimeout(function () { if (box.hidden) show(false); }, 900); }
	}

	// fresh = first look on a newly loaded page: nothing to show there means the person wandered off.
	function show(fresh) {
		if (!trail) return false;
		// A fresh page that isn't where the trail was heading means the person went elsewhere: end quietly.
		if (fresh && trail.where && trail.where !== norm(location.pathname)) { stop(); return false; }
		var hit = find(trail.path, trail.at || 0);
		if (!hit) { if (fresh) stop(); return false; }
		current = hit;
		var r = hit.el.getBoundingClientRect();
		if (r.top < 0 || r.bottom > innerHeight) {
			hit.el.scrollIntoView({ block: 'center' });
		}
		textEl.textContent = hit.text;
		back.hidden = !trail.ret;
		if (trail.ret) back.setAttribute('href', trail.ret);
		box.hidden = false;
		place();
		hit.el.removeEventListener('click', onTargetClick, true);
		hit.el.addEventListener('click', onTargetClick, true);
		return true;
	}

	mask.addEventListener('click', stop);
	box.querySelector('.udp-spot-stop').addEventListener('click', stop);
	back.addEventListener('click', function () { trail = null; save(); });
	document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !box.hidden) stop(); });
	addEventListener('resize', function () { if (!box.hidden) { hide(); show(false); } });
	addEventListener('scroll', place, { passive: true });

	window.udpSpot = {
		/** True when some hop of this path can be highlighted on the current page. */
		canShow: function (path) { return !!(Array.isArray(path) && find(path, 0)); },
		/** Start guiding along path; ret = where "Back to the tour" goes. */
		start: function (path, ret) {
			trail = { path: path, at: 0, ret: ret || '', where: norm(location.pathname), exp: Date.now() + TTL };
			save();
			return show(false);
		}
	};

	trail = load();
	if (trail) {
		// Let late layout (fonts, frio JS) settle before measuring.
		if (document.readyState === 'complete') show(true); else addEventListener('load', function () { show(true); });
	}
}());
</script>
