(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-details"],{"0f5e":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};i.default=a},"2d54":function(t,i,e){"use strict";var a=e("9cc7"),n=e.n(a);n.a},"32d5":function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.showpage?e("v-uni-view",[e("uni-top-bar",{attrs:{title:t.toptitle}}),e("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+"px"}},[e("v-uni-view",{staticClass:"count"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.content.title))]),e("v-uni-view",{staticClass:"time solid-bottom"},[e("v-uni-view",{staticClass:"addtime"},[t._v(t._s(t.content.author)+"   "+t._s(t.content.addtime))]),e("v-uni-view",{staticClass:"hits"},[t._v(t._s(t.content.hits)),e("v-uni-view",{staticClass:"iconfont"},[t._v("")])],1)],1),e("v-uni-view",{staticClass:"data"},[e("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}}),e("img",{attrs:{src:"https://www.hongrensutui.com/h5/img/news/news_logo_750_right.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"follow solid-top text-center"},[e("v-uni-view",{staticClass:"fabulous solid",class:t.fab?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fabulous.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"iconfont"},[t._v("")]),e("v-uni-view",{staticClass:"num"},[t._v(t._s(t.content.fabulous))])],1),e("v-uni-view",{staticClass:"encourage"},[t._v("觉得不错，鼓励一下")])],1)],1)],1)],1):t._e()},o=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}))},7668:function(t,i,e){"use strict";e.r(i);var a=e("32d5"),n=e("ca7f");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("2d54");var s,r=e("f0c5"),u=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"e36585fa",null,!1,a["a"],s);i["default"]=u.exports},"83cd":function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?e("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[e("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?e("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():e("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?e("span",[t.title?e("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):e("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?e("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img&&1==t.barid?e("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e(),t.img&&1!=t.barid?e("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right2.png"}}):t._e()])])},o=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}))},"9b8e":function(t,i,e){"use strict";e.r(i);var a=e("0f5e"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"9cc7":function(t,i,e){var a=e("d09a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("5345295a",a,!0,{sourceMap:!1,shadowMode:!1})},aa9f:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.auth[data-v-9df7cb58]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-9df7cb58]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-9df7cb58]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-9df7cb58]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-9df7cb58]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-9df7cb58]{height:100vh;z-index:300}.cu-bar[data-v-9df7cb58]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-9df7cb58]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-9df7cb58]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-9df7cb58]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-9df7cb58]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9df7cb58]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9df7cb58]{width:auto}.cuIcon-close[data-v-9df7cb58]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=i},b17d:function(t,i,e){var a=e("aa9f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("2d0d384a",a,!0,{sourceMap:!1,shadowMode:!1})},bc82:function(t,i,e){"use strict";var a=e("ee27");e("d3b7"),e("ac1f"),e("25f0"),e("5319"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("e3d7")),o={components:{uniTopBar:n.default},data:function(){return{id:"",fab:!1,content:"",height:"",toptitle:"资讯详情",title:"",userInfo:"",showpage:!1}},onLoad:function(t){var i=this;uni.showLoading({title:"加载中,请稍后..."}),this.height=this.StatusBar,i.id=t["id"],t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),i.userInfo=t.data.data.info,i.newsDetails()}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),i.userInfo=t.data.data.info,i.newsDetails()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?i.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(i){""!=i.data&&null!=i.data&&t.updateuser(i.data.id)}})},methods:{updateuser:function(t){var i=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),i.userInfo=t.data.data.info,i.newsDetails()):wxlogin()}})},newsDetails:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/newsDetails",data:{id:t.id},method:"POST",success:function(i){t.content=i.data.data.list;var e=i.data.data.list.content;t.content.content=e.replace(/\<img/gi,'<img style="border-radius: 1.5vw" '),t.content.content&&(uni.hideLoading(),t.showpage=!0),t.share(t.content,t.userInfo.company_id,t.userInfo.id)}})},fabulous:function(){var t=this;t.fab||(t.fab=!0,t.content.fabulous=t.content.fabulous+1)},share:function(t){function i(i,e,a){return t.apply(this,arguments)}return i.toString=function(){return t.toString()},i}((function(t,i,e){var a=t.title,n=t.title+"，点击查看详情";if(t.img)var o=t.img;else o="https://www.hongrensutui.com/uploads/share/news_logo.png";share(a,n,o,e)}))}};i.default=o},c4f3:function(t,i,e){"use strict";var a=e("b17d"),n=e.n(a);n.a},ca7f:function(t,i,e){"use strict";e.r(i);var a=e("bc82"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},d09a:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".hongren[data-v-e36585fa]{bottom:0}.count[data-v-e36585fa]{padding:5vw 3vw}.title[data-v-e36585fa]{color:#333;font-size:5vw;font-weight:700}.time[data-v-e36585fa]{color:#666;font-size:3.6vw;padding:5vw 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.time .hits[data-v-e36585fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.time .hits .iconfont[data-v-e36585fa]{font-size:3.5vw;margin-left:1vw;color:#6c757d}.data[data-v-e36585fa]{color:#333;font-size:4.3vw;line-height:7vw;padding:4vw 0}.data img[data-v-e36585fa]{width:100%;border-radius:1.5vw}.data[data-v-e36585fa] img{margin-top:1.5vw;border-radius:1.5vw}.follow[data-v-e36585fa]{padding-top:6vw;padding-bottom:4vw}.fabulous[data-v-e36585fa]{width:16vw;height:16vw;left:50%;margin-left:-8vw;border-radius:50%;padding-top:3vw}.fabulous .iconfont[data-v-e36585fa]{font-size:6vw;color:#ccc}.fabulous .num[data-v-e36585fa]{font-size:3.2vw;margin-top:1vw;color:#777}.fabulous.active[data-v-e36585fa]{border:1px solid #f37b1d}.fabulous.active .num[data-v-e36585fa],\n.fabulous.active .iconfont[data-v-e36585fa]{color:#f37b1d}.encourage[data-v-e36585fa]{color:#999;margin-top:3vw;font-size:3.4vw}",""]),t.exports=i},e3d7:function(t,i,e){"use strict";e.r(i);var a=e("83cd"),n=e("9b8e");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("c4f3");var s,r=e("f0c5"),u=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"9df7cb58",null,!1,a["a"],s);i["default"]=u.exports}}]);