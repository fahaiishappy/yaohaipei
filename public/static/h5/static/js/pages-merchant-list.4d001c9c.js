(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-merchant-list"],{"0107":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t,e){e&&this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};e.default=n},"05ef":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=n},"0987":function(t,e,i){var n=i("d686");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6572a09e",n,!0,{sourceMap:!1,shadowMode:!1})},"203a":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={mescrollUni:i("426c").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("mescroll-uni",{ref:"mescrollRef",attrs:{height:"100%",top:t.topheight+42+"px",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[t.banner?i("v-uni-view",{staticClass:"special topimg"},[i("img",{attrs:{src:t.banner,mode:"widthFix"}})]):t._e(),t._l(t.merchant,(function(e,n){return i("v-uni-view",{key:n,staticClass:"merchant list",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.details(e.attestatio,e.id)}}},[i("v-uni-view",{staticClass:"publisher"},[i("img",{attrs:{src:e["logo"]}})]),i("v-uni-view",{staticClass:"number"},[i("v-uni-view",{staticClass:"title ellipsis"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"item"},[i("span",{staticClass:"cu-tag line-green round"},[t._v("营业执照已验证")]),i("span",{staticClass:"cu-tag line-green round"},[t._v("人工审核")])]),i("v-uni-view",{staticClass:"item"},[t._v("商家分类"),t._l(e.category,(function(e,n){return n<2?i("v-uni-view",{key:n,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),e.platform.length>0?i("v-uni-view",{staticClass:"item"},[t._v("拥有平台"),t._l(e.platform,(function(e,n){return n<2?i("v-uni-view",{key:n,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2):i("v-uni-view",{staticClass:"item"},[t._v("拥有平台"),i("v-uni-view",{staticClass:"table"},[t._v("实体")])],1)],1)],1)}))],2)},s=[]},3734:function(t,e,i){"use strict";i.r(e);var n=i("c2d5"),a=i("75eb");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("d973");var r,o=i("f0c5"),u=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"525162bc",null,!1,n["a"],r);e["default"]=u.exports},"4fb0":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.cu-bar[data-v-525162bc]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-525162bc]{margin-left:3vw;height:30px}.cuIcon-back[data-v-525162bc]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-525162bc]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-525162bc]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-525162bc]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-525162bc]{width:auto}.cuIcon-close[data-v-525162bc]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},"51e6":function(t,e,i){"use strict";i.r(e);var n=i("a2f8"),a=i("f42f");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("d162");var r,o=i("f0c5"),u=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"e5b681a0",null,!1,n["a"],r);e["default"]=u.exports},5232:function(t,e,i){"use strict";i.r(e);var n=i("e5ff"),a=i("eca1");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var r,o=i("f0c5"),u=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"53475853",null,!1,n["a"],r);e["default"]=u.exports},"555a":function(t,e,i){"use strict";i.r(e);var n=i("203a"),a=i("5610");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var r,o=i("f0c5"),u=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"1cf313d1",null,!1,n["a"],r);e["default"]=u.exports},5610:function(t,e,i){"use strict";i.r(e);var n=i("5a92"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},5713:function(t,e,i){var n=i("4fb0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("645c1318",n,!0,{sourceMap:!1,shadowMode:!1})},"5a92":function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("cea8")),s=n(i("8880")),r={mixins:[a.default,s.default],data:function(){return{merchant:"",height:"",topheight:"",downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"~ 空空如也 ~"}}}},filters:{formatDate:function(t){var e=new Date(1e3*t),i=e.getFullYear(),n=e.getMonth()+1;n=n<10?"0"+n:n;var a=e.getDate();a=a<10?"0"+a:a;var s=e.getHours();s=s<10?"0"+s:s;var r=e.getMinutes();r=r<10?"0"+r:r;var o=e.getSeconds();return o=o<10?"0"+o:o,i+"-"+n+"-"+a}},props:{tabs:Array,tag:String,banner:{type:[String,Number]},supplylist:{type:[String,Number]}},mounted:function(){this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px"},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var e=this;e.merchantlist(t)},merchantlist:function(t){var e=this,i=this;uni.request({url:"https://www.hongrensutui.com/api/index/merchantlist",data:{supplylist:i.supplylist,pagenum:t.num,pagesize:t.size},method:"POST",success:function(n){var a=n.data.data.list,s=a.length;1==t.num&&(i.merchant=[]),i.merchant=i.merchant.concat(n.data.data.list),e.mescroll.endByPage(s),setTimeout((function(){e.mescroll.endSuccess(s)}),20)},fail:function(t){i.mescroll.endErr()}})},details:function(t,e){uni.navigateTo({url:"/pages/merchant/details?id="+e})}}};e.default=r},"75eb":function(t,e,i){"use strict";i.r(e);var n=i("05ef"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},8880:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},a=n;e.default=a},"88af":function(t,e,i){"use strict";var n=i("4ea4");i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("3734")),s=n(i("51e6")),r=n(i("555a")),o={components:{uniTopBar:a.default,AppTabs:s.default,MerchantList:r.default},data:function(){return{modalName:null,height:"400px",toptitle:"商家列表",tip:!1,message:"",messagelist:"",topheight:0,userInfo:[],banner:"",supplylist:"",within:""}},onLoad:function(t){var e=this;t.name&&(e.toptitle=t.name,"精选商家"==e.toptitle&&(e.within="https://www.hongrensutui.com/h5/img/jingxuan_logo_left.png")),t.banner&&(e.banner=t.banner),t.supplylist&&(e.supplylist=t.supplylist),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",e.getRandomArbitrary(0,49),e.getmessage(),e.timerInt=setInterval((function(){if(e.codetime--,e.message=e.messagelist[e.getRandomArbitrary(0,50)],e.message.celebrity=e.message.celebrity[0]+e.message.celebrity[1]+"***",e.message.merchant=e.message.merchant[0]+e.message.merchant[1]+"***",e.tip=!e.tip,0==e.codetime)return clearInterval(e.timerInt),void(e.codetime=2e3)}),4e3),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.updateuser(e.data.id)}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},getRandomArbitrary:function(t,e){return Math.floor(Math.random()*(e-t)+t)},getmessage:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(e){t.messagelist=e.data.data.list,t.message=t.messagelist[t.getRandomArbitrary(0,50)],t.message.celebrity=t.message.celebrity[0]+t.message.celebrity[1]+"***",t.message.merchant=t.message.merchant[0]+t.message.merchant[1]+"***",t.tip=!t.tip}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},share:function(t){function e(e,i){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var i="红人速推丨找商家，来红人速推，节省您更多的宝贵时间！",n="红人速推就是网红多 商家多，直播带货就上红人速推。",a="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(i,n,a,e)}))}};e.default=o},a2f8:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.tabs&&t.tabs.length?i("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[i("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(e,n){return i("v-uni-view",{key:n,staticClass:"tab-item",class:{active:t.value===n},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabClick(n,e)}}},[16!=e.id?i("span",[t._v(t._s(t.getTabName(e)))]):i("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),i("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},s=[]},c2d5:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):i("span",[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])])]):i("span",[t.within?i("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},cea8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},a=n;e.default=a},d162:function(t,e,i){"use strict";var n=i("0987"),a=i.n(n);a.a},d686:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".app-tabs[data-v-e5b681a0]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;-webkit-box-shadow:0 2px 1px rgba(26,26,26,.1);box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-e5b681a0]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-e5b681a0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-e5b681a0]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-e5b681a0]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-border-radius:%?4?%;border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-e5b681a0]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=e},d973:function(t,e,i){"use strict";var n=i("5713"),a=i.n(n);a.a},e5ff:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.message?i("v-uni-view",{staticClass:"tipnews"},[t.tip?i("v-uni-view",{staticClass:"animated1 fadeInRight"},[i("v-uni-view",{staticClass:"cuIcon-notificationfill"}),i("span",[i("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),i("span",[t._v("网红"+t._s(t.message.celebrity))]),t._v("查看了"),i("span",[t._v("商家"+t._s(t.message.merchant))])])],1):t._e()],1):t._e(),i("uni-top-bar",{attrs:{title:t.toptitle,within:t.within}}),i("MerchantList",{attrs:{banner:t.banner,supplylist:t.supplylist}})],1)},s=[]},eca1:function(t,e,i){"use strict";i.r(e);var n=i("88af"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},f42f:function(t,e,i){"use strict";i.r(e);var n=i("0107"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a}}]);