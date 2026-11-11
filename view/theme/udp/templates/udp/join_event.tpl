{{* UDP — event self-registration page *}}
<div class="generic-page-wrapper" style="max-width:480px;margin:3rem auto;">

{{if $state == 'success'}}
	<h2>Check your email!</h2>
	<p>We sent a login link to your inbox. Click it to set up your account on <strong>{{$sitename}}</strong>.</p>
	<p class="text-muted" style="font-size:.9em;">The link expires in 1 hour. Check your spam folder if you don't see it.</p>

{{elseif $state == 'closed'}}
	<h2>Registration is closed</h2>
	<p>The sign-up window for this event has ended. Contact the group admin if you need access.</p>

{{else}}
	<h2>Join {{$sitename}}</h2>
	<p>Enter your name and email below and we'll send you a one-click login link.</p>

	<form method="post" action="/join?t={{$token|escape:'url'}}">
		<input type="hidden" name="form_security_token" value="{{$form_security_token}}">
		<input type="hidden" name="t" value="{{$token|escape}}">

		<div class="form-group">
			<label for="join-name">Full name</label>
			<input type="text" id="join-name" name="username" class="form-control"
				placeholder="First Last" autocomplete="name" required>
		</div>

		<div class="form-group" style="margin-top:.75rem;">
			<label for="join-email">Email address</label>
			<input type="email" id="join-email" name="email" class="form-control"
				placeholder="you@example.com" autocomplete="email" required>
		</div>

		<button type="submit" class="btn btn-primary" style="margin-top:1.25rem;width:100%;">
			Send my login link
		</button>
	</form>
{{/if}}

</div>
