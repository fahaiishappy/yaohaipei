(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-college-video-list"],{"02c2":function(n,t,e){"use strict";var a=e("4ea4");e("99af"),e("b680"),e("d3b7"),e("acd8"),e("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("5ad0")),o=a(e("f73f")),r=a(e("50f0")),s={mixins:[o.default,r.default],components:{uniTopBar:i.default},data:function(){return{downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"~ 空空如也 ~"}},userInfo:"",height:"400px",topheight:0,goods:"",toptitle:"课程列表",card_id:0,course:0,src:"",poster:"",modalName:null,id:"",category:"",bottom:"",member:"",goodslength:""}},filters:{numFilter:function(n){var t="";return t=isNaN(n)||""===n?" ":parseFloat(n).toFixed(0),t},numSingle:function(n,t){var e="";return e=isNaN(n)||""===n?" ":parseFloat(n/t).toFixed(2),e}},props:{tabs:Array},onLoad:function(n){var t=this,e=this;n.id&&(e.id=n.id),n.name&&(e.name=n.name),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",uni.request({url:"https://www.hongrensutui.com/api/index/course",success:function(n){t.course=n.data.data.course}}),n.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",n.invite)),n.code?uni.getStorage({key:"invite",success:function(t){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:n.code,invite:t.data},method:"POST",success:function(n){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",n.data.data.info),e.userInfo=n.data.data.info}})},fail:function(t){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:n.code},method:"POST",success:function(n){uni.setStorageSync("userInfo",n.data.data.info),e.userInfo=n.data.data.info}})}}):uni.getStorage({key:"userInfo",success:function(n){""!=n.data&&null!=n.data?e.updateuser(n.data.id):wxlogin()},fail:function(n){wxlogin()}})},onShow:function(){var n=this;uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data&&n.updateuser(t.data.id)}})},methods:{updateuser:function(n){var t=this;n&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:n},method:"POST",success:function(n){n.data.data.info?(uni.setStorageSync("userInfo",n.data.data.info),t.userInfo=n.data.data.info,t.downCallback()):wxlogin()}})},downCallback:function(){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(n){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&(t.userInfo=e.data,t.goodslist(n))}})},goodslist:function(n){var t=this,e=this;uni.request({url:"https://www.hongrensutui.com/api/index/videolist",method:"POST",data:{mid:e.userInfo.id,id:e.id,pagenum:n.num,pagesize:n.size},success:function(a){e.category=a.data.data.category,e.goodslength=a.data.data.count,e.category.price&&(e.bottom="50px"),e.share(e.userInfo.company_id,e.userInfo.id,e.category.name);var i=a.data.data.info,o=i.length;1==n.num&&(e.goods=[]),e.goods=e.goods.concat(a.data.data.info),t.mescroll.endByPage(o),setTimeout((function(){t.mescroll.endSuccess(o)}),20)},fail:function(n){e.mescroll.endErr()}})},getmember:function(){var n=this;uni.request({url:"https://www.hongrensutui.com/api/index/member",data:{belong:4},method:"POST",success:function(t){n.member=t.data.data.list[0]}})},categorymember:function(n){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/categoryorder",data:{openid:t.userInfo.openid,id:n},method:"POST",success:function(n){callpay(JSON.parse(n.data.data.parameters),n.data.data.info)}}):uni.showToast({title:"请登录后操作",icon:"none",duration:2e3})},openmember:function(n){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/collegeorder",data:{openid:t.userInfo.openid,id:n},method:"POST",success:function(n){callpay(JSON.parse(n.data.data.parameters),n.data.data.info)}}):uni.showToast({title:"请登录后操作",icon:"none",duration:2e3})},cardmember:function(){var n=this;n.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/card",data:{openid:n.userInfo.openid,id:8},method:"POST",success:function(n){callpay(JSON.parse(n.data.data.parameters),n.data.data.info)}}):(uni.showToast({title:"请登录后操作",icon:"none",duration:2e3}),ss)},navToDetailPage:function(n){uni.navigateTo({url:"/pages/college/coursedetails?id="+n})},hideModal:function(n){this.modalName=null},share:function(n){function t(t,e,a){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}((function(n,t,e){var a=e+" - 红人速推学院 | 抖音、快手指定线上学习平台",i="学院涵盖抖音、快手策略打法，为业界输出专业的营销课程，点击查看详情",o="https://www.hongrensutui.com/uploads/share/college_video_logo.png";share(a,i,o,t)}))}};t.default=s},2049:function(n,t,e){"use strict";e.r(t);var a=e("02c2"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},4674:function(n,t,e){"use strict";e.r(t);var a=e("7137"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},"4db2":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var a={mescrollUni:e("0777").default},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("uni-top-bar",{attrs:{title:n.toptitle}}),e("mescroll-uni",{ref:"mescrollRef",attrs:{top:n.topheight+43+"px",down:n.downOption,up:n.upOption},on:{init:function(t){arguments[0]=t=n.$handleEvent(t),n.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=n.$handleEvent(t),n.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=n.$handleEvent(t),n.upCallback.apply(void 0,arguments)}}},[n.category.img?e("img",{staticClass:"categoryimg",attrs:{src:n.category["img"],alt:"",mode:"widthFix"}}):n._e(),e("v-uni-view",{staticClass:"videolist"},[e("v-uni-view",{staticClass:"titletop"},[e("v-uni-view",{staticClass:"name"},[n._v(n._s(n.category.name))])],1),e("v-uni-view",{staticClass:"card"},[e("v-uni-view",{staticClass:"sharecontent"},[n._v("此栏目共有"+n._s(n.goodslength)+"个主题，持续更新中...")])],1),n._l(n.goods,(function(t,a){return e("v-uni-view",{key:a,staticClass:"item clearfix",attrs:{"data-target":"Image"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.navToDetailPage(t.id)}}},[1==t.free?e("img",{staticClass:"free",attrs:{src:"https://www.hongrensutui.com/h5/img/free.png",mode:"widthFix"}}):n._e(),0==t.free?e("img",{staticClass:"free",attrs:{src:"https://www.hongrensutui.com/h5/img/free2.png",mode:"widthFix"}}):n._e(),t.img?e("img",{staticClass:"ptgz",attrs:{src:t["img"],mode:"widthFix"}}):e("img",{staticClass:"ptgz",attrs:{src:"https://www.hongrensutui.com/h5/img/noimg.jpg",mode:"widthFix"}}),e("v-uni-view",{staticClass:"title"},[e("v-uni-view",{staticClass:"name"},[n._v(n._s(t.title))]),e("v-uni-view",{staticClass:"cu-tag light bg-red round sm hits"},[n._v("已有"+n._s(t.views)+"人学习")])],1)],1)}))],2)],1),e("v-uni-view",{staticClass:"cu-modal",class:"Modalios"==n.modalName?"show":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"auth"},[e("v-uni-view",{staticClass:"title"},[n._v("十分抱歉，由于相关规范，小程序暂不支持查看。")])],1)],1)],1),n.category.price>1?e("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[e("v-uni-view",{staticClass:"customer round shadow text-center"},[e("v-uni-view",{staticClass:"bottombtn clearfix"},[e("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.categorymember(n.content.pid)}}},[n._v(n._s(n._f("numFilter")(n.category.price))+" 购买此栏目")]),e("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Image"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.cardmember.apply(void 0,arguments)}}},[n._v(n._s(n._f("numFilter")(n.member.discountedprice))+" 全站免费看")])],1)],1)],1):n._e()],1)},o=[]},"50f0":function(n,t,e){"use strict";e("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(n){this.i!==n||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(n){this.mescroll=n,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},i=a;t.default=i},"5ad0":function(n,t,e){"use strict";e.r(t);var a=e("ad3a"),i=e("4674");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("b844");var r,s=e("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"2dee27ab",null,!1,a["a"],r);t["default"]=c.exports},7137:function(n,t,e){"use strict";e("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};t.default=a},"971d":function(n,t,e){var a=e("b8b6");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("19375b2e",a,!0,{sourceMap:!1,shadowMode:!1})},"99d1":function(n,t,e){"use strict";e.r(t);var a=e("4db2"),i=e("2049");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("e534");var r,s=e("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"d00a836c",null,!1,a["a"],r);t["default"]=c.exports},a7c9:function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,'.cu-bar[data-v-2dee27ab]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-2dee27ab]{margin-left:3vw;height:30px}.cuIcon-back[data-v-2dee27ab]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-2dee27ab]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-2dee27ab]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-2dee27ab]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-2dee27ab]{width:auto}.cuIcon-close[data-v-2dee27ab]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),n.exports=t},ad3a:function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:n.height+44+"px",paddingTop:n.height+"px"}},[1!=n.barid?e("span",{staticClass:"clearfix"},[n.within?e("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:n.within,mode:"heightFix"}}):e("span",[n.title?e("span",{staticClass:"title"},[n._v(n._s(n.title))]):e("span",{staticClass:"title"},[n._v("红人速推")])])]):e("span",[n.within?e("img",{staticClass:"logo_left",attrs:{src:n.within,mode:"heightFix"}}):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},b844:function(n,t,e){"use strict";var a=e("e071"),i=e.n(a);i.a},b8b6:function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.videolist[data-v-d00a836c]{background-color:#fff}.bg-fff[data-v-d00a836c]{padding-bottom:3vw}.bg-fff .item[data-v-d00a836c]:last-child{margin-bottom:0}.categoryimg[data-v-d00a836c]{width:100%;display:block}.titletop[data-v-d00a836c]{padding:5vw 3vw;font-size:4.5vw;font-weight:700;background-color:#fff;text-align:center}.titletop .name[data-v-d00a836c]{background-image:url(https://www.hongrensutui.com/h5/img/wzbg2.png);background-repeat:repeat-x;background-position:bottom;display:inline-block;padding:0 1vw}.item[data-v-d00a836c]{margin:0 3vw;width:94vw;background-color:#f7f7f7;-webkit-border-radius:1.5vw;border-radius:1.5vw;margin-bottom:3vw;position:relative}.item .free[data-v-d00a836c]{position:absolute;width:8vw;-webkit-border-top-left-radius:1.5vw;border-top-left-radius:1.5vw;-webkit-border-bottom-right-radius:1.5vw;border-bottom-right-radius:1.5vw;left:0;z-index:100}.item .ptgz[data-v-d00a836c]{float:left;width:36vw;-webkit-border-top-left-radius:1.5vw;border-top-left-radius:1.5vw;-webkit-border-bottom-left-radius:1.5vw;border-bottom-left-radius:1.5vw}.item .title[data-v-d00a836c]{-webkit-border-top-right-radius:1.5vw;border-top-right-radius:1.5vw;-webkit-border-bottom-right-radius:1.5vw;border-bottom-right-radius:1.5vw;float:left;padding:0 3vw;width:58vw}.item .title .name[data-v-d00a836c]{font-size:3.8vw;font-weight:700;line-height:6vw;margin-top:2vw}.item .title .hits[data-v-d00a836c]{font-size:2.8vw;position:relative;top:2vw;float:left}.cu-bar[data-v-d00a836c]{position:static}.cu-dialog[data-v-d00a836c]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-d00a836c]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-d00a836c]{width:auto}.bg-img[data-v-d00a836c]{position:relative}.cuIcon-close[data-v-d00a836c]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}.wechat[data-v-d00a836c]{width:200px;height:200px}.tip[data-v-d00a836c]{color:#fff;margin:2vw 0;font-size:3.4vw}.auth[data-v-d00a836c]{padding:6vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-d00a836c]{color:#333;margin-bottom:4vw}.more[data-v-d00a836c]{font-size:3.4vw;text-align:center}.card[data-v-d00a836c]{padding:2vw;margin:0 3vw;line-height:6vw;background-color:#f7f7f7;border-top:2px #333 solid;display:-webkit-box;display:-webkit-flex;display:flex;color:#666;-webkit-justify-content:space-around;justify-content:space-around;margin-bottom:3vw}.card .sharecontent[data-v-d00a836c]{font-size:4vw;text-align:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}',""]),n.exports=t},e071:function(n,t,e){var a=e("a7c9");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("0724fb0f",a,!0,{sourceMap:!1,shadowMode:!1})},e534:function(n,t,e){"use strict";var a=e("971d"),i=e.n(a);i.a},f73f:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(n){this.mescroll&&this.mescroll.onPageScroll(n)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(n){this.mescroll=n,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var n=this.$refs.mescrollRef;n&&(this.mescroll=n.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var n=this;setTimeout((function(){n.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},i=a;t.default=i}}]);