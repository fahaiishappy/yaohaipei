(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-about"],{"112c":function(t,a,i){"use strict";var n;i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return n}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?i("span",[t.title?i("span",{style:{marginLeft:"44px",color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):i("span",{style:{marginLeft:"44px",color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])},o=[]},1283:function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,'.hongren[data-v-295dbc5a]{bottom:0}.count[data-v-295dbc5a]{padding:3vw}.data[data-v-295dbc5a]{color:#333;font-size:4.3vw;line-height:7vw;padding:0}.data[data-v-295dbc5a] img{border-radius:1.5vw}.data[data-v-295dbc5a] img:last-child{display:block;margin:auto}.customer[data-v-295dbc5a]{position:absolute;bottom:6vw;right:6vw;width:15vw;height:15vw;font-size:9vw;padding-top:2vw;background-color:#e71d36;color:#fff;z-index:210;text-align:center;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.cu-dialog[data-v-295dbc5a]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-295dbc5a]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-295dbc5a]{width:auto}.cuIcon-close[data-v-295dbc5a]:before{background-color:rgba(0,0,0,.5);padding:3vw;border-radius:50%}.service[data-v-295dbc5a]{padding:3vw;background-color:#fff;border-radius:1.5vw}.service .wechat[data-v-295dbc5a]{width:200px;height:200px;border-radius:3vw}.service .tip[data-v-295dbc5a]{color:#333;margin-bottom:2vw;font-size:3.4vw}',""]),t.exports=a},"24d1":function(t,a,i){"use strict";var n=i("4ea4");i("d3b7"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n(i("5ad0")),o={components:{uniTopBar:e.default},data:function(){return{modalName:null,id:"",content:"",userInfo:"",height:"",config:""}},onLoad:function(t){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/h5config",method:"POST",success:function(t){a.config=t.data.data.list}}),this.height=this.StatusBar,t.id&&(a.id=t.id),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),a.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.getCewebrity(a.userInfo.id)}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){a.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.getCewebrity(a.userInfo.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?(a.userInfo=t.data,a.updateuser(t.data.id)):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(a){""!=a.data&&null!=a.data&&t.updateuser(a.data.id)}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(a.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.getCewebrity(a.userInfo.id)):wxlogin()}})},getCewebrity:function(t){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/pageDetails",data:{id:a.id},method:"POST",success:function(i){a.content=i.data.data.list;var n=i.data.data.list.content;a.content.content=n.replace(/\<img/gi,'<img style="border-radius: 1.5vw;width:100%" '),a.share(a.content.sharetitle,a.content.sharecontent,t)}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},share:function(t){function a(a,i,n){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(t,a,i){t=t,a=a;var n="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(t,a,n,i)}))}};a.default=o},"25b6":function(t,a,i){var n=i("1283");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("469c6ebc",n,!0,{sourceMap:!1,shadowMode:!1})},4674:function(t,a,i){"use strict";i.r(a);var n=i("7137"),e=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);a["default"]=e.a},"5ad0":function(t,a,i){"use strict";i.r(a);var n=i("112c"),e=i("4674");for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);i("f3c9");var c,r=i("f0c5"),u=Object(r["a"])(e["default"],n["b"],n["c"],!1,null,"78366bab",null,!1,n["a"],c);a["default"]=u.exports},"61bb":function(t,a,i){"use strict";i.r(a);var n=i("24d1"),e=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);a["default"]=e.a},7137:function(t,a,i){"use strict";i("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=n},"9ebb":function(t,a,i){var n=i("cf7f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("6346ab16",n,!0,{sourceMap:!1,shadowMode:!1})},cc5d:function(t,a,i){"use strict";var n;i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return n}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("uni-top-bar"),i("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[i("v-uni-view",{staticClass:"count"},[i("v-uni-view",{staticClass:"data"},[i("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}})],1)],1)],1),i("v-uni-view",{staticClass:"customer round shadow text-center",attrs:{"data-target":"Image"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cuIcon-servicefill"})],1),i("v-uni-view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog",staticStyle:{width:"auto"}},[i("v-uni-view",{staticClass:"bg-img"},[i("v-uni-view",{staticClass:"service"},[i("img",{staticClass:"wechat",attrs:{src:t.config.service,mode:"widthFix"}}),i("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.config.servicetip))])],1),i("v-uni-view",{staticClass:"cu-bar justify-center text-white",staticStyle:{"margin-top":"3vw"}},[i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1)],1)},o=[]},cf7f:function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,'.cu-bar[data-v-78366bab]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-78366bab]{margin-left:3vw;height:30px}.cuIcon-back[data-v-78366bab]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-78366bab]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-78366bab]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-78366bab]{width:auto}.cuIcon-close[data-v-78366bab]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=a},e1f7:function(t,a,i){"use strict";i.r(a);var n=i("cc5d"),e=i("61bb");for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);i("ff03");var c,r=i("f0c5"),u=Object(r["a"])(e["default"],n["b"],n["c"],!1,null,"295dbc5a",null,!1,n["a"],c);a["default"]=u.exports},f3c9:function(t,a,i){"use strict";var n=i("9ebb"),e=i.n(n);e.a},ff03:function(t,a,i){"use strict";var n=i("25b6"),e=i.n(n);e.a}}]);