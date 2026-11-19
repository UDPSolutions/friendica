<div class="generic-page-wrapper udp-help-page">
<h2>Help</h2>

{{if $logged_in}}
<h3>New here?</h3>
<p>A two-minute tour of your timeline, posting, finding people, and alerts.</p>
<p><a class="btn btn-primary" href="udp/welcome"><i class="fa fa-compass" aria-hidden="true"></i> Take the tour</a></p>
{{/if}}

<h3>User guide</h3>
{{if $guide}}
<ul class="udp-help-list">
	{{foreach $guide as $item}}
	<li><a href="{{$item.url}}" target="_blank" rel="noopener">{{$item.title}} <i class="fa fa-external-link" aria-hidden="true"></i></a></li>
	{{/foreach}}
</ul>
{{/if}}
<p><a href="{{$help_center_url}}" target="_blank" rel="noopener">Browse the full user guide <i class="fa fa-external-link" aria-hidden="true"></i></a></p>

{{if $is_admin && $admin_guide}}
<h3>For node admins</h3>
<ul class="udp-help-list">
	{{foreach $admin_guide as $item}}
	<li><a href="{{$item.url}}" target="_blank" rel="noopener">{{$item.title}} <i class="fa fa-external-link" aria-hidden="true"></i></a></li>
	{{/foreach}}
</ul>
{{/if}}

<h3>Still stuck?</h3>
{{if $is_admin}}

<p>Need help with your UDP node? Reach out to UDP support and we'll get back to you.</p>

<p><a class="btn btn-primary" href="mailto:support@udp.social">Email UDP Support</a></p>

{{else}}

<p>Need help? Contact your node admin{{if $admin_name != 'your admin'}}, <strong>{{$admin_name}}</strong>{{/if}}.</p>

<p>
	{{if $admin_email}}
	<a class="btn btn-default" href="mailto:{{$admin_email}}">Email {{$admin_name}}</a>
	{{/if}}
	{{if $admin_profile}}
	<a class="btn btn-default" href="{{$admin_profile}}">Message {{$admin_name}}</a>
	{{/if}}
</p>

{{/if}}

{{if $logged_in}}
<h3>Help button</h3>
<form method="post" action="help">
	<input type="hidden" name="form_security_token" value="{{$form_security_token}}">
	<input type="hidden" name="return" value="help">
	{{if $box_hidden}}
	<p>The help button is hidden. Turn it back on to see guide links on every page.</p>
	<button type="submit" name="action" value="show" class="btn btn-primary">Show help button</button>
	{{else}}
	<p>The <i class="fa fa-question-circle" aria-hidden="true"></i> Help button in the bottom corner shows guide links for the page you're on.</p>
	<button type="submit" name="action" value="hide" class="btn btn-default">Hide help button</button>
	{{/if}}
</form>
{{/if}}

</div>
