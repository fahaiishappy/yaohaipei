(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-celebrity-speed5"],{"10de":function(t,a,e){"use strict";var i=e("2933"),n=e.n(i);n.a},2933:function(t,a,e){var i=e("ed23");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("a72bcb22",i,!0,{sourceMap:!1,shadowMode:!1})},"378d":function(t,a,e){"use strict";var i=e("f39f"),n=e.n(i);n.a},4674:function(t,a,e){"use strict";e.r(a);var i=e("7137"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"5ad0":function(t,a,e){"use strict";e.r(a);var i=e("8a0d"),n=e("4674");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("378d");var c,r=e("f0c5"),d=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"e4d1a924",null,!1,i["a"],c);a["default"]=d.exports},7137:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=i},"893f":function(t,a,e){"use strict";e.r(a);var i=e("d61a"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"8a0d":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?e("span",{staticClass:"clearfix"},[t.title?e("span",{staticClass:"title"},[t._v(t._s(t.title))]):e("span",{staticClass:"title"},[t._v("红人速推")])]):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])},o=[]},a308:function(t,a,e){"use strict";e.r(a);var i=e("e852"),n=e("893f");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("10de");var c,r=e("f0c5"),d=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"496aacac",null,!1,i["a"],c);a["default"]=d.exports},d61a:function(t,a,e){"use strict";var i=e("4ea4");e("4d63"),e("ac1f"),e("25f0"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("5ad0")),o={components:{uniTopBar:n.default},data:function(){return{modalName:null,id:"",height:"",toptitle:"红人速配",userInfo:"",addressData:"",tipData:"",signbtn:!1,codebtn:!1,codetime:60,codeText:"验证码",user:"",mobile:"",yzm:"",code:""}},onLoad:function(t){var a=this;this.height=this.StatusBar,a.addressData=JSON.parse(t.addressData),a.tipData=JSON.parse(t.tipData),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?a.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info):wxlogin()}})},objective:function(t,a){this.id=t,this.addressData.cooperation=a},next:function(){var t=this;return t.mobile?t.checkMobile(t.mobile)?void uni.getStorage({key:"userInfo",success:function(a){t.addressData.mobile=t.mobile,uni.navigateTo({url:"/pages/celebrity/mate?addressData="+JSON.stringify(t.addressData)+"&tipData="+JSON.stringify(t.tipData)})},fail:function(a){t.modalName="login"}}):(uni.showToast({icon:"none",title:"手机号码不正确！"}),!1):(uni.showToast({icon:"none",title:"请输入手机号码！"}),!1)},checkMobile:function(t){return RegExp(/^1[35789]\d{9}$/).test(t)},codeFun:function(){var t=this;return this.mobile?this.checkMobile(this.mobile)?(this.signbtn=!0,this.codebtn=!0,this.timerInt=setInterval((function(){if(t.codetime--,t.codeText=t.codetime+"s",0==t.codetime)return clearInterval(t.timerInt),t.codetime=60,t.codebtn=!1,void(t.codeText="重新获取")}),1e3),void uni.request({url:"https://www.hongrensutui.com/api/index/verify_code",data:{receiver:this.mobile},method:"POST",success:function(a){0==a.data.data.Code?(uni.showToast({title:"验证码发送失败",icon:"none",duration:3e3}),t.signbtn=!1):(t.yzm=a.data.data.Code,uni.showToast({title:"验证码发送成功",icon:"none",duration:3e3}))}})):(uni.showToast({icon:"none",title:"手机号码不正确！"}),!1):(uni.showToast({icon:"none",title:"手机号码不能为空！"}),!1)},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null}}};a.default=o},e852:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("uni-top-bar",{attrs:{title:t.toptitle}}),e("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+"px"}},[e("v-uni-view",{staticClass:"card"},[e("v-uni-view",{staticClass:"cardtitle"},[t._v("最后一步啦，填手机号查看结果")]),e("v-uni-view",{staticClass:"mobilecard"},[e("v-uni-view",{staticClass:"cu-form-group",staticStyle:{"margin-top":"30vw"}},[e("v-uni-view",{staticClass:"title"},[t._v("手机号码")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号码",disabled:t.signbtn},model:{value:t.mobile,callback:function(a){t.mobile=a},expression:"mobile"}}),e("uni-text",{staticClass:"cuIcon-mobile text-gray",attrs:{"data-v-1c80394c":""}})],1)],1)],1),e("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.next.apply(void 0,arguments)}}},[t._v(t._s(t.btnname))])],1),e("v-uni-view",{staticClass:"cu-modal",class:"login"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"auth"},[e("v-uni-view",{staticClass:"title"},[t._v("请登录后查看！")]),e("v-uni-view",{staticClass:"loginbtn"},[e("v-uni-button",{staticClass:"close",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),e("v-uni-button",{staticClass:"login",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1)},o=[]},ed23:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.hongren[data-v-496aacac]{background-image:url(https://www.hongrensutui.com/h5/img/banner_bg.png);background-repeat:no-repeat;background-position:top;background-size:100%;background-color:#fff;bottom:0}.bg-fff[data-v-496aacac]{margin-bottom:0}.cu-bar[data-v-496aacac]{position:static}.nothave[data-v-496aacac]{font-size:3.5vw;padding-bottom:3vw;color:#999}.card[data-v-496aacac]{background-color:#fff;margin:3vw;border-radius:1.5vw;padding:0 3vw}.cu-bar.foot[data-v-496aacac]{z-index:199}.cu-bar.foot[data-v-496aacac]{position:fixed;bottom:0;left:0;right:0;width:100%;height:50px;min-height:50px;z-index:200;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar.foot .text-red[data-v-496aacac]{color:#e71d36}.cu-bar.foot .text-gray[data-v-496aacac]{color:#9eb3c2}.cu-bar.foot.tabbar.shadow[data-v-496aacac]{box-shadow:0 -1px 2px rgba(26,26,26,.1)}uni-button[data-v-496aacac]{border-radius:100vw}.cu-btn[class*="line"][data-v-496aacac]::after{border-radius:100vw}.cardtitle[data-v-496aacac]{text-align:center;padding-top:25px;font-size:5vw;padding-bottom:15px;font-weight:700}.cu-form-group .title[data-v-496aacac]{width:20vw}.mobilecard[data-v-496aacac]{box-shadow:0 1px 2px rgba(26,26,26,.1)}.offerbtn[data-v-496aacac]{width:94vw;margin:0 3vw;float:left;height:40px;line-height:40px;text-align:center;background-color:#e71d36;border-radius:40px;color:#fff;margin-top:6vw}.cu-modal[data-v-496aacac]{z-index:210}.cu-dialog[data-v-496aacac]{background-color:initial;width:100vw;padding:4vw;height:auto}.auth[data-v-496aacac]{padding:6vw;border-radius:1.5vw;background-color:#fff}.auth .vip[data-v-496aacac]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}.auth .pay[data-v-496aacac]{border-radius:1.5vw;border:1px solid #ebebeb;text-align:center;color:#666;height:10vw;line-height:10vw}.auth .title[data-v-496aacac]{color:#333;margin-bottom:4vw}.loginbtn[data-v-496aacac]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.loginbtn uni-button[data-v-496aacac]::after{display:none}.loginbtn uni-button[data-v-496aacac]{position:static;display:block;margin-left:0;margin-right:0;padding-left:0;padding-right:0;box-sizing:initial;font-size:3.8vw;text-align:center;text-decoration:none;line-height:7vw;border-radius:1.5vw;-webkit-tap-highlight-color:transparent;overflow:visible;color:#333;background-color:initial;margin-top:3vw}.loginbtn uni-button.login[data-v-496aacac]{color:#39b54a}',""]),t.exports=a},ee32:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.cu-bar[data-v-e4d1a924]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-e4d1a924]{margin-left:3vw;height:30px}.cuIcon-back[data-v-e4d1a924]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-e4d1a924]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-e4d1a924]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-e4d1a924]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-e4d1a924]{width:auto}.cuIcon-close[data-v-e4d1a924]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=a},f39f:function(t,a,e){var i=e("ee32");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("7be1ffd1",i,!0,{sourceMap:!1,shadowMode:!1})}}]);