(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-college-list2"],{"0970":function(t,e,n){"use strict";var a=n("a0bf"),i=n.n(a);i.a},"1f36":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-top-bar",{attrs:{barid:1,xueyuan:t.xueyuan}}),n("app-tabs",{attrs:{tabs:t.tabs,fixed:!0,topheight:t.topheight+43},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}}),n("v-uni-swiper",{staticClass:"swiper",style:{height:t.height},attrs:{top:t.topheight+44+"px",current:t.tabIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.tabs,(function(e,a){return n("v-uni-swiper-item",{key:a},[16!=e.id?n("mescroll-item",{attrs:{i:a,index:t.tabIndex,tabs:t.tabs,bottom:t.bottom}}):t._e(),16==e.id?n("list-course",{attrs:{i:a,index:t.tabIndex,tabs:t.tabs,bottom:t.bottom}}):t._e()],1)})),1),n("v-uni-view",{staticClass:"customer round shadow text-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goback.apply(void 0,arguments)}}},[t._v("返回首页")])],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"264c":function(t,e,n){"use strict";var a=n("ee27");n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("9dcd")),o=a(n("3666")),u=a(n("2ed0")),s=a(n("80a2")),r={components:{uniTopBar:i.default,AppTabs:o.default,MescrollItem:u.default,ListCourse:s.default},data:function(){return{height:"400px",tabs:[],tabs_list:[],tabIndex:2,topheight:0,bottom:"0",xueyuan:"https://www.hongrensutui.com/h5/img/college_logo_left.png"}},onLoad:function(t){var e=this;this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",uni.request({url:"https://www.hongrensutui.com/api/index/collegeclassify",method:"POST",success:function(t){t.data.data.list&&(e.tabs=t.data.data.list)}}),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:n.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},swiperChange:function(t){this.tabIndex=t.detail.current},goback:function(){uni.redirectTo({url:"/pages/index/index"})},NavChange:function(t){uni.redirectTo({url:"/pages/index/index?PageCur="+t})},share:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var n="红人速推学院 | 抖音、快手指定线上学习平台",a="学院涵盖抖音、快手策略打法，为业界输出专业的营销课程，点击查看详情",i="http://cdn.hongrensutui.com/uploads/share/college_logo.png";share(n,a,i,e)}))}};e.default=r},2919:function(t,e,n){"use strict";n.r(e);var a=n("1f36"),i=n("ee9d");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("0970");var u,s=n("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"34ffb2ac",null,!1,a["a"],u);e["default"]=r.exports},"966c":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".swiper[data-v-34ffb2ac]{position:fixed;left:0;right:0;height:500px;background-color:#fff}\n\n/* 返回上一页*/.customer[data-v-34ffb2ac]{position:fixed;bottom:18vw;right:6vw;width:12vw;height:12vw;font-size:3.4vw;line-height:4.2vw;background:rgba(0,0,0,.4);color:#fff;z-index:199;padding:2.2vw;text-align:center}",""]),t.exports=e},a0bf:function(t,e,n){var a=n("966c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("843afaa8",a,!0,{sourceMap:!1,shadowMode:!1})},ee9d:function(t,e,n){"use strict";n.r(e);var a=n("264c"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a}}]);