(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-share-list"],{"05fa":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},i=n;e.default=i},"0bff":function(t,e,a){"use strict";a.r(e);var n=a("c63a"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"0c17":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".app-tabs[data-v-e5b681a0]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;-webkit-box-shadow:0 2px 1px rgba(26,26,26,.1);box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-e5b681a0]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-e5b681a0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-e5b681a0]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-e5b681a0]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-border-radius:%?4?%;border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-e5b681a0]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=e},"128f":function(t,e,a){"use strict";a.r(e);var n=a("9ea9"),i=a("1e08");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("c18f");var s,r=a("f0c5"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"07edaae6",null,!1,n["a"],s);e["default"]=u.exports},"1e08":function(t,e,a){"use strict";a.r(e);var n=a("3006"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"2c8d":function(t,e,a){"use strict";a.r(e);var n=a("3b2c"),i=a("0bff");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("50c9");var s,r=a("f0c5"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"e5b681a0",null,!1,n["a"],s);e["default"]=u.exports},3006:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=n},"3b2c":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.tabs&&t.tabs.length?a("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[a("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(e,n){return a("v-uni-view",{key:n,staticClass:"tab-item",class:{active:t.value===n},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabClick(n,e)}}},[16!=e.id?a("span",[t._v(t._s(t.getTabName(e)))]):a("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),a("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},o=[]},"50c9":function(t,e,a){"use strict";var n=a("8309"),i=a.n(n);i.a},"5e20":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},"623d":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},i=n;e.default=i},"6c72":function(t,e,a){"use strict";var n=a("4ea4");a("99af"),a("a9e3"),a("d3b7"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("05fa")),o=n(a("623d")),s={mixins:[i.default,o.default],data:function(){return{goods:"",height:"",topheight:"",toptitle:"每日心语",downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"~ 空空如也 ~"}}}},filters:{formatDate:function(t){var e=new Date(1e3*t),a=e.getFullYear(),n=e.getMonth()+1;n=n<10?"0"+n:n;var i=e.getDate();i=i<10?"0"+i:i;var o=e.getHours();o=o<10?"0"+o:o;var s=e.getMinutes();s=s<10?"0"+s:s;var r=e.getSeconds();return r=r<10?"0"+r:r,a+"-"+n+"-"+i}},props:{tabs:Array,category:Number},mounted:function(){this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px"},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var e=this;e.supplylist(t)},supplylist:function(t){var e=this,a=this;uni.request({url:"https://www.hongrensutui.com/api/index/sharelist",data:{category:a.category,pagenum:t.num,pagesize:t.size},method:"POST",success:function(n){var i=n.data.data.list,o=i.length;1==t.num&&(a.goods=[]),a.goods=a.goods.concat(n.data.data.list),e.mescroll.endByPage(o),setTimeout((function(){e.mescroll.endSuccess(o)}),20)},fail:function(t){a.mescroll.endErr()}})},imgMap:function(t){uni.previewImage({urls:[t]})},copy:function(t,e){var a=this;uni.showModal({content:t,confirmText:"复制内容",success:function(n){n.confirm&&(uni.setClipboardData({data:t,success:function(){uni.showToast({title:"复制成功"})}}),a.onxiazai(e))}})},onxiazai:function(t){uni.downloadFile({url:t,success:function(t){200===t.statusCode&&uni.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){uni.showToast({title:"保存成功",icon:"none"})},fail:function(){uni.showToast({title:"保存失败，请稍后重试",icon:"none"})}})}})},onCopyResult:function(t){"success"===t?uni.showModal({title:"复制文本成功！长按图片，保存到手机，就可以发朋友圈啦！"}):uni.showToast({title:"复制文本失败",icon:"none"})},details:function(t,e){uni.navigateTo({url:"/pages/supply/details?id="+t+"&mid="+e})},share:function(t){function e(e,a){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var a="红人速推 | 网红直播带货一站式服务平台",n="红人速推就是网红多 商家多，直播带货就上红人速推。",i="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(a,n,i,e)}))}};e.default=s},"78b9":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={mescrollUni:a("4f16").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("mescroll-uni",{ref:"mescrollRef",staticStyle:{"background-color":"#efefef"},attrs:{height:"100%",top:t.topheight+43+44+"px",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},t._l(t.goods,(function(e,n){return a("v-uni-view",{key:n,staticClass:"sharelist"},[a("v-uni-view",{staticClass:"logo"},[a("img",{attrs:{src:"https://www.hongrensutui.com/uploads/share/home_logo2.png"}})]),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"title"},[1==e.category?a("span",{staticClass:"name"},[t._v("每日心语 | 红人速推")]):t._e(),2==e.category?a("span",{staticClass:"name"},[t._v("拉新素材 | 红人速推")]):t._e(),3==e.category?a("span",{staticClass:"name"},[t._v("用户反馈 | 红人速推")]):t._e(),4==e.category?a("span",{staticClass:"name"},[t._v("日常宣传素材 | 红人速推")]):t._e(),5==e.category?a("span",{staticClass:"name"},[t._v("节日素材 | 红人速推")]):t._e(),a("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.content,expression:"item.content",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:function(e){return t.onCopyResult("success")},expression:"(type) => onCopyResult('success')",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:function(e){return t.onCopyResult("error")},expression:"(type) => onCopyResult('error')",arg:"error"}],staticClass:"share cu-tag light bg-orange radius"},[t._v("发圈"),a("span",{staticClass:"light text-orange cuIcon-forward"})])]),a("v-uni-view",{staticClass:"cont"},[t._v(t._s(e.content))]),a("v-uni-view",{staticClass:"img clearfix"},t._l(e.img,(function(e,n){return a("img",{key:n,attrs:{src:e},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.imgMap(e)}}})})),0)],1)],1)})),1)],1)},o=[]},8309:function(t,e,a){var n=a("0c17");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("baeb851e",n,!0,{sourceMap:!1,shadowMode:!1})},"9ea9":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?a("span",{staticClass:"clearfix"},[t.within?a("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):a("span",[t.title?a("span",{staticClass:"title"},[t._v(t._s(t.title))]):a("span",{staticClass:"title"},[t._v("红人速推")])])]):a("span",[t.within?a("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):a("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},a095:function(t,e,a){"use strict";a.r(e);var n=a("78b9"),i=a("f169");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);var s,r=a("f0c5"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"1dc58375",null,!1,n["a"],s);e["default"]=u.exports},b338:function(t,e,a){var n=a("5e20");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("91297c2c",n,!0,{sourceMap:!1,shadowMode:!1})},b6b5:function(t,e,a){"use strict";var n=a("4ea4");a("d3b7"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("128f")),o=n(a("2c8d")),s=n(a("a095")),r={components:{uniTopBar:i.default,AppTabs:o.default,MescrollItem:s.default},data:function(){return{height:"400px",tabs:["节日","日常","早晚安","拉新","反馈"],tabIndex:2,topheight:0,bottom:"0",within:"https://www.hongrensutui.com/h5/img/sucai_logo_left.png"}},onLoad:function(t){var e=this;this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(a){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code,invite:a.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id,t.data.data.time)}})},fail:function(a){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id,t.data.data.time)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.updateuser(e.data.id)}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/api/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id,t.data.data.time)):wxlogin()}})},swiperChange:function(t){this.tabIndex=t.detail.current},goback:function(){uni.switchTab({url:"/pages/user/user"})},share:function(t){function e(e,a,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e,a){var n="〔"+a+"已更新〕红人速推素材库",i="红人速推直播带货一站式服务平台，短视频、直播带货行业的赚钱利器！",o="https://www.hongrensutui.com/uploads/share/sucai_logo.png";share(n,i,o,e)}))}};e.default=r},c006:function(t,e,a){"use strict";a.r(e);var n=a("e4db"),i=a("ecd9");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);var s,r=a("f0c5"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"30e6270a",null,!1,n["a"],s);e["default"]=u.exports},c18f:function(t,e,a){"use strict";var n=a("b338"),i=a.n(n);i.a},c63a:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t,e){e&&this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};e.default=n},e4db:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"share"},[a("uni-top-bar",{attrs:{barid:1,within:t.within}}),a("app-tabs",{attrs:{tabs:t.tabs,fixed:!0,topheight:t.topheight+43},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}}),a("v-uni-swiper",{staticClass:"swiper",style:{height:t.height},attrs:{top:t.topheight+44+"px",current:t.tabIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},[a("v-uni-swiper-item",[a("mescroll-item",{attrs:{i:0,index:t.tabIndex,category:5,tabs:t.tabs}})],1),a("v-uni-swiper-item",[a("mescroll-item",{attrs:{i:1,index:t.tabIndex,category:4,tabs:t.tabs}})],1),a("v-uni-swiper-item",[a("mescroll-item",{attrs:{i:2,index:t.tabIndex,category:1,tabs:t.tabs}})],1),a("v-uni-swiper-item",[a("mescroll-item",{attrs:{i:3,index:t.tabIndex,category:2,tabs:t.tabs}})],1),a("v-uni-swiper-item",[a("mescroll-item",{attrs:{i:4,index:t.tabIndex,category:3,tabs:t.tabs}})],1)],1),a("v-uni-view",{staticClass:"customer round shadow text-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goback.apply(void 0,arguments)}}},[a("img",{attrs:{src:"https://www.hongrensutui.com/uploads/share/back_home.png"}})])],1)},o=[]},ecd9:function(t,e,a){"use strict";a.r(e);var n=a("b6b5"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},f169:function(t,e,a){"use strict";a.r(e);var n=a("6c72"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a}}]);