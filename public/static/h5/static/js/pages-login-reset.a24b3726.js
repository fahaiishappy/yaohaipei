(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-reset"],{"05e7":function(t,i,e){"use strict";e.r(i);var a=e("cb94"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"128f":function(t,i,e){"use strict";e.r(i);var a=e("9ea9"),n=e("1e08");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("c18f");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"07edaae6",null,!1,a["a"],s);i["default"]=c.exports},"1e08":function(t,i,e){"use strict";e.r(i);var a=e("3006"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},3006:function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};i.default=a},5092:function(t,i,e){var a=e("f85e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("136b6bf4",a,!0,{sourceMap:!1,shadowMode:!1})},"5e20":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=i},"8af9":function(t,i,e){"use strict";var a=e("5092"),n=e.n(a);n.a},"9ea9":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?e("span",{staticClass:"clearfix"},[t.within?e("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):e("span",[t.title?e("span",{staticClass:"title"},[t._v(t._s(t.title))]):e("span",{staticClass:"title"},[t._v("红人速推")])])]):e("span",[t.within?e("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},a191:function(t,i,e){"use strict";e.r(i);var a=e("ba11"),n=e("05e7");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("8af9");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"62fea299",null,!1,a["a"],s);i["default"]=c.exports},b338:function(t,i,e){var a=e("5e20");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("91297c2c",a,!0,{sourceMap:!1,shadowMode:!1})},ba11:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("uni-top-bar"),e("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[e("v-uni-view",{staticClass:"switch"}),e("v-uni-view",{staticClass:"logo"},[e("img",{attrs:{src:"https://www.hongrensutui.com/h5/img/logo.png",mode:"widthFix"}})]),e("v-uni-view",{staticClass:"platform_list clearfix"},[e("v-uni-view",{staticClass:"list clearfix"},[e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("手机号码")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号码",disabled:t.signbtn},model:{value:t.mobile,callback:function(i){t.mobile=i},expression:"mobile"}}),e("uni-text",{staticClass:"cuIcon-mobile text-gray",attrs:{"data-v-1c80394c":""}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("验证码")]),e("v-uni-input",{attrs:{type:"number",placeholder:"清输入验证码"},model:{value:t.code,callback:function(i){t.code=i},expression:"code"}}),e("v-uni-button",{staticClass:"cu-btn bg-green shadow code",attrs:{disabled:t.codebtn},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.codeFun.apply(void 0,arguments)}}},[t._v(t._s(t.codeText))])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("登录密码")]),e("v-uni-input",{attrs:{type:"password",placeholder:"请输入登录密码"},model:{value:t.password,callback:function(i){t.password=i},expression:"password"}}),e("uni-text",{staticClass:"cuIcon-lock text-gray",attrs:{"data-v-1c80394c":""}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("确认密码")]),e("v-uni-input",{attrs:{type:"password",placeholder:"请确认登录密码"},model:{value:t.password2,callback:function(i){t.password2=i},expression:"password2"}}),e("uni-text",{staticClass:"cuIcon-lock text-gray",attrs:{"data-v-1c80394c":""}})],1),e("v-uni-view",{staticClass:"cu-form-group tip"},[e("v-uni-view",{staticClass:"flex justify-between"},[e("v-uni-view",{staticClass:"text-grey",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage("login/login")}}},[t._v("登录")]),e("v-uni-view",{staticClass:"text-grey",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage("login/reset")}}},[t._v("忘记密码")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"padding-xl"},[e("v-uni-button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.reset.apply(void 0,arguments)}}},[t._v("重置密码")])],1),e("v-uni-view",{staticClass:"flex padding justify-center"},[e("v-uni-view",{staticClass:"padding-sm margin-xs",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.wechatLogin.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-avatar lg round",staticStyle:{"background-image":"url(https://www.hongrensutui.com/h5/img/weixin.png)"}})],1)],1)],1)],1)},o=[]},c18f:function(t,i,e){"use strict";var a=e("b338"),n=e.n(a);n.a},cb94:function(t,i,e){"use strict";var a=e("4ea4");e("4d63"),e("ac1f"),e("25f0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("128f")),o={components:{uniTopBar:n.default},data:function(){return{signbtn:!1,codebtn:!1,codetime:60,codeText:"验证码",user:"",mobile:"",yzm:"",code:"",password:"",height:""}},onLoad:function(t){this.height=this.StatusBar,"undefined"!=typeof t.code&&uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),uni.showToast({icon:"none",title:"登录成功！"}),setTimeout((function(){uni.reLaunch({url:"/pages/user/user"})}),1500)},error:function(t){uni.showToast({icon:"none",title:"授权登录失败！"})}})},methods:{reset:function(){return this.mobile?this.checkMobile(this.mobile)?this.password?this.password2?this.password!=this.password2?(uni.showToast({icon:"none",title:"两次密码不一致！"}),!1):this.code?this.code!=this.yzm?(uni.showToast({icon:"none",title:"验证码不正确"}),!1):void uni.request({url:"https://www.hongrensutui.com/api/index/reset",data:{mobile:this.mobile,code:this.yzm,password:this.password},method:"POST",success:function(t){-1==t.data.data.info.code?uni.showToast({icon:"none",title:t.data.data.info.msg}):(uni.setStorageSync("userInfo",t.data.data.info),uni.showToast({icon:"none",title:"密码修改成功！"}),setTimeout((function(){uni.reLaunch({url:"/pages/user/user"})}),1500))}}):(uni.showToast({icon:"none",title:"请输入验证码"}),!1):(uni.showToast({icon:"none",title:"请确认密码！"}),!1):(uni.showToast({icon:"none",title:"请输入密码！"}),!1):(uni.showToast({icon:"none",title:"手机号码不正确！"}),!1):(uni.showToast({icon:"none",title:"请输入手机号码！"}),!1)},wechatLogin:function(t){wxlogin()},checkMobile:function(t){return RegExp(/^1[35789]\d{9}$/).test(t)},codeFun:function(){var t=this;return this.mobile?this.checkMobile(this.mobile)?(this.signbtn=!0,this.codebtn=!0,this.timerInt=setInterval((function(){if(t.codetime--,t.codeText=t.codetime+"s",0==t.codetime)return clearInterval(t.timerInt),t.codetime=60,t.codebtn=!1,void(t.codeText="重新获取")}),1e3),void uni.request({url:"https://www.hongrensutui.com/api/index/verify_code",data:{receiver:this.mobile},method:"POST",success:function(i){0==i.data.data.Code?(uni.showToast({title:"验证码发送失败",icon:"none",duration:3e3}),t.signbtn=!1):(t.yzm=i.data.data.Code,uni.showToast({title:"验证码发送成功",icon:"none",duration:3e3}))}})):(uni.showToast({icon:"none",title:"手机号码不正确！"}),!1):(uni.showToast({icon:"none",title:"手机号码不能为空！"}),!1)},navToDetailPage:function(t,i){i&&(t=t+"?id="+i),uni.navigateTo({url:"/pages/"+t})}}};i.default=o},f85e:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".hongren[data-v-62fea299]{bottom:0}.cu-avatar[data-v-62fea299]{background-color:transparent}.cu-form-group .title[data-v-62fea299]{width:20vw}.switch[data-v-62fea299]{height:14vw;text-align:right;padding:4vw}.logo[data-v-62fea299]{\n\t/* margin-top: 10vw; */width:100vw;padding:3vw;text-align:center}.logo img[data-v-62fea299]{width:25vw;height:25vw;-webkit-border-radius:1.5vw;border-radius:1.5vw}.cu-form-group.tip[data-v-62fea299]{display:block;min-height:auto}.cu-form-group.tip .text-grey[data-v-62fea299]{padding-top:3vw}.platform_list[data-v-62fea299]{padding:0 3vw;margin:4vw 0}.platform_list .list .edit[data-v-62fea299]{position:absolute;right:-3vw;padding-right:6vw;top:50%;margin-top:-12px}.platform_list .list[data-v-62fea299]{position:relative;overflow:hidden;-webkit-border-radius:2vw;border-radius:2vw;-webkit-box-shadow:1px 1px 2px rgba(230,57,70,.1);box-shadow:1px 1px 2px rgba(230,57,70,.1);padding:4vw 3vw;background:#fff}.code[data-v-62fea299]{width:20vw;font-size:3.5vw;padding:0}",""]),t.exports=i}}]);