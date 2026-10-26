{{*
  * Admin — Node Metrics
  * Shows queue depth, local disk, and R2 storage for this slot.
  *}}

<div id="adminpage">
<h1>{{$title}} - {{$page}}</h1>
<p class="text-muted">Node: <strong>{{$slot_domain}}</strong>
{{if $collected_at}} &mdash; last collected {{$collected_at}}{{/if}}</p>

{{if !$latest && !$r2_bytes}}
<div class="alert alert-info">
	No metrics collected yet. The global worker will populate this page on its next 10-minute cycle.
</div>
{{/if}}

{{* ── SUMMARY CARDS ────────────────────────────────────────────────────── *}}
<div class="row" style="margin-bottom:1.5em">

	{{* Queue depth *}}
	<div class="col-sm-4">
		<div class="panel panel-default">
			<div class="panel-heading"><h4 class="panel-title">Worker Queue</h4></div>
			<div class="panel-body text-center">
				<span style="font-size:2.5em; font-weight:bold">{{$queue_depth}}</span>
				<div class="text-muted" style="font-size:.85em">pending jobs</div>
				{{if $last_post_at}}
				<div class="text-muted" style="margin-top:.5em; font-size:.8em">Last post: {{$last_post_at}}</div>
				{{/if}}
			</div>
		</div>
	</div>

	{{* Local disk *}}
	<div class="col-sm-4">
		<div class="panel panel-default">
			<div class="panel-heading"><h4 class="panel-title">Local Disk (cache)</h4></div>
			<div class="panel-body">
				<div class="progress" title="{{$disk_pct}}%">
					<div class="progress-bar {{if $disk_pct > 85}}progress-bar-danger{{elseif $disk_pct > 65}}progress-bar-warning{{else}}progress-bar-success{{/if}}"
					     style="width:{{$disk_pct}}%; min-width:2em">
						{{$disk_pct}}%
					</div>
				</div>
				<div class="text-muted text-center" style="font-size:.85em">
					{{$disk_used_fmt}} / {{$disk_quota_fmt}}
				</div>
			</div>
		</div>
	</div>

	{{* R2 storage *}}
	<div class="col-sm-4">
		<div class="panel panel-default">
			<div class="panel-heading"><h4 class="panel-title">R2 Storage (uploads)</h4></div>
			<div class="panel-body">
				<div class="progress" title="{{$r2_pct}}%">
					<div class="progress-bar {{if $r2_pct > 85}}progress-bar-danger{{elseif $r2_pct > 65}}progress-bar-warning{{else}}progress-bar-info{{/if}}"
					     style="width:{{$r2_pct}}%; min-width:2em">
						{{$r2_pct}}%
					</div>
				</div>
				<div class="text-muted text-center" style="font-size:.85em">
					{{$r2_bytes_fmt}} / {{$r2_quota_fmt}}
					{{if $r2_updated}}<br><span style="font-size:.9em">updated {{$r2_updated}}</span>{{/if}}
				</div>
			</div>
		</div>
	</div>

</div>{{* /row *}}

{{* ── HISTORY TABLE ────────────────────────────────────────────────────── *}}
{{if $history}}
<h3>Recent history <small class="text-muted">(30 days)</small></h3>
<table class="table table-condensed table-striped">
	<thead>
		<tr>
			<th>Time</th>
			<th>Bin</th>
			<th>Queue depth</th>
			<th>Local disk used</th>
		</tr>
	</thead>
	<tbody>
	{{foreach $history as $row}}
	<tr>
		<td><small>{{$row.collected_at}}</small></td>
		<td><span class="label label-default">{{$row.bin_size}}</span></td>
		<td>{{$row.queue_depth}}</td>
		<td><small>{{$row.disk_local_used_fmt}}</small></td>
	</tr>
	{{/foreach}}
	</tbody>
</table>
{{/if}}

</div>{{* /adminpage *}}
