(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-celebrity-speed4"],{"378d":function(t,a,i){"use strict";var e=i("f39f"),n=i.n(e);n.a},"40d4":function(t,a,i){"use strict";var e=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("5ad0")),o={components:{uniTopBar:n.default},data:function(){return{modalName:null,id:"",height:"",toptitle:"红人速配",userInfo:"",btnname:"",addressData:"",tipData:""}},onLoad:function(t){var a=this;this.height=this.StatusBar,a.addressData=JSON.parse(t.addressData),a.tipData=JSON.parse(t.tipData),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.userInfo.mobile?a.btnname="立即速配":a.btnname="下一步 (4/5)"}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.userInfo.mobile?a.btnname="立即速配":a.btnname="下一步 (4/5)"}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?a.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.userInfo.mobile?a.btnname="立即速配":a.btnname="下一步 (4/5)"):wxlogin()}})},objective:function(t,a){this.id=t,this.addressData.fans=t,this.tipData.fans=a},next:function(){var t=this;if(!t.addressData.fans)return uni.showToast({title:"请选择您希望网红的粉丝量？",icon:"none",duration:3e3}),!1;uni.getStorage({key:"userInfo",success:function(a){t.userInfo.mobile?(t.addressData.mobile=t.userInfo.mobile,uni.navigateTo({url:"/pages/celebrity/mate?addressData="+JSON.stringify(t.addressData)+"&tipData="+JSON.stringify(t.tipData)})):uni.navigateTo({url:"/pages/celebrity/speed4?addressData="+JSON.stringify(t.addressData)+"&tipData="+JSON.stringify(t.tipData)})},fail:function(a){t.modalName="login"}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null}}};a.default=o},4674:function(t,a,i){"use strict";i.r(a);var e=i("7137"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"5ad0":function(t,a,i){"use strict";i.r(a);var e=i("8a0d"),n=i("4674");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("378d");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"e4d1a924",null,!1,e["a"],r);a["default"]=d.exports},7137:function(t,a,i){"use strict";i("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=e},7787:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.hongren[data-v-2025660a]{background-image:url(https://www.hongrensutui.com/h5/img/banner_bg.png);background-repeat:no-repeat;background-position:top;background-size:100%;background-color:#fff;bottom:0}.bg-fff[data-v-2025660a]{margin-bottom:0}.cu-bar[data-v-2025660a]{position:static}.nothave[data-v-2025660a]{font-size:3.5vw;padding-bottom:3vw;color:#999}.card[data-v-2025660a]{background-color:#fff;margin:3vw;border-radius:1.5vw}.cu-bar.foot[data-v-2025660a]{z-index:199}.cu-bar.foot[data-v-2025660a]{position:fixed;bottom:0;left:0;right:0;width:100%;height:50px;min-height:50px;z-index:200;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar.foot .text-red[data-v-2025660a]{color:#e71d36}.cu-bar.foot .text-gray[data-v-2025660a]{color:#9eb3c2}.cu-bar.foot.tabbar.shadow[data-v-2025660a]{box-shadow:0 -1px 2px rgba(26,26,26,.1)}uni-button[data-v-2025660a]{border-radius:100vw}.cu-btn[class*="line"][data-v-2025660a]::after{border-radius:100vw}.cardtitle[data-v-2025660a]{text-align:center;padding-top:25px;font-size:5vw;padding-bottom:15px;font-weight:700}.offerbtn[data-v-2025660a]{width:94vw;margin:0 3vw;float:left;height:40px;line-height:40px;text-align:center;background-color:#e71d36;border-radius:40px;color:#fff;margin-top:6vw}.objective[data-v-2025660a]{padding:0 10vw;font-size:4.5vw;height:44px;line-height:44px;color:#ffb759;margin:4vw 3vw;border-radius:20vw;border:#ffb759 1px solid}.objective.active[data-v-2025660a]{color:#fff;background-color:#ffb759}.cu-modal[data-v-2025660a]{z-index:210}.cu-dialog[data-v-2025660a]{background-color:initial;width:100vw;padding:4vw;height:auto}.auth[data-v-2025660a]{padding:6vw;border-radius:1.5vw;background-color:#fff}.auth .vip[data-v-2025660a]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}.auth .pay[data-v-2025660a]{border-radius:1.5vw;border:1px solid #ebebeb;text-align:center;color:#666;height:10vw;line-height:10vw}.auth .title[data-v-2025660a]{color:#333;margin-bottom:4vw}.loginbtn[data-v-2025660a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.loginbtn uni-button[data-v-2025660a]::after{display:none}.loginbtn uni-button[data-v-2025660a]{position:static;display:block;margin-left:0;margin-right:0;padding-left:0;padding-right:0;box-sizing:initial;font-size:3.8vw;text-align:center;text-decoration:none;line-height:7vw;border-radius:1.5vw;-webkit-tap-highlight-color:transparent;overflow:visible;color:#333;background-color:initial;margin-top:3vw}.loginbtn uni-button.login[data-v-2025660a]{color:#39b54a}',""]),t.exports=a},"7d77":function(t,a,i){"use strict";var e=i("9214"),n=i.n(e);n.a},"81c4":function(t,a,i){"use strict";i.r(a);var e=i("40d4"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"8a0d":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])]):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])},o=[]},"8bcf":function(t,a,i){"use strict";i.r(a);var e=i("c36b"),n=i("81c4");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("7d77");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"2025660a",null,!1,e["a"],r);a["default"]=d.exports},9214:function(t,a,i){var e=i("7787");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("76285aef",e,!0,{sourceMap:!1,shadowMode:!1})},c36b:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("uni-top-bar",{attrs:{title:t.toptitle}}),i("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+"px"}},[i("v-uni-view",{staticClass:"card"},[i("v-uni-view",{staticClass:"cardtitle"},[t._v("您希望网红的粉丝量有多少？")]),i("v-uni-view",{staticClass:"objective",class:99==t.id?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.objective(99,"不限")}}},[t._v("不限")]),i("v-uni-view",{staticClass:"objective",class:10==t.id?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.objective(10,"10w以下")}}},[t._v("10w以下")]),i("v-uni-view",{staticClass:"objective",class:100==t.id?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.objective(100,"10w~100w")}}},[t._v("10w~100w")]),i("v-uni-view",{staticClass:"objective",class:500==t.id?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.objective(500,"100w~500w")}}},[t._v("100w~500w")]),i("v-uni-view",{staticClass:"objective",class:1e3==t.id?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.objective(1e3,"500w~1000w")}}},[t._v("500w~1000w")]),i("v-uni-view",{staticClass:"objective",class:1001==t.id?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.objective(1001,"1000w以上")}}},[t._v("1000w以上")])],1),i("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.next.apply(void 0,arguments)}}},[t._v(t._s(t.btnname))])],1),i("v-uni-view",{staticClass:"cu-modal",class:"login"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("请登录后查看！")]),i("v-uni-view",{staticClass:"loginbtn"},[i("v-uni-button",{staticClass:"close",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),i("v-uni-button",{staticClass:"login",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1)},o=[]},ee32:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.cu-bar[data-v-e4d1a924]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-e4d1a924]{margin-left:3vw;height:30px}.cuIcon-back[data-v-e4d1a924]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-e4d1a924]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-e4d1a924]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-e4d1a924]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-e4d1a924]{width:auto}.cuIcon-close[data-v-e4d1a924]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=a},f39f:function(t,a,i){var e=i("ee32");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("7be1ffd1",e,!0,{sourceMap:!1,shadowMode:!1})}}]);