// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
// @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-shiv-cssclasses-load
 */
;window.Modernizr=function(a,b,c){function u(a){j.cssText=a}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function w(a,b){return typeof a===b}function x(a,b){return!!~(""+a).indexOf(b)}function y(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:w(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s={}.hasOwnProperty,t;!w(s,"undefined")&&!w(s.call,"undefined")?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e});for(var z in m)t(m,z)&&(r=z.toLowerCase(),e[r]=m[z](),p.push((e[r]?"":"no-")+r));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)t(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},u(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+p.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

// @license-end

/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat

// Copyright 2010, Tim Down
// SPDX-FileCopyrightText: 2010 Tim Down
//
// SPDX-License-Identifier: MIT
//
// Rangy Text Inputs, a cross-browser textarea and text input library plug-in for jQuery.
//
// Part of Rangy, a cross-browser JavaScript range and selection library
// http://code.google.com/p/rangy/
//
// Depends on jQuery 1.0 or later.
//
// Copyright 2010, Tim Down
// Licensed under the MIT license.
// Version: 0.1.205
// Build date: 5 November 2010

(function(n){function o(e,g){var a=typeof e[g];return a==="function"||!!(a=="object"&&e[g])||a=="unknown"}function p(e,g,a){if(g<0)g+=e.value.length;if(typeof a=="undefined")a=g;if(a<0)a+=e.value.length;return{start:g,end:a}}function k(){return typeof document.body=="object"&&document.body?document.body:document.getElementsByTagName("body")[0]}var i,h,q,l,r,s,t,u,m;n(document).ready(function(){function e(a,b){return function(){var c=this.jquery?this[0]:this,d=c.nodeName.toLowerCase();if(c.nodeType==
1&&(d=="textarea"||d=="input"&&c.type=="text")){c=[c].concat(Array.prototype.slice.call(arguments));c=a.apply(this,c);if(!b)return c}if(b)return this}}var g=document.createElement("textarea");k().appendChild(g);if(typeof g.selectionStart!="undefined"&&typeof g.selectionEnd!="undefined"){i=function(a){return{start:a.selectionStart,end:a.selectionEnd,length:a.selectionEnd-a.selectionStart,text:a.value.slice(a.selectionStart,a.selectionEnd)}};h=function(a,b,c){b=p(a,b,c);a.selectionStart=b.start;a.selectionEnd=
b.end};m=function(a,b){if(b)a.selectionEnd=a.selectionStart;else a.selectionStart=a.selectionEnd}}else if(o(g,"createTextRange")&&typeof document.selection=="object"&&document.selection&&o(document.selection,"createRange")){i=function(a){var b=0,c=0,d,f,j;if((j=document.selection.createRange())&&j.parentElement()==a){f=a.value.length;d=a.value.replace(/\r\n/g,"\n");c=a.createTextRange();c.moveToBookmark(j.getBookmark());j=a.createTextRange();j.collapse(false);if(c.compareEndPoints("StartToEnd",j)>
-1)b=c=f;else{b=-c.moveStart("character",-f);b+=d.slice(0,b).split("\n").length-1;if(c.compareEndPoints("EndToEnd",j)>-1)c=f;else{c=-c.moveEnd("character",-f);c+=d.slice(0,c).split("\n").length-1}}}return{start:b,end:c,length:c-b,text:a.value.slice(b,c)}};h=function(a,b,c){b=p(a,b,c);c=a.createTextRange();var d=b.start-(a.value.slice(0,b.start).split("\r\n").length-1);c.collapse(true);if(b.start==b.end)c.move("character",d);else{c.moveEnd("character",b.end-(a.value.slice(0,b.end).split("\r\n").length-
1));c.moveStart("character",d)}c.select()};m=function(a,b){var c=document.selection.createRange();c.collapse(b);c.select()}}else{k().removeChild(g);window.console&&window.console.log&&window.console.log("TextInputs module for Rangy not supported in your browser. Reason: No means of finding text input caret position");return}k().removeChild(g);l=function(a,b,c,d){var f;if(b!=c){f=a.value;a.value=f.slice(0,b)+f.slice(c)}d&&h(a,b,b)};q=function(a){var b=i(a);l(a,b.start,b.end,true)};u=function(a){var b=
i(a),c;if(b.start!=b.end){c=a.value;a.value=c.slice(0,b.start)+c.slice(b.end)}h(a,b.start,b.start);return b.text};r=function(a,b,c,d){var f=a.value;a.value=f.slice(0,c)+b+f.slice(c);if(d){b=c+b.length;h(a,b,b)}};s=function(a,b){var c=i(a),d=a.value;a.value=d.slice(0,c.start)+b+d.slice(c.end);c=c.start+b.length;h(a,c,c)};t=function(a,b,c){var d=i(a),f=a.value;a.value=f.slice(0,d.start)+b+d.text+c+f.slice(d.end);b=d.start+b.length;h(a,b,b+d.length)};n.fn.extend({getSelection:e(i,false),setSelection:e(h,
true),collapseSelection:e(m,true),deleteSelectedText:e(q,true),deleteText:e(l,true),extractSelectedText:e(u,false),insertText:e(r,true),replaceSelectedText:e(s,true),surroundSelectedText:e(t,true)})})})(jQuery);

// @license-end

/*! jquery-textcomplete - v1.8.5 - 2019-02-17 */
!function(a){if("function"==typeof define&&define.amd)define(["jquery"],a);else if("object"==typeof module&&module.exports){var b=require("jquery");module.exports=a(b)}else a(jQuery)}(function(a){if("undefined"==typeof a)throw new Error("jQuery.textcomplete requires jQuery");return+function(a){"use strict";var b=function(a){console.warn&&console.warn(a)},c=1;a.fn.textcomplete=function(d,e){var f=Array.prototype.slice.call(arguments);return this.each(function(){var g=this,h=a(this),i=h.data("textComplete");if(i||(e||(e={}),e._oid=c++,i=new a.fn.textcomplete.Completer(this,e),h.data("textComplete",i)),"string"==typeof d){if(!i)return;f.shift(),i[d].apply(i,f),"destroy"===d&&h.removeData("textComplete")}else a.each(d,function(c){a.each(["header","footer","placement","maxCount"],function(a){c[a]&&(i.option[a]=c[a],b(a+"as a strategy param is deprecated. Use option."),delete c[a])})}),i.register(a.fn.textcomplete.Strategy.parse(d,{el:g,$el:h}))})}}(a),+function(a){"use strict";function b(c,d){if(this.$el=a(c),this.id="textcomplete"+e++,this.strategies=[],this.views=[],this.option=a.extend({},b.defaults,d),!(this.$el.is("input[type=text]")||this.$el.is("input[type=search]")||this.$el.is("textarea")||c.isContentEditable||"true"==c.contentEditable))throw new Error("textcomplete must be called on a Textarea or a ContentEditable.");if(c===c.ownerDocument.activeElement)this.initialize();else{var g=this;this.$el.one("focus."+this.id,function(){g.initialize()}),this.option.adapter&&"CKEditor"!=this.option.adapter||"undefined"==typeof CKEDITOR||!this.$el.is("textarea")||CKEDITOR.on("instanceReady",function(b){-1==a.inArray(b.editor.id,f)&&(f.push(b.editor.id),b.editor.on("focus",function(c){g.$el=a(b.editor.editable().$),g.option.adapter||(g.option.adapter=a.fn.textcomplete.CKEditor),g.option.ckeditor_instance=b.editor,g.initialize()}))})}}var c=function(a){var b,c;return function(){var d=Array.prototype.slice.call(arguments);if(b)return void(c=d);b=!0;var e=this;d.unshift(function f(){if(c){var d=c;c=void 0,d.unshift(f),a.apply(e,d)}else b=!1}),a.apply(this,d)}},d=function(a){return"[object String]"===Object.prototype.toString.call(a)},e=0,f=[];b.defaults={appendTo:"body",className:"",dropdownClassName:"dropdown-menu textcomplete-dropdown",maxCount:10,zIndex:"100",rightEdgeOffset:30},a.extend(b.prototype,{id:null,option:null,strategies:null,adapter:null,dropdown:null,$el:null,$iframe:null,initialize:function(){var b=this.$el.get(0);if(this.$el.prop("ownerDocument")!==document&&window.frames.length)for(var c=0;c<window.frames.length;c++)if(this.$el.prop("ownerDocument")===window.frames[c].document){this.$iframe=a(window.frames[c].frameElement);break}this.dropdown=new a.fn.textcomplete.Dropdown(b,this,this.option);var d,e;this.option.adapter?d=this.option.adapter:(e=this.$el.is("textarea")||this.$el.is("input[type=text]")||this.$el.is("input[type=search]")?"number"==typeof b.selectionEnd?"Textarea":"IETextarea":"ContentEditable",d=a.fn.textcomplete[e]),this.adapter=new d(b,this,this.option)},destroy:function(){this.$el.off("."+this.id),this.adapter&&this.adapter.destroy(),this.dropdown&&this.dropdown.destroy(),this.$el=this.adapter=this.dropdown=null},deactivate:function(){this.dropdown&&this.dropdown.deactivate()},trigger:function(a,b){this.dropdown||this.initialize(),null!=a||(a=this.adapter.getTextFromHeadToCaret());var c=this._extractSearchQuery(a);if(c.length){var d=c[1];if(b&&this._term===d&&""!==d)return;this._term=d,this._search.apply(this,c)}else this._term=null,this.dropdown.deactivate()},fire:function(a){var b=Array.prototype.slice.call(arguments,1);return this.$el.trigger(a,b),this},register:function(a){Array.prototype.push.apply(this.strategies,a)},select:function(a,b,c){this._term=null,this.adapter.select(a,b,c),this.fire("change").fire("textComplete:select",a,b),this.adapter.focus()},_clearAtNext:!0,_term:null,_extractSearchQuery:function(b){for(var c=0;c<this.strategies.length;c++){var e=this.strategies[c],f=e.context(b);if(f||""===f){var g=a.isFunction(e.match)?e.match(b):e.match;d(f)&&(b=f);var h=b.match(g);if(h)return[e,h[e.index],h]}}return[]},_search:c(function(a,b,c,d){var e=this;b.search(c,function(d,f){e.dropdown.shown||e.dropdown.activate(),e._clearAtNext&&(e.dropdown.clear(),e._clearAtNext=!1),e.dropdown.setPosition(e.adapter.getCaretPosition()),e.dropdown.render(e._zip(d,b,c)),f||(a(),e._clearAtNext=!0)},d)}),_zip:function(b,c,d){return a.map(b,function(a){return{value:a,strategy:c,term:d}})}}),a.fn.textcomplete.Completer=b}(a),+function(a){"use strict";function b(c,d,f){this.$el=b.createElement(f),this.completer=d,this.id=d.id+"dropdown",this._data=[],this.$inputEl=a(c),this.option=f,f.listPosition&&(this.setPosition=f.listPosition),f.height&&this.$el.height(f.height);var g=this;a.each(["maxCount","placement","footer","header","noResultsMessage","className"],function(a,b){null!=f[b]&&(g[b]=f[b])}),this._bindEvents(c),e[this.id]=this}var c=a(window),d=function(a,b){var c,d,e=b.strategy.idProperty;for(c=0;c<a.length;c++)if(d=a[c],d.strategy===b.strategy)if(e){if(d.value[e]===b.value[e])return!0}else if(d.value===b.value)return!0;return!1},e={};a(document).on("click",function(b){var c=b.originalEvent&&b.originalEvent.keepTextCompleteDropdown;a.each(e,function(a,b){a!==c&&b.deactivate()})});var f={SKIP_DEFAULT:0,KEY_UP:1,KEY_DOWN:2,KEY_ENTER:3,KEY_PAGEUP:4,KEY_PAGEDOWN:5,KEY_ESCAPE:6};a.extend(b,{createElement:function(b){var c=b.appendTo;c instanceof a||(c=a(c));var d=a("<ul></ul>").addClass(b.dropdownClassName).attr("id","textcomplete-dropdown-"+b._oid).css({display:"none",left:0,position:"absolute",zIndex:b.zIndex}).appendTo(c);return d}}),a.extend(b.prototype,{$el:null,$inputEl:null,completer:null,footer:null,header:null,id:null,maxCount:null,placement:"",shown:!1,data:[],className:"",destroy:function(){this.deactivate(),this.$el.off("."+this.id),this.$inputEl.off("."+this.id),this.clear(),this.$el.remove(),this.$el=this.$inputEl=this.completer=null,delete e[this.id]},render:function(b){var c=this._buildContents(b),d=a.map(b,function(a){return a.value});if(b.length){var e=b[0].strategy;e.id?this.$el.attr("data-strategy",e.id):this.$el.removeAttr("data-strategy"),this._renderHeader(d),this._renderFooter(d),c&&(this._renderContents(c),this._fitToBottom(),this._fitToRight(),this._activateIndexedItem()),this._setScroll()}else this.noResultsMessage?this._renderNoResultsMessage(d):this.shown&&this.deactivate()},setPosition:function(b){var d="absolute";return this.$inputEl.add(this.$inputEl.parents()).each(function(){return"absolute"===a(this).css("position")?!1:"fixed"===a(this).css("position")?(b.top-=c.scrollTop(),b.left-=c.scrollLeft(),d="fixed",!1):void 0}),this.$el.css(this._applyPlacement(b)),this.$el.css({position:d}),this},clear:function(){this.$el.html(""),this.data=[],this._index=0,this._$header=this._$footer=this._$noResultsMessage=null},activate:function(){return this.shown||(this.clear(),this.$el.show(),this.className&&this.$el.addClass(this.className),this.completer.fire("textComplete:show"),this.shown=!0),this},deactivate:function(){return this.shown&&(this.$el.hide(),this.className&&this.$el.removeClass(this.className),this.completer.fire("textComplete:hide"),this.shown=!1),this},isUp:function(a){return 38===a.keyCode||a.ctrlKey&&80===a.keyCode},isDown:function(a){return 40===a.keyCode||a.ctrlKey&&78===a.keyCode},isEnter:function(a){var b=a.ctrlKey||a.altKey||a.metaKey||a.shiftKey;return!b&&(13===a.keyCode||9===a.keyCode||this.option.completeOnSpace===!0&&32===a.keyCode)},isPageup:function(a){return 33===a.keyCode},isPagedown:function(a){return 34===a.keyCode},isEscape:function(a){return 27===a.keyCode},_data:null,_index:null,_$header:null,_$noResultsMessage:null,_$footer:null,_bindEvents:function(){this.$el.on("mousedown."+this.id,".textcomplete-item",a.proxy(this._onClick,this)),this.$el.on("touchstart."+this.id,".textcomplete-item",a.proxy(this._onClick,this)),this.$el.on("mouseover."+this.id,".textcomplete-item",a.proxy(this._onMouseover,this)),this.$inputEl.on("keydown."+this.id,a.proxy(this._onKeydown,this))},_onClick:function(b){var c=a(b.target);b.preventDefault(),b.originalEvent.keepTextCompleteDropdown=this.id,c.hasClass("textcomplete-item")||(c=c.closest(".textcomplete-item"));var d=this.data[parseInt(c.data("index"),10)];this.completer.select(d.value,d.strategy,b);var e=this;setTimeout(function(){e.deactivate(),"touchstart"===b.type&&e.$inputEl.focus()},0)},_onMouseover:function(b){var c=a(b.target);b.preventDefault(),c.hasClass("textcomplete-item")||(c=c.closest(".textcomplete-item")),this._index=parseInt(c.data("index"),10),this._activateIndexedItem()},_onKeydown:function(b){if(this.shown){var c;switch(a.isFunction(this.option.onKeydown)&&(c=this.option.onKeydown(b,f)),null==c&&(c=this._defaultKeydown(b)),c){case f.KEY_UP:b.preventDefault(),this._up();break;case f.KEY_DOWN:b.preventDefault(),this._down();break;case f.KEY_ENTER:b.preventDefault(),this._enter(b);break;case f.KEY_PAGEUP:b.preventDefault(),this._pageup();break;case f.KEY_PAGEDOWN:b.preventDefault(),this._pagedown();break;case f.KEY_ESCAPE:b.preventDefault(),this.deactivate()}}},_defaultKeydown:function(a){return this.isUp(a)?f.KEY_UP:this.isDown(a)?f.KEY_DOWN:this.isEnter(a)?f.KEY_ENTER:this.isPageup(a)?f.KEY_PAGEUP:this.isPagedown(a)?f.KEY_PAGEDOWN:this.isEscape(a)?f.KEY_ESCAPE:void 0},_up:function(){0===this._index?this._index=this.data.length-1:this._index-=1,this._activateIndexedItem(),this._setScroll()},_down:function(){this._index===this.data.length-1?this._index=0:this._index+=1,this._activateIndexedItem(),this._setScroll()},_enter:function(a){var b=this.data[parseInt(this._getActiveElement().data("index"),10)];this.completer.select(b.value,b.strategy,a),this.deactivate()},_pageup:function(){var b=0,c=this._getActiveElement().position().top-this.$el.innerHeight();this.$el.children().each(function(d){return a(this).position().top+a(this).outerHeight()>c?(b=d,!1):void 0}),this._index=b,this._activateIndexedItem(),this._setScroll()},_pagedown:function(){var b=this.data.length-1,c=this._getActiveElement().position().top+this.$el.innerHeight();this.$el.children().each(function(d){return a(this).position().top>c?(b=d,!1):void 0}),this._index=b,this._activateIndexedItem(),this._setScroll()},_activateIndexedItem:function(){this.$el.find(".textcomplete-item.active").removeClass("active"),this._getActiveElement().addClass("active")},_getActiveElement:function(){return this.$el.children(".textcomplete-item:nth("+this._index+")")},_setScroll:function(){var a=this._getActiveElement(),b=a.position().top,c=a.outerHeight(),d=this.$el.innerHeight(),e=this.$el.scrollTop();0===this._index||this._index==this.data.length-1||0>b?this.$el.scrollTop(b+e):b+c>d&&this.$el.scrollTop(b+c+e-d)},_buildContents:function(a){var b,c,e,f="";for(c=0;c<a.length&&this.data.length!==this.maxCount;c++)b=a[c],d(this.data,b)||(e=this.data.length,this.data.push(b),f+='<li class="textcomplete-item" data-index="'+e+'"><a>',f+=b.strategy.template(b.value,b.term),f+="</a></li>");return f},_renderHeader:function(b){if(this.header){this._$header||(this._$header=a('<li class="textcomplete-header"></li>').prependTo(this.$el));var c=a.isFunction(this.header)?this.header(b):this.header;this._$header.html(c)}},_renderFooter:function(b){if(this.footer){this._$footer||(this._$footer=a('<li class="textcomplete-footer"></li>').appendTo(this.$el));var c=a.isFunction(this.footer)?this.footer(b):this.footer;this._$footer.html(c)}},_renderNoResultsMessage:function(b){if(this.noResultsMessage){this._$noResultsMessage||(this._$noResultsMessage=a('<li class="textcomplete-no-results-message"></li>').appendTo(this.$el));var c=a.isFunction(this.noResultsMessage)?this.noResultsMessage(b):this.noResultsMessage;this._$noResultsMessage.html(c)}},_renderContents:function(a){this._$footer?this._$footer.before(a):this.$el.append(a)},_fitToBottom:function(){var a=c.scrollTop()+c.height(),b=this.$el.height();this.$el.position().top+b>a&&(this.completer.$iframe||this.$el.offset({top:a-b}))},_fitToRight:function(){for(var a,b=this.option.rightEdgeOffset,d=this.$el.offset().left,e=this.$el.width(),f=c.width()-b;d+e>f&&(this.$el.offset({left:d-b}),a=this.$el.offset().left,!(a>=d));)d=a},_applyPlacement:function(a){return-1!==this.placement.indexOf("top")?a={top:"auto",bottom:this.$el.parent().height()-a.top+a.lineHeight,left:a.left}:(a.bottom="auto",delete a.lineHeight),-1!==this.placement.indexOf("absleft")?a.left=0:-1!==this.placement.indexOf("absright")&&(a.right=0,a.left="auto"),a}}),a.fn.textcomplete.Dropdown=b,a.extend(a.fn.textcomplete,f)}(a),+function(a){"use strict";function b(b){a.extend(this,b),this.cache&&(this.search=c(this.search))}var c=function(a){var b={};return function(c,d){b[c]?d(b[c]):a.call(this,c,function(a){b[c]=(b[c]||[]).concat(a),d.apply(null,arguments)})}};b.parse=function(c,d){return a.map(c,function(a){var c=new b(a);return c.el=d.el,c.$el=d.$el,c})},a.extend(b.prototype,{match:null,replace:null,search:null,id:null,cache:!1,context:function(){return!0},index:2,template:function(a){return a},idProperty:null}),a.fn.textcomplete.Strategy=b}(a),+function(a){"use strict";function b(){}var c=Date.now||function(){return(new Date).getTime()},d=function(a,b){var d,e,f,g,h,i=function(){var j=c()-g;b>j?d=setTimeout(i,b-j):(d=null,h=a.apply(f,e),f=e=null)};return function(){return f=this,e=arguments,g=c(),d||(d=setTimeout(i,b)),h}};a.extend(b.prototype,{id:null,completer:null,el:null,$el:null,option:null,initialize:function(b,c,e){this.el=b,this.$el=a(b),this.id=c.id+this.constructor.name,this.completer=c,this.option=e,this.option.debounce&&(this._onKeyup=d(this._onKeyup,this.option.debounce)),this._bindEvents()},destroy:function(){this.$el.off("."+this.id),this.$el=this.el=this.completer=null},select:function(){throw new Error("Not implemented")},getCaretPosition:function(){var b=this._getCaretRelativePosition(),c=this.$el.offset(),d=this.option.appendTo;if(d){d instanceof a||(d=a(d));var e=d.offsetParent().offset();c.top-=e.top,c.left-=e.left}return b.top+=c.top,b.left+=c.left,b},focus:function(){this.$el.focus()},_bindEvents:function(){this.$el.on("keyup."+this.id,a.proxy(this._onKeyup,this))},_onKeyup:function(a){this._skipSearch(a)||this.completer.trigger(this.getTextFromHeadToCaret(),!0)},_skipSearch:function(a){switch(a.keyCode){case 9:case 13:case 16:case 17:case 18:case 33:case 34:case 40:case 38:case 27:return!0}if(a.ctrlKey)switch(a.keyCode){case 78:case 80:return!0}}}),a.fn.textcomplete.Adapter=b}(a),+function(a){"use strict";function b(a,b,c){this.initialize(a,b,c)}a.extend(b.prototype,a.fn.textcomplete.Adapter.prototype,{select:function(b,c,d){var e,f=this.getTextFromHeadToCaret(),g=this.el.value.substring(this.el.selectionEnd),h=c.replace(b,d);"undefined"!=typeof h&&(a.isArray(h)&&(g=h[1]+g,h=h[0]),e=a.isFunction(c.match)?c.match(f):c.match,f=f.replace(e,h),this.$el.val(f+g),this.el.selectionStart=this.el.selectionEnd=f.length)},getTextFromHeadToCaret:function(){return this.el.value.substring(0,this.el.selectionEnd)},_getCaretRelativePosition:function(){var b=a.fn.textcomplete.getCaretCoordinates(this.el,this.el.selectionStart);return{top:b.top+this._calculateLineHeight()-this.$el.scrollTop(),left:b.left-this.$el.scrollLeft(),lineHeight:this._calculateLineHeight()}},_calculateLineHeight:function(){var a=parseInt(this.$el.css("line-height"),10);if(isNaN(a)){var b=this.el.parentNode,c=document.createElement(this.el.nodeName),d=this.el.style;c.setAttribute("style","margin:0px;padding:0px;font-family:"+d.fontFamily+";font-size:"+d.fontSize),c.innerHTML="test",b.appendChild(c),a=c.clientHeight,b.removeChild(c)}return a}}),a.fn.textcomplete.Textarea=b}(a),+function(a){"use strict";function b(b,d,e){this.initialize(b,d,e),a("<span>"+c+"</span>").css({position:"absolute",top:-9999,left:-9999}).insertBefore(b)}var c="吶";a.extend(b.prototype,a.fn.textcomplete.Textarea.prototype,{select:function(b,c,d){var e,f=this.getTextFromHeadToCaret(),g=this.el.value.substring(f.length),h=c.replace(b,d);if("undefined"!=typeof h){a.isArray(h)&&(g=h[1]+g,h=h[0]),e=a.isFunction(c.match)?c.match(f):c.match,f=f.replace(e,h),this.$el.val(f+g),this.el.focus();var i=this.el.createTextRange();i.collapse(!0),i.moveEnd("character",f.length),i.moveStart("character",f.length),i.select()}},getTextFromHeadToCaret:function(){this.el.focus();var a=document.selection.createRange();a.moveStart("character",-this.el.value.length);var b=a.text.split(c);return 1===b.length?b[0]:b[1]}}),a.fn.textcomplete.IETextarea=b}(a),+function(a){"use strict";function b(a,b,c){this.initialize(a,b,c)}a.extend(b.prototype,a.fn.textcomplete.Adapter.prototype,{select:function(b,c,d){var e=this.getTextFromHeadToCaret(),f=this.el.ownerDocument.getSelection(),g=f.getRangeAt(0),h=g.cloneRange();h.selectNodeContents(g.startContainer);var i,j=h.toString(),k=j.substring(g.startOffset),l=c.replace(b,d);if("undefined"!=typeof l){a.isArray(l)&&(k=l[1]+k,l=l[0]),i=a.isFunction(c.match)?c.match(e):c.match,e=e.replace(i,l).replace(/ $/,"&nbsp"),g.selectNodeContents(g.startContainer),g.deleteContents();var m=this.el.ownerDocument.createElement("div");m.innerHTML=e;var n=this.el.ownerDocument.createElement("div");n.innerHTML=k;for(var o,p,q=this.el.ownerDocument.createDocumentFragment();o=m.firstChild;)p=q.appendChild(o);for(;o=n.firstChild;)q.appendChild(o);g.insertNode(q),g.setStartAfter(p),g.collapse(!0),f.removeAllRanges(),f.addRange(g)}},_getCaretRelativePosition:function(){var b=this.el.ownerDocument.getSelection().getRangeAt(0).cloneRange(),c=b.endContainer.parentNode,d=this.el.ownerDocument.createElement("span");b.insertNode(d),b.selectNodeContents(d),b.deleteContents(),setTimeout(function(){c.normalize()},0);var e=a(d),f=e.offset();if(f.left-=this.$el.offset().left,f.top+=e.height()-this.$el.offset().top,f.lineHeight=e.height(),this.completer.$iframe){var g=this.completer.$iframe.offset();f.top+=g.top,f.left+=g.left,f.top-=a(this.completer.$iframe[0].contentWindow.document).scrollTop()}return e.remove(),f},getTextFromHeadToCaret:function(){var a=this.el.ownerDocument.getSelection().getRangeAt(0),b=a.cloneRange();return b.selectNodeContents(a.startContainer),b.toString().substring(0,a.startOffset)}}),a.fn.textcomplete.ContentEditable=b}(a),+function(a){"use strict";function b(a,b,c){this.initialize(a,b,c)}a.extend(b.prototype,a.fn.textcomplete.ContentEditable.prototype,{_bindEvents:function(){var b=this;this.option.ckeditor_instance.on("key",function(a){var c=a.data;return b._onKeyup(c),b.completer.dropdown.shown&&b._skipSearch(c)?!1:void 0},null,null,1),this.$el.on("keyup."+this.id,a.proxy(this._onKeyup,this))}}),a.fn.textcomplete.CKEditor=b}(a),function(a){function b(a,b,f){if(!d)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var g=f&&f.debug||!1;if(g){var h=document.querySelector("#input-textarea-caret-position-mirror-div");h&&h.parentNode.removeChild(h)}var i=document.createElement("div");i.id="input-textarea-caret-position-mirror-div",document.body.appendChild(i);var j=i.style,k=window.getComputedStyle?getComputedStyle(a):a.currentStyle;j.whiteSpace="pre-wrap","INPUT"!==a.nodeName&&(j.wordWrap="break-word"),j.position="absolute",g||(j.visibility="hidden"),c.forEach(function(a){j[a]=k[a]}),e?a.scrollHeight>parseInt(k.height)&&(j.overflowY="scroll"):j.overflow="hidden",i.textContent=a.value.substring(0,b),"INPUT"===a.nodeName&&(i.textContent=i.textContent.replace(/\s/g," "));var l=document.createElement("span");l.textContent=a.value.substring(b)||".",i.appendChild(l);var m={top:l.offsetTop+parseInt(k.borderTopWidth),left:l.offsetLeft+parseInt(k.borderLeftWidth)};return g?l.style.backgroundColor="#aaa":document.body.removeChild(i),m}var c=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],d="undefined"!=typeof window,e=d&&null!=window.mozInnerScreenX;a.fn.textcomplete.getCaretCoordinates=b}(a),a});
//# sourceMappingURL=dist/jquery.textcomplete.min.map
// SPDX-FileCopyrightText: 2024 Yuku Takahashi
//
// SPDX-License-Identifier: MIT

// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
/**
 * Friendica people autocomplete
 *
 * require jQuery, jquery.textcomplete
 *
 * for further documentation look at:
 * http://yuku-t.com/jquery-textcomplete/
 *
 * https://github.com/yuku-t/jquery-textcomplete/blob/master/doc/how_to_use.md
 */


function contact_search(term, callback, backend_url, type, mode) {

	// Check if there is a conversation id to include the unknown contacts of the conversation
	var conv_id = document.activeElement.id.match(/\d+$/);

	// Check if there is a cached result that contains the same information we would get with a full server-side search
	var bt = backend_url+type;
	if(!(bt in contact_search.cache)) contact_search.cache[bt] = {};

	var lterm = term.toLowerCase(); // Ignore case
	for(var t in contact_search.cache[bt]) {
		if(lterm.indexOf(t) >= 0) { // A more broad search has been performed already, so use those results
			// Filter old results locally
			var matching = contact_search.cache[bt][t].filter(function (x) { return (x.name.toLowerCase().indexOf(lterm) >= 0 || (typeof x.nick !== 'undefined' && x.nick.toLowerCase().indexOf(lterm) >= 0)); }); // Need to check that nick exists because circles don't have one
			matching.unshift({group: false, text: term, replace: term});
			setTimeout(function() { callback(matching); } , 1); // Use "pseudo-thread" to avoid some problems
			return;
		}
	}

	var postdata = {
		start:0,
		count:100,
		search:term,
		type:type,
	};

	if(conv_id !== null)
		postdata['conversation'] = conv_id[0];

	if(mode !== null)
		postdata['smode'] = mode;


	$.ajax({
		type:'POST',
		url: backend_url,
		data: postdata,
		dataType: 'json',
		success: function(data){
			// Cache results if we got them all (more information would not improve results)
			// data.count represents the maximum number of items
			if(data.items.length -1 < data.count) {
				contact_search.cache[bt][lterm] = data.items;
			}
			var items = data.items.slice(0);
			items.unshift({taggable:false, text: term, replace: term});
			callback(items);
		},
	}).fail(function () {callback([]); }); // Callback must be invoked even if something went wrong.
}
contact_search.cache = {};


function contact_format(item) {
	// Show contact information if not explicitly told to show something else
	if(typeof item.text === 'undefined') {
		var desc = ((item.label) ? item.nick + ' ' + item.label : item.nick);
		var group = ((item.group) ? 'group' : '');
		if(typeof desc === 'undefined') desc = '';
		if(desc) desc = ' ('+desc+')';
		return "<div class='{0}' title='{4}'><img class='acpopup-img' src='{1}'><span class='acpopup-contactname'>{2}</span><span class='acpopup-sub-text'>{3}</span><div class='clear'></div></div>".format(group, item.photo, item.name, desc, item.link);
	}
	else
		return "<div>" + item.text + "</div>";
}

function tag_format(item) {
	return "<div class='dropdown-item'>" + '#' + item.text + "</div>";
}

function editor_replace(item) {
	var result;

	if (typeof item.replace !== 'undefined') {
		result = '$1$2' + item.replace;
	} else if (typeof item.addr !== 'undefined') {
		result = '$1$2' + item.addr + ' ';
	} else {
		// $2 ensures that prefix (@,@!) is preserved
		var id = item.id;
		// don't add the id if it is empty (the id empty eg. if there are unknow contacts in thread)
		if (id.length < 1) {
			result = '$1$2' + item.nick.replace(' ', '') + ' ';
		} else {
			// 16 chars of hash should be enough. Full hash could be used if it can be done in a visually appealing way.
			// 16 chars is also the minimum length in the backend (otherwise it's interpreted as a local id).
			if (id.length > 16) {
				id = item.id.substring(0, 16);
			}
			result = '$1$2' + item.nick.replace(' ', '') + '+' + id + ' ';
		}
	}

	// UDP: signal when a community/group actor is selected via @mention
	if (item.group) {
		$(document).trigger('udp:group-mention', [item]);
	}

	return result;
}

function basic_replace(item) {
	if(typeof item.replace !== 'undefined')
		return '$1'+item.replace;

	return '$1'+item.name+' ';
}

function webbie_replace(item) {
	if(typeof item.replace !== 'undefined')
		return '$1'+item.replace;

	return '$1'+item.nick+' ';
}

function trim_replace(item) {
	if(typeof item.replace !== 'undefined')
		return '$1'+item.replace;

	return '$1'+item.name;
}


function submit_form(e) {
	$(e).parents('form').submit();
}

function getWord(text, caretPos) {
	var index = text.indexOf(caretPos);
	var postText = text.substring(caretPos, caretPos+8);
	if ((postText.indexOf("[/list]") > 0) || postText.indexOf("[/ul]") > 0 || postText.indexOf("[/ol]") > 0) {
		return postText;
	}
}

function getCaretPosition(ctrl) {
	var CaretPos = 0;   // IE Support
	if (document.selection) {
		ctrl.focus();
		var Sel = document.selection.createRange();
		Sel.moveStart('character', -ctrl.value.length);
		CaretPos = Sel.text.length;
	}
	// Firefox support
	else if (ctrl.selectionStart || ctrl.selectionStart == '0')
		CaretPos = ctrl.selectionStart;
	return (CaretPos);
}

function setCaretPosition(ctrl, pos){
	if(ctrl.setSelectionRange) {
		ctrl.focus();
		ctrl.setSelectionRange(pos,pos);
	}
	else if (ctrl.createTextRange) {
		var range = ctrl.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
}

function listNewLineAutocomplete(id) {
	var text = document.getElementById(id);
	var caretPos = getCaretPosition(text)
	var word = getWord(text.value, caretPos);
	if (word != null) {
		var textBefore = text.value.substring(0, caretPos);
		var textAfter  = text.value.substring(caretPos, text.length);
		$('#' + id).val(textBefore + '\r\n[li] ' + textAfter).trigger('change');
		setCaretPosition(text, caretPos + 5);
		return true;
	}
	else {
		return false;
	}
}

function string2bb(element) {
	if(element == 'bold') return 'b';
	else if(element == 'italic') return 'i';
	else if(element == 'underline') return 'u';
	else if(element == 'overline') return 'o';
	else if(element == 'strike') return 's';
	else return element;
}

/**
 * jQuery plugin 'editor_autocomplete'
 */
(function( $ ) {
	/**
	 * This function should be called immediately after $.textcomplete() to prevent the escape key press to propagate
	 * after the autocompletion dropdown has closed.
	 * This avoids the input textarea to lose focus, the modal window to close, etc... when the expected behavior is
	 * to just close the autocomplete dropdown.
	 *
	 * The custom event listener name allows removing this specific event listener, the "real" event this listens to
	 * is the part before the first dot.
	 *
	 * @returns {*}
	 */
	$.fn.fixTextcompleteEscape = function () {
		if (this.data('textcompleteEscapeFixed')) {
			return this;
		}

		this.data('textcompleteEscapeFixed', true);

		return this.on({
			'textComplete:show': function (e) {
				$(this).on('keydown.friendica.escape', function (e) {
					if (e.key === 'Escape') {
						e.stopPropagation();
					}
				});
			},
			'textComplete:hide': function (e) {
				$(this).off('keydown.friendica.escape');
			},
		});
	}

	$.fn.editor_autocomplete = function(backend_url) {

		// Autocomplete contacts
		contacts = {
			match: /(^|\s)(@\!*)([^ \n]+)$/,
			index: 3,
			search: function(term, callback) { contact_search(term, callback, backend_url, 'c'); },
			replace: editor_replace,
			template: contact_format,
		};

		// Autocomplete AP group accounts (single !, not !!)
		groups = {
			match: /(^|\s)(!)(?!!)([^ \n]+)$/,
			index: 3,
			search: function(term, callback) { contact_search(term, callback, backend_url, 'f'); },
			replace: editor_replace,
			template: contact_format,
		};

		// UDP: #! syntax — autocomplete Group actors the user belongs to
		udpCircles = {
			match: /(^|\s)(#!)([^ \n]+)$/,
			index: 3,
			search: function(term, callback) { contact_search(term, callback, backend_url, 'gg'); },
			replace: function(item) {
				// Activate the GC banner (same event the @mention path uses)
				if (item.group) {
					$(document).trigger('udp:group-mention', [item]);
				}
				// #! syntax needs just #!nick (no @addr, no +id suffix)
				return '$1#!' + (item.nick || '').replace(/\s+/g, '') + ' ';
			},
			template: contact_format,
		};

		// Autocomplete hashtags
		tags = {
			match: /(^|\s)(\#)([^ \n]{2,})$/,
			index: 3,
			search: function(term, callback) {
				$.getJSON(baseurl + '/hashtag/' + '?t=' + term)
				.done(function(data) {
					callback($.map(data, function(entry) {
						// .toLowerCase() enables case-insensitive search
						return entry.text.toLowerCase().indexOf(term.toLowerCase()) === 0 ? entry : null;
					}));
				});
			},
			replace: function(item) { return "$1$2" + item.text + ' '; },
			template: tag_format
		};

		// Autocomplete smilies e.g. ":like"
		smilies = {
			match: /(^|\s)(:[a-z]{2,})$/,
			index: 2,
			search: function(term, callback) { $.getJSON('smilies/json').done(function(data) { callback($.map(data, function(entry) { return entry.text.indexOf(term) === 0 ? entry : null; })); }); },
			template: function(item) { return item.icon + ' ' + item.text; },
			replace: function(item) { return "$1" + item.text + ' '; },
		};

		this.attr('autocomplete','off');
		this.textcomplete([contacts, udpCircles, groups, smilies, tags], {dropdownClassName: 'acpopup', debounce: 250, zIndex: 1050});
		this.fixTextcompleteEscape();

		return this;
	};

	$.fn.search_autocomplete = function(backend_url) {
		// Autocomplete contacts
		contacts = {
			match: /(^@)([^\n]{2,})$/,
			index: 2,
			search: function(term, callback) { contact_search(term, callback, backend_url, 'x', 'contact'); },
			replace: webbie_replace,
			template: contact_format,
		};

		// Autocomplete group accounts
		community = {
			match: /(^!)([^\n]{2,})$/,
			index: 2,
			search: function(term, callback) { contact_search(term, callback, backend_url, 'x', 'community'); },
			replace: webbie_replace,
			template: contact_format,
		};

		// Autocomplete hashtags
		tags = {
			match: /(^|\s)(\#)([^ \n]{2,})$/,
			index: 3,
			search: function(term, callback) { $.getJSON(baseurl + '/hashtag/' + '?t=' + term).done(function(data) { callback($.map(data, function(entry) { return entry.text.indexOf(term) === 0 ? entry : null; })); }); },
			replace: function(item) { return "$1$2" + item.text; },
			template: tag_format
		};

		this.attr('autocomplete', 'off');
		this.textcomplete([contacts, community, tags], {dropdownClassName: 'acpopup', maxCount: 100, debounce: 250, zIndex: 1050});
		this.fixTextcompleteEscape();
		this.on('textComplete:select', function(e, value, strategy) { submit_form(this); });

		return this;
	};

	$.fn.name_autocomplete = function(backend_url, typ, autosubmit, onselect) {
		if(typeof typ === 'undefined') typ = '';
		if(typeof autosubmit === 'undefined') autosubmit = false;

		// Autocomplete contacts
		names = {
			match: /(^)([^\n]+)$/,
			index: 2,
			search: function(term, callback) { contact_search(term, callback, backend_url, typ); },
			replace: trim_replace,
			template: contact_format,
		};

		this.attr('autocomplete','off');
		this.textcomplete([names], {dropdownClassName: 'acpopup', debounce: 250, zIndex: 1050});
		this.fixTextcompleteEscape();

		if(autosubmit) {
			this.on('textComplete:select', function(e,value,strategy) { submit_form(this); });
		}

		if(typeof onselect !== 'undefined') {
			this.on('textComplete:select', function(e, value, strategy) { onselect(value); });
		}

		return this;
	};

	$.fn.bbco_autocomplete = function(type) {
		if (type === 'bbcode') {
			var open_close_elements = ['bold', 'italic', 'underline', 'overline', 'strike', 'quote', 'code', 'spoiler', 'map', 'img', 'url', 'audio', 'video', 'embed', 'list', 'ul', 'ol', 'li', 'table', 'tr', 'th', 'td', 'center', 'color', 'font', 'size', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'nobb', 'noparse', 'pre', 'abstract', 'share', 'attachment', 'mark'];
			var open_elements = ['*', 'hr'];

			var elements = open_close_elements.concat(open_elements);
		}

		bbco = {
			match: /\[(\w*\**)$/,
			search: function (term, callback) {
				callback($.map(elements, function (element) {
					return element.indexOf(term) === 0 ? element : null;
				}));
			},
			index: 1,
			replace: function (element) {
				element = string2bb(element);
				if(open_elements.indexOf(element) < 0) {
					if(element === 'list' || element === 'ol' || element === 'ul') {
						return ['\[' + element + '\]' + '\n\[li\] ', '\n\[/' + element + '\]'];
					}
					else if(element === 'table') {
						return ['\[' + element + '\]' + '\n\[tr\]', '\[/tr\]\n\[/' + element + '\]'];
					}
					else {
						return ['\[' + element + '\]', '\[/' + element + '\]'];
					}
				}
				else {
					return '\[' + element + '\] ';
				}
			}
		};

		this.attr('autocomplete','off');
		this.textcomplete([bbco], {dropdownClassName: 'acpopup', debounce: 250, zIndex: 1050});
		this.fixTextcompleteEscape();

		this.on('textComplete:select', function(e, value, strategy) { value; });

		this.keypress(function(e){
			if (e.keyCode == 13) {
				var x = listNewLineAutocomplete(this.id);
				if(x) {
					e.stopImmediatePropagation();
					e.preventDefault();
				}
			}
		});

		return this;
	};
})( jQuery );
// @license-end

/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!U){U=$=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=Math.max((l!==!1?Math.min(h,a(l,"x")):h)-z-D,0),_.h=Math.max((f!==!1?Math.min(s,a(f,"y")):s)-N-j,0),I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){x||(V=!1,E=t(i),x=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),L=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),y=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),S=t('<button type="button"/>').attr({id:Z+"Slideshow"}),L),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(S)),e.body&&!x.parent().length&&t(e.body).append(v,x.append(y,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;U&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),U&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if($=!0,q=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){L.show()},100),_.get("inline")){var c=t(e).eq(0);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),q=_.get("createImg"),t(q).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(q.height=q.height/i.devicePixelRatio,q.width=q.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){q.height-=q.height*e,q.width-=q.width*e},_.mw&&q.width>_.mw&&(e=(q.width-_.mw)/q.width,o()),_.mh&&q.height>_.mh&&(e=(q.height-_.mh)/q.height,o())),_.h&&(q.style.marginTop=Math.max(_.mh-q.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(q.style.cursor="pointer",t(q).bind("click."+Z,function(){J.next()})),q.style.width=q.width+"px",q.style.height=q.height+"px",h(q)},1)}),q.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,W,E,I,M,L,F,R,S,K,P,B,O,_,j,D,N,z,A,q,U,$,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){S.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),x.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),S.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),x.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,S.hide(),t(),ae.unbind(ne,e).unbind(ie,t),x.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),S.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=x.offset();if(E.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,x.css({position:"fixed"})):(l=h,d=s,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){n(),$=!1,y[0].style.width=_.w+z+D+"px",y[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;U&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if(U){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(q).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,a=W.length;U&&(o=function(){clearTimeout(Q),L.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!$&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!$&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){U&&!G&&(G=!0,U=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t[Y].close(),x.stop(!1,!0).remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);
!function(i){"function"==typeof define&&define.amd?define(["jquery"],i):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),i(t),t}:i(jQuery)}(function(a){a.jGrowl=function(e,t){0===a("#jGrowl").length&&a('<div id="jGrowl"></div>').addClass((t&&t.position?t:a.jGrowl.defaults).position).appendTo((t&&t.appendTo?t:a.jGrowl.defaults).appendTo),a("#jGrowl").jGrowl(e,t)},a.fn.jGrowl=function(e,t){var i;if(void 0===t&&a.isPlainObject(e)&&(e=(t=e).message),a.isFunction(this.each))return i=arguments,this.each(function(){void 0===a(this).data("jGrowl.instance")&&(a(this).data("jGrowl.instance",a.extend(new a.fn.jGrowl,{notifications:[],element:null,interval:null})),a(this).data("jGrowl.instance").startup(this)),a.isFunction(a(this).data("jGrowl.instance")[e])?a(this).data("jGrowl.instance")[e].apply(a(this).data("jGrowl.instance"),a.makeArray(i).slice(1)):a(this).data("jGrowl.instance").create(e,t)})},a.extend(a.fn.jGrowl.prototype,{defaults:{pool:0,header:"",group:"",sticky:!1,position:"top-right",appendTo:"body",glue:"after",theme:"default",themeState:"highlight",corners:"10px",check:250,life:3e3,closeDuration:"normal",openDuration:"normal",easing:"swing",closer:!0,closeTemplate:"&times;",closerTemplate:"<div>[ close all ]</div>",log:function(){},beforeOpen:function(){},afterOpen:function(){},open:function(){},beforeClose:function(){},close:function(){},click:function(){},animateOpen:{opacity:"show"},animateClose:{opacity:"hide"}},notifications:[],element:null,interval:null,create:function(e,t){t=a.extend({},this.defaults,t);void 0!==t.speed&&(t.openDuration=t.speed,t.closeDuration=t.speed),this.notifications.push({message:e,options:t}),t.log.apply(this.element,[this.element,e,t])},render:function(e){var t=this,i=e.message,n=e.options,o=(n.themeState=""===n.themeState?"":"ui-state-"+n.themeState,a("<div/>").addClass("jGrowl-notification alert "+n.themeState+" ui-corner-all"+(void 0!==n.group&&""!==n.group?" "+n.group:"")).append(a("<button/>").addClass("jGrowl-close").html(n.closeTemplate)).append(a("<div/>").addClass("jGrowl-header").html(n.header)).append(a("<div/>").addClass("jGrowl-message").html(i)).data("jGrowl",n).addClass(n.theme).children(".jGrowl-close").bind("click.jGrowl",function(){return a(this).parent().trigger("jGrowl.beforeClose"),!1}).parent());a(o).bind("mouseover.jGrowl",function(){a(".jGrowl-notification",t.element).data("jGrowl.pause",!0)}).bind("mouseout.jGrowl",function(){a(".jGrowl-notification",t.element).data("jGrowl.pause",!1)}).bind("jGrowl.beforeOpen",function(){!1!==n.beforeOpen.apply(o,[o,i,n,t.element])&&a(this).trigger("jGrowl.open")}).bind("jGrowl.open",function(){!1!==n.open.apply(o,[o,i,n,t.element])&&("after"==n.glue?a(".jGrowl-notification:last",t.element).after(o):a(".jGrowl-notification:first",t.element).before(o),a(this).animate(n.animateOpen,n.openDuration,n.easing,function(){!1===a.support.opacity&&this.style.removeAttribute("filter"),null!==a(this).data("jGrowl")&&void 0!==a(this).data("jGrowl")&&(a(this).data("jGrowl").created=new Date),a(this).trigger("jGrowl.afterOpen")}))}).bind("jGrowl.afterOpen",function(){n.afterOpen.apply(o,[o,i,n,t.element])}).bind("click",function(){n.click.apply(o,[o,i,n,t.element])}).bind("jGrowl.beforeClose",function(){!1!==n.beforeClose.apply(o,[o,i,n,t.element])&&a(this).trigger("jGrowl.close")}).bind("jGrowl.close",function(){a(this).data("jGrowl.pause",!0),a(this).animate(n.animateClose,n.closeDuration,n.easing,function(){(!a.isFunction(n.close)||!1!==n.close.apply(o,[o,i,n,t.element]))&&a(this).remove()})}).trigger("jGrowl.beforeOpen"),""!==n.corners&&void 0!==a.fn.corner&&a(o).corner(n.corners),1<a(".jGrowl-notification:parent",t.element).length&&0===a(".jGrowl-closer",t.element).length&&!1!==this.defaults.closer&&a(this.defaults.closerTemplate).addClass("jGrowl-closer "+this.defaults.themeState+" ui-corner-all").addClass(this.defaults.theme).appendTo(t.element).animate(this.defaults.animateOpen,this.defaults.speed,this.defaults.easing).bind("click.jGrowl",function(){a(this).siblings().trigger("jGrowl.beforeClose"),a.isFunction(t.defaults.closer)&&t.defaults.closer.apply(a(this).parent()[0],[a(this).parent()[0]])})},update:function(){a(this.element).find(".jGrowl-notification:parent").each(function(){void 0!==a(this).data("jGrowl")&&void 0!==a(this).data("jGrowl").created&&a(this).data("jGrowl").created.getTime()+parseInt(a(this).data("jGrowl").life,10)<(new Date).getTime()&&!0!==a(this).data("jGrowl").sticky&&(void 0===a(this).data("jGrowl.pause")||!0!==a(this).data("jGrowl.pause"))&&a(this).trigger("jGrowl.beforeClose")}),0<this.notifications.length&&(0===this.defaults.pool||a(this.element).find(".jGrowl-notification:parent").length<this.defaults.pool)&&this.render(this.notifications.shift()),a(this.element).find(".jGrowl-notification:parent").length<2&&a(this.element).find(".jGrowl-closer").animate(this.defaults.animateClose,this.defaults.speed,this.defaults.easing,function(){a(this).remove()})},startup:function(e){this.element=a(e).addClass("jGrowl").append('<div class="jGrowl-notification"></div>'),this.interval=setInterval(function(){var t=a(e).data("jGrowl.instance");if(void 0!==t)try{t.update()}catch(e){throw t.shutdown(),e}},parseInt(this.defaults.check,10))},shutdown:function(){try{a(this.element).removeClass("jGrowl").find(".jGrowl-notification").trigger("jGrowl.close").parent().empty()}catch(e){throw e}finally{clearInterval(this.interval)}},close:function(){a(this.element).find(".jGrowl-notification").each(function(){a(this).trigger("jGrowl.beforeClose")})}}),a.jGrowl.defaults=a.fn.jGrowl.prototype.defaults});
//# sourceMappingURL=jquery.jgrowl.map
var DateFormatter;!function(){"use strict";var D,s,r,a,n;D=function(e,t){return"string"==typeof e&&"string"==typeof t&&e.toLowerCase()===t.toLowerCase()},s=function(e,t,a){var n=a||"0",r=e.toString();return r.length<t?s(n+r,t):r},r=function(e){var t,a;for(e=e||{},t=1;t<arguments.length;t++)if(a=arguments[t])for(var n in a)a.hasOwnProperty(n)&&("object"==typeof a[n]?r(e[n],a[n]):e[n]=a[n]);return e},a=function(e,t){for(var a=0;a<t.length;a++)if(t[a].toLowerCase()===e.toLowerCase())return a;return-1},n={dateSettings:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],meridiem:["AM","PM"],ordinal:function(e){var t=e%10,a={1:"st",2:"nd",3:"rd"};return 1!==Math.floor(e%100/10)&&a[t]?a[t]:"th"}},separators:/[ \-+\/\.T:@]/g,validParts:/[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,intParts:/[djwNzmnyYhHgGis]/g,tzParts:/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,tzClip:/[^-+\dA-Z]/g},(DateFormatter=function(e){var t=this,a=r(n,e);t.dateSettings=a.dateSettings,t.separators=a.separators,t.validParts=a.validParts,t.intParts=a.intParts,t.tzParts=a.tzParts,t.tzClip=a.tzClip}).prototype={constructor:DateFormatter,getMonth:function(e){var t;return 0===(t=a(e,this.dateSettings.monthsShort)+1)&&(t=a(e,this.dateSettings.months)+1),t},parseDate:function(e,t){var a,n,r,o,i,s,d,u,l,f,c=this,m=!1,h=!1,g=c.dateSettings,p={date:null,year:null,month:null,day:null,hour:0,min:0,sec:0};if(!e)return null;if(e instanceof Date)return e;if("U"===t)return(r=parseInt(e))?new Date(1e3*r):e;switch(typeof e){case"number":return new Date(e);case"string":break;default:return null}if(!(a=t.match(c.validParts))||0===a.length)throw new Error("Invalid date format definition.");for(n=e.replace(c.separators,"\0").split("\0"),r=0;r<n.length;r++)switch(o=n[r],i=parseInt(o),a[r]){case"y":case"Y":if(!i)return null;l=o.length,p.year=2===l?parseInt((i<70?"20":"19")+o):i,m=!0;break;case"m":case"n":case"M":case"F":if(isNaN(i)){if(!(0<(s=c.getMonth(o))))return null;p.month=s}else{if(!(1<=i&&i<=12))return null;p.month=i}m=!0;break;case"d":case"j":if(!(1<=i&&i<=31))return null;p.day=i,m=!0;break;case"g":case"h":if(f=n[d=-1<a.indexOf("a")?a.indexOf("a"):-1<a.indexOf("A")?a.indexOf("A"):-1],-1<d)u=D(f,g.meridiem[0])?0:D(f,g.meridiem[1])?12:-1,1<=i&&i<=12&&-1<u?p.hour=i+u-1:0<=i&&i<=23&&(p.hour=i);else{if(!(0<=i&&i<=23))return null;p.hour=i}h=!0;break;case"G":case"H":if(!(0<=i&&i<=23))return null;p.hour=i,h=!0;break;case"i":if(!(0<=i&&i<=59))return null;p.min=i,h=!0;break;case"s":if(!(0<=i&&i<=59))return null;p.sec=i,h=!0}if(!0===m&&p.year&&p.month&&p.day)p.date=new Date(p.year,p.month-1,p.day,p.hour,p.min,p.sec,0);else{if(!0!==h)return null;p.date=new Date(0,0,0,p.hour,p.min,p.sec,0)}return p.date},guessDate:function(e,t){if("string"!=typeof e)return e;var a,n,r,o,i,s,d=e.replace(this.separators,"\0").split("\0"),u=t.match(this.validParts),l=new Date,f=0;if(!/^[djmn]/g.test(u[0]))return e;for(r=0;r<d.length;r++){if(f=2,i=d[r],s=parseInt(i.substr(0,2)),isNaN(s))return null;switch(r){case 0:"m"===u[0]||"n"===u[0]?l.setMonth(s-1):l.setDate(s);break;case 1:"m"===u[0]||"n"===u[0]?l.setDate(s):l.setMonth(s-1);break;case 2:if(n=l.getFullYear(),f=(a=i.length)<4?a:4,!(n=parseInt(a<4?n.toString().substr(0,4-a)+i:i.substr(0,4))))return null;l.setFullYear(n);break;case 3:l.setHours(s);break;case 4:l.setMinutes(s);break;case 5:l.setSeconds(s)}0<(o=i.substr(f)).length&&d.splice(r+1,0,o)}return l},parseFormat:function(e,n){var a,t=this,r=t.dateSettings,o=/\\?(.?)/gi,i=function(e,t){return a[e]?a[e]():t};return a={d:function(){return s(a.j(),2)},D:function(){return r.daysShort[a.w()]},j:function(){return n.getDate()},l:function(){return r.days[a.w()]},N:function(){return a.w()||7},w:function(){return n.getDay()},z:function(){var e=new Date(a.Y(),a.n()-1,a.j()),t=new Date(a.Y(),0,1);return Math.round((e-t)/864e5)},W:function(){var e=new Date(a.Y(),a.n()-1,a.j()-a.N()+3),t=new Date(e.getFullYear(),0,4);return s(1+Math.round((e-t)/864e5/7),2)},F:function(){return r.months[n.getMonth()]},m:function(){return s(a.n(),2)},M:function(){return r.monthsShort[n.getMonth()]},n:function(){return n.getMonth()+1},t:function(){return new Date(a.Y(),a.n(),0).getDate()},L:function(){var e=a.Y();return e%4==0&&e%100!=0||e%400==0?1:0},o:function(){var e=a.n(),t=a.W();return a.Y()+(12===e&&t<9?1:1===e&&9<t?-1:0)},Y:function(){return n.getFullYear()},y:function(){return a.Y().toString().slice(-2)},a:function(){return a.A().toLowerCase()},A:function(){var e=a.G()<12?0:1;return r.meridiem[e]},B:function(){var e=3600*n.getUTCHours(),t=60*n.getUTCMinutes(),a=n.getUTCSeconds();return s(Math.floor((e+t+a+3600)/86.4)%1e3,3)},g:function(){return a.G()%12||12},G:function(){return n.getHours()},h:function(){return s(a.g(),2)},H:function(){return s(a.G(),2)},i:function(){return s(n.getMinutes(),2)},s:function(){return s(n.getSeconds(),2)},u:function(){return s(1e3*n.getMilliseconds(),6)},e:function(){return/\((.*)\)/.exec(String(n))[1]||"Coordinated Universal Time"},I:function(){return new Date(a.Y(),0)-Date.UTC(a.Y(),0)!=new Date(a.Y(),6)-Date.UTC(a.Y(),6)?1:0},O:function(){var e=n.getTimezoneOffset(),t=Math.abs(e);return(0<e?"-":"+")+s(100*Math.floor(t/60)+t%60,4)},P:function(){var e=a.O();return e.substr(0,3)+":"+e.substr(3,2)},T:function(){return(String(n).match(t.tzParts)||[""]).pop().replace(t.tzClip,"")||"UTC"},Z:function(){return 60*-n.getTimezoneOffset()},c:function(){return"Y-m-d\\TH:i:sP".replace(o,i)},r:function(){return"D, d M Y H:i:s O".replace(o,i)},U:function(){return n.getTime()/1e3||0}},i(e,e)},formatDate:function(e,t){var a,n,r,o,i,s="";if("string"==typeof e&&!(e=this.parseDate(e,t)))return null;if(e instanceof Date){for(r=t.length,a=0;a<r;a++)"S"!==(i=t.charAt(a))&&"\\"!==i&&(0<a&&"\\"===t.charAt(a-1)?s+=i:(o=this.parseFormat(i,e),a!==r-1&&this.intParts.test(i)&&"S"===t.charAt(a+1)&&(n=parseInt(o)||0,o+=this.dateSettings.ordinal(n)),s+=o));return s}return""}}}();var datetimepickerFactory=function(L){"use strict";var s={i18n:{ar:{months:["كانون الثاني","شباط","آذار","نيسان","مايو","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],dayOfWeekShort:["ن","ث","ع","خ","ج","س","ح"],dayOfWeek:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت","الأحد"]},ro:{months:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],dayOfWeekShort:["Du","Lu","Ma","Mi","Jo","Vi","Sâ"],dayOfWeek:["Duminică","Luni","Marţi","Miercuri","Joi","Vineri","Sâmbătă"]},id:{months:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],dayOfWeekShort:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],dayOfWeek:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},is:{months:["Janúar","Febrúar","Mars","Apríl","Maí","Júní","Júlí","Ágúst","September","Október","Nóvember","Desember"],dayOfWeekShort:["Sun","Mán","Þrið","Mið","Fim","Fös","Lau"],dayOfWeek:["Sunnudagur","Mánudagur","Þriðjudagur","Miðvikudagur","Fimmtudagur","Föstudagur","Laugardagur"]},bg:{months:["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],dayOfWeekShort:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],dayOfWeek:["Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота"]},fa:{months:["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],dayOfWeekShort:["یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],dayOfWeek:["یک‌شنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه","شنبه","یک‌شنبه"]},ru:{months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],dayOfWeekShort:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],dayOfWeek:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]},uk:{months:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],dayOfWeekShort:["Ндл","Пнд","Втр","Срд","Чтв","Птн","Сбт"],dayOfWeek:["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"]},en:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],dayOfWeekShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},el:{months:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],dayOfWeekShort:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],dayOfWeek:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"]},de:{months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],dayOfWeekShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayOfWeek:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},nl:{months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],dayOfWeekShort:["zo","ma","di","wo","do","vr","za"],dayOfWeek:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},tr:{months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],dayOfWeekShort:["Paz","Pts","Sal","Çar","Per","Cum","Cts"],dayOfWeek:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]},fr:{months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],dayOfWeekShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],dayOfWeek:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},es:{months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],dayOfWeekShort:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],dayOfWeek:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]},th:{months:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],dayOfWeekShort:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],dayOfWeek:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์","เสาร์","อาทิตย์"]},pl:{months:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"],dayOfWeekShort:["nd","pn","wt","śr","cz","pt","sb"],dayOfWeek:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},pt:{months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dayOfWeekShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],dayOfWeek:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]},ch:{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayOfWeekShort:["日","一","二","三","四","五","六"]},se:{months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],dayOfWeekShort:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"]},km:{months:["មករា​","កុម្ភៈ","មិនា​","មេសា​","ឧសភា​","មិថុនា​","កក្កដា​","សីហា​","កញ្ញា​","តុលា​","វិច្ឆិកា","ធ្នូ​"],dayOfWeekShort:["អាទិ​","ច័ន្ទ​","អង្គារ​","ពុធ​","ព្រហ​​","សុក្រ​","សៅរ៍"],dayOfWeek:["អាទិត្យ​","ច័ន្ទ​","អង្គារ​","ពុធ​","ព្រហស្បតិ៍​","សុក្រ​","សៅរ៍"]},kr:{months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dayOfWeekShort:["일","월","화","수","목","금","토"],dayOfWeek:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]},it:{months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],dayOfWeekShort:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],dayOfWeek:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"]},da:{months:["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],dayOfWeekShort:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],dayOfWeek:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},no:{months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],dayOfWeekShort:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],dayOfWeek:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"]},ja:{months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dayOfWeekShort:["日","月","火","水","木","金","土"],dayOfWeek:["日曜","月曜","火曜","水曜","木曜","金曜","土曜"]},vi:{months:["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],dayOfWeekShort:["CN","T2","T3","T4","T5","T6","T7"],dayOfWeek:["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"]},sl:{months:["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],dayOfWeekShort:["Ned","Pon","Tor","Sre","Čet","Pet","Sob"],dayOfWeek:["Nedelja","Ponedeljek","Torek","Sreda","Četrtek","Petek","Sobota"]},cs:{months:["Leden","Únor","Březen","Duben","Květen","Červen","Červenec","Srpen","Září","Říjen","Listopad","Prosinec"],dayOfWeekShort:["Ne","Po","Út","St","Čt","Pá","So"]},hu:{months:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],dayOfWeekShort:["Va","Hé","Ke","Sze","Cs","Pé","Szo"],dayOfWeek:["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"]},az:{months:["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"],dayOfWeekShort:["B","Be","Ça","Ç","Ca","C","Ş"],dayOfWeek:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"]},bs:{months:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],dayOfWeekShort:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],dayOfWeek:["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"]},ca:{months:["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],dayOfWeekShort:["Dg","Dl","Dt","Dc","Dj","Dv","Ds"],dayOfWeek:["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"]},"en-GB":{months:["January","February","March","April","May","June","July","August","September","October","November","December"],dayOfWeekShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},et:{months:["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],dayOfWeekShort:["P","E","T","K","N","R","L"],dayOfWeek:["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"]},eu:{months:["Urtarrila","Otsaila","Martxoa","Apirila","Maiatza","Ekaina","Uztaila","Abuztua","Iraila","Urria","Azaroa","Abendua"],dayOfWeekShort:["Ig.","Al.","Ar.","Az.","Og.","Or.","La."],dayOfWeek:["Igandea","Astelehena","Asteartea","Asteazkena","Osteguna","Ostirala","Larunbata"]},fi:{months:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],dayOfWeekShort:["Su","Ma","Ti","Ke","To","Pe","La"],dayOfWeek:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},gl:{months:["Xan","Feb","Maz","Abr","Mai","Xun","Xul","Ago","Set","Out","Nov","Dec"],dayOfWeekShort:["Dom","Lun","Mar","Mer","Xov","Ven","Sab"],dayOfWeek:["Domingo","Luns","Martes","Mércores","Xoves","Venres","Sábado"]},hr:{months:["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],dayOfWeekShort:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],dayOfWeek:["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"]},ko:{months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dayOfWeekShort:["일","월","화","수","목","금","토"],dayOfWeek:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]},lt:{months:["Sausio","Vasario","Kovo","Balandžio","Gegužės","Birželio","Liepos","Rugpjūčio","Rugsėjo","Spalio","Lapkričio","Gruodžio"],dayOfWeekShort:["Sek","Pir","Ant","Tre","Ket","Pen","Šeš"],dayOfWeek:["Sekmadienis","Pirmadienis","Antradienis","Trečiadienis","Ketvirtadienis","Penktadienis","Šeštadienis"]},lv:{months:["Janvāris","Februāris","Marts","Aprīlis ","Maijs","Jūnijs","Jūlijs","Augusts","Septembris","Oktobris","Novembris","Decembris"],dayOfWeekShort:["Sv","Pr","Ot","Tr","Ct","Pk","St"],dayOfWeek:["Svētdiena","Pirmdiena","Otrdiena","Trešdiena","Ceturtdiena","Piektdiena","Sestdiena"]},mk:{months:["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"],dayOfWeekShort:["нед","пон","вто","сре","чет","пет","саб"],dayOfWeek:["Недела","Понеделник","Вторник","Среда","Четврток","Петок","Сабота"]},mn:{months:["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар"],dayOfWeekShort:["Дав","Мяг","Лха","Пүр","Бсн","Бям","Ням"],dayOfWeek:["Даваа","Мягмар","Лхагва","Пүрэв","Баасан","Бямба","Ням"]},"pt-BR":{months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dayOfWeekShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],dayOfWeek:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]},sk:{months:["Január","Február","Marec","Apríl","Máj","Jún","Júl","August","September","Október","November","December"],dayOfWeekShort:["Ne","Po","Ut","St","Št","Pi","So"],dayOfWeek:["Nedeľa","Pondelok","Utorok","Streda","Štvrtok","Piatok","Sobota"]},sq:{months:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"],dayOfWeekShort:["Die","Hën","Mar","Mër","Enj","Pre","Shtu"],dayOfWeek:["E Diel","E Hënë","E Martē","E Mërkurë","E Enjte","E Premte","E Shtunë"]},"sr-YU":{months:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],dayOfWeekShort:["Ned","Pon","Uto","Sre","čet","Pet","Sub"],dayOfWeek:["Nedelja","Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota"]},sr:{months:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"],dayOfWeekShort:["нед","пон","уто","сре","чет","пет","суб"],dayOfWeek:["Недеља","Понедељак","Уторак","Среда","Четвртак","Петак","Субота"]},sv:{months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],dayOfWeekShort:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"],dayOfWeek:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"]},"zh-TW":{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayOfWeekShort:["日","一","二","三","四","五","六"],dayOfWeek:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},zh:{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayOfWeekShort:["日","一","二","三","四","五","六"],dayOfWeek:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},ug:{months:["1-ئاي","2-ئاي","3-ئاي","4-ئاي","5-ئاي","6-ئاي","7-ئاي","8-ئاي","9-ئاي","10-ئاي","11-ئاي","12-ئاي"],dayOfWeek:["يەكشەنبە","دۈشەنبە","سەيشەنبە","چارشەنبە","پەيشەنبە","جۈمە","شەنبە"]},he:{months:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],dayOfWeekShort:["א'","ב'","ג'","ד'","ה'","ו'","שבת"],dayOfWeek:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת","ראשון"]},hy:{months:["Հունվար","Փետրվար","Մարտ","Ապրիլ","Մայիս","Հունիս","Հուլիս","Օգոստոս","Սեպտեմբեր","Հոկտեմբեր","Նոյեմբեր","Դեկտեմբեր"],dayOfWeekShort:["Կի","Երկ","Երք","Չոր","Հնգ","Ուրբ","Շբթ"],dayOfWeek:["Կիրակի","Երկուշաբթի","Երեքշաբթի","Չորեքշաբթի","Հինգշաբթի","Ուրբաթ","Շաբաթ"]},kg:{months:["Үчтүн айы","Бирдин айы","Жалган Куран","Чын Куран","Бугу","Кулжа","Теке","Баш Оона","Аяк Оона","Тогуздун айы","Жетинин айы","Бештин айы"],dayOfWeekShort:["Жек","Дүй","Шей","Шар","Бей","Жум","Ише"],dayOfWeek:["Жекшемб","Дүйшөмб","Шейшемб","Шаршемб","Бейшемби","Жума","Ишенб"]},rm:{months:["Schaner","Favrer","Mars","Avrigl","Matg","Zercladur","Fanadur","Avust","Settember","October","November","December"],dayOfWeekShort:["Du","Gli","Ma","Me","Gie","Ve","So"],dayOfWeek:["Dumengia","Glindesdi","Mardi","Mesemna","Gievgia","Venderdi","Sonda"]},ka:{months:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"],dayOfWeekShort:["კვ","ორშ","სამშ","ოთხ","ხუთ","პარ","შაბ"],dayOfWeek:["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"]}},ownerDocument:document,contentWindow:window,value:"",rtl:!1,format:"Y/m/d H:i",formatTime:"H:i",formatDate:"Y/m/d",startDate:!1,step:60,monthChangeSpinner:!0,closeOnDateSelect:!1,closeOnTimeSelect:!0,closeOnWithoutClick:!0,closeOnInputClick:!0,openOnFocus:!0,timepicker:!0,datepicker:!0,weeks:!1,defaultTime:!1,defaultDate:!1,minDate:!1,maxDate:!1,minTime:!1,maxTime:!1,minDateTime:!1,maxDateTime:!1,allowTimes:[],opened:!1,initTime:!0,inline:!1,theme:"",touchMovedThreshold:5,onSelectDate:function(){},onSelectTime:function(){},onChangeMonth:function(){},onGetWeekOfYear:function(){},onChangeYear:function(){},onChangeDateTime:function(){},onShow:function(){},onClose:function(){},onGenerate:function(){},withoutCopyright:!0,inverseButton:!1,hours12:!1,next:"xdsoft_next",prev:"xdsoft_prev",dayOfWeekStart:0,parentID:"body",timeHeightInTimePicker:25,timepickerScrollbar:!0,todayButton:!0,prevButton:!0,nextButton:!0,defaultSelect:!0,scrollMonth:!0,scrollTime:!0,scrollInput:!0,lazyInit:!1,mask:!1,validateOnBlur:!0,allowBlank:!0,yearStart:1950,yearEnd:2050,monthStart:0,monthEnd:11,style:"",id:"",fixed:!1,roundTime:"round",className:"",weekends:[],highlightedDates:[],highlightedPeriods:[],allowDates:[],allowDateRe:null,disabledDates:[],disabledWeekDays:[],yearOffset:0,beforeShowDay:null,enterLikeTab:!0,showApplyButton:!1,insideParent:!1},E=null,n=null,R="en",a={meridiem:["AM","PM"]},r=function(){var e=s.i18n[R],t={days:e.dayOfWeek,daysShort:e.dayOfWeekShort,months:e.months,monthsShort:L.map(e.months,function(e){return e.substring(0,3)})};"function"==typeof DateFormatter&&(E=n=new DateFormatter({dateSettings:L.extend({},a,t)}))},o={moment:{default_options:{format:"YYYY/MM/DD HH:mm",formatDate:"YYYY/MM/DD",formatTime:"HH:mm"},formatter:{parseDate:function(e,t){if(i(t))return n.parseDate(e,t);var a=moment(e,t);return!!a.isValid()&&a.toDate()},formatDate:function(e,t){return i(t)?n.formatDate(e,t):moment(e).format(t)},formatMask:function(e){return e.replace(/Y{4}/g,"9999").replace(/Y{2}/g,"99").replace(/M{2}/g,"19").replace(/D{2}/g,"39").replace(/H{2}/g,"29").replace(/m{2}/g,"59").replace(/s{2}/g,"59")}}}};L.datetimepicker={setLocale:function(e){var t=s.i18n[e]?e:"en";R!==t&&(R=t,r())},setDateFormatter:function(e){if("string"==typeof e&&o.hasOwnProperty(e)){var t=o[e];L.extend(s,t.default_options),E=t.formatter}else E=e}};var t={RFC_2822:"D, d M Y H:i:s O",ATOM:"Y-m-dTH:i:sP",ISO_8601:"Y-m-dTH:i:sO",RFC_822:"D, d M y H:i:s O",RFC_850:"l, d-M-y H:i:s T",RFC_1036:"D, d M y H:i:s O",RFC_1123:"D, d M Y H:i:s O",RSS:"D, d M Y H:i:s O",W3C:"Y-m-dTH:i:sP"},i=function(e){return-1!==Object.values(t).indexOf(e)};function m(e,t,a){this.date=e,this.desc=t,this.style=a}L.extend(L.datetimepicker,t),r(),window.getComputedStyle||(window.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(e){var t=/(-([a-z]))/g;return"float"===e&&(e="styleFloat"),t.test(e)&&(e=e.replace(t,function(e,t,a){return a.toUpperCase()})),a.currentStyle[e]||null},this}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){var a,n;for(a=t||0,n=this.length;a<n;a+=1)if(this[a]===e)return a;return-1}),Date.prototype.countDaysInMonth=function(){return new Date(this.getFullYear(),this.getMonth()+1,0).getDate()},L.fn.xdsoftScroller=function(p,D){return this.each(function(){var o,i,s,d,u,l=L(this),a=function(e){var t,a={x:0,y:0};return"touchstart"===e.type||"touchmove"===e.type||"touchend"===e.type||"touchcancel"===e.type?(t=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],a.x=t.clientX,a.y=t.clientY):"mousedown"!==e.type&&"mouseup"!==e.type&&"mousemove"!==e.type&&"mouseover"!==e.type&&"mouseout"!==e.type&&"mouseenter"!==e.type&&"mouseleave"!==e.type||(a.x=e.clientX,a.y=e.clientY),a},f=100,n=!1,r=0,c=0,m=0,t=!1,h=0,g=function(){};"hide"!==D?(L(this).hasClass("xdsoft_scroller_box")||(o=l.children().eq(0),i=l[0].clientHeight,s=o[0].offsetHeight,d=L('<div class="xdsoft_scrollbar"></div>'),u=L('<div class="xdsoft_scroller"></div>'),d.append(u),l.addClass("xdsoft_scroller_box").append(d),g=function(e){var t=a(e).y-r+h;t<0&&(t=0),t+u[0].offsetHeight>m&&(t=m-u[0].offsetHeight),l.trigger("scroll_element.xdsoft_scroller",[f?t/f:0])},u.on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller",function(e){i||l.trigger("resize_scroll.xdsoft_scroller",[D]),r=a(e).y,h=parseInt(u.css("margin-top"),10),m=d[0].offsetHeight,"mousedown"===e.type||"touchstart"===e.type?(p.ownerDocument&&L(p.ownerDocument.body).addClass("xdsoft_noselect"),L([p.ownerDocument.body,p.contentWindow]).on("touchend mouseup.xdsoft_scroller",function e(){L([p.ownerDocument.body,p.contentWindow]).off("touchend mouseup.xdsoft_scroller",e).off("mousemove.xdsoft_scroller",g).removeClass("xdsoft_noselect")}),L(p.ownerDocument.body).on("mousemove.xdsoft_scroller",g)):(t=!0,e.stopPropagation(),e.preventDefault())}).on("touchmove",function(e){t&&(e.preventDefault(),g(e))}).on("touchend touchcancel",function(){t=!1,h=0}),l.on("scroll_element.xdsoft_scroller",function(e,t){i||l.trigger("resize_scroll.xdsoft_scroller",[t,!0]),t=1<t?1:t<0||isNaN(t)?0:t,u.css("margin-top",f*t),setTimeout(function(){o.css("marginTop",-parseInt((o[0].offsetHeight-i)*t,10))},10)}).on("resize_scroll.xdsoft_scroller",function(e,t,a){var n,r;i=l[0].clientHeight,s=o[0].offsetHeight,r=(n=i/s)*d[0].offsetHeight,1<n?u.hide():(u.show(),u.css("height",parseInt(10<r?r:10,10)),f=d[0].offsetHeight-u[0].offsetHeight,!0!==a&&l.trigger("scroll_element.xdsoft_scroller",[t||Math.abs(parseInt(o.css("marginTop"),10))/(s-i)]))}),l.on("mousewheel",function(e){var t=Math.abs(parseInt(o.css("marginTop"),10));return(t-=20*e.deltaY)<0&&(t=0),l.trigger("scroll_element.xdsoft_scroller",[t/(s-i)]),e.stopPropagation(),!1}),l.on("touchstart",function(e){n=a(e),c=Math.abs(parseInt(o.css("marginTop"),10))}),l.on("touchmove",function(e){if(n){e.preventDefault();var t=a(e);l.trigger("scroll_element.xdsoft_scroller",[(c-(t.y-n.y))/(s-i)])}}),l.on("touchend touchcancel",function(){n=!1,c=0})),l.trigger("resize_scroll.xdsoft_scroller",[D])):l.find(".xdsoft_scrollbar").hide()})},L.fn.datetimepicker=function(H,a){var n,r,o=this,p=17,D=13,y=27,v=37,b=38,k=39,x=40,T=9,S=116,M=65,w=67,j=86,J=90,z=89,I=!1,N=L.isPlainObject(H)||!H?L.extend(!0,{},s,H):L.extend(!0,{},s),i=0;return n=function(O){var t,n,a,r,W,h,_=L('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),e=L('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),g=L('<div class="xdsoft_datepicker active"></div>'),F=L('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'),C=L('<div class="xdsoft_calendar"></div>'),o=L('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),u=o.find(".xdsoft_time_box").eq(0),P=L('<div class="xdsoft_time_variant"></div>'),i=L('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),Y=L('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),A=L('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),s=!1,d=0;N.id&&_.attr("id",N.id),N.style&&_.attr("style",N.style),N.weeks&&_.addClass("xdsoft_showweeks"),N.rtl&&_.addClass("xdsoft_rtl"),_.addClass("xdsoft_"+N.theme),_.addClass(N.className),F.find(".xdsoft_month span").after(Y),F.find(".xdsoft_year span").after(A),F.find(".xdsoft_month,.xdsoft_year").on("touchstart mousedown.xdsoft",function(e){var t,a,n=L(this).find(".xdsoft_select").eq(0),r=0,o=0,i=n.is(":visible");for(F.find(".xdsoft_select").hide(),W.currentTime&&(r=W.currentTime[L(this).hasClass("xdsoft_month")?"getMonth":"getFullYear"]()),n[i?"hide":"show"](),t=n.find("div.xdsoft_option"),a=0;a<t.length&&t.eq(a).data("value")!==r;a+=1)o+=t[0].offsetHeight;return n.xdsoftScroller(N,o/(n.children()[0].offsetHeight-n[0].clientHeight)),e.stopPropagation(),!1});var l=function(e){var t=e.originalEvent,a=t.touches?t.touches[0]:t;this.touchStartPosition=this.touchStartPosition||a;var n=Math.abs(this.touchStartPosition.clientX-a.clientX),r=Math.abs(this.touchStartPosition.clientY-a.clientY);Math.sqrt(n*n+r*r)>N.touchMovedThreshold&&(this.touchMoved=!0)};function f(){var e,t=!1;return N.startDate?t=W.strToDate(N.startDate):(t=N.value||(O&&O.val&&O.val()?O.val():""))?(t=W.strToDateTime(t),N.yearOffset&&(t=new Date(t.getFullYear()-N.yearOffset,t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()))):N.defaultDate&&(t=W.strToDateTime(N.defaultDate),N.defaultTime&&(e=W.strtotime(N.defaultTime),t.setHours(e.getHours()),t.setMinutes(e.getMinutes()))),t&&W.isValidDate(t)?_.data("changed",!0):t="",t||0}function c(m){var h=function(e,t){var a=e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g,"\\$1").replace(/_/g,"{digit+}").replace(/([0-9]{1})/g,"{digit$1}").replace(/\{digit([0-9]{1})\}/g,"[0-$1_]{1}").replace(/\{digit[\+]\}/g,"[0-9_]{1}");return new RegExp(a).test(t)},g=function(e,t){if(!(e="string"==typeof e||e instanceof String?m.ownerDocument.getElementById(e):e))return!1;if(e.createTextRange){var a=e.createTextRange();return a.collapse(!0),a.moveEnd("character",t),a.moveStart("character",t),a.select(),!0}return!!e.setSelectionRange&&(e.setSelectionRange(t,t),!0)};m.mask&&O.off("keydown.xdsoft"),!0===m.mask&&(E.formatMask?m.mask=E.formatMask(m.format):m.mask=m.format.replace(/Y/g,"9999").replace(/F/g,"9999").replace(/m/g,"19").replace(/d/g,"39").replace(/H/g,"29").replace(/i/g,"59").replace(/s/g,"59")),"string"===L.type(m.mask)&&(h(m.mask,O.val())||(O.val(m.mask.replace(/[0-9]/g,"_")),g(O[0],0)),O.on("paste.xdsoft",function(e){var t=(e.clipboardData||e.originalEvent.clipboardData||window.clipboardData).getData("text"),a=this.value,n=this.selectionStart;return a=a.substr(0,n)+t+a.substr(n+t.length),n+=t.length,h(m.mask,a)?(this.value=a,g(this,n)):""===L.trim(a)?this.value=m.mask.replace(/[0-9]/g,"_"):O.trigger("error_input.xdsoft"),e.preventDefault(),!1}),O.on("keydown.xdsoft",function(e){var t,a=this.value,n=e.which,r=this.selectionStart,o=this.selectionEnd,i=r!==o;if(48<=n&&n<=57||96<=n&&n<=105||8===n||46===n){for(t=8===n||46===n?"_":String.fromCharCode(96<=n&&n<=105?n-48:n),8===n&&r&&!i&&(r-=1);;){var s=m.mask.substr(r,1),d=r<m.mask.length,u=0<r;if(!(/[^0-9_]/.test(s)&&d&&u))break;r+=8!==n||i?1:-1}if(e.metaKey&&(i=!(r=0)),i){var l=o-r,f=m.mask.replace(/[0-9]/g,"_"),c=f.substr(r,l).substr(1);a=a.substr(0,r)+(t+c)+a.substr(r+l)}else{a=a.substr(0,r)+t+a.substr(r+1)}if(""===L.trim(a))a=f;else if(r===m.mask.length)return e.preventDefault(),!1;for(r+=8===n?0:1;/[^0-9_]/.test(m.mask.substr(r,1))&&r<m.mask.length&&0<r;)r+=8===n?0:1;h(m.mask,a)?(this.value=a,g(this,r)):""===L.trim(a)?this.value=m.mask.replace(/[0-9]/g,"_"):O.trigger("error_input.xdsoft")}else if(-1!==[M,w,j,J,z].indexOf(n)&&I||-1!==[y,b,x,v,k,S,p,T,D].indexOf(n))return!0;return e.preventDefault(),!1}))}F.find(".xdsoft_select").xdsoftScroller(N).on("touchstart mousedown.xdsoft",function(e){var t=e.originalEvent;this.touchMoved=!1,this.touchStartPosition=t.touches?t.touches[0]:t,e.stopPropagation(),e.preventDefault()}).on("touchmove",".xdsoft_option",l).on("touchend mousedown.xdsoft",".xdsoft_option",function(){if(!this.touchMoved){void 0!==W.currentTime&&null!==W.currentTime||(W.currentTime=W.now());var e=W.currentTime.getFullYear();W&&W.currentTime&&W.currentTime[L(this).parent().parent().hasClass("xdsoft_monthselect")?"setMonth":"setFullYear"](L(this).data("value")),L(this).parent().parent().hide(),_.trigger("xchange.xdsoft"),N.onChangeMonth&&L.isFunction(N.onChangeMonth)&&N.onChangeMonth.call(_,W.currentTime,_.data("input")),e!==W.currentTime.getFullYear()&&L.isFunction(N.onChangeYear)&&N.onChangeYear.call(_,W.currentTime,_.data("input"))}}),_.getValue=function(){return W.getCurrentTime()},_.setOptions=function(e){var l={};N=L.extend(!0,{},N,e),e.allowTimes&&L.isArray(e.allowTimes)&&e.allowTimes.length&&(N.allowTimes=L.extend(!0,[],e.allowTimes)),e.weekends&&L.isArray(e.weekends)&&e.weekends.length&&(N.weekends=L.extend(!0,[],e.weekends)),e.allowDates&&L.isArray(e.allowDates)&&e.allowDates.length&&(N.allowDates=L.extend(!0,[],e.allowDates)),e.allowDateRe&&"[object String]"===Object.prototype.toString.call(e.allowDateRe)&&(N.allowDateRe=new RegExp(e.allowDateRe)),e.highlightedDates&&L.isArray(e.highlightedDates)&&e.highlightedDates.length&&(L.each(e.highlightedDates,function(e,t){var a,n=L.map(t.split(","),L.trim),r=new m(E.parseDate(n[0],N.formatDate),n[1],n[2]),o=E.formatDate(r.date,N.formatDate);void 0!==l[o]?(a=l[o].desc)&&a.length&&r.desc&&r.desc.length&&(l[o].desc=a+"\n"+r.desc):l[o]=r}),N.highlightedDates=L.extend(!0,[],l)),e.highlightedPeriods&&L.isArray(e.highlightedPeriods)&&e.highlightedPeriods.length&&(l=L.extend(!0,[],N.highlightedDates),L.each(e.highlightedPeriods,function(e,t){var a,n,r,o,i,s,d;if(L.isArray(t))a=t[0],n=t[1],r=t[2],d=t[3];else{var u=L.map(t.split(","),L.trim);a=E.parseDate(u[0],N.formatDate),n=E.parseDate(u[1],N.formatDate),r=u[2],d=u[3]}for(;a<=n;)o=new m(a,r,d),i=E.formatDate(a,N.formatDate),a.setDate(a.getDate()+1),void 0!==l[i]?(s=l[i].desc)&&s.length&&o.desc&&o.desc.length&&(l[i].desc=s+"\n"+o.desc):l[i]=o}),N.highlightedDates=L.extend(!0,[],l)),e.disabledDates&&L.isArray(e.disabledDates)&&e.disabledDates.length&&(N.disabledDates=L.extend(!0,[],e.disabledDates)),e.disabledWeekDays&&L.isArray(e.disabledWeekDays)&&e.disabledWeekDays.length&&(N.disabledWeekDays=L.extend(!0,[],e.disabledWeekDays)),!N.open&&!N.opened||N.inline||O.trigger("open.xdsoft"),N.inline&&(s=!0,_.addClass("xdsoft_inline"),O.after(_).hide()),N.inverseButton&&(N.next="xdsoft_prev",N.prev="xdsoft_next"),N.datepicker?g.addClass("active"):g.removeClass("active"),N.timepicker?o.addClass("active"):o.removeClass("active"),N.value&&(W.setCurrentTime(N.value),O&&O.val&&O.val(W.str)),isNaN(N.dayOfWeekStart)?N.dayOfWeekStart=0:N.dayOfWeekStart=parseInt(N.dayOfWeekStart,10)%7,N.timepickerScrollbar||u.xdsoftScroller(N,"hide"),N.minDate&&/^[\+\-](.*)$/.test(N.minDate)&&(N.minDate=E.formatDate(W.strToDateTime(N.minDate),N.formatDate)),N.maxDate&&/^[\+\-](.*)$/.test(N.maxDate)&&(N.maxDate=E.formatDate(W.strToDateTime(N.maxDate),N.formatDate)),N.minDateTime&&/^\+(.*)$/.test(N.minDateTime)&&(N.minDateTime=W.strToDateTime(N.minDateTime).dateFormat(N.formatDate)),N.maxDateTime&&/^\+(.*)$/.test(N.maxDateTime)&&(N.maxDateTime=W.strToDateTime(N.maxDateTime).dateFormat(N.formatDate)),i.toggle(N.showApplyButton),F.find(".xdsoft_today_button").css("visibility",N.todayButton?"visible":"hidden"),F.find("."+N.prev).css("visibility",N.prevButton?"visible":"hidden"),F.find("."+N.next).css("visibility",N.nextButton?"visible":"hidden"),c(N),N.validateOnBlur&&O.off("blur.xdsoft").on("blur.xdsoft",function(){if(N.allowBlank&&(!L.trim(L(this).val()).length||"string"==typeof N.mask&&L.trim(L(this).val())===N.mask.replace(/[0-9]/g,"_")))L(this).val(null),_.data("xdsoft_datetime").empty();else{var e=E.parseDate(L(this).val(),N.format);if(e)L(this).val(E.formatDate(e,N.format));else{var t=+[L(this).val()[0],L(this).val()[1]].join(""),a=+[L(this).val()[2],L(this).val()[3]].join("");!N.datepicker&&N.timepicker&&0<=t&&t<24&&0<=a&&a<60?L(this).val([t,a].map(function(e){return 9<e?e:"0"+e}).join(":")):L(this).val(E.formatDate(W.now(),N.format))}_.data("xdsoft_datetime").setCurrentTime(L(this).val())}_.trigger("changedatetime.xdsoft"),_.trigger("close.xdsoft")}),N.dayOfWeekStartPrev=0===N.dayOfWeekStart?6:N.dayOfWeekStart-1,_.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")},_.data("options",N).on("touchstart mousedown.xdsoft",function(e){return e.stopPropagation(),e.preventDefault(),A.hide(),Y.hide(),!1}),u.append(P),u.xdsoftScroller(N),_.on("afterOpen.xdsoft",function(){u.xdsoftScroller(N)}),_.append(g).append(o),!0!==N.withoutCopyright&&_.append(e),g.append(F).append(C).append(i),N.insideParent?L(O).parent().append(_):L(N.parentID).append(_),W=new function(){var r=this;r.now=function(e){var t,a,n=new Date;return!e&&N.defaultDate&&(t=r.strToDateTime(N.defaultDate),n.setFullYear(t.getFullYear()),n.setMonth(t.getMonth()),n.setDate(t.getDate())),n.setFullYear(n.getFullYear()),!e&&N.defaultTime&&(a=r.strtotime(N.defaultTime),n.setHours(a.getHours()),n.setMinutes(a.getMinutes()),n.setSeconds(a.getSeconds()),n.setMilliseconds(a.getMilliseconds())),n},r.isValidDate=function(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())},r.setCurrentTime=function(e,t){"string"==typeof e?r.currentTime=r.strToDateTime(e):r.isValidDate(e)?r.currentTime=e:e||t||!N.allowBlank||N.inline?r.currentTime=r.now():r.currentTime=null,_.trigger("xchange.xdsoft")},r.empty=function(){r.currentTime=null},r.getCurrentTime=function(){return r.currentTime},r.nextMonth=function(){void 0!==r.currentTime&&null!==r.currentTime||(r.currentTime=r.now());var e,t=r.currentTime.getMonth()+1;return 12===t&&(r.currentTime.setFullYear(r.currentTime.getFullYear()+1),t=0),e=r.currentTime.getFullYear(),r.currentTime.setDate(Math.min(new Date(r.currentTime.getFullYear(),t+1,0).getDate(),r.currentTime.getDate())),r.currentTime.setMonth(t),N.onChangeMonth&&L.isFunction(N.onChangeMonth)&&N.onChangeMonth.call(_,W.currentTime,_.data("input")),e!==r.currentTime.getFullYear()&&L.isFunction(N.onChangeYear)&&N.onChangeYear.call(_,W.currentTime,_.data("input")),_.trigger("xchange.xdsoft"),t},r.prevMonth=function(){void 0!==r.currentTime&&null!==r.currentTime||(r.currentTime=r.now());var e=r.currentTime.getMonth()-1;return-1===e&&(r.currentTime.setFullYear(r.currentTime.getFullYear()-1),e=11),r.currentTime.setDate(Math.min(new Date(r.currentTime.getFullYear(),e+1,0).getDate(),r.currentTime.getDate())),r.currentTime.setMonth(e),N.onChangeMonth&&L.isFunction(N.onChangeMonth)&&N.onChangeMonth.call(_,W.currentTime,_.data("input")),_.trigger("xchange.xdsoft"),e},r.getWeekOfYear=function(e){if(N.onGetWeekOfYear&&L.isFunction(N.onGetWeekOfYear)){var t=N.onGetWeekOfYear.call(_,e);if(void 0!==t)return t}var a=new Date(e.getFullYear(),0,1);return 4!==a.getDay()&&a.setMonth(0,1+(4-a.getDay()+7)%7),Math.ceil(((e-a)/864e5+a.getDay()+1)/7)},r.strToDateTime=function(e){var t,a,n=[];return e&&e instanceof Date&&r.isValidDate(e)?e:((n=/^([+-]{1})(.*)$/.exec(e))&&(n[2]=E.parseDate(n[2],N.formatDate)),a=n&&n[2]?(t=n[2].getTime()-6e4*n[2].getTimezoneOffset(),new Date(r.now(!0).getTime()+parseInt(n[1]+"1",10)*t)):e?E.parseDate(e,N.format):r.now(),r.isValidDate(a)||(a=r.now()),a)},r.strToDate=function(e){if(e&&e instanceof Date&&r.isValidDate(e))return e;var t=e?E.parseDate(e,N.formatDate):r.now(!0);return r.isValidDate(t)||(t=r.now(!0)),t},r.strtotime=function(e){if(e&&e instanceof Date&&r.isValidDate(e))return e;var t=e?E.parseDate(e,N.formatTime):r.now(!0);return r.isValidDate(t)||(t=r.now(!0)),t},r.str=function(){var e=N.format;return N.yearOffset&&(e=(e=e.replace("Y",r.currentTime.getFullYear()+N.yearOffset)).replace("y",String(r.currentTime.getFullYear()+N.yearOffset).substring(2,4))),E.formatDate(r.currentTime,e)},r.currentTime=this.now()},i.on("touchend click",function(e){e.preventDefault(),_.data("changed",!0),W.setCurrentTime(f()),O.val(W.str()),_.trigger("close.xdsoft")}),F.find(".xdsoft_today_button").on("touchend mousedown.xdsoft",function(){_.data("changed",!0),W.setCurrentTime(0,!0),_.trigger("afterOpen.xdsoft")}).on("dblclick.xdsoft",function(){var e,t,a=W.getCurrentTime();a=new Date(a.getFullYear(),a.getMonth(),a.getDate()),e=W.strToDate(N.minDate),a<(e=new Date(e.getFullYear(),e.getMonth(),e.getDate()))||(t=W.strToDate(N.maxDate),(t=new Date(t.getFullYear(),t.getMonth(),t.getDate()))<a||(O.val(W.str()),O.trigger("change"),_.trigger("close.xdsoft")))}),F.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft",function(){var a=L(this),n=0,r=!1;!function e(t){a.hasClass(N.next)?W.nextMonth():a.hasClass(N.prev)&&W.prevMonth(),N.monthChangeSpinner&&(r||(n=setTimeout(e,t||100)))}(500),L([N.ownerDocument.body,N.contentWindow]).on("touchend mouseup.xdsoft",function e(){clearTimeout(n),r=!0,L([N.ownerDocument.body,N.contentWindow]).off("touchend mouseup.xdsoft",e)})}),o.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft",function(){var o=L(this),i=0,s=!1,d=110;!function e(t){var a=u[0].clientHeight,n=P[0].offsetHeight,r=Math.abs(parseInt(P.css("marginTop"),10));o.hasClass(N.next)&&n-a-N.timeHeightInTimePicker>=r?P.css("marginTop","-"+(r+N.timeHeightInTimePicker)+"px"):o.hasClass(N.prev)&&0<=r-N.timeHeightInTimePicker&&P.css("marginTop","-"+(r-N.timeHeightInTimePicker)+"px"),u.trigger("scroll_element.xdsoft_scroller",[Math.abs(parseInt(P[0].style.marginTop,10)/(n-a))]),d=10<d?10:d-10,s||(i=setTimeout(e,t||d))}(500),L([N.ownerDocument.body,N.contentWindow]).on("touchend mouseup.xdsoft",function e(){clearTimeout(i),s=!0,L([N.ownerDocument.body,N.contentWindow]).off("touchend mouseup.xdsoft",e)})}),t=0,_.on("xchange.xdsoft",function(e){clearTimeout(t),t=setTimeout(function(){void 0!==W.currentTime&&null!==W.currentTime||(W.currentTime=W.now());for(var e,t,a,n,r,o,i,s,d,u,l="",f=new Date(W.currentTime.getFullYear(),W.currentTime.getMonth(),1,12,0,0),c=0,m=W.now(),h=!1,g=!1,p=!1,D=!1,y=[],v=!0,b="";f.getDay()!==N.dayOfWeekStart;)f.setDate(f.getDate()-1);for(l+="<table><thead><tr>",N.weeks&&(l+="<th></th>"),e=0;e<7;e+=1)l+="<th>"+N.i18n[R].dayOfWeekShort[(e+N.dayOfWeekStart)%7]+"</th>";for(l+="</tr></thead>",l+="<tbody>",!1!==N.maxDate&&(h=W.strToDate(N.maxDate),h=new Date(h.getFullYear(),h.getMonth(),h.getDate(),23,59,59,999)),!1!==N.minDate&&(g=W.strToDate(N.minDate),g=new Date(g.getFullYear(),g.getMonth(),g.getDate())),!1!==N.minDateTime&&(p=W.strToDate(N.minDateTime),p=new Date(p.getFullYear(),p.getMonth(),p.getDate(),p.getHours(),p.getMinutes(),p.getSeconds())),!1!==N.maxDateTime&&(D=W.strToDate(N.maxDateTime),D=new Date(D.getFullYear(),D.getMonth(),D.getDate(),D.getHours(),D.getMinutes(),D.getSeconds())),!1!==D&&(u=31*(12*D.getFullYear()+D.getMonth())+D.getDate());c<W.currentTime.countDaysInMonth()||f.getDay()!==N.dayOfWeekStart||W.currentTime.getMonth()===f.getMonth();){y=[],c+=1,a=f.getDay(),n=f.getDate(),r=f.getFullYear(),M=f.getMonth(),o=W.getWeekOfYear(f),d="",y.push("xdsoft_date"),i=N.beforeShowDay&&L.isFunction(N.beforeShowDay.call)?N.beforeShowDay.call(_,f):null,N.allowDateRe&&"[object RegExp]"===Object.prototype.toString.call(N.allowDateRe)&&(N.allowDateRe.test(E.formatDate(f,N.formatDate))||y.push("xdsoft_disabled")),N.allowDates&&0<N.allowDates.length&&-1===N.allowDates.indexOf(E.formatDate(f,N.formatDate))&&y.push("xdsoft_disabled");var k=31*(12*f.getFullYear()+f.getMonth())+f.getDate();(!1!==h&&h<f||!1!==p&&f<p||!1!==g&&f<g||!1!==D&&u<k||i&&!1===i[0])&&y.push("xdsoft_disabled"),-1!==N.disabledDates.indexOf(E.formatDate(f,N.formatDate))&&y.push("xdsoft_disabled"),-1!==N.disabledWeekDays.indexOf(a)&&y.push("xdsoft_disabled"),O.is("[disabled]")&&y.push("xdsoft_disabled"),i&&""!==i[1]&&y.push(i[1]),W.currentTime.getMonth()!==M&&y.push("xdsoft_other_month"),(N.defaultSelect||_.data("changed"))&&E.formatDate(W.currentTime,N.formatDate)===E.formatDate(f,N.formatDate)&&y.push("xdsoft_current"),E.formatDate(m,N.formatDate)===E.formatDate(f,N.formatDate)&&y.push("xdsoft_today"),0!==f.getDay()&&6!==f.getDay()&&-1===N.weekends.indexOf(E.formatDate(f,N.formatDate))||y.push("xdsoft_weekend"),void 0!==N.highlightedDates[E.formatDate(f,N.formatDate)]&&(t=N.highlightedDates[E.formatDate(f,N.formatDate)],y.push(void 0===t.style?"xdsoft_highlighted_default":t.style),d=void 0===t.desc?"":t.desc),N.beforeShowDay&&L.isFunction(N.beforeShowDay)&&y.push(N.beforeShowDay(f)),v&&(l+="<tr>",v=!1,N.weeks&&(l+="<th>"+o+"</th>")),l+='<td data-date="'+n+'" data-month="'+M+'" data-year="'+r+'" class="xdsoft_date xdsoft_day_of_week'+f.getDay()+" "+y.join(" ")+'" title="'+d+'"><div>'+n+"</div></td>",f.getDay()===N.dayOfWeekStartPrev&&(l+="</tr>",v=!0),f.setDate(n+1)}l+="</tbody></table>",C.html(l),F.find(".xdsoft_label span").eq(0).text(N.i18n[R].months[W.currentTime.getMonth()]),F.find(".xdsoft_label span").eq(1).text(W.currentTime.getFullYear()+N.yearOffset),M=b="";var x=0;if(!1!==N.minTime){var T=W.strtotime(N.minTime);x=60*T.getHours()+T.getMinutes()}var S=1440;if(!1!==N.maxTime){T=W.strtotime(N.maxTime);S=60*T.getHours()+T.getMinutes()}if(!1!==N.minDateTime){T=W.strToDateTime(N.minDateTime);if(E.formatDate(W.currentTime,N.formatDate)===E.formatDate(T,N.formatDate)){var M=60*T.getHours()+T.getMinutes();x<M&&(x=M)}}if(!1!==N.maxDateTime){T=W.strToDateTime(N.maxDateTime);if(E.formatDate(W.currentTime,N.formatDate)===E.formatDate(T,N.formatDate))(M=60*T.getHours()+T.getMinutes())<S&&(S=M)}if(s=function(e,t){var a,n=W.now(),r=N.allowTimes&&L.isArray(N.allowTimes)&&N.allowTimes.length;n.setHours(e),e=parseInt(n.getHours(),10),n.setMinutes(t),t=parseInt(n.getMinutes(),10),y=[];var o=60*e+t;(O.is("[disabled]")||S<=o||o<x)&&y.push("xdsoft_disabled"),(a=new Date(W.currentTime)).setHours(parseInt(W.currentTime.getHours(),10)),r||a.setMinutes(Math[N.roundTime](W.currentTime.getMinutes()/N.step)*N.step),(N.initTime||N.defaultSelect||_.data("changed"))&&a.getHours()===parseInt(e,10)&&(!r&&59<N.step||a.getMinutes()===parseInt(t,10))&&(N.defaultSelect||_.data("changed")?y.push("xdsoft_current"):N.initTime&&y.push("xdsoft_init_time")),parseInt(m.getHours(),10)===parseInt(e,10)&&parseInt(m.getMinutes(),10)===parseInt(t,10)&&y.push("xdsoft_today"),b+='<div class="xdsoft_time '+y.join(" ")+'" data-hour="'+e+'" data-minute="'+t+'">'+E.formatDate(n,N.formatTime)+"</div>"},N.allowTimes&&L.isArray(N.allowTimes)&&N.allowTimes.length)for(c=0;c<N.allowTimes.length;c+=1)s(W.strtotime(N.allowTimes[c]).getHours(),M=W.strtotime(N.allowTimes[c]).getMinutes());else for(e=c=0;c<(N.hours12?12:24);c+=1)for(e=0;e<60;e+=N.step){var w=60*c+e;w<x||(S<=w||s((c<10?"0":"")+c,M=(e<10?"0":"")+e))}for(P.html(b),H="",c=parseInt(N.yearStart,10);c<=parseInt(N.yearEnd,10);c+=1)H+='<div class="xdsoft_option '+(W.currentTime.getFullYear()===c?"xdsoft_current":"")+'" data-value="'+c+'">'+(c+N.yearOffset)+"</div>";for(A.children().eq(0).html(H),c=parseInt(N.monthStart,10),H="";c<=parseInt(N.monthEnd,10);c+=1)H+='<div class="xdsoft_option '+(W.currentTime.getMonth()===c?"xdsoft_current":"")+'" data-value="'+c+'">'+N.i18n[R].months[c]+"</div>";Y.children().eq(0).html(H),L(_).trigger("generate.xdsoft")},10),e.stopPropagation()}).on("afterOpen.xdsoft",function(){var e,t,a,n;N.timepicker&&(P.find(".xdsoft_current").length?e=".xdsoft_current":P.find(".xdsoft_init_time").length&&(e=".xdsoft_init_time"),e?(t=u[0].clientHeight,(a=P[0].offsetHeight)-t<(n=P.find(e).index()*N.timeHeightInTimePicker+1)&&(n=a-t),u.trigger("scroll_element.xdsoft_scroller",[parseInt(n,10)/(a-t)])):u.trigger("scroll_element.xdsoft_scroller",[0]))}),n=0,C.on("touchend click.xdsoft","td",function(e){e.stopPropagation(),n+=1;var t=L(this),a=W.currentTime;if(null==a&&(W.currentTime=W.now(),a=W.currentTime),t.hasClass("xdsoft_disabled"))return!1;a.setDate(1),a.setFullYear(t.data("year")),a.setMonth(t.data("month")),a.setDate(t.data("date")),_.trigger("select.xdsoft",[a]),O.val(W.str()),N.onSelectDate&&L.isFunction(N.onSelectDate)&&N.onSelectDate.call(_,W.currentTime,_.data("input"),e),_.data("changed",!0),_.trigger("xchange.xdsoft"),_.trigger("changedatetime.xdsoft"),(1<n||!0===N.closeOnDateSelect||!1===N.closeOnDateSelect&&!N.timepicker)&&!N.inline&&_.trigger("close.xdsoft"),setTimeout(function(){n=0},200)}),P.on("touchstart","div",function(e){this.touchMoved=!1}).on("touchmove","div",l).on("touchend click.xdsoft","div",function(e){if(!this.touchMoved){e.stopPropagation();var t=L(this),a=W.currentTime;if(null==a&&(W.currentTime=W.now(),a=W.currentTime),t.hasClass("xdsoft_disabled"))return!1;a.setHours(t.data("hour")),a.setMinutes(t.data("minute")),_.trigger("select.xdsoft",[a]),_.data("input").val(W.str()),N.onSelectTime&&L.isFunction(N.onSelectTime)&&N.onSelectTime.call(_,W.currentTime,_.data("input"),e),_.data("changed",!0),_.trigger("xchange.xdsoft"),_.trigger("changedatetime.xdsoft"),!0!==N.inline&&!0===N.closeOnTimeSelect&&_.trigger("close.xdsoft")}}),g.on("mousewheel.xdsoft",function(e){return!N.scrollMonth||(e.deltaY<0?W.nextMonth():W.prevMonth(),!1)}),O.on("mousewheel.xdsoft",function(e){return!N.scrollInput||(!N.datepicker&&N.timepicker?(0<=(a=P.find(".xdsoft_current").length?P.find(".xdsoft_current").eq(0).index():0)+e.deltaY&&a+e.deltaY<P.children().length&&(a+=e.deltaY),P.children().eq(a).length&&P.children().eq(a).trigger("mousedown"),!1):N.datepicker&&!N.timepicker?(g.trigger(e,[e.deltaY,e.deltaX,e.deltaY]),O.val&&O.val(W.str()),_.trigger("changedatetime.xdsoft"),!1):void 0)}),_.on("changedatetime.xdsoft",function(e){if(N.onChangeDateTime&&L.isFunction(N.onChangeDateTime)){var t=_.data("input");N.onChangeDateTime.call(_,W.currentTime,t,e),delete N.value,t.trigger("change")}}).on("generate.xdsoft",function(){N.onGenerate&&L.isFunction(N.onGenerate)&&N.onGenerate.call(_,W.currentTime,_.data("input")),s&&(_.trigger("afterOpen.xdsoft"),s=!1)}).on("click.xdsoft",function(e){e.stopPropagation()}),a=0,h=function(e,t){do{if(!(e=e.parentNode)||!1===t(e))break}while("HTML"!==e.nodeName)},r=function(){var e,t,a,n,r,o,i,s,d,u,l,f,c;if(e=(s=_.data("input")).offset(),t=s[0],u="top",a=e.top+t.offsetHeight-1,n=e.left,r="absolute",d=L(N.contentWindow).width(),f=L(N.contentWindow).height(),c=L(N.contentWindow).scrollTop(),N.ownerDocument.documentElement.clientWidth-e.left<g.parent().outerWidth(!0)){var m=g.parent().outerWidth(!0)-t.offsetWidth;n-=m}"rtl"===s.parent().css("direction")&&(n-=_.outerWidth()-s.outerWidth()),N.fixed?(a-=c,n-=L(N.contentWindow).scrollLeft(),r="fixed"):(i=!1,h(t,function(e){return null!==e&&("fixed"===N.contentWindow.getComputedStyle(e).getPropertyValue("position")?!(i=!0):void 0)}),i&&!N.insideParent?(r="fixed",a+_.outerHeight()>f+c?(u="bottom",a=f+c-e.top):a-=c):a+_[0].offsetHeight>f+c&&(a=e.top-_[0].offsetHeight+1),a<0&&(a=0),n+t.offsetWidth>d&&(n=d-t.offsetWidth)),o=_[0],h(o,function(e){if("relative"===N.contentWindow.getComputedStyle(e).getPropertyValue("position")&&d>=e.offsetWidth)return n-=(d-e.offsetWidth)/2,!1}),l={position:r,left:N.insideParent?t.offsetLeft:n,top:"",bottom:""},N.insideParent?l[u]=t.offsetTop+t.offsetHeight:l[u]=a,_.css(l)},_.on("open.xdsoft",function(e){var t=!0;N.onShow&&L.isFunction(N.onShow)&&(t=N.onShow.call(_,W.currentTime,_.data("input"),e)),!1!==t&&(_.show(),r(),L(N.contentWindow).off("resize.xdsoft",r).on("resize.xdsoft",r),N.closeOnWithoutClick&&L([N.ownerDocument.body,N.contentWindow]).on("touchstart mousedown.xdsoft",function e(){_.trigger("close.xdsoft"),L([N.ownerDocument.body,N.contentWindow]).off("touchstart mousedown.xdsoft",e)}))}).on("close.xdsoft",function(e){var t=!0;F.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide(),N.onClose&&L.isFunction(N.onClose)&&(t=N.onClose.call(_,W.currentTime,_.data("input"),e)),!1===t||N.opened||N.inline||_.hide(),e.stopPropagation()}).on("toggle.xdsoft",function(){_.is(":visible")?_.trigger("close.xdsoft"):_.trigger("open.xdsoft")}).data("input",O),d=0,_.data("xdsoft_datetime",W),_.setOptions(N),W.setCurrentTime(f()),O.data("xdsoft_datetimepicker",_).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",function(){O.is(":disabled")||O.data("xdsoft_datetimepicker").is(":visible")&&N.closeOnInputClick||N.openOnFocus&&(clearTimeout(d),d=setTimeout(function(){O.is(":disabled")||(s=!0,W.setCurrentTime(f(),!0),N.mask&&c(N),_.trigger("open.xdsoft"))},100))}).on("keydown.xdsoft",function(e){var t,a=e.which;return-1!==[D].indexOf(a)&&N.enterLikeTab?(t=L("input:visible,textarea:visible,button:visible,a:visible"),_.trigger("close.xdsoft"),t.eq(t.index(this)+1).focus(),!1):-1!==[T].indexOf(a)?(_.trigger("close.xdsoft"),!0):void 0}).on("blur.xdsoft",function(){_.trigger("close.xdsoft")})},r=function(e){var t=e.data("xdsoft_datetimepicker");t&&(t.data("xdsoft_datetime",null),t.remove(),e.data("xdsoft_datetimepicker",null).off(".xdsoft"),L(N.contentWindow).off("resize.xdsoft"),L([N.contentWindow,N.ownerDocument.body]).off("mousedown.xdsoft touchstart"),e.unmousewheel&&e.unmousewheel())},L(N.ownerDocument).off("keydown.xdsoftctrl keyup.xdsoftctrl").off("keydown.xdsoftcmd keyup.xdsoftcmd").on("keydown.xdsoftctrl",function(e){e.keyCode===p&&(I=!0)}).on("keyup.xdsoftctrl",function(e){e.keyCode===p&&(I=!1)}).on("keydown.xdsoftcmd",function(e){91===e.keyCode&&!0}).on("keyup.xdsoftcmd",function(e){91===e.keyCode&&!1}),this.each(function(){var t,e=L(this).data("xdsoft_datetimepicker");if(e){if("string"===L.type(H))switch(H){case"show":L(this).select().focus(),e.trigger("open.xdsoft");break;case"hide":e.trigger("close.xdsoft");break;case"toggle":e.trigger("toggle.xdsoft");break;case"destroy":r(L(this));break;case"reset":this.value=this.defaultValue,this.value&&e.data("xdsoft_datetime").isValidDate(E.parseDate(this.value,N.format))||e.data("changed",!1),e.data("xdsoft_datetime").setCurrentTime(this.value);break;case"validate":e.data("input").trigger("blur.xdsoft");break;default:e[H]&&L.isFunction(e[H])&&(o=e[H](a))}else e.setOptions(H);return 0}"string"!==L.type(H)&&(!N.lazyInit||N.open||N.inline?n(L(this)):(t=L(this)).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",function e(){t.is(":disabled")||t.data("xdsoft_datetimepicker")||(clearTimeout(i),i=setTimeout(function(){t.data("xdsoft_datetimepicker")||n(t),t.off("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",e).trigger("open.xdsoft")},100))}))}),o},L.fn.datetimepicker.defaults=s};!function(e){"function"==typeof define&&define.amd?define(["jquery","jquery-mousewheel"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(datetimepickerFactory),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(c){var m,h,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],g=Array.prototype.slice;if(c.event.fixHooks)for(var a=e.length;a;)c.event.fixHooks[e[--a]]=c.event.mouseHooks;var p=c.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],n,!1);else this.onmousewheel=n;c.data(this,"mousewheel-line-height",p.getLineHeight(this)),c.data(this,"mousewheel-page-height",p.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],n,!1);else this.onmousewheel=null;c.removeData(this,"mousewheel-line-height"),c.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=c(e),a=t["offsetParent"in c.fn?"offsetParent":"parent"]();return a.length||(a=c("body")),parseInt(a.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return c(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function n(e){var t,a=e||window.event,n=g.call(arguments,1),r=0,o=0,i=0,s=0,d=0;if((e=c.event.fix(a)).type="mousewheel","detail"in a&&(i=-1*a.detail),"wheelDelta"in a&&(i=a.wheelDelta),"wheelDeltaY"in a&&(i=a.wheelDeltaY),"wheelDeltaX"in a&&(o=-1*a.wheelDeltaX),"axis"in a&&a.axis===a.HORIZONTAL_AXIS&&(o=-1*i,i=0),r=0===i?o:i,"deltaY"in a&&(r=i=-1*a.deltaY),"deltaX"in a&&(o=a.deltaX,0===i&&(r=-1*o)),0!==i||0!==o){if(1===a.deltaMode){var u=c.data(this,"mousewheel-line-height");r*=u,i*=u,o*=u}else if(2===a.deltaMode){var l=c.data(this,"mousewheel-page-height");r*=l,i*=l,o*=l}if(t=Math.max(Math.abs(i),Math.abs(o)),(!h||t<h)&&y(a,h=t)&&(h/=40),y(a,t)&&(r/=40,o/=40,i/=40),r=Math[1<=r?"floor":"ceil"](r/h),o=Math[1<=o?"floor":"ceil"](o/h),i=Math[1<=i?"floor":"ceil"](i/h),p.settings.normalizeOffset&&this.getBoundingClientRect){var f=this.getBoundingClientRect();s=e.clientX-f.left,d=e.clientY-f.top}return e.deltaX=o,e.deltaY=i,e.deltaFactor=h,e.offsetX=s,e.offsetY=d,e.deltaMode=0,n.unshift(e,r,o,i),m&&clearTimeout(m),m=setTimeout(D,200),(c.event.dispatch||c.event.handle).apply(this,n)}}function D(){h=null}function y(e,t){return p.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}c.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});
/* perfect-scrollbar v0.6.16 */
!function t(e,n,r){function o(i,s){if(!n[i]){if(!e[i]){var a="function"==typeof require&&require;if(!s&&a)return a(i,!0);if(l)return l(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[i]={exports:{}};e[i][0].call(u.exports,function(t){var n=e[i][1][t];return o(n?n:t)},u,u.exports,t,e,n,r)}return n[i].exports}for(var l="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(t,e,n){"use strict";function r(t){t.fn.perfectScrollbar=function(t){return this.each(function(){if("object"==typeof t||"undefined"==typeof t){var e=t;l.get(this)||o.initialize(this,e)}else{var n=t;"update"===n?o.update(this):"destroy"===n&&o.destroy(this)}})}}var o=t("../main"),l=t("../plugin/instances");if("function"==typeof define&&define.amd)define(["jquery"],r);else{var i=window.jQuery?window.jQuery:window.$;"undefined"!=typeof i&&r(i)}e.exports=r},{"../main":7,"../plugin/instances":18}],2:[function(t,e,n){"use strict";function r(t,e){var n=t.className.split(" ");n.indexOf(e)<0&&n.push(e),t.className=n.join(" ")}function o(t,e){var n=t.className.split(" "),r=n.indexOf(e);r>=0&&n.splice(r,1),t.className=n.join(" ")}n.add=function(t,e){t.classList?t.classList.add(e):r(t,e)},n.remove=function(t,e){t.classList?t.classList.remove(e):o(t,e)},n.list=function(t){return t.classList?Array.prototype.slice.apply(t.classList):t.className.split(" ")}},{}],3:[function(t,e,n){"use strict";function r(t,e){return window.getComputedStyle(t)[e]}function o(t,e,n){return"number"==typeof n&&(n=n.toString()+"px"),t.style[e]=n,t}function l(t,e){for(var n in e){var r=e[n];"number"==typeof r&&(r=r.toString()+"px"),t.style[n]=r}return t}var i={};i.e=function(t,e){var n=document.createElement(t);return n.className=e,n},i.appendTo=function(t,e){return e.appendChild(t),t},i.css=function(t,e,n){return"object"==typeof e?l(t,e):"undefined"==typeof n?r(t,e):o(t,e,n)},i.matches=function(t,e){return"undefined"!=typeof t.matches?t.matches(e):"undefined"!=typeof t.matchesSelector?t.matchesSelector(e):"undefined"!=typeof t.webkitMatchesSelector?t.webkitMatchesSelector(e):"undefined"!=typeof t.mozMatchesSelector?t.mozMatchesSelector(e):"undefined"!=typeof t.msMatchesSelector?t.msMatchesSelector(e):void 0},i.remove=function(t){"undefined"!=typeof t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},i.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return i.matches(t,e)})},e.exports=i},{}],4:[function(t,e,n){"use strict";var r=function(t){this.element=t,this.events={}};r.prototype.bind=function(t,e){"undefined"==typeof this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},r.prototype.unbind=function(t,e){var n="undefined"!=typeof e;this.events[t]=this.events[t].filter(function(r){return!(!n||r===e)||(this.element.removeEventListener(t,r,!1),!1)},this)},r.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var o=function(){this.eventElements=[]};o.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return"undefined"==typeof e&&(e=new r(t),this.eventElements.push(e)),e},o.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},o.prototype.unbind=function(t,e,n){this.eventElement(t).unbind(e,n)},o.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},o.prototype.once=function(t,e,n){var r=this.eventElement(t),o=function(t){r.unbind(e,o),n(t)};r.bind(e,o)},e.exports=o},{}],5:[function(t,e,n){"use strict";e.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},{}],6:[function(t,e,n){"use strict";var r=t("./class"),o=t("./dom"),l=n.toInt=function(t){return parseInt(t,10)||0},i=n.clone=function(t){if(t){if(t.constructor===Array)return t.map(i);if("object"==typeof t){var e={};for(var n in t)e[n]=i(t[n]);return e}return t}return null};n.extend=function(t,e){var n=i(t);for(var r in e)n[r]=i(e[r]);return n},n.isEditable=function(t){return o.matches(t,"input,[contenteditable]")||o.matches(t,"select,[contenteditable]")||o.matches(t,"textarea,[contenteditable]")||o.matches(t,"button,[contenteditable]")},n.removePsClasses=function(t){for(var e=r.list(t),n=0;n<e.length;n++){var o=e[n];0===o.indexOf("ps-")&&r.remove(t,o)}},n.outerWidth=function(t){return l(o.css(t,"width"))+l(o.css(t,"paddingLeft"))+l(o.css(t,"paddingRight"))+l(o.css(t,"borderLeftWidth"))+l(o.css(t,"borderRightWidth"))},n.startScrolling=function(t,e){r.add(t,"ps-in-scrolling"),"undefined"!=typeof e?r.add(t,"ps-"+e):(r.add(t,"ps-x"),r.add(t,"ps-y"))},n.stopScrolling=function(t,e){r.remove(t,"ps-in-scrolling"),"undefined"!=typeof e?r.remove(t,"ps-"+e):(r.remove(t,"ps-x"),r.remove(t,"ps-y"))},n.env={isWebKit:"WebkitAppearance"in document.documentElement.style,supportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportsIePointer:null!==window.navigator.msMaxTouchPoints}},{"./class":2,"./dom":3}],7:[function(t,e,n){"use strict";var r=t("./plugin/destroy"),o=t("./plugin/initialize"),l=t("./plugin/update");e.exports={initialize:o,update:l,destroy:r}},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":21}],8:[function(t,e,n){"use strict";e.exports={handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}},{}],9:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),l=t("./instances");e.exports=function(t){var e=l.get(t);e&&(e.event.unbindAll(),o.remove(e.scrollbarX),o.remove(e.scrollbarY),o.remove(e.scrollbarXRail),o.remove(e.scrollbarYRail),r.removePsClasses(t),l.remove(t))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(t,e,n){"use strict";function r(t,e){function n(t){return t.getBoundingClientRect()}var r=function(t){t.stopPropagation()};e.event.bind(e.scrollbarY,"click",r),e.event.bind(e.scrollbarYRail,"click",function(r){var o=r.pageY-window.pageYOffset-n(e.scrollbarYRail).top,s=o>e.scrollbarYTop?1:-1;i(t,"top",t.scrollTop+s*e.containerHeight),l(t),r.stopPropagation()}),e.event.bind(e.scrollbarX,"click",r),e.event.bind(e.scrollbarXRail,"click",function(r){var o=r.pageX-window.pageXOffset-n(e.scrollbarXRail).left,s=o>e.scrollbarXLeft?1:-1;i(t,"left",t.scrollLeft+s*e.containerWidth),l(t),r.stopPropagation()})}var o=t("../instances"),l=t("../update-geometry"),i=t("../update-scroll");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],11:[function(t,e,n){"use strict";function r(t,e){function n(n){var o=r+n*e.railXRatio,i=Math.max(0,e.scrollbarXRail.getBoundingClientRect().left)+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);o<0?e.scrollbarXLeft=0:o>i?e.scrollbarXLeft=i:e.scrollbarXLeft=o;var s=l.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;c(t,"left",s)}var r=null,o=null,s=function(e){n(e.pageX-o),a(t),e.stopPropagation(),e.preventDefault()},u=function(){l.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarX,"mousedown",function(n){o=n.pageX,r=l.toInt(i.css(e.scrollbarX,"left"))*e.railXRatio,l.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}function o(t,e){function n(n){var o=r+n*e.railYRatio,i=Math.max(0,e.scrollbarYRail.getBoundingClientRect().top)+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);o<0?e.scrollbarYTop=0:o>i?e.scrollbarYTop=i:e.scrollbarYTop=o;var s=l.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));c(t,"top",s)}var r=null,o=null,s=function(e){n(e.pageY-o),a(t),e.stopPropagation(),e.preventDefault()},u=function(){l.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarY,"mousedown",function(n){o=n.pageY,r=l.toInt(i.css(e.scrollbarY,"top"))*e.railYRatio,l.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}var l=t("../../lib/helper"),i=t("../../lib/dom"),s=t("../instances"),a=t("../update-geometry"),c=t("../update-scroll");e.exports=function(t){var e=s.get(t);r(t,e),o(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],12:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var l=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===l&&n<0||l>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}var r=!1;e.event.bind(t,"mouseenter",function(){r=!0}),e.event.bind(t,"mouseleave",function(){r=!1});var i=!1;e.event.bind(e.ownerDocument,"keydown",function(c){if(!(c.isDefaultPrevented&&c.isDefaultPrevented()||c.defaultPrevented)){var u=l.matches(e.scrollbarX,":focus")||l.matches(e.scrollbarY,":focus");if(r||u){var d=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(d){if("IFRAME"===d.tagName)d=d.contentDocument.activeElement;else for(;d.shadowRoot;)d=d.shadowRoot.activeElement;if(o.isEditable(d))return}var p=0,f=0;switch(c.which){case 37:p=c.metaKey?-e.contentWidth:c.altKey?-e.containerWidth:-30;break;case 38:f=c.metaKey?e.contentHeight:c.altKey?e.containerHeight:30;break;case 39:p=c.metaKey?e.contentWidth:c.altKey?e.containerWidth:30;break;case 40:f=c.metaKey?-e.contentHeight:c.altKey?-e.containerHeight:-30;break;case 33:f=90;break;case 32:f=c.shiftKey?90:-90;break;case 34:f=-90;break;case 35:f=c.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:f=c.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}a(t,"top",t.scrollTop-f),a(t,"left",t.scrollLeft+p),s(t),i=n(p,f),i&&c.preventDefault()}}})}var o=t("../../lib/helper"),l=t("../../lib/dom"),i=t("../instances"),s=t("../update-geometry"),a=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],13:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var l=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===l&&n<0||l>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}function r(t){var e=t.deltaX,n=-1*t.deltaY;return"undefined"!=typeof e&&"undefined"!=typeof n||(e=-1*t.wheelDeltaX/6,n=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,n*=10),e!==e&&n!==n&&(e=0,n=t.wheelDelta),t.shiftKey?[-n,-e]:[e,n]}function o(e,n){var r=t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if(r){if(!window.getComputedStyle(r).overflow.match(/(scroll|auto)/))return!1;var o=r.scrollHeight-r.clientHeight;if(o>0&&!(0===r.scrollTop&&n>0||r.scrollTop===o&&n<0))return!0;var l=r.scrollLeft-r.clientWidth;if(l>0&&!(0===r.scrollLeft&&e<0||r.scrollLeft===l&&e>0))return!0}return!1}function s(s){var c=r(s),u=c[0],d=c[1];o(u,d)||(a=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(d?i(t,"top",t.scrollTop-d*e.settings.wheelSpeed):i(t,"top",t.scrollTop+u*e.settings.wheelSpeed),a=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(u?i(t,"left",t.scrollLeft+u*e.settings.wheelSpeed):i(t,"left",t.scrollLeft-d*e.settings.wheelSpeed),a=!0):(i(t,"top",t.scrollTop-d*e.settings.wheelSpeed),i(t,"left",t.scrollLeft+u*e.settings.wheelSpeed)),l(t),a=a||n(u,d),a&&(s.stopPropagation(),s.preventDefault()))}var a=!1;"undefined"!=typeof window.onwheel?e.event.bind(t,"wheel",s):"undefined"!=typeof window.onmousewheel&&e.event.bind(t,"mousewheel",s)}var o=t("../instances"),l=t("../update-geometry"),i=t("../update-scroll");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],14:[function(t,e,n){"use strict";function r(t,e){e.event.bind(t,"scroll",function(){l(t)})}var o=t("../instances"),l=t("../update-geometry");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19}],15:[function(t,e,n){"use strict";function r(t,e){function n(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===t.toString().length?null:t.getRangeAt(0).commonAncestorContainer}function r(){c||(c=setInterval(function(){return l.get(t)?(s(t,"top",t.scrollTop+u.top),s(t,"left",t.scrollLeft+u.left),void i(t)):void clearInterval(c)},50))}function a(){c&&(clearInterval(c),c=null),o.stopScrolling(t)}var c=null,u={top:0,left:0},d=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(n())?d=!0:(d=!1,a())}),e.event.bind(window,"mouseup",function(){d&&(d=!1,a())}),e.event.bind(window,"keyup",function(){d&&(d=!1,a())}),e.event.bind(window,"mousemove",function(e){if(d){var n={x:e.pageX,y:e.pageY},l={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};n.x<l.left+3?(u.left=-5,o.startScrolling(t,"x")):n.x>l.right-3?(u.left=5,o.startScrolling(t,"x")):u.left=0,n.y<l.top+3?(l.top+3-n.y<5?u.top=-5:u.top=-20,o.startScrolling(t,"y")):n.y>l.bottom-3?(n.y-l.bottom+3<5?u.top=5:u.top=20,o.startScrolling(t,"y")):u.top=0,0===u.top&&0===u.left?a():r()}})}var o=t("../../lib/helper"),l=t("../instances"),i=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){var e=l.get(t);r(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],16:[function(t,e,n){"use strict";function r(t,e,n,r){function o(n,r){var o=t.scrollTop,l=t.scrollLeft,i=Math.abs(n),s=Math.abs(r);if(s>i){if(r<0&&o===e.contentHeight-e.containerHeight||r>0&&0===o)return!e.settings.swipePropagation}else if(i>s&&(n<0&&l===e.contentWidth-e.containerWidth||n>0&&0===l))return!e.settings.swipePropagation;return!0}function a(e,n){s(t,"top",t.scrollTop-n),s(t,"left",t.scrollLeft-e),i(t)}function c(){w=!0}function u(){w=!1}function d(t){return t.targetTouches?t.targetTouches[0]:t}function p(t){return!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE)}function f(t){if(p(t)){Y=!0;var e=d(t);g.pageX=e.pageX,g.pageY=e.pageY,v=(new Date).getTime(),null!==y&&clearInterval(y),t.stopPropagation()}}function h(t){if(!Y&&e.settings.swipePropagation&&f(t),!w&&Y&&p(t)){var n=d(t),r={pageX:n.pageX,pageY:n.pageY},l=r.pageX-g.pageX,i=r.pageY-g.pageY;a(l,i),g=r;var s=(new Date).getTime(),c=s-v;c>0&&(m.x=l/c,m.y=i/c,v=s),o(l,i)&&(t.stopPropagation(),t.preventDefault())}}function b(){!w&&Y&&(Y=!1,clearInterval(y),y=setInterval(function(){return l.get(t)&&(m.x||m.y)?Math.abs(m.x)<.01&&Math.abs(m.y)<.01?void clearInterval(y):(a(30*m.x,30*m.y),m.x*=.8,void(m.y*=.8)):void clearInterval(y)},10))}var g={},v=0,m={},y=null,w=!1,Y=!1;n?(e.event.bind(window,"touchstart",c),e.event.bind(window,"touchend",u),e.event.bind(t,"touchstart",f),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",b)):r&&(window.PointerEvent?(e.event.bind(window,"pointerdown",c),e.event.bind(window,"pointerup",u),e.event.bind(t,"pointerdown",f),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",b)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",c),e.event.bind(window,"MSPointerUp",u),e.event.bind(t,"MSPointerDown",f),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",b)))}var o=t("../../lib/helper"),l=t("../instances"),i=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){if(o.env.supportsTouch||o.env.supportsIePointer){var e=l.get(t);r(t,e,o.env.supportsTouch,o.env.supportsIePointer)}}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],17:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/class"),l=t("./instances"),i=t("./update-geometry"),s={"click-rail":t("./handler/click-rail"),"drag-scrollbar":t("./handler/drag-scrollbar"),keyboard:t("./handler/keyboard"),wheel:t("./handler/mouse-wheel"),touch:t("./handler/touch"),selection:t("./handler/selection")},a=t("./handler/native-scroll");e.exports=function(t,e){e="object"==typeof e?e:{},o.add(t,"ps-container");var n=l.add(t);n.settings=r.extend(n.settings,e),o.add(t,"ps-theme-"+n.settings.theme),n.settings.handlers.forEach(function(e){s[e](t)}),a(t),i(t)}},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(t,e,n){"use strict";function r(t){function e(){a.add(t,"ps-focus")}function n(){a.remove(t,"ps-focus")}var r=this;r.settings=s.clone(c),r.containerWidth=null,r.containerHeight=null,r.contentWidth=null,r.contentHeight=null,r.isRtl="rtl"===u.css(t,"direction"),r.isNegativeScroll=function(){var e=t.scrollLeft,n=null;return t.scrollLeft=-1,n=t.scrollLeft<0,t.scrollLeft=e,n}(),r.negativeScrollAdjustment=r.isNegativeScroll?t.scrollWidth-t.clientWidth:0,r.event=new d,r.ownerDocument=t.ownerDocument||document,r.scrollbarXRail=u.appendTo(u.e("div","ps-scrollbar-x-rail"),t),r.scrollbarX=u.appendTo(u.e("div","ps-scrollbar-x"),r.scrollbarXRail),r.scrollbarX.setAttribute("tabindex",0),r.event.bind(r.scrollbarX,"focus",e),r.event.bind(r.scrollbarX,"blur",n),r.scrollbarXActive=null,r.scrollbarXWidth=null,r.scrollbarXLeft=null,r.scrollbarXBottom=s.toInt(u.css(r.scrollbarXRail,"bottom")),r.isScrollbarXUsingBottom=r.scrollbarXBottom===r.scrollbarXBottom,r.scrollbarXTop=r.isScrollbarXUsingBottom?null:s.toInt(u.css(r.scrollbarXRail,"top")),r.railBorderXWidth=s.toInt(u.css(r.scrollbarXRail,"borderLeftWidth"))+s.toInt(u.css(r.scrollbarXRail,"borderRightWidth")),u.css(r.scrollbarXRail,"display","block"),r.railXMarginWidth=s.toInt(u.css(r.scrollbarXRail,"marginLeft"))+s.toInt(u.css(r.scrollbarXRail,"marginRight")),u.css(r.scrollbarXRail,"display",""),r.railXWidth=null,r.railXRatio=null,r.scrollbarYRail=u.appendTo(u.e("div","ps-scrollbar-y-rail"),t),r.scrollbarY=u.appendTo(u.e("div","ps-scrollbar-y"),r.scrollbarYRail),r.scrollbarY.setAttribute("tabindex",0),r.event.bind(r.scrollbarY,"focus",e),r.event.bind(r.scrollbarY,"blur",n),r.scrollbarYActive=null,r.scrollbarYHeight=null,r.scrollbarYTop=null,r.scrollbarYRight=s.toInt(u.css(r.scrollbarYRail,"right")),r.isScrollbarYUsingRight=r.scrollbarYRight===r.scrollbarYRight,r.scrollbarYLeft=r.isScrollbarYUsingRight?null:s.toInt(u.css(r.scrollbarYRail,"left")),r.scrollbarYOuterWidth=r.isRtl?s.outerWidth(r.scrollbarY):null,r.railBorderYWidth=s.toInt(u.css(r.scrollbarYRail,"borderTopWidth"))+s.toInt(u.css(r.scrollbarYRail,"borderBottomWidth")),u.css(r.scrollbarYRail,"display","block"),r.railYMarginHeight=s.toInt(u.css(r.scrollbarYRail,"marginTop"))+s.toInt(u.css(r.scrollbarYRail,"marginBottom")),u.css(r.scrollbarYRail,"display",""),r.railYHeight=null,r.railYRatio=null}function o(t){return t.getAttribute("data-ps-id")}function l(t,e){t.setAttribute("data-ps-id",e)}function i(t){t.removeAttribute("data-ps-id")}var s=t("../lib/helper"),a=t("../lib/class"),c=t("./default-setting"),u=t("../lib/dom"),d=t("../lib/event-manager"),p=t("../lib/guid"),f={};n.add=function(t){var e=p();return l(t,e),f[e]=new r(t),f[e]},n.remove=function(t){delete f[o(t)],i(t)},n.get=function(t){return f[o(t)]}},{"../lib/class":2,"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(t,e,n){"use strict";function r(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function o(t,e){var n={width:e.railXWidth};e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-t.scrollTop:n.top=e.scrollbarXTop+t.scrollTop,s.css(e.scrollbarXRail,n);var r={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?r.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:r.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:r.left=e.scrollbarYLeft+t.scrollLeft,s.css(e.scrollbarYRail,r),s.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),s.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}var l=t("../lib/helper"),i=t("../lib/class"),s=t("../lib/dom"),a=t("./instances"),c=t("./update-scroll");e.exports=function(t){var e=a.get(t);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight;var n;t.contains(e.scrollbarXRail)||(n=s.queryChildren(t,".ps-scrollbar-x-rail"),n.length>0&&n.forEach(function(t){s.remove(t)}),s.appendTo(e.scrollbarXRail,t)),t.contains(e.scrollbarYRail)||(n=s.queryChildren(t,".ps-scrollbar-y-rail"),n.length>0&&n.forEach(function(t){s.remove(t)}),s.appendTo(e.scrollbarYRail,t)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=r(e,l.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=l.toInt((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=r(e,l.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=l.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),o(t,e),e.scrollbarXActive?i.add(t,"ps-active-x"):(i.remove(t,"ps-active-x"),e.scrollbarXWidth=0,e.scrollbarXLeft=0,c(t,"left",0)),e.scrollbarYActive?i.add(t,"ps-active-y"):(i.remove(t,"ps-active-y"),e.scrollbarYHeight=0,e.scrollbarYTop=0,c(t,"top",0))}},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-scroll":20}],20:[function(t,e,n){"use strict";var r,o,l=t("./instances"),i=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e};e.exports=function(t,e,n){if("undefined"==typeof t)throw"You must provide an element to the update-scroll function";if("undefined"==typeof e)throw"You must provide an axis to the update-scroll function";if("undefined"==typeof n)throw"You must provide a value to the update-scroll function";"top"===e&&n<=0&&(t.scrollTop=n=0,t.dispatchEvent(i("ps-y-reach-start"))),"left"===e&&n<=0&&(t.scrollLeft=n=0,t.dispatchEvent(i("ps-x-reach-start")));var s=l.get(t);"top"===e&&n>=s.contentHeight-s.containerHeight&&(n=s.contentHeight-s.containerHeight,n-t.scrollTop<=1?n=t.scrollTop:t.scrollTop=n,t.dispatchEvent(i("ps-y-reach-end"))),"left"===e&&n>=s.contentWidth-s.containerWidth&&(n=s.contentWidth-s.containerWidth,n-t.scrollLeft<=1?n=t.scrollLeft:t.scrollLeft=n,t.dispatchEvent(i("ps-x-reach-end"))),r||(r=t.scrollTop),o||(o=t.scrollLeft),"top"===e&&n<r&&t.dispatchEvent(i("ps-scroll-up")),"top"===e&&n>r&&t.dispatchEvent(i("ps-scroll-down")),"left"===e&&n<o&&t.dispatchEvent(i("ps-scroll-left")),"left"===e&&n>o&&t.dispatchEvent(i("ps-scroll-right")),"top"===e&&(t.scrollTop=r=n,t.dispatchEvent(i("ps-scroll-y"))),"left"===e&&(t.scrollLeft=o=n,t.dispatchEvent(i("ps-scroll-x")))}},{"./instances":18}],21:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),l=t("./instances"),i=t("./update-geometry"),s=t("./update-scroll");e.exports=function(t){var e=l.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,o.css(e.scrollbarXRail,"display","block"),o.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=r.toInt(o.css(e.scrollbarXRail,"marginLeft"))+r.toInt(o.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=r.toInt(o.css(e.scrollbarYRail,"marginTop"))+r.toInt(o.css(e.scrollbarYRail,"marginBottom")),o.css(e.scrollbarXRail,"display","none"),o.css(e.scrollbarYRail,"display","none"),i(t),s(t,"top",t.scrollTop),s(t,"left",t.scrollLeft),o.css(e.scrollbarXRail,"display",""),o.css(e.scrollbarYRail,"display",""))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19,"./update-scroll":20}]},{},[1]);
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
!function(e){"use strict";if("object"==typeof exports&&null!=exports&&"number"!=typeof exports.nodeType)module.exports=e();else if("function"==typeof define&&null!=define.amd)define([],e);else{var t=e(),r="undefined"!=typeof self?self:$.global;"function"!=typeof r.btoa&&(r.btoa=t.btoa),"function"!=typeof r.atob&&(r.atob=t.atob)}}(function(){"use strict";var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function s(e){this.message=e}return(s.prototype=new Error).name="InvalidCharacterError",{btoa:function(e){for(var t,r,o,n,a=String(e),c=0,i="";c<a.length;){if(t=a.charCodeAt(c++),r=a.charCodeAt(c++),o=a.charCodeAt(c++),255<t||255<r||255<o)throw new s("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");i+=f.charAt((n=t<<16|r<<8|o)>>18&63)+f.charAt(n>>12&63)+f.charAt(n>>6&63)+f.charAt(63&n)}switch(a.length%3){case 0:return i;case 1:return i.slice(0,-2)+"==";case 2:return i.slice(0,-1)+"="}},atob:function(e){var t=String(e).replace(/[=]+$/,"");if(t.length%4==1)throw new s("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,o,n=0,a=0,c="";o=t.charAt(a++);~o&&(r=n%4?64*r+o:o,n++%4)&&(c+=String.fromCharCode(255&r>>(-2*n&6))))o=f.indexOf(o);return c}}});

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.DOMPurify=t()}(this,function(){"use strict";function e(e,t){y&&y(e,null);for(var n=t.length;n--;){var r=t[n];if("string"==typeof r){var o=r.toLowerCase();o!==r&&(Object.isFrozen(t)||(t[n]=o),r=o)}e[r]=!0}return e}function t(e){var t={},n=void 0;for(n in e)g(h,e,[n])&&(t[n]=e[n]);return t}function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_(),u=function(e){return r(e)};if(u.version="1.0.11",u.removed=[],!o||!o.document||9!==o.document.nodeType)return u.isSupported=!1,u;var h=o.document,y=!1,g=!1,v=o.document,D=o.DocumentFragment,R=o.HTMLTemplateElement,C=o.Node,H=o.NodeFilter,F=o.NamedNodeMap,z=void 0===F?o.NamedNodeMap||o.MozNamedAttrMap:F,I=o.Text,j=o.Comment,P=o.DOMParser,U=o.TrustedTypes;if("function"==typeof R){var W=v.createElement("template");W.content&&W.content.ownerDocument&&(v=W.content.ownerDocument)}var B=N(U,h),G=B?B.createHTML(""):"",q=v,V=q.implementation,Y=q.createNodeIterator,K=q.getElementsByTagName,X=q.createDocumentFragment,$=h.importNode,J={};u.isSupported=V&&void 0!==V.createHTMLDocument&&9!==v.documentMode;var Q=b,Z=T,ee=A,te=x,ne=S,re=M,oe=L,ie=null,ae=e({},[].concat(n(i),n(a),n(l),n(c),n(s))),le=null,ce=e({},[].concat(n(d),n(f),n(p),n(m))),se=null,ue=null,de=!0,fe=!0,pe=!1,me=!1,he=!1,ye=!1,ge=!1,ve=!1,be=!1,Te=!1,Ae=!1,xe=!0,Le=!0,Se=!1,Me={},ke=e({},["audio","head","math","script","style","template","svg","video"]),we=e({},["audio","video","img","source","image"]),Ee=null,Oe=e({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),_e=null,Ne=v.createElement("form"),De=function(r){_e&&_e===r||(r&&"object"===(void 0===r?"undefined":k(r))||(r={}),ie="ALLOWED_TAGS"in r?e({},r.ALLOWED_TAGS):ae,le="ALLOWED_ATTR"in r?e({},r.ALLOWED_ATTR):ce,Ee="ADD_URI_SAFE_ATTR"in r?e({},r.ADD_URI_SAFE_ATTR):Oe,se="FORBID_TAGS"in r?e({},r.FORBID_TAGS):{},ue="FORBID_ATTR"in r?e({},r.FORBID_ATTR):{},Me="USE_PROFILES"in r&&r.USE_PROFILES,de=!1!==r.ALLOW_ARIA_ATTR,fe=!1!==r.ALLOW_DATA_ATTR,pe=r.ALLOW_UNKNOWN_PROTOCOLS||!1,me=r.SAFE_FOR_JQUERY||!1,he=r.SAFE_FOR_TEMPLATES||!1,ye=r.WHOLE_DOCUMENT||!1,be=r.RETURN_DOM||!1,Te=r.RETURN_DOM_FRAGMENT||!1,Ae=r.RETURN_DOM_IMPORT||!1,ve=r.FORCE_BODY||!1,xe=!1!==r.SANITIZE_DOM,Le=!1!==r.KEEP_CONTENT,Se=r.IN_PLACE||!1,oe=r.ALLOWED_URI_REGEXP||oe,he&&(fe=!1),Te&&(be=!0),Me&&(ie=e({},[].concat(n(s))),le=[],!0===Me.html&&(e(ie,i),e(le,d)),!0===Me.svg&&(e(ie,a),e(le,f),e(le,m)),!0===Me.svgFilters&&(e(ie,l),e(le,f),e(le,m)),!0===Me.mathMl&&(e(ie,c),e(le,p),e(le,m))),r.ADD_TAGS&&(ie===ae&&(ie=t(ie)),e(ie,r.ADD_TAGS)),r.ADD_ATTR&&(le===ce&&(le=t(le)),e(le,r.ADD_ATTR)),r.ADD_URI_SAFE_ATTR&&e(Ee,r.ADD_URI_SAFE_ATTR),Le&&(ie["#text"]=!0),ye&&e(ie,["html","head","body"]),ie.table&&e(ie,["tbody"]),O&&O(r),_e=r)},Re=function(e){u.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=G}},Ce=function(e,t){try{u.removed.push({attribute:t.getAttributeNode(e),from:t})}catch(e){u.removed.push({attribute:null,from:t})}t.removeAttribute(e)},He=function(t){var n=void 0,r=void 0;if(ve)t="<remove></remove>"+t;else{var o=t.match(/^[\s]+/);(r=o&&o[0])&&(t=t.slice(r.length))}if(y)try{n=(new P).parseFromString(t,"text/html")}catch(e){}if(g&&e(se,["title"]),!n||!n.documentElement){var i=(n=V.createHTMLDocument("")).body;i.parentNode.removeChild(i.parentNode.firstElementChild),i.outerHTML=B?B.createHTML(t):t}return r&&n.body.insertBefore(v.createTextNode(r),n.body.childNodes[0]||null),K.call(n,ye?"html":"body")[0]};u.isSupported&&(function(){try{He('<svg><p><style><img src="</style><img src=x onerror=1//">').querySelector("svg img")&&(y=!0)}catch(e){}}(),function(){try{He("<x/><title>&lt;/title&gt;&lt;img&gt;").querySelector("title").innerHTML.match(/<\/title/)&&(g=!0)}catch(e){}}());var Fe=function(e){return Y.call(e.ownerDocument||e,e,H.SHOW_ELEMENT|H.SHOW_COMMENT|H.SHOW_TEXT,function(){return H.FILTER_ACCEPT},!1)},ze=function(e){return!(e instanceof I||e instanceof j)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof z&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},Ie=function(e){return"object"===(void 0===C?"undefined":k(C))?e instanceof C:e&&"object"===(void 0===e?"undefined":k(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},je=function(e,t,n){J[e]&&J[e].forEach(function(e){e.call(u,t,n,_e)})},Pe=function(e){var t=void 0;if(je("beforeSanitizeElements",e,null),ze(e))return Re(e),!0;var n=e.nodeName.toLowerCase();if(je("uponSanitizeElement",e,{tagName:n,allowedTags:ie}),!ie[n]||se[n]){if(Le&&!ke[n]&&"function"==typeof e.insertAdjacentHTML)try{var r=e.innerHTML;e.insertAdjacentHTML("AfterEnd",B?B.createHTML(r):r)}catch(e){}return Re(e),!0}return"noscript"===n&&e.innerHTML.match(/<\/noscript/i)?(Re(e),!0):"noembed"===n&&e.innerHTML.match(/<\/noembed/i)?(Re(e),!0):(!me||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(u.removed.push({element:e.cloneNode()}),e.innerHTML?e.innerHTML=e.innerHTML.replace(/</g,"&lt;"):e.innerHTML=e.textContent.replace(/</g,"&lt;")),he&&3===e.nodeType&&(t=(t=(t=e.textContent).replace(Q," ")).replace(Z," "),e.textContent!==t&&(u.removed.push({element:e.cloneNode()}),e.textContent=t)),je("afterSanitizeElements",e,null),!1)},Ue=function(e,t,n){if(xe&&("id"===t||"name"===t)&&(n in v||n in Ne))return!1;if(fe&&ee.test(t));else if(de&&te.test(t));else{if(!le[t]||ue[t])return!1;if(Ee[t]);else if(oe.test(n.replace(re,"")));else if("src"!==t&&"xlink:href"!==t||"script"===e||0!==n.indexOf("data:")||!we[e]){if(pe&&!ne.test(n.replace(re,"")));else if(n)return!1}else;}return!0},We=function(e){var t=void 0,n=void 0,r=void 0,o=void 0,i=void 0;je("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:le};for(i=a.length;i--;){var c=t=a[i],s=c.name,d=c.namespaceURI;if(n=t.value.trim(),r=s.toLowerCase(),l.attrName=r,l.attrValue=n,l.keepAttr=!0,je("uponSanitizeAttribute",e,l),n=l.attrValue,"name"===r&&"IMG"===e.nodeName&&a.id)o=a.id,a=w(E,a,[]),Ce("id",e),Ce(s,e),a.indexOf(o)>i&&e.setAttribute("id",o.value);else{if("INPUT"===e.nodeName&&"type"===r&&"file"===n&&l.keepAttr&&(le[r]||!ue[r]))continue;"id"===s&&e.setAttribute(s,""),Ce(s,e)}if(l.keepAttr){he&&(n=(n=n.replace(Q," ")).replace(Z," "));var f=e.nodeName.toLowerCase();if(Ue(f,r,n))try{d?e.setAttributeNS(d,s,n):e.setAttribute(s,n),u.removed.pop()}catch(e){}}}je("afterSanitizeAttributes",e,null)}},Be=function e(t){var n=void 0,r=Fe(t);for(je("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)je("uponSanitizeShadowNode",n,null),Pe(n)||(n.content instanceof D&&e(n.content),We(n));je("afterSanitizeShadowDOM",t,null)};return u.sanitize=function(e,t){var n=void 0,r=void 0,i=void 0,a=void 0,l=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Ie(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");if("string"!=typeof(e=e.toString()))throw new TypeError("dirty is not a string, aborting")}if(!u.isSupported){if("object"===k(o.toStaticHTML)||"function"==typeof o.toStaticHTML){if("string"==typeof e)return o.toStaticHTML(e);if(Ie(e))return o.toStaticHTML(e.outerHTML)}return e}if(ge||De(t),u.removed=[],Se);else if(e instanceof C)1===(r=(n=He("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===r.nodeName?n=r:"HTML"===r.nodeName?n=r:n.appendChild(r);else{if(!be&&!he&&!ye&&-1===e.indexOf("<"))return B?B.createHTML(e):e;if(!(n=He(e)))return be?null:G}n&&ve&&Re(n.firstChild);for(var c=Fe(Se?e:n);i=c.nextNode();)3===i.nodeType&&i===a||Pe(i)||(i.content instanceof D&&Be(i.content),We(i),a=i);if(a=null,Se)return e;if(be){if(Te)for(l=X.call(n.ownerDocument);n.firstChild;)l.appendChild(n.firstChild);else l=n;return Ae&&(l=$.call(h,l,!0)),l}var s=ye?n.outerHTML:n.innerHTML;return he&&(s=(s=s.replace(Q," ")).replace(Z," ")),B?B.createHTML(s):s},u.setConfig=function(e){De(e),ge=!0},u.clearConfig=function(){_e=null,ge=!1},u.isValidAttribute=function(e,t,n){_e||De({});var r=e.toLowerCase(),o=t.toLowerCase();return Ue(r,o,n)},u.addHook=function(e,t){"function"==typeof t&&(J[e]=J[e]||[],J[e].push(t))},u.removeHook=function(e){J[e]&&J[e].pop()},u.removeHooks=function(e){J[e]&&(J[e]=[])},u.removeAllHooks=function(){J={}},u}var o=Object.freeze||function(e){return e},i=o(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),a=o(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),l=o(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),c=o(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),s=o(["#text"]),u=Object.freeze||function(e){return e},d=u(["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"]),f=u(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),p=u(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),m=u(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),h=Object.hasOwnProperty,y=Object.setPrototypeOf,g=("undefined"!=typeof Reflect&&Reflect).apply;g||(g=function(e,t,n){return e.apply(t,n)});var v=Object.seal||function(e){return e},b=v(/\{\{[\s\S]*|[\s\S]*\}\}/gm),T=v(/<%[\s\S]*|[\s\S]*%>/gm),A=v(/^data-[\-\w.\u00B7-\uFFFF]/),x=v(/^aria-[\-\w]+$/),L=v(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),S=v(/^(?:\w+script|data):/i),M=v(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w=("undefined"!=typeof Reflect&&Reflect).apply,E=Array.prototype.slice,O=Object.freeze,_=function(){return"undefined"==typeof window?null:window};w||(w=function(e,t,n){return e.apply(t,n)});var N=function(e,t){if("object"!==(void 0===e?"undefined":k(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return r()});
//# sourceMappingURL=purify.min.js.map

// SPDX-FileCopyrightText: 2010-2024 the Friendica project
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPLv3-or-later

// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
if (!Element.prototype.matches) {
	Element.prototype.matches =
		Element.prototype.matchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector ||
		Element.prototype.oMatchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		function(s) {
			var matches = (this.document || this.ownerDocument).querySelectorAll(s),
				i = matches.length;
			while (--i >= 0 && matches.item(i) !== this) {}
			return i > -1;
		};
}

function resizeIframe(obj) {
	_resizeIframe(obj, 0);
}

function _resizeIframe(obj, desth) {
	var h = obj.style.height;
	var ch = obj.contentWindow.document.body.scrollHeight;

	if (h == (ch + 'px')) {
		return;
	}
	if (desth == ch && ch > 0) {
		obj.style.height  = ch + 'px';
	}
	setTimeout(_resizeIframe, 100, obj, ch);
}

function initWidget(inflated, deflated) {
	var elInf = document.getElementById(inflated);
	var elDef = document.getElementById(deflated);

	if (!elInf || !elDef) {
		return;
	}
	if (localStorage.getItem(window.location.pathname.split("/")[1] + ":" + inflated) != "none") {
		elInf.style.display = "block";
		elDef.style.display = "none";
	} else {
		elInf.style.display = "none";
		elDef.style.display = "block";
	}
}

function openCloseWidget(inflated, deflated) {
	var elInf = document.getElementById(inflated);
	var elDef = document.getElementById(deflated);

	if (!elInf || !elDef) {
		return;
	}

	if (window.getComputedStyle(elInf).display === "none") {
		elInf.style.display = "block";
		elDef.style.display = "none";
		localStorage.setItem(window.location.pathname.split("/")[1] + ":" + inflated, "block");
		elInf.querySelector("button").focus();
	} else {
		elInf.style.display = "none";
		elDef.style.display = "block";
		localStorage.setItem(window.location.pathname.split("/")[1] + ":" + inflated, "none");
		elDef.querySelector("button").focus();
	}
}

function openClose(theID) {
	var el = document.getElementById(theID);
	if (el) {
		if (window.getComputedStyle(el).display === "none") {
			openMenu(theID);
		} else {
			closeMenu(theID);
		}
	}
}

function openMenu(theID) {
	var el = document.getElementById(theID);
	if (el) {
		if (!el.dataset.display) {
			el.dataset.display = 'block';
		}
		el.style.display = el.dataset.display;
	}
}

function closeMenu(theID) {
	var el = document.getElementById(theID);
	if (el) {
		el.dataset.display = window.getComputedStyle(el).display;
		el.style.display = "none";
	}
}

function decodeHtml(html) {
	var txt = document.createElement("textarea");

	txt.innerHTML = html;
	return txt.value;
}

/**
 * Retrieves a single named query string parameter
 *
 * @param {string} name
 * @returns {string}
 * @see https://davidwalsh.name/query-string-javascript
 */
function getUrlParameter(name) {
	name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	var results = regex.exec(location.search);
	return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

var src = null;
var prev = null;
var livetime = null;
var force_update = false;
var update_item = 0;
var stopped = false;
var totStopped = false;
var timer = null;
var pr = 0;
var liking = 0;
var in_progress = false;
var langSelect = false;
var commentBusy = false;
var last_popup_menu = null;
var last_popup_button = null;
var lockLoadContent = false;
var originalTitle = document.title;

const urlRegex = /^(?:https?:\/\/|\s)[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})(?:\/+[a-z0-9_.:;-]*)*(?:\?[&%|+a-z0-9_=,.:;-]*)?(?:[&%|+&a-z0-9_=,:;.-]*)(?:[!#\/&%|+a-z0-9_=,:;.-]*)}*$/i;

$(function() {
	$.ajaxSetup({cache: false});

	/* setup comment textarea buttons */
	/* comment textarea buttons needs some "data-*" attributes to work:
	 * 		data-role="insert-formatting" : to mark the element as a formatting button
	 * 		data-bbcode="<string>" : name of the bbcode element to insert. insertFormatting() will insert it as "[name][/name]"
	 * 		data-id="<string>" : id of the comment, used to find other comment-related element, like the textarea
	 * */
	$('body').on('click','[data-role="insert-formatting"]', function(e) {
		e.preventDefault();
		var o = $(this);
		var bbcode = o.data('bbcode');
		var id = o.data('id');
		if (bbcode == "img") {
			Dialog.doImageBrowser("comment", id);
			return;
		}

		if (bbcode == "imgprv") {
			bbcode = "img";
		}

		insertFormatting(bbcode, id);
	});

	/* event from comment textarea button popups */
	/* insert returned bbcode at cursor position or replace selected text */
	$('body').on('fbrowser.photo.comment', function(e, filename, bbcode, id, img) {
		$.colorbox.close();
		var textarea = document.getElementById("comment-edit-text-" + id);
		if (typeof window.commentPhotoInsert === 'function') {
			window.commentPhotoInsert(textarea, bbcode, img || '', filename);
			return;
		}
		var start = textarea.selectionStart;
		var end   = textarea.selectionEnd;
		var prefix = textarea.value.substring(0, start);
		var suffix = textarea.value.substring(end);
		textarea.value = prefix
			+ (prefix.length > 0 && !prefix.endsWith('\n') ? '\n' : '')
			+ bbcode + '\n'
			+ suffix;
		$(textarea).trigger('change');
	});

	$(".comment-edit-wrapper textarea, .wall-item-comment-wrapper textarea")
		.editor_autocomplete(baseurl + '/search/acl')
		.bbco_autocomplete('bbcode');

	// Ensures asynchronously-added comment forms recognize mentions, tags and BBCodes as well
	document.addEventListener("postprocess_liveupdate", function() {
		$(".comment-edit-wrapper textarea, .wall-item-comment-wrapper textarea")
			.editor_autocomplete(baseurl + '/search/acl')
			.bbco_autocomplete('bbcode');
	});

	/* popup menus */
	function close_last_popup_menu() {
		if (last_popup_menu) {
			last_popup_menu.hide();
			last_popup_menu.off('click', function(e) {e.stopPropagation()});
			last_popup_button.removeClass("selected");
			last_popup_menu = null;
			last_popup_button = null;
		}
	}
	$('a[rel^="#"]').click(function(e) {
		e.preventDefault();
		var parent = $(this).parent();
		var isSelected = (last_popup_button && parent.attr('id') == last_popup_button.attr('id'));
		close_last_popup_menu();
		if (isSelected) {
			return false;
		}
		menu = $($(this).attr('rel'));
		e.preventDefault();
		e.stopPropagation();
		if (menu.attr('popup') == "false") {
			return false;
		}
		parent.toggleClass("selected");
		menu.toggle();
		if (menu.css("display") == "none") {
			last_popup_menu = null;
			last_popup_button = null;
		} else {
			last_popup_menu = menu;
			last_popup_menu.on('click', function(e) {e.stopPropagation()});
			last_popup_button = parent;
			$('#nav-notifications-menu').perfectScrollbar('update');
		}
		return false;
	});
	$('html').click(function() {
		close_last_popup_menu();
	});

	// Colorbox - related docs: https://www.jacklmoore.com/colorbox/
	/* Not used by frio. Used in two photos templates */
	$("a.popupbox").colorbox({
		'inline' : true,
		'transition' : 'elastic',
		'maxWidth' : '100%'
	});

	/* notifications template */
	var notifications_all = unescape($('<div>').append($("#nav-notifications-see-all").clone()).html()); //outerHtml hack
	var notifications_mark = unescape($('<div>').append($("#nav-notifications-mark-all").clone()).html()); //outerHtml hack
	var notifications_empty = unescape($("#nav-notifications-menu").html());

	/* Ensure loading is visible when notifications menu is opened (if no notifications loaded yet)*/
	$('#nav-notifications-linkmenu, #nav-notifications-menu-btn').on('click', function() {
		if ($("#nav-notifications-loading").length && $("#nav-notifications-empty").length) {
			// Only show loading if we haven't loaded notifications yet
			var menu = $("#nav-notifications-menu");
			var hasNotifications = menu.find('.notif-item, li').not('#nav-notifications-loading, #nav-notifications-empty').length > 0;
			var hasContent = menu.html().indexOf('nav-notifications-see-all') > -1;
			if (!hasNotifications && !hasContent) {
				$("#nav-notifications-loading").show();
				$("#nav-notifications-empty").hide();
			}
		}
	});

	/* enable perfect-scrollbars for different elements */
	$('#nav-notifications-menu, aside').perfectScrollbar();

	/* nav update event  */
	$('#topbar-first').bind('nav-update', function(e, data) {
		var invalid = data.invalid || 0;
		if (invalid == 1) {
			window.location.href=window.location.href
		}

		let tabNotifications = data.mail + data.notification;
		if (tabNotifications > 0) {
			document.title = '(' + tabNotifications + ') ' + originalTitle;
		} else {
			document.title = originalTitle;
		}

		['home', 'intro', 'mail', 'events', 'birthdays', 'notification'].forEach(function(type) {
			var number = data[type];
			updateCounter(type, number);
		});

		var intro = data['intro'];
		if (intro == 0) {
			intro = ''; $('#intro-update-li').removeClass('show')
		} else {
			$('#intro-update-li').addClass('show')
		}

		$('#intro-update-li').html(intro);

		var mail = data['mail'];
		if (mail == 0) {
			mail = ''; $('#mail-update-li').removeClass('show')
		} else {
			$('#mail-update-li').addClass('show')
		}

		$('#mail-update-li').html(mail);

		$(".sidebar-circle-li .notify").removeClass("show");
		$(data.circles).each(function(key, circle) {
			var gid = circle.id;
			var gcount = circle.count;
			$(".circle-"+gid+" .notify").addClass("show").text(gcount);
		});

		$(".group-widget-entry .notify").removeClass("show");
		$(data.groups).each(function(key, group) {
			var fid = group.id;
			var fcount = group.count;
			$(".group-"+fid+" .notify").addClass("show").text(fcount);
		});

		// Hide loading state when we receive notification data
		$("#nav-notifications-loading").hide();

		if (data.notifications.length == 0) {
			$("#nav-notifications-empty").show();
		} else {
			$("#nav-notifications-empty").hide();
			var nnm = $("#nav-notifications-menu");
			// Preserve the loading and empty state elements when rebuilding the menu
			var loadingElement = nnm.find("#nav-notifications-loading");
			var emptyElement = nnm.find("#nav-notifications-empty");

			nnm.html(notifications_all + notifications_mark);

			// Re-add the loading and empty elements if they existed
			if (loadingElement.length > 0) {
				nnm.append(loadingElement);
			}
			if (emptyElement.length > 0) {
				nnm.append(emptyElement);
			}

			var lastItemStorageKey = "notification-lastitem:" + localUser;
			var notification_lastitem = parseInt(localStorage.getItem(lastItemStorageKey));
			var notification_id = 0;

			// Insert notifs into the notifications-menu
			$(data.notifications).each(function(key, navNotif) {
				nnm.append(navNotif.html);
			});

			// Desktop Notifications
			$(data.notifications.reverse()).each(function(key, navNotif) {
				notification_id = parseInt(navNotif.timestamp);
				if (notification_lastitem !== null && notification_id > notification_lastitem && Number(navNotif.seen) === 0) {
					if (getNotificationPermission() === "granted") {
						var notification = new Notification(document.title, {
							body: decodeHtml(navNotif.plaintext),
							icon: navNotif.contact.photo,
						});
						notification['url'] = navNotif.href;
						notification.addEventListener("click", function(ev) {
							window.location = ev.target.url;
						});
					}
				}

			});
			notification_lastitem = notification_id;
			localStorage.setItem(lastItemStorageKey, notification_lastitem)

			$("img[data-src]", nnm).each(function(i, el) {
				// Add src attribute for images with a data-src attribute
				// However, don't bother if the data-src attribute is empty, because
				// an empty "src" tag for an image will cause some browsers
				// to prefetch the root page of the Friendica hub, which will
				// unnecessarily load an entire profile/ or network/ page
				if ($(el).data("src") != '') {
					$(el).attr('src', $(el).data("src"));
				}
			});
		}

		var notif = data['notification'];
		if (notif > 0) {
			$("#nav-notifications-linkmenu").addClass("on");
		} else {
			$("#nav-notifications-linkmenu").removeClass("on");
		}

		$(data.sysmsgs.notice).each(function(key, message) {
			$.jGrowl(message, {sticky: true, theme: 'notice'});
		});
		$(data.sysmsgs.info).each(function(key, message) {
			$.jGrowl(message, {sticky: false, theme: 'info', life: 5000});
		});

		// Update the js scrollbars
		$('#nav-notifications-menu').perfectScrollbar('update');
	});

	// Asynchronous calls are deferred until the very end of the page load to ease on slower connections
	window.addEventListener("load", function(){
		NavUpdate();
		if (typeof acl !== 'undefined') {
			acl.get(0, 100);
		}
	});

	// Allow folks to stop the ajax page updates with the pause/break key
	$(document).keydown(function(event) {
		// Pause/Break or Ctrl + Space
		if (event.which === 19 || (!event.metaKey && !event.shiftKey && !event.altKey && event.ctrlKey && event.which === 32)) {
			event.preventDefault();
			if (stopped === false) {
				stopped = true;
				if (event.ctrlKey) {
					totStopped = true;
				}
				$('#pause').html('<img src="images/pause.gif" alt="pause" style="border: 1px solid black;" />');
			} else {
				unpause();
			}
		} else if (!totStopped) {
			unpause();
		}
	});

	// Scroll to the next/previous thread when pressing J and K
	$(document).keydown(function (event) {
		var threads = $('.thread_level_1');
		if ((event.keyCode === 74 || event.keyCode === 75) && !$(event.target).is('textarea, input')) {
			var scrollTop = $(window).scrollTop();
			if (event.keyCode === 75) {
				threads = $(threads.get().reverse());
			}
			threads.each(function(key, item) {
				var comparison;
				var top = $(item).offset().top - 100;
				if (event.keyCode === 74) {
					comparison = top > scrollTop + 1;
				} else if (event.keyCode === 75) {
					comparison = top < scrollTop - 1;
				}
				if (comparison) {
					$('html, body').animate({scrollTop: top}, 200);
					return false;
				}
			});
		}
	});

	// Set an event listener for infinite scroll
	if (typeof infinite_scroll !== 'undefined') {
		$(window).scroll(function(e) {
			if ($(document).height() != $(window).height()) {
				// First method that is expected to work - but has problems with Chrome
				if ($(window).scrollTop() > ($(document).height() - $(window).height() * 1.5))
					loadScrollContent();
			} else {
				// This method works with Chrome - but seems to be much slower in Firefox
				if ($(window).scrollTop() > (($("section").height() + $("header").height() + $("footer").height()) - $(window).height() * 1.5)) {
					loadScrollContent();
				}
			}
		});
	}
});

/**
 * Inserts a BBCode tag in the comment textarea identified by id
 *
 * @param {string} BBCode
 * @param {int} id
 * @returns {boolean}
 */
function insertFormatting(BBCode, id) {
	let textarea = document.getElementById('comment-edit-text-' + id);

	if (textarea.value === '') {
		$(textarea)
			.addClass("comment-edit-text-full")
			.removeClass("comment-edit-text-empty");
		closeMenu("comment-fake-form-" + id);
		openMenu("item-comments-" + id);
	}

	insertBBCodeInTextarea(BBCode, textarea);

	return true;
}

/**
 * Inserts a BBCode tag in the provided textarea element, wrapping the currently selected text.
 * For URL BBCode, it discriminates between link text and non-link text to determine where to insert the selected text.
 *
 * @param {string} BBCode
 * @param {HTMLTextAreaElement} textarea
 */
function insertBBCodeInTextarea(BBCode, textarea) {
	let selectionStart = textarea.selectionStart;
	let selectionEnd = textarea.selectionEnd;
	let selectedText = textarea.value.substring(selectionStart, selectionEnd);
	let openingTag = '[' + BBCode + ']';
	let closingTag = '[/' + BBCode + ']';
	let cursorPosition = selectionStart + openingTag.length + selectedText.length;

	if (BBCode === 'url') {
		if (urlRegex.test(selectedText)) {
			openingTag = '[' + BBCode + '=' + selectedText + ']';
			selectedText = '';
			cursorPosition = selectionStart + openingTag.length;
		} else {
			openingTag = '[' + BBCode + '=]';
			cursorPosition = selectionStart + openingTag.length - 1;
		}
	}

	textarea.value = textarea.value.substring(0, selectionStart) + openingTag + selectedText + closingTag + textarea.value.substring(selectionEnd, textarea.value.length);
	textarea.setSelectionRange(cursorPosition, cursorPosition);
	textarea.dispatchEvent(new Event('change'));
	textarea.focus();
}

function NavUpdate() {
	if (!stopped) {
		var pingCmd = 'ping';
		$.get(pingCmd, function(data) {
			if (data.result) {
				// send nav-update event
				$('#topbar-first').trigger('nav-update', data.result);

				// start live update
				['network', 'profile', 'channel', 'community', 'notes', 'display', 'contact'].forEach(function (src) {
					if ($('#live-' + src).length && (force_update || (updateContent && ['network', 'channel', 'community'].includes(src)))) {
						liveUpdate(src);
					}
				});

				if ($('#live-network').length) {
					networkUpdate();
				} else {
					var update_url = 'ping_network?ping=1';
					$.get(update_url, function(net) {
						updateCounter('net', net);
					});
				}

				if ($('#live-photos').length) {
					if (liking) {
						liking = 0;
						window.location.href = window.location.href;
					}
				}
			}
		});
	}
	timer = setTimeout(NavUpdate, 30000);
}

function updateConvItems(data) {
	// add a new thread
	$('.toplevel_item',data).each(function() {
		var ident = $(this).attr('id');

		// Add new top-level item.
		if ($('#' + ident).length === 0
			&& (!getUrlParameter('page')
				&& !getUrlParameter('max_id')
				&& !getUrlParameter('min_id')
				|| getUrlParameter('page') === '1'
			)
		) {
			$('#' + prev).after($(this));

		// Replace already existing thread.
		} else {
			// Find out if the hidden comments are open, so we can keep it that way
			// if a new comment has been posted
			var id = $('.hide-comments-total', this).attr('id');
			if (typeof id != 'undefined') {
				id = id.split('-')[3];
				var commentsOpen = $("#collapsed-comments-" + id).is(":visible");
			}

			$('#' + ident).replaceWith($(this));

			if (typeof id != 'undefined') {
				if (commentsOpen) {
					showHideComments(id);
				}
			}
		}
		prev = ident;
	});

	$('.like-rotator').hide();
	if (commentBusy) {
		commentBusy = false;
		$('body').css('cursor', 'auto');
	}
}

function getUpdateUrl(src)
{
	let force = force_update || $(document).scrollTop() === 0;

	var udargs = ((netargs.length) ? '/' + netargs : '');

	var update_url = src + udargs + '&p=' + profile_uid + '&force=' + (force ? 1 : 0) + '&item=' + update_item;

	if (getUrlParameter('page')) {
		update_url += '&page=' + getUrlParameter('page');
	}
	if (getUrlParameter('min_id')) {
		update_url += '&min_id=' + getUrlParameter('min_id');
	}
	if (getUrlParameter('max_id')) {
		update_url += '&max_id=' + getUrlParameter('max_id');
	}

	match = $("span.received").first();
	if (match.length > 0) {
		update_url += '&first_received=' + match[0].innerHTML;
	}

	match = $("span.created").first();
	if (match.length > 0) {
		update_url += '&first_created=' + match[0].innerHTML;
	}

	match = $("span.commented").first();
	if (match.length > 0) {
		update_url += '&first_commented=' + match[0].innerHTML;
	}

	match = $("span.uriid").first();
	if (match.length > 0) {
		update_url += '&first_uriid=' + match[0].innerHTML;
	}

	// When viewing a circle page (/network/circle/N), pass the circle_id so update_network
	// knows to filter items to that circle before marking them as seen.
	var circleMatch = window.location.pathname.match(/\/network\/circle\/(\d+)/);
	if (circleMatch) {
		update_url += '&circle_id=' + circleMatch[1];
	}

	// Same pattern for Group Circle pages (/network/group/N).
	var groupCircleMatch = window.location.pathname.match(/\/network\/group\/(\d+)/);
	if (groupCircleMatch) {
		update_url += '&group_circle_id=' + groupCircleMatch[1];
	}

	return update_url;
}

function liveUpdate(src) {
	if ((src == null) || stopped || !profile_uid) {
		$('.like-rotator').hide(); return;
	}

	if (($('.comment-edit-text-full').length) || in_progress) {
		if (livetime) {
			clearTimeout(livetime);
		}
		livetime = setTimeout(function() {liveUpdate(src)}, 5000);
		return;
	}

	if (livetime != null) {
		livetime = null;
	}
	prev = 'live-' + src;

	in_progress = true;

	var orgHeight = $("section").height();

	var update_url = getUpdateUrl(src);

	if (force_update) {
		force_update = false;
	}

	$.get('update_' + update_url, function(data) {
		in_progress = false;
		update_item = 0;

		if ($('.wall-item-body', data).length == 0) {
			return;
		}

		$('.wall-item-body', data).imagesLoaded(function() {
			updateConvItems(data);

			document.dispatchEvent(new Event('postprocess_liveupdate'));

			// Update the scroll position.
			$(window).scrollTop($(window).scrollTop() + $("section").height() - orgHeight);
		});
	});
}

function networkUpdate() {
	$.get('ping_' + getUpdateUrl('network'), function(net) {
		updateCounter('net', net);
	});
}

function updateCounter(type, counter) {
	if (counter < 0) {
		return;
	}

	if (counter == 0) {
		counter = '';
		$('#' + type + '-update').removeClass('show');
	} else {
		$('#' + type + '-update').addClass('show');
	}
	$('#' + type + '-update').text(counter);
}

function updateItem(itemNo) {
	force_update = true;
	update_item = itemNo;
}

function imgbright(node) {
	$(node).removeClass("drophide").addClass("drop");
}

function imgdull(node) {
	$(node).removeClass("drop").addClass("drophide");
}

// Since our ajax calls are asynchronous, we will give a few
// seconds for the first ajax call (setting like/dislike), then
// run the updater to pick up any changes and display on the page.
// The updater will turn any rotators off when it's done.
// This function will have returned long before any of these
// events have completed and therefore there won't be any
// visible feedback that anything changed without all this
// trickery. This still could cause confusion if the "like" ajax call
// is delayed and NavUpdate runs before it completes.

/**
 * @param {int}     ident The id of the relevant item
 * @param {string}  verb  The verb of the action
 * @param {boolean} un    Whether to perform an activity removal instead of creation
 */
function doActivityItem(ident, verb, un) {
	unpause();
	$('#like-rotator-' + ident.toString()).show();
	verb = un ? 'un' + verb : verb;
	$.post('item/' + ident.toString() + '/activity/' + verb, NavUpdate);
	liking = 1;
	force_update = true;
	update_item = ident.toString();
}

function doFollowThread(ident) {
	unpause();
	$('#like-rotator-' + ident.toString()).show();
	$.post('item/' + ident.toString() + '/follow', NavUpdate);
	liking = 1;
	force_update = true;
	update_item = ident.toString();
}

function doCompleteThread(ident) {
	unpause();
	$('#like-rotator-' + ident.toString()).show();
	$.post('item/' + ident.toString() + '/complete', NavUpdate);
	liking = 1;
	force_update = true;
	update_item = ident.toString();
}

function doStar(ident) {
	ident = ident.toString();
	$('#like-rotator-' + ident).show();
	$.post('item/' + ident + '/star')
	.then(function(data) {
		if (data.state === 1) {
			$('#starred-' + ident)
				.addClass('starred')
				.removeClass('unstarred');
			$('#star-' + ident).addClass('hidden');
			$('#unstar-' + ident).removeClass('hidden');
		} else {
			$('#starred-' + ident)
				.addClass('unstarred')
				.removeClass('starred');
			$('#star-' + ident).removeClass('hidden');
			$('#unstar-' + ident).addClass('hidden');
		}
	})
	.always(function () {
		$('#like-rotator-' + ident).hide();
	});
}

function doPin(ident) {
	ident = ident.toString();
	$('#like-rotator-' + ident).show();
	$.post('item/' + ident + '/pin')
	.then(function(data) {
		if (data.state === 1) {
			$('#pinned-' + ident)
				.addClass('pinned')
				.removeClass('unpinned');
			$('#pin-' + ident).addClass('hidden');
			$('#unpin-' + ident).removeClass('hidden');
		} else {
			$('#pinned-' + ident)
				.addClass('unpinned')
				.removeClass('pinned');
			$('#pin-' + ident).removeClass('hidden');
			$('#unpin-' + ident).addClass('hidden');
		}
	})
	.always(function () {
		$('#like-rotator-' + ident).hide();
	});
}

function doIgnoreThread(ident) {
	ident = ident.toString();
	$('#like-rotator-' + ident).show();
	$.post('item/' + ident + '/ignore', function(data) {
		if (data.state === 1) {
			$('#ignored-' + ident)
				.addClass('ignored')
				.removeClass('unignored');
			$('#ignore-' + ident).addClass('hidden');
			$('#unignore-' + ident).removeClass('hidden');
		} else {
			$('#ignored-' + ident)
				.addClass('unignored')
				.removeClass('ignored');
			$('#ignore-' + ident).removeClass('hidden');
			$('#unignore-' + ident).addClass('hidden');
		}
		$('#like-rotator-' + ident).hide();
	});
}

function getPosition(e) {
	var cursor = {x:0, y:0};

	if (e.pageX || e.pageY) {
		cursor.x = e.pageX;
		cursor.y = e.pageY;
	} else {
		if (e.clientX || e.clientY) {
			cursor.x = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
			cursor.y = e.clientY + (document.documentElement.scrollTop  || document.body.scrollTop)  - document.documentElement.clientTop;
		} else if (e.x || e.y) {
			cursor.x = e.x;
			cursor.y = e.y;
		}
	}
	return cursor;
}

function displaySearchText(id) {
	$.get('item/' + id + '/searchtext', function(data) {
		alert(data);
	});
}

function displayLanguage(id) {
	$.get('item/' + id + '/language', function(data) {
		alert(data);
	});
}

var lockvisible = false;

function lockview(event, type, id) {
	event = event || window.event;
	cursor = getPosition(event);
	if (lockvisible) {
		lockvisible = false;
		$('#panel').hide();
	} else {
		lockvisible = true;
		$.get('permission/tooltip/' + type + '/' + id, function(data) {
			$('#panel')
				.html(data)
				.css({'left': cursor.x + 5 , 'top': cursor.y + 5})
				.show();
		});
	}
}

function post_comment(id) {
	unpause();
	commentBusy = true;
	$('body').css('cursor', 'wait');
	$.post(
		"item",
		$("#comment-edit-form-" + id).serialize(),
		function(data) {
			if (data.success) {
				$("#comment-edit-wrapper-" + id).hide();
				$("#comment-edit-text-" + id).val('');
				var tarea = document.getElementById("comment-edit-text-" + id);
				if (tarea) {
					commentClose(tarea,id);
				}
				if (timer) {
					clearTimeout(timer);
				}
				timer = setTimeout(NavUpdate,10);
				force_update = true;
				update_item = id;
			}
			if (data.reload) {
				window.location.href=data.reload;
			}
		},
		"json"
	);
	return false;
}

function preview_comment(id) {
	$("#comment-edit-preview-" + id).show();
	$.post(
		"item",
		$("#comment-edit-form-" + id).serialize() + '&preview=1',
		function(data) {
			if (data.preview) {
				$("#comment-edit-preview-" + id).html(data.preview);
				$("#comment-edit-preview-" + id + " a").click(function() {return false;});
			}
		},
		"json"
	);
	return true;
}

function showHideComments(id) {
	if ($('#collapsed-comments-' + id).is(':visible')) {
		$('#collapsed-comments-' + id).slideUp();
		$('#hide-comments-' + id).hide();
		$('#hide-comments-total-' + id).show();
	} else {
		$('#collapsed-comments-' + id).slideDown();
		$('#hide-comments-' + id).show();
		$('#hide-comments-total-' + id).hide();
	}
}

function preview_post() {
	$("#jot-preview-content").show();
	$.post(
		"item",
		$("#profile-jot-form").serialize() + '&preview=1',
		function(data) {
			if (data.preview) {
				$("#jot-preview-content").html(data.preview);
				$("#jot-preview-content" + " a").click(function() {return false;});
				document.dispatchEvent(new Event('postprocess_liveupdate'));
			}
		},
		"json"
	);
	return true;
}

function unpause() {
	// unpause auto reloads if they are currently stopped
	totStopped = false;
	stopped = false;
	$('#pause').html('');
}

// load more network content (used for infinite scroll)
function loadScrollContent() {
	if (lockLoadContent) {
		return;
	}
	lockLoadContent = true;

	$("#scroll-loader").fadeIn('normal');

	match = $("span.received").last();
	if (match.length > 0) {
		received = match[0].innerHTML;
	} else {
		received = "0000-00-00 00:00:00";
	}

	match = $("span.created").last();
	if (match.length > 0) {
		created = match[0].innerHTML;
	} else {
		created = "0000-00-00 00:00:00";
	}

	match = $("span.commented").last();
	if (match.length > 0) {
		commented = match[0].innerHTML;
	} else {
		commented = "0000-00-00 00:00:00";
	}

	match = $("span.uriid").last();
	if (match.length > 0) {
		uriid = match[0].innerHTML;
	} else {
		uriid = "0";
	}

	// get the raw content from the next page and insert this content
	// right before "#conversation-end"
	$.get({
		url: infinite_scroll.reload_uri,
		data: {
			'mode'          : 'raw',
			'last_received' : received,
			'last_commented': commented,
			'last_created'  : created,
			'last_uriid'    : uriid
		}
	})
	.done(function(data) {
		$("#scroll-loader").hide();
		if ($(data).length > 0) {
			$(data).insertBefore('#conversation-end');
		} else {
			$("#scroll-end").fadeIn('normal');
		}

		document.dispatchEvent(new Event('postprocess_liveupdate'));
	})
	.always(function () {
		$("#scroll-loader").hide();
		lockLoadContent = false;
	});
}

function bin2hex(s) {
	// Converts the binary representation of data to hex
	//
	// version: 812.316
	// discuss at: http://phpjs.org/functions/bin2hex
	// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +   bugfixed by: Onno Marsman
	// +   bugfixed by: Linuxworld
	// *     example 1: bin2hex('Kev');
	// *     returns 1: '4b6576'
	// *     example 2: bin2hex(String.fromCharCode(0x00));
	// *     returns 2: '00'
	var v,i, f = 0, a = [];
	s += '';
	f = s.length;

	for (i = 0; i<f; i++) {
		a[i] = s.charCodeAt(i).toString(16).replace(/^([\da-f])$/,"0$1");
	}

	return a.join('');
}

function circleChangeMember(gid, cid, sec_token) {
	$('body .fakelink').css('cursor', 'wait');
	$.get('circle/' + gid + '/' + cid + "?t=" + sec_token, function(data) {
			$('#circle-update-wrapper').html(data);
			$('body .fakelink').css('cursor', 'auto');
	});
}

function contactCircleChangeMember(checkbox, gid, cid) {
	let url;
	// checkbox.checked is the checkbox state after the click
	if (checkbox.checked) {
		url = 'circle/' + gid + '/add/' + cid;
	} else {
		url = 'circle/' + gid + '/remove/' + cid;
	}
	$('body').css('cursor', 'wait');
	$.post(url)
	.error(function () {
		// Restores previous state in case of error
		checkbox.checked = !checkbox.checked;
	})
	.always(function() {
		$('body').css('cursor', 'auto');
	});

	return true;
}

function checkboxhighlight(box) {
	if ($(box).is(':checked')) {
		$(box).addClass('checkeditem');
	} else {
		$(box).removeClass('checkeditem');
	}
}

function notificationMarkAll() {
	$.get('notification/mark/all', function(data) {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(NavUpdate,1000);
		force_update = true;
	});
}

/**
 * sprintf in javascript
 *	"{0} and {1}".format('zero','uno');
 **/
String.prototype.format = function() {
	var formatted = this;
	for (var i = 0; i < arguments.length; i++) {
		var regexp = new RegExp('\\{'+i+'\\}', 'gi');
		formatted = formatted.replace(regexp, arguments[i]);
	}
	return formatted;
};
// Array Remove
Array.prototype.remove = function(item) {
	to=undefined; from=this.indexOf(item);
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};

function previewTheme(elm) {
	theme = $(elm).val();
	$.getJSON('pretheme?theme=' + theme,function(data) {
			$('#theme-preview').html(`
		<div id="theme-desc">${data.desc}</div>
		<div id="theme-credits">${data.credits}</div>
		<a href="${data.img}">
			<img src="${data.img}" width="320" height="240" alt="${theme}" />
		</a>
		<div id="theme-version">${data.version}</div>
	`);
	});
}

// notification permission settings in localstorage
// set by settings page
function getNotificationPermission() {
	if (window["Notification"] === undefined) {
		return null;
	}

	if (Notification.permission === 'granted') {
		var val = localStorage.getItem('notification-permissions');
		if (val === null) {
			return 'denied';
		}
		return val;
	} else {
		return Notification.permission;
	}
}

/**
 * Show a dialog loaded from an url
 * By defaults this load the url in an iframe in colorbox
 * Themes can overwrite `show()` function to personalize it
 */
var Dialog = {
	/**
	 * Show the dialog
	 *
	 * @param string url
	 * @return object colorbox
	 */
	show : function (url) {
		var size = Dialog._get_size();
		return $.colorbox({href: url, iframe:true,innerWidth: size.width+'px',innerHeight: size.height+'px'})
	},

	/**
	 * Show the Image browser dialog
	 *
	 * @param string name
	 * @param string id (optional)
	 * @return object
	 *
	 * The name will be used to build the event name
	 * fired by image browser dialog when the user select
	 * an image. The optional id will be passed as argument
	 * to the event handler
	 */
	doImageBrowser : function (name, id) {
		var url = Dialog._get_url('photo', name, id);
		return Dialog.show(url);
	},

	/**
	 * Show the File browser dialog
	 *
	 * @param string name
	 * @param string id (optional)
	 * @return object
	 *
	 * The name will be used to build the event name
	 * fired by file browser dialog when the user select
	 * a file. The optional id will be passed as argument
	 * to the event handler
	 */
	doFileBrowser : function (name, id) {
		var url = Dialog._get_url('attachment', name, id);
		return Dialog.show(url);
	},

	_get_url : function(type, name, id) {
		var hash = name;
		if (id !== undefined) {
			hash = hash + "-" + id;
		}
		return 'media/' + type + '/browser?mode=minimal#' + hash;
	},

	_get_size: function() {
		return {
			width: window.innerWidth-50,
			height: window.innerHeight-100
		};
	}
}
// @license-end

/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||3<e[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(n){"use strict";n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||n(i).trigger(n.support.transition.end)},t),this},n(function(){n.support.transition=function o(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(t.style[i]!==undefined)return{end:e[i]};return!1}(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(s){"use strict";var e='[data-dismiss="alert"]',a=function(t){s(t).on("click",e,this.close)};a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.close=function(t){var e=s(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),i="#"===i?[]:i;var o=s(document).find(i);function n(){o.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),o.length||(o=e.closest(".alert")),o.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),s.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(a.TRANSITION_DURATION):n())};var t=s.fn.alert;s.fn.alert=function o(i){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new a(this)),"string"==typeof i&&e[i].call(t)})},s.fn.alert.Constructor=a,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,a.prototype.close)}(jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.isLoading=!1};function i(o){return this.each(function(){var t=s(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new n(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})}n.VERSION="3.4.1",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",null==n.resetText&&i.data("resetText",i[o]()),setTimeout(s.proxy(function(){i[o](null==n[t]?this.options[t]:n[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var t=s.fn.button;s.fn.button=i,s.fn.button.Constructor=n,s.fn.button.noConflict=function(){return s.fn.button=t,this},s(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=s(t.target).closest(".btn");i.call(e,"toggle"),s(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){s(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),function(p){"use strict";var c=function(t,e){this.$element=p(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",p.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",p.proxy(this.pause,this)).on("mouseleave.bs.carousel",p.proxy(this.cycle,this))};function r(n){return this.each(function(){var t=p(this),e=t.data("bs.carousel"),i=p.extend({},c.DEFAULTS,t.data(),"object"==typeof n&&n),o="string"==typeof n?n:i.slide;e||t.data("bs.carousel",e=new c(this,i)),"number"==typeof n?e.to(n):o?e[o]():i.interval&&e.pause().cycle()})}c.VERSION="3.4.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},c.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(p.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},c.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var o=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(o)},c.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",this.$items.eq(t))},c.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&p.support.transition&&(this.$element.trigger(p.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||this.getItemForDirection(t,i),n=this.interval,s="next"==t?"left":"right",a=this;if(o.hasClass("active"))return this.sliding=!1;var r=o[0],l=p.Event("slide.bs.carousel",{relatedTarget:r,direction:s});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=p(this.$indicators.children()[this.getItemIndex(o)]);h&&h.addClass("active")}var d=p.Event("slid.bs.carousel",{relatedTarget:r,direction:s});return p.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),"object"==typeof o&&o.length&&o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(d)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),n&&this.cycle(),this}};var t=p.fn.carousel;p.fn.carousel=r,p.fn.carousel.Constructor=c,p.fn.carousel.noConflict=function(){return p.fn.carousel=t,this};var e=function(t){var e=p(this),i=e.attr("href");i&&(i=i.replace(/.*(?=#[^\s]+$)/,""));var o=e.attr("data-target")||i,n=p(document).find(o);if(n.hasClass("carousel")){var s=p.extend({},n.data(),e.data()),a=e.attr("data-slide-to");a&&(s.interval=!1),r.call(n,s),a&&n.data("bs.carousel").to(a),t.preventDefault()}};p(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),p(window).on("load",function(){p('[data-ride="carousel"]').each(function(){var t=p(this);r.call(t,t.data())})})}(jQuery),function(a){"use strict";var r=function(t,e){this.$element=a(t),this.options=a.extend({},r.DEFAULTS,e),this.$trigger=a('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function n(t){var e,i=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return a(document).find(i)}function l(o){return this.each(function(){var t=a(this),e=t.data("bs.collapse"),i=a.extend({},r.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&/show|hide/.test(o)&&(i.toggle=!1),e||t.data("bs.collapse",e=new r(this,i)),"string"==typeof o&&e[o]()})}r.VERSION="3.4.1",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var i=a.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return n.call(this);var s=a.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",a.proxy(n,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=a.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!a.support.transition)return i.call(this);this.$element[e](0).one("bsTransitionEnd",a.proxy(i,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(t,e){var i=a(e);this.addAriaAndCollapsedClass(n(i),i)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=a.fn.collapse;a.fn.collapse=l,a.fn.collapse.Constructor=r,a.fn.collapse.noConflict=function(){return a.fn.collapse=t,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=a(this);e.attr("data-target")||t.preventDefault();var i=n(e),o=i.data("bs.collapse")?"toggle":e.data();l.call(i,o)})}(jQuery),function(a){"use strict";var r='[data-toggle="dropdown"]',o=function(t){a(t).on("click.bs.dropdown",this.toggle)};function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i="#"!==e?a(document).find(e):null;return i&&i.length?i:t.parent()}function s(o){o&&3===o.which||(a(".dropdown-backdrop").remove(),a(r).each(function(){var t=a(this),e=l(t),i={relatedTarget:this};e.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&a.contains(e[0],o.target)||(e.trigger(o=a.Event("hide.bs.dropdown",i)),o.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",i)))))}))}o.VERSION="3.4.1",o.prototype.toggle=function(t){var e=a(this);if(!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(s(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",s);var n={relatedTarget:this};if(i.trigger(t=a.Event("show.bs.dropdown",n)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger(a.Event("shown.bs.dropdown",n))}return!1}},o.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=a(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(!o&&27!=t.which||o&&27==t.which)return 27==t.which&&i.find(r).trigger("focus"),e.trigger("click");var n=i.find(".dropdown-menu li:not(.disabled):visible a");if(n.length){var s=n.index(t.target);38==t.which&&0<s&&s--,40==t.which&&s<n.length-1&&s++,~s||(s=0),n.eq(s).trigger("focus")}}}};var t=a.fn.dropdown;a.fn.dropdown=function e(i){return this.each(function(){var t=a(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},a.fn.dropdown.Constructor=o,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,o.prototype.toggle).on("keydown.bs.dropdown.data-api",r,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),function(a){"use strict";var s=function(t,e){this.options=e,this.$body=a(document.body),this.$element=a(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function r(o,n){return this.each(function(){var t=a(this),e=t.data("bs.modal"),i=a.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new s(this,i)),"string"==typeof o?e[o](n):i.show&&e.show(n)})}s.VERSION="3.4.1",s.TRANSITION_DURATION=300,s.BACKDROP_TRANSITION_DURATION=150,s.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},s.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},s.prototype.show=function(i){var o=this,t=a.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){a(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=a.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:i});t?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(s.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},s.prototype.hide=function(t){t&&t.preventDefault(),t=a.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(s.TRANSITION_DURATION):this.hideModal())},s.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},s.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},s.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},s.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},s.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},s.prototype.backdrop=function(t){var e=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=a.support.transition&&i;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;o?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){e.removeBackdrop(),t&&t()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):n()}else t&&t()},s.prototype.handleUpdate=function(){this.adjustDialog()},s.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},s.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},s.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},s.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",t+n),a(this.fixedContent).each(function(t,e){var i=e.style.paddingRight,o=a(e).css("padding-right");a(e).data("padding-right",i).css("padding-right",parseFloat(o)+n+"px")}))},s.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),a(this.fixedContent).each(function(t,e){var i=a(e).data("padding-right");a(e).removeData("padding-right"),e.style.paddingRight=i||""})},s.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=a.fn.modal;a.fn.modal=r,a.fn.modal.Constructor=s,a.fn.modal.noConflict=function(){return a.fn.modal=t,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=a(this),i=e.attr("href"),o=e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,""),n=a(document).find(o),s=n.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(i)&&i},n.data(),e.data());e.is("a")&&t.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),r.call(n,s,this)})}(jQuery),function(g){"use strict";var o=["sanitize","whiteList","sanitizeFn"],a=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],t={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},r=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function u(t,e){var i=t.nodeName.toLowerCase();if(-1!==g.inArray(i,e))return-1===g.inArray(i,a)||Boolean(t.nodeValue.match(r)||t.nodeValue.match(l));for(var o=g(e).filter(function(t,e){return e instanceof RegExp}),n=0,s=o.length;n<s;n++)if(i.match(o[n]))return!0;return!1}function n(t,e,i){if(0===t.length)return t;if(i&&"function"==typeof i)return i(t);if(!document.implementation||!document.implementation.createHTMLDocument)return t;var o=document.implementation.createHTMLDocument("sanitization");o.body.innerHTML=t;for(var n=g.map(e,function(t,e){return e}),s=g(o.body).find("*"),a=0,r=s.length;a<r;a++){var l=s[a],h=l.nodeName.toLowerCase();if(-1!==g.inArray(h,n))for(var d=g.map(l.attributes,function(t){return t}),p=[].concat(e["*"]||[],e[h]||[]),c=0,f=d.length;c<f;c++)u(d[c],p)||l.removeAttribute(d[c].nodeName);else l.parentNode.removeChild(l)}return o.body.innerHTML}var m=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};m.VERSION="3.4.1",m.TRANSITION_DURATION=150,m.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:t},m.prototype.init=function(t,e,i){if(this.enabled=!0,this.type=t,this.$element=g(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&g(document).find(g.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),n=o.length;n--;){var s=o[n];if("click"==s)this.$element.on("click."+this.type,this.options.selector,g.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",r="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,g.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,g.proxy(this.leave,this))}}this.options.selector?this._options=g.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},m.prototype.getDefaults=function(){return m.DEFAULTS},m.prototype.getOptions=function(t){var e=this.$element.data();for(var i in e)e.hasOwnProperty(i)&&-1!==g.inArray(i,o)&&delete e[i];return(t=g.extend({},this.getDefaults(),e,t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.sanitize&&(t.template=n(t.template,t.whiteList,t.sanitizeFn)),t},m.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&g.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},m.prototype.enter=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusin"==t.type?"focus":"hover"]=!0),e.tip().hasClass("in")||"in"==e.hoverState)e.hoverState="in";else{if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},m.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},m.prototype.leave=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusout"==t.type?"focus":"hover"]=!1),!e.isInStateTrue()){if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)}},m.prototype.show=function(){var t=g.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=g.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var i=this,o=this.tip(),n=this.getUID(this.type);this.setContent(),o.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,r=a.test(s);r&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(g(document).find(this.options.container)):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),h=o[0].offsetWidth,d=o[0].offsetHeight;if(r){var p=s,c=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+d>c.bottom?"top":"top"==s&&l.top-d<c.top?"bottom":"right"==s&&l.right+h>c.width?"left":"left"==s&&l.left-h<c.left?"right":s,o.removeClass(p).addClass(s)}var f=this.getCalculatedOffset(s,l,h,d);this.applyPlacement(f,s);var u=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};g.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",u).emulateTransitionEnd(m.TRANSITION_DURATION):u()}},m.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,n=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top+=s,t.left+=a,g.offset.setOffset(i[0],g.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var r=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=n&&(t.top=t.top+n-l);var h=this.getViewportAdjustedDelta(e,t,r,l);h.left?t.left+=h.left:t.top+=h.top;var d=/top|bottom/.test(e),p=d?2*h.left-o+r:2*h.top-n+l,c=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(p,i[0][c],d)},m.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},m.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=n(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},m.prototype.hide=function(t){var e=this,i=g(this.$tip),o=g.Event("hide.bs."+this.type);function n(){"in"!=e.hoverState&&i.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),g.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",n).emulateTransitionEnd(m.TRANSITION_DURATION):n(),this.hoverState=null,this},m.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},m.prototype.hasContent=function(){return this.getTitle()},m.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=g.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var n=window.SVGElement&&e instanceof window.SVGElement,s=i?{top:0,left:0}:n?null:t.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},r=i?{width:g(window).width(),height:g(window).height()}:null;return g.extend({},o,a,r,s)},m.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},m.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},m.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},m.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},m.prototype.tip=function(){if(!this.$tip&&(this.$tip=g(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},m.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},m.prototype.enable=function(){this.enabled=!0},m.prototype.disable=function(){this.enabled=!1},m.prototype.toggleEnabled=function(){this.enabled=!this.enabled},m.prototype.toggle=function(t){var e=this;t&&((e=g(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e))),t?(e.inState.click=!e.inState.click,e.isInStateTrue()?e.enter(e):e.leave(e)):e.tip().hasClass("in")?e.leave(e):e.enter(e)},m.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})},m.prototype.sanitizeHtml=function(t){return n(t,this.options.whiteList,this.options.sanitizeFn)};var e=g.fn.tooltip;g.fn.tooltip=function i(o){return this.each(function(){var t=g(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.tooltip",e=new m(this,i)),"string"==typeof o&&e[o]())})},g.fn.tooltip.Constructor=m,g.fn.tooltip.noConflict=function(){return g.fn.tooltip=e,this}}(jQuery),function(n){"use strict";var s=function(t,e){this.init("popover",t,e)};if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");s.VERSION="3.4.1",s.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((s.prototype=n.extend({},n.fn.tooltip.Constructor.prototype)).constructor=s).prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();if(this.options.html){var o=typeof i;this.options.sanitize&&(e=this.sanitizeHtml(e),"string"===o&&(i=this.sanitizeHtml(i))),t.find(".popover-title").html(e),t.find(".popover-content").children().detach().end()["string"===o?"html":"append"](i)}else t.find(".popover-title").text(e),t.find(".popover-content").children().detach().end().text(i);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},s.prototype.hasContent=function(){return this.getTitle()||this.getContent()},s.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var t=n.fn.popover;n.fn.popover=function e(o){return this.each(function(){var t=n(this),e=t.data("bs.popover"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.popover",e=new s(this,i)),"string"==typeof o&&e[o]())})},n.fn.popover.Constructor=s,n.fn.popover.noConflict=function(){return n.fn.popover=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.$body=s(document.body),this.$scrollElement=s(t).is(document.body)?s(window):s(t),this.options=s.extend({},n.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s.proxy(this.process,this)),this.refresh(),this.process()}function e(o){return this.each(function(){var t=s(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.4.1",n.DEFAULTS={offset:10},n.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},n.prototype.refresh=function(){var t=this,o="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),s.isWindow(this.$scrollElement[0])||(o="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=s(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&s(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+n,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},n.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),o<=e)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(n[t+1]===undefined||e<n[t+1])&&this.activate(s[t])},n.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=s(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},n.prototype.clear=function(){s(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=s.fn.scrollspy;s.fn.scrollspy=e,s.fn.scrollspy.Constructor=n,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load.bs.scrollspy.data-api",function(){s('[data-spy="scroll"]').each(function(){var t=s(this);e.call(t,t.data())})})}(jQuery),function(r){"use strict";var a=function(t){this.element=r(t)};function e(i){return this.each(function(){var t=r(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new a(this)),"string"==typeof i&&e[i]()})}a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a"),n=r.Event("hide.bs.tab",{relatedTarget:t[0]}),s=r.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(n),t.trigger(s),!s.isDefaultPrevented()&&!n.isDefaultPrevented()){var a=r(document).find(i);this.activate(t.closest("li"),e),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},a.prototype.activate=function(t,e,i){var o=e.find("> .active"),n=i&&r.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),n?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&n?o.one("bsTransitionEnd",s).emulateTransitionEnd(a.TRANSITION_DURATION):s(),o.removeClass("in")};var t=r.fn.tab;r.fn.tab=e,r.fn.tab.Constructor=a,r.fn.tab.noConflict=function(){return r.fn.tab=t,this};var i=function(t){t.preventDefault(),e.call(r(this),"show")};r(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),function(l){"use strict";var h=function(t,e){this.options=l.extend({},h.DEFAULTS,e);var i=this.options.target===h.DEFAULTS.target?l(this.options.target):l(document).find(this.options.target);this.$target=i.on("scroll.bs.affix.data-api",l.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",l.proxy(this.checkPositionWithEventLoop,this)),this.$element=l(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(o){return this.each(function(){var t=l(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new h(this,i)),"string"==typeof o&&e[o]()})}h.VERSION="3.4.1",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return n<i&&"top";if("bottom"==this.affixed)return null!=i?!(n+this.unpin<=s.top)&&"bottom":!(n+a<=t-o)&&"bottom";var r=null==this.affixed,l=r?n:s.top;return null!=i&&n<=i?"top":null!=o&&t-o<=l+(r?a:e)&&"bottom"},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(h.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},h.prototype.checkPositionWithEventLoop=function(){setTimeout(l.proxy(this.checkPosition,this),1)},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,i=e.top,o=e.bottom,n=Math.max(l(document).height(),l(document.body).height());"object"!=typeof e&&(o=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof o&&(o=e.bottom(this.$element));var s=this.getState(n,t,i,o);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var a="affix"+(s?"-"+s:""),r=l.Event(a+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:n-t-o})}};var t=l.fn.affix;l.fn.affix=i,l.fn.affix.Constructor=h,l.fn.affix.noConflict=function(){return l.fn.affix=t,this},l(window).on("load",function(){l('[data-spy="affix"]').each(function(){var t=l(this),e=t.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);
/*!
 * Jasny Bootstrap v3.1.3 (http://jasny.github.io/bootstrap)
 * Copyright 2012-2014 Arnold Daniels
 * Licensed under Apache-2.0 (https://github.com/jasny/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') { throw new Error('Jasny Bootstrap\'s JavaScript requires jQuery') }

/* ========================================================================
 * Bootstrap: transition.js v3.1.3
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  if ($.support.transition !== undefined) return  // Prevent conflict with Twitter Bootstrap

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: offcanvas.js v3.1.3
 * http://jasny.github.io/bootstrap/javascript/#offcanvas
 * ========================================================================
 * Copyright 2013-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

+function ($) { "use strict";

  // OFFCANVAS PUBLIC CLASS DEFINITION
  // =================================

  var OffCanvas = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, OffCanvas.DEFAULTS, options)
    this.state    = null
    this.placement = null
    
    if (this.options.recalc) {
      this.calcClone()
      $(window).on('resize', $.proxy(this.recalc, this))
    }
    
    if (this.options.autohide)
      $(document).on('click', $.proxy(this.autohide, this))

    if (this.options.toggle) this.toggle()
    
    if (this.options.disablescrolling) {
        this.options.disableScrolling = this.options.disablescrolling
        delete this.options.disablescrolling
    }
  }

  OffCanvas.DEFAULTS = {
    toggle: true,
    placement: 'auto',
    autohide: true,
    recalc: true,
    disableScrolling: false
  }

  OffCanvas.prototype.offset = function () {
    switch (this.placement) {
      case 'left':
      case 'right':  return this.$element.outerWidth()
      case 'top':
      case 'bottom': return this.$element.outerHeight()
    }
  }
  
  OffCanvas.prototype.calcPlacement = function () {
    if (this.options.placement !== 'auto') {
        this.placement = this.options.placement
        return
    }
    
    if (!this.$element.hasClass('in')) {
      this.$element.css('visiblity', 'hidden !important').addClass('in')
    } 
    
    var horizontal = $(window).width() / this.$element.width()
    var vertical = $(window).height() / this.$element.height()
        
    var element = this.$element
    function ab(a, b) {
      if (element.css(b) === 'auto') return a
      if (element.css(a) === 'auto') return b
      
      var size_a = parseInt(element.css(a), 10)
      var size_b = parseInt(element.css(b), 10)
  
      return size_a > size_b ? b : a
    }
    
    this.placement = horizontal >= vertical ? ab('left', 'right') : ab('top', 'bottom')
      
    if (this.$element.css('visibility') === 'hidden !important') {
      this.$element.removeClass('in').css('visiblity', '')
    }
  }
  
  OffCanvas.prototype.opposite = function (placement) {
    switch (placement) {
      case 'top':    return 'bottom'
      case 'left':   return 'right'
      case 'bottom': return 'top'
      case 'right':  return 'left'
    }
  }
  
  OffCanvas.prototype.getCanvasElements = function() {
    // Return a set containing the canvas plus all fixed elements
    var canvas = this.options.canvas ? $(this.options.canvas) : this.$element
    
    var fixed_elements = canvas.find('*').filter(function() {
      return $(this).css('position') === 'fixed'
    }).not(this.options.exclude)
    
    return canvas.add(fixed_elements)
  }
  
  OffCanvas.prototype.slide = function (elements, offset, callback) {
    // Use jQuery animation if CSS transitions aren't supported
    if (!$.support.transition) {
      var anim = {}
      anim[this.placement] = "+=" + offset
      return elements.animate(anim, 350, callback)
    }

    var placement = this.placement
    var opposite = this.opposite(placement)
    
    elements.each(function() {
      if ($(this).css(placement) !== 'auto')
        $(this).css(placement, (parseInt($(this).css(placement), 10) || 0) + offset)
      
      if ($(this).css(opposite) !== 'auto')
        $(this).css(opposite, (parseInt($(this).css(opposite), 10) || 0) - offset)
    })
    
    this.$element
      .one($.support.transition.end, callback)
      .emulateTransitionEnd(350)
  }

  OffCanvas.prototype.disableScrolling = function() {
    var bodyWidth = $('body').width()
    var prop = 'padding-' + this.opposite(this.placement)

    if ($('body').data('offcanvas-style') === undefined) {
      $('body').data('offcanvas-style', $('body').attr('style') || '')
    }
      
    $('body').css('overflow', 'hidden')

    if ($('body').width() > bodyWidth) {
      var padding = parseInt($('body').css(prop), 10) + $('body').width() - bodyWidth
      
      setTimeout(function() {
        $('body').css(prop, padding)
      }, 1)
    }
  }

  OffCanvas.prototype.show = function () {
    if (this.state) return
    
    var startEvent = $.Event('show.bs.offcanvas')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    this.state = 'slide-in'
    this.calcPlacement();
    
    var elements = this.getCanvasElements()
    var placement = this.placement
    var opposite = this.opposite(placement)
    var offset = this.offset()

    if (elements.index(this.$element) !== -1) {
      $(this.$element).data('offcanvas-style', $(this.$element).attr('style') || '')
      this.$element.css(placement, -1 * offset)
      this.$element.css(placement); // Workaround: Need to get the CSS property for it to be applied before the next line of code
    }

    elements.addClass('canvas-sliding').each(function() {
      if ($(this).data('offcanvas-style') === undefined) $(this).data('offcanvas-style', $(this).attr('style') || '')
      if ($(this).css('position') === 'static') $(this).css('position', 'relative')
      if (($(this).css(placement) === 'auto' || $(this).css(placement) === '0px') &&
          ($(this).css(opposite) === 'auto' || $(this).css(opposite) === '0px')) {
        $(this).css(placement, 0)
      }
    })
    
    if (this.options.disableScrolling) this.disableScrolling()
    
    var complete = function () {
      if (this.state != 'slide-in') return
      
      this.state = 'slid'

      elements.removeClass('canvas-sliding').addClass('canvas-slid')
      this.$element.trigger('shown.bs.offcanvas')
    }

    setTimeout($.proxy(function() {
      this.$element.addClass('in')
      this.slide(elements, offset, $.proxy(complete, this))
    }, this), 1)
  }

  OffCanvas.prototype.hide = function (fast) {
    if (this.state !== 'slid') return

    var startEvent = $.Event('hide.bs.offcanvas')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    this.state = 'slide-out'

    var elements = $('.canvas-slid')
    var placement = this.placement
    var offset = -1 * this.offset()

    var complete = function () {
      if (this.state != 'slide-out') return
      
      this.state = null
      this.placement = null
      
      this.$element.removeClass('in')
      
      elements.removeClass('canvas-sliding')
      elements.add(this.$element).add('body').each(function() {
        $(this).attr('style', $(this).data('offcanvas-style')).removeData('offcanvas-style')
      })

      this.$element.trigger('hidden.bs.offcanvas')
    }

    elements.removeClass('canvas-slid').addClass('canvas-sliding')
    
    setTimeout($.proxy(function() {
      this.slide(elements, offset, $.proxy(complete, this))
    }, this), 1)
  }

  OffCanvas.prototype.toggle = function () {
    if (this.state === 'slide-in' || this.state === 'slide-out') return
    this[this.state === 'slid' ? 'hide' : 'show']()
  }

  OffCanvas.prototype.calcClone = function() {
    this.$calcClone = this.$element.clone()
      .html('')
      .addClass('offcanvas-clone').removeClass('in')
      .appendTo($('body'))
  }

  OffCanvas.prototype.recalc = function () {
    if (this.$calcClone.css('display') === 'none' || (this.state !== 'slid' && this.state !== 'slide-in')) return
    
    this.state = null
    this.placement = null
    var elements = this.getCanvasElements()
    
    this.$element.removeClass('in')
    
    elements.removeClass('canvas-slid')
    elements.add(this.$element).add('body').each(function() {
      $(this).attr('style', $(this).data('offcanvas-style')).removeData('offcanvas-style')
    })
  }
  
  OffCanvas.prototype.autohide = function (e) {
    if ($(e.target).closest(this.$element).length === 0) this.hide()
  }

  // OFFCANVAS PLUGIN DEFINITION
  // ==========================

  var old = $.fn.offcanvas

  $.fn.offcanvas = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.offcanvas')
      var options = $.extend({}, OffCanvas.DEFAULTS, $this.data(), typeof option === 'object' && option)

      if (!data) $this.data('bs.offcanvas', (data = new OffCanvas(this, options)))
      if (typeof option === 'string') data[option]()
    })
  }

  $.fn.offcanvas.Constructor = OffCanvas


  // OFFCANVAS NO CONFLICT
  // ====================

  $.fn.offcanvas.noConflict = function () {
    $.fn.offcanvas = old
    return this
  }


  // OFFCANVAS DATA-API
  // =================

  $(document).on('click.bs.offcanvas.data-api', '[data-toggle=offcanvas]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $canvas = $(target)
    var data    = $canvas.data('bs.offcanvas')
    var option  = data ? 'toggle' : $this.data()

    e.stopPropagation()

    if (data) data.toggle()
      else $canvas.offcanvas(option)
  })

}(window.jQuery);

/* ============================================================
 * Bootstrap: rowlink.js v3.1.3
 * http://jasny.github.io/bootstrap/javascript/#rowlink
 * ============================================================
 * Copyright 2012-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

+function ($) { "use strict";

  var Rowlink = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, Rowlink.DEFAULTS, options)
    
    this.$element.on('click.bs.rowlink', 'td:not(.rowlink-skip)', $.proxy(this.click, this))
  }

  Rowlink.DEFAULTS = {
    target: "a"
  }

  Rowlink.prototype.click = function(e) {
    var target = $(e.currentTarget).closest('tr').find(this.options.target)[0]
    if ($(e.target)[0] === target) return
    
    e.preventDefault();
    
    if (target.click) {
      target.click()
    } else if (document.createEvent) {
      var evt = document.createEvent("MouseEvents"); 
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); 
      target.dispatchEvent(evt);
    }
  }

  
  // ROWLINK PLUGIN DEFINITION
  // ===========================

  var old = $.fn.rowlink

  $.fn.rowlink = function (options) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.rowlink')
      if (!data) $this.data('bs.rowlink', (data = new Rowlink(this, options)))
    })
  }

  $.fn.rowlink.Constructor = Rowlink


  // ROWLINK NO CONFLICT
  // ====================

  $.fn.rowlink.noConflict = function () {
    $.fn.rowlink = old
    return this
  }


  // ROWLINK DATA-API
  // ==================

  $(document).on('click.bs.rowlink.data-api', '[data-link="row"]', function (e) {
    if ($(e.target).closest('.rowlink-skip').length !== 0) return
    
    var $this = $(this)
    if ($this.data('bs.rowlink')) return
    $this.rowlink($this.data())
    $(e.target).trigger('click.bs.rowlink')
  })
  
}(window.jQuery);

/* ===========================================================
 * Bootstrap: inputmask.js v3.1.0
 * http://jasny.github.io/bootstrap/javascript/#inputmask
 * 
 * Based on Masked Input plugin by Josh Bush (digitalbush.com)
 * ===========================================================
 * Copyright 2012-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) { "use strict";

  var isIphone = (window.orientation !== undefined)
  var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1
  var isIE = window.navigator.appName == 'Microsoft Internet Explorer'

  // INPUTMASK PUBLIC CLASS DEFINITION
  // =================================

  var Inputmask = function (element, options) {
    if (isAndroid) return // No support because caret positioning doesn't work on Android
    
    this.$element = $(element)
    this.options = $.extend({}, Inputmask.DEFAULTS, options)
    this.mask = String(this.options.mask)
    
    this.init()
    this.listen()
        
    this.checkVal() //Perform initial check for existing values
  }

  Inputmask.DEFAULTS = {
    mask: "",
    placeholder: "_",
    definitions: {
      '9': "[0-9]",
      'a': "[A-Za-z]",
      'w': "[A-Za-z0-9]",
      '*': "."
    }
  }

  Inputmask.prototype.init = function() {
    var defs = this.options.definitions
    var len = this.mask.length

    this.tests = [] 
    this.partialPosition = this.mask.length
    this.firstNonMaskPos = null

    $.each(this.mask.split(""), $.proxy(function(i, c) {
      if (c == '?') {
        len--
        this.partialPosition = i
      } else if (defs[c]) {
        this.tests.push(new RegExp(defs[c]))
        if (this.firstNonMaskPos === null)
          this.firstNonMaskPos =  this.tests.length - 1
      } else {
        this.tests.push(null)
      }
    }, this))

    this.buffer = $.map(this.mask.split(""), $.proxy(function(c, i) {
      if (c != '?') return defs[c] ? this.options.placeholder : c
    }, this))

    this.focusText = this.$element.val()

    this.$element.data("rawMaskFn", $.proxy(function() {
      return $.map(this.buffer, function(c, i) {
        return this.tests[i] && c != this.options.placeholder ? c : null
      }).join('')
    }, this))
  }
    
  Inputmask.prototype.listen = function() {
    if (this.$element.attr("readonly")) return

    var pasteEventName = (isIE ? 'paste' : 'input') + ".mask"

    this.$element
      .on("unmask.bs.inputmask", $.proxy(this.unmask, this))

      .on("focus.bs.inputmask", $.proxy(this.focusEvent, this))
      .on("blur.bs.inputmask", $.proxy(this.blurEvent, this))

      .on("keydown.bs.inputmask", $.proxy(this.keydownEvent, this))
      .on("keypress.bs.inputmask", $.proxy(this.keypressEvent, this))

      .on(pasteEventName, $.proxy(this.pasteEvent, this))
  }

  //Helper Function for Caret positioning
  Inputmask.prototype.caret = function(begin, end) {
    if (this.$element.length === 0) return
    if (typeof begin == 'number') {
      end = (typeof end == 'number') ? end : begin
      return this.$element.each(function() {
        if (this.setSelectionRange) {
          this.setSelectionRange(begin, end)
        } else if (this.createTextRange) {
          var range = this.createTextRange()
          range.collapse(true)
          range.moveEnd('character', end)
          range.moveStart('character', begin)
          range.select()
        }
      })
    } else {
      if (this.$element[0].setSelectionRange) {
        begin = this.$element[0].selectionStart
        end = this.$element[0].selectionEnd
      } else if (document.selection && document.selection.createRange) {
        var range = document.selection.createRange()
        begin = 0 - range.duplicate().moveStart('character', -100000)
        end = begin + range.text.length
      }
      return {
        begin: begin, 
        end: end
      }
    }
  }
  
  Inputmask.prototype.seekNext = function(pos) {
    var len = this.mask.length
    while (++pos <= len && !this.tests[pos]);

    return pos
  }
  
  Inputmask.prototype.seekPrev = function(pos) {
    while (--pos >= 0 && !this.tests[pos]);

    return pos
  }

  Inputmask.prototype.shiftL = function(begin,end) {
    var len = this.mask.length

    if (begin < 0) return

    for (var i = begin, j = this.seekNext(end); i < len; i++) {
      if (this.tests[i]) {
        if (j < len && this.tests[i].test(this.buffer[j])) {
          this.buffer[i] = this.buffer[j]
          this.buffer[j] = this.options.placeholder
        } else
          break
        j = this.seekNext(j)
      }
    }
    this.writeBuffer()
    this.caret(Math.max(this.firstNonMaskPos, begin))
  }

  Inputmask.prototype.shiftR = function(pos) {
    var len = this.mask.length

    for (var i = pos, c = this.options.placeholder; i < len; i++) {
      if (this.tests[i]) {
        var j = this.seekNext(i)
        var t = this.buffer[i]
        this.buffer[i] = c
        if (j < len && this.tests[j].test(t))
          c = t
        else
          break
      }
    }
  },

  Inputmask.prototype.unmask = function() {
    this.$element
      .unbind(".mask")
      .removeData("inputmask")
  }

  Inputmask.prototype.focusEvent = function() {
    this.focusText = this.$element.val()
    var len = this.mask.length 
    var pos = this.checkVal()
    this.writeBuffer()

    var that = this
    var moveCaret = function() {
      if (pos == len)
        that.caret(0, pos)
      else
        that.caret(pos)
    }

    moveCaret()
    setTimeout(moveCaret, 50)
  }

  Inputmask.prototype.blurEvent = function() {
    this.checkVal()
    if (this.$element.val() !== this.focusText)
      this.$element.trigger('change')
  }

  Inputmask.prototype.keydownEvent = function(e) {
    var k = e.which

    //backspace, delete, and escape get special treatment
    if (k == 8 || k == 46 || (isIphone && k == 127)) {
      var pos = this.caret(),
      begin = pos.begin,
      end = pos.end

      if (end - begin === 0) {
        begin = k != 46 ? this.seekPrev(begin) : (end = this.seekNext(begin - 1))
        end = k == 46 ? this.seekNext(end) : end
      }
      this.clearBuffer(begin, end)
      this.shiftL(begin, end - 1)

      return false
    } else if (k == 27) {//escape
      this.$element.val(this.focusText)
      this.caret(0, this.checkVal())
      return false
    }
  }

  Inputmask.prototype.keypressEvent = function(e) {
    var len = this.mask.length

    var k = e.which,
    pos = this.caret()

    if (e.ctrlKey || e.altKey || e.metaKey || k < 32)  {//Ignore
      return true
    } else if (k) {
      if (pos.end - pos.begin !== 0) {
        this.clearBuffer(pos.begin, pos.end)
        this.shiftL(pos.begin, pos.end - 1)
      }

      var p = this.seekNext(pos.begin - 1)
      if (p < len) {
        var c = String.fromCharCode(k)
        if (this.tests[p].test(c)) {
          this.shiftR(p)
          this.buffer[p] = c
          this.writeBuffer()
          var next = this.seekNext(p)
          this.caret(next)
        }
      }
      return false
    }
  }

  Inputmask.prototype.pasteEvent = function() {
    var that = this

    setTimeout(function() {
      that.caret(that.checkVal(true))
    }, 0)
  }

  Inputmask.prototype.clearBuffer = function(start, end) {
    var len = this.mask.length

    for (var i = start; i < end && i < len; i++) {
      if (this.tests[i])
        this.buffer[i] = this.options.placeholder
    }
  }

  Inputmask.prototype.writeBuffer = function() {
    return this.$element.val(this.buffer.join('')).val()
  }

  Inputmask.prototype.checkVal = function(allow) {
    var len = this.mask.length
    //try to place characters where they belong
    var test = this.$element.val()
    var lastMatch = -1

    for (var i = 0, pos = 0; i < len; i++) {
      if (this.tests[i]) {
        this.buffer[i] = this.options.placeholder
        while (pos++ < test.length) {
          var c = test.charAt(pos - 1)
          if (this.tests[i].test(c)) {
            this.buffer[i] = c
            lastMatch = i
            break
          }
        }
        if (pos > test.length)
          break
      } else if (this.buffer[i] == test.charAt(pos) && i != this.partialPosition) {
        pos++
        lastMatch = i
      }
    }
    if (!allow && lastMatch + 1 < this.partialPosition) {
      this.$element.val("")
      this.clearBuffer(0, len)
    } else if (allow || lastMatch + 1 >= this.partialPosition) {
      this.writeBuffer()
      if (!allow) this.$element.val(this.$element.val().substring(0, lastMatch + 1))
    }
    return (this.partialPosition ? i : this.firstNonMaskPos)
  }

  
  // INPUTMASK PLUGIN DEFINITION
  // ===========================

  var old = $.fn.inputmask
  
  $.fn.inputmask = function (options) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.inputmask')
      
      if (!data) $this.data('bs.inputmask', (data = new Inputmask(this, options)))
    })
  }

  $.fn.inputmask.Constructor = Inputmask


  // INPUTMASK NO CONFLICT
  // ====================

  $.fn.inputmask.noConflict = function () {
    $.fn.inputmask = old
    return this
  }


  // INPUTMASK DATA-API
  // ==================

  $(document).on('focus.bs.inputmask.data-api', '[data-mask]', function (e) {
    var $this = $(this)
    if ($this.data('bs.inputmask')) return
    $this.inputmask($this.data())
  })

}(window.jQuery);

/* ===========================================================
 * Bootstrap: fileinput.js v3.1.3
 * http://jasny.github.com/bootstrap/javascript/#fileinput
 * ===========================================================
 * Copyright 2012-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) { "use strict";

  var isIE = window.navigator.appName == 'Microsoft Internet Explorer'

  // FILEUPLOAD PUBLIC CLASS DEFINITION
  // =================================

  var Fileinput = function (element, options) {
    this.$element = $(element)
    
    this.$input = this.$element.find(':file')
    if (this.$input.length === 0) return

    this.name = this.$input.attr('name') || options.name

    this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]')
    if (this.$hidden.length === 0) {
      this.$hidden = $('<input type="hidden">').insertBefore(this.$input)
    }

    this.$preview = this.$element.find('.fileinput-preview')
    var height = this.$preview.css('height')
    if (this.$preview.css('display') !== 'inline' && height !== '0px' && height !== 'none') {
      this.$preview.css('line-height', height)
    }
        
    this.original = {
      exists: this.$element.hasClass('fileinput-exists'),
      preview: this.$preview.html(),
      hiddenVal: this.$hidden.val()
    }
    
    this.listen()
  }
  
  Fileinput.prototype.listen = function() {
    this.$input.on('change.bs.fileinput', $.proxy(this.change, this))
    $(this.$input[0].form).on('reset.bs.fileinput', $.proxy(this.reset, this))
    
    this.$element.find('[data-trigger="fileinput"]').on('click.bs.fileinput', $.proxy(this.trigger, this))
    this.$element.find('[data-dismiss="fileinput"]').on('click.bs.fileinput', $.proxy(this.clear, this))
  },

  Fileinput.prototype.change = function(e) {
    var files = e.target.files === undefined ? (e.target && e.target.value ? [{ name: e.target.value.replace(/^.+\\/, '')}] : []) : e.target.files
    
    e.stopPropagation()

    if (files.length === 0) {
      this.clear()
      return
    }

    this.$hidden.val('')
    this.$hidden.attr('name', '')
    this.$input.attr('name', this.name)

    var file = files[0]

    if (this.$preview.length > 0 && (typeof file.type !== "undefined" ? file.type.match(/^image\/(gif|png|jpeg)$/) : file.name.match(/\.(gif|png|jpe?g)$/i)) && typeof FileReader !== "undefined") {
      var reader = new FileReader()
      var preview = this.$preview
      var element = this.$element

      reader.onload = function(re) {
        var $img = $('<img>')
        $img[0].src = re.target.result
        files[0].result = re.target.result
        
        element.find('.fileinput-filename').text(file.name)
        
        // if parent has max-height, using `(max-)height: 100%` on child doesn't take padding and border into account
        if (preview.css('max-height') != 'none') $img.css('max-height', parseInt(preview.css('max-height'), 10) - parseInt(preview.css('padding-top'), 10) - parseInt(preview.css('padding-bottom'), 10)  - parseInt(preview.css('border-top'), 10) - parseInt(preview.css('border-bottom'), 10))
        
        preview.html($img)
        element.addClass('fileinput-exists').removeClass('fileinput-new')

        element.trigger('change.bs.fileinput', files)
      }

      reader.readAsDataURL(file)
    } else {
      this.$element.find('.fileinput-filename').text(file.name)
      this.$preview.text(file.name)
      
      this.$element.addClass('fileinput-exists').removeClass('fileinput-new')
      
      this.$element.trigger('change.bs.fileinput')
    }
  },

  Fileinput.prototype.clear = function(e) {
    if (e) e.preventDefault()
    
    this.$hidden.val('')
    this.$hidden.attr('name', this.name)
    this.$input.attr('name', '')

    //ie8+ doesn't support changing the value of input with type=file so clone instead
    if (isIE) { 
      var inputClone = this.$input.clone(true);
      this.$input.after(inputClone);
      this.$input.remove();
      this.$input = inputClone;
    } else {
      this.$input.val('')
    }

    this.$preview.html('')
    this.$element.find('.fileinput-filename').text('')
    this.$element.addClass('fileinput-new').removeClass('fileinput-exists')
    
    if (e !== undefined) {
      this.$input.trigger('change')
      this.$element.trigger('clear.bs.fileinput')
    }
  },

  Fileinput.prototype.reset = function() {
    this.clear()

    this.$hidden.val(this.original.hiddenVal)
    this.$preview.html(this.original.preview)
    this.$element.find('.fileinput-filename').text('')

    if (this.original.exists) this.$element.addClass('fileinput-exists').removeClass('fileinput-new')
     else this.$element.addClass('fileinput-new').removeClass('fileinput-exists')
    
    this.$element.trigger('reset.bs.fileinput')
  },

  Fileinput.prototype.trigger = function(e) {
    this.$input.trigger('click')
    e.preventDefault()
  }

  
  // FILEUPLOAD PLUGIN DEFINITION
  // ===========================

  var old = $.fn.fileinput
  
  $.fn.fileinput = function (options) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('bs.fileinput')
      if (!data) $this.data('bs.fileinput', (data = new Fileinput(this, options)))
      if (typeof options == 'string') data[options]()
    })
  }

  $.fn.fileinput.Constructor = Fileinput


  // FILEINPUT NO CONFLICT
  // ====================

  $.fn.fileinput.noConflict = function () {
    $.fn.fileinput = old
    return this
  }


  // FILEUPLOAD DATA-API
  // ==================

  $(document).on('click.fileinput.data-api', '[data-provides="fileinput"]', function (e) {
    var $this = $(this)
    if ($this.data('bs.fileinput')) return
    $this.fileinput($this.data())
      
    var $target = $(e.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
    if ($target.length > 0) {
      e.preventDefault()
      $target.trigger('click.bs.fileinput')
    }
  })

}(window.jQuery);

/*!
 * Bootstrap-select v1.10.0 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(a){"use strict";function b(b){var c=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];return a.each(c,function(){b=b.replace(this.re,this.ch)}),b}function c(a){var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c="(?:"+Object.keys(b).join("|")+")",d=new RegExp(c),e=new RegExp(c,"g"),f=null==a?"":""+a;return d.test(f)?f.replace(e,function(a){return b[a]}):f}function d(b,c){var d=arguments,f=b,g=c;[].shift.apply(d);var h,i=this.each(function(){var b=a(this);if(b.is("select")){var c=b.data("selectpicker"),i="object"==typeof f&&f;if(c){if(i)for(var j in i)i.hasOwnProperty(j)&&(c.options[j]=i[j])}else{var k=a.extend({},e.DEFAULTS,a.fn.selectpicker.defaults||{},b.data(),i);k.template=a.extend({},e.DEFAULTS.template,a.fn.selectpicker.defaults?a.fn.selectpicker.defaults.template:{},b.data().template,i.template),b.data("selectpicker",c=new e(this,k,g))}"string"==typeof f&&(h=c[f]instanceof Function?c[f].apply(c,d):c.options[f])}});return"undefined"!=typeof h?h:i}String.prototype.includes||!function(){var a={}.toString,b=function(){try{var a={},b=Object.defineProperty,c=b(a,a,a)&&b}catch(d){}return c}(),c="".indexOf,d=function(b){if(null==this)throw new TypeError;var d=String(this);if(b&&"[object RegExp]"==a.call(b))throw new TypeError;var e=d.length,f=String(b),g=f.length,h=arguments.length>1?arguments[1]:void 0,i=h?Number(h):0;i!=i&&(i=0);var j=Math.min(Math.max(i,0),e);return g+j>e?!1:-1!=c.call(d,f,i)};b?b(String.prototype,"includes",{value:d,configurable:!0,writable:!0}):String.prototype.includes=d}(),String.prototype.startsWith||!function(){var a=function(){try{var a={},b=Object.defineProperty,c=b(a,a,a)&&b}catch(d){}return c}(),b={}.toString,c=function(a){if(null==this)throw new TypeError;var c=String(this);if(a&&"[object RegExp]"==b.call(a))throw new TypeError;var d=c.length,e=String(a),f=e.length,g=arguments.length>1?arguments[1]:void 0,h=g?Number(g):0;h!=h&&(h=0);var i=Math.min(Math.max(h,0),d);if(f+i>d)return!1;for(var j=-1;++j<f;)if(c.charCodeAt(i+j)!=e.charCodeAt(j))return!1;return!0};a?a(String.prototype,"startsWith",{value:c,configurable:!0,writable:!0}):String.prototype.startsWith=c}(),Object.keys||(Object.keys=function(a,b,c){c=[];for(b in a)c.hasOwnProperty.call(a,b)&&c.push(b);return c}),a.fn.triggerNative=function(a){var b,c=this[0];c.dispatchEvent?("function"==typeof Event?b=new Event(a,{bubbles:!0}):(b=document.createEvent("Event"),b.initEvent(a,!0,!1)),c.dispatchEvent(b)):(c.fireEvent&&(b=document.createEventObject(),b.eventType=a,c.fireEvent("on"+a,b)),this.trigger(a))},a.expr[":"].icontains=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.text()).toUpperCase();return f.includes(d[3].toUpperCase())},a.expr[":"].ibegins=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.text()).toUpperCase();return f.startsWith(d[3].toUpperCase())},a.expr[":"].aicontains=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.data("normalizedText")||e.text()).toUpperCase();return f.includes(d[3].toUpperCase())},a.expr[":"].aibegins=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.data("normalizedText")||e.text()).toUpperCase();return f.startsWith(d[3].toUpperCase())};var e=function(b,c,d){d&&(d.stopPropagation(),d.preventDefault()),this.$element=a(b),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=c,null===this.options.title&&(this.options.title=this.$element.attr("title")),this.val=e.prototype.val,this.render=e.prototype.render,this.refresh=e.prototype.refresh,this.setStyle=e.prototype.setStyle,this.selectAll=e.prototype.selectAll,this.deselectAll=e.prototype.deselectAll,this.destroy=e.prototype.destroy,this.remove=e.prototype.remove,this.show=e.prototype.show,this.hide=e.prototype.hide,this.init()};e.VERSION="1.10.0",e.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(a,b){return 1==a?"{0} item selected":"{0} items selected"},maxOptionsText:function(a,b){return[1==a?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==b?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1},e.prototype={constructor:e,init:function(){var b=this,c=this.$element.attr("id");this.$element.addClass("bs-select-hidden"),this.liObj={},this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement).appendTo(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(".dropdown-menu"),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),this.$element.removeClass("bs-select-hidden"),this.options.dropdownAlignRight&&this.$menu.addClass("dropdown-menu-right"),"undefined"!=typeof c&&(this.$button.attr("data-id",c),a('label[for="'+c+'"]').click(function(a){a.preventDefault(),b.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(a){b.$element.trigger("hide.bs.select",a)},"hidden.bs.dropdown":function(a){b.$element.trigger("hidden.bs.select",a)},"show.bs.dropdown":function(a){b.$element.trigger("show.bs.select",a)},"shown.bs.dropdown":function(a){b.$element.trigger("shown.bs.select",a)}}),b.$element[0].hasAttribute("required")&&this.$element.on("invalid",function(){b.$button.addClass("bs-invalid").focus(),b.$element.on({"focus.bs.select":function(){b.$button.focus(),b.$element.off("focus.bs.select")},"shown.bs.select":function(){b.$element.val(b.$element.val()).off("shown.bs.select")},"rendered.bs.select":function(){this.validity.valid&&b.$button.removeClass("bs-invalid"),b.$element.off("rendered.bs.select")}})}),setTimeout(function(){b.$element.trigger("loaded.bs.select")})},createDropdown:function(){var b=this.multiple||this.options.showTick?" show-tick":"",d=this.$element.parent().hasClass("input-group")?" input-group-btn":"",e=this.autofocus?" autofocus":"",f=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",g=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+c(this.options.liveSearchPlaceholder)+'"')+"></div>":"",h=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"",i=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"",j='<div class="btn-group bootstrap-select'+b+d+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+e+'><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open">'+f+g+h+'<ul class="dropdown-menu inner" role="menu"></ul>'+i+"</div></div>";return a(j)},createView:function(){var a=this.createDropdown(),b=this.createLi();return a.find("ul")[0].innerHTML=b,a},reloadLi:function(){this.destroyLi();var a=this.createLi();this.$menuInner[0].innerHTML=a},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var d=this,e=[],f=0,g=document.createElement("option"),h=-1,i=function(a,b,c,d){return"<li"+("undefined"!=typeof c&""!==c?' class="'+c+'"':"")+("undefined"!=typeof b&null!==b?' data-original-index="'+b+'"':"")+("undefined"!=typeof d&null!==d?'data-optgroup="'+d+'"':"")+">"+a+"</li>"},j=function(a,e,f,g){return'<a tabindex="0"'+("undefined"!=typeof e?' class="'+e+'"':"")+("undefined"!=typeof f?' style="'+f+'"':"")+(d.options.liveSearchNormalize?' data-normalized-text="'+b(c(a))+'"':"")+("undefined"!=typeof g||null!==g?' data-tokens="'+g+'"':"")+">"+a+'<span class="'+d.options.iconBase+" "+d.options.tickIcon+' check-mark"></span></a>'};if(this.options.title&&!this.multiple&&(h--,!this.$element.find(".bs-title-option").length)){var k=this.$element[0];g.className="bs-title-option",g.appendChild(document.createTextNode(this.options.title)),g.value="",k.insertBefore(g,k.firstChild),void 0===a(k.options[k.selectedIndex]).attr("selected")&&(g.selected=!0)}return this.$element.find("option").each(function(b){var c=a(this);if(h++,!c.hasClass("bs-title-option")){var g=this.className||"",k=this.style.cssText,l=c.data("content")?c.data("content"):c.html(),m=c.data("tokens")?c.data("tokens"):null,n="undefined"!=typeof c.data("subtext")?'<small class="text-muted">'+c.data("subtext")+"</small>":"",o="undefined"!=typeof c.data("icon")?'<span class="'+d.options.iconBase+" "+c.data("icon")+'"></span> ':"",p="OPTGROUP"===this.parentNode.tagName,q=this.disabled||p&&this.parentNode.disabled;if(""!==o&&q&&(o="<span>"+o+"</span>"),d.options.hideDisabled&&q&&!p)return void h--;if(c.data("content")||(l=o+'<span class="text">'+l+n+"</span>"),p&&c.data("divider")!==!0){var r=" "+this.parentNode.className||"";if(0===c.index()){f+=1;var s=this.parentNode.label,t="undefined"!=typeof c.parent().data("subtext")?'<small class="text-muted">'+c.parent().data("subtext")+"</small>":"",u=c.parent().data("icon")?'<span class="'+d.options.iconBase+" "+c.parent().data("icon")+'"></span> ':"";s=u+'<span class="text">'+s+t+"</span>",0!==b&&e.length>0&&(h++,e.push(i("",null,"divider",f+"div"))),h++,e.push(i(s,null,"dropdown-header"+r,f))}if(d.options.hideDisabled&&q)return void h--;e.push(i(j(l,"opt "+g+r,k,m),b,"",f))}else c.data("divider")===!0?e.push(i("",b,"divider")):c.data("hidden")===!0?e.push(i(j(l,g,k,m),b,"hidden is-hidden")):(this.previousElementSibling&&"OPTGROUP"===this.previousElementSibling.tagName&&(h++,e.push(i("",null,"divider",f+"div"))),e.push(i(j(l,g,k,m),b)));d.liObj[b]=h}}),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),e.join("")},findLis:function(){return null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$lis},render:function(b){var c,d=this;b!==!1&&this.$element.find("option").each(function(a){var b=d.findLis().eq(d.liObj[a]);d.setDisabled(a,this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled,b),d.setSelected(a,this.selected,b)}),this.tabIndex();var e=this.$element.find("option").map(function(){if(this.selected){if(d.options.hideDisabled&&(this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled))return;var b,c=a(this),e=c.data("icon")&&d.options.showIcon?'<i class="'+d.options.iconBase+" "+c.data("icon")+'"></i> ':"";return b=d.options.showSubtext&&c.data("subtext")&&!d.multiple?' <small class="text-muted">'+c.data("subtext")+"</small>":"","undefined"!=typeof c.attr("title")?c.attr("title"):c.data("content")&&d.options.showContent?c.data("content"):e+c.html()+b}}).toArray(),f=this.multiple?e.join(this.options.multipleSeparator):e[0];if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var g=this.options.selectedTextFormat.split(">");if(g.length>1&&e.length>g[1]||1==g.length&&e.length>=2){c=this.options.hideDisabled?", [disabled]":"";var h=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+c).length,i="function"==typeof this.options.countSelectedText?this.options.countSelectedText(e.length,h):this.options.countSelectedText;f=i.replace("{0}",e.length.toString()).replace("{1}",h.toString())}}void 0==this.options.title&&(this.options.title=this.$element.attr("title")),"static"==this.options.selectedTextFormat&&(f=this.options.title),f||(f="undefined"!=typeof this.options.title?this.options.title:this.options.noneSelectedText),this.$button.attr("title",a.trim(f.replace(/<[^>]*>?/g,""))),this.$button.children(".filter-option").html(f),this.$element.trigger("rendered.bs.select")},setStyle:function(a,b){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""));var c=a?a:this.options.style;"add"==b?this.$button.addClass(c):"remove"==b?this.$button.removeClass(c):(this.$button.removeClass(this.options.style),this.$button.addClass(c))},liHeight:function(b){if(b||this.options.size!==!1&&!this.sizeInfo){var c=document.createElement("div"),d=document.createElement("div"),e=document.createElement("ul"),f=document.createElement("li"),g=document.createElement("li"),h=document.createElement("a"),i=document.createElement("span"),j=this.options.header&&this.$menu.find(".popover-title").length>0?this.$menu.find(".popover-title")[0].cloneNode(!0):null,k=this.options.liveSearch?document.createElement("div"):null,l=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,m=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null;if(i.className="text",c.className=this.$menu[0].parentNode.className+" open",d.className="dropdown-menu open",e.className="dropdown-menu inner",f.className="divider",i.appendChild(document.createTextNode("Inner text")),h.appendChild(i),g.appendChild(h),e.appendChild(g),e.appendChild(f),j&&d.appendChild(j),k){var n=document.createElement("span");k.className="bs-searchbox",n.className="form-control",k.appendChild(n),d.appendChild(k)}l&&d.appendChild(l),d.appendChild(e),m&&d.appendChild(m),c.appendChild(d),document.body.appendChild(c);var o=h.offsetHeight,p=j?j.offsetHeight:0,q=k?k.offsetHeight:0,r=l?l.offsetHeight:0,s=m?m.offsetHeight:0,t=a(f).outerHeight(!0),u="function"==typeof getComputedStyle?getComputedStyle(d):!1,v=u?null:a(d),w=parseInt(u?u.paddingTop:v.css("paddingTop"))+parseInt(u?u.paddingBottom:v.css("paddingBottom"))+parseInt(u?u.borderTopWidth:v.css("borderTopWidth"))+parseInt(u?u.borderBottomWidth:v.css("borderBottomWidth")),x=w+parseInt(u?u.marginTop:v.css("marginTop"))+parseInt(u?u.marginBottom:v.css("marginBottom"))+2;document.body.removeChild(c),this.sizeInfo={liHeight:o,headerHeight:p,searchHeight:q,actionsHeight:r,doneButtonHeight:s,dividerHeight:t,menuPadding:w,menuExtras:x}}},setSize:function(){if(this.findLis(),this.liHeight(),this.options.header&&this.$menu.css("padding-top",0),this.options.size!==!1){var b,c,d,e,f=this,g=this.$menu,h=this.$menuInner,i=a(window),j=this.$newElement[0].offsetHeight,k=this.sizeInfo.liHeight,l=this.sizeInfo.headerHeight,m=this.sizeInfo.searchHeight,n=this.sizeInfo.actionsHeight,o=this.sizeInfo.doneButtonHeight,p=this.sizeInfo.dividerHeight,q=this.sizeInfo.menuPadding,r=this.sizeInfo.menuExtras,s=this.options.hideDisabled?".disabled":"",t=function(){d=f.$newElement.offset().top-i.scrollTop(),e=i.height()-d-j};if(t(),"auto"===this.options.size){var u=function(){var i,j=function(b,c){return function(d){return c?d.classList?d.classList.contains(b):a(d).hasClass(b):!(d.classList?d.classList.contains(b):a(d).hasClass(b))}},p=f.$menuInner[0].getElementsByTagName("li"),s=Array.prototype.filter?Array.prototype.filter.call(p,j("hidden",!1)):f.$lis.not(".hidden"),u=Array.prototype.filter?Array.prototype.filter.call(s,j("dropdown-header",!0)):s.filter(".dropdown-header");t(),b=e-r,f.options.container?(g.data("height")||g.data("height",g.height()),c=g.data("height")):c=g.height(),f.options.dropupAuto&&f.$newElement.toggleClass("dropup",d>e&&c>b-r),f.$newElement.hasClass("dropup")&&(b=d-r),i=s.length+u.length>3?3*k+r-2:0,g.css({"max-height":b+"px",overflow:"hidden","min-height":i+l+m+n+o+"px"}),h.css({"max-height":b-l-m-n-o-q+"px","overflow-y":"auto","min-height":Math.max(i-q,0)+"px"})};u(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",u),i.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",u)}else if(this.options.size&&"auto"!=this.options.size&&this.$lis.not(s).length>this.options.size){var v=this.$lis.not(".divider").not(s).children().slice(0,this.options.size).last().parent().index(),w=this.$lis.slice(0,v+1).filter(".divider").length;b=k*this.options.size+w*p+q,f.options.container?(g.data("height")||g.data("height",g.height()),c=g.data("height")):c=g.height(),f.options.dropupAuto&&this.$newElement.toggleClass("dropup",d>e&&c>b-r),g.css({"max-height":b+l+m+n+o+"px",overflow:"hidden","min-height":""}),h.css({"max-height":b-q+"px","overflow-y":"auto","min-height":""})}}},setWidth:function(){if("auto"===this.options.width){this.$menu.css("min-width","0");var a=this.$menu.parent().clone().appendTo("body"),b=this.options.container?this.$newElement.clone().appendTo("body"):a,c=a.children(".dropdown-menu").outerWidth(),d=b.css("width","auto").children("button").outerWidth();a.remove(),b.remove(),this.$newElement.css("width",Math.max(c,d)+"px")}else"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){this.$bsContainer=a('<div class="bs-container" />');var b,c,d=this,e=function(a){d.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",a.hasClass("dropup")),b=a.offset(),c=a.hasClass("dropup")?0:a[0].offsetHeight,d.$bsContainer.css({top:b.top+c,left:b.left,width:a[0].offsetWidth})};this.$button.on("click",function(){var b=a(this);d.isDisabled()||(e(d.$newElement),d.$bsContainer.appendTo(d.options.container).toggleClass("open",!b.hasClass("open")).append(d.$menu))}),a(window).on("resize scroll",function(){e(d.$newElement)}),this.$element.on("hide.bs.select",function(){d.$menu.data("height",d.$menu.height()),d.$bsContainer.detach()})},setSelected:function(a,b,c){c||(c=this.findLis().eq(this.liObj[a])),c.toggleClass("selected",b)},setDisabled:function(a,b,c){c||(c=this.findLis().eq(this.liObj[a])),b?c.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1):c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0)},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var a=this;this.isDisabled()?(this.$newElement.addClass("disabled"),this.$button.addClass("disabled").attr("tabindex",-1)):(this.$button.hasClass("disabled")&&(this.$newElement.removeClass("disabled"),this.$button.removeClass("disabled")),-1!=this.$button.attr("tabindex")||this.$element.data("tabindex")||this.$button.removeAttr("tabindex")),this.$button.click(function(){return!a.isDisabled()})},tabIndex:function(){this.$element.data("tabindex")!==this.$element.attr("tabindex")&&-98!==this.$element.attr("tabindex")&&"-98"!==this.$element.attr("tabindex")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex"))),this.$element.attr("tabindex",-98)},clickListener:function(){var b=this,c=a(document);this.$newElement.on("touchstart.dropdown",".dropdown-menu",function(a){a.stopPropagation()}),c.data("spaceSelect",!1),this.$button.on("keyup",function(a){/(32)/.test(a.keyCode.toString(10))&&c.data("spaceSelect")&&(a.preventDefault(),c.data("spaceSelect",!1))}),this.$button.on("click",function(){b.setSize()}),this.$element.on("shown.bs.select",function(){if(b.options.liveSearch||b.multiple){if(!b.multiple){var a=b.liObj[b.$element[0].selectedIndex];if("number"!=typeof a||b.options.size===!1)return;var c=b.$lis.eq(a)[0].offsetTop-b.$menuInner[0].offsetTop;c=c-b.$menuInner[0].offsetHeight/2+b.sizeInfo.liHeight/2,b.$menuInner[0].scrollTop=c}}else b.$menuInner.find(".selected a").focus()}),this.$menuInner.on("click","li a",function(c){var d=a(this),e=d.parent().data("originalIndex"),f=b.$element.val(),g=b.$element.prop("selectedIndex");if(b.multiple&&c.stopPropagation(),c.preventDefault(),!b.isDisabled()&&!d.parent().hasClass("disabled")){var h=b.$element.find("option"),i=h.eq(e),j=i.prop("selected"),k=i.parent("optgroup"),l=b.options.maxOptions,m=k.data("maxOptions")||!1;if(b.multiple){if(i.prop("selected",!j),b.setSelected(e,!j),d.blur(),l!==!1||m!==!1){var n=l<h.filter(":selected").length,o=m<k.find("option:selected").length;if(l&&n||m&&o)if(l&&1==l)h.prop("selected",!1),i.prop("selected",!0),b.$menuInner.find(".selected").removeClass("selected"),b.setSelected(e,!0);else if(m&&1==m){k.find("option:selected").prop("selected",!1),i.prop("selected",!0);var p=d.parent().data("optgroup");b.$menuInner.find('[data-optgroup="'+p+'"]').removeClass("selected"),b.setSelected(e,!0)}else{var q="function"==typeof b.options.maxOptionsText?b.options.maxOptionsText(l,m):b.options.maxOptionsText,r=q[0].replace("{n}",l),s=q[1].replace("{n}",m),t=a('<div class="notify"></div>');q[2]&&(r=r.replace("{var}",q[2][l>1?0:1]),s=s.replace("{var}",q[2][m>1?0:1])),i.prop("selected",!1),b.$menu.append(t),l&&n&&(t.append(a("<div>"+r+"</div>")),b.$element.trigger("maxReached.bs.select")),m&&o&&(t.append(a("<div>"+s+"</div>")),b.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){b.setSelected(e,!1)},10),t.delay(750).fadeOut(300,function(){a(this).remove()})}}}else h.prop("selected",!1),i.prop("selected",!0),b.$menuInner.find(".selected").removeClass("selected"),b.setSelected(e,!0);b.multiple?b.options.liveSearch&&b.$searchbox.focus():b.$button.focus(),(f!=b.$element.val()&&b.multiple||g!=b.$element.prop("selectedIndex")&&!b.multiple)&&b.$element.trigger("changed.bs.select",[e,i.prop("selected"),j]).triggerNative("change")}}),this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(c){c.currentTarget==this&&(c.preventDefault(),c.stopPropagation(),b.options.liveSearch&&!a(c.target).hasClass("close")?b.$searchbox.focus():b.$button.focus())}),this.$menuInner.on("click",".divider, .dropdown-header",function(a){a.preventDefault(),a.stopPropagation(),b.options.liveSearch?b.$searchbox.focus():b.$button.focus()}),this.$menu.on("click",".popover-title .close",function(){b.$button.click()}),this.$searchbox.on("click",function(a){a.stopPropagation()}),this.$menu.on("click",".actions-btn",function(c){b.options.liveSearch?b.$searchbox.focus():b.$button.focus(),c.preventDefault(),c.stopPropagation(),a(this).hasClass("bs-select-all")?b.selectAll():b.deselectAll()}),this.$element.change(function(){b.render(!1)})},liveSearchListener:function(){var d=this,e=a('<li class="no-results"></li>');this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api",function(){d.$menuInner.find(".active").removeClass("active"),d.$searchbox.val()&&(d.$searchbox.val(""),d.$lis.not(".is-hidden").removeClass("hidden"),e.parent().length&&e.remove()),d.multiple||d.$menuInner.find(".selected").addClass("active"),setTimeout(function(){d.$searchbox.focus()},10)}),this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(a){a.stopPropagation()}),this.$searchbox.on("input propertychange",function(){if(d.$searchbox.val()){var f=d.$lis.not(".is-hidden").removeClass("hidden").children("a");f=d.options.liveSearchNormalize?f.not(":a"+d._searchStyle()+'("'+b(d.$searchbox.val())+'")'):f.not(":"+d._searchStyle()+'("'+d.$searchbox.val()+'")'),f.parent().addClass("hidden"),d.$lis.filter(".dropdown-header").each(function(){var b=a(this),c=b.data("optgroup");0===d.$lis.filter("[data-optgroup="+c+"]").not(b).not(".hidden").length&&(b.addClass("hidden"),d.$lis.filter("[data-optgroup="+c+"div]").addClass("hidden"))});var g=d.$lis.not(".hidden");g.each(function(b){var c=a(this);c.hasClass("divider")&&(c.index()===g.first().index()||c.index()===g.last().index()||g.eq(b+1).hasClass("divider"))&&c.addClass("hidden")}),d.$lis.not(".hidden, .no-results").length?e.parent().length&&e.remove():(e.parent().length&&e.remove(),e.html(d.options.noneResultsText.replace("{0}",'"'+c(d.$searchbox.val())+'"')).show(),d.$menuInner.append(e))}else d.$lis.not(".is-hidden").removeClass("hidden"),e.parent().length&&e.remove();d.$lis.filter(".active").removeClass("active"),d.$searchbox.val()&&d.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(),a(this).focus()})},_searchStyle:function(){var a={begins:"ibegins",startsWith:"ibegins"};return a[this.options.liveSearchStyle]||"icontains"},val:function(a){return"undefined"!=typeof a?(this.$element.val(a),this.render(),this.$element):this.$element.val()},changeAll:function(b){"undefined"==typeof b&&(b=!0),this.findLis();for(var c=this.$element.find("option"),d=this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected",b),e=d.length,f=[],g=0;e>g;g++){var h=d[g].getAttribute("data-original-index");f[f.length]=c.eq(h)[0]}a(f).prop("selected",b),this.render(!1),this.$element.trigger("changed.bs.select").triggerNative("change")},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(a){a=a||window.event,a&&a.stopPropagation(),this.$button.trigger("click")},keydown:function(c){var d,e,f,g,h,i,j,k,l,m=a(this),n=m.is("input")?m.parent().parent():m.parent(),o=n.data("this"),p=":not(.disabled, .hidden, .dropdown-header, .divider)",q={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(o.options.liveSearch&&(n=m.parent().parent()),o.options.container&&(n=o.$menu),d=a("[role=menu] li",n),l=o.$newElement.hasClass("open"),!l&&(c.keyCode>=48&&c.keyCode<=57||c.keyCode>=96&&c.keyCode<=105||c.keyCode>=65&&c.keyCode<=90)&&(o.options.container?o.$button.trigger("click"):(o.setSize(),o.$menu.parent().addClass("open"),l=!0),o.$searchbox.focus()),o.options.liveSearch&&(/(^9$|27)/.test(c.keyCode.toString(10))&&l&&0===o.$menu.find(".active").length&&(c.preventDefault(),o.$menu.parent().removeClass("open"),o.options.container&&o.$newElement.removeClass("open"),o.$button.focus()),d=a("[role=menu] li"+p,n),m.val()||/(38|40)/.test(c.keyCode.toString(10))||0===d.filter(".active").length&&(d=o.$menuInner.find("li"),d=o.options.liveSearchNormalize?d.filter(":a"+o._searchStyle()+"("+b(q[c.keyCode])+")"):d.filter(":"+o._searchStyle()+"("+q[c.keyCode]+")"))),d.length){if(/(38|40)/.test(c.keyCode.toString(10)))e=d.index(d.find("a").filter(":focus").parent()),g=d.filter(p).first().index(),h=d.filter(p).last().index(),f=d.eq(e).nextAll(p).eq(0).index(),i=d.eq(e).prevAll(p).eq(0).index(),j=d.eq(f).prevAll(p).eq(0).index(),o.options.liveSearch&&(d.each(function(b){a(this).hasClass("disabled")||a(this).data("index",b)}),e=d.index(d.filter(".active")),g=d.first().data("index"),h=d.last().data("index"),f=d.eq(e).nextAll().eq(0).data("index"),i=d.eq(e).prevAll().eq(0).data("index"),j=d.eq(f).prevAll().eq(0).data("index")),k=m.data("prevIndex"),38==c.keyCode?(o.options.liveSearch&&e--,e!=j&&e>i&&(e=i),g>e&&(e=g),e==k&&(e=h)):40==c.keyCode&&(o.options.liveSearch&&e++,-1==e&&(e=0),e!=j&&f>e&&(e=f),e>h&&(e=h),e==k&&(e=g)),m.data("prevIndex",e),o.options.liveSearch?(c.preventDefault(),m.hasClass("dropdown-toggle")||(d.removeClass("active").eq(e).addClass("active").children("a").focus(),m.focus())):d.eq(e).children("a").focus();else if(!m.is("input")){var r,s,t=[];d.each(function(){a(this).hasClass("disabled")||a.trim(a(this).children("a").text().toLowerCase()).substring(0,1)==q[c.keyCode]&&t.push(a(this).index())}),r=a(document).data("keycount"),r++,a(document).data("keycount",r),s=a.trim(a(":focus").text().toLowerCase()).substring(0,1),s!=q[c.keyCode]?(r=1,a(document).data("keycount",r)):r>=t.length&&(a(document).data("keycount",0),r>t.length&&(r=1)),d.eq(t[r-1]).children("a").focus()}if((/(13|32)/.test(c.keyCode.toString(10))||/(^9$)/.test(c.keyCode.toString(10))&&o.options.selectOnTab)&&l){if(/(32)/.test(c.keyCode.toString(10))||c.preventDefault(),o.options.liveSearch)/(32)/.test(c.keyCode.toString(10))||(o.$menuInner.find(".active a").click(),m.focus());else{var u=a(":focus");u.click(),u.focus(),c.preventDefault(),a(document).data("spaceSelect",!0)}a(document).data("keycount",0)}(/(^9$|27)/.test(c.keyCode.toString(10))&&l&&(o.multiple||o.options.liveSearch)||/(27)/.test(c.keyCode.toString(10))&&!l)&&(o.$menu.parent().removeClass("open"),o.options.container&&o.$newElement.removeClass("open"),o.$button.focus())}},mobile:function(){this.$element.addClass("mobile-device")},refresh:function(){this.$lis=null,this.liObj={},this.reloadLi(),this.render(),this.checkDisabled(),this.liHeight(!0),this.setStyle(),this.setWidth(),this.$lis&&this.$searchbox.trigger("propertychange"),this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")}};var f=a.fn.selectpicker;a.fn.selectpicker=d,a.fn.selectpicker.Constructor=e,a.fn.selectpicker.noConflict=function(){return a.fn.selectpicker=f,this},a(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',e.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',function(a){a.stopPropagation()}),a(window).on("load.bs.select.data-api",function(){a(".selectpicker").each(function(){var b=a(this);d.call(b,b.data())})})}(a)});
//# sourceMappingURL=bootstrap-select.js.map
/*!
 * Lightbox for Bootstrap 3 by @ashleydw
 * https://github.com/ashleydw/lightbox
 *
 * License: https://github.com/ashleydw/lightbox/blob/master/LICENSE
 */
(function(){"use strict";var a,b;a=jQuery,b=function(b,c){var d,e,f;return this.options=a.extend({title:null,footer:null,remote:null},a.fn.ekkoLightbox.defaults,c||{}),this.$element=a(b),d="",this.modal_id=this.options.modal_id?this.options.modal_id:"ekkoLightbox-"+Math.floor(1e3*Math.random()+1),f='<div class="modal-header"'+(this.options.title||this.options.always_show_close?"":' style="display:none"')+'><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">'+(this.options.title||"&nbsp;")+"</h4></div>",e='<div class="modal-footer"'+(this.options.footer?"":' style="display:none"')+">"+this.options.footer+"</div>",a(document.body).append('<div id="'+this.modal_id+'" class="ekko-lightbox modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">'+f+'<div class="modal-body"><div class="ekko-lightbox-container"><div></div></div></div>'+e+"</div></div></div>"),this.modal=a("#"+this.modal_id),this.modal_dialog=this.modal.find(".modal-dialog").first(),this.modal_content=this.modal.find(".modal-content").first(),this.modal_body=this.modal.find(".modal-body").first(),this.modal_header=this.modal.find(".modal-header").first(),this.modal_footer=this.modal.find(".modal-footer").first(),this.lightbox_container=this.modal_body.find(".ekko-lightbox-container").first(),this.lightbox_body=this.lightbox_container.find("> div:first-child").first(),this.showLoading(),this.modal_arrows=null,this.border={top:parseFloat(this.modal_dialog.css("border-top-width"))+parseFloat(this.modal_content.css("border-top-width"))+parseFloat(this.modal_body.css("border-top-width")),right:parseFloat(this.modal_dialog.css("border-right-width"))+parseFloat(this.modal_content.css("border-right-width"))+parseFloat(this.modal_body.css("border-right-width")),bottom:parseFloat(this.modal_dialog.css("border-bottom-width"))+parseFloat(this.modal_content.css("border-bottom-width"))+parseFloat(this.modal_body.css("border-bottom-width")),left:parseFloat(this.modal_dialog.css("border-left-width"))+parseFloat(this.modal_content.css("border-left-width"))+parseFloat(this.modal_body.css("border-left-width"))},this.padding={top:parseFloat(this.modal_dialog.css("padding-top"))+parseFloat(this.modal_content.css("padding-top"))+parseFloat(this.modal_body.css("padding-top")),right:parseFloat(this.modal_dialog.css("padding-right"))+parseFloat(this.modal_content.css("padding-right"))+parseFloat(this.modal_body.css("padding-right")),bottom:parseFloat(this.modal_dialog.css("padding-bottom"))+parseFloat(this.modal_content.css("padding-bottom"))+parseFloat(this.modal_body.css("padding-bottom")),left:parseFloat(this.modal_dialog.css("padding-left"))+parseFloat(this.modal_content.css("padding-left"))+parseFloat(this.modal_body.css("padding-left"))},this.modal.on("show.bs.modal",this.options.onShow.bind(this)).on("shown.bs.modal",function(a){return function(){return a.modal_shown(),a.options.onShown.call(a)}}(this)).on("hide.bs.modal",this.options.onHide.bind(this)).on("hidden.bs.modal",function(b){return function(){return b.gallery&&a(document).off("keydown.ekkoLightbox"),b.modal.remove(),b.options.onHidden.call(b)}}(this)).modal("show",c),this.modal},b.prototype={modal_shown:function(){var b;return this.options.remote?(this.gallery=this.$element.data("gallery"),this.gallery&&("document.body"===this.options.gallery_parent_selector||""===this.options.gallery_parent_selector?this.gallery_items=a(document.body).find('*[data-gallery="'+this.gallery+'"]'):this.gallery_items=this.$element.parents(this.options.gallery_parent_selector).first().find('*[data-gallery="'+this.gallery+'"]'),this.gallery_index=this.gallery_items.index(this.$element),a(document).on("keydown.ekkoLightbox",this.navigate.bind(this)),this.options.directional_arrows&&this.gallery_items.length>1&&(this.lightbox_container.append('<div class="ekko-lightbox-nav-overlay"><a href="#" class="'+this.strip_stops(this.options.left_arrow_class)+'"></a><a href="#" class="'+this.strip_stops(this.options.right_arrow_class)+'"></a></div>'),this.modal_arrows=this.lightbox_container.find("div.ekko-lightbox-nav-overlay").first(),this.lightbox_container.find("a"+this.strip_spaces(this.options.left_arrow_class)).on("click",function(a){return function(b){return b.preventDefault(),a.navigate_left()}}(this)),this.lightbox_container.find("a"+this.strip_spaces(this.options.right_arrow_class)).on("click",function(a){return function(b){return b.preventDefault(),a.navigate_right()}}(this)))),this.options.type?"image"===this.options.type?this.preloadImage(this.options.remote,!0):"youtube"===this.options.type&&(b=this.getYoutubeId(this.options.remote))?this.showYoutubeVideo(b):"vimeo"===this.options.type?this.showVimeoVideo(this.options.remote):"instagram"===this.options.type?this.showInstagramVideo(this.options.remote):"url"===this.options.type?this.loadRemoteContent(this.options.remote):"video"===this.options.type?this.showVideoIframe(this.options.remote):this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo|instagram|url|video"'):this.detectRemoteType(this.options.remote)):this.error("No remote target given")},strip_stops:function(a){return a.replace(/\./g,"")},strip_spaces:function(a){return a.replace(/\s/g,"")},isImage:function(a){return a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSwf:function(a){return a.match(/\.(swf)((\?|#).*)?$/i)},getYoutubeId:function(a){var b;return b=a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/),b&&11===b[2].length?b[2]:!1},getVimeoId:function(a){return a.indexOf("vimeo")>0?a:!1},getInstagramId:function(a){return a.indexOf("instagram")>0?a:!1},navigate:function(a){if(a=a||window.event,39===a.keyCode||37===a.keyCode){if(39===a.keyCode)return this.navigate_right();if(37===a.keyCode)return this.navigate_left()}},navigateTo:function(b){var c,d;return 0>b||b>this.gallery_items.length-1?this:(this.showLoading(),this.gallery_index=b,this.$element=a(this.gallery_items.get(this.gallery_index)),this.updateTitleAndFooter(),d=this.$element.attr("data-remote")||this.$element.attr("href"),this.detectRemoteType(d,this.$element.attr("data-type")||!1),this.gallery_index+1<this.gallery_items.length&&(c=a(this.gallery_items.get(this.gallery_index+1),!1),d=c.attr("data-remote")||c.attr("href"),"image"===c.attr("data-type")||this.isImage(d))?this.preloadImage(d,!1):void 0)},navigate_left:function(){return 1!==this.gallery_items.length?(0===this.gallery_index?this.gallery_index=this.gallery_items.length-1:this.gallery_index--,this.options.onNavigate.call(this,"left",this.gallery_index),this.navigateTo(this.gallery_index)):void 0},navigate_right:function(){return 1!==this.gallery_items.length?(this.gallery_index===this.gallery_items.length-1?this.gallery_index=0:this.gallery_index++,this.options.onNavigate.call(this,"right",this.gallery_index),this.navigateTo(this.gallery_index)):void 0},detectRemoteType:function(a,b){var c;return b=b||!1,"image"===b||this.isImage(a)?(this.options.type="image",this.preloadImage(a,!0)):"youtube"===b||(c=this.getYoutubeId(a))?(this.options.type="youtube",this.showYoutubeVideo(c)):"vimeo"===b||(c=this.getVimeoId(a))?(this.options.type="vimeo",this.showVimeoVideo(c)):"instagram"===b||(c=this.getInstagramId(a))?(this.options.type="instagram",this.showInstagramVideo(c)):"video"===b?(this.options.type="video",this.showVideoIframe(c)):(this.options.type="url",this.loadRemoteContent(a))},updateTitleAndFooter:function(){var a,b,c,d;return c=this.modal_content.find(".modal-header"),b=this.modal_content.find(".modal-footer"),d=this.$element.data("title")||"",a=this.$element.data("footer")||"",d||this.options.always_show_close?c.css("display","").find(".modal-title").html(d||"&nbsp;"):c.css("display","none"),a?b.css("display","").html(a):b.css("display","none"),this},showLoading:function(){return this.lightbox_body.html('<div class="modal-loading">'+this.options.loadingMessage+"</div>"),this},showYoutubeVideo:function(a){var b,c,d;return c=null!=this.$element.attr("data-norelated")||this.options.no_related?"&rel=0":"",d=this.checkDimensions(this.$element.data("width")||560),b=d/(560/315),this.showVideoIframe("//www.youtube.com/embed/"+a+"?badge=0&autoplay=1&html5=1"+c,d,b)},showVimeoVideo:function(a){var b,c;return c=this.checkDimensions(this.$element.data("width")||560),b=c/(500/281),this.showVideoIframe(a+"?autoplay=1",c,b)},showInstagramVideo:function(a){var b,c;return c=this.checkDimensions(this.$element.data("width")||612),this.resize(c),b=c+80,this.lightbox_body.html('<iframe width="'+c+'" height="'+b+'" src="'+this.addTrailingSlash(a)+'embed/" frameborder="0" allowfullscreen></iframe>'),this.options.onContentLoaded.call(this),this.modal_arrows?this.modal_arrows.css("display","none"):void 0},showVideoIframe:function(a,b,c){return c=c||b,this.resize(b),this.lightbox_body.html('<div class="embed-responsive embed-responsive-16by9"><iframe width="'+b+'" height="'+c+'" src="'+a+'" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe></div>'),this.options.onContentLoaded.call(this),this.modal_arrows&&this.modal_arrows.css("display","none"),this},loadRemoteContent:function(b){var c,d;return d=this.$element.data("width")||560,this.resize(d),c=this.$element.data("disableExternalCheck")||!1,c||this.isExternal(b)?(this.lightbox_body.html('<iframe width="'+d+'" height="'+d+'" src="'+b+'" frameborder="0" allowfullscreen></iframe>'),this.options.onContentLoaded.call(this)):this.lightbox_body.load(b,a.proxy(function(a){return function(){return a.$element.trigger("loaded.bs.modal")}}(this))),this.modal_arrows&&this.modal_arrows.css("display","none"),this},isExternal:function(a){var b;return b=a.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/),"string"==typeof b[1]&&b[1].length>0&&b[1].toLowerCase()!==location.protocol?!0:"string"==typeof b[2]&&b[2].length>0&&b[2].replace(new RegExp(":("+{"http:":80,"https:":443}[location.protocol]+")?$"),"")!==location.host?!0:!1},error:function(a){return this.lightbox_body.html(a),this},preloadImage:function(b,c){var d;return d=new Image,(null==c||c===!0)&&(d.onload=function(b){return function(){var c;return c=a("<img />"),c.attr("src",d.src),c.addClass("img-responsive"),b.lightbox_body.html(c),b.modal_arrows&&b.modal_arrows.css("display","block"),c.load(function(){return b.options.scale_height?b.scaleHeight(d.height,d.width):b.resize(d.width),b.options.onContentLoaded.call(b)})}}(this),d.onerror=function(a){return function(){return a.error("Failed to load image: "+b)}}(this)),d.src=b,d},scaleHeight:function(b,c){var d,e,f,g,h,i;return g=this.modal_header.outerHeight(!0)||0,f=this.modal_footer.outerHeight(!0)||0,this.modal_footer.is(":visible")||(f=0),this.modal_header.is(":visible")||(g=0),d=this.border.top+this.border.bottom+this.padding.top+this.padding.bottom,h=parseFloat(this.modal_dialog.css("margin-top"))+parseFloat(this.modal_dialog.css("margin-bottom")),i=a(window).height()-d-h-g-f,e=Math.min(i/b,1),this.modal_dialog.css("height","auto").css("max-height",i),this.resize(e*c)},resize:function(b){var c;return c=b+this.border.left+this.padding.left+this.padding.right+this.border.right,this.modal_dialog.css("width","auto").css("max-width",c),this.lightbox_container.find("a").css("line-height",function(){return a(this).parent().height()+"px"}),this},checkDimensions:function(a){var b,c;return c=a+this.border.left+this.padding.left+this.padding.right+this.border.right,b=document.body.clientWidth,c>b&&(a=this.modal_body.width()),a},close:function(){return this.modal.modal("hide")},addTrailingSlash:function(a){return"/"!==a.substr(-1)&&(a+="/"),a}},a.fn.ekkoLightbox=function(c){return this.each(function(){var d;return d=a(this),c=a.extend({remote:d.attr("data-remote")||d.attr("href"),gallery_parent_selector:d.attr("data-parent"),type:d.attr("data-type")},c,d.data()),new b(this,c),this})},a.fn.ekkoLightbox.defaults={gallery_parent_selector:"document.body",left_arrow_class:".glyphicon .glyphicon-chevron-left",right_arrow_class:".glyphicon .glyphicon-chevron-right",directional_arrows:!0,type:null,always_show_close:!0,no_related:!1,scale_height:!0,loadingMessage:"Loading...",onShow:function(){},onShown:function(){},onHide:function(){},onHidden:function(){},onNavigate:function(){},onContentLoaded:function(){}}}).call(this);
/*!
 * justifiedGallery - v3.8.1
 * http://miromannino.github.io/Justified-Gallery/
 * Copyright (c) 2025 Miro Mannino, Hypolite Petovan, Random Penguin
 * Licensed under the MIT license.
 */
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else if(typeof module==="object"&&module.exports){module.exports=function(root,jQuery){if(jQuery===undefined){if(typeof window!=="undefined"){jQuery=require("jquery")}else{jQuery=require("jquery")(root)}}factory(jQuery);return jQuery}}else{factory(jQuery)}})(function($){var JustifiedGallery=function($gallery,settings){this.settings=settings;this.checkSettings();this.imgAnalyzerTimeout=null;this.entries=null;this.buildingRow={entriesBuff:[],width:0,height:0,aspectRatio:0};this.lastFetchedEntry=null;this.lastAnalyzedIndex=-1;this.yield={every:2,flushed:0};this.border=settings.border>=0?settings.border:settings.margins;this.maxRowHeight=this.retrieveMaxRowHeight();this.suffixRanges=this.retrieveSuffixRanges();this.offY=this.border;this.rows=0;this.spinner={phase:0,timeSlot:150,$el:$('<div class="jg-spinner"><span></span><span></span><span></span></div>'),intervalId:null};this.scrollBarOn=false;this.checkWidthIntervalId=null;this.galleryWidth=$gallery.width();this.$gallery=$gallery};JustifiedGallery.prototype.getSuffix=function(width,height){var longestSide,i;longestSide=width>height?width:height;for(i=0;i<this.suffixRanges.length;i++){if(longestSide<=this.suffixRanges[i]){return this.settings.sizeRangeSuffixes[this.suffixRanges[i]]}}return this.settings.sizeRangeSuffixes[this.suffixRanges[i-1]]};JustifiedGallery.prototype.removeSuffix=function(str,suffix){return str.substring(0,str.length-suffix.length)};JustifiedGallery.prototype.endsWith=function(str,suffix){return str.indexOf(suffix,str.length-suffix.length)!==-1};JustifiedGallery.prototype.getUsedSuffix=function(str){for(var si in this.settings.sizeRangeSuffixes){if(this.settings.sizeRangeSuffixes.hasOwnProperty(si)){if(this.settings.sizeRangeSuffixes[si].length===0)continue;if(this.endsWith(str,this.settings.sizeRangeSuffixes[si]))return this.settings.sizeRangeSuffixes[si]}}return""};JustifiedGallery.prototype.newSrc=function(imageSrc,imgWidth,imgHeight,image){var newImageSrc;if(this.settings.thumbnailPath){newImageSrc=this.settings.thumbnailPath(imageSrc,imgWidth,imgHeight,image)}else{var matchRes=imageSrc.match(this.settings.extension);var ext=matchRes!==null?matchRes[0]:"";newImageSrc=imageSrc.replace(this.settings.extension,"");newImageSrc=this.removeSuffix(newImageSrc,this.getUsedSuffix(newImageSrc));if(newImageSrc.match(/-[0-9]/)){newImageSrc+=ext}else{newImageSrc+=this.getSuffix(imgWidth,imgHeight)+ext}}return newImageSrc};JustifiedGallery.prototype.showImg=function($entry,callback){if(this.settings.cssAnimation){$entry.addClass("jg-entry-visible");if(callback)callback()}else{$entry.stop().fadeTo(this.settings.imagesAnimationDuration,1,callback);$entry.find(this.settings.imgSelector).stop().fadeTo(this.settings.imagesAnimationDuration,1,callback)}};JustifiedGallery.prototype.extractImgSrcFromImage=function($image){var imageSrc=$image.data("safe-src");var imageSrcLoc="data-safe-src";if(typeof imageSrc==="undefined"){imageSrc=$image.attr("src");imageSrcLoc="src"}$image.data("jg.originalSrc",imageSrc);$image.data("jg.src",imageSrc);$image.data("jg.originalSrcLoc",imageSrcLoc);return imageSrc};JustifiedGallery.prototype.imgFromEntry=function($entry){var $img=$entry.find(this.settings.imgSelector);return $img.length===0?null:$img};JustifiedGallery.prototype.captionFromEntry=function($entry){var $caption=$entry.find("> .jg-caption");return $caption.length===0?null:$caption};JustifiedGallery.prototype.displayEntry=function($entry,x,y,imgWidth,imgHeight,rowHeight){$entry.width(imgWidth);$entry.height(rowHeight);$entry.css("top",y);$entry.css("left",x);var $image=this.imgFromEntry($entry);if($image!==null){$image.css("width",imgWidth);$image.css("height",imgHeight);$image.css("margin-left",-imgWidth/2);$image.css("margin-top",-imgHeight/2);var imageSrc=$image.data("jg.src");if(imageSrc){imageSrc=this.newSrc(imageSrc,imgWidth,imgHeight,$image[0]);$image.one("error",function(){});var loadNewImage=function(){$image.attr("src",imageSrc)};if($entry.data("jg.loaded")==="skipped"&&imageSrc){this.onImageEvent(imageSrc,function(){this.showImg($entry,loadNewImage);$entry.data("jg.loaded",true)}.bind(this))}else{this.showImg($entry,loadNewImage)}}}else{this.showImg($entry)}this.displayEntryCaption($entry)};JustifiedGallery.prototype.displayEntryCaption=function($entry){var $image=this.imgFromEntry($entry);if($image!==null&&this.settings.captions){var $imgCaption=this.captionFromEntry($entry);if($imgCaption===null){var caption=$image.attr("alt");if(!this.isValidCaption(caption))caption=$entry.attr("title");if(this.isValidCaption(caption)){$imgCaption=$('<div class="jg-caption"></div>');$entry.append($imgCaption);$entry.data("jg.createdCaption",true)}}if($imgCaption!==null){if(!this.settings.cssAnimation)$imgCaption.stop().fadeTo(0,this.settings.captionSettings.nonVisibleOpacity);this.addCaptionEventsHandlers($entry)}}else{this.removeCaptionEventsHandlers($entry)}};JustifiedGallery.prototype.isValidCaption=function(caption){return typeof caption!=="undefined"&&caption.length>0};JustifiedGallery.prototype.onEntryMouseEnterForCaption=function(eventObject){var $caption=this.captionFromEntry($(eventObject.currentTarget));if(this.settings.cssAnimation){$caption.addClass("jg-caption-visible").removeClass("jg-caption-hidden")}else{$caption.stop().fadeTo(this.settings.captionSettings.animationDuration,this.settings.captionSettings.visibleOpacity)}};JustifiedGallery.prototype.onEntryMouseLeaveForCaption=function(eventObject){var $caption=this.captionFromEntry($(eventObject.currentTarget));if(this.settings.cssAnimation){$caption.removeClass("jg-caption-visible").removeClass("jg-caption-hidden")}else{$caption.stop().fadeTo(this.settings.captionSettings.animationDuration,this.settings.captionSettings.nonVisibleOpacity)}};JustifiedGallery.prototype.addCaptionEventsHandlers=function($entry){var captionMouseEvents=$entry.data("jg.captionMouseEvents");if(typeof captionMouseEvents==="undefined"){captionMouseEvents={mouseenter:$.proxy(this.onEntryMouseEnterForCaption,this),mouseleave:$.proxy(this.onEntryMouseLeaveForCaption,this)};$entry.on("mouseenter",undefined,undefined,captionMouseEvents.mouseenter);$entry.on("mouseleave",undefined,undefined,captionMouseEvents.mouseleave);$entry.data("jg.captionMouseEvents",captionMouseEvents)}};JustifiedGallery.prototype.removeCaptionEventsHandlers=function($entry){var captionMouseEvents=$entry.data("jg.captionMouseEvents");if(typeof captionMouseEvents!=="undefined"){$entry.off("mouseenter",undefined,captionMouseEvents.mouseenter);$entry.off("mouseleave",undefined,captionMouseEvents.mouseleave);$entry.removeData("jg.captionMouseEvents")}};JustifiedGallery.prototype.clearBuildingRow=function(){this.buildingRow.entriesBuff=[];this.buildingRow.aspectRatio=0;this.buildingRow.width=0};JustifiedGallery.prototype.prepareBuildingRow=function(isLastRow,hiddenRow){var i,$entry,imgAspectRatio,newImgW,newImgH,justify=true;var minHeight=0;var availableWidth=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*this.settings.margins;var rowHeight=availableWidth/this.buildingRow.aspectRatio;var defaultRowHeight=this.settings.rowHeight;var justifiable=this.buildingRow.width/availableWidth>this.settings.justifyThreshold;if(hiddenRow||isLastRow&&this.settings.lastRow==="hide"&&!justifiable){for(i=0;i<this.buildingRow.entriesBuff.length;i++){$entry=this.buildingRow.entriesBuff[i];if(this.settings.cssAnimation)$entry.removeClass("jg-entry-visible");else{$entry.stop().fadeTo(0,.1);$entry.find("> img, > a > img").fadeTo(0,0)}}return-1}if(isLastRow&&!justifiable&&this.settings.lastRow!=="justify"&&this.settings.lastRow!=="hide"){justify=false;if(this.rows>0){defaultRowHeight=(this.offY-this.border-this.settings.margins*this.rows)/this.rows;justify=defaultRowHeight*this.buildingRow.aspectRatio/availableWidth>this.settings.justifyThreshold}}for(i=0;i<this.buildingRow.entriesBuff.length;i++){$entry=this.buildingRow.entriesBuff[i];imgAspectRatio=$entry.data("jg.width")/$entry.data("jg.height");if(justify){newImgW=i===this.buildingRow.entriesBuff.length-1?availableWidth:rowHeight*imgAspectRatio;newImgH=rowHeight}else{newImgW=defaultRowHeight*imgAspectRatio;newImgH=defaultRowHeight}availableWidth-=Math.round(newImgW);$entry.data("jg.jwidth",Math.round(newImgW));$entry.data("jg.jheight",Math.ceil(newImgH));if(i===0||minHeight>newImgH)minHeight=newImgH}this.buildingRow.height=minHeight;return justify};JustifiedGallery.prototype.flushRow=function(isLastRow,hiddenRow){var settings=this.settings;var $entry,buildingRowRes,offX=this.border,i;buildingRowRes=this.prepareBuildingRow(isLastRow,hiddenRow);if(hiddenRow||isLastRow&&settings.lastRow==="hide"&&buildingRowRes===-1){this.clearBuildingRow();return}if(this.maxRowHeight){if(this.maxRowHeight<this.buildingRow.height)this.buildingRow.height=this.maxRowHeight}if(isLastRow&&(settings.lastRow==="center"||settings.lastRow==="right")){var availableWidth=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*settings.margins;for(i=0;i<this.buildingRow.entriesBuff.length;i++){$entry=this.buildingRow.entriesBuff[i];availableWidth-=$entry.data("jg.jwidth")}if(settings.lastRow==="center")offX+=Math.round(availableWidth/2);else if(settings.lastRow==="right")offX+=availableWidth}var lastEntryIdx=this.buildingRow.entriesBuff.length-1;for(i=0;i<=lastEntryIdx;i++){$entry=this.buildingRow.entriesBuff[this.settings.rtl?lastEntryIdx-i:i];this.displayEntry($entry,offX,this.offY,$entry.data("jg.jwidth"),$entry.data("jg.jheight"),this.buildingRow.height);offX+=$entry.data("jg.jwidth")+settings.margins}this.galleryHeightToSet=this.offY+this.buildingRow.height+this.border;this.setGalleryTempHeight(this.galleryHeightToSet+this.getSpinnerHeight());if(!isLastRow||this.buildingRow.height<=settings.rowHeight&&buildingRowRes){this.offY+=this.buildingRow.height+settings.margins;this.rows+=1;this.clearBuildingRow();this.settings.triggerEvent.call(this,"jg.rowflush")}};var galleryPrevStaticHeight=0;JustifiedGallery.prototype.rememberGalleryHeight=function(){galleryPrevStaticHeight=this.$gallery.height();this.$gallery.height(galleryPrevStaticHeight)};JustifiedGallery.prototype.setGalleryTempHeight=function(height){galleryPrevStaticHeight=Math.max(height,galleryPrevStaticHeight);this.$gallery.height(galleryPrevStaticHeight)};JustifiedGallery.prototype.setGalleryFinalHeight=function(height){galleryPrevStaticHeight=height;this.$gallery.height(height)};JustifiedGallery.prototype.checkWidth=function(){this.checkWidthIntervalId=setInterval($.proxy(function(){if(!this.$gallery.is(":visible"))return;var galleryWidth=parseFloat(this.$gallery.width());if(Math.abs(galleryWidth-this.galleryWidth)>this.settings.refreshSensitivity){this.galleryWidth=galleryWidth;this.rewind();this.rememberGalleryHeight();this.startImgAnalyzer(true)}},this),this.settings.refreshTime)};JustifiedGallery.prototype.isSpinnerActive=function(){return this.spinner.intervalId!==null};JustifiedGallery.prototype.getSpinnerHeight=function(){return this.spinner.$el.innerHeight()};JustifiedGallery.prototype.stopLoadingSpinnerAnimation=function(){clearInterval(this.spinner.intervalId);this.spinner.intervalId=null;this.setGalleryTempHeight(this.$gallery.height()-this.getSpinnerHeight());this.spinner.$el.detach()};JustifiedGallery.prototype.startLoadingSpinnerAnimation=function(){var spinnerContext=this.spinner;var $spinnerPoints=spinnerContext.$el.find("span");clearInterval(spinnerContext.intervalId);this.$gallery.append(spinnerContext.$el);this.setGalleryTempHeight(this.offY+this.buildingRow.height+this.getSpinnerHeight());spinnerContext.intervalId=setInterval(function(){if(spinnerContext.phase<$spinnerPoints.length){$spinnerPoints.eq(spinnerContext.phase).fadeTo(spinnerContext.timeSlot,1)}else{$spinnerPoints.eq(spinnerContext.phase-$spinnerPoints.length).fadeTo(spinnerContext.timeSlot,0)}spinnerContext.phase=(spinnerContext.phase+1)%($spinnerPoints.length*2)},spinnerContext.timeSlot)};JustifiedGallery.prototype.rewind=function(){this.lastFetchedEntry=null;this.lastAnalyzedIndex=-1;this.offY=this.border;this.rows=0;this.clearBuildingRow()};JustifiedGallery.prototype.getSelectorWithoutSpinner=function(){return this.settings.selector+", div:not(.jg-spinner)"};JustifiedGallery.prototype.getAllEntries=function(){var selector=this.getSelectorWithoutSpinner();return this.$gallery.children(selector).toArray()};JustifiedGallery.prototype.updateEntries=function(norewind){var newEntries;if(norewind&&this.lastFetchedEntry!=null){var selector=this.getSelectorWithoutSpinner();newEntries=$(this.lastFetchedEntry).nextAll(selector).toArray()}else{this.entries=[];newEntries=this.getAllEntries()}if(newEntries.length>0){if($.isFunction(this.settings.sort)){newEntries=this.sortArray(newEntries)}else if(this.settings.randomize){newEntries=this.shuffleArray(newEntries)}this.lastFetchedEntry=newEntries[newEntries.length-1];if(this.settings.filter){newEntries=this.filterArray(newEntries)}else{this.resetFilters(newEntries)}}this.entries=this.entries.concat(newEntries);return true};JustifiedGallery.prototype.insertToGallery=function(entries){var that=this;$.each(entries,function(){$(this).appendTo(that.$gallery)})};JustifiedGallery.prototype.shuffleArray=function(a){var i,j,temp;for(i=a.length-1;i>0;i--){j=Math.floor(Math.random()*(i+1));temp=a[i];a[i]=a[j];a[j]=temp}this.insertToGallery(a);return a};JustifiedGallery.prototype.sortArray=function(a){a.sort(this.settings.sort);this.insertToGallery(a);return a};JustifiedGallery.prototype.resetFilters=function(a){for(var i=0;i<a.length;i++)$(a[i]).removeClass("jg-filtered")};JustifiedGallery.prototype.filterArray=function(a){var settings=this.settings;if($.type(settings.filter)==="string"){return a.filter(function(el){var $el=$(el);if($el.is(settings.filter)){$el.removeClass("jg-filtered");return true}else{$el.addClass("jg-filtered").removeClass("jg-visible");return false}})}else if($.isFunction(settings.filter)){var filteredArr=a.filter(settings.filter);for(var i=0;i<a.length;i++){if(filteredArr.indexOf(a[i])===-1){$(a[i]).addClass("jg-filtered").removeClass("jg-visible")}else{$(a[i]).removeClass("jg-filtered")}}return filteredArr}};JustifiedGallery.prototype.resetImgSrc=function($img){if($img.data("jg.originalSrcLoc")==="src"){$img.attr("src",$img.data("jg.originalSrc"))}else{$img.attr("src","")}};JustifiedGallery.prototype.destroy=function(){clearInterval(this.checkWidthIntervalId);this.stopImgAnalyzerStarter();$.each(this.getAllEntries(),$.proxy(function(_,entry){var $entry=$(entry);$entry.css("width","");$entry.css("height","");$entry.css("top","");$entry.css("left","");$entry.data("jg.loaded",undefined);$entry.removeClass("jg-entry jg-filtered jg-entry-visible");var $img=this.imgFromEntry($entry);if($img){$img.css("width","");$img.css("height","");$img.css("margin-left","");$img.css("margin-top","");this.resetImgSrc($img);$img.data("jg.originalSrc",undefined);$img.data("jg.originalSrcLoc",undefined);$img.data("jg.src",undefined)}this.removeCaptionEventsHandlers($entry);var $caption=this.captionFromEntry($entry);if($entry.data("jg.createdCaption")){$entry.data("jg.createdCaption",undefined);if($caption!==null)$caption.remove()}else{if($caption!==null)$caption.fadeTo(0,1)}},this));this.$gallery.css("height","");this.$gallery.removeClass("justified-gallery");this.$gallery.data("jg.controller",undefined);this.settings.triggerEvent.call(this,"jg.destroy")};JustifiedGallery.prototype.analyzeImages=function(isForResize){for(var i=this.lastAnalyzedIndex+1;i<this.entries.length;i++){var $entry=$(this.entries[i]);if($entry.data("jg.loaded")===true||$entry.data("jg.loaded")==="skipped"){var availableWidth=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*this.settings.margins;var imgAspectRatio=$entry.data("jg.width")/$entry.data("jg.height");this.buildingRow.entriesBuff.push($entry);this.buildingRow.aspectRatio+=imgAspectRatio;this.buildingRow.width+=imgAspectRatio*this.settings.rowHeight;this.lastAnalyzedIndex=i;if(availableWidth/(this.buildingRow.aspectRatio+imgAspectRatio)<this.settings.rowHeight){this.flushRow(false,this.settings.maxRowsCount>0&&this.rows===this.settings.maxRowsCount);if(++this.yield.flushed>=this.yield.every){this.startImgAnalyzer(isForResize);return}}}else if($entry.data("jg.loaded")!=="error"){return}}if(this.buildingRow.entriesBuff.length>0){this.flushRow(true,this.settings.maxRowsCount>0&&this.rows===this.settings.maxRowsCount)}if(this.isSpinnerActive()){this.stopLoadingSpinnerAnimation()}this.stopImgAnalyzerStarter();this.setGalleryFinalHeight(this.galleryHeightToSet);this.settings.triggerEvent.call(this,isForResize?"jg.resize":"jg.complete")};JustifiedGallery.prototype.stopImgAnalyzerStarter=function(){this.yield.flushed=0;if(this.imgAnalyzerTimeout!==null){clearTimeout(this.imgAnalyzerTimeout);this.imgAnalyzerTimeout=null}};JustifiedGallery.prototype.startImgAnalyzer=function(isForResize){var that=this;this.stopImgAnalyzerStarter();this.imgAnalyzerTimeout=setTimeout(function(){that.analyzeImages(isForResize)},.001)};JustifiedGallery.prototype.onImageEvent=function(imageSrc,onLoad,onError){if(!onLoad&&!onError)return;var memImage=new Image;var $memImage=$(memImage);if(onLoad){$memImage.one("load",function(){$memImage.off("load error");onLoad(memImage)})}if(onError){$memImage.one("error",function(){$memImage.off("load error");onError(memImage)})}memImage.src=imageSrc};JustifiedGallery.prototype.init=function(){var imagesToLoad=false,skippedImages=false,that=this;$.each(this.entries,function(index,entry){var $entry=$(entry);var $image=that.imgFromEntry($entry);$entry.addClass("jg-entry");if($entry.data("jg.loaded")!==true&&$entry.data("jg.loaded")!=="skipped"){if(that.settings.rel!==null)$entry.attr("rel",that.settings.rel);if(that.settings.target!==null)$entry.attr("target",that.settings.target);if($image!==null){var imageSrc=that.extractImgSrcFromImage($image);if(that.settings.waitThumbnailsLoad===false||!imageSrc){var width=parseFloat($image.attr("width"));var height=parseFloat($image.attr("height"));if($image.prop("tagName")==="svg"){width=parseFloat($image[0].getBBox().width);height=parseFloat($image[0].getBBox().height)}if(!isNaN(width)&&!isNaN(height)){$entry.data("jg.width",width);$entry.data("jg.height",height);$entry.data("jg.loaded","skipped");skippedImages=true;that.startImgAnalyzer(false);return true}}$entry.data("jg.loaded",false);imagesToLoad=true;if(!that.isSpinnerActive())that.startLoadingSpinnerAnimation();that.onImageEvent(imageSrc,function(loadImg){$entry.data("jg.width",loadImg.width);$entry.data("jg.height",loadImg.height);$entry.data("jg.loaded",true);that.startImgAnalyzer(false)},function(){$entry.data("jg.loaded","error");that.startImgAnalyzer(false)})}else{$entry.data("jg.loaded",true);$entry.data("jg.width",$entry.width()|parseFloat($entry.css("width"))|1);$entry.data("jg.height",$entry.height()|parseFloat($entry.css("height"))|1)}}});if(!imagesToLoad&&!skippedImages)this.startImgAnalyzer(false);this.checkWidth()};JustifiedGallery.prototype.checkOrConvertNumber=function(settingContainer,settingName){if($.type(settingContainer[settingName])==="string"){settingContainer[settingName]=parseFloat(settingContainer[settingName])}if($.type(settingContainer[settingName])==="number"){if(isNaN(settingContainer[settingName]))throw"invalid number for "+settingName}else{throw settingName+" must be a number"}};JustifiedGallery.prototype.checkSizeRangesSuffixes=function(){if($.type(this.settings.sizeRangeSuffixes)!=="object"){throw"sizeRangeSuffixes must be defined and must be an object"}var suffixRanges=[];for(var rangeIdx in this.settings.sizeRangeSuffixes){if(this.settings.sizeRangeSuffixes.hasOwnProperty(rangeIdx))suffixRanges.push(rangeIdx)}var newSizeRngSuffixes={0:""};for(var i=0;i<suffixRanges.length;i++){if($.type(suffixRanges[i])==="string"){try{var numIdx=parseInt(suffixRanges[i].replace(/^[a-z]+/,""),10);newSizeRngSuffixes[numIdx]=this.settings.sizeRangeSuffixes[suffixRanges[i]]}catch(e){throw"sizeRangeSuffixes keys must contains correct numbers ("+e+")"}}else{newSizeRngSuffixes[suffixRanges[i]]=this.settings.sizeRangeSuffixes[suffixRanges[i]]}}this.settings.sizeRangeSuffixes=newSizeRngSuffixes};JustifiedGallery.prototype.retrieveMaxRowHeight=function(){var newMaxRowHeight=null;var rowHeight=this.settings.rowHeight;if($.type(this.settings.maxRowHeight)==="string"){if(this.settings.maxRowHeight.match(/^[0-9]+%$/)){newMaxRowHeight=rowHeight*parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1])/100}else{newMaxRowHeight=parseFloat(this.settings.maxRowHeight)}}else if($.type(this.settings.maxRowHeight)==="number"){newMaxRowHeight=this.settings.maxRowHeight}else if(this.settings.maxRowHeight===false||this.settings.maxRowHeight==null){return null}else{throw"maxRowHeight must be a number or a percentage"}if(isNaN(newMaxRowHeight))throw"invalid number for maxRowHeight";if(newMaxRowHeight<rowHeight)newMaxRowHeight=rowHeight;return newMaxRowHeight};JustifiedGallery.prototype.checkSettings=function(){this.checkSizeRangesSuffixes();this.checkOrConvertNumber(this.settings,"rowHeight");this.checkOrConvertNumber(this.settings,"margins");this.checkOrConvertNumber(this.settings,"border");this.checkOrConvertNumber(this.settings,"maxRowsCount");var lastRowModes=["justify","nojustify","left","center","right","hide"];if(lastRowModes.indexOf(this.settings.lastRow)===-1){throw"lastRow must be one of: "+lastRowModes.join(", ")}this.checkOrConvertNumber(this.settings,"justifyThreshold");if(this.settings.justifyThreshold<0||this.settings.justifyThreshold>1){throw"justifyThreshold must be in the interval [0,1]"}if($.type(this.settings.cssAnimation)!=="boolean"){throw"cssAnimation must be a boolean"}if($.type(this.settings.captions)!=="boolean")throw"captions must be a boolean";this.checkOrConvertNumber(this.settings.captionSettings,"animationDuration");this.checkOrConvertNumber(this.settings.captionSettings,"visibleOpacity");if(this.settings.captionSettings.visibleOpacity<0||this.settings.captionSettings.visibleOpacity>1){throw"captionSettings.visibleOpacity must be in the interval [0, 1]"}this.checkOrConvertNumber(this.settings.captionSettings,"nonVisibleOpacity");if(this.settings.captionSettings.nonVisibleOpacity<0||this.settings.captionSettings.nonVisibleOpacity>1){throw"captionSettings.nonVisibleOpacity must be in the interval [0, 1]"}this.checkOrConvertNumber(this.settings,"imagesAnimationDuration");this.checkOrConvertNumber(this.settings,"refreshTime");this.checkOrConvertNumber(this.settings,"refreshSensitivity");if($.type(this.settings.randomize)!=="boolean")throw"randomize must be a boolean";if($.type(this.settings.selector)!=="string")throw"selector must be a string";if(this.settings.sort!==false&&!$.isFunction(this.settings.sort)){throw"sort must be false or a comparison function"}if(this.settings.filter!==false&&!$.isFunction(this.settings.filter)&&$.type(this.settings.filter)!=="string"){throw"filter must be false, a string or a filter function"}};JustifiedGallery.prototype.retrieveSuffixRanges=function(){var suffixRanges=[];for(var rangeIdx in this.settings.sizeRangeSuffixes){if(this.settings.sizeRangeSuffixes.hasOwnProperty(rangeIdx))suffixRanges.push(parseInt(rangeIdx,10))}suffixRanges.sort(function(a,b){return a>b?1:a<b?-1:0});return suffixRanges};JustifiedGallery.prototype.updateSettings=function(newSettings){this.settings=$.extend({},this.settings,newSettings);this.checkSettings();this.border=this.settings.border>=0?this.settings.border:this.settings.margins;this.maxRowHeight=this.retrieveMaxRowHeight();this.suffixRanges=this.retrieveSuffixRanges()};JustifiedGallery.prototype.defaults={sizeRangeSuffixes:{},thumbnailPath:undefined,rowHeight:120,maxRowHeight:false,maxRowsCount:0,margins:1,border:-1,lastRow:"nojustify",justifyThreshold:.9,waitThumbnailsLoad:true,captions:true,cssAnimation:true,imagesAnimationDuration:500,captionSettings:{animationDuration:500,visibleOpacity:.7,nonVisibleOpacity:0},rel:null,target:null,extension:/\.[^.\\/]+$/,refreshTime:200,refreshSensitivity:0,randomize:false,rtl:false,sort:false,filter:false,selector:"a",imgSelector:"> img, > a > img, > svg, > a > svg",triggerEvent:function(event){this.$gallery.trigger(event)}};$.fn.justifiedGallery=function(arg){return this.each(function(index,gallery){var $gallery=$(gallery);$gallery.addClass("justified-gallery");var controller=$gallery.data("jg.controller");if(typeof controller==="undefined"){if(typeof arg!=="undefined"&&arg!==null&&$.type(arg)!=="object"){if(arg==="destroy")return;throw"The argument must be an object"}controller=new JustifiedGallery($gallery,$.extend({},JustifiedGallery.prototype.defaults,arg));$gallery.data("jg.controller",controller)}else if(arg==="norewind"){}else if(arg==="destroy"){controller.destroy();return}else{controller.updateSettings(arg);controller.rewind()}if(!controller.updateEntries(arg==="norewind"))return;controller.init()})}});

!function(a){"use strict";"object"==typeof exports?module.exports=a(window.jQuery):"function"==typeof define&&define.amd?define(["jquery"],a):window.jQuery&&!window.jQuery.fn.colorpicker&&a(window.jQuery)}(function(a){"use strict";var b=function(b,c){this.value={h:0,s:0,b:0,a:1},this.origFormat=null,c&&a.extend(this.colors,c),b&&(void 0!==b.toLowerCase?(b+="",this.setColor(b)):void 0!==b.h&&(this.value=b))};b.prototype={constructor:b,colors:{aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32",transparent:"transparent"},_sanitizeNumber:function(a){return"number"==typeof a?a:isNaN(a)||null===a||""===a||void 0===a?1:void 0!==a.toLowerCase?parseFloat(a):1},isTransparent:function(a){return a?(a=a.toLowerCase().trim(),"transparent"===a||a.match(/#?00000000/)||a.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/)):!1},rgbaIsTransparent:function(a){return 0===a.r&&0===a.g&&0===a.b&&0===a.a},setColor:function(a){a=a.toLowerCase().trim(),a&&(this.isTransparent(a)?this.value={h:0,s:0,b:0,a:0}:this.value=this.stringToHSB(a)||{h:0,s:0,b:0,a:1})},stringToHSB:function(b){b=b.toLowerCase();var c;"undefined"!=typeof this.colors[b]&&(b=this.colors[b],c="alias");var d=this,e=!1;return a.each(this.stringParsers,function(a,f){var g=f.re.exec(b),h=g&&f.parse.apply(d,[g]),i=c||f.format||"rgba";return h?(e=i.match(/hsla?/)?d.RGBtoHSB.apply(d,d.HSLtoRGB.apply(d,h)):d.RGBtoHSB.apply(d,h),d.origFormat=i,!1):!0}),e},setHue:function(a){this.value.h=1-a},setSaturation:function(a){this.value.s=a},setBrightness:function(a){this.value.b=1-a},setAlpha:function(a){this.value.a=parseInt(100*(1-a),10)/100},toRGB:function(a,b,c,d){a||(a=this.value.h,b=this.value.s,c=this.value.b),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-Math.abs(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],{r:Math.round(255*e),g:Math.round(255*f),b:Math.round(255*g),a:d||this.value.a}},toHex:function(a,b,c,d){var e=this.toRGB(a,b,c,d);return this.rgbaIsTransparent(e)?"transparent":"#"+(1<<24|parseInt(e.r)<<16|parseInt(e.g)<<8|parseInt(e.b)).toString(16).substr(1)},toHSL:function(a,b,c,d){a=a||this.value.h,b=b||this.value.s,c=c||this.value.b,d=d||this.value.a;var e=a,f=(2-b)*c,g=b*c;return g/=f>0&&1>=f?f:2-f,f/=2,g>1&&(g=1),{h:isNaN(e)?0:e,s:isNaN(g)?0:g,l:isNaN(f)?0:f,a:isNaN(d)?0:d}},toAlias:function(a,b,c,d){var e=this.toHex(a,b,c,d);for(var f in this.colors)if(this.colors[f]===e)return f;return!1},RGBtoHSB:function(a,b,c,d){a/=255,b/=255,c/=255;var e,f,g,h;return g=Math.max(a,b,c),h=g-Math.min(a,b,c),e=0===h?null:g===a?(b-c)/h:g===b?(c-a)/h+2:(a-b)/h+4,e=(e+360)%6*60/360,f=0===h?0:h/g,{h:this._sanitizeNumber(e),s:f,b:g,a:this._sanitizeNumber(d)}},HueToRGB:function(a,b,c){return 0>c?c+=1:c>1&&(c-=1),1>6*c?a+(b-a)*c*6:1>2*c?b:2>3*c?a+(b-a)*(2/3-c)*6:a},HSLtoRGB:function(a,b,c,d){0>b&&(b=0);var e;e=.5>=c?c*(1+b):c+b-c*b;var f=2*c-e,g=a+1/3,h=a,i=a-1/3,j=Math.round(255*this.HueToRGB(f,e,g)),k=Math.round(255*this.HueToRGB(f,e,h)),l=Math.round(255*this.HueToRGB(f,e,i));return[j,k,l,this._sanitizeNumber(d)]},toString:function(a){a=a||"rgba";var b=!1;switch(a){case"rgb":return b=this.toRGB(),this.rgbaIsTransparent(b)?"transparent":"rgb("+b.r+","+b.g+","+b.b+")";case"rgba":return b=this.toRGB(),"rgba("+b.r+","+b.g+","+b.b+","+b.a+")";case"hsl":return b=this.toHSL(),"hsl("+Math.round(360*b.h)+","+Math.round(100*b.s)+"%,"+Math.round(100*b.l)+"%)";case"hsla":return b=this.toHSL(),"hsla("+Math.round(360*b.h)+","+Math.round(100*b.s)+"%,"+Math.round(100*b.l)+"%,"+b.a+")";case"hex":return this.toHex();case"alias":return this.toAlias()||this.toHex();default:return b}},stringParsers:[{re:/rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,format:"rgb",parse:function(a){return[a[1],a[2],a[3],1]}},{re:/rgb\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,format:"rgb",parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],1]}},{re:/rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/hsl\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,format:"hsl",parse:function(a){return[a[1]/360,a[2]/100,a[3]/100,a[4]]}},{re:/hsla\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:"hsla",parse:function(a){return[a[1]/360,a[2]/100,a[3]/100,a[4]]}},{re:/#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,format:"hex",parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16),1]}},{re:/#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,format:"hex",parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16),1]}}],colorNameToHex:function(a){return"undefined"!=typeof this.colors[a.toLowerCase()]?this.colors[a.toLowerCase()]:!1}};var c={horizontal:!1,inline:!1,color:!1,format:!1,input:"input",container:!1,component:".add-on, .input-group-addon",sliders:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setHue"},alpha:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setAlpha"}},slidersHorz:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:100,maxTop:0,callLeft:"setHue",callTop:!1},alpha:{maxLeft:100,maxTop:0,callLeft:"setAlpha",callTop:!1}},template:'<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div><div class="colorpicker-selectors"></div></div>',align:"right",customClass:null,colorSelectors:null},d=function(d,e){if(this.element=a(d).addClass("colorpicker-element"),this.options=a.extend(!0,{},c,this.element.data(),e),this.component=this.options.component,this.component=this.component!==!1?this.element.find(this.component):!1,this.component&&0===this.component.length&&(this.component=!1),this.container=this.options.container===!0?this.element:this.options.container,this.container=this.container!==!1?a(this.container):!1,this.input=this.element.is("input")?this.element:this.options.input?this.element.find(this.options.input):!1,this.input&&0===this.input.length&&(this.input=!1),this.color=new b(this.options.color!==!1?this.options.color:this.getValue(),this.options.colorSelectors),this.format=this.options.format!==!1?this.options.format:this.color.origFormat,this.options.color!==!1&&(this.updateInput(this.color),this.updateData(this.color)),this.picker=a(this.options.template),this.options.customClass&&this.picker.addClass(this.options.customClass),this.options.inline?this.picker.addClass("colorpicker-inline colorpicker-visible"):this.picker.addClass("colorpicker-hidden"),this.options.horizontal&&this.picker.addClass("colorpicker-horizontal"),("rgba"===this.format||"hsla"===this.format||this.options.format===!1)&&this.picker.addClass("colorpicker-with-alpha"),"right"===this.options.align&&this.picker.addClass("colorpicker-right"),this.options.inline===!0&&this.picker.addClass("colorpicker-no-arrow"),this.options.colorSelectors){var f=this;a.each(this.options.colorSelectors,function(b,c){var d=a("<i />").css("background-color",c).data("class",b);d.click(function(){f.setValue(a(this).css("background-color"))}),f.picker.find(".colorpicker-selectors").append(d)}),this.picker.find(".colorpicker-selectors").show()}this.picker.on("mousedown.colorpicker touchstart.colorpicker",a.proxy(this.mousedown,this)),this.picker.appendTo(this.container?this.container:a("body")),this.input!==!1&&(this.input.on({"keyup.colorpicker":a.proxy(this.keyup,this)}),this.input.on({"change.colorpicker":a.proxy(this.change,this)}),this.component===!1&&this.element.on({"focus.colorpicker":a.proxy(this.show,this)}),this.options.inline===!1&&this.element.on({"focusout.colorpicker":a.proxy(this.hide,this)})),this.component!==!1&&this.component.on({"click.colorpicker":a.proxy(this.show,this)}),this.input===!1&&this.component===!1&&this.element.on({"click.colorpicker":a.proxy(this.show,this)}),this.input!==!1&&this.component!==!1&&"color"===this.input.attr("type")&&this.input.on({"click.colorpicker":a.proxy(this.show,this),"focus.colorpicker":a.proxy(this.show,this)}),this.update(),a(a.proxy(function(){this.element.trigger("create")},this))};d.Color=b,d.prototype={constructor:d,destroy:function(){this.picker.remove(),this.element.removeData("colorpicker").off(".colorpicker"),this.input!==!1&&this.input.off(".colorpicker"),this.component!==!1&&this.component.off(".colorpicker"),this.element.removeClass("colorpicker-element"),this.element.trigger({type:"destroy"})},reposition:function(){if(this.options.inline!==!1||this.options.container)return!1;var a=this.container&&this.container[0]!==document.body?"position":"offset",b=this.component||this.element,c=b[a]();"right"===this.options.align&&(c.left-=this.picker.outerWidth()-b.outerWidth()),this.picker.css({top:c.top+b.outerHeight(),left:c.left})},show:function(b){return this.isDisabled()?!1:(this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"),this.reposition(),a(window).on("resize.colorpicker",a.proxy(this.reposition,this)),!b||this.hasInput()&&"color"!==this.input.attr("type")||b.stopPropagation&&b.preventDefault&&(b.stopPropagation(),b.preventDefault()),this.options.inline===!1&&a(window.document).on({"mousedown.colorpicker":a.proxy(this.hide,this)}),void this.element.trigger({type:"showPicker",color:this.color}))},hide:function(){this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"),a(window).off("resize.colorpicker",this.reposition),a(document).off({"mousedown.colorpicker":this.hide}),this.update(),this.element.trigger({type:"hidePicker",color:this.color})},updateData:function(a){return a=a||this.color.toString(this.format),this.element.data("color",a),a},updateInput:function(a){if(a=a||this.color.toString(this.format),this.input!==!1){if(this.options.colorSelectors){var c=new b(a,this.options.colorSelectors),d=c.toAlias();"undefined"!=typeof this.options.colorSelectors[d]&&(a=d)}this.input.prop("value",a)}return a},updatePicker:function(a){void 0!==a&&(this.color=new b(a,this.options.colorSelectors));var c=this.options.horizontal===!1?this.options.sliders:this.options.slidersHorz,d=this.picker.find("i");return 0!==d.length?(this.options.horizontal===!1?(c=this.options.sliders,d.eq(1).css("top",c.hue.maxTop*(1-this.color.value.h)).end().eq(2).css("top",c.alpha.maxTop*(1-this.color.value.a))):(c=this.options.slidersHorz,d.eq(1).css("left",c.hue.maxLeft*(1-this.color.value.h)).end().eq(2).css("left",c.alpha.maxLeft*(1-this.color.value.a))),d.eq(0).css({top:c.saturation.maxTop-this.color.value.b*c.saturation.maxTop,left:this.color.value.s*c.saturation.maxLeft}),this.picker.find(".colorpicker-saturation").css("backgroundColor",this.color.toHex(this.color.value.h,1,1,1)),this.picker.find(".colorpicker-alpha").css("backgroundColor",this.color.toHex()),this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor",this.color.toString(this.format)),a):void 0},updateComponent:function(a){if(a=a||this.color.toString(this.format),this.component!==!1){var b=this.component.find("i").eq(0);b.length>0?b.css({backgroundColor:a}):this.component.css({backgroundColor:a})}return a},update:function(a){var b;return(this.getValue(!1)!==!1||a===!0)&&(b=this.updateComponent(),this.updateInput(b),this.updateData(b),this.updatePicker()),b},setValue:function(a){this.color=new b(a,this.options.colorSelectors),this.update(!0),this.element.trigger({type:"changeColor",color:this.color,value:a})},getValue:function(a){a=void 0===a?"#000000":a;var b;return b=this.hasInput()?this.input.val():this.element.data("color"),(void 0===b||""===b||null===b)&&(b=a),b},hasInput:function(){return this.input!==!1},isDisabled:function(){return this.hasInput()?this.input.prop("disabled")===!0:!1},disable:function(){return this.hasInput()?(this.input.prop("disabled",!0),this.element.trigger({type:"disable",color:this.color,value:this.getValue()}),!0):!1},enable:function(){return this.hasInput()?(this.input.prop("disabled",!1),this.element.trigger({type:"enable",color:this.color,value:this.getValue()}),!0):!1},currentSlider:null,mousePointer:{left:0,top:0},mousedown:function(b){b.pageX||b.pageY||!b.originalEvent||(b.pageX=b.originalEvent.touches[0].pageX,b.pageY=b.originalEvent.touches[0].pageY),b.stopPropagation(),b.preventDefault();var c=a(b.target),d=c.closest("div"),e=this.options.horizontal?this.options.slidersHorz:this.options.sliders;if(!d.is(".colorpicker")){if(d.is(".colorpicker-saturation"))this.currentSlider=a.extend({},e.saturation);else if(d.is(".colorpicker-hue"))this.currentSlider=a.extend({},e.hue);else{if(!d.is(".colorpicker-alpha"))return!1;this.currentSlider=a.extend({},e.alpha)}var f=d.offset();this.currentSlider.guide=d.find("i")[0].style,this.currentSlider.left=b.pageX-f.left,this.currentSlider.top=b.pageY-f.top,this.mousePointer={left:b.pageX,top:b.pageY},a(document).on({"mousemove.colorpicker":a.proxy(this.mousemove,this),"touchmove.colorpicker":a.proxy(this.mousemove,this),"mouseup.colorpicker":a.proxy(this.mouseup,this),"touchend.colorpicker":a.proxy(this.mouseup,this)}).trigger("mousemove")}return!1},mousemove:function(a){a.pageX||a.pageY||!a.originalEvent||(a.pageX=a.originalEvent.touches[0].pageX,a.pageY=a.originalEvent.touches[0].pageY),a.stopPropagation(),a.preventDefault();var b=Math.max(0,Math.min(this.currentSlider.maxLeft,this.currentSlider.left+((a.pageX||this.mousePointer.left)-this.mousePointer.left))),c=Math.max(0,Math.min(this.currentSlider.maxTop,this.currentSlider.top+((a.pageY||this.mousePointer.top)-this.mousePointer.top)));return this.currentSlider.guide.left=b+"px",this.currentSlider.guide.top=c+"px",this.currentSlider.callLeft&&this.color[this.currentSlider.callLeft].call(this.color,b/this.currentSlider.maxLeft),this.currentSlider.callTop&&this.color[this.currentSlider.callTop].call(this.color,c/this.currentSlider.maxTop),"setAlpha"===this.currentSlider.callTop&&this.options.format===!1&&(1!==this.color.value.a?(this.format="rgba",this.color.origFormat="rgba"):(this.format="hex",this.color.origFormat="hex")),this.update(!0),this.element.trigger({type:"changeColor",color:this.color}),!1},mouseup:function(b){return b.stopPropagation(),b.preventDefault(),a(document).off({"mousemove.colorpicker":this.mousemove,"touchmove.colorpicker":this.mousemove,"mouseup.colorpicker":this.mouseup,"touchend.colorpicker":this.mouseup}),!1},change:function(a){this.keyup(a)},keyup:function(a){38===a.keyCode?(this.color.value.a<1&&(this.color.value.a=Math.round(100*(this.color.value.a+.01))/100),this.update(!0)):40===a.keyCode?(this.color.value.a>0&&(this.color.value.a=Math.round(100*(this.color.value.a-.01))/100),this.update(!0)):(this.color=new b(this.input.val(),this.options.colorSelectors),this.color.origFormat&&this.options.format===!1&&(this.format=this.color.origFormat),this.getValue(!1)!==!1&&(this.updateData(),this.updateComponent(),this.updatePicker())),this.element.trigger({type:"changeColor",color:this.color,value:this.input.val()})}},a.colorpicker=d,a.fn.colorpicker=function(b){var c,e=arguments,f=this.each(function(){var f=a(this),g=f.data("colorpicker"),h="object"==typeof b?b:{};g||"string"==typeof b?"string"==typeof b&&(c=g[b].apply(g,Array.prototype.slice.call(e,1))):f.data("colorpicker",new d(this,h))});return"getValue"===b?c:f},a.fn.colorpicker.constructor=d});
/*	jQuery.flexMenu 1.3
	https://github.com/352Media/flexMenu
	Description: If a list is too long for all items to fit on one line, display a popup menu instead.
	Dependencies: jQuery, Modernizr (optional). Without Modernizr, the menu can only be shown on click (not hover). */

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {
	var flexObjects = [], // Array of all flexMenu objects
		resizeTimeout;
	// When the page is resized, adjust the flexMenus.
	function adjustFlexMenu() {
		$(flexObjects).each(function () {
			$(this).flexMenu({
				'undo' : true,
				'target': this.options.target ? this.options.target : false
			}).flexMenu(this.options);
		});
	}
	function collapseAllExcept($menuToAvoid) {
		var $activeMenus,
			$menusToCollapse;
		$activeMenus = $('li.flexMenu-viewMore.active');
		$menusToCollapse = $activeMenus.not($menuToAvoid);
		$menusToCollapse.removeClass('active').find('> ul').hide();
	}
	$(window).resize(function () {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function () {
			adjustFlexMenu();
		}, 200);
	});
	$.fn.flexMenu = function (options) {
		var checkFlexObject,
			s = $.extend({
				'threshold' : 2, // [integer] If there are this many items or fewer in the list, we will not display a "View More" link and will instead let the list break to the next line. This is useful in cases where adding a "view more" link would actually cause more things to break  to the next line.
				'cutoff' : 2, // [integer] If there is space for this many or fewer items outside our "more" popup, just move everything into the more menu. In that case, also use linkTextAll and linkTitleAll instead of linkText and linkTitle. To disable this feature, just set this value to 0.
				'linkText' : 'More', // [string] What text should we display on the "view more" link?
				'linkTitle' : 'View More', // [string] What should the title of the "view more" button be?
				'linkTextAll' : 'Menu', // [string] If we hit the cutoff, what text should we display on the "view more" link?
				'linkTitleAll' : 'Open/Close Menu', // [string] If we hit the cutoff, what should the title of the "view more" button be?
				'showOnHover' : true, // [boolean] Should we we show the menu on hover? If not, we'll require a click. If we're on a touch device - or if Modernizr is not available - we'll ignore this setting and only show the menu on click. The reason for this is that touch devices emulate hover events in unpredictable ways, causing some taps to do nothing.
				'popupAbsolute' : true, // [boolean] Should we absolutely position the popup? Usually this is a good idea. That way, the popup can appear over other content and spill outside a parent that has overflow: hidden set. If you want to do something different from this in CSS, just set this option to false.
				'popupClass' : '', // [string] If this is set, this class will be added to the popup
				'undo' : false, // [boolean] Move the list items back to where they were before, and remove the "View More" link.
				'target': false // Maybe add a target option to define where to place the removed nav items
			}, options);
		this.options = s; // Set options on object
		checkFlexObject = $.inArray(this, flexObjects); // Checks if this object is already in the flexObjects array
		if (checkFlexObject >= 0) {
			flexObjects.splice(checkFlexObject, 1); // Remove this object if found
		} else {
			flexObjects.push(this); // Add this object to the flexObjects array
		}
		if(s.target)
			$(s.target).hide();
		return this.each(function () {
			var $this = $(this),
				$items = $this.find('> li'),
				$self = $this,
				$firstItem = $items.first(),
				$lastItem = $items.last(),
				numItems = $this.find('li').length,
				firstItemTop = Math.floor($firstItem.offset().top),
				firstItemHeight = Math.floor($firstItem.outerHeight(true)),
				$lastChild,
				keepLooking,
				$moreItem,
				$moreLink,
				numToRemove,
				allInPopup = false,
				$menu,
				$target = s.target,
				i;
			function needsMenu($itemOfInterest) {
				var result = (Math.ceil($itemOfInterest.offset().top) >= (firstItemTop + firstItemHeight)) ? true : false;
				// Values may be calculated from em and give us something other than round numbers. Browsers may round these inconsistently. So, let's round numbers to make it easier to trigger flexMenu.
				return result;
			}
			if (needsMenu($lastItem) && numItems > s.threshold && !s.undo && $this.is(':visible')) {
				var $popup = $('<ul class="flexMenu-popup" style="display:none;' + ((s.popupAbsolute) ? ' position: absolute;' : '') + '"></ul>'),
				// Move all list items after the first to this new popup ul
					firstItemOffset = $firstItem.offset().top;
				// Add class if popupClass option is set
				$popup.addClass(s.popupClass);

				if($target){
					$popup = $('<ul class="flexMenu-popup ' + s.popupClass + '"></ul>')
						$popup.appendTo($($target));
						$($target).show();
				}

				for (i = numItems; i > 1; i--) {
						// Find all of the list items that have been pushed below the first item. Put those items into the popup menu. Put one additional item into the popup menu to cover situations where the last item is shorter than the "more" text.
						$lastChild = $this.find('> li:last-child');
						keepLooking = (needsMenu($lastChild));
						$lastChild.appendTo($popup);
						// If there only a few items left in the navigation bar, move them all to the popup menu.
						if ((i - 1) <= s.cutoff) { // We've removed the ith item, so i - 1 gives us the number of items remaining.
							$($this.children().get().reverse()).appendTo($popup);
							allInPopup = true;
							break;
						}
						if (!keepLooking) {
							break;
						}
				}

				if(!$target){
					if (allInPopup) {
						$this.append('<li class="flexMenu-viewMore flexMenu-allInPopup"><a href="#" title="' + s.linkTitleAll + '">' + s.linkTextAll + '</a></li>');
					} else {
						$this.append('<li class="flexMenu-viewMore"><a href="#" title="' + s.linkTitle + '">' + s.linkText + '</a></li>');
					}
					$moreItem = $this.find('> li.flexMenu-viewMore');
					/// Check to see whether the more link has been pushed down. This might happen if the link immediately before it is especially wide.
					if (needsMenu($moreItem)) {
						$this.find('> li:nth-last-child(2)').appendTo($popup);
					}
					// Our popup menu is currently in reverse order. Let's fix that.
					$popup.children().each(function (i, li) {
						$popup.prepend(li);
					});
					$moreItem.append($popup);
					$moreLink = $this.find('> li.flexMenu-viewMore > a');
					$moreLink.click(function (e) {
						// Collapsing any other open flexMenu
						collapseAllExcept($moreItem);
						//Open and Set active the one being interacted with.
						$popup.toggle();
						$moreItem.toggleClass('active');
						e.preventDefault();
					});
					if (s.showOnHover && (typeof Modernizr !== 'undefined') && !Modernizr.touch) { // If requireClick is false AND touch is unsupported, then show the menu on hover. If Modernizr is not available, assume that touch is unsupported. Through the magic of lazy evaluation, we can check for Modernizr and start using it in the same if statement. Reversing the order of these variables would produce an error.
						$moreItem.hover(
							function () {
								$popup.show();
								$(this).addClass('active');
							},
							function () {
								$popup.hide();
								$(this).removeClass('active');
							});
					}
				}
			} else if (s.undo) {
				$menu = $target ? $($target).find('ul.flexMenu-popup') : $this.find('ul.flexMenu-popup');
				if($menu.length){
					numToRemove = $menu.find('li').length;
					for (i = 1; i <= numToRemove; i++) {
						$menu.find('> li:first-child').appendTo($this);
					}
					$menu.remove();
					$target ? $($target).find('> li.flexMenu-viewMore').remove() : $this.find('> li.flexMenu-viewMore').remove();
				}
			}
		});
	};
}));

/*
 * jQuery ScrollSpy Plugin
 * Author: @sxalexander, softwarespot
 * Licensed under the MIT license
 */
(function jQueryScrollspy(window, $) {
    // Plugin Logic

    $.fn.extend({
        scrollspy: function scrollspy(options, action) {
            // If the options parameter is a string, then assume it's an 'action', therefore swap the parameters around
            if (_isString(options)) {
                var tempOptions = action;

                // Set the action as the option parameter
                action = options;

                // Set to be the reference action pointed to
                options = tempOptions;
            }

            // override the default options with those passed to the plugin
            options = $.extend({}, _defaults, options);

            // sanitize the following option with the default value if the predicate fails
            _sanitizeOption(options, _defaults, 'container', _isObject);

            // cache the jQuery object
            var $container = $(options.container);

            // check if it's a valid jQuery selector
            if ($container.length === 0) {
                return this;
            }

            // sanitize the following option with the default value if the predicate fails
            _sanitizeOption(options, _defaults, 'namespace', _isString);

            // check if the action is set to DESTROY/destroy
            if (_isString(action) && action.toUpperCase() === 'DESTROY') {
                $container.off('scroll.' + options.namespace);
                return this;
            }

            // sanitize the following options with the default values if the predicates fails
            _sanitizeOption(options, _defaults, 'buffer', $.isNumeric);
            _sanitizeOption(options, _defaults, 'max', $.isNumeric);
            _sanitizeOption(options, _defaults, 'min', $.isNumeric);

            // callbacks
            _sanitizeOption(options, _defaults, 'onEnter', $.isFunction);
            _sanitizeOption(options, _defaults, 'onLeave', $.isFunction);
            _sanitizeOption(options, _defaults, 'onLeaveTop', $.isFunction);
            _sanitizeOption(options, _defaults, 'onLeaveBottom', $.isFunction);
            _sanitizeOption(options, _defaults, 'onTick', $.isFunction);

            if ($.isFunction(options.max)) {
                options.max = options.max();
            }

            if ($.isFunction(options.min)) {
                options.min = options.min();
            }

            // check if the mode is set to VERTICAL/vertical
            var isVertical = window.String(options.mode).toUpperCase() === 'VERTICAL';

            return this.each(function each() {
                // cache this
                var _this = this;

                // cache the jQuery object
                var $element = $(_this);

                // count the number of times a container is entered
                var enters = 0;

                // determine if the scroll is with inside the container
                var inside = false;

                // count the number of times a container is left
                var leaves = 0;

                // create a scroll listener for the container
                $container.on('scroll.' + options.namespace, function onScroll() {
                    // cache the jQuery object
                    var $this = $(this);

                    // create a position object literal
                    var position = {
                        top: $this.scrollTop(),
                        left: $this.scrollLeft(),
                    };

                    var containerHeight = $container.height();

                    var max = options.max;

                    var min = options.min;

                    var xAndY = isVertical ? position.top + options.buffer : position.left + options.buffer;

                    if (max === 0) {
                        // get the maximum value based on either the height or the outer width
                        max = isVertical ? containerHeight : $container.outerWidth() + $element.outerWidth();
                    }

                    // if we have reached the minimum bound, though are below the max
                    if (xAndY >= min && xAndY <= max) {
                        // trigger the 'scrollEnter' event
                        if (!inside) {
                            inside = true;
                            enters++;

                            // trigger the 'scrollEnter' event
                            $element.trigger('scrollEnter', {
                                position: position,
                            });

                            // call the 'onEnter' function
                            if (options.onEnter !== null) {
                                options.onEnter(_this, position);
                            }
                        }

                        // trigger the 'scrollTick' event
                        $element.trigger('scrollTick', {
                            position: position,
                            inside: inside,
                            enters: enters,
                            leaves: leaves,
                        });

                        // call the 'onTick' function
                        if (options.onTick !== null) {
                            options.onTick(_this, position, inside, enters, leaves);
                        }
                    } else {
                        if (inside) {
                            inside = false;
                            leaves++;

                            // trigger the 'scrollLeave' event
                            $element.trigger('scrollLeave', {
                                position: position,
                                leaves: leaves,
                            });

                            // call the 'onLeave' function
                            if (options.onLeave !== null) {
                                options.onLeave(_this, position);
                            }

                            if (xAndY <= min) {
                                // trigger the 'scrollLeaveTop' event
                                $element.trigger('scrollLeaveTop', {
                                    position: position,
                                    leaves: leaves,
                                });

                                // call the 'onLeaveTop' function
                                if (options.onLeaveTop !== null) {
                                    options.onLeaveTop(_this, position);
                                }
                            } else if (xAndY >= max) {
                                // trigger the 'scrollLeaveBottom' event
                                $element.trigger('scrollLeaveBottom', {
                                    position: position,
                                    leaves: leaves,
                                });

                                // call the 'onLeaveBottom' function
                                if (options.onLeaveBottom !== null) {
                                    options.onLeaveBottom(_this, position);
                                }
                            }
                        } else {
                            // Idea taken from: http://stackoverflow.com/questions/5353934/check-if-element-is-visible-on-screen
                            var containerScrollTop = $container.scrollTop();

                            // Get the element height
                            var elementHeight = $element.height();

                            // Get the element offset
                            var elementOffsetTop = $element.offset().top;

                            if ((elementOffsetTop < (containerHeight + containerScrollTop)) && (elementOffsetTop > (containerScrollTop - elementHeight))) {
                                // trigger the 'scrollView' event
                                $element.trigger('scrollView', {
                                    position: position,
                                });

                                // call the 'onView' function
                                if (options.onView !== null) {
                                    options.onView(_this, position);
                                }
                            }
                        }
                    }
                });
            });
        },
    });

    // Fields (Private)

    // Defaults

    // default options
    var _defaults = {
        // the offset to be applied to the left and top positions of the container
        buffer: 0,

        // the element to apply the 'scrolling' event to (default window)
        container: window,

        // the maximum value of the X or Y coordinate, depending on mode the selected
        max: 0,

        // the maximum value of the X or Y coordinate, depending on mode the selected
        min: 0,

        // whether to listen to the X (horizontal) or Y (vertical) scrolling
        mode: 'vertical',

        // namespace to append to the 'scroll' event
        namespace: 'scrollspy',

        // call the following callback function every time the user enters the min / max zone
        onEnter: null,

        // call the following callback function every time the user leaves the min / max zone
        onLeave: null,

        // call the following callback function every time the user leaves the top zone
        onLeaveTop: null,

        // call the following callback function every time the user leaves the bottom zone
        onLeaveBottom: null,

        // call the following callback function on each scroll event within the min and max parameters
        onTick: null,

        // call the following callback function on each scroll event when the element is inside the viewable view port
        onView: null,
    };

    // Methods (Private)

    // check if a value is an object datatype
    function _isObject(value) {
        return $.type(value) === 'object';
    }

    // check if a value is a string datatype with a length greater than zero when whitespace is stripped
    function _isString(value) {
        return $.type(value) === 'string' && $.trim(value).length > 0;
    }

    // check if an option is correctly formatted using a predicate; otherwise, return the default value
    function _sanitizeOption(options, defaults, property, predicate) {
        // set the property to the default value if the predicate returned false
        if (!predicate(options[property])) {
            options[property] = defaults[property];
        }
    }
}(window, window.jQuery));

/*!
	Autosize 3.0.17
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.autosize=n.exports}}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),l="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(l)&&(l=0),a()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t,r()}function o(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function r(){var t=e.style.height,n=o(e),r=document.documentElement&&document.documentElement.scrollTop;e.style.height="auto";var i=e.scrollHeight+l;return 0===e.scrollHeight?void(e.style.height=t):(e.style.height=i+"px",s=e.clientWidth,n.forEach(function(e){e.node.scrollTop=e.scrollTop}),void(r&&(document.documentElement.scrollTop=r)))}function a(){r();var t=window.getComputedStyle(e,null),o=Math.round(parseFloat(t.height)),i=Math.round(parseFloat(e.style.height));if(o!==i?"visible"!==t.overflowY&&n("visible"):"hidden"!==t.overflowY&&n("hidden"),u!==o){u=o;var a=d("autosize:resized");e.dispatchEvent(a)}}if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!i.has(e)){var l=null,s=e.clientWidth,u=null,c=function(){e.clientWidth!==s&&a()},p=function(t){window.removeEventListener("resize",c,!1),e.removeEventListener("input",a,!1),e.removeEventListener("keyup",a,!1),e.removeEventListener("autosize:destroy",p,!1),e.removeEventListener("autosize:update",a,!1),i["delete"](e),Object.keys(t).forEach(function(n){e.style[n]=t[n]})}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",p,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",a,!1),window.addEventListener("resize",c,!1),e.addEventListener("input",a,!1),e.addEventListener("autosize:update",a,!1),i.add(e),e.style.overflowX="hidden",e.style.wordWrap="break-word",t()}}function o(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=d("autosize:destroy");e.dispatchEvent(t)}}function r(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=d("autosize:update");e.dispatchEvent(t)}}var i="function"==typeof Set?new Set:function(){var e=[];return{has:function(t){return Boolean(e.indexOf(t)>-1)},add:function(t){e.push(t)},"delete":function(t){e.splice(e.indexOf(t),1)}}}(),d=function(e){return new Event(e)};try{new Event("test")}catch(a){d=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(l=function(e){return e},l.destroy=function(e){return e},l.update=function(e){return e}):(l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e},l.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],r),e}),t.exports=l});
/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);

// SPDX-FileCopyrightText: 2010-2024 the Friendica project
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPLv3-or-later

var jotcache = ""; //The jot cache. We use it as cache to restore old/original jot content

$(document).ready(function () {
	// Destroy unused perfect scrollbar in aside element
	$("aside").perfectScrollbar("destroy");

	//fade in/out based on scrollTop value
	var scrollStart;

	$(window).scroll(function () {
		let currentScroll = $(this).scrollTop();

		// Top of the page or going up = hide the button
		if (!scrollStart || !currentScroll || currentScroll < scrollStart) {
			$("#back-to-top").fadeOut();
			scrollStart = currentScroll;
		}

		// Going down enough = show the button
		if (currentScroll - scrollStart > 100) {
			$("#back-to-top").fadeIn();
			scrollStart = currentScroll;
		}
	});

	// scroll body to 0px on click
	$("#back-to-top").click(function () {
		$("body,html").animate(
			{
				scrollTop: 0,
			},
			400,
		);
		return false;
	});

	// add the class "selected" to circle widgets li if li > a does have the class circle-selected
	if ($("#sidebar-circle-ul li a").hasClass("circle-selected")) {
		$("#sidebar-circle-ul li a.circle-selected").parent("li").addClass("selected");
	}

	// add the class "selected" to groups widgets li if li > a does have the class group-selected
	if ($("#group-list-sidebar-ul li a").hasClass("group-selected")) {
		$("#group-list-sidebar-ul li a.group-selected").parent("li").addClass("selected");
	}

	// add the class "active" to tabmenuli if li > a does have the class active
	if ($("#tabmenu ul li a").hasClass("active")) {
		$("#tabmenu ul li a.active").parent("li").addClass("active");
	}

	// give select fields Bootstrap classes
	// @todo: this needs to be changed in friendica core
	$(".field.select, .field.custom").addClass("form-group");
	$(".field.select > select, .field.custom > select").addClass("form-control");

	// move the tabbar to the second nav bar
	$("section .tabbar-wrapper").first().appendTo("#topbar-second > .container > #tabmenu");

	// make responsive tabmenu with flexmenu.js
	// the menupoints which doesn't fit in the second nav bar will moved to a
	// dropdown menu. Look at common_tabs.tpl
	$("ul.tabs.flex-nav").flexMenu({
		cutoff: 2,
		popupClass: "dropdown-menu pull-right",
		popupAbsolute: false,
		target: ".flex-target",
	});

	// add Jot button to the second navbar
	let $jotButton = $("#jotOpen");
	if ($jotButton.length) {
		$jotButton.appendTo("#topbar-second > .container > #navbar-button");
		if ($("#jot-popup").is(":hidden")) {
			$jotButton.hide();
		}
		if ($jotButton.hasClass('modal-open')) {
			$jotButton.on("click", function (e) {
				e.preventDefault();
				jotShow();
			});
		}
	}

	let $body = $("body");

	// show bulk deletion button at network page if checkbox is checked
	$body.change("input.item-select", function () {
		var checked = false;

		// We need to get all checked items, so it would close the delete button
		// if we uncheck one item and others are still checked.
		// So return checked = true if there is any checked item
		$("input.item-select").each(function () {
			if ($(this).is(":checked")) {
				checked = true;
				return false;
			}
		});

		if (checked) {
			$("#item-delete-selected").fadeTo(400, 1);
			$("#item-delete-selected").show();
		} else {
			$("#item-delete-selected").fadeTo(400, 0, function () {
				$("#item-delete-selected").hide();
			});
		}
	});

	// initialize the Bootstrap tooltips
	$body.tooltip({
		selector: '[data-toggle="tooltip"]',
		container: "body",
		animation: true,
		html: true,
		placement: "auto",
		trigger: "hover",
		delay: {
			show: 500,
			hide: 100,
		},
		sanitizeFn: function (content) {
			return DOMPurify.sanitize(content);
		},
	});

	// initialize the bootstrap-select
	$(".selectpicker").selectpicker();

	// add search-heading to the second navbar
	if ($(".search-heading").length) {
		$(".search-heading").appendTo("#topbar-second > .container > #tabmenu");
	}

	// add search results heading to the second navbar
	// and insert the search value to the top nav search input
	if ($(".search-content-wrapper").length) {
		// get the text of the heading (we catch the plain text because we don't
		// want to have a h4 heading in the navbar
		var searchText = $(".section-title-wrapper > h2").html();

		// temporary workaround to avoid 'undefined' being displayed (issue #9789)
		// https://github.com/friendica/friendica/issues/9789
		if (typeof searchText === "undefined") {
			searchText = "";
		}
		// insert the plain text in a <h4> heading and give it a class
		var newText = '<h4 class="search-heading">' + searchText + "</h4>";
		// append the new heading to the navbar
		$("#topbar-second > .container > #tabmenu").append(newText);

		// try to get the value of the original search input to insert it
		// as value in the nav-search-input
		var searchValue = $("#search-wrapper .form-group-search input").val();

		// if the orignal search value isn't available use the location path as value
		if (typeof searchValue === "undefined") {
			// get the location path
			var urlPath = window.location.search;
			// and split it up in its parts
			var splitPath = urlPath.split(/(\?search?=)(.*$)/);

			if (typeof splitPath[2] !== "undefined") {
				// decode the path (e.g to decode %40 to the character @)
				var searchValue = decodeURIComponent(splitPath[2]);
			}
		}

		if (typeof searchValue !== "undefined") {
			$("#nav-search-input-field").val(searchValue);
		}
	}

	// move the "Save the search" button to the second navbar
	$(".search-content-wrapper #search-save").appendTo("#topbar-second > .container > #navbar-button");

	// append the vcard-short-info to the second nav after passing the element
	// with .fn (vcard username). Use scrollspy to get the scroll position.
	if ($("aside .vcard .fn").length) {
		$(".vcard .fn").scrollspy({
			min: $(".vcard .fn").position().top - 50,
			onLeaveTop: function onLeave(element) {
				$("#vcard-short-info").fadeOut(500, function () {
					$("#vcard-short-info").appendTo("#vcard-short-info-wrapper");
				});
			},
			onEnter: function (element) {
				$("#vcard-short-info").appendTo("#nav-short-info");
				$("#vcard-short-info").fadeIn(500);
			},
		});
	}

	// move the group contact information of the network page into the second navbar
	if ($(".network-content-wrapper > #viewcontact_wrapper-network").length) {
		// get the contact-wrapper element and append it to the second nav bar
		// Note: We need the first() element with this class since at the present time we
		// store also the js template information in the html code and thats why
		// there are two elements with this class but we don't want the js template
		$(".network-content-wrapper > #viewcontact_wrapper-network .contact-wrapper")
			.first()
			.appendTo("#nav-short-info");
	}

	// move heading from network stream to the second navbar nav-short-info section
	if ($(".network-content-wrapper > .section-title-wrapper").length) {
		// get the heading element
		var heading = $(".network-content-wrapper > .section-title-wrapper > h2");
		// get the text of the heading
		var headingContent = heading.html();
		// create a new element with the content of the heading
		var newText =
			'<h4 class="heading" data-toggle="tooltip" title="' + headingContent + '">' + headingContent + "</h4>";
		// remove the old heading element
		heading.remove(),
			// put the new element to the second nav bar
			$("#topbar-second #nav-short-info").append(newText);
	}

	if ($(".community-content-wrapper").length) {
		// get the heading element
		var heading = $(".community-content-wrapper > h3").first();
		// get the text of the heading
		var headingContent = heading.html();
		// create a new element with the content of the heading
		var newText = '<h4 class="heading">' + headingContent + "</h4>";
		// remove the old heading element
		heading.remove(),
			// put the new element to the second nav bar
			$("#topbar-second > .container > #tabmenu").append(newText);
	}

	// Dropdown menus with the class "dropdown-head" will display the active tab
	// as button text
	$body.on("click", ".dropdown-head .dropdown-menu li a, .dropdown-head .dropdown-menu li button", function () {
		toggleDropdownText(this);
	});

	// Change the css class while clicking on the switcher elements
	$(".toggle label, .toggle .toggle-handle").click(function (event) {
		event.preventDefault();
		// Get the value of the input element
		var input = $(this).siblings("input");
		var val = 1 - input.val();
		var id = input.attr("id");

		// The css classes for "on" and "off"
		var onstyle = "btn-primary";
		var offstyle = "btn-default off";

		// According to the value of the input element we need to decide
		// which class need to be added and removed when changing the switch
		var removedclass = val == 0 ? onstyle : offstyle;
		var addedclass = val == 0 ? offstyle : onstyle;
		$("#" + id + "_onoff")
			.addClass(addedclass)
			.removeClass(removedclass);

		// After changing the switch the input element is getting
		// the newvalue
		input.val(val);
	});

	// Set the padding for input elements with inline buttons
	//
	// In Frio we use some input elements where the submit button is visually
	// inside the input field (through css). We need to set a padding-right
	// to the input element where the padding value would be at least the width
	// of the button. Otherwise long user input would be invisible because it is
	// behind the button.
	$body.on("click", ".form-group-search > input", function () {
		// Get the width of the button (if the button isn't available
		// buttonWidth will be null
		var buttonWidth = $(this).next(".form-button-search").outerWidth();

		if (buttonWidth) {
			// Take the width of the button and ad 5px
			var newWidth = buttonWidth + 5;
			// Set the padding of the input element according
			// to the width of the button
			$(this).css("padding-right", newWidth);
		}
	});

	/*
	 * This event handler hides all comment UI when the user clicks anywhere on the page
	 * It ensures that we aren't closing the current comment box
	 *
	 * We are making an exception for buttons because of a race condition with the
	 * comment opening button that results in an already closed comment UI.
	 */
	$(document).on("mousedown", function (event) {
		if (event.target.type === "button") {
			return true;
		}

		if ($(event.target).closest(".fg-emoji-container").length) {
			return true;
		}

		var $dontclosethis = $(event.target).closest(".wall-item-comment-wrapper").find(".comment-edit-form");
		$(".wall-item-comment-wrapper .comment-edit-submit-wrapper:visible").each(function () {
			var $parent = $(this).parent(".comment-edit-form");
			var itemId = $parent.data("itemId");

			if ($dontclosethis[0] != $parent[0]) {
				var textarea = $parent.find("textarea").get(0);

				commentCloseUI(textarea, itemId);
			}
		});
	});

	// Customize some elements when the app is used in standalone mode on Android
	if (window.matchMedia("(display-mode: standalone)").matches) {
		// Open links to source outside of the webview
		$("body").on("click", ".plink", function (e) {
			$(e.target).attr("target", "_blank");
		});
	}

	/*
	 * This event listeners ensures that the textarea size is updated event if the
	 * value is changed externally (textcomplete, insertFormatting, fbrowser...)
	 */
	$(document).on("change", "textarea", function (event) {
		autosize.update(event.target);
	});

	/*
	 * Sticky aside on page scroll
	 * We enable the sticky aside only when window is wider than
	 * 976px - which is the maximum width where the aside is shown in
	 * mobile style - because on chrome-based browsers (desktop and
	 * android) the sticky plugin in mobile style causes the browser to
	 * scroll back to top the main content, making it impossible
	 * to navigate.
	 * A side effect is that the sitky aside isn't really responsive,
	 * since is enabled or not at page loading time.
	 */
	if ($(window).width() > 976) {
		$("aside").stick_in_parent({
			offset_top: 100, // px, header + tab bar + spacing
			recalc_every: 10,
		});
		// recalculate sticky aside on clicks on <a> elements
		// this handle height changes on expanding submenus
		$("aside").on("click", "a", function () {
			$(document.body).trigger("sticky_kit:recalc");
		});
	}

	/*
	 * Add or remove "aside-out" class to body tag
	 * when the mobile aside is shown or hidden.
	 * The class is used in css to disable scroll in page when the aside
	 * is shown.
	 */
	$("aside")
		.on("shown.bs.offcanvas", function () {
			$body.addClass("aside-out");
		})
		.on("hidden.bs.offcanvas", function () {
			$body.removeClass("aside-out");
		});

	// Right offcanvas elements
	let $offcanvas_right_toggle = $(".offcanvas-right-toggle");
	let $offcanvas_right_container = $("#offcanvasUsermenu"); // Use ID for faster lookup, class is .offcanvas-right

	$offcanvas_right_toggle.on("click", function (event) {
		event.preventDefault();
		$("body").toggleClass("offcanvas-right-active");
	});

	// Close the right offcanvas menu when clicking somewhere
	$(document).on("mouseup touchend", function (event) {
		if (
			// Clicked element is not inside the menu
			!$offcanvas_right_container.is(event.target) &&
			$offcanvas_right_container.has(event.target).length === 0 &&
			// Clicked element is not the toggle button (taken care by the toggleClass above)
			!$offcanvas_right_toggle.is(event.target) &&
			$offcanvas_right_toggle.has(event.target).length === 0
		) {
			$("body").removeClass("offcanvas-right-active");
		}
	});

	// Event listener for 'Show & hide event map' button in the network stream.
	$body.on("click", ".event-map-btn", function () {
		showHideEventMap(this);
	});

	// Comment form submit
	$body.on("submit", ".comment-edit-form", function (e) {
		let $form = $(this);
		let id = $form.data("item-id");

		// Compose page form exception: id is always 0 and form must not be submitted asynchronously
		if (id === 0) {
			return;
		}

		e.preventDefault();

		let $commentSubmit = $form.find(".comment-edit-submit").button("loading");

		unpause();
		commentBusy = true;

		$.post("item", $form.serialize(), "json")
			.then(function (data) {
				if (data.success) {
					$("#comment-edit-wrapper-" + id).hide();
					let $textarea = $("#comment-edit-text-" + id);
					$textarea.val("");
					if ($textarea.get(0)) {
						commentClose($textarea.get(0), id);
					}
					if (timer) {
						clearTimeout(timer);
					}
					timer = setTimeout(NavUpdate, 10);
					force_update = true;
					update_item = id;
				}
				if (data.reload) {
					window.location.href = data.reload;
				}
			})
			.always(function () {
				$commentSubmit.button("reset");
			});
	});

	try {
		navigator.canShare({ url: "#", });
	} catch(err) {
		$('.button-browser-share').hide();
	}

	// initiale autosize for the textareas
	autosize($("textarea.text-autosize"));
});

function openClose(theID) {
	var elem = document.getElementById(theID);

	if ($(elem).is(":visible")) {
		$(elem).slideUp(200);
	} else {
		$(elem).slideDown(200);
	}
}

function showHide(theID) {
	var elem = document.getElementById(theID);
	var edit = document.getElementById("comment-edit-submit-wrapper-" + theID.match("[0-9$]+"));

	if ($(elem).is(":visible")) {
		if (!$(edit).is(":visible")) {
			edit.style.display = "block";
		} else {
			elem.style.display = "none";
		}
	} else {
		elem.style.display = "block";
	}
}

// Show & hide event map in the network stream by button click.
function showHideEventMap(elm) {
	// Get the id of the map element - it should be provided through
	// the attribute "data-map-id".
	var mapID = elm.getAttribute("data-map-id");

	// Get translation labels.
	var mapshow = elm.getAttribute("data-show-label");
	var maphide = elm.getAttribute("data-hide-label");

	// Change the button labels.
	if (elm.innerText == mapshow) {
		$("#" + elm.id).text(maphide);
	} else {
		$("#" + elm.id).text(mapshow);
	}
	// Because maps are iframe elements, we cant hide it through css (display: none).
	// We solve this issue by putting the map outside the screen with css.
	// So the first time the 'Show map' button is pressed we move the map
	// element into the screen area.
	var mappos = $("#" + mapID).css("position");

	if (mappos === "absolute") {
		$("#" + mapID).hide();
		$("#" + mapID).css({ position: "relative", left: "auto", top: "auto" });
		openClose(mapID);
	} else {
		openClose(mapID);
	}
	return false;
}

function justifyPhotos() {
	justifiedGalleryActive = true;
	$("#photo-album-contents")
		.justifiedGallery({
			margins: 3,
			border: 0,
			captions: false,
			sizeRangeSuffixes: {
				lt48: "-6",
				lt80: "-5",
				lt300: "-4",
				lt320: "-2",
				lt640: "-1",
				lt1024: "-0",
			},
		})
		.on("jg.complete", function (e) {
			justifiedGalleryActive = false;
		});
}

// Load a js script to the html head.
function loadScript(url, callback) {
	// Check if the script is already in the html head.
	var oscript = $('head script[src="' + url + '"]');

	// Delete the old script from head.
	if (oscript.length > 0) {
		oscript.remove();
	}
	// Adding the script tag to the head as suggested before.
	var head = document.getElementsByTagName("head")[0];
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;

	// Then bind the event to the callback function.
	// There are several events for cross browser compatibility.
	script.onreadystatechange = callback;
	script.onload = callback;

	// Fire the loading.
	head.appendChild(script);
}

// Does we need a ? or a & to append values to a url
function qOrAmp(url) {
	if (url.search("\\?") < 0) {
		return "?";
	} else {
		return "&";
	}
}

String.prototype.normalizeLink = function () {
	var ret = this.replace("https:", "http:");
	var ret = ret.replace("//www", "//");
	return ret.rtrim();
};

function cleanContactUrl(url) {
	var parts = parseUrl(url);

	if (!("scheme" in parts) || !("host" in parts)) {
		return url;
	}

	var newUrl = parts["scheme"] + "://" + parts["host"];

	if ("port" in parts) {
		newUrl += ":" + parts["port"];
	}

	if ("path" in parts) {
		newUrl += parts["path"];
	}

	//	if(url != newUrl) {
	//		console.log("Cleaned contact url " + url + " to " + newUrl);
	//	}

	return newUrl;
}

function parseUrl(str, component) {
	// eslint-disable-line camelcase
	//       discuss at: http://locutusjs.io/php/parse_url/
	//      original by: Steven Levithan (http://blog.stevenlevithan.com)
	// reimplemented by: Brett Zamir (http://brett-zamir.me)
	//         input by: Lorenzo Pisani
	//         input by: Tony
	//      improved by: Brett Zamir (http://brett-zamir.me)
	//           note 1: original by http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
	//           note 1: blog post at http://blog.stevenlevithan.com/archives/parseuri
	//           note 1: demo at http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
	//           note 1: Does not replace invalid characters with '_' as in PHP,
	//           note 1: nor does it return false with
	//           note 1: a seriously malformed URL.
	//           note 1: Besides function name, is essentially the same as parseUri as
	//           note 1: well as our allowing
	//           note 1: an extra slash after the scheme/protocol (to allow file:/// as in PHP)
	//        example 1: parse_url('http://user:pass@host/path?a=v#a')
	//        returns 1: {scheme: 'http', host: 'host', user: 'user', pass: 'pass', path: '/path', query: 'a=v', fragment: 'a'}
	//        example 2: parse_url('http://en.wikipedia.org/wiki/%22@%22_%28album%29')
	//        returns 2: {scheme: 'http', host: 'en.wikipedia.org', path: '/wiki/%22@%22_%28album%29'}
	//        example 3: parse_url('https://host.domain.tld/a@b.c/folder')
	//        returns 3: {scheme: 'https', host: 'host.domain.tld', path: '/a@b.c/folder'}
	//        example 4: parse_url('https://gooduser:secretpassword@www.example.com/a@b.c/folder?foo=bar')
	//        returns 4: { scheme: 'https', host: 'www.example.com', path: '/a@b.c/folder', query: 'foo=bar', user: 'gooduser', pass: 'secretpassword' }

	var query;

	var mode =
		(typeof require !== "undefined" ? require("../info/ini_get")("locutus.parse_url.mode") : undefined) || "php";

	var key = [
		"source",
		"scheme",
		"authority",
		"userInfo",
		"user",
		"pass",
		"host",
		"port",
		"relative",
		"path",
		"directory",
		"file",
		"query",
		"fragment",
	];

	// For loose we added one optional slash to post-scheme to catch file:/// (should restrict this)
	var parser = {
		php: new RegExp(
			[
				"(?:([^:\\/?#]+):)?",
				"(?:\\/\\/()(?:(?:()(?:([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?",
				"()",
				"(?:(()(?:(?:[^?#\\/]*\\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)",
			].join(""),
		),
		strict: new RegExp(
			[
				"(?:([^:\\/?#]+):)?",
				"(?:\\/\\/((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?",
				"((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)",
			].join(""),
		),
		loose: new RegExp(
			[
				"(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?",
				"(?:\\/\\/\\/?)?",
				"((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?)",
				"(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))",
				"(?:\\?([^#]*))?(?:#(.*))?)",
			].join(""),
		),
	};

	var m = parser[mode].exec(str);
	var uri = {};
	var i = 14;

	while (i--) {
		if (m[i]) {
			uri[key[i]] = m[i];
		}
	}

	if (component) {
		return uri[component.replace("PHP_URL_", "").toLowerCase()];
	}

	if (mode !== "php") {
		var name =
			(typeof require !== "undefined" ? require("../info/ini_get")("locutus.parse_url.queryKey") : undefined) ||
			"queryKey";
		parser = /(?:^|&)([^&=]*)=?([^&]*)/g;
		uri[name] = {};
		query = uri[key[12]] || "";
		query.replace(parser, function ($0, $1, $2) {
			if ($1) {
				uri[name][$1] = $2;
			}
		});
	}

	delete uri.source;
	return uri;
}

// trim function to replace whitespace after the string
String.prototype.rtrim = function () {
	var trimmed = this.replace(/\s+$/g, "");
	return trimmed;
};

/**
 * Scroll the screen to the item element whose id is provided, then highlights it
 *
 * Note: jquery.color.js is required
 *
 * @param {string} elementId The item element id
 * @returns {undefined}
 */
function scrollToItem(elementId) {
	if (typeof elementId === "undefined") {
		return;
	}

	var $el = $("#" + elementId + " > .media");
	// Test if the Item exists
	if (!$el.length) {
		return;
	}

	// Define the colors which are used for highlighting
	var colWhite = { backgroundColor: "#7f7f7f" };
	var colShiny = { backgroundColor: "#7e763a" };

	// Get the Item Position (we need to substract 100 to match correct position
	var itemPos = $el.offset().top - 100;

	// Scroll to the DIV with the ID (GUID)
	$("html, body")
		.animate(
			{
				scrollTop: itemPos,
			},
			400,
		)
		.promise()
		.done(function () {
			// Highlight post/comment with ID  (GUID)
			$el.animate(colWhite, 1000).animate(colShiny).animate({ backgroundColor: "transparent" }, 600);
		});
}

// format a html string to pure text
function htmlToText(htmlString) {
	// Replace line breaks with spaces
	var text = htmlString.replace(/<br>/g, " ");
	// Strip the text out of the html string
	text = text.replace(/<[^>]*>/g, "");

	return text;
}

/**
 * Sends a /like API call and updates the display of the relevant action button
 * before the update reloads the item.
 *
 * @param {int}     ident The id of the relevant item
 * @param {string}  verb  The verb of the action
 * @param {boolean} un    Whether to perform an activity removal instead of creation
 */
function doActivityItemAction(ident, verb, un) {
	_verb = un ? 'un' + verb : verb;
	var thumbsClass = '';
	switch (verb) {
		case 'like':
			thumbsClass = 'fa-thumbs-up';
			break;
		case 'dislike':
			thumbsClass = 'fa-thumbs-down';
			break;
		case 'announce':
			thumbsClass = 'fa-retweet';
			break;
		case 'attendyes':
			thumbsClass = 'fa-check';
			break;
		case 'attendno':
			thumbsClass = 'fa-times';
			break;
		case 'attendmaybe':
			thumbsClass = 'fa-question';
	}
	if (verb.indexOf('announce') === 0 ) {
		// Share-Button(s)
		// remove share-symbol, to replace it by rotator
		$('button[id^=shareMenuOptions-' + ident.toString() + '] i:first-child').removeClass('fa-share');
		$('button[id^=announce-' + ident.toString() + '] i:first-child').removeClass('fa-retweet');
		// avoid multiple rotators on like/share-button if klicked multiple times.
		if ($('img[id^=waitfor-' + verb + '-' + ident.toString() + ']').length == 0) {
			// append rotator to the shareMenu-button for small media
			$('<img>')
				.attr({id: 'waitfor-' + verb + '-' + ident.toString(), src: 'images/rotator.gif'})
				.addClass('fa')
				.appendTo($('button[id^=shareMenuOptions-' + ident.toString() + '] i:first-child' ));
		}
	}
	$('button[id^=' + verb + '-' + ident.toString() + '] i:first-child').removeClass(thumbsClass);
	// if verb is announce, then one rotator is added above to the shareMedia-dropdown button
	if ($('button:not(button.dropdown-toggle) img#waitfor-' + verb + '-' + ident.toString()).length == 0) {
		$('<img>')
			.attr({id: 'waitfor-' + verb + '-' + ident.toString(), src: 'images/rotator.gif'})
			.addClass('fa')
			.appendTo($('button[id^=' + verb + '-' + ident.toString() + '] i:first-child'));
	}
	$.post('item/' + ident.toString() + '/activity/' + _verb)
	.success(function(data){
		$('img[id^=waitfor-' + verb + '-' + ident.toString() + ']').remove();
		if (data.status == 'ok') {
			if (verb.indexOf('attend') === 0) {
				$('button[id^=attend][id$=' + ident.toString() + ']').removeClass('active')
				$('button#attendyes-' + ident.toString()).attr('onclick', 'javascript:doActivityItemAction(' + ident +', "attendyes")');
				$('button#attendno-' + ident.toString()).attr('onclick', 'javascript:doActivityItemAction(' + ident +', "attendno")');
				$('button#attendmaybe-' + ident.toString()).attr('onclick', 'javascript:doActivityItemAction(' + ident +', "attendmaybe")');
			}
			if (data.verb == 'un' + verb) {
				// like/dislike buttons
				$('button[id^=' + verb + '-' + ident.toString() + ']' )
					.removeClass('active')
					.attr('onclick', 'doActivityItemAction(' + ident +', "' + verb + '")');
				// link in share-menu
				$('a[id^=' + verb + '-' + ident.toString() + ']' )
					.removeClass('active')
					.attr('href', 'javascript:doActivityItemAction(' + ident +', "' + verb + '")');
				$('a[id^=' + verb + '-' + ident.toString() + '] i:first-child' ).addClass('fa-retweet').removeClass('fa-ban');
			} else {
				// like/dislike buttons
				$('button[id^=' + verb + '-' + ident.toString() + ']' )
					.addClass('active')
					.attr('onclick', 'doActivityItemAction(' + ident + ', "' + verb + '", true )');
				// link in share-menu
				$('a[id^=' + verb + '-' + ident.toString() + ']' )
					.addClass('active')
					.attr('href', 'javascript:doActivityItemAction(' + ident + ', "' + verb + '", true )');
				$('a[id^=' + verb + '-' + ident.toString() + '] i:first-child' ).removeClass('fa-retweet').addClass('fa-ban');
			}
			$('button[id^=' + verb + '-' + ident.toString() + '] i:first-child').addClass(thumbsClass);
			if (verb.indexOf('announce') === 0 ) {
				// ShareMenuButton
				$('button[id^=shareMenuOptions-' + ident.toString() + '] i:first-child').addClass('fa-share');
				if (data.verb == 'un' + verb) {
					$('button[id^=shareMenuOptions-' + ident.toString() + ']').removeClass('active');
				} else {
					$('button[id^=shareMenuOptions-' + ident.toString() + ']').addClass('active');
				}
			}
			updateItem(ident.toString());
		} else {
			/* server-response was not ok. Database-problems or some changes in
			 * data?
			 * reset all buttons
			 */
			$('img[id^=waitfor-' + verb + '-' + ident.toString() + ']').remove();
			$('button[id^=shareMenuOptions-' + ident.toString() + '] i:first-child').addClass('fa-share');
			$('button[id^=' + verb + '-' + ident.toString() + '] i:first-child').addClass(thumbsClass);
			$('a[id^=' + verb + '-' + ident.toString() + '] i:first-child').addClass(thumbsClass);
			$.jGrowl(aActErr[verb] + '<br>(' + aErrType['srvErr'] + ')', {sticky: false, theme: 'info', life: 5000});
		}
	})
	.error(function(data){
		// Server could not be reached successfully
		$('img[id^=waitfor-' + verb + '-' + ident.toString() + ']').remove();
		$('button[id^=shareMenuOptions-' + ident.toString() + '] i:first-child').addClass('fa-share');
		$('button[id^=' + verb + '-' + ident.toString() + '] i:first-child').addClass(thumbsClass);
		$('a[id^=' + verb + '-' + ident.toString() + '] i:first-child').addClass(thumbsClass);
		$.jGrowl(aActErr[verb] + '<br>(' + aErrType['netErr'] + ')', {sticky: false, theme: 'info', life: 5000});
	});
}

// Decodes a hexadecimally encoded binary string
function hex2bin(s) {
	//  discuss at: http://locutus.io/php/hex2bin/
	// original by: Dumitru Uzun (http://duzun.me)
	//   example 1: hex2bin('44696d61')
	//   returns 1: 'Dima'
	//   example 2: hex2bin('00')
	//   returns 2: '\x00'
	//   example 3: hex2bin('2f1q')
	//   returns 3: false
	var ret = [];
	var i = 0;
	var l;
	s += "";

	for (l = s.length; i < l; i += 2) {
		var c = parseInt(s.substr(i, 1), 16);
		var k = parseInt(s.substr(i + 1, 1), 16);
		if (isNaN(c) || isNaN(k)) {
			return false;
		}
		ret.push((c << 4) | k);
	}
	return String.fromCharCode.apply(String, ret);
}

// Convert binary data into hexadecimal representation
function bin2hex(s) {
	// From: http://phpjs.org/functions
	// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +   bugfixed by: Onno Marsman
	// +   bugfixed by: Linuxworld
	// +   improved by: ntoniazzi (http://phpjs.org/functions/bin2hex:361#comment_177616)
	// *     example 1: bin2hex('Kev');
	// *     returns 1: '4b6576'
	// *     example 2: bin2hex(String.fromCharCode(0x00));
	// *     returns 2: '00'

	var i,
		l,
		o = "",
		n;

	s += "";

	for (i = 0, l = s.length; i < l; i++) {
		n = s.charCodeAt(i).toString(16);
		o += n.length < 2 ? "0" + n : n;
	}

	return o;
}

// Dropdown menus with the class "dropdown-head" will display the active tab
// as button text
function toggleDropdownText(elm) {
	$(elm)
		.closest(".dropdown")
		.find(".btn")
		.html($(elm).html() + ' <span class="caret"></span>');
	$(elm).closest(".dropdown").find(".btn").val($(elm).data("value"));
	$(elm).closest("ul").children("li").show();
	$(elm).parent("li").hide();
}

// Check if element does have a specific class
function hasClass(elem, cls) {
	return (" " + elem.className + " ").indexOf(" " + cls + " ") > -1;
}

// Send on <CTRL>+<Enter> or <META>+<Enter> on macos
// e: event
// submit: the id of the submitbutton
function sendOnCtrlEnter(e, submit) {
	if ((e.ctrlKey || e.metaKey) && (e.keyCode == 13 || e.keyCode == 10)) {
		console.log("Ctrl + Enter");
		$("#" + submit).trigger('click');
	}
}
// @license-end

// SPDX-FileCopyrightText: 2010-2024 the Friendica project
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPLv3-or-later

/**
 * @file view/theme/frio/js/modal.js
 * Bootstrap modal handling for the Frio theme.
 *
 * This module provides functions for modal operations including:
 * - Generic modal content loading
 * - Jot (post composition) modal handling
 * - File browser integration
 *
 * @requires jQuery
 * @requires Bootstrap Modal
 */

(function ($, window, document) {
	"use strict";

	// Module state
	let isJotResetBound = false;
	let isEditJotClosing = false;

	/**
	 * Initialize modal handlers on document ready.
	 */
	$(function () {
		const $body = $("body");

		// Clear bs modal on close - prevent old content display.
		// Using a single namespaced event handler for all modals.
		$body.on("hidden.bs.modal.frio", ".modal", function () {
			const $modal = $(this);
			$modal.removeData("bs.modal");
			$("#modal-title").empty();
			$("#modal-body").empty();
			// Clean up file browser elements
			$(".fbrowser").remove();
			$(".ajaxbutton-wrapper").remove();
		});

		// Special handling for jot-modal close - restore cached jot content
		$body.on("hidden.bs.modal.frio", "#jot-modal", function () {
			// Restore cached jot at its hidden position ("#jot-content")
			if (window.jotcache && window.jotcache.length) {
				$("#jot-content").append(window.jotcache);
				window.jotcache = "";
			}
			// Destroy the attachment linkPreview for Jot
			if (typeof window.linkPreview === "object" && window.linkPreview !== null) {
				window.linkPreview.destroy();
				window.linkPreview = null;
			}
		});

		// Navbar login
		$body.on("click.frio", "#nav-login", function (e) {
			e.preventDefault();
			if (window.Dialog && typeof window.Dialog.show === "function") {
				window.Dialog.show(this.href, this.dataset.originalTitle || this.title);
			}
		});

		// Jot nav menu tabs
		$body.on("click.frio", "#jot-modal .jot-nav li .jot-nav-lnk", function (e) {
			e.preventDefault();
			toggleJotNav(this);
		});

		// Bookmarklet page needs a jot modal which appears automatically
		if (window.location.pathname.indexOf("/bookmarklet") >= 0 && $("#jot-modal").length) {
			// jotShow is defined in jot-header.tpl
			if (typeof window.jotShow === "function") {
				window.jotShow();
			}
		}

		// Open filebrowser for elements with the class "image-select"
		$body.on("click.frio", ".image-select", function () {
			this.setAttribute("image-input", "select");
			if (window.Dialog && typeof window.Dialog.doImageBrowser === "function") {
				window.Dialog.doImageBrowser("input");
			}
		});

		// Insert filebrowser images into the input field
		$body.on("fbrowser.photo.input.frio", function (e, filename, embedcode, id, img) {
			const $elm = $("[image-input='select']");
			const $input = $elm.closest(".input-group").find("input");
			$elm.removeAttr("image-input");
			$input.val(img);
		});

		// Generic delegated event to open an anchor URL in a modal
		$body.on("click.frio", "a.add-to-modal", function (e) {
			e.preventDefault();
			addToModal(this.href);
		});

		// Bind the edit-jot reset handler exactly once using event delegation
		bindJotResetOnce();
	});

	/**
	 * Bind the jot reset handler exactly once to prevent duplicate event registration.
	 * This fixes the critical bug where calling editpost() multiple times would
	 * register multiple handlers, causing the reset code to run multiple times.
	 */
	function bindJotResetOnce() {
		if (isJotResetBound) {
			return;
		}
		isJotResetBound = true;

		$("body").on("hidden.bs.modal.frio-edit", "#jot-modal.edit-jot", function () {
			// Prevent concurrent execution
			if (isEditJotClosing) {
				return;
			}
			isEditJotClosing = true;

			const $modal = $(this);
			$modal.removeData("bs.modal");
			$(".jot-nav .jot-perms-lnk").parent("li").removeClass("hidden");
			$("#profile-jot-form #jot-title-wrap, #profile-jot-form #jot-category-wrap").show();
			$modal.removeClass("edit-jot");
			$("#jot-modal-content").empty();

			// Reset flag after a short delay to allow Bootstrap to finish its cleanup
			setTimeout(function () {
				isEditJotClosing = false;
			}, 0);
		});
	}

	/**
	 * Overwrite Dialog.show from main js to load the filebrowser into a bs modal.
	 *
	 * @param {string} url - The URL to load
	 * @param {string} [title] - Optional modal title
	 */
	window.Dialog.show = function (url, title) {
		title = title || "";
		const $modal = $("#modal").modal();
		$modal.find("#modal-header h4").html(title);
		$modal.find("#modal-body").load(url, function (responseText, textStatus) {
			if (textStatus === "success" || textStatus === "notmodified") {
				$modal.show();
				if (typeof window.Dialog._load === "function") {
					window.Dialog._load(url);
				}
			}
		});
	};

	/**
	 * Overwrite the function _get_url from main.js.
	 *
	 * @param {string} type - The browser type
	 * @param {string} name - The browser name
	 * @param {string|number} [id] - Optional ID
	 * @returns {string} The constructed URL
	 */
	window.Dialog._get_url = function (type, name, id) {
		let hash = name;
		if (id !== undefined) {
			hash = hash + "-" + id;
		}
		return "media/" + type + "/browser?mode=none&theme=frio#" + hash;
	};

	/**
	 * Load the filebrowser into the jot modal.
	 */
	window.Dialog.showJot = function () {
		const type = "photo";
		const name = "main";
		const url = window.Dialog._get_url(type, name);

		if ($(".modal-body #jot-fbrowser-wrapper .fbrowser").length < 1) {
			$("#jot-fbrowser-wrapper").load(url, function (responseText, textStatus) {
				if (textStatus === "success" || textStatus === "notmodified") {
					if (typeof window.Dialog._load === "function") {
						window.Dialog._load(url);
					}
				}
			});
		}
	};

	/**
	 * Initialize the filebrowser after page load.
	 *
	 * @param {string} url - The URL being loaded
	 */
	window.Dialog._load = function (url) {
		const filebrowser = document.getElementById("filebrowser");
		const match = url.match(/media\/[a-z]+\/.*(#.*)/);

		if (!filebrowser || match === null) {
			return; // not fbrowser
		}

		// Initialize the filebrowser
		if (typeof window.loadScript === "function") {
			window.loadScript("view/js/ajaxupload.js");
			window.loadScript("view/theme/frio/js/module/media/browser.js", function () {
				if (typeof window.Browser !== "undefined" && typeof window.Browser.init === "function") {
					window.Browser.init(filebrowser.dataset.nickname, filebrowser.dataset.type, match[1]);
				}
			});
		}
	};

	/**
	 * Add first element with the class "heading" as modal title.
	 * Note: This should ideally be done in the template.
	 */
	function loadModalTitle() {
		$("#modal-title").empty();
		const $heading = $("#modal-body .heading").first();
		$heading.hide();

		let title = "";

		// Special handling for event modals
		if ($("#modal-body .event-wrapper .event-summary").length) {
			const eventsum = $("#modal-body .event-wrapper .event-summary").html();
			title = '<i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;' + eventsum;
		} else {
			title = $heading.html();
		}

		if (title) {
			$("#modal-title").append(title);
		}
	}

	/**
	 * Load HTML content from a Friendica page into a modal.
	 *
	 * @param {string} url - The URL with HTML content
	 * @param {string} [id] - Optional ID of a specific HTML element to show
	 */
	function addToModal(url, id) {
		const char = window.qOrAmp ? window.qOrAmp(url) : (url.indexOf("?") < 0 ? "?" : "&");
		url = url + char + "mode=none";

		if (typeof id !== "undefined") {
			url = url + " div#" + id;
		}

		const $modal = $("#modal").modal();
		$modal.find("#modal-body").load(url, function (responseText, textStatus) {
			if (textStatus === "success" || textStatus === "notmodified") {
				$modal.show();
				loadModalTitle();
				// Re-initialize autosize for new modal content
				if (typeof window.autosize === "function") {
					window.autosize($(".modal .text-autosize"));
				}
			}
		});
	}

	/**
	 * Add an element (by its id) to a bootstrap modal.
	 *
	 * @param {string} id - The element ID selector
	 */
	function addElmToModal(id) {
		const elm = $(id).html();
		const $modal = $("#modal").modal();

		$modal.find("#modal-body").append(elm);
		loadModalTitle();
	}

	/**
	 * Load the HTML from the edit post page into the jot modal.
	 *
	 * @param {string} url - The edit post URL
	 */
	function editpost(url) {
		// Check if this is an event post
		const splitURL = window.parseUrl ? window.parseUrl(url) : { path: "" };
		if (splitURL.path && splitURL.path.indexOf("calendar/event/show") > -1) {
			addToModal(splitURL.path);
			return;
		}

		const $modal = $("#jot-modal").modal();
		const loadUrl = url + " #jot-sections";

		$(".jot-nav .jot-perms-lnk").parent("li").addClass("hidden");

		// Store original jot and remove it to avoid conflicts
		window.jotcache = $("#jot-content > #jot-sections");
		window.jotcache.detach();

		$("#jot-modal").addClass("edit-jot");

		// Handler is bound once in document.ready via bindJotResetOnce()
		// No need to call jotreset() here anymore

		$modal.find("#jot-modal-content").load(loadUrl, function (responseText, textStatus) {
			if (textStatus === "success" || textStatus === "notmodified") {
				const type = $(responseText).find("#profile-jot-form input[name='type']").val();

				if (type === "wall-comment" || type === "remote-comment") {
					$("#profile-jot-form #jot-title-wrap").hide();
					$("#profile-jot-form #jot-category-wrap").hide();
				}

				// Setup dropzone for comment editing
				if ($("#jot-text-wrap").length && typeof window.dzFactory !== "undefined") {
					window.dzFactory.setupDropzone("#jot-text-wrap", "profile-jot-text");
				}

				$modal.show();
				$("#jot-popup").show();

				const $profileJotText = $("#profile-jot-text");
				if ($profileJotText.length && typeof $profileJotText.linkPreview === "function") {
					window.linkPreview = $profileJotText.linkPreview();
				}
			}
		});
	}

	/**
	 * Give the active "jot-nav" list element the class "active".
	 *
	 * @param {HTMLElement} elm - The navigation link element
	 */
	function toggleJotNav(elm) {
		const tabpanel = elm.getAttribute("aria-controls");
		const isMobile = elm.classList.contains("jot-nav-lnk-mobile");

		// Toggle active class
		$(elm).closest("li").siblings("li").removeClass("active");
		$(elm).closest("li").addClass("active");

		// Toggle tab panels
		$("#profile-jot-form > [role=tabpanel]")
			.addClass("minimize")
			.attr("aria-hidden", "true");
		$("#" + tabpanel)
			.removeClass("minimize")
			.attr("aria-hidden", "false");

		// Set aria-selected states
		$("#jot-modal .modal-header .nav-tabs .jot-nav-lnk").attr("aria-selected", "false");
		elm.setAttribute("aria-selected", "true");

		// Handle specific tab panels
		if (tabpanel === "jot-preview-content") {
			if (typeof window.preview_post === "function") {
				window.preview_post();
			}
			$("#jot-preview-share").removeClass("minimize").attr("aria-hidden", "false");
		} else if (tabpanel === "jot-fbrowser-wrapper") {
			window.Dialog.showJot();
		}

		// Update mobile dropdown button text
		if (isMobile && typeof window.toggleDropdownText === "function") {
			window.toggleDropdownText(elm);
		}
	}

	/**
	 * Wall Message special handling - redirects to own server if needed.
	 *
	 * @param {string} url - The wall message URL
	 */
	function openWallMessage(url) {
		const parts = window.parseUrl ? window.parseUrl(url) : {};

		if (parts.host && parts.host !== window.location.host) {
			window.location.href = url;
		} else {
			addToModal(url);
		}
	}

	/**
	 * Load the content of an edit URL into a modal.
	 *
	 * @param {string} url - The event edit URL
	 */
	function eventEdit(url) {
		const char = window.qOrAmp ? window.qOrAmp(url) : (url.indexOf("?") < 0 ? "?" : "&");
		const fullUrl = url + char + "mode=none";

		$.get(fullUrl, function (data) {
			$("#modal-body").empty().append(data);
		}).done(function () {
			loadModalTitle();
		});
	}

	// Expose functions to global scope
	window.addToModal = addToModal;
	window.addElmToModal = addElmToModal;
	window.editpost = editpost;
	window.toggleJotNav = toggleJotNav;
	window.openWallMessage = openWallMessage;
	window.eventEdit = eventEdit;
	// jotreset is no longer needed as a public function since we bind the handler once
	// But keep it for backward compatibility just in case
	window.jotreset = function () {
		// Handler is now bound automatically in document.ready
		// This function is kept for backward compatibility
	};

})(jQuery, window, document);
// @license-end

// SPDX-FileCopyrightText: 2010-2024 the Friendica project
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPLv3-or-later
/*
 * The javascript for friendicas hovercard. Bootstraps popover is needed.
 *
 * Much parts of the code are from Hannes Mannerheims <h@nnesmannerhe.im>
 * qvitter code (https://github.com/hannesmannerheim/qvitter)
 *
 * It is licensed under the GNU Affero General Public License <http://www.gnu.org/licenses/>
 *
 */
$(document).ready(function () {
	let $body = $("body");
	// Prevents normal click action on click hovercard elements
	$body.on("click", ".userinfo.click-card", function (e) {
		e.preventDefault();
	});
	// This event listener needs to be declared before the one that removes
	// all cards so that we can stop the immediate propagation of the event
	// Since the manual popover appears instantly and the hovercard removal is
	// on a 100ms delay, leaving event propagation immediately hides any click hovercard
	$body.on("mousedown", ".userinfo.click-card", function (e) {
		e.stopImmediatePropagation();
		let timeNow = new Date().getTime();

		let contactUrl = false;
		let targetElement = $(this);

		// get href-attribute
		if (targetElement.is("[href]")) {
			contactUrl = targetElement.attr("href");
		} else {
			return true;
		}

		// no hovercard for anchor links
		if (contactUrl.substring(0, 1) === "#") {
			return true;
		}

		openHovercard(targetElement, contactUrl, timeNow);
	});

	// hover cards should be removed very easily, e.g. when any of these events happens
	$body.on("mouseleave touchstart scroll mousedown submit keydown", function (e) {
		// remove hover card only for desktop user, since on mobile we open the hovercards
		// by click event insteadof hover
		removeAllHovercards(e, new Date().getTime());
	});

	$body
		.on("mouseover", ".userinfo.hover-card, .wall-item-responses a, .wall-item-bottom .mention a", function (e) {
			let timeNow = new Date().getTime();
			removeAllHovercards(e, timeNow);
			let contactUrl = false;
			let targetElement = $(this);

			// get href-attribute
			if (targetElement.is("[href]")) {
				contactUrl = targetElement.attr("href");
			} else {
				return true;
			}

			// no hover card if the element has the no-hover-card class
			if (targetElement.hasClass("no-hover-card")) {
				return true;
			}

			// no hovercard for anchor links
			if (contactUrl.substring(0, 1) === "#") {
				return true;
			}

			targetElement.attr("data-awaiting-hover-card", timeNow);

			// Delay until the hover-card does appear
			setTimeout(function () {
				if (
					targetElement.is(":hover") &&
					parseInt(targetElement.attr("data-awaiting-hover-card"), 10) === timeNow &&
					$(".hovercard").length === 0
				) {
					openHovercard(targetElement, contactUrl, timeNow);
				}
			}, 500);
		})
		.on("mouseleave", ".userinfo.hover-card, .wall-item-responses a, .wall-item-bottom .mention a", function (e) {
			// action when mouse leaves the hover-card
			removeAllHovercards(e, new Date().getTime());
		});

	// if we're hovering a hover card, give it a class, so we don't remove it
	$body.on("mouseover", ".hovercard", function (e) {
		$(this).addClass("dont-remove-card");
	});

	$body.on("mouseleave", ".hovercard", function (e) {
		$(this).removeClass("dont-remove-card");
		$(this).popover("hide");
	});
}); // End of $(document).ready

// removes all hover cards
function removeAllHovercards(event, priorTo) {
	// don't remove hovercards until after 100ms, so user have time to move the cursor to it (which gives it the dont-remove-card class)
	setTimeout(function () {
		$.each($(".hovercard"), function () {
			let title = $(this).attr("data-orig-title");
			// don't remove card if it was created after removeAllhoverCards() was called
			if ($(this).data("card-created") < priorTo) {
				// don't remove it if we're hovering it right now!
				if (!$(this).hasClass("dont-remove-card")) {
					let $handle = $('[data-hover-card-active="' + $(this).data("card-created") + '"]');
					$handle.removeAttr("data-hover-card-active");

					// Restoring the popover handle title
					let title = $handle.attr("data-orig-title");
					$handle.attr({ "data-orig-title": "", title: title });

					$(this).popover("hide");
				}
			}
		});
	}, 100);
}

function openHovercard(targetElement, contactUrl, timeNow) {
	// store the title in a data attribute because Bootstrap
	// popover destroys the title attribute.
	let title = targetElement.attr("title");
	targetElement.attr({ "data-orig-title": title, title: "" });

	// get an additional data attribute if the card is active
	targetElement.attr("data-hover-card-active", timeNow);
	// get the whole html content of the hover card and
	// push it to the bootstrap popover
	getHoverCardContent(contactUrl, function (data) {
		if (data) {
			targetElement
				.popover({
					html: true,
					placement: function () {
						// Calculate the placement of the hovercard (if top or bottom)
						// The placement depence on the distance between window top and the element
						// which triggers the hover-card
						let get_position = $(targetElement).offset().top - $(window).scrollTop();
						if (get_position < 270) {
							return "bottom";
						}
						return "top";
					},
					trigger: "manual",
					template:
						'<div class="popover hovercard" data-card-created="' +
						timeNow +
						'"><div class="arrow"></div><div class="popover-content hovercard-content"></div></div>',
					content: data,
					container: "body",
					sanitizeFn: function (content) {
						return DOMPurify.sanitize(content);
					},
				})
				.popover("show");
		}
	});
}

getHoverCardContent.cache = {};

function getHoverCardContent(contact_url, callback) {
	let postdata = {
		url: contact_url,
	};

	// Normalize and clean the profile so we can use a standardized url
	// as key for the cache
	let nurl = cleanContactUrl(contact_url).normalizeLink();

	// If the contact is already in the cache use the cached result instead
	// of doing a new ajax request
	if (nurl in getHoverCardContent.cache) {
		callback(getHoverCardContent.cache[nurl]);
		return;
	}

	$.ajax({
		url: baseurl + "/contact/hovercard",
		data: postdata,
		success: function (data, textStatus, request) {
			getHoverCardContent.cache[nurl] = data;
			callback(data);
		},
	});
}
// @license-end

// SPDX-FileCopyrightText: 2010-2024 the Friendica project
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPLv3-or-later
/*
 * The file contains functions for text editing and commenting
 */

// Lifted from https://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
jQuery.fn.putCursorAtEnd = function () {
	return this.each(function () {
		// Cache references
		var $el = $(this),
			el = this;

		// Only focus if input isn't already
		if (!$el.is(":focus")) {
			$el.focus();
		}

		// If this function exists... (IE 9+)
		if (el.setSelectionRange) {
			// Double the length because Opera is inconsistent about whether a carriage return is one character or two.
			var len = $el.val().length * 2;

			// Timeout seems to be required for Blink
			setTimeout(function () {
				el.setSelectionRange(len, len);
			}, 1);
		} else {
			// As a fallback, replace the contents with itself
			// Doesn't work in Chrome, but Chrome supports setSelectionRange
			$el.val($el.val());
		}

		// Scroll to the bottom, in case we're in a tall textarea
		// (Necessary for Firefox and Chrome)
		this.scrollTop = 999999;
	});
};

function commentGetLink(id, prompttext) {
	reply = prompt(prompttext);
	if (reply && reply.length) {
		reply = bin2hex(reply);
		$.get("parseurl?noAttachment=1&binurl=" + reply, function (data) {
			addCommentText(data, id);
		});
	}
}

function addCommentText(data, id) {
	// get the textfield
	var textfield = document.getElementById("comment-edit-text-" + id);
	// check if the textfield does have the default-value
	commentOpenUI(textfield, id);
	// save already existent content
	var currentText = $("#comment-edit-text-" + id).val();
	//insert the data as new value
	textfield.value = currentText + data;
	autosize.update($("#comment-edit-text-" + id));
}

function commentLinkDrop(event, id) {
	var reply = event.dataTransfer.getData("text/uri-list");
	event.target.textContent = reply;
	event.preventDefault();
	if (reply && reply.length) {
		reply = bin2hex(reply);
		$.get("parseurl?noAttachment=1&binurl=" + reply, function (data) {
			addCommentText(data, id);
		});
	}
}

function commentLinkDropper(event) {
	var linkFound = event.dataTransfer.types.contains("text/uri-list");
	if (linkFound) {
		event.preventDefault();
	}
}

function insertFormattingToPost(BBCode) {
	textarea = document.getElementById("profile-jot-text");

	insertBBCodeInTextarea(BBCode, textarea);

	return true;
}

function showThread(id) {
	$("#collapsed-comments-" + id).show();
	$("#collapsed-comments-" + id + " .collapsed-comments").show();
}
function hideThread(id) {
	$("#collapsed-comments-" + id).hide();
	$("#collapsed-comments-" + id + " .collapsed-comments").hide();
}

function cmtBbOpen(id) {
	$("#comment-edit-bb-" + id).show();
}
function cmtBbClose(id) {
	$("#comment-edit-bb-" + id).hide();
}

function commentExpand(id) {
	$("#mod-cmnt-wrap-" + id).show();
	closeMenu("comment-fake-form-" + id);
	openMenu("item-comments-" + id);
	$("#comment-edit-text-" + id)
		.putCursorAtEnd()
		.addClass("comment-edit-text-full")
		.removeClass("comment-edit-text-empty");

	return true;
}

function commentClose(obj, id) {
	if (obj.value === "" || obj.value === obj.dataset.default) {
		$("#comment-edit-text-" + id)
			.removeClass("comment-edit-text-full")
			.addClass("comment-edit-text-empty");
		$("#mod-cmnt-wrap-" + id).hide();
		openMenu("comment-fake-form-" + id);
		closeMenu("item-comments-" + id);
		return true;
	}
	return false;
}

function showHideCommentBox(id) {
	var $el = $("#comment-edit-form-" + id);
	if ($el.is(":visible")) {
		$el.hide();
	} else {
		$el.show();
	}
}

function commentOpenUI(obj, id) {
	closeMenu("comment-fake-form-" + id);
	openMenu("item-comments-" + id);
	$("#comment-edit-text-" + id)
		.putCursorAtEnd()
		.addClass("comment-edit-text-full")
		.removeClass("comment-edit-text-empty")
		.attr("tabindex", "9"); // Choose an arbitrary tab index that's greater than what we're using in jot (3 of them)
	$("#comment-edit-submit-" + id).attr("tabindex", "10"); // The submit button gets tabindex + 1
	// initialize autosize for this comment
	autosize($("#comment-edit-text-" + id + ".text-autosize"));
}

function commentCloseUI(obj, id) {
	if (obj.value === "" || obj.value === obj.dataset.default) {
		$("#comment-edit-text-" + id)
			.removeClass("comment-edit-text-full")
			.addClass("comment-edit-text-empty")
			.removeAttr("tabindex");
		$("#comment-edit-submit-" + id).removeAttr("tabindex");
		openMenu("comment-fake-form-" + id);
		closeMenu("item-comments-" + id);
		// destroy the automatic textarea resizing
		autosize.destroy($("#comment-edit-text-" + id + ".text-autosize"));
	}
}

function jotTextOpenUI(obj) {
	if (obj.value === "" || obj.value === obj.dataset.default) {
		var $el = $(".modal-body #profile-jot-text");
		$el.addClass("profile-jot-text-full").removeClass("profile-jot-text-empty");
		// initiale autosize for the jot
		autosize($el);
	}
}

function jotTextCloseUI(obj) {
	if (obj.value === "" || obj.value === obj.dataset.default) {
		var $el = $(".modal-body #profile-jot-text");
		$el.removeClass("profile-jot-text-full").addClass("profile-jot-text-empty");
		// destroy the automatic textarea resizing
		autosize.destroy($el);
	}
}

function commentOpen(obj, id) {
	if (obj.value === "" || obj.value === obj.dataset.default) {
		$("#comment-edit-text-" + id)
			.putCursorAtEnd()
			.addClass("comment-edit-text-full")
			.removeClass("comment-edit-text-empty");
		$("#mod-cmnt-wrap-" + id).show();
		closeMenu("comment-fake-form-" + id);
		openMenu("item-comments-" + id);
		return true;
	}
	return false;
}

function confirmDelete() {
	return confirm(aStr.delitem);
}

function confirmBlock() {
	return confirm(aStr.blockAuthor);
}

function confirmIgnore() {
	return confirm(aStr.ignoreAuthor);
}

function confirmCollapse() {
	return confirm(aStr.collapseAuthor);
}

function confirmIgnoreServer() {
	return confirm(aStr.ignoreServer + "\n" + aStr.ignoreServerDesc);
}

/**
 * Hide and removes an item element from the DOM after the deletion url is
 * successful, restore it else.
 *
 * @param {string} url The item removal URL
 * @param {string} elementId The DOM id of the item element
 * @returns {undefined}
 */
function dropItem(url, elementId) {
	if (confirmDelete()) {
		$("body").css("cursor", "wait");

		var $el = $(document.getElementById(elementId));

		$el.fadeTo('fast', 0.33, function () {
			$.get(url).then(function() {
				$el.remove();
			}).fail(function() {
				// @todo Show related error message
				$el.show();
			}).always(function() {
				$("body").css('cursor', 'auto');
			});
		});
	}
}

/**
 * Blocks an author and hide and removes an item element from the DOM after the block is
 * successful, restore it else.
 *
 * @param {string} url The item removal URL
 * @param {string} elementId The DOM id of the item element
 * @returns {undefined}
 */
function blockAuthor(url, elementId) {
	if (confirmBlock()) {
		$("body").css("cursor", "wait");

		var $el = $(document.getElementById(elementId));

		$el.fadeTo("fast", 0.33, function () {
			$.get(url)
				.then(function () {
					$el.remove();
				})
				.fail(function () {
					// @todo Show related error message
					$el.show();
				})
				.always(function () {
					$("body").css("cursor", "auto");
				});
		});
	}
}

/**
 * Ignored an author and hide and removes an item element from the DOM after the block is
 * successful, restore it else.
 *
 * @param {string} url The item removal URL
 * @param {string} elementId The DOM id of the item element
 * @returns {undefined}
 */
function ignoreAuthor(url, elementId) {
	if (confirmIgnore()) {
		$("body").css("cursor", "wait");

		var $el = $(document.getElementById(elementId));

		$el.fadeTo("fast", 0.33, function () {
			$.get(url)
				.then(function () {
					$el.remove();
				})
				.fail(function () {
					// @todo Show related error message
					$el.show();
				})
				.always(function () {
					$("body").css("cursor", "auto");
				});
		});
	}
}

/**
 * Collapse author posts
 *
 * @param {string} url The item collapse URL
 * @param {string} elementId The DOM id of the item element
 * @returns {undefined}
 */
function collapseAuthor(url, elementId) {
	if (confirmCollapse()) {
		$("body").css("cursor", "wait");

		var $el = $(document.getElementById(elementId));

		$el.fadeTo("fast", 0.33, function () {
			$.get(url)
				.then(function () {
					//$el.remove();
				})
				.fail(function () {
					// @todo Show related error message
					$el.show();
				})
				.always(function () {
					$("body").css("cursor", "auto");
				});
		});
	}
}


/**
 * Ignore author server
 *
 * @param {string} url The server ignore URL
 * @param {string} elementId The DOM id of the item element
 * @returns {undefined}
 */
function ignoreServer(url, elementId) {
	if (confirmIgnoreServer()) {
		$("body").css("cursor", "wait");

		var $el = $(document.getElementById(elementId));

		$el.fadeTo("fast", 0.33, function () {
			$.post(url)
				.then(function () {
					$el.remove();
				})
				.fail(function () {
					// @todo Show related error message
					$el.fadeTo("fast", 1);
				})
				.always(function () {
					$("body").css("cursor", "auto");
				});
		});
	}
}
// @license-end

!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(self,(function(){return function(){var e={3099:function(e){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},6077:function(e,t,n){var r=n(111);e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},1223:function(e,t,n){var r=n(5112),i=n(30),o=n(3070),a=r("unscopables"),u=Array.prototype;null==u[a]&&o.f(u,a,{configurable:!0,value:i(null)}),e.exports=function(e){u[a][e]=!0}},1530:function(e,t,n){"use strict";var r=n(8710).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},5787:function(e){e.exports=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e}},9670:function(e,t,n){var r=n(111);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},4019:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,i=n(4019),o=n(9781),a=n(7854),u=n(111),s=n(6656),l=n(648),c=n(8880),f=n(1320),p=n(3070).f,h=n(9518),d=n(7674),v=n(5112),y=n(9711),g=a.Int8Array,m=g&&g.prototype,b=a.Uint8ClampedArray,x=b&&b.prototype,w=g&&h(g),E=m&&h(m),k=Object.prototype,A=k.isPrototypeOf,S=v("toStringTag"),F=y("TYPED_ARRAY_TAG"),T=i&&!!d&&"Opera"!==l(a.opera),C=!1,L={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},R={BigInt64Array:8,BigUint64Array:8},I=function(e){if(!u(e))return!1;var t=l(e);return s(L,t)||s(R,t)};for(r in L)a[r]||(T=!1);if((!T||"function"!=typeof w||w===Function.prototype)&&(w=function(){throw TypeError("Incorrect invocation")},T))for(r in L)a[r]&&d(a[r],w);if((!T||!E||E===k)&&(E=w.prototype,T))for(r in L)a[r]&&d(a[r].prototype,E);if(T&&h(x)!==E&&d(x,E),o&&!s(E,S))for(r in C=!0,p(E,S,{get:function(){return u(this)?this[F]:void 0}}),L)a[r]&&c(a[r],F,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:T,TYPED_ARRAY_TAG:C&&F,aTypedArray:function(e){if(I(e))return e;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(e){if(d){if(A.call(w,e))return e}else for(var t in L)if(s(L,r)){var n=a[t];if(n&&(e===n||A.call(n,e)))return e}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(e,t,n){if(o){if(n)for(var r in L){var i=a[r];i&&s(i.prototype,e)&&delete i.prototype[e]}E[e]&&!n||f(E,e,n?t:T&&m[e]||t)}},exportTypedArrayStaticMethod:function(e,t,n){var r,i;if(o){if(d){if(n)for(r in L)(i=a[r])&&s(i,e)&&delete i[e];if(w[e]&&!n)return;try{return f(w,e,n?t:T&&g[e]||t)}catch(e){}}for(r in L)!(i=a[r])||i[e]&&!n||f(i,e,t)}},isView:function(e){if(!u(e))return!1;var t=l(e);return"DataView"===t||s(L,t)||s(R,t)},isTypedArray:I,TypedArray:w,TypedArrayPrototype:E}},3331:function(e,t,n){"use strict";var r=n(7854),i=n(9781),o=n(4019),a=n(8880),u=n(2248),s=n(7293),l=n(5787),c=n(9958),f=n(7466),p=n(7067),h=n(1179),d=n(9518),v=n(7674),y=n(8006).f,g=n(3070).f,m=n(1285),b=n(8003),x=n(9909),w=x.get,E=x.set,k="ArrayBuffer",A="DataView",S="Wrong index",F=r.ArrayBuffer,T=F,C=r.DataView,L=C&&C.prototype,R=Object.prototype,I=r.RangeError,U=h.pack,O=h.unpack,_=function(e){return[255&e]},M=function(e){return[255&e,e>>8&255]},z=function(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]},P=function(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]},j=function(e){return U(e,23,4)},D=function(e){return U(e,52,8)},N=function(e,t){g(e.prototype,t,{get:function(){return w(this)[t]}})},B=function(e,t,n,r){var i=p(n),o=w(e);if(i+t>o.byteLength)throw I(S);var a=w(o.buffer).bytes,u=i+o.byteOffset,s=a.slice(u,u+t);return r?s:s.reverse()},q=function(e,t,n,r,i,o){var a=p(n),u=w(e);if(a+t>u.byteLength)throw I(S);for(var s=w(u.buffer).bytes,l=a+u.byteOffset,c=r(+i),f=0;f<t;f++)s[l+f]=c[o?f:t-f-1]};if(o){if(!s((function(){F(1)}))||!s((function(){new F(-1)}))||s((function(){return new F,new F(1.5),new F(NaN),F.name!=k}))){for(var W,H=(T=function(e){return l(this,T),new F(p(e))}).prototype=F.prototype,Y=y(F),G=0;Y.length>G;)(W=Y[G++])in T||a(T,W,F[W]);H.constructor=T}v&&d(L)!==R&&v(L,R);var Q=new C(new T(2)),$=L.setInt8;Q.setInt8(0,2147483648),Q.setInt8(1,2147483649),!Q.getInt8(0)&&Q.getInt8(1)||u(L,{setInt8:function(e,t){$.call(this,e,t<<24>>24)},setUint8:function(e,t){$.call(this,e,t<<24>>24)}},{unsafe:!0})}else T=function(e){l(this,T,k);var t=p(e);E(this,{bytes:m.call(new Array(t),0),byteLength:t}),i||(this.byteLength=t)},C=function(e,t,n){l(this,C,A),l(e,T,A);var r=w(e).byteLength,o=c(t);if(o<0||o>r)throw I("Wrong offset");if(o+(n=void 0===n?r-o:f(n))>r)throw I("Wrong length");E(this,{buffer:e,byteLength:n,byteOffset:o}),i||(this.buffer=e,this.byteLength=n,this.byteOffset=o)},i&&(N(T,"byteLength"),N(C,"buffer"),N(C,"byteLength"),N(C,"byteOffset")),u(C.prototype,{getInt8:function(e){return B(this,1,e)[0]<<24>>24},getUint8:function(e){return B(this,1,e)[0]},getInt16:function(e){var t=B(this,2,e,arguments.length>1?arguments[1]:void 0);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=B(this,2,e,arguments.length>1?arguments[1]:void 0);return t[1]<<8|t[0]},getInt32:function(e){return P(B(this,4,e,arguments.length>1?arguments[1]:void 0))},getUint32:function(e){return P(B(this,4,e,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(e){return O(B(this,4,e,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(e){return O(B(this,8,e,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(e,t){q(this,1,e,_,t)},setUint8:function(e,t){q(this,1,e,_,t)},setInt16:function(e,t){q(this,2,e,M,t,arguments.length>2?arguments[2]:void 0)},setUint16:function(e,t){q(this,2,e,M,t,arguments.length>2?arguments[2]:void 0)},setInt32:function(e,t){q(this,4,e,z,t,arguments.length>2?arguments[2]:void 0)},setUint32:function(e,t){q(this,4,e,z,t,arguments.length>2?arguments[2]:void 0)},setFloat32:function(e,t){q(this,4,e,j,t,arguments.length>2?arguments[2]:void 0)},setFloat64:function(e,t){q(this,8,e,D,t,arguments.length>2?arguments[2]:void 0)}});b(T,k),b(C,A),e.exports={ArrayBuffer:T,DataView:C}},1048:function(e,t,n){"use strict";var r=n(7908),i=n(1400),o=n(7466),a=Math.min;e.exports=[].copyWithin||function(e,t){var n=r(this),u=o(n.length),s=i(e,u),l=i(t,u),c=arguments.length>2?arguments[2]:void 0,f=a((void 0===c?u:i(c,u))-l,u-s),p=1;for(l<s&&s<l+f&&(p=-1,l+=f-1,s+=f-1);f-- >0;)l in n?n[s]=n[l]:delete n[s],s+=p,l+=p;return n}},1285:function(e,t,n){"use strict";var r=n(7908),i=n(1400),o=n(7466);e.exports=function(e){for(var t=r(this),n=o(t.length),a=arguments.length,u=i(a>1?arguments[1]:void 0,n),s=a>2?arguments[2]:void 0,l=void 0===s?n:i(s,n);l>u;)t[u++]=e;return t}},8533:function(e,t,n){"use strict";var r=n(2092).forEach,i=n(9341)("forEach");e.exports=i?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},8457:function(e,t,n){"use strict";var r=n(9974),i=n(7908),o=n(3411),a=n(7659),u=n(7466),s=n(6135),l=n(1246);e.exports=function(e){var t,n,c,f,p,h,d=i(e),v="function"==typeof this?this:Array,y=arguments.length,g=y>1?arguments[1]:void 0,m=void 0!==g,b=l(d),x=0;if(m&&(g=r(g,y>2?arguments[2]:void 0,2)),null==b||v==Array&&a(b))for(n=new v(t=u(d.length));t>x;x++)h=m?g(d[x],x):d[x],s(n,x,h);else for(p=(f=b.call(d)).next,n=new v;!(c=p.call(f)).done;x++)h=m?o(f,g,[c.value,x],!0):c.value,s(n,x,h);return n.length=x,n}},1318:function(e,t,n){var r=n(5656),i=n(7466),o=n(1400),a=function(e){return function(t,n,a){var u,s=r(t),l=i(s.length),c=o(a,l);if(e&&n!=n){for(;l>c;)if((u=s[c++])!=u)return!0}else for(;l>c;c++)if((e||c in s)&&s[c]===n)return e||c||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},2092:function(e,t,n){var r=n(9974),i=n(8361),o=n(7908),a=n(7466),u=n(5417),s=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,c=4==e,f=6==e,p=7==e,h=5==e||f;return function(d,v,y,g){for(var m,b,x=o(d),w=i(x),E=r(v,y,3),k=a(w.length),A=0,S=g||u,F=t?S(d,k):n||p?S(d,0):void 0;k>A;A++)if((h||A in w)&&(b=E(m=w[A],A,x),e))if(t)F[A]=b;else if(b)switch(e){case 3:return!0;case 5:return m;case 6:return A;case 2:s.call(F,m)}else switch(e){case 4:return!1;case 7:s.call(F,m)}return f?-1:l||c?c:F}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},6583:function(e,t,n){"use strict";var r=n(5656),i=n(9958),o=n(7466),a=n(9341),u=Math.min,s=[].lastIndexOf,l=!!s&&1/[1].lastIndexOf(1,-0)<0,c=a("lastIndexOf"),f=l||!c;e.exports=f?function(e){if(l)return s.apply(this,arguments)||0;var t=r(this),n=o(t.length),a=n-1;for(arguments.length>1&&(a=u(a,i(arguments[1]))),a<0&&(a=n+a);a>=0;a--)if(a in t&&t[a]===e)return a||0;return-1}:s},1194:function(e,t,n){var r=n(7293),i=n(5112),o=n(7392),a=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[];return(t.constructor={})[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},9341:function(e,t,n){"use strict";var r=n(7293);e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},3671:function(e,t,n){var r=n(3099),i=n(7908),o=n(8361),a=n(7466),u=function(e){return function(t,n,u,s){r(n);var l=i(t),c=o(l),f=a(l.length),p=e?f-1:0,h=e?-1:1;if(u<2)for(;;){if(p in c){s=c[p],p+=h;break}if(p+=h,e?p<0:f<=p)throw TypeError("Reduce of empty array with no initial value")}for(;e?p>=0:f>p;p+=h)p in c&&(s=n(s,c[p],p,l));return s}};e.exports={left:u(!1),right:u(!0)}},5417:function(e,t,n){var r=n(111),i=n(3157),o=n(5112)("species");e.exports=function(e,t){var n;return i(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!i(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},3411:function(e,t,n){var r=n(9670),i=n(9212);e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(t){throw i(e),t}}},7072:function(e,t,n){var r=n(5112)("iterator"),i=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){i=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var o={};o[r]=function(){return{next:function(){return{done:n=!0}}}},e(o)}catch(e){}return n}},4326:function(e){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},648:function(e,t,n){var r=n(1694),i=n(4326),o=n(5112)("toStringTag"),a="Arguments"==i(function(){return arguments}());e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),o))?n:a?i(t):"Object"==(r=i(t))&&"function"==typeof t.callee?"Arguments":r}},9920:function(e,t,n){var r=n(6656),i=n(3887),o=n(1236),a=n(3070);e.exports=function(e,t){for(var n=i(t),u=a.f,s=o.f,l=0;l<n.length;l++){var c=n[l];r(e,c)||u(e,c,s(t,c))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},4994:function(e,t,n){"use strict";var r=n(3383).IteratorPrototype,i=n(30),o=n(9114),a=n(8003),u=n(7497),s=function(){return this};e.exports=function(e,t,n){var l=t+" Iterator";return e.prototype=i(r,{next:o(1,n)}),a(e,l,!1,!0),u[l]=s,e}},8880:function(e,t,n){var r=n(9781),i=n(3070),o=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},6135:function(e,t,n){"use strict";var r=n(7593),i=n(3070),o=n(9114);e.exports=function(e,t,n){var a=r(t);a in e?i.f(e,a,o(0,n)):e[a]=n}},654:function(e,t,n){"use strict";var r=n(2109),i=n(4994),o=n(9518),a=n(7674),u=n(8003),s=n(8880),l=n(1320),c=n(5112),f=n(1913),p=n(7497),h=n(3383),d=h.IteratorPrototype,v=h.BUGGY_SAFARI_ITERATORS,y=c("iterator"),g="keys",m="values",b="entries",x=function(){return this};e.exports=function(e,t,n,c,h,w,E){i(n,t,c);var k,A,S,F=function(e){if(e===h&&I)return I;if(!v&&e in L)return L[e];switch(e){case g:case m:case b:return function(){return new n(this,e)}}return function(){return new n(this)}},T=t+" Iterator",C=!1,L=e.prototype,R=L[y]||L["@@iterator"]||h&&L[h],I=!v&&R||F(h),U="Array"==t&&L.entries||R;if(U&&(k=o(U.call(new e)),d!==Object.prototype&&k.next&&(f||o(k)===d||(a?a(k,d):"function"!=typeof k[y]&&s(k,y,x)),u(k,T,!0,!0),f&&(p[T]=x))),h==m&&R&&R.name!==m&&(C=!0,I=function(){return R.call(this)}),f&&!E||L[y]===I||s(L,y,I),p[t]=I,h)if(A={values:F(m),keys:w?I:F(g),entries:F(b)},E)for(S in A)(v||C||!(S in L))&&l(L,S,A[S]);else r({target:t,proto:!0,forced:v||C},A);return A}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),i=n(111),o=r.document,a=i(o)&&i(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},8324:function(e){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,o=n(7854),a=n(8113),u=o.process,s=u&&u.versions,l=s&&s.v8;l?i=(r=l.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(i=r[1]),e.exports=i&&+i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),i=n(1236).f,o=n(8880),a=n(1320),u=n(3505),s=n(9920),l=n(4705);e.exports=function(e,t){var n,c,f,p,h,d=e.target,v=e.global,y=e.stat;if(n=v?r:y?r[d]||u(d,{}):(r[d]||{}).prototype)for(c in t){if(p=t[c],f=e.noTargetGet?(h=i(n,c))&&h.value:n[c],!l(v?c:d+(y?".":"#")+c,e.forced)&&void 0!==f){if(typeof p==typeof f)continue;s(p,f)}(e.sham||f&&f.sham)&&o(p,"sham",!0),a(n,c,p,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(e){return!0}}},7007:function(e,t,n){"use strict";n(4916);var r=n(1320),i=n(7293),o=n(5112),a=n(2261),u=n(8880),s=o("species"),l=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),c="$0"==="a".replace(/./,"$0"),f=o("replace"),p=!!/./[f]&&""===/./[f]("a","$0"),h=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var d=o(e),v=!i((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),y=v&&!i((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[s]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!v||!y||"replace"===e&&(!l||!c||p)||"split"===e&&!h){var g=/./[d],m=n(d,""[e],(function(e,t,n,r,i){return t.exec===a?v&&!i?{done:!0,value:g.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:c,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=m[0],x=m[1];r(String.prototype,e,b),r(RegExp.prototype,d,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}f&&u(RegExp.prototype[d],"sham",!0)}},9974:function(e,t,n){var r=n(3099);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},5005:function(e,t,n){var r=n(857),i=n(7854),o=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e])||o(i[e]):r[e]&&r[e][t]||i[e]&&i[e][t]}},1246:function(e,t,n){var r=n(648),i=n(7497),o=n(5112)("iterator");e.exports=function(e){if(null!=e)return e[o]||e["@@iterator"]||i[r(e)]}},8554:function(e,t,n){var r=n(9670),i=n(1246);e.exports=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return r(t.call(e))}},647:function(e,t,n){var r=n(7908),i=Math.floor,o="".replace,a=/\$([$&'`]|\d\d?|<[^>]*>)/g,u=/\$([$&'`]|\d\d?)/g;e.exports=function(e,t,n,s,l,c){var f=n+e.length,p=s.length,h=u;return void 0!==l&&(l=r(l),h=a),o.call(c,h,(function(r,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(f);case"<":a=l[o.slice(1,-1)];break;default:var u=+o;if(0===u)return r;if(u>p){var c=i(u/10);return 0===c?r:c<=p?void 0===s[c-1]?o.charAt(1):s[c-1]+o.charAt(1):r}a=s[u-1]}return void 0===a?"":a}))}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6656:function(e){var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),i=n(7293),o=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},1179:function(e){var t=Math.abs,n=Math.pow,r=Math.floor,i=Math.log,o=Math.LN2;e.exports={pack:function(e,a,u){var s,l,c,f=new Array(u),p=8*u-a-1,h=(1<<p)-1,d=h>>1,v=23===a?n(2,-24)-n(2,-77):0,y=e<0||0===e&&1/e<0?1:0,g=0;for((e=t(e))!=e||e===1/0?(l=e!=e?1:0,s=h):(s=r(i(e)/o),e*(c=n(2,-s))<1&&(s--,c*=2),(e+=s+d>=1?v/c:v*n(2,1-d))*c>=2&&(s++,c/=2),s+d>=h?(l=0,s=h):s+d>=1?(l=(e*c-1)*n(2,a),s+=d):(l=e*n(2,d-1)*n(2,a),s=0));a>=8;f[g++]=255&l,l/=256,a-=8);for(s=s<<a|l,p+=a;p>0;f[g++]=255&s,s/=256,p-=8);return f[--g]|=128*y,f},unpack:function(e,t){var r,i=e.length,o=8*i-t-1,a=(1<<o)-1,u=a>>1,s=o-7,l=i-1,c=e[l--],f=127&c;for(c>>=7;s>0;f=256*f+e[l],l--,s-=8);for(r=f&(1<<-s)-1,f>>=-s,s+=t;s>0;r=256*r+e[l],l--,s-=8);if(0===f)f=1-u;else{if(f===a)return r?NaN:c?-1/0:1/0;r+=n(2,t),f-=u}return(c?-1:1)*r*n(2,f-t)}}},8361:function(e,t,n){var r=n(7293),i=n(4326),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?o.call(e,""):Object(e)}:Object},9587:function(e,t,n){var r=n(111),i=n(7674);e.exports=function(e,t,n){var o,a;return i&&"function"==typeof(o=t.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&i(e,a),e}},2788:function(e,t,n){var r=n(5465),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return i.call(e)}),e.exports=r.inspectSource},9909:function(e,t,n){var r,i,o,a=n(8536),u=n(7854),s=n(111),l=n(8880),c=n(6656),f=n(5465),p=n(6200),h=n(3501),d=u.WeakMap;if(a){var v=f.state||(f.state=new d),y=v.get,g=v.has,m=v.set;r=function(e,t){return t.facade=e,m.call(v,e,t),t},i=function(e){return y.call(v,e)||{}},o=function(e){return g.call(v,e)}}else{var b=p("state");h[b]=!0,r=function(e,t){return t.facade=e,l(e,b,t),t},i=function(e){return c(e,b)?e[b]:{}},o=function(e){return c(e,b)}}e.exports={set:r,get:i,has:o,enforce:function(e){return o(e)?i(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!s(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},7659:function(e,t,n){var r=n(5112),i=n(7497),o=r("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||a[o]===e)}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4705:function(e,t,n){var r=n(7293),i=/#|\.prototype\./,o=function(e,t){var n=u[a(e)];return n==l||n!=s&&("function"==typeof t?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(i,".").toLowerCase()},u=o.data={},s=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},111:function(e){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},1913:function(e){e.exports=!1},7850:function(e,t,n){var r=n(111),i=n(4326),o=n(5112)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},9212:function(e,t,n){var r=n(9670);e.exports=function(e){var t=e.return;if(void 0!==t)return r(t.call(e)).value}},3383:function(e,t,n){"use strict";var r,i,o,a=n(7293),u=n(9518),s=n(8880),l=n(6656),c=n(5112),f=n(1913),p=c("iterator"),h=!1;[].keys&&("next"in(o=[].keys())?(i=u(u(o)))!==Object.prototype&&(r=i):h=!0);var d=null==r||a((function(){var e={};return r[p].call(e)!==e}));d&&(r={}),f&&!d||l(r,p)||s(r,p,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:h}},7497:function(e){e.exports={}},133:function(e,t,n){var r=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},590:function(e,t,n){var r=n(7293),i=n(5112),o=n(1913),a=i("iterator");e.exports=!r((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,n="";return e.pathname="c%20d",t.forEach((function(e,r){t.delete("b"),n+=r+e})),o&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[a]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},8536:function(e,t,n){var r=n(7854),i=n(2788),o=r.WeakMap;e.exports="function"==typeof o&&/native code/.test(i(o))},1574:function(e,t,n){"use strict";var r=n(9781),i=n(7293),o=n(1956),a=n(5181),u=n(5296),s=n(7908),l=n(8361),c=Object.assign,f=Object.defineProperty;e.exports=!c||i((function(){if(r&&1!==c({b:1},c(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=c({},e)[n]||o(c({},t)).join("")!=i}))?function(e,t){for(var n=s(e),i=arguments.length,c=1,f=a.f,p=u.f;i>c;)for(var h,d=l(arguments[c++]),v=f?o(d).concat(f(d)):o(d),y=v.length,g=0;y>g;)h=v[g++],r&&!p.call(d,h)||(n[h]=d[h]);return n}:c},30:function(e,t,n){var r,i=n(9670),o=n(6048),a=n(748),u=n(3501),s=n(490),l=n(317),c=n(6200)("IE_PROTO"),f=function(){},p=function(e){return"<script>"+e+"<\/script>"},h=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;h=r?function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t}(r):((t=l("iframe")).style.display="none",s.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F);for(var n=a.length;n--;)delete h.prototype[a[n]];return h()};u[c]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(f.prototype=i(e),n=new f,f.prototype=null,n[c]=e):n=h(),void 0===t?n:o(n,t)}},6048:function(e,t,n){var r=n(9781),i=n(3070),o=n(9670),a=n(1956);e.exports=r?Object.defineProperties:function(e,t){o(e);for(var n,r=a(t),u=r.length,s=0;u>s;)i.f(e,n=r[s++],t[n]);return e}},3070:function(e,t,n){var r=n(9781),i=n(4664),o=n(9670),a=n(7593),u=Object.defineProperty;t.f=r?u:function(e,t,n){if(o(e),t=a(t,!0),o(n),i)try{return u(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(5296),o=n(9114),a=n(5656),u=n(7593),s=n(6656),l=n(4664),c=Object.getOwnPropertyDescriptor;t.f=r?c:function(e,t){if(e=a(e),t=u(t,!0),l)try{return c(e,t)}catch(e){}if(s(e,t))return o(!i.f.call(e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(6656),i=n(7908),o=n(6200),a=n(8544),u=o("IE_PROTO"),s=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){return e=i(e),r(e,u)?e[u]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},6324:function(e,t,n){var r=n(6656),i=n(5656),o=n(1318).indexOf,a=n(3501);e.exports=function(e,t){var n,u=i(e),s=0,l=[];for(n in u)!r(a,n)&&r(u,n)&&l.push(n);for(;t.length>s;)r(u,n=t[s++])&&(~o(l,n)||l.push(n));return l}},1956:function(e,t,n){var r=n(6324),i=n(748);e.exports=Object.keys||function(e){return r(e,i)}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(9670),i=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,o){return r(n),i(o),t?e.call(n,o):n.__proto__=o,n}}():void 0)},288:function(e,t,n){"use strict";var r=n(1694),i=n(648);e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},3887:function(e,t,n){var r=n(5005),i=n(8006),o=n(5181),a=n(9670);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=o.f;return n?t.concat(n(e)):t}},857:function(e,t,n){var r=n(7854);e.exports=r},2248:function(e,t,n){var r=n(1320);e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},1320:function(e,t,n){var r=n(7854),i=n(8880),o=n(6656),a=n(3505),u=n(2788),s=n(9909),l=s.get,c=s.enforce,f=String(String).split("String");(e.exports=function(e,t,n,u){var s,l=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,h=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof t||o(n,"name")||i(n,"name",t),(s=c(n)).source||(s.source=f.join("string"==typeof t?t:""))),e!==r?(l?!h&&e[t]&&(p=!0):delete e[t],p?e[t]=n:i(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||u(this)}))},7651:function(e,t,n){var r=n(4326),i=n(2261);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var o=n.call(e,t);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},2261:function(e,t,n){"use strict";var r,i,o=n(7066),a=n(2999),u=RegExp.prototype.exec,s=String.prototype.replace,l=u,c=(r=/a/,i=/b*/g,u.call(r,"a"),u.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),f=a.UNSUPPORTED_Y||a.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(c||p||f)&&(l=function(e){var t,n,r,i,a=this,l=f&&a.sticky,h=o.call(a),d=a.source,v=0,y=e;return l&&(-1===(h=h.replace("y","")).indexOf("g")&&(h+="g"),y=String(e).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==e[a.lastIndex-1])&&(d="(?: "+d+")",y=" "+y,v++),n=new RegExp("^(?:"+d+")",h)),p&&(n=new RegExp("^"+d+"$(?!\\s)",h)),c&&(t=a.lastIndex),r=u.call(l?n:a,y),l?r?(r.input=r.input.slice(v),r[0]=r[0].slice(v),r.index=a.lastIndex,a.lastIndex+=r[0].length):a.lastIndex=0:c&&r&&(a.lastIndex=a.global?r.index+r[0].length:t),p&&r&&r.length>1&&s.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),e.exports=l},7066:function(e,t,n){"use strict";var r=n(9670);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},2999:function(e,t,n){"use strict";var r=n(7293);function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},4488:function(e){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},3505:function(e,t,n){var r=n(7854),i=n(8880);e.exports=function(e,t){try{i(r,e,t)}catch(n){r[e]=t}return t}},6340:function(e,t,n){"use strict";var r=n(5005),i=n(3070),o=n(5112),a=n(9781),u=o("species");e.exports=function(e){var t=r(e),n=i.f;a&&t&&!t[u]&&n(t,u,{configurable:!0,get:function(){return this}})}},8003:function(e,t,n){var r=n(3070).f,i=n(6656),o=n(5112)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},6200:function(e,t,n){var r=n(2309),i=n(9711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3505),o="__core-js_shared__",a=r[o]||i(o,{});e.exports=a},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6707:function(e,t,n){var r=n(9670),i=n(3099),o=n(5112)("species");e.exports=function(e,t){var n,a=r(e).constructor;return void 0===a||null==(n=r(a)[o])?t:i(n)}},8710:function(e,t,n){var r=n(9958),i=n(4488),o=function(e){return function(t,n){var o,a,u=String(i(t)),s=r(n),l=u.length;return s<0||s>=l?e?"":void 0:(o=u.charCodeAt(s))<55296||o>56319||s+1===l||(a=u.charCodeAt(s+1))<56320||a>57343?e?u.charAt(s):o:e?u.slice(s,s+2):a-56320+(o-55296<<10)+65536}};e.exports={codeAt:o(!1),charAt:o(!0)}},3197:function(e){"use strict";var t=2147483647,n=/[^\0-\u007E]/,r=/[.\u3002\uFF0E\uFF61]/g,i="Overflow: input needs wider integers to process",o=Math.floor,a=String.fromCharCode,u=function(e){return e+22+75*(e<26)},s=function(e,t,n){var r=0;for(e=n?o(e/700):e>>1,e+=o(e/t);e>455;r+=36)e=o(e/35);return o(r+36*e/(e+38))},l=function(e){var n,r,l=[],c=(e=function(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);56320==(64512&o)?t.push(((1023&i)<<10)+(1023&o)+65536):(t.push(i),n--)}else t.push(i)}return t}(e)).length,f=128,p=0,h=72;for(n=0;n<e.length;n++)(r=e[n])<128&&l.push(a(r));var d=l.length,v=d;for(d&&l.push("-");v<c;){var y=t;for(n=0;n<e.length;n++)(r=e[n])>=f&&r<y&&(y=r);var g=v+1;if(y-f>o((t-p)/g))throw RangeError(i);for(p+=(y-f)*g,f=y,n=0;n<e.length;n++){if((r=e[n])<f&&++p>t)throw RangeError(i);if(r==f){for(var m=p,b=36;;b+=36){var x=b<=h?1:b>=h+26?26:b-h;if(m<x)break;var w=m-x,E=36-x;l.push(a(u(x+w%E))),m=o(w/E)}l.push(a(u(m))),h=s(p,g,v==d),p=0,++v}}++p,++f}return l.join("")};e.exports=function(e){var t,i,o=[],a=e.toLowerCase().replace(r,".").split(".");for(t=0;t<a.length;t++)i=a[t],o.push(n.test(i)?"xn--"+l(i):i);return o.join(".")}},6091:function(e,t,n){var r=n(7293),i=n(1361);e.exports=function(e){return r((function(){return!!i[e]()||"​᠎"!="​᠎"[e]()||i[e].name!==e}))}},3111:function(e,t,n){var r=n(4488),i="["+n(1361)+"]",o=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),u=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(a,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},1400:function(e,t,n){var r=n(9958),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},7067:function(e,t,n){var r=n(9958),i=n(7466);e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=i(t);if(t!==n)throw RangeError("Wrong length or index");return n}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9958:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},7466:function(e,t,n){var r=n(9958),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488);e.exports=function(e){return Object(r(e))}},4590:function(e,t,n){var r=n(3002);e.exports=function(e,t){var n=r(e);if(n%t)throw RangeError("Wrong offset");return n}},3002:function(e,t,n){var r=n(9958);e.exports=function(e){var t=r(e);if(t<0)throw RangeError("The argument can't be less than 0");return t}},7593:function(e,t,n){var r=n(111);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},9843:function(e,t,n){"use strict";var r=n(2109),i=n(7854),o=n(9781),a=n(3832),u=n(260),s=n(3331),l=n(5787),c=n(9114),f=n(8880),p=n(7466),h=n(7067),d=n(4590),v=n(7593),y=n(6656),g=n(648),m=n(111),b=n(30),x=n(7674),w=n(8006).f,E=n(7321),k=n(2092).forEach,A=n(6340),S=n(3070),F=n(1236),T=n(9909),C=n(9587),L=T.get,R=T.set,I=S.f,U=F.f,O=Math.round,_=i.RangeError,M=s.ArrayBuffer,z=s.DataView,P=u.NATIVE_ARRAY_BUFFER_VIEWS,j=u.TYPED_ARRAY_TAG,D=u.TypedArray,N=u.TypedArrayPrototype,B=u.aTypedArrayConstructor,q=u.isTypedArray,W="BYTES_PER_ELEMENT",H="Wrong length",Y=function(e,t){for(var n=0,r=t.length,i=new(B(e))(r);r>n;)i[n]=t[n++];return i},G=function(e,t){I(e,t,{get:function(){return L(this)[t]}})},Q=function(e){var t;return e instanceof M||"ArrayBuffer"==(t=g(e))||"SharedArrayBuffer"==t},$=function(e,t){return q(e)&&"symbol"!=typeof t&&t in e&&String(+t)==String(t)},V=function(e,t){return $(e,t=v(t,!0))?c(2,e[t]):U(e,t)},X=function(e,t,n){return!($(e,t=v(t,!0))&&m(n)&&y(n,"value"))||y(n,"get")||y(n,"set")||n.configurable||y(n,"writable")&&!n.writable||y(n,"enumerable")&&!n.enumerable?I(e,t,n):(e[t]=n.value,e)};o?(P||(F.f=V,S.f=X,G(N,"buffer"),G(N,"byteOffset"),G(N,"byteLength"),G(N,"length")),r({target:"Object",stat:!0,forced:!P},{getOwnPropertyDescriptor:V,defineProperty:X}),e.exports=function(e,t,n){var o=e.match(/\d+$/)[0]/8,u=e+(n?"Clamped":"")+"Array",s="get"+e,c="set"+e,v=i[u],y=v,g=y&&y.prototype,S={},F=function(e,t){I(e,t,{get:function(){return function(e,t){var n=L(e);return n.view[s](t*o+n.byteOffset,!0)}(this,t)},set:function(e){return function(e,t,r){var i=L(e);n&&(r=(r=O(r))<0?0:r>255?255:255&r),i.view[c](t*o+i.byteOffset,r,!0)}(this,t,e)},enumerable:!0})};P?a&&(y=t((function(e,t,n,r){return l(e,y,u),C(m(t)?Q(t)?void 0!==r?new v(t,d(n,o),r):void 0!==n?new v(t,d(n,o)):new v(t):q(t)?Y(y,t):E.call(y,t):new v(h(t)),e,y)})),x&&x(y,D),k(w(v),(function(e){e in y||f(y,e,v[e])})),y.prototype=g):(y=t((function(e,t,n,r){l(e,y,u);var i,a,s,c=0,f=0;if(m(t)){if(!Q(t))return q(t)?Y(y,t):E.call(y,t);i=t,f=d(n,o);var v=t.byteLength;if(void 0===r){if(v%o)throw _(H);if((a=v-f)<0)throw _(H)}else if((a=p(r)*o)+f>v)throw _(H);s=a/o}else s=h(t),i=new M(a=s*o);for(R(e,{buffer:i,byteOffset:f,byteLength:a,length:s,view:new z(i)});c<s;)F(e,c++)})),x&&x(y,D),g=y.prototype=b(N)),g.constructor!==y&&f(g,"constructor",y),j&&f(g,j,u),S[u]=y,r({global:!0,forced:y!=v,sham:!P},S),W in y||f(y,W,o),W in g||f(g,W,o),A(u)}):e.exports=function(){}},3832:function(e,t,n){var r=n(7854),i=n(7293),o=n(7072),a=n(260).NATIVE_ARRAY_BUFFER_VIEWS,u=r.ArrayBuffer,s=r.Int8Array;e.exports=!a||!i((function(){s(1)}))||!i((function(){new s(-1)}))||!o((function(e){new s,new s(null),new s(1.5),new s(e)}),!0)||i((function(){return 1!==new s(new u(2),1,void 0).length}))},3074:function(e,t,n){var r=n(260).aTypedArrayConstructor,i=n(6707);e.exports=function(e,t){for(var n=i(e,e.constructor),o=0,a=t.length,u=new(r(n))(a);a>o;)u[o]=t[o++];return u}},7321:function(e,t,n){var r=n(7908),i=n(7466),o=n(1246),a=n(7659),u=n(9974),s=n(260).aTypedArrayConstructor;e.exports=function(e){var t,n,l,c,f,p,h=r(e),d=arguments.length,v=d>1?arguments[1]:void 0,y=void 0!==v,g=o(h);if(null!=g&&!a(g))for(p=(f=g.call(h)).next,h=[];!(c=p.call(f)).done;)h.push(c.value);for(y&&d>2&&(v=u(v,arguments[2],2)),n=i(h.length),l=new(s(this))(n),t=0;n>t;t++)l[t]=y?v(h[t],t):h[t];return l}},9711:function(e){var t=0,n=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+n).toString(36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(e,t,n){var r=n(7854),i=n(2309),o=n(6656),a=n(9711),u=n(133),s=n(3307),l=i("wks"),c=r.Symbol,f=s?c:c&&c.withoutSetter||a;e.exports=function(e){return o(l,e)||(u&&o(c,e)?l[e]=c[e]:l[e]=f("Symbol."+e)),l[e]}},1361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},8264:function(e,t,n){"use strict";var r=n(2109),i=n(7854),o=n(3331),a=n(6340),u=o.ArrayBuffer;r({global:!0,forced:i.ArrayBuffer!==u},{ArrayBuffer:u}),a("ArrayBuffer")},2222:function(e,t,n){"use strict";var r=n(2109),i=n(7293),o=n(3157),a=n(111),u=n(7908),s=n(7466),l=n(6135),c=n(5417),f=n(1194),p=n(5112),h=n(7392),d=p("isConcatSpreadable"),v=9007199254740991,y="Maximum allowed index exceeded",g=h>=51||!i((function(){var e=[];return e[d]=!1,e.concat()[0]!==e})),m=f("concat"),b=function(e){if(!a(e))return!1;var t=e[d];return void 0!==t?!!t:o(e)};r({target:"Array",proto:!0,forced:!g||!m},{concat:function(e){var t,n,r,i,o,a=u(this),f=c(a,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(b(o=-1===t?a:arguments[t])){if(p+(i=s(o.length))>v)throw TypeError(y);for(n=0;n<i;n++,p++)n in o&&l(f,p,o[n])}else{if(p>=v)throw TypeError(y);l(f,p++,o)}return f.length=p,f}})},7327:function(e,t,n){"use strict";var r=n(2109),i=n(2092).filter;r({target:"Array",proto:!0,forced:!n(1194)("filter")},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},2772:function(e,t,n){"use strict";var r=n(2109),i=n(1318).indexOf,o=n(9341),a=[].indexOf,u=!!a&&1/[1].indexOf(1,-0)<0,s=o("indexOf");r({target:"Array",proto:!0,forced:u||!s},{indexOf:function(e){return u?a.apply(this,arguments)||0:i(this,e,arguments.length>1?arguments[1]:void 0)}})},6992:function(e,t,n){"use strict";var r=n(5656),i=n(1223),o=n(7497),a=n(9909),u=n(654),s="Array Iterator",l=a.set,c=a.getterFor(s);e.exports=u(Array,"Array",(function(e,t){l(this,{type:s,target:r(e),index:0,kind:t})}),(function(){var e=c(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},1249:function(e,t,n){"use strict";var r=n(2109),i=n(2092).map;r({target:"Array",proto:!0,forced:!n(1194)("map")},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},7042:function(e,t,n){"use strict";var r=n(2109),i=n(111),o=n(3157),a=n(1400),u=n(7466),s=n(5656),l=n(6135),c=n(5112),f=n(1194)("slice"),p=c("species"),h=[].slice,d=Math.max;r({target:"Array",proto:!0,forced:!f},{slice:function(e,t){var n,r,c,f=s(this),v=u(f.length),y=a(e,v),g=a(void 0===t?v:t,v);if(o(f)&&("function"!=typeof(n=f.constructor)||n!==Array&&!o(n.prototype)?i(n)&&null===(n=n[p])&&(n=void 0):n=void 0,n===Array||void 0===n))return h.call(f,y,g);for(r=new(void 0===n?Array:n)(d(g-y,0)),c=0;y<g;y++,c++)y in f&&l(r,c,f[y]);return r.length=c,r}})},561:function(e,t,n){"use strict";var r=n(2109),i=n(1400),o=n(9958),a=n(7466),u=n(7908),s=n(5417),l=n(6135),c=n(1194)("splice"),f=Math.max,p=Math.min,h=9007199254740991,d="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!c},{splice:function(e,t){var n,r,c,v,y,g,m=u(this),b=a(m.length),x=i(e,b),w=arguments.length;if(0===w?n=r=0:1===w?(n=0,r=b-x):(n=w-2,r=p(f(o(t),0),b-x)),b+n-r>h)throw TypeError(d);for(c=s(m,r),v=0;v<r;v++)(y=x+v)in m&&l(c,v,m[y]);if(c.length=r,n<r){for(v=x;v<b-r;v++)g=v+n,(y=v+r)in m?m[g]=m[y]:delete m[g];for(v=b;v>b-r+n;v--)delete m[v-1]}else if(n>r)for(v=b-r;v>x;v--)g=v+n-1,(y=v+r-1)in m?m[g]=m[y]:delete m[g];for(v=0;v<n;v++)m[v+x]=arguments[v+2];return m.length=b-r+n,c}})},8309:function(e,t,n){var r=n(9781),i=n(3070).f,o=Function.prototype,a=o.toString,u=/^\s*function ([^ (]*)/,s="name";r&&!(s in o)&&i(o,s,{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(e){return""}}})},489:function(e,t,n){var r=n(2109),i=n(7293),o=n(7908),a=n(9518),u=n(8544);r({target:"Object",stat:!0,forced:i((function(){a(1)})),sham:!u},{getPrototypeOf:function(e){return a(o(e))}})},1539:function(e,t,n){var r=n(1694),i=n(1320),o=n(288);r||i(Object.prototype,"toString",o,{unsafe:!0})},4916:function(e,t,n){"use strict";var r=n(2109),i=n(2261);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},9714:function(e,t,n){"use strict";var r=n(1320),i=n(9670),o=n(7293),a=n(7066),u="toString",s=RegExp.prototype,l=s.toString,c=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=u;(c||f)&&r(RegExp.prototype,u,(function(){var e=i(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in s)?a.call(e):n)}),{unsafe:!0})},8783:function(e,t,n){"use strict";var r=n(8710).charAt,i=n(9909),o=n(654),a="String Iterator",u=i.set,s=i.getterFor(a);o(String,"String",(function(e){u(this,{type:a,string:String(e),index:0})}),(function(){var e,t=s(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},4723:function(e,t,n){"use strict";var r=n(7007),i=n(9670),o=n(7466),a=n(4488),u=n(1530),s=n(7651);r("match",1,(function(e,t,n){return[function(t){var n=a(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var a=i(e),l=String(this);if(!a.global)return s(a,l);var c=a.unicode;a.lastIndex=0;for(var f,p=[],h=0;null!==(f=s(a,l));){var d=String(f[0]);p[h]=d,""===d&&(a.lastIndex=u(l,o(a.lastIndex),c)),h++}return 0===h?null:p}]}))},5306:function(e,t,n){"use strict";var r=n(7007),i=n(9670),o=n(7466),a=n(9958),u=n(4488),s=n(1530),l=n(647),c=n(7651),f=Math.max,p=Math.min;r("replace",2,(function(e,t,n,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,d=r.REPLACE_KEEPS_$0,v=h?"$":"$0";return[function(n,r){var i=u(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i,r):t.call(String(i),n,r)},function(e,r){if(!h&&d||"string"==typeof r&&-1===r.indexOf(v)){var u=n(t,e,this,r);if(u.done)return u.value}var y=i(e),g=String(this),m="function"==typeof r;m||(r=String(r));var b=y.global;if(b){var x=y.unicode;y.lastIndex=0}for(var w=[];;){var E=c(y,g);if(null===E)break;if(w.push(E),!b)break;""===String(E[0])&&(y.lastIndex=s(g,o(y.lastIndex),x))}for(var k,A="",S=0,F=0;F<w.length;F++){E=w[F];for(var T=String(E[0]),C=f(p(a(E.index),g.length),0),L=[],R=1;R<E.length;R++)L.push(void 0===(k=E[R])?k:String(k));var I=E.groups;if(m){var U=[T].concat(L,C,g);void 0!==I&&U.push(I);var O=String(r.apply(void 0,U))}else O=l(T,g,C,L,I,r);C>=S&&(A+=g.slice(S,C)+O,S=C+T.length)}return A+g.slice(S)}]}))},3123:function(e,t,n){"use strict";var r=n(7007),i=n(7850),o=n(9670),a=n(4488),u=n(6707),s=n(1530),l=n(7466),c=n(7651),f=n(2261),p=n(7293),h=[].push,d=Math.min,v=4294967295,y=!p((function(){return!RegExp(v,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(a(this)),o=void 0===n?v:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,o);for(var u,s,l,c=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,y=new RegExp(e.source,p+"g");(u=f.call(y,r))&&!((s=y.lastIndex)>d&&(c.push(r.slice(d,u.index)),u.length>1&&u.index<r.length&&h.apply(c,u.slice(1)),l=u[0].length,d=s,c.length>=o));)y.lastIndex===u.index&&y.lastIndex++;return d===r.length?!l&&y.test("")||c.push(""):c.push(r.slice(d)),c.length>o?c.slice(0,o):c}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=a(this),o=null==t?void 0:t[e];return void 0!==o?o.call(t,i,n):r.call(String(i),t,n)},function(e,i){var a=n(r,e,this,i,r!==t);if(a.done)return a.value;var f=o(e),p=String(this),h=u(f,RegExp),g=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(y?"y":"g"),b=new h(y?f:"^(?:"+f.source+")",m),x=void 0===i?v:i>>>0;if(0===x)return[];if(0===p.length)return null===c(b,p)?[p]:[];for(var w=0,E=0,k=[];E<p.length;){b.lastIndex=y?E:0;var A,S=c(b,y?p:p.slice(E));if(null===S||(A=d(l(b.lastIndex+(y?0:E)),p.length))===w)E=s(p,E,g);else{if(k.push(p.slice(w,E)),k.length===x)return k;for(var F=1;F<=S.length-1;F++)if(k.push(S[F]),k.length===x)return k;E=w=A}}return k.push(p.slice(w)),k}]}),!y)},3210:function(e,t,n){"use strict";var r=n(2109),i=n(3111).trim;r({target:"String",proto:!0,forced:n(6091)("trim")},{trim:function(){return i(this)}})},2990:function(e,t,n){"use strict";var r=n(260),i=n(1048),o=r.aTypedArray;(0,r.exportTypedArrayMethod)("copyWithin",(function(e,t){return i.call(o(this),e,t,arguments.length>2?arguments[2]:void 0)}))},8927:function(e,t,n){"use strict";var r=n(260),i=n(2092).every,o=r.aTypedArray;(0,r.exportTypedArrayMethod)("every",(function(e){return i(o(this),e,arguments.length>1?arguments[1]:void 0)}))},3105:function(e,t,n){"use strict";var r=n(260),i=n(1285),o=r.aTypedArray;(0,r.exportTypedArrayMethod)("fill",(function(e){return i.apply(o(this),arguments)}))},5035:function(e,t,n){"use strict";var r=n(260),i=n(2092).filter,o=n(3074),a=r.aTypedArray;(0,r.exportTypedArrayMethod)("filter",(function(e){var t=i(a(this),e,arguments.length>1?arguments[1]:void 0);return o(this,t)}))},7174:function(e,t,n){"use strict";var r=n(260),i=n(2092).findIndex,o=r.aTypedArray;(0,r.exportTypedArrayMethod)("findIndex",(function(e){return i(o(this),e,arguments.length>1?arguments[1]:void 0)}))},4345:function(e,t,n){"use strict";var r=n(260),i=n(2092).find,o=r.aTypedArray;(0,r.exportTypedArrayMethod)("find",(function(e){return i(o(this),e,arguments.length>1?arguments[1]:void 0)}))},2846:function(e,t,n){"use strict";var r=n(260),i=n(2092).forEach,o=r.aTypedArray;(0,r.exportTypedArrayMethod)("forEach",(function(e){i(o(this),e,arguments.length>1?arguments[1]:void 0)}))},4731:function(e,t,n){"use strict";var r=n(260),i=n(1318).includes,o=r.aTypedArray;(0,r.exportTypedArrayMethod)("includes",(function(e){return i(o(this),e,arguments.length>1?arguments[1]:void 0)}))},7209:function(e,t,n){"use strict";var r=n(260),i=n(1318).indexOf,o=r.aTypedArray;(0,r.exportTypedArrayMethod)("indexOf",(function(e){return i(o(this),e,arguments.length>1?arguments[1]:void 0)}))},6319:function(e,t,n){"use strict";var r=n(7854),i=n(260),o=n(6992),a=n(5112)("iterator"),u=r.Uint8Array,s=o.values,l=o.keys,c=o.entries,f=i.aTypedArray,p=i.exportTypedArrayMethod,h=u&&u.prototype[a],d=!!h&&("values"==h.name||null==h.name),v=function(){return s.call(f(this))};p("entries",(function(){return c.call(f(this))})),p("keys",(function(){return l.call(f(this))})),p("values",v,!d),p(a,v,!d)},8867:function(e,t,n){"use strict";var r=n(260),i=r.aTypedArray,o=r.exportTypedArrayMethod,a=[].join;o("join",(function(e){return a.apply(i(this),arguments)}))},7789:function(e,t,n){"use strict";var r=n(260),i=n(6583),o=r.aTypedArray;(0,r.exportTypedArrayMethod)("lastIndexOf",(function(e){return i.apply(o(this),arguments)}))},3739:function(e,t,n){"use strict";var r=n(260),i=n(2092).map,o=n(6707),a=r.aTypedArray,u=r.aTypedArrayConstructor;(0,r.exportTypedArrayMethod)("map",(function(e){return i(a(this),e,arguments.length>1?arguments[1]:void 0,(function(e,t){return new(u(o(e,e.constructor)))(t)}))}))},4483:function(e,t,n){"use strict";var r=n(260),i=n(3671).right,o=r.aTypedArray;(0,r.exportTypedArrayMethod)("reduceRight",(function(e){return i(o(this),e,arguments.length,arguments.length>1?arguments[1]:void 0)}))},9368:function(e,t,n){"use strict";var r=n(260),i=n(3671).left,o=r.aTypedArray;(0,r.exportTypedArrayMethod)("reduce",(function(e){return i(o(this),e,arguments.length,arguments.length>1?arguments[1]:void 0)}))},2056:function(e,t,n){"use strict";var r=n(260),i=r.aTypedArray,o=r.exportTypedArrayMethod,a=Math.floor;o("reverse",(function(){for(var e,t=this,n=i(t).length,r=a(n/2),o=0;o<r;)e=t[o],t[o++]=t[--n],t[n]=e;return t}))},3462:function(e,t,n){"use strict";var r=n(260),i=n(7466),o=n(4590),a=n(7908),u=n(7293),s=r.aTypedArray;(0,r.exportTypedArrayMethod)("set",(function(e){s(this);var t=o(arguments.length>1?arguments[1]:void 0,1),n=this.length,r=a(e),u=i(r.length),l=0;if(u+t>n)throw RangeError("Wrong length");for(;l<u;)this[t+l]=r[l++]}),u((function(){new Int8Array(1).set({})})))},678:function(e,t,n){"use strict";var r=n(260),i=n(6707),o=n(7293),a=r.aTypedArray,u=r.aTypedArrayConstructor,s=r.exportTypedArrayMethod,l=[].slice;s("slice",(function(e,t){for(var n=l.call(a(this),e,t),r=i(this,this.constructor),o=0,s=n.length,c=new(u(r))(s);s>o;)c[o]=n[o++];return c}),o((function(){new Int8Array(1).slice()})))},7462:function(e,t,n){"use strict";var r=n(260),i=n(2092).some,o=r.aTypedArray;(0,r.exportTypedArrayMethod)("some",(function(e){return i(o(this),e,arguments.length>1?arguments[1]:void 0)}))},3824:function(e,t,n){"use strict";var r=n(260),i=r.aTypedArray,o=r.exportTypedArrayMethod,a=[].sort;o("sort",(function(e){return a.call(i(this),e)}))},5021:function(e,t,n){"use strict";var r=n(260),i=n(7466),o=n(1400),a=n(6707),u=r.aTypedArray;(0,r.exportTypedArrayMethod)("subarray",(function(e,t){var n=u(this),r=n.length,s=o(e,r);return new(a(n,n.constructor))(n.buffer,n.byteOffset+s*n.BYTES_PER_ELEMENT,i((void 0===t?r:o(t,r))-s))}))},2974:function(e,t,n){"use strict";var r=n(7854),i=n(260),o=n(7293),a=r.Int8Array,u=i.aTypedArray,s=i.exportTypedArrayMethod,l=[].toLocaleString,c=[].slice,f=!!a&&o((function(){l.call(new a(1))}));s("toLocaleString",(function(){return l.apply(f?c.call(u(this)):u(this),arguments)}),o((function(){return[1,2].toLocaleString()!=new a([1,2]).toLocaleString()}))||!o((function(){a.prototype.toLocaleString.call([1,2])})))},5016:function(e,t,n){"use strict";var r=n(260).exportTypedArrayMethod,i=n(7293),o=n(7854).Uint8Array,a=o&&o.prototype||{},u=[].toString,s=[].join;i((function(){u.call({})}))&&(u=function(){return s.call(this)});var l=a.toString!=u;r("toString",u,l)},2472:function(e,t,n){n(9843)("Uint8",(function(e){return function(t,n,r){return e(this,t,n,r)}}))},4747:function(e,t,n){var r=n(7854),i=n(8324),o=n(8533),a=n(8880);for(var u in i){var s=r[u],l=s&&s.prototype;if(l&&l.forEach!==o)try{a(l,"forEach",o)}catch(e){l.forEach=o}}},3948:function(e,t,n){var r=n(7854),i=n(8324),o=n(6992),a=n(8880),u=n(5112),s=u("iterator"),l=u("toStringTag"),c=o.values;for(var f in i){var p=r[f],h=p&&p.prototype;if(h){if(h[s]!==c)try{a(h,s,c)}catch(e){h[s]=c}if(h[l]||a(h,l,f),i[f])for(var d in o)if(h[d]!==o[d])try{a(h,d,o[d])}catch(e){h[d]=o[d]}}}},1637:function(e,t,n){"use strict";n(6992);var r=n(2109),i=n(5005),o=n(590),a=n(1320),u=n(2248),s=n(8003),l=n(4994),c=n(9909),f=n(5787),p=n(6656),h=n(9974),d=n(648),v=n(9670),y=n(111),g=n(30),m=n(9114),b=n(8554),x=n(1246),w=n(5112),E=i("fetch"),k=i("Headers"),A=w("iterator"),S="URLSearchParams",F="URLSearchParamsIterator",T=c.set,C=c.getterFor(S),L=c.getterFor(F),R=/\+/g,I=Array(4),U=function(e){return I[e-1]||(I[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},O=function(e){try{return decodeURIComponent(e)}catch(t){return e}},_=function(e){var t=e.replace(R," "),n=4;try{return decodeURIComponent(t)}catch(e){for(;n;)t=t.replace(U(n--),O);return t}},M=/[!'()~]|%20/g,z={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},P=function(e){return z[e]},j=function(e){return encodeURIComponent(e).replace(M,P)},D=function(e,t){if(t)for(var n,r,i=t.split("&"),o=0;o<i.length;)(n=i[o++]).length&&(r=n.split("="),e.push({key:_(r.shift()),value:_(r.join("="))}))},N=function(e){this.entries.length=0,D(this.entries,e)},B=function(e,t){if(e<t)throw TypeError("Not enough arguments")},q=l((function(e,t){T(this,{type:F,iterator:b(C(e).entries),kind:t})}),"Iterator",(function(){var e=L(this),t=e.kind,n=e.iterator.next(),r=n.value;return n.done||(n.value="keys"===t?r.key:"values"===t?r.value:[r.key,r.value]),n})),W=function(){f(this,W,S);var e,t,n,r,i,o,a,u,s,l=arguments.length>0?arguments[0]:void 0,c=this,h=[];if(T(c,{type:S,entries:h,updateURL:function(){},updateSearchParams:N}),void 0!==l)if(y(l))if("function"==typeof(e=x(l)))for(n=(t=e.call(l)).next;!(r=n.call(t)).done;){if((a=(o=(i=b(v(r.value))).next).call(i)).done||(u=o.call(i)).done||!o.call(i).done)throw TypeError("Expected sequence with length 2");h.push({key:a.value+"",value:u.value+""})}else for(s in l)p(l,s)&&h.push({key:s,value:l[s]+""});else D(h,"string"==typeof l?"?"===l.charAt(0)?l.slice(1):l:l+"")},H=W.prototype;u(H,{append:function(e,t){B(arguments.length,2);var n=C(this);n.entries.push({key:e+"",value:t+""}),n.updateURL()},delete:function(e){B(arguments.length,1);for(var t=C(this),n=t.entries,r=e+"",i=0;i<n.length;)n[i].key===r?n.splice(i,1):i++;t.updateURL()},get:function(e){B(arguments.length,1);for(var t=C(this).entries,n=e+"",r=0;r<t.length;r++)if(t[r].key===n)return t[r].value;return null},getAll:function(e){B(arguments.length,1);for(var t=C(this).entries,n=e+"",r=[],i=0;i<t.length;i++)t[i].key===n&&r.push(t[i].value);return r},has:function(e){B(arguments.length,1);for(var t=C(this).entries,n=e+"",r=0;r<t.length;)if(t[r++].key===n)return!0;return!1},set:function(e,t){B(arguments.length,1);for(var n,r=C(this),i=r.entries,o=!1,a=e+"",u=t+"",s=0;s<i.length;s++)(n=i[s]).key===a&&(o?i.splice(s--,1):(o=!0,n.value=u));o||i.push({key:a,value:u}),r.updateURL()},sort:function(){var e,t,n,r=C(this),i=r.entries,o=i.slice();for(i.length=0,n=0;n<o.length;n++){for(e=o[n],t=0;t<n;t++)if(i[t].key>e.key){i.splice(t,0,e);break}t===n&&i.push(e)}r.updateURL()},forEach:function(e){for(var t,n=C(this).entries,r=h(e,arguments.length>1?arguments[1]:void 0,3),i=0;i<n.length;)r((t=n[i++]).value,t.key,this)},keys:function(){return new q(this,"keys")},values:function(){return new q(this,"values")},entries:function(){return new q(this,"entries")}},{enumerable:!0}),a(H,A,H.entries),a(H,"toString",(function(){for(var e,t=C(this).entries,n=[],r=0;r<t.length;)e=t[r++],n.push(j(e.key)+"="+j(e.value));return n.join("&")}),{enumerable:!0}),s(W,S),r({global:!0,forced:!o},{URLSearchParams:W}),o||"function"!=typeof E||"function"!=typeof k||r({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,n,r,i=[e];return arguments.length>1&&(y(t=arguments[1])&&(n=t.body,d(n)===S&&((r=t.headers?new k(t.headers):new k).has("content-type")||r.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=g(t,{body:m(0,String(n)),headers:m(0,r)}))),i.push(t)),E.apply(this,i)}}),e.exports={URLSearchParams:W,getState:C}},285:function(e,t,n){"use strict";n(8783);var r,i=n(2109),o=n(9781),a=n(590),u=n(7854),s=n(6048),l=n(1320),c=n(5787),f=n(6656),p=n(1574),h=n(8457),d=n(8710).codeAt,v=n(3197),y=n(8003),g=n(1637),m=n(9909),b=u.URL,x=g.URLSearchParams,w=g.getState,E=m.set,k=m.getterFor("URL"),A=Math.floor,S=Math.pow,F="Invalid scheme",T="Invalid host",C="Invalid port",L=/[A-Za-z]/,R=/[\d+-.A-Za-z]/,I=/\d/,U=/^(0x|0X)/,O=/^[0-7]+$/,_=/^\d+$/,M=/^[\dA-Fa-f]+$/,z=/[\u0000\t\u000A\u000D #%/:?@[\\]]/,P=/[\u0000\t\u000A\u000D #/:?@[\\]]/,j=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,D=/[\t\u000A\u000D]/g,N=function(e,t){var n,r,i;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return T;if(!(n=q(t.slice(1,-1))))return T;e.host=n}else if(X(e)){if(t=v(t),z.test(t))return T;if(null===(n=B(t)))return T;e.host=n}else{if(P.test(t))return T;for(n="",r=h(t),i=0;i<r.length;i++)n+=$(r[i],H);e.host=n}},B=function(e){var t,n,r,i,o,a,u,s=e.split(".");if(s.length&&""==s[s.length-1]&&s.pop(),(t=s.length)>4)return e;for(n=[],r=0;r<t;r++){if(""==(i=s[r]))return e;if(o=10,i.length>1&&"0"==i.charAt(0)&&(o=U.test(i)?16:8,i=i.slice(8==o?1:2)),""===i)a=0;else{if(!(10==o?_:8==o?O:M).test(i))return e;a=parseInt(i,o)}n.push(a)}for(r=0;r<t;r++)if(a=n[r],r==t-1){if(a>=S(256,5-t))return null}else if(a>255)return null;for(u=n.pop(),r=0;r<n.length;r++)u+=n[r]*S(256,3-r);return u},q=function(e){var t,n,r,i,o,a,u,s=[0,0,0,0,0,0,0,0],l=0,c=null,f=0,p=function(){return e.charAt(f)};if(":"==p()){if(":"!=e.charAt(1))return;f+=2,c=++l}for(;p();){if(8==l)return;if(":"!=p()){for(t=n=0;n<4&&M.test(p());)t=16*t+parseInt(p(),16),f++,n++;if("."==p()){if(0==n)return;if(f-=n,l>6)return;for(r=0;p();){if(i=null,r>0){if(!("."==p()&&r<4))return;f++}if(!I.test(p()))return;for(;I.test(p());){if(o=parseInt(p(),10),null===i)i=o;else{if(0==i)return;i=10*i+o}if(i>255)return;f++}s[l]=256*s[l]+i,2!=++r&&4!=r||l++}if(4!=r)return;break}if(":"==p()){if(f++,!p())return}else if(p())return;s[l++]=t}else{if(null!==c)return;f++,c=++l}}if(null!==c)for(a=l-c,l=7;0!=l&&a>0;)u=s[l],s[l--]=s[c+a-1],s[c+--a]=u;else if(8!=l)return;return s},W=function(e){var t,n,r,i;if("number"==typeof e){for(t=[],n=0;n<4;n++)t.unshift(e%256),e=A(e/256);return t.join(".")}if("object"==typeof e){for(t="",r=function(e){for(var t=null,n=1,r=null,i=0,o=0;o<8;o++)0!==e[o]?(i>n&&(t=r,n=i),r=null,i=0):(null===r&&(r=o),++i);return i>n&&(t=r,n=i),t}(e),n=0;n<8;n++)i&&0===e[n]||(i&&(i=!1),r===n?(t+=n?":":"::",i=!0):(t+=e[n].toString(16),n<7&&(t+=":")));return"["+t+"]"}return e},H={},Y=p({},H,{" ":1,'"':1,"<":1,">":1,"`":1}),G=p({},Y,{"#":1,"?":1,"{":1,"}":1}),Q=p({},G,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),$=function(e,t){var n=d(e,0);return n>32&&n<127&&!f(t,e)?e:encodeURIComponent(e)},V={ftp:21,file:null,http:80,https:443,ws:80,wss:443},X=function(e){return f(V,e.scheme)},K=function(e){return""!=e.username||""!=e.password},Z=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},J=function(e,t){var n;return 2==e.length&&L.test(e.charAt(0))&&(":"==(n=e.charAt(1))||!t&&"|"==n)},ee=function(e){var t;return e.length>1&&J(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},te=function(e){var t=e.path,n=t.length;!n||"file"==e.scheme&&1==n&&J(t[0],!0)||t.pop()},ne=function(e){return"."===e||"%2e"===e.toLowerCase()},re={},ie={},oe={},ae={},ue={},se={},le={},ce={},fe={},pe={},he={},de={},ve={},ye={},ge={},me={},be={},xe={},we={},Ee={},ke={},Ae=function(e,t,n,i){var o,a,u,s,l,c=n||re,p=0,d="",v=!1,y=!1,g=!1;for(n||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(j,"")),t=t.replace(D,""),o=h(t);p<=o.length;){switch(a=o[p],c){case re:if(!a||!L.test(a)){if(n)return F;c=oe;continue}d+=a.toLowerCase(),c=ie;break;case ie:if(a&&(R.test(a)||"+"==a||"-"==a||"."==a))d+=a.toLowerCase();else{if(":"!=a){if(n)return F;d="",c=oe,p=0;continue}if(n&&(X(e)!=f(V,d)||"file"==d&&(K(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=d,n)return void(X(e)&&V[e.scheme]==e.port&&(e.port=null));d="","file"==e.scheme?c=ye:X(e)&&i&&i.scheme==e.scheme?c=ae:X(e)?c=ce:"/"==o[p+1]?(c=ue,p++):(e.cannotBeABaseURL=!0,e.path.push(""),c=we)}break;case oe:if(!i||i.cannotBeABaseURL&&"#"!=a)return F;if(i.cannotBeABaseURL&&"#"==a){e.scheme=i.scheme,e.path=i.path.slice(),e.query=i.query,e.fragment="",e.cannotBeABaseURL=!0,c=ke;break}c="file"==i.scheme?ye:se;continue;case ae:if("/"!=a||"/"!=o[p+1]){c=se;continue}c=fe,p++;break;case ue:if("/"==a){c=pe;break}c=xe;continue;case se:if(e.scheme=i.scheme,a==r)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query;else if("/"==a||"\\"==a&&X(e))c=le;else if("?"==a)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query="",c=Ee;else{if("#"!=a){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.path.pop(),c=xe;continue}e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query,e.fragment="",c=ke}break;case le:if(!X(e)||"/"!=a&&"\\"!=a){if("/"!=a){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,c=xe;continue}c=pe}else c=fe;break;case ce:if(c=fe,"/"!=a||"/"!=d.charAt(p+1))continue;p++;break;case fe:if("/"!=a&&"\\"!=a){c=pe;continue}break;case pe:if("@"==a){v&&(d="%40"+d),v=!0,u=h(d);for(var m=0;m<u.length;m++){var b=u[m];if(":"!=b||g){var x=$(b,Q);g?e.password+=x:e.username+=x}else g=!0}d=""}else if(a==r||"/"==a||"?"==a||"#"==a||"\\"==a&&X(e)){if(v&&""==d)return"Invalid authority";p-=h(d).length+1,d="",c=he}else d+=a;break;case he:case de:if(n&&"file"==e.scheme){c=me;continue}if(":"!=a||y){if(a==r||"/"==a||"?"==a||"#"==a||"\\"==a&&X(e)){if(X(e)&&""==d)return T;if(n&&""==d&&(K(e)||null!==e.port))return;if(s=N(e,d))return s;if(d="",c=be,n)return;continue}"["==a?y=!0:"]"==a&&(y=!1),d+=a}else{if(""==d)return T;if(s=N(e,d))return s;if(d="",c=ve,n==de)return}break;case ve:if(!I.test(a)){if(a==r||"/"==a||"?"==a||"#"==a||"\\"==a&&X(e)||n){if(""!=d){var w=parseInt(d,10);if(w>65535)return C;e.port=X(e)&&w===V[e.scheme]?null:w,d=""}if(n)return;c=be;continue}return C}d+=a;break;case ye:if(e.scheme="file","/"==a||"\\"==a)c=ge;else{if(!i||"file"!=i.scheme){c=xe;continue}if(a==r)e.host=i.host,e.path=i.path.slice(),e.query=i.query;else if("?"==a)e.host=i.host,e.path=i.path.slice(),e.query="",c=Ee;else{if("#"!=a){ee(o.slice(p).join(""))||(e.host=i.host,e.path=i.path.slice(),te(e)),c=xe;continue}e.host=i.host,e.path=i.path.slice(),e.query=i.query,e.fragment="",c=ke}}break;case ge:if("/"==a||"\\"==a){c=me;break}i&&"file"==i.scheme&&!ee(o.slice(p).join(""))&&(J(i.path[0],!0)?e.path.push(i.path[0]):e.host=i.host),c=xe;continue;case me:if(a==r||"/"==a||"\\"==a||"?"==a||"#"==a){if(!n&&J(d))c=xe;else if(""==d){if(e.host="",n)return;c=be}else{if(s=N(e,d))return s;if("localhost"==e.host&&(e.host=""),n)return;d="",c=be}continue}d+=a;break;case be:if(X(e)){if(c=xe,"/"!=a&&"\\"!=a)continue}else if(n||"?"!=a)if(n||"#"!=a){if(a!=r&&(c=xe,"/"!=a))continue}else e.fragment="",c=ke;else e.query="",c=Ee;break;case xe:if(a==r||"/"==a||"\\"==a&&X(e)||!n&&("?"==a||"#"==a)){if(".."===(l=(l=d).toLowerCase())||"%2e."===l||".%2e"===l||"%2e%2e"===l?(te(e),"/"==a||"\\"==a&&X(e)||e.path.push("")):ne(d)?"/"==a||"\\"==a&&X(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&J(d)&&(e.host&&(e.host=""),d=d.charAt(0)+":"),e.path.push(d)),d="","file"==e.scheme&&(a==r||"?"==a||"#"==a))for(;e.path.length>1&&""===e.path[0];)e.path.shift();"?"==a?(e.query="",c=Ee):"#"==a&&(e.fragment="",c=ke)}else d+=$(a,G);break;case we:"?"==a?(e.query="",c=Ee):"#"==a?(e.fragment="",c=ke):a!=r&&(e.path[0]+=$(a,H));break;case Ee:n||"#"!=a?a!=r&&("'"==a&&X(e)?e.query+="%27":e.query+="#"==a?"%23":$(a,H)):(e.fragment="",c=ke);break;case ke:a!=r&&(e.fragment+=$(a,Y))}p++}},Se=function(e){var t,n,r=c(this,Se,"URL"),i=arguments.length>1?arguments[1]:void 0,a=String(e),u=E(r,{type:"URL"});if(void 0!==i)if(i instanceof Se)t=k(i);else if(n=Ae(t={},String(i)))throw TypeError(n);if(n=Ae(u,a,null,t))throw TypeError(n);var s=u.searchParams=new x,l=w(s);l.updateSearchParams(u.query),l.updateURL=function(){u.query=String(s)||null},o||(r.href=Te.call(r),r.origin=Ce.call(r),r.protocol=Le.call(r),r.username=Re.call(r),r.password=Ie.call(r),r.host=Ue.call(r),r.hostname=Oe.call(r),r.port=_e.call(r),r.pathname=Me.call(r),r.search=ze.call(r),r.searchParams=Pe.call(r),r.hash=je.call(r))},Fe=Se.prototype,Te=function(){var e=k(this),t=e.scheme,n=e.username,r=e.password,i=e.host,o=e.port,a=e.path,u=e.query,s=e.fragment,l=t+":";return null!==i?(l+="//",K(e)&&(l+=n+(r?":"+r:"")+"@"),l+=W(i),null!==o&&(l+=":"+o)):"file"==t&&(l+="//"),l+=e.cannotBeABaseURL?a[0]:a.length?"/"+a.join("/"):"",null!==u&&(l+="?"+u),null!==s&&(l+="#"+s),l},Ce=function(){var e=k(this),t=e.scheme,n=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(e){return"null"}return"file"!=t&&X(e)?t+"://"+W(e.host)+(null!==n?":"+n:""):"null"},Le=function(){return k(this).scheme+":"},Re=function(){return k(this).username},Ie=function(){return k(this).password},Ue=function(){var e=k(this),t=e.host,n=e.port;return null===t?"":null===n?W(t):W(t)+":"+n},Oe=function(){var e=k(this).host;return null===e?"":W(e)},_e=function(){var e=k(this).port;return null===e?"":String(e)},Me=function(){var e=k(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},ze=function(){var e=k(this).query;return e?"?"+e:""},Pe=function(){return k(this).searchParams},je=function(){var e=k(this).fragment;return e?"#"+e:""},De=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(o&&s(Fe,{href:De(Te,(function(e){var t=k(this),n=String(e),r=Ae(t,n);if(r)throw TypeError(r);w(t.searchParams).updateSearchParams(t.query)})),origin:De(Ce),protocol:De(Le,(function(e){var t=k(this);Ae(t,String(e)+":",re)})),username:De(Re,(function(e){var t=k(this),n=h(String(e));if(!Z(t)){t.username="";for(var r=0;r<n.length;r++)t.username+=$(n[r],Q)}})),password:De(Ie,(function(e){var t=k(this),n=h(String(e));if(!Z(t)){t.password="";for(var r=0;r<n.length;r++)t.password+=$(n[r],Q)}})),host:De(Ue,(function(e){var t=k(this);t.cannotBeABaseURL||Ae(t,String(e),he)})),hostname:De(Oe,(function(e){var t=k(this);t.cannotBeABaseURL||Ae(t,String(e),de)})),port:De(_e,(function(e){var t=k(this);Z(t)||(""==(e=String(e))?t.port=null:Ae(t,e,ve))})),pathname:De(Me,(function(e){var t=k(this);t.cannotBeABaseURL||(t.path=[],Ae(t,e+"",be))})),search:De(ze,(function(e){var t=k(this);""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Ae(t,e,Ee)),w(t.searchParams).updateSearchParams(t.query)})),searchParams:De(Pe),hash:De(je,(function(e){var t=k(this);""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Ae(t,e,ke)):t.fragment=null}))}),l(Fe,"toJSON",(function(){return Te.call(this)}),{enumerable:!0}),l(Fe,"toString",(function(){return Te.call(this)}),{enumerable:!0}),b){var Ne=b.createObjectURL,Be=b.revokeObjectURL;Ne&&l(Se,"createObjectURL",(function(e){return Ne.apply(b,arguments)})),Be&&l(Se,"revokeObjectURL",(function(e){return Be.apply(b,arguments)}))}y(Se,"URL"),i({global:!0,forced:!a,sham:!o},{URL:Se})}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";function e(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){s=!0,a=e},f:function(){try{u||null==r.return||r.return()}finally{if(s)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(r),n.d(r,{Dropzone:function(){return b},default:function(){return A}}),n(2222),n(7327),n(2772),n(6992),n(1249),n(7042),n(561),n(8264),n(8309),n(489),n(1539),n(4916),n(9714),n(8783),n(4723),n(5306),n(3123),n(3210),n(2472),n(2990),n(8927),n(3105),n(5035),n(4345),n(7174),n(2846),n(4731),n(7209),n(6319),n(8867),n(7789),n(3739),n(9368),n(4483),n(2056),n(3462),n(678),n(7462),n(3824),n(5021),n(2974),n(5016),n(4747),n(3948),n(285);var o=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,r;return n=t,(r=[{key:"on",value:function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this}},{key:"emit",value:function(t){this._callbacks=this._callbacks||{};for(var n=this._callbacks[t],r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];if(n){var a,u=e(n,!0);try{for(u.s();!(a=u.n()).done;){var s=a.value;s.apply(this,i)}}catch(e){u.e(e)}finally{u.f()}}return this.element&&this.element.dispatchEvent(this.makeEvent("dropzone:"+t,{args:i})),this}},{key:"makeEvent",value:function(e,t){var n={bubbles:!0,cancelable:!0,detail:t};if("function"==typeof window.CustomEvent)return new CustomEvent(e,n);var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),r}},{key:"off",value:function(e,t){if(!this._callbacks||0===arguments.length)return this._callbacks={},this;var n=this._callbacks[e];if(!n)return this;if(1===arguments.length)return delete this._callbacks[e],this;for(var r=0;r<n.length;r++){var i=n[r];if(i===t){n.splice(r,1);break}}return this}}])&&i(n.prototype,r),t}();function a(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s={url:null,method:"post",withCredentials:!1,timeout:null,parallelUploads:2,uploadMultiple:!1,chunking:!1,forceChunking:!1,chunkSize:2e6,parallelChunkUploads:!1,retryChunks:!1,retryChunksLimit:3,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,thumbnailMethod:"crop",resizeWidth:null,resizeHeight:null,resizeMimeType:null,resizeQuality:.8,resizeMethod:"contain",filesizeBase:1e3,maxFiles:null,headers:null,clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,disablePreviews:!1,hiddenInputContainer:"body",capture:null,renameFilename:null,renameFile:null,forceFallback:!1,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictUploadCanceled:"Upload canceled.",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictFileSizeUnits:{tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},init:function(){},params:function(e,t,n){if(n)return{dzuuid:n.file.upload.uuid,dzchunkindex:n.index,dztotalfilesize:n.file.size,dzchunksize:this.options.chunkSize,dztotalchunkcount:n.file.upload.totalChunkCount,dzchunkbyteoffset:n.index*this.options.chunkSize}},accept:function(e,t){return t()},chunksUploaded:function(e,t){t()},fallback:function(){var e;this.element.className="".concat(this.element.className," dz-browser-not-supported");var t,n=a(this.element.getElementsByTagName("div"),!0);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(/(^| )dz-message($| )/.test(r.className)){e=r,r.className="dz-message";break}}}catch(e){n.e(e)}finally{n.f()}e||(e=b.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(e));var i=e.getElementsByTagName("span")[0];return i&&(null!=i.textContent?i.textContent=this.options.dictFallbackMessage:null!=i.innerText&&(i.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(e,t,n,r){var i={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},o=e.width/e.height;null==t&&null==n?(t=i.srcWidth,n=i.srcHeight):null==t?t=n*o:null==n&&(n=t/o);var a=(t=Math.min(t,i.srcWidth))/(n=Math.min(n,i.srcHeight));if(i.srcWidth>t||i.srcHeight>n)if("crop"===r)o>a?(i.srcHeight=e.height,i.srcWidth=i.srcHeight*a):(i.srcWidth=e.width,i.srcHeight=i.srcWidth/a);else{if("contain"!==r)throw new Error("Unknown resizeMethod '".concat(r,"'"));o>a?n=t/o:t=n*o}return i.srcX=(e.width-i.srcWidth)/2,i.srcY=(e.height-i.srcHeight)/2,i.trgWidth=t,i.trgHeight=n,i},transformFile:function(e,t){return(this.options.resizeWidth||this.options.resizeHeight)&&e.type.match(/image.*/)?this.resizeImage(e,this.options.resizeWidth,this.options.resizeHeight,this.options.resizeMethod,t):t(e)},previewTemplate:'<div class="dz-preview dz-file-preview"> <div class="dz-image"><img data-dz-thumbnail/></div> <div class="dz-details"> <div class="dz-size"><span data-dz-size></span></div> <div class="dz-filename"><span data-dz-name></span></div> </div> <div class="dz-progress"> <span class="dz-upload" data-dz-uploadprogress></span> </div> <div class="dz-error-message"><span data-dz-errormessage></span></div> <div class="dz-success-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Check</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path> </g> </svg> </div> <div class="dz-error-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Error</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475"> <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path> </g> </g> </svg> </div> </div> ',drop:function(e){return this.element.classList.remove("dz-drag-hover")},dragstart:function(e){},dragend:function(e){return this.element.classList.remove("dz-drag-hover")},dragenter:function(e){return this.element.classList.add("dz-drag-hover")},dragover:function(e){return this.element.classList.add("dz-drag-hover")},dragleave:function(e){return this.element.classList.remove("dz-drag-hover")},paste:function(e){},reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var t=this;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer&&!this.options.disablePreviews){e.previewElement=b.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement);var n,r=a(e.previewElement.querySelectorAll("[data-dz-name]"),!0);try{for(r.s();!(n=r.n()).done;){var i=n.value;i.textContent=e.name}}catch(e){r.e(e)}finally{r.f()}var o,u=a(e.previewElement.querySelectorAll("[data-dz-size]"),!0);try{for(u.s();!(o=u.n()).done;)(i=o.value).innerHTML=this.filesize(e.size)}catch(e){u.e(e)}finally{u.f()}this.options.addRemoveLinks&&(e._removeLink=b.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(this.options.dictRemoveFile,"</a>")),e.previewElement.appendChild(e._removeLink));var s,l=function(n){return n.preventDefault(),n.stopPropagation(),e.status===b.UPLOADING?b.confirm(t.options.dictCancelUploadConfirmation,(function(){return t.removeFile(e)})):t.options.dictRemoveFileConfirmation?b.confirm(t.options.dictRemoveFileConfirmation,(function(){return t.removeFile(e)})):t.removeFile(e)},c=a(e.previewElement.querySelectorAll("[data-dz-remove]"),!0);try{for(c.s();!(s=c.n()).done;)s.value.addEventListener("click",l)}catch(e){c.e(e)}finally{c.f()}}},removedfile:function(e){return null!=e.previewElement&&null!=e.previewElement.parentNode&&e.previewElement.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){if(e.previewElement){e.previewElement.classList.remove("dz-file-preview");var n,r=a(e.previewElement.querySelectorAll("[data-dz-thumbnail]"),!0);try{for(r.s();!(n=r.n()).done;){var i=n.value;i.alt=e.name,i.src=t}}catch(e){r.e(e)}finally{r.f()}return setTimeout((function(){return e.previewElement.classList.add("dz-image-preview")}),1)}},error:function(e,t){if(e.previewElement){e.previewElement.classList.add("dz-error"),"string"!=typeof t&&t.error&&(t=t.error);var n,r=a(e.previewElement.querySelectorAll("[data-dz-errormessage]"),!0);try{for(r.s();!(n=r.n()).done;)n.value.textContent=t}catch(e){r.e(e)}finally{r.f()}}},errormultiple:function(){},processing:function(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.innerHTML=this.options.dictCancelUpload},processingmultiple:function(){},uploadprogress:function(e,t,n){if(e.previewElement){var r,i=a(e.previewElement.querySelectorAll("[data-dz-uploadprogress]"),!0);try{for(i.s();!(r=i.n()).done;){var o=r.value;"PROGRESS"===o.nodeName?o.value=t:o.style.width="".concat(t,"%")}}catch(e){i.e(e)}finally{i.f()}}},totaluploadprogress:function(){},sending:function(){},sendingmultiple:function(){},success:function(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple:function(){},canceled:function(e){return this.emit("error",e,this.options.dictUploadCanceled)},canceledmultiple:function(){},complete:function(e){if(e._removeLink&&(e._removeLink.innerHTML=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple:function(){},maxfilesexceeded:function(){},maxfilesreached:function(){},queuecomplete:function(){},addedfiles:function(){}};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=m(t);if(n){var i=m(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return y(this,e)});function i(e,t){var n,o,a;if(p(this,i),(n=r.call(this)).element=e,n.version=i.version,n.clickableElements=[],n.listeners=[],n.files=[],"string"==typeof n.element&&(n.element=document.querySelector(n.element)),!n.element||null==n.element.nodeType)throw new Error("Invalid dropzone element.");if(n.element.dropzone)throw new Error("Dropzone already attached.");i.instances.push(g(n)),n.element.dropzone=g(n);var u=null!=(a=i.optionsForElement(n.element))?a:{};if(n.options=i.extend({},s,u,null!=t?t:{}),n.options.previewTemplate=n.options.previewTemplate.replace(/\n*/g,""),n.options.forceFallback||!i.isBrowserSupported())return y(n,n.options.fallback.call(g(n)));if(null==n.options.url&&(n.options.url=n.element.getAttribute("action")),!n.options.url)throw new Error("No URL provided.");if(n.options.acceptedFiles&&n.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");if(n.options.uploadMultiple&&n.options.chunking)throw new Error("You cannot set both: uploadMultiple and chunking.");return n.options.acceptedMimeTypes&&(n.options.acceptedFiles=n.options.acceptedMimeTypes,delete n.options.acceptedMimeTypes),null!=n.options.renameFilename&&(n.options.renameFile=function(e){return n.options.renameFilename.call(g(n),e.name,e)}),"string"==typeof n.options.method&&(n.options.method=n.options.method.toUpperCase()),(o=n.getExistingFallback())&&o.parentNode&&o.parentNode.removeChild(o),!1!==n.options.previewsContainer&&(n.options.previewsContainer?n.previewsContainer=i.getElement(n.options.previewsContainer,"previewsContainer"):n.previewsContainer=n.element),n.options.clickable&&(!0===n.options.clickable?n.clickableElements=[n.element]:n.clickableElements=i.getElements(n.options.clickable,"clickable")),n.init(),n}return d(i,[{key:"getAcceptedFiles",value:function(){return this.files.filter((function(e){return e.accepted})).map((function(e){return e}))}},{key:"getRejectedFiles",value:function(){return this.files.filter((function(e){return!e.accepted})).map((function(e){return e}))}},{key:"getFilesWithStatus",value:function(e){return this.files.filter((function(t){return t.status===e})).map((function(e){return e}))}},{key:"getQueuedFiles",value:function(){return this.getFilesWithStatus(i.QUEUED)}},{key:"getUploadingFiles",value:function(){return this.getFilesWithStatus(i.UPLOADING)}},{key:"getAddedFiles",value:function(){return this.getFilesWithStatus(i.ADDED)}},{key:"getActiveFiles",value:function(){return this.files.filter((function(e){return e.status===i.UPLOADING||e.status===i.QUEUED})).map((function(e){return e}))}},{key:"init",value:function(){var e=this;"form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(i.createElement('<div class="dz-default dz-message"><button class="dz-button" type="button">'.concat(this.options.dictDefaultMessage,"</button></div>"))),this.clickableElements.length&&function t(){e.hiddenFileInput&&e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput),e.hiddenFileInput=document.createElement("input"),e.hiddenFileInput.setAttribute("type","file"),(null===e.options.maxFiles||e.options.maxFiles>1)&&e.hiddenFileInput.setAttribute("multiple","multiple"),e.hiddenFileInput.className="dz-hidden-input",null!==e.options.acceptedFiles&&e.hiddenFileInput.setAttribute("accept",e.options.acceptedFiles),null!==e.options.capture&&e.hiddenFileInput.setAttribute("capture",e.options.capture),e.hiddenFileInput.setAttribute("tabindex","-1"),e.hiddenFileInput.style.visibility="hidden",e.hiddenFileInput.style.position="absolute",e.hiddenFileInput.style.top="0",e.hiddenFileInput.style.left="0",e.hiddenFileInput.style.height="0",e.hiddenFileInput.style.width="0",i.getElement(e.options.hiddenInputContainer,"hiddenInputContainer").appendChild(e.hiddenFileInput),e.hiddenFileInput.addEventListener("change",(function(){var n=e.hiddenFileInput.files;if(n.length){var r,i=c(n,!0);try{for(i.s();!(r=i.n()).done;){var o=r.value;e.addFile(o)}}catch(e){i.e(e)}finally{i.f()}}e.emit("addedfiles",n),t()}))}(),this.URL=null!==window.URL?window.URL:window.webkitURL;var t,n=c(this.events,!0);try{for(n.s();!(t=n.n()).done;){var r=t.value;this.on(r,this.options[r])}}catch(e){n.e(e)}finally{n.f()}this.on("uploadprogress",(function(){return e.updateTotalUploadProgress()})),this.on("removedfile",(function(){return e.updateTotalUploadProgress()})),this.on("canceled",(function(t){return e.emit("complete",t)})),this.on("complete",(function(t){if(0===e.getAddedFiles().length&&0===e.getUploadingFiles().length&&0===e.getQueuedFiles().length)return setTimeout((function(){return e.emit("queuecomplete")}),0)}));var o=function(e){if(function(e){if(e.dataTransfer.types)for(var t=0;t<e.dataTransfer.types.length;t++)if("Files"===e.dataTransfer.types[t])return!0;return!1}(e))return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1};return this.listeners=[{element:this.element,events:{dragstart:function(t){return e.emit("dragstart",t)},dragenter:function(t){return o(t),e.emit("dragenter",t)},dragover:function(t){var n;try{n=t.dataTransfer.effectAllowed}catch(e){}return t.dataTransfer.dropEffect="move"===n||"linkMove"===n?"move":"copy",o(t),e.emit("dragover",t)},dragleave:function(t){return e.emit("dragleave",t)},drop:function(t){return o(t),e.drop(t)},dragend:function(t){return e.emit("dragend",t)}}}],this.clickableElements.forEach((function(t){return e.listeners.push({element:t,events:{click:function(n){return(t!==e.element||n.target===e.element||i.elementInside(n.target,e.element.querySelector(".dz-message")))&&e.hiddenFileInput.click(),!0}}})})),this.enable(),this.options.init.call(this)}},{key:"destroy",value:function(){return this.disable(),this.removeAllFiles(!0),(null!=this.hiddenFileInput?this.hiddenFileInput.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,i.instances.splice(i.instances.indexOf(this),1)}},{key:"updateTotalUploadProgress",value:function(){var e,t=0,n=0;if(this.getActiveFiles().length){var r,i=c(this.getActiveFiles(),!0);try{for(i.s();!(r=i.n()).done;){var o=r.value;t+=o.upload.bytesSent,n+=o.upload.total}}catch(e){i.e(e)}finally{i.f()}e=100*t/n}else e=100;return this.emit("totaluploadprogress",e,n,t)}},{key:"_getParamName",value:function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):"".concat(this.options.paramName).concat(this.options.uploadMultiple?"[".concat(e,"]"):"")}},{key:"_renameFile",value:function(e){return"function"!=typeof this.options.renameFile?e.name:this.options.renameFile(e)}},{key:"getFallbackForm",value:function(){var e,t;if(e=this.getExistingFallback())return e;var n='<div class="dz-fallback">';this.options.dictFallbackText&&(n+="<p>".concat(this.options.dictFallbackText,"</p>")),n+='<input type="file" name="'.concat(this._getParamName(0),'" ').concat(this.options.uploadMultiple?'multiple="multiple"':void 0,' /><input type="submit" value="Upload!"></div>');var r=i.createElement(n);return"FORM"!==this.element.tagName?(t=i.createElement('<form action="'.concat(this.options.url,'" enctype="multipart/form-data" method="').concat(this.options.method,'"></form>'))).appendChild(r):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=t?t:r}},{key:"getExistingFallback",value:function(){for(var e=function(e){var t,n=c(e,!0);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(/(^| )fallback($| )/.test(r.className))return r}}catch(e){n.e(e)}finally{n.f()}},t=0,n=["div","form"];t<n.length;t++){var r,i=n[t];if(r=e(this.element.getElementsByTagName(i)))return r}}},{key:"setupEventListeners",value:function(){return this.listeners.map((function(e){return function(){var t=[];for(var n in e.events){var r=e.events[n];t.push(e.element.addEventListener(n,r,!1))}return t}()}))}},{key:"removeEventListeners",value:function(){return this.listeners.map((function(e){return function(){var t=[];for(var n in e.events){var r=e.events[n];t.push(e.element.removeEventListener(n,r,!1))}return t}()}))}},{key:"disable",value:function(){var e=this;return this.clickableElements.forEach((function(e){return e.classList.remove("dz-clickable")})),this.removeEventListeners(),this.disabled=!0,this.files.map((function(t){return e.cancelUpload(t)}))}},{key:"enable",value:function(){return delete this.disabled,this.clickableElements.forEach((function(e){return e.classList.add("dz-clickable")})),this.setupEventListeners()}},{key:"filesize",value:function(e){var t=0,n="b";if(e>0){for(var r=["tb","gb","mb","kb","b"],i=0;i<r.length;i++){var o=r[i];if(e>=Math.pow(this.options.filesizeBase,4-i)/10){t=e/Math.pow(this.options.filesizeBase,4-i),n=o;break}}t=Math.round(10*t)/10}return"<strong>".concat(t,"</strong> ").concat(this.options.dictFileSizeUnits[n])}},{key:"_updateMaxFilesReachedClass",value:function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")}},{key:"drop",value:function(e){if(e.dataTransfer){this.emit("drop",e);for(var t=[],n=0;n<e.dataTransfer.files.length;n++)t[n]=e.dataTransfer.files[n];if(t.length){var r=e.dataTransfer.items;r&&r.length&&null!=r[0].webkitGetAsEntry?this._addFilesFromItems(r):this.handleFiles(t)}this.emit("addedfiles",t)}}},{key:"paste",value:function(e){if(null!=(null!=(t=null!=e?e.clipboardData:void 0)?function(e){return e.items}(t):void 0)){var t;this.emit("paste",e);var n=e.clipboardData.items;return n.length?this._addFilesFromItems(n):void 0}}},{key:"handleFiles",value:function(e){var t,n=c(e,!0);try{for(n.s();!(t=n.n()).done;){var r=t.value;this.addFile(r)}}catch(e){n.e(e)}finally{n.f()}}},{key:"_addFilesFromItems",value:function(e){var t=this;return function(){var n,r=[],i=c(e,!0);try{for(i.s();!(n=i.n()).done;){var o,a=n.value;null!=a.webkitGetAsEntry&&(o=a.webkitGetAsEntry())?o.isFile?r.push(t.addFile(a.getAsFile())):o.isDirectory?r.push(t._addFilesFromDirectory(o,o.name)):r.push(void 0):null==a.getAsFile||null!=a.kind&&"file"!==a.kind?r.push(void 0):r.push(t.addFile(a.getAsFile()))}}catch(e){i.e(e)}finally{i.f()}return r}()}},{key:"_addFilesFromDirectory",value:function(e,t){var n=this,r=e.createReader(),i=function(e){return"log",n=function(t){return t.log(e)},null!=(t=console)&&"function"==typeof t.log?n(t):void 0;var t,n};return function e(){return r.readEntries((function(r){if(r.length>0){var i,o=c(r,!0);try{for(o.s();!(i=o.n()).done;){var a=i.value;a.isFile?a.file((function(e){if(!n.options.ignoreHiddenFiles||"."!==e.name.substring(0,1))return e.fullPath="".concat(t,"/").concat(e.name),n.addFile(e)})):a.isDirectory&&n._addFilesFromDirectory(a,"".concat(t,"/").concat(a.name))}}catch(e){o.e(e)}finally{o.f()}e()}return null}),i)}()}},{key:"accept",value:function(e,t){this.options.maxFilesize&&e.size>1024*this.options.maxFilesize*1024?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):i.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)}},{key:"addFile",value:function(e){var t=this;e.upload={uuid:i.uuidv4(),progress:0,total:e.size,bytesSent:0,filename:this._renameFile(e)},this.files.push(e),e.status=i.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,(function(n){n?(e.accepted=!1,t._errorProcessing([e],n)):(e.accepted=!0,t.options.autoQueue&&t.enqueueFile(e)),t._updateMaxFilesReachedClass()}))}},{key:"enqueueFiles",value:function(e){var t,n=c(e,!0);try{for(n.s();!(t=n.n()).done;){var r=t.value;this.enqueueFile(r)}}catch(e){n.e(e)}finally{n.f()}return null}},{key:"enqueueFile",value:function(e){var t=this;if(e.status!==i.ADDED||!0!==e.accepted)throw new Error("This file can't be queued because it has already been processed or was rejected.");if(e.status=i.QUEUED,this.options.autoProcessQueue)return setTimeout((function(){return t.processQueue()}),0)}},{key:"_enqueueThumbnail",value:function(e){var t=this;if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024)return this._thumbnailQueue.push(e),setTimeout((function(){return t._processThumbnailQueue()}),0)}},{key:"_processThumbnailQueue",value:function(){var e=this;if(!this._processingThumbnail&&0!==this._thumbnailQueue.length){this._processingThumbnail=!0;var t=this._thumbnailQueue.shift();return this.createThumbnail(t,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,!0,(function(n){return e.emit("thumbnail",t,n),e._processingThumbnail=!1,e._processThumbnailQueue()}))}}},{key:"removeFile",value:function(e){if(e.status===i.UPLOADING&&this.cancelUpload(e),this.files=x(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")}},{key:"removeAllFiles",value:function(e){null==e&&(e=!1);var t,n=c(this.files.slice(),!0);try{for(n.s();!(t=n.n()).done;){var r=t.value;(r.status!==i.UPLOADING||e)&&this.removeFile(r)}}catch(e){n.e(e)}finally{n.f()}return null}},{key:"resizeImage",value:function(e,t,n,r,o){var a=this;return this.createThumbnail(e,t,n,r,!0,(function(t,n){if(null==n)return o(e);var r=a.options.resizeMimeType;null==r&&(r=e.type);var u=n.toDataURL(r,a.options.resizeQuality);return"image/jpeg"!==r&&"image/jpg"!==r||(u=k.restore(e.dataURL,u)),o(i.dataURItoBlob(u))}))}},{key:"createThumbnail",value:function(e,t,n,r,i,o){var a=this,u=new FileReader;u.onload=function(){e.dataURL=u.result,"image/svg+xml"!==e.type?a.createThumbnailFromUrl(e,t,n,r,i,o):null!=o&&o(u.result)},u.readAsDataURL(e)}},{key:"displayExistingFile",value:function(e,t,n,r){var i=this,o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(this.emit("addedfile",e),this.emit("complete",e),o){var a=function(t){i.emit("thumbnail",e,t),n&&n()};e.dataURL=t,this.createThumbnailFromUrl(e,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,this.options.fixOrientation,a,r)}else this.emit("thumbnail",e,t),n&&n()}},{key:"createThumbnailFromUrl",value:function(e,t,n,r,i,o,a){var u=this,s=document.createElement("img");return a&&(s.crossOrigin=a),i="from-image"!=getComputedStyle(document.body).imageOrientation&&i,s.onload=function(){var a=function(e){return e(1)};return"undefined"!=typeof EXIF&&null!==EXIF&&i&&(a=function(e){return EXIF.getData(s,(function(){return e(EXIF.getTag(this,"Orientation"))}))}),a((function(i){e.width=s.width,e.height=s.height;var a=u.options.resize.call(u,e,t,n,r),l=document.createElement("canvas"),c=l.getContext("2d");switch(l.width=a.trgWidth,l.height=a.trgHeight,i>4&&(l.width=a.trgHeight,l.height=a.trgWidth),i){case 2:c.translate(l.width,0),c.scale(-1,1);break;case 3:c.translate(l.width,l.height),c.rotate(Math.PI);break;case 4:c.translate(0,l.height),c.scale(1,-1);break;case 5:c.rotate(.5*Math.PI),c.scale(1,-1);break;case 6:c.rotate(.5*Math.PI),c.translate(0,-l.width);break;case 7:c.rotate(.5*Math.PI),c.translate(l.height,-l.width),c.scale(-1,1);break;case 8:c.rotate(-.5*Math.PI),c.translate(-l.height,0)}E(c,s,null!=a.srcX?a.srcX:0,null!=a.srcY?a.srcY:0,a.srcWidth,a.srcHeight,null!=a.trgX?a.trgX:0,null!=a.trgY?a.trgY:0,a.trgWidth,a.trgHeight);var f=l.toDataURL("image/png");if(null!=o)return o(f,l)}))},null!=o&&(s.onerror=o),s.src=e.dataURL}},{key:"processQueue",value:function(){var e=this.options.parallelUploads,t=this.getUploadingFiles().length,n=t;if(!(t>=e)){var r=this.getQueuedFiles();if(r.length>0){if(this.options.uploadMultiple)return this.processFiles(r.slice(0,e-t));for(;n<e;){if(!r.length)return;this.processFile(r.shift()),n++}}}}},{key:"processFile",value:function(e){return this.processFiles([e])}},{key:"processFiles",value:function(e){var t,n=c(e,!0);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.processing=!0,r.status=i.UPLOADING,this.emit("processing",r)}}catch(e){n.e(e)}finally{n.f()}return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)}},{key:"_getFilesWithXhr",value:function(e){return this.files.filter((function(t){return t.xhr===e})).map((function(e){return e}))}},{key:"cancelUpload",value:function(e){if(e.status===i.UPLOADING){var t,n=this._getFilesWithXhr(e.xhr),r=c(n,!0);try{for(r.s();!(t=r.n()).done;)t.value.status=i.CANCELED}catch(e){r.e(e)}finally{r.f()}void 0!==e.xhr&&e.xhr.abort();var o,a=c(n,!0);try{for(a.s();!(o=a.n()).done;){var u=o.value;this.emit("canceled",u)}}catch(e){a.e(e)}finally{a.f()}this.options.uploadMultiple&&this.emit("canceledmultiple",n)}else e.status!==i.ADDED&&e.status!==i.QUEUED||(e.status=i.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()}},{key:"resolveOption",value:function(e){if("function"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.apply(this,n)}return e}},{key:"uploadFile",value:function(e){return this.uploadFiles([e])}},{key:"uploadFiles",value:function(e){var t=this;this._transformFiles(e,(function(n){if(t.options.chunking){var r=n[0];e[0].upload.chunked=t.options.chunking&&(t.options.forceChunking||r.size>t.options.chunkSize),e[0].upload.totalChunkCount=Math.ceil(r.size/t.options.chunkSize)}if(e[0].upload.chunked){var o=e[0],a=n[0];o.upload.chunks=[];var u=function(){for(var n=0;void 0!==o.upload.chunks[n];)n++;if(!(n>=o.upload.totalChunkCount)){var r=n*t.options.chunkSize,u=Math.min(r+t.options.chunkSize,a.size),s={name:t._getParamName(0),data:a.webkitSlice?a.webkitSlice(r,u):a.slice(r,u),filename:o.upload.filename,chunkIndex:n};o.upload.chunks[n]={file:o,index:n,dataBlock:s,status:i.UPLOADING,progress:0,retries:0},t._uploadData(e,[s])}};if(o.upload.finishedChunkUpload=function(n,r){var a=!0;n.status=i.SUCCESS,n.dataBlock=null,n.xhr=null;for(var s=0;s<o.upload.totalChunkCount;s++){if(void 0===o.upload.chunks[s])return u();o.upload.chunks[s].status!==i.SUCCESS&&(a=!1)}a&&t.options.chunksUploaded(o,(function(){t._finished(e,r,null)}))},t.options.parallelChunkUploads)for(var s=0;s<o.upload.totalChunkCount;s++)u();else u()}else{for(var l=[],c=0;c<e.length;c++)l[c]={name:t._getParamName(c),data:n[c],filename:e[c].upload.filename};t._uploadData(e,l)}}))}},{key:"_getChunk",value:function(e,t){for(var n=0;n<e.upload.totalChunkCount;n++)if(void 0!==e.upload.chunks[n]&&e.upload.chunks[n].xhr===t)return e.upload.chunks[n]}},{key:"_uploadData",value:function(e,t){var n,r=this,o=new XMLHttpRequest,a=c(e,!0);try{for(a.s();!(n=a.n()).done;)n.value.xhr=o}catch(e){a.e(e)}finally{a.f()}e[0].upload.chunked&&(e[0].upload.chunks[t[0].chunkIndex].xhr=o);var u=this.resolveOption(this.options.method,e),s=this.resolveOption(this.options.url,e);o.open(u,s,!0),this.resolveOption(this.options.timeout,e)&&(o.timeout=this.resolveOption(this.options.timeout,e)),o.withCredentials=!!this.options.withCredentials,o.onload=function(t){r._finishedUploading(e,o,t)},o.ontimeout=function(){r._handleUploadError(e,o,"Request timedout after ".concat(r.options.timeout/1e3," seconds"))},o.onerror=function(){r._handleUploadError(e,o)},(null!=o.upload?o.upload:o).onprogress=function(t){return r._updateFilesUploadProgress(e,o,t)};var l={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"};for(var f in this.options.headers&&i.extend(l,this.options.headers),l){var p=l[f];p&&o.setRequestHeader(f,p)}var h=new FormData;if(this.options.params){var d=this.options.params;for(var v in"function"==typeof d&&(d=d.call(this,e,o,e[0].upload.chunked?this._getChunk(e[0],o):null)),d){var y=d[v];if(Array.isArray(y))for(var g=0;g<y.length;g++)h.append(v,y[g]);else h.append(v,y)}}var m,b=c(e,!0);try{for(b.s();!(m=b.n()).done;){var x=m.value;this.emit("sending",x,o,h)}}catch(e){b.e(e)}finally{b.f()}this.options.uploadMultiple&&this.emit("sendingmultiple",e,o,h),this._addFormElementData(h);for(var w=0;w<t.length;w++){var E=t[w];h.append(E.name,E.data,E.filename)}this.submitRequest(o,h,e)}},{key:"_transformFiles",value:function(e,t){for(var n=this,r=[],i=0,o=function(o){n.options.transformFile.call(n,e[o],(function(n){r[o]=n,++i===e.length&&t(r)}))},a=0;a<e.length;a++)o(a)}},{key:"_addFormElementData",value:function(e){if("FORM"===this.element.tagName){var t,n=c(this.element.querySelectorAll("input, textarea, select, button"),!0);try{for(n.s();!(t=n.n()).done;){var r=t.value,i=r.getAttribute("name"),o=r.getAttribute("type");if(o&&(o=o.toLowerCase()),null!=i)if("SELECT"===r.tagName&&r.hasAttribute("multiple")){var a,u=c(r.options,!0);try{for(u.s();!(a=u.n()).done;){var s=a.value;s.selected&&e.append(i,s.value)}}catch(e){u.e(e)}finally{u.f()}}else(!o||"checkbox"!==o&&"radio"!==o||r.checked)&&e.append(i,r.value)}}catch(e){n.e(e)}finally{n.f()}}}},{key:"_updateFilesUploadProgress",value:function(e,t,n){if(e[0].upload.chunked){var r=e[0],i=this._getChunk(r,t);n?(i.progress=100*n.loaded/n.total,i.total=n.total,i.bytesSent=n.loaded):(i.progress=100,i.bytesSent=i.total),r.upload.progress=0,r.upload.total=0,r.upload.bytesSent=0;for(var o=0;o<r.upload.totalChunkCount;o++)r.upload.chunks[o]&&void 0!==r.upload.chunks[o].progress&&(r.upload.progress+=r.upload.chunks[o].progress,r.upload.total+=r.upload.chunks[o].total,r.upload.bytesSent+=r.upload.chunks[o].bytesSent);r.upload.progress=r.upload.progress/r.upload.totalChunkCount,this.emit("uploadprogress",r,r.upload.progress,r.upload.bytesSent)}else{var a,u=c(e,!0);try{for(u.s();!(a=u.n()).done;){var s=a.value;s.upload.total&&s.upload.bytesSent&&s.upload.bytesSent==s.upload.total||(n?(s.upload.progress=100*n.loaded/n.total,s.upload.total=n.total,s.upload.bytesSent=n.loaded):(s.upload.progress=100,s.upload.bytesSent=s.upload.total),this.emit("uploadprogress",s,s.upload.progress,s.upload.bytesSent))}}catch(e){u.e(e)}finally{u.f()}}}},{key:"_finishedUploading",value:function(e,t,n){var r;if(e[0].status!==i.CANCELED&&4===t.readyState){if("arraybuffer"!==t.responseType&&"blob"!==t.responseType&&(r=t.responseText,t.getResponseHeader("content-type")&&~t.getResponseHeader("content-type").indexOf("application/json")))try{r=JSON.parse(r)}catch(e){n=e,r="Invalid JSON response from server."}this._updateFilesUploadProgress(e,t),200<=t.status&&t.status<300?e[0].upload.chunked?e[0].upload.finishedChunkUpload(this._getChunk(e[0],t),r):this._finished(e,r,n):this._handleUploadError(e,t,r)}}},{key:"_handleUploadError",value:function(e,t,n){if(e[0].status!==i.CANCELED){if(e[0].upload.chunked&&this.options.retryChunks){var r=this._getChunk(e[0],t);if(r.retries++<this.options.retryChunksLimit)return void this._uploadData(e,[r.dataBlock]);console.warn("Retried this chunk too often. Giving up.")}this._errorProcessing(e,n||this.options.dictResponseError.replace("{{statusCode}}",t.status),t)}}},{key:"submitRequest",value:function(e,t,n){1==e.readyState?e.send(t):console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.")}},{key:"_finished",value:function(e,t,n){var r,o=c(e,!0);try{for(o.s();!(r=o.n()).done;){var a=r.value;a.status=i.SUCCESS,this.emit("success",a,t,n),this.emit("complete",a)}}catch(e){o.e(e)}finally{o.f()}if(this.options.uploadMultiple&&(this.emit("successmultiple",e,t,n),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}},{key:"_errorProcessing",value:function(e,t,n){var r,o=c(e,!0);try{for(o.s();!(r=o.n()).done;){var a=r.value;a.status=i.ERROR,this.emit("error",a,t,n),this.emit("complete",a)}}catch(e){o.e(e)}finally{o.f()}if(this.options.uploadMultiple&&(this.emit("errormultiple",e,t,n),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}}],[{key:"initClass",value:function(){this.prototype.Emitter=o,this.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],this.prototype._thumbnailQueue=[],this.prototype._processingThumbnail=!1}},{key:"extend",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];for(var u in a){var s=a[u];e[u]=s}}return e}},{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}}]),i}(o);b.initClass(),b.version="5.9.3",b.options={},b.optionsForElement=function(e){return e.getAttribute("id")?b.options[w(e.getAttribute("id"))]:void 0},b.instances=[],b.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},b.autoDiscover=!0,b.discover=function(){var e;if(document.querySelectorAll)e=document.querySelectorAll(".dropzone");else{e=[];var t=function(t){return function(){var n,r=[],i=c(t,!0);try{for(i.s();!(n=i.n()).done;){var o=n.value;/(^| )dropzone($| )/.test(o.className)?r.push(e.push(o)):r.push(void 0)}}catch(e){i.e(e)}finally{i.f()}return r}()};t(document.getElementsByTagName("div")),t(document.getElementsByTagName("form"))}return function(){var t,n=[],r=c(e,!0);try{for(r.s();!(t=r.n()).done;){var i=t.value;!1!==b.optionsForElement(i)?n.push(new b(i)):n.push(void 0)}}catch(e){r.e(e)}finally{r.f()}return n}()},b.blockedBrowsers=[/opera.*(Macintosh|Windows Phone).*version\/12/i],b.isBrowserSupported=function(){var e=!0;if(window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a")){void 0!==b.blacklistedBrowsers&&(b.blockedBrowsers=b.blacklistedBrowsers);var t,n=c(b.blockedBrowsers,!0);try{for(n.s();!(t=n.n()).done;)t.value.test(navigator.userAgent)&&(e=!1)}catch(e){n.e(e)}finally{n.f()}}else e=!1;else e=!1;return e},b.dataURItoBlob=function(e){for(var t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(t.length),i=new Uint8Array(r),o=0,a=t.length,u=0<=a;u?o<=a:o>=a;u?o++:o--)i[o]=t.charCodeAt(o);return new Blob([r],{type:n})};var x=function(e,t){return e.filter((function(e){return e!==t})).map((function(e){return e}))},w=function(e){return e.replace(/[\-_](\w)/g,(function(e){return e.charAt(1).toUpperCase()}))};b.createElement=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes[0]},b.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},b.getElement=function(e,t){var n;if("string"==typeof e?n=document.querySelector(e):null!=e.nodeType&&(n=e),null==n)throw new Error("Invalid `".concat(t,"` option provided. Please provide a CSS selector or a plain HTML element."));return n},b.getElements=function(e,t){var n,r;if(e instanceof Array){r=[];try{var i,o=c(e,!0);try{for(o.s();!(i=o.n()).done;)n=i.value,r.push(this.getElement(n,t))}catch(e){o.e(e)}finally{o.f()}}catch(e){r=null}}else if("string"==typeof e){r=[];var a,u=c(document.querySelectorAll(e),!0);try{for(u.s();!(a=u.n()).done;)n=a.value,r.push(n)}catch(e){u.e(e)}finally{u.f()}}else null!=e.nodeType&&(r=[e]);if(null==r||!r.length)throw new Error("Invalid `".concat(t,"` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));return r},b.confirm=function(e,t,n){return window.confirm(e)?t():null!=n?n():void 0},b.isValidFile=function(e,t){if(!t)return!0;t=t.split(",");var n,r=e.type,i=r.replace(/\/.*$/,""),o=c(t,!0);try{for(o.s();!(n=o.n()).done;){var a=n.value;if("."===(a=a.trim()).charAt(0)){if(-1!==e.name.toLowerCase().indexOf(a.toLowerCase(),e.name.length-a.length))return!0}else if(/\/\*$/.test(a)){if(i===a.replace(/\/.*$/,""))return!0}else if(r===a)return!0}}catch(e){o.e(e)}finally{o.f()}return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(e){return this.each((function(){return new b(this,e)}))}),b.ADDED="added",b.QUEUED="queued",b.ACCEPTED=b.QUEUED,b.UPLOADING="uploading",b.PROCESSING=b.UPLOADING,b.CANCELED="canceled",b.ERROR="error",b.SUCCESS="success";var E=function(e,t,n,r,i,o,a,u,s,l){var c=function(e){e.naturalWidth;var t=e.naturalHeight,n=document.createElement("canvas");n.width=1,n.height=t;var r=n.getContext("2d");r.drawImage(e,0,0);for(var i=r.getImageData(1,0,1,t).data,o=0,a=t,u=t;u>o;)0===i[4*(u-1)+3]?a=u:o=u,u=a+o>>1;var s=u/t;return 0===s?1:s}(t);return e.drawImage(t,n,r,i,o,a,u,s,l/c)},k=function(){function e(){p(this,e)}return d(e,null,[{key:"initClass",value:function(){this.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}},{key:"encode64",value:function(e){for(var t="",n=void 0,r=void 0,i="",o=void 0,a=void 0,u=void 0,s="",l=0;o=(n=e[l++])>>2,a=(3&n)<<4|(r=e[l++])>>4,u=(15&r)<<2|(i=e[l++])>>6,s=63&i,isNaN(r)?u=s=64:isNaN(i)&&(s=64),t=t+this.KEY_STR.charAt(o)+this.KEY_STR.charAt(a)+this.KEY_STR.charAt(u)+this.KEY_STR.charAt(s),n=r=i="",o=a=u=s="",l<e.length;);return t}},{key:"restore",value:function(e,t){if(!e.match("data:image/jpeg;base64,"))return t;var n=this.decode64(e.replace("data:image/jpeg;base64,","")),r=this.slice2Segments(n),i=this.exifManipulation(t,r);return"data:image/jpeg;base64,".concat(this.encode64(i))}},{key:"exifManipulation",value:function(e,t){var n=this.getExifArray(t),r=this.insertExif(e,n);return new Uint8Array(r)}},{key:"getExifArray",value:function(e){for(var t=void 0,n=0;n<e.length;){if(255===(t=e[n])[0]&225===t[1])return t;n++}return[]}},{key:"insertExif",value:function(e,t){var n=e.replace("data:image/jpeg;base64,",""),r=this.decode64(n),i=r.indexOf(255,3),o=r.slice(0,i),a=r.slice(i),u=o;return(u=u.concat(t)).concat(a)}},{key:"slice2Segments",value:function(e){for(var t=0,n=[];!(255===e[t]&218===e[t+1]);){if(255===e[t]&216===e[t+1])t+=2;else{var r=t+(256*e[t+2]+e[t+3])+2,i=e.slice(t,r);n.push(i),t=r}if(t>e.length)break}return n}},{key:"decode64",value:function(e){var t=void 0,n=void 0,r="",i=void 0,o=void 0,a="",u=0,s=[];for(/[^A-Za-z0-9\+\/\=]/g.exec(e)&&console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");t=this.KEY_STR.indexOf(e.charAt(u++))<<2|(i=this.KEY_STR.indexOf(e.charAt(u++)))>>4,n=(15&i)<<4|(o=this.KEY_STR.indexOf(e.charAt(u++)))>>2,r=(3&o)<<6|(a=this.KEY_STR.indexOf(e.charAt(u++))),s.push(t),64!==o&&s.push(n),64!==a&&s.push(r),t=n=r="",i=o=a="",u<e.length;);return s}}]),e}();k.initClass(),b._autoDiscoverFunction=function(){if(b.autoDiscover)return b.discover()},function(e,t){var n=!1,r=!0,i=e.document,o=i.documentElement,a=i.addEventListener?"addEventListener":"attachEvent",u=i.addEventListener?"removeEventListener":"detachEvent",s=i.addEventListener?"":"on",l=function r(o){if("readystatechange"!==o.type||"complete"===i.readyState)return("load"===o.type?e:i)[u](s+o.type,r,!1),!n&&(n=!0)?t.call(e,o.type||o):void 0};if("complete"!==i.readyState){if(i.createEventObject&&o.doScroll){try{r=!e.frameElement}catch(e){}r&&function e(){try{o.doScroll("left")}catch(t){return void setTimeout(e,50)}return l("poll")}()}i[a](s+"DOMContentLoaded",l,!1),i[a](s+"readystatechange",l,!1),e[a](s+"load",l,!1)}}(window,b._autoDiscoverFunction),window.Dropzone=b;var A=b}(),r}()}));
// SPDX-FileCopyrightText: 2010-2024 the Friendica project
//
// SPDX-License-Identifier: AGPL-3.0-or-later

Dropzone.autoDiscover = false;

// Infer MIME type from the first 12 bytes of a file.
// Returns a MIME string or '' if unrecognised.
function dzSniffType(bytes) {
	// JPEG
	if (bytes[0] === 0xFF && bytes[1] === 0xD8 && bytes[2] === 0xFF) return 'image/jpeg';
	// PNG
	if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E && bytes[3] === 0x47) return 'image/png';
	// GIF
	if (bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46) return 'image/gif';
	// BMP
	if (bytes[0] === 0x42 && bytes[1] === 0x4D) return 'image/bmp';
	// WebP  (RIFF....WEBP)
	if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 &&
		bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50) return 'image/webp';
	// WebM / MKV
	if (bytes[0] === 0x1A && bytes[1] === 0x45 && bytes[2] === 0xDF && bytes[3] === 0xA3) return 'video/webm';
	// AVI  (RIFF....AVI )
	if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 &&
		bytes[8] === 0x41 && bytes[9] === 0x56 && bytes[10] === 0x49) return 'video/x-msvideo';
	// WAV  (RIFF....WAVE)
	if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 &&
		bytes[8] === 0x57 && bytes[9] === 0x41 && bytes[10] === 0x56 && bytes[11] === 0x45) return 'audio/wav';
	// MP3 sync word or ID3 tag
	if ((bytes[0] === 0xFF && (bytes[1] === 0xFB || bytes[1] === 0xF3 || bytes[1] === 0xF2)) ||
		(bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33)) return 'audio/mpeg';
	// AAC ADTS
	if (bytes[0] === 0xFF && (bytes[1] === 0xF1 || bytes[1] === 0xF9)) return 'audio/aac';
	// OGG
	if (bytes[0] === 0x4F && bytes[1] === 0x67 && bytes[2] === 0x67 && bytes[3] === 0x53) return 'audio/ogg';
	// FLAC
	if (bytes[0] === 0x66 && bytes[1] === 0x4C && bytes[2] === 0x61 && bytes[3] === 0x43) return 'audio/flac';
	// ftyp-based container (MP4, MOV, M4V, M4A, 3GP, HEIC, AVIF …)
	// The 4-byte box type 'ftyp' sits at offset 4; the major brand follows at offset 8.
	if (bytes[4] === 0x66 && bytes[5] === 0x74 && bytes[6] === 0x79 && bytes[7] === 0x70) {
		var brand = String.fromCharCode(bytes[8], bytes[9], bytes[10], bytes[11]);
		if (/^(heic|heis|heix|hevc|hevx|mif1|msf1|avif|avis)/.test(brand)) return 'image/heic';
		if (/^(M4A |M4B |M4P |f4a |f4b )/.test(brand)) return 'audio/mp4';
		return 'video/mp4'; // mp41, mp42, isom, qt__, 3gp*, m4v_, …
	}
	return '';
}

var DzFactory = function (max_imagesize) {

	// Resolve the effective MIME type: browser-reported first, magic-byte sniff second.
	function effectiveType(file) {
		return file.type || file._sniffedType || '';
	}

	this.createDropzone = function(dropSelector, textareaElementId, clickableSelector, previewsContainerId) {
		return new Dropzone(dropSelector, {
			paramName: 'userfile',
			// 2 GB hard ceiling — prevents Dropzone's built-in check from firing on large
			// videos before our type-aware limit runs in the accept callback below.
			maxFilesize: 2048,
			url: function(files) {
				return effectiveType(files[0]).match(/^image\//)
					? '/udp/media/photo/upload'
					: '/media/attachment/upload/chunk';
			},
			acceptedFiles: null, // input[accept] gates the OS picker; Dropzone's check breaks empty-type files on mobile
			clickable: clickableSelector || false,
			previewsContainer: previewsContainerId || null,
			// UDP: always chunked — images are small enough to be a single chunk (50 MB limit),
			// so the photo endpoint receives them as a normal single-file POST and ignores
			// the extra Dropzone metadata fields. Toggling chunking per-file in `processing`
			// caused Dropzone to skip chunk 1 of multi-chunk uploads.
			chunking: true,
			forceChunking: true,
			chunkSize: 50 * 1024 * 1024, // 50 MB per HTTP request
			retryChunks: true,
			retryChunksLimit: 3,
			parallelChunkUploads: false,  // sequential chunks simplify server-side assembly
			dictDefaultMessage: dzStrings.dictDefaultMessage,
			dictFallbackMessage: dzStrings.dictFallbackMessage,
			dictFallbackText: dzStrings.dictFallbackText,
			dictFileTooBig: dzStrings.dictFileTooBig,
			dictInvalidFileType: dzStrings.dictInvalidFileType,
			dictResponseError: dzStrings.dictResponseError,
			dictCancelUpload: dzStrings.dictCancelUpload,
			dictUploadCanceled: dzStrings.dictUploadCanceled,
			dictCancelUploadConfirmation: dzStrings.dictCancelUploadConfirmation,
			dictRemoveFile: dzStrings.dictRemoveFile,
			dictMaxFilesExceeded: dzStrings.dictMaxFilesExceeded,
			accept: function(file, done) {
				var targetTextarea = document.getElementById(textareaElementId);

				function proceed() {
					if (targetTextarea && targetTextarea.setRangeText) {
						targetTextarea.setRangeText("\n[!upload-" + file.name + "]\n",
							targetTextarea.selectionStart, targetTextarea.selectionEnd, "end");
					}
					done();
				}

				function checkAndProceed() {
					var t       = effectiveType(file);
					var isImage = !!t.match(/^image\//);
					var limitMB = isImage ? max_imagesize : 2048;
					if (file.size > limitMB * 1024 * 1024) {
						done((isImage ? 'Image' : 'Video/audio') + ' too large (max ' + limitMB + ' MB)');
					} else {
						proceed();
					}
				}

				if (file.type) {
					checkAndProceed();
				} else {
					// Browser didn't report a MIME type (common for direct camera recordings on mobile).
					// Read 12 bytes and sniff the magic number before checking size or proceeding.
					try {
						var reader = new FileReader();
						reader.onload = function(e) {
							try { file._sniffedType = dzSniffType(new Uint8Array(e.target.result)); } catch (_) {}
							checkAndProceed();
						};
						reader.onerror = function() { checkAndProceed(); };
						reader.readAsArrayBuffer(file.slice(0, 12));
					} catch (_) {
						checkAndProceed();
					}
				}
			},
			init: function() {
				console.log('[UDP DZ] init — chunking=' + this.options.chunking + ' forceChunking=' + this.options.forceChunking);

				this.on("sending", function(file, xhr, formData) {
					var idx   = formData.get ? formData.get('dzchunkindex')      : '?';
					var total = formData.get ? formData.get('dztotalchunkcount') : '?';
					var uuid  = formData.get ? formData.get('dzuuid')            : '?';
					console.log('[UDP DZ] sending chunk idx=' + idx + ' total=' + total + ' uuid=' + uuid + ' type=' + effectiveType(file));

					// Send ACL fields with each chunk so UploadChunk.php can store the
					// file with the correct permissions before the post is created.
					var dropzoneEl = document.querySelector(dropSelector);
					var scope = (dropzoneEl && dropzoneEl.closest('form')) || document;
					var visEl = scope.querySelector('[name="visibility"]:checked');
					formData.append('visibility', visEl ? visEl.value : 'public');
					['contact_allow', 'circle_allow', 'contact_deny', 'circle_deny'].forEach(function(field) {
						var el = scope.querySelector('[name="' + field + '"]');
						formData.append(field, el ? el.value : '');
					});
					var keepOrigEl = scope.querySelector('[name="keep_original"]');
					formData.append('keep_original', (keepOrigEl && keepOrigEl.checked) ? '1' : '0');
				});

				this.on("chunksUploaded", function(file, done) {
					console.log('[UDP DZ] all chunks uploaded for ' + file.name);
					done();
				});

				this.on("error", function(file, message, xhr) {
					var targetTextarea = document.getElementById(textareaElementId);
					if (!targetTextarea || !targetTextarea.setRangeText) return;

					// Normalise message from three possible shapes:
					//   string  — client-side validation or plain-text server error
					//   object  — JSON error from chunk endpoint: {error: "..."}
					//   xhr     — fallback when Dropzone couldn't parse the response
					var errorMsg;
					if (typeof message === 'string' && message.length) {
						errorMsg = message;
					} else if (message && typeof message === 'object') {
						errorMsg = message.error || message.message || JSON.stringify(message);
					} else if (xhr) {
						try {
							var parsed = JSON.parse(xhr.responseText);
							errorMsg = parsed.error || parsed.message || xhr.responseText;
						} catch (_) {
							errorMsg = xhr.responseText || 'Upload failed';
						}
					} else {
						errorMsg = 'Upload failed';
					}

					var errorText  = '[Upload error: ' + errorMsg + ']';
					var placeholder = '[!upload-' + file.name + ']';
					var idx = targetTextarea.value.indexOf(placeholder);

					if (idx !== -1) {
						// Replace the pending placeholder with the error
						targetTextarea.setRangeText(errorText, idx, idx + placeholder.length);
					} else {
						// No placeholder was inserted (pre-accept rejection) — insert at cursor
						var pos    = targetTextarea.selectionStart;
						var prefix = targetTextarea.value.substring(0, pos);
						targetTextarea.setRangeText(
							(prefix.length > 0 && !prefix.endsWith('\n') ? '\n' : '') + errorText + '\n',
							pos, pos, 'end'
						);
					}
					targetTextarea.dispatchEvent(new Event('change', { bubbles: true }));
				});

				this.on('success', function(file, serverResponse) {
					const targetTextarea = document.getElementById(textareaElementId);
					if (targetTextarea.setRangeText) {
						let u = "[!upload-" + file.name + "]";

						// Normalise serverResponse: Dropzone may pass a raw JSON string
						// or a pre-parsed object depending on version and Content-Type.
						let parsed = serverResponse;
						if (typeof serverResponse === 'string' && serverResponse.length) {
							try { parsed = JSON.parse(serverResponse); } catch (_) {}
						}

						let srp;
						if (parsed && typeof parsed === 'object' && parsed.constructor === Object) {
							if (parsed.ok && parsed.id) {
								var attachUrl = window.location.protocol + '//' + window.location.host + '/attach/' + parsed.id;
								var t = effectiveType(file);
								if (t.match(/^video\//)) {
									srp = '[video]' + attachUrl + '[/video]';
								} else if (t.match(/^audio\//)) {
									srp = '[audio]' + attachUrl + '[/audio]';
								} else {
									srp = '[attachment]' + attachUrl + '[/attachment]';
								}
							} else {
								var errMsg = parsed.error || parsed.message || 'Upload failed';
								srp = '[Upload error: ' + errMsg + ']';
							}
						} else {
							// Unparseable response — treat as a plain string insert
							srp = typeof parsed === 'string' ? parsed : '';
						}

						// Allow page-level hook to transform the inserted text (e.g. photo tokens)
						let insertText = srp;
						if (typeof window.onDropzoneInsert === 'function') {
							const hooked = window.onDropzoneInsert(srp, file);
							if (hooked !== null && hooked !== undefined) {
								insertText = hooked;
							}
						}

						let idx = targetTextarea.value.indexOf(u);
						if (idx !== -1) {
							// Normal path: replace the pending placeholder
							let c = targetTextarea.selectionStart;
							if (c > idx) { c = c + insertText.length - u.length; }
							targetTextarea.setRangeText(insertText, idx, idx + u.length);
							targetTextarea.selectionStart = c;
							targetTextarea.selectionEnd   = c;
						} else {
							// Placeholder was already replaced (e.g. by an error on first chunk
							// attempt before retry succeeded) — insert at current cursor position.
							let pos    = targetTextarea.selectionStart;
							let prefix = targetTextarea.value.substring(0, pos);
							targetTextarea.setRangeText(
								(prefix.length > 0 && !prefix.endsWith('\n') ? '\n' : '') + insertText + '\n',
								pos, pos, 'end'
							);
						}
					} else {
						targetTextarea.focus();
						document.execCommand('insertText', false /*no UI*/, serverResponse);
					}
					targetTextarea.dispatchEvent(new Event('change', { bubbles: true }));
				});

				this.on('complete', function(file) {
					const dz = this;
					// Remove just uploaded file from dropzone, makes interface more clear.
					// Image can be seen in posting-preview
					// We need preview to get optical feedback about upload-progress.
					// you see success, when the bb-code link for image is inserted
					setTimeout(function(){
						dz.removeFile(file);
					},5000);
				});
			},
			paste: function(event){
				const items = (event.clipboardData || event.originalEvent.clipboardData).items;
				items.forEach((item) => {
					if (item.kind === 'file') {
						dz.addFile(item.getAsFile());
					}
				})
			},
		});
	};

	this.copyPaste = function(event, dz) {
		const items = (event.clipboardData || event.originalEvent.clipboardData).items;
		items.forEach((item) => {
			if (item.kind === 'file') {
				dz.addFile(item.getAsFile());
			}
		})
	};

	this.setupDropzone = function(dropSelector, textareaElementId, clickableSelector, previewsContainerId) {
		const self = this;
		var dropzone = this.createDropzone(dropSelector, textareaElementId, clickableSelector, previewsContainerId);
		$(dropSelector).on('paste', function(event) {
			self.copyPaste(event, dropzone);
		});
		return dropzone;
	};
}

// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,
"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);
$(document).ready(function() {
	$.fancybox.defaults.smallBtn = "true";
	$.fancybox.defaults.loop = "true";
	$.fancybox.defaults.afterLoad = function(instance, current) {

		if (current.$image) {
			current.$image.attr('alt', current.opts.$orig.find('img').attr('alt') );
			current.$image.attr('title', current.opts.$orig.find('img').attr('title') );
		}
	};
  $.fancybox.defaults.caption = function (instance, slide, caption) {
		if (slide.$thumb) {
			return slide.$thumb.attr('alt');
		}
	};
});

const EmojiPicker=function(e){this.options=e,this.trigger=this.options.trigger.map(e=>e.selector),this.insertInto=void 0;let i="",t="",o,l=!1,a=this.options.closeButton?370:350;this.lib=function(e){let i=e=>{var i=Object.prototype.toString.call(e);return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(i)&&"number"==typeof e.length&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)};return{el(){if(e)return e.nodeName?[e]:i(e)?Array.from(e):"string"==typeof e||"STRING"==typeof e?Array.from(document.querySelectorAll(e)):void 0},on(e,i,t){t?this.el().forEach(o=>{o.addEventListener(e,e=>{if(e.target.closest(t)){let o;if(Array.isArray(t)){let l=e.target.outerHTML,a=t.findIndex(e=>l.includes(e.slice(1)));o=t[a]}i(e,o)}})}):this.el().forEach(t=>{t.addEventListener(e,i.bind(t))})},css(e){for(let i in e)if(Object.hasOwnProperty.call(e,i)){let t=e[i];this.el().forEach(e=>e.style[i]=t)}},attr(e,i){if(!i)return this.el()[0].getAttribute(e);this.el().forEach(t=>t.setAttribute(e,i))},removeAttr(e){this.el().forEach(i=>i.removeAttribute(e))},addClass(e){this.el().forEach(i=>i.classList.add(e))},removeClass(e){this.el().forEach(i=>i.classList.remove(e))},slug:e=>e.toLowerCase().replace(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w]+|[\_]+/ig,"-").replace(/ +/g,"-"),remove(e){this.el().forEach(e=>e.remove())},val(e){let i;return void 0===e?this.el().forEach(e=>{i=e.value}):this.el().forEach(i=>{i.value=e}),i},text(i){if(void 0===i)return e.innerText;this.el().forEach(e=>{e.innerText=i})},html(i){if(void 0===i)return e.innerHTML;this.el().forEach(e=>{e.innerHTML=i})}}};let m={People:[{emoji:"\uD83D\uDE00",title:"Grinning Face"},{emoji:"\uD83D\uDE03",title:"Grinning Face with Big Eyes"},{emoji:"\uD83D\uDE04",title:"Grinning Face with Smiling Eyes"},{emoji:"\uD83D\uDE01",title:"Beaming Face with Smiling Eyes"},{emoji:"\uD83D\uDE06",title:"Grinning Squinting Face"},{emoji:"\uD83D\uDE05",title:"Grinning Face with Sweat"},{emoji:"\uD83E\uDD23",title:"Rolling on the Floor Laughing"},{emoji:"\uD83D\uDE02",title:"Face with Tears of Joy"},{emoji:"\uD83D\uDE42",title:"Slightly Smiling Face"},{emoji:"\uD83D\uDE43",title:"Upside-Down Face"},{emoji:"\uD83D\uDE09",title:"Winking Face"},{emoji:"\uD83D\uDE0A",title:"Smiling Face with Smiling Eyes"},{emoji:"\uD83D\uDE07",title:"Smiling Face with Halo"},{emoji:"\uD83E\uDD70",title:"Smiling Face with Hearts"},{emoji:"\uD83D\uDE0D",title:"Smiling Face with Heart-Eyes"},{emoji:"\uD83E\uDD29",title:"Star-Struck"},{emoji:"\uD83D\uDE18",title:"Face Blowing a Kiss"},{emoji:"\uD83D\uDE17",title:"Kissing Face"},{emoji:"☺️",title:"Smiling Face"},{emoji:"\uD83D\uDE1A",title:"Kissing Face with Closed Eyes"},{emoji:"\uD83D\uDE19",title:"Kissing Face with Smiling Eyes"},{emoji:"\uD83E\uDD72",title:"Smiling Face with Tear"},{emoji:"\uD83D\uDE0B",title:"Face Savoring Food"},{emoji:"\uD83D\uDE1B",title:"Face with Tongue"},{emoji:"\uD83D\uDE1C",title:"Winking Face with Tongue"},{emoji:"\uD83E\uDD2A",title:"Zany Face"},{emoji:"\uD83D\uDE1D",title:"Squinting Face with Tongue"},{emoji:"\uD83E\uDD11",title:"Money-Mouth Face"},{emoji:"\uD83E\uDD17",title:"Smiling Face with Open Hands"},{emoji:"\uD83E\uDD2D",title:"Face with Hand Over Mouth"},{emoji:"\uD83E\uDD2B",title:"Shushing Face"},{emoji:"\uD83E\uDD14",title:"Thinking Face"},{emoji:"\uD83E\uDD10",title:"Zipper-Mouth Face"},{emoji:"\uD83E\uDD28",title:"Face with Raised Eyebrow"},{emoji:"\uD83D\uDE10",title:"Neutral Face"},{emoji:"\uD83D\uDE11",title:"Expressionless Face"},{emoji:"\uD83D\uDE36",title:"Face Without Mouth"},{emoji:"\uD83D\uDE36‍\uD83C\uDF2B️",title:"Face in Clouds"},{emoji:"\uD83D\uDE0F",title:"Smirking Face"},{emoji:"\uD83D\uDE12",title:"Unamused Face"},{emoji:"\uD83D\uDE44",title:"Face with Rolling Eyes"},{emoji:"\uD83D\uDE2C",title:"Grimacing Face"},{emoji:"\uD83D\uDE2E‍\uD83D\uDCA8",title:"Face Exhaling"},{emoji:"\uD83E\uDD25",title:"Lying Face"},{emoji:"\uD83D\uDE0C",title:"Relieved Face"},{emoji:"\uD83D\uDE14",title:"Pensive Face"},{emoji:"\uD83D\uDE2A",title:"Sleepy Face"},{emoji:"\uD83E\uDD24",title:"Drooling Face"},{emoji:"\uD83D\uDE34",title:"Sleeping Face"},{emoji:"\uD83D\uDE37",title:"Face with Medical Mask"},{emoji:"\uD83E\uDD12",title:"Face with Thermometer"},{emoji:"\uD83E\uDD15",title:"Face with Head-Bandage"},{emoji:"\uD83E\uDD22",title:"Nauseated Face"},{emoji:"\uD83E\uDD2E",title:"Face Vomiting"},{emoji:"\uD83E\uDD27",title:"Sneezing Face"},{emoji:"\uD83E\uDD75",title:"Hot Face"},{emoji:"\uD83E\uDD76",title:"Cold Face"},{emoji:"\uD83E\uDD74",title:"Woozy Face"},{emoji:"\uD83D\uDE35",title:"Face with Crossed-Out Eyes"},{emoji:"\uD83D\uDE35‍\uD83D\uDCAB",title:"Face with Spiral Eyes"},{emoji:"\uD83E\uDD2F",title:"Exploding Head"},{emoji:"\uD83E\uDD20",title:"Cowboy Hat Face"},{emoji:"\uD83E\uDD73",title:"Partying Face"},{emoji:"\uD83E\uDD78",title:"Disguised Face"},{emoji:"\uD83D\uDE0E",title:"Smiling Face with Sunglasses"},{emoji:"\uD83E\uDD13",title:"Nerd Face"},{emoji:"\uD83E\uDDD0",title:"Face with Monocle"},{emoji:"\uD83D\uDE15",title:"Confused Face"},{emoji:"\uD83D\uDE1F",title:"Worried Face"},{emoji:"\uD83D\uDE41",title:"Slightly Frowning Face"},{emoji:"☹️",title:"Frowning Face"},{emoji:"\uD83D\uDE2E",title:"Face with Open Mouth"},{emoji:"\uD83D\uDE2F",title:"Hushed Face"},{emoji:"\uD83D\uDE32",title:"Astonished Face"},{emoji:"\uD83D\uDE33",title:"Flushed Face"},{emoji:"\uD83E\uDD7A",title:"Pleading Face"},{emoji:"\uD83D\uDE26",title:"Frowning Face with Open Mouth"},{emoji:"\uD83D\uDE27",title:"Anguished Face"},{emoji:"\uD83D\uDE28",title:"Fearful Face"},{emoji:"\uD83D\uDE30",title:"Anxious Face with Sweat"},{emoji:"\uD83D\uDE25",title:"Sad but Relieved Face"},{emoji:"\uD83D\uDE22",title:"Crying Face"},{emoji:"\uD83D\uDE2D",title:"Loudly Crying Face"},{emoji:"\uD83D\uDE31",title:"Face Screaming in Fear"},{emoji:"\uD83D\uDE16",title:"Confounded Face"},{emoji:"\uD83D\uDE23",title:"Persevering Face"},{emoji:"\uD83D\uDE1E",title:"Disappointed Face"},{emoji:"\uD83D\uDE13",title:"Downcast Face with Sweat"},{emoji:"\uD83D\uDE29",title:"Weary Face"},{emoji:"\uD83D\uDE2B",title:"Tired Face"},{emoji:"\uD83E\uDD71",title:"Yawning Face"},{emoji:"\uD83D\uDE24",title:"Face with Steam From Nose"},{emoji:"\uD83D\uDE21",title:"Enraged Face"},{emoji:"\uD83D\uDE20",title:"Angry Face"},{emoji:"\uD83E\uDD2C",title:"Face with Symbols on Mouth"},{emoji:"\uD83D\uDE08",title:"Smiling Face with Horns"},{emoji:"\uD83D\uDC7F",title:"Angry Face with Horns"},{emoji:"\uD83D\uDC80",title:"Skull"},{emoji:"☠️",title:"Skull and Crossbones"},{emoji:"\uD83D\uDCA9",title:"Pile of Poo"},{emoji:"\uD83E\uDD21",title:"Clown Face"},{emoji:"\uD83D\uDC79",title:"Ogre"},{emoji:"\uD83D\uDC7A",title:"Goblin"},{emoji:"\uD83D\uDC7B",title:"Ghost"},{emoji:"\uD83D\uDC7D",title:"Alien"},{emoji:"\uD83D\uDC7E",title:"Alien Monster"},{emoji:"\uD83E\uDD16",title:"Robot"},{emoji:"\uD83D\uDE3A",title:"Grinning Cat"},{emoji:"\uD83D\uDE38",title:"Grinning Cat with Smiling Eyes"},{emoji:"\uD83D\uDE39",title:"Cat with Tears of Joy"},{emoji:"\uD83D\uDE3B",title:"Smiling Cat with Heart-Eyes"},{emoji:"\uD83D\uDE3C",title:"Cat with Wry Smile"},{emoji:"\uD83D\uDE3D",title:"Kissing Cat"},{emoji:"\uD83D\uDE40",title:"Weary Cat"},{emoji:"\uD83D\uDE3F",title:"Crying Cat"},{emoji:"\uD83D\uDE3E",title:"Pouting Cat"},{emoji:"\uD83D\uDC8B",title:"Kiss Mark"},{emoji:"\uD83D\uDC4B",title:"Waving Hand"},{emoji:"\uD83E\uDD1A",title:"Raised Back of Hand"},{emoji:"\uD83D\uDD90️",title:"Hand with Fingers Splayed"},{emoji:"✋",title:"Raised Hand"},{emoji:"\uD83D\uDD96",title:"Vulcan Salute"},{emoji:"\uD83D\uDC4C",title:"OK Hand"},{emoji:"\uD83E\uDD0C",title:"Pinched Fingers"},{emoji:"\uD83E\uDD0F",title:"Pinching Hand"},{emoji:"✌️",title:"Victory Hand"},{emoji:"\uD83E\uDD1E",title:"Crossed Fingers"},{emoji:"\uD83E\uDD1F",title:"Love-You Gesture"},{emoji:"\uD83E\uDD18",title:"Sign of the Horns"},{emoji:"\uD83E\uDD19",title:"Call Me Hand"},{emoji:"\uD83D\uDC48",title:"Backhand Index Pointing Left"},{emoji:"\uD83D\uDC49",title:"Backhand Index Pointing Right"},{emoji:"\uD83D\uDC46",title:"Backhand Index Pointing Up"},{emoji:"\uD83D\uDD95",title:"Middle Finger"},{emoji:"\uD83D\uDC47",title:"Backhand Index Pointing Down"},{emoji:"☝️",title:"Index Pointing Up"},{emoji:"\uD83D\uDC4D",title:"Thumbs Up"},{emoji:"\uD83D\uDC4E",title:"Thumbs Down"},{emoji:"✊",title:"Raised Fist"},{emoji:"\uD83D\uDC4A",title:"Oncoming Fist"},{emoji:"\uD83E\uDD1B",title:"Left-Facing Fist"},{emoji:"\uD83E\uDD1C",title:"Right-Facing Fist"},{emoji:"\uD83D\uDC4F",title:"Clapping Hands"},{emoji:"\uD83D\uDE4C",title:"Raising Hands"},{emoji:"\uD83D\uDC50",title:"Open Hands"},{emoji:"\uD83E\uDD32",title:"Palms Up Together"},{emoji:"\uD83E\uDD1D",title:"Handshake"},{emoji:"\uD83D\uDE4F",title:"Folded Hands"},{emoji:"✍️",title:"Writing Hand"},{emoji:"\uD83D\uDC85",title:"Nail Polish"},{emoji:"\uD83E\uDD33",title:"Selfie"},{emoji:"\uD83D\uDCAA",title:"Flexed Biceps"},{emoji:"\uD83E\uDDBE",title:"Mechanical Arm"},{emoji:"\uD83E\uDDBF",title:"Mechanical Leg"},{emoji:"\uD83E\uDDB5",title:"Leg"},{emoji:"\uD83E\uDDB6",title:"Foot"},{emoji:"\uD83D\uDC42",title:"Ear"},{emoji:"\uD83E\uDDBB",title:"Ear with Hearing Aid"},{emoji:"\uD83D\uDC43",title:"Nose"},{emoji:"\uD83E\uDDE0",title:"Brain"},{emoji:"\uD83E\uDEC0",title:"Anatomical Heart"},{emoji:"\uD83E\uDEC1",title:"Lungs"},{emoji:"\uD83E\uDDB7",title:"Tooth"},{emoji:"\uD83E\uDDB4",title:"Bone"},{emoji:"\uD83D\uDC40",title:"Eyes"},{emoji:"\uD83D\uDC41️",title:"Eye"},{emoji:"\uD83D\uDC45",title:"Tongue"},{emoji:"\uD83D\uDC44",title:"Mouth"},{emoji:"\uD83D\uDC76",title:"Baby"},{emoji:"\uD83E\uDDD2",title:"Child"},{emoji:"\uD83D\uDC66",title:"Boy"},{emoji:"\uD83D\uDC67",title:"Girl"},{emoji:"\uD83E\uDDD1",title:"Person"},{emoji:"\uD83D\uDC71",title:"Person: Blond Hair"},{emoji:"\uD83D\uDC68",title:"Man"},{emoji:"\uD83E\uDDD4",title:"Person: Beard"},{emoji:"\uD83D\uDC68‍\uD83E\uDDB0",title:"Man: Red Hair"},{emoji:"\uD83D\uDC68‍\uD83E\uDDB1",title:"Man: Curly Hair"},{emoji:"\uD83D\uDC68‍\uD83E\uDDB3",title:"Man: White Hair"},{emoji:"\uD83D\uDC68‍\uD83E\uDDB2",title:"Man: Bald"},{emoji:"\uD83D\uDC69",title:"Woman"},{emoji:"\uD83D\uDC69‍\uD83E\uDDB0",title:"Woman: Red Hair"},{emoji:"\uD83E\uDDD1‍\uD83E\uDDB0",title:"Person: Red Hair"},{emoji:"\uD83D\uDC69‍\uD83E\uDDB1",title:"Woman: Curly Hair"},{emoji:"\uD83E\uDDD1‍\uD83E\uDDB1",title:"Person: Curly Hair"},{emoji:"\uD83D\uDC69‍\uD83E\uDDB3",title:"Woman: White Hair"},{emoji:"\uD83E\uDDD1‍\uD83E\uDDB3",title:"Person: White Hair"},{emoji:"\uD83D\uDC69‍\uD83E\uDDB2",title:"Woman: Bald"},{emoji:"\uD83E\uDDD1‍\uD83E\uDDB2",title:"Person: Bald"},{emoji:"\uD83D\uDC71‍♀️",title:"Woman: Blond Hair"},{emoji:"\uD83D\uDC71‍♂️",title:"Man: Blond Hair"},{emoji:"\uD83E\uDDD3",title:"Older Person"},{emoji:"\uD83D\uDC74",title:"Old Man"},{emoji:"\uD83D\uDC75",title:"Old Woman"},{emoji:"\uD83D\uDE4D",title:"Person Frowning"},{emoji:"\uD83D\uDE4D‍♂️",title:"Man Frowning"},{emoji:"\uD83D\uDE4D‍♀️",title:"Woman Frowning"},{emoji:"\uD83D\uDE4E",title:"Person Pouting"},{emoji:"\uD83D\uDE4E‍♂️",title:"Man Pouting"},{emoji:"\uD83D\uDE4E‍♀️",title:"Woman Pouting"},{emoji:"\uD83D\uDE45",title:"Person Gesturing No"},{emoji:"\uD83D\uDE45‍♂️",title:"Man Gesturing No"},{emoji:"\uD83D\uDE45‍♀️",title:"Woman Gesturing No"},{emoji:"\uD83D\uDE46",title:"Person Gesturing OK"},{emoji:"\uD83D\uDE46‍♂️",title:"Man Gesturing OK"},{emoji:"\uD83D\uDE46‍♀️",title:"Woman Gesturing OK"},{emoji:"\uD83D\uDC81",title:"Person Tipping Hand"},{emoji:"\uD83D\uDC81‍♂️",title:"Man Tipping Hand"},{emoji:"\uD83D\uDC81‍♀️",title:"Woman Tipping Hand"},{emoji:"\uD83D\uDE4B",title:"Person Raising Hand"},{emoji:"\uD83D\uDE4B‍♂️",title:"Man Raising Hand"},{emoji:"\uD83D\uDE4B‍♀️",title:"Woman Raising Hand"},{emoji:"\uD83E\uDDCF",title:"Deaf Person"},{emoji:"\uD83E\uDDCF‍♂️",title:"Deaf Man"},{emoji:"\uD83E\uDDCF‍♀️",title:"Deaf Woman"},{emoji:"\uD83D\uDE47",title:"Person Bowing"},{emoji:"\uD83D\uDE47‍♂️",title:"Man Bowing"},{emoji:"\uD83D\uDE47‍♀️",title:"Woman Bowing"},{emoji:"\uD83E\uDD26",title:"Person Facepalming"},{emoji:"\uD83E\uDD26‍♂️",title:"Man Facepalming"},{emoji:"\uD83E\uDD26‍♀️",title:"Woman Facepalming"},{emoji:"\uD83E\uDD37",title:"Person Shrugging"},{emoji:"\uD83E\uDD37‍♂️",title:"Man Shrugging"},{emoji:"\uD83E\uDD37‍♀️",title:"Woman Shrugging"},{emoji:"\uD83E\uDDD1‍⚕️",title:"Health Worker"},{emoji:"\uD83D\uDC68‍⚕️",title:"Man Health Worker"},{emoji:"\uD83D\uDC69‍⚕️",title:"Woman Health Worker"},{emoji:"\uD83E\uDDD1‍\uD83C\uDF93",title:"Student"},{emoji:"\uD83D\uDC68‍\uD83C\uDF93",title:"Man Student"},{emoji:"\uD83D\uDC69‍\uD83C\uDF93",title:"Woman Student"},{emoji:"\uD83E\uDDD1‍\uD83C\uDFEB",title:"Teacher"},{emoji:"\uD83D\uDC68‍\uD83C\uDFEB",title:"Man Teacher"},{emoji:"\uD83D\uDC69‍\uD83C\uDFEB",title:"Woman Teacher"},{emoji:"\uD83E\uDDD1‍⚖️",title:"Judge"},{emoji:"\uD83D\uDC68‍⚖️",title:"Man Judge"},{emoji:"\uD83D\uDC69‍⚖️",title:"Woman Judge"},{emoji:"\uD83E\uDDD1‍\uD83C\uDF3E",title:"Farmer"},{emoji:"\uD83D\uDC68‍\uD83C\uDF3E",title:"Man Farmer"},{emoji:"\uD83D\uDC69‍\uD83C\uDF3E",title:"Woman Farmer"},{emoji:"\uD83E\uDDD1‍\uD83C\uDF73",title:"Cook"},{emoji:"\uD83D\uDC68‍\uD83C\uDF73",title:"Man Cook"},{emoji:"\uD83D\uDC69‍\uD83C\uDF73",title:"Woman Cook"},{emoji:"\uD83E\uDDD1‍\uD83D\uDD27",title:"Mechanic"},{emoji:"\uD83D\uDC68‍\uD83D\uDD27",title:"Man Mechanic"},{emoji:"\uD83D\uDC69‍\uD83D\uDD27",title:"Woman Mechanic"},{emoji:"\uD83E\uDDD1‍\uD83C\uDFED",title:"Factory Worker"},{emoji:"\uD83D\uDC68‍\uD83C\uDFED",title:"Man Factory Worker"},{emoji:"\uD83D\uDC69‍\uD83C\uDFED",title:"Woman Factory Worker"},{emoji:"\uD83E\uDDD1‍\uD83D\uDCBC",title:"Office Worker"},{emoji:"\uD83D\uDC68‍\uD83D\uDCBC",title:"Man Office Worker"},{emoji:"\uD83D\uDC69‍\uD83D\uDCBC",title:"Woman Office Worker"},{emoji:"\uD83E\uDDD1‍\uD83D\uDD2C",title:"Scientist"},{emoji:"\uD83D\uDC68‍\uD83D\uDD2C",title:"Man Scientist"},{emoji:"\uD83D\uDC69‍\uD83D\uDD2C",title:"Woman Scientist"},{emoji:"\uD83E\uDDD1‍\uD83D\uDCBB",title:"Technologist"},{emoji:"\uD83D\uDC68‍\uD83D\uDCBB",title:"Man Technologist"},{emoji:"\uD83D\uDC69‍\uD83D\uDCBB",title:"Woman Technologist"},{emoji:"\uD83E\uDDD1‍\uD83C\uDFA4",title:"Singer"},{emoji:"\uD83D\uDC68‍\uD83C\uDFA4",title:"Man Singer"},{emoji:"\uD83D\uDC69‍\uD83C\uDFA4",title:"Woman Singer"},{emoji:"\uD83E\uDDD1‍\uD83C\uDFA8",title:"Artist"},{emoji:"\uD83D\uDC68‍\uD83C\uDFA8",title:"Man Artist"},{emoji:"\uD83D\uDC69‍\uD83C\uDFA8",title:"Woman Artist"},{emoji:"\uD83E\uDDD1‍✈️",title:"Pilot"},{emoji:"\uD83D\uDC68‍✈️",title:"Man Pilot"},{emoji:"\uD83D\uDC69‍✈️",title:"Woman Pilot"},{emoji:"\uD83E\uDDD1‍\uD83D\uDE80",title:"Astronaut"},{emoji:"\uD83D\uDC68‍\uD83D\uDE80",title:"Man Astronaut"},{emoji:"\uD83D\uDC69‍\uD83D\uDE80",title:"Woman Astronaut"},{emoji:"\uD83E\uDDD1‍\uD83D\uDE92",title:"Firefighter"},{emoji:"\uD83D\uDC68‍\uD83D\uDE92",title:"Man Firefighter"},{emoji:"\uD83D\uDC69‍\uD83D\uDE92",title:"Woman Firefighter"},{emoji:"\uD83D\uDC6E",title:"Police Officer"},{emoji:"\uD83D\uDC6E‍♂️",title:"Man Police Officer"},{emoji:"\uD83D\uDC6E‍♀️",title:"Woman Police Officer"},{emoji:"\uD83D\uDD75️",title:"Detective"},{emoji:"\uD83D\uDD75️‍♂️",title:"Man Detective"},{emoji:"\uD83D\uDD75️‍♀️",title:"Woman Detective"},{emoji:"\uD83D\uDC82",title:"Guard"},{emoji:"\uD83D\uDC82‍♂️",title:"Man Guard"},{emoji:"\uD83D\uDC82‍♀️",title:"Woman Guard"},{emoji:"\uD83E\uDD77",title:"Ninja"},{emoji:"\uD83D\uDC77",title:"Construction Worker"},{emoji:"\uD83D\uDC77‍♂️",title:"Man Construction Worker"},{emoji:"\uD83D\uDC77‍♀️",title:"Woman Construction Worker"},{emoji:"\uD83E\uDD34",title:"Prince"},{emoji:"\uD83D\uDC78",title:"Princess"},{emoji:"\uD83D\uDC73",title:"Person Wearing Turban"},{emoji:"\uD83D\uDC73‍♂️",title:"Man Wearing Turban"},{emoji:"\uD83D\uDC73‍♀️",title:"Woman Wearing Turban"},{emoji:"\uD83D\uDC72",title:"Person with Skullcap"},{emoji:"\uD83E\uDDD5",title:"Woman with Headscarf"},{emoji:"\uD83E\uDD35",title:"Person in Tuxedo"},{emoji:"\uD83E\uDD35‍♂️",title:"Man in Tuxedo"},{emoji:"\uD83E\uDD35‍♀️",title:"Woman in Tuxedo"},{emoji:"\uD83D\uDC70",title:"Person with Veil"},{emoji:"\uD83D\uDC70‍♂️",title:"Man with Veil"},{emoji:"\uD83D\uDC70‍♀️",title:"Woman with Veil"},{emoji:"\uD83E\uDD30",title:"Pregnant Woman"},{emoji:"\uD83E\uDD31",title:"Breast-Feeding"},{emoji:"\uD83D\uDC69‍\uD83C\uDF7C",title:"Woman Feeding Baby"},{emoji:"\uD83D\uDC68‍\uD83C\uDF7C",title:"Man Feeding Baby"},{emoji:"\uD83E\uDDD1‍\uD83C\uDF7C",title:"Person Feeding Baby"},{emoji:"\uD83D\uDC7C",title:"Baby Angel"},{emoji:"\uD83C\uDF85",title:"Santa Claus"},{emoji:"\uD83E\uDD36",title:"Mrs. Claus"},{emoji:"\uD83E\uDDD1‍\uD83C\uDF84",title:"Mx Claus"},{emoji:"\uD83E\uDDB8",title:"Superhero"},{emoji:"\uD83E\uDDB8‍♂️",title:"Man Superhero"},{emoji:"\uD83E\uDDB8‍♀️",title:"Woman Superhero"},{emoji:"\uD83E\uDDB9",title:"Supervillain"},{emoji:"\uD83E\uDDB9‍♂️",title:"Man Supervillain"},{emoji:"\uD83E\uDDB9‍♀️",title:"Woman Supervillain"},{emoji:"\uD83E\uDDD9",title:"Mage"},{emoji:"\uD83E\uDDD9‍♂️",title:"Man Mage"},{emoji:"\uD83E\uDDD9‍♀️",title:"Woman Mage"},{emoji:"\uD83E\uDDDA",title:"Fairy"},{emoji:"\uD83E\uDDDA‍♂️",title:"Man Fairy"},{emoji:"\uD83E\uDDDA‍♀️",title:"Woman Fairy"},{emoji:"\uD83E\uDDDB",title:"Vampire"},{emoji:"\uD83E\uDDDB‍♂️",title:"Man Vampire"},{emoji:"\uD83E\uDDDB‍♀️",title:"Woman Vampire"},{emoji:"\uD83E\uDDDC",title:"Merperson"},{emoji:"\uD83E\uDDDC‍♂️",title:"Merman"},{emoji:"\uD83E\uDDDC‍♀️",title:"Mermaid"},{emoji:"\uD83E\uDDDD",title:"Elf"},{emoji:"\uD83E\uDDDD‍♂️",title:"Man Elf"},{emoji:"\uD83E\uDDDD‍♀️",title:"Woman Elf"},{emoji:"\uD83E\uDDDE",title:"Genie"},{emoji:"\uD83E\uDDDE‍♂️",title:"Man Genie"},{emoji:"\uD83E\uDDDE‍♀️",title:"Woman Genie"},{emoji:"\uD83E\uDDDF",title:"Zombie"},{emoji:"\uD83E\uDDDF‍♂️",title:"Man Zombie"},{emoji:"\uD83E\uDDDF‍♀️",title:"Woman Zombie"},{emoji:"\uD83D\uDC86",title:"Person Getting Massage"},{emoji:"\uD83D\uDC86‍♂️",title:"Man Getting Massage"},{emoji:"\uD83D\uDC86‍♀️",title:"Woman Getting Massage"},{emoji:"\uD83D\uDC87",title:"Person Getting Haircut"},{emoji:"\uD83D\uDC87‍♂️",title:"Man Getting Haircut"},{emoji:"\uD83D\uDC87‍♀️",title:"Woman Getting Haircut"},{emoji:"\uD83D\uDEB6",title:"Person Walking"},{emoji:"\uD83D\uDEB6‍♂️",title:"Man Walking"},{emoji:"\uD83D\uDEB6‍♀️",title:"Woman Walking"},{emoji:"\uD83E\uDDCD",title:"Person Standing"},{emoji:"\uD83E\uDDCD‍♂️",title:"Man Standing"},{emoji:"\uD83E\uDDCD‍♀️",title:"Woman Standing"},{emoji:"\uD83E\uDDCE",title:"Person Kneeling"},{emoji:"\uD83E\uDDCE‍♂️",title:"Man Kneeling"},{emoji:"\uD83E\uDDCE‍♀️",title:"Woman Kneeling"},{emoji:"\uD83E\uDDD1‍\uD83E\uDDAF",title:"Person with White Cane"},{emoji:"\uD83D\uDC68‍\uD83E\uDDAF",title:"Man with White Cane"},{emoji:"\uD83D\uDC69‍\uD83E\uDDAF",title:"Woman with White Cane"},{emoji:"\uD83E\uDDD1‍\uD83E\uDDBC",title:"Person in Motorized Wheelchair"},{emoji:"\uD83D\uDC68‍\uD83E\uDDBC",title:"Man in Motorized Wheelchair"},{emoji:"\uD83D\uDC69‍\uD83E\uDDBC",title:"Woman in Motorized Wheelchair"},{emoji:"\uD83E\uDDD1‍\uD83E\uDDBD",title:"Person in Manual Wheelchair"},{emoji:"\uD83D\uDC68‍\uD83E\uDDBD",title:"Man in Manual Wheelchair"},{emoji:"\uD83D\uDC69‍\uD83E\uDDBD",title:"Woman in Manual Wheelchair"},{emoji:"\uD83C\uDFC3",title:"Person Running"},{emoji:"\uD83C\uDFC3‍♂️",title:"Man Running"},{emoji:"\uD83C\uDFC3‍♀️",title:"Woman Running"},{emoji:"\uD83D\uDC83",title:"Woman Dancing"},{emoji:"\uD83D\uDD7A",title:"Man Dancing"},{emoji:"\uD83D\uDD74️",title:"Person in Suit Levitating"},{emoji:"\uD83D\uDC6F",title:"People with Bunny Ears"},{emoji:"\uD83D\uDC6F‍♂️",title:"Men with Bunny Ears"},{emoji:"\uD83D\uDC6F‍♀️",title:"Women with Bunny Ears"},{emoji:"\uD83E\uDDD6",title:"Person in Steamy Room"},{emoji:"\uD83E\uDDD6‍♂️",title:"Man in Steamy Room"},{emoji:"\uD83E\uDDD6‍♀️",title:"Woman in Steamy Room"},{emoji:"\uD83E\uDDD8",title:"Person in Lotus Position"},{emoji:"\uD83E\uDDD1‍\uD83E\uDD1D‍\uD83E\uDDD1",title:"People Holding Hands"},{emoji:"\uD83D\uDC6D",title:"Women Holding Hands"},{emoji:"\uD83D\uDC6B",title:"Woman and Man Holding Hands"},{emoji:"\uD83D\uDC6C",title:"Men Holding Hands"},{emoji:"\uD83D\uDC8F",title:"Kiss"},{emoji:"\uD83D\uDC69‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68",title:"Kiss: Woman, Man"},{emoji:"\uD83D\uDC68‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68",title:"Kiss: Man, Man"},{emoji:"\uD83D\uDC69‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69",title:"Kiss: Woman, Woman"},{emoji:"\uD83D\uDC91",title:"Couple with Heart"},{emoji:"\uD83D\uDC69‍❤️‍\uD83D\uDC68",title:"Couple with Heart: Woman, Man"},{emoji:"\uD83D\uDC68‍❤️‍\uD83D\uDC68",title:"Couple with Heart: Man, Man"},{emoji:"\uD83D\uDC69‍❤️‍\uD83D\uDC69",title:"Couple with Heart: Woman, Woman"},{emoji:"\uD83D\uDC6A",title:"Family"},{emoji:"\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC66",title:"Family: Man, Woman, Boy"},{emoji:"\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67",title:"Family: Man, Woman, Girl"},{emoji:"\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC66",title:"Family: Man, Woman, Girl, Boy"},{emoji:"\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC66‍\uD83D\uDC66",title:"Family: Man, Woman, Boy, Boy"},{emoji:"\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC67",title:"Family: Man, Woman, Girl, Girl"},{emoji:"\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC66",title:"Family: Man, Man, Boy"},{emoji:"\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC67",title:"Family: Man, Man, Girl"},{emoji:"\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC67‍\uD83D\uDC66",title:"Family: Man, Man, Girl, Boy"},{emoji:"\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC66‍\uD83D\uDC66",title:"Family: Man, Man, Boy, Boy"},{emoji:"\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC67‍\uD83D\uDC67",title:"Family: Man, Man, Girl, Girl"},{emoji:"\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC66",title:"Family: Woman, Woman, Boy"},{emoji:"\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC67",title:"Family: Woman, Woman, Girl"},{emoji:"\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC66",title:"Family: Woman, Woman, Girl, Boy"},{emoji:"\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC66‍\uD83D\uDC66",title:"Family: Woman, Woman, Boy, Boy"},{emoji:"\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC67",title:"Family: Woman, Woman, Girl, Girl"},{emoji:"\uD83D\uDC68‍\uD83D\uDC66",title:"Family: Man, Boy"},{emoji:"\uD83D\uDC68‍\uD83D\uDC66‍\uD83D\uDC66",title:"Family: Man, Boy, Boy"},{emoji:"\uD83D\uDC68‍\uD83D\uDC67",title:"Family: Man, Girl"},{emoji:"\uD83D\uDC68‍\uD83D\uDC67‍\uD83D\uDC66",title:"Family: Man, Girl, Boy"},{emoji:"\uD83D\uDC68‍\uD83D\uDC67‍\uD83D\uDC67",title:"Family: Man, Girl, Girl"},{emoji:"\uD83D\uDC69‍\uD83D\uDC66",title:"Family: Woman, Boy"},{emoji:"\uD83D\uDC69‍\uD83D\uDC66‍\uD83D\uDC66",title:"Family: Woman, Boy, Boy"},{emoji:"\uD83D\uDC69‍\uD83D\uDC67",title:"Family: Woman, Girl"},{emoji:"\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC66",title:"Family: Woman, Girl, Boy"},{emoji:"\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC67",title:"Family: Woman, Girl, Girl"},{emoji:"\uD83D\uDDE3️",title:"Speaking Head"},{emoji:"\uD83D\uDC64",title:"Bust in Silhouette"},{emoji:"\uD83D\uDC65",title:"Busts in Silhouette"},{emoji:"\uD83E\uDEC2",title:"People Hugging"},{emoji:"\uD83D\uDC63",title:"Footprints"},{emoji:"\uD83E\uDDF3",title:"Luggage"},{emoji:"\uD83C\uDF02",title:"Closed Umbrella"},{emoji:"☂️",title:"Umbrella"},{emoji:"\uD83C\uDF83",title:"Jack-O-Lantern"},{emoji:"\uD83E\uDDF5",title:"Thread"},{emoji:"\uD83E\uDDF6",title:"Yarn"},{emoji:"\uD83D\uDC53",title:"Glasses"},{emoji:"\uD83D\uDD76️",title:"Sunglasses"},{emoji:"\uD83E\uDD7D",title:"Goggles"},{emoji:"\uD83E\uDD7C",title:"Lab Coat"},{emoji:"\uD83E\uDDBA",title:"Safety Vest"},{emoji:"\uD83D\uDC54",title:"Necktie"},{emoji:"\uD83D\uDC55",title:"T-Shirt"},{emoji:"\uD83D\uDC56",title:"Jeans"},{emoji:"\uD83E\uDDE3",title:"Scarf"},{emoji:"\uD83E\uDDE4",title:"Gloves"},{emoji:"\uD83E\uDDE5",title:"Coat"},{emoji:"\uD83E\uDDE6",title:"Socks"},{emoji:"\uD83D\uDC57",title:"Dress"},{emoji:"\uD83D\uDC58",title:"Kimono"},{emoji:"\uD83E\uDD7B",title:"Sari"},{emoji:"\uD83E\uDE71",title:"One-Piece Swimsuit"},{emoji:"\uD83E\uDE72",title:"Briefs"},{emoji:"\uD83E\uDE73",title:"Shorts"},{emoji:"\uD83D\uDC59",title:"Bikini"},{emoji:"\uD83D\uDC5A",title:"Woman’s Clothes"},{emoji:"\uD83D\uDC5B",title:"Purse"},{emoji:"\uD83D\uDC5C",title:"Handbag"},{emoji:"\uD83D\uDC5D",title:"Clutch Bag"},{emoji:"\uD83C\uDF92",title:"Backpack"},{emoji:"\uD83E\uDE74",title:"Thong Sandal"},{emoji:"\uD83D\uDC5E",title:"Man’s Shoe"},{emoji:"\uD83D\uDC5F",title:"Running Shoe"},{emoji:"\uD83E\uDD7E",title:"Hiking Boot"},{emoji:"\uD83E\uDD7F",title:"Flat Shoe"},{emoji:"\uD83D\uDC60",title:"High-Heeled Shoe"},{emoji:"\uD83D\uDC61",title:"Woman’s Sandal"},{emoji:"\uD83E\uDE70",title:"Ballet Shoes"},{emoji:"\uD83D\uDC62",title:"Woman’s Boot"},{emoji:"\uD83D\uDC51",title:"Crown"},{emoji:"\uD83D\uDC52",title:"Woman’s Hat"},{emoji:"\uD83C\uDFA9",title:"Top Hat"},{emoji:"\uD83C\uDF93",title:"Graduation Cap"},{emoji:"\uD83E\uDDE2",title:"Billed Cap"},{emoji:"\uD83E\uDE96",title:"Military Helmet"},{emoji:"⛑️",title:"Rescue Worker’s Helmet"},{emoji:"\uD83D\uDC84",title:"Lipstick"},{emoji:"\uD83D\uDC8D",title:"Ring"},{emoji:"\uD83D\uDCBC",title:"Briefcase"},{emoji:"\uD83E\uDE78",title:"Drop of Blood"}],Nature:[{emoji:"\uD83D\uDE48",title:"See-No-Evil Monkey"},{emoji:"\uD83D\uDE49",title:"Hear-No-Evil Monkey"},{emoji:"\uD83D\uDE4A",title:"Speak-No-Evil Monkey"},{emoji:"\uD83D\uDCA5",title:"Collision"},{emoji:"\uD83D\uDCAB",title:"Dizzy"},{emoji:"\uD83D\uDCA6",title:"Sweat Droplets"},{emoji:"\uD83D\uDCA8",title:"Dashing Away"},{emoji:"\uD83D\uDC35",title:"Monkey Face"},{emoji:"\uD83D\uDC12",title:"Monkey"},{emoji:"\uD83E\uDD8D",title:"Gorilla"},{emoji:"\uD83E\uDDA7",title:"Orangutan"},{emoji:"\uD83D\uDC36",title:"Dog Face"},{emoji:"\uD83D\uDC15",title:"Dog"},{emoji:"\uD83E\uDDAE",title:"Guide Dog"},{emoji:"\uD83D\uDC15‍\uD83E\uDDBA",title:"Service Dog"},{emoji:"\uD83D\uDC29",title:"Poodle"},{emoji:"\uD83D\uDC3A",title:"Wolf"},{emoji:"\uD83E\uDD8A",title:"Fox"},{emoji:"\uD83E\uDD9D",title:"Raccoon"},{emoji:"\uD83D\uDC31",title:"Cat Face"},{emoji:"\uD83D\uDC08",title:"Cat"},{emoji:"\uD83D\uDC08‍⬛",title:"Black Cat"},{emoji:"\uD83E\uDD81",title:"Lion"},{emoji:"\uD83D\uDC2F",title:"Tiger Face"},{emoji:"\uD83D\uDC05",title:"Tiger"},{emoji:"\uD83D\uDC06",title:"Leopard"},{emoji:"\uD83D\uDC34",title:"Horse Face"},{emoji:"\uD83D\uDC0E",title:"Horse"},{emoji:"\uD83E\uDD84",title:"Unicorn"},{emoji:"\uD83E\uDD93",title:"Zebra"},{emoji:"\uD83E\uDD8C",title:"Deer"},{emoji:"\uD83E\uDDAC",title:"Bison"},{emoji:"\uD83D\uDC2E",title:"Cow Face"},{emoji:"\uD83D\uDC02",title:"Ox"},{emoji:"\uD83D\uDC03",title:"Water Buffalo"},{emoji:"\uD83D\uDC04",title:"Cow"},{emoji:"\uD83D\uDC37",title:"Pig Face"},{emoji:"\uD83D\uDC16",title:"Pig"},{emoji:"\uD83D\uDC17",title:"Boar"},{emoji:"\uD83D\uDC3D",title:"Pig Nose"},{emoji:"\uD83D\uDC0F",title:"Ram"},{emoji:"\uD83D\uDC11",title:"Ewe"},{emoji:"\uD83D\uDC10",title:"Goat"},{emoji:"\uD83D\uDC2A",title:"Camel"},{emoji:"\uD83D\uDC2B",title:"Two-Hump Camel"},{emoji:"\uD83E\uDD99",title:"Llama"},{emoji:"\uD83E\uDD92",title:"Giraffe"},{emoji:"\uD83D\uDC18",title:"Elephant"},{emoji:"\uD83E\uDDA3",title:"Mammoth"},{emoji:"\uD83E\uDD8F",title:"Rhinoceros"},{emoji:"\uD83E\uDD9B",title:"Hippopotamus"},{emoji:"\uD83D\uDC2D",title:"Mouse Face"},{emoji:"\uD83D\uDC01",title:"Mouse"},{emoji:"\uD83D\uDC00",title:"Rat"},{emoji:"\uD83D\uDC39",title:"Hamster"},{emoji:"\uD83D\uDC30",title:"Rabbit Face"},{emoji:"\uD83D\uDC07",title:"Rabbit"},{emoji:"\uD83D\uDC3F️",title:"Chipmunk"},{emoji:"\uD83E\uDDAB",title:"Beaver"},{emoji:"\uD83E\uDD94",title:"Hedgehog"},{emoji:"\uD83E\uDD87",title:"Bat"},{emoji:"\uD83D\uDC3B",title:"Bear"},{emoji:"\uD83D\uDC3B‍❄️",title:"Polar Bear"},{emoji:"\uD83D\uDC28",title:"Koala"},{emoji:"\uD83D\uDC3C",title:"Panda"},{emoji:"\uD83E\uDDA5",title:"Sloth"},{emoji:"\uD83E\uDDA6",title:"Otter"},{emoji:"\uD83E\uDDA8",title:"Skunk"},{emoji:"\uD83E\uDD98",title:"Kangaroo"},{emoji:"\uD83E\uDDA1",title:"Badger"},{emoji:"\uD83D\uDC3E",title:"Paw Prints"},{emoji:"\uD83E\uDD83",title:"Turkey"},{emoji:"\uD83D\uDC14",title:"Chicken"},{emoji:"\uD83D\uDC13",title:"Rooster"},{emoji:"\uD83D\uDC23",title:"Hatching Chick"},{emoji:"\uD83D\uDC24",title:"Baby Chick"},{emoji:"\uD83D\uDC25",title:"Front-Facing Baby Chick"},{emoji:"\uD83D\uDC26",title:"Bird"},{emoji:"\uD83D\uDC27",title:"Penguin"},{emoji:"\uD83D\uDD4A️",title:"Dove"},{emoji:"\uD83E\uDD85",title:"Eagle"},{emoji:"\uD83E\uDD86",title:"Duck"},{emoji:"\uD83E\uDDA2",title:"Swan"},{emoji:"\uD83E\uDD89",title:"Owl"},{emoji:"\uD83E\uDDA4",title:"Dodo"},{emoji:"\uD83E\uDEB6",title:"Feather"},{emoji:"\uD83E\uDDA9",title:"Flamingo"},{emoji:"\uD83E\uDD9A",title:"Peacock"},{emoji:"\uD83E\uDD9C",title:"Parrot"},{emoji:"\uD83D\uDC38",title:"Frog"},{emoji:"\uD83D\uDC0A",title:"Crocodile"},{emoji:"\uD83D\uDC22",title:"Turtle"},{emoji:"\uD83E\uDD8E",title:"Lizard"},{emoji:"\uD83D\uDC0D",title:"Snake"},{emoji:"\uD83D\uDC32",title:"Dragon Face"},{emoji:"\uD83D\uDC09",title:"Dragon"},{emoji:"\uD83E\uDD95",title:"Sauropod"},{emoji:"\uD83E\uDD96",title:"T-Rex"},{emoji:"\uD83D\uDC33",title:"Spouting Whale"},{emoji:"\uD83D\uDC0B",title:"Whale"},{emoji:"\uD83D\uDC2C",title:"Dolphin"},{emoji:"\uD83E\uDDAD",title:"Seal"},{emoji:"\uD83D\uDC1F",title:"Fish"},{emoji:"\uD83D\uDC20",title:"Tropical Fish"},{emoji:"\uD83D\uDC21",title:"Blowfish"},{emoji:"\uD83E\uDD88",title:"Shark"},{emoji:"\uD83D\uDC19",title:"Octopus"},{emoji:"\uD83D\uDC1A",title:"Spiral Shell"},{emoji:"\uD83D\uDC0C",title:"Snail"},{emoji:"\uD83E\uDD8B",title:"Butterfly"},{emoji:"\uD83D\uDC1B",title:"Bug"},{emoji:"\uD83D\uDC1C",title:"Ant"},{emoji:"\uD83D\uDC1D",title:"Honeybee"},{emoji:"\uD83E\uDEB2",title:"Beetle"},{emoji:"\uD83D\uDC1E",title:"Lady Beetle"},{emoji:"\uD83E\uDD97",title:"Cricket"},{emoji:"\uD83E\uDEB3",title:"Cockroach"},{emoji:"\uD83D\uDD77️",title:"Spider"},{emoji:"\uD83D\uDD78️",title:"Spider Web"},{emoji:"\uD83E\uDD82",title:"Scorpion"},{emoji:"\uD83E\uDD9F",title:"Mosquito"},{emoji:"\uD83E\uDEB0",title:"Fly"},{emoji:"\uD83E\uDEB1",title:"Worm"},{emoji:"\uD83E\uDDA0",title:"Microbe"},{emoji:"\uD83D\uDC90",title:"Bouquet"},{emoji:"\uD83C\uDF38",title:"Cherry Blossom"},{emoji:"\uD83D\uDCAE",title:"White Flower"},{emoji:"\uD83C\uDFF5️",title:"Rosette"},{emoji:"\uD83C\uDF39",title:"Rose"},{emoji:"\uD83E\uDD40",title:"Wilted Flower"},{emoji:"\uD83C\uDF3A",title:"Hibiscus"},{emoji:"\uD83C\uDF3B",title:"Sunflower"},{emoji:"\uD83C\uDF3C",title:"Blossom"},{emoji:"\uD83C\uDF37",title:"Tulip"},{emoji:"\uD83C\uDF31",title:"Seedling"},{emoji:"\uD83E\uDEB4",title:"Potted Plant"},{emoji:"\uD83C\uDF32",title:"Evergreen Tree"},{emoji:"\uD83C\uDF33",title:"Deciduous Tree"},{emoji:"\uD83C\uDF34",title:"Palm Tree"},{emoji:"\uD83C\uDF35",title:"Cactus"},{emoji:"\uD83C\uDF3E",title:"Sheaf of Rice"},{emoji:"\uD83C\uDF3F",title:"Herb"},{emoji:"☘️",title:"Shamrock"},{emoji:"\uD83C\uDF40",title:"Four Leaf Clover"},{emoji:"\uD83C\uDF41",title:"Maple Leaf"},{emoji:"\uD83C\uDF42",title:"Fallen Leaf"},{emoji:"\uD83C\uDF43",title:"Leaf Fluttering in Wind"},{emoji:"\uD83C\uDF44",title:"Mushroom"},{emoji:"\uD83C\uDF30",title:"Chestnut"},{emoji:"\uD83E\uDD80",title:"Crab"},{emoji:"\uD83E\uDD9E",title:"Lobster"},{emoji:"\uD83E\uDD90",title:"Shrimp"},{emoji:"\uD83E\uDD91",title:"Squid"},{emoji:"\uD83C\uDF0D",title:"Globe Showing Europe-Africa"},{emoji:"\uD83C\uDF0E",title:"Globe Showing Americas"},{emoji:"\uD83C\uDF0F",title:"Globe Showing Asia-Australia"},{emoji:"\uD83C\uDF10",title:"Globe with Meridians"},{emoji:"\uD83E\uDEA8",title:"Rock"},{emoji:"\uD83C\uDF11",title:"New Moon"},{emoji:"\uD83C\uDF12",title:"Waxing Crescent Moon"},{emoji:"\uD83C\uDF13",title:"First Quarter Moon"},{emoji:"\uD83C\uDF14",title:"Waxing Gibbous Moon"},{emoji:"\uD83C\uDF15",title:"Full Moon"},{emoji:"\uD83C\uDF16",title:"Waning Gibbous Moon"},{emoji:"\uD83C\uDF17",title:"Last Quarter Moon"},{emoji:"\uD83C\uDF18",title:"Waning Crescent Moon"},{emoji:"\uD83C\uDF19",title:"Crescent Moon"},{emoji:"\uD83C\uDF1A",title:"New Moon Face"},{emoji:"\uD83C\uDF1B",title:"First Quarter Moon Face"},{emoji:"\uD83C\uDF1C",title:"Last Quarter Moon Face"},{emoji:"☀️",title:"Sun"},{emoji:"\uD83C\uDF1D",title:"Full Moon Face"},{emoji:"\uD83C\uDF1E",title:"Sun with Face"},{emoji:"⭐",title:"Star"},{emoji:"\uD83C\uDF1F",title:"Glowing Star"},{emoji:"\uD83C\uDF20",title:"Shooting Star"},{emoji:"☁️",title:"Cloud"},{emoji:"⛅",title:"Sun Behind Cloud"},{emoji:"⛈️",title:"Cloud with Lightning and Rain"},{emoji:"\uD83C\uDF24️",title:"Sun Behind Small Cloud"},{emoji:"\uD83C\uDF25️",title:"Sun Behind Large Cloud"},{emoji:"\uD83C\uDF26️",title:"Sun Behind Rain Cloud"},{emoji:"\uD83C\uDF27️",title:"Cloud with Rain"},{emoji:"\uD83C\uDF28️",title:"Cloud with Snow"},{emoji:"\uD83C\uDF29️",title:"Cloud with Lightning"},{emoji:"\uD83C\uDF2A️",title:"Tornado"},{emoji:"\uD83C\uDF2B️",title:"Fog"},{emoji:"\uD83C\uDF2C️",title:"Wind Face"},{emoji:"\uD83C\uDF08",title:"Rainbow"},{emoji:"☂️",title:"Umbrella"},{emoji:"☔",title:"Umbrella with Rain Drops"},{emoji:"⚡",title:"High Voltage"},{emoji:"❄️",title:"Snowflake"},{emoji:"☃️",title:"Snowman"},{emoji:"⛄",title:"Snowman Without Snow"},{emoji:"☄️",title:"Comet"},{emoji:"\uD83D\uDD25",title:"Fire"},{emoji:"\uD83D\uDCA7",title:"Droplet"},{emoji:"\uD83C\uDF0A",title:"Water Wave"},{emoji:"\uD83C\uDF84",title:"Christmas Tree"},{emoji:"✨",title:"Sparkles"},{emoji:"\uD83C\uDF8B",title:"Tanabata Tree"},{emoji:"\uD83C\uDF8D",title:"Pine Decoration"}],"Food-dring":[{emoji:"\uD83C\uDF47",title:"Grapes"},{emoji:"\uD83C\uDF48",title:"Melon"},{emoji:"\uD83C\uDF49",title:"Watermelon"},{emoji:"\uD83C\uDF4A",title:"Tangerine"},{emoji:"\uD83C\uDF4B",title:"Lemon"},{emoji:"\uD83C\uDF4C",title:"Banana"},{emoji:"\uD83C\uDF4D",title:"Pineapple"},{emoji:"\uD83E\uDD6D",title:"Mango"},{emoji:"\uD83C\uDF4E",title:"Red Apple"},{emoji:"\uD83C\uDF4F",title:"Green Apple"},{emoji:"\uD83C\uDF50",title:"Pear"},{emoji:"\uD83C\uDF51",title:"Peach"},{emoji:"\uD83C\uDF52",title:"Cherries"},{emoji:"\uD83C\uDF53",title:"Strawberry"},{emoji:"\uD83E\uDED0",title:"Blueberries"},{emoji:"\uD83E\uDD5D",title:"Kiwi Fruit"},{emoji:"\uD83C\uDF45",title:"Tomato"},{emoji:"\uD83E\uDED2",title:"Olive"},{emoji:"\uD83E\uDD65",title:"Coconut"},{emoji:"\uD83E\uDD51",title:"Avocado"},{emoji:"\uD83C\uDF46",title:"Eggplant"},{emoji:"\uD83E\uDD54",title:"Potato"},{emoji:"\uD83E\uDD55",title:"Carrot"},{emoji:"\uD83C\uDF3D",title:"Ear of Corn"},{emoji:"\uD83C\uDF36️",title:"Hot Pepper"},{emoji:"\uD83E\uDED1",title:"Bell Pepper"},{emoji:"\uD83E\uDD52",title:"Cucumber"},{emoji:"\uD83E\uDD6C",title:"Leafy Green"},{emoji:"\uD83E\uDD66",title:"Broccoli"},{emoji:"\uD83E\uDDC4",title:"Garlic"},{emoji:"\uD83E\uDDC5",title:"Onion"},{emoji:"\uD83C\uDF44",title:"Mushroom"},{emoji:"\uD83E\uDD5C",title:"Peanuts"},{emoji:"\uD83C\uDF30",title:"Chestnut"},{emoji:"\uD83C\uDF5E",title:"Bread"},{emoji:"\uD83E\uDD50",title:"Croissant"},{emoji:"\uD83E\uDD56",title:"Baguette Bread"},{emoji:"\uD83E\uDED3",title:"Flatbread"},{emoji:"\uD83E\uDD68",title:"Pretzel"},{emoji:"\uD83E\uDD6F",title:"Bagel"},{emoji:"\uD83E\uDD5E",title:"Pancakes"},{emoji:"\uD83E\uDDC7",title:"Waffle"},{emoji:"\uD83E\uDDC0",title:"Cheese Wedge"},{emoji:"\uD83C\uDF56",title:"Meat on Bone"},{emoji:"\uD83C\uDF57",title:"Poultry Leg"},{emoji:"\uD83E\uDD69",title:"Cut of Meat"},{emoji:"\uD83E\uDD53",title:"Bacon"},{emoji:"\uD83C\uDF54",title:"Hamburger"},{emoji:"\uD83C\uDF5F",title:"French Fries"},{emoji:"\uD83C\uDF55",title:"Pizza"},{emoji:"\uD83C\uDF2D",title:"Hot Dog"},{emoji:"\uD83E\uDD6A",title:"Sandwich"},{emoji:"\uD83C\uDF2E",title:"Taco"},{emoji:"\uD83C\uDF2F",title:"Burrito"},{emoji:"\uD83E\uDED4",title:"Tamale"},{emoji:"\uD83E\uDD59",title:"Stuffed Flatbread"},{emoji:"\uD83E\uDDC6",title:"Falafel"},{emoji:"\uD83E\uDD5A",title:"Egg"},{emoji:"\uD83C\uDF73",title:"Cooking"},{emoji:"\uD83E\uDD58",title:"Shallow Pan of Food"},{emoji:"\uD83C\uDF72",title:"Pot of Food"},{emoji:"\uD83E\uDED5",title:"Fondue"},{emoji:"\uD83E\uDD63",title:"Bowl with Spoon"},{emoji:"\uD83E\uDD57",title:"Green Salad"},{emoji:"\uD83C\uDF7F",title:"Popcorn"},{emoji:"\uD83E\uDDC8",title:"Butter"},{emoji:"\uD83E\uDDC2",title:"Salt"},{emoji:"\uD83E\uDD6B",title:"Canned Food"},{emoji:"\uD83C\uDF71",title:"Bento Box"},{emoji:"\uD83C\uDF58",title:"Rice Cracker"},{emoji:"\uD83C\uDF59",title:"Rice Ball"},{emoji:"\uD83C\uDF5A",title:"Cooked Rice"},{emoji:"\uD83C\uDF5B",title:"Curry Rice"},{emoji:"\uD83C\uDF5C",title:"Steaming Bowl"},{emoji:"\uD83C\uDF5D",title:"Spaghetti"},{emoji:"\uD83C\uDF60",title:"Roasted Sweet Potato"},{emoji:"\uD83C\uDF62",title:"Oden"},{emoji:"\uD83C\uDF63",title:"Sushi"},{emoji:"\uD83C\uDF64",title:"Fried Shrimp"},{emoji:"\uD83C\uDF65",title:"Fish Cake with Swirl"},{emoji:"\uD83E\uDD6E",title:"Moon Cake"},{emoji:"\uD83C\uDF61",title:"Dango"},{emoji:"\uD83E\uDD5F",title:"Dumpling"},{emoji:"\uD83E\uDD60",title:"Fortune Cookie"},{emoji:"\uD83E\uDD61",title:"Takeout Box"},{emoji:"\uD83E\uDDAA",title:"Oyster"},{emoji:"\uD83C\uDF66",title:"Soft Ice Cream"},{emoji:"\uD83C\uDF67",title:"Shaved Ice"},{emoji:"\uD83C\uDF68",title:"Ice Cream"},{emoji:"\uD83C\uDF69",title:"Doughnut"},{emoji:"\uD83C\uDF6A",title:"Cookie"},{emoji:"\uD83C\uDF82",title:"Birthday Cake"},{emoji:"\uD83C\uDF70",title:"Shortcake"},{emoji:"\uD83E\uDDC1",title:"Cupcake"},{emoji:"\uD83E\uDD67",title:"Pie"},{emoji:"\uD83C\uDF6B",title:"Chocolate Bar"},{emoji:"\uD83C\uDF6C",title:"Candy"},{emoji:"\uD83C\uDF6D",title:"Lollipop"},{emoji:"\uD83C\uDF6E",title:"Custard"},{emoji:"\uD83C\uDF6F",title:"Honey Pot"},{emoji:"\uD83C\uDF7C",title:"Baby Bottle"},{emoji:"\uD83E\uDD5B",title:"Glass of Milk"},{emoji:"☕",title:"Hot Beverage"},{emoji:"\uD83E\uDED6",title:"Teapot"},{emoji:"\uD83C\uDF75",title:"Teacup Without Handle"},{emoji:"\uD83C\uDF76",title:"Sake"},{emoji:"\uD83C\uDF7E",title:"Bottle with Popping Cork"},{emoji:"\uD83C\uDF77",title:"Wine Glass"},{emoji:"\uD83C\uDF78",title:"Cocktail Glass"},{emoji:"\uD83C\uDF79",title:"Tropical Drink"},{emoji:"\uD83C\uDF7A",title:"Beer Mug"},{emoji:"\uD83C\uDF7B",title:"Clinking Beer Mugs"},{emoji:"\uD83E\uDD42",title:"Clinking Glasses"},{emoji:"\uD83E\uDD43",title:"Tumbler Glass"},{emoji:"\uD83E\uDD64",title:"Cup with Straw"},{emoji:"\uD83E\uDDCB",title:"Bubble Tea"},{emoji:"\uD83E\uDDC3",title:"Beverage Box"},{emoji:"\uD83E\uDDC9",title:"Mate"},{emoji:"\uD83E\uDDCA",title:"Ice"},{emoji:"\uD83E\uDD62",title:"Chopsticks"},{emoji:"\uD83C\uDF7D️",title:"Fork and Knife with Plate"},{emoji:"\uD83C\uDF74",title:"Fork and Knife"},{emoji:"\uD83E\uDD44",title:"Spoon"}],Activity:[{emoji:"\uD83D\uDD74️",title:"Person in Suit Levitating"},{emoji:"\uD83E\uDDD7",title:"Person Climbing"},{emoji:"\uD83E\uDDD7‍♂️",title:"Man Climbing"},{emoji:"\uD83E\uDDD7‍♀️",title:"Woman Climbing"},{emoji:"\uD83E\uDD3A",title:"Person Fencing"},{emoji:"\uD83C\uDFC7",title:"Horse Racing"},{emoji:"⛷️",title:"Skier"},{emoji:"\uD83C\uDFC2",title:"Snowboarder"},{emoji:"\uD83C\uDFCC️",title:"Person Golfing"},{emoji:"\uD83C\uDFCC️‍♂️",title:"Man Golfing"},{emoji:"\uD83C\uDFCC️‍♀️",title:"Woman Golfing"},{emoji:"\uD83C\uDFC4",title:"Person Surfing"},{emoji:"\uD83C\uDFC4‍♂️",title:"Man Surfing"},{emoji:"\uD83C\uDFC4‍♀️",title:"Woman Surfing"},{emoji:"\uD83D\uDEA3",title:"Person Rowing Boat"},{emoji:"\uD83D\uDEA3‍♂️",title:"Man Rowing Boat"},{emoji:"\uD83D\uDEA3‍♀️",title:"Woman Rowing Boat"},{emoji:"\uD83C\uDFCA",title:"Person Swimming"},{emoji:"\uD83C\uDFCA‍♂️",title:"Man Swimming"},{emoji:"\uD83C\uDFCA‍♀️",title:"Woman Swimming"},{emoji:"⛹️",title:"Person Bouncing Ball"},{emoji:"⛹️‍♂️",title:"Man Bouncing Ball"},{emoji:"⛹️‍♀️",title:"Woman Bouncing Ball"},{emoji:"\uD83C\uDFCB️",title:"Person Lifting Weights"},{emoji:"\uD83C\uDFCB️‍♂️",title:"Man Lifting Weights"},{emoji:"\uD83C\uDFCB️‍♀️",title:"Woman Lifting Weights"},{emoji:"\uD83D\uDEB4",title:"Person Biking"},{emoji:"\uD83D\uDEB4‍♂️",title:"Man Biking"},{emoji:"\uD83D\uDEB4‍♀️",title:"Woman Biking"},{emoji:"\uD83D\uDEB5",title:"Person Mountain Biking"},{emoji:"\uD83D\uDEB5‍♂️",title:"Man Mountain Biking"},{emoji:"\uD83D\uDEB5‍♀️",title:"Woman Mountain Biking"},{emoji:"\uD83E\uDD38",title:"Person Cartwheeling"},{emoji:"\uD83E\uDD38‍♂️",title:"Man Cartwheeling"},{emoji:"\uD83E\uDD38‍♀️",title:"Woman Cartwheeling"},{emoji:"\uD83E\uDD3C",title:"People Wrestling"},{emoji:"\uD83E\uDD3C‍♂️",title:"Men Wrestling"},{emoji:"\uD83E\uDD3C‍♀️",title:"Women Wrestling"},{emoji:"\uD83E\uDD3D",title:"Person Playing Water Polo"},{emoji:"\uD83E\uDD3D‍♂️",title:"Man Playing Water Polo"},{emoji:"\uD83E\uDD3D‍♀️",title:"Woman Playing Water Polo"},{emoji:"\uD83E\uDD3E",title:"Person Playing Handball"},{emoji:"\uD83E\uDD3E‍♂️",title:"Man Playing Handball"},{emoji:"\uD83E\uDD3E‍♀️",title:"Woman Playing Handball"},{emoji:"\uD83E\uDD39",title:"Person Juggling"},{emoji:"\uD83E\uDD39‍♂️",title:"Man Juggling"},{emoji:"\uD83E\uDD39‍♀️",title:"Woman Juggling"},{emoji:"\uD83E\uDDD8",title:"Person in Lotus Position"},{emoji:"\uD83E\uDDD8‍♂️",title:"Man in Lotus Position"},{emoji:"\uD83E\uDDD8‍♀️",title:"Woman in Lotus Position"},{emoji:"\uD83C\uDFAA",title:"Circus Tent"},{emoji:"\uD83D\uDEF9",title:"Skateboard"},{emoji:"\uD83D\uDEFC",title:"Roller Skate"},{emoji:"\uD83D\uDEF6",title:"Canoe"},{emoji:"\uD83C\uDF97️",title:"Reminder Ribbon"},{emoji:"\uD83C\uDF9F️",title:"Admission Tickets"},{emoji:"\uD83C\uDFAB",title:"Ticket"},{emoji:"\uD83C\uDF96️",title:"Military Medal"},{emoji:"\uD83C\uDFC6",title:"Trophy"},{emoji:"\uD83C\uDFC5",title:"Sports Medal"},{emoji:"\uD83E\uDD47",title:"1st Place Medal"},{emoji:"\uD83E\uDD48",title:"2nd Place Medal"},{emoji:"\uD83E\uDD49",title:"3rd Place Medal"},{emoji:"⚽",title:"Soccer Ball"},{emoji:"⚾",title:"Baseball"},{emoji:"\uD83E\uDD4E",title:"Softball"},{emoji:"\uD83C\uDFC0",title:"Basketball"},{emoji:"\uD83C\uDFD0",title:"Volleyball"},{emoji:"\uD83C\uDFC8",title:"American Football"},{emoji:"\uD83C\uDFC9",title:"Rugby Football"},{emoji:"\uD83C\uDFBE",title:"Tennis"},{emoji:"\uD83E\uDD4F",title:"Flying Disc"},{emoji:"\uD83C\uDFB3",title:"Bowling"},{emoji:"\uD83C\uDFCF",title:"Cricket Game"},{emoji:"\uD83C\uDFD1",title:"Field Hockey"},{emoji:"\uD83C\uDFD2",title:"Ice Hockey"},{emoji:"\uD83E\uDD4D",title:"Lacrosse"},{emoji:"\uD83C\uDFD3",title:"Ping Pong"},{emoji:"\uD83C\uDFF8",title:"Badminton"},{emoji:"\uD83E\uDD4A",title:"Boxing Glove"},{emoji:"\uD83E\uDD4B",title:"Martial Arts Uniform"},{emoji:"\uD83E\uDD45",title:"Goal Net"},{emoji:"⛳",title:"Flag in Hole"},{emoji:"⛸️",title:"Ice Skate"},{emoji:"\uD83C\uDFA3",title:"Fishing Pole"},{emoji:"\uD83C\uDFBD",title:"Running Shirt"},{emoji:"\uD83C\uDFBF",title:"Skis"},{emoji:"\uD83D\uDEF7",title:"Sled"},{emoji:"\uD83E\uDD4C",title:"Curling Stone"},{emoji:"\uD83C\uDFAF",title:"Bullseye"},{emoji:"\uD83C\uDFB1",title:"Pool 8 Ball"},{emoji:"\uD83C\uDFAE",title:"Video Game"},{emoji:"\uD83C\uDFB0",title:"Slot Machine"},{emoji:"\uD83C\uDFB2",title:"Game Die"},{emoji:"\uD83E\uDDE9",title:"Puzzle Piece"},{emoji:"♟️",title:"Chess Pawn"},{emoji:"\uD83C\uDFAD",title:"Performing Arts"},{emoji:"\uD83C\uDFA8",title:"Artist Palette"},{emoji:"\uD83E\uDDF5",title:"Thread"},{emoji:"\uD83E\uDDF6",title:"Yarn"},{emoji:"\uD83C\uDFBC",title:"Musical Score"},{emoji:"\uD83C\uDFA4",title:"Microphone"},{emoji:"\uD83C\uDFA7",title:"Headphone"},{emoji:"\uD83C\uDFB7",title:"Saxophone"},{emoji:"\uD83E\uDE97",title:"Accordion"},{emoji:"\uD83C\uDFB8",title:"Guitar"},{emoji:"\uD83C\uDFB9",title:"Musical Keyboard"},{emoji:"\uD83C\uDFBA",title:"Trumpet"},{emoji:"\uD83C\uDFBB",title:"Violin"},{emoji:"\uD83E\uDD41",title:"Drum"},{emoji:"\uD83E\uDE98",title:"Long Drum"},{emoji:"\uD83C\uDFAC",title:"Clapper Board"},{emoji:"\uD83C\uDFF9",title:"Bow and Arrow"}],"Travel-places":[{emoji:"\uD83D\uDEA3",title:"Person Rowing Boat"},{emoji:"\uD83D\uDDFE",title:"Map of Japan"},{emoji:"\uD83C\uDFD4️",title:"Snow-Capped Mountain"},{emoji:"⛰️",title:"Mountain"},{emoji:"\uD83C\uDF0B",title:"Volcano"},{emoji:"\uD83D\uDDFB",title:"Mount Fuji"},{emoji:"\uD83C\uDFD5️",title:"Camping"},{emoji:"\uD83C\uDFD6️",title:"Beach with Umbrella"},{emoji:"\uD83C\uDFDC️",title:"Desert"},{emoji:"\uD83C\uDFDD️",title:"Desert Island"},{emoji:"\uD83C\uDFDE️",title:"National Park"},{emoji:"\uD83C\uDFDF️",title:"Stadium"},{emoji:"\uD83C\uDFDB️",title:"Classical Building"},{emoji:"\uD83C\uDFD7️",title:"Building Construction"},{emoji:"\uD83D\uDED6",title:"Hut"},{emoji:"\uD83C\uDFD8️",title:"Houses"},{emoji:"\uD83C\uDFDA️",title:"Derelict House"},{emoji:"\uD83C\uDFE0",title:"House"},{emoji:"\uD83C\uDFE1",title:"House with Garden"},{emoji:"\uD83C\uDFE2",title:"Office Building"},{emoji:"\uD83C\uDFE3",title:"Japanese Post Office"},{emoji:"\uD83C\uDFE4",title:"Post Office"},{emoji:"\uD83C\uDFE5",title:"Hospital"},{emoji:"\uD83C\uDFE6",title:"Bank"},{emoji:"\uD83C\uDFE8",title:"Hotel"},{emoji:"\uD83C\uDFE9",title:"Love Hotel"},{emoji:"\uD83C\uDFEA",title:"Convenience Store"},{emoji:"\uD83C\uDFEB",title:"School"},{emoji:"\uD83C\uDFEC",title:"Department Store"},{emoji:"\uD83C\uDFED",title:"Factory"},{emoji:"\uD83C\uDFEF",title:"Japanese Castle"},{emoji:"\uD83C\uDFF0",title:"Castle"},{emoji:"\uD83D\uDC92",title:"Wedding"},{emoji:"\uD83D\uDDFC",title:"Tokyo Tower"},{emoji:"\uD83D\uDDFD",title:"Statue of Liberty"},{emoji:"⛪",title:"Church"},{emoji:"\uD83D\uDD4C",title:"Mosque"},{emoji:"\uD83D\uDED5",title:"Hindu Temple"},{emoji:"\uD83D\uDD4D",title:"Synagogue"},{emoji:"⛩️",title:"Shinto Shrine"},{emoji:"\uD83D\uDD4B",title:"Kaaba"},{emoji:"⛲",title:"Fountain"},{emoji:"⛺",title:"Tent"},{emoji:"\uD83C\uDF01",title:"Foggy"},{emoji:"\uD83C\uDF03",title:"Night with Stars"},{emoji:"\uD83C\uDFD9️",title:"Cityscape"},{emoji:"\uD83C\uDF04",title:"Sunrise Over Mountains"},{emoji:"\uD83C\uDF05",title:"Sunrise"},{emoji:"\uD83C\uDF06",title:"Cityscape at Dusk"},{emoji:"\uD83C\uDF07",title:"Sunset"},{emoji:"\uD83C\uDF09",title:"Bridge at Night"},{emoji:"\uD83C\uDFA0",title:"Carousel Horse"},{emoji:"\uD83C\uDFA1",title:"Ferris Wheel"},{emoji:"\uD83C\uDFA2",title:"Roller Coaster"},{emoji:"\uD83D\uDE82",title:"Locomotive"},{emoji:"\uD83D\uDE83",title:"Railway Car"},{emoji:"\uD83D\uDE84",title:"High-Speed Train"},{emoji:"\uD83D\uDE85",title:"Bullet Train"},{emoji:"\uD83D\uDE86",title:"Train"},{emoji:"\uD83D\uDE87",title:"Metro"},{emoji:"\uD83D\uDE88",title:"Light Rail"},{emoji:"\uD83D\uDE89",title:"Station"},{emoji:"\uD83D\uDE8A",title:"Tram"},{emoji:"\uD83D\uDE9D",title:"Monorail"},{emoji:"\uD83D\uDE9E",title:"Mountain Railway"},{emoji:"\uD83D\uDE8B",title:"Tram Car"},{emoji:"\uD83D\uDE8C",title:"Bus"},{emoji:"\uD83D\uDE8D",title:"Oncoming Bus"},{emoji:"\uD83D\uDE8E",title:"Trolleybus"},{emoji:"\uD83D\uDE90",title:"Minibus"},{emoji:"\uD83D\uDE91",title:"Ambulance"},{emoji:"\uD83D\uDE92",title:"Fire Engine"},{emoji:"\uD83D\uDE93",title:"Police Car"},{emoji:"\uD83D\uDE94",title:"Oncoming Police Car"},{emoji:"\uD83D\uDE95",title:"Taxi"},{emoji:"\uD83D\uDE96",title:"Oncoming Taxi"},{emoji:"\uD83D\uDE97",title:"Automobile"},{emoji:"\uD83D\uDE98",title:"Oncoming Automobile"},{emoji:"\uD83D\uDE99",title:"Sport Utility Vehicle"},{emoji:"\uD83D\uDEFB",title:"Pickup Truck"},{emoji:"\uD83D\uDE9A",title:"Delivery Truck"},{emoji:"\uD83D\uDE9B",title:"Articulated Lorry"},{emoji:"\uD83D\uDE9C",title:"Tractor"},{emoji:"\uD83C\uDFCE️",title:"Racing Car"},{emoji:"\uD83C\uDFCD️",title:"Motorcycle"},{emoji:"\uD83D\uDEF5",title:"Motor Scooter"},{emoji:"\uD83D\uDEFA",title:"Auto Rickshaw"},{emoji:"\uD83D\uDEB2",title:"Bicycle"},{emoji:"\uD83D\uDEF4",title:"Kick Scooter"},{emoji:"\uD83D\uDE8F",title:"Bus Stop"},{emoji:"\uD83D\uDEE3️",title:"Motorway"},{emoji:"\uD83D\uDEE4️",title:"Railway Track"},{emoji:"⛽",title:"Fuel Pump"},{emoji:"\uD83D\uDEA8",title:"Police Car Light"},{emoji:"\uD83D\uDEA5",title:"Horizontal Traffic Light"},{emoji:"\uD83D\uDEA6",title:"Vertical Traffic Light"},{emoji:"\uD83D\uDEA7",title:"Construction"},{emoji:"⚓",title:"Anchor"},{emoji:"⛵",title:"Sailboat"},{emoji:"\uD83D\uDEA4",title:"Speedboat"},{emoji:"\uD83D\uDEF3️",title:"Passenger Ship"},{emoji:"⛴️",title:"Ferry"},{emoji:"\uD83D\uDEE5️",title:"Motor Boat"},{emoji:"\uD83D\uDEA2",title:"Ship"},{emoji:"✈️",title:"Airplane"},{emoji:"\uD83D\uDEE9️",title:"Small Airplane"},{emoji:"\uD83D\uDEEB",title:"Airplane Departure"},{emoji:"\uD83D\uDEEC",title:"Airplane Arrival"},{emoji:"\uD83E\uDE82",title:"Parachute"},{emoji:"\uD83D\uDCBA",title:"Seat"},{emoji:"\uD83D\uDE81",title:"Helicopter"},{emoji:"\uD83D\uDE9F",title:"Suspension Railway"},{emoji:"\uD83D\uDEA0",title:"Mountain Cableway"},{emoji:"\uD83D\uDEA1",title:"Aerial Tramway"},{emoji:"\uD83D\uDEF0️",title:"Satellite"},{emoji:"\uD83D\uDE80",title:"Rocket"},{emoji:"\uD83D\uDEF8",title:"Flying Saucer"},{emoji:"\uD83E\uDE90",title:"Ringed Planet"},{emoji:"\uD83C\uDF20",title:"Shooting Star"},{emoji:"\uD83C\uDF0C",title:"Milky Way"},{emoji:"⛱️",title:"Umbrella on Ground"},{emoji:"\uD83C\uDF86",title:"Fireworks"},{emoji:"\uD83C\uDF87",title:"Sparkler"},{emoji:"\uD83C\uDF91",title:"Moon Viewing Ceremony"},{emoji:"\uD83D\uDCB4",title:"Yen Banknote"},{emoji:"\uD83D\uDCB5",title:"Dollar Banknote"},{emoji:"\uD83D\uDCB6",title:"Euro Banknote"},{emoji:"\uD83D\uDCB7",title:"Pound Banknote"},{emoji:"\uD83D\uDDFF",title:"Moai"},{emoji:"\uD83D\uDEC2",title:"Passport Control"},{emoji:"\uD83D\uDEC3",title:"Customs"},{emoji:"\uD83D\uDEC4",title:"Baggage Claim"},{emoji:"\uD83D\uDEC5",title:"Left Luggage"}],Objects:[{emoji:"\uD83D\uDC8C",title:"Love Letter"},{emoji:"\uD83D\uDD73️",title:"Hole"},{emoji:"\uD83D\uDCA3",title:"Bomb"},{emoji:"\uD83D\uDEC0",title:"Person Taking Bath"},{emoji:"\uD83D\uDECC",title:"Person in Bed"},{emoji:"\uD83D\uDD2A",title:"Kitchen Knife"},{emoji:"\uD83C\uDFFA",title:"Amphora"},{emoji:"\uD83D\uDDFA️",title:"World Map"},{emoji:"\uD83E\uDDED",title:"Compass"},{emoji:"\uD83E\uDDF1",title:"Brick"},{emoji:"\uD83D\uDC88",title:"Barber Pole"},{emoji:"\uD83E\uDDBD",title:"Manual Wheelchair"},{emoji:"\uD83E\uDDBC",title:"Motorized Wheelchair"},{emoji:"\uD83D\uDEE2️",title:"Oil Drum"},{emoji:"\uD83D\uDECE️",title:"Bellhop Bell"},{emoji:"\uD83E\uDDF3",title:"Luggage"},{emoji:"⌛",title:"Hourglass Done"},{emoji:"⏳",title:"Hourglass Not Done"},{emoji:"⌚",title:"Watch"},{emoji:"⏰",title:"Alarm Clock"},{emoji:"⏱️",title:"Stopwatch"},{emoji:"⏲️",title:"Timer Clock"},{emoji:"\uD83D\uDD70️",title:"Mantelpiece Clock"},{emoji:"\uD83C\uDF21️",title:"Thermometer"},{emoji:"⛱️",title:"Umbrella on Ground"},{emoji:"\uD83E\uDDE8",title:"Firecracker"},{emoji:"\uD83C\uDF88",title:"Balloon"},{emoji:"\uD83C\uDF89",title:"Party Popper"},{emoji:"\uD83C\uDF8A",title:"Confetti Ball"},{emoji:"\uD83C\uDF8E",title:"Japanese Dolls"},{emoji:"\uD83C\uDF8F",title:"Carp Streamer"},{emoji:"\uD83C\uDF90",title:"Wind Chime"},{emoji:"\uD83E\uDDE7",title:"Red Envelope"},{emoji:"\uD83C\uDF80",title:"Ribbon"},{emoji:"\uD83C\uDF81",title:"Wrapped Gift"},{emoji:"\uD83E\uDD3F",title:"Diving Mask"},{emoji:"\uD83E\uDE80",title:"Yo-Yo"},{emoji:"\uD83E\uDE81",title:"Kite"},{emoji:"\uD83D\uDD2E",title:"Crystal Ball"},{emoji:"\uD83E\uDE84",title:"Magic Wand"},{emoji:"\uD83E\uDDFF",title:"Nazar Amulet"},{emoji:"\uD83D\uDD79️",title:"Joystick"},{emoji:"\uD83E\uDDF8",title:"Teddy Bear"},{emoji:"\uD83E\uDE85",title:"Pi\xf1ata"},{emoji:"\uD83E\uDE86",title:"Nesting Dolls"},{emoji:"\uD83D\uDDBC️",title:"Framed Picture"},{emoji:"\uD83E\uDDF5",title:"Thread"},{emoji:"\uD83E\uDEA1",title:"Sewing Needle"},{emoji:"\uD83E\uDDF6",title:"Yarn"},{emoji:"\uD83E\uDEA2",title:"Knot"},{emoji:"\uD83D\uDECD️",title:"Shopping Bags"},{emoji:"\uD83D\uDCFF",title:"Prayer Beads"},{emoji:"\uD83D\uDC8E",title:"Gem Stone"},{emoji:"\uD83D\uDCEF",title:"Postal Horn"},{emoji:"\uD83C\uDF99️",title:"Studio Microphone"},{emoji:"\uD83C\uDF9A️",title:"Level Slider"},{emoji:"\uD83C\uDF9B️",title:"Control Knobs"},{emoji:"\uD83D\uDCFB",title:"Radio"},{emoji:"\uD83E\uDE95",title:"Banjo"},{emoji:"\uD83D\uDCF1",title:"Mobile Phone"},{emoji:"\uD83D\uDCF2",title:"Mobile Phone with Arrow"},{emoji:"☎️",title:"Telephone"},{emoji:"\uD83D\uDCDE",title:"Telephone Receiver"},{emoji:"\uD83D\uDCDF",title:"Pager"},{emoji:"\uD83D\uDCE0",title:"Fax Machine"},{emoji:"\uD83D\uDD0B",title:"Battery"},{emoji:"\uD83D\uDD0C",title:"Electric Plug"},{emoji:"\uD83D\uDCBB",title:"Laptop"},{emoji:"\uD83D\uDDA5️",title:"Desktop Computer"},{emoji:"\uD83D\uDDA8️",title:"Printer"},{emoji:"⌨️",title:"Keyboard"},{emoji:"\uD83D\uDDB1️",title:"Computer Mouse"},{emoji:"\uD83D\uDDB2️",title:"Trackball"},{emoji:"\uD83D\uDCBD",title:"Computer Disk"},{emoji:"\uD83D\uDCBE",title:"Floppy Disk"},{emoji:"\uD83D\uDCBF",title:"Optical Disk"},{emoji:"\uD83D\uDCC0",title:"DVD"},{emoji:"\uD83E\uDDEE",title:"Abacus"},{emoji:"\uD83C\uDFA5",title:"Movie Camera"},{emoji:"\uD83C\uDF9E️",title:"Film Frames"},{emoji:"\uD83D\uDCFD️",title:"Film Projector"},{emoji:"\uD83D\uDCFA",title:"Television"},{emoji:"\uD83D\uDCF7",title:"Camera"},{emoji:"\uD83D\uDCF8",title:"Camera with Flash"},{emoji:"\uD83D\uDCF9",title:"Video Camera"},{emoji:"\uD83D\uDCFC",title:"Videocassette"},{emoji:"\uD83D\uDD0D",title:"Magnifying Glass Tilted Left"},{emoji:"\uD83D\uDD0E",title:"Magnifying Glass Tilted Right"},{emoji:"\uD83D\uDD6F️",title:"Candle"},{emoji:"\uD83D\uDCA1",title:"Light Bulb"},{emoji:"\uD83D\uDD26",title:"Flashlight"},{emoji:"\uD83C\uDFEE",title:"Red Paper Lantern"},{emoji:"\uD83E\uDE94",title:"Diya Lamp"},{emoji:"\uD83D\uDCD4",title:"Notebook with Decorative Cover"},{emoji:"\uD83D\uDCD5",title:"Closed Book"},{emoji:"\uD83D\uDCD6",title:"Open Book"},{emoji:"\uD83D\uDCD7",title:"Green Book"},{emoji:"\uD83D\uDCD8",title:"Blue Book"},{emoji:"\uD83D\uDCD9",title:"Orange Book"},{emoji:"\uD83D\uDCDA",title:"Books"},{emoji:"\uD83D\uDCD3",title:"Notebook"},{emoji:"\uD83D\uDCD2",title:"Ledger"},{emoji:"\uD83D\uDCC3",title:"Page with Curl"},{emoji:"\uD83D\uDCDC",title:"Scroll"},{emoji:"\uD83D\uDCC4",title:"Page Facing Up"},{emoji:"\uD83D\uDCF0",title:"Newspaper"},{emoji:"\uD83D\uDDDE️",title:"Rolled-Up Newspaper"},{emoji:"\uD83D\uDCD1",title:"Bookmark Tabs"},{emoji:"\uD83D\uDD16",title:"Bookmark"},{emoji:"\uD83C\uDFF7️",title:"Label"},{emoji:"\uD83D\uDCB0",title:"Money Bag"},{emoji:"\uD83E\uDE99",title:"Coin"},{emoji:"\uD83D\uDCB4",title:"Yen Banknote"},{emoji:"\uD83D\uDCB5",title:"Dollar Banknote"},{emoji:"\uD83D\uDCB6",title:"Euro Banknote"},{emoji:"\uD83D\uDCB7",title:"Pound Banknote"},{emoji:"\uD83D\uDCB8",title:"Money with Wings"},{emoji:"\uD83D\uDCB3",title:"Credit Card"},{emoji:"\uD83E\uDDFE",title:"Receipt"},{emoji:"✉️",title:"Envelope"},{emoji:"\uD83D\uDCE7",title:"E-Mail"},{emoji:"\uD83D\uDCE8",title:"Incoming Envelope"},{emoji:"\uD83D\uDCE9",title:"Envelope with Arrow"},{emoji:"\uD83D\uDCE4",title:"Outbox Tray"},{emoji:"\uD83D\uDCE5",title:"Inbox Tray"},{emoji:"\uD83D\uDCE6",title:"Package"},{emoji:"\uD83D\uDCEB",title:"Closed Mailbox with Raised Flag"},{emoji:"\uD83D\uDCEA",title:"Closed Mailbox with Lowered Flag"},{emoji:"\uD83D\uDCEC",title:"Open Mailbox with Raised Flag"},{emoji:"\uD83D\uDCED",title:"Open Mailbox with Lowered Flag"},{emoji:"\uD83D\uDCEE",title:"Postbox"},{emoji:"\uD83D\uDDF3️",title:"Ballot Box with Ballot"},{emoji:"✏️",title:"Pencil"},{emoji:"✒️",title:"Black Nib"},{emoji:"\uD83D\uDD8B️",title:"Fountain Pen"},{emoji:"\uD83D\uDD8A️",title:"Pen"},{emoji:"\uD83D\uDD8C️",title:"Paintbrush"},{emoji:"\uD83D\uDD8D️",title:"Crayon"},{emoji:"\uD83D\uDCDD",title:"Memo"},{emoji:"\uD83D\uDCC1",title:"File Folder"},{emoji:"\uD83D\uDCC2",title:"Open File Folder"},{emoji:"\uD83D\uDDC2️",title:"Card Index Dividers"},{emoji:"\uD83D\uDCC5",title:"Calendar"},{emoji:"\uD83D\uDCC6",title:"Tear-Off Calendar"},{emoji:"\uD83D\uDDD2️",title:"Spiral Notepad"},{emoji:"\uD83D\uDDD3️",title:"Spiral Calendar"},{emoji:"\uD83D\uDCC7",title:"Card Index"},{emoji:"\uD83D\uDCC8",title:"Chart Increasing"},{emoji:"\uD83D\uDCC9",title:"Chart Decreasing"},{emoji:"\uD83D\uDCCA",title:"Bar Chart"},{emoji:"\uD83D\uDCCB",title:"Clipboard"},{emoji:"\uD83D\uDCCC",title:"Pushpin"},{emoji:"\uD83D\uDCCD",title:"Round Pushpin"},{emoji:"\uD83D\uDCCE",title:"Paperclip"},{emoji:"\uD83D\uDD87️",title:"Linked Paperclips"},{emoji:"\uD83D\uDCCF",title:"Straight Ruler"},{emoji:"\uD83D\uDCD0",title:"Triangular Ruler"},{emoji:"✂️",title:"Scissors"},{emoji:"\uD83D\uDDC3️",title:"Card File Box"},{emoji:"\uD83D\uDDC4️",title:"File Cabinet"},{emoji:"\uD83D\uDDD1️",title:"Wastebasket"},{emoji:"\uD83D\uDD12",title:"Locked"},{emoji:"\uD83D\uDD13",title:"Unlocked"},{emoji:"\uD83D\uDD0F",title:"Locked with Pen"},{emoji:"\uD83D\uDD10",title:"Locked with Key"},{emoji:"\uD83D\uDD11",title:"Key"},{emoji:"\uD83D\uDDDD️",title:"Old Key"},{emoji:"\uD83D\uDD28",title:"Hammer"},{emoji:"\uD83E\uDE93",title:"Axe"},{emoji:"⛏️",title:"Pick"},{emoji:"⚒️",title:"Hammer and Pick"},{emoji:"\uD83D\uDEE0️",title:"Hammer and Wrench"},{emoji:"\uD83D\uDDE1️",title:"Dagger"},{emoji:"⚔️",title:"Crossed Swords"},{emoji:"\uD83D\uDD2B",title:"Water Pistol"},{emoji:"\uD83E\uDE83",title:"Boomerang"},{emoji:"\uD83D\uDEE1️",title:"Shield"},{emoji:"\uD83E\uDE9A",title:"Carpentry Saw"},{emoji:"\uD83D\uDD27",title:"Wrench"},{emoji:"\uD83E\uDE9B",title:"Screwdriver"},{emoji:"\uD83D\uDD29",title:"Nut and Bolt"},{emoji:"⚙️",title:"Gear"},{emoji:"\uD83D\uDDDC️",title:"Clamp"},{emoji:"⚖️",title:"Balance Scale"},{emoji:"\uD83E\uDDAF",title:"White Cane"},{emoji:"\uD83D\uDD17",title:"Link"},{emoji:"⛓️",title:"Chains"},{emoji:"\uD83E\uDE9D",title:"Hook"},{emoji:"\uD83E\uDDF0",title:"Toolbox"},{emoji:"\uD83E\uDDF2",title:"Magnet"},{emoji:"\uD83E\uDE9C",title:"Ladder"},{emoji:"⚗️",title:"Alembic"},{emoji:"\uD83E\uDDEA",title:"Test Tube"},{emoji:"\uD83E\uDDEB",title:"Petri Dish"},{emoji:"\uD83E\uDDEC",title:"DNA"},{emoji:"\uD83D\uDD2C",title:"Microscope"},{emoji:"\uD83D\uDD2D",title:"Telescope"},{emoji:"\uD83D\uDCE1",title:"Satellite Antenna"},{emoji:"\uD83D\uDC89",title:"Syringe"},{emoji:"\uD83E\uDE78",title:"Drop of Blood"},{emoji:"\uD83D\uDC8A",title:"Pill"},{emoji:"\uD83E\uDE79",title:"Adhesive Bandage"},{emoji:"\uD83E\uDE7A",title:"Stethoscope"},{emoji:"\uD83D\uDEAA",title:"Door"},{emoji:"\uD83E\uDE9E",title:"Mirror"},{emoji:"\uD83E\uDE9F",title:"Window"},{emoji:"\uD83D\uDECF️",title:"Bed"},{emoji:"\uD83D\uDECB️",title:"Couch and Lamp"},{emoji:"\uD83E\uDE91",title:"Chair"},{emoji:"\uD83D\uDEBD",title:"Toilet"},{emoji:"\uD83E\uDEA0",title:"Plunger"},{emoji:"\uD83D\uDEBF",title:"Shower"},{emoji:"\uD83D\uDEC1",title:"Bathtub"},{emoji:"\uD83E\uDEA4",title:"Mouse Trap"},{emoji:"\uD83E\uDE92",title:"Razor"},{emoji:"\uD83E\uDDF4",title:"Lotion Bottle"},{emoji:"\uD83E\uDDF7",title:"Safety Pin"},{emoji:"\uD83E\uDDF9",title:"Broom"},{emoji:"\uD83E\uDDFA",title:"Basket"},{emoji:"\uD83E\uDDFB",title:"Roll of Paper"},{emoji:"\uD83E\uDEA3",title:"Bucket"},{emoji:"\uD83E\uDDFC",title:"Soap"},{emoji:"\uD83E\uDEA5",title:"Toothbrush"},{emoji:"\uD83E\uDDFD",title:"Sponge"},{emoji:"\uD83E\uDDEF",title:"Fire Extinguisher"},{emoji:"\uD83D\uDED2",title:"Shopping Cart"},{emoji:"\uD83D\uDEAC",title:"Cigarette"},{emoji:"⚰️",title:"Coffin"},{emoji:"\uD83E\uDEA6",title:"Headstone"},{emoji:"⚱️",title:"Funeral Urn"},{emoji:"\uD83D\uDDFF",title:"Moai"},{emoji:"\uD83E\uDEA7",title:"Placard"},{emoji:"\uD83D\uDEB0",title:"Potable Water"}],Symbols:[{emoji:"\uD83D\uDC98",title:"Heart with Arrow"},{emoji:"\uD83D\uDC9D",title:"Heart with Ribbon"},{emoji:"\uD83D\uDC96",title:"Sparkling Heart"},{emoji:"\uD83D\uDC97",title:"Growing Heart"},{emoji:"\uD83D\uDC93",title:"Beating Heart"},{emoji:"\uD83D\uDC9E",title:"Revolving Hearts"},{emoji:"\uD83D\uDC95",title:"Two Hearts"},{emoji:"\uD83D\uDC9F",title:"Heart Decoration"},{emoji:"❣️",title:"Heart Exclamation"},{emoji:"\uD83D\uDC94",title:"Broken Heart"},{emoji:"❤️‍\uD83D\uDD25",title:"Heart on Fire"},{emoji:"❤️‍\uD83E\uDE79",title:"Mending Heart"},{emoji:"❤️",title:"Red Heart"},{emoji:"\uD83E\uDDE1",title:"Orange Heart"},{emoji:"\uD83D\uDC9B",title:"Yellow Heart"},{emoji:"\uD83D\uDC9A",title:"Green Heart"},{emoji:"\uD83D\uDC99",title:"Blue Heart"},{emoji:"\uD83D\uDC9C",title:"Purple Heart"},{emoji:"\uD83E\uDD0E",title:"Brown Heart"},{emoji:"\uD83D\uDDA4",title:"Black Heart"},{emoji:"\uD83E\uDD0D",title:"White Heart"},{emoji:"\uD83D\uDCAF",title:"Hundred Points"},{emoji:"\uD83D\uDCA2",title:"Anger Symbol"},{emoji:"\uD83D\uDCAC",title:"Speech Balloon"},{emoji:"\uD83D\uDC41️‍\uD83D\uDDE8️",title:"Eye in Speech Bubble"},{emoji:"\uD83D\uDDE8️",title:"Left Speech Bubble"},{emoji:"\uD83D\uDDEF️",title:"Right Anger Bubble"},{emoji:"\uD83D\uDCAD",title:"Thought Balloon"},{emoji:"\uD83D\uDCA4",title:"Zzz"},{emoji:"\uD83D\uDCAE",title:"White Flower"},{emoji:"♨️",title:"Hot Springs"},{emoji:"\uD83D\uDC88",title:"Barber Pole"},{emoji:"\uD83D\uDED1",title:"Stop Sign"},{emoji:"\uD83D\uDD5B",title:"Twelve O’Clock"},{emoji:"\uD83D\uDD67",title:"Twelve-Thirty"},{emoji:"\uD83D\uDD50",title:"One O’Clock"},{emoji:"\uD83D\uDD5C",title:"One-Thirty"},{emoji:"\uD83D\uDD51",title:"Two O’Clock"},{emoji:"\uD83D\uDD5D",title:"Two-Thirty"},{emoji:"\uD83D\uDD52",title:"Three O’Clock"},{emoji:"\uD83D\uDD5E",title:"Three-Thirty"},{emoji:"\uD83D\uDD53",title:"Four O’Clock"},{emoji:"\uD83D\uDD5F",title:"Four-Thirty"},{emoji:"\uD83D\uDD54",title:"Five O’Clock"},{emoji:"\uD83D\uDD60",title:"Five-Thirty"},{emoji:"\uD83D\uDD55",title:"Six O’Clock"},{emoji:"\uD83D\uDD61",title:"Six-Thirty"},{emoji:"\uD83D\uDD56",title:"Seven O’Clock"},{emoji:"\uD83D\uDD62",title:"Seven-Thirty"},{emoji:"\uD83D\uDD57",title:"Eight O’Clock"},{emoji:"\uD83D\uDD63",title:"Eight-Thirty"},{emoji:"\uD83D\uDD58",title:"Nine O’Clock"},{emoji:"\uD83D\uDD64",title:"Nine-Thirty"},{emoji:"\uD83D\uDD59",title:"Ten O’Clock"},{emoji:"\uD83D\uDD65",title:"Ten-Thirty"},{emoji:"\uD83D\uDD5A",title:"Eleven O’Clock"},{emoji:"\uD83D\uDD66",title:"Eleven-Thirty"},{emoji:"\uD83C\uDF00",title:"Cyclone"},{emoji:"♠️",title:"Spade Suit"},{emoji:"♥️",title:"Heart Suit"},{emoji:"♦️",title:"Diamond Suit"},{emoji:"♣️",title:"Club Suit"},{emoji:"\uD83C\uDCCF",title:"Joker"},{emoji:"\uD83C\uDC04",title:"Mahjong Red Dragon"},{emoji:"\uD83C\uDFB4",title:"Flower Playing Cards"},{emoji:"\uD83D\uDD07",title:"Muted Speaker"},{emoji:"\uD83D\uDD08",title:"Speaker Low Volume"},{emoji:"\uD83D\uDD09",title:"Speaker Medium Volume"},{emoji:"\uD83D\uDD0A",title:"Speaker High Volume"},{emoji:"\uD83D\uDCE2",title:"Loudspeaker"},{emoji:"\uD83D\uDCE3",title:"Megaphone"},{emoji:"\uD83D\uDCEF",title:"Postal Horn"},{emoji:"\uD83D\uDD14",title:"Bell"},{emoji:"\uD83D\uDD15",title:"Bell with Slash"},{emoji:"\uD83C\uDFB5",title:"Musical Note"},{emoji:"\uD83C\uDFB6",title:"Musical Notes"},{emoji:"\uD83D\uDCB9",title:"Chart Increasing with Yen"},{emoji:"\uD83D\uDED7",title:"Elevator"},{emoji:"\uD83C\uDFE7",title:"ATM Sign"},{emoji:"\uD83D\uDEAE",title:"Litter in Bin Sign"},{emoji:"\uD83D\uDEB0",title:"Potable Water"},{emoji:"♿",title:"Wheelchair Symbol"},{emoji:"\uD83D\uDEB9",title:"Men’s Room"},{emoji:"\uD83D\uDEBA",title:"Women’s Room"},{emoji:"\uD83D\uDEBB",title:"Restroom"},{emoji:"\uD83D\uDEBC",title:"Baby Symbol"},{emoji:"\uD83D\uDEBE",title:"Water Closet"},{emoji:"⚠️",title:"Warning"},{emoji:"\uD83D\uDEB8",title:"Children Crossing"},{emoji:"⛔",title:"No Entry"},{emoji:"\uD83D\uDEAB",title:"Prohibited"},{emoji:"\uD83D\uDEB3",title:"No Bicycles"},{emoji:"\uD83D\uDEAD",title:"No Smoking"},{emoji:"\uD83D\uDEAF",title:"No Littering"},{emoji:"\uD83D\uDEB1",title:"Non-Potable Water"},{emoji:"\uD83D\uDEB7",title:"No Pedestrians"},{emoji:"\uD83D\uDCF5",title:"No Mobile Phones"},{emoji:"\uD83D\uDD1E",title:"No One Under Eighteen"},{emoji:"☢️",title:"Radioactive"},{emoji:"☣️",title:"Biohazard"},{emoji:"⬆️",title:"Up Arrow"},{emoji:"↗️",title:"Up-Right Arrow"},{emoji:"➡️",title:"Right Arrow"},{emoji:"↘️",title:"Down-Right Arrow"},{emoji:"⬇️",title:"Down Arrow"},{emoji:"↙️",title:"Down-Left Arrow"},{emoji:"⬅️",title:"Left Arrow"},{emoji:"↖️",title:"Up-Left Arrow"},{emoji:"↕️",title:"Up-Down Arrow"},{emoji:"↔️",title:"Left-Right Arrow"},{emoji:"↩️",title:"Right Arrow Curving Left"},{emoji:"↪️",title:"Left Arrow Curving Right"},{emoji:"⤴️",title:"Right Arrow Curving Up"},{emoji:"⤵️",title:"Right Arrow Curving Down"},{emoji:"\uD83D\uDD03",title:"Clockwise Vertical Arrows"},{emoji:"\uD83D\uDD04",title:"Counterclockwise Arrows Button"},{emoji:"\uD83D\uDD19",title:"Back Arrow"},{emoji:"\uD83D\uDD1A",title:"End Arrow"},{emoji:"\uD83D\uDD1B",title:"On! Arrow"},{emoji:"\uD83D\uDD1C",title:"Soon Arrow"},{emoji:"\uD83D\uDD1D",title:"Top Arrow"},{emoji:"\uD83D\uDED0",title:"Place of Worship"},{emoji:"⚛️",title:"Atom Symbol"},{emoji:"\uD83D\uDD49️",title:"Om"},{emoji:"✡️",title:"Star of David"},{emoji:"☸️",title:"Wheel of Dharma"},{emoji:"☯️",title:"Yin Yang"},{emoji:"✝️",title:"Latin Cross"},{emoji:"☦️",title:"Orthodox Cross"},{emoji:"☪️",title:"Star and Crescent"},{emoji:"☮️",title:"Peace Symbol"},{emoji:"\uD83D\uDD4E",title:"Menorah"},{emoji:"\uD83D\uDD2F",title:"Dotted Six-Pointed Star"},{emoji:"♈",title:"Aries"},{emoji:"♉",title:"Taurus"},{emoji:"♊",title:"Gemini"},{emoji:"♋",title:"Cancer"},{emoji:"♌",title:"Leo"},{emoji:"♍",title:"Virgo"},{emoji:"♎",title:"Libra"},{emoji:"♏",title:"Scorpio"},{emoji:"♐",title:"Sagittarius"},{emoji:"♑",title:"Capricorn"},{emoji:"♒",title:"Aquarius"},{emoji:"♓",title:"Pisces"},{emoji:"⛎",title:"Ophiuchus"},{emoji:"\uD83D\uDD00",title:"Shuffle Tracks Button"},{emoji:"\uD83D\uDD01",title:"Repeat Button"},{emoji:"\uD83D\uDD02",title:"Repeat Single Button"},{emoji:"▶️",title:"Play Button"},{emoji:"⏩",title:"Fast-Forward Button"},{emoji:"⏭️",title:"Next Track Button"},{emoji:"⏯️",title:"Play or Pause Button"},{emoji:"◀️",title:"Reverse Button"},{emoji:"⏪",title:"Fast Reverse Button"},{emoji:"⏮️",title:"Last Track Button"},{emoji:"\uD83D\uDD3C",title:"Upwards Button"},{emoji:"⏫",title:"Fast Up Button"},{emoji:"\uD83D\uDD3D",title:"Downwards Button"},{emoji:"⏬",title:"Fast Down Button"},{emoji:"⏸️",title:"Pause Button"},{emoji:"⏹️",title:"Stop Button"},{emoji:"⏺️",title:"Record Button"},{emoji:"⏏️",title:"Eject Button"},{emoji:"\uD83C\uDFA6",title:"Cinema"},{emoji:"\uD83D\uDD05",title:"Dim Button"},{emoji:"\uD83D\uDD06",title:"Bright Button"},{emoji:"\uD83D\uDCF6",title:"Antenna Bars"},{emoji:"\uD83D\uDCF3",title:"Vibration Mode"},{emoji:"\uD83D\uDCF4",title:"Mobile Phone Off"},{emoji:"♀️",title:"Female Sign"},{emoji:"♂️",title:"Male Sign"},{emoji:"✖️",title:"Multiply"},{emoji:"➕",title:"Plus"},{emoji:"➖",title:"Minus"},{emoji:"➗",title:"Divide"},{emoji:"♾️",title:"Infinity"},{emoji:"‼️",title:"‼ Double Exclamation Mark"},{emoji:"⁉️",title:"⁉ Exclamation Question Mark"},{emoji:"❓",title:"Red Question Mark"},{emoji:"❔",title:"White Question Mark"},{emoji:"❕",title:"White Exclamation Mark"},{emoji:"❗",title:"Red Exclamation Mark"},{emoji:"〰️",title:"〰 Wavy Dash"},{emoji:"\uD83D\uDCB1",title:"Currency Exchange"},{emoji:"\uD83D\uDCB2",title:"Heavy Dollar Sign"},{emoji:"⚕️",title:"Medical Symbol"},{emoji:"♻️",title:"Recycling Symbol"},{emoji:"⚜️",title:"Fleur-de-lis"},{emoji:"\uD83D\uDD31",title:"Trident Emblem"},{emoji:"\uD83D\uDCDB",title:"Name Badge"},{emoji:"\uD83D\uDD30",title:"Japanese Symbol for Beginner"},{emoji:"⭕",title:"Hollow Red Circle"},{emoji:"✅",title:"Check Mark Button"},{emoji:"☑️",title:"Check Box with Check"},{emoji:"✔️",title:"Check Mark"},{emoji:"❌",title:"Cross Mark"},{emoji:"❎",title:"Cross Mark Button"},{emoji:"➰",title:"Curly Loop"},{emoji:"➿",title:"Double Curly Loop"},{emoji:"〽️",title:"〽 Part Alternation Mark"},{emoji:"✳️",title:"Eight-Spoked Asterisk"},{emoji:"✴️",title:"Eight-Pointed Star"},{emoji:"❇️",title:"Sparkle"},{emoji:"\xa9️",title:"Copyright"},{emoji:"\xae️",title:"Registered"},{emoji:"™️",title:"Trade Mark"},{emoji:"#️⃣",title:"# Keycap Number Sign"},{emoji:"*️⃣",title:"* Keycap Asterisk"},{emoji:"0️⃣",title:"0 Keycap Digit Zero"},{emoji:"1️⃣",title:"1 Keycap Digit One"},{emoji:"2️⃣",title:"2 Keycap Digit Two"},{emoji:"3️⃣",title:"3 Keycap Digit Three"},{emoji:"4️⃣",title:"4 Keycap Digit Four"},{emoji:"5️⃣",title:"5 Keycap Digit Five"},{emoji:"6️⃣",title:"6 Keycap Digit Six"},{emoji:"7️⃣",title:"7 Keycap Digit Seven"},{emoji:"8️⃣",title:"8 Keycap Digit Eight"},{emoji:"9️⃣",title:"9 Keycap Digit Nine"},{emoji:"\uD83D\uDD1F",title:"Keycap: 10"},{emoji:"\uD83D\uDD20",title:"Input Latin Uppercase"},{emoji:"\uD83D\uDD21",title:"Input Latin Lowercase"},{emoji:"\uD83D\uDD22",title:"Input Numbers"},{emoji:"\uD83D\uDD23",title:"Input Symbols"},{emoji:"\uD83D\uDD24",title:"Input Latin Letters"},{emoji:"\uD83C\uDD70️",title:"A Button (Blood Type)"},{emoji:"\uD83C\uDD8E",title:"AB Button (Blood Type)"},{emoji:"\uD83C\uDD71️",title:"B Button (Blood Type)"},{emoji:"\uD83C\uDD91",title:"CL Button"},{emoji:"\uD83C\uDD92",title:"Cool Button"},{emoji:"\uD83C\uDD93",title:"Free Button"},{emoji:"ℹ️",title:"ℹ Information"},{emoji:"\uD83C\uDD94",title:"ID Button"},{emoji:"Ⓜ️",title:"Circled M"},{emoji:"\uD83C\uDD95",title:"New Button"},{emoji:"\uD83C\uDD96",title:"NG Button"},{emoji:"\uD83C\uDD7E️",title:"O Button (Blood Type)"},{emoji:"\uD83C\uDD97",title:"OK Button"},{emoji:"\uD83C\uDD7F️",title:"P Button"},{emoji:"\uD83C\uDD98",title:"SOS Button"},{emoji:"\uD83C\uDD99",title:"Up! Button"},{emoji:"\uD83C\uDD9A",title:"Vs Button"},{emoji:"\uD83C\uDE01",title:"Japanese “Here” Button"},{emoji:"\uD83C\uDE02️",title:"Japanese “Service Charge” Button"},{emoji:"\uD83C\uDE37️",title:"Japanese “Monthly Amount” Button"},{emoji:"\uD83C\uDE36",title:"Japanese “Not Free of Charge” Button"},{emoji:"\uD83C\uDE2F",title:"Japanese “Reserved” Button"},{emoji:"\uD83C\uDE50",title:"Japanese “Bargain” Button"},{emoji:"\uD83C\uDE39",title:"Japanese “Discount” Button"},{emoji:"\uD83C\uDE1A",title:"Japanese “Free of Charge” Button"},{emoji:"\uD83C\uDE32",title:"Japanese “Prohibited” Button"},{emoji:"\uD83C\uDE51",title:"Japanese “Acceptable” Button"},{emoji:"\uD83C\uDE38",title:"Japanese “Application” Button"},{emoji:"\uD83C\uDE34",title:"Japanese “Passing Grade” Button"},{emoji:"\uD83C\uDE33",title:"Japanese “Vacancy” Button"},{emoji:"㊗️",title:"Japanese “Congratulations” Button"},{emoji:"㊙️",title:"Japanese “Secret” Button"},{emoji:"\uD83C\uDE3A",title:"Japanese “Open for Business” Button"},{emoji:"\uD83C\uDE35",title:"Japanese “No Vacancy” Button"},{emoji:"\uD83D\uDD34",title:"Red Circle"},{emoji:"\uD83D\uDFE0",title:"Orange Circle"},{emoji:"\uD83D\uDFE1",title:"Yellow Circle"},{emoji:"\uD83D\uDFE2",title:"Green Circle"},{emoji:"\uD83D\uDD35",title:"Blue Circle"},{emoji:"\uD83D\uDFE3",title:"Purple Circle"},{emoji:"\uD83D\uDFE4",title:"Brown Circle"},{emoji:"⚫",title:"Black Circle"},{emoji:"⚪",title:"White Circle"},{emoji:"\uD83D\uDFE5",title:"Red Square"},{emoji:"\uD83D\uDFE7",title:"Orange Square"},{emoji:"\uD83D\uDFE8",title:"Yellow Square"},{emoji:"\uD83D\uDFE9",title:"Green Square"},{emoji:"\uD83D\uDFE6",title:"Blue Square"},{emoji:"\uD83D\uDFEA",title:"Purple Square"},{emoji:"\uD83D\uDFEB",title:"Brown Square"},{emoji:"⬛",title:"Black Large Square"},{emoji:"⬜",title:"White Large Square"},{emoji:"◼️",title:"Black Medium Square"},{emoji:"◻️",title:"White Medium Square"},{emoji:"◾",title:"Black Medium-Small Square"},{emoji:"◽",title:"White Medium-Small Square"},{emoji:"▪️",title:"Black Small Square"},{emoji:"▫️",title:"White Small Square"},{emoji:"\uD83D\uDD36",title:"Large Orange Diamond"},{emoji:"\uD83D\uDD37",title:"Large Blue Diamond"},{emoji:"\uD83D\uDD38",title:"Small Orange Diamond"},{emoji:"\uD83D\uDD39",title:"Small Blue Diamond"},{emoji:"\uD83D\uDD3A",title:"Red Triangle Pointed Up"},{emoji:"\uD83D\uDD3B",title:"Red Triangle Pointed Down"},{emoji:"\uD83D\uDCA0",title:"Diamond with a Dot"},{emoji:"\uD83D\uDD18",title:"Radio Button"},{emoji:"\uD83D\uDD33",title:"White Square Button"},{emoji:"\uD83D\uDD32",title:"Black Square Button"}],Flags:[{emoji:"\uD83C\uDFC1",title:"Chequered Flag"},{emoji:"\uD83D\uDEA9",title:"Triangular Flag"},{emoji:"\uD83C\uDF8C",title:"Crossed Flags"},{emoji:"\uD83C\uDFF4",title:"Black Flag"},{emoji:"\uD83C\uDFF3️",title:"White Flag"},{emoji:"\uD83C\uDFF3️‍\uD83C\uDF08",title:"Rainbow Flag"},{emoji:"\uD83C\uDFF3️‍⚧️",title:"Transgender Flag"},{emoji:"\uD83C\uDFF4‍☠️",title:"Pirate Flag"},{emoji:"\uD83C\uDDE6\uD83C\uDDE8",title:"Flag: Ascension Island"},{emoji:"\uD83C\uDDE6\uD83C\uDDE9",title:"Flag: Andorra"},{emoji:"\uD83C\uDDE6\uD83C\uDDEA",title:"Flag: United Arab Emirates"},{emoji:"\uD83C\uDDE6\uD83C\uDDEB",title:"Flag: Afghanistan"},{emoji:"\uD83C\uDDE6\uD83C\uDDEC",title:"Flag: Antigua & Barbuda"},{emoji:"\uD83C\uDDE6\uD83C\uDDEE",title:"Flag: Anguilla"},{emoji:"\uD83C\uDDE6\uD83C\uDDF1",title:"Flag: Albania"},{emoji:"\uD83C\uDDE6\uD83C\uDDF2",title:"Flag: Armenia"},{emoji:"\uD83C\uDDE6\uD83C\uDDF4",title:"Flag: Angola"},{emoji:"\uD83C\uDDE6\uD83C\uDDF6",title:"Flag: Antarctica"},{emoji:"\uD83C\uDDE6\uD83C\uDDF7",title:"Flag: Argentina"},{emoji:"\uD83C\uDDE6\uD83C\uDDF8",title:"Flag: American Samoa"},{emoji:"\uD83C\uDDE6\uD83C\uDDF9",title:"Flag: Austria"},{emoji:"\uD83C\uDDE6\uD83C\uDDFA",title:"Flag: Australia"},{emoji:"\uD83C\uDDE6\uD83C\uDDFC",title:"Flag: Aruba"},{emoji:"\uD83C\uDDE6\uD83C\uDDFD",title:"Flag: \xc5land Islands"},{emoji:"\uD83C\uDDE6\uD83C\uDDFF",title:"Flag: Azerbaijan"},{emoji:"\uD83C\uDDE7\uD83C\uDDE6",title:"Flag: Bosnia & Herzegovina"},{emoji:"\uD83C\uDDE7\uD83C\uDDE7",title:"Flag: Barbados"},{emoji:"\uD83C\uDDE7\uD83C\uDDE9",title:"Flag: Bangladesh"},{emoji:"\uD83C\uDDE7\uD83C\uDDEA",title:"Flag: Belgium"},{emoji:"\uD83C\uDDE7\uD83C\uDDEB",title:"Flag: Burkina Faso"},{emoji:"\uD83C\uDDE7\uD83C\uDDEC",title:"Flag: Bulgaria"},{emoji:"\uD83C\uDDE7\uD83C\uDDED",title:"Flag: Bahrain"},{emoji:"\uD83C\uDDE7\uD83C\uDDEE",title:"Flag: Burundi"},{emoji:"\uD83C\uDDE7\uD83C\uDDEF",title:"Flag: Benin"},{emoji:"\uD83C\uDDE7\uD83C\uDDF1",title:"Flag: St. Barth\xe9lemy"},{emoji:"\uD83C\uDDE7\uD83C\uDDF2",title:"Flag: Bermuda"},{emoji:"\uD83C\uDDE7\uD83C\uDDF3",title:"Flag: Brunei"},{emoji:"\uD83C\uDDE7\uD83C\uDDF4",title:"Flag: Bolivia"},{emoji:"\uD83C\uDDE7\uD83C\uDDF6",title:"Flag: Caribbean Netherlands"},{emoji:"\uD83C\uDDE7\uD83C\uDDF7",title:"Flag: Brazil"},{emoji:"\uD83C\uDDE7\uD83C\uDDF8",title:"Flag: Bahamas"},{emoji:"\uD83C\uDDE7\uD83C\uDDF9",title:"Flag: Bhutan"},{emoji:"\uD83C\uDDE7\uD83C\uDDFB",title:"Flag: Bouvet Island"},{emoji:"\uD83C\uDDE7\uD83C\uDDFC",title:"Flag: Botswana"},{emoji:"\uD83C\uDDE7\uD83C\uDDFE",title:"Flag: Belarus"},{emoji:"\uD83C\uDDE7\uD83C\uDDFF",title:"Flag: Belize"},{emoji:"\uD83C\uDDE8\uD83C\uDDE6",title:"Flag: Canada"},{emoji:"\uD83C\uDDE8\uD83C\uDDE8",title:"Flag: Cocos (Keeling) Islands"},{emoji:"\uD83C\uDDE8\uD83C\uDDE9",title:"Flag: Congo - Kinshasa"},{emoji:"\uD83C\uDDE8\uD83C\uDDEB",title:"Flag: Central African Republic"},{emoji:"\uD83C\uDDE8\uD83C\uDDEC",title:"Flag: Congo - Brazzaville"},{emoji:"\uD83C\uDDE8\uD83C\uDDED",title:"Flag: Switzerland"},{emoji:"\uD83C\uDDE8\uD83C\uDDEE",title:"Flag: C\xf4te d’Ivoire"},{emoji:"\uD83C\uDDE8\uD83C\uDDF0",title:"Flag: Cook Islands"},{emoji:"\uD83C\uDDE8\uD83C\uDDF1",title:"Flag: Chile"},{emoji:"\uD83C\uDDE8\uD83C\uDDF2",title:"Flag: Cameroon"},{emoji:"\uD83C\uDDE8\uD83C\uDDF3",title:"Flag: China"},{emoji:"\uD83C\uDDE8\uD83C\uDDF4",title:"Flag: Colombia"},{emoji:"\uD83C\uDDE8\uD83C\uDDF5",title:"Flag: Clipperton Island"},{emoji:"\uD83C\uDDE8\uD83C\uDDF7",title:"Flag: Costa Rica"},{emoji:"\uD83C\uDDE8\uD83C\uDDFA",title:"Flag: Cuba"},{emoji:"\uD83C\uDDE8\uD83C\uDDFB",title:"Flag: Cape Verde"},{emoji:"\uD83C\uDDE8\uD83C\uDDFC",title:"Flag: Cura\xe7ao"},{emoji:"\uD83C\uDDE8\uD83C\uDDFD",title:"Flag: Christmas Island"},{emoji:"\uD83C\uDDE8\uD83C\uDDFE",title:"Flag: Cyprus"},{emoji:"\uD83C\uDDE8\uD83C\uDDFF",title:"Flag: Czechia"},{emoji:"\uD83C\uDDE9\uD83C\uDDEA",title:"Flag: Germany"},{emoji:"\uD83C\uDDE9\uD83C\uDDEC",title:"Flag: Diego Garcia"},{emoji:"\uD83C\uDDE9\uD83C\uDDEF",title:"Flag: Djibouti"},{emoji:"\uD83C\uDDE9\uD83C\uDDF0",title:"Flag: Denmark"},{emoji:"\uD83C\uDDE9\uD83C\uDDF2",title:"Flag: Dominica"},{emoji:"\uD83C\uDDE9\uD83C\uDDF4",title:"Flag: Dominican Republic"},{emoji:"\uD83C\uDDE9\uD83C\uDDFF",title:"Flag: Algeria"},{emoji:"\uD83C\uDDEA\uD83C\uDDE6",title:"Flag: Ceuta & Melilla"},{emoji:"\uD83C\uDDEA\uD83C\uDDE8",title:"Flag: Ecuador"},{emoji:"\uD83C\uDDEA\uD83C\uDDEA",title:"Flag: Estonia"},{emoji:"\uD83C\uDDEA\uD83C\uDDEC",title:"Flag: Egypt"},{emoji:"\uD83C\uDDEA\uD83C\uDDED",title:"Flag: Western Sahara"},{emoji:"\uD83C\uDDEA\uD83C\uDDF7",title:"Flag: Eritrea"},{emoji:"\uD83C\uDDEA\uD83C\uDDF8",title:"Flag: Spain"},{emoji:"\uD83C\uDDEA\uD83C\uDDF9",title:"Flag: Ethiopia"},{emoji:"\uD83C\uDDEA\uD83C\uDDFA",title:"Flag: European Union"},{emoji:"\uD83C\uDDEB\uD83C\uDDEE",title:"Flag: Finland"},{emoji:"\uD83C\uDDEB\uD83C\uDDEF",title:"Flag: Fiji"},{emoji:"\uD83C\uDDEB\uD83C\uDDF0",title:"Flag: Falkland Islands"},{emoji:"\uD83C\uDDEB\uD83C\uDDF2",title:"Flag: Micronesia"},{emoji:"\uD83C\uDDEB\uD83C\uDDF4",title:"Flag: Faroe Islands"},{emoji:"\uD83C\uDDEB\uD83C\uDDF7",title:"Flag: France"},{emoji:"\uD83C\uDDEC\uD83C\uDDE6",title:"Flag: Gabon"},{emoji:"\uD83C\uDDEC\uD83C\uDDE7",title:"Flag: United Kingdom"},{emoji:"\uD83C\uDDEC\uD83C\uDDE9",title:"Flag: Grenada"},{emoji:"\uD83C\uDDEC\uD83C\uDDEA",title:"Flag: Georgia"},{emoji:"\uD83C\uDDEC\uD83C\uDDEB",title:"Flag: French Guiana"},{emoji:"\uD83C\uDDEC\uD83C\uDDEC",title:"Flag: Guernsey"},{emoji:"\uD83C\uDDEC\uD83C\uDDED",title:"Flag: Ghana"},{emoji:"\uD83C\uDDEC\uD83C\uDDEE",title:"Flag: Gibraltar"},{emoji:"\uD83C\uDDEC\uD83C\uDDF1",title:"Flag: Greenland"},{emoji:"\uD83C\uDDEC\uD83C\uDDF2",title:"Flag: Gambia"},{emoji:"\uD83C\uDDEC\uD83C\uDDF3",title:"Flag: Guinea"},{emoji:"\uD83C\uDDEC\uD83C\uDDF5",title:"Flag: Guadeloupe"},{emoji:"\uD83C\uDDEC\uD83C\uDDF6",title:"Flag: Equatorial Guinea"},{emoji:"\uD83C\uDDEC\uD83C\uDDF7",title:"Flag: Greece"},{emoji:"\uD83C\uDDEC\uD83C\uDDF8",title:"Flag: South Georgia & South Sandwich Islands"},{emoji:"\uD83C\uDDEC\uD83C\uDDF9",title:"Flag: Guatemala"},{emoji:"\uD83C\uDDEC\uD83C\uDDFA",title:"Flag: Guam"},{emoji:"\uD83C\uDDEC\uD83C\uDDFC",title:"Flag: Guinea-Bissau"},{emoji:"\uD83C\uDDEC\uD83C\uDDFE",title:"Flag: Guyana"},{emoji:"\uD83C\uDDED\uD83C\uDDF0",title:"Flag: Hong Kong SAR China"},{emoji:"\uD83C\uDDED\uD83C\uDDF2",title:"Flag: Heard & McDonald Islands"},{emoji:"\uD83C\uDDED\uD83C\uDDF3",title:"Flag: Honduras"},{emoji:"\uD83C\uDDED\uD83C\uDDF7",title:"Flag: Croatia"},{emoji:"\uD83C\uDDED\uD83C\uDDF9",title:"Flag: Haiti"},{emoji:"\uD83C\uDDED\uD83C\uDDFA",title:"Flag: Hungary"},{emoji:"\uD83C\uDDEE\uD83C\uDDE8",title:"Flag: Canary Islands"},{emoji:"\uD83C\uDDEE\uD83C\uDDE9",title:"Flag: Indonesia"},{emoji:"\uD83C\uDDEE\uD83C\uDDEA",title:"Flag: Ireland"},{emoji:"\uD83C\uDDEE\uD83C\uDDF1",title:"Flag: Israel"},{emoji:"\uD83C\uDDEE\uD83C\uDDF2",title:"Flag: Isle of Man"},{emoji:"\uD83C\uDDEE\uD83C\uDDF3",title:"Flag: India"},{emoji:"\uD83C\uDDEE\uD83C\uDDF4",title:"Flag: British Indian Ocean Territory"},{emoji:"\uD83C\uDDEE\uD83C\uDDF6",title:"Flag: Iraq"},{emoji:"\uD83C\uDDEE\uD83C\uDDF7",title:"Flag: Iran"},{emoji:"\uD83C\uDDEE\uD83C\uDDF8",title:"Flag: Iceland"},{emoji:"\uD83C\uDDEE\uD83C\uDDF9",title:"Flag: Italy"},{emoji:"\uD83C\uDDEF\uD83C\uDDEA",title:"Flag: Jersey"},{emoji:"\uD83C\uDDEF\uD83C\uDDF2",title:"Flag: Jamaica"},{emoji:"\uD83C\uDDEF\uD83C\uDDF4",title:"Flag: Jordan"},{emoji:"\uD83C\uDDEF\uD83C\uDDF5",title:"Flag: Japan"},{emoji:"\uD83C\uDDF0\uD83C\uDDEA",title:"Flag: Kenya"},{emoji:"\uD83C\uDDF0\uD83C\uDDEC",title:"Flag: Kyrgyzstan"},{emoji:"\uD83C\uDDF0\uD83C\uDDED",title:"Flag: Cambodia"},{emoji:"\uD83C\uDDF0\uD83C\uDDEE",title:"Flag: Kiribati"},{emoji:"\uD83C\uDDF0\uD83C\uDDF2",title:"Flag: Comoros"},{emoji:"\uD83C\uDDF0\uD83C\uDDF3",title:"Flag: St. Kitts & Nevis"},{emoji:"\uD83C\uDDF0\uD83C\uDDF5",title:"Flag: North Korea"},{emoji:"\uD83C\uDDF0\uD83C\uDDF7",title:"Flag: South Korea"},{emoji:"\uD83C\uDDF0\uD83C\uDDFC",title:"Flag: Kuwait"},{emoji:"\uD83C\uDDF0\uD83C\uDDFE",title:"Flag: Cayman Islands"},{emoji:"\uD83C\uDDF0\uD83C\uDDFF",title:"Flag: Kazakhstan"},{emoji:"\uD83C\uDDF1\uD83C\uDDE6",title:"Flag: Laos"},{emoji:"\uD83C\uDDF1\uD83C\uDDE7",title:"Flag: Lebanon"},{emoji:"\uD83C\uDDF1\uD83C\uDDE8",title:"Flag: St. Lucia"},{emoji:"\uD83C\uDDF1\uD83C\uDDEE",title:"Flag: Liechtenstein"},{emoji:"\uD83C\uDDF1\uD83C\uDDF0",title:"Flag: Sri Lanka"},{emoji:"\uD83C\uDDF1\uD83C\uDDF7",title:"Flag: Liberia"},{emoji:"\uD83C\uDDF1\uD83C\uDDF8",title:"Flag: Lesotho"},{emoji:"\uD83C\uDDF1\uD83C\uDDF9",title:"Flag: Lithuania"},{emoji:"\uD83C\uDDF1\uD83C\uDDFA",title:"Flag: Luxembourg"},{emoji:"\uD83C\uDDF1\uD83C\uDDFB",title:"Flag: Latvia"},{emoji:"\uD83C\uDDF1\uD83C\uDDFE",title:"Flag: Libya"},{emoji:"\uD83C\uDDF2\uD83C\uDDE6",title:"Flag: Morocco"},{emoji:"\uD83C\uDDF2\uD83C\uDDE8",title:"Flag: Monaco"},{emoji:"\uD83C\uDDF2\uD83C\uDDE9",title:"Flag: Moldova"},{emoji:"\uD83C\uDDF2\uD83C\uDDEA",title:"Flag: Montenegro"},{emoji:"\uD83C\uDDF2\uD83C\uDDEB",title:"Flag: St. Martin"},{emoji:"\uD83C\uDDF2\uD83C\uDDEC",title:"Flag: Madagascar"},{emoji:"\uD83C\uDDF2\uD83C\uDDED",title:"Flag: Marshall Islands"},{emoji:"\uD83C\uDDF2\uD83C\uDDF0",title:"Flag: North Macedonia"},{emoji:"\uD83C\uDDF2\uD83C\uDDF1",title:"Flag: Mali"},{emoji:"\uD83C\uDDF2\uD83C\uDDF2",title:"Flag: Myanmar (Burma)"},{emoji:"\uD83C\uDDF2\uD83C\uDDF3",title:"Flag: Mongolia"},{emoji:"\uD83C\uDDF2\uD83C\uDDF4",title:"Flag: Macao Sar China"},{emoji:"\uD83C\uDDF2\uD83C\uDDF5",title:"Flag: Northern Mariana Islands"},{emoji:"\uD83C\uDDF2\uD83C\uDDF6",title:"Flag: Martinique"},{emoji:"\uD83C\uDDF2\uD83C\uDDF7",title:"Flag: Mauritania"},{emoji:"\uD83C\uDDF2\uD83C\uDDF8",title:"Flag: Montserrat"},{emoji:"\uD83C\uDDF2\uD83C\uDDF9",title:"Flag: Malta"},{emoji:"\uD83C\uDDF2\uD83C\uDDFA",title:"Flag: Mauritius"},{emoji:"\uD83C\uDDF2\uD83C\uDDFB",title:"Flag: Maldives"},{emoji:"\uD83C\uDDF2\uD83C\uDDFC",title:"Flag: Malawi"},{emoji:"\uD83C\uDDF2\uD83C\uDDFD",title:"Flag: Mexico"},{emoji:"\uD83C\uDDF2\uD83C\uDDFE",title:"Flag: Malaysia"},{emoji:"\uD83C\uDDF2\uD83C\uDDFF",title:"Flag: Mozambique"},{emoji:"\uD83C\uDDF3\uD83C\uDDE6",title:"Flag: Namibia"},{emoji:"\uD83C\uDDF3\uD83C\uDDE8",title:"Flag: New Caledonia"},{emoji:"\uD83C\uDDF3\uD83C\uDDEA",title:"Flag: Niger"},{emoji:"\uD83C\uDDF3\uD83C\uDDEB",title:"Flag: Norfolk Island"},{emoji:"\uD83C\uDDF3\uD83C\uDDEC",title:"Flag: Nigeria"},{emoji:"\uD83C\uDDF3\uD83C\uDDEE",title:"Flag: Nicaragua"},{emoji:"\uD83C\uDDF3\uD83C\uDDF1",title:"Flag: Netherlands"},{emoji:"\uD83C\uDDF3\uD83C\uDDF4",title:"Flag: Norway"},{emoji:"\uD83C\uDDF3\uD83C\uDDF5",title:"Flag: Nepal"},{emoji:"\uD83C\uDDF3\uD83C\uDDF7",title:"Flag: Nauru"},{emoji:"\uD83C\uDDF3\uD83C\uDDFA",title:"Flag: Niue"},{emoji:"\uD83C\uDDF3\uD83C\uDDFF",title:"Flag: New Zealand"},{emoji:"\uD83C\uDDF4\uD83C\uDDF2",title:"Flag: Oman"},{emoji:"\uD83C\uDDF5\uD83C\uDDE6",title:"Flag: Panama"},{emoji:"\uD83C\uDDF5\uD83C\uDDEA",title:"Flag: Peru"},{emoji:"\uD83C\uDDF5\uD83C\uDDEB",title:"Flag: French Polynesia"},{emoji:"\uD83C\uDDF5\uD83C\uDDEC",title:"Flag: Papua New Guinea"},{emoji:"\uD83C\uDDF5\uD83C\uDDED",title:"Flag: Philippines"},{emoji:"\uD83C\uDDF5\uD83C\uDDF0",title:"Flag: Pakistan"},{emoji:"\uD83C\uDDF5\uD83C\uDDF1",title:"Flag: Poland"},{emoji:"\uD83C\uDDF5\uD83C\uDDF2",title:"Flag: St. Pierre & Miquelon"},{emoji:"\uD83C\uDDF5\uD83C\uDDF3",title:"Flag: Pitcairn Islands"},{emoji:"\uD83C\uDDF5\uD83C\uDDF7",title:"Flag: Puerto Rico"},{emoji:"\uD83C\uDDF5\uD83C\uDDF8",title:"Flag: Palestinian Territories"},{emoji:"\uD83C\uDDF5\uD83C\uDDF9",title:"Flag: Portugal"},{emoji:"\uD83C\uDDF5\uD83C\uDDFC",title:"Flag: Palau"},{emoji:"\uD83C\uDDF5\uD83C\uDDFE",title:"Flag: Paraguay"},{emoji:"\uD83C\uDDF6\uD83C\uDDE6",title:"Flag: Qatar"},{emoji:"\uD83C\uDDF7\uD83C\uDDEA",title:"Flag: R\xe9union"},{emoji:"\uD83C\uDDF7\uD83C\uDDF4",title:"Flag: Romania"},{emoji:"\uD83C\uDDF7\uD83C\uDDF8",title:"Flag: Serbia"},{emoji:"\uD83C\uDDF7\uD83C\uDDFA",title:"Flag: Russia"},{emoji:"\uD83C\uDDF7\uD83C\uDDFC",title:"Flag: Rwanda"},{emoji:"\uD83C\uDDF8\uD83C\uDDE6",title:"Flag: Saudi Arabia"},{emoji:"\uD83C\uDDF8\uD83C\uDDE7",title:"Flag: Solomon Islands"},{emoji:"\uD83C\uDDF8\uD83C\uDDE8",title:"Flag: Seychelles"},{emoji:"\uD83C\uDDF8\uD83C\uDDE9",title:"Flag: Sudan"},{emoji:"\uD83C\uDDF8\uD83C\uDDEA",title:"Flag: Sweden"},{emoji:"\uD83C\uDDF8\uD83C\uDDEC",title:"Flag: Singapore"},{emoji:"\uD83C\uDDF8\uD83C\uDDED",title:"Flag: St. Helena"},{emoji:"\uD83C\uDDF8\uD83C\uDDEE",title:"Flag: Slovenia"},{emoji:"\uD83C\uDDF8\uD83C\uDDEF",title:"Flag: Svalbard & Jan Mayen"},{emoji:"\uD83C\uDDF8\uD83C\uDDF0",title:"Flag: Slovakia"},{emoji:"\uD83C\uDDF8\uD83C\uDDF1",title:"Flag: Sierra Leone"},{emoji:"\uD83C\uDDF8\uD83C\uDDF2",title:"Flag: San Marino"},{emoji:"\uD83C\uDDF8\uD83C\uDDF3",title:"Flag: Senegal"},{emoji:"\uD83C\uDDF8\uD83C\uDDF4",title:"Flag: Somalia"},{emoji:"\uD83C\uDDF8\uD83C\uDDF7",title:"Flag: Suriname"},{emoji:"\uD83C\uDDF8\uD83C\uDDF8",title:"Flag: South Sudan"},{emoji:"\uD83C\uDDF8\uD83C\uDDF9",title:"Flag: S\xe3o Tom\xe9 & Pr\xedncipe"},{emoji:"\uD83C\uDDF8\uD83C\uDDFB",title:"Flag: El Salvador"},{emoji:"\uD83C\uDDF8\uD83C\uDDFD",title:"Flag: Sint Maarten"},{emoji:"\uD83C\uDDF8\uD83C\uDDFE",title:"Flag: Syria"},{emoji:"\uD83C\uDDF8\uD83C\uDDFF",title:"Flag: Eswatini"},{emoji:"\uD83C\uDDF9\uD83C\uDDE6",title:"Flag: Tristan Da Cunha"},{emoji:"\uD83C\uDDF9\uD83C\uDDE8",title:"Flag: Turks & Caicos Islands"},{emoji:"\uD83C\uDDF9\uD83C\uDDE9",title:"Flag: Chad"},{emoji:"\uD83C\uDDF9\uD83C\uDDEB",title:"Flag: French Southern Territories"},{emoji:"\uD83C\uDDF9\uD83C\uDDEC",title:"Flag: Togo"},{emoji:"\uD83C\uDDF9\uD83C\uDDED",title:"Flag: Thailand"},{emoji:"\uD83C\uDDF9\uD83C\uDDEF",title:"Flag: Tajikistan"},{emoji:"\uD83C\uDDF9\uD83C\uDDF0",title:"Flag: Tokelau"},{emoji:"\uD83C\uDDF9\uD83C\uDDF1",title:"Flag: Timor-Leste"},{emoji:"\uD83C\uDDF9\uD83C\uDDF2",title:"Flag: Turkmenistan"},{emoji:"\uD83C\uDDF9\uD83C\uDDF3",title:"Flag: Tunisia"},{emoji:"\uD83C\uDDF9\uD83C\uDDF4",title:"Flag: Tonga"},{emoji:"\uD83C\uDDF9\uD83C\uDDF7",title:"Flag: Turkey"},{emoji:"\uD83C\uDDF9\uD83C\uDDF9",title:"Flag: Trinidad & Tobago"},{emoji:"\uD83C\uDDF9\uD83C\uDDFB",title:"Flag: Tuvalu"},{emoji:"\uD83C\uDDF9\uD83C\uDDFC",title:"Flag: Taiwan"},{emoji:"\uD83C\uDDF9\uD83C\uDDFF",title:"Flag: Tanzania"},{emoji:"\uD83C\uDDFA\uD83C\uDDE6",title:"Flag: Ukraine"},{emoji:"\uD83C\uDDFA\uD83C\uDDEC",title:"Flag: Uganda"},{emoji:"\uD83C\uDDFA\uD83C\uDDF2",title:"Flag: U.S. Outlying Islands"},{emoji:"\uD83C\uDDFA\uD83C\uDDF3",title:"Flag: United Nations"},{emoji:"\uD83C\uDDFA\uD83C\uDDF8",title:"Flag: United States"},{emoji:"\uD83C\uDDFA\uD83C\uDDFE",title:"Flag: Uruguay"},{emoji:"\uD83C\uDDFA\uD83C\uDDFF",title:"Flag: Uzbekistan"},{emoji:"\uD83C\uDDFB\uD83C\uDDE6",title:"Flag: Vatican City"},{emoji:"\uD83C\uDDFB\uD83C\uDDE8",title:"Flag: St. Vincent & Grenadines"},{emoji:"\uD83C\uDDFB\uD83C\uDDEA",title:"Flag: Venezuela"},{emoji:"\uD83C\uDDFB\uD83C\uDDEC",title:"Flag: British Virgin Islands"},{emoji:"\uD83C\uDDFB\uD83C\uDDEE",title:"Flag: U.S. Virgin Islands"},{emoji:"\uD83C\uDDFB\uD83C\uDDF3",title:"Flag: Vietnam"},{emoji:"\uD83C\uDDFB\uD83C\uDDFA",title:"Flag: Vanuatu"},{emoji:"\uD83C\uDDFC\uD83C\uDDEB",title:"Flag: Wallis & Futuna"},{emoji:"\uD83C\uDDFC\uD83C\uDDF8",title:"Flag: Samoa"},{emoji:"\uD83C\uDDFD\uD83C\uDDF0",title:"Flag: Kosovo"},{emoji:"\uD83C\uDDFE\uD83C\uDDEA",title:"Flag: Yemen"},{emoji:"\uD83C\uDDFE\uD83C\uDDF9",title:"Flag: Mayotte"},{emoji:"\uD83C\uDDFF\uD83C\uDDE6",title:"Flag: South Africa"},{emoji:"\uD83C\uDDFF\uD83C\uDDF2",title:"Flag: Zambia"},{emoji:"\uD83C\uDDFF\uD83C\uDDFC",title:"Flag: Zimbabwe"},{emoji:"\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F",title:"Flag: England"},{emoji:"\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F",title:"Flag: Scotland"},{emoji:"\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F",title:"Flag: Wales"},{emoji:"\uD83C\uDFF4\uDB40\uDC75\uDB40\uDC73\uDB40\uDC74\uDB40\uDC78\uDB40\uDC7F",title:"Flag for Texas (US-TX)"}]},n={People:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M437.02,74.98C388.667,26.629,324.38,0,256,0S123.333,26.629,74.98,74.98C26.629,123.333,0,187.62,0,256 s26.629,132.668,74.98,181.02C123.333,485.371,187.62,512,256,512s132.667-26.629,181.02-74.98 C485.371,388.668,512,324.38,512,256S485.371,123.333,437.02,74.98z M256,472c-119.103,0-216-96.897-216-216S136.897,40,256,40 s216,96.897,216,216S375.103,472,256,472z"/> </g> </g> <g> <g> <path d="M368.993,285.776c-0.072,0.214-7.298,21.626-25.02,42.393C321.419,354.599,292.628,368,258.4,368 c-34.475,0-64.195-13.561-88.333-40.303c-18.92-20.962-27.272-42.54-27.33-42.691l-37.475,13.99 c0.42,1.122,10.533,27.792,34.013,54.273C171.022,389.074,212.215,408,258.4,408c46.412,0,86.904-19.076,117.099-55.166 c22.318-26.675,31.165-53.55,31.531-54.681L368.993,285.776z"/> </g> </g> <g> <g> <circle cx="168" cy="180.12" r="32"/> </g> </g> <g> <g> <circle cx="344" cy="180.12" r="32"/> </g> </g> <g> </g> <g> </g> <g> </g> </svg>',Nature:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 354.968 354.968" style="enable-background:new 0 0 354.968 354.968;" xml:space="preserve"> <g> <g> <path d="M350.775,341.319c-9.6-28.4-20.8-55.2-34.4-80.8c0.4-0.4,0.8-1.2,1.6-1.6c30.8-34.8,44-83.6,20.4-131.6 c-20.4-41.6-65.6-76.4-124.8-98.8c-57.2-22-127.6-32.4-200.4-27.2c-5.6,0.4-10,5.2-9.6,10.8c0.4,2.8,1.6,5.6,4,7.2 c36.8,31.6,50,79.2,63.6,126.8c8,28,15.6,55.6,28.4,81.2c0,0.4,0.4,0.4,0.4,0.8c30.8,59.6,78,81.2,122.8,78.4 c18.4-1.2,36-6.4,52.4-14.4c9.2-4.8,18-10.4,26-16.8c11.6,23.2,22,47.2,30.4,72.8c1.6,5.2,7.6,8,12.8,6.4 C349.975,352.119,352.775,346.519,350.775,341.319z M271.175,189.319c-34.8-44.4-78-82.4-131.6-112.4c-4.8-2.8-11.2-1.2-13.6,4 c-2.8,4.8-1.2,11.2,4,13.6c50.8,28.8,92.4,64.8,125.6,107.2c13.2,17.2,25.2,35.2,36,54c-8,7.6-16.4,13.6-25.6,18 c-14,7.2-28.8,11.6-44.4,12.4c-37.6,2.4-77.2-16-104-67.6v-0.4c-11.6-24-19.2-50.8-26.8-78c-12.4-43.2-24.4-86.4-53.6-120.4 c61.6-1.6,120.4,8.4,169.2,27.2c54.4,20.8,96,52,114,88.8c18.8,38,9.2,76.8-14.4,105.2 C295.575,222.919,283.975,205.719,271.175,189.319z"/> </g> </g> <g> </g> <g> </g> <g> </g> </svg>',"Food-dring":'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295 295" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 295 295"> <g> <path d="M25,226.011v16.511c0,8.836,7.465,16.489,16.302,16.489h214.063c8.837,0,15.636-7.653,15.636-16.489v-16.511H25z"/> <path d="m271.83,153.011c-3.635-66-57.634-117.022-123.496-117.022-65.863,0-119.863,51.021-123.498,117.022h246.994zm-198.497-50.99c-4.557,0-8.25-3.693-8.25-8.25 0-4.557 3.693-8.25 8.25-8.25 4.557,0 8.25,3.693 8.25,8.25 0,4.557-3.693,8.25-8.25,8.25zm42,33c-4.557,0-8.25-3.693-8.25-8.25 0-4.557 3.693-8.25 8.25-8.25 4.557,0 8.25,3.693 8.25,8.25 0,4.557-3.693,8.25-8.25,8.25zm33.248-58c-4.557,0-8.25-3.693-8.25-8.25 0-4.557 3.693-8.25 8.25-8.25 4.557,0 8.25,3.693 8.25,8.25 0,4.557-3.693,8.25-8.25,8.25zm32.752,58c-4.557,0-8.25-3.693-8.25-8.25 0-4.557 3.693-8.25 8.25-8.25 4.557,0 8.25,3.693 8.25,8.25 0,4.557-3.693,8.25-8.25,8.25zm50.25-41.25c0,4.557-3.693,8.25-8.25,8.25-4.557,0-8.25-3.693-8.25-8.25 0-4.557 3.693-8.25 8.25-8.25 4.557,0 8.25,3.694 8.25,8.25z"/> <path d="m275.414,169.011h-0.081-254.825c-11.142,0-20.508,8.778-20.508,19.921v0.414c0,11.143 9.366,20.665 20.508,20.665h254.906c11.142,0 19.586-9.523 19.586-20.665v-0.414c0-11.143-8.444-19.921-19.586-19.921z"/> </g> </svg>',Activity:'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path id="XMLID_272_" d="m437.02 74.98c-48.353-48.351-112.64-74.98-181.02-74.98s-132.667 26.629-181.02 74.98c-48.351 48.353-74.98 112.64-74.98 181.02s26.629 132.667 74.98 181.02c48.353 48.351 112.64 74.98 181.02 74.98s132.667-26.629 181.02-74.98c48.351-48.353 74.98-112.64 74.98-181.02s-26.629-132.667-74.98-181.02zm-407.02 181.02c0-57.102 21.297-109.316 56.352-149.142 37.143 45.142 57.438 101.499 57.438 160.409 0 53.21-16.914 105.191-47.908 148.069-40.693-40.891-65.882-97.226-65.882-159.336zm88.491 179.221c35.75-48.412 55.3-107.471 55.3-167.954 0-66.866-23.372-130.794-66.092-181.661 39.718-34.614 91.603-55.606 148.301-55.606 56.585 0 108.376 20.906 148.064 55.396-42.834 50.9-66.269 114.902-66.269 181.872 0 60.556 19.605 119.711 55.448 168.158-38.077 29.193-85.665 46.574-137.243 46.574-51.698 0-99.388-17.461-137.509-46.779zm297.392-19.645c-31.104-42.922-48.088-95.008-48.088-148.309 0-59.026 20.367-115.47 57.638-160.651 35.182 39.857 56.567 92.166 56.567 149.384 0 62.23-25.284 118.665-66.117 159.576z"/></svg>',"Travel-places":'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"> <g><g><path d="M846.5,153.5C939,246.1,990,369.1,990,500c0,130.9-51,253.9-143.5,346.5C753.9,939,630.9,990,500,990c-130.9,0-253.9-51-346.5-143.5C61,753.9,10,630.9,10,500c0-130.9,51-253.9,143.5-346.5C246.1,61,369.1,10,500,10C630.9,10,753.9,61,846.5,153.5z M803.2,803.2c60.3-60.3,100.5-135.5,117-217.3c-12.9,19-25.2,26-32.9-16.5c-7.9-69.3-71.5-25-111.5-49.6c-42.1,28.4-136.8-55.2-120.7,39.1c24.8,42.5,134-56.9,79.6,33.1c-34.7,62.8-126.9,201.9-114.9,274c1.5,105-107.3,21.9-144.8-12.9c-25.2-69.8-8.6-191.8-74.6-225.9c-71.6-3.1-133-9.6-160.8-89.6c-16.7-57.3,17.8-142.5,79.1-155.7c89.8-56.4,121.9,66.1,206.1,68.4c26.2-27.4,97.4-36.1,103.4-66.8c-55.3-9.8,70.1-46.5-5.3-67.4c-41.6,4.9-68.4,43.1-46.3,75.6C496,410.3,493.5,274.8,416,317.6c-2,67.6-126.5,21.9-43.1,8.2c28.7-12.5-46.8-48.8-6-42.2c20-1.1,87.4-24.7,69.2-40.6c37.5-23.3,69.1,55.8,105.8-1.8c26.5-44.3-11.1-52.5-44.4-30c-18.7-21,33.1-66.3,78.8-85.9c15.2-6.5,29.8-10.1,40.9-9.1c23,26.6,65.6,31.2,67.8-3.2c-57-27.3-119.9-41.7-185-41.7c-93.4,0-182.3,29.7-255.8,84.6c19.8,9.1,31,20.3,11.9,34.7c-14.8,44.1-74.8,103.2-127.5,94.9c-27.4,47.2-45.4,99.2-53.1,153.6c44.1,14.6,54.3,43.5,44.8,53.2c-22.5,19.6-36.3,47.4-43.4,77.8C91.3,658,132.6,739,196.8,803.2c81,81,188.6,125.6,303.2,125.6C614.5,928.8,722.2,884.2,803.2,803.2z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g> </svg>',Objects:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 461.977 461.977" style="enable-background:new 0 0 461.977 461.977;" xml:space="preserve"> <g> <path d="M398.47,248.268L346.376,18.543C344.136,8.665,333.287,0,323.158,0H138.821c-10.129,0-20.979,8.665-23.219,18.543 L63.507,248.268c-0.902,3.979-0.271,7.582,1.775,10.145c2.047,2.564,5.421,3.975,9.501,3.975h51.822v39.108 c-6.551,3.555-11,10.493-11,18.47c0,11.598,9.402,21,21,21c11.598,0,21-9.402,21-21c0-7.978-4.449-14.916-11-18.47v-39.108h240.587 c4.079,0,7.454-1.412,9.501-3.975C398.742,255.849,399.372,252.247,398.47,248.268z"/> <path d="M318.735,441.977h-77.747V282.388h-20v159.588h-77.747c-5.523,0-10,4.477-10,10c0,5.523,4.477,10,10,10h175.494 c5.522,0,10-4.477,10-10C328.735,446.454,324.257,441.977,318.735,441.977z"/> </g> <g> </g> <g> </g> <g> </g> </svg>',Symbols:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30.487 30.486" style="enable-background:new 0 0 30.487 30.486;" xml:space="preserve"> <g> <path d="M28.866,17.477h-2.521V15.03h-2.56c0.005-2.8-0.304-5.204-0.315-5.308l-0.088-0.67L22.75,8.811 c-0.021-0.008-0.142-0.051-0.317-0.109l2.287-8.519L19,4.836L15.23,0.022V0l-0.009,0.01L15.215,0v0.021l-3.769,4.815L5.725,0.183 l2.299,8.561c-0.157,0.051-0.268,0.09-0.288,0.098L7.104,9.084l-0.088,0.67c-0.013,0.104-0.321,2.508-0.316,5.308h-2.56v2.446H1.62 l0.447,2.514L1.62,22.689h6.474c1.907,2.966,5.186,7.549,7.162,7.797v-0.037c1.979-0.283,5.237-4.838,7.137-7.79h6.474l-0.447-2.67 L28.866,17.477z M21.137,20.355c-0.422,1.375-4.346,6.949-5.907,7.758v0.015c-1.577-0.853-5.461-6.373-5.882-7.739 c-0.002-0.043-0.005-0.095-0.008-0.146l11.804-0.031C21.141,20.264,21.139,20.314,21.137,20.355z M8.972,15.062 c-0.003-1.769,0.129-3.403,0.219-4.298c0.98-0.271,3.072-0.723,6.065-0.78v-0.03c2.979,0.06,5.063,0.51,6.04,0.779 c0.09,0.895,0.223,2.529,0.219,4.298L8.972,15.062z"/> </g> <g> </g> <g> </g> <g> </g> </svg>',Flags:'<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill-rule="evenodd"><g id="037---Waypoint-Flag" fill-rule="nonzero" transform="translate(0 -1)"><path id="Shape" d="m59.0752 28.5054c-3.7664123-1.873859-7.2507049-4.2678838-10.3506-7.1118 1.5923634-6.0211307 2.7737841-12.14349669 3.5361-18.3248.1788-1.44-.623-1.9047-.872-2.0126-.7016942-.26712004-1.4944908-.00419148-1.8975.6293-5.4726 6.5479-12.9687 5.8008-20.9053 5.0054-7.9985-.8-16.2506-1.6116-22.3684 5.4114-.85552122-1.067885-2.26533581-1.5228479-3.5837-1.1565l-.1377.0386c-1.81412367.5095218-2.87378593 2.391025-2.3691 4.2065l12.2089 43.6891c.3541969 1.2645215 1.5052141 2.1399137 2.8184 2.1435.2677318-.0003961.5341685-.0371657.792-.1093l1.0683-.2984h.001c.7485787-.2091577 1.3833789-.7071796 1.7646969-1.3844635.381318-.677284.4779045-1.478326.2685031-2.2268365l-3.7812-13.5327c5.5066-7.0807 13.18-6.3309 21.2988-5.52 8.1094.81 16.4863 1.646 22.64-5.7129l.0029-.0039c.6044387-.7534187.8533533-1.7315007.6826-2.6822-.0899994-.4592259-.3932698-.8481635-.8167-1.0474zm-42.0381 29.7446c-.1201754.2157725-.3219209.3742868-.56.44l-1.0684.2983c-.4949157.1376357-1.0078362-.1513714-1.1465-.646l-12.2095-43.6895c-.20840349-.7523825.23089143-1.5316224.9825-1.7428l.1367-.0381c.12366014-.0348192.25153137-.0524183.38-.0523.63429117.0010181 1.19083557.4229483 1.3631 1.0334l.1083.3876v.0021l6.2529 22.3755 5.8468 20.9238c.0669515.2380103.0360256.4929057-.0859.708zm40.6329-27.2925c-5.4736 6.5459-12.9707 5.7974-20.9043 5.0039-7.9033-.79-16.06-1.605-22.1552 5.1558l-5.463-19.548-2.0643-7.3873c5.5068-7.0794 13.1796-6.3119 21.3045-5.5007 7.7148.7695 15.6787 1.5664 21.7373-4.7095-.7467138 5.70010904-1.859683 11.3462228-3.332 16.9033-.1993066.7185155.0267229 1.4878686.583 1.9844 3.1786296 2.9100325 6.7366511 5.3762694 10.5771 7.3315-.0213812.2768572-.1194065.5422977-.2831.7666z"/></g></g></svg>'},j={search:'<svg style="fill: #646772;" version="1.1" width="17" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 487.95 487.95" style="enable-background:new 0 0 487.95 487.95;" xml:space="preserve"> <g> <g> <path d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1 c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4 c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"/> </g> </g> <g> </g> <g> </g> </svg>',close:'<svg style="height: 11px !important;" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg"><path d="M28.94,26,51.39,3.55A2.08,2.08,0,0,0,48.45.61L26,23.06,3.55.61A2.08,2.08,0,0,0,.61,3.55L23.06,26,.61,48.45A2.08,2.08,0,0,0,2.08,52a2.05,2.05,0,0,0,1.47-.61L26,28.94,48.45,51.39a2.08,2.08,0,0,0,2.94-2.94Z"/></svg>',move:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.006 512.006" xml:space="preserve"> <g> <g> <path d="M508.247,246.756l-72.457-72.465c-5.009-5.009-13.107-5.009-18.116,0c-5.009,5.009-5.009,13.107,0,18.116l50.594,50.594 H268.811V43.748l50.594,50.594c5.009,5.009,13.107,5.009,18.116,0c5.009-5.009,5.009-13.107,0-18.116L265.056,3.761 c-5.001-5.009-13.107-5.009-18.116,0l-72.457,72.457c-5.009,5.009-5.009,13.107,0,18.116c5.001,5.009,13.107,5.009,18.116,0 l50.594-50.594v199.27H43.744l50.594-50.594c5.009-5.009,5.009-13.107,0-18.116c-5.009-5.009-13.107-5.009-18.116,0L3.757,246.756 c-5.009,5.001-5.009,13.107,0,18.116l72.465,72.457c5.009,5.009,13.107,5.009,18.116,0c5.009-5.001,5.009-13.107,0-18.116 l-50.594-50.594h199.458v199.646l-50.594-50.594c-5.009-5.001-13.107-5.001-18.116,0c-5.009,5.009-5.009,13.107,0,18.116 l72.457,72.465c5,5,13.107,5,18.116,0l72.465-72.457c5.009-5.009,5.009-13.107,0-18.116c-5.009-5-13.107-5-18.116,0 l-50.594,50.594V268.627h199.458l-50.594,50.594c-5.009,5.009-5.009,13.107,0,18.116s13.107,5.009,18.116,0l72.465-72.457 C513.257,259.872,513.257,251.765,508.247,246.756z"/> </g> </g> <g> </g> </svg>'},r={styles:()=>{let e=`
                <style>
                    .fg-emoji-container {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: ${a}px;
                        height: 400px;
                        border-radius: 5px;
                        box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.62);
                        background-color: white;
                        overflow: hidden;
                        z-index: 9999;
                    }

                    .fg-emoji-container svg {
                        max-width: 100%;
                        box-sizing: border-box;
                        width: 15px;
                        height: 15px;
                    }

                    .fg-emoji-picker-category-title {
                        display: block;
                        margin: 20px 0 0 0;
                        padding: 0 10px 5px 10px;
                        font-size: 16px;
                        font-family: sans-serif;
                        font-weight: bold;
                        flex: 0 0 calc(100% - 20px);
                        border-bottom: 1px solid #ededed;
                    }

                    .fg-emoji-nav {
                        background-color: #646772;
                    }

                    .fg-emoji-nav li a svg {
                        transition: all .2s ease;
                        fill: white;
                    }

                    .fg-emoji-nav li:hover a svg {
                        fill: black;
                    }

                    .fg-emoji-nav ul {
                        display: flex;
                        flex-wrap: wrap;
                        list-style: none;
                        margin: 0;
                        padding: 0;
                        border-bottom: 1px solid #dbdbdb;
                    }

                    .fg-emoji-nav ul li {
                        flex: 1;
                    }

                    .fg-emoji-nav ul li a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 40px;
                        transition: all .2s ease;
                    }

                    .fg-emoji-nav ul li a:hover {
                        background-color: #e9ebf1;
                    }

                    .fg-emoji-nav ul li.active a {
                        background-color: #e9ebf1;
                    }

                    .fg-emoji-nav ul li.emoji-picker-nav-active a {
                        background-color: #e9ebf1;
                    }

                    .fg-emoji-nav ul li.emoji-picker-nav-active a svg {
                        fill: #646772;
                    }

                    .fg-emoji-picker-move {
                        /* pointer-events: none; */
                        cursor: move;
                    }

                    .fg-picker-special-buttons a {
                        background-color: ${this.options.specialButtons?this.options.specialButtons:"#ed5e28"};
                    }

                    .fg-picker-special-buttons:last-child a {
                        box-shadow: inset 1px 0px 0px 0 rgba(0, 0, 0, 0.11);
                    }

                    .fg-emoji-list {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                        overflow-y: scroll;
                        overflow-x: hidden;
                        height: 323px;
                    }

                    .fg-emoji-picker-category-wrapper {
                        display: flex;
                        flex-wrap: wrap;
                        flex: 1;
                    }

                    .fg-emoji-list li {
                        position: relative;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        flex: 0 0 calc(100% / 6);
                        height: 50px;
                    }

                    .fg-emoji-list li a {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        text-decoration: none;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        font-size: 23px;
                        background-color: #ffffff;
                        border-radius: 3px;
                        transition: all .3s ease;
                    }
                    
                    .fg-emoji-list li a:hover {
                        background-color: #ebebeb;
                    }

                    .fg-emoji-picker-search {
                        position: relative;
                    }

                    .fg-emoji-picker-search input {
                        border: none;
                        box-shadow: 0 0 0 0;
                        outline: none;
                        width: calc(100% - 30px);
                        display: block;
                        padding: 10px 15px;
                        background-color: #f3f3f3;
                    }

                    .fg-emoji-picker-search .fg-emoji-picker-search-icon {
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: 40px;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                </style>
            `;document.head.insertAdjacentHTML("beforeend",e)},position(){let e=window.event,i=e.clientX,t=e.clientY,o={};return o.left=i,o.top=t,o},rePositioning(e){e.getBoundingClientRect().right>window.screen.availWidth&&(e.style.left=window.screen.availWidth-e.offsetWidth+"px"),window.innerHeight>400&&e.getBoundingClientRect().bottom>window.innerHeight&&(e.style.top=window.innerHeight-e.offsetHeight+"px")},render:(e,l)=>{l||(l=".emojis"),o=void 0;let a=this.options.trigger.findIndex(e=>e.selector===l);this.insertInto=this.options.trigger[a].insertInto;const s=Array.isArray(this.insertInto)?this.insertInto.join(","):this.insertInto;if(s){const e=Array.from(document.querySelectorAll(s)),i=window.event&&window.event.target?window.event.target.closest(l):null;if(e.length)if(i){const t=i.closest("form"),o=t?e.find(e=>e.closest("form")===t):null;this.activeInsertTarget=o||(e.find(e=>e===document.activeElement)||e[0])}else this.activeInsertTarget=e.find(e=>e===document.activeElement)||e[0]}let g=r.position();if(!i.length){for(let s in m)if(m.hasOwnProperty.call(m,s)){let _=m[s];t+=`<li>
                            <a title="${s}" href="#${s}">${n[s]}</a>
                        </li>`,i+=`<div class="fg-emoji-picker-category-wrapper" id="${s}">`,i+=`<p class="fg-emoji-picker-category-title">${s}</p>`,_.forEach(e=>{i+=`<li data-title="${e.title.toLowerCase()}">
                                    <a title="${e.title}" href="#">${e.emoji}</a>
                                </li>`}),i+="</div>"}}document.querySelector(".fg-emoji-container")&&this.lib(".fg-emoji-container").remove();let c=`
                <div class="fg-emoji-container" style="left: ${g.left}px; top: ${g.top}px;">
                    <nav class="fg-emoji-nav">
                        <ul>
                            ${t}

                            <li class="fg-picker-special-buttons" id="fg-emoji-picker-move"><a class="fg-emoji-picker-move" href="#">${j.move}</a></li>
                            ${this.options.closeButton?'<li class="fg-picker-special-buttons"><a id="fg-emoji-picker-close-button" href="#">'+j.close+"</a></li>":""}
                        </ul>
                    </nav>

                    <div class="fg-emoji-picker-search">
                        <input type="text" placeholder="Search" autofocus />
                        
                        <span class="fg-emoji-picker-search-icon">${j.search}</sapn>
                    </div>

                    <div>
                        <!--<div class="fg-emoji-picker-loader-animation">
                            <div class="spinner">
                                <div class="bounce1"></div>
                                <div class="bounce2"></div>
                                <div class="bounce3"></div>
                            </div>
                        </div>-->

                        <ul class="fg-emoji-list">
                            ${i}
                        </ul>
                    </div>
                </div>
            `;document.body.insertAdjacentHTML("beforeend",c),r.rePositioning(document.querySelector(".fg-emoji-container")),setTimeout(()=>{document.querySelector(".fg-emoji-picker-search input").focus()},500)},closePicker:e=>{e.preventDefault(),this.lib(".fg-emoji-container").remove(),l=!1},checkPickerExist(e){!document.querySelector(".fg-emoji-container")||e.target.closest(".fg-emoji-container")||l||r.closePicker.call(this,e)},setCaretPosition(e,i){var t=e;if(null!=t){if(t.createTextRange){var o=t.createTextRange();o.move("character",i),o.select()}else t.selectionStart?(t.focus(),t.setSelectionRange(i,i)):t.focus()}},insert:e=>{e.preventDefault();let i=e.target.innerText.trim();const t=Array.isArray(this.insertInto)?this.insertInto.join(","):this.insertInto;if(!t)return;const o=Array.from(document.querySelectorAll(t));if(!o.length)return;const l=document.activeElement&&o.includes(document.activeElement)?document.activeElement:null,a=this.activeInsertTarget&&o.includes(this.activeInsertTarget)?this.activeInsertTarget:null,g=a||l||o[0],s=i;if(document.selection)g.focus(),(sel=document.selection.createRange()).text=s;else if(g.selectionStart||"0"==g.selectionStart){let e=g.selectionStart,i=g.selectionEnd;g.value=g.value.substring(0,e)+s+g.value.substring(i,g.value.length),r.setCaretPosition(g,e+2)}else g.value+=s,g.focus()},categoryNav:e=>{e.preventDefault();let i=e.target.closest("a");if(i.getAttribute("id")&&"fg-emoji-picker-close-button"===i.getAttribute("id")||i.className.includes("fg-emoji-picker-move"))return!1;let t=i.getAttribute("href"),o=document.querySelector(".fg-emoji-list"),l=o.querySelector(`${t}`);this.lib(".fg-emoji-nav li").removeClass("emoji-picker-nav-active"),i.closest("li").classList.add("emoji-picker-nav-active"),l.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})},search(e){let i=e.target.value.trim();o||(o=Array.from(document.querySelectorAll(".fg-emoji-picker-category-wrapper li"))),o.filter(e=>{e.getAttribute("data-title").match(i)?e.style.display="":e.style.display="none"})},mouseDown(e){e.preventDefault(),l=!0},mouseUp(e){e.preventDefault(),l=!1},mouseMove(e){if(l){e.preventDefault();let i=document.querySelector(".fg-emoji-container");i.style.left=e.clientX-320+"px",i.style.top=e.clientY-10+"px"}}},g=()=>{this.lib(document.body).on("click",r.closePicker,"#fg-emoji-picker-close-button"),this.lib(document.body).on("click",r.checkPickerExist),this.lib(document.body).on("click",r.render,this.trigger),this.lib(document.body).on("click",r.insert,".fg-emoji-list a"),this.lib(document.body).on("click",r.categoryNav,".fg-emoji-nav a"),this.lib(document.body).on("input",r.search,".fg-emoji-picker-search input"),this.lib(document).on("mousedown",r.mouseDown,"#fg-emoji-picker-move"),this.lib(document).on("mouseup",r.mouseUp,"#fg-emoji-picker-move"),this.lib(document).on("mousemove",r.mouseMove),this.lib(document).on("focusin",e=>{if(e.target.closest(".fg-emoji-container"))return;"TEXTAREA"===e.target.tagName&&(this.activeInsertTarget=e.target)})};(()=>{r.styles(),g.call(this)})()};
