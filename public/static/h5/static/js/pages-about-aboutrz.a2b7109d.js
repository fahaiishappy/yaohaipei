(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-aboutrz"],{"07f6":function(t,n,e){"use strict";e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t,n){n&&this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};n.default=a},"12b4":function(t,n,e){"use strict";var a=e("4ea4");e("ac1f"),e("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("f73f")),o=a(e("50f0")),s={mixins:[i.default,o.default],data:function(){return{downOption:{use:!1,isLock:!0},upOption:{use:!1,isLock:!0,toTop:{src:""}},height:"400px",content:"",topheight:0}},props:{tabs:Array},mounted:function(){this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",this.totalcewebrity()},methods:{downCallback:function(t){this.mescroll.endSuccess()},upCallback:function(t){},totalcewebrity:function(){var t=this,n=t.tabs[t.i];if("抖音企业号"==n)var e=33;if("快手商家号"==n)e=39;uni.request({url:"https://www.hongrensutui.com/api/index/pageDetails",data:{id:e},method:"POST",success:function(n){t.content=n.data.data.list;var e=n.data.data.list.content;t.content.content=e.replace(/\<img/gi,'<img style="border-radius: 1.5vw;width:100%" ')}})}}};n.default=s},"378d":function(t,n,e){"use strict";var a=e("f39f"),i=e.n(a);i.a},"3a89":function(t,n,e){"use strict";var a=e("4ea4");e("d3b7"),e("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("5ad0")),o=a(e("536e")),s=a(e("c95f")),r={components:{AppTabs:o.default,uniTopBar:i.default,MescrollItem:s.default},data:function(){return{modalName:null,tabs:["抖音企业号","快手商家号"],tabIndex:1,topheight:0,name:"aboutrz",title:"商家号资料",height:"400px",user:"",config:""}},onLoad:function(t){var n=this;uni.request({url:"https://www.hongrensutui.com/api/index/h5config",method:"POST",success:function(t){n.config=t.data.data.list}}),n.topheight=this.StatusBar,n.height=uni.getSystemInfoSync().windowHeight+"px",t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),n.user=t.data.data.info,n.share(n.user.company_id,n.user.id)}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),n.user=t.data.data.info,n.share(n.user.company_id,n.user.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?n.getuserinfo(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(n){""!=n.data&&null!=n.data&&t.getuserinfo(n.data.id)}})},methods:{getuserinfo:function(t){var n=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),n.user=t.data.data.info,n.share(n.user.company_id,n.user.id)):wxlogin()}})},share:function(t){function n(n,e){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){var e="为什么要做抖音、快手商家号？",a="认证商家号后开通多项功能，助你快速抢占市场，轻松变现。",i="https://www.hongrensutui.com/uploads/share/renzheng_logo.png";share(e,a,i,n)})),swiperChange:function(t){this.tabIndex=t.detail.current},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null}}};n.default=r},"42b9":function(t,n,e){"use strict";var a=e("947f"),i=e.n(a);i.a},4674:function(t,n,e){"use strict";e.r(n);var a=e("7137"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},"4c85":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var a={mescrollUni:e("0777").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("mescroll-uni",{ref:"mescrollRef",attrs:{top:t.topheight+43+42+"px",down:t.downOption,up:t.upOption},on:{init:function(n){arguments[0]=n=t.$handleEvent(n),t.mescrollInit.apply(void 0,arguments)},down:function(n){arguments[0]=n=t.$handleEvent(n),t.downCallback.apply(void 0,arguments)},up:function(n){arguments[0]=n=t.$handleEvent(n),t.upCallback.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"count"},[e("v-uni-view",{staticClass:"data"},[e("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}})],1)],1)],1)},o=[]},"50f0":function(t,n,e){"use strict";e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},i=a;n.default=i},"536e":function(t,n,e){"use strict";e.r(n);var a=e("b49b"),i=e("c495");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("42b9");var s,r=e("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"e5b681a0",null,!1,a["a"],s);n["default"]=u.exports},5495:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("uni-top-bar",{attrs:{title:t.title,name:t.name}}),e("app-tabs",{attrs:{tabs:t.tabs,fixed:!0,topheight:t.topheight+43},model:{value:t.tabIndex,callback:function(n){t.tabIndex=n},expression:"tabIndex"}}),e("v-uni-swiper",{staticClass:"swiper",style:{height:t.height},attrs:{current:t.tabIndex},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.swiperChange.apply(void 0,arguments)}}},[e("v-uni-swiper-item",[e("mescroll-item",{attrs:{i:0,index:t.tabIndex,tabs:t.tabs}})],1),e("v-uni-swiper-item",[e("mescroll-item",{attrs:{i:1,index:t.tabIndex,tabs:t.tabs}})],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",staticStyle:{width:"auto"}},[e("v-uni-view",{staticClass:"bg-img"},[e("v-uni-view",{staticClass:"service"},[e("img",{staticClass:"wechat",attrs:{src:t.config.service,mode:"widthFix"}}),e("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.config.servicetip))])],1),e("v-uni-view",{staticClass:"cu-bar justify-center text-white",staticStyle:{"margin-top":"3vw"}},[e("v-uni-view",{staticClass:"action",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1)],1)},o=[]},"5ad0":function(t,n,e){"use strict";e.r(n);var a=e("8a0d"),i=e("4674");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("378d");var s,r=e("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"e4d1a924",null,!1,a["a"],s);n["default"]=u.exports},"5e4b":function(t,n,e){var a=e("9059");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("0e4a3972",a,!0,{sourceMap:!1,shadowMode:!1})},6816:function(t,n,e){"use strict";e.r(n);var a=e("12b4"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},"68f3":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'.hongren[data-v-9bdf5294]{bottom:0}.paymentbtn[data-v-9bdf5294]{position:absolute;font-size:4.8vw;font-weight:700;bottom:6vw;left:50%;margin-left:-25vw;width:50vw;text-align:center;line-height:12vw;border-radius:12vw;background-color:#ffb759;color:#fff;z-index:210;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.customer[data-v-9bdf5294]{position:absolute;bottom:18vw;right:6vw;width:15vw;height:15vw;font-size:9vw;padding-top:2vw;z-index:210;text-align:center;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.cu-dialog[data-v-9bdf5294]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9bdf5294]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9bdf5294]{width:auto}.cuIcon-close[data-v-9bdf5294]:before{background-color:rgba(0,0,0,.5);padding:3vw;border-radius:50%}.service[data-v-9bdf5294]{padding:3vw;background-color:#fff;border-radius:1.5vw}.service .wechat[data-v-9bdf5294]{width:200px;height:200px;border-radius:3vw}.service .tip[data-v-9bdf5294]{color:#333;margin-bottom:2vw;font-size:3.4vw}.bg-red[data-v-9bdf5294]{background-color:#e71d36}',""]),t.exports=n},7137:function(t,n,e){"use strict";e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};n.default=a},7453:function(t,n,e){"use strict";e.r(n);var a=e("3a89"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},"8a0d":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?e("span",{staticClass:"clearfix"},[t.title?e("span",{staticClass:"title"},[t._v(t._s(t.title))]):e("span",{staticClass:"title"},[t._v("红人速推")])]):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])},o=[]},9059:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.count[data-v-5b7809c4]{padding:3vw}.data[data-v-5b7809c4]{color:#333;font-size:4.3vw;line-height:7vw;padding:0}.data[data-v-5b7809c4] img{border-radius:1.5vw}.data[data-v-5b7809c4] img:last-child{display:block;margin:auto}",""]),t.exports=n},"947f":function(t,n,e){var a=e("ecd2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("75cc66b8",a,!0,{sourceMap:!1,shadowMode:!1})},b49b:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.tabs&&t.tabs.length?e("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[e("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(n,a){return e("v-uni-view",{key:a,staticClass:"tab-item",class:{active:t.value===a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(a,n)}}},[16!=n.id?e("span",[t._v(t._s(t.getTabName(n)))]):e("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),e("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},o=[]},c495:function(t,n,e){"use strict";e.r(n);var a=e("07f6"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},c95f:function(t,n,e){"use strict";e.r(n);var a=e("4c85"),i=e("6816");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("d7ac");var s,r=e("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"5b7809c4",null,!1,a["a"],s);n["default"]=u.exports},d521:function(t,n,e){var a=e("68f3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("6ba81a42",a,!0,{sourceMap:!1,shadowMode:!1})},d7ac:function(t,n,e){"use strict";var a=e("5e4b"),i=e.n(a);i.a},db7b:function(t,n,e){"use strict";e.r(n);var a=e("5495"),i=e("7453");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("f245");var s,r=e("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"9bdf5294",null,!1,a["a"],s);n["default"]=u.exports},ecd2:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,".app-tabs[data-v-e5b681a0]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-e5b681a0]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-e5b681a0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-e5b681a0]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-e5b681a0]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-e5b681a0]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=n},ee32:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'.cu-bar[data-v-e4d1a924]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-e4d1a924]{margin-left:3vw;height:30px}.cuIcon-back[data-v-e4d1a924]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-e4d1a924]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-e4d1a924]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-e4d1a924]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-e4d1a924]{width:auto}.cuIcon-close[data-v-e4d1a924]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=n},f245:function(t,n,e){"use strict";var a=e("d521"),i=e.n(a);i.a},f39f:function(t,n,e){var a=e("ee32");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("7be1ffd1",a,!0,{sourceMap:!1,shadowMode:!1})},f73f:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},i=a;n.default=i}}]);