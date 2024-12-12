"use strict";(self.webpackChunkn2_trees=self.webpackChunkn2_trees||[]).push([[4452,2078],{15909:(e,t,r)=>{r.d(t,{D:()=>a});var o=r(80292);function a(e){(null===e||void 0===e?void 0:e.writtenProperties)&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:a}=e;(0,o.l)(t)&&a&&t.originOf(r)!==a&&t.updateOrigin(r,a)}))}},80292:(e,t,r)=>{function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:()=>o})},24452:(e,t,r)=>{r.d(t,{save:()=>v,saveAs:()=>w});var o=r(65286),a=r(32698),n=r(73117),s=r(40739);const i="Media Layer",c="media-layer-save",l="media-layer-save-as",u=["media-layer:unsupported-source"];function p(e){return{isValid:"media"===e.type,errorMessage:"Layer.type should be 'media'"}}function d(e){return(0,a.Y)(e,"portal-item",!0)}function f(e){return Promise.resolve(e.layerJSON)}async function m(e,t){t.extent=e.fullExtent?await(0,n.$o)(e.fullExtent):null}async function h(e,t){t.title||(t.title=e.title),await m(e,t),(0,n.ck)(t,n.hz.METADATA)}async function v(e,t){return(0,o.a1)({layer:e,itemType:i,validateLayer:p,createJSONContext:e=>d(e),createItemData:f,errorNamePrefix:c,supplementalUnsupportedErrors:u,setItemProperties:m,saveResources:(t,r)=>(0,s.H)(e.resourceReferences,r)},t)}async function w(e,t,r){return(0,o.po)({layer:e,itemType:i,validateLayer:p,createJSONContext:e=>d(e),createItemData:f,errorNamePrefix:l,supplementalUnsupportedErrors:u,newItem:t,setItemProperties:h,saveResources:(t,r)=>(0,s.H)(e.resourceReferences,r)},r)}},65286:(e,t,r)=>{r.d(t,{a1:()=>y,po:()=>g});var o=r(10064),a=r(15909),n=r(7575),s=r(98995),i=r(32698),c=r(73117),l=r(9634);async function u(e){const{layer:t,errorNamePrefix:r,validateLayer:a}=e;await t.load(),function(e,t,r){const a=r(e);if(!a.isValid)throw new o.Z("".concat(t,":invalid-parameters"),a.errorMessage,{layer:e})}(t,r,a)}function p(e,t){return"Layer (title: ".concat(e.title,", id: ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t)}function d(e){const{item:t,errorNamePrefix:r,layer:a,validateItem:n}=e;if(function(e){const{item:t,itemType:r,additionalItemType:a,errorNamePrefix:n,layer:s}=e,i=[r];if(a&&i.push(a),!i.includes(t.type)){const e=i.map((e=>"'".concat(e,"'"))).join(", ");throw new o.Z("".concat(n,":portal-item-wrong-type"),'Portal item type should be one of: "'.concat(e,'"'),{item:t,layer:s})}}(e),n){const e=n(t);if(!e.isValid)throw new o.Z("".concat(r,":invalid-parameters"),e.errorMessage,{layer:a})}}function f(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:a}=t;if(!a)throw new o.Z("".concat(r,":portal-item-not-set"),p(t,"requires the portalItem property to be set"));if(!a.loaded)throw new o.Z("".concat(r,":portal-item-not-loaded"),p(t,"cannot be saved to a portal item that does not exist or is inaccessible"));d({...e,item:a})}function m(e){var t,r,o,a;const{newItem:i,itemType:c}=e;let l=s.default.from(i);return l.id&&(l=l.clone(),l.id=null),null!==(r=(t=l).type)&&void 0!==r||(t.type=c),null!==(a=(o=l).portal)&&void 0!==a||(o.portal=n.Z.getDefault()),d({...e,item:l}),l}function h(e){return(0,i.Y)(e,"portal-item")}async function v(e,t,r){var o,a;"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const n=e.write({},t);return await Promise.all(null!==(o=null===(a=t.resources)||void 0===a?void 0:a.pendingOperations)&&void 0!==o?o:[]),(0,l.z)(t,{errorName:"layer-write:unsupported"},r),n}function w(e){(0,c.qj)(e,c.hz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function y(e,t){const{layer:r,createItemData:o,createJSONContext:n,setItemProperties:s,saveResources:i,supplementalUnsupportedErrors:c}=e;await u(e),f(e);const l=r.portalItem,p=n?n(l):h(l),d=await v(r,p,{...t,supplementalUnsupportedErrors:c}),m=await o({layer:r,layerJSON:d},l);return await(null===s||void 0===s?void 0:s(r,l,m)),w(l),await l.update({data:m}),(0,a.D)(p),await(null===i||void 0===i?void 0:i(l,p)),l}async function g(e,t){const{layer:r,createItemData:o,createJSONContext:n,setItemProperties:s,saveResources:i,supplementalUnsupportedErrors:c}=e;await u(e);const l=m(e),p=n?n(l):h(l),d=await v(r,p,{...t,supplementalUnsupportedErrors:c}),f=await o({layer:r,layerJSON:d},l);return await s(r,l,f),w(l),await async function(e,t,r){const o=e.portal;await o.signIn(),await o.user.addItem({item:e,data:t,folder:null===r||void 0===r?void 0:r.folder})}(l,f,t),r.portalItem=l,(0,a.D)(p),await(null===i||void 0===i?void 0:i(l,p)),l}},32698:(e,t,r)=>{r.d(t,{Y:()=>s,h:()=>n});var o=r(35995),a=r(7575);function n(e,t){return{...i(e,t),readResourcePaths:[]}}function s(e,t,r){const a=(0,o.mN)(e.itemUrl);return{...i(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:a?{rootPath:a.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function i(e,t){return{origin:t,url:(0,o.mN)(e.itemUrl),portal:e.portal||a.Z.getDefault(),portalItem:e}}},62078:(e,t,r)=>{r.d(t,{FO:()=>d,W7:()=>f,addOrUpdateResources:()=>i,fetchResources:()=>s,removeAllResources:()=>l,removeResource:()=>c});var o=r(76200),a=r(10064),n=r(35995);async function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;await e.load(r);const o=(0,n.v_)(e.itemUrl,"resources"),{start:a=1,num:s=10,sortOrder:i="asc",sortField:c="resource"}=t,l={query:{start:a,num:s,sortOrder:i,sortField:c,token:e.apiKey},signal:null===r||void 0===r?void 0:r.signal},u=await e.portal.request(o,l);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((t=>{let{created:r,size:o,resource:a}=t;return{created:new Date(r),size:o,resource:e.resourceFromPath(a)}}))}}async function i(e,t,r,o){const s=new Map;for(const{resource:n,content:c,compress:l,access:p}of t){if(!n.hasPath())throw new a.Z("portal-item-resource-".concat(r,":invalid-path"),"Resource does not have a valid path");const[e,t]=u(n.path),o="".concat(e,"/").concat(null!==l&&void 0!==l?l:"","/").concat(null!==p&&void 0!==p?p:"");s.has(o)||s.set(o,{prefix:e,compress:l,access:p,files:[]}),s.get(o).files.push({fileName:t,content:c})}await e.load(o);const i=(0,n.v_)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(const{prefix:a,compress:n,access:c,files:l}of s.values()){const t=25;for(let r=0;r<l.length;r+=t){const s=l.slice(r,r+t),u=new FormData;a&&"."!==a&&u.append("resourcesPrefix",a),n&&u.append("compress","true"),c&&u.append("access",c);let p=0;for(const{fileName:e,content:t}of s)u.append("file"+ ++p,t,e);u.append("f","json"),await e.portal.request(i,{method:"post",body:u,signal:null===o||void 0===o?void 0:o.signal})}}}async function c(e,t,r){if(!t.hasPath())throw new a.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const o=(0,n.v_)(e.userItemUrl,"removeResources");await e.portal.request(o,{method:"post",query:{resource:t.path},signal:null===r||void 0===r?void 0:r.signal}),t.portalItem=null}async function l(e,t){await e.load(t);const r=(0,n.v_)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:null===t||void 0===t?void 0:t.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function p(e){const[t,r]=function(e){const t=(0,n.Ml)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}(e),[o,a]=u(t);return[o,a,r]}async function d(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,o.Z)(e.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[r,,o]=p(e.path);return e.portalItem.resourceFromPath((0,n.v_)(r,t+o))}},40739:(e,t,r)=>{r.d(t,{H:()=>i,b:()=>c});var o=r(10064),a=r(66978),n=r(71907),s=r(62078);async function i(e,t,r){const o=await l(e,t,r);await u(o,t,r)}async function c(e,t,r,o,a){const n=await l(r,o,a);await e.update({data:t}),await u(n,o,a)}async function l(e,t,i){if(null===t||void 0===t||!t.resources)return;const c=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const l=new Set(t.resources.toKeep.map((e=>e.resource.path))),u=new Set,p=[];l.forEach((t=>{c.delete(t),e.paths.push(t)}));const d=[],f=[],m=[];for(const r of t.resources.toUpdate)if(c.delete(r.resource.path),l.has(r.resource.path)||u.has(r.resource.path)){const{resource:t,content:o,finish:a}=r,i=(0,s.W7)(t,(0,n.DO)());e.paths.push(i.path),d.push({resource:i,content:await(0,s.FO)(o),compress:r.compress}),a&&m.push((()=>a(i)))}else{e.paths.push(r.resource.path),f.push({resource:r.resource,content:await(0,s.FO)(r.content),compress:r.compress});const t=r.finish;t&&m.push((()=>t(r.resource))),u.add(r.resource.path)}for(const r of t.resources.toAdd)if(e.paths.push(r.resource.path),c.has(r.resource.path))c.delete(r.resource.path);else{d.push({resource:r.resource,content:await(0,s.FO)(r.content),compress:r.compress});const e=r.finish;e&&m.push((()=>e(r.resource)))}if(d.length||f.length){const{addOrUpdateResources:e}=await Promise.resolve().then(r.bind(r,62078));await e(t.portalItem,d,"add",i),await e(t.portalItem,f,"update",i)}if(m.forEach((e=>e())),0===p.length)return c;const h=await(0,a.UO)(p);if((0,a.k_)(i),h.length>0)throw new o.Z("save:resources","Failed to save one or more resources",{errors:h});return c}async function u(e,t,r){if(!e||!t.portalItem)return;const o=[];for(const a of e){const e=t.portalItem.resourceFromPath(a);o.push(e.portalItem.removeResource(e,r))}await(0,a.as)(o)}}}]);
//# sourceMappingURL=4452.fcd5ef74.chunk.js.map