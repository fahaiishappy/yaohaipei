(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-aboutrz"],{"0107":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t,e){e&&this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};e.default=n},"05ef":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=n},"0987":function(t,e,i){var n=i("d686");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6572a09e",n,!0,{sourceMap:!1,shadowMode:!1})},"1cb0":function(t,e,i){var n=i("627e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("b68b7a92",n,!0,{sourceMap:!1,shadowMode:!1})},"2e40":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={mescrollUni:i("426c").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("mescroll-uni",{ref:"mescrollRef",attrs:{top:t.topheight+43+42+"px",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"about"},[i("v-uni-view",{staticClass:"count"},[i("v-uni-view",{staticClass:"data"},[i("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}})],1)],1)],1)],1)},o=[]},3174:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):i("span",[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])])]):i("span",[t.within?i("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},3734:function(t,e,i){"use strict";i.r(e);var n=i("3174"),a=i("75eb");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("3804");var s,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"07edaae6",null,!1,n["a"],s);e["default"]=u.exports},3804:function(t,e,i){"use strict";var n=i("1cb0"),a=i.n(n);a.a},"51e6":function(t,e,i){"use strict";i.r(e);var n=i("a2f8"),a=i("f42f");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("d162");var s,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"e5b681a0",null,!1,n["a"],s);e["default"]=u.exports},"627e":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},6440:function(t,e,i){"use strict";i.r(e);var n=i("2e40"),a=i("f87f");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var s,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"111ad65a",null,!1,n["a"],s);e["default"]=u.exports},7452:function(t,e,i){"use strict";i.r(e);var n=i("f12c"),a=i("8c92");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var s,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"569b93ea",null,!1,n["a"],s);e["default"]=u.exports},"75eb":function(t,e,i){"use strict";i.r(e);var n=i("05ef"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"81cb":function(t,e,i){"use strict";var n=i("4ea4");i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,o=n(i("3734")),s=n(i("51e6")),r=n(i("6440")),u={components:{AppTabs:s.default,uniTopBar:o.default,MescrollItem:r.default},data:function(){return{modalName:null,backstage:!1,tabs:["抖音企业号","快手商家号"],tabIndex:1,topheight:0,name:"aboutrz",title:"商家号资料",height:"400px",userInfo:"",config:"",pageDetailsDy:"",pageDetailsKs:""}},onLoad:function(t){a=this,a.topheight=this.StatusBar,a.height=uni.getSystemInfoSync().windowHeight+"px",t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),a.share(),t.code?uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code,invite:uni.getStorageSync("invite"),platform:1},method:"POST",success:function(t){uni.removeStorageSync("invite"),a.loginhandle(t.data.data.info)}}):uni.getStorage({key:"userInfo",success:function(t){a.updateuser(t.data.id)},fail:function(t){wxlogin()}}),a.pageaboutrz()},onHide:function(){this.backstage=!0},onShow:function(){this.backstage&&uni.getStorage({key:"userInfo",success:function(t){a.updateuser(t.data.id),a.share()},fail:function(t){wxlogin()}})},methods:{updateuser:function(t){uni.request({url:"https://www.hongrensutui.com/api/api/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?a.loginhandle(t.data.data.info):wxlogin()}})},loginhandle:function(t){uni.setStorageSync("userInfo",t),this.userInfo=t},pageaboutrz:function(){uni.request({url:"https://www.hongrensutui.com/api/api/pageaboutrz",method:"POST",success:function(t){a.config=t.data.data.config,a.pageDetailsDy=t.data.data.pageDetailsDy,a.pageDetailsKs=t.data.data.pageDetailsKs}})},swiperChange:function(t){this.tabIndex=t.detail.current},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},share:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=uni.getStorageSync("userInfo"),e="为什么要做抖音、快手商家号？",i="认证商家号后开通多项功能，助你快速抢占市场，轻松变现。",n="https://www.hongrensutui.com/uploads/share/renzheng_logo.png";share(e,i,n,t.id)}))}};e.default=u},8880:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},a=n;e.default=a},"8c92":function(t,e,i){"use strict";i.r(e);var n=i("81cb"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},a2f8:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.tabs&&t.tabs.length?i("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[i("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(e,n){return i("v-uni-view",{key:n,staticClass:"tab-item",class:{active:t.value===n},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabClick(n,e)}}},[16!=e.id?i("span",[t._v(t._s(t.getTabName(e)))]):i("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),i("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},o=[]},b61b:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("cea8")),o=n(i("8880")),s={mixins:[a.default,o.default],data:function(){return{downOption:{use:!1,isLock:!0},upOption:{use:!1,isLock:!0,toTop:{src:""}},height:"400px",topheight:0}},props:{tabs:Array,content:[String,Array,Object]},mounted:function(){this,this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px"},methods:{downCallback:function(t){this.mescroll.endSuccess()},upCallback:function(t){}}};e.default=s},cea8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},a=n;e.default=a},d162:function(t,e,i){"use strict";var n=i("0987"),a=i.n(n);a.a},d686:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".app-tabs[data-v-e5b681a0]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;-webkit-box-shadow:0 2px 1px rgba(26,26,26,.1);box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-e5b681a0]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-e5b681a0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-e5b681a0]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-e5b681a0]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-border-radius:%?4?%;border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-e5b681a0]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=e},f12c:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-top-bar",{attrs:{title:t.title,name:t.name}}),i("app-tabs",{attrs:{tabs:t.tabs,fixed:!0,topheight:t.topheight+43},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}}),i("v-uni-swiper",{staticClass:"swiper",style:{height:t.height},attrs:{current:t.tabIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},[i("v-uni-swiper-item",[i("mescroll-item",{attrs:{i:0,index:t.tabIndex,tabs:t.tabs,content:t.pageDetailsDy}})],1),i("v-uni-swiper-item",[i("mescroll-item",{attrs:{i:1,index:t.tabIndex,tabs:t.tabs,content:t.pageDetailsKs}})],1)],1),i("v-uni-view",{staticClass:"customer round shadow text-center",attrs:{"data-target":"Image"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cuIcon-servicefill"})],1),i("v-uni-view",{staticClass:"cu-modal config",class:"Image"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog",staticStyle:{width:"auto"}},[i("v-uni-view",{staticClass:"bg-img"},[i("v-uni-view",{staticClass:"service"},[i("img",{staticClass:"wechat",attrs:{src:t.config.service,mode:"widthFix"}}),i("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.config.servicetip))])],1),i("v-uni-view",{staticClass:"cu-bar justify-center text-white",staticStyle:{"margin-top":"3vw"}},[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1)],1)},o=[]},f42f:function(t,e,i){"use strict";i.r(e);var n=i("0107"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},f87f:function(t,e,i){"use strict";i.r(e);var n=i("b61b"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}}]);