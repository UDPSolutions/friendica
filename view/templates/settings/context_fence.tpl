<div class="generic-page-wrapper">
	<h1>{{$l10n.title}}</h1>
	<p>{{$l10n.intro}}</p>

	<h2>{{$l10n.addtitle}}</h2>
	<form action="{{$baseurl}}/settings/context-fences" method="post">
		<input type="hidden" name="form_security_token" value="{{$form_security_token}}">
		<div class="form-group">
			<label>{{$l10n.contact_a.0}}</label>
			<input type="text" name="contact_a" class="form-control" placeholder="{{$l10n.contact_a.2}}">
		</div>
		<div class="form-group">
			<label>{{$l10n.contact_c.0}}</label>
			<input type="text" name="contact_c" class="form-control" placeholder="{{$l10n.contact_c.2}}">
		</div>
		<div class="submit">
			<button type="submit" class="btn btn-primary" name="add_fence" value="1">{{$l10n.addsubmit}}</button>
		</div>
	</form>

	<h2>{{$l10n.listtitle}}</h2>
	{{if $entries}}
	<table class="table table-condensed">
		<tbody>
		{{foreach $entries as $e}}
		<tr>
			<td>
				{{if $e.thumb_a}}<img src="{{$e.thumb_a}}" class="contact-photo-xs" alt="">{{/if}}
				{{if $e.url_a}}<a href="{{$e.url_a}}">{{$e.name_a}}</a>{{else}}{{$e.name_a}}{{/if}}
				<small class="text-muted">({{$e.node_a}})</small>
			</td>
			<td class="text-center"><span class="glyphicon glyphicon-resize-horizontal"></span></td>
			<td>
				{{if $e.thumb_c}}<img src="{{$e.thumb_c}}" class="contact-photo-xs" alt="">{{/if}}
				{{if $e.url_c}}<a href="{{$e.url_c}}">{{$e.name_c}}</a>{{else}}{{$e.name_c}}{{/if}}
				<small class="text-muted">({{$e.node_c}})</small>
			</td>
			<td>
				<form action="{{$baseurl}}/settings/context-fences" method="post">
					<input type="hidden" name="form_security_token" value="{{$form_security_token}}">
					<button type="submit" class="btn btn-danger btn-xs" name="remove_fence" value="{{$e.id}}">{{$l10n.remove}}</button>
				</form>
			</td>
		</tr>
		{{/foreach}}
		</tbody>
	</table>
	{{else}}
	<p class="text-muted">{{$l10n.nofences}}</p>
	{{/if}}
</div>
