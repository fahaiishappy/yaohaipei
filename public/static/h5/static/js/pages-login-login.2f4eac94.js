(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0380":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return e}));var o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("uni-top-bar"),i("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[i("v-uni-view",{staticClass:"jurisdiction"},[t._v("申请获得以下权限")]),i("v-uni-view",{staticClass:"information"},[t._v("获得你的公开信息(昵称，头像等)")]),i("v-uni-view",{staticClass:"login",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.wechatLogin.apply(void 0,arguments)}}},[t._v("授权登录")])],1)],1)},a=[]},"0f38":function(t,n,i){"use strict";var e=i("af94"),o=i.n(e);o.a},"112c":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return e}));var o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?i("span",[t.title?i("span",{style:{marginLeft:"44px",color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):i("span",{style:{marginLeft:"44px",color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])},a=[]},4674:function(t,n,i){"use strict";i.r(n);var e=i("7137"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},"5ad0":function(t,n,i){"use strict";i.r(n);var e=i("112c"),o=i("4674");for(var a in o)"default"!==a&&function(t){i.d(n,t,(function(){return o[t]}))}(a);i("f3c9");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"78366bab",null,!1,e["a"],r);n["default"]=u.exports},7137:function(t,n,i){"use strict";i("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};n.default=e},"8b55":function(t,n,i){"use strict";i.r(n);var e=i("d2c4"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},"9ebb":function(t,n,i){var e=i("cf7f");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("6346ab16",e,!0,{sourceMap:!1,shadowMode:!1})},a5fc:function(t,n,i){"use strict";i.r(n);var e=i("0380"),o=i("8b55");for(var a in o)"default"!==a&&function(t){i.d(n,t,(function(){return o[t]}))}(a);i("0f38");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"fb3a3294",null,!1,e["a"],r);n["default"]=u.exports},af94:function(t,n,i){var e=i("c225");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("6dfb1c1f",e,!0,{sourceMap:!1,shadowMode:!1})},c225:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".hongren[data-v-fb3a3294]{bottom:0}.title[data-v-fb3a3294]{width:100%;line-height:12vw;text-align:center;color:#fff;background-color:#e71d36;font-size:4vw}.jurisdiction[data-v-fb3a3294]{font-size:4.5vw;color:#333;margin-left:20vw;margin-top:20vw}.information[data-v-fb3a3294]{padding:3vw 0;font-size:3.8vw;color:#999;margin-left:20vw}.login[data-v-fb3a3294]{border-radius:15vw;line-height:12vw;text-align:center;color:#fff;background-color:#1aac19;margin:15vw}\n/* .cu-avatar{\n\tbackground-color: transparent;\n}\n.cu-form-group .title{\n\twidth: 20vw;\n}\n.switch{\n\theight: 14vw;\n\ttext-align: right;\n\tpadding: 4vw;\n}\n.logo{\n\tmargin-top: 10vw;\n\twidth: 100vw;\n\tpadding: 3vw;\n\ttext-align: center;\n}\n.logo img{\n\twidth: 25vw;\n\theight: 25vw;\n\tborder-radius: 1.5vw;\n}\n.cu-form-group.tip{\n\tdisplay: block;\n\tmin-height: auto;\n}\n.cu-form-group.tip .text-grey{\n\tpadding-top: 3vw;\n}\n.platform_list{\n\tpadding: 0 3vw;\n\tmargin: 4vw 0;\n}\n.platform_list .list .edit{\n\tposition: absolute;\n\tright: -3vw;\n\tpadding-right: 6vw;\n\ttop: 50%;\n\tmargin-top: -12px;\n}\n.platform_list .list{\n\tposition: relative;\n\toverflow: hidden;\n\tborder-radius: 2vw;\n\tbox-shadow: 1px 1px 2px rgba(230, 57, 70, 0.1);\n\tpadding: 4vw 3vw;\n\tbackground: #fff;\n}\n.code{\n\twidth: 20vw;\n\tfont-size: 3.5vw;\n\tpadding: 0;\n} */",""]),t.exports=n},cf7f:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'.cu-bar[data-v-78366bab]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-78366bab]{margin-left:3vw;height:30px}.cuIcon-back[data-v-78366bab]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-78366bab]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-78366bab]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-78366bab]{width:auto}.cuIcon-close[data-v-78366bab]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=n},d2c4:function(t,n,i){"use strict";var e=i("4ea4");i("4d63"),i("ac1f"),i("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(i("5ad0")),a={components:{uniTopBar:o.default},data:function(){return{signbtn:!1,codebtn:!1,codetime:60,codeText:"验证码",user:"",mobile:"",yzm:"",code:"",password:"",height:""}},onLoad:function(t){var n=this;this.height=this.StatusBar,"undefined"!=typeof t.code&&uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){n.user=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),uni.showToast({icon:"none",title:"登录成功！"}),setTimeout((function(){uni.reLaunch({url:"/pages/user/user"})}),1500)},error:function(t){uni.showToast({icon:"none",title:"授权登录失败！"})}})},methods:{sign:function(){if(this.signswitch){if(!this.mobile)return uni.showToast({icon:"none",title:"请输入手机号码！"}),!1;if(!this.checkMobile(this.mobile))return uni.showToast({icon:"none",title:"手机号码不正确！"}),!1;if(!this.password)return uni.showToast({icon:"none",title:"请输入密码！"}),!1;uni.request({url:"https://www.hongrensutui.com/api/index/sign",data:{mobile:this.mobile,code:"",password:this.password},method:"POST",success:function(t){-1==t.data.data.info.code?uni.showToast({icon:"none",title:t.data.data.info.msg}):(uni.setStorageSync("userInfo",t.data.data.info),uni.showToast({icon:"none",title:"登录成功！"}),setTimeout((function(){uni.reLaunch({url:"/pages/user/user"})}),1500))}})}else{if(!this.mobile)return uni.showToast({icon:"none",title:"请输入手机号码！"}),!1;if(!this.checkMobile(this.mobile))return uni.showToast({icon:"none",title:"手机号码不正确！"}),!1;if(!this.code)return uni.showToast({icon:"none",title:"请输入验证码"}),!1;if(this.code!=this.yzm)return uni.showToast({icon:"none",title:"验证码不正确"}),!1;uni.request({url:"https://www.hongrensutui.com/api/index/sign",data:{mobile:this.mobile,code:this.code,password:""},method:"POST",success:function(t){-1==t.data.data.info.code?uni.showToast({icon:"none",title:t.data.data.info.msg}):(uni.setStorageSync("userInfo",t.data.data.info),uni.showToast({icon:"none",title:"登录成功！"}),setTimeout((function(){uni.navigateBack()}),1500))}})}},wechatLogin:function(t){wxlogin()},checkMobile:function(t){return RegExp(/^1[34578]\d{9}$/).test(t)},codeFun:function(){var t=this;return this.mobile?this.checkMobile(this.mobile)?(this.signbtn=!0,this.codebtn=!0,this.timerInt=setInterval((function(){if(t.codetime--,t.codeText=t.codetime+"s",0==t.codetime)return clearInterval(t.timerInt),t.codetime=60,t.codebtn=!1,void(t.codeText="重新获取")}),1e3),void uni.request({url:"https://www.hongrensutui.com/api/index/verify_code",data:{receiver:this.mobile},method:"POST",success:function(n){0==n.data.data.Code?(uni.showToast({title:"验证码发送失败",icon:"none",duration:3e3}),t.signbtn=!1):(t.yzm=n.data.data.Code,uni.showToast({title:"验证码发送成功",icon:"none",duration:3e3}))}})):(uni.showToast({icon:"none",title:"手机号码不正确！"}),!1):(uni.showToast({icon:"none",title:"手机号码不能为空！"}),!1)},navToDetailPage:function(t,n){n&&(t=t+"?id="+n),uni.navigateTo({url:"/pages/"+t})}}};n.default=a},f3c9:function(t,n,i){"use strict";var e=i("9ebb"),o=i.n(e);o.a}}]);