(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-list"],{"0999":function(t,n,e){"use strict";var i=e("365e"),a=e.n(i);a.a},1463:function(t,n,e){var i=e("8240");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("6125322a",i,!0,{sourceMap:!1,shadowMode:!1})},"2bb0":function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"tipnews"},[t.tip?e("v-uni-view",{staticClass:"animated1 fadeInRight"},[e("v-uni-view",{staticClass:"cuIcon-notificationfill"}),e("span",[e("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),e("span",[t._v("商家"+t._s(t.message.merchant))]),t._v("查看了"),e("span",[t._v("红人"+t._s(t.message.celebrity))])])],1):t._e()],1),e("uni-top-bar"),e("app-tabs",{attrs:{tabs:t.tabs,fixed:!0,topheight:t.topheight+43},model:{value:t.tabIndex,callback:function(n){t.tabIndex=n},expression:"tabIndex"}}),e("v-uni-swiper",{staticClass:"swiper",style:{height:t.height},attrs:{top:t.topheight+44+"px",current:t.tabIndex},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.swiperChange.apply(void 0,arguments)}}},[e("v-uni-swiper-item",[e("mescroll-item",{attrs:{i:0,index:t.tabIndex,tabs:t.tabs}})],1),e("v-uni-swiper-item",[e("mescroll-item",{attrs:{i:1,index:t.tabIndex,tabs:t.tabs}})],1)],1)],1)},s=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}))},"364d":function(t,n,e){"use strict";var i=e("1463"),a=e.n(i);a.a},"365e":function(t,n,e){var i=e("9b42");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("258fccdf",i,!0,{sourceMap:!1,shadowMode:!1})},4826:function(t,n,e){"use strict";e.r(n);var i=e("6047"),a=e("8fe2");for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("364d");var o,r=e("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"39b7803e",null,!1,i["a"],o);n["default"]=u.exports},4828:function(t,n,e){"use strict";e.r(n);var i=e("95b9"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},6047:function(t,n,e){"use strict";var i={mescrollUni:e("c499").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("mescroll-uni",{ref:"mescrollRef",attrs:{height:"100%",top:t.topheight+43+42+"px",down:t.downOption,up:t.upOption},on:{init:function(n){arguments[0]=n=t.$handleEvent(n),t.mescrollInit.apply(void 0,arguments)},down:function(n){arguments[0]=n=t.$handleEvent(n),t.downCallback.apply(void 0,arguments)},up:function(n){arguments[0]=n=t.$handleEvent(n),t.upCallback.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"information_list"},t._l(t.goods,(function(n,i){return e("v-uni-view",{key:i,staticClass:"list solid-bottom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("news/details",n.id)}}},[e("v-uni-view",{staticClass:"data"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(n.title))]),e("v-uni-view",{staticClass:"time"},[e("v-uni-view",[t._v(t._s(n.addtime))]),e("v-uni-view",{staticClass:"hits"},[e("v-uni-view",{staticClass:"click"},[t._v(t._s(n.hits))]),e("v-uni-view",{staticClass:"iconfont"},[t._v("")])],1)],1)],1),n["img"]?e("img",{staticClass:"information_img",attrs:{src:n["img"],mode:"widthFix"}}):t._e(),n["img"]||1!=n["type"]?t._e():e("img",{staticClass:"information_img",attrs:{src:"https://www.hongrensutui.com/h5/img/nopic.png",mode:"widthFix"}}),n["img"]||2!=n["type"]?t._e():e("img",{staticClass:"information_img",attrs:{src:"https://www.hongrensutui.com/h5/img/nopic2.png",mode:"widthFix"}})],1)})),1)],1)},s=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}))},"61dc":function(t,n,e){"use strict";var i=e("ee27");e("99af"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("7f51")),s=i(e("7265")),o={mixins:[a.default,s.default],data:function(){return{downOption:{auto:!1},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"~ 空空如也 ~"}},height:"400px",goods:[],topheight:0,userInfo:[]}},props:{tabs:Array},mounted:function(){this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px"},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var n=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data?(n.userInfo=e.data,n.totalcewebrity(t,n.userInfo.id)):n.totalcewebrity(t)},fail:function(e){n.totalcewebrity(t)}})},totalcewebrity:function(t){var n=this,e=this,i=e.tabs[e.i];if("资讯"==i)var a=2;if("快讯"==i)a=1;uni.request({url:"https://www.hongrensutui.com/api/index/totalNews",data:{type:a,pagenum:t.num,pagesize:t.size},method:"POST",success:function(i){var a=i.data.data.list,s=a.length;1==t.num&&(e.goods=[]),e.goods=e.goods.concat(i.data.data.list),n.mescroll.endByPage(s),setTimeout((function(){n.mescroll.endSuccess(s)}),20)},fail:function(t){e.mescroll.endErr()}})},navToDetailPage:function(t,n){n&&(t=t+"?id="+n),uni.navigateTo({url:"/pages/"+t})}}};n.default=o},"72a6":function(t,n,e){"use strict";e.r(n);var i=e("2bb0"),a=e("4828");for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("0999");var o,r=e("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"a33899da",null,!1,i["a"],o);n["default"]=u.exports},8240:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.information_list .list[data-v-39b7803e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:4vw 3vw;background-color:#fff}.information_list .list .information_img[data-v-39b7803e]{width:20vw;height:15vw;border-radius:2vw;margin-left:3vw;border:1px solid #f5f5f5}.information_list .list .data[data-v-39b7803e]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.information_list .list .data .name[data-v-39b7803e]{font-size:3.8vw;line-height:5vw;color:#333;width:100%;height:10vw;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-clamp:2}.information_list .list .data .time[data-v-39b7803e]{font-size:3.2vw;margin-top:1.5vw;color:#aaa;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.information_list .list .data .time .hits[data-v-39b7803e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-left:1vw;margin-right:1.9vw}.information_list .list .data .time .hits .iconfont[data-v-39b7803e]{font-size:3.5vw;margin-left:1vw}",""]),t.exports=n},"8fe2":function(t,n,e){"use strict";e.r(n);var i=e("61dc"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},"95b9":function(t,n,e){"use strict";var i=e("ee27");e("d3b7"),e("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("9dcd")),s=i(e("3666")),o=i(e("4826")),r={components:{uniTopBar:a.default,AppTabs:s.default,MescrollItem:o.default},data:function(){return{height:"400px",tabs:["快讯","资讯"],tabIndex:0,tip:!1,message:"",messagelist:"",topheight:0,userInfo:[],backurl:location.href}},onLoad:function(t){var n=this;this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",n.getRandomArbitrary(0,49),n.getmessage(),n.timerInt=setInterval((function(){if(n.codetime--,n.message=n.messagelist[n.getRandomArbitrary(0,50)],n.message.celebrity=n.message.celebrity[0]+n.message.celebrity[1]+"***",n.message.merchant=n.message.merchant[0]+n.message.merchant[1]+"***",n.tip=!n.tip,0==n.codetime)return clearInterval(n.timerInt),void(n.codetime=2e3)}),4e3),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),n.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),n.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){n.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),n.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?(n.userInfo=t.data,n.updateuser(t.data.id)):wxlogin()},fail:function(t){wxlogin()}})},methods:{updateuser:function(t){var n=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(self.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),n.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},getRandomArbitrary:function(t,n){return Math.floor(Math.random()*(n-t)+t)},getmessage:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(n){t.messagelist=n.data.data.list,t.message=t.messagelist[t.getRandomArbitrary(0,50)],t.message.celebrity=t.message.celebrity[0]+t.message.celebrity[1]+"***",t.message.merchant=t.message.merchant[0]+t.message.merchant[1]+"***",t.tip=!t.tip}})},swiperChange:function(t){this.tabIndex=t.detail.current},NavChange:function(t){uni.redirectTo({url:"/pages/index/index?PageCur="+t})},share:function(t){function n(n,e){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){var e="红人速推 | 网红直播带货一站式服务平台",i="红人速推就是网红多 商家多，直播带货就上红人速推。",a="http://cdn.hongrensutui.com/uploads/share/home_logo2.png";share(e,i,a,n)}))}};n.default=r},"9b42":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".tipnews[data-v-a33899da]{height:15vw;position:fixed;color:#fff;z-index:999999;top:24vw}.swiper[data-v-a33899da]{position:fixed;left:0;right:0;height:500px}",""]),t.exports=n}}]);