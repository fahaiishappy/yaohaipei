(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0f78":function(a,e,t){"use strict";(function(a){t("d3b7"),t("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{PageCur:"home",invite:0,backurl:location.href}},onLoad:function(a){var e=this;a.PageCur&&(this.PageCur=a.PageCur),a.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",a.invite)),a.code?uni.getStorage({key:"invite",success:function(t){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:a.code,invite:t.data},method:"POST",success:function(a){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",a.data.data.info),e.share(a.data.data.info.company_id,a.data.data.info.id)}})},fail:function(t){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:a.code},method:"POST",success:function(a){uni.setStorageSync("userInfo",a.data.data.info),e.share(a.data.data.info.company_id,a.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(a){""!=a.data&&null!=a.data?e.getuserinfo(a.data.id):wxlogin(e.backurl)},fail:function(a){wxlogin(e.backurl)}})},methods:{getuserinfo:function(a){var e=this;a&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:a},method:"POST",success:function(a){a.data.data.info?(uni.setStorageSync("userInfo",a.data.data.info),e.share(a.data.data.info.company_id,a.data.data.info.id)):wxlogin(e.backurl)}})},NavChange:function(a){this.PageCur=a.currentTarget.dataset.cur},share:function(a){function e(e,t){return a.apply(this,arguments)}return e.toString=function(){return a.toString()},e}((function(e,t){a("log",e,t," at pages/index/index.vue:134");var n=this.backurl,i="首页-红人速推 | 网红直播带货一站式服务平台",c="红人速推就是网红多 商家多，直播带货就上红人速推。",r=this.backurl;if(e>0){var u="http://cdn.hongrensutui.com/uploads/qrcode/"+t+"rz.png";r=r+"?invite="+t}else u="http://cdn.hongrensutui.com/uploads/share/renzheng_logo.png";share(n,i,c,u,r)}))}};e.default=n}).call(this,t("0de9")["log"])},"199f":function(a,e,t){"use strict";t.r(e);var n=t("0f78"),i=t.n(n);for(var c in n)"default"!==c&&function(a){t.d(e,a,(function(){return n[a]}))}(c);e["default"]=i.a},7458:function(a,e,t){"use strict";t.r(e);var n=t("d17a"),i=t("199f");for(var c in i)"default"!==c&&function(a){t.d(e,a,(function(){return i[a]}))}(c);t("b0da");var r,u=t("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"c3cfe4de",null,!1,n["a"],r);e["default"]=o.exports},"7f99":function(a,e,t){var n=t("8316");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var i=t("4f06").default;i("a4341d1a",n,!0,{sourceMap:!1,shadowMode:!1})},8316:function(a,e,t){var n=t("24fb");e=n(!1),e.push([a.i,".cu-bar.foot[data-v-c3cfe4de]{z-index:199}.cu-bar[data-v-c3cfe4de]{position:fixed;bottom:0;left:0;right:0;width:100%;height:44px;min-height:44px;z-index:200;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .text-red[data-v-c3cfe4de]{color:#e71d36}.cu-bar .text-gray[data-v-c3cfe4de]{color:#9eb3c2}.cu-bar.tabbar.shadow[data-v-c3cfe4de]{box-shadow:0 -1px 2px rgba(26,26,26,.1)}",""]),a.exports=e},b0da:function(a,e,t){"use strict";var n=t("7f99"),i=t.n(n);i.a},d17a:function(a,e,t){"use strict";var n,i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-uni-view",["home"==a.PageCur?t("home"):a._e(),"celebrity"==a.PageCur?t("celebrity"):a._e(),"caselist"==a.PageCur?t("caselist"):a._e(),"merchant"==a.PageCur?t("merchant"):a._e(),"user"==a.PageCur?t("user"):a._e(),t("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[t("v-uni-view",{staticClass:"action",class:"home"==a.PageCur?"text-red":"text-gray",attrs:{"data-cur":"home"},on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.NavChange.apply(void 0,arguments)}}},[t("v-uni-view",{class:"home"==a.PageCur?"cuIcon-homefill":"cuIcon-home"}),t("v-uni-view",[a._v("首页")])],1),t("v-uni-view",{staticClass:"action",class:"celebrity"==a.PageCur?"text-red":"text-gray",attrs:{"data-cur":"celebrity"},on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.NavChange.apply(void 0,arguments)}}},[t("v-uni-view",{class:"celebrity"==a.PageCur?"cuIcon-crownfill":"cuIcon-crown"}),t("v-uni-view",[a._v("红人")])],1),t("v-uni-view",{staticClass:"action",class:"caselist"==a.PageCur?"text-red":"text-gray",attrs:{"data-cur":"caselist"},on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.NavChange.apply(void 0,arguments)}}},[t("v-uni-view",{class:"caselist"==a.PageCur?"cuIcon-discoverfill":"cuIcon-discover"}),t("v-uni-view",[a._v("案例")])],1),t("v-uni-view",{staticClass:"action",class:"merchant"==a.PageCur?"text-red":"text-gray",attrs:{"data-cur":"merchant"},on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.NavChange.apply(void 0,arguments)}}},[t("v-uni-view",{class:"merchant"==a.PageCur?"cuIcon-shopfill":"cuIcon-shop"}),t("v-uni-view",[a._v("商家")])],1),t("v-uni-view",{staticClass:"action",class:"user"==a.PageCur?"text-red":"text-gray",attrs:{"data-cur":"user"},on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.NavChange.apply(void 0,arguments)}}},[t("v-uni-view",{class:"user"==a.PageCur?"cuIcon-myfill":"cuIcon-friendfavor"}),t("v-uni-view",[a._v("我的")])],1)],1)],1)},c=[];t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return n}))}}]);