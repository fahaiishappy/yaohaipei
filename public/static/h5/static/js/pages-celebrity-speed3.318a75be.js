(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-celebrity-speed3"],{"0a9c":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px"},attrs:{src:t.within,mode:"heightFix"}}):i("span",[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])])]):i("span",[t.within?i("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},"36a8":function(t,a,i){"use strict";var e=i("875d"),n=i.n(e);n.a},4674:function(t,a,i){"use strict";i.r(a);var e=i("7137"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"5ad0":function(t,a,i){"use strict";i.r(a);var e=i("0a9c"),n=i("4674");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("8234");var r,d=i("f0c5"),s=Object(d["a"])(n["default"],e["b"],e["c"],!1,null,"e6b68380",null,!1,e["a"],r);a["default"]=s.exports},7137:function(t,a,i){"use strict";i("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=e},8234:function(t,a,i){"use strict";var e=i("886b"),n=i.n(e);n.a},"867f":function(t,a,i){"use strict";var e=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("5ad0")),o={components:{uniTopBar:n.default},data:function(){return{modalName:null,id:"",height:"",toptitle:"红人速配",userInfo:"",addressData:"",tipData:"",btnname:"",within:"https://www.hongrensutui.com/h5/img/supei_logo_left.png"}},onLoad:function(t){var a=this;this.height=this.StatusBar,a.addressData=JSON.parse(t.addressData),a.tipData=JSON.parse(t.tipData),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.userInfo.mobile?a.btnname="下一步 (3/4)":a.btnname="下一步 (3/5)"}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.userInfo.mobile?a.btnname="下一步 (3/4)":a.btnname="下一步 (3/5)"}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?a.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.userInfo.mobile?a.btnname="下一步 (3/4)":a.btnname="下一步 (3/5)"):wxlogin()}})},objective:function(t,a){this.id=t,this.addressData.platform=a,this.tipData.platform=a},next:function(){var t=this;if(!t.addressData.platform)return uni.showToast({title:"请选择您希望网红的平台？",icon:"none",duration:3e3}),!1;uni.getStorage({key:"userInfo",success:function(a){3==t.addressData.platform&&(t.addressData.platform=0),uni.navigateTo({url:"/pages/celebrity/speed4?addressData="+JSON.stringify(t.addressData)+"&tipData="+JSON.stringify(t.tipData)})},fail:function(a){t.modalName="login"}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null}}};a.default=o},"875d":function(t,a,i){var e=i("a8ea");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("bfb10146",e,!0,{sourceMap:!1,shadowMode:!1})},"886b":function(t,a,i){var e=i("c170");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("10320662",e,!0,{sourceMap:!1,shadowMode:!1})},a064:function(t,a,i){"use strict";i.r(a);var e=i("867f"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},a870:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("uni-top-bar",{attrs:{title:t.toptitle,within:t.within}}),i("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+"px"}},[i("v-uni-view",{staticClass:"card"},[i("v-uni-view",{staticClass:"cardtitle"},[t._v("您希望网红的平台是？")]),i("v-uni-view",{staticClass:"objective",class:3===t.id?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.objective(3,"不限")}}},[t._v("不限")]),i("v-uni-view",{staticClass:"objective",class:1===t.id?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.objective(1,"抖音")}}},[t._v("抖音")]),i("v-uni-view",{staticClass:"objective",class:2===t.id?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.objective(2,"快手")}}},[t._v("快手")])],1),i("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.next.apply(void 0,arguments)}}},[t._v(t._s(t.btnname))])],1),i("v-uni-view",{staticClass:"cu-modal",class:"login"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("请登录后查看！")]),i("v-uni-view",{staticClass:"loginbtn"},[i("v-uni-button",{staticClass:"close",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),i("v-uni-button",{staticClass:"login",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1)},o=[]},a8ea:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.hongren[data-v-6d67564f]{background-image:url(https://www.hongrensutui.com/h5/img/banner_bg.png);background-repeat:no-repeat;background-position:top;background-size:100%;background-color:#fff;bottom:0}.bg-fff[data-v-6d67564f]{margin-bottom:0}.cu-bar[data-v-6d67564f]{position:static}.nothave[data-v-6d67564f]{font-size:3.5vw;padding-bottom:3vw;color:#999}.card[data-v-6d67564f]{background-color:#fff;margin:3vw;-webkit-border-radius:1.5vw;border-radius:1.5vw}.cu-bar.foot[data-v-6d67564f]{z-index:199}.cu-bar.foot[data-v-6d67564f]{position:fixed;bottom:0;left:0;right:0;width:100%;height:50px;min-height:50px;z-index:200;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar.foot .text-red[data-v-6d67564f]{color:#e71d36}.cu-bar.foot .text-gray[data-v-6d67564f]{color:#9eb3c2}.cu-bar.foot.tabbar.shadow[data-v-6d67564f]{-webkit-box-shadow:0 -1px 2px rgba(26,26,26,.1);box-shadow:0 -1px 2px rgba(26,26,26,.1)}uni-button[data-v-6d67564f]{-webkit-border-radius:100vw;border-radius:100vw}.cu-btn[class*="line"][data-v-6d67564f]::after{-webkit-border-radius:100vw;border-radius:100vw}.cardtitle[data-v-6d67564f]{text-align:center;padding-top:25px;font-size:5vw;padding-bottom:15px;font-weight:700}.objective[data-v-6d67564f]{padding:0 10vw;font-size:4.5vw;height:44px;line-height:44px;color:#ffb759;margin:4vw 3vw;-webkit-border-radius:20vw;border-radius:20vw;border:#ffb759 1px solid}.objective.active[data-v-6d67564f]{color:#fff;background-color:#ffb759}.offerbtn[data-v-6d67564f]{width:94vw;margin:0 3vw;float:left;height:40px;line-height:40px;text-align:center;background-color:#e71d36;-webkit-border-radius:40px;border-radius:40px;color:#fff;margin-top:6vw}.cu-modal[data-v-6d67564f]{z-index:210}.cu-dialog[data-v-6d67564f]{background-color:transparent;width:100vw;padding:4vw;height:auto}.auth[data-v-6d67564f]{padding:6vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;background-color:#fff}.auth .vip[data-v-6d67564f]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;-webkit-border-radius:1.5vw;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}.auth .pay[data-v-6d67564f]{-webkit-border-radius:1.5vw;border-radius:1.5vw;border:1px solid #ebebeb;text-align:center;color:#666;height:10vw;line-height:10vw}.auth .title[data-v-6d67564f]{color:#333;margin-bottom:4vw}.loginbtn[data-v-6d67564f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.loginbtn uni-button[data-v-6d67564f]::after{display:none}.loginbtn uni-button[data-v-6d67564f]{position:static;display:block;margin-left:0;margin-right:0;padding-left:0;padding-right:0;-webkit-box-sizing:content-box;box-sizing:content-box;font-size:3.8vw;text-align:center;text-decoration:none;line-height:7vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;-webkit-tap-highlight-color:transparent;overflow:visible;color:#333;background-color:transparent;margin-top:3vw}.loginbtn uni-button.login[data-v-6d67564f]{color:#39b54a}',""]),t.exports=a},c170:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.cu-bar[data-v-e6b68380]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-e6b68380]{margin-left:3vw;height:30px}.cuIcon-back[data-v-e6b68380]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-e6b68380]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-e6b68380]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-e6b68380]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-e6b68380]{width:auto}.cuIcon-close[data-v-e6b68380]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=a},c3fa:function(t,a,i){"use strict";i.r(a);var e=i("a870"),n=i("a064");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("36a8");var r,d=i("f0c5"),s=Object(d["a"])(n["default"],e["b"],e["c"],!1,null,"6d67564f",null,!1,e["a"],r);a["default"]=s.exports}}]);