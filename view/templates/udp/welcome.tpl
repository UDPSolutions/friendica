{{*
  * UDP first-run walkthrough — one step per page. Module: src/Module/Udp/Welcome.php;
  * steps + copy: src/Util/UdpWelcome.php::steps(). $step.body is trusted HTML built there.
  *}}
<div class="generic-page-wrapper udp-tour">
	<div class="udp-tour-top">
		<span class="udp-tour-count">Step {{$number}} of {{$count}}</span>
		{{if !$is_last}}
		<form method="post" action="udp/welcome" class="udp-tour-skip">
			<input type="hidden" name="form_security_token" value="{{$form_security_token}}">
			<button type="submit" name="action" value="skip">Skip tour</button>
		</form>
		{{/if}}
	</div>

	<ol class="udp-tour-dots" aria-label="Tour progress">
		{{foreach $dots as $i}}
		<li{{if $i == $index}} class="active" aria-current="step"{{elseif $i < $index}} class="done"{{/if}}><a href="udp/welcome?step={{$i}}"><span class="sr-only">Step {{$i+1}}</span></a></li>
		{{/foreach}}
	</ol>

	<div class="udp-tour-card">
		<div class="udp-tour-icon" aria-hidden="true"><i class="fa fa-{{$step.icon}}"></i></div>
		<h2>{{$step.title nofilter}}</h2>
		<div class="udp-tour-body">{{$step.body nofilter}}</div>
		<p class="udp-tour-try">
			<button type="button" id="udp-spot-show" class="btn btn-default" data-path="{{$path_json}}" data-return="udp/welcome?step={{$index}}" hidden><i class="fa fa-hand-pointer-o" aria-hidden="true"></i> Show me where</button>
			{{if $step.try_url}}
			<a href="{{$step.try_url}}" target="_blank" rel="noopener">{{$step.try_label}} <i class="fa fa-external-link" aria-hidden="true"></i></a>
			{{/if}}
		</p>
	</div>

	<div class="udp-tour-nav">
		{{if $prev !== null}}
		<a class="btn btn-default" href="udp/welcome?step={{$prev}}" rel="prev"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</a>
		{{else}}
		<span></span>
		{{/if}}

		{{if $next !== null}}
		<a class="btn btn-primary" href="udp/welcome?step={{$next}}" rel="next">Next <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
		{{else}}
		<form method="post" action="udp/welcome">
			<input type="hidden" name="form_security_token" value="{{$form_security_token}}">
			<button type="submit" name="action" value="finish" class="btn btn-primary">Go to my timeline <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
		</form>
		{{/if}}
	</div>
</div>

<script>
/* "Show me where": hands this step's path to the spotlight runtime (theme udp/spot.tpl), which keeps
   highlighting hop by hop, across pages, until the destination is reached. */
// The runtime is in the page footer, after this script — wait for it.
document.addEventListener('DOMContentLoaded', function () {
	var btn = document.getElementById('udp-spot-show');
	if (!btn || !window.udpSpot) return;
	var path = [];
	try { path = JSON.parse(btn.getAttribute('data-path') || '[]'); } catch (e) {}
	function check() { btn.hidden = !window.udpSpot.canShow(path); }
	check();
	addEventListener('resize', check);
	btn.addEventListener('click', function () { window.udpSpot.start(path, btn.getAttribute('data-return')); });
});
</script>
