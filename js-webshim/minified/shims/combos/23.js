/*!	SWFMini - a SWFObject 2.2 cut down version for webshims
 * 
 * based on SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfmini=function(){function a(){if(!s){s=!0;for(var a=r.length,b=0;a>b;b++)r[b]()}}function b(a){s?a():r[r.length]=a}function c(){q&&d()}function d(){var a=o.getElementsByTagName("body")[0],b=e(i);b.setAttribute("type",m);var c=a.appendChild(b);if(c){var d=0;!function(){if(typeof c.GetVariable!=h){var e=c.GetVariable("$version");e&&(e=e.split(" ")[1].split(","),u.pv=[parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10)])}else if(10>d)return d++,setTimeout(arguments.callee,10),void 0;a.removeChild(b),c=null}()}}function e(a){return o.createElement(a)}function f(a){var b=u.pv,c=a.split(".");return c[0]=parseInt(c[0],10),c[1]=parseInt(c[1],10)||0,c[2]=parseInt(c[2],10)||0,b[0]>c[0]||b[0]==c[0]&&b[1]>c[1]||b[0]==c[0]&&b[1]==c[1]&&b[2]>=c[2]?!0:!1}var g=function(){j.error("This method was removed from swfmini")},h="undefined",i="object",j=window.webshims,k="Shockwave Flash",l="ShockwaveFlash.ShockwaveFlash",m="application/x-shockwave-flash",n=window,o=document,p=navigator,q=!1,r=[c],s=!1,t=!0,u=function(){var a=typeof o.getElementById!=h&&typeof o.getElementsByTagName!=h&&typeof o.createElement!=h,b=p.userAgent.toLowerCase(),c=p.platform.toLowerCase(),d=c?/win/.test(c):/win/.test(b),e=c?/mac/.test(c):/mac/.test(b),f=/webkit/.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,g=!1,j=[0,0,0],r=null;if(typeof p.plugins!=h&&typeof p.plugins[k]==i)r=p.plugins[k].description,!r||typeof p.mimeTypes!=h&&p.mimeTypes[m]&&!p.mimeTypes[m].enabledPlugin||(q=!0,g=!1,r=r.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),j[0]=parseInt(r.replace(/^(.*)\..*$/,"$1"),10),j[1]=parseInt(r.replace(/^.*\.(.*)\s.*$/,"$1"),10),j[2]=/[a-zA-Z]/.test(r)?parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof n.ActiveXObject!=h)try{var s=new ActiveXObject(l);s&&(r=s.GetVariable("$version"),r&&(g=!0,r=r.split(" ")[1].split(","),j=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)]))}catch(t){}return{w3:a,pv:j,wk:f,ie:g,win:d,mac:e}}();j.ready("DOM",a),j.loader.addModule("swfmini-embed",{d:["swfmini"]});var v=f("9.0.0")?function(){return j.loader.loadList(["swfmini-embed"]),!0}:j.$.noop;return Modernizr.video?j.ready("WINDOWLOAD",v):v(),{registerObject:g,getObjectById:g,embedSWF:function(a,b,c,d,e,f,g,h,i,k){var l=arguments;v()?j.ready("swfmini-embed",function(){swfmini.embedSWF.apply(swfmini,l)}):k&&k({success:!1,id:b})},switchOffAutoHideShow:function(){t=!1},ua:u,getFlashPlayerVersion:function(){return{major:u.pv[0],minor:u.pv[1],release:u.pv[2]}},hasFlashPlayerVersion:f,createSWF:function(a,b,c){return u.w3?createSWF(a,b,c):void 0},showExpressInstall:g,removeSWF:g,createCSS:g,addDomLoadEvent:b,addLoadEvent:g,expressInstallCallback:g}}();webshims.isReady("swfmini",!0),function(a,b){"use strict";var c,d,e=a.audio&&a.video,f=!1,g=b.bugs,h="mediaelement-jaris",i=function(){b.ready(h,function(){b.mediaelement.createSWF||(b.mediaelement.loadSwf=!0,b.reTest([h],e))})},j=b.cfg,k=j.mediaelement;if(!k)return b.error("mediaelement wasn't implemented but loaded"),void 0;if(e){var l=document.createElement("video");a.videoBuffered="buffered"in l,a.mediaDefaultMuted="defaultMuted"in l,f="loop"in l,a.mediaLoop=f,b.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),(!a.videoBuffered||!f||!a.mediaDefaultMuted&&-1!=navigator.userAgent.indexOf("MSIE")&&"ActiveXObject"in window)&&(b.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),b.loader.loadList(["mediaelement-native-fix"]))}a.track&&!g.track&&!function(){if(!g.track){window.VTTCue&&!window.TextTrackCue?window.TextTrackCue=window.VTTCue:window.VTTCue||(window.VTTCue=window.TextTrackCue);try{new VTTCue(2,3,"")}catch(a){g.track=!0}}}(),c=a.track&&!g.track,b.register("mediaelement-core",function(b,c,g,j,k,l){d=swfmini.hasFlashPlayerVersion("10.0.3"),b("html").addClass(d?"swf":"no-swf");var m=c.mediaelement;m.parseRtmp=function(a){var b,d,e,f=a.src.split("://"),g=f[1].split("/");for(a.server=f[0]+"://"+g[0]+"/",a.streamId=[],b=1,d=g.length;d>b;b++)e||-1===g[b].indexOf(":")||(g[b]=g[b].split(":")[1],e=!0),e?a.streamId.push(g[b]):a.server+=g[b]+"/";a.streamId.length||c.error("Could not parse rtmp url"),a.streamId=a.streamId.join("/")};var n=function(a,c){a=b(a);var d,e={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};return e.src?(d=a.attr("data-server"),null!=d&&(e.server=d),d=a.attr("type")||a.attr("data-type"),d?(e.type=d,e.container=b.trim(d.split(";")[0])):(c||(c=a[0].nodeName.toLowerCase(),"source"==c&&(c=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e.server?(e.type=c+"/rtmp",e.container=c+"/rtmp"):(d=m.getTypeForSrc(e.src,c,e),d&&(e.type=d,e.container=d))),e.container||b(a).attr("data-wsrecheckmimetype",""),d=a.attr("media"),d&&(e.media=d),("audio/rtmp"==e.type||"video/rtmp"==e.type)&&(e.server?e.streamId=e.src:m.parseRtmp(e)),e):e},o=!d&&"postMessage"in g&&e,p=function(){p.loaded||(p.loaded=!0,l.noAutoTrack||c.ready("WINDOWLOAD",function(){r(),c.loader.loadList(["track-ui"])}))},q=function(){var a;return function(){!a&&o&&(a=!0,c.loader.loadScript("https://www.youtube.com/player_api"),b(function(){c._polyfill(["mediaelement-yt"])}))}}(),r=function(){d?i():q()};c.addPolyfill("mediaelement-yt",{test:!o,d:["dom-support"]}),m.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},m.mimeTypes.source=b.extend({},m.mimeTypes.audio,m.mimeTypes.video),m.getTypeForSrc=function(a,c){if(-1!=a.indexOf("youtube.com/watch?")||-1!=a.indexOf("youtube.com/v/"))return"video/youtube";if(0===a.indexOf("rtmp"))return c+"/rtmp";a=a.split("?")[0].split("#")[0].split("."),a=a[a.length-1];var d;return b.each(m.mimeTypes[c],function(b,c){return-1!==c.indexOf(a)?(d=b,!1):void 0}),d},m.srces=function(a,d){if(a=b(a),!d){d=[];var e=a[0].nodeName.toLowerCase(),f=n(a,e);return f.src?d.push(f):b("source",a).each(function(){f=n(this,e),f.src&&d.push(f)}),d}c.error("setting sources was removed.")},b.fn.loadMediaSrc=function(){c.error("loadMediaSrc was removed.")},m.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],m.canThirdPlaySrces=function(a,c){var e="";return(d||o)&&(a=b(a),c=c||m.srces(a),b.each(c,function(a,b){return b.container&&b.src&&(d&&-1!=m.swfMimeTypes.indexOf(b.container)||o&&"video/youtube"==b.container)?(e=b,!1):void 0})),e};var s={};m.canNativePlaySrces=function(a,c){var d="";if(e){a=b(a);var f=(a[0].nodeName||"").toLowerCase(),g=(s[f]||{prop:{_supvalue:!1}}).prop._supvalue||a[0].canPlayType;if(!g)return d;c=c||m.srces(a),b.each(c,function(b,c){return c.type&&g.call(a[0],c.type)?(d=c,!1):void 0})}return d};var t=/^\s*application\/octet\-stream\s*$/i,u=function(){var a=t.test(b.attr(this,"type")||"");return a&&b(this).removeAttr("type"),a};m.setError=function(a,d){if(b("source",a).filter(u).length){c.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{b(a).mediaLoad()}catch(e){}}else d||(d="can't play sources"),b(a).pause().data("mediaerror",d),c.error("mediaelementError: "+d),setTimeout(function(){b(a).data("mediaerror")&&b(a).addClass("media-error").trigger("mediaerror")},1)};var v=function(){var a,e=d?h:"mediaelement-yt";return function(d,f,g){c.ready(e,function(){m.createSWF&&b(d).parent()[0]?m.createSWF(d,f,g):a||(a=!0,r(),v(d,f,g))}),a||!o||m.createSWF||q()}}(),w=function(a,b,c,d,e){var f;c||c!==!1&&b&&"third"==b.isActive?(f=m.canThirdPlaySrces(a,d),f?v(a,f,b):e?m.setError(a,!1):w(a,b,!1,d,!0)):(f=m.canNativePlaySrces(a,d),f?b&&"third"==b.isActive&&m.setActive(a,"html5",b):e?(m.setError(a,!1),b&&"third"==b.isActive&&m.setActive(a,"html5",b)):w(a,b,!0,d,!0))},x=/^(?:embed|object|datalist)$/i,y=function(a,d){var e=c.data(a,"mediaelementBase")||c.data(a,"mediaelementBase",{}),f=m.srces(a),g=a.parentNode;clearTimeout(e.loadTimer),b(a).removeClass("media-error"),b.data(a,"mediaerror",!1),f.length&&g&&1==g.nodeType&&!x.test(g.nodeName||"")&&(d=d||c.data(a,"mediaelement"),m.sortMedia&&f.sort(m.sortMedia),w(a,d,l.preferFlash||k,f))};m.selectSource=y,b(j).on("ended",function(a){var d=c.data(a.target,"mediaelement");(!f||d&&"html5"!=d.isActive||b.prop(a.target,"loop"))&&setTimeout(function(){!b.prop(a.target,"paused")&&b.prop(a.target,"loop")&&b(a.target).prop("currentTime",0).play()},1)});var z=!1,A=function(){var g=function(){c.implement(this,"mediaelement")&&(y(this),a.mediaDefaultMuted||null==b.attr(this,"muted")||b.prop(this,"muted",!0))};c.ready("dom-support",function(){z=!0,f||c.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(a){var f;f=c.defineNodeNameProperty(a,"load",{prop:{value:function(){var a=c.data(this,"mediaelement");y(this,a),!e||a&&"html5"!=a.isActive||!f.prop._supvalue||f.prop._supvalue.apply(this,arguments),!p.loaded&&b("track",this).length&&p(),b(this).triggerHandler("wsmediareload")}}}),s[a]=c.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(c){var f="";return e&&s[a].prop._supvalue&&(f=s[a].prop._supvalue.call(this,c),"no"==f&&(f="")),!f&&d&&(c=b.trim((c||"").split(";")[0]),-1!=m.swfMimeTypes.indexOf(c)&&(f="maybe")),f}}})}),c.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=c.data(a,"mediaelementBase")||c.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer),b.loadTimer=setTimeout(function(){y(a),a=null},9)}}),c.addReady(function(a,c){var d=b("video, audio",a).add(c.filter("video, audio")).each(g);!p.loaded&&b("track",d).length&&p(),d=null})}),e&&!z&&c.addReady(function(a,c){z||b("video, audio",a).add(c.filter("video, audio")).each(function(){return m.canNativePlaySrces(this)?void 0:(r(),z=!0,!1)})})};e?(c.isReady("mediaelement-core",!0),A(),c.ready("WINDOWLOAD mediaelement",r)):c.ready(h,A),c.ready("track",p)})}(Modernizr,webshims);