"use strict";(self.webpackChunkn2_trees=self.webpackChunkn2_trees||[]).push([[345],{59447:(e,t,r)=>{r.d(t,{r:()=>o});class o{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){var r;return null===(r=this._outer.get(e))||void 0===r?void 0:r.get(t)}set(e,t,r){const o=this._outer.get(e);o?o.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}},60345:(e,t,r)=>{r.r(t),r.d(t,{BufferObject:()=>o.f,FramebufferObject:()=>c.X,Program:()=>n.$,ProgramCache:()=>s.G,Renderbuffer:()=>a.r,ShaderCompiler:()=>i.B,Texture:()=>f.x,VertexArrayObject:()=>u.U,createContext:()=>d.kr,createProgram:()=>l.H,glslifyDefineMap:()=>h.K});var o=r(44070),c=r(53634),n=r(47428),s=r(68267),a=r(15880),i=r(56648),f=r(57808),u=r(45412),h=r(65706),l=r(96721),d=r(83826)},68267:(e,t,r)=>{r.d(t,{G:()=>n});var o=r(59447),c=r(47428);class n{constructor(e){this._rctx=e,this._store=new o.r}dispose(){this._store.forEach((e=>e.forEach((e=>e.dispose())))),this._store.clear()}acquire(e,t,r,o){const n=this._store.get(e,t);if(null!=n)return n.ref(),n;const s=new c.$(this._rctx,e,t,r,o);return s.ref(),this._store.set(e,t,s),s}get test(){let e=0;return this._store.forEach((t=>t.forEach((t=>e+=t.hasGLName?2:1)))),{cachedWebGLProgramObjects:e}}}},65706:(e,t,r)=>{function o(e){const{options:t,value:r}=e;return"number"==typeof t[r]}function c(e){let t="";for(const r in e){const c=e[r];if("boolean"==typeof c)c&&(t+="#define ".concat(r,"\n"));else if("number"==typeof c)t+="#define ".concat(r," ").concat(c.toFixed(),"\n");else if("object"==typeof c)if(o(c)){const{value:e,options:o,namespace:n}=c,s=n?"".concat(n,"_"):"";for(const r in o)t+="#define ".concat(s).concat(r," ").concat(o[r].toFixed(),"\n");t+="#define ".concat(r," ").concat(s).concat(e,"\n")}else{const e=c.options;let o=0;for(const r in e)t+="#define ".concat(e[r]," ").concat((o++).toFixed(),"\n");t+="#define ".concat(r," ").concat(e[c.value],"\n")}}return t}r.d(t,{K:()=>c})}}]);
//# sourceMappingURL=345.1fa10a2f.chunk.js.map