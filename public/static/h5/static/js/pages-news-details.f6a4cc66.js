(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-details"],{"0ce5":function(t,a,e){"use strict";e.r(a);var n=e("4e76"),i=e("adc6");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("57af");var c,s=e("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"4c3ae369",null,!1,n["a"],c);a["default"]=u.exports},"196a":function(t,a,e){"use strict";var n=e("ee27");e("d3b7"),e("ac1f"),e("25f0"),e("5319"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("7cd4")),o=n(e("9dcd")),c={components:{uniBottomBar:i.default,uniTopBar:o.default},data:function(){return{id:"",fab:!1,content:"",height:"",toptitle:"资讯详情",title:""}},onLoad:function(t){var a=this;this.height=this.StatusBar,a.id=t["id"],t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),a.newsDetails()}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),a.newsDetails()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?a.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),a.newsDetails()):wxlogin()}})},newsDetails:function(){var t=this;uni.getStorage({key:"userInfo",success:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/newsDetails",data:{id:t.id},method:"POST",success:function(e){t.content=e.data.data.list;var n=e.data.data.list.content;t.content.content=n.replace(/\<img/gi,'<img style="border-radius: 1.5vw" '),t.share(t.content,a.data.company_id,a.data.id)}})},fail:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/newsDetails",data:{id:t.id},method:"POST",success:function(a){t.content=a.data.data.list;var e=a.data.data.list.content;t.content.content=e.replace(/\<img/gi,'<img style="border-radius: 1.5vw" '),t.share(t.content,0,0)}})}})},fabulous:function(){var t=this;t.fab||(t.fab=!0,t.content.fabulous=t.content.fabulous+1)},share:function(t){function a(a,e,n){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(t,a,e){var n=t.title,i=t.title+"，点击查看详情";if(t.img)var o=t.img;else o="https://www.hongrensutui.com/uploads/share/news_logo.png";share(n,i,o,e)}))}};a.default=c},"268a5":function(t,a,e){"use strict";var n=e("27f6"),i=e.n(n);i.a},"27f6":function(t,a,e){var n=e("cba9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("4afc9d4c",n,!0,{sourceMap:!1,shadowMode:!1})},"2b11":function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"uniBottonBar",props:{barid:{type:Number,default:0}},data:function(){return{modalName:null}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},NavChange:function(t,a,e){t=e?t+"?id="+e:t+"?id="+a,uni.navigateTo({url:"/pages/"+t})}}};a.default=n},"4e76":function(t,a,e){"use strict";var n,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("uni-top-bar",{attrs:{title:t.toptitle}}),e("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+"px"}},[e("v-uni-view",{staticClass:"count"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.content.title))]),e("v-uni-view",{staticClass:"time solid-bottom"},[e("v-uni-view",{staticClass:"addtime"},[t._v(t._s(t.content.author)+"   "+t._s(t.content.addtime))]),e("v-uni-view",{staticClass:"hits"},[t._v(t._s(t.content.hits)),e("v-uni-view",{staticClass:"iconfont"},[t._v("")])],1)],1),e("v-uni-view",{staticClass:"data"},[e("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}}),e("img",{attrs:{src:"https://www.hongrensutui.com/h5/img/news/news_logo_750_right.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"follow solid-top text-center"},[e("v-uni-view",{staticClass:"fabulous solid",class:t.fab?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.fabulous.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"iconfont"},[t._v("")]),e("v-uni-view",{staticClass:"num"},[t._v(t._s(t.content.fabulous))])],1),e("v-uni-view",{staticClass:"encourage"},[t._v("觉得不错，鼓励一下")])],1)],1)],1)],1)},o=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}))},"50a4":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".hongren[data-v-4c3ae369]{bottom:0}.count[data-v-4c3ae369]{padding:5vw 3vw}.title[data-v-4c3ae369]{color:#333;font-size:5vw;font-weight:700}.time[data-v-4c3ae369]{color:#666;font-size:3.6vw;padding:5vw 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.time .hits[data-v-4c3ae369]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.time .hits .iconfont[data-v-4c3ae369]{font-size:3.5vw;margin-left:1vw;color:#6c757d}.data[data-v-4c3ae369]{color:#333;font-size:4.3vw;line-height:7vw;padding:4vw 0}.data img[data-v-4c3ae369]{width:100%;border-radius:1.5vw}.data[data-v-4c3ae369] img{margin-top:1.5vw;border-radius:1.5vw}.follow[data-v-4c3ae369]{padding-top:6vw;padding-bottom:4vw}.fabulous[data-v-4c3ae369]{width:16vw;height:16vw;left:50%;margin-left:-8vw;border-radius:50%;padding-top:3vw}.fabulous .iconfont[data-v-4c3ae369]{font-size:6vw;color:#ccc}.fabulous .num[data-v-4c3ae369]{font-size:3.2vw;margin-top:1vw;color:#777}.fabulous.active[data-v-4c3ae369]{border:1px solid #f37b1d}.fabulous.active .num[data-v-4c3ae369],\n.fabulous.active .iconfont[data-v-4c3ae369]{color:#f37b1d}.encourage[data-v-4c3ae369]{color:#999;margin-top:3vw;font-size:3.4vw}",""]),t.exports=a},"53d8":function(t,a,e){"use strict";e.r(a);var n=e("2b11"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"57af":function(t,a,e){"use strict";var n=e("cc0c"),i=e.n(n);i.a},"7cd4":function(t,a,e){"use strict";e.r(a);var n=e("ebe1"),i=e("53d8");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("268a5");var c,s=e("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"09c7dfac",null,!1,n["a"],c);a["default"]=u.exports},adc6:function(t,a,e){"use strict";e.r(a);var n=e("196a"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},cba9:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".cu-bar[data-v-09c7dfac]{position:fixed;bottom:0;left:0;right:0;width:100%;height:12vw;min-height:12vw;max-height:12vw;z-index:199;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .text-red[data-v-09c7dfac]{color:#e71d36}.cu-bar .text-gray[data-v-09c7dfac]{color:#9eb3c2}.cu-bar.tabbar.shadow[data-v-09c7dfac]{box-shadow:0 -1px 2px rgba(26,26,26,.1)}",""]),t.exports=a},cc0c:function(t,a,e){var n=e("50a4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("b9fe6ada",n,!0,{sourceMap:!1,shadowMode:!1})},ebe1:function(t,a,e){"use strict";var n,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[e("v-uni-view",{staticClass:"action",class:1==t.barid?"text-red":"text-gray",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.NavChange("index/index",1)}}},[e("v-uni-view",{class:1==t.barid?"cuIcon-homefill":"cuIcon-home"}),t._v("首页")],1),e("v-uni-view",{staticClass:"action",class:2==t.barid?"text-red":"text-gray",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.NavChange("platform/platform_list",2,1)}}},[e("v-uni-view",{class:2==t.barid?"cuIcon-crownfill":"cuIcon-crown"}),t._v("红人")],1),e("v-uni-view",{staticClass:"action",class:3==t.barid?"text-red":"text-gray",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.NavChange("case/list",3)}}},[e("v-uni-view",{class:3==t.barid?"cuIcon-discoverfill":"cuIcon-discover"}),t._v("案例")],1),e("v-uni-view",{staticClass:"action",class:4==t.barid?"text-red":"text-gray",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.NavChange("merchant/merchant_list",4)}}},[e("v-uni-view",{class:4==t.barid?"cuIcon-shopfill":"cuIcon-shop"}),t._v("商家")],1),e("v-uni-view",{staticClass:"action",class:5==t.barid?"text-red":"text-gray",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.NavChange("user/user",5)}}},[e("v-uni-view",{class:5==t.barid?"cuIcon-myfill":"cuIcon-friendfavor"}),t._v("我的")],1)],1)},o=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}))}}]);