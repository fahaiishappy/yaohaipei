(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-college-coursedetails"],{"05ef":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=i},3734:function(t,e,n){"use strict";n.r(e);var i=n("c2d5"),a=n("75eb");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("d973");var s,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"525162bc",null,!1,i["a"],s);e["default"]=u.exports},"453f":function(t,e,n){"use strict";n.r(e);var i=n("e279"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"4fb0":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'.cu-bar[data-v-525162bc]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-525162bc]{margin-left:3vw;height:30px}.cuIcon-back[data-v-525162bc]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-525162bc]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-525162bc]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-525162bc]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-525162bc]{width:auto}.cuIcon-close[data-v-525162bc]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},5713:function(t,e,n){var i=n("4fb0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("645c1318",i,!0,{sourceMap:!1,shadowMode:!1})},"75eb":function(t,e,n){"use strict";n.r(e);var i=n("05ef"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"7d0e":function(t,e,n){"use strict";n.r(e);var i=n("b216"),a=n("453f");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var s,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"c86e8506",null,!1,i["a"],s);e["default"]=u.exports},b216:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showpage?n("v-uni-view",{staticClass:"coursedetails"},[n("uni-top-bar",{attrs:{title:t.toptitle}}),n("v-uni-video",{style:{top:t.height+43+"px"},attrs:{controls:!0,autoplay:"true",preload:"auto","x-webkit-airplay":"true","x5-playsinline":"true","webkit-playsinline":"true",playsinline:"true",src:t.content["video"]}}),n("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+220+"px"}},[n("v-uni-view",{staticClass:"count"},[n("v-uni-view",{staticClass:"tip"},[t._v("红人速推学院")]),n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.content.title))]),n("v-uni-view",{staticClass:"time solid-bottom"},[t._l(t.content.type,(function(e,i){return n("v-uni-view",{key:i,staticClass:"cu-tag round bg-orange light"},[1==e?n("span",[t._v("#抖音")]):t._e(),0==e?n("span",[t._v("#快手")]):t._e()])})),n("v-uni-view",{staticClass:"cu-tag round light bg-grey"},[t._v(t._s(t.content.category))]),n("v-uni-view",{staticClass:"hits"},[t._v(t._s(t.content.views)+"人已学习")])],2),n("v-uni-view",{staticClass:"data"},[n("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}})],1)],1)],1)],1):t._e()},o=[]},c2d5:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?n("span",{staticClass:"clearfix"},[t.within?n("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):n("span",[t.title?n("span",{staticClass:"title"},[t._v(t._s(t.title))]):n("span",{staticClass:"title"},[t._v("红人速推")])])]):n("span",[t.within?n("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):n("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},d973:function(t,e,n){"use strict";var i=n("5713"),a=n.n(i);a.a},e279:function(t,e,n){"use strict";var i=n("4ea4");n("d3b7"),n("ac1f"),n("25f0"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("3734")),o={components:{uniTopBar:a.default},data:function(){return{id:"",fab:!1,content:"",height:"",toptitle:"课程详情",title:"",course:!1,showpage:!1}},onLoad:function(t){var e=this;uni.showLoading({title:"加载中,请稍后..."}),this.height=this.StatusBar,e.id=t.id,t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:n.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.collegeDetails()}})},fail:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.collegeDetails()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.updateuser(e.data.id)}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.collegeDetails()):wxlogin()}})},collegeDetails:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/collegeDetails",data:{mid:e.data.id,id:t.id},method:"POST",success:function(n){t.content=n.data.data.info;var i=n.data.data.info.content;t.content.content=i.replace(/\<img/gi,'<img style="border-radius: 1.5vw;width:100%" '),t.content&&(uni.hideLoading(),t.showpage=!0),t.share(t.content,e.data.company_id,e.data.id)}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/collegeDetails",data:{id:t.id},method:"POST",success:function(e){t.content=e.data.data.list;var n=e.data.data.list.content;t.content.content=n.replace(/\<img/gi,'<img style="border-radius: 1.5vw;width:100%" '),t.content&&(uni.hideLoading(),t.showpage=!0),t.share(t.content,0,0)}})}})},share:function(t){function e(e,n,i){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e,n){var i=t.title;t.sharetitle&&(i=t.sharetitle);var a=t.title+"，点击查看详情";if(t.sharecontent&&(a=t.sharecontent),t.img)var o=t.img;else o="https://www.hongrensutui.com/uploads/share/college_video_logo.png";share(i,a,o,n)}))}};e.default=o}}]);