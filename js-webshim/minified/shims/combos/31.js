!function(a){"use strict";var b=window.webshims;if(!b.defineProperties){var c="defineProperty",d=Object.prototype.hasOwnProperty,e=["configurable","enumerable","writable"],f=function(a){for(var b=0;3>b;b++)void 0!==a[e[b]]||"writable"===e[b]&&void 0===a.value||(a[e[b]]=!0)},g=function(a){if(a)for(var b in a)d.call(a,b)&&f(a[b])};Object.create&&(b.objectCreate=function(b,c,d){g(c);var e=Object.create(b,c);return d&&(e.options=a.extend(!0,{},e.options||{},d),d=e.options),e._create&&a.isFunction(e._create)&&e._create(d),e}),Object[c]&&(b[c]=function(a,b,d){return f(d),Object[c](a,b,d)}),Object.defineProperties&&(b.defineProperties=function(a,b){return g(b),Object.defineProperties(a,b)}),b.getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,b.getPrototypeOf=Object.getPrototypeOf}}(window.webshims.$),webshims.register("dom-extend",function(a,b,c,d,e){"use strict";function f(c,d,e){var f=a.clone(c,d,!1);return a(f.querySelectorAll("."+b.shadowClass)).detach(),e?(t++,a(f.querySelectorAll("[id]")).prop("id",function(a,b){return b+t})):a(f.querySelectorAll('audio[id^="ID-"], video[id^="ID-"], label[id^="ID-"]')).removeAttr("id"),f}var g=!("hrefNormalized"in a.support)||a.support.hrefNormalized,h=!("getSetAttribute"in a.support)||a.support.getSetAttribute,i=Object.prototype.hasOwnProperty;if(b.assumeARIA=h||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==a('<input type="email" />').attr("type")||""===a("<form />").attr("novalidate")||"required"in a("<input />")[0].attributes)&&b.error("IE browser modes are busted in IE10+. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),"debug"in b&&b.error('Use webshims.setOptions("debug", true||false||"noCombo"); to debug flag'),!b.cfg.no$Switch){var j=function(){if(!c.jQuery||c.$&&c.jQuery!=c.$||c.jQuery.webshims||(b.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),c.$&&(c.$=b.$),c.jQuery=b.$),b.M!=Modernizr){b.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var a in Modernizr)a in b.M||(b.M[a]=Modernizr[a]);Modernizr=b.M}};j(),setTimeout(j,90),b.ready("DOM",j),a(j),b.ready("WINDOWLOAD",j)}var k=(b.modules,/\s*,\s*/),l={},m={},n={},o={},p={},q={},r=a.fn.val,s=function(b,c,d,e,f){return f?r.call(a(b)):r.call(a(b),d)};a.widget||!function(){var b=a.cleanData;a.cleanData=function(c){if(!a.widget)for(var d,e=0;null!=(d=c[e]);e++)try{a(d).triggerHandler("remove")}catch(f){}b(c)}}(),a.fn.val=function(b){var c=this[0];if(arguments.length&&null==b&&(b=""),!arguments.length)return c&&1===c.nodeType?a.prop(c,"value",b,"val",!0):r.call(this);if(a.isArray(b))return r.apply(this,arguments);var d=a.isFunction(b);return this.each(function(f){if(c=this,1===c.nodeType)if(d){var g=b.call(c,f,a.prop(c,"value",e,"val",!0));null==g&&(g=""),a.prop(c,"value",g,"val")}else a.prop(c,"value",b,"val")})},a.fn.onTrigger=function(a,b){return this.on(a,b).each(b)},a.fn.onWSOff=function(b,c,e,f){return f||(f=d),a(f)[e?"onTrigger":"on"](b,c),this.on("remove",function(d){d.originalEvent||a(f).off(b,c)}),this};var t=0,u="_webshims"+Math.round(1e3*Math.random()),v=function(b,c,d){if(b=b.jquery?b[0]:b,!b)return d||{};var f=a.data(b,u);return d!==e&&(f||(f=a.data(b,u,{})),c&&(f[c]=d)),c?f&&f[c]:f};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){a.fn[b.name]=function(){var c=[];return this.each(function(){var d=v(this,"shadowData"),e=d&&d[b.prop]||this;-1==a.inArray(e,c)&&c.push(e)}),this.pushStack(c)}}),a.fn.clonePolyfill=function(b,c){return b=b||!1,this.map(function(){var e=f(this,b,c);return setTimeout(function(){a.contains(d.body,e)&&a(e).updatePolyfill()}),e})},b.cfg.extendNative||b.cfg.noTriggerOverride||!function(b){a.event.trigger=function(c,d,e,f){if(!n[c]||f||!e||1!==e.nodeType)return b.apply(this,arguments);var g,h,j,k=e[c],l=a.prop(e,c),m=l&&k!=l;return m&&(j="__ws"+c,h=c in e&&i.call(e,c),e[c]=l,e[j]=k),g=b.apply(this,arguments),m&&(h?e[c]=k:delete e[c],delete e[j]),g}}(a.event.trigger),["removeAttr","prop","attr"].forEach(function(c){l[c]=a[c],a[c]=function(b,d,f,g,h){var i="val"==g,j=i?s:l[c];if(!b||!m[d]||1!==b.nodeType||!i&&g&&"attr"==c&&a.attrFn[d])return j(b,d,f,g,h);var k,n,p,r=(b.nodeName||"").toLowerCase(),t=o[r],u="attr"!=c||f!==!1&&null!==f?c:"removeAttr";if(t||(t=o["*"]),t&&(t=t[d]),t&&(k=t[u]),k){if("value"==d&&(n=k.isVal,k.isVal=i),"removeAttr"===u)return k.value.call(b);if(f===e)return k.get?k.get.call(b):k.value;k.set&&("attr"==c&&f===!0&&(f=d),p=k.set.call(b,f)),"value"==d&&(k.isVal=n)}else p=j(b,d,f,g,h);if((f!==e||"removeAttr"===u)&&q[r]&&q[r][d]){var v;v="removeAttr"==u?!1:"prop"==u?!!f:!0,q[r][d].forEach(function(a){(!a.only||(a.only="prop"&&"prop"==c)||"attr"==a.only&&"prop"!=c)&&a.call(b,f,v,i?"val":u,c)})}return p},p[c]=function(a,d,f){o[a]||(o[a]={}),o[a][d]||(o[a][d]={});var g=o[a][d][c],h=function(a,b,e){var g;return b&&b[a]?b[a]:e&&e[a]?e[a]:"prop"==c&&"value"==d?function(a){var b=this;return f.isVal?s(b,d,a,!1,0===arguments.length):l[c](b,d,a)}:"prop"==c&&"value"==a&&f.value.apply?(g="__ws"+d,n[d]=!0,function(){var a=this[g]||l[c](this,d);return a&&a.apply&&(a=a.apply(this,arguments)),a}):function(a){return l[c](this,d,a)}};o[a][d][c]=f,f.value===e&&(f.set||(f.set=f.writeable?h("set",f,g):b.cfg.useStrict&&"prop"==d?function(){throw d+" is readonly on "+a}:function(){b.info(d+" is readonly on "+a)}),f.get||(f.get=h("get",f,g))),["value","get","set"].forEach(function(a){f[a]&&(f["_sup"+a]=h(a,g))})}});var w=function(){var a=b.getPrototypeOf(d.createElement("foobar")),c=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(e,f,g){var h,j;if(!(c&&(h=d.createElement(e))&&(j=b.getPrototypeOf(h))&&a!==j)||h[f]&&i.call(h,f))g._supvalue=function(){var a=v(this,"propValue");return a&&a[f]&&a[f].apply?a[f].apply(this,arguments):a&&a[f]},x.extendValue(e,f,g.value);else{var k=h[f];g._supvalue=function(){return k&&k.apply?k.apply(this,arguments):k},j[f]=g.value}g.value._supvalue=g._supvalue}}(),x=function(){var c={};b.addReady(function(d,e){var f={},g=function(b){f[b]||(f[b]=a(d.getElementsByTagName(b)),e[0]&&a.nodeName(e[0],b)&&(f[b]=f[b].add(e)))};a.each(c,function(a,c){return g(a),c&&c.forEach?void c.forEach(function(b){f[a].each(b)}):void b.warn("Error: with "+a+"-property. methods: "+c)}),f=null});var e,f=a([]),g=function(b,f){c[b]?c[b].push(f):c[b]=[f],a.isDOMReady&&(e||a(d.getElementsByTagName(b))).each(f)};return{createTmpCache:function(b){return a.isDOMReady&&(e=e||a(d.getElementsByTagName(b))),e||f},flushTmpCache:function(){e=null},content:function(b,c){g(b,function(){var b=a.attr(this,c);null!=b&&a.attr(this,c,b)})},createElement:function(a,b){g(a,b)},extendValue:function(b,c,d){g(b,function(){a(this).each(function(){var a=v(this,"propValue",{});a[c]=this[c],this[c]=d})})}}}(),y=function(a,b){a.defaultValue===e&&(a.defaultValue=""),a.removeAttr||(a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue),a.removeAttr._supvalue.call(this)}}),a.attr||(a.attr={})};a.extend(b,{getID:function(){var b=(new Date).getTime();return function(c){c=a(c);var d=c.prop("id");return d||(b++,d="ID-"+b,c.eq(0).prop("id",d)),d}}(),shadowClass:"wsshadow-"+Date.now(),implement:function(a,c){var d=v(a,"implemented")||v(a,"implemented",{});return d[c]?(b.warn(c+" already implemented for element #"+a.id),!1):(d[c]=!0,!0)},extendUNDEFProp:function(b,c){a.each(c,function(a,c){a in b||(b[a]=c)})},getOptions:function(){var c=/\-([a-z])/g,d={},e={},f=function(a,b){return b.toLowerCase()},g=function(a,b){return b.toUpperCase()};return function(h,i,j,k){e[i]?i=e[i]:(e[i]=i.replace(c,g),i=e[i]);var l,m=v(h,"cfg"+i),n={};if(m)return m;if(m=a(h).data(),m&&"string"==typeof m[i]){if(k)return v(h,"cfg"+i,m[i]);b.error("data-"+i+" attribute has to be a valid JSON, was: "+m[i])}j?Array.isArray(j)?j.unshift(!0,{}):j=[!0,{},j]:j=[!0,{}],m&&"object"==typeof m[i]&&j.push(m[i]),d[i]||(d[i]=new RegExp("^"+i+"([A-Z])"));for(l in m)d[i].test(l)&&(n[l.replace(d[i],f)]=m[l]);return j.push(n),v(h,"cfg"+i,a.extend.apply(a,j))}}(),createPropDefault:y,data:v,moveToFirstEvent:function(b,c,d){var e,f=(a._data(b,"events")||{})[c];f&&f.length>1&&(e=f.pop(),d||(d="bind"),"bind"==d&&f.delegateCount?f.splice(f.delegateCount,0,e):f.unshift(e)),b=null},addShadowDom:function(){var e,f,g,h=a(c),i={init:!1,runs:0,test:function(){var a=i.getHeight(),b=i.getWidth();a!=i.height||b!=i.width?(i.height=a,i.width=b,i.handler({type:"docresize"}),i.runs++,i.runs<9&&setTimeout(i.test,90)):i.runs=0},handler:function(){var b=function(){a(d).triggerHandler("updateshadowdom")};return function(a){clearTimeout(e),e=setTimeout(function(){if("resize"==a.type){var d=h.width(),e=h.width();if(e==f&&d==g)return;f=e,g=d,i.height=i.getHeight(),i.width=i.getWidth()}c.requestAnimationFrame?requestAnimationFrame(b):setTimeout(b,0)},"resize"!=a.type||c.requestAnimationFrame?9:50)}}(),_create:function(){a.each({Height:"getHeight",Width:"getWidth"},function(a,b){var c=d.body,e=d.documentElement;i[b]=function(){return Math.max(c["scroll"+a],e["scroll"+a],c["offset"+a],e["offset"+a],e["client"+a])}})},start:function(){!this.init&&d.body&&(this.init=!0,this._create(),this.height=i.getHeight(),this.width=i.getWidth(),setInterval(this.test,999),a(this.test),null==a.support.boxSizing&&a(function(){a.support.boxSizing&&i.handler({type:"boxsizing"})}),b.ready("WINDOWLOAD",this.test),a(d).on("updatelayout.webshim pageinit popupafteropen panelbeforeopen tabsactivate collapsibleexpand shown.bs.modal shown.bs.collapse slid.bs.carousel",this.handler),a(c).on("resize",this.handler))}};return b.docObserve=function(){b.ready("DOM",function(){i.start()})},function(c,d,e){if(c&&d){e=e||{},c.jquery&&(c=c[0]),d.jquery&&(d=d[0]);var f=a.data(c,u)||a.data(c,u,{}),g=a.data(d,u)||a.data(d,u,{}),h={};e.shadowFocusElement?e.shadowFocusElement&&(e.shadowFocusElement.jquery&&(e.shadowFocusElement=e.shadowFocusElement[0]),h=a.data(e.shadowFocusElement,u)||a.data(e.shadowFocusElement,u,h)):e.shadowFocusElement=d,a(c).on("remove",function(b){b.originalEvent||setTimeout(function(){a(d).remove()},4)}),f.hasShadow=d,h.nativeElement=g.nativeElement=c,h.shadowData=g.shadowData=f.shadowData={nativeElement:c,shadowElement:d,shadowFocusElement:e.shadowFocusElement},e.shadowChilds&&e.shadowChilds.each(function(){v(this,"shadowData",g.shadowData)}),e.data&&(h.shadowData.data=g.shadowData.data=f.shadowData.data=e.data),e=null}b.docObserve()}}(),propTypes:{standard:function(a){y(a),a.prop||(a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}})},"boolean":function(a){y(a),a.prop||(a.prop={set:function(b){b?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}})},src:function(){var b=d.createElement("a");return b.style.display="none",function(c,d){y(c),c.prop||(c.prop={set:function(a){c.attr.set.call(this,a)},get:function(){var c,e=this.getAttribute(d);if(null==e)return"";if(b.setAttribute("href",e+""),!g){try{a(b).insertAfter(this),c=b.getAttribute("href",4)}catch(f){c=b.getAttribute("href",4)}a(b).detach()}return c||b.href}})}}(),enumarated:function(a){y(a),a.prop||(a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var b=(a.attr.get.call(this)||"").toLowerCase();return b&&-1!=a.limitedTo.indexOf(b)||(b=a.defaultValue),b}})}},reflectProperties:function(c,d){"string"==typeof d&&(d=d.split(k)),d.forEach(function(d){b.defineNodeNamesProperty(c,d,{prop:{set:function(b){a.attr(this,d,b)},get:function(){return a.attr(this,d)||""}}})})},defineNodeNameProperty:function(c,d,e){return m[d]=!0,e.reflect&&(e.propType&&!b.propTypes[e.propType]?b.error("could not finde propType "+e.propType):b.propTypes[e.propType||"standard"](e,d)),["prop","attr","removeAttr"].forEach(function(f){var g=e[f];g&&(g="prop"===f?a.extend({writeable:!0},g):a.extend({},g,{writeable:!0}),p[f](c,d,g),"*"!=c&&b.cfg.extendNative&&"prop"==f&&g.value&&a.isFunction(g.value)&&w(c,d,g),e[f]=g)}),e.initAttr&&x.content(c,d),e},defineNodeNameProperties:function(a,c,d,e){for(var f in c)!e&&c[f].initAttr&&x.createTmpCache(a),d&&(c[f][d]||(c[f][d]={},["value","set","get"].forEach(function(a){a in c[f]&&(c[f][d][a]=c[f][a],delete c[f][a])}))),c[f]=b.defineNodeNameProperty(a,f,c[f]);return e||x.flushTmpCache(),c},createElement:function(c,d,e){var f;return a.isFunction(d)&&(d={after:d}),x.createTmpCache(c),d.before&&x.createElement(c,d.before),e&&(f=b.defineNodeNameProperties(c,e,!1,!0)),d.after&&x.createElement(c,d.after),x.flushTmpCache(),f},onNodeNamesPropertyModify:function(b,c,d,e){"string"==typeof b&&(b=b.split(k)),a.isFunction(d)&&(d={set:d}),b.forEach(function(a){q[a]||(q[a]={}),"string"==typeof c&&(c=c.split(k)),d.initAttr&&x.createTmpCache(a),c.forEach(function(b){q[a][b]||(q[a][b]=[],m[b]=!0),d.set&&(e&&(d.set.only=e),q[a][b].push(d.set)),d.initAttr&&x.content(a,b)}),x.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,d,f){f||(f={}),a.isFunction(f)&&(f.set=f),b.defineNodeNamesProperty(c,d,{attr:{set:function(a){f.useContentAttribute?b.contentAttr(this,d,a):this.setAttribute(d,a),f.set&&f.set.call(this,!0)},get:function(){var a=f.useContentAttribute?b.contentAttr(this,d):this.getAttribute(d);return null==a?e:d}},removeAttr:{value:function(){this.removeAttribute(d),f.set&&f.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:f.initAttr||!1})},contentAttr:function(a,b,c){if(a.nodeName){var d;return c===e?(d=a.attributes[b]||{},c=d.specified?d.value:null,null==c?e:c):void("boolean"==typeof c?c?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,c))}},activeLang:function(){var c=[],d=[],e={},f=function(d,f,h){f._isLoading=!0,e[d]?e[d].push(f):(e[d]=[f],b.loader.loadScript(d,function(){h==c.join()&&a.each(e[d],function(a,b){g(b)}),delete e[d]}))},g=function(b){var d=b.__active,e=function(a,d){return b._isLoading=!1,b[d]||-1!=b.availableLangs.indexOf(d)?(b[d]?(b.__active=b[d],b.__activeName=d):f(b.langSrc+d,b,c.join()),!1):void 0};a.each(c,e),b.__active||(b.__active=b[""],b.__activeName=""),d!=b.__active&&a(b).trigger("change")};return function(a){var b;if("string"==typeof a)c[0]!=a&&(c=[a],b=c[0].split("-")[0],b&&b!=a&&c.push(b),d.forEach(g));else if("object"==typeof a)return a.__active||(d.push(a),g(a)),a.__active;return c[0]}}()}),a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,c){b[a]=function(a,d,e,f){"string"==typeof a&&(a=a.split(k));var g={};return a.forEach(function(a){g[a]=b[c](a,d,e,f)}),g}}),b.isReady("webshimLocalization",!0),function(){if(!("content"in d.createElement("template")||(a(function(){var c=a("main").attr({role:"main"});c.length>1?b.error("only one main element allowed in document"):c.is("article *, section *")&&b.error("main not allowed inside of article/section elements")}),"hidden"in d.createElement("a")))){b.defineNodeNamesBooleanProperty(["*"],"hidden");var c={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},e=function(a,b){var c=a.getAttribute("role");c||a.setAttribute("role",b)};a.webshims.addReady(function(b,f){if(a.each(c,function(c,d){for(var g=a(c,b).add(f.filter(c)),h=0,i=g.length;i>h;h++)e(g[h],d)}),b===d){var g=d.getElementsByTagName("header")[0],h=d.getElementsByTagName("footer"),i=h.length;if(g&&!a(g).closest("section, article")[0]&&e(g,"banner"),!i)return;var j=h[i-1];a(j).closest("section, article")[0]||e(j,"contentinfo")}})}}()}),webshims.register("form-core",function(a,b,c,d,e,f){"use strict";b.capturingEventPrevented=function(b){if(!b._isPolyfilled){var c=b.isDefaultPrevented,d=b.preventDefault;b.preventDefault=function(){return clearTimeout(a.data(b.target,b.type+"DefaultPrevented")),a.data(b.target,b.type+"DefaultPrevented",setTimeout(function(){a.removeData(b.target,b.type+"DefaultPrevented")},30)),d.apply(this,arguments)},b.isDefaultPrevented=function(){return!(!c.apply(this,arguments)&&!a.data(b.target,b.type+"DefaultPrevented"))},b._isPolyfilled=!0}},Modernizr.formvalidation&&!b.bugs.bustedValidity&&b.capturingEvents(["invalid"],!0);var g=b.modules,h=function(b){return(a.prop(b,"validity")||{valid:1}).valid},i=function(){var c=["form-validation"];f.lazyCustomMessages&&(f.customMessages=!0,c.push("form-message")),b._getAutoEnhance(f.customDatalist)&&(f.fD=!0,c.push("form-datalist")),f.addValidators&&c.push("form-validators"),b.reTest(c),a(d).off(".lazyloadvalidation")},j=function(){var c,e,f=a.expr[":"],g=/^(?:form|fieldset)$/i,i=function(b){var c=!1;return a(b).jProp("elements").each(function(){return!g.test(this.nodeName||"")&&(c=f.invalid(this))?!1:void 0}),c};if(a.extend(f,{"valid-element":function(b){return g.test(b.nodeName||"")?!i(b):!(!a.prop(b,"willValidate")||!h(b))},"invalid-element":function(b){return g.test(b.nodeName||"")?i(b):!(!a.prop(b,"willValidate")||h(b))},"required-element":function(b){return!(!a.prop(b,"willValidate")||!a.prop(b,"required"))},"user-error":function(b){return a.prop(b,"willValidate")&&a(b).hasClass("user-error")},"optional-element":function(b){return!(!a.prop(b,"willValidate")||a.prop(b,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(b){f[b]=a.expr[":"][b+"-element"]}),Modernizr.fieldsetdisabled&&!a('<fieldset disabled=""><input /><input /></fieldset>').find(":disabled").filter(":disabled").is(":disabled")&&(c=a.find.matches,e={":disabled":1,":enabled":1},a.find.matches=function(a,b){return e[a]?c.call(this,"*"+a,b):c.apply(this,arguments)},a.extend(f,{enabled:function(b){return b.disabled===!1&&!a(b).is("fieldset[disabled] *")},disabled:function(b){return b.disabled===!0||"disabled"in b&&a(b).is("fieldset[disabled] *")}})),"unknown"==typeof d.activeElement){var j=f.focus;f.focus=function(){try{return j.apply(this,arguments)}catch(a){b.error(a)}return!1}}},k={noAutoCallback:!0,options:f},l=b.loader.addModule,m=function(a,c,d){i(),b.ready("form-validation",function(){a[c].apply(a,d)})},n="transitionDelay"in d.documentElement.style?"":" no-transition",o=b.cfg.wspopover;l("form-validation",a.extend({d:["form-message"]},k)),l("form-validators",a.extend({},k)),a.expr.filters?j():b.ready("sizzle",j),b.triggerInlineForm=function(b,c){a(b).trigger(c)},o.position||o.position===!1||(o.position={at:"left bottom",my:"left top",collision:"fit flip"}),b.wsPopover={id:0,_create:function(){this.options=a.extend(!0,{},o,this.options),this.id=b.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=a('<div class="ws-popover'+n+'" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=a(".ws-po-box",this.element),this.lastElement=a([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(a){this.contentElement.html(a)},bindElement:function(){var a=this,b=function(){a.stopBlur=!1};this.preventBlur=function(){a.stopBlur=!0,clearTimeout(a.timers.stopBlur),a.timers.stopBlur=setTimeout(b,9)},this.element.on({mousedown:this.preventBlur})},show:function(){m(this,"show",arguments)}},b.validityAlert={showFor:function(){m(this,"showFor",arguments)}},b.getContentValidationMessage=function(c,d,e){var f;b.errorbox&&b.errorbox.initIvalContentMessage&&b.errorbox.initIvalContentMessage(c);var g=(b.getOptions&&b.errorbox?b.getOptions(c,"errormessage",!1,!0):a(c).data("errormessage"))||c.getAttribute("x-moz-errormessage")||"";return e&&g[e]?g=g[e]:g&&(d=d||a.prop(c,"validity")||{valid:1},d.valid&&(g="")),"object"==typeof g&&(d=d||a.prop(c,"validity")||{valid:1},d.customError&&(f=a.data(c,"customMismatchedRule"))&&g[f]&&"string"==typeof g[f]?g=g[f]:d.valid||(a.each(d,function(a,b){return b&&"valid"!=a&&g[a]?(g=g[a],!1):void 0}),"object"==typeof g&&(d.typeMismatch&&g.badInput&&(g=g.badInput),d.badInput&&g.typeMismatch&&(g=g.typeMismatch)))),"object"==typeof g&&(g=g.defaultMessage),b.replaceValidationplaceholder&&(g=b.replaceValidationplaceholder(c,g)),g||""},a.fn.getErrorMessage=function(c){var d="",e=this[0];return e&&(d=b.getContentValidationMessage(e,!1,c)||a.prop(e,"customValidationMessage")||a.prop(e,"validationMessage")),d},a.event.special.valuevalidation={setup:function(){b.error("valuevalidation was renamed to validatevalue!")}},a.event.special.validatevalue={setup:function(){var b=a(this).data()||a.data(this,{});"validatevalue"in b||(b.validatevalue=!0)}},a(d).on("focusin.lazyloadvalidation",function(a){"form"in a.target&&i()}),b.ready("WINDOWLOAD",i),g["form-number-date-ui"].loaded&&!f.customMessages&&(g["form-number-date-api"].test()||Modernizr.inputtypes.range&&Modernizr.inputtypes.color)&&b.isReady("form-number-date-ui",!0)}),webshims.register("form-datalist",function(a,b,c,d,e,f){"use strict";var g=function(a){a&&"string"==typeof a||(a="DOM"),g[a+"Loaded"]||(g[a+"Loaded"]=!0,b.ready(a,function(){b.loader.loadList(["form-datalist-lazy"])}))},h={submit:1,button:1,reset:1,hidden:1,range:1,date:1,month:1};b.modules["form-number-date-ui"].loaded&&a.extend(h,{number:1,time:1}),b.propTypes.element=function(c,e){b.createPropDefault(c,"attr"),c.prop||(c.prop={get:function(){var b=a.attr(this,e);return b&&(b=d.getElementById(b),b&&c.propNodeName&&!a.nodeName(b,c.propNodeName)&&(b=null)),b||null},writeable:!1})},function(){var i=a.webshims.cfg.forms,j=Modernizr.input.list;if(!j||i.customDatalist){var k=function(){var c=function(){var b;!a.data(this,"datalistWidgetData")&&(b=a.prop(this,"id"))?a('input[list="'+b+'"], input[data-wslist="'+b+'"]').eq(0).attr("list",b):a(this).triggerHandler("updateDatalist")},d={autocomplete:{attr:{get:function(){var b=this,c=a.data(b,"datalistWidget");return c?c._autocomplete:"autocomplete"in b?b.autocomplete:b.getAttribute("autocomplete")},set:function(b){var c=this,d=a.data(c,"datalistWidget");d?(d._autocomplete=b,"off"==b&&d.hideList()):"autocomplete"in c?c.autocomplete=b:c.setAttribute("autocomplete",b)}}}};j?((a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var c=this,d=a("select",c);d[0]&&d[0].options&&d[0].options.length&&(b=d[0].options)}return b}}}),d.list={attr:{get:function(){var c=b.contentAttr(this,"list");return null!=c?(a.data(this,"datalistListAttr",c),h[a.prop(this,"type")]||h[a.attr(this,"type")]||this.removeAttribute("list")):c=a.data(this,"datalistListAttr"),null==c?e:c},set:function(c){var d=this;a.data(d,"datalistListAttr",c),h[a.prop(this,"type")]||h[a.attr(this,"type")]?d.setAttribute("list",c):(b.objectCreate(l,e,{input:d,id:c,datalist:a.prop(d,"list")}),d.setAttribute("data-wslist",c)),a(d).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}):b.defineNodeNameProperties("input",{list:{attr:{get:function(){var a=b.contentAttr(this,"list");return null==a?e:a},set:function(c){var d=this;b.contentAttr(d,"list",c),b.objectCreate(f.shadowListProto,e,{input:d,id:c,datalist:a.prop(d,"list")}),a(d).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}}),b.defineNodeNameProperties("input",d),b.addReady(function(a,b){b.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").each(c)})},l={_create:function(d){if(!h[a.prop(d.input,"type")]&&!h[a.attr(d.input,"type")]){var e=d.datalist,f=a.data(d.input,"datalistWidget"),i=this;return e&&f&&f.datalist!==e?(f.datalist=e,f.id=d.id,a(f.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",a.proxy(f,"_resetListCached")),void f._resetListCached()):e?void(f&&f.datalist===e||(this.datalist=e,this.id=d.id,this.hasViewableData=!0,this._autocomplete=a.attr(d.input,"autocomplete"),a.data(d.input,"datalistWidget",this),a.data(e,"datalistWidgetData",this),g("WINDOWLOAD"),b.isReady("form-datalist-lazy")?c.QUnit?i._lazyCreate(d):setTimeout(function(){i._lazyCreate(d)},9):(a(d.input).one("focus",g),b.ready("form-datalist-lazy",function(){i._destroyed||i._lazyCreate(d)})))):void(f&&f.destroy())}},destroy:function(b){var f,g=a.attr(this.input,"autocomplete");a(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),a(d).off(".datalist"+this.id),a(c).off(".datalist"+this.id),this.input.form&&this.input.id&&a(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),g===e?this.input.removeAttribute("autocomplete"):a(this.input).attr("autocomplete",g),b&&"beforeunload"==b.type&&(f=this.input,setTimeout(function(){a.attr(f,"list",a.attr(f,"list"))},9)),this._destroyed=!0}};b.loader.addModule("form-datalist-lazy",{noAutoCallback:!0,options:a.extend(f,{shadowListProto:l})}),f.list||(f.list={}),k()}}()});