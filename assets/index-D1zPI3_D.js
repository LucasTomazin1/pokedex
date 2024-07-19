function Mh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function nd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rd={exports:{}},ea={},id={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ei=Symbol.for("react.element"),Fh=Symbol.for("react.portal"),$h=Symbol.for("react.fragment"),Dh=Symbol.for("react.strict_mode"),bh=Symbol.for("react.profiler"),Uh=Symbol.for("react.provider"),Bh=Symbol.for("react.context"),Wh=Symbol.for("react.forward_ref"),Vh=Symbol.for("react.suspense"),Hh=Symbol.for("react.memo"),Yh=Symbol.for("react.lazy"),qu=Symbol.iterator;function Qh(e){return e===null||typeof e!="object"?null:(e=qu&&e[qu]||e["@@iterator"],typeof e=="function"?e:null)}var od={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ad=Object.assign,ld={};function yr(e,t,n){this.props=e,this.context=t,this.refs=ld,this.updater=n||od}yr.prototype.isReactComponent={};yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sd(){}sd.prototype=yr.prototype;function Fs(e,t,n){this.props=e,this.context=t,this.refs=ld,this.updater=n||od}var $s=Fs.prototype=new sd;$s.constructor=Fs;ad($s,yr.prototype);$s.isPureReactComponent=!0;var ec=Array.isArray,ud=Object.prototype.hasOwnProperty,Ds={current:null},cd={key:!0,ref:!0,__self:!0,__source:!0};function fd(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)ud.call(t,r)&&!cd.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ei,type:e,key:o,ref:a,props:i,_owner:Ds.current}}function Gh(e,t){return{$$typeof:Ei,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ei}function Kh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var tc=/\/+/g;function za(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kh(""+e.key):t.toString(36)}function eo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ei:case Fh:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+za(a,0):r,ec(i)?(n="",e!=null&&(n=e.replace(tc,"$&/")+"/"),eo(i,t,n,"",function(u){return u})):i!=null&&(bs(i)&&(i=Gh(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(tc,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",ec(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+za(o,l);a+=eo(o,t,n,s,i)}else if(s=Qh(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+za(o,l++),a+=eo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Li(e,t,n){if(e==null)return e;var r=[],i=0;return eo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Xh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},to={transition:null},Zh={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:to,ReactCurrentOwner:Ds};function dd(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Li,forEach:function(e,t,n){Li(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Li(e,function(){t++}),t},toArray:function(e){return Li(e,function(t){return t})||[]},only:function(e){if(!bs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=yr;F.Fragment=$h;F.Profiler=bh;F.PureComponent=Fs;F.StrictMode=Dh;F.Suspense=Vh;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zh;F.act=dd;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ad({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ds.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)ud.call(t,s)&&!cd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ei,type:e.type,key:i,ref:o,props:r,_owner:a}};F.createContext=function(e){return e={$$typeof:Bh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Uh,_context:e},e.Consumer=e};F.createElement=fd;F.createFactory=function(e){var t=fd.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Wh,render:e}};F.isValidElement=bs;F.lazy=function(e){return{$$typeof:Yh,_payload:{_status:-1,_result:e},_init:Xh}};F.memo=function(e,t){return{$$typeof:Hh,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=to.transition;to.transition={};try{e()}finally{to.transition=t}};F.unstable_act=dd;F.useCallback=function(e,t){return we.current.useCallback(e,t)};F.useContext=function(e){return we.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return we.current.useDeferredValue(e)};F.useEffect=function(e,t){return we.current.useEffect(e,t)};F.useId=function(){return we.current.useId()};F.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return we.current.useMemo(e,t)};F.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};F.useRef=function(e){return we.current.useRef(e)};F.useState=function(e){return we.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return we.current.useTransition()};F.version="18.3.1";id.exports=F;var _=id.exports;const Ue=nd(_),Jh=Mh({__proto__:null,default:Ue},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh=_,e0=Symbol.for("react.element"),t0=Symbol.for("react.fragment"),n0=Object.prototype.hasOwnProperty,r0=qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i0={key:!0,ref:!0,__self:!0,__source:!0};function pd(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)n0.call(t,r)&&!i0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:e0,type:e,key:o,ref:a,props:i,_owner:r0.current}}ea.Fragment=t0;ea.jsx=pd;ea.jsxs=pd;rd.exports=ea;var E=rd.exports,ml={},md={exports:{}},Me={},hd={exports:{}},gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,I){var A=N.length;N.push(I);e:for(;0<A;){var U=A-1>>>1,B=N[U];if(0<i(B,I))N[U]=I,N[A]=B,A=U;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var I=N[0],A=N.pop();if(A!==I){N[0]=A;e:for(var U=0,B=N.length,un=B>>>1;U<un;){var Qe=2*(U+1)-1,Nt=N[Qe],Oe=Qe+1,dt=N[Oe];if(0>i(Nt,A))Oe<B&&0>i(dt,Nt)?(N[U]=dt,N[Oe]=A,U=Oe):(N[U]=Nt,N[Qe]=A,U=Qe);else if(Oe<B&&0>i(dt,A))N[U]=dt,N[Oe]=A,U=Oe;else break e}}return I}function i(N,I){var A=N.sortIndex-I.sortIndex;return A!==0?A:N.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],f=1,d=null,h=3,g=!1,v=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=N)r(u),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(u)}}function y(N){if(x=!1,m(N),!v)if(n(s)!==null)v=!0,Cr(w);else{var I=n(u);I!==null&&sn(y,I.startTime-N)}}function w(N,I){v=!1,x&&(x=!1,p(z),z=-1),g=!0;var A=h;try{for(m(I),d=n(s);d!==null&&(!(d.expirationTime>I)||N&&!Ne());){var U=d.callback;if(typeof U=="function"){d.callback=null,h=d.priorityLevel;var B=U(d.expirationTime<=I);I=e.unstable_now(),typeof B=="function"?d.callback=B:d===n(s)&&r(s),m(I)}else r(s);d=n(s)}if(d!==null)var un=!0;else{var Qe=n(u);Qe!==null&&sn(y,Qe.startTime-I),un=!1}return un}finally{d=null,h=A,g=!1}}var P=!1,k=null,z=-1,W=5,j=-1;function Ne(){return!(e.unstable_now()-j<W)}function an(){if(k!==null){var N=e.unstable_now();j=N;var I=!0;try{I=k(!0,N)}finally{I?ln():(P=!1,k=null)}}else P=!1}var ln;if(typeof c=="function")ln=function(){c(an)};else if(typeof MessageChannel<"u"){var Ai=new MessageChannel,Oa=Ai.port2;Ai.port1.onmessage=an,ln=function(){Oa.postMessage(null)}}else ln=function(){S(an,0)};function Cr(N){k=N,P||(P=!0,ln())}function sn(N,I){z=S(function(){N(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,Cr(w))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var A=h;h=I;try{return N()}finally{h=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var A=h;h=N;try{return I()}finally{h=A}},e.unstable_scheduleCallback=function(N,I,A){var U=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?U+A:U):A=U,N){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=A+B,N={id:f++,callback:I,priorityLevel:N,startTime:A,expirationTime:B,sortIndex:-1},A>U?(N.sortIndex=A,t(u,N),n(s)===null&&N===n(u)&&(x?(p(z),z=-1):x=!0,sn(y,A-U))):(N.sortIndex=B,t(s,N),v||g||(v=!0,Cr(w))),N},e.unstable_shouldYield=Ne,e.unstable_wrapCallback=function(N){var I=h;return function(){var A=h;h=I;try{return N.apply(this,arguments)}finally{h=A}}}})(gd);hd.exports=gd;var o0=hd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0=_,je=o0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vd=new Set,qr={};function zn(e,t){ir(e,t),ir(e+"Capture",t)}function ir(e,t){for(qr[e]=t,e=0;e<t.length;e++)vd.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hl=Object.prototype.hasOwnProperty,l0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nc={},rc={};function s0(e){return hl.call(rc,e)?!0:hl.call(nc,e)?!1:l0.test(e)?rc[e]=!0:(nc[e]=!0,!1)}function u0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function c0(e,t,n,r){if(t===null||typeof t>"u"||u0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Us=/[\-:]([a-z])/g;function Bs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Us,Bs);de[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Us,Bs);de[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Us,Bs);de[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ws(e,t,n,r){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(c0(t,n,i,r)&&(n=null),r||i===null?s0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=a0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ji=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),Vs=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),yd=Symbol.for("react.provider"),xd=Symbol.for("react.context"),Hs=Symbol.for("react.forward_ref"),vl=Symbol.for("react.suspense"),yl=Symbol.for("react.suspense_list"),Ys=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),wd=Symbol.for("react.offscreen"),ic=Symbol.iterator;function _r(e){return e===null||typeof e!="object"?null:(e=ic&&e[ic]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Ia;function Lr(e){if(Ia===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ia=t&&t[1]||""}return`
`+Ia+e}var Aa=!1;function Ra(e,t){if(!e||Aa)return"";Aa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Aa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Lr(e):""}function f0(e){switch(e.tag){case 5:return Lr(e.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return e=Ra(e.type,!1),e;case 11:return e=Ra(e.type.render,!1),e;case 1:return e=Ra(e.type,!0),e;default:return""}}function xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fn:return"Fragment";case Mn:return"Portal";case gl:return"Profiler";case Vs:return"StrictMode";case vl:return"Suspense";case yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xd:return(e.displayName||"Context")+".Consumer";case yd:return(e._context.displayName||"Context")+".Provider";case Hs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ys:return t=e.displayName||null,t!==null?t:xl(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return xl(e(t))}catch{}}return null}function d0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xl(t);case 8:return t===Vs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function p0(e){var t=Sd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mi(e){e._valueTracker||(e._valueTracker=p0(e))}function kd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Sd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function So(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wl(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function oc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ed(e,t){t=t.checked,t!=null&&Ws(e,"checked",t,!1)}function Sl(e,t){Ed(e,t);var n=Xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?kl(e,t.type,n):t.hasOwnProperty("defaultValue")&&kl(e,t.type,Xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ac(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function kl(e,t,n){(t!=="number"||So(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jr=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function El(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(jr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xt(n)}}function Cd(e,t){var n=Xt(t.value),r=Xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fi,_d=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fi=Fi||document.createElement("div"),Fi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ei(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m0=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(e){m0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ur[t]=Ur[e]})});function Nd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ur.hasOwnProperty(e)&&Ur[e]?(""+t).trim():t+"px"}function Od(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Nd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var h0=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pl(e,t){if(t){if(h0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function _l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nl=null;function Qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ol=null,Jn=null,qn=null;function uc(e){if(e=_i(e)){if(typeof Ol!="function")throw Error(C(280));var t=e.stateNode;t&&(t=oa(t),Ol(e.stateNode,e.type,t))}}function Td(e){Jn?qn?qn.push(e):qn=[e]:Jn=e}function zd(){if(Jn){var e=Jn,t=qn;if(qn=Jn=null,uc(e),t)for(e=0;e<t.length;e++)uc(t[e])}}function Id(e,t){return e(t)}function Ad(){}var La=!1;function Rd(e,t,n){if(La)return e(t,n);La=!0;try{return Id(e,t,n)}finally{La=!1,(Jn!==null||qn!==null)&&(Ad(),zd())}}function ti(e,t){var n=e.stateNode;if(n===null)return null;var r=oa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Tl=!1;if(xt)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){Tl=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{Tl=!1}function g0(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Br=!1,ko=null,Eo=!1,zl=null,v0={onError:function(e){Br=!0,ko=e}};function y0(e,t,n,r,i,o,a,l,s){Br=!1,ko=null,g0.apply(v0,arguments)}function x0(e,t,n,r,i,o,a,l,s){if(y0.apply(this,arguments),Br){if(Br){var u=ko;Br=!1,ko=null}else throw Error(C(198));Eo||(Eo=!0,zl=u)}}function In(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ld(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cc(e){if(In(e)!==e)throw Error(C(188))}function w0(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cc(i),e;if(o===r)return cc(i),t;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function jd(e){return e=w0(e),e!==null?Md(e):null}function Md(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Md(e);if(t!==null)return t;e=e.sibling}return null}var Fd=je.unstable_scheduleCallback,fc=je.unstable_cancelCallback,S0=je.unstable_shouldYield,k0=je.unstable_requestPaint,te=je.unstable_now,E0=je.unstable_getCurrentPriorityLevel,Gs=je.unstable_ImmediatePriority,$d=je.unstable_UserBlockingPriority,Co=je.unstable_NormalPriority,C0=je.unstable_LowPriority,Dd=je.unstable_IdlePriority,ta=null,ut=null;function P0(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(ta,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:O0,_0=Math.log,N0=Math.LN2;function O0(e){return e>>>=0,e===0?32:31-(_0(e)/N0|0)|0}var $i=64,Di=4194304;function Mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Po(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Mr(l):(o&=a,o!==0&&(r=Mr(o)))}else a=n&~i,a!==0?r=Mr(a):o!==0&&(r=Mr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),i=1<<n,r|=e[n],t&=~i;return r}function T0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function z0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Je(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=T0(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Il(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bd(){var e=$i;return $i<<=1,!($i&4194240)&&($i=64),e}function ja(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ci(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function I0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Je(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ks(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var b=0;function Ud(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bd,Xs,Wd,Vd,Hd,Al=!1,bi=[],bt=null,Ut=null,Bt=null,ni=new Map,ri=new Map,Lt=[],A0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dc(e,t){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ri.delete(t.pointerId)}}function Or(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=_i(t),t!==null&&Xs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function R0(e,t,n,r,i){switch(t){case"focusin":return bt=Or(bt,e,t,n,r,i),!0;case"dragenter":return Ut=Or(Ut,e,t,n,r,i),!0;case"mouseover":return Bt=Or(Bt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ni.set(o,Or(ni.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ri.set(o,Or(ri.get(o)||null,e,t,n,r,i)),!0}return!1}function Yd(e){var t=mn(e.target);if(t!==null){var n=In(t);if(n!==null){if(t=n.tag,t===13){if(t=Ld(n),t!==null){e.blockedOn=t,Hd(e.priority,function(){Wd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Nl=r,n.target.dispatchEvent(r),Nl=null}else return t=_i(n),t!==null&&Xs(t),e.blockedOn=n,!1;t.shift()}return!0}function pc(e,t,n){no(e)&&n.delete(t)}function L0(){Al=!1,bt!==null&&no(bt)&&(bt=null),Ut!==null&&no(Ut)&&(Ut=null),Bt!==null&&no(Bt)&&(Bt=null),ni.forEach(pc),ri.forEach(pc)}function Tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Al||(Al=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,L0)))}function ii(e){function t(i){return Tr(i,e)}if(0<bi.length){Tr(bi[0],e);for(var n=1;n<bi.length;n++){var r=bi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bt!==null&&Tr(bt,e),Ut!==null&&Tr(Ut,e),Bt!==null&&Tr(Bt,e),ni.forEach(t),ri.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)Yd(n),n.blockedOn===null&&Lt.shift()}var er=Pt.ReactCurrentBatchConfig,_o=!0;function j0(e,t,n,r){var i=b,o=er.transition;er.transition=null;try{b=1,Zs(e,t,n,r)}finally{b=i,er.transition=o}}function M0(e,t,n,r){var i=b,o=er.transition;er.transition=null;try{b=4,Zs(e,t,n,r)}finally{b=i,er.transition=o}}function Zs(e,t,n,r){if(_o){var i=Rl(e,t,n,r);if(i===null)Ha(e,t,r,No,n),dc(e,r);else if(R0(i,e,t,n,r))r.stopPropagation();else if(dc(e,r),t&4&&-1<A0.indexOf(e)){for(;i!==null;){var o=_i(i);if(o!==null&&Bd(o),o=Rl(e,t,n,r),o===null&&Ha(e,t,r,No,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ha(e,t,r,null,n)}}var No=null;function Rl(e,t,n,r){if(No=null,e=Qs(r),e=mn(e),e!==null)if(t=In(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ld(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return No=e,null}function Qd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E0()){case Gs:return 1;case $d:return 4;case Co:case C0:return 16;case Dd:return 536870912;default:return 16}default:return 16}}var Mt=null,Js=null,ro=null;function Gd(){if(ro)return ro;var e,t=Js,n=t.length,r,i="value"in Mt?Mt.value:Mt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return ro=i.slice(e,1<r?1-r:void 0)}function io(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ui(){return!0}function mc(){return!1}function Fe(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ui:mc,this.isPropagationStopped=mc,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),t}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qs=Fe(xr),Pi=q({},xr,{view:0,detail:0}),F0=Fe(Pi),Ma,Fa,zr,na=q({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(Ma=e.screenX-zr.screenX,Fa=e.screenY-zr.screenY):Fa=Ma=0,zr=e),Ma)},movementY:function(e){return"movementY"in e?e.movementY:Fa}}),hc=Fe(na),$0=q({},na,{dataTransfer:0}),D0=Fe($0),b0=q({},Pi,{relatedTarget:0}),$a=Fe(b0),U0=q({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),B0=Fe(U0),W0=q({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V0=Fe(W0),H0=q({},xr,{data:0}),gc=Fe(H0),Y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=G0[e])?!!t[e]:!1}function eu(){return K0}var X0=q({},Pi,{key:function(e){if(e.key){var t=Y0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(e){return e.type==="keypress"?io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Z0=Fe(X0),J0=q({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vc=Fe(J0),q0=q({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),e1=Fe(q0),t1=q({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),n1=Fe(t1),r1=q({},na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),i1=Fe(r1),o1=[9,13,27,32],tu=xt&&"CompositionEvent"in window,Wr=null;xt&&"documentMode"in document&&(Wr=document.documentMode);var a1=xt&&"TextEvent"in window&&!Wr,Kd=xt&&(!tu||Wr&&8<Wr&&11>=Wr),yc=" ",xc=!1;function Xd(e,t){switch(e){case"keyup":return o1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function l1(e,t){switch(e){case"compositionend":return Zd(t);case"keypress":return t.which!==32?null:(xc=!0,yc);case"textInput":return e=t.data,e===yc&&xc?null:e;default:return null}}function s1(e,t){if($n)return e==="compositionend"||!tu&&Xd(e,t)?(e=Gd(),ro=Js=Mt=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kd&&t.locale!=="ko"?null:t.data;default:return null}}var u1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!u1[e.type]:t==="textarea"}function Jd(e,t,n,r){Td(r),t=Oo(t,"onChange"),0<t.length&&(n=new qs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vr=null,oi=null;function c1(e){up(e,0)}function ra(e){var t=Un(e);if(kd(t))return e}function f1(e,t){if(e==="change")return t}var qd=!1;if(xt){var Da;if(xt){var ba="oninput"in document;if(!ba){var Sc=document.createElement("div");Sc.setAttribute("oninput","return;"),ba=typeof Sc.oninput=="function"}Da=ba}else Da=!1;qd=Da&&(!document.documentMode||9<document.documentMode)}function kc(){Vr&&(Vr.detachEvent("onpropertychange",ep),oi=Vr=null)}function ep(e){if(e.propertyName==="value"&&ra(oi)){var t=[];Jd(t,oi,e,Qs(e)),Rd(c1,t)}}function d1(e,t,n){e==="focusin"?(kc(),Vr=t,oi=n,Vr.attachEvent("onpropertychange",ep)):e==="focusout"&&kc()}function p1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ra(oi)}function m1(e,t){if(e==="click")return ra(t)}function h1(e,t){if(e==="input"||e==="change")return ra(t)}function g1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:g1;function ai(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hl.call(t,i)||!tt(e[i],t[i]))return!1}return!0}function Ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cc(e,t){var n=Ec(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ec(n)}}function tp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function np(){for(var e=window,t=So();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=So(e.document)}return t}function nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function v1(e){var t=np(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tp(n.ownerDocument.documentElement,n)){if(r!==null&&nu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Cc(n,o);var a=Cc(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var y1=xt&&"documentMode"in document&&11>=document.documentMode,Dn=null,Ll=null,Hr=null,jl=!1;function Pc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jl||Dn==null||Dn!==So(r)||(r=Dn,"selectionStart"in r&&nu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&ai(Hr,r)||(Hr=r,r=Oo(Ll,"onSelect"),0<r.length&&(t=new qs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dn)))}function Bi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:Bi("Animation","AnimationEnd"),animationiteration:Bi("Animation","AnimationIteration"),animationstart:Bi("Animation","AnimationStart"),transitionend:Bi("Transition","TransitionEnd")},Ua={},rp={};xt&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function ia(e){if(Ua[e])return Ua[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rp)return Ua[e]=t[n];return e}var ip=ia("animationend"),op=ia("animationiteration"),ap=ia("animationstart"),lp=ia("transitionend"),sp=new Map,_c="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){sp.set(e,t),zn(t,[e])}for(var Ba=0;Ba<_c.length;Ba++){var Wa=_c[Ba],x1=Wa.toLowerCase(),w1=Wa[0].toUpperCase()+Wa.slice(1);tn(x1,"on"+w1)}tn(ip,"onAnimationEnd");tn(op,"onAnimationIteration");tn(ap,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(lp,"onTransitionEnd");ir("onMouseEnter",["mouseout","mouseover"]);ir("onMouseLeave",["mouseout","mouseover"]);ir("onPointerEnter",["pointerout","pointerover"]);ir("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function Nc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,x0(r,t,void 0,e),e.currentTarget=null}function up(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Nc(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Nc(i,l,u),o=s}}}if(Eo)throw e=zl,Eo=!1,zl=null,e}function H(e,t){var n=t[bl];n===void 0&&(n=t[bl]=new Set);var r=e+"__bubble";n.has(r)||(cp(t,e,2,!1),n.add(r))}function Va(e,t,n){var r=0;t&&(r|=4),cp(n,e,r,t)}var Wi="_reactListening"+Math.random().toString(36).slice(2);function li(e){if(!e[Wi]){e[Wi]=!0,vd.forEach(function(n){n!=="selectionchange"&&(S1.has(n)||Va(n,!1,e),Va(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wi]||(t[Wi]=!0,Va("selectionchange",!1,t))}}function cp(e,t,n,r){switch(Qd(t)){case 1:var i=j0;break;case 4:i=M0;break;default:i=Zs}n=i.bind(null,t,n,e),i=void 0,!Tl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ha(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=mn(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Rd(function(){var u=o,f=Qs(n),d=[];e:{var h=sp.get(e);if(h!==void 0){var g=qs,v=e;switch(e){case"keypress":if(io(n)===0)break e;case"keydown":case"keyup":g=Z0;break;case"focusin":v="focus",g=$a;break;case"focusout":v="blur",g=$a;break;case"beforeblur":case"afterblur":g=$a;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=D0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=e1;break;case ip:case op:case ap:g=B0;break;case lp:g=n1;break;case"scroll":g=F0;break;case"wheel":g=i1;break;case"copy":case"cut":case"paste":g=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=vc}var x=(t&4)!==0,S=!x&&e==="scroll",p=x?h!==null?h+"Capture":null:h;x=[];for(var c=u,m;c!==null;){m=c;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=ti(c,p),y!=null&&x.push(si(c,y,m)))),S)break;c=c.return}0<x.length&&(h=new g(h,v,null,n,f),d.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Nl&&(v=n.relatedTarget||n.fromElement)&&(mn(v)||v[wt]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?mn(v):null,v!==null&&(S=In(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(x=hc,y="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=vc,y="onPointerLeave",p="onPointerEnter",c="pointer"),S=g==null?h:Un(g),m=v==null?h:Un(v),h=new x(y,c+"leave",g,n,f),h.target=S,h.relatedTarget=m,y=null,mn(f)===u&&(x=new x(p,c+"enter",v,n,f),x.target=m,x.relatedTarget=S,y=x),S=y,g&&v)t:{for(x=g,p=v,c=0,m=x;m;m=Ln(m))c++;for(m=0,y=p;y;y=Ln(y))m++;for(;0<c-m;)x=Ln(x),c--;for(;0<m-c;)p=Ln(p),m--;for(;c--;){if(x===p||p!==null&&x===p.alternate)break t;x=Ln(x),p=Ln(p)}x=null}else x=null;g!==null&&Oc(d,h,g,x,!1),v!==null&&S!==null&&Oc(d,S,v,x,!0)}}e:{if(h=u?Un(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var w=f1;else if(wc(h))if(qd)w=h1;else{w=p1;var P=d1}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=m1);if(w&&(w=w(e,u))){Jd(d,w,n,f);break e}P&&P(e,h,u),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&kl(h,"number",h.value)}switch(P=u?Un(u):window,e){case"focusin":(wc(P)||P.contentEditable==="true")&&(Dn=P,Ll=u,Hr=null);break;case"focusout":Hr=Ll=Dn=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,Pc(d,n,f);break;case"selectionchange":if(y1)break;case"keydown":case"keyup":Pc(d,n,f)}var k;if(tu)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else $n?Xd(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Kd&&n.locale!=="ko"&&($n||z!=="onCompositionStart"?z==="onCompositionEnd"&&$n&&(k=Gd()):(Mt=f,Js="value"in Mt?Mt.value:Mt.textContent,$n=!0)),P=Oo(u,z),0<P.length&&(z=new gc(z,e,null,n,f),d.push({event:z,listeners:P}),k?z.data=k:(k=Zd(n),k!==null&&(z.data=k)))),(k=a1?l1(e,n):s1(e,n))&&(u=Oo(u,"onBeforeInput"),0<u.length&&(f=new gc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=k))}up(d,t)})}function si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Oo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ti(e,n),o!=null&&r.unshift(si(e,o,i)),o=ti(e,t),o!=null&&r.push(si(e,o,i))),e=e.return}return r}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oc(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=ti(n,o),s!=null&&a.unshift(si(n,s,l))):i||(s=ti(n,o),s!=null&&a.push(si(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var k1=/\r\n?/g,E1=/\u0000|\uFFFD/g;function Tc(e){return(typeof e=="string"?e:""+e).replace(k1,`
`).replace(E1,"")}function Vi(e,t,n){if(t=Tc(t),Tc(e)!==t&&n)throw Error(C(425))}function To(){}var Ml=null,Fl=null;function $l(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dl=typeof setTimeout=="function"?setTimeout:void 0,C1=typeof clearTimeout=="function"?clearTimeout:void 0,zc=typeof Promise=="function"?Promise:void 0,P1=typeof queueMicrotask=="function"?queueMicrotask:typeof zc<"u"?function(e){return zc.resolve(null).then(e).catch(_1)}:Dl;function _1(e){setTimeout(function(){throw e})}function Ya(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ii(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ii(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ic(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),at="__reactFiber$"+wr,ui="__reactProps$"+wr,wt="__reactContainer$"+wr,bl="__reactEvents$"+wr,N1="__reactListeners$"+wr,O1="__reactHandles$"+wr;function mn(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ic(e);e!==null;){if(n=e[at])return n;e=Ic(e)}return t}e=n,n=e.parentNode}return null}function _i(e){return e=e[at]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function oa(e){return e[ui]||null}var Ul=[],Bn=-1;function nn(e){return{current:e}}function Q(e){0>Bn||(e.current=Ul[Bn],Ul[Bn]=null,Bn--)}function V(e,t){Bn++,Ul[Bn]=e.current,e.current=t}var Zt={},ve=nn(Zt),Ce=nn(!1),En=Zt;function or(e,t){var n=e.type.contextTypes;if(!n)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pe(e){return e=e.childContextTypes,e!=null}function zo(){Q(Ce),Q(ve)}function Ac(e,t,n){if(ve.current!==Zt)throw Error(C(168));V(ve,t),V(Ce,n)}function fp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,d0(e)||"Unknown",i));return q({},n,r)}function Io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,En=ve.current,V(ve,e),V(Ce,Ce.current),!0}function Rc(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=fp(e,t,En),r.__reactInternalMemoizedMergedChildContext=e,Q(Ce),Q(ve),V(ve,e)):Q(Ce),V(Ce,n)}var ht=null,aa=!1,Qa=!1;function dp(e){ht===null?ht=[e]:ht.push(e)}function T1(e){aa=!0,dp(e)}function rn(){if(!Qa&&ht!==null){Qa=!0;var e=0,t=b;try{var n=ht;for(b=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,aa=!1}catch(i){throw ht!==null&&(ht=ht.slice(e+1)),Fd(Gs,rn),i}finally{b=t,Qa=!1}}return null}var Wn=[],Vn=0,Ao=null,Ro=0,De=[],be=0,Cn=null,gt=1,vt="";function fn(e,t){Wn[Vn++]=Ro,Wn[Vn++]=Ao,Ao=e,Ro=t}function pp(e,t,n){De[be++]=gt,De[be++]=vt,De[be++]=Cn,Cn=e;var r=gt;e=vt;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var o=32-Je(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,gt=1<<32-Je(t)+i|n<<i|r,vt=o+e}else gt=1<<o|n<<i|r,vt=e}function ru(e){e.return!==null&&(fn(e,1),pp(e,1,0))}function iu(e){for(;e===Ao;)Ao=Wn[--Vn],Wn[Vn]=null,Ro=Wn[--Vn],Wn[Vn]=null;for(;e===Cn;)Cn=De[--be],De[be]=null,vt=De[--be],De[be]=null,gt=De[--be],De[be]=null}var Ae=null,Ie=null,K=!1,Ze=null;function mp(e,t){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ae=e,Ie=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ae=e,Ie=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cn!==null?{id:gt,overflow:vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ae=e,Ie=null,!0):!1;default:return!1}}function Bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wl(e){if(K){var t=Ie;if(t){var n=t;if(!Lc(e,t)){if(Bl(e))throw Error(C(418));t=Wt(n.nextSibling);var r=Ae;t&&Lc(e,t)?mp(r,n):(e.flags=e.flags&-4097|2,K=!1,Ae=e)}}else{if(Bl(e))throw Error(C(418));e.flags=e.flags&-4097|2,K=!1,Ae=e}}}function jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function Hi(e){if(e!==Ae)return!1;if(!K)return jc(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$l(e.type,e.memoizedProps)),t&&(t=Ie)){if(Bl(e))throw hp(),Error(C(418));for(;t;)mp(e,t),t=Wt(t.nextSibling)}if(jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ie=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ie=null}}else Ie=Ae?Wt(e.stateNode.nextSibling):null;return!0}function hp(){for(var e=Ie;e;)e=Wt(e.nextSibling)}function ar(){Ie=Ae=null,K=!1}function ou(e){Ze===null?Ze=[e]:Ze.push(e)}var z1=Pt.ReactCurrentBatchConfig;function Ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Yi(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mc(e){var t=e._init;return t(e._payload)}function gp(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=Qt(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,c,m,y){return c===null||c.tag!==6?(c=el(m,p.mode,y),c.return=p,c):(c=i(c,m),c.return=p,c)}function s(p,c,m,y){var w=m.type;return w===Fn?f(p,c,m.props.children,y,m.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===At&&Mc(w)===c.type)?(y=i(c,m.props),y.ref=Ir(p,c,m),y.return=p,y):(y=fo(m.type,m.key,m.props,null,p.mode,y),y.ref=Ir(p,c,m),y.return=p,y)}function u(p,c,m,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=tl(m,p.mode,y),c.return=p,c):(c=i(c,m.children||[]),c.return=p,c)}function f(p,c,m,y,w){return c===null||c.tag!==7?(c=xn(m,p.mode,y,w),c.return=p,c):(c=i(c,m),c.return=p,c)}function d(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=el(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ji:return m=fo(c.type,c.key,c.props,null,p.mode,m),m.ref=Ir(p,null,c),m.return=p,m;case Mn:return c=tl(c,p.mode,m),c.return=p,c;case At:var y=c._init;return d(p,y(c._payload),m)}if(jr(c)||_r(c))return c=xn(c,p.mode,m,null),c.return=p,c;Yi(p,c)}return null}function h(p,c,m,y){var w=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return w!==null?null:l(p,c,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ji:return m.key===w?s(p,c,m,y):null;case Mn:return m.key===w?u(p,c,m,y):null;case At:return w=m._init,h(p,c,w(m._payload),y)}if(jr(m)||_r(m))return w!==null?null:f(p,c,m,y,null);Yi(p,m)}return null}function g(p,c,m,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(c,p,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ji:return p=p.get(y.key===null?m:y.key)||null,s(c,p,y,w);case Mn:return p=p.get(y.key===null?m:y.key)||null,u(c,p,y,w);case At:var P=y._init;return g(p,c,m,P(y._payload),w)}if(jr(y)||_r(y))return p=p.get(m)||null,f(c,p,y,w,null);Yi(c,y)}return null}function v(p,c,m,y){for(var w=null,P=null,k=c,z=c=0,W=null;k!==null&&z<m.length;z++){k.index>z?(W=k,k=null):W=k.sibling;var j=h(p,k,m[z],y);if(j===null){k===null&&(k=W);break}e&&k&&j.alternate===null&&t(p,k),c=o(j,c,z),P===null?w=j:P.sibling=j,P=j,k=W}if(z===m.length)return n(p,k),K&&fn(p,z),w;if(k===null){for(;z<m.length;z++)k=d(p,m[z],y),k!==null&&(c=o(k,c,z),P===null?w=k:P.sibling=k,P=k);return K&&fn(p,z),w}for(k=r(p,k);z<m.length;z++)W=g(k,p,z,m[z],y),W!==null&&(e&&W.alternate!==null&&k.delete(W.key===null?z:W.key),c=o(W,c,z),P===null?w=W:P.sibling=W,P=W);return e&&k.forEach(function(Ne){return t(p,Ne)}),K&&fn(p,z),w}function x(p,c,m,y){var w=_r(m);if(typeof w!="function")throw Error(C(150));if(m=w.call(m),m==null)throw Error(C(151));for(var P=w=null,k=c,z=c=0,W=null,j=m.next();k!==null&&!j.done;z++,j=m.next()){k.index>z?(W=k,k=null):W=k.sibling;var Ne=h(p,k,j.value,y);if(Ne===null){k===null&&(k=W);break}e&&k&&Ne.alternate===null&&t(p,k),c=o(Ne,c,z),P===null?w=Ne:P.sibling=Ne,P=Ne,k=W}if(j.done)return n(p,k),K&&fn(p,z),w;if(k===null){for(;!j.done;z++,j=m.next())j=d(p,j.value,y),j!==null&&(c=o(j,c,z),P===null?w=j:P.sibling=j,P=j);return K&&fn(p,z),w}for(k=r(p,k);!j.done;z++,j=m.next())j=g(k,p,z,j.value,y),j!==null&&(e&&j.alternate!==null&&k.delete(j.key===null?z:j.key),c=o(j,c,z),P===null?w=j:P.sibling=j,P=j);return e&&k.forEach(function(an){return t(p,an)}),K&&fn(p,z),w}function S(p,c,m,y){if(typeof m=="object"&&m!==null&&m.type===Fn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ji:e:{for(var w=m.key,P=c;P!==null;){if(P.key===w){if(w=m.type,w===Fn){if(P.tag===7){n(p,P.sibling),c=i(P,m.props.children),c.return=p,p=c;break e}}else if(P.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===At&&Mc(w)===P.type){n(p,P.sibling),c=i(P,m.props),c.ref=Ir(p,P,m),c.return=p,p=c;break e}n(p,P);break}else t(p,P);P=P.sibling}m.type===Fn?(c=xn(m.props.children,p.mode,y,m.key),c.return=p,p=c):(y=fo(m.type,m.key,m.props,null,p.mode,y),y.ref=Ir(p,c,m),y.return=p,p=y)}return a(p);case Mn:e:{for(P=m.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=i(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=tl(m,p.mode,y),c.return=p,p=c}return a(p);case At:return P=m._init,S(p,c,P(m._payload),y)}if(jr(m))return v(p,c,m,y);if(_r(m))return x(p,c,m,y);Yi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,m),c.return=p,p=c):(n(p,c),c=el(m,p.mode,y),c.return=p,p=c),a(p)):n(p,c)}return S}var lr=gp(!0),vp=gp(!1),Lo=nn(null),jo=null,Hn=null,au=null;function lu(){au=Hn=jo=null}function su(e){var t=Lo.current;Q(Lo),e._currentValue=t}function Vl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tr(e,t){jo=e,au=Hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(au!==e)if(e={context:e,memoizedValue:t,next:null},Hn===null){if(jo===null)throw Error(C(308));Hn=e,jo.dependencies={lanes:0,firstContext:e}}else Hn=Hn.next=e;return t}var hn=null;function uu(e){hn===null?hn=[e]:hn.push(e)}function yp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,uu(t)):(n.next=i.next,i.next=n),t.interleaved=n,St(e,r)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function cu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,St(e,n)}return i=r.interleaved,i===null?(t.next=t,uu(r)):(t.next=i.next,i.next=t),r.interleaved=t,St(e,n)}function oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ks(e,n)}}function Fc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Mo(e,t,n,r){var i=e.updateQueue;Rt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,f=u=s=null,l=o;do{var h=l.lane,g=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(h=t,g=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(g,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(g,d,h):v,h==null)break e;d=q({},d,h);break e;case 2:Rt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=g,s=d):f=f.next=g,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);_n|=a,e.lanes=a,e.memoizedState=d}}function $c(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Ni={},ct=nn(Ni),ci=nn(Ni),fi=nn(Ni);function gn(e){if(e===Ni)throw Error(C(174));return e}function fu(e,t){switch(V(fi,t),V(ci,e),V(ct,Ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cl(t,e)}Q(ct),V(ct,t)}function sr(){Q(ct),Q(ci),Q(fi)}function wp(e){gn(fi.current);var t=gn(ct.current),n=Cl(t,e.type);t!==n&&(V(ci,e),V(ct,n))}function du(e){ci.current===e&&(Q(ct),Q(ci))}var Z=nn(0);function Fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ga=[];function pu(){for(var e=0;e<Ga.length;e++)Ga[e]._workInProgressVersionPrimary=null;Ga.length=0}var ao=Pt.ReactCurrentDispatcher,Ka=Pt.ReactCurrentBatchConfig,Pn=0,J=null,oe=null,le=null,$o=!1,Yr=!1,di=0,I1=0;function pe(){throw Error(C(321))}function mu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function hu(e,t,n,r,i,o){if(Pn=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ao.current=e===null||e.memoizedState===null?j1:M1,e=n(r,i),Yr){o=0;do{if(Yr=!1,di=0,25<=o)throw Error(C(301));o+=1,le=oe=null,t.updateQueue=null,ao.current=F1,e=n(r,i)}while(Yr)}if(ao.current=Do,t=oe!==null&&oe.next!==null,Pn=0,le=oe=J=null,$o=!1,t)throw Error(C(300));return e}function gu(){var e=di!==0;return di=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?J.memoizedState=le=e:le=le.next=e,le}function He(){if(oe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=le===null?J.memoizedState:le.next;if(t!==null)le=t,oe=e;else{if(e===null)throw Error(C(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},le===null?J.memoizedState=le=e:le=le.next=e}return le}function pi(e,t){return typeof t=="function"?t(e):t}function Xa(e){var t=He(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var f=u.lane;if((Pn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,J.lanes|=f,_n|=f}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,tt(r,t.memoizedState)||(Ee=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,J.lanes|=o,_n|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Za(e){var t=He(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);tt(o,t.memoizedState)||(Ee=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Sp(){}function kp(e,t){var n=J,r=He(),i=t(),o=!tt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ee=!0),r=r.queue,vu(Pp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,mi(9,Cp.bind(null,n,r,i,t),void 0,null),ue===null)throw Error(C(349));Pn&30||Ep(n,t,i)}return i}function Ep(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cp(e,t,n,r){t.value=n,t.getSnapshot=r,_p(t)&&Np(e)}function Pp(e,t,n){return n(function(){_p(t)&&Np(e)})}function _p(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function Np(e){var t=St(e,1);t!==null&&qe(t,e,1,-1)}function Dc(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:e},t.queue=e,e=e.dispatch=L1.bind(null,J,e),[t.memoizedState,e]}function mi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Op(){return He().memoizedState}function lo(e,t,n,r){var i=rt();J.flags|=e,i.memoizedState=mi(1|t,n,void 0,r===void 0?null:r)}function la(e,t,n,r){var i=He();r=r===void 0?null:r;var o=void 0;if(oe!==null){var a=oe.memoizedState;if(o=a.destroy,r!==null&&mu(r,a.deps)){i.memoizedState=mi(t,n,o,r);return}}J.flags|=e,i.memoizedState=mi(1|t,n,o,r)}function bc(e,t){return lo(8390656,8,e,t)}function vu(e,t){return la(2048,8,e,t)}function Tp(e,t){return la(4,2,e,t)}function zp(e,t){return la(4,4,e,t)}function Ip(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ap(e,t,n){return n=n!=null?n.concat([e]):null,la(4,4,Ip.bind(null,t,e),n)}function yu(){}function Rp(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lp(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function jp(e,t,n){return Pn&21?(tt(n,t)||(n=bd(),J.lanes|=n,_n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function A1(e,t){var n=b;b=n!==0&&4>n?n:4,e(!0);var r=Ka.transition;Ka.transition={};try{e(!1),t()}finally{b=n,Ka.transition=r}}function Mp(){return He().memoizedState}function R1(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fp(e))$p(t,n);else if(n=yp(e,t,n,r),n!==null){var i=xe();qe(n,e,r,i),Dp(n,t,r)}}function L1(e,t,n){var r=Yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fp(e))$p(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,tt(l,a)){var s=t.interleaved;s===null?(i.next=i,uu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=yp(e,t,i,r),n!==null&&(i=xe(),qe(n,e,r,i),Dp(n,t,r))}}function Fp(e){var t=e.alternate;return e===J||t!==null&&t===J}function $p(e,t){Yr=$o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ks(e,n)}}var Do={readContext:Ve,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},j1={readContext:Ve,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:bc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,lo(4194308,4,Ip.bind(null,t,e),n)},useLayoutEffect:function(e,t){return lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return lo(4,2,e,t)},useMemo:function(e,t){var n=rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=R1.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:Dc,useDebugValue:yu,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=Dc(!1),t=e[0];return e=A1.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=rt();if(K){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ue===null)throw Error(C(349));Pn&30||Ep(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,bc(Pp.bind(null,r,o,e),[e]),r.flags|=2048,mi(9,Cp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=rt(),t=ue.identifierPrefix;if(K){var n=vt,r=gt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=di++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=I1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},M1={readContext:Ve,useCallback:Rp,useContext:Ve,useEffect:vu,useImperativeHandle:Ap,useInsertionEffect:Tp,useLayoutEffect:zp,useMemo:Lp,useReducer:Xa,useRef:Op,useState:function(){return Xa(pi)},useDebugValue:yu,useDeferredValue:function(e){var t=He();return jp(t,oe.memoizedState,e)},useTransition:function(){var e=Xa(pi)[0],t=He().memoizedState;return[e,t]},useMutableSource:Sp,useSyncExternalStore:kp,useId:Mp,unstable_isNewReconciler:!1},F1={readContext:Ve,useCallback:Rp,useContext:Ve,useEffect:vu,useImperativeHandle:Ap,useInsertionEffect:Tp,useLayoutEffect:zp,useMemo:Lp,useReducer:Za,useRef:Op,useState:function(){return Za(pi)},useDebugValue:yu,useDeferredValue:function(e){var t=He();return oe===null?t.memoizedState=e:jp(t,oe.memoizedState,e)},useTransition:function(){var e=Za(pi)[0],t=He().memoizedState;return[e,t]},useMutableSource:Sp,useSyncExternalStore:kp,useId:Mp,unstable_isNewReconciler:!1};function Ke(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Hl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sa={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),i=Yt(e),o=yt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Vt(e,o,i),t!==null&&(qe(t,e,i,r),oo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),i=Yt(e),o=yt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Vt(e,o,i),t!==null&&(qe(t,e,i,r),oo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Yt(e),i=yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Vt(e,i,r),t!==null&&(qe(t,e,r,n),oo(t,e,r))}};function Uc(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ai(n,r)||!ai(i,o):!0}function bp(e,t,n){var r=!1,i=Zt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ve(o):(i=Pe(t)?En:ve.current,r=t.contextTypes,o=(r=r!=null)?or(e,i):Zt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Bc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sa.enqueueReplaceState(t,t.state,null)}function Yl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},cu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ve(o):(o=Pe(t)?En:ve.current,i.context=or(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Hl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&sa.enqueueReplaceState(i,i.state,null),Mo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,t){try{var n="",r=t;do n+=f0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ja(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $1=typeof WeakMap=="function"?WeakMap:Map;function Up(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Uo||(Uo=!0,rs=r),Ql(e,t)},n}function Bp(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ql(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ql(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Wc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=J1.bind(null,e,t,n),t.then(e,e))}function Vc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e)}var D1=Pt.ReactCurrentOwner,Ee=!1;function ye(e,t,n,r){t.child=e===null?vp(t,null,n,r):lr(t,e.child,n,r)}function Yc(e,t,n,r,i){n=n.render;var o=t.ref;return tr(t,i),r=hu(e,t,n,r,o,i),n=gu(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(K&&n&&ru(t),t.flags|=1,ye(e,t,r,i),t.child)}function Qc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!_u(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Wp(e,t,o,r,i)):(e=fo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ai,n(a,r)&&e.ref===t.ref)return kt(e,t,i)}return t.flags|=1,e=Qt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Wp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ai(o,r)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,kt(e,t,i)}return Gl(e,t,n,r,i)}function Vp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Qn,ze),ze|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Qn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(Qn,ze),ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(Qn,ze),ze|=r;return ye(e,t,i,n),t.child}function Hp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gl(e,t,n,r,i){var o=Pe(n)?En:ve.current;return o=or(t,o),tr(t,i),n=hu(e,t,n,r,o,i),r=gu(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(K&&r&&ru(t),t.flags|=1,ye(e,t,n,i),t.child)}function Gc(e,t,n,r,i){if(Pe(n)){var o=!0;Io(t)}else o=!1;if(tr(t,i),t.stateNode===null)so(e,t),bp(t,n,r),Yl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=Pe(n)?En:ve.current,u=or(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Bc(t,a,r,u),Rt=!1;var h=t.memoizedState;a.state=h,Mo(t,r,a,i),s=t.memoizedState,l!==r||h!==s||Ce.current||Rt?(typeof f=="function"&&(Hl(t,n,f,r),s=t.memoizedState),(l=Rt||Uc(t,n,l,r,h,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,xp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ke(t.type,l),a.props=u,d=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ve(s):(s=Pe(n)?En:ve.current,s=or(t,s));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||h!==s)&&Bc(t,a,r,s),Rt=!1,h=t.memoizedState,a.state=h,Mo(t,r,a,i);var v=t.memoizedState;l!==d||h!==v||Ce.current||Rt?(typeof g=="function"&&(Hl(t,n,g,r),v=t.memoizedState),(u=Rt||Uc(t,n,u,r,h,v,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Kl(e,t,n,r,o,i)}function Kl(e,t,n,r,i,o){Hp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Rc(t,n,!1),kt(e,t,o);r=t.stateNode,D1.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=lr(t,e.child,null,o),t.child=lr(t,null,l,o)):ye(e,t,l,o),t.memoizedState=r.state,i&&Rc(t,n,!0),t.child}function Yp(e){var t=e.stateNode;t.pendingContext?Ac(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ac(e,t.context,!1),fu(e,t.containerInfo)}function Kc(e,t,n,r,i){return ar(),ou(i),t.flags|=256,ye(e,t,n,r),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function Zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qp(e,t,n){var r=t.pendingProps,i=Z.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(Z,i&1),e===null)return Wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=fa(a,r,0,null),e=xn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Zl(n),t.memoizedState=Xl,e):xu(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return b1(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Qt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Qt(l,o):(o=xn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Zl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Xl,r}return o=e.child,e=o.sibling,r=Qt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xu(e,t){return t=fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qi(e,t,n,r){return r!==null&&ou(r),lr(t,e.child,null,n),e=xu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function b1(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ja(Error(C(422))),Qi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=fa({mode:"visible",children:r.children},i,0,null),o=xn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&lr(t,e.child,null,a),t.child.memoizedState=Zl(a),t.memoizedState=Xl,o);if(!(t.mode&1))return Qi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(C(419)),r=Ja(o,r,void 0),Qi(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ee||l){if(r=ue,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,St(e,i),qe(r,e,i,-1))}return Pu(),r=Ja(Error(C(421))),Qi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=q1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ie=Wt(i.nextSibling),Ae=t,K=!0,Ze=null,e!==null&&(De[be++]=gt,De[be++]=vt,De[be++]=Cn,gt=e.id,vt=e.overflow,Cn=t),t=xu(t,r.children),t.flags|=4096,t)}function Xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vl(e.return,t,n)}function qa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Gp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ye(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xc(e,n,t);else if(e.tag===19)Xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Z,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qa(t,!0,n,null,o);break;case"together":qa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function so(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function U1(e,t,n){switch(t.tag){case 3:Yp(t),ar();break;case 5:wp(t);break;case 1:Pe(t.type)&&Io(t);break;case 4:fu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(Lo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?Qp(e,t,n):(V(Z,Z.current&1),e=kt(e,t,n),e!==null?e.sibling:null);V(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Vp(e,t,n)}return kt(e,t,n)}var Kp,Jl,Xp,Zp;Kp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jl=function(){};Xp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gn(ct.current);var o=null;switch(n){case"input":i=wl(e,i),r=wl(e,r),o=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":i=El(e,i),r=El(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=To)}Pl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&H("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Zp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ar(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function B1(e,t,n){var r=t.pendingProps;switch(iu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Pe(t.type)&&zo(),me(t),null;case 3:return r=t.stateNode,sr(),Q(Ce),Q(ve),pu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(as(Ze),Ze=null))),Jl(e,t),me(t),null;case 5:du(t);var i=gn(fi.current);if(n=t.type,e!==null&&t.stateNode!=null)Xp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return me(t),null}if(e=gn(ct.current),Hi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[ui]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Fr.length;i++)H(Fr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":oc(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":lc(r,o),H("invalid",r)}Pl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Vi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Vi(r.textContent,l,e),i=["children",""+l]):qr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&H("scroll",r)}switch(n){case"input":Mi(r),ac(r,o,!0);break;case"textarea":Mi(r),sc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=To)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[at]=t,e[ui]=r,Kp(e,t,!1,!1),t.stateNode=e;e:{switch(a=_l(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Fr.length;i++)H(Fr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":oc(e,r),i=wl(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),H("invalid",e);break;case"textarea":lc(e,r),i=El(e,r),H("invalid",e);break;default:i=r}Pl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Od(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&_d(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ei(e,s):typeof s=="number"&&ei(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(qr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&H("scroll",e):s!=null&&Ws(e,o,s,a))}switch(n){case"input":Mi(e),ac(e,r,!1);break;case"textarea":Mi(e),sc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=To)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)Zp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=gn(fi.current),gn(ct.current),Hi(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=Ae,e!==null))switch(e.tag){case 3:Vi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return me(t),null;case 13:if(Q(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ie!==null&&t.mode&1&&!(t.flags&128))hp(),ar(),t.flags|=98560,o=!1;else if(o=Hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[at]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),o=!1}else Ze!==null&&(as(Ze),Ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ae===0&&(ae=3):Pu())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return sr(),Jl(e,t),e===null&&li(t.stateNode.containerInfo),me(t),null;case 10:return su(t.type._context),me(t),null;case 17:return Pe(t.type)&&zo(),me(t),null;case 19:if(Q(Z),o=t.memoizedState,o===null)return me(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Ar(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Fo(e),a!==null){for(t.flags|=128,Ar(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Z,Z.current&1|2),t.child}e=e.sibling}o.tail!==null&&te()>cr&&(t.flags|=128,r=!0,Ar(o,!1),t.lanes=4194304)}else{if(!r)if(e=Fo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ar(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!K)return me(t),null}else 2*te()-o.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,r=!0,Ar(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,n=Z.current,V(Z,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Cu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function W1(e,t){switch(iu(t),t.tag){case 1:return Pe(t.type)&&zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),Q(Ce),Q(ve),pu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return du(t),null;case 13:if(Q(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(Z),null;case 4:return sr(),null;case 10:return su(t.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var Gi=!1,he=!1,V1=typeof WeakSet=="function"?WeakSet:Set,O=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function ql(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Zc=!1;function H1(e,t){if(Ml=_o,e=np(),nu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,f=0,d=e,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===e)break t;if(h===n&&++u===i&&(l=a),h===o&&++f===r&&(s=a),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fl={focusedElem:e,selectionRange:n},_o=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,S=v.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ke(t.type,x),S);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(y){ee(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return v=Zc,Zc=!1,v}function Qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ql(t,n,o)}i=i.next}while(i!==r)}}function ua(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function es(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jp(e){var t=e.alternate;t!==null&&(e.alternate=null,Jp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[ui],delete t[bl],delete t[N1],delete t[O1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qp(e){return e.tag===5||e.tag===3||e.tag===4}function Jc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ts(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=To));else if(r!==4&&(e=e.child,e!==null))for(ts(e,t,n),e=e.sibling;e!==null;)ts(e,t,n),e=e.sibling}function ns(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ns(e,t,n),e=e.sibling;e!==null;)ns(e,t,n),e=e.sibling}var ce=null,Xe=!1;function Tt(e,t,n){for(n=n.child;n!==null;)em(e,t,n),n=n.sibling}function em(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(ta,n)}catch{}switch(n.tag){case 5:he||Yn(n,t);case 6:var r=ce,i=Xe;ce=null,Tt(e,t,n),ce=r,Xe=i,ce!==null&&(Xe?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Xe?(e=ce,n=n.stateNode,e.nodeType===8?Ya(e.parentNode,n):e.nodeType===1&&Ya(e,n),ii(e)):Ya(ce,n.stateNode));break;case 4:r=ce,i=Xe,ce=n.stateNode.containerInfo,Xe=!0,Tt(e,t,n),ce=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ql(n,t,a),i=i.next}while(i!==r)}Tt(e,t,n);break;case 1:if(!he&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ee(n,t,l)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,Tt(e,t,n),he=r):Tt(e,t,n);break;default:Tt(e,t,n)}}function qc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new V1),t.forEach(function(r){var i=eg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ce=l.stateNode,Xe=!1;break e;case 3:ce=l.stateNode.containerInfo,Xe=!0;break e;case 4:ce=l.stateNode.containerInfo,Xe=!0;break e}l=l.return}if(ce===null)throw Error(C(160));em(o,a,i),ce=null,Xe=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tm(t,e),t=t.sibling}function tm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),nt(e),r&4){try{Qr(3,e,e.return),ua(3,e)}catch(x){ee(e,e.return,x)}try{Qr(5,e,e.return)}catch(x){ee(e,e.return,x)}}break;case 1:Ge(t,e),nt(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(Ge(t,e),nt(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var i=e.stateNode;try{ei(i,"")}catch(x){ee(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Ed(i,o),_l(l,a);var u=_l(l,o);for(a=0;a<s.length;a+=2){var f=s[a],d=s[a+1];f==="style"?Od(i,d):f==="dangerouslySetInnerHTML"?_d(i,d):f==="children"?ei(i,d):Ws(i,f,d,u)}switch(l){case"input":Sl(i,o);break;case"textarea":Cd(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Zn(i,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?Zn(i,!!o.multiple,o.defaultValue,!0):Zn(i,!!o.multiple,o.multiple?[]:"",!1))}i[ui]=o}catch(x){ee(e,e.return,x)}}break;case 6:if(Ge(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ee(e,e.return,x)}}break;case 3:if(Ge(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ii(t.containerInfo)}catch(x){ee(e,e.return,x)}break;case 4:Ge(t,e),nt(e);break;case 13:Ge(t,e),nt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ku=te())),r&4&&qc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(he=(u=he)||f,Ge(t,e),he=u):Ge(t,e),nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(O=e,f=e.child;f!==null;){for(d=O=f;O!==null;){switch(h=O,g=h.child,h.tag){case 0:case 11:case 14:case 15:Qr(4,h,h.return);break;case 1:Yn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){ee(r,n,x)}}break;case 5:Yn(h,h.return);break;case 22:if(h.memoizedState!==null){tf(d);continue}}g!==null?(g.return=h,O=g):tf(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Nd("display",a))}catch(x){ee(e,e.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){ee(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ge(t,e),nt(e),r&4&&qc(e);break;case 21:break;default:Ge(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qp(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ei(i,""),r.flags&=-33);var o=Jc(e);ns(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Jc(e);ts(e,l,a);break;default:throw Error(C(161))}}catch(s){ee(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Y1(e,t,n){O=e,nm(e)}function nm(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Gi;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||he;l=Gi;var u=he;if(Gi=a,(he=s)&&!u)for(O=i;O!==null;)a=O,s=a.child,a.tag===22&&a.memoizedState!==null?nf(i):s!==null?(s.return=a,O=s):nf(i);for(;o!==null;)O=o,nm(o),o=o.sibling;O=i,Gi=l,he=u}ef(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):ef(e)}}function ef(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||ua(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&$c(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$c(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ii(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}he||t.flags&512&&es(t)}catch(h){ee(t,t.return,h)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function tf(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function nf(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ua(4,t)}catch(s){ee(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ee(t,i,s)}}var o=t.return;try{es(t)}catch(s){ee(t,o,s)}break;case 5:var a=t.return;try{es(t)}catch(s){ee(t,a,s)}}}catch(s){ee(t,t.return,s)}if(t===e){O=null;break}var l=t.sibling;if(l!==null){l.return=t.return,O=l;break}O=t.return}}var Q1=Math.ceil,bo=Pt.ReactCurrentDispatcher,wu=Pt.ReactCurrentOwner,We=Pt.ReactCurrentBatchConfig,$=0,ue=null,re=null,fe=0,ze=0,Qn=nn(0),ae=0,hi=null,_n=0,ca=0,Su=0,Gr=null,ke=null,ku=0,cr=1/0,pt=null,Uo=!1,rs=null,Ht=null,Ki=!1,Ft=null,Bo=0,Kr=0,is=null,uo=-1,co=0;function xe(){return $&6?te():uo!==-1?uo:uo=te()}function Yt(e){return e.mode&1?$&2&&fe!==0?fe&-fe:z1.transition!==null?(co===0&&(co=bd()),co):(e=b,e!==0||(e=window.event,e=e===void 0?16:Qd(e.type)),e):1}function qe(e,t,n,r){if(50<Kr)throw Kr=0,is=null,Error(C(185));Ci(e,n,r),(!($&2)||e!==ue)&&(e===ue&&(!($&2)&&(ca|=n),ae===4&&jt(e,fe)),_e(e,r),n===1&&$===0&&!(t.mode&1)&&(cr=te()+500,aa&&rn()))}function _e(e,t){var n=e.callbackNode;z0(e,t);var r=Po(e,e===ue?fe:0);if(r===0)n!==null&&fc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fc(n),t===1)e.tag===0?T1(rf.bind(null,e)):dp(rf.bind(null,e)),P1(function(){!($&6)&&rn()}),n=null;else{switch(Ud(r)){case 1:n=Gs;break;case 4:n=$d;break;case 16:n=Co;break;case 536870912:n=Dd;break;default:n=Co}n=cm(n,rm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rm(e,t){if(uo=-1,co=0,$&6)throw Error(C(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=Po(e,e===ue?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Wo(e,r);else{t=r;var i=$;$|=2;var o=om();(ue!==e||fe!==t)&&(pt=null,cr=te()+500,yn(e,t));do try{X1();break}catch(l){im(e,l)}while(!0);lu(),bo.current=o,$=i,re!==null?t=0:(ue=null,fe=0,t=ae)}if(t!==0){if(t===2&&(i=Il(e),i!==0&&(r=i,t=os(e,i))),t===1)throw n=hi,yn(e,0),jt(e,r),_e(e,te()),n;if(t===6)jt(e,r);else{if(i=e.current.alternate,!(r&30)&&!G1(i)&&(t=Wo(e,r),t===2&&(o=Il(e),o!==0&&(r=o,t=os(e,o))),t===1))throw n=hi,yn(e,0),jt(e,r),_e(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:dn(e,ke,pt);break;case 3:if(jt(e,r),(r&130023424)===r&&(t=ku+500-te(),10<t)){if(Po(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Dl(dn.bind(null,e,ke,pt),t);break}dn(e,ke,pt);break;case 4:if(jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Je(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Q1(r/1960))-r,10<r){e.timeoutHandle=Dl(dn.bind(null,e,ke,pt),r);break}dn(e,ke,pt);break;case 5:dn(e,ke,pt);break;default:throw Error(C(329))}}}return _e(e,te()),e.callbackNode===n?rm.bind(null,e):null}function os(e,t){var n=Gr;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=Wo(e,t),e!==2&&(t=ke,ke=n,t!==null&&as(t)),e}function as(e){ke===null?ke=e:ke.push.apply(ke,e)}function G1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~Su,t&=~ca,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function rf(e){if($&6)throw Error(C(327));nr();var t=Po(e,0);if(!(t&1))return _e(e,te()),null;var n=Wo(e,t);if(e.tag!==0&&n===2){var r=Il(e);r!==0&&(t=r,n=os(e,r))}if(n===1)throw n=hi,yn(e,0),jt(e,t),_e(e,te()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dn(e,ke,pt),_e(e,te()),null}function Eu(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(cr=te()+500,aa&&rn())}}function Nn(e){Ft!==null&&Ft.tag===0&&!($&6)&&nr();var t=$;$|=1;var n=We.transition,r=b;try{if(We.transition=null,b=1,e)return e()}finally{b=r,We.transition=n,$=t,!($&6)&&rn()}}function Cu(){ze=Qn.current,Q(Qn)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,C1(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(iu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zo();break;case 3:sr(),Q(Ce),Q(ve),pu();break;case 5:du(r);break;case 4:sr();break;case 13:Q(Z);break;case 19:Q(Z);break;case 10:su(r.type._context);break;case 22:case 23:Cu()}n=n.return}if(ue=e,re=e=Qt(e.current,null),fe=ze=t,ae=0,hi=null,Su=ca=_n=0,ke=Gr=null,hn!==null){for(t=0;t<hn.length;t++)if(n=hn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}hn=null}return e}function im(e,t){do{var n=re;try{if(lu(),ao.current=Do,$o){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$o=!1}if(Pn=0,le=oe=J=null,Yr=!1,di=0,wu.current=null,n===null||n.return===null){ae=1,hi=t,re=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=fe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Vc(a);if(g!==null){g.flags&=-257,Hc(g,a,l,o,t),g.mode&1&&Wc(o,u,t),t=g,s=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(s),t.updateQueue=x}else v.add(s);break e}else{if(!(t&1)){Wc(o,u,t),Pu();break e}s=Error(C(426))}}else if(K&&l.mode&1){var S=Vc(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Hc(S,a,l,o,t),ou(ur(s,l));break e}}o=s=ur(s,l),ae!==4&&(ae=2),Gr===null?Gr=[o]:Gr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Up(o,s,t);Fc(o,p);break e;case 1:l=s;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ht===null||!Ht.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Bp(o,l,t);Fc(o,y);break e}}o=o.return}while(o!==null)}lm(n)}catch(w){t=w,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function om(){var e=bo.current;return bo.current=Do,e===null?Do:e}function Pu(){(ae===0||ae===3||ae===2)&&(ae=4),ue===null||!(_n&268435455)&&!(ca&268435455)||jt(ue,fe)}function Wo(e,t){var n=$;$|=2;var r=om();(ue!==e||fe!==t)&&(pt=null,yn(e,t));do try{K1();break}catch(i){im(e,i)}while(!0);if(lu(),$=n,bo.current=r,re!==null)throw Error(C(261));return ue=null,fe=0,ae}function K1(){for(;re!==null;)am(re)}function X1(){for(;re!==null&&!S0();)am(re)}function am(e){var t=um(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?lm(e):re=t,wu.current=null}function lm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=W1(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,re=null;return}}else if(n=B1(n,t,ze),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ae===0&&(ae=5)}function dn(e,t,n){var r=b,i=We.transition;try{We.transition=null,b=1,Z1(e,t,n,r)}finally{We.transition=i,b=r}return null}function Z1(e,t,n,r){do nr();while(Ft!==null);if($&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(I0(e,o),e===ue&&(re=ue=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ki||(Ki=!0,cm(Co,function(){return nr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=We.transition,We.transition=null;var a=b;b=1;var l=$;$|=4,wu.current=null,H1(e,n),tm(n,e),v1(Fl),_o=!!Ml,Fl=Ml=null,e.current=n,Y1(n),k0(),$=l,b=a,We.transition=o}else e.current=n;if(Ki&&(Ki=!1,Ft=e,Bo=i),o=e.pendingLanes,o===0&&(Ht=null),P0(n.stateNode),_e(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Uo)throw Uo=!1,e=rs,rs=null,e;return Bo&1&&e.tag!==0&&nr(),o=e.pendingLanes,o&1?e===is?Kr++:(Kr=0,is=e):Kr=0,rn(),null}function nr(){if(Ft!==null){var e=Ud(Bo),t=We.transition,n=b;try{if(We.transition=null,b=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,Bo=0,$&6)throw Error(C(331));var i=$;for($|=4,O=e.current;O!==null;){var o=O,a=o.child;if(O.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(O=u;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:Qr(8,f,o)}var d=f.child;if(d!==null)d.return=f,O=d;else for(;O!==null;){f=O;var h=f.sibling,g=f.return;if(Jp(f),f===u){O=null;break}if(h!==null){h.return=g,O=h;break}O=g}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}O=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,O=a;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Qr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,O=p;break e}O=o.return}}var c=e.current;for(O=c;O!==null;){a=O;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,O=m;else e:for(a=c;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ua(9,l)}}catch(w){ee(l,l.return,w)}if(l===a){O=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,O=y;break e}O=l.return}}if($=i,rn(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(ta,e)}catch{}r=!0}return r}finally{b=n,We.transition=t}}return!1}function of(e,t,n){t=ur(n,t),t=Up(e,t,1),e=Vt(e,t,1),t=xe(),e!==null&&(Ci(e,1,t),_e(e,t))}function ee(e,t,n){if(e.tag===3)of(e,e,n);else for(;t!==null;){if(t.tag===3){of(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=ur(n,e),e=Bp(t,e,1),t=Vt(t,e,1),e=xe(),t!==null&&(Ci(t,1,e),_e(t,e));break}}t=t.return}}function J1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(fe&n)===n&&(ae===4||ae===3&&(fe&130023424)===fe&&500>te()-ku?yn(e,0):Su|=n),_e(e,t)}function sm(e,t){t===0&&(e.mode&1?(t=Di,Di<<=1,!(Di&130023424)&&(Di=4194304)):t=1);var n=xe();e=St(e,t),e!==null&&(Ci(e,t,n),_e(e,n))}function q1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sm(e,n)}function eg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),sm(e,n)}var um;um=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,U1(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,K&&t.flags&1048576&&pp(t,Ro,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;so(e,t),e=t.pendingProps;var i=or(t,ve.current);tr(t,n),i=hu(null,t,r,e,i,n);var o=gu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(o=!0,Io(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cu(t),i.updater=sa,t.stateNode=i,i._reactInternals=t,Yl(t,r,e,n),t=Kl(null,t,r,!0,o,n)):(t.tag=0,K&&o&&ru(t),ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(so(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ng(r),e=Ke(r,e),i){case 0:t=Gl(null,t,r,e,n);break e;case 1:t=Gc(null,t,r,e,n);break e;case 11:t=Yc(null,t,r,e,n);break e;case 14:t=Qc(null,t,r,Ke(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Gl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Gc(e,t,r,i,n);case 3:e:{if(Yp(t),e===null)throw Error(C(387));r=t.pendingProps,o=t.memoizedState,i=o.element,xp(e,t),Mo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ur(Error(C(423)),t),t=Kc(e,t,r,n,i);break e}else if(r!==i){i=ur(Error(C(424)),t),t=Kc(e,t,r,n,i);break e}else for(Ie=Wt(t.stateNode.containerInfo.firstChild),Ae=t,K=!0,Ze=null,n=vp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){t=kt(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return wp(t),e===null&&Wl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,$l(r,i)?a=null:o!==null&&$l(r,o)&&(t.flags|=32),Hp(e,t),ye(e,t,a,n),t.child;case 6:return e===null&&Wl(t),null;case 13:return Qp(e,t,n);case 4:return fu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lr(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Yc(e,t,r,i,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,V(Lo,r._currentValue),r._currentValue=a,o!==null)if(tt(o.value,a)){if(o.children===i.children&&!Ce.current){t=kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=yt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Vl(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(C(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Vl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,tr(t,n),i=Ve(i),r=r(i),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,i=Ke(r,t.pendingProps),i=Ke(r.type,i),Qc(e,t,r,i,n);case 15:return Wp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),so(e,t),t.tag=1,Pe(r)?(e=!0,Io(t)):e=!1,tr(t,n),bp(t,r,i),Yl(t,r,i,n),Kl(null,t,r,!0,e,n);case 19:return Gp(e,t,n);case 22:return Vp(e,t,n)}throw Error(C(156,t.tag))};function cm(e,t){return Fd(e,t)}function tg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,n,r){return new tg(e,t,n,r)}function _u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ng(e){if(typeof e=="function")return _u(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hs)return 11;if(e===Ys)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=Be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")_u(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Fn:return xn(n.children,i,o,t);case Vs:a=8,i|=8;break;case gl:return e=Be(12,n,t,i|2),e.elementType=gl,e.lanes=o,e;case vl:return e=Be(13,n,t,i),e.elementType=vl,e.lanes=o,e;case yl:return e=Be(19,n,t,i),e.elementType=yl,e.lanes=o,e;case wd:return fa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yd:a=10;break e;case xd:a=9;break e;case Hs:a=11;break e;case Ys:a=14;break e;case At:a=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Be(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function xn(e,t,n,r){return e=Be(7,e,r,t),e.lanes=n,e}function fa(e,t,n,r){return e=Be(22,e,r,t),e.elementType=wd,e.lanes=n,e.stateNode={isHidden:!1},e}function el(e,t,n){return e=Be(6,e,null,t),e.lanes=n,e}function tl(e,t,n){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ja(0),this.expirationTimes=ja(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ja(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nu(e,t,n,r,i,o,a,l,s){return e=new rg(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Be(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cu(o),e}function ig(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fm(e){if(!e)return Zt;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Pe(n))return fp(e,n,t)}return t}function dm(e,t,n,r,i,o,a,l,s){return e=Nu(n,r,!0,e,i,o,a,l,s),e.context=fm(null),n=e.current,r=xe(),i=Yt(n),o=yt(r,i),o.callback=t??null,Vt(n,o,i),e.current.lanes=i,Ci(e,i,r),_e(e,r),e}function da(e,t,n,r){var i=t.current,o=xe(),a=Yt(i);return n=fm(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(i,t,a),e!==null&&(qe(e,i,a,o),oo(e,i,a)),a}function Vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ou(e,t){af(e,t),(e=e.alternate)&&af(e,t)}function og(){return null}var pm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tu(e){this._internalRoot=e}pa.prototype.render=Tu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));da(e,t,null,null)};pa.prototype.unmount=Tu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nn(function(){da(null,e,null,null)}),t[wt]=null}};function pa(e){this._internalRoot=e}pa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&Yd(e)}};function zu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lf(){}function ag(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Vo(a);o.call(u)}}var a=dm(t,r,e,0,null,!1,!1,"",lf);return e._reactRootContainer=a,e[wt]=a.current,li(e.nodeType===8?e.parentNode:e),Nn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Vo(s);l.call(u)}}var s=Nu(e,0,!1,null,null,!1,!1,"",lf);return e._reactRootContainer=s,e[wt]=s.current,li(e.nodeType===8?e.parentNode:e),Nn(function(){da(t,s,n,r)}),s}function ha(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Vo(a);l.call(s)}}da(t,a,e,i)}else a=ag(n,t,e,i,r);return Vo(a)}Bd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mr(t.pendingLanes);n!==0&&(Ks(t,n|1),_e(t,te()),!($&6)&&(cr=te()+500,rn()))}break;case 13:Nn(function(){var r=St(e,1);if(r!==null){var i=xe();qe(r,e,1,i)}}),Ou(e,1)}};Xs=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=xe();qe(t,e,134217728,n)}Ou(e,134217728)}};Wd=function(e){if(e.tag===13){var t=Yt(e),n=St(e,t);if(n!==null){var r=xe();qe(n,e,t,r)}Ou(e,t)}};Vd=function(){return b};Hd=function(e,t){var n=b;try{return b=e,t()}finally{b=n}};Ol=function(e,t,n){switch(t){case"input":if(Sl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=oa(r);if(!i)throw Error(C(90));kd(r),Sl(r,i)}}}break;case"textarea":Cd(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};Id=Eu;Ad=Nn;var lg={usingClientEntryPoint:!1,Events:[_i,Un,oa,Td,zd,Eu]},Rr={findFiberByHostInstance:mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sg={bundleType:Rr.bundleType,version:Rr.version,rendererPackageName:Rr.rendererPackageName,rendererConfig:Rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jd(e),e===null?null:e.stateNode},findFiberByHostInstance:Rr.findFiberByHostInstance||og,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{ta=Xi.inject(sg),ut=Xi}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lg;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zu(t))throw Error(C(200));return ig(e,t,null,n)};Me.createRoot=function(e,t){if(!zu(e))throw Error(C(299));var n=!1,r="",i=pm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Nu(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,li(e.nodeType===8?e.parentNode:e),new Tu(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=jd(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return Nn(e)};Me.hydrate=function(e,t,n){if(!ma(t))throw Error(C(200));return ha(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!zu(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=pm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=dm(t,null,e,1,n??null,i,!1,o,a),e[wt]=t.current,li(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new pa(t)};Me.render=function(e,t,n){if(!ma(t))throw Error(C(200));return ha(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!ma(e))throw Error(C(40));return e._reactRootContainer?(Nn(function(){ha(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Me.unstable_batchedUpdates=Eu;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ma(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return ha(e,t,n,!1,r)};Me.version="18.3.1-next-f1338f8080-20240426";function mm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mm)}catch(e){console.error(e)}}mm(),md.exports=Me;var ug=md.exports,sf=ug;ml.createRoot=sf.createRoot,ml.hydrateRoot=sf.hydrateRoot;var ge=function(){return ge=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ge.apply(this,arguments)};function gi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Y="-ms-",Xr="-moz-",D="-webkit-",hm="comm",ga="rule",Iu="decl",cg="@import",gm="@keyframes",fg="@layer",vm=Math.abs,Au=String.fromCharCode,ls=Object.assign;function dg(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function ym(e){return e.trim()}function mt(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function po(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function fr(e,t,n){return e.slice(t,n)}function it(e){return e.length}function xm(e){return e.length}function $r(e,t){return t.push(e),e}function pg(e,t){return e.map(t).join("")}function uf(e,t){return e.filter(function(n){return!mt(n,t)})}var va=1,dr=1,wm=0,Ye=0,ne=0,Sr="";function ya(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:va,column:dr,length:a,return:"",siblings:l}}function It(e,t){return ls(ya("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jn(e){for(;e.root;)e=It(e.root,{children:[e]});$r(e,e.siblings)}function mg(){return ne}function hg(){return ne=Ye>0?se(Sr,--Ye):0,dr--,ne===10&&(dr=1,va--),ne}function et(){return ne=Ye<wm?se(Sr,Ye++):0,dr++,ne===10&&(dr=1,va++),ne}function wn(){return se(Sr,Ye)}function mo(){return Ye}function xa(e,t){return fr(Sr,e,t)}function ss(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gg(e){return va=dr=1,wm=it(Sr=e),Ye=0,[]}function vg(e){return Sr="",e}function nl(e){return ym(xa(Ye-1,us(e===91?e+2:e===40?e+1:e)))}function yg(e){for(;(ne=wn())&&ne<33;)et();return ss(e)>2||ss(ne)>3?"":" "}function xg(e,t){for(;--t&&et()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return xa(e,mo()+(t<6&&wn()==32&&et()==32))}function us(e){for(;et();)switch(ne){case e:return Ye;case 34:case 39:e!==34&&e!==39&&us(ne);break;case 40:e===41&&us(e);break;case 92:et();break}return Ye}function wg(e,t){for(;et()&&e+ne!==57;)if(e+ne===84&&wn()===47)break;return"/*"+xa(t,Ye-1)+"*"+Au(e===47?e:et())}function Sg(e){for(;!ss(wn());)et();return xa(e,Ye)}function kg(e){return vg(ho("",null,null,null,[""],e=gg(e),0,[0],e))}function ho(e,t,n,r,i,o,a,l,s){for(var u=0,f=0,d=a,h=0,g=0,v=0,x=1,S=1,p=1,c=0,m="",y=i,w=o,P=r,k=m;S;)switch(v=c,c=et()){case 40:if(v!=108&&se(k,d-1)==58){po(k+=L(nl(c),"&","&\f"),"&\f",vm(u?l[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:k+=nl(c);break;case 9:case 10:case 13:case 32:k+=yg(v);break;case 92:k+=xg(mo()-1,7);continue;case 47:switch(wn()){case 42:case 47:$r(Eg(wg(et(),mo()),t,n,s),s);break;default:k+="/"}break;case 123*x:l[u++]=it(k)*p;case 125*x:case 59:case 0:switch(c){case 0:case 125:S=0;case 59+f:p==-1&&(k=L(k,/\f/g,"")),g>0&&it(k)-d&&$r(g>32?ff(k+";",r,n,d-1,s):ff(L(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if($r(P=cf(k,t,n,u,f,i,l,m,y=[],w=[],d,o),o),c===123)if(f===0)ho(k,t,P,P,y,o,d,l,w);else switch(h===99&&se(k,3)===110?100:h){case 100:case 108:case 109:case 115:ho(e,P,P,r&&$r(cf(e,P,P,0,0,i,l,m,i,y=[],d,w),w),i,w,d,l,r?y:w);break;default:ho(k,P,P,P,[""],w,0,l,w)}}u=f=g=0,x=p=1,m=k="",d=a;break;case 58:d=1+it(k),g=v;default:if(x<1){if(c==123)--x;else if(c==125&&x++==0&&hg()==125)continue}switch(k+=Au(c),c*x){case 38:p=f>0?1:(k+="\f",-1);break;case 44:l[u++]=(it(k)-1)*p,p=1;break;case 64:wn()===45&&(k+=nl(et())),h=wn(),f=d=it(m=k+=Sg(mo())),c++;break;case 45:v===45&&it(k)==2&&(x=0)}}return o}function cf(e,t,n,r,i,o,a,l,s,u,f,d){for(var h=i-1,g=i===0?o:[""],v=xm(g),x=0,S=0,p=0;x<r;++x)for(var c=0,m=fr(e,h+1,h=vm(S=a[x])),y=e;c<v;++c)(y=ym(S>0?g[c]+" "+m:L(m,/&\f/g,g[c])))&&(s[p++]=y);return ya(e,t,n,i===0?ga:l,s,u,f,d)}function Eg(e,t,n,r){return ya(e,t,n,hm,Au(mg()),fr(e,2,-2),0,r)}function ff(e,t,n,r,i){return ya(e,t,n,Iu,fr(e,0,r),fr(e,r+1,-1),r,i)}function Sm(e,t,n){switch(dg(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 4789:return Xr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+Xr+e+Y+e+e;case 5936:switch(se(e,t+11)){case 114:return D+e+Y+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+Y+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+Y+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return D+e+Y+e+e;case 6165:return D+e+Y+"flex-"+e+e;case 5187:return D+e+L(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return D+e+Y+"flex-item-"+L(e,/flex-|-self/g,"")+(mt(e,/flex-|baseline/)?"":Y+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return D+e+Y+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return D+e+Y+L(e,"shrink","negative")+e;case 5292:return D+e+Y+L(e,"basis","preferred-size")+e;case 6060:return D+"box-"+L(e,"-grow","")+D+e+Y+L(e,"grow","positive")+e;case 4554:return D+L(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4200:if(!mt(e,/flex-|baseline/))return Y+"grid-column-align"+fr(e,t)+e;break;case 2592:case 3360:return Y+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,mt(r.props,/grid-\w+-end/)})?~po(e+(n=n[t].value),"span",0)?e:Y+L(e,"-start","")+e+Y+"grid-row-span:"+(~po(n,"span",0)?mt(n,/\d+/):+mt(n,/\d+/)-+mt(e,/\d+/))+";":Y+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return mt(r.props,/grid-\w+-start/)})?e:Y+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(it(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+Xr+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~po(e,"stretch",0)?Sm(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return Y+i+":"+o+u+(a?Y+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(se(e,t+6)===121)return L(e,":",":"+D)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+D+(se(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+Y+"$2box$3")+e;case 100:return L(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function Ho(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Cg(e,t,n,r){switch(e.type){case fg:if(e.children.length)break;case cg:case Iu:return e.return=e.return||e.value;case hm:return"";case gm:return e.return=e.value+"{"+Ho(e.children,r)+"}";case ga:if(!it(e.value=e.props.join(",")))return""}return it(n=Ho(e.children,r))?e.return=e.value+"{"+n+"}":""}function Pg(e){var t=xm(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function _g(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ng(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Iu:e.return=Sm(e.value,e.length,n);return;case gm:return Ho([It(e,{value:L(e.value,"@","@"+D)})],r);case ga:if(e.length)return pg(n=e.props,function(i){switch(mt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jn(It(e,{props:[L(i,/:(read-\w+)/,":"+Xr+"$1")]})),jn(It(e,{props:[i]})),ls(e,{props:uf(n,r)});break;case"::placeholder":jn(It(e,{props:[L(i,/:(plac\w+)/,":"+D+"input-$1")]})),jn(It(e,{props:[L(i,/:(plac\w+)/,":"+Xr+"$1")]})),jn(It(e,{props:[L(i,/:(plac\w+)/,Y+"input-$1")]})),jn(It(e,{props:[i]})),ls(e,{props:uf(n,r)});break}return""})}}var Og={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Te={},pr=typeof process<"u"&&Te!==void 0&&(Te.REACT_APP_SC_ATTR||Te.SC_ATTR)||"data-styled",km="active",Em="data-styled-version",wa="6.1.11",Ru=`/*!sc*/
`,Lu=typeof window<"u"&&"HTMLElement"in window,Tg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Te!==void 0&&Te.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Te.REACT_APP_SC_DISABLE_SPEEDY!==""?Te.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Te.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Te!==void 0&&Te.SC_DISABLE_SPEEDY!==void 0&&Te.SC_DISABLE_SPEEDY!==""&&Te.SC_DISABLE_SPEEDY!=="false"&&Te.SC_DISABLE_SPEEDY),zg={},Sa=Object.freeze([]),mr=Object.freeze({});function Cm(e,t,n){return n===void 0&&(n=mr),e.theme!==n.theme&&e.theme||t||n.theme}var Pm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ig=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ag=/(^-|-$)/g;function df(e){return e.replace(Ig,"-").replace(Ag,"")}var Rg=/(a)(d)/gi,Zi=52,pf=function(e){return String.fromCharCode(e+(e>25?39:97))};function cs(e){var t,n="";for(t=Math.abs(e);t>Zi;t=t/Zi|0)n=pf(t%Zi)+n;return(pf(t%Zi)+n).replace(Rg,"$1-$2")}var rl,_m=5381,Gn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Nm=function(e){return Gn(_m,e)};function Om(e){return cs(Nm(e)>>>0)}function Lg(e){return e.displayName||e.name||"Component"}function il(e){return typeof e=="string"&&!0}var Tm=typeof Symbol=="function"&&Symbol.for,zm=Tm?Symbol.for("react.memo"):60115,jg=Tm?Symbol.for("react.forward_ref"):60112,Mg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Im={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$g=((rl={})[jg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rl[zm]=Im,rl);function mf(e){return("type"in(t=e)&&t.type.$$typeof)===zm?Im:"$$typeof"in e?$g[e.$$typeof]:Mg;var t}var Dg=Object.defineProperty,bg=Object.getOwnPropertyNames,hf=Object.getOwnPropertySymbols,Ug=Object.getOwnPropertyDescriptor,Bg=Object.getPrototypeOf,gf=Object.prototype;function Am(e,t,n){if(typeof t!="string"){if(gf){var r=Bg(t);r&&r!==gf&&Am(e,r,n)}var i=bg(t);hf&&(i=i.concat(hf(t)));for(var o=mf(e),a=mf(t),l=0;l<i.length;++l){var s=i[l];if(!(s in Fg||n&&n[s]||a&&s in a||o&&s in o)){var u=Ug(t,s);try{Dg(e,s,u)}catch{}}}}return e}function hr(e){return typeof e=="function"}function ju(e){return typeof e=="object"&&"styledComponentId"in e}function vn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function fs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function vi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ds(e,t,n){if(n===void 0&&(n=!1),!n&&!vi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ds(e[r],t[r]);else if(vi(t))for(var r in t)e[r]=ds(e[r],t[r]);return e}function Mu(e,t){Object.defineProperty(e,"toString",{value:t})}function Oi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Wg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Oi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=(a=0,n.length);a<s;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(Ru);return n},e}(),go=new Map,Yo=new Map,vo=1,Ji=function(e){if(go.has(e))return go.get(e);for(;Yo.has(vo);)vo++;var t=vo++;return go.set(e,t),Yo.set(t,e),t},Vg=function(e,t){vo=t+1,go.set(e,t),Yo.set(t,e)},Hg="style[".concat(pr,"][").concat(Em,'="').concat(wa,'"]'),Yg=new RegExp("^".concat(pr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Qg=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},Gg=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ru),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(Yg);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(Vg(f,u),Qg(e,f,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function Kg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Rm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(pr,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(pr,km),r.setAttribute(Em,wa);var a=Kg();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Xg=function(){function e(t){this.element=Rm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Oi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Zg=function(){function e(t){this.element=Rm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Jg=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),vf=Lu,qg={isServer:!Lu,useCSSOMInjection:!Tg},Qo=function(){function e(t,n,r){t===void 0&&(t=mr),n===void 0&&(n={});var i=this;this.options=ge(ge({},qg),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Lu&&vf&&(vf=!1,function(o){for(var a=document.querySelectorAll(Hg),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(pr)!==km&&(Gg(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Mu(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(d){var h=function(p){return Yo.get(p)}(d);if(h===void 0)return"continue";var g=o.names.get(h),v=a.getGroup(d);if(g===void 0||v.length===0)return"continue";var x="".concat(pr,".g").concat(d,'[id="').concat(h,'"]'),S="";g!==void 0&&g.forEach(function(p){p.length>0&&(S+="".concat(p,","))}),s+="".concat(v).concat(x,'{content:"').concat(S,'"}').concat(Ru)},f=0;f<l;f++)u(f);return s}(i)})}return e.registerId=function(t){return Ji(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ge(ge({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Jg(i):r?new Xg(i):new Zg(i)}(this.options),new Wg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ji(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ji(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ji(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ev=/&/g,tv=/^\s*\/\/.*$/gm;function Lm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Lm(n.children,t)),n})}function nv(e){var t,n,r,i=mr,o=i.options,a=o===void 0?mr:o,l=i.plugins,s=l===void 0?Sa:l,u=function(h,g,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):h},f=s.slice();f.push(function(h){h.type===ga&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(ev,n).replace(r,u))}),a.prefix&&f.push(Ng),f.push(Cg);var d=function(h,g,v,x){g===void 0&&(g=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var S=h.replace(tv,""),p=kg(v||g?"".concat(v," ").concat(g," { ").concat(S," }"):S);a.namespace&&(p=Lm(p,a.namespace));var c=[];return Ho(p,Pg(f.concat(_g(function(m){return c.push(m)})))),c};return d.hash=s.length?s.reduce(function(h,g){return g.name||Oi(15),Gn(h,g.name)},_m).toString():"",d}var rv=new Qo,ps=nv(),jm=Ue.createContext({shouldForwardProp:void 0,styleSheet:rv,stylis:ps});jm.Consumer;Ue.createContext(void 0);function ms(){return _.useContext(jm)}var iv=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ps);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Mu(this,function(){throw Oi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ps),this.name+t.hash},e}(),ov=function(e){return e>="A"&&e<="Z"};function yf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;ov(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Mm=function(e){return e==null||e===!1||e===""},Fm=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Mm(o)&&(Array.isArray(o)&&o.isCss||hr(o)?r.push("".concat(yf(i),":"),o,";"):vi(o)?r.push.apply(r,gi(gi(["".concat(i," {")],Fm(o),!1),["}"],!1)):r.push("".concat(yf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Og||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Gt(e,t,n,r){if(Mm(e))return[];if(ju(e))return[".".concat(e.styledComponentId)];if(hr(e)){if(!hr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Gt(i,t,n,r)}var o;return e instanceof iv?n?(e.inject(n,r),[e.getName(r)]):[e]:vi(e)?Fm(e):Array.isArray(e)?Array.prototype.concat.apply(Sa,e.map(function(a){return Gt(a,t,n,r)})):[e.toString()]}function $m(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(hr(n)&&!ju(n))return!1}return!0}var av=Nm(wa),lv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$m(t),this.componentId=n,this.baseHash=Gn(av,n),this.baseStyle=r,Qo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=vn(i,this.staticRulesId);else{var o=fs(Gt(this.rules,t,n,r)),a=cs(Gn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=vn(i,a),this.staticRulesId=a}else{for(var s=Gn(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")u+=d;else if(d){var h=fs(Gt(d,t,n,r));s=Gn(s,h+f),u+=h}}if(u){var g=cs(s>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=vn(i,g)}}return i},e}(),Fu=Ue.createContext(void 0);Fu.Consumer;var ol={};function sv(e,t,n){var r=ju(e),i=e,o=!il(e),a=t.attrs,l=a===void 0?Sa:a,s=t.componentId,u=s===void 0?function(y,w){var P=typeof y!="string"?"sc":df(y);ol[P]=(ol[P]||0)+1;var k="".concat(P,"-").concat(Om(wa+P+ol[P]));return w?"".concat(w,"-").concat(k):k}(t.displayName,t.parentComponentId):s,f=t.displayName,d=f===void 0?function(y){return il(y)?"styled.".concat(y):"Styled(".concat(Lg(y),")")}(e):f,h=t.displayName&&t.componentId?"".concat(df(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;v=function(y,w){return x(y,w)&&S(y,w)}}else v=x}var p=new lv(n,h,r?i.componentStyle:void 0);function c(y,w){return function(P,k,z){var W=P.attrs,j=P.componentStyle,Ne=P.defaultProps,an=P.foldedComponentIds,ln=P.styledComponentId,Ai=P.target,Oa=Ue.useContext(Fu),Cr=ms(),sn=P.shouldForwardProp||Cr.shouldForwardProp,N=Cm(k,Oa,Ne)||mr,I=function(Nt,Oe,dt){for(var Pr,cn=ge(ge({},Oe),{className:void 0,theme:dt}),Ta=0;Ta<Nt.length;Ta+=1){var Ri=hr(Pr=Nt[Ta])?Pr(cn):Pr;for(var Ot in Ri)cn[Ot]=Ot==="className"?vn(cn[Ot],Ri[Ot]):Ot==="style"?ge(ge({},cn[Ot]),Ri[Ot]):Ri[Ot]}return Oe.className&&(cn.className=vn(cn.className,Oe.className)),cn}(W,k,N),A=I.as||Ai,U={};for(var B in I)I[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&I.theme===N||(B==="forwardedAs"?U.as=I.forwardedAs:sn&&!sn(B,A)||(U[B]=I[B]));var un=function(Nt,Oe){var dt=ms(),Pr=Nt.generateAndInjectStyles(Oe,dt.styleSheet,dt.stylis);return Pr}(j,I),Qe=vn(an,ln);return un&&(Qe+=" "+un),I.className&&(Qe+=" "+I.className),U[il(A)&&!Pm.has(A)?"class":"className"]=Qe,U.ref=z,_.createElement(A,U)}(m,y,w)}c.displayName=d;var m=Ue.forwardRef(c);return m.attrs=g,m.componentStyle=p,m.displayName=d,m.shouldForwardProp=v,m.foldedComponentIds=r?vn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=h,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(w){for(var P=[],k=1;k<arguments.length;k++)P[k-1]=arguments[k];for(var z=0,W=P;z<W.length;z++)ds(w,W[z],!0);return w}({},i.defaultProps,y):y}}),Mu(m,function(){return".".concat(m.styledComponentId)}),o&&Am(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function xf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var wf=function(e){return Object.assign(e,{isCss:!0})};function Dm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(hr(e)||vi(e))return wf(Gt(xf(Sa,gi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Gt(r):wf(Gt(xf(r,t)))}function hs(e,t,n){if(n===void 0&&(n=mr),!t)throw Oi(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Dm.apply(void 0,gi([i],o,!1)))};return r.attrs=function(i){return hs(e,t,ge(ge({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return hs(e,t,ge(ge({},n),i))},r}var bm=function(e){return hs(sv,e)},R=bm;Pm.forEach(function(e){R[e]=bm(e)});var uv=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=$m(t),Qo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(fs(Gt(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Qo.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function cv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Dm.apply(void 0,gi([e],t,!1)),i="sc-global-".concat(Om(JSON.stringify(r))),o=new uv(r,i),a=function(s){var u=ms(),f=Ue.useContext(Fu),d=Ue.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(d,s,u.styleSheet,f,u.stylis),Ue.useLayoutEffect(function(){if(!u.styleSheet.server)return l(d,s,u.styleSheet,f,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,s,u.styleSheet,f,u.stylis]),null};function l(s,u,f,d,h){if(o.isStatic)o.renderStyles(s,zg,f,h);else{var g=ge(ge({},u),{theme:Cm(u,d,a.defaultProps)});o.renderStyles(s,g,f,h)}}return Ue.memo(a)}const yo={light:{bodyBackground:"#C0C0C0",color:"#121212",moveCard:"#121212",colorTextCard:"#C0C0C0",navbarBackground:"linear-gradient(to top, rgba(0, 0, 15, 0.4) 0%, rgba(255, 255, 255, 0.6) 100%)",footerBackground:"linear-gradient(to bottom, rgba(0, 0, 20, 0.1) 0%, rgba(255, 255, 255, .06) 100%)",textColor:"#000000",buttonHover:"#ffffff",themeTag:"Dark",cardShadow:"2px 2px 2px 2px  rgba(0, 0, 0, 0.5)"},dark:{bodyBackground:"#121212",color:"#C0C0C0",moveCard:"#C0C0C0",colorTextCard:"#121212",navbarBackground:"linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)",footerBackground:"linear-gradient(to top, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.4) 100%)",textColor:"#ffffff",buttonHover:"#091112",themeTag:"Light",cardShadow:"none"}},An=_.createContext({}),fv=e=>{const[t,n]=_.useState(yo.dark);return E.jsx(An.Provider,{value:{theme:t,setTheme:n},children:e.children})},Go=e=>{const{theme:t}=_.useContext(An);return E.jsx(dv,{...e,style:{backgroundColor:t.buttonBackground}})},dv=R.button`
    border-radius: 8px;
    border: 2px solid transparent;
    padding: 0.8rem;
    font-size: 1.2rem;
    font-weight: 00;
    font-family: inherit;
    background-color: #007fff;
    color: #f0f000;
    cursor: pointer;
    transition: border-color 0.25s;
    min-width: 7rem;
    &:hover{
        border-color: #f0f000;
    }
`;/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yi(){return yi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yi.apply(this,arguments)}var $t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($t||($t={}));const Sf="popstate";function pv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return gs("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ko(i)}return hv(t,n,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Um(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function mv(){return Math.random().toString(36).substr(2,8)}function kf(e,t){return{usr:e.state,key:e.key,idx:t}}function gs(e,t,n,r){return n===void 0&&(n=null),yi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?kr(t):t,{state:n,key:t&&t.key||r||mv()})}function Ko(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function kr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function hv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=$t.Pop,s=null,u=f();u==null&&(u=0,a.replaceState(yi({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function d(){l=$t.Pop;let S=f(),p=S==null?null:S-u;u=S,s&&s({action:l,location:x.location,delta:p})}function h(S,p){l=$t.Push;let c=gs(x.location,S,p);u=f()+1;let m=kf(c,u),y=x.createHref(c);try{a.pushState(m,"",y)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;i.location.assign(y)}o&&s&&s({action:l,location:x.location,delta:1})}function g(S,p){l=$t.Replace;let c=gs(x.location,S,p);u=f();let m=kf(c,u),y=x.createHref(c);a.replaceState(m,"",y),o&&s&&s({action:l,location:x.location,delta:0})}function v(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof S=="string"?S:Ko(S);return c=c.replace(/ $/,"%20"),ie(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let x={get action(){return l},get location(){return e(i,a)},listen(S){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Sf,d),s=S,()=>{i.removeEventListener(Sf,d),s=null}},createHref(S){return t(i,S)},createURL:v,encodeLocation(S){let p=v(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(S){return a.go(S)}};return x}var Ef;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ef||(Ef={}));function gv(e,t,n){return n===void 0&&(n="/"),vv(e,t,n,!1)}function vv(e,t,n,r){let i=typeof t=="string"?kr(t):t,o=$u(i.pathname||"/",n);if(o==null)return null;let a=Bm(e);yv(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let u=Tv(o);l=Nv(a[s],u,r)}return l}function Bm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(ie(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Kt([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(ie(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Bm(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Pv(u,o.index),routesMeta:f})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of Wm(o.path))i(o,a,s)}),t}function Wm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Wm(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function yv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:_v(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const xv=/^:[\w-]+$/,wv=3,Sv=2,kv=1,Ev=10,Cv=-2,Cf=e=>e==="*";function Pv(e,t){let n=e.split("/"),r=n.length;return n.some(Cf)&&(r+=Cv),t&&(r+=Sv),n.filter(i=>!Cf(i)).reduce((i,o)=>i+(xv.test(o)?wv:o===""?kv:Ev),r)}function _v(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Nv(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",d=Pf({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),h=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Pf({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},f)),!d)return null;Object.assign(i,d.params),a.push({params:i,pathname:Kt([o,d.pathname]),pathnameBase:Rv(Kt([o,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(o=Kt([o,d.pathnameBase]))}return a}function Pf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ov(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:h,isOptional:g}=f;if(h==="*"){let x=l[d]||"";a=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=l[d];return g&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Ov(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Um(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Tv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Um(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function $u(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function zv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?kr(e):e;return{pathname:n?n.startsWith("/")?n:Iv(n,t):t,search:Lv(r),hash:jv(i)}}function Iv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function al(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Av(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Vm(e,t){let n=Av(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Hm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=kr(e):(i=yi({},e),ie(!i.pathname||!i.pathname.includes("?"),al("?","pathname","search",i)),ie(!i.pathname||!i.pathname.includes("#"),al("#","pathname","hash",i)),ie(!i.search||!i.search.includes("#"),al("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=zv(i,l),u=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const Kt=e=>e.join("/").replace(/\/\/+/g,"/"),Rv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Lv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Mv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ym=["post","put","patch","delete"];new Set(Ym);const Fv=["get",...Ym];new Set(Fv);/**
 * React Router v6.25.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xi.apply(this,arguments)}const Du=_.createContext(null),$v=_.createContext(null),Rn=_.createContext(null),ka=_.createContext(null),on=_.createContext({outlet:null,matches:[],isDataRoute:!1}),Qm=_.createContext(null);function Dv(e,t){let{relative:n}=t===void 0?{}:t;Ti()||ie(!1);let{basename:r,navigator:i}=_.useContext(Rn),{hash:o,pathname:a,search:l}=Km(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:Kt([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Ti(){return _.useContext(ka)!=null}function Ea(){return Ti()||ie(!1),_.useContext(ka).location}function Gm(e){_.useContext(Rn).static||_.useLayoutEffect(e)}function bv(){let{isDataRoute:e}=_.useContext(on);return e?ey():Uv()}function Uv(){Ti()||ie(!1);let e=_.useContext(Du),{basename:t,future:n,navigator:r}=_.useContext(Rn),{matches:i}=_.useContext(on),{pathname:o}=Ea(),a=JSON.stringify(Vm(i,n.v7_relativeSplatPath)),l=_.useRef(!1);return Gm(()=>{l.current=!0}),_.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=Hm(u,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Kt([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,a,o,e])}function Bv(){let{matches:e}=_.useContext(on),t=e[e.length-1];return t?t.params:{}}function Km(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=_.useContext(Rn),{matches:i}=_.useContext(on),{pathname:o}=Ea(),a=JSON.stringify(Vm(i,r.v7_relativeSplatPath));return _.useMemo(()=>Hm(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function Wv(e,t){return Vv(e,t)}function Vv(e,t,n,r){Ti()||ie(!1);let{navigator:i}=_.useContext(Rn),{matches:o}=_.useContext(on),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=Ea(),f;if(t){var d;let S=typeof t=="string"?kr(t):t;s==="/"||(d=S.pathname)!=null&&d.startsWith(s)||ie(!1),f=S}else f=u;let h=f.pathname||"/",g=h;if(s!=="/"){let S=s.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(S.length).join("/")}let v=gv(e,{pathname:g}),x=Kv(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:Kt([s,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:Kt([s,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&x?_.createElement(ka.Provider,{value:{location:xi({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:$t.Pop}},x):x}function Hv(){let e=qv(),t=Mv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:i},n):null,null)}const Yv=_.createElement(Hv,null);class Qv extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(on.Provider,{value:this.props.routeContext},_.createElement(Qm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gv(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(Du);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(on.Provider,{value:t},r)}function Kv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=a.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);f>=0||ie(!1),a=a.slice(0,Math.min(a.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let d=a[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:h,errors:g}=n,v=d.route.loader&&h[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||v){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,d,h)=>{let g,v=!1,x=null,S=null;n&&(g=l&&d.route.id?l[d.route.id]:void 0,x=d.route.errorElement||Yv,s&&(u<0&&h===0?(v=!0,S=null):u===h&&(v=!0,S=d.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,h+1)),c=()=>{let m;return g?m=x:v?m=S:d.route.Component?m=_.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=f,_.createElement(Gv,{match:d,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?_.createElement(Qv,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:c(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):c()},null)}var Xm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Xm||{}),Xo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Xo||{});function Xv(e){let t=_.useContext(Du);return t||ie(!1),t}function Zv(e){let t=_.useContext($v);return t||ie(!1),t}function Jv(e){let t=_.useContext(on);return t||ie(!1),t}function Zm(e){let t=Jv(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function qv(){var e;let t=_.useContext(Qm),n=Zv(Xo.UseRouteError),r=Zm(Xo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ey(){let{router:e}=Xv(Xm.UseNavigateStable),t=Zm(Xo.UseNavigateStable),n=_.useRef(!1);return Gm(()=>{n.current=!0}),_.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,xi({fromRouteId:t},o)))},[e,t])}function vs(e){ie(!1)}function ty(e){let{basename:t="/",children:n=null,location:r,navigationType:i=$t.Pop,navigator:o,static:a=!1,future:l}=e;Ti()&&ie(!1);let s=t.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:s,navigator:o,static:a,future:xi({v7_relativeSplatPath:!1},l)}),[s,l,o,a]);typeof r=="string"&&(r=kr(r));let{pathname:f="/",search:d="",hash:h="",state:g=null,key:v="default"}=r,x=_.useMemo(()=>{let S=$u(f,s);return S==null?null:{location:{pathname:S,search:d,hash:h,state:g,key:v},navigationType:i}},[s,f,d,h,g,v,i]);return x==null?null:_.createElement(Rn.Provider,{value:u},_.createElement(ka.Provider,{children:n,value:x}))}function ny(e){let{children:t,location:n}=e;return Wv(ys(t),n)}new Promise(()=>{});function ys(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let o=[...t,i];if(r.type===_.Fragment){n.push.apply(n,ys(r.props.children,o));return}r.type!==vs&&ie(!1),!r.props.index||!r.props.children||ie(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ys(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.25.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xs(){return xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xs.apply(this,arguments)}function ry(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function iy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function oy(e,t){return e.button===0&&(!t||t==="_self")&&!iy(e)}const ay=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ly="6";try{window.__reactRouterVersion=ly}catch{}const sy="startTransition",_f=Jh[sy];function uy(e){let{basename:t,children:n,future:r,window:i}=e,o=_.useRef();o.current==null&&(o.current=pv({window:i,v5Compat:!0}));let a=o.current,[l,s]=_.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=_.useCallback(d=>{u&&_f?_f(()=>s(d)):s(d)},[s,u]);return _.useLayoutEffect(()=>a.listen(f),[a,f]),_.createElement(ty,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const cy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bu=_.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:f,unstable_viewTransition:d}=t,h=ry(t,ay),{basename:g}=_.useContext(Rn),v,x=!1;if(typeof u=="string"&&fy.test(u)&&(v=u,cy))try{let m=new URL(window.location.href),y=u.startsWith("//")?new URL(m.protocol+u):new URL(u),w=$u(y.pathname,g);y.origin===m.origin&&w!=null?u=w+y.search+y.hash:x=!0}catch{}let S=Dv(u,{relative:i}),p=dy(u,{replace:a,state:l,target:s,preventScrollReset:f,relative:i,unstable_viewTransition:d});function c(m){r&&r(m),m.defaultPrevented||p(m)}return _.createElement("a",xs({},h,{href:v||S,onClick:x||o?r:c,ref:n,target:s}))});var Nf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Nf||(Nf={}));var Of;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Of||(Of={}));function dy(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=bv(),u=Ea(),f=Km(e,{relative:a});return _.useCallback(d=>{if(oy(d,n)){d.preventDefault();let h=r!==void 0?r:Ko(u)===Ko(f);s(e,{replace:h,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l})}},[u,s,f,r,i,n,e,o,a,l])}const py=async e=>{let t=`https://pokeapi.co/api/v2/pokemon?limit=9&offset=${e}`;return await(await fetch(t)).json()},Uu=async e=>{try{let t=`https://pokeapi.co/api/v2/pokemon/${e}`;return await(await fetch(t)).json()}catch(t){console.log("getPokemonsData error: ",t)}},my=async e=>{try{return await(await fetch(e)).json()}catch(t){console.log("getHabilityDescription error: ",t)}},hy=()=>{var d,h,g;const[e,t]=_.useState(""),[n,r]=_.useState(),[i,o]=_.useState(),a=v=>{t(v.target.value)},l=async()=>{const v=e.toLowerCase();if(v!=="")o(!0),u(v);else return},s=v=>{const x=e.toLowerCase();if(event.key==="Enter")if(x!=="")o(!0),u(x);else return},u=async v=>{const x=await Uu(v);r(x)},f=(g=(h=(d=n==null?void 0:n.types)==null?void 0:d[0])==null?void 0:h.type)==null?void 0:g.name;return E.jsxs(gy,{children:[E.jsx(vy,{type:"text",placeholder:"Search pokémon",onChange:a,onKeyPress:s}),E.jsx(Go,{onClick:l,children:"Search"}),n?E.jsx(bu,{to:`/pokemon/${e}`,children:E.jsx(xy,{className:f,children:E.jsxs(yy,{children:[E.jsx(wy,{children:E.jsx(Sy,{src:n.sprites.other.showdown.front_default})}),E.jsx("span",{children:"Go to Pokémon page"})]})})}):E.jsx("p",{style:{visibility:i?"visible":"hidden"},children:"This is not a pokemon"})]})},gy=R.div`
  display: flex;
  gap: 2rem;
  align-items: center;

   @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top:
    gap: 1rem;
    }
    
    @media (max-width: 425px) {
    gap: 0.5rem;
  }

  @media (max-width: 320px) {
    gap: 0.3rem;
  }
`,vy=R.input`
  height: 3.5rem;
  width: 20rem;
  border-radius: 0.8rem;
  background-color: #3d7dca;
  color: #f6eb61;
  font-size: 1.8rem;
  &::placeholder {
    color: #f6eb61;
    padding-left: 0.6rem;
  }

  @media (max-width: 1024px) {
    width: 18rem;
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    width: 16rem;
    font-size: 1.4rem;
    margin-top: 2rem;
  }

  @media (max-width: 425px) {
    width: 14rem;
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  @media (max-width: 320px) {
    width: 12rem;
    font-size: 1rem;
  }
`,yy=R.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(0, 0, 0, 0.15) 100%
  );

  span {
    color: #000000;
    padding: 0.5rem 0;
  }
`,xy=R.div`
  border-radius: 0.8rem;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
  }
`,wy=R.div`
  display: flex;
  justify-content: center;
  width: 4rem;
  height: auto;
`,Sy=R.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
`,ky=()=>{const{theme:e,setTheme:t}=_.useContext(An);return E.jsx("div",{children:E.jsx(Go,{onClick:()=>t(e===yo.light?yo.dark:yo.light),children:e.themeTag})})},Ey="/pokedex/assets/pokemon-Dyw_SVDw.png",Cy=()=>{const{theme:e}=_.useContext(An);return E.jsx(E.Fragment,{children:E.jsxs(Py,{style:{background:e.navbarBackground},children:[E.jsx("img",{src:Ey,alt:"Logo do Pokemon"}),E.jsx(hy,{}),E.jsx(ky,{})]})})},Py=R.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  width: 100vw;
  border-bottom: 2px solid #3d7dca;

  @media (max-width: 1024px) {
    padding: 0.8rem;
  }

  @media (max-width: 768px) {
    padding: 0.6rem;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.4rem;
  }

  @media (max-width: 320px) {
    padding: 0.2rem;
  }
  img {
    width: 20rem;
    @media (max-width: 1024px) {
      width: 18rem;
    }

    @media (max-width: 768px) {
      width: 16rem;
    }

    @media (max-width: 425px) {
      width: 14rem;
    }

    @media (max-width: 320px) {
      width: 12rem;
    }
  }
`,_y=cv`
    * {
        margin: 0;
        padding: 0;
        font-family: "Montserrat", sans-serif;
        text-decoration: none;
        list-style: none;
        font-size: 10px;
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        min-width: 320px;
        min-height: 100vh;
        background-color: #121212;
        width: 100%;
    }      

    .normal { background-color: #A8A77A; }
    .fighting { background-color: #C22E28; }
    .flying { background-color: #A98FF3; }
    .poison { background-color: #A33EA1; }
    .ground { background-color: #E2BF65; }
    .rock { background-color: #B6A136; }
    .bug { background-color: #A6B91A; }
    .ghost { background-color: #735797; }
    .steel { background-color: #B7B7CE; }
    .fire { background-color: #ff1010; }
    .water { background-color: #6390F0; }
    .grass {background-color: #7AC74C; }
    .electric { background-color: #F7D02C; }
    .psychic { background-color: #F95587; }
    .ice { background-color: #96D9D6; }
    .dragon { background-color: #6F35FC; }
    .dark { background-color: #705746; }
    .fairy { background-color: #D685AD; }
    `,Tf=()=>{};let Bu={},Jm={},qm=null,eh={mark:Tf,measure:Tf};try{typeof window<"u"&&(Bu=window),typeof document<"u"&&(Jm=document),typeof MutationObserver<"u"&&(qm=MutationObserver),typeof performance<"u"&&(eh=performance)}catch{}const{userAgent:zf=""}=Bu.navigator||{},Jt=Bu,G=Jm,If=qm,qi=eh;Jt.document;const _t=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",th=~zf.indexOf("MSIE")||~zf.indexOf("Trident/");var X="classic",nh="duotone",Re="sharp",Le="sharp-duotone",Ny=[X,nh,Re,Le],Oy={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Af={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ty=["kit"],zy=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Iy=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ay={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ry={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Ly={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},jy={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},My={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Fy={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},rh={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},$y=["solid","regular","light","thin","duotone","brands"],ih=[1,2,3,4,5,6,7,8,9,10],Dy=ih.concat([11,12,13,14,15,16,17,18,19,20]),Dr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},by=[...Object.keys(jy),...$y,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Dr.GROUP,Dr.SWAP_OPACITY,Dr.PRIMARY,Dr.SECONDARY].concat(ih.map(e=>"".concat(e,"x"))).concat(Dy.map(e=>"w-".concat(e))),Uy={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},By={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Wy={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Rf={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Et="___FONT_AWESOME___",ws=16,oh="fa",ah="svg-inline--fa",On="data-fa-i2svg",Ss="data-fa-pseudo-element",Vy="data-fa-pseudo-element-pending",Wu="data-prefix",Vu="data-icon",Lf="fontawesome-i2svg",Hy="async",Yy=["HTML","HEAD","STYLE","SCRIPT"],lh=(()=>{try{return!0}catch{return!1}})(),sh=[X,Re,Le];function zi(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[X]}})}const uh={...rh};uh[X]={...rh[X],...Af.kit,...Af["kit-duotone"]};const Sn=zi(uh),ks={...Fy};ks[X]={...ks[X],...Rf.kit,...Rf["kit-duotone"]};const wi=zi(ks),Es={...My};Es[X]={...Es[X],...Wy.kit};const kn=zi(Es),Cs={...Ly};Cs[X]={...Cs[X],...By.kit};const Qy=zi(Cs),Gy=zy,ch="fa-layers-text",Ky=Iy,Xy={...Oy};zi(Xy);const Zy=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ll=Dr,gr=new Set;Object.keys(wi[X]).map(gr.add.bind(gr));Object.keys(wi[Re]).map(gr.add.bind(gr));Object.keys(wi[Le]).map(gr.add.bind(gr));const Jy=[...Ty,...by],Zr=Jt.FontAwesomeConfig||{};function qy(e){var t=G.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ex(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}G&&typeof G.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=ex(qy(n));i!=null&&(Zr[r]=i)});const fh={styleDefault:"solid",familyDefault:"classic",cssPrefix:oh,replacementClass:ah,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Zr.familyPrefix&&(Zr.cssPrefix=Zr.familyPrefix);const vr={...fh,...Zr};vr.autoReplaceSvg||(vr.observeMutations=!1);const T={};Object.keys(fh).forEach(e=>{Object.defineProperty(T,e,{enumerable:!0,set:function(t){vr[e]=t,Jr.forEach(n=>n(T))},get:function(){return vr[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(e){vr.cssPrefix=e,Jr.forEach(t=>t(T))},get:function(){return vr.cssPrefix}});Jt.FontAwesomeConfig=T;const Jr=[];function tx(e){return Jr.push(e),()=>{Jr.splice(Jr.indexOf(e),1)}}const zt=ws,lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nx(e){if(!e||!_t)return;const t=G.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=G.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return G.head.insertBefore(t,r),e}const rx="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Si(){let e=12,t="";for(;e-- >0;)t+=rx[Math.random()*62|0];return t}function Er(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Hu(e){return e.classList?Er(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function dh(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ix(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(dh(e[n]),'" '),"").trim()}function Ca(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Yu(e){return e.size!==lt.size||e.x!==lt.x||e.y!==lt.y||e.rotate!==lt.rotate||e.flipX||e.flipY}function ox(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(o," ").concat(a," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function ax(e){let{transform:t,width:n=ws,height:r=ws,startCentered:i=!1}=e,o="";return i&&th?o+="translate(".concat(t.x/zt-n/2,"em, ").concat(t.y/zt-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(t.x/zt,"em), calc(-50% + ").concat(t.y/zt,"em)) "):o+="translate(".concat(t.x/zt,"em, ").concat(t.y/zt,"em) "),o+="scale(".concat(t.size/zt*(t.flipX?-1:1),", ").concat(t.size/zt*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var lx=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ph(){const e=oh,t=ah,n=T.cssPrefix,r=T.replacementClass;let i=lx;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let jf=!1;function sl(){T.autoAddCss&&!jf&&(nx(ph()),jf=!0)}var sx={mixout(){return{dom:{css:ph,insertCss:sl}}},hooks(){return{beforeDOMElementCreation(){sl()},beforeI2svg(){sl()}}}};const Ct=Jt||{};Ct[Et]||(Ct[Et]={});Ct[Et].styles||(Ct[Et].styles={});Ct[Et].hooks||(Ct[Et].hooks={});Ct[Et].shims||(Ct[Et].shims=[]);var st=Ct[Et];const mh=[],hh=function(){G.removeEventListener("DOMContentLoaded",hh),Zo=1,mh.map(e=>e())};let Zo=!1;_t&&(Zo=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),Zo||G.addEventListener("DOMContentLoaded",hh));function ux(e){_t&&(Zo?setTimeout(e,0):mh.push(e))}function Ii(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?dh(e):"<".concat(t," ").concat(ix(n),">").concat(r.map(Ii).join(""),"</").concat(t,">")}function Mf(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ul=function(t,n,r,i){var o=Object.keys(t),a=o.length,l=n,s,u,f;for(r===void 0?(s=1,f=t[o[0]]):(s=0,f=r);s<a;s++)u=o[s],f=l(f,t[u],u,t);return f};function cx(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ps(e){const t=cx(e);return t.length===1?t[0].toString(16):null}function fx(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ff(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function _s(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Ff(t);typeof st.hooks.addPack=="function"&&!r?st.hooks.addPack(e,Ff(t)):st.styles[e]={...st.styles[e]||{},...i},e==="fas"&&_s("fa",t)}const{styles:pn,shims:dx}=st,px={[X]:Object.values(kn[X]),[Re]:Object.values(kn[Re]),[Le]:Object.values(kn[Le])};let Qu=null,gh={},vh={},yh={},xh={},wh={};const mx={[X]:Object.keys(Sn[X]),[Re]:Object.keys(Sn[Re]),[Le]:Object.keys(Sn[Le])};function hx(e){return~Jy.indexOf(e)}function gx(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!hx(i)?i:null}const Sh=()=>{const e=r=>ul(pn,(i,o,a)=>(i[a]=ul(o,r,{}),i),{});gh=e((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=o}),r)),vh=e((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=o}),r)),wh=e((r,i,o)=>{const a=i[2];return r[o]=o,a.forEach(l=>{r[l]=o}),r});const t="far"in pn||T.autoFetchSvg,n=ul(dx,(r,i)=>{const o=i[0];let a=i[1];const l=i[2];return a==="far"&&!t&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});yh=n.names,xh=n.unicodes,Qu=Pa(T.styleDefault,{family:T.familyDefault})};tx(e=>{Qu=Pa(e.styleDefault,{family:T.familyDefault})});Sh();function Gu(e,t){return(gh[e]||{})[t]}function vx(e,t){return(vh[e]||{})[t]}function Dt(e,t){return(wh[e]||{})[t]}function kh(e){return yh[e]||{prefix:null,iconName:null}}function yx(e){const t=xh[e],n=Gu("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function qt(){return Qu}const Ku=()=>({prefix:null,iconName:null,rest:[]});function Pa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=X}=t,r=Sn[n][e],i=wi[n][e]||wi[n][r],o=e in st.styles?e:null;return i||o||null}const xx={[X]:Object.keys(kn[X]),[Re]:Object.keys(kn[Re]),[Le]:Object.keys(kn[Le])};function _a(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[X]:"".concat(T.cssPrefix,"-").concat(X),[Re]:"".concat(T.cssPrefix,"-").concat(Re),[Le]:"".concat(T.cssPrefix,"-").concat(Le)};let i=null,o=X;const a=Ny.filter(s=>s!==nh);a.forEach(s=>{(e.includes(r[s])||e.some(u=>xx[s].includes(u)))&&(o=s)});const l=e.reduce((s,u)=>{const f=gx(T.cssPrefix,u);if(pn[u]?(u=px[o].includes(u)?Qy[o][u]:u,i=u,s.prefix=u):mx[o].indexOf(u)>-1?(i=u,s.prefix=Pa(u,{family:o})):f?s.iconName=f:u!==T.replacementClass&&!a.some(d=>u===r[d])&&s.rest.push(u),!n&&s.prefix&&s.iconName){const d=i==="fa"?kh(s.iconName):{},h=Dt(s.prefix,s.iconName);d.prefix&&(i=null),s.iconName=d.iconName||h||s.iconName,s.prefix=d.prefix||s.prefix,s.prefix==="far"&&!pn.far&&pn.fas&&!T.autoFetchSvg&&(s.prefix="fas")}return s},Ku());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===Re&&(pn.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=Dt(l.prefix,l.iconName)||l.iconName),!l.prefix&&o===Le&&(pn.fasds||T.autoFetchSvg)&&(l.prefix="fasds",l.iconName=Dt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=qt()||"fas"),l}class wx{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...i[o]},_s(o,i[o]);const a=kn[X][o];a&&_s(a,i[o]),Sh()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:a,icon:l}=r[i],s=l[2];t[o]||(t[o]={}),s.length>0&&s.forEach(u=>{typeof u=="string"&&(t[o][u]=l)}),t[o][a]=l}),t}}let $f=[],Kn={};const rr={},Sx=Object.keys(rr);function kx(e,t){let{mixoutsTo:n}=t;return $f=e,Kn={},Object.keys(rr).forEach(r=>{Sx.indexOf(r)===-1&&delete rr[r]}),$f.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(a=>{n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(a=>{Kn[a]||(Kn[a]=[]),Kn[a].push(o[a])})}r.provides&&r.provides(rr)}),n}function Ns(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(Kn[e]||[]).forEach(a=>{t=a.apply(null,[t,...r])}),t}function Tn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(Kn[e]||[]).forEach(o=>{o.apply(null,n)})}function en(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return rr[e]?rr[e].apply(null,t):void 0}function Os(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||qt();if(t)return t=Dt(n,t)||t,Mf(Eh.definitions,n,t)||Mf(st.styles,n,t)}const Eh=new wx,Ex=()=>{T.autoReplaceSvg=!1,T.observeMutations=!1,Tn("noAuto")},Cx={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _t?(Tn("beforeI2svg",e),en("pseudoElements2svg",e),en("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,ux(()=>{_x({autoReplaceSvgRoot:t}),Tn("watch",e)})}},Px={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Dt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Pa(e[0]);return{prefix:n,iconName:Dt(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(T.cssPrefix,"-"))>-1||e.match(Gy))){const t=_a(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||qt(),iconName:Dt(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=qt();return{prefix:t,iconName:Dt(t,e)||e}}}},$e={noAuto:Ex,config:T,dom:Cx,parse:Px,library:Eh,findIconDefinition:Os,toHtml:Ii},_x=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=G}=e;(Object.keys(st.styles).length>0||T.autoFetchSvg)&&_t&&T.autoReplaceSvg&&$e.dom.i2svg({node:t})};function Na(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Ii(n))}}),Object.defineProperty(e,"node",{get:function(){if(!_t)return;const n=G.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Nx(e){let{children:t,main:n,mask:r,attributes:i,styles:o,transform:a}=e;if(Yu(a)&&n.found&&!r.found){const{width:l,height:s}=n,u={x:l/s/2,y:.5};i.style=Ca({...o,"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")})}return[{tag:"svg",attributes:i,children:t}]}function Ox(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:o}=e;const a=o===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:a},children:r}]}]}function Xu(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:o,symbol:a,title:l,maskId:s,titleId:u,extra:f,watchable:d=!1}=e,{width:h,height:g}=n.found?n:t,v=r==="fak",x=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(w=>f.classes.indexOf(w)===-1).filter(w=>w!==""||!!w).concat(f.classes).join(" ");let S={children:[],attributes:{...f.attributes,"data-prefix":r,"data-icon":i,class:x,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(g)}};const p=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(h/g*16*.0625,"em")}:{};d&&(S.attributes[On]=""),l&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(u||Si())},children:[l]}),delete S.attributes.title);const c={...S,prefix:r,iconName:i,main:t,mask:n,maskId:s,transform:o,symbol:a,styles:{...p,...f.styles}},{children:m,attributes:y}=n.found&&t.found?en("generateAbstractMask",c)||{children:[],attributes:{}}:en("generateAbstractIcon",c)||{children:[],attributes:{}};return c.children=m,c.attributes=y,a?Ox(c):Nx(c)}function Df(e){const{content:t,width:n,height:r,transform:i,title:o,extra:a,watchable:l=!1}=e,s={...a.attributes,...o?{title:o}:{},class:a.classes.join(" ")};l&&(s[On]="");const u={...a.styles};Yu(i)&&(u.transform=ax({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const f=Ca(u);f.length>0&&(s.style=f);const d=[];return d.push({tag:"span",attributes:s,children:[t]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function Tx(e){const{content:t,title:n,extra:r}=e,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=Ca(r.styles);o.length>0&&(i.style=o);const a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}const{styles:cl}=st;function Ts(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(ll.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(ll.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(ll.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const zx={found:!1,width:512,height:512};function Ix(e,t){!lh&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function zs(e,t){let n=t;return t==="fa"&&T.styleDefault!==null&&(t=qt()),new Promise((r,i)=>{if(n==="fa"){const o=kh(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&cl[t]&&cl[t][e]){const o=cl[t][e];return r(Ts(o))}Ix(e,t),r({...zx,icon:T.showMissingIcons&&e?en("missingIconAbstract")||{}:{}})})}const bf=()=>{},Is=T.measurePerformance&&qi&&qi.mark&&qi.measure?qi:{mark:bf,measure:bf},br='FA "6.6.0"',Ax=e=>(Is.mark("".concat(br," ").concat(e," begins")),()=>Ch(e)),Ch=e=>{Is.mark("".concat(br," ").concat(e," ends")),Is.measure("".concat(br," ").concat(e),"".concat(br," ").concat(e," begins"),"".concat(br," ").concat(e," ends"))};var Zu={begin:Ax,end:Ch};const xo=()=>{};function Uf(e){return typeof(e.getAttribute?e.getAttribute(On):null)=="string"}function Rx(e){const t=e.getAttribute?e.getAttribute(Wu):null,n=e.getAttribute?e.getAttribute(Vu):null;return t&&n}function Lx(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function jx(){return T.autoReplaceSvg===!0?wo.replace:wo[T.autoReplaceSvg]||wo.replace}function Mx(e){return G.createElementNS("http://www.w3.org/2000/svg",e)}function Fx(e){return G.createElement(e)}function Ph(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Mx:Fx}=t;if(typeof e=="string")return G.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Ph(o,{ceFn:n}))}),r}function $x(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const wo={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Ph(n),t)}),t.getAttribute(On)===null&&T.keepOriginalSource){let n=G.createComment($x(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Hu(t).indexOf(T.replacementClass))return wo.replace(e);const r=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((a,l)=>(l===T.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>Ii(o)).join(`
`);t.setAttribute(On,""),t.innerHTML=i}};function Bf(e){e()}function _h(e,t){const n=typeof t=="function"?t:xo;if(e.length===0)n();else{let r=Bf;T.mutateApproach===Hy&&(r=Jt.requestAnimationFrame||Bf),r(()=>{const i=jx(),o=Zu.begin("mutate");e.map(i),o(),n()})}}let Ju=!1;function Nh(){Ju=!0}function As(){Ju=!1}let Jo=null;function Wf(e){if(!If||!T.observeMutations)return;const{treeCallback:t=xo,nodeCallback:n=xo,pseudoElementsCallback:r=xo,observeMutationsRoot:i=G}=e;Jo=new If(o=>{if(Ju)return;const a=qt();Er(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Uf(l.addedNodes[0])&&(T.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&T.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&Uf(l.target)&&~Zy.indexOf(l.attributeName))if(l.attributeName==="class"&&Rx(l.target)){const{prefix:s,iconName:u}=_a(Hu(l.target));l.target.setAttribute(Wu,s||a),u&&l.target.setAttribute(Vu,u)}else Lx(l.target)&&n(l.target)})}),_t&&Jo.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Dx(){Jo&&Jo.disconnect()}function bx(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const o=i.split(":"),a=o[0],l=o.slice(1);return a&&l.length>0&&(r[a]=l.join(":").trim()),r},{})),n}function Ux(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=_a(Hu(e));return i.prefix||(i.prefix=qt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=vx(i.prefix,e.innerText)||Gu(i.prefix,Ps(e.innerText))),!i.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Bx(e){const t=Er(e.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Si()):(t["aria-hidden"]="true",t.focusable="false")),t}function Wx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Vf(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=Ux(e),o=Bx(e),a=Ns("parseNodeAttributes",{},e);let l=t.styleParser?bx(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o},...a}}const{styles:Vx}=st;function Oh(e){const t=T.autoReplaceSvg==="nest"?Vf(e,{styleParser:!1}):Vf(e);return~t.extra.classes.indexOf(ch)?en("generateLayersText",e,t):en("generateSvgReplacementMutation",e,t)}let ft=new Set;sh.map(e=>{ft.add("fa-".concat(e))});Object.keys(Sn[X]).map(ft.add.bind(ft));Object.keys(Sn[Re]).map(ft.add.bind(ft));Object.keys(Sn[Le]).map(ft.add.bind(ft));ft=[...ft];function Hf(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_t)return Promise.resolve();const n=G.documentElement.classList,r=f=>n.add("".concat(Lf,"-").concat(f)),i=f=>n.remove("".concat(Lf,"-").concat(f)),o=T.autoFetchSvg?ft:sh.map(f=>"fa-".concat(f)).concat(Object.keys(Vx));o.includes("fa")||o.push("fa");const a=[".".concat(ch,":not([").concat(On,"])")].concat(o.map(f=>".".concat(f,":not([").concat(On,"])"))).join(", ");if(a.length===0)return Promise.resolve();let l=[];try{l=Er(e.querySelectorAll(a))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const s=Zu.begin("onTree"),u=l.reduce((f,d)=>{try{const h=Oh(d);h&&f.push(h)}catch(h){lh||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise((f,d)=>{Promise.all(u).then(h=>{_h(h,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),f()})}).catch(h=>{s(),d(h)})})}function Hx(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Oh(e).then(n=>{n&&_h([n],t)})}function Yx(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Os(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Os(i||{})),e(r,{...n,mask:i})}}const Qx=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=lt,symbol:r=!1,mask:i=null,maskId:o=null,title:a=null,titleId:l=null,classes:s=[],attributes:u={},styles:f={}}=t;if(!e)return;const{prefix:d,iconName:h,icon:g}=e;return Na({type:"icon",...e},()=>(Tn("beforeDOMElementCreation",{iconDefinition:e,params:t}),T.autoA11y&&(a?u["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(l||Si()):(u["aria-hidden"]="true",u.focusable="false")),Xu({icons:{main:Ts(g),mask:i?Ts(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:h,transform:{...lt,...n},symbol:r,title:a,maskId:o,titleId:l,extra:{attributes:u,styles:f,classes:s}})))};var Gx={mixout(){return{icon:Yx(Qx)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Hf,e.nodeCallback=Hx,e}}},provides(e){e.i2svg=function(t){const{node:n=G,callback:r=()=>{}}=t;return Hf(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:o,prefix:a,transform:l,symbol:s,mask:u,maskId:f,extra:d}=n;return new Promise((h,g)=>{Promise.all([zs(r,a),u.iconName?zs(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[x,S]=v;h([t,Xu({icons:{main:x,mask:S},prefix:a,iconName:r,transform:l,symbol:s,maskId:f,title:i,titleId:o,extra:d,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:o,styles:a}=t;const l=Ca(a);l.length>0&&(r.style=l);let s;return Yu(o)&&(s=en("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(s||i.icon),{children:n,attributes:r}}}},Kx={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Na({type:"layer"},()=>{Tn("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Xx={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=t;return Na({type:"counter",content:e},()=>(Tn("beforeDOMElementCreation",{content:e,params:t}),Tx({content:e.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(T.cssPrefix,"-layers-counter"),...r]}})))}}}},Zx={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=lt,title:r=null,classes:i=[],attributes:o={},styles:a={}}=t;return Na({type:"text",content:e},()=>(Tn("beforeDOMElementCreation",{content:e,params:t}),Df({content:e,transform:{...lt,...n},title:r,extra:{attributes:o,styles:a,classes:["".concat(T.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:o}=n;let a=null,l=null;if(th){const s=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();a=u.width/s,l=u.height/s}return T.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Df({content:t.innerHTML,width:a,height:l,transform:i,title:r,extra:o,watchable:!0})])}}};const Jx=new RegExp('"',"ug"),Yf=[1105920,1112319],Qf={FontAwesome:{normal:"fas",400:"fas"},...Ry,...Ay,...Uy},Rs=Object.keys(Qf).reduce((e,t)=>(e[t.toLowerCase()]=Qf[t],e),{}),qx=Object.keys(Rs).reduce((e,t)=>{const n=Rs[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function ew(e){const t=e.replace(Jx,""),n=fx(t,0),r=n>=Yf[0]&&n<=Yf[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ps(i?t[0]:t),isSecondary:r||i}}function tw(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(Rs[n]||{})[i]||qx[n]}function Gf(e,t){const n="".concat(Vy).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const a=Er(e.children).filter(h=>h.getAttribute(Ss)===t)[0],l=Jt.getComputedStyle(e,t),s=l.getPropertyValue("font-family"),u=s.match(Ky),f=l.getPropertyValue("font-weight"),d=l.getPropertyValue("content");if(a&&!u)return e.removeChild(a),r();if(u&&d!=="none"&&d!==""){const h=l.getPropertyValue("content");let g=tw(s,f);const{value:v,isSecondary:x}=ew(h),S=u[0].startsWith("FontAwesome");let p=Gu(g,v),c=p;if(S){const m=yx(v);m.iconName&&m.prefix&&(p=m.iconName,g=m.prefix)}if(p&&!x&&(!a||a.getAttribute(Wu)!==g||a.getAttribute(Vu)!==c)){e.setAttribute(n,c),a&&e.removeChild(a);const m=Wx(),{extra:y}=m;y.attributes[Ss]=t,zs(p,g).then(w=>{const P=Xu({...m,icons:{main:w,mask:Ku()},prefix:g,iconName:c,extra:y,watchable:!0}),k=G.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(k,e.firstChild):e.appendChild(k),k.outerHTML=P.map(z=>Ii(z)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function nw(e){return Promise.all([Gf(e,"::before"),Gf(e,"::after")])}function rw(e){return e.parentNode!==document.head&&!~Yy.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ss)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Kf(e){if(_t)return new Promise((t,n)=>{const r=Er(e.querySelectorAll("*")).filter(rw).map(nw),i=Zu.begin("searchPseudoElements");Nh(),Promise.all(r).then(()=>{i(),As(),t()}).catch(()=>{i(),As(),n()})})}var iw={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Kf,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=G}=t;T.searchPseudoElements&&Kf(n)}}};let Xf=!1;var ow={mixout(){return{dom:{unwatch(){Nh(),Xf=!0}}}},hooks(){return{bootstrap(){Wf(Ns("mutationObserverCallbacks",{}))},noAuto(){Dx()},watch(e){const{observeMutationsRoot:t}=e;Xf?As():Wf(Ns("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Zf=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let a=i.slice(1).join("-");if(o&&a==="h")return n.flipX=!0,n;if(o&&a==="v")return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(o){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a;break}return n},t)};var aw={mixout(){return{parse:{transform:e=>Zf(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Zf(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:o}=t;const a={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),s="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(s," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},h={outer:a,inner:f,path:d};return{tag:"g",attributes:{...h.outer},children:[{tag:"g",attributes:{...h.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...h.path}}]}]}}}};const fl={x:0,y:0,width:"100%",height:"100%"};function Jf(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function lw(e){return e.tag==="g"?e.children:[e]}var sw={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?_a(n.split(" ").map(i=>i.trim())):Ku();return r.prefix||(r.prefix=qt()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:o,maskId:a,transform:l}=t;const{width:s,icon:u}=i,{width:f,icon:d}=o,h=ox({transform:l,containerWidth:f,iconWidth:s}),g={tag:"rect",attributes:{...fl,fill:"white"}},v=u.children?{children:u.children.map(Jf)}:{},x={tag:"g",attributes:{...h.inner},children:[Jf({tag:u.tag,attributes:{...u.attributes,...h.path},...v})]},S={tag:"g",attributes:{...h.outer},children:[x]},p="mask-".concat(a||Si()),c="clip-".concat(a||Si()),m={tag:"mask",attributes:{...fl,id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,S]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:c},children:lw(d)},m]};return n.push(y,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(c,")"),mask:"url(#".concat(p,")"),...fl}}),{children:n,attributes:r}}}},uw={provides(e){let t=!1;Jt.matchMedia&&(t=Jt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...i,attributeName:"opacity"},a={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||a.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(a),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},cw={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},fw=[sx,Gx,Kx,Xx,Zx,iw,ow,aw,sw,uw,cw];kx(fw,{mixoutsTo:$e});$e.noAuto;$e.config;$e.library;$e.dom;const Ls=$e.parse;$e.findIconDefinition;$e.toHtml;const dw=$e.icon;$e.layer;$e.text;$e.counter;var Th={exports:{}},pw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",mw=pw,hw=mw;function zh(){}function Ih(){}Ih.resetWarningCache=zh;var gw=function(){function e(r,i,o,a,l,s){if(s!==hw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ih,resetWarningCache:zh};return n.PropTypes=n,n};Th.exports=gw();var vw=Th.exports;const M=nd(vw);function qf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ot(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qf(Object(n),!0).forEach(function(r){Xn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qo(e){"@babel/helpers - typeof";return qo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qo(e)}function Xn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function xw(e,t){if(e==null)return{};var n=yw(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function js(e){return ww(e)||Sw(e)||kw(e)||Ew()}function ww(e){if(Array.isArray(e))return Ms(e)}function Sw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kw(e,t){if(e){if(typeof e=="string")return Ms(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ms(e,t)}}function Ms(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ew(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cw(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,h=e.fixedWidth,g=e.inverse,v=e.border,x=e.listItem,S=e.flip,p=e.size,c=e.rotation,m=e.pull,y=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":g,"fa-border":v,"fa-li":x,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Xn(t,"fa-".concat(p),typeof p<"u"&&p!==null),Xn(t,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),Xn(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Xn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map(function(w){return y[w]?w:null}).filter(function(w){return w})}function Pw(e){return e=e-0,e===e}function Ah(e){return Pw(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var _w=["style"];function Nw(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ow(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Ah(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[Nw(i)]=o:t[i]=o,t},{})}function Rh(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return Rh(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=Ow(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[Ah(u)]=f}return s},{attrs:{}}),o=n.style,a=o===void 0?{}:o,l=xw(n,_w);return i.attrs.style=ot(ot({},i.attrs.style),a),e.apply(void 0,[t.tag,ot(ot({},i.attrs),l)].concat(js(r)))}var Lh=!1;try{Lh=!0}catch{}function Tw(){if(!Lh&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ed(e){if(e&&qo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ls.icon)return Ls.icon(e);if(e===null)return null;if(e&&qo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function dl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Xn({},e,t):{}}var td={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ki=Ue.forwardRef(function(e,t){var n=ot(ot({},td),e),r=n.icon,i=n.mask,o=n.symbol,a=n.className,l=n.title,s=n.titleId,u=n.maskId,f=ed(r),d=dl("classes",[].concat(js(Cw(n)),js((a||"").split(" ")))),h=dl("transform",typeof n.transform=="string"?Ls.transform(n.transform):n.transform),g=dl("mask",ed(i)),v=dw(f,ot(ot(ot(ot({},d),h),g),{},{symbol:o,title:l,titleId:s,maskId:u}));if(!v)return Tw("Could not find icon",f),null;var x=v.abstract,S={ref:t};return Object.keys(n).forEach(function(p){td.hasOwnProperty(p)||(S[p]=n[p])}),zw(x[0],S)});ki.displayName="FontAwesomeIcon";ki.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};var zw=Rh.bind(null,Ue.createElement);const Iw={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Aw={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Rw=()=>{const{theme:e}=_.useContext(An);return E.jsxs(Lw,{style:{background:e.footerBackground,color:e.colorTextCard},children:[E.jsx("span",{children:"Designed and coded by Lucas Tomazini"}),E.jsxs(jw,{children:[E.jsx("li",{children:E.jsx("a",{href:"https://github.com/LucasTomazin1",target:"_blank",rel:"noopener noreferrer",children:E.jsx(ki,{icon:Aw,size:"2x"})})}),E.jsx("li",{children:E.jsx("a",{href:"https://www.linkedin.com/in/lucas-tomazini-82042a301/",target:"_blank",rel:"noopener noreferrer",children:E.jsx(ki,{icon:Iw,size:"2x"})})})]})]})},Lw=R.footer`
  display: flex;
  flex-direction: column;
  height: 10rem;
  border-top: 2px solid #3d7dca;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  span {
    font-size: 2rem;
    font-weight: 700;
  }
    @media (max-width: 1024px) {
    height: 8rem;
    span {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    span {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 425px) {
    span {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 320px) {
    span {
      font-size: 1.2rem;
    }
  }
`,jw=R.ul`
  display: flex;
  gap: 5rem;

  li:hover {
  transform: scale(1.1);
  }

  a {
    color: inherit;
    font-size: 2rem;
    transition: transform 0.2s ease-in-out;
  }

    @media (max-width: 1024px) {
    gap: 4rem;
    a {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    gap: 3rem;
    a {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 425px) {
    a {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 320px) {
    a {
      font-size: 1.2rem;
    }
  }
`,jh=({types:e})=>E.jsx(Mw,{children:e.map((t,n)=>E.jsx("span",{className:t.type.name,children:t.type.name},n))}),Mw=R.div`
  display: flex;
  gap: 1rem;
  span {
    font-size: 1.4rem;
    font-weight: 600;
    padding: 1rem;
    border-radius: 0.6rem;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.2);
    color: #121212;
  }
`,Fw=({name:e,types:t,image:n})=>{const r=t[0].type.name;return E.jsxs($w,{className:r,children:[E.jsx("div",{children:E.jsx(bw,{children:E.jsx(Dw,{alt:e,src:n})})}),E.jsxs(Uw,{children:[E.jsx(Bw,{children:e}),E.jsx(Ww,{children:E.jsx(jh,{types:t})})]})]})},$w=R.div`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.8rem;
     &:hover {
        transform: scale(1.05);
      }
`,Dw=R.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`,bw=R.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(0, 0, 0, 0.15) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`,Uw=R.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  border-radius: 0.8rem;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  justify-content: space-evenly;
    background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(0, 0, 0, 0.15) 100%
  );
`,Bw=R.h3`
  text-transform: uppercase;
  font-size: 2rem;
`,Ww=R.div`
  display: flex;
  gap: 1rem;
  span {
    font-size: 1.4rem;
    font-weight: 600;
  }
`,Vw="/pokedex/assets/pikachu-removebg-6mw8jrV_.png",Hw="/pokedex/assets/bulba-removebg-BPzk5ebT.png",Yw="/pokedex/assets/meow_2-removebg-BMFjQ4d2.png",Qw=()=>{const{theme:e}=_.useContext(An),[t,n]=_.useState({pokemonList:[]}),[r,i]=_.useState(0);return _.useEffect(()=>{(async()=>{try{const a=await py(r),l=await Promise.all(a.results.map(async s=>{const u=await Uu(s.name);return{name:u.name,types:u.types,image:u.sprites.other.showdown.front_default}}));n(s=>({pokemonList:[...s.pokemonList,...l]}))}catch(a){console.error("Error fetching pokemons:",a)}})()},[r]),E.jsxs(Gw,{style:{background:e.bodyBackground},children:[E.jsx(Kw,{children:t.pokemonList.map((o,a)=>E.jsx("li",{style:{boxShadow:e.cardShadow,borderRadius:"8px"},children:E.jsx(Xw,{to:`/pokemon/${o.name}`,children:E.jsx(Fw,{name:o.name,types:o.types,image:o.image})})},a))}),E.jsxs(e2,{children:[E.jsx(Go,{onClick:()=>{i(r+12)},children:"Load more"}),E.jsx(Go,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:"Back to Top"})]}),E.jsx(Zw,{children:E.jsx(pl,{src:Vw})}),E.jsx(Jw,{children:E.jsx(pl,{src:Hw})}),E.jsx(qw,{children:E.jsx(pl,{src:Yw})})]})},Gw=R.main`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  color: #121212;
`,Kw=R.ul`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 3rem;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 320px) {
    padding: 0.5rem;
  }
`,Xw=R(bu)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
    transform: scale(1.2);
  }
`,Zw=R.div`
  width: 24rem;
  heigth: 16.3rem;
  position: absolute;
  bottom: -2.6rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 20rem;
    height: 13.3rem;
    bottom: -2rem;
  }

  @media (max-width: 768px) {
    width: 16rem;
    height: 10.3rem;
    bottom: -1.5rem;
  }
`,Jw=R.div`
  width: 21rem;
  height: 19.47rem;
  position: absolute;
  bottom: 1rem;
  left: 5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 18rem;
    height: 16.47rem;
  }

  @media (max-width: 768px) {
    width: 15rem;
    height: 13.47rem;
  }

  @media (max-width: 425px) {
    bottom: 10rem;
    width: 12rem;
    height: 10.47rem;
    left: 3.5rem;
  }
`,qw=R.div`
  width: 21rem;
  heigth: 30rem;
  position: absolute;
  bottom: -3rem;
  right: 5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 18rem;
    height: 27rem;
  }

  @media (max-width: 768px) {
    width: 15rem;
    height: 24rem;
  }

  @media (max-width: 425px) {
    width: 12rem;
    height: 21rem;
    bottom: 10rem;
  }
`,pl=R.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`,e2=R.div`
  display: flex;
  justify-content: space-evenly;
  width: 70rem;
  padding: 1.5rem;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 60rem;
  }

  @media (max-width: 768px) {
    width: 50rem;
  }

  @media (max-width: 425px) {
    width: 40rem;
    align-items: center;
  }

  @media (max-width: 320px) {
    width: 30rem;
  }
`,t2=({ability:e})=>{const[t,n]=_.useState("");return _.useEffect(()=>{(async()=>{try{const o=(await my(e.url)).effect_entries.find(a=>a.language.name==="en");n(o?o.effect:"descrição não disponível")}catch{n("descrição não disponível")}})()},[e.url]),E.jsxs(n2,{children:[E.jsx("h3",{children:e.name}),E.jsx("p",{children:t})]})},n2=R.li`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`,r2={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},i2=()=>{const{theme:e}=_.useContext(An),{name:t}=Bv(),[n,r]=_.useState();return _.useEffect(()=>{(async()=>{try{const o=await Uu(t);r(o),console.log(o)}catch(o){console.log("fetching pokemon page: ",o)}})()},[t]),n?E.jsxs(o2,{style:{backgroundColor:e.bodyBackground,color:e.color},children:[E.jsxs(a2,{children:[E.jsxs(l2,{children:[E.jsx(u2,{to:"/",children:E.jsx(c2,{icon:r2})}),E.jsx(d2,{children:E.jsx("img",{src:n.sprites.other.dream_world.front_default,alt:n.name})})]}),E.jsxs(s2,{children:[E.jsx(f2,{children:n.name}),E.jsxs(p2,{children:[E.jsxs("ul",{children:[E.jsx("li",{children:E.jsx("h2",{children:"Abilities"})}),n.abilities.map((i,o)=>E.jsx(t2,{ability:i.ability},o))]}),E.jsxs(m2,{children:[E.jsxs("div",{children:[E.jsx("h2",{children:"Type"}),E.jsx(jh,{types:n.types})]}),E.jsxs("div",{children:[E.jsx("h2",{children:"Weight"}),E.jsx(h2,{children:n.weight})]})]})]})]})]}),E.jsxs(g2,{children:[E.jsx("li",{children:E.jsx("h2",{children:"Moves"})}),E.jsx(v2,{children:n.moves.map((i,o)=>E.jsx(y2,{style:{backgroundColor:e.moveCard,color:e.colorTextCard},children:i.move.name},o))})]})]}):E.jsx("div",{children:"Loading..."})},o2=R.main`
  padding: 2rem;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  h2 {
    font-size: 3rem;
    margin-bottom: 1.5rem;

     @media (max-width: 1024px) {
    font-size: 1.8rem;
    
    h2 {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    
    h2 {
      font-size: 2.6rem;
    }
  }

  @media (max-width: 425px) {
    font-size: 1.4rem;
    
    h2 {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
    
    h2 {
      font-size: 2.2rem;
    }
  }
`,a2=R.div`
  display: flex;
  gap: 10rem;

  @media (max-width: 1024px) {
    gap: 8rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`,l2=R.div``,s2=R.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`,u2=R(bu)`
  color: inherit;
  text-decoration: none;
`,c2=R(ki)`
  font-size: 4rem;
  &:hover {
    color: inherit;
    transform: scale(1.1);
  }
  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 425px) {
    font-size: 2.5rem;
  }

  @media (max-width: 320px) {
    font-size: 2rem;
  }
`,f2=R.h1`
  font-size: 5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    font-size: 4.5rem;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 425px) {
    font-size: 3.5rem;
  }

  @media (max-width: 320px) {
    font-size: 3rem;
  }
`,d2=R.div`
  max-width: 35rem;
  max-height: 35rem;
  width: 35rem;
  height: 35rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 8rem;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    max-width: 26rem;
    max-height: 26rem;
    width: 26rem;
    padding: 6rem;
  }

  @media (max-width: 425px) {
    max-width: 20rem;
    max-height: 20rem;
    width: 20rem;
    padding: 4rem;
  }

  @media (max-width: 320px) {
    max-width: 16rem;
    max-height: 16rem;
    width: 16rem;
    padding: 3rem;
  }
