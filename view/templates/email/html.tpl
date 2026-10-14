{{*
  * Copyright (C) 2010-2024, the Friendica project
  * SPDX-FileCopyrightText: 2010-2024 the Friendica project
  *
  * SPDX-License-Identifier: AGPL-3.0-or-later
  *}}
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{{$sitename}}</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">

	<!-- Outer wrapper -->
	<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4;">
	<tr><td align="center" style="padding:32px 16px;">

		<!-- Card -->
		<table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 1px 4px rgba(0,0,0,0.10);">

			<!-- Accent bar -->
			<tr>
				<td style="background-color:#084769; height:4px; font-size:0; line-height:0;">&nbsp;</td>
			</tr>

			<!-- Header: wordmark -->
			<tr>
				<td style="padding:28px 36px 20px 36px;">
					<span style="font-size:22px; font-weight:700; color:#084769; letter-spacing:-0.3px;">UDP Social</span>
				</td>
			</tr>

			<!-- Divider -->
			<tr>
				<td style="padding:0 36px;">
					<table width="100%" cellpadding="0" cellspacing="0" border="0">
					<tr><td style="border-top:1px solid #e8e8e8; font-size:0; line-height:0;">&nbsp;</td></tr>
					</table>
				</td>
			</tr>

			<!-- Body content -->
			<tr>
				<td style="padding:28px 36px 24px 36px; color:#1a1a1a; font-size:15px; line-height:1.65;">
					{{$htmlversion nofilter}}
				</td>
			</tr>

			<!-- Divider -->
			<tr>
				<td style="padding:0 36px;">
					<table width="100%" cellpadding="0" cellspacing="0" border="0">
					<tr><td style="border-top:1px solid #e8e8e8; font-size:0; line-height:0;">&nbsp;</td></tr>
					</table>
				</td>
			</tr>

			<!-- Footer -->
			<tr>
				<td style="padding:20px 36px 28px 36px; color:#999999; font-size:12px; line-height:1.6;">
					<span style="color:#999999;">{{$sitename}}</span>
					&nbsp;&middot;&nbsp;
					<a href="https://github.com/UDPSolutions" style="color:#999999; text-decoration:none;">GitHub</a>
					&nbsp;&middot;&nbsp;
					<a href="https://friendi.ca" style="color:#999999; text-decoration:none;">Powered by Friendica</a>
				</td>
			</tr>

		</table>
		<!-- /Card -->

	</td></tr>
	</table>
	<!-- /Outer wrapper -->

</body>
</html>
