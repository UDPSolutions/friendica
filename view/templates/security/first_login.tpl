{{*
  * UDP — first sign-in choice (after a magic-link login)
  * Passkey first when the device has a built-in authenticator; password form otherwise;
  * "Skip for now" always. Visibility is driven by view/js/udp-passkey.js data attributes.
  * Without JS: password form + skip.
  *}}
<div id="first-login-wrapper">
	<h1>{{$sitename}}</h1>
	<p>{{$intro}}</p>

	{{if $error}}
	<div class="alert alert-danger" role="alert" style="margin-bottom:1.5em; padding:1em; border-left:4px solid #c0392b; background:#fdf0ef;">
		<strong>{{$error}}</strong>
	</div>
	{{/if}}

	{{if !$error && $passkeys_enabled}}
	<section id="first-login-passkey" data-udp-passkey-platform hidden>
		<h2>{{$passkey_title}}</h2>
		<p>{{$passkey_help}}</p>
		<div data-udp-passkey-register
		     data-options-url="{{$passkey_options_url}}"
		     data-register-url="{{$passkey_register_url}}"
		     data-csrf="{{$passkey_csrf}}"
		     data-msg-duplicate="{{$msg_duplicate}}"
		     data-success-form="#first-login-passkey-done">
			<input type="hidden" class="udp-passkey-name" value="{{$passkey_name}}">
			<button type="button" class="btn btn-primary btn-lg udp-passkey-register-btn">
				<i class="fa fa-key" aria-hidden="true"></i> {{$passkey_button}}
			</button>
			<div class="alert alert-danger udp-passkey-error" role="alert" hidden style="margin-top:1em;"></div>
		</div>
		<form id="first-login-passkey-done" action="firstlogin" method="post" hidden>
			<input type="hidden" name="form_security_token" value="{{$form_security_token}}">
			<input type="hidden" name="action" value="passkey_done">
		</form>
		<p style="margin-top:1.5em;">
			<a href="#first-login-password" data-udp-reveal="#first-login-password">{{$password_instead}}</a>
		</p>
	</section>
	{{/if}}

	{{if !$error && $passkeys_enabled}}
	{{* No built-in authenticator, but the browser does passkeys: a password manager (LastPass,
	    Bitwarden, KeePassXC) or a security key can still hold one. *}}
	<p data-udp-passkey-other hidden>
		<a href="#first-login-passkey" data-udp-reveal="#first-login-passkey">{{$passkey_other}}</a>
	</p>
	{{/if}}

	<section id="first-login-password" {{if !$error && $passkeys_enabled}}data-udp-passkey-noplatform{{/if}}>
		<h2>{{$password_title}}</h2>
		<form id="first-login-form" action="firstlogin" method="post">
			<input type="hidden" name="form_security_token" value="{{$form_security_token}}">
			<input type="hidden" name="action" value="password">

			<div class="field password">
				<label for="id_password">{{$label_password}}</label>
				<input type="password" id="id_password" name="password"
				       autocomplete="new-password" required
				       {{if $password_regexp}}pattern="{{$password_regexp}}"{{/if}}
				       aria-describedby="password_tip">
				<span class="field_help" id="password_tip">{{$password_rules}}</span>
			</div>

			<div class="field checkbox">
				<label>
					<input type="checkbox" data-udp-show-password="#id_password"> {{$label_show}}
				</label>
			</div>

			<div class="settings-submit-wrapper">
				<button type="submit" class="btn btn-primary">{{$label_submit}}</button>
			</div>
		</form>
	</section>

	<section id="first-login-skip" style="margin-top:2em;">
		<form action="firstlogin" method="post">
			<input type="hidden" name="form_security_token" value="{{$form_security_token}}">
			<input type="hidden" name="action" value="skip">
			<button type="submit" class="btn btn-link" style="padding-left:0;">{{$skip_label}}</button>
			<span class="text-muted">— {{$skip_help}}</span>
		</form>
	</section>
</div>
<script src="{{$passkey_js}}"></script>
