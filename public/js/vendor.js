/*!
 * Vue.js v1.0.26
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Vue=e()}(this,function(){"use strict";function t(e,n,r){if(i(e,n))return void(e[n]=r);if(e._isVue)return void t(e._data,n,r);var s=e.__ob__;if(!s)return void(e[n]=r);if(s.convert(n,r),s.dep.notify(),s.vms)for(var o=s.vms.length;o--;){var a=s.vms[o];a._proxy(n),a._digest()}return r}function e(t,e){if(i(t,e)){delete t[e];var n=t.__ob__;if(!n)return void(t._isVue&&(delete t._data[e],t._digest()));if(n.dep.notify(),n.vms)for(var r=n.vms.length;r--;){var s=n.vms[r];s._unproxy(e),s._digest()}}}function i(t,e){return Oi.call(t,e)}function n(t){return Ti.test(t)}function r(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function s(t){return null==t?"":t.toString()}function o(t){if("string"!=typeof t)return t;var e=Number(t);return isNaN(e)?t:e}function a(t){return"true"===t?!0:"false"===t?!1:t}function h(t){var e=t.charCodeAt(0),i=t.charCodeAt(t.length-1);return e!==i||34!==e&&39!==e?t:t.slice(1,-1)}function l(t){return t.replace(Ni,c)}function c(t,e){return e?e.toUpperCase():""}function u(t){return t.replace(ji,"$1-$2").toLowerCase()}function f(t){return t.replace(Ei,c)}function p(t,e){return function(i){var n=arguments.length;return n?n>1?t.apply(e,arguments):t.call(e,i):t.call(e)}}function d(t,e){e=e||0;for(var i=t.length-e,n=new Array(i);i--;)n[i]=t[i+e];return n}function v(t,e){for(var i=Object.keys(e),n=i.length;n--;)t[i[n]]=e[i[n]];return t}function m(t){return null!==t&&"object"==typeof t}function g(t){return Si.call(t)===Fi}function _(t,e,i,n){Object.defineProperty(t,e,{value:i,enumerable:!!n,writable:!0,configurable:!0})}function y(t,e){var i,n,r,s,o,a=function h(){var a=Date.now()-s;e>a&&a>=0?i=setTimeout(h,e-a):(i=null,o=t.apply(r,n),i||(r=n=null))};return function(){return r=this,n=arguments,s=Date.now(),i||(i=setTimeout(a,e)),o}}function b(t,e){for(var i=t.length;i--;)if(t[i]===e)return i;return-1}function w(t){var e=function i(){return i.cancelled?void 0:t.apply(this,arguments)};return e.cancel=function(){e.cancelled=!0},e}function C(t,e){return t==e||(m(t)&&m(e)?JSON.stringify(t)===JSON.stringify(e):!1)}function $(t){this.size=0,this.limit=t,this.head=this.tail=void 0,this._keymap=Object.create(null)}function k(){var t,e=en.slice(hn,on).trim();if(e){t={};var i=e.match(vn);t.name=i[0],i.length>1&&(t.args=i.slice(1).map(x))}t&&(nn.filters=nn.filters||[]).push(t),hn=on+1}function x(t){if(mn.test(t))return{value:o(t),dynamic:!1};var e=h(t),i=e===t;return{value:i?t:e,dynamic:i}}function A(t){var e=dn.get(t);if(e)return e;for(en=t,ln=cn=!1,un=fn=pn=0,hn=0,nn={},on=0,an=en.length;an>on;on++)if(sn=rn,rn=en.charCodeAt(on),ln)39===rn&&92!==sn&&(ln=!ln);else if(cn)34===rn&&92!==sn&&(cn=!cn);else if(124===rn&&124!==en.charCodeAt(on+1)&&124!==en.charCodeAt(on-1))null==nn.expression?(hn=on+1,nn.expression=en.slice(0,on).trim()):k();else switch(rn){case 34:cn=!0;break;case 39:ln=!0;break;case 40:pn++;break;case 41:pn--;break;case 91:fn++;break;case 93:fn--;break;case 123:un++;break;case 125:un--}return null==nn.expression?nn.expression=en.slice(0,on).trim():0!==hn&&k(),dn.put(t,nn),nn}function O(t){return t.replace(_n,"\\$&")}function T(){var t=O(An.delimiters[0]),e=O(An.delimiters[1]),i=O(An.unsafeDelimiters[0]),n=O(An.unsafeDelimiters[1]);bn=new RegExp(i+"((?:.|\\n)+?)"+n+"|"+t+"((?:.|\\n)+?)"+e,"g"),wn=new RegExp("^"+i+"((?:.|\\n)+?)"+n+"$"),yn=new $(1e3)}function N(t){yn||T();var e=yn.get(t);if(e)return e;if(!bn.test(t))return null;for(var i,n,r,s,o,a,h=[],l=bn.lastIndex=0;i=bn.exec(t);)n=i.index,n>l&&h.push({value:t.slice(l,n)}),r=wn.test(i[0]),s=r?i[1]:i[2],o=s.charCodeAt(0),a=42===o,s=a?s.slice(1):s,h.push({tag:!0,value:s.trim(),html:r,oneTime:a}),l=n+i[0].length;return l<t.length&&h.push({value:t.slice(l)}),yn.put(t,h),h}function j(t,e){return t.length>1?t.map(function(t){return E(t,e)}).join("+"):E(t[0],e,!0)}function E(t,e,i){return t.tag?t.oneTime&&e?'"'+e.$eval(t.value)+'"':S(t.value,i):'"'+t.value+'"'}function S(t,e){if(Cn.test(t)){var i=A(t);return i.filters?"this._applyFilters("+i.expression+",null,"+JSON.stringify(i.filters)+",false)":"("+t+")"}return e?t:"("+t+")"}function F(t,e,i,n){R(t,1,function(){e.appendChild(t)},i,n)}function D(t,e,i,n){R(t,1,function(){B(t,e)},i,n)}function P(t,e,i){R(t,-1,function(){z(t)},e,i)}function R(t,e,i,n,r){var s=t.__v_trans;if(!s||!s.hooks&&!qi||!n._isCompiled||n.$parent&&!n.$parent._isCompiled)return i(),void(r&&r());var o=e>0?"enter":"leave";s[o](i,r)}function L(t){if("string"==typeof t){t=document.querySelector(t)}return t}function H(t){if(!t)return!1;var e=t.ownerDocument.documentElement,i=t.parentNode;return e===t||e===i||!(!i||1!==i.nodeType||!e.contains(i))}function I(t,e){var i=t.getAttribute(e);return null!==i&&t.removeAttribute(e),i}function M(t,e){var i=I(t,":"+e);return null===i&&(i=I(t,"v-bind:"+e)),i}function V(t,e){return t.hasAttribute(e)||t.hasAttribute(":"+e)||t.hasAttribute("v-bind:"+e)}function B(t,e){e.parentNode.insertBefore(t,e)}function W(t,e){e.nextSibling?B(t,e.nextSibling):e.parentNode.appendChild(t)}function z(t){t.parentNode.removeChild(t)}function U(t,e){e.firstChild?B(t,e.firstChild):e.appendChild(t)}function J(t,e){var i=t.parentNode;i&&i.replaceChild(e,t)}function q(t,e,i,n){t.addEventListener(e,i,n)}function Q(t,e,i){t.removeEventListener(e,i)}function G(t){var e=t.className;return"object"==typeof e&&(e=e.baseVal||""),e}function Z(t,e){Mi&&!/svg$/.test(t.namespaceURI)?t.className=e:t.setAttribute("class",e)}function X(t,e){if(t.classList)t.classList.add(e);else{var i=" "+G(t)+" ";i.indexOf(" "+e+" ")<0&&Z(t,(i+e).trim())}}function Y(t,e){if(t.classList)t.classList.remove(e);else{for(var i=" "+G(t)+" ",n=" "+e+" ";i.indexOf(n)>=0;)i=i.replace(n," ");Z(t,i.trim())}t.className||t.removeAttribute("class")}function K(t,e){var i,n;if(it(t)&&at(t.content)&&(t=t.content),t.hasChildNodes())for(tt(t),n=e?document.createDocumentFragment():document.createElement("div");i=t.firstChild;)n.appendChild(i);return n}function tt(t){for(var e;e=t.firstChild,et(e);)t.removeChild(e);for(;e=t.lastChild,et(e);)t.removeChild(e)}function et(t){return t&&(3===t.nodeType&&!t.data.trim()||8===t.nodeType)}function it(t){return t.tagName&&"template"===t.tagName.toLowerCase()}function nt(t,e){var i=An.debug?document.createComment(t):document.createTextNode(e?" ":"");return i.__v_anchor=!0,i}function rt(t){if(t.hasAttributes())for(var e=t.attributes,i=0,n=e.length;n>i;i++){var r=e[i].name;if(Nn.test(r))return l(r.replace(Nn,""))}}function st(t,e,i){for(var n;t!==e;)n=t.nextSibling,i(t),t=n;i(e)}function ot(t,e,i,n,r){function s(){if(a++,o&&a>=h.length){for(var t=0;t<h.length;t++)n.appendChild(h[t]);r&&r()}}var o=!1,a=0,h=[];st(t,e,function(t){t===e&&(o=!0),h.push(t),P(t,i,s)})}function at(t){return t&&11===t.nodeType}function ht(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}function lt(t,e){var i=t.tagName.toLowerCase(),n=t.hasAttributes();if(jn.test(i)||En.test(i)){if(n)return ct(t,e)}else{if(gt(e,"components",i))return{id:i};var r=n&&ct(t,e);if(r)return r}}function ct(t,e){var i=t.getAttribute("is");if(null!=i){if(gt(e,"components",i))return t.removeAttribute("is"),{id:i}}else if(i=M(t,"is"),null!=i)return{id:i,dynamic:!0}}function ut(e,n){var r,s,o;for(r in n)s=e[r],o=n[r],i(e,r)?m(s)&&m(o)&&ut(s,o):t(e,r,o);return e}function ft(t,e){var i=Object.create(t||null);return e?v(i,vt(e)):i}function pt(t){if(t.components)for(var e,i=t.components=vt(t.components),n=Object.keys(i),r=0,s=n.length;s>r;r++){var o=n[r];jn.test(o)||En.test(o)||(e=i[o],g(e)&&(i[o]=wi.extend(e)))}}function dt(t){var e,i,n=t.props;if(Di(n))for(t.props={},e=n.length;e--;)i=n[e],"string"==typeof i?t.props[i]=null:i.name&&(t.props[i.name]=i);else if(g(n)){var r=Object.keys(n);for(e=r.length;e--;)i=n[r[e]],"function"==typeof i&&(n[r[e]]={type:i})}}function vt(t){if(Di(t)){for(var e,i={},n=t.length;n--;){e=t[n];var r="function"==typeof e?e.options&&e.options.name||e.id:e.name||e.id;r&&(i[r]=e)}return i}return t}function mt(t,e,n){function r(i){var r=Sn[i]||Fn;o[i]=r(t[i],e[i],n,i)}pt(e),dt(e);var s,o={};if(e["extends"]&&(t="function"==typeof e["extends"]?mt(t,e["extends"].options,n):mt(t,e["extends"],n)),e.mixins)for(var a=0,h=e.mixins.length;h>a;a++){var l=e.mixins[a],c=l.prototype instanceof wi?l.options:l;t=mt(t,c,n)}for(s in t)r(s);for(s in e)i(t,s)||r(s);return o}function gt(t,e,i,n){if("string"==typeof i){var r,s=t[e],o=s[i]||s[r=l(i)]||s[r.charAt(0).toUpperCase()+r.slice(1)];return o}}function _t(){this.id=Dn++,this.subs=[]}function yt(t){Hn=!1,t(),Hn=!0}function bt(t){if(this.value=t,this.dep=new _t,_(t,"__ob__",this),Di(t)){var e=Pi?wt:Ct;e(t,Rn,Ln),this.observeArray(t)}else this.walk(t)}function wt(t,e){t.__proto__=e}function Ct(t,e,i){for(var n=0,r=i.length;r>n;n++){var s=i[n];_(t,s,e[s])}}function $t(t,e){if(t&&"object"==typeof t){var n;return i(t,"__ob__")&&t.__ob__ instanceof bt?n=t.__ob__:Hn&&(Di(t)||g(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new bt(t)),n&&e&&n.addVm(e),n}}function kt(t,e,i){var n=new _t,r=Object.getOwnPropertyDescriptor(t,e);if(!r||r.configurable!==!1){var s=r&&r.get,o=r&&r.set,a=$t(i);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):i;if(_t.target&&(n.depend(),a&&a.dep.depend(),Di(e)))for(var r,o=0,h=e.length;h>o;o++)r=e[o],r&&r.__ob__&&r.__ob__.dep.depend();return e},set:function(e){var r=s?s.call(t):i;e!==r&&(o?o.call(t,e):i=e,a=$t(e),n.notify())}})}}function xt(t){t.prototype._init=function(t){t=t||{},this.$el=null,this.$parent=t.parent,this.$root=this.$parent?this.$parent.$root:this,this.$children=[],this.$refs={},this.$els={},this._watchers=[],this._directives=[],this._uid=Mn++,this._isVue=!0,this._events={},this._eventsCount={},this._isFragment=!1,this._fragment=this._fragmentStart=this._fragmentEnd=null,this._isCompiled=this._isDestroyed=this._isReady=this._isAttached=this._isBeingDestroyed=this._vForRemoving=!1,this._unlinkFn=null,this._context=t._context||this.$parent,this._scope=t._scope,this._frag=t._frag,this._frag&&this._frag.children.push(this),this.$parent&&this.$parent.$children.push(this),t=this.$options=mt(this.constructor.options,t,this),this._updateRef(),this._data={},this._callHook("init"),this._initState(),this._initEvents(),this._callHook("created"),t.el&&this.$mount(t.el)}}function At(t){if(void 0===t)return"eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:case 48:return t;case 95:case 36:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return e>=97&&122>=e||e>=65&&90>=e?"ident":e>=49&&57>=e?"number":"else"}function Ot(t){var e=t.trim();return"0"===t.charAt(0)&&isNaN(t)?!1:n(e)?h(e):"*"+e}function Tt(t){function e(){var e=t[c+1];return u===Xn&&"'"===e||u===Yn&&'"'===e?(c++,n="\\"+e,p[Bn](),!0):void 0}var i,n,r,s,o,a,h,l=[],c=-1,u=Jn,f=0,p=[];for(p[Wn]=function(){void 0!==r&&(l.push(r),r=void 0)},p[Bn]=function(){void 0===r?r=n:r+=n},p[zn]=function(){p[Bn](),f++},p[Un]=function(){if(f>0)f--,u=Zn,p[Bn]();else{if(f=0,r=Ot(r),r===!1)return!1;p[Wn]()}};null!=u;)if(c++,i=t[c],"\\"!==i||!e()){if(s=At(i),h=er[u],o=h[s]||h["else"]||tr,o===tr)return;if(u=o[0],a=p[o[1]],a&&(n=o[2],n=void 0===n?i:n,a()===!1))return;if(u===Kn)return l.raw=t,l}}function Nt(t){var e=Vn.get(t);return e||(e=Tt(t),e&&Vn.put(t,e)),e}function jt(t,e){return It(e).get(t)}function Et(e,i,n){var r=e;if("string"==typeof i&&(i=Tt(i)),!i||!m(e))return!1;for(var s,o,a=0,h=i.length;h>a;a++)s=e,o=i[a],"*"===o.charAt(0)&&(o=It(o.slice(1)).get.call(r,r)),h-1>a?(e=e[o],m(e)||(e={},t(s,o,e))):Di(e)?e.$set(o,n):o in e?e[o]=n:t(e,o,n);return!0}function St(){}function Ft(t,e){var i=vr.length;return vr[i]=e?t.replace(lr,"\\n"):t,'"'+i+'"'}function Dt(t){var e=t.charAt(0),i=t.slice(1);return sr.test(i)?t:(i=i.indexOf('"')>-1?i.replace(ur,Pt):i,e+"scope."+i)}function Pt(t,e){return vr[e]}function Rt(t){ar.test(t),vr.length=0;var e=t.replace(cr,Ft).replace(hr,"");return e=(" "+e).replace(pr,Dt).replace(ur,Pt),Lt(e)}function Lt(t){try{return new Function("scope","return "+t+";")}catch(e){return St}}function Ht(t){var e=Nt(t);return e?function(t,i){Et(t,e,i)}:void 0}function It(t,e){t=t.trim();var i=nr.get(t);if(i)return e&&!i.set&&(i.set=Ht(i.exp)),i;var n={exp:t};return n.get=Mt(t)&&t.indexOf("[")<0?Lt("scope."+t):Rt(t),e&&(n.set=Ht(t)),nr.put(t,n),n}function Mt(t){return fr.test(t)&&!dr.test(t)&&"Math."!==t.slice(0,5)}function Vt(){gr.length=0,_r.length=0,yr={},br={},wr=!1}function Bt(){for(var t=!0;t;)t=!1,Wt(gr),Wt(_r),gr.length?t=!0:(Li&&An.devtools&&Li.emit("flush"),Vt())}function Wt(t){for(var e=0;e<t.length;e++){var i=t[e],n=i.id;yr[n]=null,i.run()}t.length=0}function zt(t){var e=t.id;if(null==yr[e]){var i=t.user?_r:gr;yr[e]=i.length,i.push(t),wr||(wr=!0,Yi(Bt))}}function Ut(t,e,i,n){n&&v(this,n);var r="function"==typeof e;if(this.vm=t,t._watchers.push(this),this.expression=e,this.cb=i,this.id=++Cr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Ki,this.newDepIds=new Ki,this.prevError=null,r)this.getter=e,this.setter=void 0;else{var s=It(e,this.twoWay);this.getter=s.get,this.setter=s.set}this.value=this.lazy?void 0:this.get(),this.queued=this.shallow=!1}function Jt(t,e){var i=void 0,n=void 0;e||(e=$r,e.clear());var r=Di(t),s=m(t);if((r||s)&&Object.isExtensible(t)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(r)for(i=t.length;i--;)Jt(t[i],e);else if(s)for(n=Object.keys(t),i=n.length;i--;)Jt(t[n[i]],e)}}function qt(t){return it(t)&&at(t.content)}function Qt(t,e){var i=e?t:t.trim(),n=xr.get(i);if(n)return n;var r=document.createDocumentFragment(),s=t.match(Tr),o=Nr.test(t),a=jr.test(t);if(s||o||a){var h=s&&s[1],l=Or[h]||Or.efault,c=l[0],u=l[1],f=l[2],p=document.createElement("div");for(p.innerHTML=u+t+f;c--;)p=p.lastChild;for(var d;d=p.firstChild;)r.appendChild(d)}else r.appendChild(document.createTextNode(t));return e||tt(r),xr.put(i,r),r}function Gt(t){if(qt(t))return Qt(t.innerHTML);if("SCRIPT"===t.tagName)return Qt(t.textContent);for(var e,i=Zt(t),n=document.createDocumentFragment();e=i.firstChild;)n.appendChild(e);return tt(n),n}function Zt(t){if(!t.querySelectorAll)return t.cloneNode();var e,i,n,r=t.cloneNode(!0);if(Er){var s=r;if(qt(t)&&(t=t.content,s=r.content),i=t.querySelectorAll("template"),i.length)for(n=s.querySelectorAll("template"),e=n.length;e--;)n[e].parentNode.replaceChild(Zt(i[e]),n[e])}if(Sr)if("TEXTAREA"===t.tagName)r.value=t.value;else if(i=t.querySelectorAll("textarea"),i.length)for(n=r.querySelectorAll("textarea"),e=n.length;e--;)n[e].value=i[e].value;return r}function Xt(t,e,i){var n,r;return at(t)?(tt(t),e?Zt(t):t):("string"==typeof t?i||"#"!==t.charAt(0)?r=Qt(t,i):(r=Ar.get(t),r||(n=document.getElementById(t.slice(1)),n&&(r=Gt(n),Ar.put(t,r)))):t.nodeType&&(r=Gt(t)),r&&e?Zt(r):r)}function Yt(t,e,i,n,r,s){this.children=[],this.childFrags=[],this.vm=e,this.scope=r,this.inserted=!1,this.parentFrag=s,s&&s.childFrags.push(this),this.unlink=t(e,i,n,r,this);var o=this.single=1===i.childNodes.length&&!i.childNodes[0].__v_anchor;o?(this.node=i.childNodes[0],this.before=Kt,this.remove=te):(this.node=nt("fragment-start"),this.end=nt("fragment-end"),this.frag=i,U(this.node,i),i.appendChild(this.end),this.before=ee,this.remove=ie),this.node.__v_frag=this}function Kt(t,e){this.inserted=!0;var i=e!==!1?D:B;i(this.node,t,this.vm),H(this.node)&&this.callHook(ne)}function te(){this.inserted=!1;var t=H(this.node),e=this;this.beforeRemove(),P(this.node,this.vm,function(){t&&e.callHook(re),e.destroy()})}function ee(t,e){this.inserted=!0;var i=this.vm,n=e!==!1?D:B;st(this.node,this.end,function(e){n(e,t,i)}),H(this.node)&&this.callHook(ne)}function ie(){this.inserted=!1;var t=this,e=H(this.node);this.beforeRemove(),ot(this.node,this.end,this.vm,this.frag,function(){e&&t.callHook(re),t.destroy()})}function ne(t){!t._isAttached&&H(t.$el)&&t._callHook("attached")}function re(t){t._isAttached&&!H(t.$el)&&t._callHook("detached")}function se(t,e){this.vm=t;var i,n="string"==typeof e;n||it(e)&&!e.hasAttribute("v-if")?i=Xt(e,!0):(i=document.createDocumentFragment(),i.appendChild(e)),this.template=i;var r,s=t.constructor.cid;if(s>0){var o=s+(n?e:ht(e));r=Pr.get(o),r||(r=De(i,t.$options,!0),Pr.put(o,r))}else r=De(i,t.$options,!0);this.linker=r}function oe(t,e,i){var n=t.node.previousSibling;if(n){for(t=n.__v_frag;!(t&&t.forId===i&&t.inserted||n===e);){if(n=n.previousSibling,!n)return;t=n.__v_frag}return t}}function ae(t){var e=t.node;if(t.end)for(;!e.__vue__&&e!==t.end&&e.nextSibling;)e=e.nextSibling;return e.__vue__}function he(t){for(var e=-1,i=new Array(Math.floor(t));++e<t;)i[e]=e;return i}function le(t,e,i,n){return n?"$index"===n?t:n.charAt(0).match(/\w/)?jt(i,n):i[n]:e||i}function ce(t,e,i){for(var n,r,s,o=e?[]:null,a=0,h=t.options.length;h>a;a++)if(n=t.options[a],s=i?n.hasAttribute("selected"):n.selected){if(r=n.hasOwnProperty("_value")?n._value:n.value,!e)return r;o.push(r)}return o}function ue(t,e){for(var i=t.length;i--;)if(C(t[i],e))return i;return-1}function fe(t,e){var i=e.map(function(t){var e=t.charCodeAt(0);return e>47&&58>e?parseInt(t,10):1===t.length&&(e=t.toUpperCase().charCodeAt(0),e>64&&91>e)?e:is[t]});return i=[].concat.apply([],i),function(e){return i.indexOf(e.keyCode)>-1?t.call(this,e):void 0}}function pe(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function de(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ve(t){return function(e){return e.target===e.currentTarget?t.call(this,e):void 0}}function me(t){if(as[t])return as[t];var e=ge(t);return as[t]=as[e]=e,e}function ge(t){t=u(t);var e=l(t),i=e.charAt(0).toUpperCase()+e.slice(1);hs||(hs=document.createElement("div"));var n,r=rs.length;if("filter"!==e&&e in hs.style)return{kebab:t,camel:e};for(;r--;)if(n=ss[r]+i,n in hs.style)return{kebab:rs[r]+t,camel:n}}function _e(t){var e=[];if(Di(t))for(var i=0,n=t.length;n>i;i++){var r=t[i];if(r)if("string"==typeof r)e.push(r);else for(var s in r)r[s]&&e.push(s)}else if(m(t))for(var o in t)t[o]&&e.push(o);return e}function ye(t,e,i){if(e=e.trim(),-1===e.indexOf(" "))return void i(t,e);for(var n=e.split(/\s+/),r=0,s=n.length;s>r;r++)i(t,n[r])}function be(t,e,i){function n(){++s>=r?i():t[s].call(e,n)}var r=t.length,s=0;t[0].call(e,n)}function we(t,e,i){for(var r,s,o,a,h,c,f,p=[],d=Object.keys(e),v=d.length;v--;)s=d[v],r=e[s]||ks,h=l(s),xs.test(h)&&(f={name:s,path:h,options:r,mode:$s.ONE_WAY,raw:null},o=u(s),null===(a=M(t,o))&&(null!==(a=M(t,o+".sync"))?f.mode=$s.TWO_WAY:null!==(a=M(t,o+".once"))&&(f.mode=$s.ONE_TIME)),null!==a?(f.raw=a,c=A(a),a=c.expression,f.filters=c.filters,n(a)&&!c.filters?f.optimizedLiteral=!0:f.dynamic=!0,f.parentPath=a):null!==(a=I(t,o))&&(f.raw=a),p.push(f));return Ce(p)}function Ce(t){return function(e,n){e._props={};for(var r,s,l,c,f,p=e.$options.propsData,d=t.length;d--;)if(r=t[d],f=r.raw,s=r.path,l=r.options,e._props[s]=r,p&&i(p,s)&&ke(e,r,p[s]),null===f)ke(e,r,void 0);else if(r.dynamic)r.mode===$s.ONE_TIME?(c=(n||e._context||e).$get(r.parentPath),ke(e,r,c)):e._context?e._bindDir({name:"prop",def:Os,prop:r},null,null,n):ke(e,r,e.$get(r.parentPath));else if(r.optimizedLiteral){var v=h(f);c=v===f?a(o(f)):v,ke(e,r,c)}else c=l.type!==Boolean||""!==f&&f!==u(r.name)?f:!0,ke(e,r,c)}}function $e(t,e,i,n){var r=e.dynamic&&Mt(e.parentPath),s=i;void 0===s&&(s=Ae(t,e)),s=Te(e,s,t);var o=s!==i;Oe(e,s,t)||(s=void 0),r&&!o?yt(function(){n(s)}):n(s)}function ke(t,e,i){$e(t,e,i,function(i){kt(t,e.path,i)})}function xe(t,e,i){$e(t,e,i,function(i){t[e.path]=i})}function Ae(t,e){var n=e.options;if(!i(n,"default"))return n.type===Boolean?!1:void 0;var r=n["default"];return m(r),"function"==typeof r&&n.type!==Function?r.call(t):r}function Oe(t,e,i){if(!t.options.required&&(null===t.raw||null==e))return!0;var n=t.options,r=n.type,s=!r,o=[];if(r){Di(r)||(r=[r]);for(var a=0;a<r.length&&!s;a++){var h=Ne(e,r[a]);o.push(h.expectedType),s=h.valid}}if(!s)return!1;var l=n.validator;return!l||l(e)}function Te(t,e,i){var n=t.options.coerce;return n&&"function"==typeof n?n(e):e}function Ne(t,e){var i,n;return e===String?(n="string",i=typeof t===n):e===Number?(n="number",i=typeof t===n):e===Boolean?(n="boolean",i=typeof t===n):e===Function?(n="function",i=typeof t===n):e===Object?(n="object",i=g(t)):e===Array?(n="array",i=Di(t)):i=t instanceof e,{valid:i,expectedType:n}}function je(t){Ts.push(t),Ns||(Ns=!0,Yi(Ee))}function Ee(){for(var t=document.documentElement.offsetHeight,e=0;e<Ts.length;e++)Ts[e]();return Ts=[],Ns=!1,t}function Se(t,e,i,n){this.id=e,this.el=t,this.enterClass=i&&i.enterClass||e+"-enter",this.leaveClass=i&&i.leaveClass||e+"-leave",this.hooks=i,this.vm=n,this.pendingCssEvent=this.pendingCssCb=this.cancel=this.pendingJsCb=this.op=this.cb=null,this.justEntered=!1,this.entered=this.left=!1,this.typeCache={},this.type=i&&i.type;var r=this;["enterNextTick","enterDone","leaveNextTick","leaveDone"].forEach(function(t){r[t]=p(r[t],r)})}function Fe(t){if(/svg$/.test(t.namespaceURI)){var e=t.getBoundingClientRect();return!(e.width||e.height)}return!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}function De(t,e,i){var n=i||!e._asComponent?Ve(t,e):null,r=n&&n.terminal||ri(t)||!t.hasChildNodes()?null:qe(t.childNodes,e);return function(t,e,i,s,o){var a=d(e.childNodes),h=Pe(function(){n&&n(t,e,i,s,o),r&&r(t,a,i,s,o)},t);return Le(t,h)}}function Pe(t,e){e._directives=[];var i=e._directives.length;t();var n=e._directives.slice(i);n.sort(Re);for(var r=0,s=n.length;s>r;r++)n[r]._bind();return n}function Re(t,e){return t=t.descriptor.def.priority||zs,e=e.descriptor.def.priority||zs,t>e?-1:t===e?0:1}function Le(t,e,i,n){function r(r){He(t,e,r),i&&n&&He(i,n)}return r.dirs=e,r}function He(t,e,i){for(var n=e.length;n--;)e[n]._teardown()}function Ie(t,e,i,n){var r=we(e,i,t),s=Pe(function(){r(t,n)},t);return Le(t,s)}function Me(t,e,i){var n,r,s=e._containerAttrs,o=e._replacerAttrs;return 11!==t.nodeType&&(e._asComponent?(s&&i&&(n=ti(s,i)),o&&(r=ti(o,e))):r=ti(t.attributes,e)),e._containerAttrs=e._replacerAttrs=null,function(t,e,i){var s,o=t._context;o&&n&&(s=Pe(function(){n(o,e,null,i)},o));var a=Pe(function(){r&&r(t,e)},t);return Le(t,a,o,s)}}function Ve(t,e){var i=t.nodeType;return 1!==i||ri(t)?3===i&&t.data.trim()?We(t,e):null:Be(t,e)}function Be(t,e){if("TEXTAREA"===t.tagName){var i=N(t.value);i&&(t.setAttribute(":value",j(i)),t.value="")}var n,r=t.hasAttributes(),s=r&&d(t.attributes);return r&&(n=Xe(t,s,e)),n||(n=Ge(t,e)),n||(n=Ze(t,e)),!n&&r&&(n=ti(s,e)),n}function We(t,e){if(t._skip)return ze;var i=N(t.wholeText);if(!i)return null;for(var n=t.nextSibling;n&&3===n.nodeType;)n._skip=!0,n=n.nextSibling;for(var r,s,o=document.createDocumentFragment(),a=0,h=i.length;h>a;a++)s=i[a],r=s.tag?Ue(s,e):document.createTextNode(s.value),o.appendChild(r);return Je(i,o,e)}function ze(t,e){z(e)}function Ue(t,e){function i(e){if(!t.descriptor){var i=A(t.value);t.descriptor={name:e,def:bs[e],expression:i.expression,filters:i.filters}}}var n;return t.oneTime?n=document.createTextNode(t.value):t.html?(n=document.createComment("v-html"),i("html")):(n=document.createTextNode(" "),i("text")),n}function Je(t,e){return function(i,n,r,o){for(var a,h,l,c=e.cloneNode(!0),u=d(c.childNodes),f=0,p=t.length;p>f;f++)a=t[f],h=a.value,a.tag&&(l=u[f],a.oneTime?(h=(o||i).$eval(h),a.html?J(l,Xt(h,!0)):l.data=s(h)):i._bindDir(a.descriptor,l,r,o));J(n,c)}}function qe(t,e){for(var i,n,r,s=[],o=0,a=t.length;a>o;o++)r=t[o],i=Ve(r,e),n=i&&i.terminal||"SCRIPT"===r.tagName||!r.hasChildNodes()?null:qe(r.childNodes,e),s.push(i,n);return s.length?Qe(s):null}function Qe(t){return function(e,i,n,r,s){for(var o,a,h,l=0,c=0,u=t.length;u>l;c++){o=i[c],a=t[l++],h=t[l++];var f=d(o.childNodes);a&&a(e,o,n,r,s),h&&h(e,f,n,r,s)}}}function Ge(t,e){var i=t.tagName.toLowerCase();if(!jn.test(i)){var n=gt(e,"elementDirectives",i);return n?Ke(t,i,"",e,n):void 0}}function Ze(t,e){var i=lt(t,e);if(i){var n=rt(t),r={name:"component",ref:n,expression:i.id,def:Hs.component,modifiers:{literal:!i.dynamic}},s=function(t,e,i,s,o){n&&kt((s||t).$refs,n,null),t._bindDir(r,e,i,s,o)};return s.terminal=!0,s}}function Xe(t,e,i){if(null!==I(t,"v-pre"))return Ye;if(t.hasAttribute("v-else")){var n=t.previousElementSibling;if(n&&n.hasAttribute("v-if"))return Ye}for(var r,s,o,a,h,l,c,u,f,p,d=0,v=e.length;v>d;d++)r=e[d],s=r.name.replace(Bs,""),(h=s.match(Vs))&&(f=gt(i,"directives",h[1]),f&&f.terminal&&(!p||(f.priority||Us)>p.priority)&&(p=f,c=r.name,a=ei(r.name),o=r.value,l=h[1],u=h[2]));return p?Ke(t,l,o,i,p,c,u,a):void 0}function Ye(){}function Ke(t,e,i,n,r,s,o,a){var h=A(i),l={name:e,arg:o,expression:h.expression,filters:h.filters,raw:i,attr:s,modifiers:a,def:r};"for"!==e&&"router-view"!==e||(l.ref=rt(t));var c=function(t,e,i,n,r){l.ref&&kt((n||t).$refs,l.ref,null),t._bindDir(l,e,i,n,r)};return c.terminal=!0,c}function ti(t,e){function i(t,e,i){var n=i&&ni(i),r=!n&&A(s);v.push({name:t,attr:o,raw:a,def:e,arg:l,modifiers:c,expression:r&&r.expression,filters:r&&r.filters,interp:i,hasOneTime:n})}for(var n,r,s,o,a,h,l,c,u,f,p,d=t.length,v=[];d--;)if(n=t[d],r=o=n.name,s=a=n.value,f=N(s),l=null,c=ei(r),r=r.replace(Bs,""),f)s=j(f),l=r,i("bind",bs.bind,f);else if(Ws.test(r))c.literal=!Is.test(r),i("transition",Hs.transition);else if(Ms.test(r))l=r.replace(Ms,""),i("on",bs.on);else if(Is.test(r))h=r.replace(Is,""),"style"===h||"class"===h?i(h,Hs[h]):(l=h,i("bind",bs.bind));else if(p=r.match(Vs)){if(h=p[1],l=p[2],"else"===h)continue;u=gt(e,"directives",h,!0),u&&i(h,u)}return v.length?ii(v):void 0}function ei(t){var e=Object.create(null),i=t.match(Bs);if(i)for(var n=i.length;n--;)e[i[n].slice(1)]=!0;return e}function ii(t){return function(e,i,n,r,s){for(var o=t.length;o--;)e._bindDir(t[o],i,n,r,s)}}function ni(t){for(var e=t.length;e--;)if(t[e].oneTime)return!0}function ri(t){return"SCRIPT"===t.tagName&&(!t.hasAttribute("type")||"text/javascript"===t.getAttribute("type"))}function si(t,e){return e&&(e._containerAttrs=ai(t)),it(t)&&(t=Xt(t)),e&&(e._asComponent&&!e.template&&(e.template="<slot></slot>"),e.template&&(e._content=K(t),t=oi(t,e))),at(t)&&(U(nt("v-start",!0),t),t.appendChild(nt("v-end",!0))),t}function oi(t,e){var i=e.template,n=Xt(i,!0);if(n){var r=n.firstChild,s=r.tagName&&r.tagName.toLowerCase();return e.replace?(t===document.body,n.childNodes.length>1||1!==r.nodeType||"component"===s||gt(e,"components",s)||V(r,"is")||gt(e,"elementDirectives",s)||r.hasAttribute("v-for")||r.hasAttribute("v-if")?n:(e._replacerAttrs=ai(r),hi(t,r),r)):(t.appendChild(n),t)}}function ai(t){return 1===t.nodeType&&t.hasAttributes()?d(t.attributes):void 0}function hi(t,e){for(var i,n,r=t.attributes,s=r.length;s--;)i=r[s].name,n=r[s].value,e.hasAttribute(i)||Js.test(i)?"class"===i&&!N(n)&&(n=n.trim())&&n.split(/\s+/).forEach(function(t){X(e,t)}):e.setAttribute(i,n)}function li(t,e){if(e){for(var i,n,r=t._slotContents=Object.create(null),s=0,o=e.children.length;o>s;s++)i=e.children[s],(n=i.getAttribute("slot"))&&(r[n]||(r[n]=[])).push(i);for(n in r)r[n]=ci(r[n],e);if(e.hasChildNodes()){var a=e.childNodes;if(1===a.length&&3===a[0].nodeType&&!a[0].data.trim())return;r["default"]=ci(e.childNodes,e)}}}function ci(t,e){var i=document.createDocumentFragment();t=d(t);for(var n=0,r=t.length;r>n;n++){var s=t[n];!it(s)||s.hasAttribute("v-if")||s.hasAttribute("v-for")||(e.removeChild(s),s=Xt(s,!0)),i.appendChild(s)}return i}function ui(t){function e(){}function n(t,e){var i=new Ut(e,t,null,{lazy:!0});return function(){return i.dirty&&i.evaluate(),_t.target&&i.depend(),i.value}}Object.defineProperty(t.prototype,"$data",{get:function(){return this._data},set:function(t){t!==this._data&&this._setData(t)}}),t.prototype._initState=function(){this._initProps(),this._initMeta(),this._initMethods(),this._initData(),this._initComputed()},t.prototype._initProps=function(){var t=this.$options,e=t.el,i=t.props;e=t.el=L(e),this._propsUnlinkFn=e&&1===e.nodeType&&i?Ie(this,e,i,this._scope):null},t.prototype._initData=function(){var t=this.$options.data,e=this._data=t?t():{};g(e)||(e={});var n,r,s=this._props,o=Object.keys(e);for(n=o.length;n--;)r=o[n],s&&i(s,r)||this._proxy(r);$t(e,this)},t.prototype._setData=function(t){t=t||{};var e=this._data;this._data=t;var n,r,s;for(n=Object.keys(e),s=n.length;s--;)r=n[s],r in t||this._unproxy(r);for(n=Object.keys(t),s=n.length;s--;)r=n[s],i(this,r)||this._proxy(r);e.__ob__.removeVm(this),$t(t,this),this._digest()},t.prototype._proxy=function(t){if(!r(t)){var e=this;Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(i){e._data[t]=i}})}},t.prototype._unproxy=function(t){r(t)||delete this[t]},t.prototype._digest=function(){for(var t=0,e=this._watchers.length;e>t;t++)this._watchers[t].update(!0)},t.prototype._initComputed=function(){var t=this.$options.computed;if(t)for(var i in t){var r=t[i],s={enumerable:!0,configurable:!0};"function"==typeof r?(s.get=n(r,this),s.set=e):(s.get=r.get?r.cache!==!1?n(r.get,this):p(r.get,this):e,s.set=r.set?p(r.set,this):e),Object.defineProperty(this,i,s)}},t.prototype._initMethods=function(){var t=this.$options.methods;if(t)for(var e in t)this[e]=p(t[e],this)},t.prototype._initMeta=function(){var t=this.$options._meta;if(t)for(var e in t)kt(this,e,t[e])}}function fi(t){function e(t,e){for(var i,n,r,s=e.attributes,o=0,a=s.length;a>o;o++)i=s[o].name,Qs.test(i)&&(i=i.replace(Qs,""),n=s[o].value,Mt(n)&&(n+=".apply(this, $arguments)"),r=(t._scope||t._context).$eval(n,!0),r._fromParent=!0,t.$on(i.replace(Qs),r))}function i(t,e,i){if(i){var r,s,o,a;for(s in i)if(r=i[s],Di(r))for(o=0,a=r.length;a>o;o++)n(t,e,s,r[o]);else n(t,e,s,r)}}function n(t,e,i,r,s){var o=typeof r;if("function"===o)t[e](i,r,s);else if("string"===o){var a=t.$options.methods,h=a&&a[r];h&&t[e](i,h,s)}else r&&"object"===o&&n(t,e,i,r.handler,r)}function r(){this._isAttached||(this._isAttached=!0,this.$children.forEach(s))}function s(t){!t._isAttached&&H(t.$el)&&t._callHook("attached")}function o(){this._isAttached&&(this._isAttached=!1,this.$children.forEach(a))}function a(t){t._isAttached&&!H(t.$el)&&t._callHook("detached")}t.prototype._initEvents=function(){var t=this.$options;t._asComponent&&e(this,t.el),i(this,"$on",t.events),i(this,"$watch",t.watch)},t.prototype._initDOMHooks=function(){this.$on("hook:attached",r),this.$on("hook:detached",o)},t.prototype._callHook=function(t){this.$emit("pre-hook:"+t);var e=this.$options[t];if(e)for(var i=0,n=e.length;n>i;i++)e[i].call(this);this.$emit("hook:"+t)}}function pi(){}function di(t,e,i,n,r,s){this.vm=e,this.el=i,this.descriptor=t,this.name=t.name,this.expression=t.expression,this.arg=t.arg,this.modifiers=t.modifiers,this.filters=t.filters,this.literal=this.modifiers&&this.modifiers.literal,this._locked=!1,this._bound=!1,this._listeners=null,this._host=n,this._scope=r,this._frag=s}function vi(t){t.prototype._updateRef=function(t){var e=this.$options._ref;if(e){var i=(this._scope||this._context).$refs;t?i[e]===this&&(i[e]=null):i[e]=this}},t.prototype._compile=function(t){var e=this.$options,i=t;if(t=si(t,e),this._initElement(t),1!==t.nodeType||null===I(t,"v-pre")){var n=this._context&&this._context.$options,r=Me(t,e,n);li(this,e._content);var s,o=this.constructor;e._linkerCachable&&(s=o.linker,s||(s=o.linker=De(t,e)));var a=r(this,t,this._scope),h=s?s(this,t):De(t,e)(this,t);this._unlinkFn=function(){a(),h(!0)},e.replace&&J(i,t),this._isCompiled=!0,this._callHook("compiled")}},t.prototype._initElement=function(t){at(t)?(this._isFragment=!0,this.$el=this._fragmentStart=t.firstChild,this._fragmentEnd=t.lastChild,3===this._fragmentStart.nodeType&&(this._fragmentStart.data=this._fragmentEnd.data=""),this._fragment=t):this.$el=t,this.$el.__vue__=this,this._callHook("beforeCompile")},t.prototype._bindDir=function(t,e,i,n,r){this._directives.push(new di(t,this,e,i,n,r))},t.prototype._destroy=function(t,e){if(this._isBeingDestroyed)return void(e||this._cleanup());var i,n,r=this,s=function(){!i||n||e||r._cleanup()};t&&this.$el&&(n=!0,this.$remove(function(){
n=!1,s()})),this._callHook("beforeDestroy"),this._isBeingDestroyed=!0;var o,a=this.$parent;for(a&&!a._isBeingDestroyed&&(a.$children.$remove(this),this._updateRef(!0)),o=this.$children.length;o--;)this.$children[o].$destroy();for(this._propsUnlinkFn&&this._propsUnlinkFn(),this._unlinkFn&&this._unlinkFn(),o=this._watchers.length;o--;)this._watchers[o].teardown();this.$el&&(this.$el.__vue__=null),i=!0,s()},t.prototype._cleanup=function(){this._isDestroyed||(this._frag&&this._frag.children.$remove(this),this._data&&this._data.__ob__&&this._data.__ob__.removeVm(this),this.$el=this.$parent=this.$root=this.$children=this._watchers=this._context=this._scope=this._directives=null,this._isDestroyed=!0,this._callHook("destroyed"),this.$off())}}function mi(t){t.prototype._applyFilters=function(t,e,i,n){var r,s,o,a,h,l,c,u,f;for(l=0,c=i.length;c>l;l++)if(r=i[n?c-l-1:l],s=gt(this.$options,"filters",r.name,!0),s&&(s=n?s.write:s.read||s,"function"==typeof s)){if(o=n?[t,e]:[t],h=n?2:1,r.args)for(u=0,f=r.args.length;f>u;u++)a=r.args[u],o[u+h]=a.dynamic?this.$get(a.value):a.value;t=s.apply(this,o)}return t},t.prototype._resolveComponent=function(e,i){var n;if(n="function"==typeof e?e:gt(this.$options,"components",e,!0))if(n.options)i(n);else if(n.resolved)i(n.resolved);else if(n.requested)n.pendingCallbacks.push(i);else{n.requested=!0;var r=n.pendingCallbacks=[i];n.call(this,function(e){g(e)&&(e=t.extend(e)),n.resolved=e;for(var i=0,s=r.length;s>i;i++)r[i](e)},function(t){})}}}function gi(t){function i(t){return JSON.parse(JSON.stringify(t))}t.prototype.$get=function(t,e){var i=It(t);if(i){if(e){var n=this;return function(){n.$arguments=d(arguments);var t=i.get.call(n,n);return n.$arguments=null,t}}try{return i.get.call(this,this)}catch(r){}}},t.prototype.$set=function(t,e){var i=It(t,!0);i&&i.set&&i.set.call(this,this,e)},t.prototype.$delete=function(t){e(this._data,t)},t.prototype.$watch=function(t,e,i){var n,r=this;"string"==typeof t&&(n=A(t),t=n.expression);var s=new Ut(r,t,e,{deep:i&&i.deep,sync:i&&i.sync,filters:n&&n.filters,user:!i||i.user!==!1});return i&&i.immediate&&e.call(r,s.value),function(){s.teardown()}},t.prototype.$eval=function(t,e){if(Gs.test(t)){var i=A(t),n=this.$get(i.expression,e);return i.filters?this._applyFilters(n,null,i.filters):n}return this.$get(t,e)},t.prototype.$interpolate=function(t){var e=N(t),i=this;return e?1===e.length?i.$eval(e[0].value)+"":e.map(function(t){return t.tag?i.$eval(t.value):t.value}).join(""):t},t.prototype.$log=function(t){var e=t?jt(this._data,t):this._data;if(e&&(e=i(e)),!t){var n;for(n in this.$options.computed)e[n]=i(this[n]);if(this._props)for(n in this._props)e[n]=i(this[n])}console.log(e)}}function _i(t){function e(t,e,n,r,s,o){e=i(e);var a=!H(e),h=r===!1||a?s:o,l=!a&&!t._isAttached&&!H(t.$el);return t._isFragment?(st(t._fragmentStart,t._fragmentEnd,function(i){h(i,e,t)}),n&&n()):h(t.$el,e,t,n),l&&t._callHook("attached"),t}function i(t){return"string"==typeof t?document.querySelector(t):t}function n(t,e,i,n){e.appendChild(t),n&&n()}function r(t,e,i,n){B(t,e),n&&n()}function s(t,e,i){z(t),i&&i()}t.prototype.$nextTick=function(t){Yi(t,this)},t.prototype.$appendTo=function(t,i,r){return e(this,t,i,r,n,F)},t.prototype.$prependTo=function(t,e,n){return t=i(t),t.hasChildNodes()?this.$before(t.firstChild,e,n):this.$appendTo(t,e,n),this},t.prototype.$before=function(t,i,n){return e(this,t,i,n,r,D)},t.prototype.$after=function(t,e,n){return t=i(t),t.nextSibling?this.$before(t.nextSibling,e,n):this.$appendTo(t.parentNode,e,n),this},t.prototype.$remove=function(t,e){if(!this.$el.parentNode)return t&&t();var i=this._isAttached&&H(this.$el);i||(e=!1);var n=this,r=function(){i&&n._callHook("detached"),t&&t()};if(this._isFragment)ot(this._fragmentStart,this._fragmentEnd,this,this._fragment,r);else{var o=e===!1?s:P;o(this.$el,this,r)}return this}}function yi(t){function e(t,e,n){var r=t.$parent;if(r&&n&&!i.test(e))for(;r;)r._eventsCount[e]=(r._eventsCount[e]||0)+n,r=r.$parent}t.prototype.$on=function(t,i){return(this._events[t]||(this._events[t]=[])).push(i),e(this,t,1),this},t.prototype.$once=function(t,e){function i(){n.$off(t,i),e.apply(this,arguments)}var n=this;return i.fn=e,this.$on(t,i),this},t.prototype.$off=function(t,i){var n;if(!arguments.length){if(this.$parent)for(t in this._events)n=this._events[t],n&&e(this,t,-n.length);return this._events={},this}if(n=this._events[t],!n)return this;if(1===arguments.length)return e(this,t,-n.length),this._events[t]=null,this;for(var r,s=n.length;s--;)if(r=n[s],r===i||r.fn===i){e(this,t,-1),n.splice(s,1);break}return this},t.prototype.$emit=function(t){var e="string"==typeof t;t=e?t:t.name;var i=this._events[t],n=e||!i;if(i){i=i.length>1?d(i):i;var r=e&&i.some(function(t){return t._fromParent});r&&(n=!1);for(var s=d(arguments,1),o=0,a=i.length;a>o;o++){var h=i[o],l=h.apply(this,s);l!==!0||r&&!h._fromParent||(n=!0)}}return n},t.prototype.$broadcast=function(t){var e="string"==typeof t;if(t=e?t:t.name,this._eventsCount[t]){var i=this.$children,n=d(arguments);e&&(n[0]={name:t,source:this});for(var r=0,s=i.length;s>r;r++){var o=i[r],a=o.$emit.apply(o,n);a&&o.$broadcast.apply(o,n)}return this}},t.prototype.$dispatch=function(t){var e=this.$emit.apply(this,arguments);if(e){var i=this.$parent,n=d(arguments);for(n[0]={name:t,source:this};i;)e=i.$emit.apply(i,n),i=e?i.$parent:null;return this}};var i=/^hook:/}function bi(t){function e(){this._isAttached=!0,this._isReady=!0,this._callHook("ready")}t.prototype.$mount=function(t){return this._isCompiled?void 0:(t=L(t),t||(t=document.createElement("div")),this._compile(t),this._initDOMHooks(),H(this.$el)?(this._callHook("attached"),e.call(this)):this.$once("hook:attached",e),this)},t.prototype.$destroy=function(t,e){this._destroy(t,e)},t.prototype.$compile=function(t,e,i,n){return De(t,this.$options,!0)(this,t,e,i,n)}}function wi(t){this._init(t)}function Ci(t,e,i){return i=i?parseInt(i,10):0,e=o(e),"number"==typeof e?t.slice(i,i+e):t}function $i(t,e,i){if(t=Ks(t),null==e)return t;if("function"==typeof e)return t.filter(e);e=(""+e).toLowerCase();for(var n,r,s,o,a="in"===i?3:2,h=Array.prototype.concat.apply([],d(arguments,a)),l=[],c=0,u=t.length;u>c;c++)if(n=t[c],s=n&&n.$value||n,o=h.length){for(;o--;)if(r=h[o],"$key"===r&&xi(n.$key,e)||xi(jt(s,r),e)){l.push(n);break}}else xi(n,e)&&l.push(n);return l}function ki(t){function e(t,e,i){var r=n[i];return r&&("$key"!==r&&(m(t)&&"$value"in t&&(t=t.$value),m(e)&&"$value"in e&&(e=e.$value)),t=m(t)?jt(t,r):t,e=m(e)?jt(e,r):e),t===e?0:t>e?s:-s}var i=null,n=void 0;t=Ks(t);var r=d(arguments,1),s=r[r.length-1];"number"==typeof s?(s=0>s?-1:1,r=r.length>1?r.slice(0,-1):r):s=1;var o=r[0];return o?("function"==typeof o?i=function(t,e){return o(t,e)*s}:(n=Array.prototype.concat.apply([],r),i=function(t,r,s){return s=s||0,s>=n.length-1?e(t,r,s):e(t,r,s)||i(t,r,s+1)}),t.slice().sort(i)):t}function xi(t,e){var i;if(g(t)){var n=Object.keys(t);for(i=n.length;i--;)if(xi(t[n[i]],e))return!0}else if(Di(t)){for(i=t.length;i--;)if(xi(t[i],e))return!0}else if(null!=t)return t.toString().toLowerCase().indexOf(e)>-1}function Ai(i){function n(t){return new Function("return function "+f(t)+" (options) { this._init(options) }")()}i.options={directives:bs,elementDirectives:Ys,filters:eo,transitions:{},components:{},partials:{},replace:!0},i.util=In,i.config=An,i.set=t,i["delete"]=e,i.nextTick=Yi,i.compiler=qs,i.FragmentFactory=se,i.internalDirectives=Hs,i.parsers={path:ir,text:$n,template:Fr,directive:gn,expression:mr},i.cid=0;var r=1;i.extend=function(t){t=t||{};var e=this,i=0===e.cid;if(i&&t._Ctor)return t._Ctor;var s=t.name||e.options.name,o=n(s||"VueComponent");return o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.cid=r++,o.options=mt(e.options,t),o["super"]=e,o.extend=e.extend,An._assetTypes.forEach(function(t){o[t]=e[t]}),s&&(o.options.components[s]=o),i&&(t._Ctor=o),o},i.use=function(t){if(!t.installed){var e=d(arguments,1);return e.unshift(this),"function"==typeof t.install?t.install.apply(t,e):t.apply(null,e),t.installed=!0,this}},i.mixin=function(t){i.options=mt(i.options,t)},An._assetTypes.forEach(function(t){i[t]=function(e,n){return n?("component"===t&&g(n)&&(n.name||(n.name=e),n=i.extend(n)),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}),v(i.transition,Tn)}var Oi=Object.prototype.hasOwnProperty,Ti=/^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/,Ni=/-(\w)/g,ji=/([a-z\d])([A-Z])/g,Ei=/(?:^|[-_\/])(\w)/g,Si=Object.prototype.toString,Fi="[object Object]",Di=Array.isArray,Pi="__proto__"in{},Ri="undefined"!=typeof window&&"[object Object]"!==Object.prototype.toString.call(window),Li=Ri&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Hi=Ri&&window.navigator.userAgent.toLowerCase(),Ii=Hi&&Hi.indexOf("trident")>0,Mi=Hi&&Hi.indexOf("msie 9.0")>0,Vi=Hi&&Hi.indexOf("android")>0,Bi=Hi&&/(iphone|ipad|ipod|ios)/i.test(Hi),Wi=Bi&&Hi.match(/os ([\d_]+)/),zi=Wi&&Wi[1].split("_"),Ui=zi&&Number(zi[0])>=9&&Number(zi[1])>=3&&!window.indexedDB,Ji=void 0,qi=void 0,Qi=void 0,Gi=void 0;if(Ri&&!Mi){var Zi=void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend,Xi=void 0===window.onanimationend&&void 0!==window.onwebkitanimationend;Ji=Zi?"WebkitTransition":"transition",qi=Zi?"webkitTransitionEnd":"transitionend",Qi=Xi?"WebkitAnimation":"animation",Gi=Xi?"webkitAnimationEnd":"animationend"}var Yi=function(){function t(){n=!1;var t=i.slice(0);i=[];for(var e=0;e<t.length;e++)t[e]()}var e,i=[],n=!1;if("undefined"==typeof MutationObserver||Ui){var r=Ri?window:"undefined"!=typeof global?global:{};e=r.setImmediate||setTimeout}else{var s=1,o=new MutationObserver(t),a=document.createTextNode(s);o.observe(a,{characterData:!0}),e=function(){s=(s+1)%2,a.data=s}}return function(r,s){var o=s?function(){r.call(s)}:r;i.push(o),n||(n=!0,e(t,0))}}(),Ki=void 0;"undefined"!=typeof Set&&Set.toString().match(/native code/)?Ki=Set:(Ki=function(){this.set=Object.create(null)},Ki.prototype.has=function(t){return void 0!==this.set[t]},Ki.prototype.add=function(t){this.set[t]=1},Ki.prototype.clear=function(){this.set=Object.create(null)});var tn=$.prototype;tn.put=function(t,e){var i,n=this.get(t,!0);return n||(this.size===this.limit&&(i=this.shift()),n={key:t},this._keymap[t]=n,this.tail?(this.tail.newer=n,n.older=this.tail):this.head=n,this.tail=n,this.size++),n.value=e,i},tn.shift=function(){var t=this.head;return t&&(this.head=this.head.newer,this.head.older=void 0,t.newer=t.older=void 0,this._keymap[t.key]=void 0,this.size--),t},tn.get=function(t,e){var i=this._keymap[t];if(void 0!==i)return i===this.tail?e?i:i.value:(i.newer&&(i===this.head&&(this.head=i.newer),i.newer.older=i.older),i.older&&(i.older.newer=i.newer),i.newer=void 0,i.older=this.tail,this.tail&&(this.tail.newer=i),this.tail=i,e?i:i.value)};var en,nn,rn,sn,on,an,hn,ln,cn,un,fn,pn,dn=new $(1e3),vn=/[^\s'"]+|'[^']*'|"[^"]*"/g,mn=/^in$|^-?\d+/,gn=Object.freeze({parseDirective:A}),_n=/[-.*+?^${}()|[\]\/\\]/g,yn=void 0,bn=void 0,wn=void 0,Cn=/[^|]\|[^|]/,$n=Object.freeze({compileRegex:T,parseText:N,tokensToExp:j}),kn=["{{","}}"],xn=["{{{","}}}"],An=Object.defineProperties({debug:!1,silent:!1,async:!0,warnExpressionErrors:!0,devtools:!1,_delimitersChanged:!0,_assetTypes:["component","directive","elementDirective","filter","transition","partial"],_propBindingModes:{ONE_WAY:0,TWO_WAY:1,ONE_TIME:2},_maxUpdateCount:100},{delimiters:{get:function(){return kn},set:function(t){kn=t,T()},configurable:!0,enumerable:!0},unsafeDelimiters:{get:function(){return xn},set:function(t){xn=t,T()},configurable:!0,enumerable:!0}}),On=void 0,Tn=Object.freeze({appendWithTransition:F,beforeWithTransition:D,removeWithTransition:P,applyTransition:R}),Nn=/^v-ref:/,jn=/^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i,En=/^(slot|partial|component)$/i,Sn=An.optionMergeStrategies=Object.create(null);Sn.data=function(t,e,i){return i?t||e?function(){var n="function"==typeof e?e.call(i):e,r="function"==typeof t?t.call(i):void 0;return n?ut(n,r):r}:void 0:e?"function"!=typeof e?t:t?function(){return ut(e.call(this),t.call(this))}:e:t},Sn.el=function(t,e,i){if(i||!e||"function"==typeof e){var n=e||t;return i&&"function"==typeof n?n.call(i):n}},Sn.init=Sn.created=Sn.ready=Sn.attached=Sn.detached=Sn.beforeCompile=Sn.compiled=Sn.beforeDestroy=Sn.destroyed=Sn.activate=function(t,e){return e?t?t.concat(e):Di(e)?e:[e]:t},An._assetTypes.forEach(function(t){Sn[t+"s"]=ft}),Sn.watch=Sn.events=function(t,e){if(!e)return t;if(!t)return e;var i={};v(i,t);for(var n in e){var r=i[n],s=e[n];r&&!Di(r)&&(r=[r]),i[n]=r?r.concat(s):[s]}return i},Sn.props=Sn.methods=Sn.computed=function(t,e){if(!e)return t;if(!t)return e;var i=Object.create(null);return v(i,t),v(i,e),i};var Fn=function(t,e){return void 0===e?t:e},Dn=0;_t.target=null,_t.prototype.addSub=function(t){this.subs.push(t)},_t.prototype.removeSub=function(t){this.subs.$remove(t)},_t.prototype.depend=function(){_t.target.addDep(this)},_t.prototype.notify=function(){for(var t=d(this.subs),e=0,i=t.length;i>e;e++)t[e].update()};var Pn=Array.prototype,Rn=Object.create(Pn);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=Pn[t];_(Rn,t,function(){for(var i=arguments.length,n=new Array(i);i--;)n[i]=arguments[i];var r,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":r=n;break;case"unshift":r=n;break;case"splice":r=n.slice(2)}return r&&o.observeArray(r),o.dep.notify(),s})}),_(Pn,"$set",function(t,e){return t>=this.length&&(this.length=Number(t)+1),this.splice(t,1,e)[0]}),_(Pn,"$remove",function(t){if(this.length){var e=b(this,t);return e>-1?this.splice(e,1):void 0}});var Ln=Object.getOwnPropertyNames(Rn),Hn=!0;bt.prototype.walk=function(t){for(var e=Object.keys(t),i=0,n=e.length;n>i;i++)this.convert(e[i],t[e[i]])},bt.prototype.observeArray=function(t){for(var e=0,i=t.length;i>e;e++)$t(t[e])},bt.prototype.convert=function(t,e){kt(this.value,t,e)},bt.prototype.addVm=function(t){(this.vms||(this.vms=[])).push(t)},bt.prototype.removeVm=function(t){this.vms.$remove(t)};var In=Object.freeze({defineReactive:kt,set:t,del:e,hasOwn:i,isLiteral:n,isReserved:r,_toString:s,toNumber:o,toBoolean:a,stripQuotes:h,camelize:l,hyphenate:u,classify:f,bind:p,toArray:d,extend:v,isObject:m,isPlainObject:g,def:_,debounce:y,indexOf:b,cancellable:w,looseEqual:C,isArray:Di,hasProto:Pi,inBrowser:Ri,devtools:Li,isIE:Ii,isIE9:Mi,isAndroid:Vi,isIos:Bi,iosVersionMatch:Wi,iosVersion:zi,hasMutationObserverBug:Ui,get transitionProp(){return Ji},get transitionEndEvent(){return qi},get animationProp(){return Qi},get animationEndEvent(){return Gi},nextTick:Yi,get _Set(){return Ki},query:L,inDoc:H,getAttr:I,getBindAttr:M,hasBindAttr:V,before:B,after:W,remove:z,prepend:U,replace:J,on:q,off:Q,setClass:Z,addClass:X,removeClass:Y,extractContent:K,trimNode:tt,isTemplate:it,createAnchor:nt,findRef:rt,mapNodeRange:st,removeNodeRange:ot,isFragment:at,getOuterHTML:ht,mergeOptions:mt,resolveAsset:gt,checkComponentAttr:lt,commonTagRE:jn,reservedTagRE:En,warn:On}),Mn=0,Vn=new $(1e3),Bn=0,Wn=1,zn=2,Un=3,Jn=0,qn=1,Qn=2,Gn=3,Zn=4,Xn=5,Yn=6,Kn=7,tr=8,er=[];er[Jn]={ws:[Jn],ident:[Gn,Bn],"[":[Zn],eof:[Kn]},er[qn]={ws:[qn],".":[Qn],"[":[Zn],eof:[Kn]},er[Qn]={ws:[Qn],ident:[Gn,Bn]},er[Gn]={ident:[Gn,Bn],0:[Gn,Bn],number:[Gn,Bn],ws:[qn,Wn],".":[Qn,Wn],"[":[Zn,Wn],eof:[Kn,Wn]},er[Zn]={"'":[Xn,Bn],'"':[Yn,Bn],"[":[Zn,zn],"]":[qn,Un],eof:tr,"else":[Zn,Bn]},er[Xn]={"'":[Zn,Bn],eof:tr,"else":[Xn,Bn]},er[Yn]={'"':[Zn,Bn],eof:tr,"else":[Yn,Bn]};var ir=Object.freeze({parsePath:Nt,getPath:jt,setPath:Et}),nr=new $(1e3),rr="Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",sr=new RegExp("^("+rr.replace(/,/g,"\\b|")+"\\b)"),or="break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,protected,static,interface,private,public",ar=new RegExp("^("+or.replace(/,/g,"\\b|")+"\\b)"),hr=/\s/g,lr=/\n/g,cr=/[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g,ur=/"(\d+)"/g,fr=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,pr=/[^\w$\.](?:[A-Za-z_$][\w$]*)/g,dr=/^(?:true|false|null|undefined|Infinity|NaN)$/,vr=[],mr=Object.freeze({parseExpression:It,isSimplePath:Mt}),gr=[],_r=[],yr={},br={},wr=!1,Cr=0;Ut.prototype.get=function(){this.beforeGet();var t,e=this.scope||this.vm;try{t=this.getter.call(e,e)}catch(i){}return this.deep&&Jt(t),this.preProcess&&(t=this.preProcess(t)),this.filters&&(t=e._applyFilters(t,null,this.filters,!1)),this.postProcess&&(t=this.postProcess(t)),this.afterGet(),t},Ut.prototype.set=function(t){var e=this.scope||this.vm;this.filters&&(t=e._applyFilters(t,this.value,this.filters,!0));try{this.setter.call(e,e,t)}catch(i){}var n=e.$forContext;if(n&&n.alias===this.expression){if(n.filters)return;n._withLock(function(){e.$key?n.rawValue[e.$key]=t:n.rawValue.$set(e.$index,t)})}},Ut.prototype.beforeGet=function(){_t.target=this},Ut.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Ut.prototype.afterGet=function(){_t.target=null;for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var i=this.depIds;this.depIds=this.newDepIds,this.newDepIds=i,this.newDepIds.clear(),i=this.deps,this.deps=this.newDeps,this.newDeps=i,this.newDeps.length=0},Ut.prototype.update=function(t){this.lazy?this.dirty=!0:this.sync||!An.async?this.run():(this.shallow=this.queued?t?this.shallow:!1:!!t,this.queued=!0,zt(this))},Ut.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||(m(t)||this.deep)&&!this.shallow){var e=this.value;this.value=t;this.prevError;this.cb.call(this.vm,t,e)}this.queued=this.shallow=!1}},Ut.prototype.evaluate=function(){var t=_t.target;this.value=this.get(),this.dirty=!1,_t.target=t},Ut.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},Ut.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||this.vm._watchers.$remove(this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1,this.vm=this.cb=this.value=null}};var $r=new Ki,kr={bind:function(){this.attr=3===this.el.nodeType?"data":"textContent"},update:function(t){this.el[this.attr]=s(t)}},xr=new $(1e3),Ar=new $(1e3),Or={efault:[0,"",""],legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]};Or.td=Or.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],Or.option=Or.optgroup=[1,'<select multiple="multiple">',"</select>"],Or.thead=Or.tbody=Or.colgroup=Or.caption=Or.tfoot=[1,"<table>","</table>"],Or.g=Or.defs=Or.symbol=Or.use=Or.image=Or.text=Or.circle=Or.ellipse=Or.line=Or.path=Or.polygon=Or.polyline=Or.rect=[1,'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">',"</svg>"];var Tr=/<([\w:-]+)/,Nr=/&#?\w+?;/,jr=/<!--/,Er=function(){if(Ri){var t=document.createElement("div");return t.innerHTML="<template>1</template>",!t.cloneNode(!0).firstChild.innerHTML}return!1}(),Sr=function(){if(Ri){var t=document.createElement("textarea");return t.placeholder="t","t"===t.cloneNode(!0).value}return!1}(),Fr=Object.freeze({cloneNode:Zt,parseTemplate:Xt}),Dr={bind:function(){8===this.el.nodeType&&(this.nodes=[],this.anchor=nt("v-html"),J(this.el,this.anchor))},update:function(t){t=s(t),this.nodes?this.swap(t):this.el.innerHTML=t},swap:function(t){for(var e=this.nodes.length;e--;)z(this.nodes[e]);var i=Xt(t,!0,!0);this.nodes=d(i.childNodes),B(i,this.anchor)}};Yt.prototype.callHook=function(t){var e,i;for(e=0,i=this.childFrags.length;i>e;e++)this.childFrags[e].callHook(t);for(e=0,i=this.children.length;i>e;e++)t(this.children[e])},Yt.prototype.beforeRemove=function(){var t,e;for(t=0,e=this.childFrags.length;e>t;t++)this.childFrags[t].beforeRemove(!1);for(t=0,e=this.children.length;e>t;t++)this.children[t].$destroy(!1,!0);var i=this.unlink.dirs;for(t=0,e=i.length;e>t;t++)i[t]._watcher&&i[t]._watcher.teardown()},Yt.prototype.destroy=function(){this.parentFrag&&this.parentFrag.childFrags.$remove(this),this.node.__v_frag=null,this.unlink()};var Pr=new $(5e3);se.prototype.create=function(t,e,i){var n=Zt(this.template);return new Yt(this.linker,this.vm,n,t,e,i)};var Rr=700,Lr=800,Hr=850,Ir=1100,Mr=1500,Vr=1500,Br=1750,Wr=2100,zr=2200,Ur=2300,Jr=0,qr={priority:zr,terminal:!0,params:["track-by","stagger","enter-stagger","leave-stagger"],bind:function(){var t=this.expression.match(/(.*) (?:in|of) (.*)/);if(t){var e=t[1].match(/\((.*),(.*)\)/);e?(this.iterator=e[1].trim(),this.alias=e[2].trim()):this.alias=t[1].trim(),this.expression=t[2]}if(this.alias){this.id="__v-for__"+ ++Jr;var i=this.el.tagName;this.isOption=("OPTION"===i||"OPTGROUP"===i)&&"SELECT"===this.el.parentNode.tagName,this.start=nt("v-for-start"),this.end=nt("v-for-end"),J(this.el,this.end),B(this.start,this.end),this.cache=Object.create(null),this.factory=new se(this.vm,this.el)}},update:function(t){this.diff(t),this.updateRef(),this.updateModel()},diff:function(t){var e,n,r,s,o,a,h=t[0],l=this.fromObject=m(h)&&i(h,"$key")&&i(h,"$value"),c=this.params.trackBy,u=this.frags,f=this.frags=new Array(t.length),p=this.alias,d=this.iterator,v=this.start,g=this.end,_=H(v),y=!u;for(e=0,n=t.length;n>e;e++)h=t[e],s=l?h.$key:null,o=l?h.$value:h,a=!m(o),r=!y&&this.getCachedFrag(o,e,s),r?(r.reused=!0,r.scope.$index=e,s&&(r.scope.$key=s),d&&(r.scope[d]=null!==s?s:e),(c||l||a)&&yt(function(){r.scope[p]=o})):(r=this.create(o,p,e,s),r.fresh=!y),f[e]=r,y&&r.before(g);if(!y){var b=0,w=u.length-f.length;for(this.vm._vForRemoving=!0,e=0,n=u.length;n>e;e++)r=u[e],r.reused||(this.deleteCachedFrag(r),this.remove(r,b++,w,_));this.vm._vForRemoving=!1,b&&(this.vm._watchers=this.vm._watchers.filter(function(t){return t.active}));var C,$,k,x=0;for(e=0,n=f.length;n>e;e++)r=f[e],C=f[e-1],$=C?C.staggerCb?C.staggerAnchor:C.end||C.node:v,r.reused&&!r.staggerCb?(k=oe(r,v,this.id),k===C||k&&oe(k,v,this.id)===C||this.move(r,$)):this.insert(r,x++,$,_),r.reused=r.fresh=!1}},create:function(t,e,i,n){var r=this._host,s=this._scope||this.vm,o=Object.create(s);o.$refs=Object.create(s.$refs),o.$els=Object.create(s.$els),o.$parent=s,o.$forContext=this,yt(function(){kt(o,e,t)}),kt(o,"$index",i),n?kt(o,"$key",n):o.$key&&_(o,"$key",null),this.iterator&&kt(o,this.iterator,null!==n?n:i);var a=this.factory.create(r,o,this._frag);return a.forId=this.id,this.cacheFrag(t,a,i,n),a},updateRef:function(){var t=this.descriptor.ref;if(t){var e,i=(this._scope||this.vm).$refs;this.fromObject?(e={},this.frags.forEach(function(t){e[t.scope.$key]=ae(t)})):e=this.frags.map(ae),i[t]=e}},updateModel:function(){if(this.isOption){var t=this.start.parentNode,e=t&&t.__v_model;e&&e.forceUpdate()}},insert:function(t,e,i,n){t.staggerCb&&(t.staggerCb.cancel(),t.staggerCb=null);var r=this.getStagger(t,e,null,"enter");if(n&&r){var s=t.staggerAnchor;s||(s=t.staggerAnchor=nt("stagger-anchor"),s.__v_frag=t),W(s,i);var o=t.staggerCb=w(function(){t.staggerCb=null,t.before(s),z(s)});setTimeout(o,r)}else{var a=i.nextSibling;a||(W(this.end,i),a=this.end),t.before(a)}},remove:function(t,e,i,n){if(t.staggerCb)return t.staggerCb.cancel(),void(t.staggerCb=null);var r=this.getStagger(t,e,i,"leave");if(n&&r){var s=t.staggerCb=w(function(){t.staggerCb=null,t.remove()});setTimeout(s,r)}else t.remove()},move:function(t,e){e.nextSibling||this.end.parentNode.appendChild(this.end),t.before(e.nextSibling,!1)},cacheFrag:function(t,e,n,r){var s,o=this.params.trackBy,a=this.cache,h=!m(t);r||o||h?(s=le(n,r,t,o),a[s]||(a[s]=e)):(s=this.id,i(t,s)?null===t[s]&&(t[s]=e):Object.isExtensible(t)&&_(t,s,e)),e.raw=t},getCachedFrag:function(t,e,i){var n,r=this.params.trackBy,s=!m(t);if(i||r||s){var o=le(e,i,t,r);n=this.cache[o]}else n=t[this.id];return n&&(n.reused||n.fresh),n},deleteCachedFrag:function(t){var e=t.raw,n=this.params.trackBy,r=t.scope,s=r.$index,o=i(r,"$key")&&r.$key,a=!m(e);if(n||o||a){var h=le(s,o,e,n);this.cache[h]=null}else e[this.id]=null,t.raw=null},getStagger:function(t,e,i,n){n+="Stagger";var r=t.node.__v_trans,s=r&&r.hooks,o=s&&(s[n]||s.stagger);return o?o.call(t,e,i):e*parseInt(this.params[n]||this.params.stagger,10)},_preProcess:function(t){return this.rawValue=t,t},_postProcess:function(t){if(Di(t))return t;if(g(t)){for(var e,i=Object.keys(t),n=i.length,r=new Array(n);n--;)e=i[n],r[n]={$key:e,$value:t[e]};return r}return"number"!=typeof t||isNaN(t)||(t=he(t)),t||[]},unbind:function(){if(this.descriptor.ref&&((this._scope||this.vm).$refs[this.descriptor.ref]=null),this.frags)for(var t,e=this.frags.length;e--;)t=this.frags[e],this.deleteCachedFrag(t),t.destroy()}},Qr={priority:Wr,terminal:!0,bind:function(){var t=this.el;if(t.__vue__)this.invalid=!0;else{var e=t.nextElementSibling;e&&null!==I(e,"v-else")&&(z(e),this.elseEl=e),this.anchor=nt("v-if"),J(t,this.anchor)}},update:function(t){this.invalid||(t?this.frag||this.insert():this.remove())},insert:function(){this.elseFrag&&(this.elseFrag.remove(),this.elseFrag=null),this.factory||(this.factory=new se(this.vm,this.el)),this.frag=this.factory.create(this._host,this._scope,this._frag),this.frag.before(this.anchor)},remove:function(){this.frag&&(this.frag.remove(),this.frag=null),this.elseEl&&!this.elseFrag&&(this.elseFactory||(this.elseFactory=new se(this.elseEl._context||this.vm,this.elseEl)),this.elseFrag=this.elseFactory.create(this._host,this._scope,this._frag),this.elseFrag.before(this.anchor))},unbind:function(){this.frag&&this.frag.destroy(),this.elseFrag&&this.elseFrag.destroy()}},Gr={bind:function(){var t=this.el.nextElementSibling;t&&null!==I(t,"v-else")&&(this.elseEl=t)},update:function(t){this.apply(this.el,t),this.elseEl&&this.apply(this.elseEl,!t)},apply:function(t,e){function i(){t.style.display=e?"":"none"}H(t)?R(t,e?1:-1,i,this.vm):i()}},Zr={bind:function(){var t=this,e=this.el,i="range"===e.type,n=this.params.lazy,r=this.params.number,s=this.params.debounce,a=!1;if(Vi||i||(this.on("compositionstart",function(){a=!0}),this.on("compositionend",function(){a=!1,n||t.listener()})),this.focused=!1,i||n||(this.on("focus",function(){t.focused=!0}),this.on("blur",function(){t.focused=!1,t._frag&&!t._frag.inserted||t.rawListener()})),this.listener=this.rawListener=function(){if(!a&&t._bound){var n=r||i?o(e.value):e.value;t.set(n),Yi(function(){t._bound&&!t.focused&&t.update(t._watcher.value)})}},s&&(this.listener=y(this.listener,s)),this.hasjQuery="function"==typeof jQuery,this.hasjQuery){var h=jQuery.fn.on?"on":"bind";jQuery(e)[h]("change",this.rawListener),n||jQuery(e)[h]("input",this.listener)}else this.on("change",this.rawListener),n||this.on("input",this.listener);!n&&Mi&&(this.on("cut",function(){Yi(t.listener)}),this.on("keyup",function(e){46!==e.keyCode&&8!==e.keyCode||t.listener()})),(e.hasAttribute("value")||"TEXTAREA"===e.tagName&&e.value.trim())&&(this.afterBind=this.listener)},update:function(t){t=s(t),t!==this.el.value&&(this.el.value=t)},unbind:function(){var t=this.el;if(this.hasjQuery){var e=jQuery.fn.off?"off":"unbind";jQuery(t)[e]("change",this.listener),jQuery(t)[e]("input",this.listener)}}},Xr={bind:function(){var t=this,e=this.el;this.getValue=function(){if(e.hasOwnProperty("_value"))return e._value;var i=e.value;return t.params.number&&(i=o(i)),i},this.listener=function(){t.set(t.getValue())},this.on("change",this.listener),e.hasAttribute("checked")&&(this.afterBind=this.listener)},update:function(t){this.el.checked=C(t,this.getValue())}},Yr={bind:function(){var t=this,e=this,i=this.el;this.forceUpdate=function(){e._watcher&&e.update(e._watcher.get())};var n=this.multiple=i.hasAttribute("multiple");this.listener=function(){var t=ce(i,n);t=e.params.number?Di(t)?t.map(o):o(t):t,e.set(t)},this.on("change",this.listener);var r=ce(i,n,!0);(n&&r.length||!n&&null!==r)&&(this.afterBind=this.listener),this.vm.$on("hook:attached",function(){Yi(t.forceUpdate)}),H(i)||Yi(this.forceUpdate)},update:function(t){var e=this.el;e.selectedIndex=-1;for(var i,n,r=this.multiple&&Di(t),s=e.options,o=s.length;o--;)i=s[o],n=i.hasOwnProperty("_value")?i._value:i.value,i.selected=r?ue(t,n)>-1:C(t,n)},unbind:function(){this.vm.$off("hook:attached",this.forceUpdate)}},Kr={bind:function(){function t(){var t=i.checked;return t&&i.hasOwnProperty("_trueValue")?i._trueValue:!t&&i.hasOwnProperty("_falseValue")?i._falseValue:t}var e=this,i=this.el;this.getValue=function(){return i.hasOwnProperty("_value")?i._value:e.params.number?o(i.value):i.value},this.listener=function(){var n=e._watcher.value;if(Di(n)){var r=e.getValue();i.checked?b(n,r)<0&&n.push(r):n.$remove(r)}else e.set(t())},this.on("change",this.listener),i.hasAttribute("checked")&&(this.afterBind=this.listener)},update:function(t){var e=this.el;Di(t)?e.checked=b(t,this.getValue())>-1:e.hasOwnProperty("_trueValue")?e.checked=C(t,e._trueValue):e.checked=!!t}},ts={text:Zr,radio:Xr,select:Yr,checkbox:Kr},es={priority:Lr,twoWay:!0,handlers:ts,params:["lazy","number","debounce"],bind:function(){this.checkFilters(),this.hasRead&&!this.hasWrite;var t,e=this.el,i=e.tagName;if("INPUT"===i)t=ts[e.type]||ts.text;else if("SELECT"===i)t=ts.select;else{if("TEXTAREA"!==i)return;t=ts.text}e.__v_model=this,t.bind.call(this),this.update=t.update,this._unbind=t.unbind},checkFilters:function(){var t=this.filters;if(t)for(var e=t.length;e--;){var i=gt(this.vm.$options,"filters",t[e].name);("function"==typeof i||i.read)&&(this.hasRead=!0),i.write&&(this.hasWrite=!0)}},unbind:function(){this.el.__v_model=null,this._unbind&&this._unbind()}},is={esc:27,tab:9,enter:13,space:32,"delete":[8,46],up:38,left:37,right:39,down:40},ns={priority:Rr,acceptStatement:!0,keyCodes:is,bind:function(){if("IFRAME"===this.el.tagName&&"load"!==this.arg){var t=this;this.iframeBind=function(){q(t.el.contentWindow,t.arg,t.handler,t.modifiers.capture)},this.on("load",this.iframeBind)}},update:function(t){if(this.descriptor.raw||(t=function(){}),"function"==typeof t){this.modifiers.stop&&(t=pe(t)),this.modifiers.prevent&&(t=de(t)),this.modifiers.self&&(t=ve(t));var e=Object.keys(this.modifiers).filter(function(t){return"stop"!==t&&"prevent"!==t&&"self"!==t&&"capture"!==t});e.length&&(t=fe(t,e)),this.reset(),this.handler=t,this.iframeBind?this.iframeBind():q(this.el,this.arg,this.handler,this.modifiers.capture)}},reset:function(){var t=this.iframeBind?this.el.contentWindow:this.el;this.handler&&Q(t,this.arg,this.handler)},unbind:function(){this.reset()}},rs=["-webkit-","-moz-","-ms-"],ss=["Webkit","Moz","ms"],os=/!important;?$/,as=Object.create(null),hs=null,ls={deep:!0,update:function(t){"string"==typeof t?this.el.style.cssText=t:Di(t)?this.handleObject(t.reduce(v,{})):this.handleObject(t||{})},handleObject:function(t){var e,i,n=this.cache||(this.cache={});for(e in n)e in t||(this.handleSingle(e,null),delete n[e]);for(e in t)i=t[e],i!==n[e]&&(n[e]=i,this.handleSingle(e,i))},handleSingle:function(t,e){if(t=me(t))if(null!=e&&(e+=""),e){var i=os.test(e)?"important":"";i?(e=e.replace(os,"").trim(),this.el.style.setProperty(t.kebab,e,i)):this.el.style[t.camel]=e}else this.el.style[t.camel]=""}},cs="http://www.w3.org/1999/xlink",us=/^xlink:/,fs=/^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/,ps=/^(?:value|checked|selected|muted)$/,ds=/^(?:draggable|contenteditable|spellcheck)$/,vs={value:"_value","true-value":"_trueValue","false-value":"_falseValue"},ms={priority:Hr,bind:function(){var t=this.arg,e=this.el.tagName;t||(this.deep=!0);var i=this.descriptor,n=i.interp;n&&(i.hasOneTime&&(this.expression=j(n,this._scope||this.vm)),(fs.test(t)||"name"===t&&("PARTIAL"===e||"SLOT"===e))&&(this.el.removeAttribute(t),this.invalid=!0))},update:function(t){
if(!this.invalid){var e=this.arg;this.arg?this.handleSingle(e,t):this.handleObject(t||{})}},handleObject:ls.handleObject,handleSingle:function(t,e){var i=this.el,n=this.descriptor.interp;if(this.modifiers.camel&&(t=l(t)),!n&&ps.test(t)&&t in i){var r="value"===t&&null==e?"":e;i[t]!==r&&(i[t]=r)}var s=vs[t];if(!n&&s){i[s]=e;var o=i.__v_model;o&&o.listener()}return"value"===t&&"TEXTAREA"===i.tagName?void i.removeAttribute(t):void(ds.test(t)?i.setAttribute(t,e?"true":"false"):null!=e&&e!==!1?"class"===t?(i.__v_trans&&(e+=" "+i.__v_trans.id+"-transition"),Z(i,e)):us.test(t)?i.setAttributeNS(cs,t,e===!0?"":e):i.setAttribute(t,e===!0?"":e):i.removeAttribute(t))}},gs={priority:Mr,bind:function(){if(this.arg){var t=this.id=l(this.arg),e=(this._scope||this.vm).$els;i(e,t)?e[t]=this.el:kt(e,t,this.el)}},unbind:function(){var t=(this._scope||this.vm).$els;t[this.id]===this.el&&(t[this.id]=null)}},_s={bind:function(){}},ys={bind:function(){var t=this.el;this.vm.$once("pre-hook:compiled",function(){t.removeAttribute("v-cloak")})}},bs={text:kr,html:Dr,"for":qr,"if":Qr,show:Gr,model:es,on:ns,bind:ms,el:gs,ref:_s,cloak:ys},ws={deep:!0,update:function(t){t?"string"==typeof t?this.setClass(t.trim().split(/\s+/)):this.setClass(_e(t)):this.cleanup()},setClass:function(t){this.cleanup(t);for(var e=0,i=t.length;i>e;e++){var n=t[e];n&&ye(this.el,n,X)}this.prevKeys=t},cleanup:function(t){var e=this.prevKeys;if(e)for(var i=e.length;i--;){var n=e[i];(!t||t.indexOf(n)<0)&&ye(this.el,n,Y)}}},Cs={priority:Vr,params:["keep-alive","transition-mode","inline-template"],bind:function(){this.el.__vue__||(this.keepAlive=this.params.keepAlive,this.keepAlive&&(this.cache={}),this.params.inlineTemplate&&(this.inlineTemplate=K(this.el,!0)),this.pendingComponentCb=this.Component=null,this.pendingRemovals=0,this.pendingRemovalCb=null,this.anchor=nt("v-component"),J(this.el,this.anchor),this.el.removeAttribute("is"),this.el.removeAttribute(":is"),this.descriptor.ref&&this.el.removeAttribute("v-ref:"+u(this.descriptor.ref)),this.literal&&this.setComponent(this.expression))},update:function(t){this.literal||this.setComponent(t)},setComponent:function(t,e){if(this.invalidatePending(),t){var i=this;this.resolveComponent(t,function(){i.mountComponent(e)})}else this.unbuild(!0),this.remove(this.childVM,e),this.childVM=null},resolveComponent:function(t,e){var i=this;this.pendingComponentCb=w(function(n){i.ComponentName=n.options.name||("string"==typeof t?t:null),i.Component=n,e()}),this.vm._resolveComponent(t,this.pendingComponentCb)},mountComponent:function(t){this.unbuild(!0);var e=this,i=this.Component.options.activate,n=this.getCached(),r=this.build();i&&!n?(this.waitingFor=r,be(i,r,function(){e.waitingFor===r&&(e.waitingFor=null,e.transition(r,t))})):(n&&r._updateRef(),this.transition(r,t))},invalidatePending:function(){this.pendingComponentCb&&(this.pendingComponentCb.cancel(),this.pendingComponentCb=null)},build:function(t){var e=this.getCached();if(e)return e;if(this.Component){var i={name:this.ComponentName,el:Zt(this.el),template:this.inlineTemplate,parent:this._host||this.vm,_linkerCachable:!this.inlineTemplate,_ref:this.descriptor.ref,_asComponent:!0,_isRouterView:this._isRouterView,_context:this.vm,_scope:this._scope,_frag:this._frag};t&&v(i,t);var n=new this.Component(i);return this.keepAlive&&(this.cache[this.Component.cid]=n),n}},getCached:function(){return this.keepAlive&&this.cache[this.Component.cid]},unbuild:function(t){this.waitingFor&&(this.keepAlive||this.waitingFor.$destroy(),this.waitingFor=null);var e=this.childVM;return!e||this.keepAlive?void(e&&(e._inactive=!0,e._updateRef(!0))):void e.$destroy(!1,t)},remove:function(t,e){var i=this.keepAlive;if(t){this.pendingRemovals++,this.pendingRemovalCb=e;var n=this;t.$remove(function(){n.pendingRemovals--,i||t._cleanup(),!n.pendingRemovals&&n.pendingRemovalCb&&(n.pendingRemovalCb(),n.pendingRemovalCb=null)})}else e&&e()},transition:function(t,e){var i=this,n=this.childVM;switch(n&&(n._inactive=!0),t._inactive=!1,this.childVM=t,i.params.transitionMode){case"in-out":t.$before(i.anchor,function(){i.remove(n,e)});break;case"out-in":i.remove(n,function(){t.$before(i.anchor,e)});break;default:i.remove(n),t.$before(i.anchor,e)}},unbind:function(){if(this.invalidatePending(),this.unbuild(),this.cache){for(var t in this.cache)this.cache[t].$destroy();this.cache=null}}},$s=An._propBindingModes,ks={},xs=/^[$_a-zA-Z]+[\w$]*$/,As=An._propBindingModes,Os={bind:function(){var t=this.vm,e=t._context,i=this.descriptor.prop,n=i.path,r=i.parentPath,s=i.mode===As.TWO_WAY,o=this.parentWatcher=new Ut(e,r,function(e){xe(t,i,e)},{twoWay:s,filters:i.filters,scope:this._scope});if(ke(t,i,o.value),s){var a=this;t.$once("pre-hook:created",function(){a.childWatcher=new Ut(t,n,function(t){o.set(t)},{sync:!0})})}},unbind:function(){this.parentWatcher.teardown(),this.childWatcher&&this.childWatcher.teardown()}},Ts=[],Ns=!1,js="transition",Es="animation",Ss=Ji+"Duration",Fs=Qi+"Duration",Ds=Ri&&window.requestAnimationFrame,Ps=Ds?function(t){Ds(function(){Ds(t)})}:function(t){setTimeout(t,50)},Rs=Se.prototype;Rs.enter=function(t,e){this.cancelPending(),this.callHook("beforeEnter"),this.cb=e,X(this.el,this.enterClass),t(),this.entered=!1,this.callHookWithCb("enter"),this.entered||(this.cancel=this.hooks&&this.hooks.enterCancelled,je(this.enterNextTick))},Rs.enterNextTick=function(){var t=this;this.justEntered=!0,Ps(function(){t.justEntered=!1});var e=this.enterDone,i=this.getCssTransitionType(this.enterClass);this.pendingJsCb?i===js&&Y(this.el,this.enterClass):i===js?(Y(this.el,this.enterClass),this.setupCssCb(qi,e)):i===Es?this.setupCssCb(Gi,e):e()},Rs.enterDone=function(){this.entered=!0,this.cancel=this.pendingJsCb=null,Y(this.el,this.enterClass),this.callHook("afterEnter"),this.cb&&this.cb()},Rs.leave=function(t,e){this.cancelPending(),this.callHook("beforeLeave"),this.op=t,this.cb=e,X(this.el,this.leaveClass),this.left=!1,this.callHookWithCb("leave"),this.left||(this.cancel=this.hooks&&this.hooks.leaveCancelled,this.op&&!this.pendingJsCb&&(this.justEntered?this.leaveDone():je(this.leaveNextTick)))},Rs.leaveNextTick=function(){var t=this.getCssTransitionType(this.leaveClass);if(t){var e=t===js?qi:Gi;this.setupCssCb(e,this.leaveDone)}else this.leaveDone()},Rs.leaveDone=function(){this.left=!0,this.cancel=this.pendingJsCb=null,this.op(),Y(this.el,this.leaveClass),this.callHook("afterLeave"),this.cb&&this.cb(),this.op=null},Rs.cancelPending=function(){this.op=this.cb=null;var t=!1;this.pendingCssCb&&(t=!0,Q(this.el,this.pendingCssEvent,this.pendingCssCb),this.pendingCssEvent=this.pendingCssCb=null),this.pendingJsCb&&(t=!0,this.pendingJsCb.cancel(),this.pendingJsCb=null),t&&(Y(this.el,this.enterClass),Y(this.el,this.leaveClass)),this.cancel&&(this.cancel.call(this.vm,this.el),this.cancel=null)},Rs.callHook=function(t){this.hooks&&this.hooks[t]&&this.hooks[t].call(this.vm,this.el)},Rs.callHookWithCb=function(t){var e=this.hooks&&this.hooks[t];e&&(e.length>1&&(this.pendingJsCb=w(this[t+"Done"])),e.call(this.vm,this.el,this.pendingJsCb))},Rs.getCssTransitionType=function(t){if(!(!qi||document.hidden||this.hooks&&this.hooks.css===!1||Fe(this.el))){var e=this.type||this.typeCache[t];if(e)return e;var i=this.el.style,n=window.getComputedStyle(this.el),r=i[Ss]||n[Ss];if(r&&"0s"!==r)e=js;else{var s=i[Fs]||n[Fs];s&&"0s"!==s&&(e=Es)}return e&&(this.typeCache[t]=e),e}},Rs.setupCssCb=function(t,e){this.pendingCssEvent=t;var i=this,n=this.el,r=this.pendingCssCb=function(s){s.target===n&&(Q(n,t,r),i.pendingCssEvent=i.pendingCssCb=null,!i.pendingJsCb&&e&&e())};q(n,t,r)};var Ls={priority:Ir,update:function(t,e){var i=this.el,n=gt(this.vm.$options,"transitions",t);t=t||"v",e=e||"v",i.__v_trans=new Se(i,t,n,this.vm),Y(i,e+"-transition"),X(i,t+"-transition")}},Hs={style:ls,"class":ws,component:Cs,prop:Os,transition:Ls},Is=/^v-bind:|^:/,Ms=/^v-on:|^@/,Vs=/^v-([^:]+)(?:$|:(.*)$)/,Bs=/\.[^\.]+/g,Ws=/^(v-bind:|:)?transition$/,zs=1e3,Us=2e3;Ye.terminal=!0;var Js=/[^\w\-:\.]/,qs=Object.freeze({compile:De,compileAndLinkProps:Ie,compileRoot:Me,transclude:si,resolveSlots:li}),Qs=/^v-on:|^@/;di.prototype._bind=function(){var t=this.name,e=this.descriptor;if(("cloak"!==t||this.vm._isCompiled)&&this.el&&this.el.removeAttribute){var i=e.attr||"v-"+t;this.el.removeAttribute(i)}var n=e.def;if("function"==typeof n?this.update=n:v(this,n),this._setupParams(),this.bind&&this.bind(),this._bound=!0,this.literal)this.update&&this.update(e.raw);else if((this.expression||this.modifiers)&&(this.update||this.twoWay)&&!this._checkStatement()){var r=this;this.update?this._update=function(t,e){r._locked||r.update(t,e)}:this._update=pi;var s=this._preProcess?p(this._preProcess,this):null,o=this._postProcess?p(this._postProcess,this):null,a=this._watcher=new Ut(this.vm,this.expression,this._update,{filters:this.filters,twoWay:this.twoWay,deep:this.deep,preProcess:s,postProcess:o,scope:this._scope});this.afterBind?this.afterBind():this.update&&this.update(a.value)}},di.prototype._setupParams=function(){if(this.params){var t=this.params;this.params=Object.create(null);for(var e,i,n,r=t.length;r--;)e=u(t[r]),n=l(e),i=M(this.el,e),null!=i?this._setupParamWatcher(n,i):(i=I(this.el,e),null!=i&&(this.params[n]=""===i?!0:i))}},di.prototype._setupParamWatcher=function(t,e){var i=this,n=!1,r=(this._scope||this.vm).$watch(e,function(e,r){if(i.params[t]=e,n){var s=i.paramWatchers&&i.paramWatchers[t];s&&s.call(i,e,r)}else n=!0},{immediate:!0,user:!1});(this._paramUnwatchFns||(this._paramUnwatchFns=[])).push(r)},di.prototype._checkStatement=function(){var t=this.expression;if(t&&this.acceptStatement&&!Mt(t)){var e=It(t).get,i=this._scope||this.vm,n=function(t){i.$event=t,e.call(i,i),i.$event=null};return this.filters&&(n=i._applyFilters(n,null,this.filters)),this.update(n),!0}},di.prototype.set=function(t){this.twoWay&&this._withLock(function(){this._watcher.set(t)})},di.prototype._withLock=function(t){var e=this;e._locked=!0,t.call(e),Yi(function(){e._locked=!1})},di.prototype.on=function(t,e,i){q(this.el,t,e,i),(this._listeners||(this._listeners=[])).push([t,e])},di.prototype._teardown=function(){if(this._bound){this._bound=!1,this.unbind&&this.unbind(),this._watcher&&this._watcher.teardown();var t,e=this._listeners;if(e)for(t=e.length;t--;)Q(this.el,e[t][0],e[t][1]);var i=this._paramUnwatchFns;if(i)for(t=i.length;t--;)i[t]();this.vm=this.el=this._watcher=this._listeners=null}};var Gs=/[^|]\|[^|]/;xt(wi),ui(wi),fi(wi),vi(wi),mi(wi),gi(wi),_i(wi),yi(wi),bi(wi);var Zs={priority:Ur,params:["name"],bind:function(){var t=this.params.name||"default",e=this.vm._slotContents&&this.vm._slotContents[t];e&&e.hasChildNodes()?this.compile(e.cloneNode(!0),this.vm._context,this.vm):this.fallback()},compile:function(t,e,i){if(t&&e){if(this.el.hasChildNodes()&&1===t.childNodes.length&&1===t.childNodes[0].nodeType&&t.childNodes[0].hasAttribute("v-if")){var n=document.createElement("template");n.setAttribute("v-else",""),n.innerHTML=this.el.innerHTML,n._context=this.vm,t.appendChild(n)}var r=i?i._scope:this._scope;this.unlink=e.$compile(t,i,r,this._frag)}t?J(this.el,t):z(this.el)},fallback:function(){this.compile(K(this.el,!0),this.vm)},unbind:function(){this.unlink&&this.unlink()}},Xs={priority:Br,params:["name"],paramWatchers:{name:function(t){Qr.remove.call(this),t&&this.insert(t)}},bind:function(){this.anchor=nt("v-partial"),J(this.el,this.anchor),this.insert(this.params.name)},insert:function(t){var e=gt(this.vm.$options,"partials",t,!0);e&&(this.factory=new se(this.vm,e),Qr.insert.call(this))},unbind:function(){this.frag&&this.frag.destroy()}},Ys={slot:Zs,partial:Xs},Ks=qr._postProcess,to=/(\d{3})(?=\d)/g,eo={orderBy:ki,filterBy:$i,limitBy:Ci,json:{read:function(t,e){return"string"==typeof t?t:JSON.stringify(t,null,arguments.length>1?e:2)},write:function(t){try{return JSON.parse(t)}catch(e){return t}}},capitalize:function(t){return t||0===t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""},uppercase:function(t){return t||0===t?t.toString().toUpperCase():""},lowercase:function(t){return t||0===t?t.toString().toLowerCase():""},currency:function(t,e,i){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=null!=e?e:"$",i=null!=i?i:2;var n=Math.abs(t).toFixed(i),r=i?n.slice(0,-1-i):n,s=r.length%3,o=s>0?r.slice(0,s)+(r.length>3?",":""):"",a=i?n.slice(-1-i):"",h=0>t?"-":"";return h+e+o+r.slice(s).replace(to,"$1,")+a},pluralize:function(t){var e=d(arguments,1),i=e.length;if(i>1){var n=t%10-1;return n in e?e[n]:e[i-1]}return e[0]+(1===t?"":"s")},debounce:function(t,e){return t?(e||(e=300),y(t,e)):void 0}};return Ai(wi),wi.version="1.0.26",setTimeout(function(){An.devtools&&Li&&Li.emit("init",wi)},0),wi});
//# sourceMappingURL=vue.min.js.map
/*!
 * vue-resource v0.9.3
 * https://github.com/vuejs/vue-resource
 * Released under the MIT License.
 */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.VueResource=n()}(this,function(){"use strict";function t(t){this.state=Z,this.value=void 0,this.deferred=[];var n=this;try{t(function(t){n.resolve(t)},function(t){n.reject(t)})}catch(e){n.reject(e)}}function n(t,n){t instanceof nt?this.promise=t:this.promise=new nt(t.bind(n)),this.context=n}function e(t){rt=t.util,ot=t.config.debug||!t.config.silent}function o(t){"undefined"!=typeof console&&ot&&console.warn("[VueResource warn]: "+t)}function r(t){"undefined"!=typeof console&&console.error(t)}function i(t,n){return rt.nextTick(t,n)}function u(t){return t.replace(/^\s*|\s*$/g,"")}function s(t){return"string"==typeof t}function c(t){return t===!0||t===!1}function a(t){return"function"==typeof t}function f(t){return null!==t&&"object"==typeof t}function h(t){return f(t)&&Object.getPrototypeOf(t)==Object.prototype}function p(t){return"undefined"!=typeof FormData&&t instanceof FormData}function l(t,e,o){var r=n.resolve(t);return arguments.length<2?r:r.then(e,o)}function d(t,n,e){return e=e||{},a(e)&&(e=e.call(n)),v(t.bind({$vm:n,$options:e}),t,{$options:e})}function m(t,n){var e,o;if("number"==typeof t.length)for(e=0;e<t.length;e++)n.call(t[e],t[e],e);else if(f(t))for(o in t)t.hasOwnProperty(o)&&n.call(t[o],t[o],o);return t}function v(t){var n=it.slice.call(arguments,1);return n.forEach(function(n){g(t,n,!0)}),t}function y(t){var n=it.slice.call(arguments,1);return n.forEach(function(n){for(var e in n)void 0===t[e]&&(t[e]=n[e])}),t}function b(t){var n=it.slice.call(arguments,1);return n.forEach(function(n){g(t,n)}),t}function g(t,n,e){for(var o in n)e&&(h(n[o])||ut(n[o]))?(h(n[o])&&!h(t[o])&&(t[o]={}),ut(n[o])&&!ut(t[o])&&(t[o]=[]),g(t[o],n[o],e)):void 0!==n[o]&&(t[o]=n[o])}function w(t,n){var e=n(t);return s(t.root)&&!e.match(/^(https?:)?\//)&&(e=t.root+"/"+e),e}function T(t,n){var e=Object.keys(R.options.params),o={},r=n(t);return m(t.params,function(t,n){e.indexOf(n)===-1&&(o[n]=t)}),o=R.params(o),o&&(r+=(r.indexOf("?")==-1?"?":"&")+o),r}function j(t,n,e){var o=E(t),r=o.expand(n);return e&&e.push.apply(e,o.vars),r}function E(t){var n=["+","#",".","/",";","?","&"],e=[];return{vars:e,expand:function(o){return t.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(t,r,i){if(r){var u=null,s=[];if(n.indexOf(r.charAt(0))!==-1&&(u=r.charAt(0),r=r.substr(1)),r.split(/,/g).forEach(function(t){var n=/([^:\*]*)(?::(\d+)|(\*))?/.exec(t);s.push.apply(s,x(o,u,n[1],n[2]||n[3])),e.push(n[1])}),u&&"+"!==u){var c=",";return"?"===u?c="&":"#"!==u&&(c=u),(0!==s.length?u:"")+s.join(c)}return s.join(",")}return $(i)})}}}function x(t,n,e,o){var r=t[e],i=[];if(O(r)&&""!==r)if("string"==typeof r||"number"==typeof r||"boolean"==typeof r)r=r.toString(),o&&"*"!==o&&(r=r.substring(0,parseInt(o,10))),i.push(C(n,r,P(n)?e:null));else if("*"===o)Array.isArray(r)?r.filter(O).forEach(function(t){i.push(C(n,t,P(n)?e:null))}):Object.keys(r).forEach(function(t){O(r[t])&&i.push(C(n,r[t],t))});else{var u=[];Array.isArray(r)?r.filter(O).forEach(function(t){u.push(C(n,t))}):Object.keys(r).forEach(function(t){O(r[t])&&(u.push(encodeURIComponent(t)),u.push(C(n,r[t].toString())))}),P(n)?i.push(encodeURIComponent(e)+"="+u.join(",")):0!==u.length&&i.push(u.join(","))}else";"===n?i.push(encodeURIComponent(e)):""!==r||"&"!==n&&"?"!==n?""===r&&i.push(""):i.push(encodeURIComponent(e)+"=");return i}function O(t){return void 0!==t&&null!==t}function P(t){return";"===t||"&"===t||"?"===t}function C(t,n,e){return n="+"===t||"#"===t?$(n):encodeURIComponent(n),e?encodeURIComponent(e)+"="+n:n}function $(t){return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t){return/%[0-9A-Fa-f]/.test(t)||(t=encodeURI(t)),t}).join("")}function U(t){var n=[],e=j(t.url,t.params,n);return n.forEach(function(n){delete t.params[n]}),e}function R(t,n){var e,o=this||{},r=t;return s(t)&&(r={url:t,params:n}),r=v({},R.options,o.$options,r),R.transforms.forEach(function(t){e=A(t,e,o.$vm)}),e(r)}function A(t,n,e){return function(o){return t.call(e,o,n)}}function S(t,n,e){var o,r=ut(n),i=h(n);m(n,function(n,u){o=f(n)||ut(n),e&&(u=e+"["+(i||o?u:"")+"]"),!e&&r?t.add(n.name,n.value):o?S(t,n,u):t.add(u,n)})}function k(t){return new n(function(n){var e=new XDomainRequest,o=function(o){var r=t.respondWith(e.responseText,{status:e.status,statusText:e.statusText});n(r)};t.abort=function(){return e.abort()},e.open(t.method,t.getUrl(),!0),e.timeout=0,e.onload=o,e.onerror=o,e.ontimeout=function(){},e.onprogress=function(){},e.send(t.getBody())})}function H(t,n){!c(t.crossOrigin)&&I(t)&&(t.crossOrigin=!0),t.crossOrigin&&(ht||(t.client=k),delete t.emulateHTTP),n()}function I(t){var n=R.parse(R(t));return n.protocol!==ft.protocol||n.host!==ft.host}function L(t,n){t.emulateJSON&&h(t.body)&&(t.body=R.params(t.body),t.headers["Content-Type"]="application/x-www-form-urlencoded"),p(t.body)&&delete t.headers["Content-Type"],h(t.body)&&(t.body=JSON.stringify(t.body)),n(function(t){var n=t.headers["Content-Type"];if(s(n)&&0===n.indexOf("application/json"))try{t.data=t.json()}catch(e){t.data=null}else t.data=t.text()})}function q(t){return new n(function(n){var e,o,r=t.jsonp||"callback",i="_jsonp"+Math.random().toString(36).substr(2),u=null;e=function(e){var r=0;"load"===e.type&&null!==u?r=200:"error"===e.type&&(r=404),n(t.respondWith(u,{status:r})),delete window[i],document.body.removeChild(o)},t.params[r]=i,window[i]=function(t){u=JSON.stringify(t)},o=document.createElement("script"),o.src=t.getUrl(),o.type="text/javascript",o.async=!0,o.onload=e,o.onerror=e,document.body.appendChild(o)})}function N(t,n){"JSONP"==t.method&&(t.client=q),n(function(n){"JSONP"==t.method&&(n.data=n.json())})}function D(t,n){a(t.before)&&t.before.call(this,t),n()}function J(t,n){t.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(t.method)&&(t.headers["X-HTTP-Method-Override"]=t.method,t.method="POST"),n()}function M(t,n){t.method=t.method.toUpperCase(),t.headers=st({},V.headers.common,t.crossOrigin?{}:V.headers.custom,V.headers[t.method.toLowerCase()],t.headers),n()}function X(t,n){var e;t.timeout&&(e=setTimeout(function(){t.abort()},t.timeout)),n(function(t){clearTimeout(e)})}function W(t){return new n(function(n){var e=new XMLHttpRequest,o=function(o){var r=t.respondWith("response"in e?e.response:e.responseText,{status:1223===e.status?204:e.status,statusText:1223===e.status?"No Content":u(e.statusText),headers:B(e.getAllResponseHeaders())});n(r)};t.abort=function(){return e.abort()},e.open(t.method,t.getUrl(),!0),e.timeout=0,e.onload=o,e.onerror=o,t.progress&&("GET"===t.method?e.addEventListener("progress",t.progress):/^(POST|PUT)$/i.test(t.method)&&e.upload.addEventListener("progress",t.progress)),t.credentials===!0&&(e.withCredentials=!0),m(t.headers||{},function(t,n){e.setRequestHeader(n,t)}),e.send(t.getBody())})}function B(t){var n,e,o,r={};return m(u(t).split("\n"),function(t){o=t.indexOf(":"),e=u(t.slice(0,o)),n=u(t.slice(o+1)),r[e]?ut(r[e])?r[e].push(n):r[e]=[r[e],n]:r[e]=n}),r}function F(t){function e(e){return new n(function(n){function s(){r=i.pop(),a(r)?r.call(t,e,c):(o("Invalid interceptor of type "+typeof r+", must be a function"),c())}function c(e){if(a(e))u.unshift(e);else if(f(e))return u.forEach(function(n){e=l(e,function(e){return n.call(t,e)||e})}),void l(e,n);s()}s()},t)}var r,i=[G],u=[];return f(t)||(t=null),e.use=function(t){i.push(t)},e}function G(t,n){var e=t.client||W;n(e(t))}function V(t){var e=this||{},o=F(e.$vm);return y(t||{},e.$options,V.options),V.interceptors.forEach(function(t){o.use(t)}),o(new dt(t)).then(function(t){return t.ok?t:n.reject(t)},function(t){return t instanceof Error&&r(t),n.reject(t)})}function _(t,n,e,o){var r=this||{},i={};return e=st({},_.actions,e),m(e,function(e,u){e=v({url:t,params:n||{}},o,e),i[u]=function(){return(r.$http||V)(z(e,arguments))}}),i}function z(t,n){var e,o=st({},t),r={};switch(n.length){case 2:r=n[0],e=n[1];break;case 1:/^(POST|PUT|PATCH)$/i.test(o.method)?e=n[0]:r=n[0];break;case 0:break;default:throw"Expected up to 4 arguments [params, body], got "+n.length+" arguments"}return o.body=e,o.params=st({},o.params,r),o}function K(t){K.installed||(e(t),t.url=R,t.http=V,t.resource=_,t.Promise=n,Object.defineProperties(t.prototype,{$url:{get:function(){return d(t.url,this,this.$options.url)}},$http:{get:function(){return d(t.http,this,this.$options.http)}},$resource:{get:function(){return t.resource.bind(this)}},$promise:{get:function(){var n=this;return function(e){return new t.Promise(e,n)}}}}))}var Q=0,Y=1,Z=2;t.reject=function(n){return new t(function(t,e){e(n)})},t.resolve=function(n){return new t(function(t,e){t(n)})},t.all=function(n){return new t(function(e,o){function r(t){return function(o){u[t]=o,i+=1,i===n.length&&e(u)}}var i=0,u=[];0===n.length&&e(u);for(var s=0;s<n.length;s+=1)t.resolve(n[s]).then(r(s),o)})},t.race=function(n){return new t(function(e,o){for(var r=0;r<n.length;r+=1)t.resolve(n[r]).then(e,o)})};var tt=t.prototype;tt.resolve=function(t){var n=this;if(n.state===Z){if(t===n)throw new TypeError("Promise settled with itself.");var e=!1;try{var o=t&&t.then;if(null!==t&&"object"==typeof t&&"function"==typeof o)return void o.call(t,function(t){e||n.resolve(t),e=!0},function(t){e||n.reject(t),e=!0})}catch(r){return void(e||n.reject(r))}n.state=Q,n.value=t,n.notify()}},tt.reject=function(t){var n=this;if(n.state===Z){if(t===n)throw new TypeError("Promise settled with itself.");n.state=Y,n.value=t,n.notify()}},tt.notify=function(){var t=this;i(function(){if(t.state!==Z)for(;t.deferred.length;){var n=t.deferred.shift(),e=n[0],o=n[1],r=n[2],i=n[3];try{t.state===Q?r("function"==typeof e?e.call(void 0,t.value):t.value):t.state===Y&&("function"==typeof o?r(o.call(void 0,t.value)):i(t.value))}catch(u){i(u)}}})},tt.then=function(n,e){var o=this;return new t(function(t,r){o.deferred.push([n,e,t,r]),o.notify()})},tt["catch"]=function(t){return this.then(void 0,t)};var nt=window.Promise||t;n.all=function(t,e){return new n(nt.all(t),e)},n.resolve=function(t,e){return new n(nt.resolve(t),e)},n.reject=function(t,e){return new n(nt.reject(t),e)},n.race=function(t,e){return new n(nt.race(t),e)};var et=n.prototype;et.bind=function(t){return this.context=t,this},et.then=function(t,e){return t&&t.bind&&this.context&&(t=t.bind(this.context)),e&&e.bind&&this.context&&(e=e.bind(this.context)),new n(this.promise.then(t,e),this.context)},et["catch"]=function(t){return t&&t.bind&&this.context&&(t=t.bind(this.context)),new n(this.promise["catch"](t),this.context)},et["finally"]=function(t){return this.then(function(n){return t.call(this),n},function(n){return t.call(this),nt.reject(n)})};var ot=!1,rt={},it=[],ut=Array.isArray,st=Object.assign||b,ct=document.documentMode,at=document.createElement("a");R.options={url:"",root:null,params:{}},R.transforms=[U,T,w],R.params=function(t){var n=[],e=encodeURIComponent;return n.add=function(t,n){a(n)&&(n=n()),null===n&&(n=""),this.push(e(t)+"="+e(n))},S(n,t),n.join("&").replace(/%20/g,"+")},R.parse=function(t){return ct&&(at.href=t,t=at.href),at.href=t,{href:at.href,protocol:at.protocol?at.protocol.replace(/:$/,""):"",port:at.port,host:at.host,hostname:at.hostname,pathname:"/"===at.pathname.charAt(0)?at.pathname:"/"+at.pathname,search:at.search?at.search.replace(/^\?/,""):"",hash:at.hash?at.hash.replace(/^#/,""):""}};var ft=R.parse(location.href),ht="withCredentials"in new XMLHttpRequest,pt=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")},lt=function(){function t(n,e){var o=e.url,r=e.headers,i=e.status,u=e.statusText;pt(this,t),this.url=o,this.body=n,this.headers=r||{},this.status=i||0,this.statusText=u||"",this.ok=i>=200&&i<300}return t.prototype.text=function(){return this.body},t.prototype.blob=function(){return new Blob([this.body])},t.prototype.json=function(){return JSON.parse(this.body)},t}(),dt=function(){function t(n){pt(this,t),this.method="GET",this.body=null,this.params={},this.headers={},st(this,n)}return t.prototype.getUrl=function(){return R(this)},t.prototype.getBody=function(){return this.body},t.prototype.respondWith=function(t,n){return new lt(t,st(n||{},{url:this.getUrl()}))},t}(),mt={"X-Requested-With":"XMLHttpRequest"},vt={Accept:"application/json, text/plain, */*"},yt={"Content-Type":"application/json;charset=utf-8"};return V.options={},V.headers={put:yt,post:yt,patch:yt,"delete":yt,custom:mt,common:vt},V.interceptors=[D,X,J,L,N,M,H],["get","delete","head","jsonp"].forEach(function(t){V[t]=function(n,e){return this(st(e||{},{url:n,method:t}))}}),["post","put","patch"].forEach(function(t){V[t]=function(n,e,o){return this(st(o||{},{url:n,method:t,body:e}))}}),_.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},"delete":{method:"DELETE"}},"undefined"!=typeof window&&window.Vue&&window.Vue.use(K),K});
/*!
 * vue-validator v2.1.6
 * (c) 2016 kazuya kawaguchi
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueValidator = factory());
}(this, function () { 'use strict';

  var babelHelpers = {};
  babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  babelHelpers.inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  babelHelpers.possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  babelHelpers;
  /**
   * Utilties
   */

  // export default for holding the Vue reference
  var exports$1 = {};
  /**
   * warn
   *
   * @param {String} msg
   * @param {Error} [err]
   *
   */

  function warn(msg, err) {
    if (window.console) {
      console.warn('[vue-validator] ' + msg);
      if (err) {
        console.warn(err.stack);
      }
    }
  }

  /**
   * empty
   *
   * @param {Array|Object} target
   * @return {Boolean}
   */

  function empty(target) {
    if (target === null || target === undefined) {
      return true;
    }

    if (Array.isArray(target)) {
      if (target.length > 0) {
        return false;
      }
      if (target.length === 0) {
        return true;
      }
    } else if (exports$1.Vue.util.isPlainObject(target)) {
      for (var key in target) {
        if (exports$1.Vue.util.hasOwn(target, key)) {
          return false;
        }
      }
    }

    return true;
  }

  /**
   * each
   *
   * @param {Array|Object} target
   * @param {Function} iterator
   * @param {Object} [context]
   */

  function each(target, iterator, context) {
    if (Array.isArray(target)) {
      for (var i = 0; i < target.length; i++) {
        iterator.call(context || target[i], target[i], i);
      }
    } else if (exports$1.Vue.util.isPlainObject(target)) {
      var hasOwn = exports$1.Vue.util.hasOwn;
      for (var key in target) {
        if (hasOwn(target, key)) {
          iterator.call(context || target[key], target[key], key);
        }
      }
    }
  }

  /**
   * pull
   *
   * @param {Array} arr
   * @param {Object} item
   * @return {Object|null}
   */

  function pull(arr, item) {
    var index = exports$1.Vue.util.indexOf(arr, item);
    return ~index ? arr.splice(index, 1) : null;
  }

  /**
   * trigger
   *
   * @param {Element} el
   * @param {String} event
   * @param {Object} [args]
   */

  function trigger(el, event, args) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(event, true, false);

    if (args) {
      for (var prop in args) {
        e[prop] = args[prop];
      }
    }

    // Due to Firefox bug, events fired on disabled
    // non-attached form controls can throw errors
    try {
      el.dispatchEvent(e);
    } catch (e) {}
  }

  /**
   * Forgiving check for a promise
   *
   * @param {Object} p
   * @return {Boolean}
   */

  function isPromise(p) {
    return p && typeof p.then === 'function';
  }

  /**
   * Togging classes
   *
   * @param {Element} el
   * @param {String} key
   * @param {Function} fn
   */

  function toggleClasses(el, key, fn) {
    key = key.trim();
    if (key.indexOf(' ') === -1) {
      fn(el, key);
      return;
    }

    var keys = key.split(/\s+/);
    for (var i = 0, l = keys.length; i < l; i++) {
      fn(el, keys[i]);
    }
  }

  /**
   * Fundamental validate functions
   */

  /**
   * required
   *
   * This function validate whether the value has been filled out.
   *
   * @param {*} val
   * @return {Boolean}
   */

  function required(val) {
    if (Array.isArray(val)) {
      if (val.length !== 0) {
        var valid = true;
        for (var i = 0, l = val.length; i < l; i++) {
          valid = required(val[i]);
          if (!valid) {
            break;
          }
        }
        return valid;
      } else {
        return false;
      }
    } else if (typeof val === 'number' || typeof val === 'function') {
      return true;
    } else if (typeof val === 'boolean') {
      return val;
    } else if (typeof val === 'string') {
      return val.length > 0;
    } else if (val !== null && (typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val)) === 'object') {
      return Object.keys(val).length > 0;
    } else if (val === null || val === undefined) {
      return false;
    }
  }

  /**
   * pattern
   *
   * This function validate whether the value matches the regex pattern
   *
   * @param val
   * @param {String} pat
   * @return {Boolean}
   */

  function pattern(val, pat) {
    if (typeof pat !== 'string') {
      return false;
    }

    var match = pat.match(new RegExp('^/(.*?)/([gimy]*)$'));
    if (!match) {
      return false;
    }

    return new RegExp(match[1], match[2]).test(val);
  }

  /**
   * minlength
   *
   * This function validate whether the minimum length.
   *
   * @param {String|Array} val
   * @param {String|Number} min
   * @return {Boolean}
   */

  function minlength(val, min) {
    if (typeof val === 'string') {
      return isInteger(min, 10) && val.length >= parseInt(min, 10);
    } else if (Array.isArray(val)) {
      return val.length >= parseInt(min, 10);
    } else {
      return false;
    }
  }

  /**
   * maxlength
   *
   * This function validate whether the maximum length.
   *
   * @param {String|Array} val
   * @param {String|Number} max
   * @return {Boolean}
   */

  function maxlength(val, max) {
    if (typeof val === 'string') {
      return isInteger(max, 10) && val.length <= parseInt(max, 10);
    } else if (Array.isArray(val)) {
      return val.length <= parseInt(max, 10);
    } else {
      return false;
    }
  }

  /**
   * min
   *
   * This function validate whether the minimum value of the numberable value.
   *
   * @param {*} val
   * @param {*} arg minimum
   * @return {Boolean}
   */

  function min(val, arg) {
    return !isNaN(+val) && !isNaN(+arg) && +val >= +arg;
  }

  /**
   * max
   *
   * This function validate whether the maximum value of the numberable value.
   *
   * @param {*} val
   * @param {*} arg maximum
   * @return {Boolean}
   */

  function max(val, arg) {
    return !isNaN(+val) && !isNaN(+arg) && +val <= +arg;
  }

  /**
   * isInteger
   *
   * This function check whether the value of the string is integer.
   *
   * @param {String} val
   * @return {Boolean}
   * @private
   */

  function isInteger(val) {
    return (/^(-?[1-9]\d*|0)$/.test(val)
    );
  }

var validators = Object.freeze({
    required: required,
    pattern: pattern,
    minlength: minlength,
    maxlength: maxlength,
    min: min,
    max: max
  });

  function Asset (Vue) {
    var extend = Vue.util.extend;

    // set global validators asset
    var assets = Object.create(null);
    extend(assets, validators);
    Vue.options.validators = assets;

    // set option merge strategy
    var strats = Vue.config.optionMergeStrategies;
    if (strats) {
      strats.validators = function (parent, child) {
        if (!child) {
          return parent;
        }
        if (!parent) {
          return child;
        }
        var ret = Object.create(null);
        extend(ret, parent);
        for (var key in child) {
          ret[key] = child[key];
        }
        return ret;
      };
    }

    /**
     * Register or retrieve a global validator definition.
     *
     * @param {String} id
     * @param {Function} definition
     */

    Vue.validator = function (id, definition) {
      if (!definition) {
        return Vue.options['validators'][id];
      } else {
        Vue.options['validators'][id] = definition;
      }
    };
  }

  function Override (Vue) {
    // override _init
    var init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (!this._validatorMaps) {
        this._validatorMaps = Object.create(null);
      }
      init.call(this, options);
    };

    // override _destroy
    var destroy = Vue.prototype._destroy;
    Vue.prototype._destroy = function () {
      destroy.apply(this, arguments);
      this._validatorMaps = null;
    };
  }

  var VALIDATE_UPDATE = '__vue-validator-validate-update__';
  var PRIORITY_VALIDATE = 4096;
  var PRIORITY_VALIDATE_CLASS = 32;
  var REGEX_FILTER = /[^|]\|[^|]/;
  var REGEX_VALIDATE_DIRECTIVE = /^v-validate(?:$|:(.*)$)/;
  var REGEX_EVENT = /^v-on:|^@/;

  var classId = 0; // ID for validation class


  function ValidateClass (Vue) {
    var vIf = Vue.directive('if');
    var FragmentFactory = Vue.FragmentFactory;
    var _Vue$util = Vue.util;
    var toArray = _Vue$util.toArray;
    var replace = _Vue$util.replace;
    var createAnchor = _Vue$util.createAnchor;

    /**
     * `v-validate-class` directive
     */

    Vue.directive('validate-class', {
      terminal: true,
      priority: vIf.priority + PRIORITY_VALIDATE_CLASS,

      bind: function bind() {
        var _this = this;

        var id = String(classId++);
        this.setClassIds(this.el, id);

        this.vm.$on(VALIDATE_UPDATE, this.cb = function (classIds, validation, results) {
          if (classIds.indexOf(id) > -1) {
            validation.updateClasses(results, _this.frag.node);
          }
        });

        this.setupFragment();
      },
      unbind: function unbind() {
        this.vm.$off(VALIDATE_UPDATE, this.cb);
        this.teardownFragment();
      },
      setClassIds: function setClassIds(el, id) {
        var childNodes = toArray(el.childNodes);
        for (var i = 0, l = childNodes.length; i < l; i++) {
          var element = childNodes[i];
          if (element.nodeType === 1) {
            var hasAttrs = element.hasAttributes();
            var attrs = hasAttrs && toArray(element.attributes);
            for (var k = 0, _l = attrs.length; k < _l; k++) {
              var attr = attrs[k];
              if (attr.name.match(REGEX_VALIDATE_DIRECTIVE)) {
                var existingId = element.getAttribute(VALIDATE_UPDATE);
                var value = existingId ? existingId + ',' + id : id;
                element.setAttribute(VALIDATE_UPDATE, value);
              }
            }
          }

          if (element.hasChildNodes()) {
            this.setClassIds(element, id);
          }
        }
      },
      setupFragment: function setupFragment() {
        this.anchor = createAnchor('v-validate-class');
        replace(this.el, this.anchor);

        this.factory = new FragmentFactory(this.vm, this.el);
        this.frag = this.factory.create(this._host, this._scope, this._frag);
        this.frag.before(this.anchor);
      },
      teardownFragment: function teardownFragment() {
        if (this.frag) {
          this.frag.remove();
          this.frag = null;
          this.factory = null;
        }

        replace(this.anchor, this.el);
        this.anchor = null;
      }
    });
  }

  function Validate (Vue) {
    var FragmentFactory = Vue.FragmentFactory;
    var parseDirective = Vue.parsers.directive.parseDirective;
    var _Vue$util = Vue.util;
    var inBrowser = _Vue$util.inBrowser;
    var bind = _Vue$util.bind;
    var on = _Vue$util.on;
    var off = _Vue$util.off;
    var createAnchor = _Vue$util.createAnchor;
    var replace = _Vue$util.replace;
    var camelize = _Vue$util.camelize;
    var isPlainObject = _Vue$util.isPlainObject;

    // Test for IE10/11 textarea placeholder clone bug

    function checkTextareaCloneBug() {
      if (inBrowser) {
        var t = document.createElement('textarea');
        t.placeholder = 't';
        return t.cloneNode(true).value === 't';
      } else {
        return false;
      }
    }
    var hasTextareaCloneBug = checkTextareaCloneBug();

    /**
     * `v-validate` directive
     */

    Vue.directive('validate', {
      deep: true,
      terminal: true,
      priority: PRIORITY_VALIDATE,
      params: ['group', 'field', 'detect-blur', 'detect-change', 'initial', 'classes'],

      paramWatchers: {
        detectBlur: function detectBlur(val, old) {
          if (this._invalid) {
            return;
          }
          this.validation.detectBlur = this.isDetectBlur(val);
          this.validator.validate(this.field);
        },
        detectChange: function detectChange(val, old) {
          if (this._invalid) {
            return;
          }
          this.validation.detectChange = this.isDetectChange(val);
          this.validator.validate(this.field);
        }
      },

      bind: function bind() {
        var el = this.el;

        if ('development' !== 'production' && el.__vue__) {
          warn('v-validate="' + this.expression + '" cannot be used on an instance root element.');
          this._invalid = true;
          return;
        }

        if ('development' !== 'production' && (el.hasAttribute('v-if') || el.hasAttribute('v-for'))) {
          warn('v-validate cannot be used `v-if` or `v-for` build-in terminal directive ' + 'on an element. these is wrapped with `<template>` or other tags: ' + '(e.g. <validator name="validator">' + '<template v-if="hidden">' + '<input type="text" v-validate:field1="[\'required\']">' + '</template>' + '</validator>).');
          this._invalid = true;
          return;
        }

        if ('development' !== 'production' && !(this.arg || this.params.field)) {
          warn('you need specify field name for v-validate directive.');
          this._invalid = true;
          return;
        }

        var validatorName = this.vm.$options._validator;
        if ('development' !== 'production' && !validatorName) {
          warn('you need to wrap the elements to be validated in a <validator> element: ' + '(e.g. <validator name="validator">' + '<input type="text" v-validate:field1="[\'required\']">' + '</validator>).');
          this._invalid = true;
          return;
        }

        var raw = el.getAttribute('v-model');

        var _parseModelRaw = this.parseModelRaw(raw);

        var model = _parseModelRaw.model;
        var filters = _parseModelRaw.filters;

        this.model = model;

        this.setupFragment();
        this.setupValidate(validatorName, model, filters);
        this.listen();
      },
      update: function update(value, old) {
        if (!value || this._invalid) {
          return;
        }

        if (isPlainObject(value) || old && isPlainObject(old)) {
          this.handleObject(value, old);
        } else if (Array.isArray(value) || old && Array.isArray(old)) {
          this.handleArray(value, old);
        }

        var options = { field: this.field, noopable: this._initialNoopValidation };
        if (this.frag) {
          options.el = this.frag.node;
        }
        this.validator.validate(options);

        if (this._initialNoopValidation) {
          this._initialNoopValidation = null;
        }
      },
      unbind: function unbind() {
        if (this._invalid) {
          return;
        }

        this.unlisten();
        this.teardownValidate();
        this.teardownFragment();

        this.model = null;
      },
      parseModelRaw: function parseModelRaw(raw) {
        if (REGEX_FILTER.test(raw)) {
          var parsed = parseDirective(raw);
          return { model: parsed.expression, filters: parsed.filters };
        } else {
          return { model: raw };
        }
      },
      setupValidate: function setupValidate(name, model, filters) {
        var params = this.params;
        var validator = this.validator = this.vm._validatorMaps[name];

        this.field = camelize(this.arg ? this.arg : params.field);

        this.validation = validator.manageValidation(this.field, model, this.vm, this.getElementFrom(this.frag), this._scope, filters, params.initial, this.isDetectBlur(params.detectBlur), this.isDetectChange(params.detectChange));

        isPlainObject(params.classes) && this.validation.setValidationClasses(params.classes);

        params.group && validator.addGroupValidation(params.group, this.field);

        this._initialNoopValidation = this.isInitialNoopValidation(params.initial);
      },
      listen: function listen() {
        var model = this.model;
        var validation = this.validation;
        var el = this.getElementFrom(this.frag);

        this.onBlur = bind(validation.listener, validation);
        on(el, 'blur', this.onBlur);
        if ((el.type === 'radio' || el.tagName === 'SELECT') && !model) {
          this.onChange = bind(validation.listener, validation);
          on(el, 'change', this.onChange);
        } else if (el.type === 'checkbox') {
          if (!model) {
            this.onChange = bind(validation.listener, validation);
            on(el, 'change', this.onChange);
          } else {
            this.onClick = bind(validation.listener, validation);
            on(el, 'click', this.onClick);
          }
        } else {
          if (!model) {
            this.onInput = bind(validation.listener, validation);
            on(el, 'input', this.onInput);
          }
        }
      },
      unlisten: function unlisten() {
        var el = this.getElementFrom(this.frag);

        if (this.onInput) {
          off(el, 'input', this.onInput);
          this.onInput = null;
        }

        if (this.onClick) {
          off(el, 'click', this.onClick);
          this.onClick = null;
        }

        if (this.onChange) {
          off(el, 'change', this.onChange);
          this.onChange = null;
        }

        if (this.onBlur) {
          off(el, 'blur', this.onBlur);
          this.onBlur = null;
        }
      },
      teardownValidate: function teardownValidate() {
        if (this.validator && this.validation) {
          var el = this.getElementFrom(this.frag);

          this.params.group && this.validator.removeGroupValidation(this.params.group, this.field);

          this.validator.unmanageValidation(this.field, el);

          this.validator = null;
          this.validation = null;
          this.field = null;
        }
      },
      setupFragment: function setupFragment() {
        this.anchor = createAnchor('v-validate');
        replace(this.el, this.anchor);

        this.factory = new FragmentFactory(this.vm, this.shimNode(this.el));
        this.frag = this.factory.create(this._host, this._scope, this._frag);
        this.frag.before(this.anchor);
      },
      teardownFragment: function teardownFragment() {
        if (this.frag) {
          this.frag.remove();
          this.frag = null;
          this.factory = null;
        }

        replace(this.anchor, this.el);
        this.anchor = null;
      },
      handleArray: function handleArray(value, old) {
        var _this = this;

        old && this.validation.resetValidation();

        each(value, function (val) {
          _this.validation.setValidation(val);
        });
      },
      handleObject: function handleObject(value, old) {
        var _this2 = this;

        old && this.validation.resetValidation();

        each(value, function (val, key) {
          if (isPlainObject(val)) {
            if ('rule' in val) {
              var msg = 'message' in val ? val.message : null;
              var initial = 'initial' in val ? val.initial : null;
              _this2.validation.setValidation(key, val.rule, msg, initial);
            }
          } else {
            _this2.validation.setValidation(key, val);
          }
        });
      },
      isDetectBlur: function isDetectBlur(detectBlur) {
        return detectBlur === undefined || detectBlur === 'on' || detectBlur === true;
      },
      isDetectChange: function isDetectChange(detectChange) {
        return detectChange === undefined || detectChange === 'on' || detectChange === true;
      },
      isInitialNoopValidation: function isInitialNoopValidation(initial) {
        return initial === 'off' || initial === false;
      },
      shimNode: function shimNode(node) {
        var ret = node;
        if (hasTextareaCloneBug) {
          if (node.tagName === 'TEXTAREA') {
            ret = node.cloneNode(true);
            ret.value = node.value;
            var i = ret.childNodes.length;
            while (i--) {
              ret.removeChild(ret.childNodes[i]);
            }
          }
        }
        return ret;
      },
      getElementFrom: function getElementFrom(frag) {
        return frag.single ? frag.node : frag.node.nextSibling;
      }
    });
  }

  /**
   * BaseValidation class
   */

  var BaseValidation = function () {
    function BaseValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
      babelHelpers.classCallCheck(this, BaseValidation);

      this.field = field;
      this.touched = false;
      this.dirty = false;
      this.modified = false;

      this._modified = false;
      this._model = model;
      this._filters = filters;
      this._validator = validator;
      this._vm = vm;
      this._el = el;
      this._forScope = scope;
      this._init = this._getValue(el);
      this._validators = {};
      this._detectBlur = detectBlur;
      this._detectChange = detectChange;
      this._classes = {};
    }

    BaseValidation.prototype.manageElement = function manageElement(el, initial) {
      var _this = this;

      var scope = this._getScope();
      var model = this._model;

      this._initial = initial;

      var classIds = el.getAttribute(VALIDATE_UPDATE);
      if (classIds) {
        el.removeAttribute(VALIDATE_UPDATE);
        this._classIds = classIds.split(',');
      }

      if (model) {
        el.value = this._evalModel(model, this._filters);
        this._unwatch = scope.$watch(model, function (val, old) {
          if (val !== old) {
            if (_this.guardValidate(el, 'input')) {
              return;
            }

            _this.handleValidate(el, { noopable: _this._initial });
            if (_this._initial) {
              _this._initial = null;
            }
          }
        }, { deep: true });
      }
    };

    BaseValidation.prototype.unmanageElement = function unmanageElement(el) {
      this._unwatch && this._unwatch();
    };

    BaseValidation.prototype.resetValidation = function resetValidation() {
      var _this2 = this;

      var keys = Object.keys(this._validators);
      each(keys, function (key, index) {
        _this2._validators[key] = null;
        delete _this2._validators[key];
      });
    };

    BaseValidation.prototype.setValidation = function setValidation(name, arg, msg, initial) {
      var validator = this._validators[name];
      if (!validator) {
        validator = this._validators[name] = {};
        validator.name = name;
      }

      validator.arg = arg;
      if (msg) {
        validator.msg = msg;
      }

      if (initial) {
        validator.initial = initial;
        validator._isNoopable = true;
      }
    };

    BaseValidation.prototype.setValidationClasses = function setValidationClasses(classes) {
      var _this3 = this;

      each(classes, function (value, key) {
        _this3._classes[key] = value;
      });
    };

    BaseValidation.prototype.willUpdateFlags = function willUpdateFlags() {
      var touched = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

      touched && this.willUpdateTouched(this._el, 'blur');
      this.willUpdateDirty(this._el);
      this.willUpdateModified(this._el);
    };

    BaseValidation.prototype.willUpdateTouched = function willUpdateTouched(el, type) {
      if (type && type === 'blur') {
        this.touched = true;
        this._fireEvent(el, 'touched');
      }
    };

    BaseValidation.prototype.willUpdateDirty = function willUpdateDirty(el) {
      if (!this.dirty && this._checkModified(el)) {
        this.dirty = true;
        this._fireEvent(el, 'dirty');
      }
    };

    BaseValidation.prototype.willUpdateModified = function willUpdateModified(el) {
      this.modified = this._checkModified(el);
      if (this._modified !== this.modified) {
        this._fireEvent(el, 'modified', { modified: this.modified });
        this._modified = this.modified;
      }
    };

    BaseValidation.prototype.listener = function listener(e) {
      if (this.guardValidate(e.target, e.type)) {
        return;
      }

      this.handleValidate(e.target, { type: e.type });
    };

    BaseValidation.prototype.handleValidate = function handleValidate(el) {
      var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var _ref$type = _ref.type;
      var type = _ref$type === undefined ? null : _ref$type;
      var _ref$noopable = _ref.noopable;
      var noopable = _ref$noopable === undefined ? false : _ref$noopable;

      this.willUpdateTouched(el, type);
      this.willUpdateDirty(el);
      this.willUpdateModified(el);

      this._validator.validate({ field: this.field, el: el, noopable: noopable });
    };

    BaseValidation.prototype.validate = function validate(cb) {
      var _this4 = this;

      var noopable = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
      var el = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

      var _ = exports$1.Vue.util;

      var results = {};
      var errors = [];
      var valid = true;

      this._runValidators(function (descriptor, name, done) {
        var asset = _this4._resolveValidator(name);
        var validator = null;
        var msg = null;

        if (_.isPlainObject(asset)) {
          if (asset.check && typeof asset.check === 'function') {
            validator = asset.check;
          }
          if (asset.message) {
            msg = asset.message;
          }
        } else if (typeof asset === 'function') {
          validator = asset;
        }

        if (descriptor.msg) {
          msg = descriptor.msg;
        }

        if (noopable) {
          results[name] = false;
          return done();
        }

        if (descriptor._isNoopable) {
          results[name] = false;
          descriptor._isNoopable = null;
          return done();
        }

        if (validator) {
          var value = _this4._getValue(_this4._el);
          _this4._invokeValidator(_this4._vm, validator, value, descriptor.arg, function (ret, err) {
            if (!ret) {
              valid = false;
              if (err) {
                // async error message
                errors.push({ validator: name, message: err });
                results[name] = err;
              } else if (msg) {
                var error = { validator: name };
                error.message = typeof msg === 'function' ? msg.call(_this4._vm, _this4.field, descriptor.arg) : msg;
                errors.push(error);
                results[name] = error.message;
              } else {
                results[name] = !ret;
              }
            } else {
              results[name] = !ret;
            }

            done();
          });
        } else {
          done();
        }
      }, function () {
        // finished
        _this4._fireEvent(_this4._el, valid ? 'valid' : 'invalid');

        var props = {
          valid: valid,
          invalid: !valid,
          touched: _this4.touched,
          untouched: !_this4.touched,
          dirty: _this4.dirty,
          pristine: !_this4.dirty,
          modified: _this4.modified
        };
        if (!empty(errors)) {
          props.errors = errors;
        }
        _.extend(results, props);

        _this4.willUpdateClasses(results, el);

        cb(results);
      });
    };

    BaseValidation.prototype.resetFlags = function resetFlags() {
      this.touched = false;
      this.dirty = false;
      this.modified = false;
      this._modified = false;
    };

    BaseValidation.prototype.reset = function reset() {
      each(this._validators, function (descriptor, key) {
        if (descriptor.initial && !descriptor._isNoopable) {
          descriptor._isNoopable = true;
        }
      });
      this.resetFlags();
      this._init = this._getValue(this._el);
    };

    BaseValidation.prototype.willUpdateClasses = function willUpdateClasses(results) {
      var _this5 = this;

      var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      if (this._checkClassIds(el)) {
        (function () {
          var classIds = _this5._getClassIds(el);
          _this5.vm.$nextTick(function () {
            _this5.vm.$emit(VALIDATE_UPDATE, classIds, _this5, results);
          });
        })();
      } else {
        this.updateClasses(results);
      }
    };

    BaseValidation.prototype.updateClasses = function updateClasses(results) {
      var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      this._updateClasses(el || this._el, results);
    };

    BaseValidation.prototype.guardValidate = function guardValidate(el, type) {
      if (type && type === 'blur' && !this.detectBlur) {
        return true;
      }

      if (type && type === 'input' && !this.detectChange) {
        return true;
      }

      if (type && type === 'change' && !this.detectChange) {
        return true;
      }

      if (type && type === 'click' && !this.detectChange) {
        return true;
      }

      return false;
    };

    BaseValidation.prototype._getValue = function _getValue(el) {
      return el.value;
    };

    BaseValidation.prototype._getScope = function _getScope() {
      return this._forScope || this._vm;
    };

    BaseValidation.prototype._getClassIds = function _getClassIds(el) {
      return this._classIds;
    };

    BaseValidation.prototype._checkModified = function _checkModified(target) {
      return this._init !== this._getValue(target);
    };

    BaseValidation.prototype._checkClassIds = function _checkClassIds(el) {
      return this._getClassIds(el);
    };

    BaseValidation.prototype._fireEvent = function _fireEvent(el, type, args) {
      trigger(el, type, args);
    };

    BaseValidation.prototype._evalModel = function _evalModel(model, filters) {
      var scope = this._getScope();

      var val = null;
      if (filters) {
        val = scope.$get(model);
        return filters ? this._applyFilters(val, null, filters) : val;
      } else {
        val = scope.$get(model);
        return val === undefined || val === null ? '' : val;
      }
    };

    BaseValidation.prototype._updateClasses = function _updateClasses(el, results) {
      this._toggleValid(el, results.valid);
      this._toggleTouched(el, results.touched);
      this._togglePristine(el, results.pristine);
      this._toggleModfied(el, results.modified);
    };

    BaseValidation.prototype._toggleValid = function _toggleValid(el, valid) {
      var _util$Vue$util = exports$1.Vue.util;
      var addClass = _util$Vue$util.addClass;
      var removeClass = _util$Vue$util.removeClass;

      var validClass = this._classes.valid || 'valid';
      var invalidClass = this._classes.invalid || 'invalid';

      if (valid) {
        toggleClasses(el, validClass, addClass);
        toggleClasses(el, invalidClass, removeClass);
      } else {
        toggleClasses(el, validClass, removeClass);
        toggleClasses(el, invalidClass, addClass);
      }
    };

    BaseValidation.prototype._toggleTouched = function _toggleTouched(el, touched) {
      var _util$Vue$util2 = exports$1.Vue.util;
      var addClass = _util$Vue$util2.addClass;
      var removeClass = _util$Vue$util2.removeClass;

      var touchedClass = this._classes.touched || 'touched';
      var untouchedClass = this._classes.untouched || 'untouched';

      if (touched) {
        toggleClasses(el, touchedClass, addClass);
        toggleClasses(el, untouchedClass, removeClass);
      } else {
        toggleClasses(el, touchedClass, removeClass);
        toggleClasses(el, untouchedClass, addClass);
      }
    };

    BaseValidation.prototype._togglePristine = function _togglePristine(el, pristine) {
      var _util$Vue$util3 = exports$1.Vue.util;
      var addClass = _util$Vue$util3.addClass;
      var removeClass = _util$Vue$util3.removeClass;

      var pristineClass = this._classes.pristine || 'pristine';
      var dirtyClass = this._classes.dirty || 'dirty';

      if (pristine) {
        toggleClasses(el, pristineClass, addClass);
        toggleClasses(el, dirtyClass, removeClass);
      } else {
        toggleClasses(el, pristineClass, removeClass);
        toggleClasses(el, dirtyClass, addClass);
      }
    };

    BaseValidation.prototype._toggleModfied = function _toggleModfied(el, modified) {
      var _util$Vue$util4 = exports$1.Vue.util;
      var addClass = _util$Vue$util4.addClass;
      var removeClass = _util$Vue$util4.removeClass;

      var modifiedClass = this._classes.modified || 'modified';

      if (modified) {
        toggleClasses(el, modifiedClass, addClass);
      } else {
        toggleClasses(el, modifiedClass, removeClass);
      }
    };

    BaseValidation.prototype._applyFilters = function _applyFilters(value, oldValue, filters, write) {
      var resolveAsset = exports$1.Vue.util.resolveAsset;
      var scope = this._getScope();

      var filter = void 0,
          fn = void 0,
          args = void 0,
          arg = void 0,
          offset = void 0,
          i = void 0,
          l = void 0,
          j = void 0,
          k = void 0;
      for (i = 0, l = filters.length; i < l; i++) {
        filter = filters[i];
        fn = resolveAsset(this._vm.$options, 'filters', filter.name);
        if (!fn) {
          continue;
        }

        fn = write ? fn.write : fn.read || fn;
        if (typeof fn !== 'function') {
          continue;
        }

        args = write ? [value, oldValue] : [value];
        offset = write ? 2 : 1;
        if (filter.args) {
          for (j = 0, k = filter.args.length; j < k; j++) {
            arg = filter.args[j];
            args[j + offset] = arg.dynamic ? scope.$get(arg.value) : arg.value;
          }
        }

        value = fn.apply(this._vm, args);
      }

      return value;
    };

    BaseValidation.prototype._runValidators = function _runValidators(fn, cb) {
      var validators = this._validators;
      var length = Object.keys(validators).length;

      var count = 0;
      each(validators, function (descriptor, name) {
        fn(descriptor, name, function () {
          ++count;
          count >= length && cb();
        });
      });
    };

    BaseValidation.prototype._invokeValidator = function _invokeValidator(vm, validator, val, arg, cb) {
      var future = validator.call(this, val, arg);
      if (typeof future === 'function') {
        // function 
        future(function () {
          // resolve
          cb(true);
        }, function (msg) {
          // reject
          cb(false, msg);
        });
      } else if (isPromise(future)) {
        // promise
        future.then(function () {
          // resolve
          cb(true);
        }, function (msg) {
          // reject
          cb(false, msg);
        }).catch(function (err) {
          cb(false, err.message);
        });
      } else {
        // sync
        cb(future);
      }
    };

    BaseValidation.prototype._resolveValidator = function _resolveValidator(name) {
      var resolveAsset = exports$1.Vue.util.resolveAsset;
      return resolveAsset(this._vm.$options, 'validators', name);
    };

    babelHelpers.createClass(BaseValidation, [{
      key: 'vm',
      get: function get() {
        return this._vm;
      }
    }, {
      key: 'el',
      get: function get() {
        return this._el;
      }
    }, {
      key: 'detectChange',
      get: function get() {
        return this._detectChange;
      },
      set: function set(val) {
        this._detectChange = val;
      }
    }, {
      key: 'detectBlur',
      get: function get() {
        return this._detectBlur;
      },
      set: function set(val) {
        this._detectBlur = val;
      }
    }]);
    return BaseValidation;
  }();

  /**
   * CheckboxValidation class
   */

  var CheckboxValidation = function (_BaseValidation) {
    babelHelpers.inherits(CheckboxValidation, _BaseValidation);

    function CheckboxValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
      babelHelpers.classCallCheck(this, CheckboxValidation);

      var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

      _this._inits = [];
      return _this;
    }

    CheckboxValidation.prototype.manageElement = function manageElement(el, initial) {
      var _this2 = this;

      var scope = this._getScope();
      var item = this._addItem(el, initial);

      var model = item.model = this._model;
      if (model) {
        var value = this._evalModel(model, this._filters);
        if (Array.isArray(value)) {
          this._setChecked(value, item.el);
          item.unwatch = scope.$watch(model, function (val, old) {
            if (val !== old) {
              if (_this2.guardValidate(item.el, 'change')) {
                return;
              }

              _this2.handleValidate(item.el, { noopable: item.initial });
              if (item.initial) {
                item.initial = null;
              }
            }
          });
        } else {
          el.checked = value || false;
          this._init = el.checked;
          item.init = el.checked;
          item.value = el.value;
          item.unwatch = scope.$watch(model, function (val, old) {
            if (val !== old) {
              if (_this2.guardValidate(el, 'change')) {
                return;
              }

              _this2.handleValidate(el, { noopable: item.initial });
              if (item.initial) {
                item.initial = null;
              }
            }
          });
        }
      } else {
        var options = { field: this.field, noopable: initial };
        if (this._checkClassIds(el)) {
          options.el = el;
        }
        this._validator.validate(options);
      }
    };

    CheckboxValidation.prototype.unmanageElement = function unmanageElement(el) {
      var found = -1;
      each(this._inits, function (item, index) {
        if (item.el === el) {
          found = index;
          if (item.unwatch && item.model) {
            item.unwatch();
            item.unwatch = null;
            item.model = null;
          }
        }
      });
      if (found === -1) {
        return;
      }

      this._inits.splice(found, 1);
      this._validator.validate({ field: this.field });
    };

    CheckboxValidation.prototype.willUpdateFlags = function willUpdateFlags() {
      var _this3 = this;

      var touched = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

      each(this._inits, function (item, index) {
        touched && _this3.willUpdateTouched(item.el, 'blur');
        _this3.willUpdateDirty(item.el);
        _this3.willUpdateModified(item.el);
      });
    };

    CheckboxValidation.prototype.reset = function reset() {
      this.resetFlags();
      each(this._inits, function (item, index) {
        item.init = item.el.checked;
        item.value = item.el.value;
      });
    };

    CheckboxValidation.prototype.updateClasses = function updateClasses(results) {
      var _this4 = this;

      var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      if (el) {
        // for another element
        this._updateClasses(el, results);
      } else {
        each(this._inits, function (item, index) {
          _this4._updateClasses(item.el, results);
        });
      }
    };

    CheckboxValidation.prototype._addItem = function _addItem(el, initial) {
      var item = {
        el: el,
        init: el.checked,
        value: el.value,
        initial: initial
      };

      var classIds = el.getAttribute(VALIDATE_UPDATE);
      if (classIds) {
        el.removeAttribute(VALIDATE_UPDATE);
        item.classIds = classIds.split(',');
      }

      this._inits.push(item);
      return item;
    };

    CheckboxValidation.prototype._setChecked = function _setChecked(values, el) {
      for (var i = 0, l = values.length; i < l; i++) {
        var value = values[i];
        if (!el.disabled && el.value === value && !el.checked) {
          el.checked = true;
        }
      }
    };

    CheckboxValidation.prototype._getValue = function _getValue(el) {
      var _this5 = this;

      if (!this._inits || this._inits.length === 0) {
        return el.checked;
      } else {
        var _ret = function () {
          var vals = [];
          each(_this5._inits, function (item, index) {
            item.el.checked && vals.push(item.el.value);
          });
          return {
            v: vals
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret)) === "object") return _ret.v;
      }
    };

    CheckboxValidation.prototype._getClassIds = function _getClassIds(el) {
      var classIds = void 0;
      each(this._inits, function (item, index) {
        if (item.el === el) {
          classIds = item.classIds;
        }
      });
      return classIds;
    };

    CheckboxValidation.prototype._checkModified = function _checkModified(target) {
      var _this6 = this;

      if (this._inits.length === 0) {
        return this._init !== target.checked;
      } else {
        var _ret2 = function () {
          var modified = false;
          each(_this6._inits, function (item, index) {
            if (!modified) {
              modified = item.init !== item.el.checked;
            }
          });
          return {
            v: modified
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret2)) === "object") return _ret2.v;
      }
    };

    return CheckboxValidation;
  }(BaseValidation);

  /**
   * RadioValidation class
   */

  var RadioValidation = function (_BaseValidation) {
    babelHelpers.inherits(RadioValidation, _BaseValidation);

    function RadioValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
      babelHelpers.classCallCheck(this, RadioValidation);

      var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

      _this._inits = [];
      return _this;
    }

    RadioValidation.prototype.manageElement = function manageElement(el, initial) {
      var _this2 = this;

      var scope = this._getScope();
      var item = this._addItem(el, initial);

      var model = item.model = this._model;
      if (model) {
        var value = this._evalModel(model, this._filters);
        this._setChecked(value, el, item);
        item.unwatch = scope.$watch(model, function (val, old) {
          if (val !== old) {
            if (_this2.guardValidate(item.el, 'change')) {
              return;
            }

            _this2.handleValidate(el, { noopable: item.initial });
            if (item.initial) {
              item.initial = null;
            }
          }
        });
      } else {
        var options = { field: this.field, noopable: initial };
        if (this._checkClassIds(el)) {
          options.el = el;
        }
        this._validator.validate(options);
      }
    };

    RadioValidation.prototype.unmanageElement = function unmanageElement(el) {
      var found = -1;
      each(this._inits, function (item, index) {
        if (item.el === el) {
          found = index;
        }
      });
      if (found === -1) {
        return;
      }

      this._inits.splice(found, 1);
      this._validator.validate({ field: this.field });
    };

    RadioValidation.prototype.willUpdateFlags = function willUpdateFlags() {
      var _this3 = this;

      var touched = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

      each(this._inits, function (item, index) {
        touched && _this3.willUpdateTouched(item.el, 'blur');
        _this3.willUpdateDirty(item.el);
        _this3.willUpdateModified(item.el);
      });
    };

    RadioValidation.prototype.reset = function reset() {
      this.resetFlags();
      each(this._inits, function (item, index) {
        item.init = item.el.checked;
        item.value = item.el.value;
      });
    };

    RadioValidation.prototype.updateClasses = function updateClasses(results) {
      var _this4 = this;

      var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      if (el) {
        // for another element
        this._updateClasses(el, results);
      } else {
        each(this._inits, function (item, index) {
          _this4._updateClasses(item.el, results);
        });
      }
    };

    RadioValidation.prototype._addItem = function _addItem(el, initial) {
      var item = {
        el: el,
        init: el.checked,
        value: el.value,
        initial: initial
      };

      var classIds = el.getAttribute(VALIDATE_UPDATE);
      if (classIds) {
        el.removeAttribute(VALIDATE_UPDATE);
        item.classIds = classIds.split(',');
      }

      this._inits.push(item);
      return item;
    };

    RadioValidation.prototype._setChecked = function _setChecked(value, el, item) {
      if (el.value === value) {
        el.checked = true;
        this._init = el.checked;
        item.init = el.checked;
        item.value = value;
      }
    };

    RadioValidation.prototype._getValue = function _getValue(el) {
      var _this5 = this;

      if (!this._inits || this._inits.length === 0) {
        return el.checked;
      } else {
        var _ret = function () {
          var vals = [];
          each(_this5._inits, function (item, index) {
            item.el.checked && vals.push(item.el.value);
          });
          return {
            v: vals
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret)) === "object") return _ret.v;
      }
    };

    RadioValidation.prototype._getClassIds = function _getClassIds(el) {
      var classIds = void 0;
      each(this._inits, function (item, index) {
        if (item.el === el) {
          classIds = item.classIds;
        }
      });
      return classIds;
    };

    RadioValidation.prototype._checkModified = function _checkModified(target) {
      var _this6 = this;

      if (this._inits.length === 0) {
        return this._init !== target.checked;
      } else {
        var _ret2 = function () {
          var modified = false;
          each(_this6._inits, function (item, index) {
            if (!modified) {
              modified = item.init !== item.el.checked;
            }
          });
          return {
            v: modified
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret2)) === "object") return _ret2.v;
      }
    };

    return RadioValidation;
  }(BaseValidation);

  /**
   * SelectValidation class
   */

  var SelectValidation = function (_BaseValidation) {
    babelHelpers.inherits(SelectValidation, _BaseValidation);

    function SelectValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
      babelHelpers.classCallCheck(this, SelectValidation);

      var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

      _this._multiple = _this._el.hasAttribute('multiple');
      return _this;
    }

    SelectValidation.prototype.manageElement = function manageElement(el, initial) {
      var _this2 = this;

      var scope = this._getScope();
      var model = this._model;

      this._initial = initial;

      var classIds = el.getAttribute(VALIDATE_UPDATE);
      if (classIds) {
        el.removeAttribute(VALIDATE_UPDATE);
        this._classIds = classIds.split(',');
      }

      if (model) {
        var value = this._evalModel(model, this._filters);
        var values = !Array.isArray(value) ? [value] : value;
        this._setOption(values, el);
        this._unwatch = scope.$watch(model, function (val, old) {
          var values1 = !Array.isArray(val) ? [val] : val;
          var values2 = !Array.isArray(old) ? [old] : old;
          if (values1.slice().sort().toString() !== values2.slice().sort().toString()) {
            if (_this2.guardValidate(el, 'change')) {
              return;
            }

            _this2.handleValidate(el, { noopable: _this2._initial });
            if (_this2._initial) {
              _this2._initial = null;
            }
          }
        });
      }
    };

    SelectValidation.prototype.unmanageElement = function unmanageElement(el) {
      this._unwatch && this._unwatch();
    };

    SelectValidation.prototype.reset = function reset() {
      this.resetFlags();
    };

    SelectValidation.prototype._getValue = function _getValue(el) {
      var ret = [];

      for (var i = 0, l = el.options.length; i < l; i++) {
        var option = el.options[i];
        if (!option.disabled && option.selected) {
          ret.push(option.value);
        }
      }

      return ret;
    };

    SelectValidation.prototype._setOption = function _setOption(values, el) {
      for (var i = 0, l = values.length; i < l; i++) {
        var value = values[i];
        for (var j = 0, m = el.options.length; j < m; j++) {
          var option = el.options[j];
          if (!option.disabled && option.value === value && (!option.hasAttribute('selected') || !option.selected)) {
            option.selected = true;
          }
        }
      }
    };

    SelectValidation.prototype._checkModified = function _checkModified(target) {
      var values = this._getValue(target).slice().sort();
      if (this._init.length !== values.length) {
        return true;
      } else {
        var inits = this._init.slice().sort();
        return inits.toString() !== values.toString();
      }
    };

    return SelectValidation;
  }(BaseValidation);

  /**
   * Validator class
   */

  var Validator$1 = function () {
    function Validator(name, dir, groups, classes) {
      var _this = this;

      babelHelpers.classCallCheck(this, Validator);

      this.name = name;

      this._scope = {};
      this._dir = dir;
      this._validations = {};
      this._checkboxValidations = {};
      this._radioValidations = {};
      this._groups = groups;
      this._groupValidations = {};
      this._events = {};
      this._modified = false;
      this._classes = classes;

      each(groups, function (group) {
        _this._groupValidations[group] = [];
      });
    }

    Validator.prototype.enableReactive = function enableReactive() {
      var vm = this._dir.vm;

      // define the validation scope
      exports$1.Vue.util.defineReactive(vm, this.name, this._scope);
      vm._validatorMaps[this.name] = this;

      // define the validation resetting meta method to vue instance
      this._defineResetValidation();

      // define the validate manually meta method to vue instance
      this._defineValidate();

      // define manually the validation errors
      this._defineSetValidationErrors();
    };

    Validator.prototype.disableReactive = function disableReactive() {
      var vm = this._dir.vm;
      vm.$setValidationErrors = null;
      delete vm['$setValidationErrors'];
      vm.$validate = null;
      delete vm['$validate'];
      vm.$validatorReset = null;
      delete vm['$validatorReset'];
      vm._validatorMaps[this.name] = null;
      delete vm._validatorMaps[this.name];
      vm[this.name] = null;
      delete vm[this.name];
    };

    Validator.prototype.registerEvents = function registerEvents() {
      var isSimplePath = exports$1.Vue.parsers.expression.isSimplePath;

      var attrs = this._dir.el.attributes;
      for (var i = 0, l = attrs.length; i < l; i++) {
        var event = attrs[i].name;
        if (REGEX_EVENT.test(event)) {
          var value = attrs[i].value;
          if (isSimplePath(value)) {
            value += '.apply(this, $arguments)';
          }
          event = event.replace(REGEX_EVENT, '');
          this._events[this._getEventName(event)] = this._dir.vm.$eval(value, true);
        }
      }
    };

    Validator.prototype.unregisterEvents = function unregisterEvents() {
      var _this2 = this;

      each(this._events, function (handler, event) {
        _this2._events[event] = null;
        delete _this2._events[event];
      });
    };

    Validator.prototype.manageValidation = function manageValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
      var validation = null;

      if (el.tagName === 'SELECT') {
        validation = this._manageSelectValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
      } else if (el.type === 'checkbox') {
        validation = this._manageCheckboxValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
      } else if (el.type === 'radio') {
        validation = this._manageRadioValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
      } else {
        validation = this._manageBaseValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
      }

      validation.setValidationClasses(this._classes);

      return validation;
    };

    Validator.prototype.unmanageValidation = function unmanageValidation(field, el) {
      if (el.type === 'checkbox') {
        this._unmanageCheckboxValidation(field, el);
      } else if (el.type === 'radio') {
        this._unmanageRadioValidation(field, el);
      } else if (el.tagName === 'SELECT') {
        this._unmanageSelectValidation(field, el);
      } else {
        this._unmanageBaseValidation(field, el);
      }
    };

    Validator.prototype.addGroupValidation = function addGroupValidation(group, field) {
      var indexOf = exports$1.Vue.util.indexOf;

      var validation = this._getValidationFrom(field);
      var validations = this._groupValidations[group];

      validations && !~indexOf(validations, validation) && validations.push(validation);
    };

    Validator.prototype.removeGroupValidation = function removeGroupValidation(group, field) {
      var validation = this._getValidationFrom(field);
      var validations = this._groupValidations[group];

      validations && pull(validations, validation);
    };

    Validator.prototype.validate = function validate() {
      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _ref$el = _ref.el;
      var el = _ref$el === undefined ? null : _ref$el;
      var _ref$field = _ref.field;
      var field = _ref$field === undefined ? null : _ref$field;
      var _ref$touched = _ref.touched;
      var touched = _ref$touched === undefined ? false : _ref$touched;
      var _ref$noopable = _ref.noopable;
      var noopable = _ref$noopable === undefined ? false : _ref$noopable;
      var _ref$cb = _ref.cb;
      var cb = _ref$cb === undefined ? null : _ref$cb;

      if (!field) {
        // all
        each(this.validations, function (validation, key) {
          validation.willUpdateFlags(touched);
        });
        this._validates(cb);
      } else {
        // each field
        this._validate(field, touched, noopable, el, cb);
      }
    };

    Validator.prototype.setupScope = function setupScope() {
      var _this3 = this;

      this._defineProperties(function () {
        return _this3.validations;
      }, function () {
        return _this3._scope;
      });

      each(this._groups, function (name) {
        var validations = _this3._groupValidations[name];
        var group = {};
        exports$1.Vue.set(_this3._scope, name, group);
        _this3._defineProperties(function () {
          return validations;
        }, function () {
          return group;
        });
      });
    };

    Validator.prototype.waitFor = function waitFor(cb) {
      var method = '$activateValidator';
      var vm = this._dir.vm;

      vm[method] = function () {
        cb();
        vm[method] = null;
      };
    };

    Validator.prototype._defineResetValidation = function _defineResetValidation() {
      var _this4 = this;

      this._dir.vm.$resetValidation = function (cb) {
        _this4._resetValidation(cb);
      };
    };

    Validator.prototype._defineValidate = function _defineValidate() {
      var _this5 = this;

      this._dir.vm.$validate = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var field = null;
        var touched = false;
        var cb = null;

        each(args, function (arg, index) {
          if (typeof arg === 'string') {
            field = arg;
          } else if (typeof arg === 'boolean') {
            touched = arg;
          } else if (typeof arg === 'function') {
            cb = arg;
          }
        });

        _this5.validate({ field: field, touched: touched, cb: cb });
      };
    };

    Validator.prototype._defineSetValidationErrors = function _defineSetValidationErrors() {
      var _this6 = this;

      this._dir.vm.$setValidationErrors = function (errors) {
        _this6._setValidationErrors(errors);
      };
    };

    Validator.prototype._validate = function _validate(field) {
      var touched = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
      var noopable = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

      var _this7 = this;

      var el = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
      var cb = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];

      var scope = this._scope;

      var validation = this._getValidationFrom(field);
      if (validation) {
        validation.willUpdateFlags(touched);
        validation.validate(function (results) {
          exports$1.Vue.set(scope, field, results);
          _this7._fireEvents();
          cb && cb();
        }, noopable, el);
      }
    };

    Validator.prototype._validates = function _validates(cb) {
      var _this8 = this;

      var scope = this._scope;

      this._runValidates(function (validation, key, done) {
        validation.validate(function (results) {
          exports$1.Vue.set(scope, key, results);
          done();
        });
      }, function () {
        // finished
        _this8._fireEvents();
        cb && cb();
      });
    };

    Validator.prototype._getValidationFrom = function _getValidationFrom(field) {
      return this._validations[field] || this._checkboxValidations[field] && this._checkboxValidations[field].validation || this._radioValidations[field] && this._radioValidations[field].validation;
    };

    Validator.prototype._resetValidation = function _resetValidation(cb) {
      each(this.validations, function (validation, key) {
        validation.reset();
      });
      this._validates(cb);
    };

    Validator.prototype._setValidationErrors = function _setValidationErrors(errors) {
      var _this9 = this;

      var extend = exports$1.Vue.util.extend;

      // make tempolaly errors

      var temp = {};
      each(errors, function (error, index) {
        if (!temp[error.field]) {
          temp[error.field] = [];
        }
        temp[error.field].push(error);
      });

      // set errors
      each(temp, function (values, field) {
        var results = _this9._scope[field];
        var newResults = {};

        each(values, function (error) {
          if (error.validator) {
            results[error.validator] = error.message;
          }
        });

        results.valid = false;
        results.invalid = true;
        results.errors = values;
        extend(newResults, results);

        var validation = _this9._getValidationFrom(field);
        validation.willUpdateClasses(newResults, validation.el);

        exports$1.Vue.set(_this9._scope, field, newResults);
      });
    };

    Validator.prototype._manageBaseValidation = function _manageBaseValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
      var validation = this._validations[field] = new BaseValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
      validation.manageElement(el, initial);
      return validation;
    };

    Validator.prototype._unmanageBaseValidation = function _unmanageBaseValidation(field, el) {
      var validation = this._validations[field];
      if (validation) {
        validation.unmanageElement(el);
        exports$1.Vue.delete(this._scope, field);
        this._validations[field] = null;
        delete this._validations[field];
      }
    };

    Validator.prototype._manageCheckboxValidation = function _manageCheckboxValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
      var validationSet = this._checkboxValidations[field];
      if (!validationSet) {
        var validation = new CheckboxValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
        validationSet = { validation: validation, elements: 0 };
        this._checkboxValidations[field] = validationSet;
      }

      validationSet.elements++;
      validationSet.validation.manageElement(el, initial);
      return validationSet.validation;
    };

    Validator.prototype._unmanageCheckboxValidation = function _unmanageCheckboxValidation(field, el) {
      var validationSet = this._checkboxValidations[field];
      if (validationSet) {
        validationSet.elements--;
        validationSet.validation.unmanageElement(el);
        if (validationSet.elements === 0) {
          exports$1.Vue.delete(this._scope, field);
          this._checkboxValidations[field] = null;
          delete this._checkboxValidations[field];
        }
      }
    };

    Validator.prototype._manageRadioValidation = function _manageRadioValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
      var validationSet = this._radioValidations[field];
      if (!validationSet) {
        var validation = new RadioValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
        validationSet = { validation: validation, elements: 0 };
        this._radioValidations[field] = validationSet;
      }

      validationSet.elements++;
      validationSet.validation.manageElement(el, initial);
      return validationSet.validation;
    };

    Validator.prototype._unmanageRadioValidation = function _unmanageRadioValidation(field, el) {
      var validationSet = this._radioValidations[field];
      if (validationSet) {
        validationSet.elements--;
        validationSet.validation.unmanageElement(el);
        if (validationSet.elements === 0) {
          exports$1.Vue.delete(this._scope, field);
          this._radioValidations[field] = null;
          delete this._radioValidations[field];
        }
      }
    };

    Validator.prototype._manageSelectValidation = function _manageSelectValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
      var validation = this._validations[field] = new SelectValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
      validation.manageElement(el, initial);
      return validation;
    };

    Validator.prototype._unmanageSelectValidation = function _unmanageSelectValidation(field, el) {
      var validation = this._validations[field];
      if (validation) {
        validation.unmanageElement(el);
        exports$1.Vue.delete(this._scope, field);
        this._validations[field] = null;
        delete this._validations[field];
      }
    };

    Validator.prototype._fireEvent = function _fireEvent(type) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var handler = this._events[this._getEventName(type)];
      handler && this._dir.vm.$nextTick(function () {
        handler.apply(null, args);
      });
    };

    Validator.prototype._fireEvents = function _fireEvents() {
      var scope = this._scope;

      scope.touched && this._fireEvent('touched');
      scope.dirty && this._fireEvent('dirty');

      if (this._modified !== scope.modified) {
        this._fireEvent('modified', scope.modified);
        this._modified = scope.modified;
      }

      var valid = scope.valid;
      this._fireEvent(valid ? 'valid' : 'invalid');
    };

    Validator.prototype._getEventName = function _getEventName(type) {
      return this.name + ':' + type;
    };

    Validator.prototype._defineProperties = function _defineProperties(validationsGetter, targetGetter) {
      var _this10 = this;

      var bind = exports$1.Vue.util.bind;

      each({
        valid: { fn: this._defineValid, arg: validationsGetter },
        invalid: { fn: this._defineInvalid, arg: targetGetter },
        touched: { fn: this._defineTouched, arg: validationsGetter },
        untouched: { fn: this._defineUntouched, arg: targetGetter },
        modified: { fn: this._defineModified, arg: validationsGetter },
        dirty: { fn: this._defineDirty, arg: validationsGetter },
        pristine: { fn: this._definePristine, arg: targetGetter },
        errors: { fn: this._defineErrors, arg: validationsGetter }
      }, function (descriptor, name) {
        Object.defineProperty(targetGetter(), name, {
          enumerable: true,
          configurable: true,
          get: function get() {
            return bind(descriptor.fn, _this10)(descriptor.arg);
          }
        });
      });
    };

    Validator.prototype._runValidates = function _runValidates(fn, cb) {
      var length = Object.keys(this.validations).length;

      var count = 0;
      each(this.validations, function (validation, key) {
        fn(validation, key, function () {
          ++count;
          count >= length && cb();
        });
      });
    };

    Validator.prototype._walkValidations = function _walkValidations(validations, property, condition) {
      var _this11 = this;

      var hasOwn = exports$1.Vue.util.hasOwn;
      var ret = condition;

      each(validations, function (validation, key) {
        if (ret === !condition) {
          return;
        }
        if (hasOwn(_this11._scope, validation.field)) {
          var target = _this11._scope[validation.field];
          if (target && target[property] === !condition) {
            ret = !condition;
          }
        }
      });

      return ret;
    };

    Validator.prototype._defineValid = function _defineValid(validationsGetter) {
      return this._walkValidations(validationsGetter(), 'valid', true);
    };

    Validator.prototype._defineInvalid = function _defineInvalid(scopeGetter) {
      return !scopeGetter().valid;
    };

    Validator.prototype._defineTouched = function _defineTouched(validationsGetter) {
      return this._walkValidations(validationsGetter(), 'touched', false);
    };

    Validator.prototype._defineUntouched = function _defineUntouched(scopeGetter) {
      return !scopeGetter().touched;
    };

    Validator.prototype._defineModified = function _defineModified(validationsGetter) {
      return this._walkValidations(validationsGetter(), 'modified', false);
    };

    Validator.prototype._defineDirty = function _defineDirty(validationsGetter) {
      return this._walkValidations(validationsGetter(), 'dirty', false);
    };

    Validator.prototype._definePristine = function _definePristine(scopeGetter) {
      return !scopeGetter().dirty;
    };

    Validator.prototype._defineErrors = function _defineErrors(validationsGetter) {
      var _this12 = this;

      var hasOwn = exports$1.Vue.util.hasOwn;
      var isPlainObject = exports$1.Vue.util.isPlainObject;
      var errors = [];

      each(validationsGetter(), function (validation, key) {
        if (hasOwn(_this12._scope, validation.field)) {
          var target = _this12._scope[validation.field];
          if (target && !empty(target.errors)) {
            each(target.errors, function (err, index) {
              var error = { field: validation.field };
              if (isPlainObject(err)) {
                if (err.validator) {
                  error.validator = err.validator;
                }
                error.message = err.message;
              } else if (typeof err === 'string') {
                error.message = err;
              }
              errors.push(error);
            });
          }
        }
      });

      return empty(errors) ? undefined : errors.sort(function (a, b) {
        return a.field < b.field ? -1 : 1;
      });
    };

    babelHelpers.createClass(Validator, [{
      key: 'validations',
      get: function get() {
        var extend = exports$1.Vue.util.extend;

        var ret = {};
        extend(ret, this._validations);

        each(this._checkboxValidations, function (dataset, key) {
          ret[key] = dataset.validation;
        });

        each(this._radioValidations, function (dataset, key) {
          ret[key] = dataset.validation;
        });

        return ret;
      }
    }]);
    return Validator;
  }();

  function Validator (Vue) {
    var FragmentFactory = Vue.FragmentFactory;
    var vIf = Vue.directive('if');
    var _Vue$util = Vue.util;
    var isArray = _Vue$util.isArray;
    var isPlainObject = _Vue$util.isPlainObject;
    var createAnchor = _Vue$util.createAnchor;
    var replace = _Vue$util.replace;
    var extend = _Vue$util.extend;
    var camelize = _Vue$util.camelize;

    /**
     * `validator` element directive
     */

    Vue.elementDirective('validator', {
      params: ['name', 'groups', 'lazy', 'classes'],

      bind: function bind() {
        var params = this.params;

        if ('development' !== 'production' && !params.name) {
          warn('validator element requires a \'name\' attribute: ' + '(e.g. <validator name="validator1">...</validator>)');
          return;
        }

        this.validatorName = '$' + camelize(params.name);
        if (!this.vm._validatorMaps) {
          throw new Error('Invalid validator management error');
        }

        var classes = {};
        if (isPlainObject(this.params.classes)) {
          classes = this.params.classes;
        }

        this.setupValidator(classes);
        this.setupFragment(params.lazy);
      },
      unbind: function unbind() {
        this.teardownFragment();
        this.teardownValidator();
      },
      getGroups: function getGroups() {
        var params = this.params;
        var groups = [];

        if (params.groups) {
          if (isArray(params.groups)) {
            groups = params.groups;
          } else if (!isPlainObject(params.groups) && typeof params.groups === 'string') {
            groups.push(params.groups);
          }
        }

        return groups;
      },
      setupValidator: function setupValidator(classes) {
        var validator = this.validator = new Validator$1(this.validatorName, this, this.getGroups(), classes);
        validator.enableReactive();
        validator.setupScope();
        validator.registerEvents();
      },
      teardownValidator: function teardownValidator() {
        this.validator.unregisterEvents();
        this.validator.disableReactive();

        if (this.validatorName) {
          this.validatorName = null;
          this.validator = null;
        }
      },
      setupFragment: function setupFragment(lazy) {
        var _this = this;

        var vm = this.vm;

        this.validator.waitFor(function () {
          _this.anchor = createAnchor('vue-validator');
          replace(_this.el, _this.anchor);
          extend(vm.$options, { _validator: _this.validatorName });
          _this.factory = new FragmentFactory(vm, _this.el.innerHTML);
          vIf.insert.call(_this);
        });

        !lazy && vm.$activateValidator();
      },
      teardownFragment: function teardownFragment() {
        vIf.unbind.call(this);
      }
    });
  }

  function ValidatorError (Vue) {
    /**
     * ValidatorError component
     */

    var error = {
      name: 'validator-error',

      props: {
        field: {
          type: String,
          required: true
        },
        validator: {
          type: String
        },
        message: {
          type: String,
          required: true
        },
        partial: {
          type: String,
          default: 'validator-error-default'
        }
      },

      template: '<div><partial :name="partial"></partial></div>',

      partials: {}
    };

    // only use ValidatorError component
    error.partials['validator-error-default'] = '<p>{{field}}: {{message}}</p>';

    return error;
  }

  function Errors (Vue) {
    var _ = Vue.util;
    var error = ValidatorError(Vue); // import ValidatorError component

    /**
     * ValidatorErrors component
     */

    var errors = {
      name: 'validator-errors',

      props: {
        validation: {
          type: Object,
          required: true
        },
        group: {
          type: String,
          default: null
        },
        field: {
          type: String,
          default: null
        },
        component: {
          type: String,
          default: 'validator-error'
        }
      },

      computed: {
        errors: function errors() {
          var _this = this;

          if (this.group !== null) {
            return this.validation[this.group].errors;
          } else if (this.field !== null) {
            var target = this.validation[this.field];
            if (!target.errors) {
              return;
            }

            return target.errors.map(function (error) {
              var err = { field: _this.field };
              if (_.isPlainObject(error)) {
                if (error.validator) {
                  err.validator = error.validator;
                }
                err.message = error.message;
              } else if (typeof error === 'string') {
                err.message = error;
              }
              return err;
            });
          } else {
            return this.validation.errors;
          }
        }
      },

      template: '<template v-for="error in errors">' + '<component :is="component" :partial="partial" :field="error.field" :validator="error.validator" :message="error.message">' + '</component>' + '</template>',

      components: {}
    };

    // define 'partial' prop
    errors.props['partial'] = error.props['partial'];

    // only use ValidatorErrors component
    errors.components[error.name] = error;

    // install ValidatorErrors component
    Vue.component(errors.name, errors);

    return errors;
  }

  /**
   * plugin
   *
   * @param {Function} Vue
   * @param {Object} options
   */

  function plugin(Vue) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (plugin.installed) {
      warn('already installed.');
      return;
    }

    exports$1.Vue = Vue;
    Asset(Vue);
    Errors(Vue);

    Override(Vue);
    Validator(Vue);
    ValidateClass(Vue);
    Validate(Vue);
  }

  plugin.version = '2.1.6';

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
  }

  return plugin;

}));
var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var vm = new Vue({

	http: {
      root: '/root',
      headers: {
        'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
      }
    },

	el: '#UserController',

	data: {
		newUser: {
			id: '',
			name: '',
			email: '',
			address: ''
		},

		success: false,
		edit: false
	},

	methods: {

		fetchUser: function () {
			this.$http.get('/api/users').then((data) => {
    		this.$set('users', data.json())
   		})
		},

		RemoveUser: function (id) {
			var ConfirmBox = confirm("Are you sure, you want to delete this User?")

			if(ConfirmBox) this.$http.delete('/api/users/' + id)

			this.fetchUser ()
			console.log(this.fetchUser())
		},

		EditUser: function (id) {
			var user = this.newUser

			this.newUser = { id: '', name: '', email: '', address: ''}

			this.$http.patch('/api/users/' + id, user, function (data) {
				
			})

			this.fetchUser ()
			console.log(this.fetchUser())


			this.edit = false

		},

		ShowUser: function (id) {
			this.edit = true
			
			this.$http.get('/api/users/' + id).then((data) => {
	    		this.$set('user', data.json())
	    		this.newUser.id = this.user.id
	    		this.newUser.name = this.user.name
	    		this.newUser.email = this.user.email
	    		this.newUser.address = this.user.address

   		})
			
		},
		AddNewUser: function () {

			var user = this.newUser

			//Clear form input
			this.newUser = { name:'', email:'', address:''}
			
			//Send Post request
			this.$http.post('/api/users', user ) 
			
			//reload page
			this.fetchUser ()
			console.log(this.fetchUser())

			// Show success message
			self = this
			this.success = true
			setTimeout(function () {
				self.success = false
			}, 5000)

		
		}
	},

	computed: {
		validation: function () {
			return {
				name: !!this.newUser.name.trim(),
				email: emailRE.test(this.newUser.email),
				address: !!this.newUser.address.trim()
			}
		},

		isValid: function () {
			var validation = this.validation
			return Object.keys(validation).every(function(key){
				return validation[key]
			})
		}
	},



	ready: function () {
		this.fetchUser ()
	}
});

//# sourceMappingURL=vendor.js.map
