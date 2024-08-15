"use strict";(self.webpackChunkn2_trees=self.webpackChunkn2_trees||[]).push([[345],{59447:(e,t,r)=>{r.d(t,{r:()=>s});class s{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){var r;return null===(r=this._outer.get(e))||void 0===r?void 0:r.get(t)}set(e,t,r){const s=this._outer.get(e);s?s.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}},60345:(e,t,r)=>{r.r(t),r.d(t,{BufferObject:()=>s.f,FramebufferObject:()=>n.X,Program:()=>i.$,ProgramCache:()=>o.G,Renderbuffer:()=>c.r,ShaderCompiler:()=>a.B,Texture:()=>l.x,VertexArrayObject:()=>h.U,createContext:()=>d.k,createProgram:()=>f.H,glslifyDefineMap:()=>u.K});var s=r(44070),n=r(53634),i=r(47428),o=r(68267),c=r(15880),a=r(56648),l=r(57808),h=r(45412),u=r(65706),f=r(96721),d=r(83826)},68267:(e,t,r)=>{r.d(t,{G:()=>i});r(93169);var s=r(59447),n=r(47428);class i{constructor(e){this._rctx=e,this._store=new s.r}dispose(){this._store.forEach((e=>e.forEach((e=>e.dispose())))),this._store.clear()}acquire(e,t,r,s){const i=this._store.get(e,t);if(null!=i)return i.ref(),i;const o=new n.$(this._rctx,e,t,r,s);return o.ref(),this._store.set(e,t,o),o}get test(){}}},96721:(e,t,r)=>{r.d(t,{H:()=>n});var s=r(47428);function n(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return new s.$(e,r+t.shaders.vertexShader,r+t.shaders.fragmentShader,t.attributes)}},56648:(e,t,r)=>{r.d(t,{B:()=>s});class s{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;if(t.has(e))return t.get(e);const r=this._read(e);if(!r)throw new Error("cannot find shader file ".concat(e));const s=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let n=s.exec(r);const i=[];for(;null!=n;)i.push({path:n[1],start:n.index,length:n[0].length}),n=s.exec(r);let o=0,c="";return i.forEach((e=>{c+=r.slice(o,e.start),c+=t.has(e.path)?"":this._resolve(e.path,t),o=e.start+e.length})),c+=r.slice(o),t.set(e,c),c}_read(e){return this._readFile(e)}}},45412:(e,t,r)=>{r.d(t,{U:()=>l});var s=r(32718),n=r(92026),i=r(18722),o=r(8548),c=r(3384);const a=()=>s.Z.getLogger("esri.views.webgl.VertexArrayObject");let l=class{constructor(e,t,r,s){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this._context=e,this._locations=t,this._layout=r,this._buffers=s,this._indexBuffer=n,this._glName=null,this._initialized=!1}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get byteSize(){return Object.keys(this._buffers).reduce(((e,t)=>e+this._buffers[t].usedMemory),null!=this._indexBuffer?this._indexBuffer.usedMemory:0)}get layout(){return this._layout}get locations(){return this._locations}get usedMemory(){return this.byteSize+(Object.keys(this._buffers).length+(this._indexBuffer?1:0))*i.ru}dispose(){if(this._context){this._context.getBoundVAO()===this&&this._context.bindVAO(null);for(const t in this._buffers){var e;null!==(e=this._buffers[t])&&void 0!==e&&e.dispose(),delete this._buffers[t]}this._indexBuffer=(0,n.M2)(this._indexBuffer),this.disposeVAOOnly()}else(this._glName||Object.getOwnPropertyNames(this._buffers).length>0)&&a().warn("Leaked WebGL VAO")}disposeVAOOnly(){this._glName&&(this._context.gl.deleteVertexArray(this._glName),this._glName=null,this._context.instanceCounter.decrement(o._g.VertexArrayObject,this)),this._context=null}initialize(){if(this._initialized)return;const{gl:e}=this._context,t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t,this._context.instanceCounter.increment(o._g.VertexArrayObject,this),this._initialized=!0}bind(){this.initialize(),this._context.gl.bindVertexArray(this.glName)}_bindLayout(){const{_buffers:e,_layout:t,_indexBuffer:r}=this;e||a().error("Vertex buffer dictionary is empty!");const s=this._context.gl;for(const n in e){const r=e[n];r||a().error("Vertex buffer is uninitialized!");const s=t[n];s||a().error("Vertex element descriptor is empty!"),(0,c.XP)(this._context,this._locations,r,s)}null!=r&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,r.glName)}unbind(){this.initialize(),this._context.gl.bindVertexArray(null)}}},65706:(e,t,r)=>{function s(e){const{options:t,value:r}=e;return"number"==typeof t[r]}function n(e){let t="";for(const r in e){const n=e[r];if("boolean"==typeof n)n&&(t+="#define ".concat(r,"\n"));else if("number"==typeof n)t+="#define ".concat(r," ").concat(n.toFixed(),"\n");else if("object"==typeof n)if(s(n)){const{value:e,options:s,namespace:i}=n,o=i?"".concat(i,"_"):"";for(const r in s)t+="#define ".concat(o).concat(r," ").concat(s[r].toFixed(),"\n");t+="#define ".concat(r," ").concat(o).concat(e,"\n")}else{const e=n.options;let s=0;for(const r in e)t+="#define ".concat(e[r]," ").concat((s++).toFixed(),"\n");t+="#define ".concat(r," ").concat(e[n.value],"\n")}}return t}r.d(t,{K:()=>n})}}]);
//# sourceMappingURL=345.cc125c24.chunk.js.map