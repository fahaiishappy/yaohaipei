(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-coursedetails"],{"2cd0":function(t,e,i){"use strict";var n=i("ee27");i("d3b7"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("9dcd")),o={components:{uniTopBar:a.default},data:function(){return{id:"",fab:!1,content:"",height:"",toptitle:"视频详情",title:"",backurl:location.href}},onLoad:function(t){var e=this;this.height=this.StatusBar,e.id=t["id"],t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.collegeDetails()}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.collegeDetails()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin(e.backurl)},fail:function(t){wxlogin(e.backurl)}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.collegeDetails()):wxlogin(e.backurl)}})},collegeDetails:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/collegeDetails",data:{id:t.id},method:"POST",success:function(i){t.content=i.data.data.info;var n=i.data.data.info.content;t.content.content=n.replace(/\<img/gi,'<img style="border-radius: 1.5vw" '),t.share(t.content,e.data.company_id,e.data.id)}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/collegeDetails",data:{id:t.id},method:"POST",success:function(e){t.content=e.data.data.list;var i=e.data.data.list.content;t.content.content=i.replace(/\<img/gi,'<img style="border-radius: 1.5vw" '),t.share(t.content,0,0)}})}})},fabulous:function(){var t=this;t.fab||(t.fab=!0,t.content.fabulous=t.content.fabulous+1)},share:function(t){function e(e,i,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e,i){var n=location.href,a=t.title,o=t.title+"，点击查看详情";if(t.img)var s=t.img;else s="http://cdn.hongrensutui.com/uploads/share/news_logo.png";var d=n;if(e>0)d=d+"&invite="+i;share(n,a,o,s,d)}))}};e.default=o},"48db":function(t,e,i){"use strict";i.r(e);var n=i("7774"),a=i("837c");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("a168");var s,d=i("f0c5"),u=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"dd2776d2",null,!1,n["a"],s);e["default"]=u.exports},7774:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-top-bar",{attrs:{title:t.toptitle}}),i("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+"px"}},[i("v-uni-video",{attrs:{controls:!0,autoplay:"true",preload:"auto","x-webkit-airplay":"true","x5-playsinline":"true","webkit-playsinline":"true",playsinline:"true",src:t.content["video"]}}),i("v-uni-view",{staticClass:"count"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.content.title))]),i("v-uni-view",{staticClass:"time solid-bottom"},[i("v-uni-view",{staticClass:"addtime"},[t._v(t._s(t.content.author)+"   "+t._s(t.content.addtime))]),i("v-uni-view",{staticClass:"hits"},[t._v(t._s(t.content.views)),i("v-uni-view",{staticClass:"iconfont"},[t._v("")])],1)],1),i("v-uni-view",{staticClass:"data"},[i("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}}),i("img",{attrs:{src:"https://www.hongrensutui.com/h5/img/news/news_logo_750_right.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"follow solid-top text-center"},[i("v-uni-view",{staticClass:"fabulous solid",class:t.fab?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fabulous.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"iconfont"},[t._v("")]),i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.content.fabulous))])],1),i("v-uni-view",{staticClass:"encourage"},[t._v("觉得不错，鼓励一下")])],1)],1)],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"837c":function(t,e,i){"use strict";i.r(e);var n=i("2cd0"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"90f0":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".hongren[data-v-dd2776d2]{bottom:0}.count[data-v-dd2776d2]{padding:5vw 3vw}.title[data-v-dd2776d2]{color:#333;font-size:5vw;font-weight:700}.time[data-v-dd2776d2]{color:#666;font-size:3.6vw;padding:5vw 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.time .hits[data-v-dd2776d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.time .hits .iconfont[data-v-dd2776d2]{font-size:3.5vw;margin-left:1vw;color:#6c757d}.data[data-v-dd2776d2]{color:#333;font-size:4.3vw;line-height:7vw;padding:4vw 0}.data img[data-v-dd2776d2]{width:100%;border-radius:1.5vw}.data[data-v-dd2776d2] img{margin-top:1.5vw;border-radius:1.5vw}.follow[data-v-dd2776d2]{padding-top:6vw;padding-bottom:4vw}.fabulous[data-v-dd2776d2]{width:16vw;height:16vw;left:50%;margin-left:-8vw;border-radius:50%;padding-top:3vw}.fabulous .iconfont[data-v-dd2776d2]{font-size:6vw;color:#ccc}.fabulous .num[data-v-dd2776d2]{font-size:3.2vw;margin-top:1vw;color:#777}.fabulous.active[data-v-dd2776d2]{border:1px solid #f37b1d}.fabulous.active .num[data-v-dd2776d2],\n.fabulous.active .iconfont[data-v-dd2776d2]{color:#f37b1d}.encourage[data-v-dd2776d2]{color:#999;margin-top:3vw;font-size:3.4vw}uni-video[data-v-dd2776d2]{width:100%;height:50vw;top:0}",""]),t.exports=e},a168:function(t,e,i){"use strict";var n=i("a658"),a=i.n(n);a.a},a658:function(t,e,i){var n=i("90f0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("013ca449",n,!0,{sourceMap:!1,shadowMode:!1})}}]);