"use strict";(self.webpackChunkn2_trees=self.webpackChunkn2_trees||[]).push([[56],{70056:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var h=i(27366),s=i(42537),l=i(32718),a=i(66978),r=i(49861),n=(i(93169),i(84936),i(69912)),p=i(92975),u=i(78983),c=(i(10064),i(99346),i(86741),i(86950),i(42265),i(16889),i(53866),i(73268),i(13005),i(32238),i(77577),i(848),i(80885),i(29909),i(14320),i(40316),i(81241),i(8878),i(65057),i(53704),i(38901),i(13874),i(24434),i(12869),i(69093),i(91583),i(67993),i(64369),i(13957),i(38236),i(53986),i(1243),i(81624),i(50516),i(46628),i(93268),i(63156),i(48202),i(94109),i(30932),i(38999),i(61574),i(41015),i(46228),i(41978),i(91505),i(39594),i(80613),i(13594),i(99894),i(37825),i(8548),i(53634),i(3667),i(46888),i(57808),i(52120),i(61441),i(68571),i(67466),i(15532),i(73271),i(34517),i(86909),i(21391),i(10106),i(53456),i(76200),i(35995),i(78084),i(92841),i(93985),i(13163),i(72965),i(29660),i(755),i(94538),i(61669),i(11486),i(35783),i(72516),i(5964),i(69986),i(41414),i(51995),i(24799),i(7467),i(4297),i(99536),i(16336),i(36207),i(98634),i(39416),i(70812),i(85992)),o=(i(14921),i(40281),i(3073),i(50898),i(79347),i(93311),i(76335),i(78952),i(22186),i(59486),i(19545),i(91908),i(46634),i(69610),i(2814)),g=i(88109),d=i(83978),f=i(34622),_=i(37995),w=i(73828),y=i(32344),m=i(85269),v=i(67581),I=i(13107),V=i(84848),H=i(45008);const T=[0,0];let C=class extends((0,I.Z)((0,o.Y)((0,g.y)(v.Z)))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new u.J,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){var t;this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),null===(t=this._highlightView)||void 0===t||t.processUpdate(e)}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new _.Z(this.layer.tileInfo,this.layer.fullExtent,null===t||void 0===t?void 0:t.effectiveMinLOD,null===t||void 0===t?void 0:t.effectiveMaxLOD),this._fetchQueue=new y.Z({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new m.Z({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),(0,V.Uf)(this,this.layer)){const e=this._highlightView=new c.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new d.Z(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new V.VF({createFetchPopupFeaturesQueryGeometry:(e,t)=>(0,H.K)(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,i)=>{e.graphicUpdateHandler({graphic:t,property:i})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add((()=>this.resampling),(()=>{this.doRefresh()}))),super.attach()}detach(){var e,t;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),null!==(e=this._popupHighlightHelper)&&void 0!==e&&e.destroy(),null!==(t=this._highlightView)&&void 0!==t&&t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t):[]}highlight(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):(0,s.kB)()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t;return(0,p.fS)(null===(t=this.layer.tileInfo)||void 0===t?void 0:t.spatialReference,e)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e))))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(T,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.tilemapCache,{signal:h,resamplingLevel:s=0}=t;if(!i)try{return await this._fetchImage(e,h)}catch(n){if(!(0,a.D_)(n)&&!this.resampling)return(0,f.V)(this._tileInfoView.tileInfo.size);if(s<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const h=new w.Z(i),l=await this.fetchTile(h,{...t,resamplingLevel:s+1});return(0,f.i)(this._tileInfoView,l,h,e)}}throw n}const l=new w.Z(0,0,0,0);let r;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:h}),l.level!==e.level&&!this.resampling)return(0,f.V)(this._tileInfoView.tileInfo.size);r=await this._fetchImage(l,h)}catch(n){if((0,a.D_)(n))throw n;r=await this._fetchImage(e,h)}return this.resampling?(0,f.i)(this._tileInfoView,r,l,e):r}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(t){(0,a.D_)(t)||l.Z.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};(0,h._)([(0,r.Cb)()],C.prototype,"resampling",null),(0,h._)([(0,r.Cb)()],C.prototype,"tilemapCache",null),C=(0,h._)([(0,n.j)("esri.views.2d.layers.TileLayerView2D")],C);const b=C}}]);
//# sourceMappingURL=56.a47d2ffb.chunk.js.map