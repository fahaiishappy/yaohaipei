(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-college-cash-list"],{"13d1":function(n,t,e){"use strict";e.r(t);var a=e("f394"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},"1fa5":function(n,t,e){"use strict";e.r(t);var a=e("8043"),i=e("13d1");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("e8da");var s,r=e("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"07edaae6",null,!1,a["a"],s);t["default"]=c.exports},"31ce":function(n,t,e){"use strict";e.r(t);var a=e("4fba"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},"4fba":function(n,t,e){"use strict";var a=e("4ea4");e("99af"),e("b680"),e("d3b7"),e("acd8"),e("ac1f"),e("25f0"),e("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("1fa5")),o=a(e("aa15")),s=a(e("f794")),r={mixins:[o.default,s.default],components:{uniTopBar:i.default},data:function(){return{downOption:{auto:!1},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"~ 空空如也 ~"}},height:"400px",topheight:0,userInfo:"",goods:"",toptitle:"课程列表",card_id:0,course:0,src:"",poster:"",modalName:null,id:"",category:"",bottom:"",member:"",goodslength:"",isandroid:!1}},filters:{numFilter:function(n){var t="";return t=isNaN(n)||""===n?" ":parseFloat(n).toFixed(0),t},numSingle:function(n,t){var e="";return e=isNaN(n)||""===n?" ":parseFloat(n/t).toFixed(2),e},flie_name:function(n){var t=n.split("."),e=t[t.length-2].split("/"),a=e[e.length-1],i=t[t.length-1];return a=a.length>20?"《"+a.substring(0,20)+"...》":"《"+a+"》",a+"."+i},flie_txt:function(n){var t=n.split("."),e=t[t.length-1];return"pdf"==e?"https://www.hongrensutui.com/uploads/share/pdf_logo.png":"doc"==e||"docx"==e?"https://www.hongrensutui.com/uploads/share/doc_logo.png":"xls"==e?"https://www.hongrensutui.com/uploads/share/xls_logo.png":"xlsx"==e?"https://www.hongrensutui.com/uploads/share/xlsx_logo.png":"ppt"==e?"https://www.hongrensutui.com/uploads/share/ppt_logo.png":"pptx"==e?"https://www.hongrensutui.com/uploads/share/pptx_logo.png":"zip"==e?"https://www.hongrensutui.com/uploads/share/zip_logo.png":"rar"==e?"https://www.hongrensutui.com/uploads/share/rar_logo.png":void 0}},props:{tabs:Array},onLoad:function(n){var t=this,e=this;n.id&&(e.id=n.id),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",uni.request({url:"https://www.hongrensutui.com/api/index/course",success:function(n){t.course=n.data.data.course}}),n.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",n.invite)),n.code?uni.getStorage({key:"invite",success:function(t){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:n.code,invite:t.data},method:"POST",success:function(n){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",n.data.data.info),e.userInfo=n.data.data.info}})},fail:function(t){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:n.code},method:"POST",success:function(n){uni.setStorageSync("userInfo",n.data.data.info),e.userInfo=n.data.data.info}})}}):uni.getStorage({key:"userInfo",success:function(n){""!=n.data&&null!=n.data?e.updateuser(n.data.id):wxlogin()},fail:function(n){wxlogin()}}),e.getmember()},onShow:function(){var n=this;uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data&&n.updateuser(t.data.id)}})},methods:{updateuser:function(n){var t=this;n&&uni.request({url:"https://www.hongrensutui.com/api/api/userinfo",data:{id:n},method:"POST",success:function(n){n.data.data.info?(uni.setStorageSync("userInfo",n.data.data.info),t.userInfo=n.data.data.info,t.downCallback()):wxlogin()}})},downCallback:function(){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(n){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&(t.userInfo=e.data,t.goodslist(n))}})},goodslist:function(n){var t=this,e=this;uni.request({url:"https://www.hongrensutui.com/api/index/videolist",method:"POST",data:{mid:e.userInfo.id,id:e.id,pagenum:n.num,pagesize:n.size},success:function(a){e.category=a.data.data.category,e.goodslength=a.data.data.count;var i=a.data.data.info,o=i.length;switch(uni.getSystemInfoSync().platform){case"android":e.category.price&&(e.bottom="50px"),e.isandroid=!0;break;case"ios":e.category.price&&(e.bottom="50px"),e.isandroid=!0;break}(e.userInfo.card_id>1||i[0].categoryfree)&&(e.bottom="0px",e.isandroid=!1),e.share(e.userInfo.company_id,e.userInfo.id,e.category.name),1==n.num&&(e.goods=[]),e.goods=e.goods.concat(a.data.data.info),t.mescroll.endByPage(o),setTimeout((function(){t.mescroll.endSuccess(o)}),20)},fail:function(n){e.mescroll.endErr()}})},getmember:function(){var n=this;uni.request({url:"https://www.hongrensutui.com/api/index/member",data:{belong:4},method:"POST",success:function(t){n.member=t.data.data.list[0]}})},categorymember:function(n){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/categoryorder",data:{openid:t.userInfo.openid,id:n},method:"POST",success:function(n){var e="/pages/college/cash-list?id="+t.id;callpay(JSON.parse(n.data.data.parameters),n.data.data.info,e)}}):uni.showToast({title:"请登录后操作",icon:"none",duration:2e3})},openmember:function(n){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/collegeorder",data:{openid:t.userInfo.openid,id:n},method:"POST",success:function(n){var e="/pages/college/cash-list?id="+t.id;callpay(JSON.parse(n.data.data.parameters),n.data.data.info,e)}}):uni.showToast({title:"请登录后操作",icon:"none",duration:2e3})},cardmember:function(){var n=this;n.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/card",data:{openid:n.userInfo.openid,id:8},method:"POST",success:function(t){var e="/pages/college/cash-list?id="+n.id;callpay(JSON.parse(t.data.data.parameters),t.data.data.info,e)}}):(uni.showToast({title:"请登录后操作",icon:"none",duration:2e3}),ss)},wxcategorymember:function(n){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Order/categoryorder",data:{openid:t.userInfo.xopenid,id:n},method:"POST",success:function(n){var e=n.data.data.orderid;uni.requestPayment({provider:"wxpay",timeStamp:n.data.data.wechat.payinfo.timeStamp,nonceStr:n.data.data.wechat.payinfo.nonceStr,package:n.data.data.wechat.payinfo.package,signType:n.data.data.wechat.payinfo.signType,paySign:n.data.data.wechat.payinfo.paySign,success:function(n){uni.request({url:"https://www.hongrensutui.com/api/Order/complete_categoryorder",data:{openid:t.userInfo.xopenid,id:e},method:"POST",success:function(n){var e="/pages/college/cash-list?id="+t.id;uni.redirectTo({url:e})}})}})}}):uni.showToast({title:"请登录后操作",icon:"none",duration:2e3})},wxcardmember:function(){var n=this;n.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Order/card",data:{openid:n.userInfo.xopenid,id:8},method:"POST",success:function(t){var e=t.data.data.orderid;uni.requestPayment({provider:"wxpay",timeStamp:t.data.data.wechat.payinfo.timeStamp,nonceStr:t.data.data.wechat.payinfo.nonceStr,package:t.data.data.wechat.payinfo.package,signType:t.data.data.wechat.payinfo.signType,paySign:t.data.data.wechat.payinfo.paySign,success:function(t){uni.request({url:"https://www.hongrensutui.com/api/Order/complete_card",data:{openid:n.userInfo.xopenid,id:e},method:"POST",success:function(t){var e="/pages/college/cash-list?id="+n.id;uni.redirectTo({url:e})}})}})}}):uni.showToast({title:"您还未登录，请登录后操作",icon:"none",duration:2e3})},navToDetailPage:function(n,t){switch(uni.getSystemInfoSync().platform){case"android":1==t.free?uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=2&msg=免费文章"}):8==t.article_card_id?uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=1&msg=学院超级会员"}):t.categoryfree?uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=1&msg=已购买栏目"}):t.articlefree?uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=1&msg=已购买文章"}):uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=0&msg=付费文章"});break;case"ios":1==t.free?uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=2&msg=免费文章"}):8==t.article_card_id?uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=1&msg=学院超级会员"}):t.categoryfree?uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=1&msg=已购买栏目"}):t.articlefree?uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=1&msg=已购买文章"}):uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=0&msg=付费文章"});break}},hideModal:function(n){this.modalName=null},share:function(n){function t(t,e,a){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}((function(n,t,e){var a=e+" - 红人速推学院 | 抖音、快手指定线上学习平台",i="学院涵盖抖音、快手策略打法，为业界输出专业的营销课程，点击查看详情",o="https://www.hongrensutui.com/uploads/share/college_video_logo.png";share(a,i,o,t)}))}};t.default=r},"5c9d":function(n,t,e){"use strict";e.r(t);var a=e("f47f"),i=e("31ce");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("db11b");var s,r=e("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"4b0e1076",null,!1,a["a"],s);t["default"]=c.exports},8043:function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:n.height+44+"px",paddingTop:n.height+"px",background:n.background}},[1!=n.barid?e("span",{staticClass:"clearfix"},[n.within?e("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:n.within,mode:"heightFix"}}):e("span",[n.title?e("span",{staticClass:"title"},[n._v(n._s(n.title))]):e("span",{staticClass:"title"},[n._v("红人速推")])])]):e("span",[n.within?e("img",{staticClass:"logo_left",attrs:{src:n.within,mode:"heightFix"}}):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},9532:function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.bg-fff[data-v-4b0e1076]{padding-bottom:3vw}.cu-bar.foot[data-v-4b0e1076]{z-index:199}.cu-bar.foot[data-v-4b0e1076]{position:fixed;bottom:0;left:0;right:0;width:100%;height:50px;min-height:50px;z-index:200;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar.foot .text-red[data-v-4b0e1076]{color:#e71d36}.cu-bar.foot .text-gray[data-v-4b0e1076]{color:#9eb3c2}.cu-bar.foot.tabbar.shadow[data-v-4b0e1076]{-webkit-box-shadow:0 -1px 2px rgba(26,26,26,.1);box-shadow:0 -1px 2px rgba(26,26,26,.1)}",""]),n.exports=t},aa15:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(n){this.mescroll&&this.mescroll.onPageScroll(n)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(n){this.mescroll=n,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var n=this.$refs.mescrollRef;n&&(this.mescroll=n.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var n=this;setTimeout((function(){n.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},i=a;t.default=i},aef7:function(n,t,e){var a=e("de5e");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("02904e2c",a,!0,{sourceMap:!1,shadowMode:!1})},db11b:function(n,t,e){"use strict";var a=e("dedb"),i=e.n(a);i.a},de5e:function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),n.exports=t},dedb:function(n,t,e){var a=e("9532");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("215cc271",a,!0,{sourceMap:!1,shadowMode:!1})},e8da:function(n,t,e){"use strict";var a=e("aef7"),i=e.n(a);i.a},f394:function(n,t,e){"use strict";e("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};t.default=a},f47f:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var a={mescrollUni:e("7cce").default},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("uni-top-bar",{attrs:{title:n.toptitle}}),e("mescroll-uni",{ref:"mescrollRef",attrs:{top:n.topheight+43+"px",bottom:n.bottom,down:n.downOption,up:n.upOption},on:{init:function(t){arguments[0]=t=n.$handleEvent(t),n.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=n.$handleEvent(t),n.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=n.$handleEvent(t),n.upCallback.apply(void 0,arguments)}}},[n.category.img?e("img",{staticClass:"categoryimg",attrs:{src:n.category["img"],alt:"",mode:"widthFix"}}):n._e(),e("v-uni-view",{staticClass:"article_list"},[e("v-uni-view",{staticClass:"titletop"},[e("v-uni-view",{staticClass:"name"},[n._v(n._s(n.category.name))])],1),e("v-uni-view",{staticClass:"bg-fff mb-0 pb-0"},[e("v-uni-view",{staticClass:"card"},[e("v-uni-view",{staticClass:"sharecontent"},[n._v("此栏目共有"+n._s(n.goodslength)+"个主题，持续更新中...")])],1)],1),n._l(n.goods,(function(t,a){return e("v-uni-view",{key:a,staticClass:"list",on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.navToDetailPage("college/details",t)}}},[e("v-uni-view",{staticClass:"data"},[e("v-uni-view",{staticClass:"name"},[n._v(n._s(t.title))]),1==t.free||n.userInfo.card_id>1||t.categoryfree||t.articlefree?e("v-uni-view",{staticClass:"tip",staticStyle:{border:"none",margin:"0"}}):e("v-uni-view",{staticClass:"tip"},[e("span",{staticClass:"lg text-gray cuIcon-lock"}),e("span",{staticClass:"tipname"},[n._v("您需要加入"+n._s(t.category)+"，才能下载！")])]),e("v-uni-view",{staticClass:"flie"},[e("img",{staticClass:"flie_img",attrs:{src:n._f("flie_txt")(t["file"]),mode:"widthFix"}}),e("v-uni-view",{staticClass:"flie_name"},[n._v(n._s(n._f("flie_name")(t.file))),1==t.free||n.userInfo.card_id>1||t.categoryfree||t.articlefree?e("span",{staticClass:"lg text-gray cuIcon-unlock"}):e("span",{staticClass:"lg text-gray cuIcon-lock"})])],1),e("v-uni-view",{staticClass:"time"},[e("v-uni-view",{staticClass:"cu-tag round light bg-grey",on:{click:function(e){e.stopPropagation(),arguments[0]=e=n.$handleEvent(e),n.articlelist(t.pid,t.category)}}},[n._v(n._s(t.category))]),e("v-uni-view",{staticClass:"cu-tag round light bg-orange"},[n._v(n._s(t.views)+"人已学习")])],1)],1)],1)}))],2),e("v-uni-view",{staticClass:"cu-modal poptips",class:"Imageno"==n.modalName?"show":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"auth"},[e("v-uni-view",{staticClass:"title"},[n._v("十分抱歉，由于相关规范，小程序暂不支持查看。")])],1)],1)],1)],1),n.isandroid?e("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[e("v-uni-view",{staticClass:"opening round shadow text-center"},[e("v-uni-view",{staticClass:"bottombtn clearfix"},[e("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.categorymember(n.category.id)}}},[n._v(n._s(n._f("numFilter")(n.category.price))+" 购买此栏目")]),e("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Image"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.cardmember.apply(void 0,arguments)}}},[n._v(n._s(n._f("numFilter")(n.member.discountedprice))+" 全站免费看")])],1)],1)],1):n._e()],1)},o=[]},f794:function(n,t,e){"use strict";e("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(n){this.i!==n||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(n){this.mescroll=n,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},i=a;t.default=i}}]);