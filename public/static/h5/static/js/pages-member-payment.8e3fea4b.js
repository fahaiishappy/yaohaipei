(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-payment"],{"05ef":function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};t.default=a},"0746":function(e,t,i){"use strict";i.r(t);var a=i("1e3f"),r=i("b944");for(var s in r)"default"!==s&&function(e){i.d(t,e,(function(){return r[e]}))}(s);i("17f5");var n,o=i("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"0e19fbd6",null,!1,a["a"],n);t["default"]=c.exports},"17f5":function(e,t,i){"use strict";var a=i("f20e"),r=i.n(a);r.a},"1cb0":function(e,t,i){var a=i("627e");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=i("4f06").default;r("b68b7a92",a,!0,{sourceMap:!1,shadowMode:!1})},"1e3f":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("uni-top-bar",{attrs:{title:e.toptitle}}),i("v-uni-view",{staticClass:"hongren",style:{top:e.height+43+"px"}},[i("v-uni-view",{staticClass:"bg-fff"},[i("v-uni-view",{staticClass:"membertitle"},[i("v-uni-view",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.toptitle)+"_【限时优惠渠道】")])],1),i("v-uni-view",{staticClass:"member"},[i("v-uni-view",{staticClass:"member-swiper"},e._l(e.member,(function(t,a){return i("v-uni-view",{key:a,staticClass:"item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.navmember(t.id)}}},[i("v-uni-view",{staticClass:"tab",class:e.id==t.id?"active":""},[e.id==t.id?i("v-uni-view",{staticClass:"cuIcon-roundcheckfill"}):e._e(),i("v-uni-view",{staticClass:"name"},[e._v(e._s(t.name))]),t.discountedprice?i("v-uni-view",[i("v-uni-view",{staticClass:"rate"},[e._v(e._s(t.rate)+"折")]),i("v-uni-view",{staticClass:"price"},[i("span",[e._v("￥")]),e._v(e._s(e._f("numFilter")(t.discountedprice)))]),i("v-uni-view",{staticClass:"cost-price text-grey"},[e._v("￥"+e._s(e._f("numFilter")(t.price)))])],1):i("v-uni-view",[i("v-uni-view",{staticClass:"price"},[i("span",[e._v("￥")]),e._v(e._s(e._f("numFilter")(t.price)))]),i("v-uni-view",{staticClass:"cost-price text-grey"})],1)],1)],1)})),1)],1)],1),i("v-uni-view",{staticClass:"membertip"},[i("v-uni-view",{staticClass:"item show"},[i("v-uni-view",{staticClass:"clearfix"},[i("v-uni-view",{staticClass:"title border-t border-r border-l border-b",staticStyle:{width:"50%"}},[e._v("特权")]),i("v-uni-view",{staticClass:"title border-t border-r border-b",class:2==e.id?"active":"",staticStyle:{width:"25%"}},[e._v("普通会员")]),i("v-uni-view",{staticClass:"title border-t border-r border-b",class:3==e.id?"active":"",staticStyle:{width:"25%"}},[e._v("超级会员")])],1),i("v-uni-view",{staticClass:"td clearfix"},[i("v-uni-view",{staticClass:"privilege border-l border-r border-b"},[e._v("入驻商家曝光")]),i("v-uni-view",{staticClass:"ordinary border-r border-b",class:2==e.id?"active":""},[i("i",{staticClass:"iconfont correct"},[e._v("")])]),i("v-uni-view",{staticClass:"super border-r border-b",class:3==e.id?"active":""},[i("i",{staticClass:"iconfont correct"},[e._v("")])])],1),i("v-uni-view",{staticClass:"td clearfix"},[i("v-uni-view",{staticClass:"privilege border-l border-r border-b"},[e._v("按带货领域精准搜索")]),i("v-uni-view",{staticClass:"ordinary border-r border-b",class:2==e.id?"active":""},[i("i",{staticClass:"iconfont correct"},[e._v("")])]),i("v-uni-view",{staticClass:"super border-r border-b",class:3==e.id?"active":""},[i("i",{staticClass:"iconfont correct"},[e._v("")])])],1),i("v-uni-view",{staticClass:"td clearfix"},[i("v-uni-view",{staticClass:"privilege border-l border-r border-b"},[e._v("一键速配带货主播")]),i("v-uni-view",{staticClass:"ordinary border-r border-b",class:2==e.id?"active":""},[i("i",{staticClass:"iconfont correct"},[e._v("")])]),i("v-uni-view",{staticClass:"super border-r border-b",class:3==e.id?"active":""},[i("i",{staticClass:"iconfont correct"},[e._v("")])])],1),i("v-uni-view",{staticClass:"td clearfix"},[i("v-uni-view",{staticClass:"privilege border-l border-r border-b"},[e._v("主播联系方式（微信）")]),i("v-uni-view",{staticClass:"ordinary border-r border-b",class:2==e.id?"active":""},[i("i",{staticClass:"iconfont correct"},[e._v("赠")])]),i("v-uni-view",{staticClass:"super border-r border-b",class:3==e.id?"active":""},[i("i",{staticClass:"iconfont correct"},[e._v("赠")])])],1),i("v-uni-view",{staticClass:"td clearfix"},[i("v-uni-view",{staticClass:"privilege border-l border-r border-b"},[e._v("主播粉丝画像")]),i("v-uni-view",{staticClass:"ordinary border-r border-b",class:2==e.id?"active":""},[i("i",{staticClass:"iconfont correct"},[e._v("赠")])]),i("v-uni-view",{staticClass:"super border-r border-b",class:3==e.id?"active":""},[i("i",{staticClass:"iconfont correct"},[e._v("赠")])])],1),i("v-uni-view",{staticClass:"td clearfix"},[i("v-uni-view",{staticClass:"privilege border-l border-r border-b"},[e._v("短视频账号运营干货")]),i("v-uni-view",{staticClass:"ordinary border-r border-b",class:2==e.id?"active":""},[i("i",{staticClass:"iconfont correct"},[e._v("赠")])]),i("v-uni-view",{staticClass:"super border-r border-b",class:3==e.id?"active":""},[i("i",{staticClass:"iconfont correct"},[e._v("赠")])])],1),i("v-uni-view",{staticClass:"td clearfix"},[i("v-uni-view",{staticClass:"privilege border-l border-r border-b"},[e._v("商品发布、展示数量")]),i("v-uni-view",{staticClass:"ordinary border-r border-b error",class:2==e.id?"active":""},[e._v("5件")]),i("v-uni-view",{staticClass:"super border-r border-b correct",class:3==e.id?"active":""},[e._v("20件")])],1),i("v-uni-view",{staticClass:"td clearfix"},[i("v-uni-view",{staticClass:"privilege border-l border-r border-b"},[e._v("商家品牌展示曝光")]),i("v-uni-view",{staticClass:"ordinary border-r border-b",class:2==e.id?"active":""},[i("i",{staticClass:"iconfont error"},[e._v("")])]),i("v-uni-view",{staticClass:"super border-r border-b",class:3==e.id?"active":""},[i("i",{staticClass:"iconfont correct"},[e._v("")])])],1),i("v-uni-view",{staticClass:"td clearfix"},[i("v-uni-view",{staticClass:"privilege border-l border-r border-b"},[e._v("活动专题推荐")]),i("v-uni-view",{staticClass:"ordinary border-r border-b",class:2==e.id?"active":""},[i("i",{staticClass:"iconfont error"},[e._v("")])]),i("v-uni-view",{staticClass:"super border-r border-b",class:3==e.id?"active":""},[i("i",{staticClass:"iconfont correct"},[e._v("")])])],1),i("v-uni-view",{staticClass:"td clearfix"},[i("v-uni-view",{staticClass:"privilege border-l border-r border-b"},[e._v("首页横幅广告位推荐")]),i("v-uni-view",{staticClass:"ordinary border-r border-b",class:2==e.id?"active":""},[i("i",{staticClass:"iconfont error"},[e._v("")])]),i("v-uni-view",{staticClass:"super border-r border-b",class:3==e.id?"active":""},[i("i",{staticClass:"iconfont correct"},[e._v("")])])],1),i("v-uni-view",{staticClass:"td clearfix"},[i("v-uni-view",{staticClass:"privilege border-l border-r border-b"},[e._v("多账号绑定协同操作")]),i("v-uni-view",{staticClass:"ordinary border-r border-b",class:2==e.id?"active":""},[i("i",{staticClass:"iconfont error"},[e._v("")])]),i("v-uni-view",{staticClass:"super border-b border-r correct",class:3==e.id?"active":""},[e._v("2个")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[i("v-uni-view",{staticClass:"opening shadow text-center"},[i("v-uni-view",{staticClass:"bottombtn clearfix"},[e.openmemberactive?i("v-uni-view",{staticClass:"kefubtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openmember.apply(void 0,arguments)}}},[e._v("立即开通")]):i("v-uni-view",{staticClass:"kefubtn",staticStyle:{"background-color":"#ccc"}},[e._v("立即开通")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal poplogin",class:"login"==e.modalName?"show":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[e._v("请登录后操作！")]),i("v-uni-view",{staticClass:"loginbtn"},[i("v-uni-button",{staticClass:"close",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.hideModal.apply(void 0,arguments)}}},[e._v("关闭")]),i("v-uni-button",{staticClass:"login",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.wechatLogin.apply(void 0,arguments)}}},[e._v("立即登录")])],1)],1)],1)],1)],1)},s=[]},3174:function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:e.height+44+"px",paddingTop:e.height+"px",background:e.background}},[1!=e.barid?i("span",{staticClass:"clearfix"},[e.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:e.within,mode:"heightFix"}}):i("span",[e.title?i("span",{staticClass:"title"},[e._v(e._s(e.title))]):i("span",{staticClass:"title"},[e._v("红人速推")])])]):i("span",[e.within?i("img",{staticClass:"logo_left",attrs:{src:e.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},3734:function(e,t,i){"use strict";i.r(t);var a=i("3174"),r=i("75eb");for(var s in r)"default"!==s&&function(e){i.d(t,e,(function(){return r[e]}))}(s);i("3804");var n,o=i("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"07edaae6",null,!1,a["a"],n);t["default"]=c.exports},3804:function(e,t,i){"use strict";var a=i("1cb0"),r=i.n(a);r.a},"627e":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),e.exports=t},"75eb":function(e,t,i){"use strict";i.r(t);var a=i("05ef"),r=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=r.a},"9b35":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".memberheight[data-v-0e19fbd6]{height:44vw}.tipnews[data-v-0e19fbd6]{top:12vw}.hongren[data-v-0e19fbd6]{bottom:44px}",""]),e.exports=t},b944:function(e,t,i){"use strict";i.r(t);var a=i("db39"),r=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=r.a},db39:function(e,t,i){"use strict";var a=i("4ea4");i("b680"),i("d3b7"),i("acd8"),i("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(i("3734")),s={components:{uniTopBar:r.default},data:function(){return{id:11,modalName:null,userInfo:[],cewebrityid:"",member:"",memberlength:"",examine:"",toptitle:"",height:"",codetime:2e3,message:"",messagelist:"",memberlist:["普通会员","超级会员"],membername:"普通会员",openmemberactive:!0}},filters:{numFilter:function(e){var t="";return t=isNaN(e)||""===e?" ":parseFloat(e).toFixed(0),t},numSingle:function(e,t){var i="";return i=isNaN(e)||""===e?" ":parseFloat(e/t).toFixed(2),i}},onLoad:function(e){var t=this;this.height=this.StatusBar,e.id&&(t.cewebrityid=e.id),e.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",e.invite)),e.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:e.code,invite:i.data},method:"POST",success:function(e){uni.removeStorageSync("invite"),t.loginhandle(e.data.data.info)}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:e.code},method:"POST",success:function(e){t.loginhandle(e.data.data.info)}})}}):uni.getStorage({key:"userInfo",success:function(e){t.updateuser(e.data.id)},fail:function(e){wxlogin()}}),t.getmessage(),t.timerInt=setInterval((function(){if(t.codetime--,t.message=t.messagelist[t.getRandomArbitrary(0,50)],t.membername=t.memberlist[t.getRandomArbitrary(0,2)],t.message.celebrity=t.message.celebrity[0]+t.message.celebrity[1]+"***",t.message.merchant=t.message.merchant[0]+t.message.merchant[1]+"***",t.tip=!t.tip,0==t.codetime)return clearInterval(t.timerInt),void(t.codetime=2e3)}),4e3),t.getmember()},onShow:function(){var e=this;uni.getStorage({key:"userInfo",success:function(t){e.updateuser(t.data.id)}})},methods:{updateuser:function(e){var t=this;e&&uni.request({url:"https://www.hongrensutui.com/api/api/userinfo",data:{id:e},method:"POST",success:function(e){e.data.data.info?t.loginhandle(e.data.data.info):wxlogin()}})},loginhandle:function(e){var t=this;uni.setStorageSync("userInfo",e),t.userInfo=e,t.share(e.company_id,e.id)},getRandomArbitrary:function(e,t){return Math.floor(Math.random()*(t-e)+e)},getmessage:function(){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(t){e.messagelist=t.data.data.list,e.message=e.messagelist[e.getRandomArbitrary(0,50)],e.message.celebrity=e.message.celebrity[0]+e.message.celebrity[1]+"***",e.message.merchant=e.message.merchant[0]+e.message.merchant[1]+"***",e.tip=!e.tip}})},getmember:function(){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/member",data:{id:11},method:"POST",success:function(t){e.member=t.data.data.list,e.toptitle=e.member[0].name;e.member.length}})},navmember:function(e){var t=this;t.id=e},openmember:function(e){var t=this;t.openmemberactive=!1,uni.showLoading({title:"拉取支付,请稍后..."}),t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/card",data:{openid:t.userInfo.openid,id:t.id},method:"POST",success:function(e){var i="/pages/celebrity/list";t.cewebrityid&&(i="/pages/celebrity/details?id="+t.cewebrityid),t.openmemberactive=!0,uni.hideLoading(),callpay(JSON.parse(e.data.data.parameters),e.data.data.info,i)}}):wxlogin()},wxopenmember:function(){var e=this;e.openmemberactive=!1,uni.showLoading({title:"拉取支付,请稍后..."}),e.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Order/card",data:{openid:e.userInfo.xopenid,id:e.id},method:"POST",success:function(t){if(1==t.data.error)return uni.removeStorageSync("userInfo"),e.modalName="login",e.openmemberactive=!0,uni.hideLoading(),!1;e.openmemberactive=!0,uni.hideLoading();var i=t.data.data.orderid;uni.requestPayment({provider:"wxpay",timeStamp:t.data.data.wechat.payinfo.timeStamp,nonceStr:t.data.data.wechat.payinfo.nonceStr,package:t.data.data.wechat.payinfo.package,signType:t.data.data.wechat.payinfo.signType,paySign:t.data.data.wechat.payinfo.paySign,success:function(t){uni.request({url:"https://www.hongrensutui.com/api/Order/complete_card",data:{openid:e.userInfo.xopenid,id:i},method:"POST",success:function(t){var i="/pages/celebrity/list";e.cewebrityid&&(i="/pages/celebrity/celebrity?id="+e.cewebrityid),uni.redirectTo({url:i})}})}})}}):wxlogin()},wechatLogin:function(e){wxlogin()},hideModal:function(e){this.modalName=null},share:function(e){function t(t,i){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t){var i="【限时优惠】优质客户_会员开通渠道",a="限时优惠链接仅保存48小时，点击查看详情",r="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(i,a,r,t)}))}};t.default=s},f20e:function(e,t,i){var a=i("9b35");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=i("4f06").default;r("5e27f501",a,!0,{sourceMap:!1,shadowMode:!1})}}]);