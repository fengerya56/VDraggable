module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));t.default=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),i=function(e){return e&&e.__esModule?e:{default:e}}(a),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(8));var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={uId:n.guid()},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"S4",value:function(){return(65536*(1+Math.random())|0).toString(16).substring(1)}},{key:"guid",value:function(){return this.S4()+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+this.S4()+this.S4()}},{key:"domdrugstart",value:function(e,t,n,r,o){o.dataTransfer.setData("code",t),o.dataTransfer.setData("uId",n),o.dataTransfer.setData("item",JSON.stringify(r)),o.dataTransfer.setData("sort",e)}},{key:"dragenter",value:function(e){-1!==e.target.className.indexOf("droppedcontent")&&(e.target.className=u.droppingContent)}},{key:"dragleave",value:function(e){-1!==e.target.className.indexOf("droppingContent")&&(e.target.className=u.droppedcontent)}},{key:"compare",value:function(e){return function(t,n){return t[e]<n[e]?-1:t[e]>n[e]?1:0}}},{key:"drop",value:function(e,t,n,r,o,a){a.preventDefault();var i=a.dataTransfer.getData("code"),c=a.dataTransfer.getData("uId"),f=a.dataTransfer.getData("item"),s=a.dataTransfer.getData("sort");if(c===r)s<e?t.map(function(t){return t[o]===i?t[n]=e:t[n]>s&&t[n]<e+1&&t[n]--,t}):t.map(function(t){return t[o]===i?t[n]=e:t[n]>e-1&&t[n]<s&&t[n]++,t});else if(this.props.isAcceptAdd){var l=JSON.parse(f);if(0===t.filter(function(e){return e[o]===l[o]}).length){var p=Math.max.apply(Math,t.map(function(e){return e[n]}));t.map(function(t){return e===p?l[n]=e+1:(l[n]=e,t[n]++),t}),t.push(l)}}this.props.onChange(t),-1!==a.target.className.indexOf("droppingContent")&&(a.target.className=u.droppedcontent)}},{key:"allowDrop",value:function(e){e.preventDefault()}},{key:"createDraggleComponent",value:function(e,t,n,o,a,c){var f=this;return e.sort(this.compare(t)).map(function(s){return i.default.createElement("div",{className:u.droppedcontent,key:s[c],draggable:!0,onDragEnter:f.dragenter.bind(f),onDragLeave:f.dragleave.bind(f),onDragStart:f.domdrugstart.bind(f,s[t],s[c],o,s),onDrop:f.drop.bind(f,s[t],e,t,o,c),onDragOver:f.allowDrop.bind(f),style:r({},n)},a(s))})}},{key:"render",value:function(){var e=this.props,t=e.value,n=e.sortKey,r=e.codeKey,o=e.style,a=e.render,u=this.state.uId;return i.default.createElement("div",null,i.default.createElement("div",{style:{display:"flex",flexDirection:"row"}},this.createDraggleComponent(t,n,o,u,a,r)))}}]),t}();t.default=c},function(e,t,n){"use strict";e.exports=n(3)},function(e,t,n){"use strict";
/** @license React v16.4.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(4),o=n(5),a=n(6),i=n(7),u="function"==typeof Symbol&&Symbol.for,c=u?Symbol.for("react.element"):60103,f=u?Symbol.for("react.portal"):60106,s=u?Symbol.for("react.fragment"):60107,l=u?Symbol.for("react.strict_mode"):60108,p=u?Symbol.for("react.profiler"):60114,d=u?Symbol.for("react.provider"):60109,y=u?Symbol.for("react.context"):60110,v=u?Symbol.for("react.async_mode"):60111,h=u?Symbol.for("react.forward_ref"):60112;u&&Symbol.for("react.timeout");var b="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);o(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function w(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||g}function x(){}function O(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=w.prototype;var _=O.prototype=new x;_.constructor=O,r(_,w.prototype),_.isPureReactComponent=!0;var S={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var r=void 0,o={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,r)&&!k.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var f=Array(u),s=0;s<u;s++)f[s]=arguments[s+2];o.children=f}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:c,type:e,key:a,ref:i,props:o,_owner:S.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var P=/\/+/g,E=[];function A(e,t,n,r){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function U(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case c:case f:a=!0}}if(a)return n(r,e,""===t?"."+M(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var u=t+M(o=e[i],i);a+=U(o,u,n,r)}else if(null===e||void 0===e?u=null:u="function"==typeof(u=b&&e[b]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),i=0;!(o=e.next()).done;)a+=U(o=o.value,u=t+M(o,i++),n,r);else"object"===o&&m("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return a}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function N(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?$(e,r,n,i.thatReturnsArgument):null!=e&&(C(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n,e={$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function $(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(P,"$&/")+"/"),t=A(t,a,r,o),null==e||U(e,"",N,t),T(t)}var L={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return $(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=A(null,null,t,n),null==e||U(e,"",D,t),T(t)},count:function(e){return null==e?0:U(e,"",i.thatReturnsNull,null)},toArray:function(e){var t=[];return $(e,t,null,i.thatReturnsArgument),t},only:function(e){return C(e)||m("143"),e}},createRef:function(){return{current:null}},Component:w,PureComponent:O,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:y,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_currentValue2:e,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:h,render:e}},Fragment:s,StrictMode:l,unstable_AsyncMode:v,unstable_Profiler:p,createElement:R,cloneElement:function(e,t,n){(null===e||void 0===e)&&m("267",e);var o=void 0,a=r({},e.props),i=e.key,u=e.ref,f=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,f=S.current),void 0!==t.key&&(i=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)j.call(t,o)&&!k.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))a.children=n;else if(1<o){s=Array(o);for(var l=0;l<o;l++)s[l]=arguments[l+2];a.children=s}return{$$typeof:c,type:e.type,key:i,ref:u,props:a,_owner:f}},createFactory:function(e){var t=R.bind(null,e);return t.type=e,t},isValidElement:C,version:"16.4.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:S,assign:r}},I={default:L},B=I&&L||I;e.exports=B.default?B.default:B},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,u=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var f in n=Object(arguments[c]))o.call(n,f)&&(u[f]=n[f]);if(r){i=r(n);for(var s=0;s<i.length;s++)a.call(n,i[s])&&(u[i[s]]=n[i[s]])}}return u}},function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,a,i,u,c){if(r(t),!e){var f;if(void 0===t)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,o,a,i,u,c],l=0;(f=new Error(t.replace(/%s/g,function(){return s[l++]}))).name="Invariant Violation"}throw f.framesToPop=1,f}}},function(e,t,n){"use strict";e.exports={}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(11)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=e.exports=n(10)(!1)).push([e.i,".src-components-draggable__droppedcontent--1A0eS {\n  border: 1px solid rgba(240, 242, 245, 0.8);\n  margin-right: 10px;\n  padding: 6px 6px 6px 6px;\n  background-color: #fafafa;\n  border-radius: 5%;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.src-components-draggable__droppingContent--2z0f2 {\n  border: 2px dashed #008dff;\n  box-shadow: 0 0 8px rgba(30, 144, 255, 0.8);\n  margin-right: 10px;\n  padding: 6px 6px 6px 6px;\n  background-color: #fafafa;\n  border-radius: 5%;\n}\n",""]),t.locals={droppedcontent:"src-components-draggable__droppedcontent--1A0eS",droppingContent:"src-components-draggable__droppingContent--2z0f2"}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),i=null,u=0,c=[],f=n(12);function s(e,t){for(var n=0;n<e.length;n++){var o=e[n],a=r[o.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(h(o.parts[i],t))}else{var u=[];for(i=0;i<o.parts.length;i++)u.push(h(o.parts[i],t));r[o.id]={id:o.id,refs:1,parts:u}}}}function l(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],u={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(u):n.push(r[i]={id:i,parts:[u]})}return n}function p(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,n);n.insertBefore(t,o)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function y(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return v(t,e.attrs),p(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function h(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var c=u++;n=i||(i=y(t)),r=m.bind(null,n,c,!1),o=m.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(i),u&&URL.revokeObjectURL(u)}.bind(null,n,t),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=l(e,t);return s(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var i=n[a];(u=r[i.id]).refs--,o.push(u)}e&&s(l(e,t),t);for(a=0;a<o.length;a++){var u;if(0===(u=o[a]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete r[u.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function m(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);