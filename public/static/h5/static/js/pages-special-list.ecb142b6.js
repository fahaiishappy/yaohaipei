(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-special-list"],{"0107":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t,i){i&&this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};i.default=n},"05ef":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};i.default=n},"0987":function(t,i,e){var n=e("d686");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("6572a09e",n,!0,{sourceMap:!1,shadowMode:!1})},3508:function(t,i,e){"use strict";e.r(i);var n=e("6e13"),a=e("a0be");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);var o,u=e("f0c5"),r=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"41c8ebba",null,!1,n["a"],o);i["default"]=r.exports},3734:function(t,i,e){"use strict";e.r(i);var n=e("c2d5"),a=e("75eb");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("d973");var o,u=e("f0c5"),r=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"525162bc",null,!1,n["a"],o);i["default"]=r.exports},"4fb0":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'.cu-bar[data-v-525162bc]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-525162bc]{margin-left:3vw;height:30px}.cuIcon-back[data-v-525162bc]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-525162bc]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-525162bc]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-525162bc]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-525162bc]{width:auto}.cuIcon-close[data-v-525162bc]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=i},"51e6":function(t,i,e){"use strict";e.r(i);var n=e("a2f8"),a=e("f42f");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("d162");var o,u=e("f0c5"),r=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"e5b681a0",null,!1,n["a"],o);i["default"]=r.exports},5713:function(t,i,e){var n=e("4fb0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("645c1318",n,!0,{sourceMap:!1,shadowMode:!1})},"6e13":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("uni-top-bar",{attrs:{title:t.toptitle,within:t.within}}),e("mescroll-item",{attrs:{banner:t.banner,supplylist:t.supplylist}}),e("v-uni-view",{staticClass:"customer round shadow text-center",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tosupply.apply(void 0,arguments)}}},[e("img",{attrs:{src:"https://www.hongrensutui.com/h5/img/gongqiu_add.png"}})]),e("v-uni-view",{staticClass:"cu-modal poplogin",class:"login"==t.modalName?"show":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"auth"},[e("v-uni-view",{staticClass:"title"},[t._v("请登录后操作！")]),e("v-uni-view",{staticClass:"loginbtn"},[e("v-uni-button",{staticClass:"close",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),e("v-uni-button",{staticClass:"login",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1)},s=[]},"75eb":function(t,i,e){"use strict";e.r(i);var n=e("05ef"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"7a37":function(t,i,e){"use strict";var n=e("4ea4");e("d3b7"),e("25f0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("3734")),s=n(e("51e6")),o=n(e("b689")),u={components:{uniTopBar:a.default,AppTabs:s.default,MescrollItem:o.default},data:function(){return{modalName:null,height:"400px",topheight:0,userInfo:"",toptitle:"",banner:"",supplylist:"",within:""}},onLoad:function(t){var i=this;t.name&&(i.toptitle=t.name,"扶贫助农"==i.toptitle&&(i.within="https://www.hongrensutui.com/h5/img/zhunong_logo_left.png")),t.banner&&(i.banner=t.banner),t.supplylist&&(i.supplylist=t.supplylist),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),i.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),i.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?i.getuserinfo(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(i){""!=i.data&&null!=i.data&&t.getuserinfo(i.data.id)}})},methods:{getuserinfo:function(t){var i=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),i.userInfo=t.data.data.info,i.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},swiperChange:function(t){this.tabIndex=t.detail.current},tosupply:function(){var t=this;uni.getStorage({key:"userInfo",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:i.data.id},method:"POST",success:function(i){if(i.data.data.info){if(uni.setStorageSync("userInfo",i.data.data.info),t.userInfo=i.data.data.info,1==i.data.data.info.type&&1==i.data.data.info.examine)return uni.showToast({title:"当前商家信息正在审核，通过后可发布供需！",icon:"none",duration:2e3}),!1;if(1==i.data.data.info.type&&2==i.data.data.info.examine)return uni.navigateTo({url:"/pages/user/supply_list"}),!1;if(1==i.data.data.info.type&&3==i.data.data.info.examine)return uni.navigateTo({url:"/pages/user/attesj"}),!1;if(2==i.data.data.info.type)return uni.showToast({title:"仅限于商家操作！",icon:"none",duration:2e3}),!1;if(0==i.data.data.info.type||0==i.data.data.info.examine||null==i.data.data.info.examine)return uni.navigateTo({url:"/pages/user/attesj"}),!1}}})},fail:function(i){t.modalName="login"}})},hideModal:function(t){this.modalName=null},wechatLogin:function(t){wxlogin()},share:function(t){function i(i,e){return t.apply(this,arguments)}return i.toString=function(){return t.toString()},i}((function(t,i){var e="红人速推 | 网红直播带货一站式服务平台",n="红人速推就是网红多 商家多，直播带货就上红人速推。",a="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(e,n,a,i)}))}};i.default=u},8880:function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},a=n;i.default=a},"8dc1":function(t,i,e){"use strict";var n=e("4ea4");e("99af"),e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("cea8")),s=n(e("8880")),o={mixins:[a.default,s.default],data:function(){return{downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"空空如也"}},height:"400px",topheight:0,isAndroid:!0,indicatorDots:!0,autoplay:!0,interval:4e3,duration:500,goods:""}},filters:{formatDate:function(t){var i=new Date(1e3*t),e=i.getFullYear(),n=i.getMonth()+1;n=n<10?"0"+n:n;var a=i.getDate();a=a<10?"0"+a:a;var s=i.getHours();s=s<10?"0"+s:s;var o=i.getMinutes();o=o<10?"0"+o:o;var u=i.getSeconds();return u=u<10?"0"+u:u,e+"-"+n+"-"+a}},props:{banner:{type:[String,Number]},supplylist:{type:[String,Number]}},mounted:function(){var t=this;t.topheight=this.StatusBar,t.height=uni.getSystemInfoSync().windowHeight+"px"},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var i=this;i.supply(t)},supply:function(t){var i=this,e=this;uni.request({url:"https://www.hongrensutui.com/api/index/speciallist",data:{supplylist:e.supplylist,pagenum:t.num,pagesize:t.size},method:"POST",success:function(n){var a=n.data.data.list,s=a.length;1==t.num&&(e.goods=[]),e.goods=e.goods.concat(n.data.data.list),i.mescroll.endByPage(s),setTimeout((function(){i.mescroll.endSuccess(s)}),20)},fail:function(t){e.mescroll.endErr()}})},navToDetailPage:function(t,i){i&&(t=t+"?id="+i),uni.navigateTo({url:"/pages/"+t})},navTabPage:function(t,i){i&&uni.setStorageSync("type",i),uni.switchTab({url:"/pages/"+t})},merchantdetails:function(t,i){uni.navigateTo({url:"/pages/merchant/details?id="+i})},details:function(t){uni.navigateTo({url:"/pages/supply/details?id="+t})}}};i.default=o},a0be:function(t,i,e){"use strict";e.r(i);var n=e("7a37"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},a2f8:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.tabs&&t.tabs.length?e("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[e("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(i,n){return e("v-uni-view",{key:n,staticClass:"tab-item",class:{active:t.value===n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(n,i)}}},[16!=i.id?e("span",[t._v(t._s(t.getTabName(i)))]):e("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),e("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},s=[]},b146:function(t,i,e){"use strict";e.r(i);var n=e("8dc1"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},b689:function(t,i,e){"use strict";e.r(i);var n=e("ed46"),a=e("b146");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);var o,u=e("f0c5"),r=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"a12491ea",null,!1,n["a"],o);i["default"]=r.exports},c2d5:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?e("span",{staticClass:"clearfix"},[t.within?e("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):e("span",[t.title?e("span",{staticClass:"title"},[t._v(t._s(t.title))]):e("span",{staticClass:"title"},[t._v("红人速推")])])]):e("span",[t.within?e("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},cea8:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},a=n;i.default=a},d162:function(t,i,e){"use strict";var n=e("0987"),a=e.n(n);a.a},d686:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".app-tabs[data-v-e5b681a0]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;-webkit-box-shadow:0 2px 1px rgba(26,26,26,.1);box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-e5b681a0]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-e5b681a0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-e5b681a0]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-e5b681a0]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-border-radius:%?4?%;border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-e5b681a0]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=i},d973:function(t,i,e){"use strict";var n=e("5713"),a=e.n(n);a.a},ed46:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={mescrollUni:e("426c").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("mescroll-uni",{ref:"mescrollRef",attrs:{height:"100%",top:t.topheight+43+"px",down:t.downOption,up:t.upOption},on:{init:function(i){arguments[0]=i=t.$handleEvent(i),t.mescrollInit.apply(void 0,arguments)},down:function(i){arguments[0]=i=t.$handleEvent(i),t.downCallback.apply(void 0,arguments)},up:function(i){arguments[0]=i=t.$handleEvent(i),t.upCallback.apply(void 0,arguments)}}},[t.banner?e("v-uni-view",{staticClass:"special topimg"},[e("img",{attrs:{src:t.banner,mode:"widthFix"}})]):t._e(),e("v-uni-view",{staticClass:"supplylist"},t._l(t.goods,(function(i,n){return e("v-uni-view",{key:n,staticClass:"list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.details(i.id)}}},[e("v-uni-view",{staticClass:"publisher"},[e("img",{attrs:{src:i["img"]}})]),e("v-uni-view",{staticClass:"number"},[e("v-uni-view",{staticClass:"title ellipsis"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"item"},[e("span",{staticClass:"nowpricetip"},[t._v("￥")]),e("span",{staticClass:"nowprice"},[t._v(t._s(i.nowprice))]),1==i.pay_type?e("v-uni-view",{staticClass:"commission"},[t._v("佣金 "+t._s(i.commission))]):t._e(),2==i.pay_type?e("v-uni-view",{staticClass:"commission"},[t._v("佣金 "+t._s(i.commission)+"%")]):t._e()],1),e("v-uni-view",{staticClass:"item"},[t._v("商品分类"),t._l(i.category,(function(i,n){return n<2?e("v-uni-view",{key:n,staticClass:"table"},[t._v(t._s(i))]):t._e()}))],2),e("v-uni-view",{staticClass:"item"},[t._v("粉丝要求"),i.fans>0?e("v-uni-view",{staticClass:"table"},[t._v(t._s(i.fans)+"万以上")]):e("v-uni-view",{staticClass:"table"},[t._v("不限")])],1),e("v-uni-view",{staticClass:"item"},[t._v("平台要求"),t._l(i.platform,(function(i,n){return n<2?e("v-uni-view",{key:n,staticClass:"table"},[t._v(t._s(i))]):t._e()}))],2),e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"cu-tag line-green round"},[t._v("官方认证")]),e("v-uni-view",{staticClass:"cu-tag light bg-orange round"},[t._v("免费咨询")])],1)],1)],1)})),1)],1)},s=[]},f42f:function(t,i,e){"use strict";e.r(i);var n=e("0107"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a}}]);