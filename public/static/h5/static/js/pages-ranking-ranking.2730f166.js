(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ranking-ranking"],{"0b6a":function(t,a,i){"use strict";i.r(a);var e=i("4464"),n=i("51e7");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);var u,r=i("f0c5"),o=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"0eef61b2",null,!1,e["a"],u);a["default"]=o.exports},"0cb1":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=a},"3bf9":function(t,a,i){"use strict";i("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=e},4464:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return t.showpage?i("v-uni-view",[i("v-uni-view",{staticClass:"hongren ranking",style:{top:"0"}},[i("v-uni-view",{staticClass:"topimg"},[i("img",{attrs:{src:"https://www.hongrensutui.com/uploads/zhuanti/phb/phb1.png"}}),1==t.list.type?i("v-uni-view",{staticClass:"week"},[t._v(t._s(t.list.time))]):t._e(),2==t.list.type?i("v-uni-view",{staticClass:"week"},[t._v(t._s(t.list.time))]):t._e(),3==t.list.type?i("v-uni-view",{staticClass:"week"},[t._v(t._s(t.list.time))]):t._e()],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"row"},[t._v("排名")]),i("v-uni-view",{staticClass:"anchor"},[t._v("主播")]),i("v-uni-view",{staticClass:"amount"}),i("v-uni-view",{staticClass:"fans"},[t._v("粉丝量")]),i("v-uni-view",{staticClass:"forehead"},[t._v("销售额")])],1),t._l(t.list.data,(function(a,e){return i("v-uni-view",{key:e,staticClass:"list"},[i("v-uni-view",{staticClass:"row"},[i("img",{attrs:{src:"https://www.hongrensutui.com/uploads/zhuanti/phb/"+e+".png",mode:"widthFix"}})]),i("v-uni-view",{staticClass:"anchor clearfix"},[i("img",{attrs:{src:a.avatar}})]),i("v-uni-view",{staticClass:"amount ellipsis"},[t._v(t._s(a.nickname))]),i("v-uni-view",{staticClass:"fans"},[t._v(t._s(a.volume))]),i("v-uni-view",{staticClass:"forehead"},[t._v(t._s(a.quota))])],1)}))],2),i("v-uni-view",{staticClass:"bottomimg"},[i("img",{attrs:{src:"https://www.hongrensutui.com/uploads/zhuanti/phb/phb3.png"}})])],1)],1):t._e()},s=[]},"51e7":function(t,a,i){"use strict";i.r(a);var e=i("73c8"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},"5d65":function(t,a,i){"use strict";i.r(a);var e=i("3bf9"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},"73c8":function(t,a,i){"use strict";var e=i("4ea4");i("d3b7"),i("25f0"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("99be")),s={components:{uniTopBar:n.default},data:function(){return{toptitle:"红人带货排行榜",userInfo:[],showpage:!0,height:0,type:"",list:""}},onLoad:function(t){var a=this;this.height=this.StatusBar,t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),a.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.ranking(a.userInfo.id)}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code},method:"POST",success:function(t){a.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.ranking(a.userInfo.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?a.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(a){""!=a.data&&null!=a.data&&t.updateuser(a.data.id)}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/api/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(a.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.ranking(a.userInfo.id)):wxlogin()}})},ranking:function(t){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/ranking",data:{type:a.type},method:"POST",success:function(i){a.list=i.data.data.list,a.share(a.list.sharetitle,a.list.sharecontent,t)}})},share:function(t){function a(a,i,e){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(t,a,i){t=t,a=a;var e="https://www.hongrensutui.com/uploads/share/bangdan_logo.png";share(t,a,e,i)}))}};a.default=s},"814e":function(t,a,i){var e=i("0cb1");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("7971c496",e,!0,{sourceMap:!1,shadowMode:!1})},8886:function(t,a,i){"use strict";var e=i("814e"),n=i.n(e);n.a},"99be":function(t,a,i){"use strict";i.r(a);var e=i("f045"),n=i("5d65");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("8886");var u,r=i("f0c5"),o=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"07edaae6",null,!1,e["a"],u);a["default"]=o.exports},f045:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):i("span",[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])])]):i("span",[t.within?i("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]}}]);