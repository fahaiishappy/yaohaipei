(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-college-video-list"],{"02c2":function(n,t,i){"use strict";var e=i("4ea4");i("99af"),i("b680"),i("d3b7"),i("acd8"),i("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e(i("5ad0")),o=e(i("f73f")),r=e(i("50f0")),s={mixins:[o.default,r.default],components:{uniTopBar:a.default},data:function(){return{downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"~ 空空如也 ~"}},userInfo:"",height:"400px",topheight:0,goods:"",toptitle:"课程列表",card_id:0,course:0,src:"",poster:"",modalName:null,id:"",category:"",bottom:"",member:"",goodslength:""}},filters:{numFilter:function(n){var t="";return t=isNaN(n)||""===n?" ":parseFloat(n).toFixed(0),t},numSingle:function(n,t){var i="";return i=isNaN(n)||""===n?" ":parseFloat(n/t).toFixed(2),i}},props:{tabs:Array},onLoad:function(n){var t=this,i=this;n.id&&(i.id=n.id),n.name&&(i.name=n.name),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",uni.request({url:"https://www.hongrensutui.com/api/index/course",success:function(n){t.course=n.data.data.course}}),n.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",n.invite)),n.code?uni.getStorage({key:"invite",success:function(t){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:n.code,invite:t.data},method:"POST",success:function(n){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",n.data.data.info),i.userInfo=n.data.data.info}})},fail:function(t){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:n.code},method:"POST",success:function(n){uni.setStorageSync("userInfo",n.data.data.info),i.userInfo=n.data.data.info}})}}):uni.getStorage({key:"userInfo",success:function(n){""!=n.data&&null!=n.data?i.updateuser(n.data.id):wxlogin()},fail:function(n){wxlogin()}})},onShow:function(){var n=this;uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data&&n.updateuser(t.data.id)}})},methods:{updateuser:function(n){var t=this;n&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:n},method:"POST",success:function(n){n.data.data.info?(uni.setStorageSync("userInfo",n.data.data.info),t.userInfo=n.data.data.info,t.downCallback()):wxlogin()}})},downCallback:function(){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(n){var t=this;uni.getStorage({key:"userInfo",success:function(i){""!=i.data&&null!=i.data&&(t.userInfo=i.data,t.goodslist(n))}})},goodslist:function(n){var t=this,i=this;uni.request({url:"https://www.hongrensutui.com/api/index/videolist",method:"POST",data:{mid:i.userInfo.id,id:i.id,pagenum:n.num,pagesize:n.size},success:function(e){i.category=e.data.data.category,i.goodslength=e.data.data.count,i.category.price&&(i.bottom="50px"),i.share(i.userInfo.company_id,i.userInfo.id,i.category.name);var a=e.data.data.info,o=a.length;1==n.num&&(i.goods=[]),i.goods=i.goods.concat(e.data.data.info),t.mescroll.endByPage(o),setTimeout((function(){t.mescroll.endSuccess(o)}),20)},fail:function(n){i.mescroll.endErr()}})},getmember:function(){var n=this;uni.request({url:"https://www.hongrensutui.com/api/index/member",data:{belong:4},method:"POST",success:function(t){n.member=t.data.data.list[0]}})},categorymember:function(n){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/categoryorder",data:{openid:t.userInfo.openid,id:n},method:"POST",success:function(n){callpay(JSON.parse(n.data.data.parameters),n.data.data.info)}}):uni.showToast({title:"请登录后操作",icon:"none",duration:2e3})},openmember:function(n){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/collegeorder",data:{openid:t.userInfo.openid,id:n},method:"POST",success:function(n){callpay(JSON.parse(n.data.data.parameters),n.data.data.info)}}):uni.showToast({title:"请登录后操作",icon:"none",duration:2e3})},cardmember:function(){var n=this;n.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/card",data:{openid:n.userInfo.openid,id:8},method:"POST",success:function(n){callpay(JSON.parse(n.data.data.parameters),n.data.data.info)}}):(uni.showToast({title:"请登录后操作",icon:"none",duration:2e3}),ss)},navToDetailPage:function(n){uni.navigateTo({url:"/pages/college/coursedetails?id="+n})},hideModal:function(n){this.modalName=null},share:function(n){function t(t,i,e){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}((function(n,t,i){var e=i+" - 红人速推学院 | 抖音、快手指定线上学习平台",a="学院涵盖抖音、快手策略打法，为业界输出专业的营销课程，点击查看详情",o="https://www.hongrensutui.com/uploads/share/college_video_logo.png";share(e,a,o,t)}))}};t.default=s},"0da6":function(n,t,i){"use strict";var e;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return e}));var a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:n.height+44+"px",paddingTop:n.height+"px"}},[n.xueyuan?i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[i("img",{staticClass:"logo_left",style:{top:n.height+7+"px",left:n.left},attrs:{src:n.xueyuan}}),n.img?i("img",{staticClass:"logo_right",style:{top:n.height+2+"px",left:n.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):n._e()]):n._e(),n.xueyuan?n._e():i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=n.barid?i("span",[n.title?i("span",{style:{marginLeft:n.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[n._v(n._s(n.title))]):i("span",{style:{marginLeft:n.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[n._v("红人速推")])]):n._e(),n.img&&1==n.barid?i("img",{staticClass:"logo_left",style:{top:n.height+7+"px",left:n.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):n._e(),n.img&&1==n.barid?i("img",{staticClass:"logo_right",style:{top:n.height+2+"px",left:n.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):n._e(),n.img&&1!=n.barid?i("img",{staticClass:"logo_right",style:{top:n.height+2+"px",left:n.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right2.png"}}):n._e()])])},o=[]},2049:function(n,t,i){"use strict";i.r(t);var e=i("02c2"),a=i.n(e);for(var o in e)"default"!==o&&function(n){i.d(t,n,(function(){return e[n]}))}(o);t["default"]=a.a},4674:function(n,t,i){"use strict";i.r(t);var e=i("7137"),a=i.n(e);for(var o in e)"default"!==o&&function(n){i.d(t,n,(function(){return e[n]}))}(o);t["default"]=a.a},"46ae":function(n,t,i){var e=i("6887");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=i("4f06").default;a("1dde3fa9",e,!0,{sourceMap:!1,shadowMode:!1})},"4db2":function(n,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return e}));var e={mescrollUni:i("0777").default},a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",[i("uni-top-bar",{attrs:{title:n.toptitle}}),i("mescroll-uni",{ref:"mescrollRef",attrs:{top:n.topheight+43+"px",down:n.downOption,up:n.upOption},on:{init:function(t){arguments[0]=t=n.$handleEvent(t),n.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=n.$handleEvent(t),n.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=n.$handleEvent(t),n.upCallback.apply(void 0,arguments)}}},[n.category.img?i("img",{staticClass:"categoryimg",attrs:{src:n.category["img"],alt:"",mode:"widthFix"}}):n._e(),i("v-uni-view",{staticClass:"videolist"},[i("v-uni-view",{staticClass:"titletop"},[i("v-uni-view",{staticClass:"name"},[n._v(n._s(n.category.name))])],1),i("v-uni-view",{staticClass:"card"},[i("v-uni-view",{staticClass:"sharecontent"},[n._v("此栏目共有"+n._s(n.goodslength)+"个主题，持续更新中...")])],1),n._l(n.goods,(function(t,e){return i("v-uni-view",{key:e,staticClass:"item clearfix",attrs:{"data-target":"Image"},on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.navToDetailPage(t.id)}}},[1==t.free?i("img",{staticClass:"free",attrs:{src:"https://www.hongrensutui.com/h5/img/free.png",mode:"widthFix"}}):n._e(),0==t.free?i("img",{staticClass:"free",attrs:{src:"https://www.hongrensutui.com/h5/img/free2.png",mode:"widthFix"}}):n._e(),t.img?i("img",{staticClass:"ptgz",attrs:{src:t["img"],mode:"widthFix"}}):i("img",{staticClass:"ptgz",attrs:{src:"https://www.hongrensutui.com/h5/img/noimg.jpg",mode:"widthFix"}}),i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"name"},[n._v(n._s(t.title))]),i("v-uni-view",{staticClass:"cu-tag light bg-red round sm hits"},[n._v("已有"+n._s(t.views)+"人学习")])],1)],1)}))],2)],1),i("v-uni-view",{staticClass:"cu-modal",class:"Modalios"==n.modalName?"show":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[n._v("十分抱歉，由于相关规范，小程序暂不支持查看。")])],1)],1)],1),n.category.price>1?i("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[i("v-uni-view",{staticClass:"customer round shadow text-center"},[i("v-uni-view",{staticClass:"bottombtn clearfix"},[i("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.categorymember(n.content.pid)}}},[n._v(n._s(n._f("numFilter")(n.category.price))+" 购买此栏目")]),i("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Image"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.cardmember.apply(void 0,arguments)}}},[n._v(n._s(n._f("numFilter")(n.member.discountedprice))+" 全站免费看")])],1)],1)],1):n._e()],1)},o=[]},"50f0":function(n,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(n){this.i!==n||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(n){this.mescroll=n,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},a=e;t.default=a},"5ad0":function(n,t,i){"use strict";i.r(t);var e=i("0da6"),a=i("4674");for(var o in a)"default"!==o&&function(n){i.d(t,n,(function(){return a[n]}))}(o);i("81d4");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"9df7cb58",null,!1,e["a"],r);t["default"]=c.exports},6887:function(n,t,i){var e=i("24fb");t=e(!1),t.push([n.i,'.auth[data-v-9df7cb58]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-9df7cb58]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-9df7cb58]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-9df7cb58]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-9df7cb58]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-9df7cb58]{height:100vh;z-index:300}.cu-bar[data-v-9df7cb58]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-9df7cb58]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-9df7cb58]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-9df7cb58]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-9df7cb58]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9df7cb58]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9df7cb58]{width:auto}.cuIcon-close[data-v-9df7cb58]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),n.exports=t},7137:function(n,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};t.default=e},"81d4":function(n,t,i){"use strict";var e=i("46ae"),a=i.n(e);a.a},"971d":function(n,t,i){var e=i("b8b6");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=i("4f06").default;a("19375b2e",e,!0,{sourceMap:!1,shadowMode:!1})},"99d1":function(n,t,i){"use strict";i.r(t);var e=i("4db2"),a=i("2049");for(var o in a)"default"!==o&&function(n){i.d(t,n,(function(){return a[n]}))}(o);i("e534");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"d00a836c",null,!1,e["a"],r);t["default"]=c.exports},b8b6:function(n,t,i){var e=i("24fb");t=e(!1),t.push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.videolist[data-v-d00a836c]{background-color:#fff}.bg-fff[data-v-d00a836c]{padding-bottom:3vw}.bg-fff .item[data-v-d00a836c]:last-child{margin-bottom:0}.categoryimg[data-v-d00a836c]{width:100%;display:block}.titletop[data-v-d00a836c]{padding:5vw 3vw;font-size:4.5vw;font-weight:700;background-color:#fff;text-align:center}.titletop .name[data-v-d00a836c]{background-image:url(https://www.hongrensutui.com/h5/img/wzbg2.png);background-repeat:repeat-x;background-position:bottom;display:inline-block;padding:0 1vw}.item[data-v-d00a836c]{margin:0 3vw;width:94vw;background-color:#f7f7f7;border-radius:1.5vw;margin-bottom:3vw;position:relative}.item .free[data-v-d00a836c]{position:absolute;width:8vw;border-top-left-radius:1.5vw;border-bottom-right-radius:1.5vw;left:0;z-index:100}.item .ptgz[data-v-d00a836c]{float:left;width:36vw;border-top-left-radius:1.5vw;border-bottom-left-radius:1.5vw}.item .title[data-v-d00a836c]{border-top-right-radius:1.5vw;border-bottom-right-radius:1.5vw;float:left;padding:0 3vw;width:58vw}.item .title .name[data-v-d00a836c]{font-size:3.8vw;font-weight:700;line-height:6vw;margin-top:2vw}.item .title .hits[data-v-d00a836c]{font-size:2.8vw;position:relative;top:2vw;float:left}.cu-bar[data-v-d00a836c]{position:static}.cu-dialog[data-v-d00a836c]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-d00a836c]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-d00a836c]{width:auto}.bg-img[data-v-d00a836c]{position:relative}.cuIcon-close[data-v-d00a836c]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}.wechat[data-v-d00a836c]{width:200px;height:200px}.tip[data-v-d00a836c]{color:#fff;margin:2vw 0;font-size:3.4vw}.auth[data-v-d00a836c]{padding:6vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-d00a836c]{color:#333;margin-bottom:4vw}.more[data-v-d00a836c]{font-size:3.4vw;text-align:center}.card[data-v-d00a836c]{padding:2vw;margin:0 3vw;line-height:6vw;background-color:#f7f7f7;border-top:2px #333 solid;display:-webkit-box;display:-webkit-flex;display:flex;color:#666;-webkit-justify-content:space-around;justify-content:space-around;margin-bottom:3vw}.card .sharecontent[data-v-d00a836c]{font-size:4vw;text-align:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}',""]),n.exports=t},e534:function(n,t,i){"use strict";var e=i("971d"),a=i.n(e);a.a},f73f:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(n){this.mescroll&&this.mescroll.onPageScroll(n)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(n){this.mescroll=n,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var n=this.$refs.mescrollRef;n&&(this.mescroll=n.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var n=this;setTimeout((function(){n.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},a=e;t.default=a}}]);