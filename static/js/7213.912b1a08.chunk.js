"use strict";(self.webpackChunkn2_trees=self.webpackChunkn2_trees||[]).push([[7213],{63231:(e,t,n)=>{function s(e){return null!=u(e)||null!=i(e)}function o(e){return a.test(e)}function r(e){var t;return null!==(t=u(e))&&void 0!==t?t:i(e)}function i(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(c&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,s=0;for(;!t&&s<=e.length;)t=!l.test(e[s]),s++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function u(e){var t,n,s,o;const r=a.exec(e);if(null===r||void 0===r||!r.groups)return null;const i=r.groups,u=+i.year,l=+i.month-1,c=+i.day,p=+(null!==(t=i.hours)&&void 0!==t?t:"0"),d=+(null!==(n=i.minutes)&&void 0!==n?n:"0"),f=+(null!==(s=i.seconds)&&void 0!==s?s:"0");if(p>23)return null;if(d>59)return null;if(f>59)return null;const y=null!==(o=i.ms)&&void 0!==o?o:"0",m=y?+y.padEnd(3,"0").slice(0,3):0;let g;if(i.isUTC||!i.offsetSign)g=Date.UTC(u,l,c,p,d,f,m);else{const e=+i.offsetHours,t=+i.offsetMinutes;g=6e4*("+"===i.offsetSign?-1:1)*(60*e+t)+Date.UTC(u,l,c,p,d,f,m)}return Number.isNaN(g)?null:g}n.d(t,{mu:()=>o,of:()=>s,sG:()=>r});const a=(0,n(70804).Z)(/^(?:(\x2D?\d{4,})\x2D(\d{2})\x2D(\d{2}))(?:T(\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?)?(?:(Z)|(?:(\+|\x2D)(\d{2}):(\d{2})))?$/,{year:1,month:2,day:3,hours:4,minutes:5,seconds:6,ms:7,isUTC:8,offsetSign:9,offsetHours:10,offsetMinutes:11});const l=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,c=!Number.isNaN(new Date("technology 10").getTime())},47615:(e,t,n)=>{n.d(t,{O3:()=>Z,lG:()=>I,my:()=>T,q9:()=>c});var s=n(63231),o=n(10064),r=n(92975),i=n(3182),u=n(80457),a=n(37270);const l={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function c(e){return l[e]}function*p(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*d(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function f(e){for(const t of e)if(t.length>2)return!0;return!1}function y(e){let t=0;for(let n=0;n<e.length;n++){const s=e[n],o=e[(n+1)%e.length];t+=s[0]*o[1]-o[0]*s[1]}return t<=0}function m(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return v(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const s of t.coordinates)v(e,s,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const s of t.coordinates){h(e,s[0],n);for(let t=1;t<s.length;t++)w(e,s[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return F(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const s=t.coordinates;h(e,s[0],n);for(let o=1;o<s.length;o++)w(e,s[o],n);return e}(e,t,n)}}function h(e,t,n){const s=m(t);!function(e){return!y(e)}(s)?v(e,s,n):b(e,s,n)}function w(e,t,n){const s=m(t);!function(e){return y(e)}(s)?v(e,s,n):b(e,s,n)}function v(e,t,n){for(const s of t)F(e,s,n);e.lengths.push(t.length)}function b(e,t,n){for(let s=t.length-1;s>=0;s--)F(e,t[s],n);e.lengths.push(t.length)}function F(e,t,n){const[s,o,r]=t;e.coords.push(s,o),n.hasZ&&e.coords.push(r||0)}function S(e){switch(typeof e){case"string":return(0,s.mu)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function Z(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!e)throw new o.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new o.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const s="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,i=(0,r.oR)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(".*(".concat(t,")$"),"i");if(!s||!i.test(s))throw new o.Z("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function T(e){var t,n;let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=[],r=new Set,i=new Set;let u,l=!1,y=null,m=!1,{geometryType:g=null}=s;for(const w of p(e)){const{geometry:e,properties:t,id:n}=w;if((!e||(g||(g=c(e.type)),c(e.type)===g))&&(l||(l=f(d(e))),m||(m=null!=n,m&&(u=typeof n,t&&(y=Object.keys(t).filter((e=>t[e]===n))))),t&&y&&m&&null!=n&&(y.length>1?y=y.filter((e=>t[e]===n)):1===y.length&&(y=t[y[0]]===n?y:[])),t))for(const s in t){if(r.has(s))continue;const e=S(t[s]);if("unknown"===e){i.add(s);continue}i.delete(s),r.add(s);const n=(0,a.q6)(s);n&&o.push({name:n,alias:s,type:e})}}const h=null!==(t=(0,a.q6)(1===(null===(n=y)||void 0===n?void 0:n.length)&&y[0]||null))&&void 0!==t?t:void 0;if(h)for(const c of o)if(c.name===h&&(0,a.H7)(c)){c.type="esriFieldTypeOID";break}return{fields:o,geometryType:g,hasZ:l,objectIdFieldName:h,objectIdFieldType:u,unknownFields:Array.from(i)}}function I(e,t){return Array.from(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const{geometryType:n,objectIdField:s}=t;for(const r of e){var o;const{geometry:e,properties:a,id:l}=r;if(e&&c(e.type)!==n)continue;const p=a||{};let d;s&&(d=p[s],null==l||d||(p[s]=d=l));const f=new i.u_(e?g(new u.Z,e,t):null,p,null,null!==(o=d)&&void 0!==o?o:void 0);yield f}}()}(p(e),t))}},63543:(e,t,n)=>{n.d(t,{Dm:()=>d,Hq:()=>y,MS:()=>m,bU:()=>l});var s=n(1413),o=n(93169),r=n(84652),i=n(60480),u=n(96978),a=n(76115);function l(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a.I4:"esriGeometryPolyline"===e?a.ET:a.lF}}}const c=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let p=1;function d(e,t){if((0,o.Z)("esri-csp-restrictions"))return()=>(0,s.Z)({[t]:null},e);try{let n="this".concat(f(t)," = null;");for(const t in e)n+="this".concat(f(t)," = ").concat(JSON.stringify(e[t]),";");const s=new Function("\n      return class AttributesClass$".concat(p++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return()=>new s}catch(n){return()=>(0,s.Z)({[t]:null},e)}}function f(e){return c.test(e)?".".concat(e):'["'.concat(e,'"]')}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,r.d9)(e)}}]}function m(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:i.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:u.s,editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},68808:(e,t,n)=>{n.d(t,{O0:()=>d,av:()=>a,b:()=>g,d1:()=>c,og:()=>m});var s=n(63231),o=n(92975),r=n(37270);class i{constructor(){this.code=null,this.description=null}}class u{constructor(e){this.error=new i,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function a(e){return new u(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new l(e)}const p=new Set;function d(e,t,n){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];p.clear();for(const i in n){const o=e.get(i);if(!o)continue;const u=f(o,n[i]);if(p.add(o.name),o&&(s||o.editable)){const e=(0,r.Qc)(o,u);if(e)return a((0,r.vP)(e,o,u));t[o.name]=u}}for(const r of null!==(o=e.requiredFields)&&void 0!==o?o:[]){var o;if(!p.has(r.name))return a('missing required field "'.concat(r.name,'"'))}return null}function f(e,t){let n=t;return(0,r.H7)(e)&&"string"==typeof t?n=parseFloat(t):(0,r.qN)(e)&&null!=t&&"string"!=typeof t?n=String(t):(0,r.y2)(e)&&"string"==typeof t&&(n=(0,s.sG)(t)),(0,r.Pz)(n)}let y;function m(e,t){if(!e||!(0,o.JY)(t))return e;if("rings"in e||"paths"in e){if(null==y)throw new TypeError("geometry engine not loaded");return y.simplify(t,e)}return e}async function g(e,t){!(0,o.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==y&&(y=await Promise.all([n.e(9058),n.e(4126)]).then(n.bind(n,50309))),y}()}},67213:(e,t,n)=>{n.d(t,{$9:()=>T,G4:()=>k,Lu:()=>Z,WW:()=>D,d:()=>A,eS:()=>G,gp:()=>x,j:()=>P,w9:()=>C,yN:()=>N});var s=n(70804),o=n(1413),r=(n(59486),n(76200)),i=n(10064),u=n(32718),a=n(35995),l=n(92975),c=n(81753),p=n(83406),d=n(6908),f=n(47615),y=n(63543),m=n(68808),g=n(52410),h=n(85249),w=n(6701),v=n(78952);const b=()=>u.Z.getLogger("esri.layers.ogc.ogcFeatureUtils"),F="startindex",S=new Set([F,"offset"]),Z="http://www.opengis.net/def/crs/",T="".concat(Z,"OGC/1.3/CRS84");var I,j;async function C(e,t){var n;let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5;const{links:l}=e,c=B(l,"items",I.geojson)||B(l,"http://www.opengis.net/def/rel/ogc/1.0/items",I.geojson);if(null==c)throw new i.Z("ogc-feature-layer:missing-items-page","Missing items url");const{apiKey:p,customParameters:d,signal:m}=s,v=(0,a.hF)(c.href,e.landingPage.url),S=(0,o.Z)((0,o.Z)({limit:u},d),{},{token:p}),Z=(0,a.fl)(v,S),T={accept:I.geojson},{data:j}=await(0,r.Z)(Z,{signal:m,headers:T}),C=null!==(n=E(Z,u,j.links))&&void 0!==n?n:F;(0,f.O3)(j);const P=(0,f.my)(j,{geometryType:t.geometryType}),k=t.fields||P.fields||[],x=null!=t.hasZ?t.hasZ:P.hasZ,G=P.geometryType,A=t.objectIdField||P.objectIdFieldName||"OBJECTID";let N=t.timeInfo;const D=k.find((e=>{let{name:t}=e;return t===A}));if(D)D.editable=!1,D.nullable=!1;else{if(!P.objectIdFieldType)throw new i.Z("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");k.unshift({name:A,alias:A,type:"number"===P.objectIdFieldType?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(A!==P.objectIdFieldName){const e=k.find((e=>{let{name:t}=e;return t===P.objectIdFieldName}));e&&(e.type="esriFieldTypeInteger")}k===P.fields&&P.unknownFields.length>0&&b().warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:P.unknownFields}});for(const o of k){if(null==o.name&&(o.name=o.alias),null==o.alias&&(o.alias=o.name),"esriFieldTypeOID"!==o.type&&"esriFieldTypeGlobalID"!==o.type&&(o.editable=null==o.editable||!!o.editable,o.nullable=null==o.nullable||!!o.nullable),!o.name)throw new i.Z("ogc-feature-layer:invalid-field-name","field name is missing",{field:o});if(!h.v.jsonValues.includes(o.type))throw new i.Z("ogc-feature-layer:invalid-field-type",'invalid type for field "'.concat(o.name,'"'),{field:o})}if(N){var O;const e=new g.Z(k);if(N.startTimeField){const t=e.get(N.startTimeField);t?(N.startTimeField=t.name,t.type="esriFieldTypeDate"):N.startTimeField=null}if(N.endTimeField){const t=e.get(N.endTimeField);t?(N.endTimeField=t.name,t.type="esriFieldTypeDate"):N.endTimeField=null}if(N.trackIdField){const t=e.get(N.trackIdField);t?N.trackIdField=t.name:(N.trackIdField=null,b().warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:N}}))}(O=N).timeReference||(O.timeReference={timeZoneIANA:w.pt}),N.startTimeField||N.endTimeField||(b().warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:N}}),N=void 0)}return{drawingInfo:G?(0,y.bU)(G):null,extent:M(e),geometryType:G,fields:k,hasZ:!!x,objectIdField:A,paginationParameter:C,timeInfo:N}}async function P(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:n,url:s}=e,u=B(n,"data",I.json)||B(n,"http://www.opengis.net/def/rel/ogc/1.0/data",I.json);if(null==u)throw new i.Z("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:l,customParameters:c,signal:p}=t,d=(0,a.hF)(u.href,s),{data:f}=await(0,r.Z)(d,{signal:p,headers:{accept:I.json},query:(0,o.Z)((0,o.Z)({},c),{},{token:l})});for(const o of f.collections)o.landingPage=e;return f}async function k(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:n,url:s}=e,u=B(n,"conformance",I.json)||B(n,"http://www.opengis.net/def/rel/ogc/1.0/conformance",I.json);if(null==u)throw new i.Z("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:l,customParameters:c,signal:p}=t,d=(0,a.hF)(u.href,s),{data:f}=await(0,r.Z)(d,{signal:p,headers:{accept:I.json},query:(0,o.Z)((0,o.Z)({},c),{},{token:l})});return f}async function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{apiKey:n,customParameters:s,signal:i}=t,{data:u}=await(0,r.Z)(e,{signal:i,headers:{accept:I.json},query:(0,o.Z)((0,o.Z)({},s),{},{token:n})});return u.url=e,u}async function G(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:n,url:s}=e,i=B(n,"service-desc",I.openapi);if(null==i)return b().warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:u,customParameters:l,signal:c}=t,p=(0,a.hF)(i.href,s),{data:d}=await(0,r.Z)(p,{signal:c,headers:{accept:I.openapi},query:(0,o.Z)((0,o.Z)({},l),{},{token:u})});return d}function A(e){const t=(0,s.Z)(/^http:\/\/www\.opengis.net\/def\/crs\/(.*)\/(.*)\/(.*)$/i,{authority:1,version:2,code:3}).exec(e),n=null===t||void 0===t?void 0:t.groups;if(!n)return null;const{authority:o,code:r}=n;switch(o.toLowerCase()){case"ogc":switch(r.toLowerCase()){case"crs27":return v.Z.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return v.Z.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(r,10);return Number.isNaN(e)?null:e}default:return null}}async function N(e,t,n){const s=await D(e,t,n);return(0,p.cn)(s)}async function D(e,t,n){var s,u;const{collection:{links:y,landingPage:{url:h}},layerDefinition:w,maxRecordCount:b,queryParameters:{apiKey:F,customParameters:S},spatialReference:Z,supportedCrs:T}=e,j=B(y,"items",I.geojson)||B(y,"http://www.opengis.net/def/rel/ogc/1.0/items",I.geojson);if(null==j)throw new i.Z("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:C,num:P,start:k,timeExtent:x,where:G}=t;if(t.objectIds)throw new i.Z("ogc-feature-layer:query-by-objectids-not-supported","Queries with object ids are not supported");const A=v.Z.fromJSON(Z),N=null!==(s=t.outSpatialReference)&&void 0!==s?s:A,D=N.isWGS84?null:O(N,T),R=q(C,T),M=function(e){if(null==e)return null;const{start:t,end:n}=e;return"".concat(null!=t?t.toISOString():"..","/").concat(null!=n?n.toISOString():"..")}(x),E=null!=(X=G)&&X&&"1=1"!==X?X:null,U=null!==P&&void 0!==P?P:null==k?b:10,Q=0===k?void 0:k,{fields:H,geometryType:W,hasZ:z,objectIdField:L,paginationParameter:$}=w,J=(0,a.hF)(j.href,h),{data:V}=await(0,r.Z)(J,(0,o.Z)((0,o.Z)({},n),{},{query:(0,o.Z)((0,o.Z)((0,o.Z)({},S),R),{},{crs:D,datetime:M,query:E,limit:U,[$]:Q,token:F}),headers:{accept:I.geojson}})),K=(0,f.lG)(V,{geometryType:W,hasZ:z,objectIdField:L}),_=K.length===U&&!!B(null!==(u=V.links)&&void 0!==u?u:[],"next",I.geojson),Y=new g.Z(H);var X;for(const o of K){const e={};(0,m.O0)(Y,e,o.attributes,!0);for(const t of Y.fields)t.nullable&&!(t.name in e)&&(e[t.name]=null);e[L]=o.attributes[L],o.attributes=e}if(!D&&N.isWebMercator)for(const o of K)if(null!=o.geometry&&null!=W){const e=(0,p.di)(o.geometry,W,z,!1);e.spatialReference=v.Z.WGS84,o.geometry=(0,p.GH)((0,c.iV)(e,N))}for(const o of K)o.objectId=o.attributes[L];const ee=D||!D&&N.isWebMercator?N.toJSON():l.YU,te=new d.Z;return te.exceededTransferLimit=_,te.features=K,te.fields=H,te.geometryType=W,te.hasZ=z,te.objectIdFieldName=L,te.spatialReference=ee,te}function O(e,t){var n,s,o;const{isWebMercator:r,wkid:i}=e;if(!i)return null;const u=r?null!==(n=null!==(s=null!==(o=t[3857])&&void 0!==o?o:t[102100])&&void 0!==s?s:t[102113])&&void 0!==n?n:t[900913]:t[e.wkid];return u?"".concat(Z).concat(u):null}function R(e){if(null==e)return"";const{xmin:t,ymin:n,xmax:s,ymax:o}=e;return"".concat(t,",").concat(n,",").concat(s,",").concat(o)}function q(e,t){if(!function(e){return null!=e&&"extent"===e.type}(e))return null;const{spatialReference:n}=e;if(!n||n.isWGS84)return{bbox:R(e)};const s=O(n,t);return null!=s?{bbox:R(e),"bbox-crs":s}:n.isWebMercator?{bbox:R((0,c.iV)(e,v.Z.WGS84))}:null}function M(e){var t;const n=null===(t=e.extent)||void 0===t?void 0:t.spatial;if(!n)return null;const s=n.bbox[0],o=4===s.length,[r,i]=s,u=o?void 0:s[2];return{xmin:r,ymin:i,xmax:o?s[2]:s[3],ymax:o?s[3]:s[4],zmin:u,zmax:o?void 0:s[5],spatialReference:v.Z.WGS84.toJSON()}}function B(e,t,n){var s;return null!==(s=e.find((e=>{let{rel:s,type:o}=e;return s===t&&o===n})))&&void 0!==s?s:e.find((e=>{let{rel:n,type:s}=e;return n===t&&!s}))}function E(e,t,n){var s;if(!n)return;const o=B(n,"next",I.geojson),r=null===(s=(0,a.mN)(null===o||void 0===o?void 0:o.href))||void 0===s?void 0:s.query;if(!r)return;const i=(0,a.mN)(e).query,u=Object.keys(null!==i&&void 0!==i?i:{}),l=Object.entries(r).filter((e=>{let[t]=e;return!u.includes(t)})).find((e=>{let[n,s]=e;return S.has(n.toLowerCase())&&Number.parseInt(s,10)===t}));return null===l||void 0===l?void 0:l[0]}(j=I||(I={})).json="application/json",j.geojson="application/geo+json",j.openapi="application/vnd.oai.openapi+json;version=3.0"},96978:(e,t,n)=>{n.d(t,{C:()=>o,s:()=>s});const s={supportsDate:!1,supportsFixedInterval:!1,supportsAutoInterval:!1,supportsFixedBoundaries:!1,supportedStatistics:void 0},o={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryBins:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:s,query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);
//# sourceMappingURL=7213.912b1a08.chunk.js.map