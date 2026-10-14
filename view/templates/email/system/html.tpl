{{*
  * Copyright (C) 2010-2024, the Friendica project
  * SPDX-FileCopyrightText: 2010-2024 the Friendica project
  *
  * SPDX-License-Identifier: AGPL-3.0-or-later
  *}}
<table width="100%" cellpadding="0" cellspacing="0" border="0">
	{{if $preamble}}
	<tr>
		<td style="padding-bottom:16px; color:#1a1a1a; font-size:15px; line-height:1.65; white-space:pre-line;">{{$preamble nofilter}}</td>
	</tr>
	{{/if}}
	{{if $htmlversion}}
	<tr>
		<td style="color:#1a1a1a; font-size:15px; line-height:1.65; white-space:pre-line;">{{$htmlversion nofilter}}</td>
	</tr>
	{{/if}}
	{{if $thanks}}
	<tr>
		<td style="padding-top:20px; color:#555555; font-size:14px;">{{$thanks}}</td>
	</tr>
	{{/if}}
	{{if $site_admin}}
	<tr>
		<td style="color:#555555; font-size:14px;">{{$site_admin}}</td>
	</tr>
	{{/if}}
</table>
