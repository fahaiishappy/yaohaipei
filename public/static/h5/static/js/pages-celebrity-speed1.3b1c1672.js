(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-celebrity-speed1"],{"05ef":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=n},"1cb0":function(t,e,a){var n=a("627e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("b68b7a92",n,!0,{sourceMap:!1,shadowMode:!1})},2624:function(t,e,a){"use strict";a.r(e);var n=a("f472"),i=a("6000");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);var o,r=a("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"0ba04612",null,!1,n["a"],o);e["default"]=c.exports},3174:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?a("span",{staticClass:"clearfix"},[t.within?a("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):a("span",[t.title?a("span",{staticClass:"title"},[t._v(t._s(t.title))]):a("span",{staticClass:"title"},[t._v("红人速推")])])]):a("span",[t.within?a("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):a("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},3734:function(t,e,a){"use strict";a.r(e);var n=a("3174"),i=a("75eb");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("3804");var o,r=a("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"07edaae6",null,!1,n["a"],o);e["default"]=c.exports},3804:function(t,e,a){"use strict";var n=a("1cb0"),i=a.n(n);i.a},6e3:function(t,e,a){"use strict";a.r(e);var n=a("7c05"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"627e":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},"75eb":function(t,e,a){"use strict";a.r(e);var n=a("05ef"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"7c05":function(t,e,a){"use strict";var n=a("4ea4");a("4160"),a("d3b7"),a("25f0"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("3734")),s={components:{uniTopBar:i.default},data:function(){return{modalName:null,height:"",toptitle:"红人速配",userInfo:"",categorytable:"",category:"",addressData:{categoryid:"",categorypid:"",sex:"",platform:"",fans:"",mobile:""},tipData:{categoryname:"",sex:"",platform:"",fans:""},TabCur:0,scrollLeft:0,btnname:"下一步",codetime:2e3,tip:!1,message:"",messagelist:"",within:"https://www.hongrensutui.com/h5/img/supei_logo_left.png"}},onLoad:function(t){var e=this;this.height=this.StatusBar,t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:a.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.share(t.data.data.info.company_id,t.data.data.info.id),e.userInfo.mobile?e.btnname="下一步 (1/4)":e.btnname="下一步 (1/5)"}})},fail:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.share(t.data.data.info.company_id,t.data.data.info.id),e.userInfo.mobile?e.btnname="下一步 (1/4)":e.btnname="下一步 (1/5)"}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),e.cewebritycategory(),e.getmessage(),e.timerInt=setInterval((function(){if(e.codetime--,e.message=e.messagelist[e.getRandomArbitrary(0,50)],e.message.celebrity&&e.message.celebrity.length>1&&(e.message.celebrity=e.message.celebrity[0]+e.message.celebrity[1]+"***"),e.message.merchant&&e.message.merchant.length>1&&(e.message.merchant=e.message.merchant[0]+e.message.merchant[1]+"***"),e.tip=!e.tip,0==e.codetime)return clearInterval(e.timerInt),void(e.codetime=2e3)}),4e3)},onShow:function(){},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.share(t.data.data.info.company_id,t.data.data.info.id),e.userInfo.mobile?e.btnname="下一步 (1/4)":e.btnname="下一步 (1/5)"):wxlogin()}})},getRandomArbitrary:function(t,e){return Math.floor(Math.random()*(e-t)+t)},getmessage:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(e){t.messagelist=e.data.data.list,t.message=t.messagelist[t.getRandomArbitrary(0,50)],t.message.celebrity&&t.message.celebrity.length>1&&(t.message.celebrity=t.message.celebrity[0]+t.message.celebrity[1]+"***"),t.message.merchant&&t.message.merchant.length>1&&(t.message.merchant=t.message.merchant[0]+t.message.merchant[1]+"***"),t.tip=!t.tip}})},cewebritycategory:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/getRealm",method:"POST",success:function(e){t.categorytable=e.data.data.table,t.category=e.data.data.list}})},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=90*(t.currentTarget.dataset.id-1)},ChooseCheckbox:function(t){t.checked=!t.checked},next:function(t){var e=this,a=0,n=0;if(e.tipData.categoryname="",e.addressData.categoryid="",e.addressData.categorypid="",e.category.forEach((function(t,e){1==t.checked&&a++})),e.category.forEach((function(t,i){1==t.checked&&(n++,n!=a?(e.addressData.categoryid+=t.id+",",e.addressData.categorypid+=t.pid+",",e.tipData.categoryname+=t.name+","):(e.addressData.categoryid+=t.id,e.addressData.categorypid+=t.pid,e.tipData.categoryname+=t.name))})),!e.addressData.categorypid)return uni.showToast({title:"请选择您的商品类目",icon:"none",duration:3e3}),!1;uni.getStorage({key:"userInfo",success:function(t){uni.navigateTo({url:"/pages/celebrity/speed2?addressData="+JSON.stringify(e.addressData)+"&tipData="+JSON.stringify(e.tipData)})},fail:function(t){e.modalName="login"}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},wechatLogin:function(t){wxlogin()},share:function(t){function e(e,a){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var a="红人速配 | 为您秒配带货主播！",n="红人速推就是网红多、商家多，直播带货就上红人速推。",i="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(a,n,i,e)}))}};e.default=s},f472:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"speed"},[t.message?a("v-uni-view",{staticClass:"tipnews"},[t.tip?a("v-uni-view",{staticClass:"animated1 fadeInRight"},[a("v-uni-view",{staticClass:"cuIcon-notificationfill"}),a("span",[a("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),a("span",[t._v("商家"+t._s(t.message.merchant))]),t._v("速配网红成功")])],1):t._e()],1):t._e(),a("uni-top-bar",{attrs:{barid:1,within:t.within}}),a("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+"px"}},[a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"cardtitle"},[t._v("您的商品属于什么类目？")]),a("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(t.categorytable,(function(e,n){return a("v-uni-view",{key:n,staticClass:"cu-item box block",class:t.TabCur==n?"bg-orange":"",attrs:{"data-id":n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(e.name))])})),1),t._l(t.categorytable,(function(e,n){return a("v-uni-view",{key:n,staticClass:"clearfix",class:t.TabCur==n?"show":"hide",staticStyle:{"margin-top":"3vw",width:"100%"}},[a("v-uni-view",{staticClass:"grid col-3 padding-sm"},t._l(t.category,(function(n,i){return n.pid==e.id?a("v-uni-view",{key:i,staticClass:"padding-xs"},[a("v-uni-button",{staticClass:"box cu-btn block",class:n.checked?"bg-orange":"line-orange",attrs:{"data-value":n.name},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChooseCheckbox(n)}}},[t._v(t._s(n.name))])],1):t._e()})),1)],1)}))],2),a("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.next.apply(void 0,arguments)}}},[t._v(t._s(t.btnname))])],1),a("v-uni-view",{staticClass:"cu-modal poplogin",class:"login"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"auth"},[a("v-uni-view",{staticClass:"title"},[t._v("请登录后查看！")]),a("v-uni-view",{staticClass:"loginbtn"},[a("v-uni-button",{staticClass:"close",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),a("v-uni-button",{staticClass:"login",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1)},s=[]}}]);