(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-calculator-calculator"],{"05ef":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=i},"18e4":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".tipnews[data-v-55d19806]{top:12vw}.cu-btn.img[data-v-55d19806]{height:24px;font-size:12px;background-color:#e71d36;color:#fff;padding:0 2vw}",""]),t.exports=e},3734:function(t,e,a){"use strict";a.r(e);var i=a("c2d5"),n=a("75eb");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("d973");var o,c=a("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"525162bc",null,!1,i["a"],o);e["default"]=r.exports},"3ce3":function(t,e,a){var i=a("18e4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("55e819ae",i,!0,{sourceMap:!1,shadowMode:!1})},"4fb0":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.cu-bar[data-v-525162bc]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-525162bc]{margin-left:3vw;height:30px}.cuIcon-back[data-v-525162bc]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-525162bc]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-525162bc]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-525162bc]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-525162bc]{width:auto}.cuIcon-close[data-v-525162bc]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},5713:function(t,e,a){var i=a("4fb0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("645c1318",i,!0,{sourceMap:!1,shadowMode:!1})},"5c7f":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showpage?a("v-uni-view",{staticClass:"celebritydetails"},[t.message?a("v-uni-view",{staticClass:"tipnews"},[t.tip?a("v-uni-view",{staticClass:"animated1 fadeInRight"},[a("v-uni-view",{staticClass:"cuIcon-notificationfill"}),a("span",[a("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),a("span",[t._v("商家"+t._s(t.message.merchant))]),t._v("对"),a("span",[t._v("该主播使用了带货计算器")])])],1):t._e()],1):t._e(),a("v-uni-view",{staticClass:"hongren",style:{paddingTop:t.height+43+"px"}},[a("uni-top-bar",{attrs:{title:t.toptitle,background:t.background}}),a("v-uni-view",{staticStyle:{position:"absolute",overflow:"hidden",top:"0",left:"0",width:"100vw"}},[a("img",{staticClass:"blur2",staticStyle:{transform:"scale(1.2)",width:"100%"},attrs:{src:t.content["avatar"],mode:"widthFix"}})]),a("v-uni-view",{staticClass:"head"},[a("img",{attrs:{src:t.content["avatar"]}}),a("v-uni-view",{staticClass:"collect",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.collect(t.content)}}},[a("v-uni-view",{staticClass:"lg text-gray",class:t.content.show?"cuIcon-likefill":"cuIcon-like"})],1)],1)],1),a("v-uni-view",{staticClass:"hongren-content",style:{top:t.height+193+"px"}},[a("v-uni-view",{staticClass:"flex solid-bottom"},[a("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs text-center"},[a("v-uni-view",{staticClass:"personal-title"},[t._v("红人昵称")]),a("v-uni-view",{staticClass:"personal-data"},[t._v(t._s(t.content.nickname))])],1),a("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs text-center"},[a("v-uni-view",{staticClass:"personal-title"},[t._v("带货平台")]),t._l(t.content.platform,(function(e,i){return a("v-uni-view",{key:i,staticClass:"personal-data"},[t._v(t._s(e))])}))],2),a("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs text-center"},[a("v-uni-view",{staticClass:"personal-title"},[t._v("拥有粉丝")]),a("v-uni-view",{staticClass:"personal-data cor-e8"},[t._v(t._s(t.content.fans)+"w")])],1)],1),a("v-uni-view",{staticClass:"platform_list clearfix"},[a("v-uni-view",{staticClass:"list clearfix"},[a("v-uni-view",{staticClass:"cu-form-group",staticStyle:{"justify-content":"flex-start"}},[a("v-uni-view",{staticClass:"title",staticStyle:{width:"20vw"}},[t._v("带货领域")]),a("v-uni-view",{staticClass:"action",staticStyle:{flex:"1"}},t._l(t.content.category,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-tag round light bg-grey",staticStyle:{margin:"5px 12px"}},[t._v(t._s(e))])})),1)],1)],1),a("v-uni-view",{staticClass:"list clearfix"},[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("商品价格")]),a("v-uni-input",{attrs:{type:"number",placeholder:"请输入商品价格"},model:{value:t.nowprice,callback:function(e){t.nowprice=e},expression:"nowprice"}}),a("v-uni-view",{staticClass:"title"},[t._v("元")])],1)],1),a("v-uni-view",{staticClass:"list clearfix"},[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("带货方式")]),a("v-uni-picker",{attrs:{value:t.index,range:t.picker},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.PickerChange.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"list clearfix"},[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("带货时长")]),a("v-uni-view",{staticClass:"coent"},[t._v(t._s(t.duration))]),a("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"platformModal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("选择时长")])],1)],1),a("v-uni-view",{staticClass:"list clearfix"},[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("带货峰谷")]),a("v-uni-view",{staticClass:"coent"},[t._v(t._s(t.peak))]),a("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"platformModal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("选择峰谷")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"cu-modal config",class:"Image"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog",staticStyle:{width:"auto"}},[a("v-uni-view",{staticClass:"bg-img"},[a("v-uni-view",{staticClass:"service"},[a("img",{staticClass:"wechat",attrs:{src:t.config.service,mode:"widthFix"}}),a("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.config.servicetip))])],1),a("v-uni-view",{staticClass:"cu-bar justify-center text-white",staticStyle:{"margin-top":"3vw"}},[a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"cu-modal poptips",class:"Modalios"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"auth"},[a("v-uni-view",{staticClass:"title"},[t._v("十分抱歉，由于相关规范，小程序暂不支持查看信息。")])],1)],1)],1),a("v-uni-view",{staticClass:"cu-modal poplogin",class:"login"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"auth"},[a("v-uni-view",{staticClass:"title"},[t._v("请登录后操作！")]),a("v-uni-view",{staticClass:"loginbtn"},[a("v-uni-button",{staticClass:"close",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),a("v-uni-button",{staticClass:"login",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1):t._e()},s=[]},"75eb":function(t,e,a){"use strict";a.r(e);var i=a("05ef"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"763f":function(t,e,a){"use strict";var i=a("3ce3"),n=a.n(i);n.a},"8c3f":function(t,e,a){"use strict";var i=a("4ea4");a("d3b7"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("3734")),s={components:{uniTopBar:n.default},data:function(){return{modalName:null,content:"",todata:"",toptitle:"红人带货计算器",userInfo:[],cewebrityid:"",cewebrityuid:"",realmid:"",codetime:2e3,tip:!1,message:"",messagelist:"",height:"",bottombtn:!0,showpage:!1,config:"",background:"transparent",nowprice:"",mode:"",duration:"",peak:"",index:-1,picker:["喵喵喵","汪汪汪","哼唧哼唧"]}},onLoad:function(t){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/h5config",method:"POST",success:function(t){e.config=t.data.data.list}}),e.height=this.StatusBar,t.id&&(e.cewebrityid=t.id),t.realmid&&(e.realmid=t.realmid),uni.showLoading({title:"加载中,请稍后..."}),e.getRandomArbitrary(0,49),e.getmessage(),e.timerInt=setInterval((function(){if(e.codetime--,e.message=e.messagelist[e.getRandomArbitrary(0,50)],e.message.celebrity=e.message.celebrity[0]+e.message.celebrity[1]+"***",e.message.merchant=e.message.merchant[0]+e.message.merchant[1]+"***",e.tip=!e.tip,0==e.codetime)return clearInterval(e.timerInt),void(e.codetime=2e3)}),4e3),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:a.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.getCewebrity()}})},fail:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.getCewebrity()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.updateuser(e.data.id)}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.getCewebrity()):wxlogin()}})},getRandomArbitrary:function(t,e){return Math.floor(Math.random()*(e-t)+t)},getmessage:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(e){t.messagelist=e.data.data.list,t.message=t.messagelist[t.getRandomArbitrary(0,50)],t.message.celebrity=t.message.celebrity[0]+t.message.celebrity[1]+"***",t.message.merchant=t.message.merchant[0]+t.message.merchant[1]+"***",t.tip=!t.tip}})},getCewebrity:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){e.data&&""!=e.data?(t.userInfo=e.data,uni.request({url:"https://www.hongrensutui.com/api/index/onecewebrity",data:{id:t.cewebrityid,userid:t.userInfo.id,realmid:t.realmid},method:"POST",success:function(a){t.content=a.data.data.list,t.share(t.content,e.data.company_id,e.data.id),t.cewebrityuid=t.content.id,t.randtime(t.content.livebroadcast),t.content.livebroadcast&&(uni.hideLoading(),t.showpage=!0)}})):uni.request({url:"https://www.hongrensutui.com/api/index/onecewebrity",data:{id:t.cewebrityid},method:"POST",success:function(e){t.content=e.data.data.list,t.share(t.content,0,0),t.cewebrityuid=t.content.id,t.randtime(t.content.livebroadcast),t.content.livebroadcast&&(uni.hideLoading(),t.showpage=!0)}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/onecewebrity",data:{id:t.cewebrityid},method:"POST",success:function(e){t.content=e.data.data.list,t.share(t.content,0,0),t.cewebrityuid=t.content.id,t.randtime(t.content.livebroadcast),t.content.livebroadcast&&(uni.hideLoading(),t.showpage=!0)}})}})},randtime:function(t){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/randtime",data:{livebroadcast:t},method:"POST",success:function(t){e.todata=t.data.data.time}})},PickerChange:function(t){this.index=t.detail.value},member:function(){var t=this;uni.navigateTo({url:"/pages/member/member?cewebrityid="+t.cewebrityid})},collect:function(t){var e=this;e.userInfo.id?t.show?(uni.showToast({title:"已取消关注",icon:"none",duration:2e3}),e.collectClick(t)):(uni.showToast({title:"已添加关注",icon:"none",duration:2e3}),e.collectClick(t)):e.modalName="login"},collectClick:function(t){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/collect",data:{id:e.userInfo.id,collectid:t.id},method:"POST",success:function(e){t.show=!t.show}})},openmember:function(){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/order",data:{openid:t.userInfo.openid,id:t.content.id},method:"POST",success:function(e){var a="/pages/celebrity/details?id="+t.cewebrityid;callpay(JSON.parse(e.data.data.parameters),e.data.data.info,a)}}):t.modalName="login"},wxopenmember:function(){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Order/order",data:{openid:t.userInfo.xopenid,id:t.content.id},method:"POST",success:function(e){var a=e.data.data.orderid;uni.requestPayment({provider:"wxpay",timeStamp:e.data.data.wechat.payinfo.timeStamp,nonceStr:e.data.data.wechat.payinfo.nonceStr,package:e.data.data.wechat.payinfo.package,signType:e.data.data.wechat.payinfo.signType,paySign:e.data.data.wechat.payinfo.paySign,success:function(e){uni.request({url:"https://www.hongrensutui.com/api/Order/complete_order",data:{openid:t.userInfo.xopenid,id:a},method:"POST",success:function(e){uni.redirectTo({url:"/pages/celebrity/details?id="+t.cewebrityid})}})}})}}):t.modalName="login"},lookup:function(t){var e=this;e.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/index/lookup",data:{openid:e.userInfo.openid,xopenid:e.userInfo.xopenid,cewebrityid:e.content.id},method:"POST",success:function(a){if(1==a.data.data.info.code)if("Modalfshx"==t.currentTarget.dataset.target)if(e.userInfo.card_id>=2)e.see=!1,e.tabCurrentIndex=1,2==e.userInfo.card_id&&uni.showToast({title:"您当前是中级会员！并且"+a.data.data.info.msg,icon:"none",duration:3e3}),3==e.userInfo.card_id&&uni.showToast({title:"您当前是高级会员！并且"+a.data.data.info.msg,icon:"none",duration:3e3});else switch(uni.getSystemInfoSync().platform){case"android":uni.showToast({title:"您当前会员等级不够！",icon:"none",duration:2e3}),e.modalName=t.currentTarget.dataset.target;break;case"ios":e.modalName=t.currentTarget.dataset.target;break}else e.see=!1,uni.showToast({title:a.data.data.info.msg,icon:"none",duration:2e3});else switch(uni.getSystemInfoSync().platform){case"android":uni.showToast({title:a.data.data.info.msg,icon:"none",duration:2e3}),e.modalName=t.currentTarget.dataset.target;break;case"ios":e.modalName=t.currentTarget.dataset.target;break}}}):e.modalName="login"},tabClick:function(t){this.tabCurrentIndex=t,this.bottombtn=!0},showModal:function(t){var e=this;if(e.userInfo.id)if("Modal"==t.currentTarget.dataset.target)switch(uni.getSystemInfoSync().platform){case"android":e.modalName=t.currentTarget.dataset.target;break;case"ios":e.modalName=t.currentTarget.dataset.target;break;default:e.modalName=t.currentTarget.dataset.target;break}else this.modalName=t.currentTarget.dataset.target;else e.modalName="login"},hideModal:function(t){this.modalName=null},copy:function(t){uni.setClipboardData({data:t,success:function(){uni.showToast({title:"复制微信号成功"})}})},onCopyResult:function(t){"success"===t?uni.showModal({title:"复制微信号成功！"}):uni.showToast({title:"复制微信号失败",icon:"none"})},share:function(t){function e(e,a,i){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e,a){var i="我是"+t.nickname+"，我在红人速推帮商家直播带货",n="已有99+个商家联系我纯佣金带货，如果你是商家，就上红人速推找我",s=t.avatar;share(i,n,s,a)})),wechatLogin:function(t){wxlogin()}}};e.default=s},9550:function(t,e,a){"use strict";a.r(e);var i=a("8c3f"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},c2d5:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?a("span",{staticClass:"clearfix"},[t.within?a("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):a("span",[t.title?a("span",{staticClass:"title"},[t._v(t._s(t.title))]):a("span",{staticClass:"title"},[t._v("红人速推")])])]):a("span",[t.within?a("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):a("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},d973:function(t,e,a){"use strict";var i=a("5713"),n=a.n(i);n.a},e265:function(t,e,a){"use strict";a.r(e);var i=a("5c7f"),n=a("9550");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("763f");var o,c=a("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"55d19806",null,!1,i["a"],o);e["default"]=r.exports}}]);