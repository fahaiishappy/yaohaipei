(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-aboutrz"],{"0600":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.count[data-v-06e54d6c]{padding:3vw}.data[data-v-06e54d6c]{color:#333;font-size:4.3vw;line-height:7vw;padding:0}.data[data-v-06e54d6c] img{border-radius:1.5vw}.data[data-v-06e54d6c] img:last-child{display:block;margin:auto}",""]),t.exports=n},"0dec":function(t,n,e){"use strict";var a=e("89a2"),i=e.n(a);i.a},"144b":function(t,n,e){"use strict";e.r(n);var a=e("e268"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},"222d":function(t,n,e){"use strict";e.r(n);var a=e("c1f4"),i=e("144b");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("e227");var u,s=e("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"30ae37e2",null,!1,a["a"],u);n["default"]=r.exports},"389b":function(t,n,e){"use strict";e.r(n);var a=e("d91f"),i=e("92f7");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("0dec");var u,s=e("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"06e54d6c",null,!1,a["a"],u);n["default"]=r.exports},"39f6":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'.hongren[data-v-30ae37e2]{bottom:0}.paymentbtn[data-v-30ae37e2]{position:absolute;font-size:4.8vw;font-weight:700;bottom:6vw;left:50%;margin-left:-25vw;width:50vw;text-align:center;line-height:12vw;border-radius:12vw;background-color:#ffb759;color:#fff;z-index:210;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.customer[data-v-30ae37e2]{position:absolute;bottom:18vw;right:6vw;width:15vw;height:15vw;font-size:9vw;padding-top:2vw;z-index:210;text-align:center;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.cu-dialog[data-v-30ae37e2]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-30ae37e2]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-30ae37e2]{width:auto}.cuIcon-close[data-v-30ae37e2]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}.wechat[data-v-30ae37e2]{width:200px;height:200px}.tip[data-v-30ae37e2]{color:#fff;margin:2vw 0;font-size:3.4vw}.bg-red[data-v-30ae37e2]{background-color:#e71d36}',""]),t.exports=n},"42ea":function(t,n,e){"use strict";(function(t){var a=e("ee27");e("ac1f"),e("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("7f51")),o=a(e("7265")),u={mixins:[i.default,o.default],data:function(){return{downOption:{use:!1,isLock:!0},upOption:{use:!1,isLock:!0,toTop:{src:""}},height:"400px",content:"",topheight:0,userInfo:[]}},props:{tabs:Array},mounted:function(){this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",this.totalcewebrity()},methods:{downCallback:function(t){this.mescroll.endSuccess()},upCallback:function(t){},totalcewebrity:function(){var n=this,e=n.tabs[n.i];if("抖音企业号"==e)var a=33;if("快手商家号"==e)a=39;t.log(a),uni.request({url:"https://www.hongrensutui.com/api/index/pageDetails",data:{id:a},method:"POST",success:function(t){n.content=t.data.data.list;var e=t.data.data.list.content;n.content.content=e.replace(/\<img/gi,'<img style="border-radius: 1.5vw" ')}})}}};n.default=u}).call(this,e("5a52")["default"])},"89a2":function(t,n,e){var a=e("0600");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("40598b84",a,!0,{sourceMap:!1,shadowMode:!1})},"92f7":function(t,n,e){"use strict";e.r(n);var a=e("42ea"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},"944b":function(t,n,e){var a=e("39f6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("410ce6f6",a,!0,{sourceMap:!1,shadowMode:!1})},c1f4:function(t,n,e){"use strict";var a,i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("uni-top-bar",{attrs:{title:t.title,name:t.name}}),e("app-tabs",{attrs:{tabs:t.tabs,fixed:!0,topheight:t.topheight+43},model:{value:t.tabIndex,callback:function(n){t.tabIndex=n},expression:"tabIndex"}}),e("v-uni-swiper",{staticClass:"swiper",style:{height:t.height},attrs:{current:t.tabIndex},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.swiperChange.apply(void 0,arguments)}}},[e("v-uni-swiper-item",[e("mescroll-item",{attrs:{i:0,index:t.tabIndex,tabs:t.tabs}})],1),e("v-uni-swiper-item",[e("mescroll-item",{attrs:{i:1,index:t.tabIndex,tabs:t.tabs}})],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"bg-img"},[e("img",{staticClass:"wechat",attrs:{src:"https://www.hongrensutui.com/h5/img/wechat.png",mode:"widthFix"}}),e("v-uni-view",{staticClass:"tip"},[t._v("免费咨询微信：zhuoyu10086")]),e("v-uni-view",{staticClass:"cu-bar justify-center text-white"},[e("v-uni-view",{staticClass:"action",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1)],1)},o=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}))},d91f:function(t,n,e){"use strict";var a={mescrollUni:e("c499").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("mescroll-uni",{ref:"mescrollRef",attrs:{top:t.topheight+43+42+"px",down:t.downOption,up:t.upOption},on:{init:function(n){arguments[0]=n=t.$handleEvent(n),t.mescrollInit.apply(void 0,arguments)},down:function(n){arguments[0]=n=t.$handleEvent(n),t.downCallback.apply(void 0,arguments)},up:function(n){arguments[0]=n=t.$handleEvent(n),t.upCallback.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"count"},[e("v-uni-view",{staticClass:"data"},[e("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}})],1)],1)],1)},o=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}))},e227:function(t,n,e){"use strict";var a=e("944b"),i=e.n(a);i.a},e268:function(t,n,e){"use strict";var a=e("ee27");e("d3b7"),e("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("9dcd")),o=a(e("3666")),u=a(e("389b")),s={components:{AppTabs:o.default,uniTopBar:i.default,MescrollItem:u.default},data:function(){return{modalName:null,tabs:["抖音企业号","快手商家号"],tabIndex:1,topheight:0,name:"aboutrz",title:"商家号资料",height:"400px",user:"",backurl:location.href}},onLoad:function(t){var n=this;this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),n.user=t.data.data.info,n.share(n.user.company_id,n.user.id)}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),n.user=t.data.data.info,n.share(n.user.company_id,n.user.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?n.getuserinfo(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},methods:{getuserinfo:function(t){var n=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),n.user=t.data.data.info,n.share(n.user.company_id,n.user.id)):wxlogin()}})},share:function(t){function n(n,e){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){var e="为什么要做抖音、快手商家号？",a="认证商家号后开通多项功能，助你快速抢占市场，轻松变现。",i="http://cdn.hongrensutui.com/uploads/share/renzheng_logo.png";share(e,a,i,n)})),swiperChange:function(t){this.tabIndex=t.detail.current},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null}}};n.default=s}}]);