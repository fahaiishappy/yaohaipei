(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0107":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t,e){e&&this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};e.default=a},"05ef":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=a},"0987":function(t,e,i){var a=i("d686");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6572a09e",a,!0,{sourceMap:!1,shadowMode:!1})},"1cb0":function(t,e,i){var a=i("627e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("b68b7a92",a,!0,{sourceMap:!1,shadowMode:!1})},"2dc7":function(t,e,i){"use strict";i.r(e);var a=i("8b4c"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},3174:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):i("span",[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])])]):i("span",[t.within?i("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},3734:function(t,e,i){"use strict";i.r(e);var a=i("3174"),n=i("75eb");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("3804");var r,o=i("f0c5"),l=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"07edaae6",null,!1,a["a"],r);e["default"]=l.exports},3804:function(t,e,i){"use strict";var a=i("1cb0"),n=i.n(a);n.a},"51e6":function(t,e,i){"use strict";i.r(e);var a=i("a2f8"),n=i("f42f");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("d162");var r,o=i("f0c5"),l=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"e5b681a0",null,!1,a["a"],r);e["default"]=l.exports},"56d1":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("cea8")),s=a(i("8880")),r={mixins:[n.default,s.default],data:function(){return{downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"空空如也"}},height:"400px",topheight:0,indicatorDots:!0,autoplay:!0,interval:4e3,duration:500,goods:""}},filters:{numFilter:function(t){var e,i=t.length-1;return i<=2?e=t[0]+"**":3==i?e=t[0]+"***":4==i?e=t[0]+"****":i>=5&&(e=t[0]+"*****"),e}},props:{tabs:Array,isAndroid:Boolean,cardid:Number,speciallist:[String,Array],speciallength:Boolean,banner:[String,Array]},mounted:function(){this,this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px"},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){this.supplylist(t)},supplylist:function(t){var e=this,i=this;uni.request({url:"https://www.hongrensutui.com/api/api/totalcewebrity",data:{pay_type:2,pagenum:t.num,pagesize:t.size},method:"POST",success:function(a){var n=a.data.data.list,s=n.length;1==t.num&&(i.goods=[]),i.goods=i.goods.concat(a.data.data.list),e.mescroll.endByPage(s),setTimeout((function(){e.mescroll.endSuccess(s)}),20)},fail:function(t){i.mescroll.endErr()}})},navToDetailPage:function(t,e){e&&(t=t+"?id="+e),uni.navigateTo({url:"/pages/"+t})},specialPage:function(t){var e=t.link+"?specialid="+t.id+"&name="+t.name;0!=t.linkid&&(e=e+"&id="+t.linkid),t.supplylist&&(e=e+"&supplylist="+t.supplylist),t.banner&&(e=e+"&banner="+t.banner),uni.navigateTo({url:"/pages/"+e})}}};e.default=r},"627e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},"6edf":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={mescrollUni:i("426c").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("mescroll-uni",{ref:"mescrollRef",attrs:{height:"100%",top:t.topheight+43+42+"px",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"bg-fff mb-0 indexpage"},[i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"page-section swiper"},[i("v-uni-view",{staticClass:"page-section-spacing"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},t._l(t.banner,(function(e,a){return"1"==e.position?i("v-uni-swiper-item",{key:a,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage(e.link)}}},[i("v-uni-view",{staticClass:"swiper-item"},[i("img",{staticClass:"banner",attrs:{src:e["img"],mode:"widthFix"}})])],1):t._e()})),1)],1)],1)],1)],1),t.speciallength?i("v-uni-view",{staticClass:"bg-fff"},[i("v-uni-view",{staticClass:"indexnav"},t._l(t.speciallist,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.specialPage(e)}}},[i("img",{staticClass:"navlogo",attrs:{src:e.buttonimg,mode:"widthFix"}}),i("v-uni-view",{staticClass:"navname text-gray"},[t._v(t._s(e.name))])],1)})),1)],1):t._e(),i("v-uni-view",{staticClass:"cardtitle"},[i("v-uni-view",{staticClass:"name"},[t._v("最新主播")]),i("v-uni-view",{staticClass:"gd",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("celebrity/list")}}},[t._v("更多")])],1),i("v-uni-view",{staticClass:"celebritylist"},t._l(t.goods,(function(e,a){return i("v-uni-view",{key:a,staticClass:"list",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage("celebrity/details",e.id)}}},[i("v-uni-view",{staticClass:"publisher"},[i("v-uni-view",{staticClass:"avatar"},[i("img",{attrs:{src:e["avatar"]}}),i("v-uni-view",{staticClass:"tip"},[t._v("纯佣主播")])],1)],1),i("v-uni-view",{staticClass:"number"},[i("v-uni-view",{staticClass:"title ellipsis"},[t.cardid>0?i("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.nickname))]):i("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t._f("numFilter")(e.nickname)))]),"抖音"==e.platform?i("v-uni-image",{staticClass:"platform",attrs:{src:"https://www.hongrensutui.com/h5/img/douyin_sup.png"}}):t._e(),"快手"==e.platform?i("v-uni-image",{staticClass:"platform",attrs:{src:"https://www.hongrensutui.com/h5/img/kuaishou_sup.png"}}):t._e(),i("span",{staticClass:"cu-tag light bg-orange round",staticStyle:{float:"right"}},[t._v("免费咨询")])],1),i("v-uni-view",{staticClass:"item"},[i("span",[t._v("拥有粉丝")]),i("span",{staticClass:"nowprice"},[t._v(t._s(e.fans))]),i("span",{staticClass:"nowpricetip"},[t._v("w")])]),i("v-uni-view",{staticClass:"item"},[i("span",[t._v("带货领域")]),t._l(e.category,(function(e,a){return a<2?i("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),i("v-uni-view",{staticClass:"item"},[i("span",[t._v("合作形式")]),t._l(e.cooperation,(function(e,a){return a<2?i("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),i("v-uni-view",{staticClass:"item"},[i("span",{staticStyle:{"margin-right":"1vw"}},[t._v("谁看过他")]),t._l(e.purpose,(function(t,e){return i("v-uni-image",{key:e,staticClass:"platform",staticStyle:{"border-radius":"1vw",top:"-0.3vw"},attrs:{src:t}})})),i("v-uni-image",{staticClass:"platform",staticStyle:{"border-radius":"1vw",top:"-0.3vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/pic_more.png"}})],2)],1)],1)})),1)],1)},s=[]},"6f4b":function(t,e,i){"use strict";i.r(e);var a=i("9529"),n=i("dbd6");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var r,o=i("f0c5"),l=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"e18ac976",null,!1,a["a"],r);e["default"]=l.exports},7146:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"index"},[t.message&&0==t.tabIndex?i("v-uni-view",{staticClass:"tipnews",style:{top:t.height+88+"px"}},[t.tip?i("v-uni-view",{staticClass:"animated1 fadeInRight"},[i("v-uni-view",{staticClass:"cuIcon-notificationfill"}),i("span",[i("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),i("span",[t._v("商家"+t._s(t.message.merchant))]),t._v("查看了"),i("span",[t._v("网红"+t._s(t.message.celebrity))])])],1):t._e()],1):t._e(),t.message&&1==t.tabIndex?i("v-uni-view",{staticClass:"tipnews",style:{top:t.height+88+"px"}},[t.tip?i("v-uni-view",{staticClass:"animated1 fadeInRight"},[i("v-uni-view",{staticClass:"cuIcon-notificationfill"}),i("span",[i("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),i("span",[t._v("网红"+t._s(t.message.celebrity))]),t._v("查看了"),i("span",[t._v("商家"+t._s(t.message.merchant))])])],1):t._e()],1):t._e(),i("uni-top-bar",{attrs:{barid:1}}),i("app-tabs",{attrs:{tabs:t.tabs,fixed:!0,topheight:t.height+43},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}}),i("v-uni-swiper",{staticClass:"swiper",style:{height:t.swiperheight},attrs:{top:t.height+43+42+"px",current:t.tabIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},[i("v-uni-swiper-item",[i("celebrity-item",{attrs:{i:1,index:t.tabIndex,cardid:t.userInfo.card_id,tabs:t.tabs,isAndroid:t.isAndroid,speciallist:t.specialcelebritylist,speciallength:t.specialcelebritylength,banner:t.celebrityBanner}})],1),i("v-uni-swiper-item",[i("merchant-item",{attrs:{i:2,index:t.tabIndex,cardid:t.userInfo.card_id,tabs:t.tabs,isAndroid:t.isAndroid,speciallist:t.specialmerchantlist,speciallength:t.specialmerchantlength,recmerchant:t.recmerchant,platformlength:t.platformlength,banner:t.merchantBanner,middlebanner:t.celebrityBanner}})],1)],1),i("v-uni-view",{staticClass:"openmember round shadow text-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("user/atte")}}},[i("img",{attrs:{src:"https://www.hongrensutui.com/h5/img/button_settled.png",mode:"widthFix"}})]),i("v-uni-view",{staticClass:"cu-modal coupon",class:"ruzhu"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"couponclose",staticStyle:{"z-index":"310"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close text-white"})],1),i("v-uni-view",{staticClass:"auth"},[i("img",{staticClass:"animated bounceIn",attrs:{src:"https://www.hongrensutui.com/h5/img/pop_ruzhu.png",mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("user/attesj")}}})])],1)],1)],1)},s=[]},"75eb":function(t,e,i){"use strict";i.r(e);var a=i("05ef"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},8880:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},n=a;e.default=n},"8b4c":function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,s=a(i("3734")),r=a(i("51e6")),o=a(i("6f4b")),l=a(i("cb06")),c={components:{uniTopBar:s.default,AppTabs:r.default,MerchantItem:o.default,CelebrityItem:l.default},data:function(){return{invite:null,backstage:!1,modalName:null,tabs:["找网红","找商品","","",""],userInfo:[],tabIndex:0,swiperheight:"400px",height:0,tip:!1,ruzhu:!1,message:"",isAndroid:!0,banner:"",specialcelebritylist:"",specialcelebritylength:!1,specialmerchantlist:"",specialmerchantlength:!1,recmerchant:"",celebrityBanner:"",merchantBanner:"",platformlength:!1}},onLoad:function(t){switch(n=this,n.height=n.StatusBar,n.swiperheight=uni.getSystemInfoSync().windowHeight+"px",t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),n.share(),t.code?uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code,invite:uni.getStorageSync("invite"),platform:1},method:"POST",success:function(t){uni.removeStorageSync("invite"),n.loginhandle(t.data.data.info)}}):uni.getStorage({key:"userInfo",success:function(t){n.updateuser(t.data.id)},fail:function(t){wxlogin()}}),n.timerInt=setInterval((function(){uni.getStorage({key:"message",success:function(t){if(n.codetime--,n.message=t.data[n.getRandomArbitrary(0,50)],n.message.celebrity=n.message.celebrity[0]+n.message.celebrity[1]+"***",n.message.merchant=n.message.merchant[0]+n.message.merchant[1]+"***",n.tip=!n.tip,0==n.codetime)return clearInterval(n.timerInt),void(n.codetime=2e3)}})}),4e3),uni.getSystemInfoSync().platform){case"android":n.isAndroid=!0;break;case"ios":n.isAndroid=!0;break;case"devtools":n.isAndroid=!0;break}n.pageindex()},onHide:function(){this.backstage=!0},onShow:function(){this.backstage&&uni.getStorage({key:"userInfo",success:function(t){n.updateuser(t.data.id),n.share()},fail:function(t){wxlogin()}})},methods:{updateuser:function(t){t&&uni.request({url:"https://www.hongrensutui.com/api/api/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?n.loginhandle(t.data.data.info):wxlogin()}})},loginhandle:function(t){var e=this,i=(new Date).getTime();uni.setStorageSync("userInfo",t),e.userInfo=t,0==t.type&&uni.getStorage({key:"ruzhutime",success:function(t){t.data<i?e.ruzhu=!0:e.ruzhu=!1},fail:function(t){e.ruzhu=!0}})},pageindex:function(){var t=uni.getStorageSync("userInfo");uni.request({url:"https://www.hongrensutui.com/api/api/pageindex",data:{openid:t.openid,userid:t.id,celebrityBanner:"index",merchantBanner:"index2"},method:"POST",success:function(t){if(uni.setStorageSync("message",t.data.data.message),n.celebrityBanner=t.data.data.celebrityBanner,n.merchantBanner=t.data.data.merchantBanner,n.specialcelebritylist=t.data.data.specialcelebritylist,n.specialcelebritylist.length>0&&(n.specialcelebritylength=!0),n.specialmerchantlist=t.data.data.specialmerchantlist,n.specialmerchantlist.length>0&&(n.specialmerchantlength=!0),n.recmerchant=t.data.data.recmerchant,n.recmerchant.platform.length>0&&(n.platformlength=!0),0!=t.data.data.num?uni.showTabBarRedDot({index:1,text:""+t.data.data.num}):uni.hideTabBarRedDot({index:1}),0==t.data.data.subscribe)uni.showModal({title:"关注公众号",content:"听说，他们都在这找到纯佣网红的",confirmText:"去关注",success:function(t){t.confirm&&(location.href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA3NDQ1OTY5Mw==&scene=110#wechat_redirect")}});else if(n.ruzhu)return n.modalName="ruzhu",!1}})},getRandomArbitrary:function(t,e){return Math.floor(Math.random()*(e-t)+t)},swiperChange:function(t){this.tabIndex=t.detail.current},tosupply:function(){uni.getStorage({key:"userInfo",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/api/userinfo",data:{id:e.data.id},method:"POST",success:function(e){if(t("log",e," at pages/index/index.vue:346"),e.data.data.info){if(uni.setStorageSync("userInfo",e.data.data.info),n.userInfo=e.data.data.info,1==e.data.data.info.type&&1==e.data.data.info.examine)return uni.showToast({title:"当前商家信息正在审核，通过后可发布供需！",icon:"none",duration:2e3}),!1;if(1==e.data.data.info.type&&2==e.data.data.info.examine)return uni.navigateTo({url:"/pages/user/supply_list"}),!1;if(1==e.data.data.info.type&&3==e.data.data.info.examine)return uni.navigateTo({url:"/pages/user/attesj"}),!1;if(2==e.data.data.info.type)return uni.showToast({title:"仅限于商家操作！",icon:"none",duration:2e3}),!1;if(0==e.data.data.info.type||0==e.data.data.info.examine||null==e.data.data.info.examine)return uni.navigateTo({url:"/pages/user/attesj"}),!1}}})},fail:function(t){n.modalName="login"}})},gomember:function(){this.modalName=null,uni.navigateTo({url:"/pages/member/member"})},navToDetailPage:function(t){if("user/attesj"==t){var e=(new Date).getTime()+864e5;uni.setStorageSync("ruzhutime",e),this.ruzhu=!1,this.modalName=null}uni.navigateTo({url:"/pages/"+t})},hideModal:function(t){var e=(new Date).getTime()+864e5;"ruzhu"==this.modalName?(uni.setStorageSync("ruzhutime",e),this.ruzhu=!1,this.modalName=null):this.modalName=null},share:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=uni.getStorageSync("userInfo"),e="红人速推 | 网红直播带货一站式服务平台",i="红人速推就是网红多、商家多，直播带货就上红人速推。",a="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(e,i,a,t.id)}))}};e.default=c}).call(this,i("0de9")["log"])},9529:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={mescrollUni:i("426c").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("mescroll-uni",{ref:"mescrollRef",attrs:{height:"100%",top:t.topheight+43+42+"px",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"bg-fff mb-0 indexpage"},[i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"page-section swiper"},[i("v-uni-view",{staticClass:"page-section-spacing"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},t._l(t.banner,(function(e,a){return"1"==e.position?i("v-uni-swiper-item",{key:a,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage(e.link)}}},[i("v-uni-view",{staticClass:"swiper-item"},[i("img",{staticClass:"banner",attrs:{src:e["img"],mode:"widthFix"}})])],1):t._e()})),1)],1)],1)],1)],1),t.speciallength?i("v-uni-view",{staticClass:"bg-fff"},[i("v-uni-view",{staticClass:"indexnav"},t._l(t.speciallist,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.specialPage(e)}}},[i("img",{staticClass:"navlogo",attrs:{src:e.buttonimg,mode:"widthFix"}}),i("v-uni-view",{staticClass:"navname text-gray"},[t._v(t._s(e.name))])],1)})),1)],1):t._e(),i("v-uni-view",{staticClass:"bg-fff"},[i("v-uni-view",{staticClass:"cardtitle"},[i("v-uni-view",{staticClass:"name"},[t._v("今日推荐商家")]),i("v-uni-view",{staticClass:"gd",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("merchant/list")}}},[t._v("更多")])],1),i("v-uni-view",{staticClass:"supplylist"},[i("v-uni-view",{staticClass:"list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.merchantdetails(t.recmerchant.id)}}},[i("v-uni-view",{staticClass:"publisher"},[i("img",{attrs:{src:t.recmerchant["logo"]}})]),i("v-uni-view",{staticClass:"number"},[i("v-uni-view",{staticClass:"title ellipsis"},[t._v(t._s(t.recmerchant.title))]),i("v-uni-view",{staticClass:"item"},[i("span",{staticClass:"cu-tag line-green round"},[t._v("营业执照已验证")]),i("span",{staticClass:"cu-tag line-green round"},[t._v("人工审核")])]),i("v-uni-view",{staticClass:"item"},[i("span",[t._v("商家分类")]),t._l(t.recmerchant.category,(function(e,a){return a<2?i("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),t.platformlength?i("v-uni-view",{staticClass:"item"},[i("span",[t._v("拥有平台")]),t._l(t.recmerchant.platform,(function(e,a){return a<2?i("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2):i("v-uni-view",{staticClass:"item"},[i("span",[t._v("拥有平台")]),i("v-uni-view",{staticClass:"table"},[t._v("实体")])],1),i("v-uni-view",{staticClass:"item"},[t._v("入驻时间"),i("v-uni-view",{staticClass:"table"},[t._v(t._s(t.recmerchant.createtime))])],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"bg-fff"},t._l(t.middlebanner,(function(e,a){return"index"==e.page&&"2"==e.position?i("v-uni-view",{key:a,staticClass:"middlebanner",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage(e.link)}}},[i("img",{staticClass:"banner",attrs:{src:e["img"],mode:"widthFix"}})]):t._e()})),1),i("v-uni-view",{staticClass:"cardtitle"},[i("v-uni-view",{staticClass:"name"},[t._v("最新需求")])],1),i("v-uni-view",{staticClass:"supplylist"},t._l(t.goods,(function(e,a){return i("v-uni-view",{key:a,staticClass:"list",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage("supply/details",e.id)}}},[i("v-uni-view",{staticClass:"publisher"},[i("img",{attrs:{src:e["img"]}})]),i("v-uni-view",{staticClass:"number"},[i("v-uni-view",{staticClass:"title ellipsis"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"item"},[i("span",{staticClass:"nowpricetip"},[t._v("￥")]),i("span",{staticClass:"nowprice"},[t._v(t._s(e.nowprice))]),1==e.pay_type?i("v-uni-view",{staticClass:"commission"},[t._v("佣金 "+t._s(e.commission))]):t._e(),2==e.pay_type?i("v-uni-view",{staticClass:"commission"},[t._v("佣金 "+t._s(e.commission)+"%")]):t._e()],1),i("v-uni-view",{staticClass:"item"},[i("span",[t._v("商品分类")]),t._l(e.category,(function(e,a){return a<2?i("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),i("v-uni-view",{staticClass:"item"},[i("span",[t._v("粉丝要求")]),e.fans>0?i("v-uni-view",{staticClass:"table"},[t._v(t._s(e.fans)+"万以上")]):i("v-uni-view",{staticClass:"table"},[t._v("不限")])],1),i("v-uni-view",{staticClass:"item"},[i("span",[t._v("平台要求")]),t._l(e.platform,(function(e,a){return a<2?i("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"cu-tag line-green round"},[t._v("官方认证")]),i("v-uni-view",{staticClass:"cu-tag light bg-orange round"},[t._v("免费咨询")])],1)],1)],1)})),1)],1)},s=[]},a2f8:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.tabs&&t.tabs.length?i("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[i("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(e,a){return i("v-uni-view",{key:a,staticClass:"tab-item",class:{active:t.value===a},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabClick(a,e)}}},[16!=e.id?i("span",[t._v(t._s(t.getTabName(e)))]):i("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),i("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},s=[]},c0b4:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,s=a(i("cea8")),r=a(i("8880")),o={mixins:[s.default,r.default],data:function(){return{downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"空空如也"}},height:"400px",topheight:0,indicatorDots:!0,autoplay:!0,interval:4e3,duration:500,goods:""}},props:{tabs:Array,isAndroid:Boolean,cardid:Number,speciallist:[String,Array,Object],speciallength:Boolean,recmerchant:[String,Array,Object],platformlength:Boolean,banner:[String,Array],middlebanner:[String,Array]},mounted:function(){n=this,n.topheight=this.StatusBar,n.height=uni.getSystemInfoSync().windowHeight+"px"},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){this.supplylist(t)},supplylist:function(t){var e=this,i=this;uni.request({url:"https://www.hongrensutui.com/api/api/supplylist",data:{pagenum:t.num,pagesize:t.size},method:"POST",success:function(a){var n=a.data.data.list,s=n.length;1==t.num&&(i.goods=[]),i.goods=i.goods.concat(a.data.data.list),e.mescroll.endByPage(s),setTimeout((function(){e.mescroll.endSuccess(s)}),20)},fail:function(t){i.mescroll.endErr()}})},navToDetailPage:function(t,e){e&&(t=t+"?id="+e),uni.navigateTo({url:"/pages/"+t})},specialPage:function(t){var e=t.link+"?specialid="+t.id+"&name="+t.name;0!=t.linkid&&(e=e+"&id="+t.linkid),t.supplylist&&(e=e+"&supplylist="+t.supplylist),t.banner&&(e=e+"&banner="+t.banner),uni.navigateTo({url:"/pages/"+e})},merchantdetails:function(t){uni.navigateTo({url:"/pages/merchant/details?id="+t})}}};e.default=o},c8ce:function(t,e,i){"use strict";i.r(e);var a=i("7146"),n=i("2dc7");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var r,o=i("f0c5"),l=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"b70da278",null,!1,a["a"],r);e["default"]=l.exports},cb06:function(t,e,i){"use strict";i.r(e);var a=i("6edf"),n=i("d6ed");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var r,o=i("f0c5"),l=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"5332f326",null,!1,a["a"],r);e["default"]=l.exports},cea8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},n=a;e.default=n},d162:function(t,e,i){"use strict";var a=i("0987"),n=i.n(a);n.a},d686:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".app-tabs[data-v-e5b681a0]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;-webkit-box-shadow:0 2px 1px rgba(26,26,26,.1);box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-e5b681a0]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-e5b681a0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-e5b681a0]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-e5b681a0]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-border-radius:%?4?%;border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-e5b681a0]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=e},d6ed:function(t,e,i){"use strict";i.r(e);var a=i("56d1"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},dbd6:function(t,e,i){"use strict";i.r(e);var a=i("c0b4"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},f42f:function(t,e,i){"use strict";i.r(e);var a=i("0107"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a}}]);