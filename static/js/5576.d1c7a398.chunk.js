/*! For license information please see 5576.d1c7a398.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_trees=self.webpackChunkn2_trees||[]).push([[5576],{92109:(t,e,n)=>{n.d(e,{A:()=>o,d:()=>c});var r=n(51554),i=n(92358),a=n(79730),s=n(57601);function l(t){return function(t){let{r:e,g:n,b:r}=t;e/=255,n/=255,r/=255;const i=Math.max(e,n,r),a=Math.min(e,n,r),s=i-a;if(i===a)return 0;let l=(i+a)/2;switch(i){case e:l=(n-r)/s+(n<r?6:0);break;case n:l=(r-e)/s+2;break;case r:l=(e-n)/s+4}return Math.round(60*l)}((0,a.g)(t))}const o=(0,r.GH)(class extends r.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scale="m",this.thumbnail=void 0,this.fullName=void 0,this.username=void 0,this.userId=void 0,this.label=void 0,this.thumbnailFailedToLoad=!1}render(){return this.determineContent()}determineContent(){if(this.thumbnail&&!this.thumbnailFailedToLoad)return(0,r.h)("img",{alt:this.label||"",class:"thumbnail",onError:()=>this.thumbnailFailedToLoad=!0,src:this.thumbnail});const t=this.generateInitials(),e=this.generateFillColor();return(0,r.h)("span",{"aria-label":this.label||this.fullName,class:"background",role:"figure",style:{backgroundColor:e}},t?(0,r.h)("span",{"aria-hidden":"true",class:"initials"},t):(0,r.h)("calcite-icon",{class:"icon",icon:"user",scale:this.scale}))}generateFillColor(){const{userId:t,username:e,fullName:n,el:r}=this,s=(0,i.r)(r),o=t&&"#".concat(t.substr(t.length-6)),c=e||n||"",u=o&&(0,a.i)(o)?o:function(t){let e=0;for(let r=0;r<t.length;r++)e=t.charCodeAt(r)+((e<<5)-e);let n="#";for(let r=0;r<3;r++)n+=("00"+(e>>8*r&255).toString(16)).substr(-2);return n}(c);if(!t&&!c||!(0,a.i)(u))return"var(--calcite-ui-foreground-2)";const h=l(u),d="dark"===s?20:90;return"hsl(".concat(h,", 60%, ").concat(d,"%)")}generateInitials(){const{fullName:t,username:e}=this;return t?t.trim().split(" ").map((t=>t.substring(0,1))).join(""):!!e&&e.substring(0,2)}get el(){return this}static get style(){return":host{display:inline-block;overflow:hidden;border-radius:50%}:host([scale=s]){block-size:1.5rem;inline-size:1.5rem;font-size:var(--calcite-font-size--3)}:host([scale=m]){block-size:2rem;inline-size:2rem;font-size:var(--calcite-font-size--2)}:host([scale=l]){block-size:2.75rem;inline-size:2.75rem;font-size:var(--calcite-font-size-0)}.icon{display:flex}.background{display:flex;block-size:100%;inline-size:100%;align-items:center;justify-content:center;border-radius:50%}.initials{font-weight:var(--calcite-font-weight-bold);text-transform:uppercase;color:var(--calcite-ui-text-2)}.thumbnail{block-size:100%;inline-size:100%;border-radius:50%}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-avatar",{scale:[513],thumbnail:[513],fullName:[513,"full-name"],username:[513],userId:[513,"user-id"],label:[1],thumbnailFailedToLoad:[32]}]);function c(){if("undefined"===typeof customElements)return;["calcite-avatar","calcite-icon"].forEach((t=>{switch(t){case"calcite-avatar":customElements.get(t)||customElements.define(t,o);break;case"calcite-icon":customElements.get(t)||(0,s.d)()}}))}c()},55576:(t,e,n)=>{n.r(e),n.d(e,{CalciteAvatar:()=>i,defineCustomElement:()=>a});var r=n(92109);const i=r.A,a=r.d},79730:(t,e,n)=>{n.d(e,{C:()=>p,a:()=>k,b:()=>o,c:()=>G,d:()=>A,e:()=>v,f:()=>B,g:()=>H,h:()=>b,i:()=>u,j:()=>f,k:()=>r,n:()=>S,o:()=>c,p:()=>L,r:()=>g,t:()=>R});const r=/^[0-9A-F]$/i,i=/^#[0-9A-F]{3}$/i,a=/^#[0-9A-F]{6}$/i,s=/^#[0-9A-F]{4}$/i,l=/^#[0-9A-F]{8}$/i,o=t=>Number((100*t).toFixed()),c=t=>Number((t/100).toFixed(2));function u(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return d(t,e)||f(t,e)}function h(t,e,n){return!!t&&(t.length===e&&n.test(t))}function d(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return h(t,e?5:4,e?s:i)}function f(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return h(t,e?9:7,e?l:a)}function S(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if((t=t.toLowerCase()).startsWith("#")||(t="#".concat(t)),d(t,e))return g(H(t,e));if(e&&n&&u(t,!1)){const e=d(t,!1);return g(H("".concat(t).concat(e?"f":"ff"),!0))}return t}function b(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?t.hexa():t.hex()}function g(t){const{r:e,g:n,b:r}=t,i=m(e),a=m(n),s=m(r),l="a"in t?m(255*t.a):"";return"#".concat(i).concat(a).concat(s).concat(l).toLowerCase()}function m(t){return t.toString(16).padStart(2,"0")}function A(t){var e;const n={...t,a:null!==(e=t.alpha)&&void 0!==e?e:1};return delete n.alpha,n}function v(t){var e;const n={...t,alpha:null!==(e=t.a)&&void 0!==e?e:1};return delete n.a,n}function H(t){let e,n,r,i;if(!u(t,arguments.length>1&&void 0!==arguments[1]&&arguments[1]))return null;if(3===(t=t.replace("#","")).length||4===t.length){const[a,s,l,o]=t.split("");e=parseInt("".concat(a).concat(a),16),n=parseInt("".concat(s).concat(s),16),r=parseInt("".concat(l).concat(l),16),i=parseInt("".concat(o).concat(o),16)/255}else e=parseInt(t.slice(0,2),16),n=parseInt(t.slice(2,4),16),r=parseInt(t.slice(4,6),16),i=parseInt(t.slice(6,8),16)/255;return isNaN(i)?{r:e,g:n,b:r}:{r:e,g:n,b:r,a:i}}const p={HEX:"hex",HEXA:"hexa",RGB_CSS:"rgb-css",RGBA_CSS:"rgba-css",HSL_CSS:"hsl-css",HSLA_CSS:"hsla-css"},C={RGB:"rgb",RGBA:"rgba",HSL:"hsl",HSLA:"hsla",HSV:"hsv",HSVA:"hsva"};function L(t){if("string"===typeof t){if(t.startsWith("#")){const{length:e}=t;if(4===e||7===e)return p.HEX;if(5===e||9===e)return p.HEXA}if(t.startsWith("rgba("))return p.RGBA_CSS;if(t.startsWith("rgb("))return p.RGB_CSS;if(t.startsWith("hsl("))return p.HSL_CSS;if(t.startsWith("hsla("))return p.HSLA_CSS}if("object"===typeof t){if(_(t,"r","g","b"))return _(t,"a")?C.RGBA:C.RGB;if(_(t,"h","s","l"))return _(t,"a")?C.HSLA:C.HSL;if(_(t,"h","s","v"))return _(t,"a")?C.HSVA:C.HSV}return null}function _(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return n.every((e=>e&&t&&"".concat(e)in t))}function G(t,e){return(null===t||void 0===t?void 0:t.rgb().array().toString())===(null===e||void 0===e?void 0:e.rgb().array().toString())}function k(t){return t===p.HEXA||t===p.RGBA_CSS||t===p.HSLA_CSS||t===C.RGBA||t===C.HSLA||t===C.HSVA}function B(t){return t===p.HEX?p.HEXA:t===p.RGB_CSS?p.RGBA_CSS:t===p.HSL_CSS?p.HSLA_CSS:t===C.RGB?C.RGBA:t===C.HSL?C.HSLA:t===C.HSV?C.HSVA:t}function R(t){return t===p.HEXA?p.HEX:t===p.RGBA_CSS?p.RGB_CSS:t===p.HSLA_CSS?p.HSL_CSS:t===C.RGBA?C.RGB:t===C.HSLA?C.HSL:t===C.HSVA?C.HSV:t}}}]);
//# sourceMappingURL=5576.d1c7a398.chunk.js.map