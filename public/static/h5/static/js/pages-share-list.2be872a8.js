(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-share-list"],{"0107":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t,e){e&&this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};e.default=i},"05ef":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=i},"0987":function(t,e,n){var i=n("d686");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6572a09e",i,!0,{sourceMap:!1,shadowMode:!1})},"13b0":function(t,e,n){"use strict";n.r(e);var i=n("5350"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},1995:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={mescrollUni:n("426c").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("mescroll-uni",{ref:"mescrollRef",staticStyle:{"background-color":"#efefef"},attrs:{height:"100%",top:t.topheight+43+44+"px",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},t._l(t.goods,(function(e,i){return n("v-uni-view",{key:i,staticClass:"sharelist"},[n("v-uni-view",{staticClass:"logo"},[n("img",{attrs:{src:"https://www.hongrensutui.com/uploads/share/home_logo2.png"}})]),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"title"},[1==e.category?n("span",{staticClass:"name"},[t._v("每日心语 | 红人速推")]):t._e(),2==e.category?n("span",{staticClass:"name"},[t._v("拉新素材 | 红人速推")]):t._e(),3==e.category?n("span",{staticClass:"name"},[t._v("用户反馈 | 红人速推")]):t._e(),4==e.category?n("span",{staticClass:"name"},[t._v("日常宣传素材 | 红人速推")]):t._e(),5==e.category?n("span",{staticClass:"name"},[t._v("节日素材 | 红人速推")]):t._e(),n("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.content,expression:"item.content",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:function(e){return t.onCopyResult("success")},expression:"(type) => onCopyResult('success')",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:function(e){return t.onCopyResult("error")},expression:"(type) => onCopyResult('error')",arg:"error"}],staticClass:"share cu-tag light bg-orange radius"},[t._v("发圈"),n("span",{staticClass:"light text-orange cuIcon-forward"})])]),n("v-uni-view",{staticClass:"cont"},[t._v(t._s(e.content))]),n("v-uni-view",{staticClass:"img clearfix"},t._l(e.img,(function(e,i){return n("img",{key:i,attrs:{src:e},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.imgMap(e)}}})})),0)],1)],1)})),1)],1)},o=[]},3734:function(t,e,n){"use strict";n.r(e);var i=n("c2d5"),a=n("75eb");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("d973");var s,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"525162bc",null,!1,i["a"],s);e["default"]=u.exports},"4fb0":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'.cu-bar[data-v-525162bc]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-525162bc]{margin-left:3vw;height:30px}.cuIcon-back[data-v-525162bc]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-525162bc]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-525162bc]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-525162bc]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-525162bc]{width:auto}.cuIcon-close[data-v-525162bc]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},"51e6":function(t,e,n){"use strict";n.r(e);var i=n("a2f8"),a=n("f42f");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("d162");var s,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"e5b681a0",null,!1,i["a"],s);e["default"]=u.exports},5350:function(t,e,n){"use strict";var i=n("4ea4");n("99af"),n("a9e3"),n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("cea8")),o=i(n("8880")),s={mixins:[a.default,o.default],data:function(){return{goods:"",height:"",topheight:"",toptitle:"每日心语",downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"~ 空空如也 ~"}}}},filters:{formatDate:function(t){var e=new Date(1e3*t),n=e.getFullYear(),i=e.getMonth()+1;i=i<10?"0"+i:i;var a=e.getDate();a=a<10?"0"+a:a;var o=e.getHours();o=o<10?"0"+o:o;var s=e.getMinutes();s=s<10?"0"+s:s;var r=e.getSeconds();return r=r<10?"0"+r:r,n+"-"+i+"-"+a}},props:{tabs:Array,category:Number},mounted:function(){this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px"},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var e=this;e.supplylist(t)},supplylist:function(t){var e=this,n=this;uni.request({url:"https://www.hongrensutui.com/api/index/sharelist",data:{category:n.category,pagenum:t.num,pagesize:t.size},method:"POST",success:function(i){var a=i.data.data.list,o=a.length;1==t.num&&(n.goods=[]),n.goods=n.goods.concat(i.data.data.list),e.mescroll.endByPage(o),setTimeout((function(){e.mescroll.endSuccess(o)}),20)},fail:function(t){n.mescroll.endErr()}})},imgMap:function(t){uni.previewImage({urls:[t]})},copy:function(t,e){var n=this;uni.showModal({content:t,confirmText:"复制内容",success:function(i){i.confirm&&(uni.setClipboardData({data:t,success:function(){uni.showToast({title:"复制成功"})}}),n.onxiazai(e))}})},onxiazai:function(t){uni.downloadFile({url:t,success:function(t){200===t.statusCode&&uni.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){uni.showToast({title:"保存成功",icon:"none"})},fail:function(){uni.showToast({title:"保存失败，请稍后重试",icon:"none"})}})}})},onCopyResult:function(t){"success"===t?uni.showModal({title:"复制文本成功！长按图片，保存到手机，就可以发朋友圈啦！"}):uni.showToast({title:"复制文本失败",icon:"none"})},details:function(t,e){uni.navigateTo({url:"/pages/supply/details?id="+t+"&mid="+e})},share:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var n="红人速推 | 网红直播带货一站式服务平台",i="红人速推就是网红多 商家多，直播带货就上红人速推。",a="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(n,i,a,e)}))}};e.default=s},5713:function(t,e,n){var i=n("4fb0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("645c1318",i,!0,{sourceMap:!1,shadowMode:!1})},"5f4b":function(t,e,n){"use strict";var i=n("4ea4");n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("3734")),o=i(n("51e6")),s=i(n("bb62")),r={components:{uniTopBar:a.default,AppTabs:o.default,MescrollItem:s.default},data:function(){return{height:"400px",tabs:["节日","日常","早晚安","拉新","反馈"],tabIndex:2,topheight:0,bottom:"0",within:"https://www.hongrensutui.com/h5/img/sucai_logo_left.png"}},onLoad:function(t){var e=this;this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:n.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id,t.data.data.time)}})},fail:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id,t.data.data.time)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.updateuser(e.data.id)}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id,t.data.data.time)):wxlogin()}})},swiperChange:function(t){this.tabIndex=t.detail.current},goback:function(){uni.switchTab({url:"/pages/user/user"})},share:function(t){function e(e,n,i){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e,n){var i="〔"+n+"已更新〕红人速推素材库",a="红人速推直播带货一站式服务平台，短视频、直播带货行业的赚钱利器！",o="https://www.hongrensutui.com/uploads/share/sucai_logo.png";share(i,a,o,e)}))}};e.default=r},"75eb":function(t,e,n){"use strict";n.r(e);var i=n("05ef"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},8880:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},a=i;e.default=a},a2f8:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tabs&&t.tabs.length?n("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[n("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(e,i){return n("v-uni-view",{key:i,staticClass:"tab-item",class:{active:t.value===i},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tabClick(i,e)}}},[16!=e.id?n("span",[t._v(t._s(t.getTabName(e)))]):n("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),n("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},o=[]},bb62:function(t,e,n){"use strict";n.r(e);var i=n("1995"),a=n("13b0");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var s,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"1dc58375",null,!1,i["a"],s);e["default"]=u.exports},be3e:function(t,e,n){"use strict";n.r(e);var i=n("5f4b"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},c2d5:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?n("span",{staticClass:"clearfix"},[t.within?n("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):n("span",[t.title?n("span",{staticClass:"title"},[t._v(t._s(t.title))]):n("span",{staticClass:"title"},[t._v("红人速推")])])]):n("span",[t.within?n("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):n("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},c768:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"share"},[n("uni-top-bar",{attrs:{barid:1,within:t.within}}),n("app-tabs",{attrs:{tabs:t.tabs,fixed:!0,topheight:t.topheight+43},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}}),n("v-uni-swiper",{staticClass:"swiper",style:{height:t.height},attrs:{top:t.topheight+44+"px",current:t.tabIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},[n("v-uni-swiper-item",[n("mescroll-item",{attrs:{i:0,index:t.tabIndex,category:5,tabs:t.tabs}})],1),n("v-uni-swiper-item",[n("mescroll-item",{attrs:{i:1,index:t.tabIndex,category:4,tabs:t.tabs}})],1),n("v-uni-swiper-item",[n("mescroll-item",{attrs:{i:2,index:t.tabIndex,category:1,tabs:t.tabs}})],1),n("v-uni-swiper-item",[n("mescroll-item",{attrs:{i:3,index:t.tabIndex,category:2,tabs:t.tabs}})],1),n("v-uni-swiper-item",[n("mescroll-item",{attrs:{i:4,index:t.tabIndex,category:3,tabs:t.tabs}})],1)],1),n("v-uni-view",{staticClass:"customer round shadow text-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goback.apply(void 0,arguments)}}},[n("img",{attrs:{src:"https://www.hongrensutui.com/uploads/share/back_home.png"}})])],1)},o=[]},cea8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},a=i;e.default=a},d162:function(t,e,n){"use strict";var i=n("0987"),a=n.n(i);a.a},d686:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".app-tabs[data-v-e5b681a0]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;-webkit-box-shadow:0 2px 1px rgba(26,26,26,.1);box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-e5b681a0]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-e5b681a0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-e5b681a0]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-e5b681a0]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-border-radius:%?4?%;border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-e5b681a0]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=e},d973:function(t,e,n){"use strict";var i=n("5713"),a=n.n(i);a.a},e60c:function(t,e,n){"use strict";n.r(e);var i=n("c768"),a=n("be3e");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var s,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"f5a0eb1a",null,!1,i["a"],s);e["default"]=u.exports},f42f:function(t,e,n){"use strict";n.r(e);var i=n("0107"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);