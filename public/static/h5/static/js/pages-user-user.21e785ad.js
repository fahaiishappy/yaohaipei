(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"0fa2":function(t,a,i){"use strict";i.r(a);var e=i("8cc1"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},4528:function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}));var e={mescrollUni:i("0777").default},n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("uni-top-bar",{attrs:{barid:1}}),i("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[i("mescroll-uni",{ref:"mescrollRef",attrs:{down:t.downOption,up:t.upOption},on:{init:function(a){arguments[0]=a=t.$handleEvent(a),t.mescrollInit.apply(void 0,arguments)},down:function(a){arguments[0]=a=t.$handleEvent(a),t.downCallback.apply(void 0,arguments)},up:function(a){arguments[0]=a=t.$handleEvent(a),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"platform_list clearfix"},[i("v-uni-view",{staticClass:"list clearfix"},[t.userInfo.id&&t.userInfo.avatar?i("img",{staticClass:"portrait",attrs:{src:t.userInfo["avatar"],mode:"widthFix"}}):i("img",{staticClass:"portrait",attrs:{src:"https://www.hongrensutui.com/h5/img/avatar-5.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"information"},[t.userInfo.id?i("v-uni-view",[t.userInfo.nickname?i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.userInfo.nickname))]):i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.userInfo.mobile))]),i("v-uni-view",{class:t.isAndroid?"show":"hide"},[t.card_name?i("v-uni-view",{staticClass:"commission active",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage("member/member")}}},[t._v(t._s(t.card_name))]):i("v-uni-view",{staticClass:"commission",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage("member/member")}}},[t._v("未开通会员")])],1),i("v-uni-view",{class:t.isAndroid?"hide":"show"},[t.card_name?i("v-uni-view",{staticClass:"commission active"},[t._v(t._s(t.card_name))]):i("v-uni-view",{staticClass:"commission"},[t._v("您还不是会员")])],1)],1):i("v-uni-view",[i("v-uni-view",{staticClass:"name",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.wechatLogin.apply(void 0,arguments)}}},[t._v("未登录")]),i("v-uni-view",{staticClass:"text-sm text-grey"},[t._v("点击登录账号")])],1)],1),i("v-uni-view",{staticClass:"member",class:t.isAndroid&&!t.card_name?"show":"hide"},[i("v-uni-view",{staticClass:"cu-tag bg-red radius",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage("member/member")}}},[t._v("开通会员")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-list grid col-4 no-border"},[i("v-uni-view",{staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage("about/aboutrz")}}},[i("v-uni-view",{staticClass:"cuIcon-profilefill text-blue nav-icon"}),i("v-uni-text",[t._v("商家认证")])],1),i("v-uni-view",{staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navTabPage("college/list")}}},[i("v-uni-view",{staticClass:"cuIcon-recordfill text-green nav-icon"}),i("v-uni-text",[t._v("培训课程")])],1),i("v-uni-view",{staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage("about/about",40)}}},[i("v-uni-view",{staticClass:"cuIcon-lightfill text-orange nav-icon"}),i("v-uni-text",[t._v("涨粉工具")])],1),i("v-uni-view",{staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage("user/atte")}}},[i("v-uni-view",{staticClass:"cuIcon-selectionfill text-purple nav-icon"}),i("v-uni-text",[t._v("入驻中心")])],1)],1),i("v-uni-view",{staticClass:"bg-fff"},t._l(t.banner,(function(a,e){return"user"==a.page&&"2"==a.position&&"1"==a.sort?i("v-uni-view",{key:e,staticClass:"middlebanner",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.gomember(a.link)}}},[i("img",{staticClass:"banner",attrs:{src:a["img"],mode:"widthFix"}})]):t._e()})),1),t.userInfo.id?i("v-uni-view",{staticClass:"cu-list menu sm-border"},[i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage("share/list")}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-likefill text-red"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("每日分享")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",attrs:{"data-target":"Image"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-servicefill text-purple"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("专属客服")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.entrycenter(t.userInfo.type,t.userInfo.examine)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-circlefill text-orange"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("入驻中心")])],1),i("v-uni-view",{staticClass:"action"},[1==t.userInfo.type&&t.userInfo.examine>0?i("span",{staticClass:"text-grey text-sm"},[t._v("商家")]):t._e(),2==t.userInfo.type&&t.userInfo.examine>0?i("span",{staticClass:"text-grey text-sm"},[t._v("红人")]):t._e(),2==t.userInfo.type&&0==t.userInfo.examine?i("span",{staticClass:"text-grey text-sm"},[t._v("红人")]):t._e(),1==t.userInfo.examine?i("span",{staticClass:"text-grey text-sm"},[t._v("入驻审核中")]):t._e(),2==t.userInfo.examine?i("span",{staticClass:"text-grey text-sm"},[t._v("已入驻")]):t._e(),2==t.userInfo.type&&0==t.userInfo.examine?i("span",{staticClass:"text-grey text-sm"},[t._v("已入驻")]):t._e(),3==t.userInfo.examine?i("span",{staticClass:"text-grey text-sm"},[t._v("入驻未通过")]):t._e(),0==t.userInfo.type?i("span",{staticClass:"text-grey text-sm"},[t._v("立即入驻")]):t._e()])],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage("user/collect")}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-likefill text-red"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("我的关注")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage("user/purchase")}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-sponsorfill text-yellow"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("订单明细")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage("about/about",3)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-recordfill text-cyan"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("寻求报道")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage("user/complain")}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-dianhua",staticStyle:{color:"#E71D36"}}),i("v-uni-text",{staticClass:"text-grey"},[t._v("我要投诉")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage("about/about",2)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-group_fill text-blue"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("关于我们")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.outlogo.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-forwardfill text-red"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("退出登录")])],1)],1)],1):t._e()],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:"invitecode"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"bg-img"},[i("img",{staticClass:"wechat",attrs:{src:t.invitesrc,mode:"widthFix"}}),i("v-uni-view",{staticClass:"cu-bar justify-center text-white"},[i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:"rzinvitecode"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"bg-img"},[i("img",{staticClass:"wechat",attrs:{src:t.rzinvitesrc,mode:"widthFix"}}),i("v-uni-view",{staticClass:"cu-bar justify-center text-white"},[i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog",staticStyle:{width:"auto"}},[i("v-uni-view",{staticClass:"bg-img"},[i("v-uni-view",{staticClass:"service"},[i("img",{staticClass:"wechat",attrs:{src:t.config.service,mode:"widthFix"}}),i("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.config.servicetip))])],1),i("v-uni-view",{staticClass:"cu-bar justify-center text-white",staticStyle:{"margin-top":"3vw"}},[i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1)],1)},s=[]},4674:function(t,a,i){"use strict";i.r(a);var e=i("7137"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},5702:function(t,a,i){"use strict";i.r(a);var e=i("4528"),n=i("0fa2");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("f626");var o,c=i("f0c5"),r=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"bf5d08fa",null,!1,e["a"],o);a["default"]=r.exports},"5ad0":function(t,a,i){"use strict";i.r(a);var e=i("6004"),n=i("4674");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("a6c7");var o,c=i("f0c5"),r=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"dca053c4",null,!1,e["a"],o);a["default"]=r.exports},6004:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):i("span",[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])])]):i("span",[t.within?i("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},7137:function(t,a,i){"use strict";i("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=e},"7d3c":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.text-green[data-v-bf5d08fa]{color:#06d6a0}.text-red[data-v-bf5d08fa]{color:#ff6f94}.bg-red.examine[data-v-bf5d08fa]{background-color:#0c9}.bg-red.fail[data-v-bf5d08fa]{background-color:#e71d36}.bg-red.notcertified[data-v-bf5d08fa]{background-color:#b7b7b7}.bg-red.ccertified[data-v-bf5d08fa]{background-color:#ff9504}.bg-red.gcertified[data-v-bf5d08fa]{background-color:#4291f0}.cu-list.grid>.cu-item .cu-tag[data-v-bf5d08fa]{left:auto;margin:0 5.5vw}.cu-list+.cu-list[data-v-bf5d08fa]{margin-top:3vw}.cu-item.arrow[data-v-bf5d08fa]:nth-child(3n+0){margin-bottom:3vw}.cu-list.menu>.cu-item[data-v-bf5d08fa]:nth-child(3n+0):after{border:none}.text-blue[data-v-bf5d08fa]{color:#7183ee}.nav-icon[data-v-bf5d08fa]{font-size:8vw!important}.cu-list.grid.no-border[data-v-bf5d08fa]{padding:0}.platform_list[data-v-bf5d08fa]{background-image:url(https://www.hongrensutui.com/h5/img/banner_bg.png);background-repeat:no-repeat;background-position:top;background-size:100%;padding:4vw 3vw;padding-bottom:3vw;background-color:#fff}.platform_list .list .edit[data-v-bf5d08fa]{position:absolute;right:-3vw;padding-right:6vw;top:50%;margin-top:-12px}.platform_list .list[data-v-bf5d08fa]{position:relative;overflow:hidden;-webkit-border-radius:2vw;border-radius:2vw;-webkit-box-shadow:1px 1px 2px rgba(230,57,70,.1);box-shadow:1px 1px 2px rgba(230,57,70,.1);padding:4vw 3vw;background:#fff}.platform_list .list .portrait[data-v-bf5d08fa]{width:18vw;height:18vw;-webkit-border-radius:50%;border-radius:50%;float:left;margin-right:3vw;-webkit-box-shadow:0 0 3px rgba(230,57,70,.1);box-shadow:0 0 3px rgba(230,57,70,.1)}.platform_list .list .information[data-v-bf5d08fa]{float:left}.platform_list .list .information .name[data-v-bf5d08fa]{font-size:4.5vw;padding:3vw 0 1vw 0;color:#333}.platform_list .list .member[data-v-bf5d08fa]{float:right;padding-top:6vw}.middlebanner[data-v-bf5d08fa]{margin:3vw 0}.middlebanner .banner[data-v-bf5d08fa]{width:100%;height:100%;-webkit-border-radius:2vw;border-radius:2vw;display:block}.tips[data-v-bf5d08fa]{position:relative;top:-1vw}.vip[data-v-bf5d08fa]{width:8vw;-webkit-border-radius:1vw;border-radius:1vw;position:relative;top:0;left:0;margin-right:2vw}.cu-dialog[data-v-bf5d08fa]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-bf5d08fa]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-bf5d08fa]{width:auto}.cuIcon-close[data-v-bf5d08fa]:before{background-color:rgba(0,0,0,.5);padding:3vw;-webkit-border-radius:50%;border-radius:50%}.service[data-v-bf5d08fa]{padding:3vw;background-color:#fff;-webkit-border-radius:1.5vw;border-radius:1.5vw}.service .wechat[data-v-bf5d08fa]{width:200px;height:200px;-webkit-border-radius:3vw;border-radius:3vw}.service .tip[data-v-bf5d08fa]{color:#333;margin-bottom:2vw;font-size:3.4vw}.cu-bar.justify-center[data-v-bf5d08fa]{position:static}uni-button.userinfo[data-v-bf5d08fa]::after{border:none}uni-button.userinfo[data-v-bf5d08fa]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;-webkit-box-sizing:content-box;box-sizing:content-box;font-size:4.5vw;text-align:center;text-decoration:none;line-height:7vw;-webkit-border-radius:0;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#333;background-color:transparent;margin-top:3vw}uni-button.kf[data-v-bf5d08fa]::after{border:none}uni-button.kf[data-v-bf5d08fa]{position:static;display:inline-block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;-webkit-box-sizing:content-box;box-sizing:content-box;font-size:inherit;line-height:1.6em;color:#8799a3;text-align:center;text-decoration:none;-webkit-border-radius:0;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;background-color:transparent}\r\n/* .cu-list.menu>.cu-item{\r\n\tmin-height:40px;\r\n} */.hide[data-v-bf5d08fa]{display:none}.show[data-v-bf5d08fa]{display:block}.commission[data-v-bf5d08fa]{display:inline-block;background-color:#999;color:#fff;font-size:3vw;-webkit-border-radius:3vw;border-radius:3vw;height:4.5vw;padding:0 2vw;position:relative;bottom:1vw}.commission[data-v-bf5d08fa]::after{content:" ";display:inline-block;width:0;height:100%;vertical-align:middle;margin-top:1px}.commission.active[data-v-bf5d08fa]{background-color:#0081ff}',""]),t.exports=a},"8cc1":function(t,a,i){"use strict";var e=i("4ea4");i("d3b7"),i("25f0"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("5ad0")),s=e(i("f73f")),o={components:{uniTopBar:n.default},mixins:[s.default],data:function(){return{modalName:null,userInfo:"",banner:"",height:"",invitesrc:"",rzinvitesrc:"",isAndroid:!0,card_name:"",config:"",downOption:{use:!1,isLock:!0},upOption:{use:!1,isLock:!0,toTop:{src:""}}}},onLoad:function(t){var a=this;switch(uni.request({url:"https://www.hongrensutui.com/api/index/getBanner",method:"POST",success:function(t){a.banner=t.data.data.list}}),uni.request({url:"https://www.hongrensutui.com/api/index/h5config",method:"POST",success:function(t){a.config=t.data.data.list}}),a.height=a.StatusBar,t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,2==a.userInfo.card_id&&(a.card_name="普通会员"),3==a.userInfo.card_id&&(a.card_name="超级会员"),a.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,2==a.userInfo.card_id&&(a.card_name="普通会员"),3==a.userInfo.card_id&&(a.card_name="超级会员"),a.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?a.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),uni.getSystemInfoSync().platform){case"android":a.isAndroid=!0;break;case"ios":a.isAndroid=!0;break}},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(a){""!=a.data&&null!=a.data&&t.updateuser(a.data.id)}})},methods:{outlogo:function(){uni.removeStorageSync("userInfo"),this.userInfo=""},updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,2==a.userInfo.card_id&&(a.card_name="普通会员"),3==a.userInfo.card_id&&(a.card_name="超级会员"),a.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},wechatLogin:function(t){wxlogin()},entrycenter:function(t,a){return 1==t&&1==a||1==t&&2==a||1==t&&3==a?(uni.navigateTo({url:"/pages/user/attesj"}),!1):2==t?(uni.navigateTo({url:"/pages/user/attewh_list"}),!1):0==t||0==a||null==a?(uni.navigateTo({url:"/pages/user/atte"}),!1):void 0},navTabPage:function(t,a){a&&uni.setStorageSync("type",a),uni.switchTab({url:"/pages/"+t})},navToDetailPage:function(t,a,i){a&&(t=i?t+"?id="+a+"&cardid="+i:t+"?id="+a),uni.navigateTo({url:"/pages/"+t})},gomember:function(t){this.isAndroid&&uni.navigateTo({url:"/pages/"+t})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},share:function(t){function a(a,i){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(t,a){var i="红人速推 | 网红直播带货一站式服务平台",e="红人速推就是网红多 商家多，直播带货就上红人速推。",n="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(i,e,n,a)}))}};a.default=o},a6c7:function(t,a,i){"use strict";var e=i("b8ec"),n=i.n(e);n.a},b8ec:function(t,a,i){var e=i("d99c");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("119d75aa",e,!0,{sourceMap:!1,shadowMode:!1})},d39e:function(t,a,i){var e=i("7d3c");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("25bdc6a2",e,!0,{sourceMap:!1,shadowMode:!1})},d99c:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.cu-bar[data-v-dca053c4]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-dca053c4]{margin-left:3vw;height:30px}.cuIcon-back[data-v-dca053c4]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-dca053c4]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-dca053c4]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-dca053c4]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-dca053c4]{width:auto}.cuIcon-close[data-v-dca053c4]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=a},f626:function(t,a,i){"use strict";var e=i("d39e"),n=i.n(e);n.a},f73f:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},n=e;a.default=n}}]);