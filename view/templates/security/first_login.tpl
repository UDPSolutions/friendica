{{*
  * UDP — First-login password setup page
  * Shown after magic-link login. Minimal chrome, no current-password field.
  *}}
<div id="first-login-wrapper">
	<h1>{{$sitename}}</h1>
	<p>{{$intro nofilter}}</p>

	{{if $error}}
	<div class="alert alert-danger" role="alert" style="margin-bottom:1.5em; padding:1em; border-left:4px solid #c0392b; background:#fdf0ef;">
		<strong>{{$error}}</strong>
	</div>
	{{/if}}

	<form id="first-login-form" action="firstlogin" method="post">
		<input type="hidden" name="form_security_token" value="{{$form_security_token}}">

		<div class="field password">
			<label for="id_password">{{$label_password}}</label>
			<input type="password" id="id_password" name="password"
			       autocomplete="new-password" required
			       {{if $password_regexp}}pattern="{{$password_regexp}}"{{/if}}
			       aria-describedby="password_tip">
			<span class="field_help" id="password_tip">{{$password_rules}}</span>
		</div>

		<div class="field password">
			<label for="id_confirm">{{$label_confirm}}</label>
			<input type="password" id="id_confirm" name="confirm"
			       autocomplete="new-password" required>
		</div>

		<div class="settings-submit-wrapper">
			<button type="submit" class="btn btn-primary">{{$label_submit}}</button>
		</div>
	</form>
</div>
