"use strict";(self.webpackChunkn2_trees=self.webpackChunkn2_trees||[]).push([[2503],{46228:(e,t,n)=>{n.d(t,{I:()=>r,v:()=>i});var o=n(16889);function r(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=(0,o.uZ)(e,0,s);for(let o=0;o<4;o++)t[n+o]=Math.floor(256*l(r*c[o]))}function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=0;for(let o=0;o<4;o++)n+=e[t+o]*a[o];return n}const c=[1,256,65536,16777216],a=[1/256,1/65536,1/16777216,1/4294967296],s=i(new Uint8ClampedArray([255,255,255,255]));function l(e){return e-Math.floor(e)}},68859:(e,t,n)=>{n.d(t,{K:()=>c});var o=n(12400),r=n(45925),i=n(50628);function c(e,t,n,o){var c,s;if((0,r.canProjectWithoutEngine)(e.spatialReference,n)){var l;a[0]=e.x,a[1]=e.y;const r=e.z;return a[2]=null!==(l=null!==r&&void 0!==r?r:o)&&void 0!==l?l:0,(0,i.projectBuffer)(a,e.spatialReference,0,t,n,0)}const u=(0,r.tryProjectWithZConversion)(e,n);return!!u&&(t[0]=null===u||void 0===u?void 0:u.x,t[1]=null===u||void 0===u?void 0:u.y,t[2]=null!==(c=null!==(s=null===u||void 0===u?void 0:u.z)&&void 0!==s?s:o)&&void 0!==c?c:0,!0)}const a=(0,o.Ue)()},5986:(e,t,n)=>{n.d(t,{S:()=>i});n(45925);var o=n(78952),r=n(68859);function i(e,t,n,o,i){return!(null==t||null==o||e.length<2)&&(c.x=e[0],c.y=e[1],c.z=e[2],c.spatialReference=t,(0,r.K)(c,n,o,i))}const c=(0,n(55946).T)(0,0,0,o.Z.WGS84)},55946:(e,t,n)=>{function o(e,t,n,o){return{x:e,y:t,z:n,hasZ:null!=n,hasM:!1,spatialReference:o,type:"point"}}function r(e,t,n,o,r){e.x=t,e.y=n,e.z=o,e.hasZ=null!=o,e.spatialReference=r}n.d(t,{T:()=>o,y:()=>r})},28278:(e,t,n)=>{n.d(t,{I_:()=>f,W7:()=>v,qM:()=>g});var o=n(10064),r=n(84652),i=n(32718),c=n(2821),a=n(4760);const s=()=>i.Z.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function l(e,t,n){let r="",i=0;for(;i<n;){const c=e[t+i];if(c<128)r+=String.fromCharCode(c),i++;else if(c>=192&&c<224){if(i+1>=n)throw new o.Z("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&c)<<6|63&e[t+i+1];r+=String.fromCharCode(a),i+=2}else if(c>=224&&c<240){if(i+2>=n)throw new o.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&c)<<12|(63&e[t+i+1])<<6|63&e[t+i+2];r+=String.fromCharCode(a),i+=3}else{if(!(c>=240&&c<248))throw new o.Z("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=n)throw new o.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&c)<<18|(63&e[t+i+1])<<12|(63&e[t+i+2])<<6|63&e[t+i+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);r+=String.fromCharCode(e,t)}else r+=String.fromCharCode(a);i+=4}}}return r}function u(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let o=0;for(let r=0;r<t.length;r++){const i=t[r],c=i.valueType||i.type,a=m[c];n.fields[i.property]=a(e,o),o+=b[c].BYTES_PER_ELEMENT}return n.byteCount=o,n}function d(e,t,n){const r=[];let i,c,a=0;for(c=0;c<e;c+=1){if(i=t[c],i>0){if(r.push(l(n,a,i-1)),0!==n[a+i-1])throw new o.Z("string-array-error","Invalid string array: missing null termination.")}else r.push(null);a+=i}return r}function f(e,t){return new(0,b[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function h(e,t,n){const i=null!=t.header?u(e,t.header):{byteOffset:0,byteCount:0,fields:{count:n}},c={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let a=i.byteCount;for(let u=0;u<t.ordering.length;u++){var s,l;const e=t.ordering[u],n=(0,r.d9)(t[e]);if(n.count=null!==(s=i.fields.count)&&void 0!==s?s:0,"String"===n.valueType){if(n.byteOffset=a,n.byteCount=i.fields[e+"ByteCount"],"UTF-8"!==n.encoding)throw new o.Z("unsupported-encoding","Unsupported String encoding.",{encoding:n.encoding});if(n.timeEncoding&&"ECMA_ISO8601"!==n.timeEncoding)throw new o.Z("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:n.timeEncoding})}else{if(!w(n.valueType))throw new o.Z("unsupported-value-type","Unsupported binary valueType",{valueType:n.valueType});{const e=C(n.valueType);a+=a%e!=0?e-a%e:0,n.byteOffset=a,n.byteCount=e*n.valuesPerElement*n.count}}a+=null!==(l=n.byteCount)&&void 0!==l?l:0,c.entries[e]=n}return c.byteCount=a-c.byteOffset,c}function p(e,t,n){if(t!==e&&s().error("Invalid ".concat(n," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new o.Z("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function v(e,t){const n=u(e,t&&t.header);let o=n.byteCount;const r={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,c=null!=i.vertexCount?i.vertexCount:i.count;for(const l of t.ordering){if(!t.vertexAttributes[l])continue;const e={...t.vertexAttributes[l],byteOffset:o,count:c},n=y[l]||"_"+l;r.vertexAttributes[n]=e,o+=C(e.valueType)*e.valuesPerElement*c}const a=i.faceCount;if(t.faces&&a){r.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:o,count:a};r.faces[e]=n,o+=C(n.valueType)*n.valuesPerElement*a}}const s=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&s){r.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:o,count:s};r.featureAttributes[e]=n,o+=("UInt64"===n.valueType?8:C(n.valueType))*n.valuesPerElement*s}}return p(o,e.byteLength,"geometry"),r.byteCount=o-r.byteOffset,r}const y={position:a.T.POSITION,normal:a.T.NORMAL,color:a.T.COLOR,uv0:a.T.UV0,region:a.T.UVREGION};function g(e,t,n){if("lepcc-rgb"===e.encoding)return(0,c.IT)(t);if("lepcc-intensity"===e.encoding)return(0,c.ti)(t);if(null!=e.encoding&&""!==e.encoding)throw new o.Z("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(s().warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(s().warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const r=h(t,e,n);p(r.byteOffset+r.byteCount,t.byteLength,"attribute");const i=r.entries.attributeValues||r.entries.objectIds;if(i){if("String"===i.valueType){const e=r.entries.attributeByteCounts,n=f(t,e),o=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,i);return i.timeEncoding?function(e,t,n){return d(e,t,n).map((e=>{const t=e?Date.parse(e):null;return null==t||Number.isNaN(t)?null:t}))}(e.count,n,o):d(e.count,n,o)}return f(t,i)}throw new o.Z("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const b={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},m={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function w(e){return b.hasOwnProperty(e)}function C(e){return w(e)?b[e].BYTES_PER_ELEMENT:0}},42503:(e,t,n)=>{n.d(t,{xe:()=>b});n(59486);var o=n(76200),r=(n(63780),n(10064),n(93169),n(18722)),i=(n(29134),n(7025)),c=(n(32035),n(12400)),a=(n(45925),n(5986),n(65156)),s=(n(83479),n(21149),n(28278));n(83448),n(86452);n(51995);var l,u=n(86361);!function(e){e[e.TRANSPARENT=0]="TRANSPARENT",e[e.OPAQUE=1]="OPAQUE"}(l||(l={}));n(41644),n(46228),n(77343),n(37081),n(78980),n(20395),n(61809),n(99340);var d;n(98634),n(78050),n(45268),n(4760);!function(e){e[e.Uniform=0]="Uniform",e[e.Varying=1]="Varying",e[e.COUNT=2]="COUNT"}(d||(d={}));var f,h;n(16010),n(27254),n(86471),n(49450),n(58406),n(82644),n(35522),n(8654);function p(e){return{...v,...e,type:f.Solid}}!function(e){e[e.Solid=0]="Solid",e[e.Sketch=1]="Sketch",e[e.Mixed=2]="Mixed",e[e.COUNT=3]="COUNT"}(f||(f={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.SILHOUETTE=1]="SILHOUETTE"}(h||(h={}));const v={color:(0,u.al)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:l.OPAQUE,hasSlicePlane:!1};(0,u.al)(0,0,0,.2),l.OPAQUE;n(49420);var y=n(89414);n(69787),n(78952);(0,a.Ue)();var g;async function b(e,t,n,r,i,c,a,l){const u=[];for(const o of t)if(o&&i.includes(o.name)){const t="".concat(e,"/nodes/").concat(n,"/attributes/").concat(o.key,"/0");u.push({url:t,storageInfo:o})}const d=await Promise.allSettled(u.map((e=>(0,o.Z)(e.url,{responseType:"array-buffer",query:{...a,token:c},signal:null===l||void 0===l?void 0:l.signal}).then((t=>(0,s.qM)(e.storageInfo,t.data)))))),f=[];for(const o of r){const e={};for(let t=0;t<d.length;t++){const n=d[t];if("fulfilled"===n.status){const r=n.value;e[u[t].storageInfo.name]=C(r,o)}}f.push(e)}return f}!function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"}(g||(g={}));const m=-32768,w=-(2**31);function C(e,t){if(!e)return null;const n=e[t];return(0,r.z3)(e)?n===m?null:n:(0,r.Hx)(e)?n===w?null:n:n!=n?null:n}p({color:[0,0,0,0],opacity:0});(0,c.Ue)(),(0,c.Ue)(),(0,c.Ue)(),(0,c.Ue)(),(0,c.Ue)(),(0,c.Ue)(),(0,c.Ue)(),(0,c.Ue)(),(0,a.Ue)(),(0,a.Ue)(),new y.Oo,(0,c.Ue)(),new Array(72),(0,i.Ue)()},2821:(e,t,n)=>{n.d(t,{Gi:()=>l,IT:()=>p,ti:()=>g});var o=n(10064);const r=!0,i={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function c(e,t,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+i.identifierOffset,i.identifierLength)),version:t.getUint16(n+i.versionOffset,r),checksum:t.getUint32(n+i.checksumOffset,r)}}const a={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function s(e,t){return{sizeLo:e.getUint32(t+a.sizeLo,r),sizeHi:e.getUint32(t+a.sizeHi,r),minX:e.getFloat64(t+a.minX,r),minY:e.getFloat64(t+a.minY,r),minZ:e.getFloat64(t+a.minZ,r),maxX:e.getFloat64(t+a.maxX,r),maxY:e.getFloat64(t+a.maxY,r),maxZ:e.getFloat64(t+a.maxZ,r),errorX:e.getFloat64(t+a.errorX,r),errorY:e.getFloat64(t+a.errorY,r),errorZ:e.getFloat64(t+a.errorZ,r),count:e.getUint32(t+a.count,r),reserved:e.getUint32(t+a.reserved,r)}}function l(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:l}=c(e,t,n);if(n+=i.byteCount,"LEPCC     "!==r)throw new o.Z("lepcc-decode-error","Bad identifier");if(l>1)throw new o.Z("lepcc-decode-error","Unknown version");const d=s(t,n);if(n+=a.byteCount,d.sizeHi*2**32+d.sizeLo!==e.byteLength)throw new o.Z("lepcc-decode-error","Bad size");const f=new Float64Array(3*d.count),h=[],p=[],v=[],y=[];if(n=u(e,n,h),n=u(e,n,p),n=u(e,n,v),n=u(e,n,y),n!==e.byteLength)throw new o.Z("lepcc-decode-error","Bad length");let g=0,b=0;for(let o=0;o<h.length;o++){b+=h[o];let e=0;for(let t=0;t<p[o];t++){e+=v[g];const t=y[g];f[3*g]=Math.min(d.maxX,d.minX+2*d.errorX*e),f[3*g+1]=Math.min(d.maxY,d.minY+2*d.errorY*b),f[3*g+2]=Math.min(d.maxZ,d.minZ+2*d.errorZ*t),g++}}return{errorX:d.errorX,errorY:d.errorY,errorZ:d.errorZ,result:f}}function u(e,t,n){const o=[];t=d(e,t,o);const r=[];for(let i=0;i<o.length;i++){r.length=0,t=d(e,t,r);for(let e=0;e<r.length;e++)n.push(r[e]+o[i])}return t}function d(e,t,n){const i=new DataView(e,t),c=i.getUint8(0),a=31&c,s=!!(32&c),l=(192&c)>>6;let u=0;if(0===l)u=i.getUint32(1,r),t+=5;else if(1===l)u=i.getUint16(1,r),t+=3;else{if(2!==l)throw new o.Z("lepcc-decode-error","Bad count type");u=i.getUint8(1),t+=2}if(s)throw new o.Z("lepcc-decode-error","LUT not implemented");const d=Math.ceil(u*a/8),f=new Uint8Array(e,t,d);let h=0,p=0,v=0;const y=-1>>>32-a;for(let o=0;o<u;o++){for(;p<a;)h|=f[v]<<p,p+=8,v+=1;n[o]=h&y,h>>>=a,p-=a,p+a>32&&(h|=f[v-1]>>8-p)}return t+v}const f={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function h(e,t){return{sizeLo:e.getUint32(t+f.sizeLo,r),sizeHi:e.getUint32(t+f.sizeHi,r),count:e.getUint32(t+f.count,r),colorMapCount:e.getUint16(t+f.colorMapCount,r),lookupMethod:e.getUint8(t+f.lookupMethod),compressionMethod:e.getUint8(t+f.compressionMethod)}}function p(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:a}=c(e,t,n);if(n+=i.byteCount,"ClusterRGB"!==r)throw new o.Z("lepcc-decode-error","Bad identifier");if(a>1)throw new o.Z("lepcc-decode-error","Unknown version");const s=h(t,n);if(n+=f.byteCount,s.sizeHi*2**32+s.sizeLo!==e.byteLength)throw new o.Z("lepcc-decode-error","Bad size");if((2===s.lookupMethod||1===s.lookupMethod)&&0===s.compressionMethod){if(3*s.colorMapCount+s.count+n!==e.byteLength||s.colorMapCount>256)throw new o.Z("lepcc-decode-error","Bad count");const t=new Uint8Array(e,n,3*s.colorMapCount),r=new Uint8Array(e,n+3*s.colorMapCount,s.count),i=new Uint8Array(3*s.count);for(let e=0;e<s.count;e++){const n=r[e];i[3*e]=t[3*n],i[3*e+1]=t[3*n+1],i[3*e+2]=t[3*n+2]}return i}if(0===s.lookupMethod&&0===s.compressionMethod){if(3*s.count+n!==e.byteLength||0!==s.colorMapCount)throw new o.Z("lepcc-decode-error","Bad count");return new Uint8Array(e,n).slice()}if(s.lookupMethod<=2&&1===s.compressionMethod){if(n+3!==e.byteLength||1!==s.colorMapCount)throw new o.Z("lepcc-decode-error","Bad count");const r=t.getUint8(n),i=t.getUint8(n+1),c=t.getUint8(n+2),a=new Uint8Array(3*s.count);for(let e=0;e<s.count;e++)a[3*e]=r,a[3*e+1]=i,a[3*e+2]=c;return a}throw new o.Z("lepcc-decode-error","Bad method "+s.lookupMethod+","+s.compressionMethod)}const v={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function y(e,t){return{sizeLo:e.getUint32(t+v.sizeLo,r),sizeHi:e.getUint32(t+v.sizeHi,r),count:e.getUint32(t+v.count,r),scaleFactor:e.getUint16(t+v.scaleFactor,r),bitsPerPoint:e.getUint8(t+v.bitsPerPoint),reserved:e.getUint8(t+v.reserved)}}function g(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:a}=c(e,t,n);if(n+=i.byteCount,"Intensity "!==r)throw new o.Z("lepcc-decode-error","Bad identifier");if(a>1)throw new o.Z("lepcc-decode-error","Unknown version");const s=y(t,n);if(n+=v.byteCount,s.sizeHi*2**32+s.sizeLo!==e.byteLength)throw new o.Z("lepcc-decode-error","Bad size");const l=new Uint16Array(s.count);if(8===s.bitsPerPoint){if(s.count+n!==e.byteLength)throw new o.Z("lepcc-decode-error","Bad size");const t=new Uint8Array(e,n,s.count);for(let e=0;e<s.count;e++)l[e]=t[e]*s.scaleFactor}else if(16===s.bitsPerPoint){if(2*s.count+n!==e.byteLength)throw new o.Z("lepcc-decode-error","Bad size");const t=new Uint16Array(e,n,s.count);for(let e=0;e<s.count;e++)l[e]=t[e]*s.scaleFactor}else{const t=[];if(d(e,n,t)!==e.byteLength)throw new o.Z("lepcc-decode-error","Bad size");for(let e=0;e<s.count;e++)l[e]=t[e]*s.scaleFactor}return l}},49420:(e,t,n)=>{n.d(t,{a9:()=>o});var o;n(16889);!function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(o||(o={}))},77343:(e,t,n)=>{n.d(t,{A:()=>a});var o,r=n(30168),i=n(49420),c=n(98634);function a(e){e.vertex.code.add((0,c.H)(o||(o=(0,r.Z)(["\n    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {\n      float symbolAlpha = 0.0;\n\n      const float maxTint = 85.0;\n      const float maxReplace = 170.0;\n      const float scaleAlpha = 3.0;\n\n      if (symbolColor.a > maxReplace) {\n        colorMixMode = ",";\n        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);\n      } else if (symbolColor.a > maxTint) {\n        colorMixMode = ",";\n        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);\n      } else if (symbolColor.a > 0.0) {\n        colorMixMode = ",";\n        symbolAlpha = scaleAlpha * symbolColor.a;\n      } else {\n        colorMixMode = ",";\n        symbolAlpha = 0.0;\n      }\n\n      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);\n    }\n  "])),c.H.int(i.a9.Multiply),c.H.int(i.a9.Replace),c.H.int(i.a9.Tint),c.H.int(i.a9.Multiply)))}},37081:(e,t,n)=>{var o;function r(e){return e===o.Shadow||e===o.ShadowHighlight||e===o.ShadowExcludeHighlight||e===o.ViewshedShadow}function i(e){return function(e){return u(e)||d(e)}(e)||e===o.Normal}function c(e){return function(e){return function(e){return l(e)||a(e)}(e)||d(e)}(e)||e===o.Normal}function a(e){return e===o.Highlight||e===o.ObjectAndLayerIdColor}function s(e){return e===o.Color}function l(e){return s(e)||f(e)}function u(e){return s(e)||a(e)}function d(e){return e===o.Depth}function f(e){return e===o.ColorEmission}n.d(t,{ED:()=>c,H_:()=>o,Jb:()=>i,Kr:()=>r,L_:()=>u,c1:()=>l,qC:()=>f}),function(e){e[e.Color=0]="Color",e[e.ColorEmission=1]="ColorEmission",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.ViewshedShadow=7]="ViewshedShadow",e[e.Highlight=8]="Highlight",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.COUNT=10]="COUNT"}(o||(o={}))},16010:(e,t,n)=>{n.d(t,{O:()=>d,r:()=>c});var o,r,i,c,a=n(30168),s=n(41644),l=n(98634),u=n(4760);function d(e,t){switch(t.normalType){case c.Compressed:e.attributes.add(u.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add((0,l.H)(o||(o=(0,a.Z)(["vec3 decompressNormal(vec2 normal) {\nfloat z = 1.0 - abs(normal.x) - abs(normal.y);\nreturn vec3(normal + sign(normal) * min(z, 0.0), z);\n}\nvec3 normalModel() {\nreturn decompressNormal(normalCompressed);\n}"]))));break;case c.Attribute:e.attributes.add(u.T.NORMAL,"vec3"),e.vertex.code.add((0,l.H)(r||(r=(0,a.Z)(["vec3 normalModel() {\nreturn normal;\n}"]))));break;case c.ScreenDerivative:e.fragment.code.add((0,l.H)(i||(i=(0,a.Z)(["vec3 screenDerivativeNormal(vec3 positionView) {\nreturn normalize(cross(dFdx(positionView), dFdy(positionView)));\n}"]))));break;default:(0,s.Bg)(t.normalType);case c.COUNT:}}!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.ScreenDerivative=2]="ScreenDerivative",e[e.COUNT=3]="COUNT"}(c||(c={}))},27254:(e,t,n)=>{n.d(t,{$:()=>a});var o,r,i=n(30168),c=n(98634);function a(e,t){let{code:n}=e;t.doublePrecisionRequiresObfuscation?n.add((0,c.H)(o||(o=(0,i.Z)(["vec3 dpPlusFrc(vec3 a, vec3 b) {\nreturn mix(a, a + b, vec3(notEqual(b, vec3(0))));\n}\nvec3 dpMinusFrc(vec3 a, vec3 b) {\nreturn mix(vec3(0), a - b, vec3(notEqual(a, b)));\n}\nvec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\nvec3 t1 = dpPlusFrc(hiA, hiB);\nvec3 e = dpMinusFrc(t1, hiA);\nvec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\nreturn t1 + t2;\n}"])))):n.add((0,c.H)(r||(r=(0,i.Z)(["vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\nvec3 t1 = hiA + hiB;\nvec3 e = t1 - hiA;\nvec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\nreturn t1 + t2;\n}"]))))}},78980:(e,t,n)=>{n.d(t,{n:()=>s});var o,r,i,c=n(30168),a=n(98634);function s(e){e.code.add((0,a.H)(o||(o=(0,c.Z)(["const float MAX_RGBA_FLOAT =\n255.0 / 256.0 +\n255.0 / 256.0 / 256.0 +\n255.0 / 256.0 / 256.0 / 256.0 +\n255.0 / 256.0 / 256.0 / 256.0 / 256.0;\nconst vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\nvec4 float2rgba(const float value) {\nfloat valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\nvec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\nconst float toU8AsFloat = 1.0 / 255.0;\nreturn fixedPointU8 * toU8AsFloat;\n}"])))),e.code.add((0,a.H)(r||(r=(0,c.Z)(["const vec4 RGBA_2_FLOAT_FACTORS = vec4(\n255.0 / (256.0),\n255.0 / (256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n);\nfloat rgba2float(vec4 rgba) {\nreturn dot(rgba, RGBA_2_FLOAT_FACTORS);\n}"])))),e.code.add((0,a.H)(i||(i=(0,c.Z)(["const vec4 uninterpolatedRGBAToFloatFactors = vec4(\n1.0 / 256.0,\n1.0 / 256.0 / 256.0,\n1.0 / 256.0 / 256.0 / 256.0,\n1.0 / 256.0 / 256.0 / 256.0 / 256.0\n);\nfloat uninterpolatedRGBAToFloat(vec4 rgba) {\nreturn (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;\n}"]))))}},86471:(e,t,n)=>{n.d(t,{B:()=>i});var o=n(61809),r=n(99340);class i extends o.x{constructor(e,t){super(e,"vec3",r.P.Draw,((n,o,r,i)=>n.setUniform3fv(e,t(o,r,i))))}}},49450:(e,t,n)=>{n.d(t,{J:()=>i});var o=n(61809),r=n(99340);class i extends o.x{constructor(e,t){super(e,"vec3",r.P.Pass,((n,o,r)=>n.setUniform3fv(e,t(o,r))))}}},20395:(e,t,n)=>{n.d(t,{$:()=>i});var o=n(61809),r=n(99340);class i extends o.x{constructor(e,t){super(e,"vec4",r.P.Draw,((n,o,r)=>n.setUniform4fv(e,t(o,r))))}}},58406:(e,t,n)=>{n.d(t,{p:()=>i});var o=n(61809),r=n(99340);class i extends o.x{constructor(e,t){super(e,"float",r.P.Pass,((n,o,r)=>n.setUniform1f(e,t(o,r))))}}},82644:(e,t,n)=>{n.d(t,{j:()=>i});var o=n(61809),r=n(99340);class i extends o.x{constructor(e,t){super(e,"mat3",r.P.Draw,((n,o,r)=>n.setUniformMatrix3fv(e,t(o,r))))}}},35522:(e,t,n)=>{n.d(t,{c:()=>i});var o=n(61809),r=n(99340);class i extends o.x{constructor(e,t){super(e,"mat3",r.P.Pass,((n,o,r)=>n.setUniformMatrix3fv(e,t(o,r))))}}},8654:(e,t,n)=>{n.d(t,{g:()=>i});var o=n(61809),r=n(99340);class i extends o.x{constructor(e,t){super(e,"mat4",r.P.Pass,((n,o,r)=>n.setUniformMatrix4fv(e,t(o,r))))}}},78050:(e,t,n)=>{n.d(t,{R:()=>i});var o=n(61809),r=n(99340);class i extends o.x{constructor(e,t){super(e,"sampler2D",r.P.Draw,((n,o,r)=>n.bindTexture(e,t(o,r))))}}},61809:(e,t,n)=>{n.d(t,{x:()=>r});var o=n(99340);class r{constructor(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(this.name=e,this.type=t,this.arraySize=i,this.bind={[o.P.Pass]:null,[o.P.Draw]:null},r)switch(n){case o.P.Pass:this.bind[o.P.Pass]=r;break;case o.P.Draw:this.bind[o.P.Draw]=r}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},98634:(e,t,n)=>{n.d(t,{H:()=>r,If:()=>i,K:()=>o});const o=class{};function r(e){let t="";for(let n=0;n<(arguments.length<=1?0:arguments.length-1);n++)t+=e[n]+(n+1<1||arguments.length<=n+1?void 0:arguments[n+1]);return t+=e[e.length-1],t}function i(e,t){return e?t:arguments.length>2&&void 0!==arguments[2]?arguments[2]:""}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(r||(r={}))},99340:(e,t,n)=>{var o;n.d(t,{P:()=>o}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(o||(o={}))},45268:(e,t,n)=>{n.d(t,{B:()=>r});var o=n(93169);function r(){return!!(0,o.Z)("enable-feature:objectAndLayerId-rendering")}}}]);
//# sourceMappingURL=2503.7c799a19.chunk.js.map