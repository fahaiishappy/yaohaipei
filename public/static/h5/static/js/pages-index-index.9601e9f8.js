(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0107":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t,e){e&&this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};e.default=a},"05ef":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=a},"0987":function(t,e,i){var a=i("d686");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6572a09e",a,!0,{sourceMap:!1,shadowMode:!1})},"2dc7":function(t,e,i){"use strict";i.r(e);var a=i("8b4c"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},3734:function(t,e,i){"use strict";i.r(e);var a=i("c2d5"),n=i("75eb");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("d973");var o,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"525162bc",null,!1,a["a"],o);e["default"]=c.exports},"4fb0":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.cu-bar[data-v-525162bc]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-525162bc]{margin-left:3vw;height:30px}.cuIcon-back[data-v-525162bc]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-525162bc]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-525162bc]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-525162bc]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-525162bc]{width:auto}.cuIcon-close[data-v-525162bc]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},"51e6":function(t,e,i){"use strict";i.r(e);var a=i("a2f8"),n=i("f42f");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("d162");var o,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"e5b681a0",null,!1,a["a"],o);e["default"]=c.exports},"56d1":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("cea8")),s=a(i("8880")),o={mixins:[n.default,s.default],data:function(){return{downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"空空如也"}},height:"400px",topheight:0,isAndroid:!0,indicatorDots:!0,autoplay:!0,interval:4e3,duration:500,cewebrity:"",selected:"",merchant:"",recmerchant:"",cewebritycount:"",merchantcount:"",news:"",banner:"",showpage:!1,goods:"",speciallist:"",speciallength:!1}},props:{tabs:Array},mounted:function(){var t=this;uni.showLoading({title:"加载中，请稍后..."}),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",t.geth5index(),t.special()},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var e=this;e.supplylist(t)},supplylist:function(t){var e=this,i=this;uni.request({url:"https://www.hongrensutui.com/api/index/totalcewebrity",data:{pay_type:2,pagenum:t.num,pagesize:t.size},method:"POST",success:function(a){var n=a.data.data.list,s=n.length;1==t.num&&(i.goods=[]),i.goods=i.goods.concat(a.data.data.list),e.mescroll.endByPage(s),setTimeout((function(){e.mescroll.endSuccess(s)}),20)},fail:function(t){i.mescroll.endErr()}})},special:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/special",data:{page:"celebrity-item"},method:"POST",success:function(e){t.speciallist=e.data.data.list,t.speciallist.length>0&&(t.speciallength=!0)}})},geth5index:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/h5index",method:"POST",success:function(e){t.banner=e.data.data.banner,t.selected=e.data.data.selected,t.cewebrity=e.data.data.hot,t.merchant=e.data.data.merchant,t.cewebritycount=e.data.data.cewebritycount,t.merchantcount=e.data.data.merchantcount,t.recmerchant=e.data.data.recmerchant,t.news=e.data.data.news,t.news&&(uni.hideLoading(),t.showpage=!0)}})},tosupply:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:e.data.id},method:"POST",success:function(e){if(e.data.data.info){if(uni.setStorageSync("userInfo",e.data.data.info),t.userInfo=e.data.data.info,1==e.data.data.info.type&&1==e.data.data.info.examine)return uni.showToast({title:"当前商家信息正在审核，通过后可发布供需！",icon:"none",duration:2e3}),!1;if(1==e.data.data.info.type&&2==e.data.data.info.examine)return uni.navigateTo({url:"/pages/user/supply_list"}),!1;if(1==e.data.data.info.type&&3==e.data.data.info.examine)return uni.navigateTo({url:"/pages/user/attesj"}),!1;if(2==e.data.data.info.type)return uni.showToast({title:"仅限于商家操作！",icon:"none",duration:2e3}),!1;if(0==e.data.data.info.type||0==e.data.data.info.examine||null==e.data.data.info.examine)return uni.navigateTo({url:"/pages/user/attesj"}),!1}}})},fail:function(e){t.modalName="login"}})},navToDetailPage:function(t,e){e&&(t=t+"?id="+e),uni.navigateTo({url:"/pages/"+t})},navTabPage:function(t,e){e&&uni.setStorageSync("type",e),uni.switchTab({url:"/pages/"+t})},specialPage:function(t){var e=t.link+"?specialid="+t.id+"&name="+t.name;0!=t.linkid&&(e=e+"&id="+t.linkid),t.supplylist&&(e=e+"&supplylist="+t.supplylist),t.banner&&(e=e+"&banner="+t.banner),uni.navigateTo({url:"/pages/"+e})},merchantdetails:function(t,e){uni.navigateTo({url:"/pages/merchant/details?id="+e})},details:function(t,e){uni.navigateTo({url:"/pages/supply/details?id="+t+"&mid="+e})}}};e.default=o},5713:function(t,e,i){var a=i("4fb0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("645c1318",a,!0,{sourceMap:!1,shadowMode:!1})},"6b46":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={mescrollUni:i("426c").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.showpage?i("mescroll-uni",{ref:"mescrollRef",attrs:{height:"100%",top:t.topheight+43+42+"px",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"bg-fff mb-0 indexpage"},[i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"page-section swiper"},[i("v-uni-view",{staticClass:"page-section-spacing"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},t._l(t.banner,(function(e,a){return"index2"==e.page&&"1"==e.position?i("v-uni-swiper-item",{key:a,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage(e.link)}}},[i("v-uni-view",{staticClass:"swiper-item"},[i("img",{staticClass:"banner",attrs:{src:e["img"],mode:"widthFix"}})])],1):t._e()})),1)],1)],1)],1)],1),t.speciallength?i("v-uni-view",{staticClass:"bg-fff"},[i("v-uni-view",{staticClass:"indexnav"},t._l(t.speciallist,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.specialPage(e)}}},[i("img",{staticClass:"navlogo",attrs:{src:e.buttonimg,mode:"widthFix"}}),i("v-uni-view",{staticClass:"navname text-gray"},[t._v(t._s(e.name))])],1)})),1)],1):t._e(),i("v-uni-view",{staticClass:"bg-fff"},[i("v-uni-view",{staticClass:"cardtitle"},[i("v-uni-view",{staticClass:"name"},[t._v("今日推荐商家")]),i("v-uni-view",{staticClass:"gd",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("merchant/list")}}},[t._v("更多")])],1),i("v-uni-view",{staticClass:"supplylist"},[i("v-uni-view",{staticClass:"list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.merchantdetails(t.recmerchant.attestatio,t.recmerchant.id)}}},[i("v-uni-view",{staticClass:"publisher"},[i("img",{attrs:{src:t.recmerchant["logo"]}})]),i("v-uni-view",{staticClass:"number"},[i("v-uni-view",{staticClass:"title ellipsis"},[t._v(t._s(t.recmerchant.title))]),i("v-uni-view",{staticClass:"item"},[i("span",{staticClass:"cu-tag line-green round"},[t._v("营业执照已验证")]),i("span",{staticClass:"cu-tag line-green round"},[t._v("人工审核")])]),i("v-uni-view",{staticClass:"item"},[t._v("商家分类"),t._l(t.recmerchant.category,(function(e,a){return a<2?i("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),t.recmerchant.platform.length>0?i("v-uni-view",{staticClass:"item"},[t._v("拥有平台"),t._l(t.recmerchant.platform,(function(e,a){return a<2?i("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2):i("v-uni-view",{staticClass:"item"},[t._v("拥有平台"),i("v-uni-view",{staticClass:"table"},[t._v("实体")])],1),i("v-uni-view",{staticClass:"item"},[t._v("入驻时间"),i("v-uni-view",{staticClass:"table"},[t._v(t._s(t._f("formatDate")(t.recmerchant.createtime)))])],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"bg-fff"},t._l(t.banner,(function(e,a){return"index"==e.page&&"2"==e.position&&"1"==e.sort?i("v-uni-view",{key:a,staticClass:"middlebanner",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage(e.link)}}},[i("img",{staticClass:"banner",attrs:{src:e["img"],mode:"widthFix"}})]):t._e()})),1),i("v-uni-view",{staticClass:"cardtitle"},[i("v-uni-view",{staticClass:"name"},[t._v("最新需求")])],1),i("v-uni-view",{staticClass:"supplylist"},t._l(t.goods,(function(e,a){return i("v-uni-view",{key:a,staticClass:"list",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.details(e.id)}}},[i("v-uni-view",{staticClass:"publisher"},[i("img",{attrs:{src:e["img"]}})]),i("v-uni-view",{staticClass:"number"},[i("v-uni-view",{staticClass:"title ellipsis"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"item"},[i("span",{staticClass:"nowpricetip"},[t._v("￥")]),i("span",{staticClass:"nowprice"},[t._v(t._s(e.nowprice))]),1==e.pay_type?i("v-uni-view",{staticClass:"commission"},[t._v("佣金 "+t._s(e.commission))]):t._e(),2==e.pay_type?i("v-uni-view",{staticClass:"commission"},[t._v("佣金 "+t._s(e.commission)+"%")]):t._e()],1),i("v-uni-view",{staticClass:"item"},[t._v("商品分类"),t._l(e.category,(function(e,a){return a<2?i("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),i("v-uni-view",{staticClass:"item"},[t._v("粉丝要求"),e.fans>0?i("v-uni-view",{staticClass:"table"},[t._v(t._s(e.fans)+"万以上")]):i("v-uni-view",{staticClass:"table"},[t._v("不限")])],1),i("v-uni-view",{staticClass:"item"},[t._v("平台要求"),t._l(e.platform,(function(e,a){return a<2?i("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"cu-tag line-green round"},[t._v("官方认证")]),i("v-uni-view",{staticClass:"cu-tag light bg-orange round"},[t._v("免费咨询")])],1)],1)],1)})),1)],1):t._e()},s=[]},"6f4b":function(t,e,i){"use strict";i.r(e);var a=i("6b46"),n=i("dbd6");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var o,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"26d893ad",null,!1,a["a"],o);e["default"]=c.exports},"75eb":function(t,e,i){"use strict";i.r(e);var a=i("05ef"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},8880:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},n=a;e.default=n},"8b4c":function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("3734")),s=a(i("51e6")),o=a(i("6f4b")),r=a(i("cb06")),c={components:{uniTopBar:n.default,AppTabs:s.default,MerchantItem:o.default,CelebrityItem:r.default},data:function(){return{modalName:null,loginbtn:"微信授权登录",tabs:["找网红","找商品","","",""],tabIndex:0,swiperheight:"400px",height:0,search:"",tip:!1,message:"",isAndroid:!0,bottom:"bottom: 38vw;"}},onLoad:function(t){var e=this;switch(e.height=e.StatusBar,e.swiperheight=uni.getSystemInfoSync().windowHeight+"px",t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.getuserinfo(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),e.getRandomArbitrary(0,49),e.getmessage(),e.timerInt=setInterval((function(){uni.getStorage({key:"message",success:function(t){if(""!=t.data&&(e.codetime--,e.message=t.data[e.getRandomArbitrary(0,50)],e.message.celebrity=e.message.celebrity[0]+e.message.celebrity[1]+"***",e.message.merchant=e.message.merchant[0]+e.message.merchant[1]+"***",e.tip=!e.tip,0==e.codetime))return clearInterval(e.timerInt),void(e.codetime=2e3)}})}),4e3),uni.getSystemInfoSync().platform){case"android":e.isAndroid=!0;break;case"ios":e.isAndroid=!0;break}},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.getuserinfo(e.data.id)}})},methods:{getuserinfo:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.follow(t.data.data.info.openid),e.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},getRandomArbitrary:function(t,e){return Math.floor(Math.random()*(e-t)+t)},follow:function(t){uni.request({url:"https://www.hongrensutui.com/api/index/follow",data:{openid:t},method:"POST",success:function(t){0==t.data.data.list.subscribe&&uni.showModal({title:"关注公众号",content:"听说，他们都在这找到纯佣网红的",confirmText:"去关注",success:function(t){t.confirm&&(location.href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA3NDQ1OTY5Mw==&scene=110#wechat_redirect")}})}})},getmessage:function(){uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(e){t("log",e.data.data.list," at pages/index/index.vue:264"),uni.setStorageSync("message",e.data.data.list)}})},swiperChange:function(t){this.tabIndex=t.detail.current},tosupply:function(){var e=this;uni.getStorage({key:"userInfo",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:i.data.id},method:"POST",success:function(i){if(t("log",i," at pages/index/index.vue:283"),i.data.data.info){if(uni.setStorageSync("userInfo",i.data.data.info),e.userInfo=i.data.data.info,1==i.data.data.info.type&&1==i.data.data.info.examine)return uni.showToast({title:"当前商家信息正在审核，通过后可发布供需！",icon:"none",duration:2e3}),!1;if(1==i.data.data.info.type&&2==i.data.data.info.examine)return uni.navigateTo({url:"/pages/user/supply_list"}),!1;if(1==i.data.data.info.type&&3==i.data.data.info.examine)return uni.navigateTo({url:"/pages/user/attesj"}),!1;if(2==i.data.data.info.type)return uni.showToast({title:"仅限于商家操作！",icon:"none",duration:2e3}),!1;if(0==i.data.data.info.type||0==i.data.data.info.examine||null==i.data.data.info.examine)return uni.navigateTo({url:"/pages/user/attesj"}),!1}}})},fail:function(t){e.modalName="login"}})},gomember:function(){uni.navigateTo({url:"/pages/member/member"})},navToDetailPage:function(t){uni.navigateTo({url:"/pages/"+t})},share:function(t){function e(e,i){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var i="红人速推 | 网红直播带货一站式服务平台",a="红人速推就是网红多、商家多，直播带货就上红人速推。",n="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(i,a,n,e)}))}};e.default=c}).call(this,i("0de9")["log"])},"9d06":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"index"},[t.message&&0==t.tabIndex?i("v-uni-view",{staticClass:"tipnews",style:{top:t.height+88+"px"}},[t.tip?i("v-uni-view",{staticClass:"animated1 fadeInRight"},[i("v-uni-view",{staticClass:"cuIcon-notificationfill"}),i("span",[i("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),i("span",[t._v("商家"+t._s(t.message.merchant))]),t._v("查看了"),i("span",[t._v("网红"+t._s(t.message.celebrity))])])],1):t._e()],1):t._e(),t.message&&1==t.tabIndex?i("v-uni-view",{staticClass:"tipnews",style:{top:t.height+88+"px"}},[t.tip?i("v-uni-view",{staticClass:"animated1 fadeInRight"},[i("v-uni-view",{staticClass:"cuIcon-notificationfill"}),i("span",[i("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),i("span",[t._v("网红"+t._s(t.message.celebrity))]),t._v("查看了"),i("span",[t._v("商家"+t._s(t.message.merchant))])])],1):t._e()],1):t._e(),i("uni-top-bar",{attrs:{barid:1}}),i("app-tabs",{attrs:{tabs:t.tabs,fixed:!0,topheight:t.height+43},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}}),i("v-uni-view",{staticClass:"settled cu-tag light bg-orange round",style:{top:t.height+52+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("user/atte")}}},[t._v("免费入驻")]),i("v-uni-swiper",{staticClass:"swiper",style:{height:t.swiperheight},attrs:{top:t.height+43+42+"px",current:t.tabIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},[i("v-uni-swiper-item",[i("celebrity-item",{attrs:{i:1,index:t.tabIndex,tabs:t.tabs}})],1),i("v-uni-swiper-item",[i("merchant-item",{attrs:{i:2,index:t.tabIndex,tabs:t.tabs}})],1)],1),1==t.tabIndex?i("v-uni-view",{staticClass:"customer round shadow text-center",style:t.bottom,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tosupply.apply(void 0,arguments)}}},[i("img",{attrs:{src:"https://www.hongrensutui.com/h5/img/gongqiu_add.png"}})]):t._e(),i("v-uni-view",{staticClass:"customer round shadow text-center",class:t.isAndroid?"show":"hide",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gomember.apply(void 0,arguments)}}},[i("img",{attrs:{src:"https://www.hongrensutui.com/h5/img/member_add.png"}})])],1)},s=[]},a2f8:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.tabs&&t.tabs.length?i("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[i("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(e,a){return i("v-uni-view",{key:a,staticClass:"tab-item",class:{active:t.value===a},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabClick(a,e)}}},[16!=e.id?i("span",[t._v(t._s(t.getTabName(e)))]):i("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),i("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},s=[]},c0b4:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("cea8")),s=a(i("8880")),o={mixins:[n.default,s.default],data:function(){return{downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"空空如也"}},height:"400px",topheight:0,isAndroid:!0,indicatorDots:!0,autoplay:!0,interval:4e3,duration:500,cewebrity:"",selected:"",merchant:"",recmerchant:"",cewebritycount:"",merchantcount:"",news:"",banner:"",showpage:!1,goods:"",speciallist:"",speciallength:!1}},filters:{formatDate:function(t){var e=new Date(1e3*t),i=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var n=e.getDate();n=n<10?"0"+n:n;var s=e.getHours();s=s<10?"0"+s:s;var o=e.getMinutes();o=o<10?"0"+o:o;var r=e.getSeconds();return r=r<10?"0"+r:r,i+"-"+a+"-"+n}},props:{tabs:Array},mounted:function(){var t=this;uni.showLoading({title:"加载中，请稍后..."}),t.topheight=this.StatusBar,t.height=uni.getSystemInfoSync().windowHeight+"px",t.geth5index(),t.special()},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var e=this;e.supplylist(t)},special:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/special",data:{page:"merchant-item"},method:"POST",success:function(e){t.speciallist=e.data.data.list,t.speciallist.length>0&&(t.speciallength=!0)}})},supplylist:function(t){var e=this,i=this;uni.request({url:"https://www.hongrensutui.com/api/index/supplylist",data:{pagenum:t.num,pagesize:t.size},method:"POST",success:function(a){var n=a.data.data.list,s=n.length;1==t.num&&(i.goods=[]),i.goods=i.goods.concat(a.data.data.list),e.mescroll.endByPage(s),setTimeout((function(){e.mescroll.endSuccess(s)}),20)},fail:function(t){i.mescroll.endErr()}})},geth5index:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/h5index",method:"POST",success:function(e){t.banner=e.data.data.banner,t.selected=e.data.data.selected,t.cewebrity=e.data.data.hot,t.merchant=e.data.data.merchant,t.cewebritycount=e.data.data.cewebritycount,t.merchantcount=e.data.data.merchantcount,t.recmerchant=e.data.data.recmerchant,t.news=e.data.data.news,t.news&&(uni.hideLoading(),t.showpage=!0)}})},navToDetailPage:function(t,e){e&&(t=t+"?id="+e),uni.navigateTo({url:"/pages/"+t})},navTabPage:function(t,e){e&&uni.setStorageSync("type",e),uni.switchTab({url:"/pages/"+t})},specialPage:function(t){var e=t.link+"?specialid="+t.id+"&name="+t.name;0!=t.linkid&&(e=e+"&id="+t.linkid),t.supplylist&&(e=e+"&supplylist="+t.supplylist),t.banner&&(e=e+"&banner="+t.banner),uni.navigateTo({url:"/pages/"+e})},merchantdetails:function(t,e){uni.navigateTo({url:"/pages/merchant/details?id="+e})},details:function(t){uni.navigateTo({url:"/pages/supply/details?id="+t})}}};e.default=o},c2d5:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):i("span",[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])])]):i("span",[t.within?i("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},c8ce:function(t,e,i){"use strict";i.r(e);var a=i("9d06"),n=i("2dc7");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var o,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"499aa67e",null,!1,a["a"],o);e["default"]=c.exports},ca38:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={mescrollUni:i("426c").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.showpage?i("mescroll-uni",{ref:"mescrollRef",attrs:{height:"100%",top:t.topheight+43+42+"px",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"bg-fff mb-0 indexpage"},[i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"page-section swiper"},[i("v-uni-view",{staticClass:"page-section-spacing"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},t._l(t.banner,(function(e,a){return"index"==e.page&&"1"==e.position?i("v-uni-swiper-item",{key:a,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage(e.link)}}},[i("v-uni-view",{staticClass:"swiper-item"},[i("img",{staticClass:"banner",attrs:{src:e["img"],mode:"widthFix"}})])],1):t._e()})),1)],1)],1)],1)],1),t.speciallength?i("v-uni-view",{staticClass:"bg-fff"},[i("v-uni-view",{staticClass:"indexnav"},t._l(t.speciallist,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.specialPage(e)}}},[i("img",{staticClass:"navlogo",attrs:{src:e.buttonimg,mode:"widthFix"}}),i("v-uni-view",{staticClass:"navname text-gray"},[t._v(t._s(e.name))])],1)})),1)],1):t._e(),i("v-uni-view",{staticClass:"cardtitle"},[i("v-uni-view",{staticClass:"name"},[t._v("最新主播")]),i("v-uni-view",{staticClass:"gd",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("celebrity/list")}}},[t._v("更多")])],1),i("v-uni-view",{staticClass:"celebritylist"},t._l(t.goods,(function(e,a){return i("v-uni-view",{key:a,staticClass:"list",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage("celebrity/details",e.id)}}},[i("v-uni-view",{staticClass:"publisher"},[i("v-uni-view",{staticClass:"avatar"},[i("img",{attrs:{src:e["avatar"]}}),i("v-uni-view",{staticClass:"tip"},[t._v("纯佣主播")])],1)],1),i("v-uni-view",{staticClass:"number"},[i("v-uni-view",{staticClass:"title ellipsis"},[i("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.nickname))]),"抖音"==e.platform?i("v-uni-image",{staticClass:"platform",attrs:{src:"https://www.hongrensutui.com/h5/img/douyin_sup.png"}}):t._e(),"快手"==e.platform?i("v-uni-image",{staticClass:"platform",attrs:{src:"https://www.hongrensutui.com/h5/img/kuaishou_sup.png"}}):t._e(),i("span",{staticClass:"cu-tag light bg-orange round",staticStyle:{float:"right"}},[t._v("免费咨询")])],1),i("v-uni-view",{staticClass:"item"},[t._v("拥有粉丝"),i("span",{staticClass:"nowprice"},[t._v(t._s(e.fans))]),i("span",{staticClass:"nowpricetip"},[t._v("w")])]),i("v-uni-view",{staticClass:"item"},[t._v("带货领域"),t._l(e.category,(function(e,a){return a<2?i("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),i("v-uni-view",{staticClass:"item"},[t._v("合作形式"),t._l(e.cooperation,(function(e,a){return a<2?i("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),i("v-uni-view",{staticClass:"item"},[i("span",{staticStyle:{"margin-right":"1vw"}},[t._v("谁看过他")]),t._l(e.purpose,(function(t,e){return i("v-uni-image",{key:e,staticClass:"platform",staticStyle:{"border-radius":"1vw",top:"-0.3vw"},attrs:{src:t}})})),i("v-uni-image",{staticClass:"platform",staticStyle:{"border-radius":"1vw",top:"-0.3vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/pic_more.png"}})],2)],1)],1)})),1)],1):t._e()},s=[]},cb06:function(t,e,i){"use strict";i.r(e);var a=i("ca38"),n=i("d6ed");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var o,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"4d07ae88",null,!1,a["a"],o);e["default"]=c.exports},cea8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},n=a;e.default=n},d162:function(t,e,i){"use strict";var a=i("0987"),n=i.n(a);n.a},d686:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".app-tabs[data-v-e5b681a0]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;-webkit-box-shadow:0 2px 1px rgba(26,26,26,.1);box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-e5b681a0]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-e5b681a0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-e5b681a0]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-e5b681a0]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-border-radius:%?4?%;border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-e5b681a0]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=e},d6ed:function(t,e,i){"use strict";i.r(e);var a=i("56d1"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},d973:function(t,e,i){"use strict";var a=i("5713"),n=i.n(a);n.a},dbd6:function(t,e,i){"use strict";i.r(e);var a=i("c0b4"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},f42f:function(t,e,i){"use strict";i.r(e);var a=i("0107"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a}}]);