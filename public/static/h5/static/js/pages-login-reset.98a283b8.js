(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-reset"],{"0f5e":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};i.default=a},"1c40":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".hongren[data-v-1df38041]{bottom:0}.cu-avatar[data-v-1df38041]{background-color:initial}.cu-form-group .title[data-v-1df38041]{width:20vw}.switch[data-v-1df38041]{height:14vw;text-align:right;padding:4vw}.logo[data-v-1df38041]{\n\t/* margin-top: 10vw; */width:100vw;padding:3vw;text-align:center}.logo img[data-v-1df38041]{width:25vw;height:25vw;border-radius:1.5vw}.cu-form-group.tip[data-v-1df38041]{display:block;min-height:auto}.cu-form-group.tip .text-grey[data-v-1df38041]{padding-top:3vw}.platform_list[data-v-1df38041]{padding:0 3vw;margin:4vw 0}.platform_list .list .edit[data-v-1df38041]{position:absolute;right:-3vw;padding-right:6vw;top:50%;margin-top:-12px}.platform_list .list[data-v-1df38041]{position:relative;overflow:hidden;border-radius:2vw;box-shadow:1px 1px 2px rgba(230,57,70,.1);padding:4vw 3vw;background:#fff}.code[data-v-1df38041]{width:20vw;font-size:3.5vw;padding:0}",""]),t.exports=i},2419:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("uni-top-bar"),e("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[e("v-uni-view",{staticClass:"switch"}),e("v-uni-view",{staticClass:"logo"},[e("img",{attrs:{src:"https://www.hongrensutui.com/h5/img/logo.png",mode:"widthFix"}})]),e("v-uni-view",{staticClass:"platform_list clearfix"},[e("v-uni-view",{staticClass:"list clearfix"},[e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("手机号码")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号码",disabled:t.signbtn},model:{value:t.mobile,callback:function(i){t.mobile=i},expression:"mobile"}}),e("uni-text",{staticClass:"cuIcon-mobile text-gray",attrs:{"data-v-1c80394c":""}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("验证码")]),e("v-uni-input",{attrs:{type:"number",placeholder:"清输入验证码"},model:{value:t.code,callback:function(i){t.code=i},expression:"code"}}),e("v-uni-button",{staticClass:"cu-btn bg-green shadow code",attrs:{disabled:t.codebtn},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.codeFun.apply(void 0,arguments)}}},[t._v(t._s(t.codeText))])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("登录密码")]),e("v-uni-input",{attrs:{type:"password",placeholder:"请输入登录密码"},model:{value:t.password,callback:function(i){t.password=i},expression:"password"}}),e("uni-text",{staticClass:"cuIcon-lock text-gray",attrs:{"data-v-1c80394c":""}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("确认密码")]),e("v-uni-input",{attrs:{type:"password",placeholder:"请确认登录密码"},model:{value:t.password2,callback:function(i){t.password2=i},expression:"password2"}}),e("uni-text",{staticClass:"cuIcon-lock text-gray",attrs:{"data-v-1c80394c":""}})],1),e("v-uni-view",{staticClass:"cu-form-group tip"},[e("v-uni-view",{staticClass:"flex justify-between"},[e("v-uni-view",{staticClass:"text-grey",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage("login/login")}}},[t._v("登录")]),e("v-uni-view",{staticClass:"text-grey",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage("login/reset")}}},[t._v("忘记密码")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"padding-xl"},[e("v-uni-button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.reset.apply(void 0,arguments)}}},[t._v("重置密码")])],1),e("v-uni-view",{staticClass:"flex padding justify-center"},[e("v-uni-view",{staticClass:"padding-sm margin-xs",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.wechatLogin.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-avatar lg round",staticStyle:{"background-image":"url(https://www.hongrensutui.com/h5/img/weixin.png)"}})],1)],1)],1)],1)},n=[]},2679:function(t,i,e){"use strict";e.r(i);var a=e("3fbd"),o=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=o.a},"3fbd":function(t,i,e){"use strict";var a=e("4ea4");e("4d63"),e("ac1f"),e("25f0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=a(e("e3d7")),n={components:{uniTopBar:o.default},data:function(){return{signbtn:!1,codebtn:!1,codetime:60,codeText:"验证码",user:"",mobile:"",yzm:"",code:"",password:"",height:""}},onLoad:function(t){this.height=this.StatusBar,"undefined"!=typeof t.code&&uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),uni.showToast({icon:"none",title:"登录成功！"}),setTimeout((function(){uni.reLaunch({url:"/pages/user/user"})}),1500)},error:function(t){uni.showToast({icon:"none",title:"授权登录失败！"})}})},methods:{reset:function(){return this.mobile?this.checkMobile(this.mobile)?this.password?this.password2?this.password!=this.password2?(uni.showToast({icon:"none",title:"两次密码不一致！"}),!1):this.code?this.code!=this.yzm?(uni.showToast({icon:"none",title:"验证码不正确"}),!1):void uni.request({url:"https://www.hongrensutui.com/api/index/reset",data:{mobile:this.mobile,code:this.yzm,password:this.password},method:"POST",success:function(t){-1==t.data.data.info.code?uni.showToast({icon:"none",title:t.data.data.info.msg}):(uni.setStorageSync("userInfo",t.data.data.info),uni.showToast({icon:"none",title:"密码修改成功！"}),setTimeout((function(){uni.reLaunch({url:"/pages/user/user"})}),1500))}}):(uni.showToast({icon:"none",title:"请输入验证码"}),!1):(uni.showToast({icon:"none",title:"请确认密码！"}),!1):(uni.showToast({icon:"none",title:"请输入密码！"}),!1):(uni.showToast({icon:"none",title:"手机号码不正确！"}),!1):(uni.showToast({icon:"none",title:"请输入手机号码！"}),!1)},wechatLogin:function(t){wxlogin()},checkMobile:function(t){return RegExp(/^1[34578]\d{9}$/).test(t)},codeFun:function(){var t=this;return this.mobile?this.checkMobile(this.mobile)?(this.signbtn=!0,this.codebtn=!0,this.timerInt=setInterval((function(){if(t.codetime--,t.codeText=t.codetime+"s",0==t.codetime)return clearInterval(t.timerInt),t.codetime=60,t.codebtn=!1,void(t.codeText="重新获取")}),1e3),void uni.request({url:"https://www.hongrensutui.com/api/index/verify_code",data:{receiver:this.mobile},method:"POST",success:function(i){0==i.data.data.Code?(uni.showToast({title:"验证码发送失败",icon:"none",duration:3e3}),t.signbtn=!1):(t.yzm=i.data.data.Code,uni.showToast({title:"验证码发送成功",icon:"none",duration:3e3}))}})):(uni.showToast({icon:"none",title:"手机号码不正确！"}),!1):(uni.showToast({icon:"none",title:"手机号码不能为空！"}),!1)},navToDetailPage:function(t,i){i&&(t=t+"?id="+i),uni.navigateTo({url:"/pages/"+t})}}};i.default=n},"83cd":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?e("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[e("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?e("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():e("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?e("span",[t.title?e("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):e("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?e("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img&&1==t.barid?e("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e(),t.img&&1!=t.barid?e("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right2.png"}}):t._e()])])},n=[]},"9b8e":function(t,i,e){"use strict";e.r(i);var a=e("0f5e"),o=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=o.a},a8fe:function(t,i,e){var a=e("1c40");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("7dd7436f",a,!0,{sourceMap:!1,shadowMode:!1})},aa9f:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.auth[data-v-9df7cb58]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-9df7cb58]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-9df7cb58]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-9df7cb58]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-9df7cb58]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-9df7cb58]{height:100vh;z-index:300}.cu-bar[data-v-9df7cb58]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-9df7cb58]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-9df7cb58]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-9df7cb58]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-9df7cb58]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9df7cb58]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9df7cb58]{width:auto}.cuIcon-close[data-v-9df7cb58]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=i},b17d:function(t,i,e){var a=e("aa9f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("2d0d384a",a,!0,{sourceMap:!1,shadowMode:!1})},c0bb:function(t,i,e){"use strict";e.r(i);var a=e("2419"),o=e("2679");for(var n in o)"default"!==n&&function(t){e.d(i,t,(function(){return o[t]}))}(n);e("e244");var s,r=e("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"1df38041",null,!1,a["a"],s);i["default"]=c.exports},c4f3:function(t,i,e){"use strict";var a=e("b17d"),o=e.n(a);o.a},e244:function(t,i,e){"use strict";var a=e("a8fe"),o=e.n(a);o.a},e3d7:function(t,i,e){"use strict";e.r(i);var a=e("83cd"),o=e("9b8e");for(var n in o)"default"!==n&&function(t){e.d(i,t,(function(){return o[t]}))}(n);e("c4f3");var s,r=e("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"9df7cb58",null,!1,a["a"],s);i["default"]=c.exports}}]);