(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-celebrity-list"],{"0107":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t,e){e&&this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};e.default=i},"05ef":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=i},"0987":function(t,e,a){var i=a("d686");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("6572a09e",i,!0,{sourceMap:!1,shadowMode:!1})},1139:function(t,e,a){"use strict";a.r(e);var i=a("38b1"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},1865:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".cu-modal[data-v-f2d04f4c]{z-index:210}.cu-dialog[data-v-f2d04f4c]{background-color:transparent;width:100vw;padding:4vw;height:auto}.auth[data-v-f2d04f4c]{padding:6vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-f2d04f4c]{color:#333;margin-bottom:4vw}.auth .vip[data-v-f2d04f4c]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;-webkit-border-radius:1.5vw;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}",""]),t.exports=e},"1c07":function(t,e,a){"use strict";a.r(e);var i=a("2941"),n=a("1139");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var o,c=a("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"b138e5a8",null,!1,i["a"],o);e["default"]=r.exports},2941:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={mescrollUni:a("426c").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mescroll-uni",{ref:"mescrollRef",attrs:{height:"100%",top:t.topheight+43+42+44+"px",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"celebritylist"},t._l(t.goods,(function(e,i){return a("v-uni-view",{key:i,staticClass:"list",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage("celebrity/details",e.id)}}},[a("v-uni-view",{staticClass:"publisher"},[a("v-uni-view",{staticClass:"avatar"},[a("img",{attrs:{src:e["avatar"]}}),1==e.pay_type?a("v-uni-view",{staticClass:"tip"},[t._v("坑位费主播")]):t._e(),2==e.pay_type?a("v-uni-view",{staticClass:"tip"},[t._v("纯佣主播")]):t._e(),3==e.pay_type?a("v-uni-view",{staticClass:"tip",staticStyle:{"background-color":"rgba(225,215,240,0.9)",color:"#6739b6"}},[t._v("坑位费+佣金")]):t._e()],1)],1),a("v-uni-view",{staticClass:"number"},[a("v-uni-view",{staticClass:"title ellipsis"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.nickname))]),"抖音"==e.platform?a("v-uni-image",{staticClass:"platform",attrs:{src:"https://www.hongrensutui.com/h5/img/douyin_sup.png"}}):t._e(),"快手"==e.platform?a("v-uni-image",{staticClass:"platform",attrs:{src:"https://www.hongrensutui.com/h5/img/kuaishou_sup.png"}}):t._e(),a("span",{staticClass:"cu-tag light bg-orange round",staticStyle:{float:"right"}},[t._v("免费咨询")])],1),a("v-uni-view",{staticClass:"item"},[t._v("拥有粉丝"),a("span",{staticClass:"nowprice"},[t._v(t._s(e.fans))]),a("span",{staticClass:"nowpricetip"},[t._v("w")])]),a("v-uni-view",{staticClass:"item"},[t._v("带货领域"),t._l(e.category,(function(e,i){return i<2?a("v-uni-view",{key:i,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),a("v-uni-view",{staticClass:"item"},[t._v("合作形式"),t._l(e.cooperation,(function(e,i){return i<2?a("v-uni-view",{key:i,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),a("v-uni-view",{staticClass:"item"},[a("span",{staticStyle:{"margin-right":"1vw"}},[t._v("谁看过他")]),t._l(e.purpose,(function(t,e){return a("v-uni-image",{key:e,staticClass:"platform",staticStyle:{"border-radius":"1vw",top:"-0.3vw"},attrs:{src:t}})})),a("v-uni-image",{staticClass:"platform",staticStyle:{"border-radius":"1vw",top:"-0.3vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/pic_more.png"}})],2)],1)],1)})),1)],1)},s=[]},3734:function(t,e,a){"use strict";a.r(e);var i=a("c2d5"),n=a("75eb");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("d973");var o,c=a("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"525162bc",null,!1,i["a"],o);e["default"]=r.exports},"38b1":function(t,e,a){"use strict";var i=a("4ea4");a("99af"),a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("cea8")),s=i(a("8880")),o={mixins:[n.default,s.default],data:function(){return{downOption:{auto:!1},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"空空如也"}},height:"400px",topheight:0,isAndroid:!0,indicatorDots:!0,autoplay:!0,interval:4e3,duration:500,cewebrity:"",selected:"",merchant:"",recmerchant:"",cewebritycount:"",merchantcount:"",news:"",goods:""}},props:{tabs:Array,userid:Number,fansnum:Number,categoryid:Number,categorypid:Number,type:Number,pay_type:String},mounted:function(){this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px"},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var e=this;uni.getStorage({key:"userInfo",success:function(a){""!=a.data&&null!=a.data?(e.userInfo=a.data,e.supplylist(t,e.userInfo.id)):e.supplylist(t)},fail:function(a){e.supplylist(t)}})},supplylist:function(t,e){var a=this,i=this,n=i.tabs[i.i];uni.request({url:"https://www.hongrensutui.com/api/index/totalcewebrity",data:{pay_type:i.pay_type,platform:n,type:i.type,pagenum:t.num,pagesize:t.size,userid:e,realmpid:i.categorypid,realmid:i.categoryid,fans:i.fansnum},method:"POST",success:function(e){var n=e.data.data.list,s=n.length;1==t.num&&(i.goods=[]),i.goods=i.goods.concat(e.data.data.list),a.mescroll.endByPage(s),setTimeout((function(){a.mescroll.endSuccess(s)}),20)},fail:function(t){i.mescroll.endErr()}})},navToDetailPage:function(t,e){e&&(t=t+"?id="+e),uni.navigateTo({url:"/pages/"+t})},details:function(t,e){uni.navigateTo({url:"/pages/supply/details?id="+t+"&mid="+e})}}};e.default=o},"4fb0":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.cu-bar[data-v-525162bc]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-525162bc]{margin-left:3vw;height:30px}.cuIcon-back[data-v-525162bc]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-525162bc]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-525162bc]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-525162bc]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-525162bc]{width:auto}.cuIcon-close[data-v-525162bc]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},"51e6":function(t,e,a){"use strict";a.r(e);var i=a("a2f8"),n=a("f42f");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("d162");var o,c=a("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"e5b681a0",null,!1,i["a"],o);e["default"]=r.exports},5713:function(t,e,a){var i=a("4fb0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("645c1318",i,!0,{sourceMap:!1,shadowMode:!1})},"75eb":function(t,e,a){"use strict";a.r(e);var i=a("05ef"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"766c":function(t,e,a){"use strict";a.r(e);var i=a("f018"),n=a("d553");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("9bf6");var o,c=a("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"f2d04f4c",null,!1,i["a"],o);e["default"]=r.exports},8880:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},n=i;e.default=n},"9bf6":function(t,e,a){"use strict";var i=a("ad16"),n=a.n(i);n.a},a2f8:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.tabs&&t.tabs.length?a("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[a("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(e,i){return a("v-uni-view",{key:i,staticClass:"tab-item",class:{active:t.value===i},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabClick(i,e)}}},[16!=e.id?a("span",[t._v(t._s(t.getTabName(e)))]):a("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),a("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},s=[]},ad16:function(t,e,a){var i=a("1865");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("30aa32f0",i,!0,{sourceMap:!1,shadowMode:!1})},b6da:function(t,e,a){"use strict";var i=a("4ea4");a("d3b7"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("3734")),s=i(a("51e6")),o=i(a("1c07")),c={components:{uniTopBar:n.default,AppTabs:s.default,MescrollItem:o.default},data:function(){return{modalName:null,height:"400px",tabs:["抖音","快手"],tabIndex:0,fans:"粉丝",categoryid:0,categorypid:0,categoryname:"领域",menuindex:99,fansnumindex:99,fansjudge:!1,categoryjudge:!1,categorytable:"",categorylist:"",dyindex:0,ksindex:0,tip:!1,message:"",loadSurvey:!0,topheight:0,type:0,userInfo:[],toptitle:"红人列表",within:"",pay_type:"",TabCur:0,scrollLeft:0}},onLoad:function(t){var e=this;t.id&&(e.pay_type=t.id,e.toptitle="纯佣主播",e.within="https://www.hongrensutui.com/h5/img/chunyong_logo_left.png"),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:a.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.getuserinfo(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",this.cewebritycategory(),e.getRandomArbitrary(0,49),e.timerInt=setInterval((function(){uni.getStorage({key:"message",success:function(t){if(""!=t.data&&(e.codetime--,e.message=t.data[e.getRandomArbitrary(0,50)],e.message.celebrity=e.message.celebrity[0]+e.message.celebrity[1]+"***",e.message.merchant=e.message.merchant[0]+e.message.merchant[1]+"***",e.tip=!e.tip,0==e.codetime))return clearInterval(e.timerInt),void(e.codetime=2e3)}})}),4e3)},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.getuserinfo(e.data.id)}}),uni.getStorage({key:"type",success:function(e){""!=e.data&&null!=e.data&&(t.type=e.data,t.loadSurvey=!1,t.$nextTick((function(){t.loadSurvey=!0})),uni.removeStorageSync("type"))},fail:function(e){t.type=0,t.loadSurvey=!1,t.$nextTick((function(){t.loadSurvey=!0}))}})},methods:{getRandomArbitrary:function(t,e){return Math.floor(Math.random()*(e-t)+t)},getuserinfo:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},swiperChange:function(t){this.tabIndex=t.detail.current},lookup:function(t){var e=this;if(e.userInfo.id)switch(uni.getSystemInfoSync().platform){case"android":e.modalName=t.currentTarget.dataset.target;break;case"ios":e.modalName=t.currentTarget.dataset.target;break}else e.modalName="login"},member:function(){var t=this;uni.navigateTo({url:"/pages/member/member?cewebrityid="+t.cewebrityid})},categorybtn:function(){this.fansjudge=!1,this.categoryjudge=!this.categoryjudge},fansbtn:function(){this.categoryjudge=!1,this.fansjudge=!this.fansjudge},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=90*(t.currentTarget.dataset.id-1)},menu:function(t,e,a,i){var n=this,s=this;s.menuindex=t,"不限"==e?(s.categoryid=0,s.categorypid=0,s.categoryname="领域"):(s.categoryid=e,s.categorypid=a,s.categoryname=i),s.categoryjudge=!1,this.loadSurvey=!1,this.$nextTick((function(){n.loadSurvey=!0}))},fansnum:function(t,e){var a=this,i=this;i.fansnumindex=t,i.fans="不限"==e?"粉丝量":e,i.fansjudge=!1,this.loadSurvey=!1,this.$nextTick((function(){a.loadSurvey=!0}))},cewebritycategory:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/getRealm",method:"POST",success:function(e){t.categorytable=e.data.data.table,t.categorylist=e.data.data.list}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},navToDetailPage:function(t){uni.navigateTo({url:"/pages/"+t})},wechatLogin:function(t){wxlogin()},share:function(t){function e(e,a){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var a="红人速推 | 网红直播带货一站式服务平台",i="红人速推就是网红多 商家多，直播带货就上红人速推。",n="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(a,i,n,e)}))}};e.default=c},c2d5:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?a("span",{staticClass:"clearfix"},[t.within?a("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):a("span",[t.title?a("span",{staticClass:"title"},[t._v(t._s(t.title))]):a("span",{staticClass:"title"},[t._v("红人速推")])])]):a("span",[t.within?a("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):a("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},cea8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},n=i;e.default=n},d162:function(t,e,a){"use strict";var i=a("0987"),n=a.n(i);n.a},d553:function(t,e,a){"use strict";a.r(e);var i=a("b6da"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},d686:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".app-tabs[data-v-e5b681a0]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;-webkit-box-shadow:0 2px 1px rgba(26,26,26,.1);box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-e5b681a0]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-e5b681a0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-e5b681a0]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-e5b681a0]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-border-radius:%?4?%;border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-e5b681a0]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=e},d973:function(t,e,a){"use strict";var i=a("5713"),n=a.n(i);n.a},f018:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t.message?a("v-uni-view",{staticClass:"tipnews"},[t.tip?a("v-uni-view",{staticClass:"animated1 fadeInRight"},[a("v-uni-view",{staticClass:"cuIcon-notificationfill"}),a("span",[a("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),a("span",[t._v("商家"+t._s(t.message.merchant))]),t._v("查看了"),a("span",[t._v("红人"+t._s(t.message.celebrity))])])],1):t._e()],1):t._e(),a("uni-top-bar",{attrs:{title:t.toptitle,within:t.within}}),a("app-tabs",{attrs:{tabs:t.tabs,fixed:!0,topheight:t.topheight+43},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}}),a("v-uni-view",{staticClass:"category clearfix",style:{top:t.topheight+85+"px"}},[a("v-uni-view",{staticClass:"avatar"},[t._v("头像")]),a("v-uni-view",{staticClass:"number"},[t._v("昵称")]),a("v-uni-view",{staticClass:"categorybtn"},[t.userInfo.card_id<1||!t.userInfo.card_id?a("v-uni-view",{staticClass:"fans cuIcon-triangledownfill",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookup.apply(void 0,arguments)}}},[t._v(t._s(t.fans)),a("span",{staticClass:"cuIcon-lock"})]):t._e(),t.userInfo.card_id>0?a("v-uni-view",{staticClass:"fans cuIcon-triangledownfill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansbtn.apply(void 0,arguments)}}},[t._v(t._s(t.fans))]):t._e(),t.userInfo.card_id<1||!t.userInfo.card_id?a("v-uni-view",{staticClass:"fans cuIcon-triangledownfill",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookup.apply(void 0,arguments)}}},[t._v(t._s(t.categoryname)),a("span",{staticClass:"cuIcon-lock"})]):t._e(),t.userInfo.card_id>0?a("v-uni-view",{staticClass:"fans cuIcon-triangledownfill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.categorybtn.apply(void 0,arguments)}}},[t._v(t._s(t.categoryname))]):t._e()],1)],1),a("v-uni-swiper",{staticClass:"swiper",style:{height:t.height},attrs:{top:t.topheight+43+42+44+"px",current:t.tabIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},[a("v-uni-swiper-item",[t.loadSurvey?a("mescroll-item",{key:t.dyindex,attrs:{pay_type:t.pay_type,type:t.type,userid:t.userInfo.id,i:0,index:t.tabIndex,tabs:t.tabs,fansnum:t.fansnumindex,categoryid:t.categoryid,categorypid:t.categorypid}}):t._e()],1),a("v-uni-swiper-item",[t.loadSurvey?a("mescroll-item",{key:t.ksindex,attrs:{pay_type:t.pay_type,type:t.type,userid:t.userInfo.id,i:1,index:t.tabIndex,tabs:t.tabs,fansnum:t.fansnumindex,categoryid:t.categoryid,categorypid:t.categorypid}}):t._e()],1)],1),t.categoryjudge?a("v-uni-view",{staticClass:"menu-mask",style:{top:t.topheight+130+"px"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.moveHandle.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"menu clearfix"},[a("v-uni-view",{staticClass:"clearfix",staticStyle:{"margin-top":"3vw",width:"100%"}},[a("v-uni-view",{staticClass:"menu-item",class:99==t.menuindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.menu(99,"不限")}}},[t._v("不限")])],1),a("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(t.categorytable,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item",class:t.TabCur==i?"text-green cur":"",attrs:{"data-id":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(e.name))])})),1),t._l(t.categorytable,(function(e,i){return a("v-uni-view",{key:i,staticClass:"clearfix",class:t.TabCur==i?"show":"hide",staticStyle:{"margin-top":"3vw",width:"100%"}},t._l(t.categorylist,(function(i,n){return i.pid==e.id?a("v-uni-view",{key:n,staticClass:"menu-item",class:t.menuindex==n?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.menu(n,i.id,i.pid,i.name)}}},[t._v(t._s(i.name))]):t._e()})),1)}))],2)],1):t._e(),t.fansjudge?a("v-uni-view",{staticClass:"menu-mask",style:{top:t.topheight+130+"px"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.moveHandle.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"menu clearfix"},[a("v-uni-view",{staticClass:"menu-item",class:99==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(99,"不限")}}},[t._v("不限")]),a("v-uni-view",{staticClass:"menu-item",class:10==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(10,"10w以下")}}},[t._v("10w以下")]),a("v-uni-view",{staticClass:"menu-item",class:100==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(100,"10w~100w")}}},[t._v("10w~100w")]),a("v-uni-view",{staticClass:"menu-item",class:500==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(500,"100w~500w")}}},[t._v("100w~500w")]),a("v-uni-view",{staticClass:"menu-item",class:1e3==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(1e3,"500w~1000w")}}},[t._v("500w~1000w")]),a("v-uni-view",{staticClass:"menu-item",class:1001==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(1001,"1000w以上")}}},[t._v("1000w以上")])],1)],1):t._e(),a("v-uni-view",{staticClass:"cu-modal poplogin",class:"login"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"auth"},[a("v-uni-view",{staticClass:"title"},[t._v("请登录后操作！")]),a("v-uni-view",{staticClass:"loginbtn"},[a("v-uni-button",{staticClass:"close",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),a("v-uni-button",{staticClass:"login",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"cu-modal poptips",class:"Modal"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"auth"},[a("v-uni-view",{staticClass:"title"},[t._v("按需快速查找红人")]),a("v-uni-view",{staticClass:"vip",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.member.apply(void 0,arguments)}}},[t._v("成为会员，解锁快查")])],1)],1)],1),a("v-uni-view",{staticClass:"cu-modal poptips",class:"Modalios"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"auth"},[a("v-uni-view",{staticClass:"title"},[t._v("十分抱歉，由于相关规范，小程序暂不支持解锁快查。")])],1)],1)],1)],1)},s=[]},f42f:function(t,e,a){"use strict";a.r(e);var i=a("0107"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a}}]);