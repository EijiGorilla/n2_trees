"use strict";(self.webpackChunkn2_trees=self.webpackChunkn2_trees||[]).push([[3838],{13838:(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});var s,l=r(27366),i=(r(59486),r(40281)),o=r(77178),n=r(97642),a=r(66978),u=r(94172),y=r(35995),p=r(49861),d=r(25243),f=(r(63780),r(93169),r(38511)),h=r(69912),c=r(31201),b=r(78952),v=r(30651),m=r(6693),g=r(6061),_=r(29598),S=r(71684),C=r(56811),w=r(45948),k=r(91505),x=r(46784),E=r(54472),P=r(643),I=r(21857),G=r(53866);let Z=s=class extends(k.Z.EventedMixin((0,x.eC)(E.Z))){constructor(){super(...arguments),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([(0,u.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.parent=this,t.layer=this.layer}),u.Z_),(0,u.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=t.parent=null}),u.Z_),(0,u.YP)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=this,r.layer=this.layer}),u.Z_),(0,u.YP)((()=>this.layer),(e=>{if(this.sublayers)for(const t of this.sublayers)t.layer=e}),u.Z_)])}initialize(){(0,u.N1)((()=>this.networkLink)).then((()=>(0,u.N1)((()=>!0===this.visible)))).then((()=>this.load()))}load(e){var t,r;if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const l=null!=e?e.signal:null,o=this._fetchService(null!==(t=null===(r=this._get("networkLink"))||void 0===r?void 0:r.href)&&void 0!==t?t:"",l).then((e=>{var t;const r=(0,I.lm)(e.sublayers);this.fullExtent=G.Z.fromJSON(r),this.sourceJSON=e;const l=(0,d.se)(i.Z.ofType(s),(0,I.j5)(s,e));this.sublayers?this.sublayers.addMany(l):this.sublayers=l,null!==(t=this.layer)&&void 0!==t&&t.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(o),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}_fetchService(e,t){return(0,I.CS)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((e=>(0,I.Cw)(e.data)))}};(0,l._)([(0,p.Cb)()],Z.prototype,"description",void 0),(0,l._)([(0,p.Cb)({type:G.Z})],Z.prototype,"fullExtent",void 0),(0,l._)([(0,p.Cb)()],Z.prototype,"id",void 0),(0,l._)([(0,p.Cb)({readOnly:!0,value:null})],Z.prototype,"networkLink",void 0),(0,l._)([(0,p.Cb)({json:{write:{allowNull:!0}}})],Z.prototype,"parent",void 0),(0,l._)([(0,p.Cb)({type:i.Z.ofType(Z),json:{write:{allowNull:!0}}})],Z.prototype,"sublayers",void 0),(0,l._)([(0,p.Cb)({value:null,json:{read:{source:"name",reader:e=>(0,P.Cb)(e)}}})],Z.prototype,"title",void 0),(0,l._)([(0,p.Cb)({value:!0})],Z.prototype,"visible",null),(0,l._)([(0,f.r)("visible",["visibility"])],Z.prototype,"readVisible",null),(0,l._)([(0,p.Cb)()],Z.prototype,"sourceJSON",void 0),(0,l._)([(0,p.Cb)()],Z.prototype,"layer",void 0),Z=s=(0,l._)([(0,h.j)("esri.layers.support.KMLSublayer")],Z);const O=Z,L=["kml","xml"];let F=class extends((0,m.h)((0,S.Q)((0,C.M)((0,g.q)((0,_.I)((0,n.R)(v.Z))))))){constructor(){super(...arguments),this._visibleFolders=[],this.allSublayers=new o.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=b.Z.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([(0,u.YP)((()=>this.sublayers),((e,t)=>{t&&t.forEach((e=>{e.parent=null,e.layer=null})),e&&e.forEach((e=>{e.parent=this,e.layer=this}))}),u.Z_),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return(0,I.j5)(O,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],s=e.toArray();for(;s.length;){const e=s[0];e.networkLink||(e.visible&&r.push(e.id),e.sublayers&&s.push(...e.sublayers.toArray())),s.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,y.vt)(this.url,L)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(a.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then((()=>{var t;return this.resourceInfo?{ssl:!1,data:this.resourceInfo}:(0,I.CS)(null!==(t=this.url)&&void 0!==t?t:"",this.outSpatialReference,this.refreshInterval,e)})),r=(0,I.Cw)(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;null!=this.extent&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const s of r.sublayers.items)t(s),s.visible&&s.fullExtent&&(null!=e?e.union(s.fullExtent):e=s.fullExtent.clone())};return t(this),e}};(0,l._)([(0,p.Cb)({readOnly:!0})],F.prototype,"allSublayers",void 0),(0,l._)([(0,p.Cb)({type:b.Z})],F.prototype,"outSpatialReference",void 0),(0,l._)([(0,p.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],F.prototype,"path",void 0),(0,l._)([(0,p.Cb)({readOnly:!0,json:{read:!1,write:!1}})],F.prototype,"legendEnabled",void 0),(0,l._)([(0,p.Cb)({type:["show","hide","hide-children"]})],F.prototype,"listMode",void 0),(0,l._)([(0,p.Cb)({type:["KML"]})],F.prototype,"operationalLayerType",void 0),(0,l._)([(0,p.Cb)({})],F.prototype,"resourceInfo",void 0),(0,l._)([(0,p.Cb)({type:i.Z.ofType(O),json:{write:{ignoreOrigin:!0}}})],F.prototype,"sublayers",void 0),(0,l._)([(0,f.r)(["web-map","portal-item"],"sublayers",["visibleFolders"])],F.prototype,"readSublayersFromItemOrWebMap",null),(0,l._)([(0,f.r)("service","sublayers",["sublayers"])],F.prototype,"readSublayers",null),(0,l._)([(0,c.c)("sublayers")],F.prototype,"writeSublayers",null),(0,l._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],F.prototype,"type",void 0),(0,l._)([(0,p.Cb)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],F.prototype,"title",null),(0,l._)([(0,p.Cb)(w.HQ)],F.prototype,"url",void 0),(0,l._)([(0,p.Cb)({readOnly:!0})],F.prototype,"visibleSublayers",null),(0,l._)([(0,p.Cb)({type:G.Z})],F.prototype,"extent",void 0),(0,l._)([(0,p.Cb)()],F.prototype,"fullExtent",null),F=(0,l._)([(0,h.j)("esri.layers.KMLLayer")],F);const M=F},21857:(e,t,r)=>{r.d(t,{CS:()=>b,Cw:()=>c,Yu:()=>g,j5:()=>v,lm:()=>_});var s=r(42265),l=r(19545),i=r(44055),o=r(76200),n=r(84652),a=r(35995),u=r(78952),y=r(41414),p=r(376),d=r(9014),f=r(49818);const h={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function c(e){var t;const r=e.folders||[],s=r.slice(),l=new Map,i=new Map,o=new Map,a=new Map,u=new Map,y={esriGeometryPoint:i,esriGeometryPolyline:o,esriGeometryPolygon:a};((null===(t=e.featureCollection)||void 0===t?void 0:t.layers)||[]).forEach((e=>{const t=(0,n.d9)(e);t.featureSet.features=[];const r=e.featureSet.geometryType;l.set(r,t);const s=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?m(i,s,e.featureSet.features):"esriGeometryPolyline"===r?m(o,s,e.featureSet.features):"esriGeometryPolygon"===r&&m(a,s,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{u.set(e.id,e)})),r.forEach((t=>{t.networkLinkIds.forEach((r=>{const l=function(e,t,r){const s=function(e,t){let r;return t.some((t=>t.id===e&&(r=t,!0))),r}(e,r);return s&&(s.parentFolderId=t,s.networkLink=s),s}(r,t.id,e.networkLinks);l&&s.push(l)}))})),s.forEach((e=>{if(e.featureInfos){e.points=(0,n.d9)(l.get("esriGeometryPoint")),e.polylines=(0,n.d9)(l.get("esriGeometryPolyline")),e.polygons=(0,n.d9)(l.get("esriGeometryPolygon")),e.mapImages=[];for(const r of e.featureInfos)switch(r.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{var t;const s=y[r.type].get(r.id);s&&(null===(t=e[h[r.type]])||void 0===t||t.featureSet.features.push(s));break}case"GroundOverlay":{const t=u.get(r.id);t&&e.mapImages.push(t);break}}e.fullExtent=_([e])}}));const p=_(s);return{folders:r,sublayers:s,extent:p}}function b(e,t,r,i){const n=null===l.id||void 0===l.id?void 0:l.id.findCredential(e);e=(0,a.fl)(e,{token:null===n||void 0===n?void 0:n.token});const u=s.default.kmlServiceUrl;return(0,o.Z)(u,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:i})}function v(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];const l=[],i={},o=t.sublayers,n=new Set(t.folders.map((e=>e.id)));return o.forEach((t=>{const o=new e;if(r?o.read(t,r):o.read(t),s.length&&n.has(o.id)&&(o.visible=s.includes(o.id)),i[t.id]=o,null!=t.parentFolderId&&-1!==t.parentFolderId){var a;const e=i[t.parentFolderId];e.sublayers||(e.sublayers=[]),null===(a=e.sublayers)||void 0===a||a.unshift(o)}else l.unshift(o)})),l}function m(e,t,r){r.forEach((r=>{e.set(r.attributes[t],r)}))}async function g(e){const t=f.Z.fromJSON(e.featureSet).features,r=e.layerDefinition,s=(0,d.i)(r.drawingInfo.renderer),l=i.Z.fromJSON(e.popupInfo),o=[];for(const i of t){const e=await s.getSymbolAsync(i);i.symbol=e,i.popupTemplate=l,i.visible=!0,o.push(i)}return o}function _(e){const t=(0,y.Ue)(y.G_),r=(0,y.Ue)(y.G_);for(const o of e){var s,l,i;if(null!==(s=o.polygons)&&void 0!==s&&null!==(s=s.featureSet)&&void 0!==s&&s.features)for(const e of o.polygons.featureSet.features)(0,p.Yg)(t,e.geometry),(0,y.TC)(r,t);if(null!==(l=o.polylines)&&void 0!==l&&null!==(l=l.featureSet)&&void 0!==l&&l.features)for(const e of o.polylines.featureSet.features)(0,p.Yg)(t,e.geometry),(0,y.TC)(r,t);if(null!==(i=o.points)&&void 0!==i&&null!==(i=i.featureSet)&&void 0!==i&&i.features)for(const e of o.points.featureSet.features)(0,p.Yg)(t,e.geometry),(0,y.TC)(r,t);if(o.mapImages)for(const e of o.mapImages)(0,p.Yg)(t,e.extent),(0,y.TC)(r,t)}return(0,y.fS)(r,y.G_)?void 0:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:u.Z.WGS84}}}}]);
//# sourceMappingURL=3838.593c8933.chunk.js.map