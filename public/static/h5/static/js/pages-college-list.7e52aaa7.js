(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-college-list"],{"0524":function(t,n,i){"use strict";i.r(n);var e=i("1a5b"),a=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(n,t,(function(){return e[t]}))}(s);n["default"]=a.a},"05db":function(t,n,i){"use strict";var e=i("1e44"),a=i.n(e);a.a},"05fa":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},a=e;n.default=a},"06b3":function(t,n,i){"use strict";i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return s})),i.d(n,"a",(function(){return e}));var e={mescrollUni:i("4f16").default},a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("mescroll-uni",{ref:"mescrollRef",attrs:{height:"100%",top:t.topheight+43+42+"px",down:t.downOption,up:t.upOption},on:{init:function(n){arguments[0]=n=t.$handleEvent(n),t.mescrollInit.apply(void 0,arguments)},down:function(n){arguments[0]=n=t.$handleEvent(n),t.downCallback.apply(void 0,arguments)},up:function(n){arguments[0]=n=t.$handleEvent(n),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"bg-fff mb-0 indexpage",style:{top:t.topheight+85+"px"}},[i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"page-section"},[i("v-uni-view",{staticClass:"page-section-spacing"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},t._l(t.banner,(function(n,e){return n.page==t.college&&"1"==n.position?i("v-uni-swiper-item",{key:e,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.link(n.link)}}},[i("v-uni-view",{staticClass:"swiper-item"},[i("img",{staticClass:"banner",attrs:{src:n["img"],mode:"widthFix"}})])],1):t._e()})),1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"news_list"},t._l(t.goods,(function(n,e){return i("v-uni-view",{key:e,staticClass:"list solid-bottom",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage("college/details",n)}}},[i("v-uni-view",{staticClass:"data"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(n.title))]),i("v-uni-view",{staticClass:"time"},[i("v-uni-view",{staticClass:"cu-tag round light bg-grey",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.articlelist(n.pid,n.category)}}},[t._v(t._s(n.category))]),i("v-uni-view",{staticClass:"hits"},[i("v-uni-view",{staticClass:"click"},[t._v(t._s(n.views)+"人已学习")])],1)],1)],1),n["img"]?i("img",{staticClass:"information_img",attrs:{src:n["img"],mode:"widthFix"}}):t._e(),n["img"]||1!=n["type"]?t._e():i("img",{staticClass:"information_img",attrs:{src:"https://www.hongrensutui.com/h5/img/nopic.png"}}),n["img"]||2!=n["type"]?t._e():i("img",{staticClass:"information_img",attrs:{src:"https://www.hongrensutui.com/h5/img/nopic2.png"}})],1)})),1),i("v-uni-view",{staticClass:"cu-modal poptips",class:"Modal"==t.modalName?"show":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"vip",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.member.apply(void 0,arguments)}}},[t._v("成为学院超级会员，全部免费查看")]),i("v-uni-view",{staticClass:"vip",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.categorymember.apply(void 0,arguments)}}},[t._v("购买栏目")]),i("v-uni-view",{staticClass:"pay",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.openmember.apply(void 0,arguments)}}},[t._v("付费查看 (29.9元)")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal poplogin",class:"login"==t.modalName?"show":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("请登录后查看！")]),i("v-uni-view",{staticClass:"loginbtn"},[i("v-uni-button",{staticClass:"close",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),i("v-uni-button",{staticClass:"login",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal poptips",class:"Modalios"==t.modalName?"show":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("十分抱歉，由于相关规范，小程序暂不支持查看信息。")])],1)],1)],1)],1)},s=[]},"0bff":function(t,n,i){"use strict";i.r(n);var e=i("c63a"),a=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(n,t,(function(){return e[t]}))}(s);n["default"]=a.a},"0c17":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".app-tabs[data-v-e5b681a0]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;-webkit-box-shadow:0 2px 1px rgba(26,26,26,.1);box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-e5b681a0]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-e5b681a0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-e5b681a0]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-e5b681a0]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-border-radius:%?4?%;border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-e5b681a0]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=n},"128f":function(t,n,i){"use strict";i.r(n);var e=i("9ea9"),a=i("1e08");for(var s in a)"default"!==s&&function(t){i.d(n,t,(function(){return a[t]}))}(s);i("c18f");var o,l=i("f0c5"),u=Object(l["a"])(a["default"],e["b"],e["c"],!1,null,"07edaae6",null,!1,e["a"],o);n["default"]=u.exports},"13bb":function(t,n,i){"use strict";i.r(n);var e=i("fabd"),a=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(n,t,(function(){return e[t]}))}(s);n["default"]=a.a},"18e7":function(t,n,i){"use strict";i.r(n);var e=i("a9ee"),a=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(n,t,(function(){return e[t]}))}(s);n["default"]=a.a},"1a5b":function(t,n,i){"use strict";var e=i("4ea4");i("d3b7"),i("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(i("128f")),s=e(i("2c8d")),o=e(i("5a37")),l=e(i("e3f6")),u=e(i("d6d4")),c={components:{uniTopBar:a.default,AppTabs:s.default,MescrollItem:o.default,ListCourse:l.default,ListCash:u.default},data:function(){return{height:"400px",tabs:[],tabs_list:[],tabIndex:2,topheight:0,userInfo:[],within:"https://www.hongrensutui.com/h5/img/college_logo_left.png"}},onLoad:function(t){var n=this;this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),n.userInfo=t.data.data.info,uni.request({url:"https://www.hongrensutui.com/api/index/totaldocking",data:{userid:n.userInfo.id},method:"POST",success:function(t){0!=t.data.data.num?uni.showTabBarRedDot({index:1,text:""+t.data.data.num}):uni.hideTabBarRedDot({index:1})}}),n.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),n.userInfo=t.data.data.info,uni.request({url:"https://www.hongrensutui.com/api/index/totaldocking",data:{userid:n.userInfo.id},method:"POST",success:function(t){0!=t.data.data.num?uni.showTabBarRedDot({index:1,text:""+t.data.data.num}):uni.hideTabBarRedDot({index:1})}}),n.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?n.getuserinfo(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),uni.request({url:"https://www.hongrensutui.com/api/index/collegeclassify",method:"POST",success:function(t){t.data.data.list&&(n.tabs=t.data.data.list)}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(n){""!=n.data&&null!=n.data&&t.getuserinfo(n.data.id)}})},methods:{getuserinfo:function(t){var n=this;t&&uni.request({url:"https://www.hongrensutui.com/api/api/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),n.userInfo=t.data.data.info,uni.request({url:"https://www.hongrensutui.com/api/index/totaldocking",data:{userid:n.userInfo.id},method:"POST",success:function(t){0!=t.data.data.num?uni.showTabBarRedDot({index:1,text:""+t.data.data.num}):uni.hideTabBarRedDot({index:1})}}),n.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},swiperChange:function(t){this.tabIndex=t.detail.current},NavChange:function(t){uni.redirectTo({url:"/pages/index/index?PageCur="+t})},share:function(t){function n(n,i){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){var i="想学习更多的直播带货干货知识，就来红人学院！",e="红人速推就是网红多 商家多，直播带货就上红人速推。",a="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(i,e,a,n)}))}};n.default=c},"1d95":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return s})),i.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("uni-top-bar",{attrs:{barid:1,within:t.within}}),i("app-tabs",{attrs:{tabs:t.tabs,fixed:!0,topheight:t.topheight+43},model:{value:t.tabIndex,callback:function(n){t.tabIndex=n},expression:"tabIndex"}}),i("v-uni-swiper",{staticClass:"swiper",style:{height:t.height},attrs:{top:t.topheight+44+"px",current:t.tabIndex},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.swiperChange.apply(void 0,arguments)}}},t._l(t.tabs,(function(n,e){return i("v-uni-swiper-item",{key:e},[16!=n.id&&4!=n.id?i("mescroll-item",{ref:"item",refInFor:!0,attrs:{i:e,index:t.tabIndex,tabs:t.tabs}}):t._e(),16==n.id?i("list-course",{ref:"course",refInFor:!0,attrs:{i:e,index:t.tabIndex,tabs:t.tabs}}):t._e(),4==n.id?i("list-cash",{ref:"cash",refInFor:!0,attrs:{i:e,index:t.tabIndex,tabs:t.tabs}}):t._e()],1)})),1)],1)},s=[]},"1e08":function(t,n,i){"use strict";i.r(n);var e=i("3006"),a=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(n,t,(function(){return e[t]}))}(s);n["default"]=a.a},"1e44":function(t,n,i){var e=i("6815");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("29ad3da8",e,!0,{sourceMap:!1,shadowMode:!1})},2898:function(t,n,i){"use strict";i.r(n);var e=i("e080"),a=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(n,t,(function(){return e[t]}))}(s);n["default"]=a.a},"2c26":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".cu-bar[data-v-5c905d88]{position:static}",""]),t.exports=n},"2c8d":function(t,n,i){"use strict";i.r(n);var e=i("3b2c"),a=i("0bff");for(var s in a)"default"!==s&&function(t){i.d(n,t,(function(){return a[t]}))}(s);i("50c9");var o,l=i("f0c5"),u=Object(l["a"])(a["default"],e["b"],e["c"],!1,null,"e5b681a0",null,!1,e["a"],o);n["default"]=u.exports},3006:function(t,n,i){"use strict";i("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};n.default=e},"384e":function(t,n,i){"use strict";i.r(n);var e=i("1d95"),a=i("0524");for(var s in a)"default"!==s&&function(t){i.d(n,t,(function(){return a[t]}))}(s);i("65c0");var o,l=i("f0c5"),u=Object(l["a"])(a["default"],e["b"],e["c"],!1,null,"0e5a48ae",null,!1,e["a"],o);n["default"]=u.exports},"394f":function(t,n,i){var e=i("c3d3");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("bd1304ea",e,!0,{sourceMap:!1,shadowMode:!1})},"3b2c":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return s})),i.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return t.tabs&&t.tabs.length?i("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[i("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(n,e){return i("v-uni-view",{key:e,staticClass:"tab-item",class:{active:t.value===e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabClick(e,n)}}},[16!=n.id?i("span",[t._v(t._s(t.getTabName(n)))]):i("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),i("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},s=[]},4460:function(t,n,i){"use strict";var e=i("c753"),a=i.n(e);a.a},"50c9":function(t,n,i){"use strict";var e=i("8309"),a=i.n(e);a.a},"5a37":function(t,n,i){"use strict";i.r(n);var e=i("06b3"),a=i("18e7");for(var s in a)"default"!==s&&function(t){i.d(n,t,(function(){return a[t]}))}(s);var o,l=i("f0c5"),u=Object(l["a"])(a["default"],e["b"],e["c"],!1,null,"13c365c8",null,!1,e["a"],o);n["default"]=u.exports},"5e20":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=n},6198:function(t,n,i){"use strict";i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return s})),i.d(n,"a",(function(){return e}));var e={mescrollUni:i("4f16").default},a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("mescroll-uni",{ref:"mescrollRef",attrs:{height:"100%",top:t.topheight+43+42+"px",down:t.downOption,up:t.upOption},on:{init:function(n){arguments[0]=n=t.$handleEvent(n),t.mescrollInit.apply(void 0,arguments)},down:function(n){arguments[0]=n=t.$handleEvent(n),t.downCallback.apply(void 0,arguments)},up:function(n){arguments[0]=n=t.$handleEvent(n),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"bg-fff mb-0 clearfix indexpage",style:{top:t.topheight+85+"px"}},[i("v-uni-view",{staticClass:"uni-padding-wrap clearfix"},[i("v-uni-view",{staticClass:"page-section"},[i("v-uni-view",{staticClass:"page-section-spacing"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},t._l(t.banner,(function(n,e){return n.page==t.college&&"1"==n.position?i("v-uni-swiper-item",{key:e,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.link(n.link)}}},[i("v-uni-view",{staticClass:"swiper-item"},[i("img",{staticClass:"banner",attrs:{src:n["img"],mode:"widthFix"}})])],1):t._e()})),1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"article_list"},t._l(t.goods,(function(n,e){return i("v-uni-view",{key:e,staticClass:"list",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage("college/details",n)}}},[i("v-uni-view",{staticClass:"data"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(n.title))]),1==n.free||n.card_id>1||n.categoryfree||n.articlefree?i("v-uni-view",{staticClass:"tip",staticStyle:{border:"none",margin:"0"}}):i("v-uni-view",{staticClass:"tip"},[i("span",{staticClass:"lg text-gray cuIcon-lock"}),i("span",{staticClass:"tipname"},[t._v("您需要加入"+t._s(n.category)+"，才能下载！")])]),1==n.free||t.userInfo.card_id>1&&t.userInfo.card_id||n.categoryfree||n.articlefree?i("v-uni-view",{staticClass:"flie"},[i("a",{staticStyle:{color:"#333"},attrs:{href:n["file"],target:"_blank"}},[i("img",{staticClass:"flie_img",attrs:{src:t._f("flie_txt")(n["file"]),mode:"widthFix"}}),i("v-uni-view",{staticClass:"flie_name"},[t._v(t._s(t._f("flie_name")(n.file))),i("span",{staticClass:"lg text-gray cuIcon-unlock"})])],1)]):i("v-uni-view",{staticClass:"flie"},[i("img",{staticClass:"flie_img",attrs:{src:t._f("flie_txt")(n["file"]),mode:"widthFix"}}),i("v-uni-view",{staticClass:"flie_name"},[t._v(t._s(t._f("flie_name")(n.file))),i("span",{staticClass:"lg text-gray cuIcon-lock"})])],1),i("v-uni-view",{staticClass:"time"},[i("v-uni-view",{staticClass:"cu-tag round light bg-grey",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.articlelist(n.pid)}}},[t._v(t._s(n.category))]),i("v-uni-view",{staticClass:"cu-tag round light bg-orange"},[t._v(t._s(n.views)+"人已学习")])],1)],1)],1)})),1)],1),i("v-uni-view",{staticClass:"cu-modal poplogin",class:"login"==t.modalName?"show":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog dl"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("请登录后查看！")]),i("v-uni-view",{staticClass:"loginbtn"},[i("v-uni-button",{staticClass:"close",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),i("v-uni-button",{staticClass:"login",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal poptips",class:"Modalios"==t.modalName?"show":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("十分抱歉，由于相关规范，小程序暂不支持查看。")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:"schedule"==t.modalName?"show":""},[i("v-uni-view",{staticClass:"cu-dialog",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-bar bg-white"},[i("v-uni-view",{staticClass:"action text-gray"},[t._v(t._s(t.scheduletitle))]),i("v-uni-view",{staticClass:"action text-green",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[t._v("确定")])],1),i("v-uni-view",{staticClass:"padding-sm"},[i("v-uni-view",{staticClass:"padding bg-white clearfix"},[i("v-uni-view",{staticClass:"cu-progress"},[i("v-uni-view",{staticClass:"bg-red",style:[{width:t.percent+"%"}]},[t._v(t._s(t.percent+"%"))])],1),i("v-uni-view",{staticStyle:{float:"left","margin-top":"2vw"}},[t._v(t._s(t.scheduletip))]),i("v-uni-view",{staticStyle:{float:"right","margin-top":"2vw"}},[t._v(t._s(t.totalBytesSent)+"MB/"+t._s(t.totalBytesExpectedToSend)+"MB")])],1)],1)],1)],1)],1)},s=[]},"623d":function(t,n,i){"use strict";i("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},a=e;n.default=a},"65c0":function(t,n,i){"use strict";var e=i("394f"),a=i.n(e);a.a},6815:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.bg-fff[data-v-19f47b5b]{padding-bottom:3vw}.cu-bar[data-v-19f47b5b]{position:static}",""]),t.exports=n},8309:function(t,n,i){var e=i("0c17");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("baeb851e",e,!0,{sourceMap:!1,shadowMode:!1})},"9ea9":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return s})),i.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):i("span",[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])])]):i("span",[t.within?i("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},a9ee:function(t,n,i){"use strict";var e=i("4ea4");i("99af"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(i("05fa")),s=e(i("623d")),o={mixins:[a.default,s.default],data:function(){return{modalName:null,downOption:{auto:!1},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"~ 空空如也 ~"}},height:"400px",goods:[],topheight:0,indicatorDots:!0,autoplay:!0,interval:4e3,duration:500,banner:"",userInfo:"",college:"college",article_id:"",category_id:""}},props:{tabs:Array,bottom:String},mounted:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/getBanner",method:"POST",success:function(n){t.banner=n.data.data.list}}),t.topheight=t.StatusBar,t.height=uni.getSystemInfoSync().windowHeight+"px",t.college=t.college+this.tabs[this.i].id,t.freshen()},methods:{freshen:function(){var t=this;uni.getStorage({key:"userInfo",success:function(n){t.userInfo=n.data}})},downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var n=this;n.collegelist(t)},collegelist:function(t){var n=this,i=this;uni.request({url:"https://www.hongrensutui.com/api/index/collegelist",data:{mid:i.userInfo.id,id:this.tabs[this.i].id,pagenum:t.num,pagesize:t.size},method:"POST",success:function(e){var a=e.data.data.list,s=a.length;1==t.num&&(i.goods=[]),i.goods=i.goods.concat(e.data.data.list),n.mescroll.endByPage(s),setTimeout((function(){n.mescroll.endSuccess(s)}),20)},fail:function(t){i.mescroll.endErr()}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},articlelist:function(t,n){var i=this;uni.getStorage({key:"userInfo",success:function(i){uni.navigateTo({url:"/pages/college/article-list?id="+t+"&name="+n})},fail:function(t){i.modalName="login"}})},link:function(t){uni.navigateTo({url:"/pages/"+t})},navToDetailPage:function(t,n){var i=this;uni.getStorage({key:"userInfo",success:function(i){switch(uni.getSystemInfoSync().platform){case"android":1==n.free?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=2&msg=免费文章"}):i.data.card_id>1?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=平台会员"}):8==n.article_card_id?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=学院超级会员"}):n.categoryfree?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=已购买栏目"}):n.articlefree?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=已购买文章"}):uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=0&msg=付费文章"});break;case"ios":1==n.free?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=2&msg=免费文章"}):i.data.card_id>1?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=平台会员"}):8==n.article_card_id?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=学院超级会员"}):n.categoryfree?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=已购买栏目"}):n.articlefree?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=已购买文章"}):uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=0&msg=付费文章"});break}},fail:function(t){i.modalName="login"}})},wechatLogin:function(t){wxlogin()}}};n.default=o},b338:function(t,n,i){var e=i("5e20");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("91297c2c",e,!0,{sourceMap:!1,shadowMode:!1})},c18f:function(t,n,i){"use strict";var e=i("b338"),a=i.n(e);a.a},c3d3:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".swiper[data-v-0e5a48ae]{background-color:#fff}",""]),t.exports=n},c63a:function(t,n,i){"use strict";i("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t,n){n&&this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};n.default=e},c753:function(t,n,i){var e=i("2c26");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("98875d1c",e,!0,{sourceMap:!1,shadowMode:!1})},d6d4:function(t,n,i){"use strict";i.r(n);var e=i("6198"),a=i("2898");for(var s in a)"default"!==s&&function(t){i.d(n,t,(function(){return a[t]}))}(s);i("4460");var o,l=i("f0c5"),u=Object(l["a"])(a["default"],e["b"],e["c"],!1,null,"5c905d88",null,!1,e["a"],o);n["default"]=u.exports},e080:function(t,n,i){"use strict";var e=i("4ea4");i("99af"),i("b680"),i("acd8"),i("ac1f"),i("1276"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(i("05fa")),s=e(i("623d")),o={mixins:[a.default,s.default],data:function(){return{modalName:null,downOption:{auto:!1},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"~ 空空如也 ~"}},height:"400px",goods:[],topheight:0,indicatorDots:!0,autoplay:!0,interval:4e3,duration:500,banner:"",userInfo:"",college:"college",article_id:"",category_id:"",scheduletitle:"",scheduletip:"",percent:0,totalBytesSent:0,totalBytesExpectedToSend:0}},filters:{flie_name:function(t){var n=t.split("."),i=n[n.length-2].split("/"),e=i[i.length-1],a=n[n.length-1];return e=e.length>20?"《"+e.substring(0,20)+"...》":"《"+e+"》",e+"."+a},flie_txt:function(t){var n=t.split("."),i=n[n.length-1];return"pdf"==i?"https://www.hongrensutui.com/uploads/share/pdf_logo.png":"doc"==i||"docx"==i?"https://www.hongrensutui.com/uploads/share/doc_logo.png":"xls"==i?"https://www.hongrensutui.com/uploads/share/xls_logo.png":"xlsx"==i?"https://www.hongrensutui.com/uploads/share/xlsx_logo.png":"ppt"==i?"https://www.hongrensutui.com/uploads/share/ppt_logo.png":"pptx"==i?"https://www.hongrensutui.com/uploads/share/pptx_logo.png":"zip"==i?"https://www.hongrensutui.com/uploads/share/zip_logo.png":"rar"==i?"https://www.hongrensutui.com/uploads/share/rar_logo.png":void 0}},props:{tabs:Array,bottom:String},mounted:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/getBanner",method:"POST",success:function(n){t.banner=n.data.data.list}}),t.topheight=t.StatusBar,t.height=uni.getSystemInfoSync().windowHeight+"px",t.college=t.college+this.tabs[this.i].id,t.freshen()},methods:{freshen:function(){var t=this;uni.getStorage({key:"userInfo",success:function(n){t.userInfo=n.data}})},downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var n=this;n.collegelist(t)},collegelist:function(t){var n=this,i=this;uni.request({url:"https://www.hongrensutui.com/api/index/collegelist",data:{mid:i.userInfo.id,id:this.tabs[this.i].id,pagenum:t.num,pagesize:t.size},method:"POST",success:function(e){var a=e.data.data.list,s=a.length;1==t.num&&(i.goods=[]),i.goods=i.goods.concat(e.data.data.list),n.mescroll.endByPage(s),setTimeout((function(){n.mescroll.endSuccess(s)}),20)},fail:function(t){i.mescroll.endErr()}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},link:function(t){uni.navigateTo({url:"/pages/"+t})},articlelist:function(t){var n=this;uni.getStorage({key:"userInfo",success:function(n){uni.navigateTo({url:"/pages/college/cash-list?id="+t})},fail:function(t){n.modalName="login"}})},numFilter:function(t){var n=parseFloat(t).toFixed(2);return n},download:function(t){var n=this;uni.showModal({title:"文件下载",content:"是否下载此文件？",confirmText:"下载",success:function(i){if(i.confirm){n.scheduletip="",n.percent=0;var e=uni.downloadFile({url:t,success:function(t){200===t.statusCode&&uni.saveFile({tempFilePath:t.tempFilePath,success:function(t){uni.showToast({icon:"none",mask:!0,title:"文件已保存："+t.savedFilePath,duration:3e3}),setTimeout((function(){uni.openDocument({filePath:t.savedFilePath,success:function(t){}})}),1e3)}})}});e.onProgressUpdate((function(t){n.scheduletitle="文件下载",n.modalName="schedule",n.percent=t.progress,n.totalBytesSent=n.numFilter(t.totalBytesWritten/1024/1024),n.totalBytesExpectedToSend=n.numFilter(t.totalBytesExpectedToWrite/1024/1024),100==t.progress&&(n.scheduletip="文件下载完成")}))}}})},navToDetailPage:function(t,n){var i=this;uni.getStorage({key:"userInfo",success:function(i){switch(uni.getSystemInfoSync().platform){case"android":1==n.free?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=2&msg=免费文章"}):i.data.card_id>1?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=平台会员"}):8==n.article_card_id?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=学院超级会员"}):n.categoryfree?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=已购买栏目"}):n.articlefree?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=已购买文章"}):uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=0&msg=付费文章"});break;case"ios":1==n.free?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=2&msg=免费文章"}):i.data.card_id>1?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=平台会员"}):8==n.article_card_id?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=学院超级会员"}):n.categoryfree?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=已购买栏目"}):n.articlefree?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=已购买文章"}):uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=0&msg=付费文章"});break}},fail:function(t){i.modalName="login"}})},wechatLogin:function(t){wxlogin()}}};n.default=o},e3f6:function(t,n,i){"use strict";i.r(n);var e=i("f71c"),a=i("13bb");for(var s in a)"default"!==s&&function(t){i.d(n,t,(function(){return a[t]}))}(s);i("05db");var o,l=i("f0c5"),u=Object(l["a"])(a["default"],e["b"],e["c"],!1,null,"19f47b5b",null,!1,e["a"],o);n["default"]=u.exports},f71c:function(t,n,i){"use strict";i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return s})),i.d(n,"a",(function(){return e}));var e={mescrollUni:i("4f16").default},a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return t.showpage?i("v-uni-view",[i("mescroll-uni",{ref:"mescrollRef",attrs:{height:"100%",top:t.topheight+43+42+"px",down:t.downOption,up:t.upOption},on:{init:function(n){arguments[0]=n=t.$handleEvent(n),t.mescrollInit.apply(void 0,arguments)},down:function(n){arguments[0]=n=t.$handleEvent(n),t.downCallback.apply(void 0,arguments)},up:function(n){arguments[0]=n=t.$handleEvent(n),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"bg-fff mb-0 pb-0 clearfix indexpage",style:{top:t.topheight+85+"px"}},[i("v-uni-view",{staticClass:"uni-padding-wrap clearfix"},[i("v-uni-view",{staticClass:"page-section"},[i("v-uni-view",{staticClass:"page-section-spacing"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},t._l(t.banner,(function(n,e){return n.page==t.college&&"1"==n.position?i("v-uni-swiper-item",{key:e,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.bannerPage(n.link)}}},[i("v-uni-view",{staticClass:"swiper-item"},[i("img",{staticClass:"banner",attrs:{src:n["img"],mode:"widthFix"}})])],1):t._e()})),1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"videolist"},t._l(t.video,(function(n,e){return n.video.length>0?i("v-uni-view",{key:e,staticClass:"bg-fff"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(n.name))])],1),t._l(n.video,(function(n,e){return e<=1?i("v-uni-view",{key:e,staticClass:"item clearfix",attrs:{"data-target":"Image"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage(n.id)}}},[1==n.free?i("img",{staticClass:"free",attrs:{src:"https://www.hongrensutui.com/h5/img/free.png",mode:"widthFix"}}):t._e(),0==n.free?i("img",{staticClass:"free",attrs:{src:"https://www.hongrensutui.com/h5/img/free2.png",mode:"widthFix"}}):t._e(),n.img?i("img",{staticClass:"ptgz",attrs:{src:n["img"],mode:"widthFix"}}):i("img",{staticClass:"ptgz",attrs:{src:"https://www.hongrensutui.com/h5/img/noimg.jpg",mode:"widthFix"}}),i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(n.title))]),i("v-uni-view",{staticClass:"cu-tag light bg-red round sm hits"},[t._v("已有"+t._s(n.views)+"人学习")])],1)],1):t._e()})),n.video.length>2?i("v-uni-view",{staticClass:"more text-gray",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.videolist(n.id,n.name)}}},[t._v("点击查看更多")]):t._e()],2):t._e()})),1)],1),i("v-uni-view",{staticClass:"cu-modal poplogin",class:"login"==t.modalName?"show":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("请登录后查看！")]),i("v-uni-view",{staticClass:"loginbtn"},[i("v-uni-button",{staticClass:"close",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),i("v-uni-button",{staticClass:"login",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal poptips",class:"Modalios"==t.modalName?"show":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("十分抱歉，由于相关规范，小程序暂不支持查看。")])],1)],1)],1)],1):t._e()},s=[]},fabd:function(t,n,i){"use strict";var e=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(i("05fa")),s=e(i("623d")),o={mixins:[a.default,s.default],data:function(){return{downOption:{use:!1,isLock:!0,auto:!1},upOption:{use:!1,isLock:!0,auto:!1,toTop:{src:""}},height:"400px",topheight:0,video:"",card_id:0,course:0,src:"",poster:"",modalName:null,indicatorDots:!0,autoplay:!0,interval:4e3,duration:500,banner:"",college:"college",showpage:!1}},props:{tabs:Array,bottom:String},mounted:function(){var t=this,n=this;uni.request({url:"https://www.hongrensutui.com/api/index/getBanner",method:"POST",success:function(t){n.banner=t.data.data.list}}),this.topheight=this.StatusBar,uni.showLoading({title:"加载中,请稍后..."}),this.height=uni.getSystemInfoSync().windowHeight+"px",uni.request({url:"https://www.hongrensutui.com/api/index/course",success:function(n){t.course=n.data.data.course}}),n.freshen(),n.getvideo(),n.college=n.college+this.tabs[this.i].id},methods:{freshen:function(){var t=this;uni.getStorage({key:"userInfo",success:function(n){t.userInfo=n.data}})},downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){},getvideo:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/getvideo2",method:"POST",success:function(n){n.data.data.info&&(t.video=n.data.data.info,t.video&&(uni.hideLoading(),t.showpage=!0))}})},videolist:function(t,n){var i=this;uni.getStorage({key:"userInfo",success:function(i){uni.navigateTo({url:"/pages/college/video-list?id="+t+"&name="+n})},fail:function(t){i.modalName="login"}})},navToDetailPage:function(t){var n=this;uni.getStorage({key:"userInfo",success:function(n){uni.navigateTo({url:"/pages/college/coursedetails?id="+t})},fail:function(t){n.modalName="login"}})},bannerPage:function(t){uni.navigateTo({url:"/pages/"+t})},hideModal:function(t){this.modalName=null},wechatLogin:function(t){wxlogin()}}};n.default=o}}]);