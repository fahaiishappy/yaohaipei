(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-about"],{"0f5e":function(t,a,i){"use strict";i("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=e},"4ee7":function(t,a,i){var e=i("c76c");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("143eb1ba",e,!0,{sourceMap:!1,shadowMode:!1})},"5beb":function(t,a,i){"use strict";i.r(a);var e=i("9ae1"),n=i("b106");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("d0f6");var d,r=i("f0c5"),s=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"68b5bbd4",null,!1,e["a"],d);a["default"]=s.exports},"83cd":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[i("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?i("span",[t.title?i("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):i("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?i("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img&&1==t.barid?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e(),t.img&&1!=t.barid?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right2.png"}}):t._e()])])},o=[]},"9ae1":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("uni-top-bar"),i("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[i("v-uni-view",{staticClass:"count"},[i("v-uni-view",{staticClass:"data",style:{paddingBottom:t.paddingBottom}},[i("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}})],1)],1)],1),t.paymentbtn?i("v-uni-view",{staticClass:"paymentbtn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.openmember.apply(void 0,arguments)}}},[t._v(t._s(t.paymentbtntext)+"("+t._s(t._f("numFilter")(t.cardprice))+"元)")]):t._e(),i("v-uni-view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"bg-img"},[i("img",{staticClass:"wechat",attrs:{src:t.service,mode:"widthFix"}}),i("v-uni-view",{staticClass:"tip"},[t._v("免费咨询微信：zhuoyu10086")]),i("v-uni-view",{staticClass:"cu-bar justify-center text-white"},[i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1)],1)},o=[]},"9b8e":function(t,a,i){"use strict";i.r(a);var e=i("0f5e"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"9e72":function(t,a,i){"use strict";var e=i("4ea4");i("b680"),i("d3b7"),i("acd8"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("e3d7")),o={components:{uniTopBar:n.default},data:function(){return{modalName:null,id:"",content:"",cardid:"",cardprice:"",userInfo:"",paymentbtntext:"立即认证",paymentbtn:!1,height:"",paddingBottom:""}},filters:{numFilter:function(t){var a="";return a=isNaN(t)||""===t?"":parseFloat(t).toFixed(0),a}},onLoad:function(t){var a=this;this.height=this.StatusBar,a.id=t["id"],"33"==a.id?a.paymentbtntext="立即认证":"34"==a.id?a.paymentbtntext="立即购买":"35"==a.id?a.paymentbtntext="立即打造":"36"==a.id&&(a.paymentbtntext="立即培训"),a.cardid=t["cardid"],this.getCewebrity(),a.cardid&&this.getCade(),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),a.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){a.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?(a.userInfo=t.data,a.updateuser(t.data.id)):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(a){""!=a.data&&null!=a.data&&t.updateuser(a.data.id)}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(self.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},getCewebrity:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/pageDetails",data:{id:t.id},method:"POST",success:function(a){t.content=a.data.data.list;var i=a.data.data.list.content;t.content.content=i.replace(/\<img/gi,'<img style="border-radius: 1.5vw;width:100%" ')}})},getCade:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/getCade",data:{id:t.cardid},method:"POST",success:function(a){a.data.data.info&&("33"!=t.id&&(t.paymentbtn=!0,t.paddingBottom="8vw"),t.cardprice=a.data.data.info)}})},openmember:function(t){var a=this;a.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/card",data:{openid:a.userInfo.openid,id:a.cardid},method:"POST",success:function(t){callpay(JSON.parse(t.data.data.parameters),t.data.data.info)}}):(uni.showToast({title:"您还未登录，请登录后操作",icon:"none",duration:2e3}),setTimeout((function(){uni.reLaunch({url:"/pages/login/login"})}),2e3))},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},share:function(t){function a(a,i){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(t,a){var i="红人速推 | 网红直播带货一站式服务平台",e="红人速推就是网红多 商家多，直播带货就上红人速推。",n="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(i,e,n,a)}))}};a.default=o},aa9f:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.auth[data-v-9df7cb58]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-9df7cb58]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-9df7cb58]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-9df7cb58]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-9df7cb58]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-9df7cb58]{height:100vh;z-index:300}.cu-bar[data-v-9df7cb58]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-9df7cb58]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-9df7cb58]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-9df7cb58]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-9df7cb58]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9df7cb58]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9df7cb58]{width:auto}.cuIcon-close[data-v-9df7cb58]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=a},b106:function(t,a,i){"use strict";i.r(a);var e=i("9e72"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},b17d:function(t,a,i){var e=i("aa9f");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("2d0d384a",e,!0,{sourceMap:!1,shadowMode:!1})},c4f3:function(t,a,i){"use strict";var e=i("b17d"),n=i.n(e);n.a},c76c:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.hongren[data-v-68b5bbd4]{bottom:0}.count[data-v-68b5bbd4]{padding:3vw}.data[data-v-68b5bbd4]{color:#333;font-size:4.3vw;line-height:7vw;padding:0}.data[data-v-68b5bbd4] img{border-radius:1.5vw}.data[data-v-68b5bbd4] img:last-child{display:block;margin:auto}.paymentbtn[data-v-68b5bbd4]{position:absolute;font-size:4.8vw;font-weight:700;bottom:6vw;left:50%;margin-left:-25vw;width:50vw;text-align:center;line-height:12vw;border-radius:12vw;background-color:#ffb759;color:#fff;z-index:210;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.customer[data-v-68b5bbd4]{position:absolute;bottom:18vw;right:6vw;width:15vw;height:15vw;font-size:9vw;padding-top:2vw;z-index:210;text-align:center;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.cu-dialog[data-v-68b5bbd4]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-68b5bbd4]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-68b5bbd4]{width:auto}.cuIcon-close[data-v-68b5bbd4]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}.wechat[data-v-68b5bbd4]{width:200px;height:200px}.tip[data-v-68b5bbd4]{color:#fff;margin:2vw 0;font-size:3.4vw}.bg-red[data-v-68b5bbd4]{background-color:#e71d36}',""]),t.exports=a},d0f6:function(t,a,i){"use strict";var e=i("4ee7"),n=i.n(e);n.a},e3d7:function(t,a,i){"use strict";i.r(a);var e=i("83cd"),n=i("9b8e");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("c4f3");var d,r=i("f0c5"),s=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"9df7cb58",null,!1,e["a"],d);a["default"]=s.exports}}]);