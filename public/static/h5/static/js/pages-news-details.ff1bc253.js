(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-details"],{"01ab":function(t,a,e){"use strict";e.r(a);var n=e("ce0e"),i=e("3a49");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("9539");var s,u=e("f0c5"),r=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"7155f446",null,!1,n["a"],s);a["default"]=r.exports},"01c1":function(t,a,e){"use strict";var n=e("4ea4");e("d3b7"),e("ac1f"),e("25f0"),e("5319"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("5ad0")),o={components:{uniTopBar:i.default},data:function(){return{id:"",fab:!1,content:"",height:"",toptitle:"资讯详情",title:"",userInfo:"",showpage:!1}},onLoad:function(t){var a=this;uni.showLoading({title:"加载中,请稍后..."}),this.height=this.StatusBar,a.id=t["id"],t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.newsDetails()}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.newsDetails()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?a.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(a){""!=a.data&&null!=a.data&&t.updateuser(a.data.id)}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.newsDetails()):wxlogin()}})},newsDetails:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/newsDetails",data:{id:t.id},method:"POST",success:function(a){t.content=a.data.data.list;var e=a.data.data.list.content;t.content.content=e.replace(/\<img/gi,'<img style="border-radius: 1.5vw;width:100%"'),t.content.content&&(uni.hideLoading(),t.showpage=!0),t.share(t.content,t.userInfo.company_id,t.userInfo.id)}})},fabulous:function(){var t=this;t.fab||(t.fab=!0,t.content.fabulous=t.content.fabulous+1)},share:function(t){function a(a,e,n){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(t,a,e){var n=t.title,i=t.title+"，点击查看详情";if(t.img)var o=t.img;else o="https://www.hongrensutui.com/uploads/share/news_logo.png";share(n,i,o,e)}))}};a.default=o},"378d":function(t,a,e){"use strict";var n=e("f39f"),i=e.n(n);i.a},"3a49":function(t,a,e){"use strict";e.r(a);var n=e("01c1"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},4674:function(t,a,e){"use strict";e.r(a);var n=e("7137"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"5ad0":function(t,a,e){"use strict";e.r(a);var n=e("8a0d"),i=e("4674");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("378d");var s,u=e("f0c5"),r=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"e4d1a924",null,!1,n["a"],s);a["default"]=r.exports},"6f33":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".hongren[data-v-7155f446]{bottom:0}.count[data-v-7155f446]{padding:3vw}.title[data-v-7155f446]{color:#333;font-size:5vw;font-weight:700}.time[data-v-7155f446]{color:#666;font-size:3.6vw;padding:5vw 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.time .hits[data-v-7155f446]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.time .hits .iconfont[data-v-7155f446]{font-size:3.5vw;margin-left:1vw;color:#6c757d}.data[data-v-7155f446]{color:#333;font-size:4.3vw;line-height:7vw;padding-top:4vw}.data img[data-v-7155f446]{width:100%;border-radius:1.5vw;display:block}.data[data-v-7155f446] img{margin-top:1.5vw;border-radius:1.5vw}.follow[data-v-7155f446]{padding-top:6vw;padding-bottom:4vw}.fabulous[data-v-7155f446]{width:16vw;height:16vw;left:50%;margin-left:-8vw;border-radius:50%;padding-top:3vw}.fabulous .iconfont[data-v-7155f446]{font-size:6vw;color:#ccc}.fabulous .num[data-v-7155f446]{font-size:3.2vw;margin-top:1vw;color:#777}.fabulous.active[data-v-7155f446]{border:1px solid #f37b1d}.fabulous.active .num[data-v-7155f446],\n.fabulous.active .iconfont[data-v-7155f446]{color:#f37b1d}.encourage[data-v-7155f446]{color:#999;margin-top:3vw;font-size:3.4vw}",""]),t.exports=a},7137:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=n},"8a0d":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?e("span",{staticClass:"clearfix"},[t.title?e("span",{staticClass:"title"},[t._v(t._s(t.title))]):e("span",{staticClass:"title"},[t._v("红人速推")])]):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])},o=[]},9048:function(t,a,e){var n=e("6f33");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("1456bcad",n,!0,{sourceMap:!1,shadowMode:!1})},9539:function(t,a,e){"use strict";var n=e("9048"),i=e.n(n);i.a},ce0e:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.showpage?e("v-uni-view",[e("uni-top-bar",{attrs:{title:t.toptitle}}),e("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+"px"}},[e("v-uni-view",{staticClass:"count"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.content.title))]),e("v-uni-view",{staticClass:"time solid-bottom"},[e("v-uni-view",{staticClass:"addtime"},[t._v(t._s(t.content.author)+"   "+t._s(t.content.addtime))]),e("v-uni-view",{staticClass:"hits"},[t._v(t._s(t.content.hits)),e("v-uni-view",{staticClass:"iconfont"},[t._v("")])],1)],1),e("v-uni-view",{staticClass:"data"},[e("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}}),e("img",{attrs:{src:"https://www.hongrensutui.com/h5/img/news/news_logo_750_right.png",mode:"widthFix"}})],1)],1)],1)],1):t._e()},o=[]},ee32:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'.cu-bar[data-v-e4d1a924]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-e4d1a924]{margin-left:3vw;height:30px}.cuIcon-back[data-v-e4d1a924]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-e4d1a924]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-e4d1a924]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-e4d1a924]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-e4d1a924]{width:auto}.cuIcon-close[data-v-e4d1a924]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=a},f39f:function(t,a,e){var n=e("ee32");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("7be1ffd1",n,!0,{sourceMap:!1,shadowMode:!1})}}]);