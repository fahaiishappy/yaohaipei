(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-register"],{"04a1":function(t,i,a){"use strict";var e=a("d3e3"),n=a.n(e);n.a},4674:function(t,i,a){"use strict";a.r(i);var e=a("7137"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},"569a":function(t,i,a){"use strict";var e=a("4ea4");a("4d63"),a("ac1f"),a("25f0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("5ad0")),o={components:{uniTopBar:n.default},data:function(){return{signbtn:!1,codebtn:!1,codetime:60,codeText:"验证码",user:"",mobile:"",yzm:"",code:"",password:"",password2:"",height:""}},onLoad:function(t){this.height=this.StatusBar,"undefined"!=typeof t.code&&uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),uni.showToast({icon:"none",title:"登录成功！"}),setTimeout((function(){uni.reLaunch({url:"/pages/user/user"})}),1500)},error:function(t){uni.showToast({icon:"none",title:"授权登录失败！"})}})},methods:{register:function(){return this.mobile?this.checkMobile(this.mobile)?this.password?this.password2?this.password!=this.password2?(uni.showToast({icon:"none",title:"两次密码不一致！"}),!1):this.code?this.code!=this.yzm?(uni.showToast({icon:"none",title:"验证码不正确"}),!1):void uni.request({url:"https://www.hongrensutui.com/api/index/register",data:{mobile:this.mobile,code:this.yzm,password:this.password},method:"POST",success:function(t){-1==t.data.data.info.code?uni.showToast({icon:"none",title:t.data.data.info.msg}):(uni.setStorageSync("userInfo",t.data.data.info),uni.showToast({icon:"none",title:"注册成功！"}),setTimeout((function(){uni.reLaunch({url:"/pages/user/user"})}),1500))}}):(uni.showToast({icon:"none",title:"请输入验证码"}),!1):(uni.showToast({icon:"none",title:"请确认密码！"}),!1):(uni.showToast({icon:"none",title:"请输入密码！"}),!1):(uni.showToast({icon:"none",title:"手机号码不正确！"}),!1):(uni.showToast({icon:"none",title:"请输入手机号码！"}),!1)},wechatLogin:function(t){wxlogin()},checkMobile:function(t){return RegExp(/^1[35789]\d{9}$/).test(t)},codeFun:function(){var t=this;return this.mobile?this.checkMobile(this.mobile)?(this.signbtn=!0,this.codebtn=!0,this.timerInt=setInterval((function(){if(t.codetime--,t.codeText=t.codetime+"s",0==t.codetime)return clearInterval(t.timerInt),t.codetime=60,t.codebtn=!1,void(t.codeText="重新获取")}),1e3),void uni.request({url:"https://www.hongrensutui.com/api/index/verify_code",data:{receiver:this.mobile},method:"POST",success:function(i){0==i.data.data.Code?(uni.showToast({title:"验证码发送失败",icon:"none",duration:3e3}),t.signbtn=!1):(t.yzm=i.data.data.Code,uni.showToast({title:"验证码发送成功",icon:"none",duration:3e3}))}})):(uni.showToast({icon:"none",title:"手机号码不正确！"}),!1):(uni.showToast({icon:"none",title:"手机号码不能为空！"}),!1)},navToDetailPage:function(t,i){i&&(t=t+"?id="+i),uni.navigateTo({url:"/pages/"+t})}}};i.default=o},"5a97":function(t,i,a){"use strict";a.r(i);var e=a("569a"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},"5ad0":function(t,i,a){"use strict";a.r(i);var e=a("6004"),n=a("4674");for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("a6c7");var s,c=a("f0c5"),r=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"dca053c4",null,!1,e["a"],s);i["default"]=r.exports},6004:function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?a("span",{staticClass:"clearfix"},[t.within?a("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):a("span",[t.title?a("span",{staticClass:"title"},[t._v(t._s(t.title))]):a("span",{staticClass:"title"},[t._v("红人速推")])])]):a("span",[t.within?a("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):a("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},7137:function(t,i,a){"use strict";a("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};i.default=e},a055:function(t,i,a){"use strict";a.r(i);var e=a("a339"),n=a("5a97");for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("04a1");var s,c=a("f0c5"),r=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"984a523a",null,!1,e["a"],s);i["default"]=r.exports},a339:function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("uni-top-bar"),a("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[a("v-uni-view",{staticClass:"switch"}),a("v-uni-view",{staticClass:"logo"},[a("img",{attrs:{src:"https://www.hongrensutui.com/h5/img/logo.png",mode:"widthFix"}})]),a("v-uni-view",{staticClass:"platform_list clearfix"},[a("v-uni-view",{staticClass:"list clearfix"},[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("手机号码")]),a("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号码",disabled:t.signbtn},model:{value:t.mobile,callback:function(i){t.mobile=i},expression:"mobile"}}),a("uni-text",{staticClass:"cuIcon-mobile text-gray",attrs:{"data-v-1c80394c":""}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("验证码")]),a("v-uni-input",{attrs:{type:"number",placeholder:"清输入验证码"},model:{value:t.code,callback:function(i){t.code=i},expression:"code"}}),a("v-uni-button",{staticClass:"cu-btn bg-green shadow code",attrs:{disabled:t.codebtn},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.codeFun.apply(void 0,arguments)}}},[t._v(t._s(t.codeText))])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("登录密码")]),a("v-uni-input",{attrs:{type:"password",placeholder:"请输入登录密码"},model:{value:t.password,callback:function(i){t.password=i},expression:"password"}}),a("uni-text",{staticClass:"cuIcon-lock text-gray",attrs:{"data-v-1c80394c":""}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("确认密码")]),a("v-uni-input",{attrs:{type:"password",placeholder:"请确认登录密码"},model:{value:t.password2,callback:function(i){t.password2=i},expression:"password2"}}),a("uni-text",{staticClass:"cuIcon-lock text-gray",attrs:{"data-v-1c80394c":""}})],1),a("v-uni-view",{staticClass:"cu-form-group tip"},[a("v-uni-view",{staticClass:"flex justify-between"},[a("v-uni-view",{staticClass:"text-grey",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage("login/login")}}},[t._v("登录")]),a("v-uni-view",{staticClass:"text-grey",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage("login/reset")}}},[t._v("忘记密码")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"padding-xl"},[a("v-uni-button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.register.apply(void 0,arguments)}}},[t._v("注册")])],1),a("v-uni-view",{staticClass:"flex padding justify-center"},[a("v-uni-view",{staticClass:"padding-sm margin-xs",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.wechatLogin.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-avatar lg round",staticStyle:{"background-image":"url(https://www.hongrensutui.com/h5/img/weixin.png)"}})],1)],1)],1)],1)},o=[]},a6c7:function(t,i,a){"use strict";var e=a("b8ec"),n=a.n(e);n.a},b8ec:function(t,i,a){var e=a("d99c");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("119d75aa",e,!0,{sourceMap:!1,shadowMode:!1})},d2cb:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".hongren[data-v-984a523a]{bottom:0}.cu-avatar[data-v-984a523a]{background-color:transparent}.cu-form-group .title[data-v-984a523a]{width:20vw}.switch[data-v-984a523a]{height:14vw;text-align:right;padding:4vw}.logo[data-v-984a523a]{\n\t/* margin-top: 10vw; */width:100vw;padding:3vw;text-align:center}.logo img[data-v-984a523a]{width:25vw;height:25vw;-webkit-border-radius:1.5vw;border-radius:1.5vw}.cu-form-group.tip[data-v-984a523a]{display:block;min-height:auto}.cu-form-group.tip .text-grey[data-v-984a523a]{padding-top:3vw}.platform_list[data-v-984a523a]{padding:0 3vw;margin:4vw 0}.platform_list .list .edit[data-v-984a523a]{position:absolute;right:-3vw;padding-right:6vw;top:50%;margin-top:-12px}.platform_list .list[data-v-984a523a]{position:relative;overflow:hidden;-webkit-border-radius:2vw;border-radius:2vw;-webkit-box-shadow:1px 1px 2px rgba(230,57,70,.1);box-shadow:1px 1px 2px rgba(230,57,70,.1);padding:4vw 3vw;background:#fff}.code[data-v-984a523a]{width:20vw;font-size:3.5vw;padding:0}",""]),t.exports=i},d3e3:function(t,i,a){var e=a("d2cb");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("f5540420",e,!0,{sourceMap:!1,shadowMode:!1})},d99c:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'.cu-bar[data-v-dca053c4]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-dca053c4]{margin-left:3vw;height:30px}.cuIcon-back[data-v-dca053c4]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-dca053c4]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-dca053c4]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-dca053c4]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-dca053c4]{width:auto}.cuIcon-close[data-v-dca053c4]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=i}}]);