(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-aboutrz"],{"07f6":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t,e){e&&this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};e.default=a},"12b4":function(t,e,n){"use strict";var a=n("4ea4");n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("f73f")),o=a(n("50f0")),s={mixins:[i.default,o.default],data:function(){return{downOption:{use:!1,isLock:!0},upOption:{use:!1,isLock:!0,toTop:{src:""}},height:"400px",content:"",topheight:0}},props:{tabs:Array},mounted:function(){this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",this.totalcewebrity()},methods:{downCallback:function(t){this.mescroll.endSuccess()},upCallback:function(t){},totalcewebrity:function(){var t=this,e=t.tabs[t.i];if("抖音企业号"==e)var n=33;if("快手商家号"==e)n=39;uni.request({url:"https://www.hongrensutui.com/api/index/pageDetails",data:{id:n},method:"POST",success:function(e){t.content=e.data.data.list;var n=e.data.data.list.content;t.content.content=n.replace(/\<img/gi,'<img style="border-radius: 1.5vw;width:100%" ')}})}}};e.default=s},"3a89":function(t,e,n){"use strict";var a=n("4ea4");n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5ad0")),o=a(n("536e")),s=a(n("c95f")),r={components:{AppTabs:o.default,uniTopBar:i.default,MescrollItem:s.default},data:function(){return{modalName:null,tabs:["抖音企业号","快手商家号"],tabIndex:1,topheight:0,name:"aboutrz",title:"商家号资料",height:"400px",user:"",config:""}},onLoad:function(t){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/h5config",method:"POST",success:function(t){e.config=t.data.data.list}}),e.topheight=this.StatusBar,e.height=uni.getSystemInfoSync().windowHeight+"px",t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:n.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.user=t.data.data.info,e.share(e.user.company_id,e.user.id)}})},fail:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.user=t.data.data.info,e.share(e.user.company_id,e.user.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.getuserinfo(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.getuserinfo(e.data.id)}})},methods:{getuserinfo:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.user=t.data.data.info,e.share(e.user.company_id,e.user.id)):wxlogin()}})},share:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var n="为什么要做抖音、快手商家号？",a="认证商家号后开通多项功能，助你快速抢占市场，轻松变现。",i="https://www.hongrensutui.com/uploads/share/renzheng_logo.png";share(n,a,i,e)})),swiperChange:function(t){this.tabIndex=t.detail.current},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null}}};e.default=r},"42b9":function(t,e,n){"use strict";var a=n("947f"),i=n.n(a);i.a},4674:function(t,e,n){"use strict";n.r(e);var a=n("7137"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"4c85":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={mescrollUni:n("0777").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mescroll-uni",{ref:"mescrollRef",attrs:{top:t.topheight+43+42+"px",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"count"},[n("v-uni-view",{staticClass:"data"},[n("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}})],1)],1)],1)},o=[]},"50f0":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},i=a;e.default=i},"536e":function(t,e,n){"use strict";n.r(e);var a=n("b49b"),i=n("c495");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("42b9");var s,r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"e5b681a0",null,!1,a["a"],s);e["default"]=u.exports},5495:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-top-bar",{attrs:{title:t.title,name:t.name}}),n("app-tabs",{attrs:{tabs:t.tabs,fixed:!0,topheight:t.topheight+43},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}}),n("v-uni-swiper",{staticClass:"swiper",style:{height:t.height},attrs:{current:t.tabIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},[n("v-uni-swiper-item",[n("mescroll-item",{attrs:{i:0,index:t.tabIndex,tabs:t.tabs}})],1),n("v-uni-swiper-item",[n("mescroll-item",{attrs:{i:1,index:t.tabIndex,tabs:t.tabs}})],1)],1),n("v-uni-view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-dialog",staticStyle:{width:"auto"}},[n("v-uni-view",{staticClass:"bg-img"},[n("v-uni-view",{staticClass:"service"},[n("img",{staticClass:"wechat",attrs:{src:t.config.service,mode:"widthFix"}}),n("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.config.servicetip))])],1),n("v-uni-view",{staticClass:"cu-bar justify-center text-white",staticStyle:{"margin-top":"3vw"}},[n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1)],1)},o=[]},"5ad0":function(t,e,n){"use strict";n.r(e);var a=n("ad3a"),i=n("4674");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("b844");var s,r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"2dee27ab",null,!1,a["a"],s);e["default"]=u.exports},"5e4b":function(t,e,n){var a=n("9059");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("0e4a3972",a,!0,{sourceMap:!1,shadowMode:!1})},6816:function(t,e,n){"use strict";n.r(e);var a=n("12b4"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"68f3":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.hongren[data-v-9bdf5294]{bottom:0}.paymentbtn[data-v-9bdf5294]{position:absolute;font-size:4.8vw;font-weight:700;bottom:6vw;left:50%;margin-left:-25vw;width:50vw;text-align:center;line-height:12vw;-webkit-border-radius:12vw;border-radius:12vw;background-color:#ffb759;color:#fff;z-index:210;-webkit-box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3);box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.customer[data-v-9bdf5294]{position:absolute;bottom:18vw;right:6vw;width:15vw;height:15vw;font-size:9vw;padding-top:2vw;z-index:210;text-align:center;-webkit-box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3);box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.cu-dialog[data-v-9bdf5294]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9bdf5294]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9bdf5294]{width:auto}.cuIcon-close[data-v-9bdf5294]:before{background-color:rgba(0,0,0,.5);padding:3vw;-webkit-border-radius:50%;border-radius:50%}.service[data-v-9bdf5294]{padding:3vw;background-color:#fff;-webkit-border-radius:1.5vw;border-radius:1.5vw}.service .wechat[data-v-9bdf5294]{width:200px;height:200px;-webkit-border-radius:3vw;border-radius:3vw}.service .tip[data-v-9bdf5294]{color:#333;margin-bottom:2vw;font-size:3.4vw}.bg-red[data-v-9bdf5294]{background-color:#e71d36}',""]),t.exports=e},7137:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=a},7453:function(t,e,n){"use strict";n.r(e);var a=n("3a89"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},9059:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.count[data-v-5b7809c4]{padding:3vw}.data[data-v-5b7809c4]{color:#333;font-size:4.3vw;line-height:7vw;padding:0}.data[data-v-5b7809c4] img{-webkit-border-radius:1.5vw;border-radius:1.5vw}.data[data-v-5b7809c4] img:last-child{display:block;margin:auto}",""]),t.exports=e},"947f":function(t,e,n){var a=n("ecd2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("75cc66b8",a,!0,{sourceMap:!1,shadowMode:!1})},a7c9:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.cu-bar[data-v-2dee27ab]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-2dee27ab]{margin-left:3vw;height:30px}.cuIcon-back[data-v-2dee27ab]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-2dee27ab]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-2dee27ab]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-2dee27ab]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-2dee27ab]{width:auto}.cuIcon-close[data-v-2dee27ab]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},ad3a:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?n("span",{staticClass:"clearfix"},[t.within?n("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):n("span",[t.title?n("span",{staticClass:"title"},[t._v(t._s(t.title))]):n("span",{staticClass:"title"},[t._v("红人速推")])])]):n("span",[t.within?n("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):n("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},b49b:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tabs&&t.tabs.length?n("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[n("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(e,a){return n("v-uni-view",{key:a,staticClass:"tab-item",class:{active:t.value===a},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tabClick(a,e)}}},[16!=e.id?n("span",[t._v(t._s(t.getTabName(e)))]):n("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),n("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},o=[]},b844:function(t,e,n){"use strict";var a=n("e071"),i=n.n(a);i.a},c495:function(t,e,n){"use strict";n.r(e);var a=n("07f6"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},c95f:function(t,e,n){"use strict";n.r(e);var a=n("4c85"),i=n("6816");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("d7ac");var s,r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"5b7809c4",null,!1,a["a"],s);e["default"]=u.exports},d521:function(t,e,n){var a=n("68f3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("6ba81a42",a,!0,{sourceMap:!1,shadowMode:!1})},d7ac:function(t,e,n){"use strict";var a=n("5e4b"),i=n.n(a);i.a},db7b:function(t,e,n){"use strict";n.r(e);var a=n("5495"),i=n("7453");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("f245");var s,r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"9bdf5294",null,!1,a["a"],s);e["default"]=u.exports},e071:function(t,e,n){var a=n("a7c9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("0724fb0f",a,!0,{sourceMap:!1,shadowMode:!1})},ecd2:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".app-tabs[data-v-e5b681a0]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;-webkit-box-shadow:0 2px 1px rgba(26,26,26,.1);box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-e5b681a0]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-e5b681a0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-e5b681a0]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-e5b681a0]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-border-radius:%?4?%;border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-e5b681a0]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=e},f245:function(t,e,n){"use strict";var a=n("d521"),i=n.n(a);i.a},f73f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},i=a;e.default=i}}]);