{{*
  * Copyright (C) 2010-2024, the Friendica project
  * SPDX-FileCopyrightText: 2010-2024 the Friendica project
  *
  * SPDX-License-Identifier: AGPL-3.0-or-later
  *}}
<table width="100%" cellpadding="0" cellspacing="0" border="0">

	{{if $preamble}}
	<tr>
		<td style="padding-bottom:20px; color:#1a1a1a; font-size:15px; line-height:1.65;">{{$preamble nofilter}}</td>
	</tr>
	{{/if}}

	{{if $content_allowed}}
	<tr>
		<td>
			<!-- Notification card -->
			<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f9f9f9; border-radius:6px; border-left:3px solid #084769;">
			<tr>
				{{if $source_photo}}
				<td style="padding:16px 0 16px 16px; width:52px; vertical-align:top;">
					<a href="{{$source_link}}" style="text-decoration:none;">
						<img src="{{$source_photo}}" width="40" height="40" style="border-radius:50%; border:0; display:block;" alt="" />
					</a>
				</td>
				{{/if}}
				<td style="padding:16px; vertical-align:top;">
					{{if $source_name}}
					<div style="margin-bottom:6px;">
						<a href="{{$source_link}}" style="color:#084769; font-weight:600; font-size:14px; text-decoration:none;">{{$source_name}}</a>
					</div>
					{{/if}}
					{{if $title}}
					<div style="font-weight:600; font-size:15px; color:#1a1a1a; margin-bottom:8px;">{{$title}}</div>
					{{/if}}
					<div style="color:#333333; font-size:14px; line-height:1.6;">{{$htmlversion nofilter}}</div>
				</td>
			</tr>
			</table>
		</td>
	</tr>
	{{/if}}

	{{if $hsitelink}}
	<tr>
		<td style="padding-top:20px; font-size:13px; color:#777777;">{{$hsitelink nofilter}}</td>
	</tr>
	{{/if}}
	{{if $hitemlink}}
	<tr>
		<td style="padding-top:4px; font-size:13px; color:#777777;">{{$hitemlink nofilter}}</td>
	</tr>
	{{/if}}
	{{if $thanks}}
	<tr>
		<td style="padding-top:16px; color:#555555; font-size:14px;">{{$thanks}}</td>
	</tr>
	{{/if}}
	{{if $site_admin}}
	<tr>
		<td style="color:#555555; font-size:14px;">{{$site_admin}}</td>
	</tr>
	{{/if}}

</table>
