{{*
  * UDP — Magic-link confirmation page
  * GET shows this button; only the POST consumes the token (mail scanners prefetch GETs).
  *}}
<div id="magic-login-wrapper">
	<h1>{{$sitename}}</h1>
	<p>{{$intro}}</p>

	<form id="magic-login-form" action="{{$action}}" method="post">
		<div class="settings-submit-wrapper">
			<button type="submit" class="btn btn-primary btn-lg">{{$label_submit}}</button>
		</div>
	</form>
</div>
