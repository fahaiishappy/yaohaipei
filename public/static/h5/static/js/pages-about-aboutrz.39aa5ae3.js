(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-aboutrz"],{"0236":function(t,e,n){var i=n("ec81");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("b324efae",i,!0,{sourceMap:!1,shadowMode:!1})},"107e":function(t,e,n){"use strict";n.r(e);var i=n("39b9"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"1b48":function(t,e,n){"use strict";n.r(e);var i=n("ed99"),a=n("5104");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("458b");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"55565a21",null,!1,i["a"],s);e["default"]=c.exports},"2cd7":function(t,e,n){var i=n("7bf2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("bb1c4990",i,!0,{sourceMap:!1,shadowMode:!1})},"2f60":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-top-bar",{attrs:{title:t.title,name:t.name}}),n("app-tabs",{attrs:{tabs:t.tabs,fixed:!0,topheight:t.topheight+43},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}}),n("v-uni-swiper",{staticClass:"swiper",style:{height:t.height},attrs:{current:t.tabIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},[n("v-uni-swiper-item",[n("mescroll-item",{attrs:{i:0,index:t.tabIndex,tabs:t.tabs}})],1),n("v-uni-swiper-item",[n("mescroll-item",{attrs:{i:1,index:t.tabIndex,tabs:t.tabs}})],1)],1),n("v-uni-view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"bg-img"},[n("img",{staticClass:"wechat",attrs:{src:"https://www.hongrensutui.com/h5/img/wechat.png",mode:"widthFix"}}),n("v-uni-view",{staticClass:"tip"},[t._v("免费咨询微信：zhuoyu10086")]),n("v-uni-view",{staticClass:"cu-bar justify-center text-white"},[n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1)],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},"39b9":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=i},"3bc4":function(t,e,n){var i=n("dd7e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("23384b14",i,!0,{sourceMap:!1,shadowMode:!1})},"458b":function(t,e,n){"use strict";var i=n("0236"),a=n.n(i);a.a},"4b45":function(t,e,n){"use strict";var i=n("2cd7"),a=n.n(i);a.a},5104:function(t,e,n){"use strict";n.r(e);var i=n("9f67"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},6085:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tabs&&t.tabs.length?n("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[n("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(e,i){return n("v-uni-view",{key:i,staticClass:"tab-item",class:{active:t.value===i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(i)}}},[16!=e.id?n("span",[t._v(t._s(t.getTabName(e)))]):n("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),n("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},6110:function(t,e,n){"use strict";var i=n("ee27");n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("d654")),o=i(n("be8d")),s=i(n("1b48")),r={components:{AppTabs:o.default,uniTopBar:a.default,MescrollItem:s.default},data:function(){return{modalName:null,tabs:["抖音企业号","快手商家号"],tabIndex:1,topheight:0,name:"aboutrz",title:"商家号资料",height:"400px",user:""}},onLoad:function(t){var e=this;this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:n.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.user=t.data.data.info,e.share(e.user.company_id,e.user.id)}})},fail:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.user=t.data.data.info,e.share(e.user.company_id,e.user.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.getuserinfo(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.getuserinfo(e.data.id)}})},methods:{getuserinfo:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.user=t.data.data.info,e.share(e.user.company_id,e.user.id)):wxlogin()}})},share:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var n="为什么要做抖音、快手商家号？",i="认证商家号后开通多项功能，助你快速抢占市场，轻松变现。",a="https://www.hongrensutui.com/uploads/share/renzheng_logo.png";share(n,i,a,e)})),swiperChange:function(t){this.tabIndex=t.detail.current},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null}}};e.default=r},"6cc6":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'.auth[data-v-0ac588e7]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-0ac588e7]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-0ac588e7]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-0ac588e7]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-0ac588e7]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-0ac588e7]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-0ac588e7]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-0ac588e7]{height:100vh;z-index:300}.cu-bar[data-v-0ac588e7]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-0ac588e7]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-0ac588e7]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-0ac588e7]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-0ac588e7]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-0ac588e7]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-0ac588e7]{width:auto}.cuIcon-close[data-v-0ac588e7]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=e},"6ed6":function(t,e,n){"use strict";n.r(e);var i=n("9173"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"6fc3":function(t,e,n){var i=n("6cc6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("129094d4",i,!0,{sourceMap:!1,shadowMode:!1})},"70d5":function(t,e,n){"use strict";n.r(e);var i=n("6110"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},7117:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},a=i;e.default=a},"7bf2":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'.hongren[data-v-adcb8342]{bottom:0}.paymentbtn[data-v-adcb8342]{position:absolute;font-size:4.8vw;font-weight:700;bottom:6vw;left:50%;margin-left:-25vw;width:50vw;text-align:center;line-height:12vw;border-radius:12vw;background-color:#ffb759;color:#fff;z-index:210;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.customer[data-v-adcb8342]{position:absolute;bottom:18vw;right:6vw;width:15vw;height:15vw;font-size:9vw;padding-top:2vw;z-index:210;text-align:center;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.cu-dialog[data-v-adcb8342]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-adcb8342]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-adcb8342]{width:auto}.cuIcon-close[data-v-adcb8342]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}.wechat[data-v-adcb8342]{width:200px;height:200px}.tip[data-v-adcb8342]{color:#fff;margin:2vw 0;font-size:3.4vw}.bg-red[data-v-adcb8342]{background-color:#e71d36}',""]),t.exports=e},"8ca3":function(t,e,n){"use strict";var i=n("6fc3"),a=n.n(i);a.a},9173:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t){this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};e.default=i},"9f67":function(t,e,n){"use strict";(function(t){var i=n("ee27");n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("7117")),o=i(n("a3e6")),s={mixins:[a.default,o.default],data:function(){return{downOption:{use:!1,isLock:!0},upOption:{use:!1,isLock:!0,toTop:{src:""}},height:"400px",content:"",topheight:0}},props:{tabs:Array},mounted:function(){this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",this.totalcewebrity()},methods:{downCallback:function(t){this.mescroll.endSuccess()},upCallback:function(t){},totalcewebrity:function(){var e=this,n=e.tabs[e.i];if("抖音企业号"==n)var i=33;if("快手商家号"==n)i=39;t("log",i," at pages/about/list-item.vue:66"),uni.request({url:"https://www.hongrensutui.com/api/index/pageDetails",data:{id:i},method:"POST",success:function(t){e.content=t.data.data.list;var n=t.data.data.list.content;e.content.content=n.replace(/\<img/gi,'<img style="border-radius: 1.5vw" ')}})}}};e.default=s}).call(this,n("0de9")["log"])},a3e6:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},a=i;e.default=a},a88e:function(t,e,n){"use strict";n.r(e);var i=n("2f60"),a=n("70d5");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("4b45");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"adcb8342",null,!1,i["a"],s);e["default"]=c.exports},be8d:function(t,e,n){"use strict";n.r(e);var i=n("6085"),a=n("6ed6");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("dfbd");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"1144b3b1",null,!1,i["a"],s);e["default"]=c.exports},c74f:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?n("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[n("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?n("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():n("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?n("span",[t.title?n("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):n("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?n("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img?n("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()])])},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},d654:function(t,e,n){"use strict";n.r(e);var i=n("c74f"),a=n("107e");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("8ca3");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"0ac588e7",null,!1,i["a"],s);e["default"]=c.exports},dd7e:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".app-tabs[data-v-1144b3b1]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-1144b3b1]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-1144b3b1]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-1144b3b1]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-1144b3b1]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-1144b3b1]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=e},dfbd:function(t,e,n){"use strict";var i=n("3bc4"),a=n.n(i);a.a},ec81:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.count[data-v-55565a21]{padding:3vw}.data[data-v-55565a21]{color:#333;font-size:4.3vw;line-height:7vw;padding:0}.data[data-v-55565a21] img{border-radius:1.5vw}.data[data-v-55565a21] img:last-child{display:block;margin:auto}",""]),t.exports=e},ed99:function(t,e,n){"use strict";var i={mescrollUni:n("4b21").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mescroll-uni",{ref:"mescrollRef",attrs:{top:t.topheight+43+42+"px",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"count"},[n("v-uni-view",{staticClass:"data"},[n("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}})],1)],1)],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))}}]);