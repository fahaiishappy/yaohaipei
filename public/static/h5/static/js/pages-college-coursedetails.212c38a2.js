(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-college-coursedetails"],{"0733":function(t,e,a){"use strict";var n=a("4ea4");a("d3b7"),a("ac1f"),a("25f0"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("1fa5")),o={components:{uniTopBar:i.default},data:function(){return{id:"",fab:!1,content:"",height:"",toptitle:"课程详情",title:"",course:!1,showpage:!1}},onLoad:function(t){var e=this;uni.showLoading({title:"加载中,请稍后..."}),this.height=this.StatusBar,e.id=t.id,t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(a){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code,invite:a.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.collegeDetails()}})},fail:function(a){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.collegeDetails()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.updateuser(e.data.id)}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/api/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.collegeDetails()):wxlogin()}})},collegeDetails:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/collegeDetails",data:{mid:e.data.id,id:t.id},method:"POST",success:function(a){t.content=a.data.data.info;var n=a.data.data.info.content;t.content.content=n.replace(/\<img/gi,'<img style="border-radius: 1.5vw;width:100%" '),t.content&&(uni.hideLoading(),t.showpage=!0),t.share(t.content,e.data.company_id,e.data.id)}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/collegeDetails",data:{id:t.id},method:"POST",success:function(e){t.content=e.data.data.list;var a=e.data.data.list.content;t.content.content=a.replace(/\<img/gi,'<img style="border-radius: 1.5vw;width:100%" '),t.content&&(uni.hideLoading(),t.showpage=!0),t.share(t.content,0,0)}})}})},share:function(t){function e(e,a,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e,a){var n=t.title;t.sharetitle&&(n=t.sharetitle);var i=t.title+"，点击查看详情";if(t.sharecontent&&(i=t.sharecontent),t.img)var o=t.img;else o="https://www.hongrensutui.com/uploads/share/college_video_logo.png";share(n,i,o,a)}))}};e.default=o},"13d1":function(t,e,a){"use strict";a.r(e);var n=a("f394"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"1fa5":function(t,e,a){"use strict";a.r(e);var n=a("8043"),i=a("13d1");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("e8da");var s,r=a("f0c5"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"07edaae6",null,!1,n["a"],s);e["default"]=u.exports},8043:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?a("span",{staticClass:"clearfix"},[t.within?a("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):a("span",[t.title?a("span",{staticClass:"title"},[t._v(t._s(t.title))]):a("span",{staticClass:"title"},[t._v("红人速推")])])]):a("span",[t.within?a("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):a("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},"82ce":function(t,e,a){"use strict";a.r(e);var n=a("84cb"),i=a("e465");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);var s,r=a("f0c5"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"74f318f5",null,!1,n["a"],s);e["default"]=u.exports},"84cb":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showpage?a("v-uni-view",{staticClass:"coursedetails"},[a("uni-top-bar",{attrs:{title:t.toptitle}}),a("v-uni-video",{style:{top:t.height+43+"px"},attrs:{controls:!0,autoplay:"true",preload:"auto","x-webkit-airplay":"true","x5-playsinline":"true","webkit-playsinline":"true",playsinline:"true",src:t.content["video"]}}),a("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+220+"px"}},[a("v-uni-view",{staticClass:"count"},[a("v-uni-view",{staticClass:"tip"},[t._v("红人速推学院")]),a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.content.title))]),a("v-uni-view",{staticClass:"time solid-bottom"},[t._l(t.content.type,(function(e,n){return a("v-uni-view",{key:n,staticClass:"cu-tag round bg-orange light"},[1==e?a("span",[t._v("#抖音")]):t._e(),0==e?a("span",[t._v("#快手")]):t._e()])})),a("v-uni-view",{staticClass:"cu-tag round light bg-grey"},[t._v(t._s(t.content.category))]),a("v-uni-view",{staticClass:"hits"},[t._v(t._s(t.content.views)+"人已学习")])],2),a("v-uni-view",{staticClass:"data"},[a("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}})],1)],1)],1)],1):t._e()},o=[]},aef7:function(t,e,a){var n=a("de5e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("02904e2c",n,!0,{sourceMap:!1,shadowMode:!1})},de5e:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},e465:function(t,e,a){"use strict";a.r(e);var n=a("0733"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},e8da:function(t,e,a){"use strict";var n=a("aef7"),i=a.n(n);i.a},f394:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=n}}]);