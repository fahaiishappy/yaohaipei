(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-college-coursedetails"],{"0132":function(t,a,i){"use strict";i.r(a);var e=i("ed99"),n=i("bd30");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("b446");var d,r=i("f0c5"),s=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"dd3f00a8",null,!1,e["a"],d);a["default"]=s.exports},"0f5e":function(t,a,i){"use strict";i("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=e},"565d":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".hongren[data-v-dd3f00a8]{bottom:0}.count[data-v-dd3f00a8]{padding:0 3vw}.tip[data-v-dd3f00a8]{padding-top:2.5vw;padding-bottom:1vw}.title[data-v-dd3f00a8]{color:#333;font-size:5vw;font-weight:700}.time[data-v-dd3f00a8]{color:#666;font-size:3.6vw;padding:3vw 0}.time .hits[data-v-dd3f00a8]{float:right}.time .hits .iconfont[data-v-dd3f00a8]{font-size:3.5vw;margin-left:1vw;color:#6c757d}.data[data-v-dd3f00a8]{color:#333;font-size:4.3vw;line-height:7vw;padding:4vw 0}.data img[data-v-dd3f00a8]{width:100%;border-radius:1.5vw}.data[data-v-dd3f00a8] img{margin-top:1.5vw;border-radius:1.5vw}.follow[data-v-dd3f00a8]{padding-top:6vw;padding-bottom:4vw}.fabulous[data-v-dd3f00a8]{width:16vw;height:16vw;left:50%;margin-left:-8vw;border-radius:50%;padding-top:3vw}.fabulous .iconfont[data-v-dd3f00a8]{font-size:6vw;color:#ccc}.fabulous .num[data-v-dd3f00a8]{font-size:3.2vw;margin-top:1vw;color:#777}.fabulous.active[data-v-dd3f00a8]{border:1px solid #f37b1d}.fabulous.active .num[data-v-dd3f00a8],\n.fabulous.active .iconfont[data-v-dd3f00a8]{color:#f37b1d}.encourage[data-v-dd3f00a8]{color:#999;margin-top:3vw;font-size:3.4vw}uni-video[data-v-dd3f00a8]{width:100%;height:220px;box-shadow:0 1px 2px rgba(26,26,26,.1)}",""]),t.exports=a},"83cd":function(t,a,i){"use strict";var e,n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[i("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?i("span",[t.title?i("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):i("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?i("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img&&1==t.barid?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e(),t.img&&1!=t.barid?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right2.png"}}):t._e()])])},o=[];i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}))},"8e7f":function(t,a,i){var e=i("565d");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("1db11392",e,!0,{sourceMap:!1,shadowMode:!1})},"9b8e":function(t,a,i){"use strict";i.r(a);var e=i("0f5e"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},a889:function(t,a,i){"use strict";(function(t){var e=i("ee27");i("d3b7"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("e3d7")),o={components:{uniTopBar:n.default},data:function(){return{id:"",fab:!1,content:"",height:"",toptitle:"内容详情",title:"",course:!1,showpage:!1}},onLoad:function(a){var i=this;uni.showLoading({title:"加载中，请稍后..."}),this.height=this.StatusBar,t("log",a," at pages/college/coursedetails.vue:50"),i.id=a.id,a.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",a.invite)),a.code?uni.getStorage({key:"invite",success:function(t){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:a.code,invite:t.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),i.userInfo=t.data.data.info,i.collegeDetails()}})},fail:function(t){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:a.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),i.userInfo=t.data.data.info,i.collegeDetails()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?i.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(a){""!=a.data&&null!=a.data&&t.updateuser(a.data.id)}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.collegeDetails()):wxlogin()}})},collegeDetails:function(){var t=this;uni.getStorage({key:"userInfo",success:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/collegeDetails",data:{mid:a.data.id,id:t.id},method:"POST",success:function(i){t.content=i.data.data.info;var e=i.data.data.info.content;t.content.content=e.replace(/\<img/gi,'<img style="border-radius: 1.5vw" '),t.content&&(uni.hideLoading(),t.showpage=!0),t.share(t.content,a.data.company_id,a.data.id)}})},fail:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/collegeDetails",data:{id:t.id},method:"POST",success:function(a){t.content=a.data.data.list;var i=a.data.data.list.content;t.content.content=i.replace(/\<img/gi,'<img style="border-radius: 1.5vw" '),t.content&&(uni.hideLoading(),t.showpage=!0),t.share(t.content,0,0)}})}})},fabulous:function(){var t=this;t.fab||(t.fab=!0,t.content.fabulous=t.content.fabulous+1)},share:function(t){function a(a,i,e){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(t,a,i){var e=t.title;t.sharetitle&&(e=t.sharetitle);var n=t.title+"，点击查看详情";if(t.sharecontent&&(n=t.sharecontent),t.img)var o=t.img;else o="https://www.hongrensutui.com/uploads/share/college_video_logo.png";share(e,n,o,i)}))}};a.default=o}).call(this,i("0de9")["log"])},aa9f:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.auth[data-v-9df7cb58]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-9df7cb58]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-9df7cb58]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-9df7cb58]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-9df7cb58]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-9df7cb58]{height:100vh;z-index:300}.cu-bar[data-v-9df7cb58]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-9df7cb58]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-9df7cb58]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-9df7cb58]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-9df7cb58]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9df7cb58]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9df7cb58]{width:auto}.cuIcon-close[data-v-9df7cb58]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=a},b17d:function(t,a,i){var e=i("aa9f");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("2d0d384a",e,!0,{sourceMap:!1,shadowMode:!1})},b446:function(t,a,i){"use strict";var e=i("8e7f"),n=i.n(e);n.a},bd30:function(t,a,i){"use strict";i.r(a);var e=i("a889"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},c4f3:function(t,a,i){"use strict";var e=i("b17d"),n=i.n(e);n.a},e3d7:function(t,a,i){"use strict";i.r(a);var e=i("83cd"),n=i("9b8e");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("c4f3");var d,r=i("f0c5"),s=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"9df7cb58",null,!1,e["a"],d);a["default"]=s.exports},ed99:function(t,a,i){"use strict";var e,n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return t.showpage?i("v-uni-view",[i("uni-top-bar",{attrs:{title:t.toptitle}}),i("v-uni-video",{style:{top:t.height+43+"px"},attrs:{controls:!0,autoplay:"true",preload:"auto","x-webkit-airplay":"true","x5-playsinline":"true","webkit-playsinline":"true",playsinline:"true",src:t.content["video"]}}),i("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+220+"px"}},[i("v-uni-view",{staticClass:"count"},[i("v-uni-view",{staticClass:"tip"},[t._v("红人速推学院")]),i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.content.title))]),i("v-uni-view",{staticClass:"time solid-bottom"},[t._l(t.content.type,(function(a,e){return i("v-uni-view",{key:e,staticClass:"cu-tag round bg-orange light"},[1==a?i("span",[t._v("#抖音")]):t._e(),0==a?i("span",[t._v("#快手")]):t._e()])})),i("v-uni-view",{staticClass:"cu-tag round light bg-grey"},[t._v(t._s(t.content.category))]),i("v-uni-view",{staticClass:"hits"},[t._v(t._s(t.content.views)+"人已学习")])],2),i("v-uni-view",{staticClass:"data"},[i("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}})],1)],1)],1)],1):t._e()},o=[];i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}))}}]);