"use strict";(self.webpackChunkn2_trees=self.webpackChunkn2_trees||[]).push([[6149,1700],{11186:(t,n,e)=>{e.d(n,{a:()=>o,b:()=>c,c:()=>l,d:()=>r,e:()=>a,f:()=>u,n:()=>s,s:()=>f,t:()=>i});e(93169),e(32718);function r(t,n,e){o(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function o(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!==Math.ceil(n.length/o))return t;const l=t.length/r,i=e[0],u=e[1],f=e[2],c=e[4],a=e[5],s=e[6],d=e[8],p=e[9],g=e[10],y=e[12],v=e[13],h=e[14];let m=0,A=0;for(let S=0;S<l;S++){const e=n[m],l=n[m+1],S=n[m+2];t[A]=i*e+c*l+d*S+y,t[A+1]=u*e+a*l+p*S+v,t[A+2]=f*e+s*l+g*S+h,m+=o,A+=r}return t}function l(t,n,e){i(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function i(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!==Math.ceil(n.length/o))return;const l=t.length/r,i=e[0],u=e[1],f=e[2],c=e[3],a=e[4],s=e[5],d=e[6],p=e[7],g=e[8];let y=0,v=0;for(let h=0;h<l;h++){const e=n[y],l=n[y+1],h=n[y+2];t[v]=i*e+c*l+d*h,t[v+1]=u*e+a*l+p*h,t[v+2]=f*e+s*l+g*h,y+=o,v+=r}}function u(t,n,e){f(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function f(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;const l=Math.min(t.length/r,n.length/o);let i=0,u=0;for(let f=0;f<l;f++)t[u]=e*n[i],t[u+1]=e*n[i+1],t[u+2]=e*n[i+2],i+=o,u+=r;return t}function c(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;const l=t.length/r;if(l!==Math.ceil(n.length/o))return t;let i=0,u=0;for(let f=0;f<l;f++)t[u]=n[i]+e[0],t[u+1]=n[i+1]+e[1],t[u+2]=n[i+2]+e[2],i+=o,u+=r;return t}function a(t,n){s(t.typedBuffer,n.typedBuffer,t.typedBufferStride,n.typedBufferStride)}function s(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e;const o=Math.min(t.length/e,n.length/r);let l=0,i=0;for(let u=0;u<o;u++){const o=n[l],u=n[l+1],f=n[l+2],c=o*o+u*u+f*f;if(c>0){const n=1/Math.sqrt(c);t[i]=n*o,t[i+1]=n*u,t[i+2]=n*f}l+=r,i+=e}}Object.freeze(Object.defineProperty({__proto__:null,normalize:s,normalizeView:a,scale:f,scaleView:u,shiftRight:function(t,n,e){const r=Math.min(t.count,n.count),o=t.typedBuffer,l=t.typedBufferStride,i=n.typedBuffer,u=n.typedBufferStride;let f=0,c=0;for(let a=0;a<r;a++)o[c]=i[f]>>e,o[c+1]=i[f+1]>>e,o[c+2]=i[f+2]>>e,f+=u,c+=l},transformMat3:i,transformMat3View:l,transformMat4:o,transformMat4View:r,translate:c},Symbol.toStringTag,{value:"Module"}))},6754:(t,n,e)=>{e.d(n,{a:()=>o,b:()=>u,n:()=>i,s:()=>f,t:()=>l});e(93169);var r=e(32718);function o(t,n,e){l(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function l(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!=n.length/o)return;const l=t.length/r,i=e[0],u=e[1],f=e[2],c=e[3],a=e[4],s=e[5],d=e[6],p=e[7],g=e[8];let y=0,v=0;for(let h=0;h<l;h++){const e=n[y],l=n[y+1],h=n[y+2],m=n[y+3];t[v]=i*e+c*l+d*h,t[v+1]=u*e+a*l+p*h,t[v+2]=f*e+s*l+g*h,t[v+3]=m,y+=o,v+=r}}function i(t,n){const e=Math.min(t.count,n.count),r=t.typedBuffer,o=t.typedBufferStride,l=n.typedBuffer,i=n.typedBufferStride;for(let u=0;u<e;u++){const t=u*o,n=u*i,e=l[n],f=l[n+1],c=l[n+2],a=e*e+f*f+c*c;if(a>0){const n=1/Math.sqrt(a);r[t]=n*e,r[t+1]=n*f,r[t+2]=n*c}}}function u(t,n,e){f(t.typedBuffer,n,e,t.typedBufferStride)}function f(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4;const o=Math.min(t.length/r,n.count),l=n.typedBuffer,i=n.typedBufferStride;let u=0,f=0;for(let c=0;c<o;c++)t[f]=e*l[u],t[f+1]=e*l[u+1],t[f+2]=e*l[u+2],t[f+3]=e*l[u+3],u+=i,f+=r}Object.freeze(Object.defineProperty({__proto__:null,normalize:i,scale:f,scaleView:u,transformMat3:l,transformMat3View:o,transformMat4:function(t,n,e){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o;if(t.length/o!=n.length/l)return void r.Z.getLogger("esri.views.3d.support.buffer.math").error("source and destination buffers need to have the same number of elements");const i=t.length/o,u=e[0],f=e[1],c=e[2],a=e[3],s=e[4],d=e[5],p=e[6],g=e[7],y=e[8],v=e[9],h=e[10],m=e[11],A=e[12],S=e[13],B=e[14],T=e[15];let M=0,w=0;for(let r=0;r<i;r++){const e=n[M],r=n[M+1],i=n[M+2],P=n[M+3];t[w]=u*e+s*r+y*i+A*P,t[w+1]=f*e+d*r+v*i+S*P,t[w+2]=c*e+p*r+h*i+B*P,t[w+3]=a*e+g*r+m*i+T*P,M+=l,w+=o}},transformMat4View:function(t,n,e){if(t.count!==n.count)return;const r=t.count,o=e[0],l=e[1],i=e[2],u=e[3],f=e[4],c=e[5],a=e[6],s=e[7],d=e[8],p=e[9],g=e[10],y=e[11],v=e[12],h=e[13],m=e[14],A=e[15],S=t.typedBuffer,B=t.typedBufferStride,T=n.typedBuffer,M=n.typedBufferStride;for(let w=0;w<r;w++){const t=w*B,n=w*M,e=T[n],r=T[n+1],P=T[n+2],R=T[n+3];S[t]=o*e+f*r+d*P+v*R,S[t+1]=l*e+c*r+p*P+h*R,S[t+2]=i*e+a*r+g*P+m*R,S[t+3]=u*e+s*r+y*P+A*R}}},Symbol.toStringTag,{value:"Module"}))},68859:(t,n,e)=>{e.d(n,{K:()=>i});var r=e(12400),o=e(45925),l=e(50628);function i(t,n,e,r){var i,f;if((0,o.canProjectWithoutEngine)(t.spatialReference,e)){var c;u[0]=t.x,u[1]=t.y;const o=t.z;return u[2]=null!==(c=null!==o&&void 0!==o?o:r)&&void 0!==c?c:0,(0,l.projectBuffer)(u,t.spatialReference,0,n,e,0,1)}const a=(0,o.tryProjectWithZConversion)(t,e);return!!a&&(n[0]=null===a||void 0===a?void 0:a.x,n[1]=null===a||void 0===a?void 0:a.y,n[2]=null!==(i=null!==(f=null===a||void 0===a?void 0:a.z)&&void 0!==f?f:r)&&void 0!==i?i:0,!0)}const u=(0,r.Ue)()},86372:(t,n,e)=>{e.d(n,{JK:()=>u,QZ:()=>l,Rq:()=>i,bg:()=>o,mB:()=>f});var r=e(18722);function o(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t<=r.c8?n?new Array(t).fill(0):new Array(t):new Float64Array(t)}function l(t){return((0,r.kJ)(t)?t.length:t.byteLength/8)<=r.c8?Array.from(t):new Float64Array(t)}function i(t,n,e){return Array.isArray(t)?t.slice(n,n+e):t.subarray(n,n+e)}function u(t,n){for(let e=0;e<n.length;++e)t[e]=n[e];return t}function f(t){return Array.isArray(t)?new Float64Array(t):t}},11700:(t,n,e)=>{e.d(n,{Gi:()=>S,Iz:()=>T,M2:()=>b,To:()=>P,VS:()=>F,XO:()=>w,Yk:()=>M,pn:()=>B,project:()=>C,w9:()=>R,wi:()=>E});var r=e(16889),o=e(29303),l=e(21389),i=e(29134),u=e(7025),f=e(32035),c=e(12400),a=e(45925),s=e(29691),d=e(86452),p=e(50628),g=e(86372),y=(e(22186),e(92975)),v=e(81753),h=e(25158),m=e(11186),A=e(6754);const S="Projection may be possible after calling projection.load().";function B(t,n,e,r){t.error("Failed to project from (wkid:".concat(n.wkid,") to (wkid:").concat(e.wkid,").").concat(r?" ":"").concat(r))}function T(t,n,e,r,o){return U(_.TO_PCPF,h.ct.fromTypedArray(t),O.NORMAL,h.fP.fromTypedArray(n),h.fP.fromTypedArray(e),r,h.ct.fromTypedArray(o))?o:null}function M(t,n,e,r,o){return U(_.FROM_PCPF,h.ct.fromTypedArray(t),O.NORMAL,h.fP.fromTypedArray(n),h.fP.fromTypedArray(e),r,h.ct.fromTypedArray(o))?o:null}function w(t,n,e){return(0,p.projectBuffer)(t,n,0,e,(0,s.rS)(n),0,t.length/3)?e:null}function P(t,n,e){return(0,p.projectBuffer)(t,(0,s.rS)(e),0,n,e,0,t.length/3)?n:null}function R(t,n,e){return(0,o.XL)(k,e),(0,m.t)(n,t,k),(0,r.oc)(k)&&(0,m.n)(n,n),n}function F(t,n,e){return(0,o.xO)(k,e),(0,A.t)(n,t,k),(0,r.oc)(k)&&(0,m.n)(n,n,4),n}function E(t,n,e,r,o){if(!U(_.TO_PCPF,h.ct.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),O.TANGENT,h.fP.fromTypedArray(n),h.fP.fromTypedArray(e),r,h.ct.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let l=3;l<t.length;l+=4)o[l]=t[l];return o}function b(t,n,e,r,o){if(!U(_.FROM_PCPF,h.ct.fromTypedArray(t,16),O.TANGENT,h.fP.fromTypedArray(n),h.fP.fromTypedArray(e),r,h.ct.fromTypedArray(o,16)))return null;for(let l=3;l<t.length;l+=4)o[l]=t[l];return o}var O,_,x;function N(t,n,e,r,l){switch((0,d.B)(r,e,j,r),t===_.FROM_PCPF&&(0,i.U_)(j,j),n){case O.NORMAL:return(0,o.XL)(l,j);case O.TANGENT:return(0,o.xO)(l,j)}}function U(t,n,e,r,o,l,i){if(!n)return;const u=r.count,c=(0,s.rS)(l);if(function(t){return t.isWGS84||(0,y.yW)(t)||(0,y.BZ)(t)||(0,y.V2)(t)}(l))for(let a=0;a<u;a++)o.getVec(a,G),n.getVec(a,V),(0,f.t)(V,V,N(t,e,G,c,k)),i.setVec(a,V);else for(let a=0;a<u;a++){o.getVec(a,G),n.getVec(a,V);const l=(0,v.mZ)(r.get(a,1));let u=Math.cos(l);e===O.TANGENT!=(t===_.TO_PCPF)&&(u=1/u),N(t,e,G,c,k),t===_.TO_PCPF?(k[0]*=u,k[1]*=u,k[2]*=u,k[3]*=u,k[4]*=u,k[5]*=u):(k[0]*=u,k[3]*=u,k[6]*=u,k[1]*=u,k[4]*=u,k[7]*=u),(0,f.t)(V,V,k),(0,f.n)(V,V),i.setVec(a,V)}return i}function C(t){return"local"===t.vertexSpace.type?function(t){var n,e;let{vertexSpace:r,transform:o,inSpatialReference:l,outSpatialReference:f,localMode:y,outPositions:v,positions:h}=t;const A=null!==(n=r.origin)&&void 0!==n?n:c.AG,S=null!=r.origin&&null!==(e=null===o||void 0===o?void 0:o.localMatrix)&&void 0!==e?e:u.Wd,B=(0,s.rS)(l),T=f.isWebMercator&&y||!(0,a.canProjectWithoutEngine)(l,B)?l:B;(0,d.B)(l,A,j,T),(0,i.Jp)(j,j,S);const M=null!==v&&void 0!==v?v:(0,g.bg)(h.length);return(0,m.a)(M,h,j),(0,p.projectBuffer)(M,T,0,M,f,0,M.length/3),M}(t):function(t){var n,e;let{vertexSpace:r,transform:o,outPositions:l,positions:a,inSpatialReference:s,outSpatialReference:d}=t;const y=null!=r.origin&&null!==(n=null===o||void 0===o?void 0:o.localMatrix)&&void 0!==n?n:u.Wd,v=null!==l&&void 0!==l?l:(0,g.bg)(a.length);(0,i.fS)(y,u.Wd)?(0,g.JK)(v,a):(0,m.a)(v,a,y);const h=null!==(e=r.origin)&&void 0!==e?e:c.AG;if(!(0,f.e)(h,c.AG)){const[t,n,e]=h;for(let r=0;r<v.length;r+=3)v[r]+=t,v[r+1]+=n,v[r+2]+=e}return(0,p.projectBuffer)(v,s,0,v,d,0,v.length/3)?v:null}(t)}(x=O||(O={}))[x.NORMAL=0]="NORMAL",x[x.TANGENT=1]="TANGENT",function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"}(_||(_={}));const G=(0,c.Ue)(),V=(0,c.Ue)(),j=(0,u.Ue)(),k=(0,l.Ue)()},66149:(t,n,e)=>{e.d(n,{qk:()=>S,ur:()=>w,x1:()=>A});var r=e(32718),o=e(16889),l=e(68860),i=e(29303),u=e(21389),f=e(29134),c=e(7025),a=e(32035),s=e(12400),d=e(29691),p=e(86452),g=e(68859),y=e(69048),v=e(11186),h=e(11700);const m=()=>r.Z.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function A(t,n,e){let{vertexSpace:r,spatialReference:o}=e;if("georeferenced"===r.type){const e=t;if(!(0,g.K)(n,e,o))return!1;const{origin:l}=r;return(0,a.f)(t,e,l),!0}const l=(0,d.rS)(o),i=t;if(!(0,g.K)(n,i,l))return!1;const{origin:u}=r,c=b;if(!(0,p.B)(o,u,c,l))return!1;const s=(0,f.U_)(b,c);return null!=s&&((0,a.h)(t,i,s),!0)}function S(t,n,e){const{vertexSpace:r,transform:l,vertexAttributes:u}=t,s=M(t.spatialReference,e,O.SOURCE|O.TARGET);if((0,y.vI)(r,n)&&(!l||(0,f.I6)(l.localMatrix,c.Wd))&&(0,o.Po)(s,1)){const{position:t,normal:n,tangent:r}=u,o=null===e||void 0===e?void 0:e.allowBufferReuse;return{position:o?t:t.slice(),normal:o?n:null===n||void 0===n?void 0:n.slice(),tangent:o?r:null===r||void 0===r?void 0:r.slice()}}switch(t.vertexSpace.type){case"local":return"local"===n.type?function(t,n,e,r){let{vertexAttributes:o,spatialReference:l,transform:i}=t,{origin:u}=n;const c=(0,d.rS)(l);if(!(0,p.B)(l,u,P,c))return(0,h.pn)(m(),l,c),null;if(i&&(0,f.Jp)(P,P,i.localMatrix),!(0,p.B)(l,e,R,c))return(0,h.pn)(m(),c,l),null;(0,f.U_)(R,R);const a=(0,f.Jp)(P,R,P);return T(a,l,r,O.SOURCE|O.TARGET),B(o,a)}(t,t.vertexSpace,n.origin,e):function(t,n,e,r){let{spatialReference:o,vertexAttributes:l,transform:i}=t,{origin:u}=n;const c=(0,d.rS)(o);if(!(0,p.B)(o,u,P,c))return(0,h.pn)(m(),o,c),null;i&&(0,f.Jp)(P,P,i.localMatrix),T(P,o,r,O.SOURCE);const s=new Float64Array(l.position.length),g=function(t,n,e,r){(0,v.a)(r,t,n);const o=new Float64Array(t.length);return(0,h.To)(r,o,e)?o:((0,h.pn)(m(),(0,d.rS)(e),e),null)}(l.position,P,o,s);if(!g)return null;const y=function(t,n,e,r,o){if(null==e)return null;const l=new Float32Array(e.length);return(0,h.w9)(e,l,r),(0,h.Yk)(l,t,n,o,l)?l:((0,h.pn)(m(),(0,d.rS)(o),o),null)}(g,s,l.normal,P,o);if(l.normal&&!y)return null;const A=function(t,n,e,r,o){if(null==e)return null;const l=new Float32Array(e.length);return(0,h.VS)(e,l,r),(0,h.M2)(l,t,n,o,l)?l:((0,h.pn)(m(),(0,d.rS)(o),o),null)}(g,s,l.tangent,P,o);if(l.tangent&&!A)return null;if(e){const t=(0,a.k)(E,e);(0,v.b)(g,g,t)}return{position:g,normal:y,tangent:A}}(t,t.vertexSpace,n.origin,e);case"georeferenced":return"local"===n.type?function(t,n,e,r){let{vertexAttributes:o,spatialReference:l,transform:u}=t,{origin:c}=n;const a=(0,d.rS)(l);if(!(0,p.B)(l,e,P,a))return(0,h.pn)(m(),l,a),null;const s=1/M(l,r,O.TARGET);(0,f.bA)(P,P,[s,s,s]);const g=(0,f.U_)(R,P),{position:y,normal:A,tangent:S}=function(t,n,e){if(!n)return t;if(!e){const{position:e,normal:r,tangent:o}=t;return{position:(0,v.b)(new Float64Array(e.length),e,n),tangent:o,normal:r}}const r=B(t,e.localMatrix);return(0,v.b)(r.position,r.position,n),r}(o,c,u),T=new Float64Array(y.length),w=function(t,n,e,r){const o=(0,h.XO)(t,n,r);if(!o)return(0,h.pn)(m(),n,(0,d.rS)(n)),null;const l=new Float64Array(o.length);return(0,v.a)(l,o,e),l}(y,l,g,T);if(!w)return null;const E=(0,i.XL)(F,g),b=function(t,n,e,r,o,l){if(null==t)return null;const i=null!==l&&void 0!==l?l:new Float32Array(t.length);return(0,h.Iz)(t,n,e,r,i)?((0,v.t)(i,i,o),i):((0,h.pn)(m(),r,(0,d.rS)(r)),null)}(A,y,T,l,E,A!==o.normal?A:void 0);if(!b&&A)return null;const _=function(t,n,e,r,o,l){if(null==t)return null;const i=null!==l&&void 0!==l?l:new Float32Array(t.length);return(0,h.wi)(t,n,e,r,i)?((0,v.t)(i,i,o,4),i):((0,h.pn)(m(),r,(0,d.rS)(r)),null)}(S,y,T,l,E,S!==o.tangent?S:void 0);return!_&&S?null:{position:w,normal:b,tangent:_}}(t,t.vertexSpace,n.origin,e):function(t,n,e,r){let{vertexAttributes:o,transform:l,spatialReference:i}=t,{origin:u}=n;const{position:f,normal:c,tangent:s}=l?B(o,l.localMatrix):o,d=new Float64Array(f.length);let p=f;if(u&&(p=(0,v.b)(d,p,u)),e){const t=(0,a.k)(E,e);p=(0,v.b)(d,p,t)}M(i,r,O.NONE);const g=null===r||void 0===r?void 0:r.allowBufferReuse;return{position:p!==o.position||g?p:p.slice(),normal:c!==o.normal||g?c:null===c||void 0===c?void 0:c.slice(),tangent:s!==o.tangent||g?s:null===s||void 0===s?void 0:s.slice()}}(t,t.vertexSpace,n.origin,e)}}function B(t,n){const e=new Float64Array(t.position.length);(0,v.a)(e,t.position,n);const r=t.normal?new Float32Array(t.normal.length):null,o=t.tangent?new Float32Array(t.tangent.length):null;return r&&t.normal&&(0,h.w9)(t.normal,r,n),o&&t.tangent&&(0,h.VS)(t.tangent,o,n),{position:e,normal:r,tangent:o}}function T(t,n,e,r){const o=M(n,e,r);1!==o&&(0,f.bA)(t,t,[o,o,o])}function M(t,n,e){const r=!!(e&O.SOURCE),o=!!(e&O.TARGET),l=null===n||void 0===n?void 0:n.sourceUnit,i=null===n||void 0===n?void 0:n.targetUnit;if(!l&&!i)return 1;let u=w(l,t);!r&&l&&1!==u&&(m().warn("source unit conversion not supported"),u=1);let f=1/w(i,t);return!o&&i&&1!==f&&(m().warn("target unit conversion not supported"),f=1),u*f}function w(t,n){if(null==t)return 1;const e=(0,l.r6)(n);return 1/(0,l.En)(e,"meters",t)}const P=(0,c.Ue)(),R=(0,c.Ue)(),F=(0,u.Ue)(),E=(0,s.Ue)(),b=(0,c.Ue)();var O;!function(t){t[t.NONE=0]="NONE",t[t.SOURCE=1]="SOURCE",t[t.TARGET=2]="TARGET"}(O||(O={}))}}]);
//# sourceMappingURL=6149.ecdc2b11.chunk.js.map