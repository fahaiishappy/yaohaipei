(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-merchant-list"],{"0107":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t,e){e&&this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};e.default=a},"05ef":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=a},"0987":function(t,e,n){var a=n("d686");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("6572a09e",a,!0,{sourceMap:!1,shadowMode:!1})},3734:function(t,e,n){"use strict";n.r(e);var a=n("c2d5"),i=n("75eb");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("d973");var r,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"525162bc",null,!1,a["a"],r);e["default"]=u.exports},"4fb0":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.cu-bar[data-v-525162bc]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-525162bc]{margin-left:3vw;height:30px}.cuIcon-back[data-v-525162bc]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-525162bc]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-525162bc]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-525162bc]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-525162bc]{width:auto}.cuIcon-close[data-v-525162bc]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},"51e6":function(t,e,n){"use strict";n.r(e);var a=n("a2f8"),i=n("f42f");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("d162");var r,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"e5b681a0",null,!1,a["a"],r);e["default"]=u.exports},5232:function(t,e,n){"use strict";n.r(e);var a=n("7f2a"),i=n("eca1");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("97e8");var r,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"0726975b",null,!1,a["a"],r);e["default"]=u.exports},"555a":function(t,e,n){"use strict";n.r(e);var a=n("5717"),i=n("5610");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var r,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"11c0fb0f",null,!1,a["a"],r);e["default"]=u.exports},5610:function(t,e,n){"use strict";n.r(e);var a=n("5a92"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},5713:function(t,e,n){var a=n("4fb0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("645c1318",a,!0,{sourceMap:!1,shadowMode:!1})},5717:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var a={mescrollUni:n("426c").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mescroll-uni",{ref:"mescrollRef",attrs:{height:"100%",top:t.topheight+42+44+"px",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[t.banner?n("v-uni-view",{staticClass:"special topimg"},[n("img",{attrs:{src:t.banner,mode:"widthFix"}})]):t._e(),t._l(t.merchant,(function(e,a){return n("v-uni-view",{key:a,staticClass:"merchant list",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.details(e.attestatio,e.id)}}},[n("v-uni-view",{staticClass:"publisher"},[n("img",{attrs:{src:e["logo"]}})]),n("v-uni-view",{staticClass:"number"},[n("v-uni-view",{staticClass:"title ellipsis"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"item"},[n("span",{staticClass:"cu-tag line-green round"},[t._v("营业执照已验证")]),n("span",{staticClass:"cu-tag line-green round"},[t._v("人工审核")])]),n("v-uni-view",{staticClass:"item"},[t._v("商家分类"),t._l(e.category,(function(e,a){return a<2?n("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),e.platform.length>0?n("v-uni-view",{staticClass:"item"},[t._v("拥有平台"),t._l(e.platform,(function(e,a){return a<2?n("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2):n("v-uni-view",{staticClass:"item"},[t._v("拥有平台"),n("v-uni-view",{staticClass:"table"},[t._v("实体")])],1)],1)],1)}))],2)},s=[]},"5a92":function(t,e,n){"use strict";var a=n("4ea4");n("99af"),n("a9e3"),n("ac1f"),n("841c"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("cea8")),s=a(n("8880")),r={mixins:[i.default,s.default],data:function(){return{merchant:"",height:"",topheight:"",downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"~ 空空如也 ~"}}}},filters:{formatDate:function(t){var e=new Date(1e3*t),n=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var i=e.getDate();i=i<10?"0"+i:i;var s=e.getHours();s=s<10?"0"+s:s;var r=e.getMinutes();r=r<10?"0"+r:r;var o=e.getSeconds();return o=o<10?"0"+o:o,n+"-"+a+"-"+i}},props:{tabs:Array,tag:String,search:String,banner:{type:[String,Number]},supplylist:{type:[String,Number]}},mounted:function(){this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px"},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var e=this;e.merchantlist(t)},merchantlist:function(t){var e=this,n=this;uni.request({url:"https://www.hongrensutui.com/api/index/merchantlist",data:{supplylist:n.supplylist,search:n.search,pagenum:t.num,pagesize:t.size},method:"POST",success:function(a){var i=a.data.data.list,s=i.length;1==t.num&&(n.merchant=[]),n.merchant=n.merchant.concat(a.data.data.list),e.mescroll.endByPage(s),setTimeout((function(){e.mescroll.endSuccess(s)}),20)},fail:function(t){n.mescroll.endErr()}})},details:function(t,e){uni.navigateTo({url:"/pages/merchant/details?id="+e})}}};e.default=r},"75eb":function(t,e,n){"use strict";n.r(e);var a=n("05ef"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},"7f2a":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.message?n("v-uni-view",{staticClass:"tipnews"},[t.tip?n("v-uni-view",{staticClass:"animated1 fadeInRight"},[n("v-uni-view",{staticClass:"cuIcon-notificationfill"}),n("span",[n("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),n("span",[t._v("网红"+t._s(t.message.celebrity))]),t._v("查看了"),n("span",[t._v("商家"+t._s(t.message.merchant))])])],1):t._e()],1):t._e(),n("uni-top-bar",{attrs:{title:t.toptitle,within:t.within}}),n("v-uni-view",{staticClass:"cu-bar search bg-red",staticStyle:{"z-index":"400"},style:{top:t.topheight+42+"px"}},[n("v-uni-view",{staticClass:"search-form round"},[n("v-uni-text",{staticClass:"cuIcon-search"}),n("v-uni-input",{attrs:{"adjust-position":!1,type:"text",placeholder:"请输入品牌全称","confirm-type":"search"},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.InputFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.InputBlur.apply(void 0,arguments)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"cu-btn bg-red shadow-blur round",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getsearch.apply(void 0,arguments)}}},[t._v("搜索")])],1)],1),t.loadSurvey?n("MerchantList",{attrs:{banner:t.banner,search:t.search,supplylist:t.supplylist}}):t._e()],1)},s=[]},8880:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},i=a;e.default=i},"88af":function(t,e,n){"use strict";var a=n("4ea4");n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("3734")),s=a(n("51e6")),r=a(n("555a")),o={components:{uniTopBar:i.default,AppTabs:s.default,MerchantList:r.default},data:function(){return{modalName:null,height:"400px",toptitle:"商家列表",tip:!1,message:"",messagelist:"",topheight:0,userInfo:[],banner:"",supplylist:"",within:"",search:"",loadSurvey:!0}},onLoad:function(t){var e=this;t.name&&(e.toptitle=t.name,"精选商家"==e.toptitle&&(e.within="https://www.hongrensutui.com/h5/img/jingxuan_logo_left.png")),t.banner&&(e.banner=t.banner),t.supplylist&&(e.supplylist=t.supplylist),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",e.getRandomArbitrary(0,49),e.getmessage(),e.timerInt=setInterval((function(){if(e.codetime--,e.message=e.messagelist[e.getRandomArbitrary(0,50)],e.message.celebrity=e.message.celebrity[0]+e.message.celebrity[1]+"***",e.message.merchant=e.message.merchant[0]+e.message.merchant[1]+"***",e.tip=!e.tip,0==e.codetime)return clearInterval(e.timerInt),void(e.codetime=2e3)}),4e3),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:n.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.updateuser(e.data.id)}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},getRandomArbitrary:function(t,e){return Math.floor(Math.random()*(e-t)+t)},getmessage:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(e){t.messagelist=e.data.data.list,t.message=t.messagelist[t.getRandomArbitrary(0,50)],t.message.celebrity=t.message.celebrity[0]+t.message.celebrity[1]+"***",t.message.merchant=t.message.merchant[0]+t.message.merchant[1]+"***",t.tip=!t.tip}})},getsearch:function(){var t=this;this.loadSurvey=!1,this.$nextTick((function(){t.loadSurvey=!0}))},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0},share:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var n="红人速推丨找商家，来红人速推，节省您更多的宝贵时间！",a="红人速推就是网红多 商家多，直播带货就上红人速推。",i="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(n,a,i,e)}))}};e.default=o},"97e8":function(t,e,n){"use strict";var a=n("df15"),i=n.n(a);i.a},a2f8:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tabs&&t.tabs.length?n("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[n("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(e,a){return n("v-uni-view",{key:a,staticClass:"tab-item",class:{active:t.value===a},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tabClick(a,e)}}},[16!=e.id?n("span",[t._v(t._s(t.getTabName(e)))]):n("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),n("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},s=[]},c2d5:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?n("span",{staticClass:"clearfix"},[t.within?n("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):n("span",[t.title?n("span",{staticClass:"title"},[t._v(t._s(t.title))]):n("span",{staticClass:"title"},[t._v("红人速推")])])]):n("span",[t.within?n("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):n("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},c919:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".bg-red[data-v-0726975b]{background-color:#e71d36}",""]),t.exports=e},cea8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},i=a;e.default=i},d162:function(t,e,n){"use strict";var a=n("0987"),i=n.n(a);i.a},d686:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".app-tabs[data-v-e5b681a0]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;-webkit-box-shadow:0 2px 1px rgba(26,26,26,.1);box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-e5b681a0]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-e5b681a0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-e5b681a0]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-e5b681a0]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-border-radius:%?4?%;border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-e5b681a0]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=e},d973:function(t,e,n){"use strict";var a=n("5713"),i=n.n(a);i.a},df15:function(t,e,n){var a=n("c919");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("733a73e8",a,!0,{sourceMap:!1,shadowMode:!1})},eca1:function(t,e,n){"use strict";n.r(e);var a=n("88af"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},f42f:function(t,e,n){"use strict";n.r(e);var a=n("0107"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a}}]);