(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f4e261c"],{1276:function(t,s,e){"use strict";var i=e("d784"),a=e("44e7"),r=e("825a"),n=e("1d80"),o=e("4840"),c=e("8aa5"),l=e("50c4"),d=e("14c3"),u=e("9263"),f=e("d039"),h=[].push,p=Math.min,v=4294967295,g=!f((function(){return!RegExp(v,"y")}));i("split",2,(function(t,s,e){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=String(n(this)),r=void 0===e?v:e>>>0;if(0===r)return[];if(void 0===t)return[i];if(!a(t))return s.call(i,t,r);var o,c,l,d=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,f+"g");while(o=u.call(g,i)){if(c=g.lastIndex,c>p&&(d.push(i.slice(p,o.index)),o.length>1&&o.index<i.length&&h.apply(d,o.slice(1)),l=o[0].length,p=c,d.length>=r))break;g.lastIndex===o.index&&g.lastIndex++}return p===i.length?!l&&g.test("")||d.push(""):d.push(i.slice(p)),d.length>r?d.slice(0,r):d}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:s.call(this,t,e)}:s,[function(s,e){var a=n(this),r=void 0==s?void 0:s[t];return void 0!==r?r.call(s,a,e):i.call(String(a),s,e)},function(t,a){var n=e(i,t,this,a,i!==s);if(n.done)return n.value;var u=r(t),f=String(this),h=o(u,RegExp),m=u.unicode,b=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),C=new h(g?u:"^(?:"+u.source+")",b),S=void 0===a?v:a>>>0;if(0===S)return[];if(0===f.length)return null===d(C,f)?[f]:[];var y=0,x=0,k=[];while(x<f.length){C.lastIndex=g?x:0;var L,_=d(C,g?f:f.slice(x));if(null===_||(L=p(l(C.lastIndex+(g?0:x)),f.length))===y)x=c(f,x,m);else{if(k.push(f.slice(y,x)),k.length===S)return k;for(var A=1;A<=_.length-1;A++)if(k.push(_[A]),k.length===S)return k;x=y=L}}return k.push(f.slice(y)),k}]}),!g)},"159b":function(t,s,e){var i=e("da84"),a=e("fdbc"),r=e("17c2"),n=e("9112");for(var o in a){var c=i[o],l=c&&c.prototype;if(l&&l.forEach!==r)try{n(l,"forEach",r)}catch(d){l.forEach=r}}},"17c2":function(t,s,e){"use strict";var i=e("b727").forEach,a=e("a640"),r=e("ae40"),n=a("forEach"),o=r("forEach");t.exports=n&&o?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,s,e){"use strict";var i=e("23e7"),a=e("17c2");i({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"64c7":function(t,s,e){},"76a1":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pay"},[e("van-nav-bar",{attrs:{title:"提交订单","left-text":"返回","left-arrow":""},on:{"click-left":t.back}}),e("div",{staticClass:"orders"},[e("div",{staticClass:"order-box"},[e("div",{staticClass:"address",on:{click:t.openPopup}},[t._v(t._s(t.userAddress.address))]),e("div",{staticClass:"order-content"},[e("div",{staticClass:"order-item"},[t._l(t.orderData,(function(s,i){return e("div",{key:i,staticClass:"items"},[e("div",{staticClass:"clearfix"},[e("div",{staticClass:"fl pro-img"},[e("img",{staticClass:"auto-img",attrs:{src:s.small_img,alt:""}})]),e("div",{staticClass:"fl pro-info"},[e("div",{staticClass:"fl"},[e("div",{staticClass:"names"},[e("div",{staticClass:"zh-name"},[t._v(t._s(s.name))]),e("div",{staticClass:"en-name"},[t._v(t._s(s.enname))])]),e("div",{staticClass:"rule"},[t._v(t._s(s.rule))])]),e("div",{staticClass:"fr"},[e("div",{staticClass:"price"},[t._v("￥"+t._s(s.price))]),e("div",{staticClass:"count"},[t._v("x"+t._s(s.count))])])])])])})),e("div",{staticClass:"order-total clearfix"},[e("div",{staticClass:"fr clearfix"},[e("span",{staticClass:"fl total-count"},[t._v("共计 "+t._s(t.counts)+" 件商品 合计：")]),e("span",{staticClass:"fl total-price"},[t._v("￥"+t._s(t.total))])])])],2)])]),e("van-submit-bar",{attrs:{price:100*t.total,"button-text":"立即结算","button-type":"info"},on:{submit:t.commit}}),e("van-popup",{staticClass:"popup-box",attrs:{position:"bottom"},model:{value:t.isOpen,callback:function(s){t.isOpen=s},expression:"isOpen"}},[e("van-address-list",{attrs:{list:t.addressList,"default-tag-text":"默认"},on:{select:t.selectAddress,add:t.goAddress},model:{value:t.aid,callback:function(s){t.aid=s},expression:"aid"}})],1)],1)],1)},a=[],r=(e("4160"),e("b0c0"),e("ac1f"),e("1276"),e("159b"),e("64c7"),{data:function(){return{isOpen:!1,aid:"",addressList:[],userAddress:{address:"请选择收货地址",phone:"",receiver:""},orderData:[],counts:0,total:0,sids:[]}},created:function(){this.sids=this.$route.query.sids.split("-"),this.getAddressData(),this.getPayOrderData(this.sids)},methods:{openPopup:function(){this.isOpen=!0},getAddressData:function(){var t=this,s=localStorage.getItem("__Tk");this.$toast.loading({message:"加载中....",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"findAddress",params:{appkey:this.appkey,tokenString:s}}).then((function(s){t.$toast.clear(),2e4==s.data.code&&s.data.result.forEach((function(s){var e={id:s.aid,tel:s.tel,name:s.name,address:s.province+s.city+s.county+s.addressDetail,isDefault:Boolean(s.isDefault)};s.isDefault&&(t.aid=s.aid,t.userAddress.address=e.address),t.addressList.push(e)}))})).catch((function(s){t.$toast.clear()}))},selectAddress:function(t){this.isOpen=!1,this.address=t.address,this.userAddress={address:t.address,phone:t.tel,receiver:t.name}},getPayOrderData:function(t){var s=this,e=localStorage.getItem("__Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/commitShopcart",params:{appkey:this.appkey,tokenString:e,sids:JSON.stringify(t)}}).then((function(t){s.$toast.clear(),5e4==t.data.code&&(t.data.result.forEach((function(t){s.counts+=t.count,s.total+=t.count*t.price})),s.orderData=t.data.result)})).catch((function(t){s.$toast.clear()}))},commit:function(){var t=this;if("请选择收货地址"!=this.userAddress.address){var s=localStorage.getItem("__Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/pay",data:{appkey:this.appkey,tokenString:s,sids:JSON.stringify(this.sids),phone:this.userAddress.phone,address:this.userAddress.address,receiver:this.userAddress.receiver}}).then((function(s){t.$toast.clear(),6e4===s.data.code&&t.$router.push({name:"Order"})})).catch((function(s){t.$toast.clear()}))}else this.$toast("请选择收货地址")},back:function(){this.$router.go(-1)},goAddress:function(){this.$router.push({name:"Address"})}}}),n=r,o=e("2877"),c=Object(o["a"])(n,i,a,!1,null,"5bfa8738",null);s["default"]=c.exports},a640:function(t,s,e){"use strict";var i=e("d039");t.exports=function(t,s){var e=[][t];return!!e&&i((function(){e.call(null,s||function(){throw 1},1)}))}},b0c0:function(t,s,e){var i=e("83ab"),a=e("9bf2").f,r=Function.prototype,n=r.toString,o=/^\s*function ([^ (]*)/,c="name";i&&!(c in r)&&a(r,c,{configurable:!0,get:function(){try{return n.call(this).match(o)[1]}catch(t){return""}}})},fdbc:function(t,s){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-2f4e261c.4da86fae.js.map