(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-celebrity-speed2"],{1789:function(t,a,e){var i=e("6b6e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("2282433f",i,!0,{sourceMap:!1,shadowMode:!1})},"436c":function(t,a,e){"use strict";e.r(a);var i=e("583b"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},4674:function(t,a,e){"use strict";e.r(a);var i=e("7137"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"4ddb":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("uni-top-bar",{attrs:{title:t.toptitle,within:t.within}}),e("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+"px"}},[e("v-uni-view",{staticClass:"card"},[e("v-uni-view",{staticClass:"cardtitle"},[t._v("您希望网红的性别是？")]),e("v-uni-view",{staticClass:"objective",class:3===t.id?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.objective(3,"不限")}}},[t._v("不限")]),e("v-uni-view",{staticClass:"objective",class:1===t.id?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.objective(1,"男")}}},[t._v("男")]),e("v-uni-view",{staticClass:"objective",class:2===t.id?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.objective(2,"女")}}},[t._v("女")])],1),e("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.next.apply(void 0,arguments)}}},[t._v(t._s(t.btnname))])],1),e("v-uni-view",{staticClass:"cu-modal",class:"login"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"auth"},[e("v-uni-view",{staticClass:"title"},[t._v("请登录后查看！")]),e("v-uni-view",{staticClass:"loginbtn"},[e("v-uni-button",{staticClass:"close",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),e("v-uni-button",{staticClass:"login",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1)},o=[]},"583b":function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("5ad0")),o={components:{uniTopBar:n.default},data:function(){return{modalName:null,id:"",height:"",toptitle:"红人速配",userInfo:"",addressData:"",tipData:"",btnname:"",within:"https://www.hongrensutui.com/h5/img/supei_logo_left.png"}},onLoad:function(t){var a=this;this.height=this.StatusBar,a.addressData=JSON.parse(t.addressData),a.tipData=JSON.parse(t.tipData),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.userInfo.mobile?a.btnname="下一步 (2/4)":a.btnname="下一步 (2/5)"}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.userInfo.mobile?a.btnname="下一步 (2/4)":a.btnname="下一步 (2/5)"}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?a.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.userInfo.mobile?a.btnname="下一步 (2/4)":a.btnname="下一步 (2/5)"):wxlogin()}})},objective:function(t,a){this.id=t,this.addressData.sex=t,this.tipData.sex=a},next:function(){var t=this;if(!t.addressData.sex)return uni.showToast({title:"请选择您希望网红的性别？",icon:"none",duration:3e3}),!1;uni.getStorage({key:"userInfo",success:function(a){3==t.addressData.sex&&(t.addressData.sex=0),uni.navigateTo({url:"/pages/celebrity/speed3?addressData="+JSON.stringify(t.addressData)+"&tipData="+JSON.stringify(t.tipData)})},fail:function(a){t.modalName="login"}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null}}};a.default=o},"5ad0":function(t,a,e){"use strict";e.r(a);var i=e("6004"),n=e("4674");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("a6c7");var r,c=e("f0c5"),s=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"dca053c4",null,!1,i["a"],r);a["default"]=s.exports},6004:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?e("span",{staticClass:"clearfix"},[t.within?e("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):e("span",[t.title?e("span",{staticClass:"title"},[t._v(t._s(t.title))]):e("span",{staticClass:"title"},[t._v("红人速推")])])]):e("span",[t.within?e("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},"6b6e":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.hongren[data-v-19f9becc]{background-image:url(https://www.hongrensutui.com/h5/img/banner_bg.png);background-repeat:no-repeat;background-position:top;background-size:100%;background-color:#fff;bottom:0}.bg-fff[data-v-19f9becc]{margin-bottom:0}.cu-bar[data-v-19f9becc]{position:static}.nothave[data-v-19f9becc]{font-size:3.5vw;padding-bottom:3vw;color:#999}.card[data-v-19f9becc]{background-color:#fff;margin:3vw;-webkit-border-radius:1.5vw;border-radius:1.5vw}.cu-bar.foot[data-v-19f9becc]{z-index:199}.cu-bar.foot[data-v-19f9becc]{position:fixed;bottom:0;left:0;right:0;width:100%;height:50px;min-height:50px;z-index:200;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar.foot .text-red[data-v-19f9becc]{color:#e71d36}.cu-bar.foot .text-gray[data-v-19f9becc]{color:#9eb3c2}.cu-bar.foot.tabbar.shadow[data-v-19f9becc]{-webkit-box-shadow:0 -1px 2px rgba(26,26,26,.1);box-shadow:0 -1px 2px rgba(26,26,26,.1)}uni-button[data-v-19f9becc]{-webkit-border-radius:100vw;border-radius:100vw}.cu-btn[class*="line"][data-v-19f9becc]::after{-webkit-border-radius:100vw;border-radius:100vw}.cardtitle[data-v-19f9becc]{text-align:center;padding-top:25px;font-size:5vw;padding-bottom:15px;font-weight:700}.objective[data-v-19f9becc]{padding:0 10vw;font-size:4.5vw;height:44px;line-height:44px;color:#ffb759;margin:4vw 3vw;-webkit-border-radius:20vw;border-radius:20vw;border:#ffb759 1px solid}.objective.active[data-v-19f9becc]{color:#fff;background-color:#ffb759}.offerbtn[data-v-19f9becc]{width:94vw;margin:0 3vw;float:left;height:40px;line-height:40px;text-align:center;background-color:#e71d36;-webkit-border-radius:40px;border-radius:40px;color:#fff;margin-top:6vw}.cu-modal[data-v-19f9becc]{z-index:210}.cu-dialog[data-v-19f9becc]{background-color:transparent;width:100vw;padding:4vw;height:auto}.auth[data-v-19f9becc]{padding:6vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;background-color:#fff}.auth .vip[data-v-19f9becc]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;-webkit-border-radius:1.5vw;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}.auth .pay[data-v-19f9becc]{-webkit-border-radius:1.5vw;border-radius:1.5vw;border:1px solid #ebebeb;text-align:center;color:#666;height:10vw;line-height:10vw}.auth .title[data-v-19f9becc]{color:#333;margin-bottom:4vw}.loginbtn[data-v-19f9becc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.loginbtn uni-button[data-v-19f9becc]::after{display:none}.loginbtn uni-button[data-v-19f9becc]{position:static;display:block;margin-left:0;margin-right:0;padding-left:0;padding-right:0;-webkit-box-sizing:content-box;box-sizing:content-box;font-size:3.8vw;text-align:center;text-decoration:none;line-height:7vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;-webkit-tap-highlight-color:transparent;overflow:visible;color:#333;background-color:transparent;margin-top:3vw}.loginbtn uni-button.login[data-v-19f9becc]{color:#39b54a}',""]),t.exports=a},7137:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=i},"847d":function(t,a,e){"use strict";e.r(a);var i=e("4ddb"),n=e("436c");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("bbab");var r,c=e("f0c5"),s=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"19f9becc",null,!1,i["a"],r);a["default"]=s.exports},a6c7:function(t,a,e){"use strict";var i=e("b8ec"),n=e.n(i);n.a},b8ec:function(t,a,e){var i=e("d99c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("119d75aa",i,!0,{sourceMap:!1,shadowMode:!1})},bbab:function(t,a,e){"use strict";var i=e("1789"),n=e.n(i);n.a},d99c:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.cu-bar[data-v-dca053c4]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-dca053c4]{margin-left:3vw;height:30px}.cuIcon-back[data-v-dca053c4]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-dca053c4]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-dca053c4]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-dca053c4]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-dca053c4]{width:auto}.cuIcon-close[data-v-dca053c4]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=a}}]);