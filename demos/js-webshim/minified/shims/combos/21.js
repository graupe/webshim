!function(a){if(!navigator.geolocation){var b=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatible with this plugin"},1)},c=0,d=webshims.cfg.geolocation||{};navigator.geolocation=function(){var e,f={getCurrentPosition:function(c,f,g){var h,i,j,k,l=2,m=function(){if(!j)if(e){if(j=!0,c(a.extend({timestamp:(new Date).getTime()},e)),o(),window.JSON&&window.sessionStorage)try{sessionStorage.setItem("storedGeolocationData654321",JSON.stringify(e))}catch(b){}}else f&&!l&&(j=!0,o(),f({code:2,message:"POSITION_UNAVAILABLE"}))},n=function(){l--,p(),m()},o=function(){a(document).off("google-loader",o),clearTimeout(i),clearTimeout(h)},p=function(){if(e||!window.google||!google.loader||!google.loader.ClientLocation)return!1;var b=google.loader.ClientLocation;return e={coords:{latitude:b.latitude,longitude:b.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:a.extend({streetNumber:"",street:"",premises:"",county:"",postalCode:""},b.address)},!0},q=function(){if(!e&&(p(),!e&&window.JSON&&window.sessionStorage))try{e=sessionStorage.getItem("storedGeolocationData654321"),e=e?JSON.parse(e):!1,e.coords||(e=!1)}catch(a){e=!1}};return q(),e?(setTimeout(m,1),void 0):d.confirmText&&!confirm(d.confirmText.replace("{location}",location.hostname))?(f&&f({code:1,message:"PERMISSION_DENIED"}),void 0):(k=function(){a.ajax({url:"http://freegeoip.net/json/",dataType:"jsonp",cache:!0,jsonp:"callback",success:function(a){l--,a&&(e=e||{coords:{latitude:a.latitude,longitude:a.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:{city:a.city,country:a.country_name,countryCode:a.country_code,county:"",postalCode:a.zipcode,premises:"",region:a.region_name,street:"",streetNumber:""}},m())},error:function(){l--,m()}})},a.ajax?k():(webshims.ready("$ajax",k),webshims.loader.loadList(["$ajax"])),clearTimeout(i),window.google&&window.google.loader?l--:i=setTimeout(function(){d.destroyWrite&&(document.write=b,document.writeln=b),a(document).one("google-loader",n),webshims.loader.loadScript("http://www.google.com/jsapi",!1,"google-loader")},800),h=g&&g.timeout?setTimeout(function(){o(),f&&f({code:3,message:"TIMEOUT"})},g.timeout):setTimeout(function(){l=0,m()},1e4),void 0)},clearWatch:a.noop};return f.watchPosition=function(a,b,d){return f.getCurrentPosition(a,b,d),c++,c},f}(),webshims.ready("WINDOWLOAD",function(){webshims.loader.loadList(["$ajax"])}),webshims.isReady("geolocation",!0)}}(webshims.$),webshims.register("details",function(a,b,c,d,e,f){var g=function(b){var c=a(b).parent("details");return c[0]&&c.children(":first").get(0)===b?c:void 0},h=function(b,c){b=a(b),c=a(c);var d=a.data(c[0],"summaryElement");a.data(b[0],"detailsElement",c),d&&b[0]===d[0]||(d&&(d.hasClass("fallback-summary")?d.remove():d.off(".summaryPolyfill").removeData("detailsElement").removeAttr("role").removeAttr("tabindex").removeAttr("aria-expanded").removeClass("summary-button").find("span.details-open-indicator").remove()),a.data(c[0],"summaryElement",b),c.prop("open",c.prop("open")))},i=function(b){var c=a.data(b,"summaryElement");return c||(c=a(b).children("summary:first-child"),c[0]?h(c,b):(a(b).prependPolyfill('<summary class="fallback-summary">'+f.text+"</summary>"),c=a.data(b,"summaryElement"))),c};b.createElement("summary",function(){var c=g(this);if(c&&!a.data(this,"detailsElement")){var d,e,f=a.attr(this,"tabIndex")||"0";h(this,c),a(this).on({"focus.summaryPolyfill":function(){a(this).addClass("summary-has-focus")},"blur.summaryPolyfill":function(){a(this).removeClass("summary-has-focus")},"mouseenter.summaryPolyfill":function(){a(this).addClass("summary-has-hover")},"mouseleave.summaryPolyfill":function(){a(this).removeClass("summary-has-hover")},"click.summaryPolyfill":function(b){var c=g(this);if(c){if(!e&&b.originalEvent)return e=!0,b.stopImmediatePropagation(),b.preventDefault(),a(this).trigger("click"),e=!1,!1;clearTimeout(d),d=setTimeout(function(){b.isDefaultPrevented()||c.prop("open",!c.prop("open"))},0)}},"keydown.summaryPolyfill":function(b){13!=b.keyCode&&32!=b.keyCode||b.isDefaultPrevented()||(e=!0,b.preventDefault(),a(this).trigger("click"),e=!1)}}).attr({tabindex:f,role:"button"}).prepend('<span class="details-open-indicator" />'),b.moveToFirstEvent(this,"click")}});var j;b.defineNodeNamesBooleanProperty("details","open",function(b){var c=a(a.data(this,"summaryElement"));if(c){var d=b?"removeClass":"addClass",e=a(this);if(!j&&f.animate){e.stop().css({width:"",height:""});var g={width:e.width(),height:e.height()}}if(c.attr("aria-expanded",""+b),e[d]("closed-details-summary").children().not(c[0])[d]("closed-details-child"),!j&&f.animate){var h={width:e.width(),height:e.height()};e.css(g).animate(h,{complete:function(){a(this).css({width:"",height:""})}})}}}),b.createElement("details",function(){j=!0;i(this);a.prop(this,"open",a.prop(this,"open")),j=!1})}),webshims.register("mediaelement-jaris",function(a,b,c,d,e,f){"use strict";var g=b.mediaelement,h=c.swfmini,i=Modernizr.audio&&Modernizr.video,j=h.hasFlashPlayerVersion("9.0.115"),k=0,l="ActiveXObject"in c&&i,m={paused:!0,ended:!1,currentSrc:"",duration:c.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,seeking:!1,error:null,buffered:{start:function(a){return a?(b.error("buffered index size error"),void 0):0},end:function(a){return a?(b.error("buffered index size error"),void 0):0},length:0}},n=Object.keys(m),o={currentTime:0,volume:1,muted:!1},p=(Object.keys(o),a.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,_ppFlag:e,_calledMeta:!1,lastDuration:0},m,o)),q=function(a){try{a.nodeName}catch(c){return null}var d=b.data(a,"mediaelement");return d&&"third"==d.isActive?d:null},r=function(b,c){c=a.Event(c),c.preventDefault(),a.event.trigger(c,e,b)},s=f.playerPath||b.cfg.basePath+"swf/"+(f.playerName||"JarisFLVPlayer.swf");b.extendUNDEFProp(f.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),b.extendUNDEFProp(f.vars,{controltype:"1",jsapi:"1"}),b.extendUNDEFProp(f.attrs,{bgcolor:"#000000"});var t=function(a,b){3>a&&clearTimeout(b._canplaythroughTimer),a>=3&&b.readyState<3&&(b.readyState=a,r(b._elem,"canplay"),b.paused||r(b._elem,"playing"),clearTimeout(b._canplaythroughTimer),b._canplaythroughTimer=setTimeout(function(){t(4,b)},4e3)),a>=4&&b.readyState<4&&(b.readyState=a,r(b._elem,"canplaythrough")),b.readyState=a},u=function(b){b.seeking&&Math.abs(b.currentTime-b._lastSeektime)<2&&(b.seeking=!1,a(b._elem).triggerHandler("seeked"))};g.jarisEvent={};var v,w={onPlayPause:function(a,b,c){var d,e;if(null==c)try{d=b.api.api_get("isPlaying")}catch(f){}else d=c;d==b.paused&&(b.paused=!d,e=b.paused?"pause":"play",b._ppFlag=!0,r(b._elem,e),b.readyState<3&&t(3,b),b.paused||r(b._elem,"playing"))},onSeek:function(b,c){c._lastSeektime=b.seekTime,c.seeking=!0,a(c._elem).triggerHandler("seeking"),clearTimeout(c._seekedTimer),c._seekedTimer=setTimeout(function(){u(c),c.seeking=!1},300)},onConnectionFailed:function(){b.error("media error")},onNotBuffering:function(a,b){t(3,b)},onDataInitialized:function(a,b){var c,d=b.duration;b.duration=a.duration,d==b.duration||isNaN(b.duration)||b._calledMeta&&(c=Math.abs(b.lastDuration-b.duration))<2||(b.videoHeight=a.height,b.videoWidth=a.width,b.networkState||(b.networkState=2),b.readyState<1&&t(1,b),clearTimeout(b._durationChangeTimer),b._calledMeta&&b.duration?b._durationChangeTimer=setTimeout(function(){b.lastDuration=b.duration,r(b._elem,"durationchange")},c>50?0:c>9?9:99):(b.lastDuration=b.duration,b.duration&&r(b._elem,"durationchange"),b._calledMeta||r(b._elem,"loadedmetadata")),b._calledMeta=!0)},onBuffering:function(a,b){b.ended&&(b.ended=!1),t(1,b),r(b._elem,"waiting")},onTimeUpdate:function(a,b){b.ended&&(b.ended=!1),b.readyState<3&&(t(3,b),r(b._elem,"playing")),b.seeking&&u(b),r(b._elem,"timeupdate")},onProgress:function(b,c){if(c.ended&&(c.ended=!1),c.duration&&!isNaN(c.duration)){var d=b.loaded/b.total;d>.02&&.2>d?t(3,c):d>.2&&(d>.99&&(c.networkState=1),t(4,c)),c._bufferedEnd&&c._bufferedEnd>d&&(c._bufferedStart=c.currentTime||0),c._bufferedEnd=d,c.buffered.length=1,a.event.trigger("progress",e,c._elem,!0)}},onPlaybackFinished:function(a,b){b.readyState<4&&t(4,b),b.ended=!0,r(b._elem,"ended")},onVolumeChange:function(a,b){(b.volume!=a.volume||b.muted!=a.mute)&&(b.volume=a.volume,b.muted=a.mute,r(b._elem,"volumechange"))},ready:function(){var c=function(a){var b=!0;try{a.api.api_get("volume")}catch(c){b=!1}return b};return function(d,e){var f=0,g=function(){return f>9?(e.tryedReframeing=0,void 0):(f++,e.tryedReframeing++,c(e)?(e.wasSwfReady=!0,e.tryedReframeing=0,y(e),x(e)):e.tryedReframeing<6?e.tryedReframeing<3?(e.reframeTimer=setTimeout(g,9),e.shadowElem.css({overflow:"visible"}),setTimeout(function(){e.shadowElem.css({overflow:"hidden"})},1)):(e.shadowElem.css({overflow:"hidden"}),a(e._elem).mediaLoad()):(clearTimeout(e.reframeTimer),b.error("reframing error")),void 0)};e&&e.api&&(e.tryedReframeing||(e.tryedReframeing=0),clearTimeout(v),clearTimeout(e.reframeTimer),e.shadowElem.removeClass("flashblocker-assumed"),f?e.reframeTimer=setTimeout(g,9):g())}}()};w.onMute=w.onVolumeChange;var x=function(a){var c,d=a.actionQueue.length,e=0;if(d&&"third"==a.isActive)for(;a.actionQueue.length&&d>e;){e++,c=a.actionQueue.shift();try{a.api[c.fn].apply(a.api,c.args)}catch(f){b.warn(f)}}a.actionQueue.length&&(a.actionQueue=[])},y=function(b){b&&((b._ppFlag===e&&a.prop(b._elem,"autoplay")||!b.paused)&&setTimeout(function(){if("third"==b.isActive&&(b._ppFlag===e||!b.paused))try{a(b._elem).play(),b._ppFlag=!0}catch(c){}},1),b.muted&&a.prop(b._elem,"muted",!0),1!=b.volume&&a.prop(b._elem,"volume",b.volume))},z=a.noop;if(i){var A={play:1,playing:1},B=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],C=B.map(function(a){return a+".webshimspolyfill"}).join(" "),D=function(c){var d=b.data(c.target,"mediaelement");if(d){var e=c.originalEvent&&c.originalEvent.type===c.type;e==("third"==d.activating)&&(c.stopImmediatePropagation(),A[c.type]&&(d.isActive!=d.activating?a(c.target).pause():e&&(a.prop(c.target,"pause")._supvalue||a.noop).apply(c.target)))}};z=function(c){a(c).off(C).on(C,D),B.forEach(function(a){b.moveToFirstEvent(c,a)})},z(d)}g.setActive=function(c,d,e){if(e||(e=b.data(c,"mediaelement")),e&&e.isActive!=d){"html5"!=d&&"third"!=d&&b.warn("wrong type for mediaelement activating: "+d);var f=b.data(c,"shadowData");e.activating=d,a(c).pause(),e.isActive=d,"third"==d?(f.shadowElement=f.shadowFocusElement=e.shadowElem[0],a(c).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(a(c).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),f.shadowElement=f.shadowFocusElement=!1),a(c).trigger("mediaelementapichange")}};var E=function(){var a=["_calledMeta","lastDuration","_bufferedEnd","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","seeking","videoHeight","videoWidth"],b=a.length;return function(c){if(c){clearTimeout(c._seekedTimer);var d=b,e=c.networkState;for(t(0,c),clearTimeout(c._durationChangeTimer);--d>-1;)delete c[a[d]];c.actionQueue=[],c.buffered.length=0,e&&r(c._elem,"emptied")}}}(),F=function(){var b={},e=function(c){var e,f,g;return b[c.currentSrc]?e=b[c.currentSrc]:c.videoHeight&&c.videoWidth?(b[c.currentSrc]={width:c.videoWidth,height:c.videoHeight},e=b[c.currentSrc]):(f=a.attr(c._elem,"poster"))&&(e=b[f],e||(g=d.createElement("img"),g.onload=function(){b[f]={width:this.width,height:this.height},b[f].height&&b[f].width?G(c,a.prop(c._elem,"controls")):delete b[f],g.onload=null},g.src=f,g.complete&&g.onload&&g.onload())),e||{width:300,height:"video"==c._elemNodeName?150:50}},f=function(a,b){return a.style[b]||a.currentStyle&&a.currentStyle[b]||c.getComputedStyle&&(c.getComputedStyle(a,null)||{})[b]||""},g=["minWidth","maxWidth","minHeight","maxHeight"],h=function(a,b){var c,d,e=!1;for(c=0;4>c;c++)d=f(a,g[c]),parseFloat(d,10)&&(e=!0,b[g[c]]=d);return e},i=function(b){var c,d,g=b._elem,i={width:"auto"==f(g,"width"),height:"auto"==f(g,"height")},j={width:!i.width&&a(g).width(),height:!i.height&&a(g).height()};return(i.width||i.height)&&(c=e(b),d=c.width/c.height,i.width&&i.height?(j.width=c.width,j.height=c.height):i.width?j.width=j.height*d:i.height&&(j.height=j.width/d),h(g,j)&&(b.shadowElem.css(j),i.width&&(j.width=b.shadowElem.height()*d),i.height&&(j.height=(i.width?j.width:b.shadowElem.width())/d),i.width&&i.height&&(b.shadowElem.css(j),j.height=b.shadowElem.width()/d,j.width=j.height*d,b.shadowElem.css(j),j.width=b.shadowElem.height()*d,j.height=j.width/d),Modernizr.video||(j.width=b.shadowElem.width(),j.height=b.shadowElem.height()))),j};return i}(),G=function(b,c){var d,e=b.shadowElem;a(b._elem)[c?"addClass":"removeClass"]("webshims-controls"),("third"==b.isActive||"third"==b.activating)&&("audio"!=b._elemNodeName||c?(b._elem.style.display="",d=F(b),b._elem.style.display="none",e.css(d)):e.css({width:0,height:0}))},H=function(){var b={"":1,auto:1};return function(c){var d=a.attr(c,"preload");return null==d||"none"==d||a.prop(c,"autoplay")?!1:(d=a.prop(c,"preload"),!!(b[d]||"metadata"==d&&a(c).is(".preload-in-doubt, video:not([poster])")))}}(),I={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},J=function(a){return a.replace?a.replace(I.A,"%26").replace(I.a,"%26").replace(I.e,"%3D").replace(I.q,"%3F"):a};if("matchMedia"in c){var K=!1;try{K=c.matchMedia("only all").matches}catch(L){}K&&(g.sortMedia=function(a,b){try{a=!a.media||matchMedia(a.media).matches,b=!b.media||matchMedia(b.media).matches}catch(c){return 0}return a==b?0:a?-1:1})}g.createSWF=function(c,e,l){if(!j)return setTimeout(function(){a(c).mediaLoad()},1),void 0;var m={};1>k?k=1:k++,l||(l=b.data(c,"mediaelement")),((m.height=a.attr(c,"height")||"")||(m.width=a.attr(c,"width")||""))&&(a(c).css(m),b.warn("width or height content attributes used. Webshims prefers the usage of CSS (computed styles or inline styles) to detect size of a video/audio. It's really more powerfull."));var n,o="audio/rtmp"==e.type||"video/rtmp"==e.type,q=a.extend({},f.vars,{poster:J(a.attr(c,"poster")&&a.prop(c,"poster")||""),source:J(e.streamId||e.srcProp),server:J(e.server||"")}),r=a(c).data("vars")||{},t=a.prop(c,"controls"),u="jarisplayer-"+b.getID(c),x=a.extend({},f.params,a(c).data("params")),y=c.nodeName.toLowerCase(),A=a.extend({},f.attrs,{name:u,id:u},a(c).data("attrs")),B=function(){"third"==l.isActive&&G(l,a.prop(c,"controls"))};return l&&l.swfCreated?(g.setActive(c,"third",l),l.currentSrc=e.srcProp,l.shadowElem.html('<div id="'+u+'">'),l.api=!1,l.actionQueue=[],n=l.shadowElem,E(l)):(a(d.getElementById("wrapper-"+u)).remove(),n=a('<div class="polyfill-'+y+' polyfill-mediaelement" id="wrapper-'+u+'"><div id="'+u+'"></div>').css({position:"relative",overflow:"hidden"}),l=b.data(c,"mediaelement",b.objectCreate(p,{actionQueue:{value:[]},shadowElem:{value:n},_elemNodeName:{value:y},_elem:{value:c},currentSrc:{value:e.srcProp},swfCreated:{value:!0},id:{value:u.replace(/-/g,"")},buffered:{value:{start:function(a){return a>=l.buffered.length?(b.error("buffered index size error"),void 0):0},end:function(a){return a>=l.buffered.length?(b.error("buffered index size error"),void 0):(l.duration-l._bufferedStart)*l._bufferedEnd+l._bufferedStart},length:0}}})),n.insertBefore(c),i&&a.extend(l,{volume:a.prop(c,"volume"),muted:a.prop(c,"muted")}),b.addShadowDom(c,n),b.data(c,"mediaelement")||b.data(c,"mediaelement",l),z(c),g.setActive(c,"third",l),G(l,t),a(c).on({"updatemediaelementdimensions loadedmetadata emptied":B,remove:function(a){!a.originalEvent&&g.jarisEvent[l.id]&&g.jarisEvent[l.id].elem==c&&(delete g.jarisEvent[l.id],clearTimeout(v),clearTimeout(l.flashBlock))}}).onWSOff("updateshadowdom",B)),g.jarisEvent[l.id]&&g.jarisEvent[l.id].elem!=c?(b.error("something went wrong"),void 0):(g.jarisEvent[l.id]||(g.jarisEvent[l.id]=function(a){if("ready"==a.type){var b=function(){l.api&&(H(c)&&l.api.api_preload(),w.ready(a,l))};l.api?b():setTimeout(b,9)}else l.currentTime=a.position,l.api&&(!l._calledMeta&&isNaN(a.duration)&&l.duration!=a.duration&&isNaN(l.duration)&&w.onDataInitialized(a,l),l._ppFlag||"onPlayPause"==a.type||w.onPlayPause(a,l),w[a.type]&&w[a.type](a,l)),l.duration=a.duration},g.jarisEvent[l.id].elem=c),a.extend(q,{id:u,evtId:l.id,controls:""+t,autostart:"false",nodename:y},r),o?q.streamtype="rtmp":"audio/mpeg"==e.type||"audio/mp3"==e.type?(q.type="audio",q.streamtype="file"):"video/youtube"==e.type&&(q.streamtype="youtube"),f.changeSWF(q,c,e,l,"embed"),clearTimeout(l.flashBlock),h.embedSWF(s,u,"100%","100%","9.0.115",!1,q,x,A,function(d){if(d.success){var e=function(){(!d.ref.parentNode&&n[0].parentNode||"none"==d.ref.style.display)&&(n.addClass("flashblocker-assumed"),a(c).trigger("flashblocker"),b.warn("flashblocker assumed")),a(d.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})};l.api=d.ref,t||a(d.ref).attr("tabindex","-1").css("outline","none"),l.flashBlock=setTimeout(e,99),v||(clearTimeout(v),v=setTimeout(function(){e();var c=a(d.ref);c[0].offsetWidth>1&&c[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?b.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(c[0].offsetWidth<2||c[0].offsetHeight<2)&&b.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),c=null},8e3))}}),void 0)};var M=function(a,b,c,d){return d=d||q(a),d?(d.api&&d.api[b]?d.api[b].apply(d.api,c||[]):(d.actionQueue.push({fn:b,args:c}),d.actionQueue.length>10&&setTimeout(function(){d.actionQueue.length>5&&d.actionQueue.shift()},99)),d):!1};if(["audio","video"].forEach(function(c){var d,e={},f=function(a){("audio"!=c||"videoHeight"!=a&&"videoWidth"!=a)&&(e[a]={get:function(){var b=q(this);return b?b[a]:i&&d[a].prop._supget?d[a].prop._supget.apply(this):p[a]},writeable:!1})},g=function(a,b){f(a),delete e[a].writeable,e[a].set=b};g("seeking"),g("volume",function(a){var c=q(this);if(c)a*=1,isNaN(a)||((0>a||a>1)&&b.error("volume greater or less than allowed "+a/100),M(this,"api_volume",[a],c),c.volume!=a&&(c.volume=a,r(c._elem,"volumechange")),c=null);else if(d.volume.prop._supset)return d.volume.prop._supset.apply(this,arguments)}),g("muted",function(a){var b=q(this);if(b)a=!!a,M(this,"api_muted",[a],b),b.muted!=a&&(b.muted=a,r(b._elem,"volumechange")),b=null;else if(d.muted.prop._supset)return d.muted.prop._supset.apply(this,arguments)}),g("currentTime",function(a){var b=q(this);if(b)a*=1,isNaN(a)||M(this,"api_seek",[a],b);else if(d.currentTime.prop._supset)return d.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(a){e[a]={value:function(){var b=q(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),M(this,"play"==a?"api_play":"api_pause",[],b),b._ppFlag=!0,b.paused!=("play"!=a)&&(b.paused="play"!=a,r(b._elem,a));else if(d[a].prop._supvalue)return d[a].prop._supvalue.apply(this,arguments)}}}),n.forEach(f),b.onNodeNamesPropertyModify(c,"controls",function(b,d){var e=q(this);a(this)[d?"addClass":"removeClass"]("webshims-controls"),e&&("audio"==c&&G(e,d),M(this,"api_controls",[d],e))}),b.onNodeNamesPropertyModify(c,"preload",function(){var c,d,e;H(this)&&(c=q(this),c?M(this,"api_preload",[],c):!l||!this.paused||this.error||a.data(this,"mediaerror")||this.readyState||this.networkState||this.autoplay||!a(this).is(":not(.nonnative-api-active)")||(e=this,d=b.data(e,"mediaelementBase")||b.data(e,"mediaelementBase",{}),clearTimeout(d.loadTimer),d.loadTimer=setTimeout(function(){a(e).mediaLoad()},9)))}),d=b.defineNodeNameProperties(c,e,"prop"),Modernizr.mediaDefaultMuted||b.defineNodeNameProperties(c,{defaultMuted:{get:function(){return null!=a.attr(this,"muted")},set:function(b){b?a.attr(this,"muted",""):a(this).removeAttr("muted")}}},"prop")}),j&&a.cleanData){var N=a.cleanData,O={object:1,OBJECT:1};a.cleanData=function(a){var b,c;if(a&&(c=a.length)&&k)for(b=0;c>b;b++)if(O[a[b].nodeName]&&"api_pause"in a[b]){k--;try{a[b].api_pause()}catch(d){}}return N.apply(this,arguments)}}i?"media"in d.createElement("source")||b.reflectProperties("source",["media"]):(["poster","src"].forEach(function(a){b.defineNodeNamesProperty("src"==a?["audio","video","source"]:["video"],a,{reflect:!0,propType:"src"})}),b.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),b.reflectProperties("source",["type","media"]),["autoplay","controls"].forEach(function(a){b.defineNodeNamesBooleanProperty(["audio","video"],a)}),b.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop")),f.experimentallyMimetypeCheck&&!function(){var b=a.fn.addBack?"addBack":"andSelf",c=function(){var c,d="media/unknown please provide mime type",e=a(this),f=[];e.not(".ws-after-check").find("source")[b]().filter("[data-wsrecheckmimetype]:not([type])").each(function(){var b=a(this).removeAttr("data-wsrecheckmimetype"),e=function(){b.attr("data-type",d)};try{f.push(a.ajax({type:"head",url:a.attr(this,"src"),success:function(a,e,f){var g=f.getResponseHeader("Content-Type");g&&(c=!0),b.attr("data-type",g||d)},error:e}))}catch(g){e()}}),f.length&&(e.addClass("ws-after-check"),a.when.apply(a,f).always(function(){e.mediaLoad(),setTimeout(function(){e.removeClass("ws-after-check")},9)}))};a("audio.media-error, video.media-error").each(c),a(d).on("mediaerror",function(a){c.call(a.target)})}()}),webshims.register("track",function(a,b,c,d){"use strict";var e=b.mediaelement,f=((new Date).getTime(),a.fn.addBack?"addBack":"andSelf",{subtitles:1,captions:1,descriptions:1}),g=a("<track />"),h=Modernizr.ES5&&Modernizr.objectAccessor,i=function(a){var c={};return a.addEventListener=function(a,d){c[a]&&b.error("always use $.on to the shimed event: "+a+" already bound fn was: "+c[a]+" your fn was: "+d),c[a]=d},a.removeEventListener=function(a,d){c[a]&&c[a]!=d&&b.error("always use $.on/$.off to the shimed event: "+a+" already bound fn was: "+c[a]+" your fn was: "+d),c[a]&&delete c[a]},a},j={getCueById:function(a){for(var b=null,c=0,d=this.length;d>c;c++)if(this[c].id===a){b=this[c];break}return b}},k={0:"disabled",1:"hidden",2:"showing"},l={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",id:"",mode:"disabled",oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(a){if(this.cues){var c=this.cues[this.cues.length-1];c&&c.startTime>a.startTime&&b.error("cue startTime higher than previous cue's startTime")}else this.cues=e.createCueList();a.track&&a.track.removeCue&&a.track.removeCue(a),a.track=this,this.cues.push(a)},removeCue:function(a){var c=this.cues||[],d=0,e=c.length;if(a.track!=this)return b.error("cue not part of track"),void 0;for(;e>d;d++)if(c[d]===a){c.splice(d,1),a.track=null;break}return a.track?(b.error("cue not part of track"),void 0):void 0}},m=["kind","label","srclang"],n={srclang:"language"},o=Function.prototype.call.bind(Object.prototype.hasOwnProperty),p=function(c,d){var e,f,g=[],h=[],i=[];if(c||(c=b.data(this,"mediaelementBase")||b.data(this,"mediaelementBase",{})),d||(c.blockTrackListUpdate=!0,d=a.prop(this,"textTracks"),c.blockTrackListUpdate=!1),clearTimeout(c.updateTrackListTimer),a("track",this).each(function(){var b=a.prop(this,"track");i.push(b),-1==d.indexOf(b)&&h.push(b)}),c.scriptedTextTracks)for(e=0,f=c.scriptedTextTracks.length;f>e;e++)i.push(c.scriptedTextTracks[e]),-1==d.indexOf(c.scriptedTextTracks[e])&&h.push(c.scriptedTextTracks[e]);for(e=0,f=d.length;f>e;e++)-1==i.indexOf(d[e])&&g.push(d[e]);if(g.length||h.length){for(d.splice(0),e=0,f=i.length;f>e;e++)d.push(i[e]);for(e=0,f=g.length;f>e;e++)a([d]).triggerHandler(a.Event({type:"removetrack",track:g[e]}));for(e=0,f=h.length;f>e;e++)a([d]).triggerHandler(a.Event({type:"addtrack",track:h[e]}));(c.scriptedTextTracks||g.length)&&a(this).triggerHandler("updatetrackdisplay")}},q=function(c,d){d||(d=b.data(c,"trackData")),d&&!d.isTriggering&&(d.isTriggering=!0,setTimeout(function(){a(c).closest("audio, video").triggerHandler("updatetrackdisplay"),d.isTriggering=!1},1))},r=function(){var c={subtitles:{subtitles:1,captions:1},descriptions:{descriptions:1},chapters:{chapters:1}};return c.captions=c.subtitles,function(d){var e,f,g=a.prop(d,"default");return g&&"metadata"!=(e=a.prop(d,"kind"))&&(f=a(d).parent().find("track[default]").filter(function(){return!!c[e][a.prop(this,"kind")]})[0],f!=d&&(g=!1,b.error("more than one default track of a specific kind detected. Fall back to default = false"))),g}}(),s=a("<div />")[0],t=function(a,c,d){3!=arguments.length&&b.error("wrong arguments.length for TextTrackCue.constructor"),this.startTime=a,this.endTime=c,this.text=d,i(this)};t.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var a,b="",c="",f=d.createDocumentFragment();return o(this,"getCueAsHTML")||(a=this.getCueAsHTML=function(){var a,d;if(b!=this.text)for(b=this.text,c=e.parseCueTextToHTML(b),s.innerHTML=c,a=0,d=s.childNodes.length;d>a;a++)f.appendChild(s.childNodes[a].cloneNode(!0));return f.cloneNode(!0)}),a?a.apply(this,arguments):f.cloneNode(!0)},track:null,id:""},c.TextTrackCue=t,e.createCueList=function(){return a.extend([],j)},e.parseCueTextToHTML=function(){var a=/(<\/?[^>]+>)/gi,b=/^(?:c|v|ruby|rt|b|i|u)/,c=/\<\s*\//,d=function(a,b,d,e){var f;return c.test(e)?f="</"+a+">":(d.splice(0,1),f="<"+a+" "+b+'="'+d.join(" ").replace(/\"/g,"&#34;")+'">'),f},e=function(a){var c=a.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return c[0]&&(c[0]=c[0].toLowerCase(),b.test(c[0])?"c"==c[0]?a=d("span","class",c,a):"v"==c[0]&&(a=d("q","title",c,a)):a=""),a};return function(b){return b.replace(a,e)}}(),e.loadTextTrack=function(c,d,g,h){var i="play playing updatetrackdisplay",j=g.track,k=function(){var f,h,l,m;if("disabled"!=j.mode&&a.attr(d,"src")&&(l=a.prop(d,"src"))&&(a(c).off(i,k),!g.readyState)){f=function(){g.readyState=3,j.cues=null,j.activeCues=j.shimActiveCues=j._shimActiveCues=null,a(d).triggerHandler("error")},g.readyState=1;try{j.cues=e.createCueList(),j.activeCues=j.shimActiveCues=j._shimActiveCues=e.createCueList(),m=function(){h=a.ajax({dataType:"text",url:l,success:function(i){"text/vtt"!=h.getResponseHeader("content-type")&&b.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),e.parseCaptions(i,j,function(b){b&&"length"in b?(g.readyState=2,a(d).triggerHandler("load"),a(c).triggerHandler("updatetrackdisplay")):f()})},error:f})},a.ajax?m():(b.ready("$ajax",m),b.loader.loadList(["$ajax"]))}catch(n){f(),b.error(n)}}};g.readyState=0,j.shimActiveCues=null,j._shimActiveCues=null,j.activeCues=null,j.cues=null,a(c).off(i,k),a(c).on(i,k),h&&(j.mode=f[j.kind]?"showing":"hidden",k())},e.createTextTrack=function(c,d){var f,g;return d.nodeName&&(g=b.data(d,"trackData"),g&&(q(d,g),f=g.track)),f||(f=i(b.objectCreate(l)),h||m.forEach(function(b){var c=a.prop(d,b);c&&(f[n[b]||b]=c)}),d.nodeName?(h&&m.forEach(function(c){b.defineProperty(f,n[c]||c,{get:function(){return a.prop(d,c)}})}),f.id=a(d).prop("id"),g=b.data(d,"trackData",{track:f}),e.loadTextTrack(c,d,g,r(d))):(h&&m.forEach(function(a){b.defineProperty(f,n[a]||a,{value:d[a],writeable:!1})}),f.cues=e.createCueList(),f.activeCues=f._shimActiveCues=f.shimActiveCues=e.createCueList(),f.mode="hidden",f.readyState=2),"subtitles"!=f.kind||f.language||b.error("you must provide a language for track in subtitles state"),f.__wsmode=f.mode),f},e.parseCaptionChunk=function(){var a=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,c=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,d=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,e=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(f){var g,h,i,j,k,l,m,n,o,p;if(n=c.exec(f))return null;if(n=d.exec(f))return null;if(n=e.exec(f))return null;for(g=f.split(/\n/g);!g[0].replace(/\s+/gi,"").length&&g.length>0;)g.shift();for(g[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(m=String(g.shift().replace(/\s*/gi,""))),l=0;l<g.length;l++){var q=g[l];(o=a.exec(q))&&(k=o.slice(1),h=parseInt(60*(k[0]||0)*60,10)+parseInt(60*(k[1]||0),10)+parseInt(k[2]||0,10)+parseFloat("0."+(k[3]||0)),i=parseInt(60*(k[4]||0)*60,10)+parseInt(60*(k[5]||0),10)+parseInt(k[6]||0,10)+parseFloat("0."+(k[7]||0))),g=g.slice(0,l).concat(g.slice(l+1));break}return h||i?(j=g.join("\n"),p=new t(h,i,j),m&&(p.id=m),p):(b.warn("couldn't extract time information: "+[h,i,g.join("\n"),m].join(" ; ")),null)}}(),e.parseCaptions=function(a,c,d){{var f,g,h,i,j;e.createCueList()}a?(h=/^WEBVTT(\s*FILE)?/gi,g=function(k,l){for(;l>k;k++){if(f=a[k],h.test(f))j=!0;else if(f.replace(/\s*/gi,"").length){if(!j){b.error("please use WebVTT format. This is the standard"),d(null);break}f=e.parseCaptionChunk(f,k),f&&c.addCue(f)}if(i<(new Date).getTime()-30){k++,setTimeout(function(){i=(new Date).getTime(),g(k,l)},90);break}}k>=l&&(j||b.error("please use WebVTT format. This is the standard"),d(c.cues))},a=a.replace(/\r\n/g,"\n"),setTimeout(function(){a=a.replace(/\r/g,"\n"),setTimeout(function(){i=(new Date).getTime(),a=a.split(/\n\n+/g),g(0,a.length)},9)},9)):b.error("Required parameter captionData not supplied.")},e.createTrackList=function(c,d){return d=d||b.data(c,"mediaelementBase")||b.data(c,"mediaelementBase",{}),d.textTracks||(d.textTracks=[],b.defineProperties(d.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null},onchange:{value:null},getTrackById:{value:function(a){for(var b=null,c=0;c<d.textTracks.length;c++)if(a==d.textTracks[c].id){b=d.textTracks[c];break}return b}}}),i(d.textTracks),a(c).on("updatetrackdisplay",function(){for(var b,c=0;c<d.textTracks.length;c++)b=d.textTracks[c],b.__wsmode!=b.mode&&(b.__wsmode=b.mode,a([d.textTracks]).triggerHandler("change"))})),d.textTracks},Modernizr.track||(b.defineNodeNamesBooleanProperty(["track"],"default"),b.reflectProperties(["track"],["srclang","label"]),b.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),b.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(a){var c=b.data(this,"trackData");this.setAttribute("data-kind",a),c&&(c.attrKind=a)},get:function(){var a=b.data(this,"trackData");return a&&"attrKind"in a?a.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),a.each(m,function(c,d){var e=n[d]||d;b.onNodeNamesPropertyModify("track",d,function(){var c=b.data(this,"trackData");c&&("kind"==d&&q(this,c),h||(c.track[e]=a.prop(this,d)))})}),b.onNodeNamesPropertyModify("track","src",function(c){if(c){var d,f=b.data(this,"trackData");f&&(d=a(this).closest("video, audio"),d[0]&&e.loadTextTrack(d,this,f))}}),b.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(b.data(this,"trackData")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return e.createTextTrack(a(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),b.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var a=this,c=b.data(a,"mediaelementBase")||b.data(a,"mediaelementBase",{}),d=e.createTrackList(a,c);return c.blockTrackListUpdate||p.call(a,c,d),d},writeable:!1},addTextTrack:{value:function(a,c,d){var f=e.createTextTrack(this,{kind:g.prop("kind",a||"").prop("kind"),label:c||"",srclang:d||""}),h=b.data(this,"mediaelementBase")||b.data(this,"mediaelementBase",{});return h.scriptedTextTracks||(h.scriptedTextTracks=[]),h.scriptedTextTracks.push(f),p.call(this),f}}},"prop");var u=function(c){if(a(c.target).is("audio, video")){var d=b.data(c.target,"mediaelementBase");
d&&(clearTimeout(d.updateTrackListTimer),d.updateTrackListTimer=setTimeout(function(){p.call(c.target,d)},0))}},v=function(a,b){return b.readyState||a.readyState},w=function(a){a.originalEvent&&a.stopImmediatePropagation()},x=function(){if(b.implement(this,"track")){var c,d,e=a.prop(this,"track"),f=this.track;f&&(c=a.prop(this,"kind"),d=v(this,f),(f.mode||d)&&(e.mode=k[f.mode]||f.mode),"descriptions"!=c&&(f.mode="string"==typeof f.mode?"disabled":0,this.kind="metadata",a(this).attr({kind:c}))),a(this).on("load error",w)}};b.addReady(function(c,d){var e=d.filter("video, audio, track").closest("audio, video");a("video, audio",c).add(e).each(function(){p.call(this)}).on("emptied updatetracklist wsmediareload",u).each(function(){if(Modernizr.track){var c=a.prop(this,"textTracks"),d=this.textTracks;c.length!=d.length&&b.error("textTracks couldn't be copied"),a("track",this).each(x)}}),e.each(function(){var a=this,c=b.data(a,"mediaelementBase");c&&(clearTimeout(c.updateTrackListTimer),c.updateTrackListTimer=setTimeout(function(){p.call(a,c)},9))})}),Modernizr.texttrackapi&&a("video, audio").trigger("trackapichange")});