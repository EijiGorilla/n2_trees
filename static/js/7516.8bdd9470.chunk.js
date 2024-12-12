"use strict";(self.webpackChunkn2_trees=self.webpackChunkn2_trees||[]).push([[7516],{53801:(e,t,r)=>{function o(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let o=0;o<r;o++)t[o]=e.get(o);return t}r.d(t,{m:()=>o});Object.freeze(Object.defineProperty({__proto__:null,makeDense:o},Symbol.toStringTag,{value:"Module"}))},57516:(e,t,r)=>{r.d(t,{loadGLTF:()=>G});var o=r(32718),n=r(7025),s=r(8548);var a,i,u=r(10064),l=r(77427),c=r(66978),d=r(35995),f=r(49901),p=r(29134),h=r(68700),m=r(50894),g=r(25158),T=r(53801);r(93169);class w{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){const t=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,t,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}}!function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(a||(a={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(i||(i={}));var x=r(41644);const b={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},y={pbrMetallicRoughness:b,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},_={ESRI_externalColorMixMode:"tint",ESRI_receiveShadows:!0,ESRI_receiveAmbientOcclusion:!0},v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t={...b,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,x.Bg)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({..._,...e.extras});return{...y,...e,pbrMetallicRoughness:t,extras:r}};const S={magFilter:s.cw.LINEAR,minFilter:s.cw.LINEAR_MIPMAP_LINEAR,wrapS:s.e8.REPEAT,wrapT:s.e8.REPEAT};var E=r(57661);const O=1179937895,R=1313821514,A=5130562;class N{constructor(e,t,r,o){if(this._context=e,this.uri=t,this.json=r,this._glbBuffer=o,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu","KHR_texture_transform"],this._baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,o,n)=>(t=o||"",r=n||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),null==r.scenes)throw new u.Z("gltf-loader-unsupported-feature","Scenes must be defined.");if(null==r.meshes)throw new u.Z("gltf-loader-unsupported-feature","Meshes must be defined");if(null==r.nodes)throw new u.Z("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(e,t,r){if((0,d.HK)(t)){const r=(0,d.sJ)(t);if(r&&"model/gltf-binary"!==r.mediaType)try{const o=JSON.parse(r.isBase64?atob(r.data):r.data);return new N(e,t,o)}catch{}const o=(0,d.AH)(t);if(N._isGLBData(o))return this._fromGLBData(e,t,o)}if(B.test(t)||"gltf"===(null===r||void 0===r?void 0:r.expectedType)){const o=await e.loadJSON(t,r);return new N(e,t,o)}const o=await e.loadBinary(t,r);if(N._isGLBData(o))return this._fromGLBData(e,t,o);if(Z.test(t)||"glb"===(null===r||void 0===r?void 0:r.expectedType))throw new u.Z("gltf-loader-invalid-glb","This is not a valid glb file.");const n=await e.loadJSON(t,r);return new N(e,t,n)}static _isGLBData(e){if(null==e)return!1;const t=new w(e);return t.remainingBytes()>=4&&t.readUint32()===O}static async _fromGLBData(e,t,r){const o=await N._parseGLBData(r);return new N(e,t,o.json,o.binaryData)}static async _parseGLBData(e){const t=new w(e);if(t.remainingBytes()<12)throw new u.Z("gltf-loader-error","glb binary data is insufficiently large.");const r=t.readUint32(),n=t.readUint32(),s=t.readUint32();if(r!==O)throw new u.Z("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(e.byteLength<s)throw new u.Z("gltf-loader-error","glb binary data is smaller than header specifies.");if(2!==n)throw new u.Z("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let a,i,l=0;for(;t.remainingBytes()>=8;){const e=t.readUint32(),r=t.readUint32();if(0===l){if(r!==R)throw new u.Z("gltf-loader-error","First glb chunk must be JSON.");if(e<0)throw new u.Z("gltf-loader-error","No JSON data found.");a=await(0,E.i$)(t.readUint8Array(e))}else if(1===l){if(r!==A)throw new u.Z("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");i=t.readUint8Array(e)}else o.Z.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");l+=1}if(!a)throw new u.Z("gltf-loader-error","No glb JSON chunk detected.");return{json:a,binaryData:i}}async getBuffer(e,t){const r=this.json.buffers[e];if(null==r.uri){if(null==this._glbBuffer)throw new u.Z("gltf-loader-error","glb buffer not present");return this._glbBuffer}const o=await this._getBufferLoader(e,t);if(o.byteLength!==r.byteLength)throw new u.Z("gltf-loader-error","Buffer byte lengths should match.");return o}async _getBufferLoader(e,t){const r=this._bufferLoaders.get(e);if(r)return r;const o=this.json.buffers[e].uri,n=this._context.loadBinary(this._resolveUri(o),t).then((e=>new Uint8Array(e)));return this._bufferLoaders.set(e,n),n}async getAccessor(e,t){if(!this.json.accessors)throw new u.Z("gltf-loader-unsupported-feature","Accessors missing.");const r=this.json.accessors[e];if(null==(null===r||void 0===r?void 0:r.bufferView))throw new u.Z("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(r.type in[a.MAT2,a.MAT3,a.MAT4])throw new u.Z("gltf-loader-unsupported-feature","AttributeType ".concat(r.type," is not supported"));const o=this.json.bufferViews[r.bufferView],n=await this.getBuffer(o.buffer,t),s=L[r.type],i=F[r.componentType],l=s*i,c=o.byteStride||l;return{raw:n.buffer,byteStride:c,byteOffset:n.byteOffset+(o.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:c===l,componentCount:s,componentByteSize:i,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case s.g.UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case s.g.UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case s.g.UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case s.g.UNSIGNED_BYTE:return(0,T.m)(U(g.D_,r));case s.g.UNSIGNED_SHORT:return(0,T.m)(U(g.av,r));case s.g.UNSIGNED_INT:return(0,T.m)(U(g.Nu,r))}}async getPositionData(e,t){if(null==e.attributes.POSITION)throw new u.Z("gltf-loader-unsupported-feature","No POSITION vertex data found.");const r=await this.getAccessor(e.attributes.POSITION,t);if(r.componentType!==s.g.FLOAT)throw new u.Z("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+s.g[r.componentType]);if(3!==r.componentCount)throw new u.Z("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return U(g.ct,r)}async getNormalData(e,t){if(null==e.attributes.NORMAL)throw new u.Z("gltf-loader-error","No NORMAL vertex data found.");const r=await this.getAccessor(e.attributes.NORMAL,t);if(r.componentType!==s.g.FLOAT)throw new u.Z("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+s.g[r.componentType]);if(3!==r.componentCount)throw new u.Z("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return U(g.ct,r)}async getTangentData(e,t){if(null==e.attributes.TANGENT)throw new u.Z("gltf-loader-error","No TANGENT vertex data found.");const r=await this.getAccessor(e.attributes.TANGENT,t);if(r.componentType!==s.g.FLOAT)throw new u.Z("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+s.g[r.componentType]);if(4!==r.componentCount)throw new u.Z("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed());return U(g.ek,r)}async getTextureCoordinates(e,t){if(null==e.attributes.TEXCOORD_0)throw new u.Z("gltf-loader-error","No TEXCOORD_0 vertex data found.");const r=await this.getAccessor(e.attributes.TEXCOORD_0,t);if(2!==r.componentCount)throw new u.Z("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed());if(r.componentType===s.g.FLOAT)return U(g.Eu,r);if(!r.normalized)throw new u.Z("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return function(e){switch(e.componentType){case s.g.BYTE:return new g.Vs(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case s.g.UNSIGNED_BYTE:return new g.xA(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case s.g.SHORT:return new g.or(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case s.g.UNSIGNED_SHORT:return new g.TS(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case s.g.UNSIGNED_INT:return new g.qt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case s.g.FLOAT:return new g.Eu(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount)}}(r)}async getVertexColors(e,t){if(null==e.attributes.COLOR_0)throw new u.Z("gltf-loader-error","No COLOR_0 vertex data found.");const r=await this.getAccessor(e.attributes.COLOR_0,t);if(4!==r.componentCount&&3!==r.componentCount)throw new u.Z("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed());if(4===r.componentCount){if(r.componentType===s.g.FLOAT)return U(g.ek,r);if(r.componentType===s.g.UNSIGNED_BYTE)return U(g.mc,r);if(r.componentType===s.g.UNSIGNED_SHORT)return U(g.v6,r)}else if(3===r.componentCount){if(r.componentType===s.g.FLOAT)return U(g.ct,r);if(r.componentType===s.g.UNSIGNED_BYTE)return U(g.ne,r);if(r.componentType===s.g.UNSIGNED_SHORT)return U(g.mw,r)}throw new u.Z("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+s.g[r.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let o=e.material?this._materialCache.get(e.material):void 0;if(!o){var n,s,a,i,u;const l=null!=e.material?v(this.json.materials[e.material]):v(),c=l.pbrMetallicRoughness,d=this.hasVertexColors(e),f=this.getTexture(c.baseColorTexture,t),p=this.getTexture(l.normalTexture,t),h=r?this.getTexture(l.occlusionTexture,t):void 0,m=r?this.getTexture(l.emissiveTexture,t):void 0,g=r?this.getTexture(c.metallicRoughnessTexture,t):void 0,T=null!=e.material?e.material:-1;o={alphaMode:l.alphaMode,alphaCutoff:l.alphaCutoff,color:c.baseColorFactor,doubleSided:!!l.doubleSided,colorTexture:await f,normalTexture:await p,name:l.name,id:T,occlusionTexture:await h,emissiveTexture:await m,emissiveFactor:l.emissiveFactor,metallicFactor:c.metallicFactor,roughnessFactor:c.roughnessFactor,metallicRoughnessTexture:await g,hasVertexColors:d,ESRI_externalColorMixMode:l.extras.ESRI_externalColorMixMode,colorTextureTransform:null===c||void 0===c||null===(n=c.baseColorTexture)||void 0===n||null===(n=n.extensions)||void 0===n?void 0:n.KHR_texture_transform,normalTextureTransform:null===(s=l.normalTexture)||void 0===s||null===(s=s.extensions)||void 0===s?void 0:s.KHR_texture_transform,occlusionTextureTransform:null===(a=l.occlusionTexture)||void 0===a||null===(a=a.extensions)||void 0===a?void 0:a.KHR_texture_transform,emissiveTextureTransform:null===(i=l.emissiveTexture)||void 0===i||null===(i=i.extensions)||void 0===i?void 0:i.KHR_texture_transform,metallicRoughnessTextureTransform:null===c||void 0===c||null===(u=c.metallicRoughnessTexture)||void 0===u||null===(u=u.extensions)||void 0===u?void 0:u.KHR_texture_transform,receiveAmbientOcclusion:l.extras.ESRI_receiveAmbientOcclusion,receiveShadows:l.extras.ESRI_receiveShadows}}return o}async getTexture(e,t){if(!e)return;if(0!==(e.texCoord||0))throw new u.Z("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const r=e.index,o=this.json.textures[r],n=(c=null!=o.sampler?this.json.samplers[o.sampler]:{},{...S,...c}),s=D(o),a=this.json.images[s],i=await this._loadTextureImageData(r,o,t);var c;return(0,l.s1)(this._textureCache,r,(()=>{const e=e=>33071===e||33648===e||10497===e,t=e=>{throw new u.Z("gltf-loader-error","Unexpected TextureSampler WrapMode: ".concat(e))};return{data:i,wrapS:e(n.wrapS)?n.wrapS:t(n.wrapS),wrapT:e(n.wrapT)?n.wrapT:t(n.wrapT),minFilter:n.minFilter,name:a.name,id:r}}))}getNodeTransform(e){if(void 0===e)return C;let t=this._nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this._getNodeParent(e)),o=this.json.nodes[e];o.matrix?t=(0,p.Jp)((0,n.Ue)(),r,o.matrix):o.translation||o.rotation||o.scale?(t=(0,n.d9)(r),o.translation&&(0,p.Iu)(t,t,o.translation),o.rotation&&(I[3]=(0,h.Bh)(I,o.rotation),(0,p.U1)(t,t,I[3],I)),o.scale&&(0,p.bA)(t,t,o.scale)):t=(0,n.d9)(r),this._nodeTransformCache.set(e,t)}return t}_resolveUri(e){return(0,d.hF)(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=f.G.parse(this.json.asset.version,"glTF");M.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every((e=>this._supportedExtensions.includes(e))))throw new u.Z("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this._nodeParentMap.set(e,t)}))}))}async _loadTextureImageData(e,t,r){const o=this._textureLoaders.get(e);if(o)return o;const n=this._createTextureLoader(t,r);return this._textureLoaders.set(e,n),n}async _createTextureLoader(e,t){const r=D(e),o=this.json.images[r];if(o.uri){if(o.uri.endsWith(".ktx2")){const e=await this._context.loadBinary(this._resolveUri(o.uri),t);return new E.NM(new Uint8Array(e))}return this._context.loadImage(this._resolveUri(o.uri),t)}if(null==o.bufferView)throw new u.Z("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(null==o.mimeType)throw new u.Z("gltf-loader-unsupported-feature","Image mimeType must be defined.");const n=this.json.bufferViews[o.bufferView],s=await this.getBuffer(n.buffer,t);if(null!=n.byteStride)throw new u.Z("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const a=s.byteOffset+(n.byteOffset||0);return(0,E.Ml)(new Uint8Array(s.buffer,a,n.byteLength),o.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await(0,c.OT)(Array.from(this._bufferLoaders.values())),t=await(0,c.OT)(Array.from(this._textureLoaders.values()));return e.reduce(((e,t)=>{var r;return e+(null!==(r=null===t||void 0===t?void 0:t.byteLength)&&void 0!==r?r:0)}),0)+t.reduce(((e,t)=>e+(t?(0,E.$A)(t)?t.data.byteLength:t.width*t.height*4:0)),0)}}const C=(0,p.aC)((0,n.Ue)(),Math.PI/2),M=new f.G(2,0,"glTF"),I=(0,m.Ue)(),L={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},F={[s.g.BYTE]:1,[s.g.UNSIGNED_BYTE]:1,[s.g.SHORT]:2,[s.g.UNSIGNED_SHORT]:2,[s.g.HALF_FLOAT]:2,[s.g.FLOAT]:4,[s.g.INT]:4,[s.g.UNSIGNED_INT]:4};function U(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}function D(e){var t;if(null!=(null===(t=e.extensions)||void 0===t?void 0:t.KHR_texture_basisu))return e.extensions.KHR_texture_basisu.source;if(null!==e.source)return e.source;throw new u.Z("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}const B=/\.gltf$/i,Z=/\.glb$/i;let P=0;async function G(e,t){var r;let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const u=await N.load(e,t,a),l="gltf_"+P++,c={lods:[],materials:new Map,textures:new Map,meta:j(u)},d=!(!u.json.asset.extras||"symbolResource"!==u.json.asset.extras.ESRI_type),f=null===(r=u.json.asset.extras)||void 0===r||null===(r=r.ESRI_webstyleSymbol)||void 0===r?void 0:r.webstyle,p=new Map;await V(u,(async(e,t,r,d)=>{var f,h;const m=null!==(f=p.get(r))&&void 0!==f?f:0;p.set(r,m+1);const g=void 0!==e.mode?e.mode:s.MX.TRIANGLES,T=g===s.MX.TRIANGLES||g===s.MX.TRIANGLE_STRIP||g===s.MX.TRIANGLE_FAN?g:null;if(null==T)return void o.Z.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+s.MX[g]+"). Skipping primitive.");if(!u.hasPositions(e))return void o.Z.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const w=u.getPositionData(e,a),x=u.getMaterial(e,a,i),b=u.hasNormals(e)?u.getNormalData(e,a):null,y=u.hasTangents(e)?u.getTangentData(e,a):null,_=u.hasTextureCoordinates(e)?u.getTextureCoordinates(e,a):null,v=u.hasVertexColors(e)?u.getVertexColors(e,a):null,S=u.getIndexData(e,a),E={name:d,transform:(0,n.d9)(t),attributes:{position:await w,normal:b?await b:null,texCoord0:_?await _:null,color:v?await v:null,tangent:y?await y:null},indices:await S,primitiveType:T,material:H(c,await x,l)};let O=null;null!=(null===(h=c.meta)||void 0===h?void 0:h.ESRI_lod)&&"screenSpaceRadius"===c.meta.ESRI_lod.metric&&(O=c.meta.ESRI_lod.thresholds[r]),c.lods[r]=c.lods[r]||{parts:[],name:d,lodThreshold:O},c.lods[r].parts[m]=E}));for(const o of c.lods)o.parts=o.parts.filter((e=>!!e));const h=await u.getLoadedBuffersSize();return{model:c,meta:{isEsriSymbolResource:d,uri:u.uri,ESRI_webstyle:f},customMeta:{},size:h}}function j(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;null!=t&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}async function V(e,t){const r=e.json,n=r.scenes[r.scene||0].nodes,s=n.length>1,a=[];for(const o of n){const e=r.nodes[o];a.push(i(o,0)),k(e)&&!s&&e.extensions.MSFT_lod.ids.forEach(((e,t)=>i(e,t+1)))}async function i(n,s){const u=r.nodes[n],l=e.getNodeTransform(n);if(null!=u.weights&&o.Z.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),null!=u.mesh){const e=r.meshes[u.mesh];for(const r of e.primitives)a.push(t(r,l,s,e.name))}for(const e of u.children||[])a.push(i(e,s))}await Promise.all(a)}function k(e){var t;return(null===(t=e.extensions)||void 0===t?void 0:t.MSFT_lod)&&Array.isArray(e.extensions.MSFT_lod.ids)}function H(e,t,r){const o=t=>{const o="".concat(r,"_tex_").concat(t&&t.id).concat(null!==t&&void 0!==t&&t.name?"_"+t.name:"");if(t&&!e.textures.has(o)){const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{data:e,parameters:{wrap:{s:s.e8.REPEAT,t:s.e8.REPEAT,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:X.has(t.minFilter),noUnpackFlip:!0});e.textures.set(o,r)}return o},n="".concat(r,"_mat_").concat(t.id,"_").concat(t.name);if(!e.materials.has(n)){const r=function(){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?o(t.colorTexture):void 0,textureNormal:t.normalTexture?o(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?o(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?o(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?o(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],colorTextureTransform:t.colorTextureTransform,normalTextureTransform:t.normalTextureTransform,occlusionTextureTransform:t.occlusionTextureTransform,emissiveTextureTransform:t.emissiveTextureTransform,metallicRoughnessTextureTransform:t.metallicRoughnessTextureTransform,metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor,receiveShadows:t.receiveShadows,receiveAmbientOcclustion:t.receiveAmbientOcclusion});e.materials.set(n,r)}return n}const X=new Set([s.cw.LINEAR_MIPMAP_LINEAR,s.cw.LINEAR_MIPMAP_NEAREST])}}]);
//# sourceMappingURL=7516.8bdd9470.chunk.js.map