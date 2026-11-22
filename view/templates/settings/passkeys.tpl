{{*
  * UDP — Settings → Passkeys
  * Add flow is in view/js/udp-passkey.js ([data-udp-passkey-register]).
  *}}
<div class="generic-page-wrapper" id="udp-passkeys">
	<h1>{{$title}}</h1>
	<p>{{$intro}}</p>

	{{if $passkeys}}
	<table class="table table-hover table-condensed">
		<thead>
			<tr>
				<th>{{$label_name}}</th>
				<th>{{$label_created}}</th>
				<th>{{$label_last_used}}</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
		{{foreach $passkeys as $passkey}}
			<tr>
				<td>
					<form action="settings/passkeys" method="post" class="form-inline">
						<input type="hidden" name="form_security_token" value="{{$form_security_token}}">
						<input type="hidden" name="action" value="rename">
						<input type="hidden" name="passkey_id" value="{{$passkey.id}}">
						<input type="text" name="name" value="{{$passkey.name}}" maxlength="255" class="form-control input-sm" aria-label="{{$label_name}}">
						<button type="submit" class="btn btn-default btn-sm">{{$label_rename}}</button>
					</form>
				</td>
				<td>{{$passkey.created}}</td>
				<td>{{$passkey.last_used}}</td>
				<td>
					<form action="settings/passkeys" method="post" onsubmit="return confirm('{{$confirm_delete|escape:'javascript'}}');">
						<input type="hidden" name="form_security_token" value="{{$form_security_token}}">
						<input type="hidden" name="action" value="delete">
						<input type="hidden" name="passkey_id" value="{{$passkey.id}}">
						<button type="submit" class="btn btn-danger btn-sm">{{$label_delete}}</button>
					</form>
				</td>
			</tr>
		{{/foreach}}
		</tbody>
	</table>
	{{else}}
	<p><em>{{$none}}</em></p>
	{{/if}}

	<h2>{{$add_title}}</h2>
	<div data-udp-passkey-register
	     data-options-url="{{$options_url}}"
	     data-register-url="{{$register_url}}"
	     data-csrf="{{$passkey_csrf}}"
	     data-msg-duplicate="{{$msg_duplicate}}">
		<div data-udp-passkey-supported hidden>
			<p class="help-block">{{$add_help}}</p>
			<div class="form-inline">
				<input type="text" class="form-control udp-passkey-name" maxlength="255" placeholder="{{$name_placeholder}}" aria-label="{{$label_name}}">
				<button type="button" class="btn btn-primary udp-passkey-register-btn">{{$label_add}}</button>
			</div>
		</div>
		<p data-udp-passkey-unsupported class="text-muted">{{$unsupported}}</p>
		<div class="alert alert-danger udp-passkey-error" role="alert" hidden></div>
	</div>

	<h2>{{$guide_title}}</h2>
	<p>{{$guide}}</p>
</div>
<script src="{{$passkey_js}}"></script>
