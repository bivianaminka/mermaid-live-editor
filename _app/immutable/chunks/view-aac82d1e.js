import{S as et,i as ot,s as nt,a as it,k as D,c as st,l as T,m as V,h as P,n as A,U as C,b as O,G as Y,J as q,F as U,o as rt,q as at,r as lt,u as ut,a1 as ht,K as W}from"./index-85b2c4b8.js";import{y as R,s as G,h as X,z as F,w as ct,b as pt}from"./state-fb63bb04.js";var ft=function(){var t="",e,o,n,s=[],i={passive:!0};window.addEventListener?(e="addEventListener",o="removeEventListener"):(e="attachEvent",o="detachEvent",t="on"),n="onwheel"in document.createElement("div")?"wheel":document.onmousewheel!==void 0?"mousewheel":"DOMMouseScroll";function r(c,a){var d=function(f){!f&&(f=window.event);var v={originalEvent:f,target:f.target||f.srcElement,type:"wheel",deltaMode:f.type=="MozMousePixelScroll"?0:1,deltaX:0,delatZ:0,preventDefault:function(){f.preventDefault?f.preventDefault():f.returnValue=!1}};return n=="mousewheel"?(v.deltaY=-.025*f.wheelDelta,f.wheelDeltaX&&(v.deltaX=-.025*f.wheelDeltaX)):v.deltaY=f.detail,a(v)};return s.push({element:c,fn:d}),d}function h(c){for(var a=0;a<s.length;a++)if(s[a].element===c)return s[a].fn;return function(){}}function m(c){for(var a=0;a<s.length;a++)if(s[a].element===c)return s.splice(a,1)}function w(c,a,d,f){var v;n==="wheel"?v=d:v=r(c,d),c[e](t+a,v,f?i:!1)}function y(c,a,d,f){var v;n==="wheel"?v=d:v=h(c),c[o](t+a,v,f?i:!1),m(c)}function x(c,a,d){w(c,n,a,d),n=="DOMMouseScroll"&&w(c,"MozMousePixelScroll",a,d)}function N(c,a,d){y(c,n,a,d),n=="DOMMouseScroll"&&y(c,"MozMousePixelScroll",a,d)}return{on:x,off:N}}(),_={extend:function(t,e){t=t||{};for(var o in e)this.isObject(e[o])?t[o]=this.extend(t[o],e[o]):t[o]=e[o];return t},isElement:function(t){return t instanceof HTMLElement||t instanceof SVGElement||t instanceof SVGSVGElement||t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"},isObject:function(t){return Object.prototype.toString.call(t)==="[object Object]"},isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},getSvg:function(t){var e,o;if(this.isElement(t))e=t;else if(typeof t=="string"||t instanceof String){if(e=document.querySelector(t),!e)throw new Error("Provided selector did not find any elements. Selector: "+t)}else throw new Error("Provided selector is not an HTML object nor String");if(e.tagName.toLowerCase()==="svg")o=e;else if(e.tagName.toLowerCase()==="object")o=e.contentDocument.documentElement;else if(e.tagName.toLowerCase()==="embed")o=e.getSVGDocument().documentElement;else throw e.tagName.toLowerCase()==="img"?new Error('Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.'):new Error("Cannot get SVG.");return o},proxy:function(t,e){return function(){return t.apply(e,arguments)}},getType:function(t){return Object.prototype.toString.apply(t).replace(/^\[object\s/,"").replace(/\]$/,"")},mouseAndTouchNormalize:function(t,e){if(t.clientX===void 0||t.clientX===null)if(t.clientX=0,t.clientY=0,t.touches!==void 0&&t.touches.length){if(t.touches[0].clientX!==void 0)t.clientX=t.touches[0].clientX,t.clientY=t.touches[0].clientY;else if(t.touches[0].pageX!==void 0){var o=e.getBoundingClientRect();t.clientX=t.touches[0].pageX-o.left,t.clientY=t.touches[0].pageY-o.top}}else t.originalEvent!==void 0&&t.originalEvent.clientX!==void 0&&(t.clientX=t.originalEvent.clientX,t.clientY=t.originalEvent.clientY)},isDblClick:function(t,e){if(t.detail===2)return!0;if(e!=null){var o=t.timeStamp-e.timeStamp,n=Math.sqrt(Math.pow(t.clientX-e.clientX,2)+Math.pow(t.clientY-e.clientY,2));return o<250&&n<10}return!1},now:Date.now||function(){return new Date().getTime()},throttle:function(t,e,o){var n=this,s,i,r,h=null,m=0;o||(o={});var w=function(){m=o.leading===!1?0:n.now(),h=null,r=t.apply(s,i),h||(s=i=null)};return function(){var y=n.now();!m&&o.leading===!1&&(m=y);var x=e-(y-m);return s=this,i=arguments,x<=0||x>e?(clearTimeout(h),h=null,m=y,r=t.apply(s,i),h||(s=i=null)):!h&&o.trailing!==!1&&(h=setTimeout(w,x)),r}},createRequestAnimationFrame:function(t){var e=null;return t!=="auto"&&t<60&&t>1&&(e=Math.floor(1e3/t)),e===null?window.requestAnimationFrame||H(33):H(e)}};function H(t){return function(e){window.setTimeout(e,t)}}var I=_,J="unknown";document.documentMode&&(J="ie");var k={svgNS:"http://www.w3.org/2000/svg",xmlNS:"http://www.w3.org/XML/1998/namespace",xmlnsNS:"http://www.w3.org/2000/xmlns/",xlinkNS:"http://www.w3.org/1999/xlink",evNS:"http://www.w3.org/2001/xml-events",getBoundingClientRectNormalized:function(t){if(t.clientWidth&&t.clientHeight)return{width:t.clientWidth,height:t.clientHeight};if(t.getBoundingClientRect())return t.getBoundingClientRect();throw new Error("Cannot get BoundingClientRect for SVG.")},getOrCreateViewport:function(t,e){var o=null;if(I.isElement(e)?o=e:o=t.querySelector(e),!o){var n=Array.prototype.slice.call(t.childNodes||t.children).filter(function(m){return m.nodeName!=="defs"&&m.nodeName!=="#text"});n.length===1&&n[0].nodeName==="g"&&n[0].getAttribute("transform")===null&&(o=n[0])}if(!o){var s="viewport-"+new Date().toISOString().replace(/\D/g,"");o=document.createElementNS(this.svgNS,"g"),o.setAttribute("id",s);var i=t.childNodes||t.children;if(!!i&&i.length>0)for(var r=i.length;r>0;r--)i[i.length-r].nodeName!=="defs"&&o.appendChild(i[i.length-r]);t.appendChild(o)}var h=[];return o.getAttribute("class")&&(h=o.getAttribute("class").split(" ")),~h.indexOf("svg-pan-zoom_viewport")||(h.push("svg-pan-zoom_viewport"),o.setAttribute("class",h.join(" "))),o},setupSvgAttributes:function(t){if(t.setAttribute("xmlns",this.svgNS),t.setAttributeNS(this.xmlnsNS,"xmlns:xlink",this.xlinkNS),t.setAttributeNS(this.xmlnsNS,"xmlns:ev",this.evNS),t.parentNode!==null){var e=t.getAttribute("style")||"";e.toLowerCase().indexOf("overflow")===-1&&t.setAttribute("style","overflow: hidden; "+e)}},internetExplorerRedisplayInterval:300,refreshDefsGlobal:I.throttle(function(){for(var t=document.querySelectorAll("defs"),e=t.length,o=0;o<e;o++){var n=t[o];n.parentNode.insertBefore(n,n)}},R?R.internetExplorerRedisplayInterval:null),setCTM:function(t,e,o){var n=this,s="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")";t.setAttributeNS(null,"transform",s),"transform"in t.style?t.style.transform=s:"-ms-transform"in t.style?t.style["-ms-transform"]=s:"-webkit-transform"in t.style&&(t.style["-webkit-transform"]=s),J==="ie"&&!!o&&(o.parentNode.insertBefore(o,o),window.setTimeout(function(){n.refreshDefsGlobal()},n.internetExplorerRedisplayInterval))},getEventPoint:function(t,e){var o=e.createSVGPoint();return I.mouseAndTouchNormalize(t,e),o.x=t.clientX,o.y=t.clientY,o},getSvgCenterPoint:function(t,e,o){return this.createSVGPoint(t,e/2,o/2)},createSVGPoint:function(t,e,o){var n=t.createSVGPoint();return n.x=e,n.y=o,n}},g=k,mt={enable:function(t){var e=t.svg.querySelector("defs");e||(e=document.createElementNS(g.svgNS,"defs"),t.svg.appendChild(e));var o=e.querySelector("style#svg-pan-zoom-controls-styles");if(!o){var n=document.createElementNS(g.svgNS,"style");n.setAttribute("id","svg-pan-zoom-controls-styles"),n.setAttribute("type","text/css"),n.textContent=".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }",e.appendChild(n)}var s=document.createElementNS(g.svgNS,"g");s.setAttribute("id","svg-pan-zoom-controls"),s.setAttribute("transform","translate("+(t.width-70)+" "+(t.height-76)+") scale(0.75)"),s.setAttribute("class","svg-pan-zoom-control"),s.appendChild(this._createZoomIn(t)),s.appendChild(this._createZoomReset(t)),s.appendChild(this._createZoomOut(t)),t.svg.appendChild(s),t.controlIcons=s},_createZoomIn:function(t){var e=document.createElementNS(g.svgNS,"g");e.setAttribute("id","svg-pan-zoom-zoom-in"),e.setAttribute("transform","translate(30.5 5) scale(0.015)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().zoomIn()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().zoomIn()},!1);var o=document.createElementNS(g.svgNS,"rect");o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("width","1500"),o.setAttribute("height","1400"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var n=document.createElementNS(g.svgNS,"path");return n.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"),n.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(n),e},_createZoomReset:function(t){var e=document.createElementNS(g.svgNS,"g");e.setAttribute("id","svg-pan-zoom-reset-pan-zoom"),e.setAttribute("transform","translate(5 35) scale(0.4)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().reset()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().reset()},!1);var o=document.createElementNS(g.svgNS,"rect");o.setAttribute("x","2"),o.setAttribute("y","2"),o.setAttribute("width","182"),o.setAttribute("height","58"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var n=document.createElementNS(g.svgNS,"path");n.setAttribute("d","M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"),n.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(n);var s=document.createElementNS(g.svgNS,"path");return s.setAttribute("d","M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"),s.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(s),e},_createZoomOut:function(t){var e=document.createElementNS(g.svgNS,"g");e.setAttribute("id","svg-pan-zoom-zoom-out"),e.setAttribute("transform","translate(30.5 70) scale(0.015)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().zoomOut()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().zoomOut()},!1);var o=document.createElementNS(g.svgNS,"rect");o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("width","1500"),o.setAttribute("height","1400"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var n=document.createElementNS(g.svgNS,"path");return n.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"),n.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(n),e},disable:function(t){t.controlIcons&&(t.controlIcons.parentNode.removeChild(t.controlIcons),t.controlIcons=null)}},dt=k,M=_,p=function(t,e){this.init(t,e)};p.prototype.init=function(t,e){this.viewport=t,this.options=e,this.originalState={zoom:1,x:0,y:0},this.activeState={zoom:1,x:0,y:0},this.updateCTMCached=M.proxy(this.updateCTM,this),this.requestAnimationFrame=M.createRequestAnimationFrame(this.options.refreshRate),this.viewBox={x:0,y:0,width:0,height:0},this.cacheViewBox();var o=this.processCTM();this.setCTM(o),this.updateCTM()};p.prototype.cacheViewBox=function(){var t=this.options.svg.getAttribute("viewBox");if(t){var e=t.split(/[\s\,]/).filter(function(n){return n}).map(parseFloat);this.viewBox.x=e[0],this.viewBox.y=e[1],this.viewBox.width=e[2],this.viewBox.height=e[3];var o=Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height);this.activeState.zoom=o,this.activeState.x=(this.options.width-this.viewBox.width*o)/2,this.activeState.y=(this.options.height-this.viewBox.height*o)/2,this.updateCTMOnNextFrame(),this.options.svg.removeAttribute("viewBox")}else this.simpleViewBoxCache()};p.prototype.simpleViewBoxCache=function(){var t=this.viewport.getBBox();this.viewBox.x=t.x,this.viewBox.y=t.y,this.viewBox.width=t.width,this.viewBox.height=t.height};p.prototype.getViewBox=function(){return M.extend({},this.viewBox)};p.prototype.processCTM=function(){var t=this.getCTM();if(this.options.fit||this.options.contain){var e;this.options.fit?e=Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height):e=Math.max(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height),t.a=e,t.d=e,t.e=-this.viewBox.x*e,t.f=-this.viewBox.y*e}if(this.options.center){var o=(this.options.width-(this.viewBox.width+this.viewBox.x*2)*t.a)*.5,n=(this.options.height-(this.viewBox.height+this.viewBox.y*2)*t.a)*.5;t.e=o,t.f=n}return this.originalState.zoom=t.a,this.originalState.x=t.e,this.originalState.y=t.f,t};p.prototype.getOriginalState=function(){return M.extend({},this.originalState)};p.prototype.getState=function(){return M.extend({},this.activeState)};p.prototype.getZoom=function(){return this.activeState.zoom};p.prototype.getRelativeZoom=function(){return this.activeState.zoom/this.originalState.zoom};p.prototype.computeRelativeZoom=function(t){return t/this.originalState.zoom};p.prototype.getPan=function(){return{x:this.activeState.x,y:this.activeState.y}};p.prototype.getCTM=function(){var t=this.options.svg.createSVGMatrix();return t.a=this.activeState.zoom,t.b=0,t.c=0,t.d=this.activeState.zoom,t.e=this.activeState.x,t.f=this.activeState.y,t};p.prototype.setCTM=function(t){var e=this.isZoomDifferent(t),o=this.isPanDifferent(t);if(e||o){if(e&&(this.options.beforeZoom(this.getRelativeZoom(),this.computeRelativeZoom(t.a))===!1?(t.a=t.d=this.activeState.zoom,e=!1):(this.updateCache(t),this.options.onZoom(this.getRelativeZoom()))),o){var n=this.options.beforePan(this.getPan(),{x:t.e,y:t.f}),s=!1,i=!1;n===!1?(t.e=this.getPan().x,t.f=this.getPan().y,s=i=!0):M.isObject(n)&&(n.x===!1?(t.e=this.getPan().x,s=!0):M.isNumber(n.x)&&(t.e=n.x),n.y===!1?(t.f=this.getPan().y,i=!0):M.isNumber(n.y)&&(t.f=n.y)),s&&i||!this.isPanDifferent(t)?o=!1:(this.updateCache(t),this.options.onPan(this.getPan()))}(e||o)&&this.updateCTMOnNextFrame()}};p.prototype.isZoomDifferent=function(t){return this.activeState.zoom!==t.a};p.prototype.isPanDifferent=function(t){return this.activeState.x!==t.e||this.activeState.y!==t.f};p.prototype.updateCache=function(t){this.activeState.zoom=t.a,this.activeState.x=t.e,this.activeState.y=t.f};p.prototype.pendingUpdate=!1;p.prototype.updateCTMOnNextFrame=function(){this.pendingUpdate||(this.pendingUpdate=!0,this.requestAnimationFrame.call(window,this.updateCTMCached))};p.prototype.updateCTM=function(){var t=this.getCTM();dt.setCTM(this.viewport,t,this.defs),this.pendingUpdate=!1,this.options.onUpdatedCTM&&this.options.onUpdatedCTM(t)};var vt=function(t,e){return new p(t,e)},K=ft,L=mt,b=_,S=k,gt=vt,u=function(t,e){this.init(t,e)},bt={viewportSelector:".svg-pan-zoom_viewport",panEnabled:!0,controlIconsEnabled:!1,zoomEnabled:!0,dblClickZoomEnabled:!0,mouseWheelZoomEnabled:!0,preventMouseEventsDefault:!0,zoomScaleSensitivity:.1,minZoom:.5,maxZoom:10,fit:!0,contain:!1,center:!0,refreshRate:"auto",beforeZoom:null,onZoom:null,beforePan:null,onPan:null,customEventsHandler:null,eventsListenerElement:null,onUpdatedCTM:null},Q={passive:!0};u.prototype.init=function(t,e){var o=this;this.svg=t,this.defs=t.querySelector("defs"),S.setupSvgAttributes(this.svg),this.options=b.extend(b.extend({},bt),e),this.state="none";var n=S.getBoundingClientRectNormalized(t);this.width=n.width,this.height=n.height,this.viewport=gt(S.getOrCreateViewport(this.svg,this.options.viewportSelector),{svg:this.svg,width:this.width,height:this.height,fit:this.options.fit,contain:this.options.contain,center:this.options.center,refreshRate:this.options.refreshRate,beforeZoom:function(i,r){if(o.viewport&&o.options.beforeZoom)return o.options.beforeZoom(i,r)},onZoom:function(i){if(o.viewport&&o.options.onZoom)return o.options.onZoom(i)},beforePan:function(i,r){if(o.viewport&&o.options.beforePan)return o.options.beforePan(i,r)},onPan:function(i){if(o.viewport&&o.options.onPan)return o.options.onPan(i)},onUpdatedCTM:function(i){if(o.viewport&&o.options.onUpdatedCTM)return o.options.onUpdatedCTM(i)}});var s=this.getPublicInstance();s.setBeforeZoom(this.options.beforeZoom),s.setOnZoom(this.options.onZoom),s.setBeforePan(this.options.beforePan),s.setOnPan(this.options.onPan),s.setOnUpdatedCTM(this.options.onUpdatedCTM),this.options.controlIconsEnabled&&L.enable(this),this.lastMouseWheelEventTime=Date.now(),this.setupHandlers()};u.prototype.setupHandlers=function(){var t=this,e=null;if(this.eventListeners={mousedown:function(i){var r=t.handleMouseDown(i,e);return e=i,r},touchstart:function(i){var r=t.handleMouseDown(i,e);return e=i,r},mouseup:function(i){return t.handleMouseUp(i)},touchend:function(i){return t.handleMouseUp(i)},mousemove:function(i){return t.handleMouseMove(i)},touchmove:function(i){return t.handleMouseMove(i)},mouseleave:function(i){return t.handleMouseUp(i)},touchleave:function(i){return t.handleMouseUp(i)},touchcancel:function(i){return t.handleMouseUp(i)}},this.options.customEventsHandler!=null){this.options.customEventsHandler.init({svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,instance:this.getPublicInstance()});var o=this.options.customEventsHandler.haltEventListeners;if(o&&o.length)for(var n=o.length-1;n>=0;n--)this.eventListeners.hasOwnProperty(o[n])&&delete this.eventListeners[o[n]]}for(var s in this.eventListeners)(this.options.eventsListenerElement||this.svg).addEventListener(s,this.eventListeners[s],this.options.preventMouseEventsDefault?!1:Q);this.options.mouseWheelZoomEnabled&&(this.options.mouseWheelZoomEnabled=!1,this.enableMouseWheelZoom())};u.prototype.enableMouseWheelZoom=function(){if(!this.options.mouseWheelZoomEnabled){var t=this;this.wheelListener=function(o){return t.handleMouseWheel(o)};var e=!this.options.preventMouseEventsDefault;K.on(this.options.eventsListenerElement||this.svg,this.wheelListener,e),this.options.mouseWheelZoomEnabled=!0}};u.prototype.disableMouseWheelZoom=function(){if(this.options.mouseWheelZoomEnabled){var t=!this.options.preventMouseEventsDefault;K.off(this.options.eventsListenerElement||this.svg,this.wheelListener,t),this.options.mouseWheelZoomEnabled=!1}};u.prototype.handleMouseWheel=function(t){if(!(!this.options.zoomEnabled||this.state!=="none")){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1);var e=t.deltaY||1,o=Date.now()-this.lastMouseWheelEventTime,n=3+Math.max(0,30-o);this.lastMouseWheelEventTime=Date.now(),"deltaMode"in t&&t.deltaMode===0&&t.wheelDelta&&(e=t.deltaY===0?0:Math.abs(t.wheelDelta)/t.deltaY),e=-.3<e&&e<.3?e:(e>0?1:-1)*Math.log(Math.abs(e)+10)/n;var s=this.svg.getScreenCTM().inverse(),i=S.getEventPoint(t,this.svg).matrixTransform(s),r=Math.pow(1+this.options.zoomScaleSensitivity,-1*e);this.zoomAtPoint(r,i)}};u.prototype.zoomAtPoint=function(t,e,o){var n=this.viewport.getOriginalState();o?(t=Math.max(this.options.minZoom*n.zoom,Math.min(this.options.maxZoom*n.zoom,t)),t=t/this.getZoom()):this.getZoom()*t<this.options.minZoom*n.zoom?t=this.options.minZoom*n.zoom/this.getZoom():this.getZoom()*t>this.options.maxZoom*n.zoom&&(t=this.options.maxZoom*n.zoom/this.getZoom());var s=this.viewport.getCTM(),i=e.matrixTransform(s.inverse()),r=this.svg.createSVGMatrix().translate(i.x,i.y).scale(t).translate(-i.x,-i.y),h=s.multiply(r);h.a!==s.a&&this.viewport.setCTM(h)};u.prototype.zoom=function(t,e){this.zoomAtPoint(t,S.getSvgCenterPoint(this.svg,this.width,this.height),e)};u.prototype.publicZoom=function(t,e){e&&(t=this.computeFromRelativeZoom(t)),this.zoom(t,e)};u.prototype.publicZoomAtPoint=function(t,e,o){if(o&&(t=this.computeFromRelativeZoom(t)),b.getType(e)!=="SVGPoint")if("x"in e&&"y"in e)e=S.createSVGPoint(this.svg,e.x,e.y);else throw new Error("Given point is invalid");this.zoomAtPoint(t,e,o)};u.prototype.getZoom=function(){return this.viewport.getZoom()};u.prototype.getRelativeZoom=function(){return this.viewport.getRelativeZoom()};u.prototype.computeFromRelativeZoom=function(t){return t*this.viewport.getOriginalState().zoom};u.prototype.resetZoom=function(){var t=this.viewport.getOriginalState();this.zoom(t.zoom,!0)};u.prototype.resetPan=function(){this.pan(this.viewport.getOriginalState())};u.prototype.reset=function(){this.resetZoom(),this.resetPan()};u.prototype.handleDblClick=function(t){if(this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),this.options.controlIconsEnabled){var e=t.target.getAttribute("class")||"";if(e.indexOf("svg-pan-zoom-control")>-1)return!1}var o;t.shiftKey?o=1/((1+this.options.zoomScaleSensitivity)*2):o=(1+this.options.zoomScaleSensitivity)*2;var n=S.getEventPoint(t,this.svg).matrixTransform(this.svg.getScreenCTM().inverse());this.zoomAtPoint(o,n)};u.prototype.handleMouseDown=function(t,e){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),b.mouseAndTouchNormalize(t,this.svg),this.options.dblClickZoomEnabled&&b.isDblClick(t,e)?this.handleDblClick(t):(this.state="pan",this.firstEventCTM=this.viewport.getCTM(),this.stateOrigin=S.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()))};u.prototype.handleMouseMove=function(t){if(this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),this.state==="pan"&&this.options.panEnabled){var e=S.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()),o=this.firstEventCTM.translate(e.x-this.stateOrigin.x,e.y-this.stateOrigin.y);this.viewport.setCTM(o)}};u.prototype.handleMouseUp=function(t){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),this.state==="pan"&&(this.state="none")};u.prototype.fit=function(){var t=this.viewport.getViewBox(),e=Math.min(this.width/t.width,this.height/t.height);this.zoom(e,!0)};u.prototype.contain=function(){var t=this.viewport.getViewBox(),e=Math.max(this.width/t.width,this.height/t.height);this.zoom(e,!0)};u.prototype.center=function(){var t=this.viewport.getViewBox(),e=(this.width-(t.width+t.x*2)*this.getZoom())*.5,o=(this.height-(t.height+t.y*2)*this.getZoom())*.5;this.getPublicInstance().pan({x:e,y:o})};u.prototype.updateBBox=function(){this.viewport.simpleViewBoxCache()};u.prototype.pan=function(t){var e=this.viewport.getCTM();e.e=t.x,e.f=t.y,this.viewport.setCTM(e)};u.prototype.panBy=function(t){var e=this.viewport.getCTM();e.e+=t.x,e.f+=t.y,this.viewport.setCTM(e)};u.prototype.getPan=function(){var t=this.viewport.getState();return{x:t.x,y:t.y}};u.prototype.resize=function(){var t=S.getBoundingClientRectNormalized(this.svg);this.width=t.width,this.height=t.height;var e=this.viewport;e.options.width=this.width,e.options.height=this.height,e.processCTM(),this.options.controlIconsEnabled&&(this.getPublicInstance().disableControlIcons(),this.getPublicInstance().enableControlIcons())};u.prototype.destroy=function(){var t=this;this.beforeZoom=null,this.onZoom=null,this.beforePan=null,this.onPan=null,this.onUpdatedCTM=null,this.options.customEventsHandler!=null&&this.options.customEventsHandler.destroy({svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,instance:this.getPublicInstance()});for(var e in this.eventListeners)(this.options.eventsListenerElement||this.svg).removeEventListener(e,this.eventListeners[e],this.options.preventMouseEventsDefault?!1:Q);this.disableMouseWheelZoom(),this.getPublicInstance().disableControlIcons(),this.reset(),E=E.filter(function(o){return o.svg!==t.svg}),delete this.options,delete this.viewport,delete this.publicInstance,delete this.pi,this.getPublicInstance=function(){return null}};u.prototype.getPublicInstance=function(){var t=this;return this.publicInstance||(this.publicInstance=this.pi={enablePan:function(){return t.options.panEnabled=!0,t.pi},disablePan:function(){return t.options.panEnabled=!1,t.pi},isPanEnabled:function(){return!!t.options.panEnabled},pan:function(e){return t.pan(e),t.pi},panBy:function(e){return t.panBy(e),t.pi},getPan:function(){return t.getPan()},setBeforePan:function(e){return t.options.beforePan=e===null?null:b.proxy(e,t.publicInstance),t.pi},setOnPan:function(e){return t.options.onPan=e===null?null:b.proxy(e,t.publicInstance),t.pi},enableZoom:function(){return t.options.zoomEnabled=!0,t.pi},disableZoom:function(){return t.options.zoomEnabled=!1,t.pi},isZoomEnabled:function(){return!!t.options.zoomEnabled},enableControlIcons:function(){return t.options.controlIconsEnabled||(t.options.controlIconsEnabled=!0,L.enable(t)),t.pi},disableControlIcons:function(){return t.options.controlIconsEnabled&&(t.options.controlIconsEnabled=!1,L.disable(t)),t.pi},isControlIconsEnabled:function(){return!!t.options.controlIconsEnabled},enableDblClickZoom:function(){return t.options.dblClickZoomEnabled=!0,t.pi},disableDblClickZoom:function(){return t.options.dblClickZoomEnabled=!1,t.pi},isDblClickZoomEnabled:function(){return!!t.options.dblClickZoomEnabled},enableMouseWheelZoom:function(){return t.enableMouseWheelZoom(),t.pi},disableMouseWheelZoom:function(){return t.disableMouseWheelZoom(),t.pi},isMouseWheelZoomEnabled:function(){return!!t.options.mouseWheelZoomEnabled},setZoomScaleSensitivity:function(e){return t.options.zoomScaleSensitivity=e,t.pi},setMinZoom:function(e){return t.options.minZoom=e,t.pi},setMaxZoom:function(e){return t.options.maxZoom=e,t.pi},setBeforeZoom:function(e){return t.options.beforeZoom=e===null?null:b.proxy(e,t.publicInstance),t.pi},setOnZoom:function(e){return t.options.onZoom=e===null?null:b.proxy(e,t.publicInstance),t.pi},zoom:function(e){return t.publicZoom(e,!0),t.pi},zoomBy:function(e){return t.publicZoom(e,!1),t.pi},zoomAtPoint:function(e,o){return t.publicZoomAtPoint(e,o,!0),t.pi},zoomAtPointBy:function(e,o){return t.publicZoomAtPoint(e,o,!1),t.pi},zoomIn:function(){return this.zoomBy(1+t.options.zoomScaleSensitivity),t.pi},zoomOut:function(){return this.zoomBy(1/(1+t.options.zoomScaleSensitivity)),t.pi},getZoom:function(){return t.getRelativeZoom()},setOnUpdatedCTM:function(e){return t.options.onUpdatedCTM=e===null?null:b.proxy(e,t.publicInstance),t.pi},resetZoom:function(){return t.resetZoom(),t.pi},resetPan:function(){return t.resetPan(),t.pi},reset:function(){return t.reset(),t.pi},fit:function(){return t.fit(),t.pi},contain:function(){return t.contain(),t.pi},center:function(){return t.center(),t.pi},updateBBox:function(){return t.updateBBox(),t.pi},resize:function(){return t.resize(),t.pi},getSizes:function(){return{width:t.width,height:t.height,realZoom:t.getZoom(),viewBox:t.viewport.getViewBox()}},destroy:function(){return t.destroy(),t.pi}}),this.publicInstance};var E=[],wt=function(t,e){var o=b.getSvg(t);if(o===null)return null;for(var n=E.length-1;n>=0;n--)if(E[n].svg===o)return E[n].instance.getPublicInstance();return E.push({svg:o,instance:new u(o,e)}),E[E.length-1].instance.getPublicInstance()},yt=wt;function j(t){let e,o=t[5].error+"",n;return{c(){e=D("div"),n=at(o),this.h()},l(s){e=T(s,"DIV",{class:!0,id:!0});var i=V(e);n=lt(i,o),i.forEach(P),this.h()},h(){A(e,"class","p-2 text-red-600"),A(e,"id","errorContainer")},m(s,i){O(s,e,i),Y(e,n)},p(s,i){i&32&&o!==(o=s[5].error+"")&&ut(n,o)},d(s){s&&P(e)}}}function St(t){let e,o,n,s=t[2]&&t[5].error instanceof Error&&j(t);return{c(){s&&s.c(),e=it(),o=D("div"),n=D("div"),this.h()},l(i){s&&s.l(i),e=st(i),o=T(i,"DIV",{id:!0,class:!0});var r=V(o);n=T(r,"DIV",{id:!0,class:!0}),V(n).forEach(P),r.forEach(P),this.h()},h(){A(n,"id","container"),A(n,"class","h-full overflow-auto svelte-1ewr4tw"),C(n,"hide",t[4]),A(o,"id","view"),A(o,"class","p-2 h-full svelte-1ewr4tw"),C(o,"error",t[2]),C(o,"outOfSync",t[3])},m(i,r){s&&s.m(i,r),O(i,e,r),O(i,o,r),Y(o,n),t[6](n),t[7](o)},p(i,[r]){i[2]&&i[5].error instanceof Error?s?s.p(i,r):(s=j(i),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),r&16&&C(n,"hide",i[4]),r&4&&C(o,"error",i[2]),r&8&&C(o,"outOfSync",i[3])},i:q,o:q,d(i){s&&s.d(i),i&&P(e),i&&P(o),t[6](null),t[7](null)}}}function xt(t,e,o){let n,s;U(t,G,l=>o(5,n=l)),U(t,X,l=>o(13,s=l));let i="",r="",h,m,w=!1,y=!1,x=!1,N=!0,c=n.panZoom,a;const d=()=>{const l=a.getPan(),Z=a.getZoom();ct({pan:l,zoom:Z}),pt("panZoom")},f=l=>{!l.panZoom||(o(4,x=!0),a==null||a.destroy(),a=void 0,Promise.resolve().then(()=>{const Z=document.getElementById("graph-div");a=yt(Z,{onPan:d,onZoom:d,controlIconsEnabled:!0,fit:!0,center:!0});const{pan:B,zoom:z}=l;B!==void 0&&z!==void 0&&Number.isFinite(z)&&(a.zoom(z),a.pan(B)),o(4,x=!1)}))},v=l=>{if(l.error!==void 0){o(2,w=!0);return}o(2,w=!1);try{if(h&&l&&(l.updateDiagram||l.autoSync)){if(l.autoSync||ht(X,s.updateDiagram=!1,s),o(3,y=!1),N=!0,i===l.code&&r===l.mermaid&&c===l.panZoom)return;i=l.code,r=l.mermaid,c=l.panZoom;const Z=m.parentElement.scrollTop;delete h.dataset.processed,F.initialize(Object.assign({},JSON.parse(l.mermaid))),F.render("graph-div",i,B=>{if(B.length>0){f(l),o(0,h.innerHTML=B,h);const z=document.getElementById("graph-div");z.setAttribute("height","100%"),z.style.maxWidth="100%"}}),o(1,m.parentElement.scrollTop=Z,m),o(2,w=!1)}else N?N=!1:(i!==l.code||r!==l.mermaid)&&o(3,y=!0)}catch(Z){console.error("view fail",Z),o(2,w=!0)}};rt(()=>{G.subscribe(l=>{v(l)}),window.addEventListener("resize",()=>{n.panZoom&&a&&a.resize()})});function $(l){W[l?"unshift":"push"](()=>{h=l,o(0,h)})}function tt(l){W[l?"unshift":"push"](()=>{m=l,o(1,m)})}return[h,m,w,y,x,n,$,tt]}class Zt extends et{constructor(e){super(),ot(this,e,xt,St,nt,{})}}export{Zt as V};
