(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-platform-speed1"],{"0119":function(t,a,i){"use strict";var e,n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[i("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?i("span",[t.title?i("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):i("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?i("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img&&1==t.barid?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e(),t.img&&1!=t.barid?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right2.png"}}):t._e()])])},o=[];i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}))},"0172":function(t,a,i){"use strict";var e,n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("uni-top-bar",{attrs:{barid:1}}),i("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+"px"}},[i("v-uni-view",{staticClass:"card"},[i("v-uni-view",{staticClass:"cardtitle"},[t._v("您的商品属于什么类目？")]),i("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(t.categorytable,(function(a,e){return i("v-uni-view",{key:e,staticClass:"cu-item",class:t.TabCur==e?"text-orange cur":"",attrs:{"data-id":e},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(a.name))])})),1),t._l(t.categorytable,(function(a,e){return i("v-uni-view",{key:e,staticClass:"clearfix",class:t.TabCur==e?"show":"hide",staticStyle:{"margin-top":"3vw",width:"100%"}},[i("v-uni-view",{staticClass:"grid col-3 padding-sm"},t._l(t.category,(function(e,n){return e.pid==a.id?i("v-uni-view",{key:n,staticClass:"padding-xs"},[i("v-uni-button",{staticClass:"box cu-btn block",class:e.checked?"bg-orange":"line-orange",attrs:{"data-value":e.name},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.ChooseCheckbox(e)}}},[t._v(t._s(e.name))])],1):t._e()})),1)],1)}))],2),i("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.next.apply(void 0,arguments)}}},[t._v(t._s(t.btnname))])],1),i("v-uni-view",{staticClass:"cu-modal",class:"login"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("请登录后查看！")]),i("v-uni-view",{staticClass:"loginbtn"},[i("v-uni-button",{staticClass:"close",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),i("v-uni-button",{staticClass:"login",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1)},o=[];i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}))},"04ca":function(t,a,i){"use strict";var e=i("8256"),n=i.n(e);n.a},"107e":function(t,a,i){"use strict";i.r(a);var e=i("39b9"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"29c3":function(t,a,i){"use strict";i.r(a);var e=i("39f7"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"39b9":function(t,a,i){"use strict";i("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=e},"39f7":function(t,a,i){"use strict";var e=i("ee27");i("4160"),i("d3b7"),i("25f0"),i("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("d654")),o={components:{uniTopBar:n.default},data:function(){return{modalName:null,height:"",toptitle:"红人速配",userInfo:"",categorytable:"",category:"",addressData:{categoryid:"",categorypid:"",sex:"",fans:"",mobile:""},TabCur:0,scrollLeft:0,btnname:"下一步(1/4)"}},onLoad:function(t){var a=this;this.height=this.StatusBar,t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.userInfo.mobile?a.btnname="下一步(1/3)":a.btnname="下一步(1/4)"}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.userInfo.mobile?a.btnname="下一步(1/3)":a.btnname="下一步(1/4)"}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?a.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),a.cewebritycategory()},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.userInfo.mobile?a.btnname="下一步(1/3)":a.btnname="下一步(1/4)"):wxlogin()}})},cewebritycategory:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/getRealm",method:"POST",success:function(a){t.categorytable=a.data.data.table,t.category=a.data.data.list}})},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=90*(t.currentTarget.dataset.id-1)},ChooseCheckbox:function(t){t.checked=!t.checked},next:function(t){var a=this,i=0,e=0;if(a.addressData.categoryid="",a.addressData.categorypid="",a.category.forEach((function(t,a){1==t.checked&&i++})),a.category.forEach((function(t,n){1==t.checked&&(e++,e!=i?(a.addressData.categoryid+=t.id+",",a.addressData.categorypid+=t.pid+","):(a.addressData.categoryid+=t.id,a.addressData.categorypid+=t.pid))})),!a.addressData.categorypid)return uni.showToast({title:"请选择您的商品类目",icon:"none",duration:3e3}),!1;uni.getStorage({key:"userInfo",success:function(t){uni.navigateTo({url:"/pages/platform/speed2?addressData="+JSON.stringify(a.addressData)})},fail:function(t){a.modalName="login"}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},wechatLogin:function(t){wxlogin()},share:function(t){function a(a,i,e){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(t,a,i){var e=t.title,n=t.title+"，点击查看详情";if(t.img)var o=t.img;else o="https://www.hongrensutui.com/uploads/share/news_logo.png";share(e,n,o,i)}))}};a.default=o},"6fe8":function(t,a,i){var e=i("d793");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("0b4226a3",e,!0,{sourceMap:!1,shadowMode:!1})},"70c1":function(t,a,i){"use strict";var e=i("6fe8"),n=i.n(e);n.a},"7ae7":function(t,a,i){"use strict";i.r(a);var e=i("0172"),n=i("29c3");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("70c1");var r,c=i("f0c5"),s=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"462b16fc",null,!1,e["a"],r);a["default"]=s.exports},8256:function(t,a,i){var e=i("850b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("3c3c30eb",e,!0,{sourceMap:!1,shadowMode:!1})},"850b":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.auth[data-v-9df7cb58]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-9df7cb58]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-9df7cb58]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-9df7cb58]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-9df7cb58]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-9df7cb58]{height:100vh;z-index:300}.cu-bar[data-v-9df7cb58]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-9df7cb58]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-9df7cb58]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-9df7cb58]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-9df7cb58]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9df7cb58]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9df7cb58]{width:auto}.cuIcon-close[data-v-9df7cb58]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=a},d654:function(t,a,i){"use strict";i.r(a);var e=i("0119"),n=i("107e");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("04ca");var r,c=i("f0c5"),s=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"9df7cb58",null,!1,e["a"],r);a["default"]=s.exports},d793:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.hongren[data-v-462b16fc]{background-image:url(https://www.hongrensutui.com/h5/img/banner_bg.png);background-repeat:no-repeat;background-position:top;background-size:100%;background-color:#fff;bottom:0}.bg-fff[data-v-462b16fc]{margin-bottom:0}.cu-bar[data-v-462b16fc]{position:static}.nothave[data-v-462b16fc]{font-size:3.5vw;padding-bottom:3vw;color:#999}.card[data-v-462b16fc]{background-color:#fff;margin:3vw;border-radius:1.5vw}.cu-bar.foot[data-v-462b16fc]{z-index:199}.cu-bar.foot[data-v-462b16fc]{position:fixed;bottom:50px;left:0;right:0;width:100%;height:50px;min-height:50px;z-index:200;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar.foot .text-red[data-v-462b16fc]{color:#e71d36}.cu-bar.foot .text-gray[data-v-462b16fc]{color:#9eb3c2}.cu-bar.foot.tabbar.shadow[data-v-462b16fc]{box-shadow:0 -1px 2px rgba(26,26,26,.1)}uni-button[data-v-462b16fc]{border-radius:100vw}.cu-btn[class*="line"][data-v-462b16fc]::after{border-radius:100vw}.cardtitle[data-v-462b16fc]{text-align:center;padding-top:25px;font-size:5vw;padding-bottom:15px;font-weight:700}.offerbtn[data-v-462b16fc]{width:94vw;margin:0 3vw;float:left;height:40px;line-height:40px;text-align:center;background-color:#e71d36;border-radius:40px;color:#fff;position:absolute;\nbottom:100px;\n}.cu-modal[data-v-462b16fc]{z-index:210}.cu-dialog[data-v-462b16fc]{background-color:initial;width:100vw;padding:4vw;height:auto}.auth[data-v-462b16fc]{padding:6vw;border-radius:1.5vw;background-color:#fff}.auth .vip[data-v-462b16fc]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}.auth .pay[data-v-462b16fc]{border-radius:1.5vw;border:1px solid #ebebeb;text-align:center;color:#666;height:10vw;line-height:10vw}.auth .title[data-v-462b16fc]{color:#333;margin-bottom:4vw}.loginbtn[data-v-462b16fc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.loginbtn uni-button[data-v-462b16fc]::after{display:none}.loginbtn uni-button[data-v-462b16fc]{position:static;display:block;margin-left:0;margin-right:0;padding-left:0;padding-right:0;box-sizing:initial;font-size:3.8vw;text-align:center;text-decoration:none;line-height:7vw;border-radius:1.5vw;-webkit-tap-highlight-color:transparent;overflow:visible;color:#333;background-color:initial;margin-top:3vw}.loginbtn uni-button.login[data-v-462b16fc]{color:#39b54a}',""]),t.exports=a}}]);