(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0f78":function(a,t,e){"use strict";e("d3b7"),e("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{PageCur:"home",invite:0}},onLoad:function(a){var t=this;a.PageCur&&(this.PageCur=a.PageCur),a.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",a.invite)),a.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:a.code,invite:e.data},method:"POST",success:function(a){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",a.data.data.info),t.share(a.data.data.info.company_id,a.data.data.info.id)}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:a.code},method:"POST",success:function(a){uni.setStorageSync("userInfo",a.data.data.info),t.share(a.data.data.info.company_id,a.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(a){""!=a.data&&null!=a.data?t.getuserinfo(a.data.id):wxlogin()},fail:function(a){wxlogin()}})},methods:{getuserinfo:function(a){var t=this;a&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:a},method:"POST",success:function(a){a.data.data.info?(uni.setStorageSync("userInfo",a.data.data.info),t.share(a.data.data.info.company_id,a.data.data.info.id)):wxlogin()}})},NavChange:function(a){this.PageCur=a.currentTarget.dataset.cur},share:function(a){function t(t,e){return a.apply(this,arguments)}return t.toString=function(){return a.toString()},t}((function(a,t){var e="红人速推 | 网红直播带货一站式服务平台",n="红人速推就是网红多 商家多，直播带货就上红人速推。",i="http://cdn.hongrensutui.com/uploads/share/home_logo2.png";share(e,n,i,t)}))}};t.default=n},"199f":function(a,t,e){"use strict";e.r(t);var n=e("0f78"),i=e.n(n);for(var u in n)"default"!==u&&function(a){e.d(t,a,(function(){return n[a]}))}(u);t["default"]=i.a},"33ae":function(a,t,e){"use strict";var n=e("a3f3"),i=e.n(n);i.a},7458:function(a,t,e){"use strict";e.r(t);var n=e("8ec2"),i=e("199f");for(var u in i)"default"!==u&&function(a){e.d(t,a,(function(){return i[a]}))}(u);e("33ae");var c,o=e("f0c5"),r=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"b432e64c",null,!1,n["a"],c);t["default"]=r.exports},7613:function(a,t,e){var n=e("24fb");t=n(!1),t.push([a.i,".cu-bar.foot[data-v-b432e64c]{z-index:199}.cu-bar[data-v-b432e64c]{position:fixed;bottom:0;left:0;right:0;width:100%;height:50px;min-height:50px;z-index:200;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .text-red[data-v-b432e64c]{color:#e71d36}.cu-bar .text-gray[data-v-b432e64c]{color:#9eb3c2}.cu-bar.tabbar.shadow[data-v-b432e64c]{box-shadow:0 -1px 2px rgba(26,26,26,.1)}",""]),a.exports=t},"8ec2":function(a,t,e){"use strict";var n,i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",["home"==a.PageCur?e("home"):a._e(),"college"==a.PageCur?e("college"):a._e(),"caselist"==a.PageCur?e("caselist"):a._e(),"supply"==a.PageCur?e("supply"):a._e(),"user"==a.PageCur?e("user"):a._e(),e("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[e("v-uni-view",{staticClass:"action",class:"home"==a.PageCur?"text-red":"text-gray",attrs:{"data-cur":"home"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.NavChange.apply(void 0,arguments)}}},[e("v-uni-view",{class:"home"==a.PageCur?"cuIcon-homefill":"cuIcon-home"}),e("v-uni-view",[a._v("首页")])],1),e("v-uni-view",{staticClass:"action",class:"college"==a.PageCur?"text-red":"text-gray",attrs:{"data-cur":"college"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.NavChange.apply(void 0,arguments)}}},[e("v-uni-view",{class:"college"==a.PageCur?"cuIcon-crownfill":"cuIcon-crown"}),e("v-uni-view",[a._v("学院")])],1),e("v-uni-view",{staticClass:"action",class:"caselist"==a.PageCur?"text-red":"text-gray",attrs:{"data-cur":"caselist"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.NavChange.apply(void 0,arguments)}}},[e("v-uni-view",{class:"caselist"==a.PageCur?"cuIcon-discoverfill":"cuIcon-discover"}),e("v-uni-view",[a._v("案例")])],1),e("v-uni-view",{staticClass:"action",class:"supply"==a.PageCur?"text-red":"text-gray",attrs:{"data-cur":"supply"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.NavChange.apply(void 0,arguments)}}},[e("v-uni-view",{class:"supply"==a.PageCur?"cuIcon-cartfill":"cuIcon-cart"}),e("v-uni-view",[a._v("供求")])],1),e("v-uni-view",{staticClass:"action",class:"user"==a.PageCur?"text-red":"text-gray",attrs:{"data-cur":"user"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.NavChange.apply(void 0,arguments)}}},[e("v-uni-view",{class:"user"==a.PageCur?"cuIcon-myfill":"cuIcon-friendfavor"}),e("v-uni-view",[a._v("我的")])],1)],1)],1)},u=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return n}))},a3f3:function(a,t,e){var n=e("7613");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var i=e("4f06").default;i("459ab225",n,!0,{sourceMap:!1,shadowMode:!1})}}]);