(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-college-video-list"],{"05ef":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=a},1604:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={mescrollUni:i("426c").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"background-color":"#fff"}},[i("uni-top-bar",{attrs:{title:t.toptitle}}),i("mescroll-uni",{ref:"mescrollRef",attrs:{top:t.topheight+43+"px",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[t.category.img?i("img",{staticClass:"categoryimg",attrs:{src:t.category["img"],alt:"",mode:"widthFix"}}):t._e(),i("v-uni-view",{staticClass:"videolist bg-fff pb-0"},[i("v-uni-view",{staticClass:"titletop"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.category.name))])],1),i("v-uni-view",{staticClass:"bg-fff pb-0"},[i("v-uni-view",{staticClass:"card"},[i("v-uni-view",{staticClass:"sharecontent"},[t._v("此栏目共有"+t._s(t.goodslength)+"个主题，持续更新中...")])],1)],1),t._l(t.goods,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item clearfix",attrs:{"data-target":"Image"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage(e.id)}}},[1==e.free?i("img",{staticClass:"free",attrs:{src:"https://www.hongrensutui.com/h5/img/free.png",mode:"widthFix"}}):t._e(),0==e.free?i("img",{staticClass:"free",attrs:{src:"https://www.hongrensutui.com/h5/img/free2.png",mode:"widthFix"}}):t._e(),e.img?i("img",{staticClass:"ptgz",attrs:{src:e["img"],mode:"widthFix"}}):i("img",{staticClass:"ptgz",attrs:{src:"https://www.hongrensutui.com/h5/img/noimg.jpg",mode:"widthFix"}}),i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"cu-tag light bg-red round sm hits"},[t._v("已有"+t._s(e.views)+"人学习")])],1)],1)}))],2)],1),i("v-uni-view",{staticClass:"cu-modal poptips",class:"Modalios"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("十分抱歉，由于相关规范，小程序暂不支持查看。")])],1)],1)],1),t.category.price>1?i("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[i("v-uni-view",{staticClass:"opening round shadow text-center"},[i("v-uni-view",{staticClass:"bottombtn clearfix"},[i("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.categorymember(t.content.pid)}}},[t._v(t._s(t._f("numFilter")(t.category.price))+" 购买此栏目")]),i("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Image"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cardmember.apply(void 0,arguments)}}},[t._v(t._s(t._f("numFilter")(t.member.discountedprice))+" 全站免费看")])],1)],1)],1):t._e()],1)},o=[]},"343c":function(t,e,i){"use strict";var a=i("e26a"),n=i.n(a);n.a},3734:function(t,e,i){"use strict";i.r(e);var a=i("c2d5"),n=i("75eb");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("d973");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"525162bc",null,!1,a["a"],s);e["default"]=c.exports},"4e7f":function(t,e,i){"use strict";i.r(e);var a=i("eca2"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"4fb0":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.cu-bar[data-v-525162bc]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-525162bc]{margin-left:3vw;height:30px}.cuIcon-back[data-v-525162bc]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-525162bc]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-525162bc]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-525162bc]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-525162bc]{width:auto}.cuIcon-close[data-v-525162bc]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},5713:function(t,e,i){var a=i("4fb0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("645c1318",a,!0,{sourceMap:!1,shadowMode:!1})},"75eb":function(t,e,i){"use strict";i.r(e);var a=i("05ef"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},8880:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},n=a;e.default=n},aa31:function(t,e,i){"use strict";i.r(e);var a=i("1604"),n=i("4e7f");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("343c");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"b56c9cac",null,!1,a["a"],s);e["default"]=c.exports},c2d5:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):i("span",[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])])]):i("span",[t.within?i("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},cea8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},n=a;e.default=n},d973:function(t,e,i){"use strict";var a=i("5713"),n=i.n(a);n.a},e26a:function(t,e,i){var a=i("ff01");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("250c9b4d",a,!0,{sourceMap:!1,shadowMode:!1})},eca2:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("b680"),i("d3b7"),i("acd8"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("3734")),o=a(i("cea8")),s=a(i("8880")),r={mixins:[o.default,s.default],components:{uniTopBar:n.default},data:function(){return{downOption:{auto:!1},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"~ 空空如也 ~"}},userInfo:"",height:"400px",topheight:0,goods:"",toptitle:"课程列表",card_id:0,course:0,src:"",poster:"",modalName:null,id:"",category:"",bottom:"",member:"",goodslength:""}},filters:{numFilter:function(t){var e="";return e=isNaN(t)||""===t?" ":parseFloat(t).toFixed(0),e},numSingle:function(t,e){var i="";return i=isNaN(t)||""===t?" ":parseFloat(t/e).toFixed(2),i}},props:{tabs:Array},onLoad:function(t){var e=this,i=this;t.id&&(i.id=t.id),t.name&&(i.name=t.name),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",uni.request({url:"https://www.hongrensutui.com/api/index/course",success:function(t){e.course=t.data.data.course}}),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),i.userInfo=t.data.data.info}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),i.userInfo=t.data.data.info}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?i.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.updateuser(e.data.id)}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.downCallback()):wxlogin()}})},downCallback:function(){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var e=this;uni.getStorage({key:"userInfo",success:function(i){""!=i.data&&null!=i.data&&(e.userInfo=i.data,e.goodslist(t))}})},goodslist:function(t){var e=this,i=this;uni.request({url:"https://www.hongrensutui.com/api/index/videolist",method:"POST",data:{mid:i.userInfo.id,id:i.id,pagenum:t.num,pagesize:t.size},success:function(a){i.category=a.data.data.category,i.goodslength=a.data.data.count,i.category.price&&(i.bottom="50px"),i.share(i.userInfo.company_id,i.userInfo.id,i.category.name);var n=a.data.data.info,o=n.length;1==t.num&&(i.goods=[]),i.goods=i.goods.concat(a.data.data.info),e.mescroll.endByPage(o),setTimeout((function(){e.mescroll.endSuccess(o)}),20)},fail:function(t){i.mescroll.endErr()}})},getmember:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/member",data:{belong:4},method:"POST",success:function(e){t.member=e.data.data.list[0]}})},categorymember:function(t){var e=this;e.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/categoryorder",data:{openid:e.userInfo.openid,id:t},method:"POST",success:function(t){callpay(JSON.parse(t.data.data.parameters),t.data.data.info)}}):uni.showToast({title:"请登录后操作",icon:"none",duration:2e3})},openmember:function(t){var e=this;e.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/collegeorder",data:{openid:e.userInfo.openid,id:t},method:"POST",success:function(t){callpay(JSON.parse(t.data.data.parameters),t.data.data.info)}}):uni.showToast({title:"请登录后操作",icon:"none",duration:2e3})},cardmember:function(){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/card",data:{openid:t.userInfo.openid,id:8},method:"POST",success:function(t){callpay(JSON.parse(t.data.data.parameters),t.data.data.info)}}):(uni.showToast({title:"请登录后操作",icon:"none",duration:2e3}),ss)},navToDetailPage:function(t){uni.navigateTo({url:"/pages/college/coursedetails?id="+t})},hideModal:function(t){this.modalName=null},share:function(t){function e(e,i,a){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e,i){var a=i+" - 红人速推学院 | 抖音、快手指定线上学习平台",n="学院涵盖抖音、快手策略打法，为业界输出专业的营销课程，点击查看详情",o="https://www.hongrensutui.com/uploads/share/college_video_logo.png";share(a,n,o,e)}))}};e.default=r},ff01:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".cu-bar[data-v-b56c9cac]{position:static}",""]),t.exports=e}}]);