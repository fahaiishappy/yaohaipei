(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-aboutrz"],{"0600":function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.count[data-v-06e54d6c]{padding:3vw}.data[data-v-06e54d6c]{color:#333;font-size:4.3vw;line-height:7vw;padding:0}.data[data-v-06e54d6c] img{border-radius:1.5vw}.data[data-v-06e54d6c] img:last-child{display:block;margin:auto}",""]),t.exports=n},"0dec":function(t,n,a){"use strict";var e=a("89a2"),i=a.n(e);i.a},"144b":function(t,n,a){"use strict";a.r(n);var e=a("e268"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},"222d":function(t,n,a){"use strict";a.r(n);var e=a("6a1c"),i=a("144b");for(var o in i)"default"!==o&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("7a39");var c,u=a("f0c5"),s=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,"18c1c868",null,!1,e["a"],c);n["default"]=s.exports},"389b":function(t,n,a){"use strict";a.r(n);var e=a("d91f"),i=a("92f7");for(var o in i)"default"!==o&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("0dec");var c,u=a("f0c5"),s=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,"06e54d6c",null,!1,e["a"],c);n["default"]=s.exports},"3f5e":function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'.hongren[data-v-18c1c868]{bottom:0}.paymentbtn[data-v-18c1c868]{position:absolute;font-size:4.8vw;font-weight:700;bottom:6vw;left:50%;margin-left:-25vw;width:50vw;text-align:center;line-height:12vw;border-radius:12vw;background-color:#ffb759;color:#fff;z-index:210;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.customer[data-v-18c1c868]{position:absolute;bottom:18vw;right:6vw;width:15vw;height:15vw;font-size:9vw;padding-top:2vw;z-index:210;text-align:center;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.cu-dialog[data-v-18c1c868]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-18c1c868]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-18c1c868]{width:auto}.cuIcon-close[data-v-18c1c868]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}.wechat[data-v-18c1c868]{width:200px;height:200px}.tip[data-v-18c1c868]{color:#fff;margin:2vw 0;font-size:3.4vw}.bg-red[data-v-18c1c868]{background-color:#e71d36}',""]),t.exports=n},"42ea":function(t,n,a){"use strict";(function(t){var e=a("ee27");a("ac1f"),a("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e(a("7f51")),o=e(a("7265")),c={mixins:[i.default,o.default],data:function(){return{downOption:{use:!1,isLock:!0},upOption:{use:!1,isLock:!0,toTop:{src:""}},height:"400px",content:"",topheight:0,userInfo:[]}},props:{tabs:Array},mounted:function(){this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",this.totalcewebrity()},methods:{downCallback:function(t){this.mescroll.endSuccess()},upCallback:function(t){},totalcewebrity:function(){var n=this,a=n.tabs[n.i];if("抖音企业号"==a)var e=33;if("快手商家号"==a)e=39;t("log",e," at pages/about/list-item.vue:68"),uni.request({url:"https://www.hongrensutui.com/api/index/pageDetails",data:{id:e},method:"POST",success:function(t){n.content=t.data.data.list;var a=t.data.data.list.content;n.content.content=a.replace(/\<img/gi,'<img style="border-radius: 1.5vw" ')}})}}};n.default=c}).call(this,a("0de9")["log"])},"6a1c":function(t,n,a){"use strict";var e,i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("uni-top-bar",{attrs:{title:t.title,name:t.name}}),a("app-tabs",{attrs:{tabs:t.tabs,fixed:!0,topheight:t.topheight+43},model:{value:t.tabIndex,callback:function(n){t.tabIndex=n},expression:"tabIndex"}}),a("v-uni-swiper",{staticClass:"swiper",style:{height:t.height},attrs:{current:t.tabIndex},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.swiperChange.apply(void 0,arguments)}}},[a("v-uni-swiper-item",[a("mescroll-item",{attrs:{i:0,index:t.tabIndex,tabs:t.tabs}})],1),a("v-uni-swiper-item",[a("mescroll-item",{attrs:{i:1,index:t.tabIndex,tabs:t.tabs}})],1)],1),a("v-uni-view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"bg-img"},[a("img",{staticClass:"wechat",attrs:{src:"https://www.hongrensutui.com/h5/img/wechat.png",mode:"widthFix"}}),a("v-uni-view",{staticClass:"tip"},[t._v("免费咨询微信：zhuoyu10086")]),a("v-uni-view",{staticClass:"cu-bar justify-center text-white"},[a("v-uni-view",{staticClass:"action",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1)],1)},o=[];a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return e}))},"7a39":function(t,n,a){"use strict";var e=a("8cb1"),i=a.n(e);i.a},"89a2":function(t,n,a){var e=a("0600");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("40598b84",e,!0,{sourceMap:!1,shadowMode:!1})},"8cb1":function(t,n,a){var e=a("3f5e");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("b2e08fea",e,!0,{sourceMap:!1,shadowMode:!1})},"92f7":function(t,n,a){"use strict";a.r(n);var e=a("42ea"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},d91f:function(t,n,a){"use strict";var e={mescrollUni:a("c499").default},i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("mescroll-uni",{ref:"mescrollRef",attrs:{top:t.topheight+43+42+"px",down:t.downOption,up:t.upOption},on:{init:function(n){arguments[0]=n=t.$handleEvent(n),t.mescrollInit.apply(void 0,arguments)},down:function(n){arguments[0]=n=t.$handleEvent(n),t.downCallback.apply(void 0,arguments)},up:function(n){arguments[0]=n=t.$handleEvent(n),t.upCallback.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"count"},[a("v-uni-view",{staticClass:"data"},[a("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}})],1)],1)],1)},o=[];a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return e}))},e268:function(t,n,a){"use strict";var e=a("ee27");a("d3b7"),a("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e(a("9dcd")),o=e(a("3666")),c=e(a("389b")),u={components:{AppTabs:o.default,uniTopBar:i.default,MescrollItem:c.default},data:function(){return{modalName:null,tabs:["抖音企业号","快手商家号"],tabIndex:1,topheight:0,name:"aboutrz",title:"商家号资料",height:"400px",user:"",backurl:location.href}},onLoad:function(t){var n=this;this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:a.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),n.user=t.data.data.info,n.share(n.user.company_id,n.user.id)}})},fail:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),n.user=t.data.data.info,n.share(n.user.company_id,n.user.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?n.getuserinfo(t.data.id):wxlogin(n.backurl)},fail:function(t){wxlogin(n.backurl)}})},methods:{getuserinfo:function(t){var n=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),n.user=t.data.data.info,n.share(n.user.company_id,n.user.id)):wxlogin(n.backurl)}})},share:function(t){function n(n,a){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){var a=this,e=a.backurl,i="为什么要做抖音、快手商家号？",o="认证商家号后开通多项功能，助你快速抢占市场，轻松变现。",c="http://cdn.hongrensutui.com/uploads/share/renzheng_logo.png",u=a.backurl;if(t>0)u=u+"?invite="+n;share(e,i,o,c,u)})),swiperChange:function(t){this.tabIndex=t.detail.current},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null}}};n.default=u}}]);