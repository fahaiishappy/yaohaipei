(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-celebrity-speed1"],{"05ef":function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=n},"1cb0":function(t,a,e){var n=e("627e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("b68b7a92",n,!0,{sourceMap:!1,shadowMode:!1})},2624:function(t,a,e){"use strict";e.r(a);var n=e("ffec"),i=e("6000");for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);var o,r=e("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"644716ed",null,!1,n["a"],o);a["default"]=c.exports},3174:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?e("span",{staticClass:"clearfix"},[t.within?e("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):e("span",[t.title?e("span",{staticClass:"title"},[t._v(t._s(t.title))]):e("span",{staticClass:"title"},[t._v("红人速推")])])]):e("span",[t.within?e("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},3734:function(t,a,e){"use strict";e.r(a);var n=e("3174"),i=e("75eb");for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);e("3804");var o,r=e("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"07edaae6",null,!1,n["a"],o);a["default"]=c.exports},3804:function(t,a,e){"use strict";var n=e("1cb0"),i=e.n(n);i.a},6e3:function(t,a,e){"use strict";e.r(a);var n=e("7c05"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=i.a},"627e":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=a},"75eb":function(t,a,e){"use strict";e.r(a);var n=e("05ef"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=i.a},"7c05":function(t,a,e){"use strict";var n=e("4ea4");e("4160"),e("d3b7"),e("25f0"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("3734")),s={components:{uniTopBar:i.default},data:function(){return{modalName:null,height:"",toptitle:"红人速配",userInfo:"",categorytable:"",category:"",addressData:{categoryid:"",categorypid:"",sex:"",platform:"",fans:"",mobile:""},tipData:{categoryname:"",sex:"",platform:"",fans:""},TabCur:0,scrollLeft:0,btnname:"下一步",codetime:2e3,tip:!1,message:"",messagelist:"",within:"https://www.hongrensutui.com/h5/img/supei_logo_left.png"}},onLoad:function(t){var a=this;this.height=this.StatusBar,t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,uni.request({url:"https://www.hongrensutui.com/api/index/totaldocking",data:{userid:a.userInfo.id},method:"POST",success:function(t){0!=t.data.data.num?uni.showTabBarRedDot({index:1,text:""+t.data.data.num}):uni.hideTabBarRedDot({index:1})}}),a.share(t.data.data.info.company_id,t.data.data.info.id),a.userInfo.mobile?a.btnname="下一步 (1/4)":a.btnname="下一步 (1/5)"}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,uni.request({url:"https://www.hongrensutui.com/api/index/totaldocking",data:{userid:a.userInfo.id},method:"POST",success:function(t){0!=t.data.data.num?uni.showTabBarRedDot({index:1,text:""+t.data.data.num}):uni.hideTabBarRedDot({index:1})}}),a.share(t.data.data.info.company_id,t.data.data.info.id),a.userInfo.mobile?a.btnname="下一步 (1/4)":a.btnname="下一步 (1/5)"}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?a.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),a.cewebritycategory(),a.getmessage(),a.timerInt=setInterval((function(){if(a.codetime--,a.message=a.messagelist[a.getRandomArbitrary(0,50)],a.message.celebrity&&a.message.celebrity.length>1&&(a.message.celebrity=a.message.celebrity[0]+a.message.celebrity[1]+"***"),a.message.merchant&&a.message.merchant.length>1&&(a.message.merchant=a.message.merchant[0]+a.message.merchant[1]+"***"),a.tip=!a.tip,0==a.codetime)return clearInterval(a.timerInt),void(a.codetime=2e3)}),4e3)},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(a){t.updateuser(a.data.id)}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/api/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,uni.request({url:"https://www.hongrensutui.com/api/index/totaldocking",data:{userid:a.userInfo.id},method:"POST",success:function(t){0!=t.data.data.num?uni.showTabBarRedDot({index:1,text:""+t.data.data.num}):uni.hideTabBarRedDot({index:1})}}),a.share(t.data.data.info.company_id,t.data.data.info.id),a.userInfo.mobile?a.btnname="下一步 (1/4)":a.btnname="下一步 (1/5)"):wxlogin()}})},getRandomArbitrary:function(t,a){return Math.floor(Math.random()*(a-t)+t)},getmessage:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(a){t.messagelist=a.data.data.list,t.message=t.messagelist[t.getRandomArbitrary(0,50)],t.message.celebrity&&t.message.celebrity.length>1&&(t.message.celebrity=t.message.celebrity[0]+t.message.celebrity[1]+"***"),t.message.merchant&&t.message.merchant.length>1&&(t.message.merchant=t.message.merchant[0]+t.message.merchant[1]+"***"),t.tip=!t.tip}})},cewebritycategory:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/getRealm",method:"POST",success:function(a){t.categorytable=a.data.data.table,t.category=a.data.data.list}})},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=90*(t.currentTarget.dataset.id-1)},ChooseCheckbox:function(t){t.checked=!t.checked},next:function(t){var a=this,e=0,n=0;if(a.tipData.categoryname="",a.addressData.categoryid="",a.addressData.categorypid="",a.category.forEach((function(t,a){1==t.checked&&e++})),a.category.forEach((function(t,i){1==t.checked&&(n++,n!=e?(a.addressData.categoryid+=t.id+",",a.addressData.categorypid+=t.pid+",",a.tipData.categoryname+=t.name+","):(a.addressData.categoryid+=t.id,a.addressData.categorypid+=t.pid,a.tipData.categoryname+=t.name))})),!a.addressData.categorypid)return uni.showToast({title:"请选择您的商品类目",icon:"none",duration:3e3}),!1;uni.getStorage({key:"userInfo",success:function(t){uni.navigateTo({url:"/pages/celebrity/speed2?addressData="+JSON.stringify(a.addressData)+"&tipData="+JSON.stringify(a.tipData)})},fail:function(t){a.modalName="login"}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},wechatLogin:function(t){wxlogin()},share:function(t){function a(a,e){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(t,a){var e="红人速配 | 为您秒配带货主播！",n="红人速推就是网红多、商家多，直播带货就上红人速推。",i="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(e,n,i,a)}))}};a.default=s},ffec:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"speed"},[t.message?e("v-uni-view",{staticClass:"tipnews"},[t.tip?e("v-uni-view",{staticClass:"animated1 fadeInRight"},[e("v-uni-view",{staticClass:"cuIcon-notificationfill"}),e("span",[e("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),e("span",[t._v("商家"+t._s(t.message.merchant))]),t._v("速配网红成功")])],1):t._e()],1):t._e(),e("uni-top-bar",{attrs:{barid:1,within:t.within}}),e("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+"px"}},[e("v-uni-view",{staticClass:"card"},[e("v-uni-view",{staticClass:"cardtitle"},[t._v("您的商品属于什么类目？")]),e("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(t.categorytable,(function(a,n){return e("v-uni-view",{key:n,staticClass:"cu-item box block",class:t.TabCur==n?"bg-orange":"",attrs:{"data-id":n},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(a.name))])})),1),t._l(t.categorytable,(function(a,n){return e("v-uni-view",{key:n,staticClass:"clearfix",class:t.TabCur==n?"show":"hide",staticStyle:{"margin-top":"3vw",width:"100%"}},[e("v-uni-view",{staticClass:"grid col-3 padding-sm"},t._l(t.category,(function(n,i){return n.pid==a.id?e("v-uni-view",{key:i,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"box cu-btn block",class:n.checked?"bg-orange":"line-orange",attrs:{"data-value":n.name},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.ChooseCheckbox(n)}}},[t._v(t._s(n.name))])],1):t._e()})),1)],1)}))],2),e("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.next.apply(void 0,arguments)}}},[t._v(t._s(t.btnname))])],1),e("v-uni-view",{staticClass:"cu-modal poplogin",class:"login"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"auth"},[e("v-uni-view",{staticClass:"title"},[t._v("请登录后查看！")]),e("v-uni-view",{staticClass:"loginbtn"},[e("v-uni-button",{staticClass:"close",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),e("v-uni-button",{staticClass:"login",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1)},s=[]}}]);