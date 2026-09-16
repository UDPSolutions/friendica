{{*
  * UDP Social override of widget/follow.tpl
  * Adds "Invite by email" below the standard handle/URL connect form.
  *}}

<nav id="follow-sidebar" class="widget">
	<h3>{{$connect}}</h3>

	<form action="contact/follow" method="post">
		<div class="form-group form-group-search">
			<input id="side-follow-url" class="search-input form-control form-search" type="text" name="follow-url" value="{{$value}}" placeholder="{{$hint}}" data-toggle="tooltip" />
			<button id="side-follow-submit" class="btn btn-default btn-sm form-button-search" type="submit">{{$follow}}</button>
		</div>
	</form>

	<hr style="margin:1em 0;">

	<h4 style="font-size:1em; margin-bottom:.4em;"><a href="udp/member-invite" style="color:inherit;">Invite a friend</a></h4>
	<p style="font-size:.85em; color:#888; margin-bottom:.6em;">Invite someone by email, or request that a friend on another community be connected here.</p>
	<a href="udp/member-invite" class="btn btn-default btn-sm" style="display:block; text-align:center;">Send an invitation</a>

	{{if $is_admin}}
	<hr style="margin:1em 0;">
	<h4 style="font-size:1em; margin-bottom:.4em;"><a href="admin/node-pair" style="color:inherit;">Connect a community</a></h4>
	<p style="font-size:.85em; color:#888; margin-bottom:.6em;">Pair this node with another community so members can follow each other.</p>
	<a href="admin/node-pair" class="btn btn-default btn-sm" style="display:block; text-align:center;">Node pairing</a>
	{{/if}}
</nav>
