{{*
  * Copyright (C) 2010-2024, the Friendica project
  * SPDX-FileCopyrightText: 2010-2024 the Friendica project
  *
  * SPDX-License-Identifier: AGPL-3.0-or-later
  *
  * UDP override of frio/templates/common_tabs.tpl.
  * The <nav class="tabbar-wrapper"> block is frio's, unchanged; frio's theme.js
  * moves it into #topbar-second, which the UDP theme hides on mobile (style.php).
  * The #udp-tabstrip below is UDP-only: a mobile horizontal tab row, rendered
  * server-side (in tab order, untouched by flexMenu) and left in place in the
  * content section. Hidden on desktop via style.php.
  *}}
<nav class="tabbar-wrapper" role="menubar">
	{{* Tab navigation bar for tablets and computer *}}
	<ul class="tabbar list-inline visible-lg visible-md visible-sm hidden-xs">
		{{* The normal tabbar *}}
		<li>
			<ul class="tabs flex-nav">
				{{foreach $tabs as $tab}}
					<li id="{{$tab.id}}" {{if $tab.sel}} class="{{$tab.sel}}" {{/if}}>
						<a role="menuitem" class="tabbar-wrapper__link" href="{{$tab.url}}"
							{{if $tab.accesskey}}accesskey="{{$tab.accesskey}}" {{/if}} {{if $tab.title}}
						title="{{$tab.title}}" {{/if}}>
						{{$tab.label}}
					</a>
				</li>
				{{/foreach}}
			</ul>
		</li>

		{{* The extended dropdown menu - this would be shown if the tab menu points
		  doesn't fit in the available space. This is done through flexMenu.js *}}
		<li class="pull-right">
			<ul class="tabs tabs-extended" role="menu">
				<li class="dropdown flex-target">
					<button type="button" class="btn-link dropdown-toggle" id="dropdownMenuTools" data-toggle="dropdown" aria-expanded="false" title="{{$more}}">
						<i class="fa fa-chevron-down" aria-hidden="true"></i>
					</button>
				</li>
			</ul>
		</li>
	</ul>

	{{* Tab navigation bar for smartphones *}}
	<ul role="menubar" class="tabbar list-inline visible-xs">
		{{* The active menupoint will be shown as one menupoint*}}
		<li>
			<ul class="tabs" role="menu">
				{{foreach $tabs as $tab}}
					{{if $tab.sel}}
						<li id="{{$tab.id}}-xs" {{if $tab.sel}} class="{{$tab.sel}}" {{/if}}>
							<a role="menuitem" class="tabbar-wrapper__link" href="{{$tab.url}}" {{if $tab.title}} title="{{$tab.title}}" {{/if}}>
								{{$tab.label}}
							</a>
						</li>
					{{else}}
						{{$exttabs[]=$tab}}
					{{/if}}
				{{/foreach}}
			</ul>
		</li>

		{{* All others are moved to this dropdown menu *}}
		<li>
			<ul class="tabs tabs-extended">
				<li class="dropdown">
					<button type="button" class="btn-link dropdown-toggle" id="dropdownMenuTools-xs" data-toggle="dropdown" aria-expanded="false" title="{{$more}}">
						<i class="fa fa-chevron-down" aria-hidden="true"></i>
					</button>
					<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenuTools">
						{{foreach $exttabs as $tab}}
							<li id="{{$tab.id}}-xs" {{if $tab.sel}} class="{{$tab.sel}}" {{/if}}>
								<a role="menuitem" href="{{$tab.url}}" {{if $tab.title}} title="{{$tab.title}}" {{/if}}>
									{{$tab.label}}
								</a>
							</li>
						{{/foreach}}
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</nav>

{{* UDP mobile tab strip — horizontally scrollable, mirrors the desktop tab row *}}
<nav id="udp-tabstrip" aria-label="Sections">
	<ul>
		{{foreach $tabs as $tab}}
			<li{{if $tab.sel}} class="active"{{/if}}>
				<a href="{{$tab.url}}" {{if $tab.title}}title="{{$tab.title}}" {{/if}}{{if $tab.sel}}aria-current="page"{{/if}}>{{$tab.label}}</a>
			</li>
		{{/foreach}}
	</ul>
</nav>
<script>
(function () {
	// Keep the active tab in view when it's past the right edge (e.g. "Advanced").
	var strip = document.getElementById('udp-tabstrip');
	var ul = strip && strip.querySelector('ul');
	var active = ul && ul.querySelector('li.active');
	if (ul && active && active.offsetLeft + active.offsetWidth > ul.clientWidth) {
		ul.scrollLeft = active.offsetLeft - 16;
	}
}());
</script>
