(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"0057":function(t,e,i){"use strict";i.r(e);var n=i("313c"),a=i("a27b");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("8ee0");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"530f1426",null,!1,n["a"],s);e["default"]=c.exports},"05ef":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=n},"0b05":function(t,e,i){"use strict";(function(t){i("a9e3"),i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{startTime:{type:Number},endTime:{type:Number}},data:function(){return{timer:null,d:0,h:0,m:0,s:0}},mounted:function(){this.time()},beforeDestroy:function(){clearInterval(this.timer),this.timer=null},computed:{sTime:function(){return this.startTime},eTime:function(){return this.endTime}},watch:{endTime:function(){clearInterval(this.timer),this.time()}},methods:{time:function(){var e=1e3*this.sTime,i=1e3*this.eTime,n=(i-e)/1e3;t("log",e," at components/cz-countdown/cz-countdown.vue:55"),t("log",i," at components/cz-countdown/cz-countdown.vue:56"),t("log",n," at components/cz-countdown/cz-countdown.vue:57"),this.getCountdownTime(n)},getCountdownTime:function(t){var e=this,i=t;i>0&&(this.timer=setInterval((function(){0==i?(clearInterval(e.timer),e.h=0,e.m=0,e.s=0):(e.d=parseInt(t/3600/24),e.h=parseInt(i/3600%24),e.m=parseInt(i/60%60),e.s=parseInt(i%60),i--)}),1e3))}}};e.default=n}).call(this,i("0de9")["log"])},"313c":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={mescrollUni:i("426c").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-top-bar",{attrs:{barid:1}}),i("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[i("mescroll-uni",{ref:"mescrollRef",attrs:{down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"platform_list clearfix"},[i("v-uni-view",{staticClass:"list clearfix"},[t.userInfo.id&&t.userInfo.avatar?i("img",{staticClass:"portrait",attrs:{src:t.userInfo["avatar"],mode:"widthFix"}}):i("img",{staticClass:"portrait",attrs:{src:"https://www.hongrensutui.com/h5/img/avatar-5.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"information"},[t.userInfo.id?i("v-uni-view",[t.userInfo.nickname?i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.userInfo.nickname))]):i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.userInfo.mobile))]),i("v-uni-view",{class:t.isAndroid?"show":"hide"},[t.card_name?i("v-uni-view",{staticClass:"commission active",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("member/member")}}},[t._v(t._s(t.card_name))]):i("v-uni-view",{staticClass:"commission",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("member/member")}}},[t._v("未开通会员")])],1),i("v-uni-view",{class:t.isAndroid?"hide":"show"},[t.card_name?i("v-uni-view",{staticClass:"commission active"},[t._v(t._s(t.card_name))]):i("v-uni-view",{staticClass:"commission"},[t._v("您还不是会员")])],1)],1):i("v-uni-view",[i("v-uni-view",{staticClass:"name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.wechatLogin.apply(void 0,arguments)}}},[t._v("未登录")]),i("v-uni-view",{staticClass:"text-sm text-grey"},[t._v("点击登录账号")])],1)],1),i("v-uni-view",{staticClass:"openmember",class:t.isAndroid&&!t.card_name?"show":"hide"},[i("v-uni-view",{staticClass:"cu-tag bg-red radius",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("member/member")}}},[t._v("开通会员")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-list grid col-4 no-border"},[i("v-uni-view",{staticClass:"cu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("about/aboutrz")}}},[i("v-uni-view",{staticClass:"cuIcon-profilefill text-blue nav-icon"}),i("v-uni-text",[t._v("商家认证")])],1),i("v-uni-view",{staticClass:"cu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTabPage("college/list")}}},[i("v-uni-view",{staticClass:"cuIcon-recordfill text-green nav-icon"}),i("v-uni-text",[t._v("培训课程")])],1),i("v-uni-view",{staticClass:"cu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("about/about",40)}}},[i("v-uni-view",{staticClass:"cuIcon-lightfill text-orange nav-icon"}),i("v-uni-text",[t._v("涨粉工具")])],1),i("v-uni-view",{staticClass:"cu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("user/atte")}}},[i("v-uni-view",{staticClass:"cuIcon-selectionfill text-purple nav-icon"}),i("v-uni-text",[t._v("入驻中心")])],1)],1),i("v-uni-view",{class:t.isAndroid?"show":"hide",staticStyle:{"margin-top":"3vw"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gomember2.apply(void 0,arguments)}}},[1==t.userInfo.coupon&&t.userInfo.couponmoney>0?i("v-uni-view",{staticClass:"coupontip clearfix"},[i("v-uni-view",{staticClass:"coupontipleft"},[t._v("您的优惠券还有")]),i("countdown",{attrs:{startTime:t.startTime,endTime:t.enTime}}),i("v-uni-view",{staticClass:"coupontipright"},[t._v("过期")])],1):t._e()],1),i("v-uni-view",{staticClass:"bg-fff"},t._l(t.banner,(function(e,n){return"user"==e.page&&"2"==e.position&&"1"==e.sort?i("v-uni-view",{key:n,staticClass:"middlebanner",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.gomember(e.link)}}},[i("img",{staticClass:"banner",attrs:{src:e["img"],mode:"widthFix"}})]):t._e()})),1),t.userInfo.id?i("v-uni-view",{staticClass:"cu-list menu sm-border"},[i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("share/list")}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-likefill text-red"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("每日分享")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",attrs:{"data-target":"Image"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-servicefill text-purple"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("专属客服")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.entrycenter(t.userInfo.type,t.userInfo.examine)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-circlefill text-orange"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("入驻中心")])],1),i("v-uni-view",{staticClass:"action"},[1==t.userInfo.type&&t.userInfo.examine>0?i("span",{staticClass:"text-grey text-sm"},[t._v("商家")]):t._e(),2==t.userInfo.type&&t.userInfo.examine>0?i("span",{staticClass:"text-grey text-sm"},[t._v("红人")]):t._e(),2==t.userInfo.type&&0==t.userInfo.examine?i("span",{staticClass:"text-grey text-sm"},[t._v("红人")]):t._e(),1==t.userInfo.examine?i("span",{staticClass:"text-grey text-sm"},[t._v("入驻审核中")]):t._e(),2==t.userInfo.examine?i("span",{staticClass:"text-grey text-sm"},[t._v("已入驻")]):t._e(),2==t.userInfo.type&&0==t.userInfo.examine?i("span",{staticClass:"text-grey text-sm"},[t._v("已入驻")]):t._e(),3==t.userInfo.examine?i("span",{staticClass:"text-grey text-sm"},[t._v("入驻未通过")]):t._e(),0==t.userInfo.type?i("span",{staticClass:"text-grey text-sm"},[t._v("立即入驻")]):t._e()])],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("user/collect")}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-likefill text-red"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("我的关注")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("user/purchase")}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-sponsorfill text-yellow"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("订单明细")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("about/about",3)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-recordfill text-cyan"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("寻求报道")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("user/complain")}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-dianhua",staticStyle:{color:"#E71D36"}}),i("v-uni-text",{staticClass:"text-grey"},[t._v("我要投诉")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("about/about",2)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-group_fill text-blue"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("关于我们")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.outlogo.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-forwardfill text-red"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("退出登录")])],1)],1)],1):t._e()],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:"invitecode"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"bg-img"},[i("img",{staticClass:"wechat",attrs:{src:t.invitesrc,mode:"widthFix"}}),i("v-uni-view",{staticClass:"cu-bar justify-center text-white"},[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:"rzinvitecode"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"bg-img"},[i("img",{staticClass:"wechat",attrs:{src:t.rzinvitesrc,mode:"widthFix"}}),i("v-uni-view",{staticClass:"cu-bar justify-center text-white"},[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal config",class:"Image"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog",staticStyle:{width:"auto"}},[i("v-uni-view",{staticClass:"bg-img"},[i("v-uni-view",{staticClass:"service"},[i("img",{staticClass:"wechat",attrs:{src:t.config.service,mode:"widthFix"}}),i("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.config.servicetip))])],1),i("v-uni-view",{staticClass:"cu-bar justify-center text-white",staticStyle:{"margin-top":"3vw"}},[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1)],1)},o=[]},3354:function(t,e,i){"use strict";i.r(e);var n=i("0b05"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},3734:function(t,e,i){"use strict";i.r(e);var n=i("c2d5"),a=i("75eb");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("d973");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"525162bc",null,!1,n["a"],s);e["default"]=c.exports},"4fb0":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.cu-bar[data-v-525162bc]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-525162bc]{margin-left:3vw;height:30px}.cuIcon-back[data-v-525162bc]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-525162bc]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-525162bc]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-525162bc]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-525162bc]{width:auto}.cuIcon-close[data-v-525162bc]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},5713:function(t,e,i){var n=i("4fb0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("645c1318",n,!0,{sourceMap:!1,shadowMode:!1})},"62f1":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.text-green[data-v-530f1426]{color:#06d6a0}.text-red[data-v-530f1426]{color:#ff6f94}.bg-red.examine[data-v-530f1426]{background-color:#0c9}.bg-red.fail[data-v-530f1426]{background-color:#e71d36}.bg-red.notcertified[data-v-530f1426]{background-color:#b7b7b7}.bg-red.ccertified[data-v-530f1426]{background-color:#ff9504}.bg-red.gcertified[data-v-530f1426]{background-color:#4291f0}.cu-list.grid>.cu-item .cu-tag[data-v-530f1426]{left:auto;margin:0 5.5vw}.cu-list+.cu-list[data-v-530f1426]{margin-top:3vw}.cu-item.arrow[data-v-530f1426]:nth-child(3n+0){margin-bottom:3vw}.cu-list.menu>.cu-item[data-v-530f1426]:nth-child(3n+0):after{border:none}.text-blue[data-v-530f1426]{color:#7183ee}.nav-icon[data-v-530f1426]{font-size:8vw!important}.cu-list.grid.no-border[data-v-530f1426]{padding:0}.platform_list[data-v-530f1426]{background-image:url(https://www.hongrensutui.com/h5/img/banner_bg.png);background-repeat:no-repeat;background-position:top;background-size:100%;padding:4vw 3vw;padding-bottom:3vw;background-color:#fff}.platform_list .list .edit[data-v-530f1426]{position:absolute;right:-3vw;padding-right:6vw;top:50%;margin-top:-12px}.platform_list .list[data-v-530f1426]{position:relative;overflow:hidden;-webkit-border-radius:2vw;border-radius:2vw;-webkit-box-shadow:1px 1px 2px rgba(230,57,70,.1);box-shadow:1px 1px 2px rgba(230,57,70,.1);padding:4vw 3vw;background:#fff}.platform_list .list .portrait[data-v-530f1426]{width:18vw;height:18vw;-webkit-border-radius:50%;border-radius:50%;float:left;margin-right:3vw;-webkit-box-shadow:0 0 3px rgba(230,57,70,.1);box-shadow:0 0 3px rgba(230,57,70,.1)}.platform_list .list .information[data-v-530f1426]{float:left}.platform_list .list .information .name[data-v-530f1426]{font-size:4.5vw;padding:3vw 0 1vw 0;color:#333}.platform_list .list .openmember[data-v-530f1426]{float:right;padding-top:6vw}.middlebanner[data-v-530f1426]{margin:3vw 0}.middlebanner .banner[data-v-530f1426]{width:100%;height:100%;-webkit-border-radius:2vw;border-radius:2vw;display:block}.tips[data-v-530f1426]{position:relative;top:-1vw}.vip[data-v-530f1426]{width:8vw;-webkit-border-radius:1vw;border-radius:1vw;position:relative;top:0;left:0;margin-right:2vw}.cu-dialog[data-v-530f1426]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-530f1426]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-530f1426]{width:auto}.cuIcon-close[data-v-530f1426]:before{background-color:rgba(0,0,0,.5);padding:3vw;-webkit-border-radius:50%;border-radius:50%}.service[data-v-530f1426]{padding:3vw;background-color:#fff;-webkit-border-radius:1.5vw;border-radius:1.5vw}.service .wechat[data-v-530f1426]{width:200px;height:200px;-webkit-border-radius:3vw;border-radius:3vw}.service .tip[data-v-530f1426]{color:#333;margin-bottom:2vw;font-size:3.4vw}.cu-bar.justify-center[data-v-530f1426]{position:static}uni-button.userinfo[data-v-530f1426]::after{border:none}uni-button.userinfo[data-v-530f1426]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;-webkit-box-sizing:content-box;box-sizing:content-box;font-size:4.5vw;text-align:center;text-decoration:none;line-height:7vw;-webkit-border-radius:0;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#333;background-color:transparent;margin-top:3vw}uni-button.kf[data-v-530f1426]::after{border:none}uni-button.kf[data-v-530f1426]{position:static;display:inline-block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;-webkit-box-sizing:content-box;box-sizing:content-box;font-size:inherit;line-height:1.6em;color:#8799a3;text-align:center;text-decoration:none;-webkit-border-radius:0;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;background-color:transparent}\r\n/* .cu-list.menu>.cu-item{\r\n\tmin-height:40px;\r\n} */.hide[data-v-530f1426]{display:none}.show[data-v-530f1426]{display:block}.commission[data-v-530f1426]{display:inline-block;background-color:#999;color:#fff;font-size:3vw;-webkit-border-radius:3vw;border-radius:3vw;height:4.5vw;padding:0 2vw;position:relative;bottom:1vw}.commission[data-v-530f1426]::after{content:" ";display:inline-block;width:0;height:100%;vertical-align:middle;margin-top:1px}.commission.active[data-v-530f1426]{background-color:#0081ff}',""]),t.exports=e},"6b05":function(t,e,i){"use strict";var n=i("4ea4");i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("9b10")),o=n(i("3734")),s=n(i("cea8")),r={components:{uniTopBar:o.default,countdown:a.default},mixins:[s.default],data:function(){return{modalName:null,userInfo:"",banner:"",height:"",invitesrc:"",rzinvitesrc:"",isAndroid:!0,card_name:"",config:"",downOption:{use:!1,isLock:!0},upOption:{use:!1,isLock:!0,toTop:{src:""}},startTime:"",enTime:""}},onLoad:function(t){var e=this;switch(uni.request({url:"https://www.hongrensutui.com/api/index/getBanner",method:"POST",success:function(t){e.banner=t.data.data.list}}),uni.request({url:"https://www.hongrensutui.com/api/index/h5config",method:"POST",success:function(t){e.config=t.data.data.list}}),e.height=e.StatusBar,t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,1==e.userInfo.coupon&&e.userInfo.couponmoney<=0?e.modalName="coupon":e.modalName="",1==e.userInfo.coupon&&e.userInfo.couponmoney>0&&(e.startTime=e.userInfo.couponstartTime,e.enTime=e.userInfo.couponendtime),2==e.userInfo.card_id&&(e.card_name="普通会员"),3==e.userInfo.card_id&&(e.card_name="超级会员"),e.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,1==e.userInfo.coupon&&e.userInfo.couponmoney<=0?e.modalName="coupon":e.modalName="",1==e.userInfo.coupon&&e.userInfo.couponmoney>0&&(e.startTime=e.userInfo.couponstartTime,e.enTime=e.userInfo.couponendtime),2==e.userInfo.card_id&&(e.card_name="普通会员"),3==e.userInfo.card_id&&(e.card_name="超级会员"),e.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),uni.getSystemInfoSync().platform){case"android":e.isAndroid=!0;break;case"ios":e.isAndroid=!0;break}},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.updateuser(e.data.id)}})},methods:{outlogo:function(){uni.removeStorageSync("userInfo"),this.userInfo=""},updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,1==e.userInfo.coupon&&e.userInfo.couponmoney<=0?e.modalName="coupon":e.modalName="",1==e.userInfo.coupon&&e.userInfo.couponmoney>0&&(e.startTime=e.userInfo.couponstartTime,e.enTime=e.userInfo.couponendtime),2==e.userInfo.card_id&&(e.card_name="普通会员"),3==e.userInfo.card_id&&(e.card_name="超级会员"),e.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},wechatLogin:function(t){wxlogin()},entrycenter:function(t,e){return 1==t&&1==e||1==t&&2==e||1==t&&3==e?(uni.navigateTo({url:"/pages/user/attesj"}),!1):2==t?(uni.navigateTo({url:"/pages/user/attewh_list"}),!1):0==t||0==e||null==e?(uni.navigateTo({url:"/pages/user/atte"}),!1):void 0},navTabPage:function(t){uni.switchTab({url:"/pages/"+t})},gomember2:function(){uni.navigateTo({url:"/pages/member/member"})},navToDetailPage:function(t,e,i){e&&(t=i?t+"?id="+e+"&cardid="+i:t+"?id="+e),uni.navigateTo({url:"/pages/"+t})},gomember:function(t){this.isAndroid&&uni.navigateTo({url:"/pages/"+t})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},share:function(t){function e(e,i){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var i="红人速推 | 网红直播带货一站式服务平台",n="红人速推就是网红多 商家多，直播带货就上红人速推。",a="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(i,n,a,e)}))}};e.default=r},"75eb":function(t,e,i){"use strict";i.r(e);var n=i("05ef"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"8ee0":function(t,e,i){"use strict";var n=i("97b0"),a=i.n(n);a.a},9793:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.countdown[data-v-229ee6c8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?20?%;color:#fff}.countdown .day[data-v-229ee6c8]{font-size:%?22?%;color:#e71d36;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.countdown .day .text[data-v-229ee6c8]{color:#e71d36;font-size:%?32?%;font-weight:700}.countdown .time[data-v-229ee6c8]{padding:%?8?%;background-color:#e71d36;-webkit-border-radius:%?4?%;border-radius:%?4?%;-webkit-box-sizing:border-box;box-sizing:border-box}.countdown .text[data-v-229ee6c8]{font-size:%?36?%;font-weight:bolder;margin:0 %?6?%;color:#e71d36}',""]),t.exports=e},"97b0":function(t,e,i){var n=i("62f1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0519534e",n,!0,{sourceMap:!1,shadowMode:!1})},"9b10":function(t,e,i){"use strict";i.r(e);var n=i("f603"),a=i("3354");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("a0dc");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"229ee6c8",null,!1,n["a"],s);e["default"]=c.exports},a0dc:function(t,e,i){"use strict";var n=i("cd9c"),a=i.n(n);a.a},a27b:function(t,e,i){"use strict";i.r(e);var n=i("6b05"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},c2d5:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):i("span",[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])])]):i("span",[t.within?i("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},cd9c:function(t,e,i){var n=i("9793");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("d47d56c6",n,!0,{sourceMap:!1,shadowMode:!1})},cea8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},a=n;e.default=a},d973:function(t,e,i){"use strict";var n=i("5713"),a=i.n(n);a.a},f603:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"countdown"},[0!=t.d?i("v-uni-view",{staticClass:"day"},[i("v-uni-text",{staticClass:"text"},[t._v(t._s(t.d))]),t._v("天")],1):t._e(),i("v-uni-view",{staticClass:"time",staticStyle:{"margin-left":"9rpx"}},[t._v(t._s(t.h<10?"0"+t.h:t.h))]),i("v-uni-text",{staticClass:"text"},[t._v(":")]),i("v-uni-view",{staticClass:"time"},[t._v(t._s(t.m<10?"0"+t.m:t.m))]),i("v-uni-text",{staticClass:"text"},[t._v(":")]),i("v-uni-view",{staticClass:"time"},[t._v(t._s(t.s<10?"0"+t.s:t.s))])],1)},o=[]}}]);