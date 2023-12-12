/*! For license information please see 913.6a385e68.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_trees=self.webpackChunkn2_trees||[]).push([[913],{10913:(e,t,n)=>{n.r(t),n.d(t,{CalciteInputTimePicker:()=>ye,d:()=>G,defineCustomElement:()=>be});var i=n(51554),s=n(85955),r=n(14387),a=n(13160),o=n(19579),c=n(74310),l=n(47242),u=n(46895),h=n(16435),d=n(66486),m=n(52655),f=n(27871),p=n(52073),g=n(64044),v=n(65138),y=n(57601),b=n(96506),S=n(91438),M=n(2654),D=n(87138);const k="toggle-icon";var $=1e3,L=6e4,T=36e5,w="millisecond",I="second",Y="minute",O="hour",C="day",P="week",H="month",E="quarter",F="year",x="date",A="YYYY-MM-DDTHH:mm:ssZ",_="Invalid Date",V=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,z=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;const W={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},B=Object.freeze({__proto__:null,default:W});var j=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e};const Z={s:j,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+j(i,2,"0")+":"+j(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,H),r=n-s<0,a=t.clone().add(i+(r?-1:1),H);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:H,y:F,w:P,d:C,D:x,h:O,m:Y,s:I,ms:w,Q:E}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};var U="en",N={};N[U]=W;var R="$isDayjsObject",J=function(e){return e instanceof K||!(!e||!e[R])},q=function e(t,n,i){var s;if(!t)return U;if("string"===typeof t){var r=t.toLowerCase();N[r]&&(s=r),n&&(N[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;N[o]=t,s=o}return!i&&s&&(U=s),s||!i&&U},G=function(e,t){if(J(e))return e.clone();var n="object"===typeof t?t:{};return n.date=e,n.args=arguments,new K(n)},X=Z;X.l=q,X.i=J,X.w=function(e,t){return G(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var K=function(){function e(e){this.$L=q(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[R]=!0}var t=e.prototype;return t.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(X.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"===typeof t&&!/Z$/i.test(t)){var i=t.match(V);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.init()},t.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},t.$utils=function(){return X},t.isValid=function(){return!(this.$d.toString()===_)},t.isSame=function(e,t){var n=G(e);return this.startOf(t)<=n&&n<=this.endOf(t)},t.isAfter=function(e,t){return G(e)<this.startOf(t)},t.isBefore=function(e,t){return this.endOf(t)<G(e)},t.$g=function(e,t,n){return X.u(e)?this[t]:this.set(n,e)},t.unix=function(){return Math.floor(this.valueOf()/1e3)},t.valueOf=function(){return this.$d.getTime()},t.startOf=function(e,t){var n=this,i=!!X.u(t)||t,s=X.p(e),r=function(e,t){var s=X.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return i?s:s.endOf(C)},a=function(e,t){return X.w(n.toDate()[e].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},o=this.$W,c=this.$M,l=this.$D,u="set"+(this.$u?"UTC":"");switch(s){case F:return i?r(1,0):r(31,11);case H:return i?r(1,c):r(0,c+1);case P:var h=this.$locale().weekStart||0,d=(o<h?o+7:o)-h;return r(i?l-d:l+(6-d),c);case C:case x:return a(u+"Hours",0);case O:return a(u+"Minutes",1);case Y:return a(u+"Seconds",2);case I:return a(u+"Milliseconds",3);default:return this.clone()}},t.endOf=function(e){return this.startOf(e,!1)},t.$set=function(e,t){var n,i=X.p(e),s="set"+(this.$u?"UTC":""),r=(n={},n[C]=s+"Date",n[x]=s+"Date",n[H]=s+"Month",n[F]=s+"FullYear",n[O]=s+"Hours",n[Y]=s+"Minutes",n[I]=s+"Seconds",n[w]=s+"Milliseconds",n)[i],a=i===C?this.$D+(t-this.$W):t;if(i===H||i===F){var o=this.clone().set(x,1);o.$d[r](a),o.init(),this.$d=o.set(x,Math.min(this.$D,o.daysInMonth())).$d}else r&&this.$d[r](a);return this.init(),this},t.set=function(e,t){return this.clone().$set(e,t)},t.get=function(e){return this[X.p(e)]()},t.add=function(e,t){var n,i=this;e=Number(e);var s=X.p(t),r=function(t){var n=G(i);return X.w(n.date(n.date()+Math.round(t*e)),i)};if(s===H)return this.set(H,this.$M+e);if(s===F)return this.set(F,this.$y+e);if(s===C)return r(1);if(s===P)return r(7);var a=(n={},n[Y]=L,n[O]=T,n[I]=$,n)[s]||1,o=this.$d.getTime()+e*a;return X.w(o,this)},t.subtract=function(e,t){return this.add(-1*e,t)},t.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||_;var i=e||A,s=X.z(this),r=this.$H,a=this.$m,o=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,h=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},d=function(e){return X.s(r%12||12,e,"0")},m=u||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(z,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return X.s(t.$y,4,"0");case"M":return o+1;case"MM":return X.s(o+1,2,"0");case"MMM":return h(n.monthsShort,o,l,3);case"MMMM":return h(l,o);case"D":return t.$D;case"DD":return X.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(n.weekdaysMin,t.$W,c,2);case"ddd":return h(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(r);case"HH":return X.s(r,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return m(r,a,!0);case"A":return m(r,a,!1);case"m":return String(a);case"mm":return X.s(a,2,"0");case"s":return String(t.$s);case"ss":return X.s(t.$s,2,"0");case"SSS":return X.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")}))},t.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},t.diff=function(e,t,n){var i,s=this,r=X.p(t),a=G(e),o=(a.utcOffset()-this.utcOffset())*L,c=this-a,l=function(){return X.m(s,a)};switch(r){case F:i=l()/12;break;case H:i=l();break;case E:i=l()/3;break;case P:i=(c-o)/6048e5;break;case C:i=(c-o)/864e5;break;case O:i=c/T;break;case Y:i=c/L;break;case I:i=c/$;break;default:i=c}return n?i:X.a(i)},t.daysInMonth=function(){return this.endOf(H).$D},t.$locale=function(){return N[this.$L]},t.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=q(e,t,!0);return i&&(n.$L=i),n},t.clone=function(){return X.w(this.$d,this)},t.toDate=function(){return new Date(this.valueOf())},t.toJSON=function(){return this.isValid()?this.toISOString():null},t.toISOString=function(){return this.$d.toISOString()},t.toString=function(){return this.$d.toUTCString()},e}(),Q=K.prototype;G.prototype=Q,[["$ms",w],["$s",I],["$m",Y],["$H",O],["$W",C],["$M",H],["$y",F],["$D",x]].forEach((function(e){Q[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),G.extend=function(e,t){return e.$i||(e(t,K,G),e.$i=!0),G},G.locale=q,G.isDayjs=J,G.unix=function(e){return G(1e3*e)},G.en=N[U],G.Ls=N,G.p={};var ee=function(e){return e.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))},te={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},ne=function(e,t){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,i){var s=i&&i.toUpperCase();return n||t[i]||te[i]||ee(t[s])}))},ie=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,se=/\d\d/,re=/\d\d?/,ae=/\d*[^-_:/,()\s\d]+/,oe={},ce=function(e){return(e=+e)+(e>68?1900:2e3)};var le=function(e){return function(t){this[e]=+t}},ue=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],he=function(e){var t=oe[e];return t&&(t.indexOf?t:t.s.concat(t.f))},de=function(e,t){var n,i=oe.meridiem;if(i){for(var s=1;s<=24;s+=1)if(e.indexOf(i(s,0,t))>-1){n=s>12;break}}else n=e===(t?"pm":"PM");return n},me={A:[ae,function(e){this.afternoon=de(e,!1)}],a:[ae,function(e){this.afternoon=de(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[se,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[re,le("seconds")],ss:[re,le("seconds")],m:[re,le("minutes")],mm:[re,le("minutes")],H:[re,le("hours")],h:[re,le("hours")],HH:[re,le("hours")],hh:[re,le("hours")],D:[re,le("day")],DD:[se,le("day")],Do:[ae,function(e){var t=oe.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var i=1;i<=31;i+=1)t(i).replace(/\[|\]/g,"")===e&&(this.day=i)}],M:[re,le("month")],MM:[se,le("month")],MMM:[ae,function(e){var t=he("months"),n=(he("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[ae,function(e){var t=he("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,le("year")],YY:[se,function(e){this.year=ce(e)}],YYYY:[/\d{4}/,le("year")],Z:ue,ZZ:ue};var fe=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var i=function(e){for(var t=(e=ne(e,oe&&oe.formats)).match(ie),n=t.length,i=0;i<n;i+=1){var s=t[i],r=me[s],a=r&&r[0],o=r&&r[1];t[i]=o?{regex:a,parser:o}:s.replace(/^\[|\]$/g,"")}return function(e){for(var i={},s=0,r=0;s<n;s+=1){var a=t[s];if("string"===typeof a)r+=a.length;else{var o=a.regex,c=a.parser,l=e.slice(r),u=o.exec(l)[0];c.call(i,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(i),i}}(t),s=i(e),r=s.year,a=s.month,o=s.day,c=s.hours,l=s.minutes,u=s.seconds,h=s.milliseconds,d=s.zone,m=new Date,f=o||(r||a?1:m.getDate()),p=r||m.getFullYear(),g=0;r&&!a||(g=a>0?a-1:m.getMonth());var v=c||0,y=l||0,b=u||0,S=h||0;return d?new Date(Date.UTC(p,g,f,v,y,b,S+60*d.offset*1e3)):n?new Date(Date.UTC(p,g,f,v,y,b,S)):new Date(p,g,f,v,y,b,S)}catch(M){return new Date("")}};const pe=new Map([["ar",()=>n.e(4039).then(n.bind(n,14039))],["bg",()=>n.e(3024).then(n.bind(n,23024))],["bs",()=>n.e(4464).then(n.bind(n,94464))],["ca",()=>n.e(6656).then(n.bind(n,53388))],["cs",()=>n.e(5724).then(n.bind(n,35724))],["da",()=>n.e(3258).then(n.bind(n,73258))],["de",()=>n.e(7390).then(n.bind(n,57390))],["de-at",()=>n.e(1593).then(n.bind(n,91593))],["de-ch",()=>n.e(5190).then(n.bind(n,5190))],["el",()=>n.e(8181).then(n.bind(n,68181))],["en",()=>Promise.resolve().then((function(){return B}))],["en-au",()=>n.e(7055).then(n.bind(n,77055))],["en-ca",()=>n.e(5081).then(n.bind(n,85081))],["en-gb",()=>n.e(7486).then(n.bind(n,27486))],["es",()=>n.e(7233).then(n.bind(n,57233))],["es-mx",()=>n.e(8012).then(n.bind(n,88012))],["et",()=>n.e(6860).then(n.bind(n,62082))],["fi",()=>n.e(2779).then(n.bind(n,12779))],["fr",()=>n.e(3408).then(n.bind(n,13408))],["fr-ch",()=>n.e(249).then(n.bind(n,50249))],["he",()=>n.e(10).then(n.bind(n,90010))],["hi",()=>n.e(1367).then(n.bind(n,91367))],["hr",()=>n.e(8587).then(n.bind(n,28587))],["hu",()=>n.e(641).then(n.bind(n,60641))],["id",()=>n.e(7312).then(n.bind(n,17312))],["it",()=>n.e(7149).then(n.bind(n,7149))],["it-ch",()=>n.e(4633).then(n.bind(n,84633))],["ja",()=>n.e(9009).then(n.bind(n,49009))],["ko",()=>n.e(4426).then(n.bind(n,84426))],["lt",()=>n.e(1362).then(n.bind(n,1362))],["lv",()=>n.e(2628).then(n.bind(n,32628))],["mk",()=>n.e(2522).then(n.bind(n,82522))],["nl",()=>n.e(7004).then(n.bind(n,97004))],["nb",()=>n.e(5712).then(n.bind(n,95712))],["pl",()=>n.e(1331).then(n.bind(n,71331))],["pt",()=>n.e(4459).then(n.bind(n,34459))],["pt-br",()=>n.e(9376).then(n.bind(n,49376))],["ro",()=>n.e(2056).then(n.bind(n,42056))],["ru",()=>n.e(5213).then(n.bind(n,95213))],["sk",()=>n.e(5010).then(n.bind(n,35010))],["sl",()=>n.e(1560).then(n.bind(n,11560))],["sr",()=>n.e(3329).then(n.bind(n,93329))],["sv",()=>n.e(2390).then(n.bind(n,52390))],["th",()=>n.e(9155).then(n.bind(n,59155))],["tr",()=>n.e(4183).then(n.bind(n,94183))],["uk",()=>n.e(9370).then(n.bind(n,99370))],["vi",()=>n.e(3706).then(n.bind(n,43706))],["zh-cn",()=>n.e(8855).then(n.bind(n,8855))],["zh-hk",()=>n.e(9452).then(n.bind(n,39452))],["zh-tw",()=>n.e(2686).then(n.bind(n,52686))]]);G.extend((function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(ce=e.parseTwoDigitYear);var i=t.prototype,s=i.parse;i.parse=function(e){var t=e.date,i=e.utc,r=e.args;this.$u=i;var a=r[1];if("string"===typeof a){var o=!0===r[2],c=!0===r[3],l=o||c,u=r[2];c&&(u=r[2]),oe=this.$locale(),!o&&u&&(oe=n.Ls[u]),this.$d=fe(t,a,i),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),l&&t!=this.format(a)&&(this.$d=new Date("")),oe={}}else if(a instanceof Array)for(var h=a.length,d=1;d<=h;d+=1){r[1]=a[d-1];var m=n.apply(this,r);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}d===h&&(this.$d=new Date(""))}else s.call(this,e)}})),G.extend((function(e,t,n){var i=t.prototype,s=function(e){return e&&(e.indexOf?e:e.s)},r=function(e,t,n,i,r){var a=e.name?e:e.$locale(),o=s(a[t]),c=s(a[n]),l=o||c.map((function(e){return e.slice(0,i)}));if(!r)return l;var u=a.weekStart;return l.map((function(e,t){return l[(t+(u||0))%7]}))},a=function(){return n.Ls[n.locale()]},o=function(e,t){return e.formats[t]||ee(e.formats[t.toUpperCase()])},c=function(){var e=this;return{months:function(t){return t?t.format("MMMM"):r(e,"months")},monthsShort:function(t){return t?t.format("MMM"):r(e,"monthsShort","months",3)},firstDayOfWeek:function(){return e.$locale().weekStart||0},weekdays:function(t){return t?t.format("dddd"):r(e,"weekdays")},weekdaysMin:function(t){return t?t.format("dd"):r(e,"weekdaysMin","weekdays",2)},weekdaysShort:function(t){return t?t.format("ddd"):r(e,"weekdaysShort","weekdays",3)},longDateFormat:function(t){return o(e.$locale(),t)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};i.localeData=function(){return c.bind(this)()},n.localeData=function(){var e=a();return{firstDayOfWeek:function(){return e.weekStart||0},weekdays:function(){return n.weekdays()},weekdaysShort:function(){return n.weekdaysShort()},weekdaysMin:function(){return n.weekdaysMin()},months:function(){return n.months()},monthsShort:function(){return n.monthsShort()},longDateFormat:function(t){return o(e,t)},meridiem:e.meridiem,ordinal:e.ordinal}},n.months=function(){return r(a(),"months")},n.monthsShort=function(){return r(a(),"monthsShort","months",3)},n.weekdays=function(e){return r(a(),"weekdays",null,null,e)},n.weekdaysShort=function(e){return r(a(),"weekdaysShort","weekdays",3,e)},n.weekdaysMin=function(e){return r(a(),"weekdaysMin","weekdays",2,e)}})),G.extend((function(e,t,n){var i=t.prototype,s=i.format;n.en.formats=te,i.format=function(e){void 0===e&&(e=A);var t=this.$locale().formats,n=ne(e,void 0===t?{}:t);return s.call(this,n)}})),G.extend((function(e,t){var n=t.prototype.parse;t.prototype.parse=function(e){if("string"===typeof e.date){var t=this.$locale();e.date=t&&t.preparse?t.preparse(e.date):e.date}return n.bind(this)(e)};var i=t.prototype.format;t.prototype.format=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var s=i.call.apply(i,[this].concat(t)),r=this.$locale();return r&&r.postformat?r.postformat(s):s};var s=t.prototype.fromToBase;s&&(t.prototype.fromToBase=function(e,t,n,i){var r=this.$locale()||n.$locale();return s.call(this,e,t,n,i,r&&r.postformat)})})),G.extend((function(e,t,n){n.updateLocale=function(e,t){var i=n.Ls[e];if(i)return(t?Object.keys(t):[]).forEach((function(e){i[e]=t[e]})),i}}));const ge=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInputTimePickerBeforeClose=(0,i.yM)(this,"calciteInputTimePickerBeforeClose",6),this.calciteInputTimePickerBeforeOpen=(0,i.yM)(this,"calciteInputTimePickerBeforeOpen",6),this.calciteInputTimePickerChange=(0,i.yM)(this,"calciteInputTimePickerChange",7),this.calciteInputTimePickerClose=(0,i.yM)(this,"calciteInputTimePickerClose",6),this.calciteInputTimePickerOpen=(0,i.yM)(this,"calciteInputTimePickerOpen",6),this.focusOnOpen=!1,this.dialogId="time-picker-dialog--".concat((0,r.g)()),this.userChangedValue=!1,this.referenceElementId="input-time-picker-".concat((0,r.g)()),this.openTransitionProp="opacity",this.hostBlurHandler=()=>{const e=this.calciteInputEl.value,t=this.delocalizeTimeString(e);if(!t)return void this.setValue("");t!==this.value&&this.setValue(t);const n=(0,d.l)({value:this.value,locale:this.effectiveLocale,numberingSystem:this.numberingSystem,includeSeconds:this.shouldIncludeSeconds(),fractionalSecondDigits:(0,p.d)(this.step)});n!==e&&this.setInputValue(n),this.deactivate()},this.calciteInternalInputFocusHandler=e=>{this.readOnly||e.stopPropagation()},this.calciteInternalInputInputHandler=e=>{const{effectiveLocale:t,numberingSystem:n}=this;if(n&&"latn"!==n){const i=e.target;u.n.numberFormatOptions={locale:t,numberingSystem:n,useGrouping:!1};const s=u.n.delocalize(i.value).split("").map((e=>o.n.includes(e)?u.n.numberFormatter.format(Number(e)):e)).join("");this.setInputValue(s)}},this.timePickerChangeHandler=e=>{e.stopPropagation();const t=e.target.value,n=this.shouldIncludeSeconds();this.setValue((0,d.t)(t,n)),this.setInputValue((0,d.l)({value:t,locale:this.effectiveLocale,numberingSystem:this.numberingSystem,includeSeconds:n,fractionalSecondDigits:(0,p.d)(this.step)}))},this.popoverCloseHandler=()=>{(0,h.d)(this,{onDeactivate:()=>{this.calciteInputEl.setFocus(),this.focusOnOpen=!1}}),this.open=!1},this.popoverOpenHandler=()=>{(0,h.a)(this,{onActivate:()=>{this.focusOnOpen&&(this.calciteTimePickerEl.setFocus(),this.focusOnOpen=!1)}})},this.keyDownHandler=e=>{const{defaultPrevented:t,key:n}=e;if(!t)if("Enter"===n){if((0,s.s)(this)&&(e.preventDefault(),this.calciteInputEl.setFocus()),e.composedPath().includes(this.calciteTimePickerEl))return;const t=this.delocalizeTimeString(this.calciteInputEl.value);if((0,d.i)(t)){this.setValue(t);const e=(0,d.l)({value:this.value,locale:this.effectiveLocale,numberingSystem:this.numberingSystem,includeSeconds:this.shouldIncludeSeconds(),fractionalSecondDigits:(0,p.d)(this.step)});t&&this.calciteInputEl.value!==e&&this.setInputValue(e)}}else"ArrowDown"===n?(this.open=!0,this.focusOnOpen=!0,e.preventDefault()):"Escape"===n&&this.open&&(this.open=!1,e.preventDefault(),this.calciteInputEl.setFocus())},this.setCalcitePopoverEl=e=>{this.popoverEl=e},this.setInputAndTransitionEl=e=>{this.calciteInputEl=e,this.transitionEl=e},this.setCalciteTimePickerEl=e=>{this.calciteTimePickerEl=e,(0,h.c)(this,{focusTrapEl:e,focusTrapOptions:{initialFocus:!1,setReturnFocus:!1}})},this.setInputValue=e=>{this.calciteInputEl&&(this.calciteInputEl.value=e)},this.setValue=e=>{const t=this.value,n=(0,d.f)(e)||"";if(n===t)return;this.userChangedValue=!0,this.value=n||"";this.calciteInputTimePickerChange.emit().defaultPrevented&&(this.userChangedValue=!1,this.value=t,this.setInputValue((0,d.l)({value:t,locale:this.effectiveLocale,numberingSystem:this.numberingSystem,includeSeconds:this.shouldIncludeSeconds(),fractionalSecondDigits:(0,p.d)(this.step)})))},this.setValueDirectly=e=>{const t=this.shouldIncludeSeconds();this.value=(0,d.t)(e,t),this.setInputValue(this.value?(0,d.l)({value:this.value,includeSeconds:t,locale:this.effectiveLocale,numberingSystem:this.numberingSystem,fractionalSecondDigits:(0,p.d)(this.step)}):"")},this.onInputWrapperClick=()=>{this.open=!this.open},this.deactivate=()=>{this.open=!1},this.open=!1,this.disabled=!1,this.focusTrapDisabled=!1,this.form=void 0,this.readOnly=!1,this.messageOverrides=void 0,this.messages=void 0,this.name=void 0,this.numberingSystem=void 0,this.required=!1,this.scale="m",this.status="idle",this.overlayPositioning="absolute",this.placement="auto",this.step=60,this.value=null,this.defaultMessages=void 0,this.effectiveLocale=""}openHandler(e){(0,f.o)(this),this.disabled||this.readOnly?this.open=!1:e&&this.reposition(!0)}handleFocusTrapDisabled(e){this.open&&(e?(0,h.d)(this):(0,h.a)(this))}handleDisabledAndReadOnlyChange(e){e||(this.open=!1)}onMessagesChange(){}numberingSystemWatcher(e){this.setInputValue((0,d.l)({value:this.value,locale:this.effectiveLocale,numberingSystem:e,includeSeconds:this.shouldIncludeSeconds(),fractionalSecondDigits:(0,p.d)(this.step)}))}stepWatcher(e,t){(t>=60&&e>0&&e<60||e>=60&&t>0&&t<60)&&this.setValueDirectly(this.value)}valueWatcher(e){this.userChangedValue||this.setValueDirectly(e),this.userChangedValue=!1}async effectiveLocaleWatcher(e){await this.loadDateTimeLocaleData(),this.setInputValue((0,d.l)({value:this.value,locale:e,numberingSystem:this.numberingSystem,includeSeconds:this.shouldIncludeSeconds(),fractionalSecondDigits:(0,p.d)(this.step)}))}async setFocus(){await(0,l.c)(this),this.el.focus()}async reposition(){var e;let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];null===(e=this.popoverEl)||void 0===e||e.reposition(t)}onBeforeOpen(){this.calciteInputTimePickerBeforeOpen.emit()}onOpen(){this.calciteInputTimePickerOpen.emit()}onBeforeClose(){this.calciteInputTimePickerBeforeClose.emit()}onClose(){this.calciteInputTimePickerClose.emit()}delocalizeTimeString(e){G.locale(this.effectiveLocale.toLowerCase());const t=this.delocalizeTimeStringToParts(e);let n;if(this.shouldIncludeFractionalSeconds()){const i=(0,p.d)(this.step),s=this.delocalizeTimeStringToParts(e,"S");if(1===i)n=0!==s.millisecond?this.getTimeStringFromParts(s):this.getTimeStringFromParts(t);else{const r=this.delocalizeTimeStringToParts(e,"SS");if(2===i)n=0!==r.millisecond?this.getTimeStringFromParts(r):0!==s.millisecond?this.getTimeStringFromParts(s):this.getTimeStringFromParts(t);else if(i>=3){const i=this.delocalizeTimeStringToParts(e,"SSS");n=0!==i.millisecond?this.getTimeStringFromParts(i):0!==r.millisecond?this.getTimeStringFromParts(r):0!==s.millisecond?this.getTimeStringFromParts(s):this.getTimeStringFromParts(t)}}}else n=this.getTimeStringFromParts(t);return n}delocalizeTimeStringToParts(e,t){var n;const i=null===(n=this.localeConfig)||void 0===n||null===(n=n.formats)||void 0===n?void 0:n.LTS,s=i.match(/ss\.*(S+)/g);if(t&&this.shouldIncludeFractionalSeconds()){const e="ss.".concat(t);this.localeConfig.formats.LTS=s?i.replace(s[0],e):i.replace("ss",e)}else s&&(this.localeConfig.formats.LTS=i.replace(s[0],"ss"));G.updateLocale(this.getSupportedDayjsLocale((0,u.g)(this.effectiveLocale)),this.localeConfig);const r=G(e,["LTS","LT"]);return r.isValid()?{hour:r.get("hour"),minute:r.get("minute"),second:r.get("second"),millisecond:r.get("millisecond")}:{hour:null,minute:null,second:null,millisecond:null}}getTimeStringFromParts(e){let t="";if(!e)return t;if(null!==e.hour&&null!==e.minute&&(t="".concat((0,d.a)(e.hour),":").concat((0,d.a)(e.minute)),this.shouldIncludeSeconds()&&null!==e.second&&(t+=":".concat((0,d.a)(e.second)),this.shouldIncludeFractionalSeconds()&&null!==e.millisecond))){const n=(.001*e.millisecond).toFixed((0,p.d)(this.step));t+=".".concat(n.toString().replace("0.",""))}return t}getSupportedDayjsLocale(e){const t=e.toLowerCase();return"no"===t?"nb":"pt-pt"===t?"pt":t}async loadDateTimeLocaleData(){let e=(0,u.g)(this.effectiveLocale).toLowerCase();e=this.getSupportedDayjsLocale(e);const{default:t}=await pe.get(e)();this.localeConfig=t,G.locale(this.localeConfig,null,!0),G.updateLocale(e,this.getExtendedLocaleConfig(e))}getExtendedLocaleConfig(e){return"ar"===e?{meridiem:e=>e>12?"\u0645":"\u0635",formats:{LT:"HH:mm A",LTS:"HH:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm A",LLLL:"dddd D MMMM YYYY HH:mm A"}}:"en-au"===e?{meridiem:e=>e>12?"pm":"am"}:"en-ca"===e?{meridiem:e=>e>12?"p.m.":"a.m."}:"el"===e?{meridiem:e=>e>12?"\u03bc.\u03bc.":"\u03c0.\u03bc."}:"hi"===e?{formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, h:mm A",LLLL:"dddd, D MMMM YYYY, h:mm A"},meridiem:e=>e>12?"pm":"am"}:"ko"===e?{meridiem:e=>e>12?"\uc624\ud6c4":"\uc624\uc804"}:"zh-tw"===e?{formats:{LT:"AHH:mm",LTS:"AHH:mm:ss"}}:"zh-hk"===e?{formats:{LT:"AHH:mm",LTS:"AHH:mm:ss"},meridiem:e=>e>12?"\u4e0b\u5348":"\u4e0a\u5348"}:void 0}onLabelClick(){this.setFocus()}shouldIncludeSeconds(){return this.step<60}shouldIncludeFractionalSeconds(){return(0,p.d)(this.step)>0}connectedCallback(){(0,a.c)(this),(0,u.c)(this),(0,d.i)(this.value)?this.setValueDirectly(this.value):this.value=void 0,(0,c.c)(this),(0,s.c)(this),(0,m.c)(this)}async componentWillLoad(){(0,l.a)(this),await Promise.all([(0,m.s)(this),this.loadDateTimeLocaleData()]),this.open&&(0,f.o)(this)}componentDidLoad(){(0,l.s)(this),(0,d.i)(this.value)&&this.setInputValue((0,d.l)({value:this.value,locale:this.effectiveLocale,numberingSystem:this.numberingSystem,includeSeconds:this.shouldIncludeSeconds(),fractionalSecondDigits:(0,p.d)(this.step)}))}disconnectedCallback(){(0,a.d)(this),(0,c.d)(this),(0,s.d)(this),(0,u.d)(this),(0,h.d)(this),(0,m.d)(this)}componentDidRender(){(0,a.u)(this)}render(){const{disabled:e,messages:t,readOnly:n,dialogId:r}=this;return(0,i.h)(i.AA,{onBlur:this.hostBlurHandler,onKeyDown:this.keyDownHandler},(0,i.h)("div",{class:"input-wrapper",onClick:this.onInputWrapperClick},(0,i.h)("calcite-input-text",{"aria-autocomplete":"none","aria-haspopup":"dialog",disabled:e,icon:"clock",id:this.referenceElementId,label:(0,c.g)(this),lang:this.effectiveLocale,onCalciteInputTextInput:this.calciteInternalInputInputHandler,onCalciteInternalInputTextFocus:this.calciteInternalInputFocusHandler,readOnly:n,role:"combobox",scale:this.scale,status:this.status,ref:this.setInputAndTransitionEl}),!this.readOnly&&this.renderToggleIcon(this.open)),(0,i.h)("calcite-popover",{focusTrapDisabled:!0,id:r,label:t.chooseTime,lang:this.effectiveLocale,onCalcitePopoverClose:this.popoverCloseHandler,onCalcitePopoverOpen:this.popoverOpenHandler,open:this.open,overlayPositioning:this.overlayPositioning,placement:this.placement,referenceElement:this.referenceElementId,triggerDisabled:!0,ref:this.setCalcitePopoverEl},(0,i.h)("calcite-time-picker",{lang:this.effectiveLocale,messageOverrides:this.messageOverrides,numberingSystem:this.numberingSystem,onCalciteInternalTimePickerChange:this.timePickerChangeHandler,scale:this.scale,step:this.step,tabIndex:this.open?void 0:-1,value:this.value,ref:this.setCalciteTimePickerEl})),(0,i.h)(s.H,{component:this}))}renderToggleIcon(e){return(0,i.h)("span",{class:k},(0,i.h)("calcite-icon",{icon:e?"chevron-up":"chevron-down",scale:(0,g.g)(this.scale)}))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],focusTrapDisabled:["handleFocusTrapDisabled"],disabled:["handleDisabledAndReadOnlyChange"],readOnly:["handleDisabledAndReadOnlyChange"],messageOverrides:["onMessagesChange"],numberingSystem:["numberingSystemWatcher"],step:["stepWatcher"],value:["valueWatcher"],effectiveLocale:["effectiveLocaleWatcher"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;-webkit-user-select:none;user-select:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([scale=s]){--calcite-toggle-spacing:0.5rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1rem)}:host([scale=m]){--calcite-toggle-spacing:0.75rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1.5rem)}:host([scale=l]){--calcite-toggle-spacing:1rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 2rem)}.input-wrapper{position:relative}.toggle-icon{position:absolute;display:flex;cursor:pointer;align-items:center;inset-inline-end:0;inset-block:0;padding-inline:var(--calcite-toggle-spacing)}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-input-time-picker",{open:[1540],disabled:[516],focusTrapDisabled:[516,"focus-trap-disabled"],form:[513],readOnly:[516,"read-only"],messageOverrides:[1040],messages:[1040],name:[1],numberingSystem:[1,"numbering-system"],required:[516],scale:[513],status:[513],overlayPositioning:[1,"overlay-positioning"],placement:[513],step:[2],value:[1025],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],reposition:[64]}]);function ve(){if("undefined"===typeof customElements)return;["calcite-input-time-picker","calcite-action","calcite-icon","calcite-input-text","calcite-loader","calcite-popover","calcite-progress","calcite-time-picker"].forEach((e=>{switch(e){case"calcite-input-time-picker":customElements.get(e)||customElements.define(e,ge);break;case"calcite-action":customElements.get(e)||(0,v.d)();break;case"calcite-icon":customElements.get(e)||(0,y.d)();break;case"calcite-input-text":customElements.get(e)||(0,b.d)();break;case"calcite-loader":customElements.get(e)||(0,S.d)();break;case"calcite-popover":customElements.get(e)||(0,M.d)();break;case"calcite-progress":customElements.get(e)||(0,D.d)();break;case"calcite-time-picker":customElements.get(e)||(0,d.d)()}}))}ve();const ye=ge,be=ve}}]);
//# sourceMappingURL=913.6a385e68.chunk.js.map