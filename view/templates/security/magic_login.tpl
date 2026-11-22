{{*
  * UDP — Magic-link confirmation page
  * GET shows this button; only the POST consumes the token (mail scanners prefetch GETs).
  *}}
<div id="magic-login-wrapper" style="max-width:32em; margin:2em auto; padding:1.5em 2em; background:rgba(0,0,0,0.75); color:#f2f2f2; border-radius:8px;">
	<h1>{{$sitename}}</h1>
	<p>{{$intro}}</p>

	<form id="magic-login-form" action="{{$action}}" method="post">
		<div class="settings-submit-wrapper">
			<button type="submit" class="btn btn-primary btn-lg">{{$label_submit}}</button>
		</div>
	</form>
</div>
