{{*
  * UDP floating help box — injected into the page footer by udp_help_box() in theme.php.
  * Links come from blog.udp.social via UdpHelpFeed (server-side cached). Plan: ~/udp/Help-Box-Plan.md
  * Open/collapsed state is a per-browser convenience (localStorage); hidden/shown is pconfig.
  *}}
<div id="udp-help" class="udp-help">
	<div id="udp-help-panel" class="udp-help-panel panel panel-default" role="dialog" aria-labelledby="udp-help-title" hidden>
		<div class="udp-help-head">
			<strong id="udp-help-title">Help</strong>
			<button type="button" class="udp-help-close" aria-label="Close help">&times;</button>
		</div>
		<ul class="udp-help-links">
			{{foreach $items as $item}}
			<li><a href="{{$item.url}}" target="_blank" rel="noopener">{{$item.title}}</a></li>
			{{foreachelse}}
			<li><a href="{{$help_center_url}}" target="_blank" rel="noopener">Open the user guide</a></li>
			{{/foreach}}
		</ul>
		<p class="udp-help-tour"><a href="udp/welcome"><i class="fa fa-compass" aria-hidden="true"></i> Take the tour</a></p>
		<div class="udp-help-foot">
			<a href="help">More help</a>
			<form method="post" action="help">
				<input type="hidden" name="form_security_token" value="{{$form_security_token}}">
				<input type="hidden" name="return" value="{{$return_path}}">
				<button type="submit" name="action" value="hide" class="udp-help-hide">Hide help button</button>
			</form>
		</div>
	</div>
	<button type="button" id="udp-help-toggle" class="udp-help-toggle" aria-expanded="false" aria-controls="udp-help-panel">
		<i class="fa fa-question-circle" aria-hidden="true"></i><span class="udp-help-label">Help</span>
	</button>
</div>
<script>
(function () {
	var KEY = 'udp_help_open';
	var root = document.getElementById('udp-help');
	if (!root) return;
	var panel = document.getElementById('udp-help-panel');
	var toggle = document.getElementById('udp-help-toggle');
	document.body.classList.add('udp-help-on');

	function setOpen(open, remember) {
		panel.hidden = !open;
		toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
		root.classList.toggle('udp-help-open', open);
		if (remember) { try { localStorage.setItem(KEY, open ? '1' : '0'); } catch (e) {} }
	}

	var saved = null;
	try { saved = localStorage.getItem(KEY); } catch (e) {}
	setOpen(saved === '1', false);

	toggle.addEventListener('click', function () { setOpen(panel.hidden, true); });
	root.querySelector('.udp-help-close').addEventListener('click', function () {
		setOpen(false, true);
		toggle.focus();
	});
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && !panel.hidden) { setOpen(false, true); toggle.focus(); }
	});
	document.addEventListener('click', function (e) {
		if (!panel.hidden && !root.contains(e.target)) setOpen(false, true);
	});
}());
</script>
