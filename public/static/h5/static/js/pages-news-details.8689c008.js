(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-details"],{"107e":function(t,a,i){"use strict";i.r(a);var e=i("39b9"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"20b3":function(t,a,i){"use strict";i.r(a);var e=i("d6dd"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"39b9":function(t,a,i){"use strict";i("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=e},"6cc6":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.auth[data-v-0ac588e7]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-0ac588e7]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-0ac588e7]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-0ac588e7]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-0ac588e7]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-0ac588e7]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-0ac588e7]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-0ac588e7]{height:100vh;z-index:300}.cu-bar[data-v-0ac588e7]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-0ac588e7]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-0ac588e7]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-0ac588e7]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-0ac588e7]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-0ac588e7]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-0ac588e7]{width:auto}.cuIcon-close[data-v-0ac588e7]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=a},"6fc3":function(t,a,i){var e=i("6cc6");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("129094d4",e,!0,{sourceMap:!1,shadowMode:!1})},"8ca3":function(t,a,i){"use strict";var e=i("6fc3"),n=i.n(e);n.a},a37a:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".hongren[data-v-1d94a1bc]{bottom:0}.count[data-v-1d94a1bc]{padding:5vw 3vw}.title[data-v-1d94a1bc]{color:#333;font-size:5vw;font-weight:700}.time[data-v-1d94a1bc]{color:#666;font-size:3.6vw;padding:5vw 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.time .hits[data-v-1d94a1bc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.time .hits .iconfont[data-v-1d94a1bc]{font-size:3.5vw;margin-left:1vw;color:#6c757d}.data[data-v-1d94a1bc]{color:#333;font-size:4.3vw;line-height:7vw;padding:4vw 0}.data img[data-v-1d94a1bc]{width:100%;border-radius:1.5vw}.data[data-v-1d94a1bc] img{margin-top:1.5vw;border-radius:1.5vw}.follow[data-v-1d94a1bc]{padding-top:6vw;padding-bottom:4vw}.fabulous[data-v-1d94a1bc]{width:16vw;height:16vw;left:50%;margin-left:-8vw;border-radius:50%;padding-top:3vw}.fabulous .iconfont[data-v-1d94a1bc]{font-size:6vw;color:#ccc}.fabulous .num[data-v-1d94a1bc]{font-size:3.2vw;margin-top:1vw;color:#777}.fabulous.active[data-v-1d94a1bc]{border:1px solid #f37b1d}.fabulous.active .num[data-v-1d94a1bc],\n.fabulous.active .iconfont[data-v-1d94a1bc]{color:#f37b1d}.encourage[data-v-1d94a1bc]{color:#999;margin-top:3vw;font-size:3.4vw}",""]),t.exports=a},b3fd:function(t,a,i){"use strict";var e,n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("uni-top-bar",{attrs:{title:t.toptitle}}),i("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+"px"}},[t.content?i("v-uni-view",{staticClass:"count"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.content.title))]),i("v-uni-view",{staticClass:"time solid-bottom"},[i("v-uni-view",{staticClass:"addtime"},[t._v(t._s(t.content.author)+"   "+t._s(t.content.addtime))]),i("v-uni-view",{staticClass:"hits"},[t._v(t._s(t.content.hits)),i("v-uni-view",{staticClass:"iconfont"},[t._v("")])],1)],1),i("v-uni-view",{staticClass:"data"},[i("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}}),i("img",{attrs:{src:"https://www.hongrensutui.com/h5/img/news/news_logo_750_right.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"follow solid-top text-center"},[i("v-uni-view",{staticClass:"fabulous solid",class:t.fab?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.fabulous.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"iconfont"},[t._v("")]),i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.content.fabulous))])],1),i("v-uni-view",{staticClass:"encourage"},[t._v("觉得不错，鼓励一下")])],1)],1):t._e()],1)],1)},o=[];i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}))},c74f:function(t,a,i){"use strict";var e,n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[i("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?i("span",[t.title?i("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):i("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?i("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()])])},o=[];i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}))},d2da:function(t,a,i){"use strict";i.r(a);var e=i("b3fd"),n=i("20b3");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("ee82");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"1d94a1bc",null,!1,e["a"],s);a["default"]=r.exports},d654:function(t,a,i){"use strict";i.r(a);var e=i("c74f"),n=i("107e");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("8ca3");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"0ac588e7",null,!1,e["a"],s);a["default"]=r.exports},d6dd:function(t,a,i){"use strict";var e=i("ee27");i("d3b7"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("d654")),o={components:{uniTopBar:n.default},data:function(){return{id:"",fab:!1,content:"",height:"",toptitle:"资讯详情",title:"",userInfo:""}},onLoad:function(t){var a=this;uni.showLoading({title:"加载中"}),this.height=this.StatusBar,a.id=t["id"],t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.newsDetails()}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.newsDetails()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?a.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(a){""!=a.data&&null!=a.data&&t.updateuser(a.data.id)}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),a.userInfo=t.data.data.info,a.newsDetails()):wxlogin()}})},newsDetails:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/newsDetails",data:{id:t.id},method:"POST",success:function(a){t.content=a.data.data.list;var i=a.data.data.list.content;t.content.content=i.replace(/\<img/gi,'<img style="border-radius: 1.5vw" '),t.share(t.content,t.userInfo.company_id,t.userInfo.id),uni.hideLoading()}})},fabulous:function(){var t=this;t.fab||(t.fab=!0,t.content.fabulous=t.content.fabulous+1)},share:function(t){function a(a,i,e){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(t,a,i){var e=t.title,n=t.title+"，点击查看详情";if(t.img)var o=t.img;else o="https://www.hongrensutui.com/uploads/share/news_logo.png";share(e,n,o,i)}))}};a.default=o},e7bb:function(t,a,i){var e=i("a37a");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("5fe93a0c",e,!0,{sourceMap:!1,shadowMode:!1})},ee82:function(t,a,i){"use strict";var e=i("e7bb"),n=i.n(e);n.a}}]);