`,p2=R.div`
  max-width: 50rem;
  ul {
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
      max-width: 45rem;
    }

    @media (max-width: 768px) {
      max-width: 40rem;
      text-align: center;
    }

    @media (max-width: 425px) {
      max-width: 35rem;
    }

    @media (max-width: 320px) {
      max-width: 30rem;
    }
  }
`,m2=R.div`
  display: flex;
  gap: 10rem;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 6rem;
  }

  @media (max-width: 425px) {
    gap: 5rem;
  }
`,h2=R.div`
  font-size: 2rem;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 425px) {
    font-size: 1.4rem;
  }
`,g2=R.ul`
  max-width: 90rem;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    max-width: 80rem;
  }

  @media (max-width: 768px) {
    max-width: 70rem;
  }

  @media (max-width: 425px) {
    max-width: 60rem;
  }

  @media (max-width: 320px) {
    max-width: 50rem;
  }
`,v2=R.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  display: flex;

  justify-content: center;
  align-items: center;
`,y2=R.li`
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    font-size: 1.4rem;
    padding: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.8rem;
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
    padding: 0.7rem;
  }

  @media (max-width: 320px) {
    font-size: 1.1rem;
    padding: 0.6rem;
  }
`,x2=()=>E.jsxs(ny,{children:[E.jsx(vs,{path:"/",element:E.jsx(Qw,{})}),E.jsx(vs,{path:"/pokemon/:name",element:E.jsx(i2,{})})]});function w2(){return E.jsxs(fv,{children:[E.jsx(_y,{}),E.jsxs(uy,{basename:"/pokedex",children:[E.jsx(Cy,{}),E.jsx(x2,{}),E.jsx(Rw,{})]})]})}ml.createRoot(document.getElementById("root")).render(E.jsx(w2,{}));
