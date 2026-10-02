{{*
  * UDP theme head.tpl — overrides frio's head.tpl
  * Static CSS/JS consolidated into bundles via build-bundles.sh.
  * Font CSS files (open-sans, fork-awesome) kept separate: relative url() paths.
  * hovercard.js kept in bundle unconditionally; the $block_public gate in frio's
  * version only mattered for the standalone load — bundled it's inert when unused.
  *}}
{{* This content will be added to the html page <head> *}}

<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<base href="{{$baseurl}}/" />
<meta name="generator" content="{{$generator}}" />
<meta name="viewport" content="initial-scale=1.0">

{{* Bundled static CSS (frio frameworks + global + fancybox) *}}
<link rel="stylesheet" href="view/theme/udp/css/bundle.css?v={{$VERSION}}" type="text/css" media="all" />

{{* Font CSS kept separate — relative url() paths break when bundled *}}
<link rel="stylesheet" href="view/asset/fork-awesome/css/fork-awesome.min.css?v={{$VERSION}}" type="text/css" media="screen" />
<link rel="stylesheet" href="view/theme/frio/font/open_sans/open-sans.css?v={{$VERSION}}" type="text/css" media="screen" />

{{* Per-page dynamic stylesheets registered by modules *}}
{{foreach $stylesheets as $stylesheetUrl => $media}}
	<link rel="stylesheet" href="{{$stylesheetUrl}}" type="text/css" media="{{$media}}" />
{{/foreach}}

<link rel="icon" href="{{$shortcut_icon}}" />
<link rel="apple-touch-icon" href="{{$touch_icon}}" />

<meta name="apple-mobile-web-app-capable" content="yes" />
<link rel="manifest" href="{{$baseurl}}/friendica.webmanifest">

<script type="text/javascript">
	// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
	// Prevents links to switch to Safari in a home screen app - see https://gist.github.com/irae/1042167
	(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(chref=d.href).replace("{{$baseurl}}/", "").replace(e.href,"").indexOf("#")&&(!/^[a-z\+\.\-]+:/i.test(chref)||chref.indexOf(e.protocol+"//"+e.host)===0)&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone");
		// |license-end
	</script>

<link rel="search" href="{{$baseurl}}/opensearch" type="application/opensearchdescription+xml"
	title="Search in Friendica" />

{{* PHP values injected before the bundle runs *}}
<script type="text/javascript">
	const updateContent = {{$update_content}};
	const localUser = {{if $local_user}}{{$local_user}}{{else}}false{{/if}};
</script>

{{* Bundled static JS (modernizr + jquery + frio frameworks + fancybox + emoji picker) *}}
<script type="text/javascript" src="view/theme/udp/js/bundle.js?v={{$VERSION}}"></script>

{{* Dropzone and emoji picker inline init — depend on bundle being loaded *}}
<script type="text/javascript"> const dzFactory = new DzFactory({{$max_imagesize}});</script>
<script>
window.onload = function(){
	new EmojiPicker({
		trigger: [
			{
				selector: '.emojis',
				insertInto: ['#comment-edit-text-0', '#profile-jot-text', '.profile-jot-text-full', '.comment-edit-text-full', '.prvmail-text', '.emojis-target']
			}
		],
		closeButton: true
	});
};
</script>

{{* JS translation strings for Friendica's JS functions *}}
{{include file="js_strings.tpl"}}
