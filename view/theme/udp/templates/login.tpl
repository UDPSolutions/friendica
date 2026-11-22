{{*
  * UDP Social — login page override (Cat2 — new file)
  * Extends frio's login.tpl; adds background-image attribution footer.
  * Update the attribution text when the background image changes.
  *}}

{{* Display system messages *}}
{{if $notices}}
	{{foreach $notices as $notice}}
		<div class="alert alert-warning" role="alert">{{$notice}}</div>
	{{/foreach}}
{{/if}}

<form id="login-form" action="{{$dest_url}}" role="form" method="post">
	<div id="login-group" role="group" aria-labelledby="login-head">
		<input type="hidden" name="auth-params" value="login" />

		<div id="login-head"><h1>{{$login}}</h1></div>
		{{include file="field_input.tpl" field=$lname label=false}}
		{{include file="field_password.tpl" field=$lpassword label=false}}
		<div id="login-end"></div>
		<div id="login-lost-password-link">
			<a href="lostpass" id="lost-password-link">{{$lostlink}}</a>
		</div>

		{{include file="field_checkbox.tpl" field=$lremember}}

		<button type="submit" name="submit" id="login-submit-button" class="btn btn-primary" value="{{$login}}">{{$login}}</button>

		{{foreach $hiddens as $k=>$v}}
			<input type="hidden" name="{{$k}}" value="{{$v}}" />
		{{/foreach}}

		<div id="login-end"></div>
	</div>
</form>

{{* UDP: passwordless options — emailed magic link; passkey only when udp.passkeys is on (future feature) *}}
<div id="udp-login-alternatives"
     {{if $passkeys_enabled}}data-udp-passkey-login
     data-options-url="{{$passkey_options_url}}"
     data-login-url="{{$passkey_login_url}}"
     data-return-path="{{$passkey_return_path}}"{{/if}}>
	<p class="udp-login-or">{{$passkey_or}}</p>
	{{if $passkeys_enabled}}
	<div data-udp-passkey-supported hidden>
		<button type="button" class="btn btn-default btn-block udp-passkey-login-btn">
			<i class="fa fa-key" aria-hidden="true"></i> {{$passkey_label}}
		</button>
	</div>
	<div class="alert alert-danger udp-passkey-error" role="alert" hidden></div>
	{{/if}}
	<a href="login/email" class="btn btn-link btn-block" id="udp-email-link">{{$email_link_label}}</a>
</div>
{{if $passkeys_enabled}}<script src="{{$passkey_js}}"></script>{{/if}}

{{* Background image attribution — update when image changes *}}
<p id="udp-login-attribution">
	Photo by mypubliclands on Unsplash
</p>
