(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-celebrity-speed2"],{"13d1":function(t,a,e){"use strict";e.r(a);var i=e("f394"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"1fa5":function(t,a,e){"use strict";e.r(a);var i=e("8043"),n=e("13d1");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("e8da");var s,u=e("f0c5"),c=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"07edaae6",null,!1,i["a"],s);a["default"]=c.exports},"4b9c":function(t,a,e){"use strict";e.r(a);var i=e("ee59"),n=e("4ca9");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);var s,u=e("f0c5"),c=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"48517479",null,!1,i["a"],s);a["default"]=c.exports},"4ca9":function(t,a,e){"use strict";e.r(a);var i=e("f636"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},8043:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?e("span",{staticClass:"clearfix"},[t.within?e("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):e("span",[t.title?e("span",{staticClass:"title"},[t._v(t._s(t.title))]):e("span",{staticClass:"title"},[t._v("红人速推")])])]):e("span",[t.within?e("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},aef7:function(t,a,e){var i=e("de5e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("02904e2c",i,!0,{sourceMap:!1,shadowMode:!1})},de5e:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=a},e8da:function(t,a,e){"use strict";var i=e("aef7"),n=e.n(i);n.a},ee59:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"speed"},[e("uni-top-bar",{attrs:{title:t.toptitle,within:t.within}}),e("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+"px"}},[e("v-uni-view",{staticClass:"card"},[e("v-uni-view",{staticClass:"cardtitle"},[t._v("您希望网红的性别是？")]),e("v-uni-view",{staticClass:"objective",class:3===t.id?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.objective(3,"不限")}}},[t._v("不限")]),e("v-uni-view",{staticClass:"objective",class:1===t.id?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.objective(1,"男")}}},[t._v("男")]),e("v-uni-view",{staticClass:"objective",class:2===t.id?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.objective(2,"女")}}},[t._v("女")])],1),e("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.next.apply(void 0,arguments)}}},[t._v(t._s(t.btnname))])],1),e("v-uni-view",{staticClass:"cu-modal poplogin",class:"login"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"auth"},[e("v-uni-view",{staticClass:"title"},[t._v("请登录后查看！")]),e("v-uni-view",{staticClass:"loginbtn"},[e("v-uni-button",{staticClass:"close",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),e("v-uni-button",{staticClass:"login",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1)},o=[]},f394:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=i},f636:function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("1fa5")),o={components:{uniTopBar:n.default},data:function(){return{modalName:null,id:"",height:"",toptitle:"红人速配",userInfo:"",addressData:"",tipData:"",btnname:"",within:"https://www.hongrensutui.com/h5/img/supei_logo_left.png"}},onLoad:function(t){var a=this;this.height=this.StatusBar,a.addressData=JSON.parse(t.addressData),a.tipData=JSON.parse(t.tipData),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.userInfo.mobile?a.btnname="下一步 (2/4)":a.btnname="下一步 (2/5)"}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.userInfo.mobile?a.btnname="下一步 (2/4)":a.btnname="下一步 (2/5)"}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?a.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/api/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.userInfo.mobile?a.btnname="下一步 (2/4)":a.btnname="下一步 (2/5)"):wxlogin()}})},objective:function(t,a){this.id=t,this.addressData.sex=t,this.tipData.sex=a},next:function(){var t=this;if(!t.addressData.sex)return uni.showToast({title:"请选择您希望网红的性别？",icon:"none",duration:3e3}),!1;uni.getStorage({key:"userInfo",success:function(a){3==t.addressData.sex&&(t.addressData.sex=0),uni.navigateTo({url:"/pages/celebrity/speed3?addressData="+JSON.stringify(t.addressData)+"&tipData="+JSON.stringify(t.tipData)})},fail:function(a){t.modalName="login"}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null}}};a.default=o}}]);