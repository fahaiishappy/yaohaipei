(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-about"],{"05ef":function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=i},"1c37":function(t,a,e){"use strict";var i=e("287d"),n=e.n(i);n.a},"1cb0":function(t,a,e){var i=e("627e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("b68b7a92",i,!0,{sourceMap:!1,shadowMode:!1})},"287d":function(t,a,e){var i=e("7069");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("7b2dd50c",i,!0,{sourceMap:!1,shadowMode:!1})},3174:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?e("span",{staticClass:"clearfix"},[t.within?e("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):e("span",[t.title?e("span",{staticClass:"title"},[t._v(t._s(t.title))]):e("span",{staticClass:"title"},[t._v("红人速推")])])]):e("span",[t.within?e("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},3734:function(t,a,e){"use strict";e.r(a);var i=e("3174"),n=e("75eb");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("3804");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"07edaae6",null,!1,i["a"],s);a["default"]=c.exports},3804:function(t,a,e){"use strict";var i=e("1cb0"),n=e.n(i);n.a},"5acf":function(t,a,e){"use strict";e.r(a);var i=e("77b6"),n=e("6475");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("1c37");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"58a0bc4b",null,!1,i["a"],s);a["default"]=c.exports},"627e":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=a},6475:function(t,a,e){"use strict";e.r(a);var i=e("81c7"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},7069:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".paymentbtn[data-v-58a0bc4b]{position:absolute;font-size:4vw;font-weight:700;bottom:6vw;left:50%;margin-left:-35vw;width:70vw;text-align:center;line-height:10vw;-webkit-border-radius:10vw;border-radius:10vw;background-color:#e71d36;color:#fff;z-index:210;-webkit-box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3);box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}",""]),t.exports=a},"75eb":function(t,a,e){"use strict";e.r(a);var i=e("05ef"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"77b6":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("uni-top-bar",{attrs:{within:t.within}}),e("v-uni-view",{staticClass:"hongren about",style:{top:t.height+43+"px"}},[e("v-uni-view",{staticClass:"count"},[e("v-uni-view",{staticClass:"data"},[e("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}})],1)],1)],1),e("v-uni-view",{staticClass:"customer round shadow text-center",attrs:{"data-target":"Image"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cuIcon-servicefill"})],1),t.paymentbtn?e("v-uni-view",{staticClass:"paymentbtn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.openmember.apply(void 0,arguments)}}},[t._v(t._s(t.paymentbtntext)+"("+t._s(t._f("numFilter")(t.cardprice))+"元)")]):t._e(),e("v-uni-view",{staticClass:"cu-modal config",class:"Image"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",staticStyle:{width:"auto"}},[e("v-uni-view",{staticClass:"bg-img"},[e("v-uni-view",{staticClass:"service"},[e("img",{staticClass:"wechat",attrs:{src:t.config.service,mode:"widthFix"}}),e("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.config.servicetip))])],1),e("v-uni-view",{staticClass:"cu-bar justify-center text-white",staticStyle:{"margin-top":"3vw"}},[e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-modal poplogin",class:"login"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"auth"},[e("v-uni-view",{staticClass:"title"},[t._v("请登录后操作！")]),e("v-uni-view",{staticClass:"loginbtn"},[e("v-uni-button",{staticClass:"close",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),e("v-uni-button",{staticClass:"login",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1)},o=[]},"81c7":function(t,a,e){"use strict";var i=e("4ea4");e("b680"),e("d3b7"),e("acd8"),e("ac1f"),e("25f0"),e("5319"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("3734")),o={components:{uniTopBar:n.default},data:function(){return{modalName:null,id:"",cardid:"",cardprice:"",content:"",userInfo:"",height:"",config:"",within:"",paymentbtntext:"立即认证",paymentbtn:!1,paddingBottom:""}},filters:{numFilter:function(t){var a="";return a=isNaN(t)||""===t?"":parseFloat(t).toFixed(0),a}},onLoad:function(t){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/h5config",method:"POST",success:function(t){a.config=t.data.data.list}}),this.height=this.StatusBar,a.id=t["id"],"40"==a.id&&(a.paymentbtntext="立即使用"),a.cardid=t["cardid"],this.getCewebrity(),a.cardid&&this.getCade(),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/3user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),a.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.getCewebrity(a.userInfo.id)}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){a.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.getCewebrity(a.userInfo.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?(a.userInfo=t.data,a.updateuser(t.data.id)):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(a){""!=a.data&&null!=a.data&&t.updateuser(a.data.id)}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(a.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.getCewebrity(a.userInfo.id)):wxlogin()}})},getCewebrity:function(t){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/pageDetails",data:{id:a.id},method:"POST",success:function(e){a.content=e.data.data.list;var i=e.data.data.list.content;a.content.content=i.replace(/\<img/gi,'<img style="border-radius: 1.5vw;width:100%" '),"限时优惠"==a.content.title?a.within="https://www.hongrensutui.com/h5/img/youhui_logo_left.png":a.within="https://www.hongrensutui.com/h5/img/logo_left.png",a.share(a.content.sharetitle,a.content.sharecontent,t)}})},getCade:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/getCade",data:{id:t.cardid},method:"POST",success:function(a){a.data.data.info&&(t.paymentbtn=!0,t.paddingBottom="8vw",t.cardprice=a.data.data.info)}})},openmember:function(t){var a=this;a.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/card",data:{openid:a.userInfo.openid,id:a.cardid},method:"POST",success:function(t){callpay(JSON.parse(t.data.data.parameters),t.data.data.info)}}):a.modalName="login"},wxopenmember:function(){var t=this;t.openmemberactive=!1,uni.showLoading({title:"拉取支付,请稍后..."}),t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Order/card",data:{openid:t.userInfo.xopenid,id:t.cardid},method:"POST",success:function(a){if(1==a.data.error)return uni.removeStorageSync("userInfo"),t.modalName="login",t.openmemberactive=!0,uni.hideLoading(),!1;t.openmemberactive=!0,uni.hideLoading();var e=a.data.data.orderid;uni.requestPayment({provider:"wxpay",timeStamp:a.data.data.wechat.payinfo.timeStamp,nonceStr:a.data.data.wechat.payinfo.nonceStr,package:a.data.data.wechat.payinfo.package,signType:a.data.data.wechat.payinfo.signType,paySign:a.data.data.wechat.payinfo.paySign,success:function(a){uni.request({url:"https://www.hongrensutui.com/api/Order/complete_card",data:{openid:t.userInfo.xopenid,id:e},method:"POST",success:function(a){var e="/pages/celebrity/list";t.cewebrityid&&(e="/pages/celebrity/celebrity?id="+t.cewebrityid),uni.redirectTo({url:e})}})}})}}):t.modalName="login"},wechatLogin:function(t){wxlogin()},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},share:function(t){function a(a,e,i){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(t,a,e){if(t)t=t;else t="红人速推 | 网红直播带货一站式服务平台";if(a)a=a;else a="红人速推就是网红多 商家多，直播带货就上红人速推。";var i="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(t,a,i,e)}))}};a.default=o}}]);