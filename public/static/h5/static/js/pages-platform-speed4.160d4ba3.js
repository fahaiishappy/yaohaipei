(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-platform-speed4"],{"0119":function(t,a,i){"use strict";var e,o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[i("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?i("span",[t.title?i("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):i("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?i("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img&&1==t.barid?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e(),t.img&&1!=t.barid?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right2.png"}}):t._e()])])},n=[];i.d(a,"b",(function(){return o})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){return e}))},"04ca":function(t,a,i){"use strict";var e=i("8256"),o=i.n(e);o.a},"107e":function(t,a,i){"use strict";i.r(a);var e=i("39b9"),o=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(a,t,(function(){return e[t]}))}(n);a["default"]=o.a},1534:function(t,a,i){"use strict";(function(t){var e=i("ee27");i("4d63"),i("ac1f"),i("25f0"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=e(i("d654")),n={components:{uniTopBar:o.default},data:function(){return{modalName:null,id:"",height:"",toptitle:"红人速配",userInfo:"",addressData:[],signbtn:!1,codebtn:!1,codetime:60,codeText:"验证码",user:"",mobile:"",yzm:"",code:""}},onLoad:function(a){var i=this;this.height=this.StatusBar,i.addressData=JSON.parse(a.addressData),t("log",i.addressData," at pages/platform/speed4.vue:73"),a.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",a.invite)),a.code?uni.getStorage({key:"invite",success:function(t){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:a.code,invite:t.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),i.userInfo=t.data.data.info}})},fail:function(t){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:a.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),i.userInfo=t.data.data.info}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?i.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info):wxlogin()}})},objective:function(t,a){this.id=t,this.addressData.cooperation=a},next:function(){var t=this;return t.mobile?t.checkMobile(t.mobile)?void uni.getStorage({key:"userInfo",success:function(a){t.addressData.mobile=t.mobile,uni.navigateTo({url:"/pages/platform/mate?addressData="+JSON.stringify(t.addressData)})},fail:function(a){t.modalName="login"}}):(uni.showToast({icon:"none",title:"手机号码不正确！"}),!1):(uni.showToast({icon:"none",title:"请输入手机号码！"}),!1)},checkMobile:function(t){return RegExp(/^1[34578]\d{9}$/).test(t)},codeFun:function(){var t=this;return this.mobile?this.checkMobile(this.mobile)?(this.signbtn=!0,this.codebtn=!0,this.timerInt=setInterval((function(){if(t.codetime--,t.codeText=t.codetime+"s",0==t.codetime)return clearInterval(t.timerInt),t.codetime=60,t.codebtn=!1,void(t.codeText="重新获取")}),1e3),void uni.request({url:"https://www.hongrensutui.com/api/index/verify_code",data:{receiver:this.mobile},method:"POST",success:function(a){0==a.data.data.Code?(uni.showToast({title:"验证码发送失败",icon:"none",duration:3e3}),t.signbtn=!1):(t.yzm=a.data.data.Code,uni.showToast({title:"验证码发送成功",icon:"none",duration:3e3}))}})):(uni.showToast({icon:"none",title:"手机号码不正确！"}),!1):(uni.showToast({icon:"none",title:"手机号码不能为空！"}),!1)},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null}}};a.default=n}).call(this,i("0de9")["log"])},2869:function(t,a,i){"use strict";i.r(a);var e=i("e150"),o=i("f20a");for(var n in o)"default"!==n&&function(t){i.d(a,t,(function(){return o[t]}))}(n);i("a641");var r,s=i("f0c5"),d=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"68ea8010",null,!1,e["a"],r);a["default"]=d.exports},"29de":function(t,a,i){var e=i("aaec");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("268ef824",e,!0,{sourceMap:!1,shadowMode:!1})},"39b9":function(t,a,i){"use strict";i("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=e},8256:function(t,a,i){var e=i("850b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("3c3c30eb",e,!0,{sourceMap:!1,shadowMode:!1})},"850b":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.auth[data-v-9df7cb58]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-9df7cb58]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-9df7cb58]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-9df7cb58]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-9df7cb58]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-9df7cb58]{height:100vh;z-index:300}.cu-bar[data-v-9df7cb58]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-9df7cb58]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-9df7cb58]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-9df7cb58]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-9df7cb58]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9df7cb58]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9df7cb58]{width:auto}.cuIcon-close[data-v-9df7cb58]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=a},a641:function(t,a,i){"use strict";var e=i("29de"),o=i.n(e);o.a},aaec:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.hongren[data-v-68ea8010]{background-image:url(https://www.hongrensutui.com/h5/img/banner_bg.png);background-repeat:no-repeat;background-position:top;background-size:100%;background-color:#fff;bottom:0}.bg-fff[data-v-68ea8010]{margin-bottom:0}.cu-bar[data-v-68ea8010]{position:static}.nothave[data-v-68ea8010]{font-size:3.5vw;padding-bottom:3vw;color:#999}.card[data-v-68ea8010]{background-color:#fff;margin:3vw;border-radius:1.5vw;padding:0 3vw}.cu-bar.foot[data-v-68ea8010]{z-index:199}.cu-bar.foot[data-v-68ea8010]{position:fixed;bottom:0;left:0;right:0;width:100%;height:50px;min-height:50px;z-index:200;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar.foot .text-red[data-v-68ea8010]{color:#e71d36}.cu-bar.foot .text-gray[data-v-68ea8010]{color:#9eb3c2}.cu-bar.foot.tabbar.shadow[data-v-68ea8010]{box-shadow:0 -1px 2px rgba(26,26,26,.1)}uni-button[data-v-68ea8010]{border-radius:100vw}.cu-btn[class*="line"][data-v-68ea8010]::after{border-radius:100vw}.cardtitle[data-v-68ea8010]{text-align:center;padding-top:25px;font-size:5vw;padding-bottom:15px;font-weight:700}.cu-form-group .title[data-v-68ea8010]{width:20vw}.mobilecard[data-v-68ea8010]{box-shadow:0 1px 2px rgba(26,26,26,.1)}.offerbtn[data-v-68ea8010]{width:94vw;margin:0 3vw;float:left;height:40px;line-height:40px;text-align:center;background-color:#e71d36;border-radius:40px;color:#fff;position:absolute;\nbottom:100px;\n}.cu-modal[data-v-68ea8010]{z-index:210}.cu-dialog[data-v-68ea8010]{background-color:initial;width:100vw;padding:4vw;height:auto}.auth[data-v-68ea8010]{padding:6vw;border-radius:1.5vw;background-color:#fff}.auth .vip[data-v-68ea8010]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}.auth .pay[data-v-68ea8010]{border-radius:1.5vw;border:1px solid #ebebeb;text-align:center;color:#666;height:10vw;line-height:10vw}.auth .title[data-v-68ea8010]{color:#333;margin-bottom:4vw}.loginbtn[data-v-68ea8010]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.loginbtn uni-button[data-v-68ea8010]::after{display:none}.loginbtn uni-button[data-v-68ea8010]{position:static;display:block;margin-left:0;margin-right:0;padding-left:0;padding-right:0;box-sizing:initial;font-size:3.8vw;text-align:center;text-decoration:none;line-height:7vw;border-radius:1.5vw;-webkit-tap-highlight-color:transparent;overflow:visible;color:#333;background-color:initial;margin-top:3vw}.loginbtn uni-button.login[data-v-68ea8010]{color:#39b54a}',""]),t.exports=a},d654:function(t,a,i){"use strict";i.r(a);var e=i("0119"),o=i("107e");for(var n in o)"default"!==n&&function(t){i.d(a,t,(function(){return o[t]}))}(n);i("04ca");var r,s=i("f0c5"),d=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"9df7cb58",null,!1,e["a"],r);a["default"]=d.exports},e150:function(t,a,i){"use strict";var e,o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("uni-top-bar",{attrs:{title:t.toptitle}}),i("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+"px"}},[i("v-uni-view",{staticClass:"card"},[i("v-uni-view",{staticClass:"cardtitle"},[t._v("最后一步啦，填手机号查看结果")]),i("v-uni-view",{staticClass:"mobilecard"},[i("v-uni-view",{staticClass:"cu-form-group",staticStyle:{"margin-top":"30vw"}},[i("v-uni-view",{staticClass:"title"},[t._v("手机号码")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号码",disabled:t.signbtn},model:{value:t.mobile,callback:function(a){t.mobile=a},expression:"mobile"}}),i("uni-text",{staticClass:"cuIcon-mobile text-gray",attrs:{"data-v-1c80394c":""}})],1)],1)],1),i("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.next.apply(void 0,arguments)}}},[t._v(t._s(t.btnname))])],1),i("v-uni-view",{staticClass:"cu-modal",class:"login"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("请登录后查看！")]),i("v-uni-view",{staticClass:"loginbtn"},[i("v-uni-button",{staticClass:"close",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),i("v-uni-button",{staticClass:"login",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1)},n=[];i.d(a,"b",(function(){return o})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){return e}))},f20a:function(t,a,i){"use strict";i.r(a);var e=i("1534"),o=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(a,t,(function(){return e[t]}))}(n);a["default"]=o.a}}]);