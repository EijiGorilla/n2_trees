"use strict";(self.webpackChunkn2_trees=self.webpackChunkn2_trees||[]).push([[844],{46798:(e,t,i)=>{i.d(t,{q:()=>l});var n=i(63780),r=i(42537),o=i(32718),s=i(66978),a=i(70431);class l{constructor(e,t,i,n){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this._mainMethod=t,this._transferLists=i,this._listeners=[],this._promise=(0,a.bA)(e,{...r,schedule:n}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,r.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>o.Z.getLogger("esri.core.workers.WorkerHandle").error("Failed to initialize ".concat(e," worker: ").concat(t))))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,r.kB)((()=>{i.removed=!0,(0,n.Od)(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const n=this._transferLists[e],r=n?n(t):[];return this._thread.invoke(e,t,{transferList:r,signal:i})}return this._promise?this._promise.then((()=>((0,s.k_)(i),this.invokeMethod(e,t,i)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}},54907:(e,t,i)=>{var n,r,o,s,a,l,d,u,h,c,_,g,m,y,f;i.d(t,{Em:()=>v,Nl:()=>f,Q3:()=>b}),function(e){e.U8="U8",e.I8="I8",e.U16="U16",e.I16="I16",e.U32="U32",e.I32="I32",e.F32="F32",e.F64="F64",e.Utf8String="Utf8String",e.NotSet="NotSet"}(n||(n={})),function(e){e.Png="Png",e.Jpeg="Jpeg",e.Dds="Dds",e.Raw="Raw",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Etc2="Etc2",e.Astc="Astc",e.Pvrtc="Pvrtc",e.NotSet="NotSet"}(r||(r={})),function(e){e.Rgb8="Rgb8",e.Rgba8="Rgba8",e.R8="R8",e.Bgr8="Bgr8",e.Bgra8="Bgra8",e.Rg8="Rg8",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.NotSet="NotSet"}(o||(o={})),function(e){e.Position="Position",e.Normal="Normal",e.TexCoord="TexCoord",e.Color="Color",e.Tangent="Tangent",e.FeatureIndex="FeatureIndex",e.UvRegion="UvRegion",e.NotSet="NotSet"}(s||(s={})),function(e){e.Opaque="Opaque",e.Mask="Mask",e.Blend="Blend"}(a||(a={})),function(e){e.None="None",e.Mask="Mask",e.Alpha="Alpha",e.PreMultAlpha="PreMultAlpha",e.NotSet="NotSet"}(l||(l={})),function(e){e.Points="Points",e.Lines="Lines",e.LineStrip="LineStrip",e.Triangles="Triangles",e.TriangleStrip="TriangleStrip",e.NotSet="NotSet"}(d||(d={})),function(e){e.None="None",e.WrapXBit="WrapXBit",e.WrapYBit="WrapYBit",e.WrapXy="WrapXy",e.NotSet="NotSet"}(u||(u={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NotSet="NotSet"}(h||(h={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NearestMipmapNearest="NearestMipmapNearest",e.LinearMipmapNearest="LinearMipmapNearest",e.NearestMipmapLinear="NearestMipmapLinear",e.LinearMipmapLinear="LinearMipmapLinear",e.NotSet="NotSet"}(c||(c={})),function(e){e.FeatureId="FeatureId",e.GlobalUid="GlobalUid",e.UnspecifiedDateTime="UnspecifiedDateTime",e.EcmaIso8601DateTime="EcmaIso8601DateTime",e.EcmaIso8601DateOnly="EcmaIso8601DateOnly",e.TimeOnly="TimeOnly",e.TimeStamp="TimeStamp",e.ColorRgb="ColorRgb",e.ColorRgba="ColorRgba",e.Unrecognized="Unrecognized",e.NotSet="NotSet"}(_||(_={})),function(e){e.Texture="Texture",e.VertexAtrb="VertexAtrb",e.Implicit="Implicit",e.NotSet="NotSet"}(g||(g={})),function(e){e.Front="Front",e.Back="Back",e.None="None",e.NotSet="NotSet"}(m||(m={})),function(e){e.Pbr="Pbr",e.Unlit="Unlit"}(y||(y={})),function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed",e[e.MissingInputs=2]="MissingInputs"}(f||(f={}));const b=-1,v=-2},80844:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var n=i(27366),r=i(76200),o=i(7138),s=i(32718),a=i(66978),l=i(94172),d=i(99346),u=i(49861),h=(i(93169),i(84936),i(69912)),c=i(54907),_=i(46798);class g extends _.q{constructor(e){super("Lyr3DWorker","process",{process:e=>e.inputs},e,{hasInitialize:!0})}destroyWasm(){return this.broadcast({},"destroyWasm")}}var m,y,f,b=i(65685),v=i(74509);(f=m||(m={}))[f.Lifetime=0]="Lifetime",f[f.Jobs=1]="Jobs",f[f.Renderables=2]="Renderables",function(e){e[e.Critical=0]="Critical",e[e.Error=1]="Error",e[e.Warning=2]="Warning",e[e.Info=3]="Info"}(y||(y={}));let p=class extends o.Z{constructor(e){super(e),this._lyr3DMainPromise=null,this._lyr3DMain=null,this._layers=new Map,this._debugFlags=new Set,this._debugLevel=y.Critical,this._wasmNotLoaded="method requiring WASM was called when WASM isn't loaded",this._pulseTaskHandle=null,this._session=null,this._debugFlags.add(m.Lifetime),this._debugFlags.add(m.Jobs),this._debugFlags.add(m.Renderables)}_debugLog(e,t,i){let n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(this._debugFlags.has(e)&&this._debugLevel>=t){const e=n?"[js] ".concat(i):"".concat(i);t===y.Critical||t===y.Error?s.Z.getLogger(this).error(e):t===y.Warning&&s.Z.getLogger(this).warn(e),s.Z.getLogger(this).info(e)}}initialize(){this._debugLevel>y.Warning&&(s.Z.getLogger(this).level="info"),this._debugLog(m.Lifetime,y.Info,"Lyr3DWasmPerSceneView.initialize()"),this.addHandles([(0,l.YP)((()=>{var e;return null===(e=this.view.state)||void 0===e?void 0:e.contentCamera}),(()=>this._updateWasmCamera()))]),this._pulseTaskHandle=(0,d.A)({preRender:()=>this._pulseTask()})}destroy(){var e;this._debugLog(m.Lifetime,y.Info,"Lyr3DWasmPerSceneView.destroy()"),this._lyr3DMain&&(this._layers.forEach((e=>{e.abortController.abort()})),this._lyr3DMain.uninitialize_lyr3d_wasm(),this._lyr3DMain=null);const t=this._worker;t&&t.destroyWasm().then((()=>{var e;null!==(e=this._worker)&&void 0!==e&&e.destroy(),this._worker=null})),null!==(e=this._pulseTaskHandle)&&void 0!==e&&e.remove(),this._pulseTaskHandle=null}add3DTilesLayerView(e){return this._lyr3DMain?this._add3DTilesLayerView(e):(this._debugLog(m.Lifetime,y.Error,"Lyr3DWasmPerSceneView.add3DTilesLayerView() called when WASM wasn't initialized"),c.Em)}remove3DTilesLayerView(e){if(!this._lyr3DMain)return this._debugLog(m.Lifetime,y.Error,this._wasmNotLoaded),0;this._doRemoveLayerView(e);const t=this._layers.size;return 0===t&&(this._debugLog(m.Lifetime,y.Info,"Lyr3DWasmPerSceneView.remove3DTilesLayerView() no Lyr3D layers left after removing a layer, destroying"),this.destroy()),t}setEnabled(e,t){if(!this._lyr3DMain)return void this._debugLog(m.Lifetime,y.Error,this._wasmNotLoaded);const i=this._layers.get(e.wasmLayerId);i&&(this._lyr3DMain.set_enabled(e.wasmLayerId,t),i.needMemoryUsageUpdate=!0,i.needFrame=!0,i.layerView.updatingFlagChanged())}setLayerOffset(e,t){this._lyr3DMain?this._layers.get(e.wasmLayerId)&&this._lyr3DMain.set_carto_offset_z(e.wasmLayerId,t):this._debugLog(m.Lifetime,y.Error,this._wasmNotLoaded)}getAttributionText(){return this._lyr3DMain?this._lyr3DMain.get_current_attribution_text().split("|"):(this._debugLog(m.Lifetime,y.Error,this._wasmNotLoaded),[])}onRenderableEvicted(e,t,i){this._lyr3DMain?this._layers.get(e.wasmLayerId)&&this._lyr3DMain.on_renderable_evicted(e.wasmLayerId,t,i):this._debugLog(m.Lifetime,y.Error,this._wasmNotLoaded)}isUpdating(e){if(!this._lyr3DMain&&this._lyr3DMainPromise)return!0;const t=this._layers.get(e);return!!t&&(t.outstandingJobCount>0||t.outstandingRenderableCount>0||t.needFrame)}initializeWasm(e){return this._lyr3DMain?Promise.resolve():(this._debugLog(m.Lifetime,y.Info,"Lyr3DWasmPerSceneView.initializeWasm()"),this._lyr3DMainPromise||(this._lyr3DMainPromise=(0,b.O)().then((t=>{var i,n,r,o;this._lyr3DMain=t,this._lyr3DMainPromise=null;const s=this._lyr3DMain.addFunction(this._onNewJob.bind(this),"v"),a=this._lyr3DMain.addFunction(this._onNewRenderable.bind(this),"v"),l=this._lyr3DMain.addFunction(this._freeRenderables.bind(this),"viii"),d=this._lyr3DMain.addFunction(this._setRenderableVisibility.bind(this),"viiii"),u=this._lyr3DMain.addFunction(this._onWasmError.bind(this),"viiii"),h="global"===this.view.viewingMode,c=null!==(i=this.view.renderSpatialReference)&&void 0!==i&&i.isWebMercator?3857:null!==(n=null===(r=this.view.renderSpatialReference)||void 0===r?void 0:r.wkid)&&void 0!==n?n:-1,_=null===(o=this.view.heightModelInfo)||void 0===o?void 0:o.heightModel,f=!_||"gravity-related-height"===_;return this._lyr3DMain.initialize_lyr3d_wasm(u,s,a,l,d,e,h,f,c,this._debugLevel)?(this._worker=new g(function(e){return t=>{if(e.immediate)return e.immediate.schedule(t);const i="No immediate scheduler";throw console.error(i),new Error(i)}}(this.view.resourceController)),this._worker.promise?this._worker.promise:void 0):(this._lyr3DMain=null,void this._debugLog(m.Lifetime,y.Critical,"Lyr3d Main WASM failed to initialize",!1))})).catch((e=>{this._debugLog(m.Lifetime,y.Critical,"Lyr3d WASM failed to download error = ".concat(e),!1)}))),this._lyr3DMainPromise)}_pulseTask(){if(this._lyr3DMain){let e=0,t=0;this._layers.forEach((i=>{e+=i.layerView.usedMemory,t+=i.layerView.cachedMemory})),e/=1048576,t/=1048576;const i=this.view.resourceController.memoryController,n=i.usedMemory*i.maxMemory-e;this._lyr3DMain.frame_pulse(i.memoryFactor,e,t,n,i.maxMemory),this._layers.forEach((e=>{!0===e.needFrame&&(e.needFrame=!1,e.layerView.updatingFlagChanged())}))}}_incrementJobCount(e){e.outstandingJobCount+=1,1===e.outstandingJobCount&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_decrementJobCount(e){e.outstandingJobCount-=1,0===e.outstandingJobCount&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_incrementRenderableCount(e){e.outstandingRenderableCount+=1,e.outstandingJobCount<1&&1===e.outstandingRenderableCount&&e.layerView.updatingFlagChanged()}_decrementRenderableCount(e){e.outstandingRenderableCount-=1,e.outstandingJobCount<1&&0===e.outstandingRenderableCount&&e.layerView.updatingFlagChanged()}_onJobFailed(e,t,i){t.error.length&&this._debugLog(m.Jobs,y.Error,t.error,!1),this._lyr3DMain&&this._lyr3DMain.on_job_failed(i.jobId,i.desc),this._decrementJobCount(e)}_onJobSucceeded(e,t,i){if(this._lyr3DMain){const e=t.data.byteLength,n=this._lyr3DMain._malloc(e);new Uint8Array(this._lyr3DMain.HEAPU8.buffer,n,e).set(t.data),this._lyr3DMain.on_job_completed(i.jobId,t.jobDescJson,n,e),this._lyr3DMain._free(n)}this._decrementJobCount(e)}_getRequestPromises(e,t,i){const n=[];for(const o of e){const e=new URL(o),s=e.searchParams.get("session");s?this._session=s:!this._session||e.origin===i.origin&&e.pathname===i.pathname||e.searchParams.append("session",this._session),n.push((0,r.Z)(e.toString(),t).then((e=>e.data)))}return n}_onNewJob(){const e=this._lyr3DMain.get_next_job(),t=this._layers.get(e.layerId);if(!t)return;this._incrementJobCount(t);const i=t.abortController.signal,n={responseType:"array-buffer",signal:i,query:{...t.customParameters,token:t.apiKey}},r={inputs:[],jobDescJson:e.desc,isMissingResourceCase:!1},o=new URL(t.layerView.layer.url),s=this._getRequestPromises(e.urls,n,o);Promise.all(s).then((e=>(r.inputs=e,this._worker.invoke(r,i)))).then((e=>e)).catch((t=>((0,a.D_)(t)?this._debugLog(m.Jobs,y.Warning,"job ".concat(e.jobId," was cancelled.")):this._debugLog(m.Jobs,y.Error,"job ".concat(e.jobId," failed with error ").concat(t,".")),{status:c.Nl.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[],inputs:[]}))).then((s=>{if(s.status===c.Nl.Failed)this._onJobFailed(t,s,e);else if(s.status===c.Nl.Succeeded)this._onJobSucceeded(t,s,e);else if(s.status===c.Nl.MissingInputs){const l=this._getRequestPromises(s.missingInputUrls,n,o);Promise.all(l).then((e=>{r.jobDescJson=s.jobDescJson,s.originalInputs?r.inputs=s.originalInputs:r.inputs=[],r.isMissingResourceCase=!0;for(const t of e)r.inputs.push(t);return this._worker.invoke(r,i)})).then((i=>{i.status===c.Nl.Failed?this._onJobFailed(t,i,e):i.status===c.Nl.Succeeded&&this._onJobSucceeded(t,i,e)})).catch((i=>{this._decrementJobCount(t),(0,a.D_)(i)?this._debugLog(m.Jobs,y.Warning,"job ".concat(e.jobId," was cancelled.")):this._debugLog(m.Jobs,y.Error,"job ".concat(e.jobId," failed with error2 ").concat(i,".")),this._lyr3DMain&&this._lyr3DMain.on_job_failed(e.jobId,e.desc)}))}}))}_onNewRenderable(){const e=this._lyr3DMain.get_next_renderable(),t=e.meshData;if(t.data&&t.data.byteLength>0){const e=t.data.slice();t.data=e}const i=this._layers.get(e.layerId);i&&(this._incrementRenderableCount(i),i.layerView.createRenderable(e).then((t=>{this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!0,e.layerId,e.handle,t.memUsageBytes),this._decrementRenderableCount(i)})).catch((t=>{(0,a.D_)(t)||this._debugLog(m.Renderables,y.Error,"createRenderable failed with error ".concat(t,".")),this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!1,e.layerId,e.handle,0),this._decrementRenderableCount(i)})))}_freeRenderables(e,t,i){if(i<1)return;const n=this._layers.get(e);if(!n)return;const r=n.layerView,o=[],s=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,i);for(let a=0;a<i;++a)o.push(s[a]);for(let a=0;a<i;++a)r.freeRenderable(o[a])}_setRenderableVisibility(e,t,i,n){if(n<1)return;const r=this._layers.get(e);if(!r)return;const o=r.layerView,s=[],a=[],l=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,n),d=new Uint8Array(this._lyr3DMain.HEAPU8.buffer,i,n);for(let u=0;u<n;++u)s.push(l[u]),a.push(1===d[u]);o.setRenderableVisibility(s,a,n)}_onWasmError(e,t,i,n){this._lyr3DMain&&this._debugLog(i,n,this._lyr3DMain.UTF8ToString(e,t),!1)}_doRemoveLayerView(e){const t=this._layers.get(e.wasmLayerId);return!!t&&(t.abortController.abort(),this._lyr3DMain.remove_layer(e.wasmLayerId),this._layers.delete(e.wasmLayerId),!0)}_add3DTilesLayerView(e){const t=e.layer;if(!t.url)return c.Q3;const i=this._lyr3DMain.get_next_layer_id(),n=new AbortController;this._layers.set(i,{layerView:e,abortController:n,needMemoryUsageUpdate:!1,outstandingJobCount:0,outstandingRenderableCount:0,customParameters:t.customParameters,apiKey:t.apiKey,needFrame:!1});const r=(0,v.fm)(t.elevationInfo);return this._lyr3DMain.add_layer(t.url,i,r)?(this._updateWasmCamera(),i):(this._layers.delete(i),c.Q3)}_updateWasmCamera(){var e;const t=null===(e=this.view.state)||void 0===e?void 0:e.contentCamera;if(!t||!this._lyr3DMain)return;const{eye:i,center:n,up:r,near:o,far:s,fovY:a}=t,l=[t.viewport[2],t.viewport[3]],d=t.width/t.height;this._lyr3DMain.set_camera_parameters({eye:i,center:n,up:r,near:o,far:s,fov:a,aspectRatio:d,viewport:l})}};(0,n._)([(0,u.Cb)({constructOnly:!0})],p.prototype,"view",void 0),p=(0,n._)([(0,h.j)("esri.layers.Lyr3DWasmPerSceneView")],p);const w=p},65685:(e,t,i)=>{i.d(t,{J:()=>o,O:()=>r});var n=i(65905);function r(){return new Promise((e=>i.e(8638).then(i.bind(i,88638)).then((e=>e.l)).then((t=>{let{default:i}=t;const n=i({locateFile:s,onRuntimeInitialized:()=>e(n)})})))).catch((e=>{throw e}))}function o(){return new Promise((e=>i.e(7184).then(i.bind(i,87184)).then((e=>e.l)).then((t=>{let{default:i}=t;const n=i({locateFile:s,onRuntimeInitialized:()=>e(n)})})))).catch((e=>{throw e}))}function s(e){return(0,n.V)("esri/libs/lyr3d/".concat(e))}},74509:(e,t,i)=>{i.d(t,{LR:()=>p,O3:()=>m,Ou:()=>c,RL:()=>d,Uy:()=>f,VW:()=>a,Wb:()=>b,fm:()=>w,jG:()=>L,kf:()=>v,mF:()=>s,tq:()=>y,vQ:()=>_,vu:()=>l,zx:()=>g});var n=i(68860),r=i(88152);function o(e){return e?L:M}function s(e,t){return null!=t?t:o(e)}function a(e,t){var i;return function(e,t){return null!==t&&void 0!==t&&t.mode?t.mode:o(e).mode}(null==e||null!==(i=e.hasZ)&&void 0!==i&&i,t)}function l(e){const t=u(e);return a(e.geometry,t)}function d(e){const t=u(e),i=a(e.geometry,t);return{mode:i,offset:null!=t&&"on-the-ground"!==i?w(t):0,featureExpressionInfo:null===t||void 0===t?void 0:t.featureExpressionInfo}}function u(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function h(e,t){if(null===e||void 0===e||!e.offset)return 0;const{offset:i,unit:r}=e;if("decimal-degrees"===r)return 0;const o="unknown"!==r&&r?r:"meters",s=(0,n.y)(t);return s?(0,n.En)(i,o,s):0}function c(e,t,i){var n,r;if(null===i||void 0===i||!i.mode)return;const o=e.hasZ?e.z:0,s=h(i,e.spatialReference);switch(i.mode){case"absolute-height":return o-s;case"on-the-ground":return 0;case"relative-to-ground":return o-((null!==(n=t.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"ground"))&&void 0!==n?n:0)+s);case"relative-to-scene":return o-((null!==(r=t.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"scene"))&&void 0!==r?r:0)+s)}}function _(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return m(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,i,n)}function g(e,t,i,n){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return m(e,t[0],t[1],t.length>2?t[2]:0,i,n,r)}function m(e,t,i,n,r,o){let s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==o)return;const a=null!=s?s.mode:"absolute-height";if("on-the-ground"===a)return 0;const{absoluteZ:l}=y(t,i,n,r,e,o);return function(e,t,i,n,r,o,s,a){var l,d;const u=h(s,r);switch(a){case"absolute-height":return e-u;case"relative-to-ground":return e-((null!==(l=o.elevationProvider.getElevation(t,i,n,r,"ground"))&&void 0!==l?l:0)+u);case"relative-to-scene":return e-((null!==(d=o.elevationProvider.getElevation(t,i,n,r,"scene"))&&void 0!==d?d:0)+u)}}(l,t,i,n,r,e,s,a)}function y(e,t,i,n,r,o){const s=h(o,n);switch(o.mode){case"absolute-height":return{absoluteZ:i+s,elevation:0};case"on-the-ground":{var a;const i=null!==(a=r.elevationProvider.getElevation(e,t,0,n,"ground"))&&void 0!==a?a:0;return{absoluteZ:i,elevation:i}}case"relative-to-ground":{var l;const o=null!==(l=r.elevationProvider.getElevation(e,t,i,n,"ground"))&&void 0!==l?l:0;return{absoluteZ:i+o+s,elevation:o}}case"relative-to-scene":{var d;const o=null!==(d=r.elevationProvider.getElevation(e,t,i,n,"scene"))&&void 0!==d?d:0;return{absoluteZ:i+o+s,elevation:o}}}}function f(e,t,i){return i&&i.mode!==t?"".concat(e," only support ").concat(t," elevation mode"):null}function b(e,t,i){return(null===i||void 0===i?void 0:i.mode)===t?"".concat(e," do not support ").concat(t," elevation mode"):null}function v(e,t){return null!=(null===t||void 0===t?void 0:t.featureExpressionInfo)&&"0"!==t.featureExpressionInfo.expression?"".concat(e," do not support featureExpressionInfo"):null}function p(e,t){t&&e.warn(".elevationInfo=",t)}function w(e){var t;return(null!==(t=null===e||void 0===e?void 0:e.offset)&&void 0!==t?t:0)*(0,r.Z7)(null===e||void 0===e?void 0:e.unit)}const L={mode:"absolute-height",offset:0},M={mode:"on-the-ground",offset:null}}}]);
//# sourceMappingURL=844.5d0c2485.chunk.js.map