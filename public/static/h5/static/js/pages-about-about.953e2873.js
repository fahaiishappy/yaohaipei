(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-about"],{"05ef":function(t,i,n){"use strict";n("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};i.default=e},3734:function(t,i,n){"use strict";n.r(i);var e=n("c2d5"),a=n("75eb");for(var o in a)"default"!==o&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("d973");var s,u=n("f0c5"),c=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"525162bc",null,!1,e["a"],s);i["default"]=c.exports},4465:function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("uni-top-bar",{attrs:{within:t.within}}),n("v-uni-view",{staticClass:"hongren about",style:{top:t.height+43+"px"}},[n("v-uni-view",{staticClass:"count"},[n("v-uni-view",{staticClass:"data"},[n("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}})],1)],1)],1),n("v-uni-view",{staticClass:"customer round shadow text-center",attrs:{"data-target":"Image"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showModal.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cuIcon-servicefill"})],1),n("v-uni-view",{staticClass:"cu-modal config",class:"Image"==t.modalName?"show":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-dialog",staticStyle:{width:"auto"}},[n("v-uni-view",{staticClass:"bg-img"},[n("v-uni-view",{staticClass:"service"},[n("img",{staticClass:"wechat",attrs:{src:t.config.service,mode:"widthFix"}}),n("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.config.servicetip))])],1),n("v-uni-view",{staticClass:"cu-bar justify-center text-white",staticStyle:{"margin-top":"3vw"}},[n("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1)],1)},o=[]},"4fb0":function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'.cu-bar[data-v-525162bc]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-525162bc]{margin-left:3vw;height:30px}.cuIcon-back[data-v-525162bc]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-525162bc]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-525162bc]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-525162bc]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-525162bc]{width:auto}.cuIcon-close[data-v-525162bc]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=i},5713:function(t,i,n){var e=n("4fb0");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("645c1318",e,!0,{sourceMap:!1,shadowMode:!1})},"5acf":function(t,i,n){"use strict";n.r(i);var e=n("4465"),a=n("6475");for(var o in a)"default"!==o&&function(t){n.d(i,t,(function(){return a[t]}))}(o);var s,u=n("f0c5"),c=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"09fcb22d",null,!1,e["a"],s);i["default"]=c.exports},6475:function(t,i,n){"use strict";n.r(i);var e=n("81c7"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a},"75eb":function(t,i,n){"use strict";n.r(i);var e=n("05ef"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a},"81c7":function(t,i,n){"use strict";var e=n("4ea4");n("d3b7"),n("ac1f"),n("25f0"),n("5319"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e(n("3734")),o={components:{uniTopBar:a.default},data:function(){return{modalName:null,id:"",content:"",userInfo:"",height:"",config:"",within:""}},onLoad:function(t){var i=this;uni.request({url:"https://www.hongrensutui.com/api/index/h5config",method:"POST",success:function(t){i.config=t.data.data.list}}),this.height=this.StatusBar,t.id&&(i.id=t.id),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:n.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),i.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),i.getCewebrity(i.userInfo.id)}})},fail:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){i.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),i.getCewebrity(i.userInfo.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?(i.userInfo=t.data,i.updateuser(t.data.id)):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(i){""!=i.data&&null!=i.data&&t.updateuser(i.data.id)}})},methods:{updateuser:function(t){var i=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(i.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),i.getCewebrity(i.userInfo.id)):wxlogin()}})},getCewebrity:function(t){var i=this;uni.request({url:"https://www.hongrensutui.com/api/index/pageDetails",data:{id:i.id},method:"POST",success:function(n){i.content=n.data.data.list;var e=n.data.data.list.content;i.content.content=e.replace(/\<img/gi,'<img style="border-radius: 1.5vw;width:100%" '),"限时优惠"==i.content.title?i.within="https://www.hongrensutui.com/h5/img/youhui_logo_left.png":i.within="https://www.hongrensutui.com/h5/img/logo_left.png",i.share(i.content.sharetitle,i.content.sharecontent,t)}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},share:function(t){function i(i,n,e){return t.apply(this,arguments)}return i.toString=function(){return t.toString()},i}((function(t,i,n){if(t)t=t;else t="红人速推 | 网红直播带货一站式服务平台";if(i)i=i;else i="红人速推就是网红多 商家多，直播带货就上红人速推。";var e="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(t,i,e,n)}))}};i.default=o},c2d5:function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?n("span",{staticClass:"clearfix"},[t.within?n("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):n("span",[t.title?n("span",{staticClass:"title"},[t._v(t._s(t.title))]):n("span",{staticClass:"title"},[t._v("红人速推")])])]):n("span",[t.within?n("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):n("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},d973:function(t,i,n){"use strict";var e=n("5713"),a=n.n(e);a.a}}]);