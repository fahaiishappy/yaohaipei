(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0f78":function(e,a,t){"use strict";var n=t("ee27");t("d3b7"),t("25f0"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t("9dcd")),u={components:{uniTopBar:i.default},data:function(){return{PageCur:"home",invite:0,userInfo:"",home:0,college:0,supply:0,celebrity:0,user:0}},onLoad:function(e){var a=this;e.PageCur&&(this.PageCur=e.PageCur),e.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",e.invite)),e.code?uni.getStorage({key:"invite",success:function(t){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:e.code,invite:t.data},method:"POST",success:function(e){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",e.data.data.info),a.share(e.data.data.info.company_id,e.data.data.info.id)}})},fail:function(t){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:e.code},method:"POST",success:function(e){uni.setStorageSync("userInfo",e.data.data.info),a.share(e.data.data.info.company_id,e.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data?a.getuserinfo(e.data.id):wxlogin()},fail:function(e){wxlogin()}})},methods:{getuserinfo:function(e){var a=this;e&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:e},method:"POST",success:function(e){e.data.data.info?(uni.setStorageSync("userInfo",e.data.data.info),a.share(e.data.data.info.company_id,e.data.data.info.id)):wxlogin()}})},NavChange:function(e){var a=this;a.PageCur=e.currentTarget.dataset.cur,"home"==a.PageCur&&(a.home=1),"college"==a.PageCur&&(a.college=1),"supply"==a.PageCur&&(a.supply=1),"celebrity"==a.PageCur&&(a.celebrity=1),"user"==a.PageCur&&(a.user=1)},share:function(e){function a(a,t){return e.apply(this,arguments)}return a.toString=function(){return e.toString()},a}((function(e,a){var t="红人速推 | 网红直播带货一站式服务平台",n="红人速推就是网红多 商家多，直播带货就上红人速推。",i="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(t,n,i,a)}))}};a.default=u},"199f":function(e,a,t){"use strict";t.r(a);var n=t("0f78"),i=t.n(n);for(var u in n)"default"!==u&&function(e){t.d(a,e,(function(){return n[e]}))}(u);a["default"]=i.a},"69da":function(e,a,t){"use strict";var n=t("def7"),i=t.n(n);i.a},7363:function(e,a,t){var n=t("24fb");a=n(!1),a.push([e.i,".cu-bar.foot[data-v-2f083598]{z-index:199}.cu-bar.foot[data-v-2f083598]{position:fixed;bottom:0;left:0;right:0;width:100%;height:50px;min-height:50px;z-index:200;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar.foot .text-red[data-v-2f083598]{color:#e71d36}.cu-bar.foot .text-gray[data-v-2f083598]{color:#9eb3c2}.cu-bar.foot.tabbar.shadow[data-v-2f083598]{box-shadow:0 -1px 2px rgba(26,26,26,.1)}.hide[data-v-2f083598]{display:none}.show[data-v-2f083598]{display:block}",""]),e.exports=a},7458:function(e,a,t){"use strict";t.r(a);var n=t("d855"),i=t("199f");for(var u in i)"default"!==u&&function(e){t.d(a,e,(function(){return i[e]}))}(u);t("69da");var o,r=t("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"2f083598",null,!1,n["a"],o);a["default"]=c.exports},d855:function(e,a,t){"use strict";var n,i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",[t("uni-top-bar",{attrs:{barid:1}}),t("v-uni-view",["home"==e.PageCur&&0==e.home?t("home"):t("home",{ref:"home",class:"home"==e.PageCur?"show":"hide"})],1),t("v-uni-view",["college"==e.PageCur&&0==e.college?t("college"):t("college",{class:"college"==e.PageCur?"show":"hide"})],1),t("v-uni-view",["supply"==e.PageCur&&0==e.supply?t("supply"):t("supply",{ref:"supply",class:"supply"==e.PageCur?"show":"hide"})],1),t("v-uni-view",["celebrity"==e.PageCur&&0==e.celebrity?t("celebrity"):t("celebrity",{class:"celebrity"==e.PageCur?"show":"hide"})],1),t("v-uni-view",["user"==e.PageCur&&0==e.user?t("user"):t("user",{ref:"user",class:"user"==e.PageCur?"show":"hide"})],1),t("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[t("v-uni-view",{staticClass:"action",class:"home"==e.PageCur?"text-red":"text-gray",attrs:{"data-cur":"home"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.NavChange.apply(void 0,arguments)}}},[t("v-uni-view",{class:"home"==e.PageCur?"cuIcon-homefill":"cuIcon-home"}),t("v-uni-view",[e._v("首页")])],1),t("v-uni-view",{staticClass:"action",class:"college"==e.PageCur?"text-red":"text-gray",attrs:{"data-cur":"college"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.NavChange.apply(void 0,arguments)}}},[t("v-uni-view",{class:"college"==e.PageCur?"cuIcon-crownfill":"cuIcon-crown"}),t("v-uni-view",[e._v("学院")])],1),t("v-uni-view",{staticClass:"action",class:"supply"==e.PageCur?"text-red":"text-gray",attrs:{"data-cur":"supply"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.NavChange.apply(void 0,arguments)}}},[t("v-uni-view",{class:"supply"==e.PageCur?"cuIcon-cartfill":"cuIcon-cart"}),t("v-uni-view",[e._v("供求")])],1),t("v-uni-view",{staticClass:"action",class:"celebrity"==e.PageCur?"text-red":"text-gray",attrs:{"data-cur":"celebrity"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.NavChange.apply(void 0,arguments)}}},[t("v-uni-view",{class:"celebrity"==e.PageCur?"cuIcon-discoverfill":"cuIcon-discover"}),t("v-uni-view",[e._v("红人")])],1),t("v-uni-view",{staticClass:"action",class:"user"==e.PageCur?"text-red":"text-gray",attrs:{"data-cur":"user"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.NavChange.apply(void 0,arguments)}}},[t("v-uni-view",{class:"user"==e.PageCur?"cuIcon-myfill":"cuIcon-friendfavor"}),t("v-uni-view",[e._v("我的")])],1)],1)],1)},u=[];t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return u})),t.d(a,"a",(function(){return n}))},def7:function(e,a,t){var n=t("7363");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=t("4f06").default;i("a8c2710e",n,!0,{sourceMap:!1,shadowMode:!1})}}]);