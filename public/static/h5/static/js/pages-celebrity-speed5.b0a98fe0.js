(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-celebrity-speed5"],{"0a4c":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.hongren[data-v-a746288a]{background-image:url(https://www.hongrensutui.com/h5/img/banner_bg.png);background-repeat:no-repeat;background-position:top;background-size:100%;background-color:#fff;bottom:0}.bg-fff[data-v-a746288a]{margin-bottom:0}.cu-bar[data-v-a746288a]{position:static}.nothave[data-v-a746288a]{font-size:3.5vw;padding-bottom:3vw;color:#999}.card[data-v-a746288a]{background-color:#fff;margin:3vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;padding:0 3vw}.cu-bar.foot[data-v-a746288a]{z-index:199}.cu-bar.foot[data-v-a746288a]{position:fixed;bottom:0;left:0;right:0;width:100%;height:50px;min-height:50px;z-index:200;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar.foot .text-red[data-v-a746288a]{color:#e71d36}.cu-bar.foot .text-gray[data-v-a746288a]{color:#9eb3c2}.cu-bar.foot.tabbar.shadow[data-v-a746288a]{-webkit-box-shadow:0 -1px 2px rgba(26,26,26,.1);box-shadow:0 -1px 2px rgba(26,26,26,.1)}uni-button[data-v-a746288a]{-webkit-border-radius:100vw;border-radius:100vw}.cu-btn[class*="line"][data-v-a746288a]::after{-webkit-border-radius:100vw;border-radius:100vw}.cardtitle[data-v-a746288a]{text-align:center;padding-top:25px;font-size:5vw;padding-bottom:15px;font-weight:700}.cu-form-group .title[data-v-a746288a]{width:20vw}.mobilecard[data-v-a746288a]{-webkit-box-shadow:0 1px 2px rgba(26,26,26,.1);box-shadow:0 1px 2px rgba(26,26,26,.1)}.offerbtn[data-v-a746288a]{width:94vw;margin:0 3vw;float:left;height:40px;line-height:40px;text-align:center;background-color:#e71d36;-webkit-border-radius:40px;border-radius:40px;color:#fff;margin-top:6vw}.cu-modal[data-v-a746288a]{z-index:210}.cu-dialog[data-v-a746288a]{background-color:transparent;width:100vw;padding:4vw;height:auto}.auth[data-v-a746288a]{padding:6vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;background-color:#fff}.auth .vip[data-v-a746288a]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;-webkit-border-radius:1.5vw;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}.auth .pay[data-v-a746288a]{-webkit-border-radius:1.5vw;border-radius:1.5vw;border:1px solid #ebebeb;text-align:center;color:#666;height:10vw;line-height:10vw}.auth .title[data-v-a746288a]{color:#333;margin-bottom:4vw}.loginbtn[data-v-a746288a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.loginbtn uni-button[data-v-a746288a]::after{display:none}.loginbtn uni-button[data-v-a746288a]{position:static;display:block;margin-left:0;margin-right:0;padding-left:0;padding-right:0;-webkit-box-sizing:content-box;box-sizing:content-box;font-size:3.8vw;text-align:center;text-decoration:none;line-height:7vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;-webkit-tap-highlight-color:transparent;overflow:visible;color:#333;background-color:transparent;margin-top:3vw}.loginbtn uni-button.login[data-v-a746288a]{color:#39b54a}',""]),t.exports=a},1436:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("uni-top-bar",{attrs:{title:t.toptitle,within:t.within}}),i("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+"px"}},[i("v-uni-view",{staticClass:"card"},[i("v-uni-view",{staticClass:"cardtitle"},[t._v("最后一步啦，填手机号查看结果")]),i("v-uni-view",{staticClass:"mobilecard"},[i("v-uni-view",{staticClass:"cu-form-group",staticStyle:{"margin-top":"30vw"}},[i("v-uni-view",{staticClass:"title"},[t._v("手机号码")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号码",disabled:t.signbtn},model:{value:t.mobile,callback:function(a){t.mobile=a},expression:"mobile"}}),i("uni-text",{staticClass:"cuIcon-mobile text-gray",attrs:{"data-v-1c80394c":""}})],1)],1)],1),i("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.next.apply(void 0,arguments)}}},[t._v("立即速配")])],1),i("v-uni-view",{staticClass:"cu-modal",class:"login"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("请登录后查看！")]),i("v-uni-view",{staticClass:"loginbtn"},[i("v-uni-button",{staticClass:"close",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),i("v-uni-button",{staticClass:"login",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1)},o=[]},"1df8":function(t,a,i){var e=i("0a4c");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("1c8ee19c",e,!0,{sourceMap:!1,shadowMode:!1})},4674:function(t,a,i){"use strict";i.r(a);var e=i("7137"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"5ad0":function(t,a,i){"use strict";i.r(a);var e=i("6004"),n=i("4674");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("a6c7");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"dca053c4",null,!1,e["a"],r);a["default"]=d.exports},6004:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):i("span",[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])])]):i("span",[t.within?i("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},6703:function(t,a,i){"use strict";var e=i("1df8"),n=i.n(e);n.a},7137:function(t,a,i){"use strict";i("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=e},"893f":function(t,a,i){"use strict";i.r(a);var e=i("d61a"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},a308:function(t,a,i){"use strict";i.r(a);var e=i("1436"),n=i("893f");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("6703");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"a746288a",null,!1,e["a"],r);a["default"]=d.exports},a6c7:function(t,a,i){"use strict";var e=i("b8ec"),n=i.n(e);n.a},b8ec:function(t,a,i){var e=i("d99c");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("119d75aa",e,!0,{sourceMap:!1,shadowMode:!1})},d61a:function(t,a,i){"use strict";var e=i("4ea4");i("4d63"),i("ac1f"),i("25f0"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("5ad0")),o={components:{uniTopBar:n.default},data:function(){return{modalName:null,id:"",height:"",toptitle:"红人速配",userInfo:"",addressData:"",tipData:"",signbtn:!1,codebtn:!1,codetime:60,codeText:"验证码",user:"",mobile:"",yzm:"",code:"",within:"https://www.hongrensutui.com/h5/img/supei_logo_left.png"}},onLoad:function(t){var a=this;this.height=this.StatusBar,a.addressData=JSON.parse(t.addressData),a.tipData=JSON.parse(t.tipData),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?a.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info):wxlogin()}})},objective:function(t,a){this.id=t,this.addressData.cooperation=a},next:function(){var t=this;return t.mobile?t.checkMobile(t.mobile)?void uni.getStorage({key:"userInfo",success:function(a){t.addressData.mobile=t.mobile,uni.navigateTo({url:"/pages/celebrity/mate?addressData="+JSON.stringify(t.addressData)+"&tipData="+JSON.stringify(t.tipData)})},fail:function(a){t.modalName="login"}}):(uni.showToast({icon:"none",title:"手机号码不正确！"}),!1):(uni.showToast({icon:"none",title:"请输入手机号码！"}),!1)},checkMobile:function(t){return RegExp(/^1[35789]\d{9}$/).test(t)},codeFun:function(){var t=this;return this.mobile?this.checkMobile(this.mobile)?(this.signbtn=!0,this.codebtn=!0,this.timerInt=setInterval((function(){if(t.codetime--,t.codeText=t.codetime+"s",0==t.codetime)return clearInterval(t.timerInt),t.codetime=60,t.codebtn=!1,void(t.codeText="重新获取")}),1e3),void uni.request({url:"https://www.hongrensutui.com/api/index/verify_code",data:{receiver:this.mobile},method:"POST",success:function(a){0==a.data.data.Code?(uni.showToast({title:"验证码发送失败",icon:"none",duration:3e3}),t.signbtn=!1):(t.yzm=a.data.data.Code,uni.showToast({title:"验证码发送成功",icon:"none",duration:3e3}))}})):(uni.showToast({icon:"none",title:"手机号码不正确！"}),!1):(uni.showToast({icon:"none",title:"手机号码不能为空！"}),!1)},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null}}};a.default=o},d99c:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.cu-bar[data-v-dca053c4]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-dca053c4]{margin-left:3vw;height:30px}.cuIcon-back[data-v-dca053c4]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-dca053c4]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-dca053c4]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-dca053c4]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-dca053c4]{width:auto}.cuIcon-close[data-v-dca053c4]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=a}}]);