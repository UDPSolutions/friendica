{{*
  * UDP — "Email me a sign-in link" (/login/email)
  *}}
<div id="magic-link-request-wrapper" class="generic-page-wrapper">
	<h1>{{$title}}</h1>
	<p>{{$intro}}</p>

	<form action="login/email" method="post">
		<input type="hidden" name="form_security_token" value="{{$form_security_token}}">
		<div class="form-group">
			<label for="id_magic_login">{{$label_login}}</label>
			<input type="text" id="id_magic_login" name="login" class="form-control"
			       autocomplete="username" autocapitalize="none" spellcheck="false" required autofocus>
		</div>
		<button type="submit" class="btn btn-primary">{{$label_submit}}</button>
		<a href="login" class="btn btn-link">{{$back}}</a>
	</form>
</div>
