(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-share-list"],{"0157":function(n,t,e){"use strict";var a=e("c735"),i=e.n(a);i.a},"18bd":function(n,t,e){"use strict";var a,i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("uni-top-bar",{attrs:{barid:1,xueyuan:n.xueyuan}}),e("app-tabs",{attrs:{tabs:n.tabs,fixed:!0,topheight:n.topheight+43},model:{value:n.tabIndex,callback:function(t){n.tabIndex=t},expression:"tabIndex"}}),e("v-uni-swiper",{staticClass:"swiper",style:{height:n.height},attrs:{top:n.topheight+44+"px",current:n.tabIndex},on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.swiperChange.apply(void 0,arguments)}}},[e("v-uni-swiper-item",[e("mescroll-item",{attrs:{i:0,index:n.tabIndex,category:5,tabs:n.tabs}})],1),e("v-uni-swiper-item",[e("mescroll-item",{attrs:{i:1,index:n.tabIndex,category:4,tabs:n.tabs}})],1),e("v-uni-swiper-item",[e("mescroll-item",{attrs:{i:2,index:n.tabIndex,category:1,tabs:n.tabs}})],1),e("v-uni-swiper-item",[e("mescroll-item",{attrs:{i:3,index:n.tabIndex,category:2,tabs:n.tabs}})],1),e("v-uni-swiper-item",[e("mescroll-item",{attrs:{i:4,index:n.tabIndex,category:3,tabs:n.tabs}})],1)],1),e("v-uni-view",{staticClass:"customer round shadow text-center",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.goback.apply(void 0,arguments)}}},[e("img",{attrs:{src:"https://www.hongrensutui.com/uploads/share/back_home.png"}})])],1)},o=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}))},"29ec":function(n,t,e){"use strict";var a=e("7611"),i=e.n(a);i.a},"2c8d":function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,".swiper[data-v-2a6d45c3]{background-color:#fff}\n\n/* 返回上一页*/.customer[data-v-2a6d45c3]{position:fixed;bottom:18vw;right:6vw;width:12vw;height:12vw;font-size:9vw;color:#fff;z-index:199;text-align:center;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.customer img[data-v-2a6d45c3]{width:100%;height:100%;border-radius:50%}",""]),n.exports=t},"541d":function(n,t,e){"use strict";var a={mescrollUni:e("c499").default},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("mescroll-uni",{ref:"mescrollRef",staticStyle:{"background-color":"#efefef"},attrs:{height:"100%",top:n.topheight+43+44+"px",down:n.downOption,up:n.upOption},on:{init:function(t){arguments[0]=t=n.$handleEvent(t),n.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=n.$handleEvent(t),n.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=n.$handleEvent(t),n.upCallback.apply(void 0,arguments)}}},n._l(n.goods,(function(t,a){return e("v-uni-view",{key:a,staticClass:"sharelist"},[e("v-uni-view",{staticClass:"logo"},[e("img",{attrs:{src:"https://www.hongrensutui.com/uploads/share/home_logo2.png"}})]),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"name"},[n._v("红人速推")]),1==t.category?e("span",{staticClass:"cu-tag light bg-red round sm"},[n._v("每日心语")]):n._e(),2==t.category?e("span",{staticClass:"cu-tag light bg-red round sm"},[n._v("拉新素材")]):n._e(),e("span",{staticClass:"share cu-tag light bg-orange radius",on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.copy(t.content,t.img)}}},[n._v("发圈"),e("span",{staticClass:"light text-orange cuIcon-forward"})])]),e("v-uni-view",{staticClass:"cont"},[n._v(n._s(t.content))]),e("v-uni-view",{staticClass:"img"},[e("img",{attrs:{src:t["img"]},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.imgMap(t["img"])}}})])],1)],1)})),1)],1)},o=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}))},5724:function(n,t,e){"use strict";var a=e("ee27");e("99af"),e("a9e3"),e("d3b7"),e("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("7f51")),o=a(e("7265")),s={mixins:[i.default,o.default],data:function(){return{goods:"",height:"",topheight:"",toptitle:"每日心语",downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"~ 空空如也 ~"}}}},filters:{formatDate:function(n){var t=new Date(1e3*n),e=t.getFullYear(),a=t.getMonth()+1;a=a<10?"0"+a:a;var i=t.getDate();i=i<10?"0"+i:i;var o=t.getHours();o=o<10?"0"+o:o;var s=t.getMinutes();s=s<10?"0"+s:s;var u=t.getSeconds();return u=u<10?"0"+u:u,e+"-"+a+"-"+i}},props:{tabs:Array,category:Number},mounted:function(){this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px"},methods:{downCallback:function(n){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(n){var t=this;t.supplylist(n)},supplylist:function(n){var t=this,e=this;uni.request({url:"https://www.hongrensutui.com/api/index/sharelist",data:{category:e.category,pagenum:n.num,pagesize:n.size},method:"POST",success:function(a){var i=a.data.data.list,o=i.length;1==n.num&&(e.goods=[]),e.goods=e.goods.concat(a.data.data.list),t.mescroll.endByPage(o),setTimeout((function(){t.mescroll.endSuccess(o)}),20)},fail:function(n){e.mescroll.endErr()}})},imgMap:function(n){uni.previewImage({urls:[n]})},copy:function(n,t){uni.showModal({content:n,confirmText:"复制内容",success:function(){uni.setClipboardData({data:n,success:function(){uni.showToast({title:"复制成功"})}}),uni.showModal({title:"长按图片，保存到手机，就可以发朋友圈啦！"})}})},onxiazai:function(n){uni.downloadFile({url:n,success:function(n){200===n.statusCode&&uni.saveImageToPhotosAlbum({filePath:n.tempFilePath,success:function(){uni.showToast({title:"保存成功",icon:"none"})},fail:function(){uni.showToast({title:"保存失败，请稍后重试",icon:"none"})}})}})},details:function(n,t){uni.navigateTo({url:"/pages/supply/details?id="+n+"&mid="+t})},share:function(n){function t(t,e){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}((function(n,t){var e="红人速推 | 网红直播带货一站式服务平台",a="红人速推就是网红多 商家多，直播带货就上红人速推。",i="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(e,a,i,t)}))}};t.default=s},7611:function(n,t,e){var a=e("2c8d");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("89bd509a",a,!0,{sourceMap:!1,shadowMode:!1})},7731:function(n,t,e){"use strict";e.r(t);var a=e("541d"),i=e("9637");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("0157");var s,u=e("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"703779ca",null,!1,a["a"],s);t["default"]=r.exports},"79b6":function(n,t,e){"use strict";e.r(t);var a=e("8ba9"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},8082:function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.sharelist[data-v-703779ca]{margin-bottom:3vw;padding:3vw;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fdfdfd;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.sharelist .logo[data-v-703779ca]{width:10vw}.sharelist .logo img[data-v-703779ca]{width:10vw;height:10vw;border-radius:50%}.sharelist .content[data-v-703779ca]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:0 2vw}.sharelist .content .title[data-v-703779ca]{position:relative}.sharelist .content .title .name[data-v-703779ca]{line-height:10vw}.sharelist .content .title .cu-tag[data-v-703779ca]{position:relative;top:-.4vw;margin-left:2vw}.sharelist .content .title .share[data-v-703779ca]{position:absolute;right:0;top:1.6vw}.sharelist .content .cont[data-v-703779ca]{font-size:3.5vw;padding-bottom:3vw}.sharelist .content .img img[data-v-703779ca]{width:75px;height:133px}",""]),n.exports=t},"8ba9":function(n,t,e){"use strict";var a=e("ee27");e("d3b7"),e("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("9dcd")),o=a(e("3666")),s=a(e("7731")),u={components:{uniTopBar:i.default,AppTabs:o.default,MescrollItem:s.default},data:function(){return{height:"400px",tabs:["节日素材","宣传素材","每日心语","拉新素材","用户反馈"],tabIndex:0,topheight:0,bottom:"0",xueyuan:"https://www.hongrensutui.com/h5/img/sucai_logo_left.png"}},onLoad:function(n){var t=this;this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",n.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",n.invite)),n.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:n.code,invite:e.data},method:"POST",success:function(n){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",n.data.data.info),t.share(n.data.data.info.company_id,n.data.data.info.id,n.data.data.time)}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:n.code},method:"POST",success:function(n){uni.setStorageSync("userInfo",n.data.data.info),t.share(n.data.data.info.company_id,n.data.data.info.id,n.data.data.time)}})}}):uni.getStorage({key:"userInfo",success:function(n){""!=n.data&&null!=n.data?t.updateuser(n.data.id):wxlogin()},fail:function(n){wxlogin()}})},methods:{updateuser:function(n){var t=this;n&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:n},method:"POST",success:function(n){n.data.data.info?(uni.setStorageSync("userInfo",n.data.data.info),t.share(n.data.data.info.company_id,n.data.data.info.id,n.data.data.time)):wxlogin()}})},swiperChange:function(n){this.tabIndex=n.detail.current},goback:function(){uni.redirectTo({url:"/pages/index/index"})},NavChange:function(n){uni.redirectTo({url:"/pages/index/index?PageCur="+n})},share:function(n){function t(t,e,a){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}((function(n,t,e){var a="〔"+e+"已更新〕红人速推素材库",i="红人速推直播带货一站式服务平台，短视频、直播带货行业的赚钱利器！",o="https://www.hongrensutui.com/uploads/share/sucai_logo.png";share(a,i,o,t)}))}};t.default=u},9637:function(n,t,e){"use strict";e.r(t);var a=e("5724"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},c735:function(n,t,e){var a=e("8082");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("62a232a6",a,!0,{sourceMap:!1,shadowMode:!1})},dc75:function(n,t,e){"use strict";e.r(t);var a=e("18bd"),i=e("79b6");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("29ec");var s,u=e("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"2a6d45c3",null,!1,a["a"],s);t["default"]=r.exports}}]);