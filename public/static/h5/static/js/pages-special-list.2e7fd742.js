(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-special-list"],{"041e":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={mescrollUni:i("4f16").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("mescroll-uni",{ref:"mescrollRef",attrs:{height:"100%",top:t.topheight+43+"px",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[t.banner?i("v-uni-view",{staticClass:"special topimg"},[i("img",{attrs:{src:t.banner,mode:"widthFix"}})]):t._e(),i("v-uni-view",{staticClass:"supplylist"},t._l(t.goods,(function(e,a){return i("v-uni-view",{key:a,staticClass:"list",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.details(e.id)}}},[i("v-uni-view",{staticClass:"publisher"},[i("img",{attrs:{src:e["img"]}})]),i("v-uni-view",{staticClass:"number"},[i("v-uni-view",{staticClass:"title ellipsis"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"item"},[i("span",{staticClass:"nowpricetip"},[t._v("￥")]),i("span",{staticClass:"nowprice"},[t._v(t._s(e.nowprice))]),1==e.pay_type?i("v-uni-view",{staticClass:"commission"},[t._v("佣金 "+t._s(e.commission))]):t._e(),2==e.pay_type?i("v-uni-view",{staticClass:"commission"},[t._v("佣金 "+t._s(e.commission)+"%")]):t._e()],1),i("v-uni-view",{staticClass:"item"},[t._v("商品分类"),t._l(e.category,(function(e,a){return a<2?i("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),i("v-uni-view",{staticClass:"item"},[t._v("粉丝要求"),e.fans>0?i("v-uni-view",{staticClass:"table"},[t._v(t._s(e.fans)+"万以上")]):i("v-uni-view",{staticClass:"table"},[t._v("不限")])],1),i("v-uni-view",{staticClass:"item"},[t._v("平台要求"),t._l(e.platform,(function(e,a){return a<2?i("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"cu-tag line-green round"},[t._v("官方认证")]),i("v-uni-view",{staticClass:"cu-tag light bg-orange round"},[t._v("免费咨询")])],1)],1)],1)})),1)],1)},s=[]},"05fa":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},n=a;e.default=n},"0bff":function(t,e,i){"use strict";i.r(e);var a=i("c63a"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"0c17":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".app-tabs[data-v-e5b681a0]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;-webkit-box-shadow:0 2px 1px rgba(26,26,26,.1);box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-e5b681a0]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-e5b681a0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-e5b681a0]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-e5b681a0]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-border-radius:%?4?%;border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-e5b681a0]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=e},"0e22":function(t,e,i){"use strict";i.r(e);var a=i("9eb9"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"128f":function(t,e,i){"use strict";i.r(e);var a=i("9ea9"),n=i("1e08");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("c18f");var o,u=i("f0c5"),r=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"07edaae6",null,!1,a["a"],o);e["default"]=r.exports},"1e08":function(t,e,i){"use strict";i.r(e);var a=i("3006"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"2c8d":function(t,e,i){"use strict";i.r(e);var a=i("3b2c"),n=i("0bff");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("50c9");var o,u=i("f0c5"),r=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"e5b681a0",null,!1,a["a"],o);e["default"]=r.exports},3006:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=a},3379:function(t,e,i){"use strict";i.r(e);var a=i("041e"),n=i("0e22");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var o,u=i("f0c5"),r=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"c361860c",null,!1,a["a"],o);e["default"]=r.exports},"3b2c":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.tabs&&t.tabs.length?i("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[i("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(e,a){return i("v-uni-view",{key:a,staticClass:"tab-item",class:{active:t.value===a},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabClick(a,e)}}},[16!=e.id?i("span",[t._v(t._s(t.getTabName(e)))]):i("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),i("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},s=[]},"50c9":function(t,e,i){"use strict";var a=i("8309"),n=i.n(a);n.a},"5e20":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},"623d":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},n=a;e.default=n},"6b74":function(t,e,i){"use strict";i.r(e);var a=i("a154"),n=i("c522");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var o,u=i("f0c5"),r=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"4141dc7c",null,!1,a["a"],o);e["default"]=r.exports},8309:function(t,e,i){var a=i("0c17");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("baeb851e",a,!0,{sourceMap:!1,shadowMode:!1})},"9ea9":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):i("span",[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])])]):i("span",[t.within?i("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},"9eb9":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("05fa")),s=a(i("623d")),o={mixins:[n.default,s.default],data:function(){return{downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"空空如也"}},height:"400px",topheight:0,isAndroid:!0,indicatorDots:!0,autoplay:!0,interval:4e3,duration:500,goods:""}},filters:{formatDate:function(t){var e=new Date(1e3*t),i=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var n=e.getDate();n=n<10?"0"+n:n;var s=e.getHours();s=s<10?"0"+s:s;var o=e.getMinutes();o=o<10?"0"+o:o;var u=e.getSeconds();return u=u<10?"0"+u:u,i+"-"+a+"-"+n}},props:{banner:{type:[String,Number]},supplylist:{type:[String,Number]}},mounted:function(){var t=this;t.topheight=this.StatusBar,t.height=uni.getSystemInfoSync().windowHeight+"px"},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var e=this;e.supply(t)},supply:function(t){var e=this,i=this;uni.request({url:"https://www.hongrensutui.com/api/index/speciallist",data:{supplylist:i.supplylist,pagenum:t.num,pagesize:t.size},method:"POST",success:function(a){var n=a.data.data.list,s=n.length;1==t.num&&(i.goods=[]),i.goods=i.goods.concat(a.data.data.list),e.mescroll.endByPage(s),setTimeout((function(){e.mescroll.endSuccess(s)}),20)},fail:function(t){i.mescroll.endErr()}})},navToDetailPage:function(t,e){e&&(t=t+"?id="+e),uni.navigateTo({url:"/pages/"+t})},merchantdetails:function(t){uni.navigateTo({url:"/pages/merchant/details?id="+t})},details:function(t){uni.navigateTo({url:"/pages/supply/details?id="+t})}}};e.default=o},a154:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-top-bar",{attrs:{title:t.toptitle,within:t.within}}),i("mescroll-item",{attrs:{banner:t.banner,supplylist:t.supplylist}}),i("v-uni-view",{staticClass:"customer round shadow text-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tosupply.apply(void 0,arguments)}}},[i("img",{attrs:{src:"https://www.hongrensutui.com/h5/img/gongqiu_add.png"}})]),i("v-uni-view",{staticClass:"cu-modal poplogin",class:"login"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("请登录后操作！")]),i("v-uni-view",{staticClass:"loginbtn"},[i("v-uni-button",{staticClass:"close",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),i("v-uni-button",{staticClass:"login",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1)},s=[]},b338:function(t,e,i){var a=i("5e20");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("91297c2c",a,!0,{sourceMap:!1,shadowMode:!1})},c18f:function(t,e,i){"use strict";var a=i("b338"),n=i.n(a);n.a},c522:function(t,e,i){"use strict";i.r(e);var a=i("f075"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},c63a:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t,e){e&&this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};e.default=a},f075:function(t,e,i){"use strict";var a=i("4ea4");i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("128f")),s=a(i("2c8d")),o=a(i("3379")),u={components:{uniTopBar:n.default,AppTabs:s.default,MescrollItem:o.default},data:function(){return{modalName:null,height:"400px",topheight:0,userInfo:"",toptitle:"",banner:"",supplylist:"",within:""}},onLoad:function(t){var e=this;t.name&&(e.toptitle=t.name,"扶贫助农"==e.toptitle&&(e.within="https://www.hongrensutui.com/h5/img/zhunong_logo_left.png")),t.banner&&(e.banner=t.banner),t.supplylist&&(e.supplylist=t.supplylist),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.getuserinfo(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.getuserinfo(e.data.id)}})},methods:{getuserinfo:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/api/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},swiperChange:function(t){this.tabIndex=t.detail.current},tosupply:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/api/userinfo",data:{id:e.data.id},method:"POST",success:function(e){if(e.data.data.info){if(uni.setStorageSync("userInfo",e.data.data.info),t.userInfo=e.data.data.info,1==e.data.data.info.type&&1==e.data.data.info.examine)return uni.showToast({title:"当前商家信息正在审核，通过后可发布供需！",icon:"none",duration:2e3}),!1;if(1==e.data.data.info.type&&2==e.data.data.info.examine)return uni.navigateTo({url:"/pages/user/supply_list"}),!1;if(1==e.data.data.info.type&&3==e.data.data.info.examine)return uni.navigateTo({url:"/pages/user/attesj"}),!1;if(2==e.data.data.info.type)return uni.showToast({title:"仅限于商家操作！",icon:"none",duration:2e3}),!1;if(0==e.data.data.info.type||0==e.data.data.info.examine||null==e.data.data.info.examine)return uni.navigateTo({url:"/pages/user/attesj"}),!1}}})},fail:function(e){t.modalName="login"}})},hideModal:function(t){this.modalName=null},wechatLogin:function(t){wxlogin()},share:function(t){function e(e,i){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var i=this;if(i.toptitle)var a=i.toptitle+" | 网红直播带货一站式服务平台";else a="红人速推 | 网红直播带货一站式服务平台";var n="红人速推就是网红多 商家多，直播带货就上红人速推。",s="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(a,n,s,e)}))}};e.default=u}}]);