(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-collect"],{"0284":function(t,i,e){var a=e("5d93");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("6c98fa9b",a,!0,{sourceMap:!1,shadowMode:!1})},"0f5e":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};i.default=a},"5d93":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".hongren[data-v-a7f63bd4]{bottom:0}.category[data-v-a7f63bd4]{position:fixed;left:0;right:0;height:44px;line-height:44px;padding:0 3vw;font-size:4vw;color:#999;background:#f7f7f7;z-index:202;box-shadow:1px 1px 2px rgba(26,26,26,.1)}.category .ranking[data-v-a7f63bd4],\n.item .list .ranking[data-v-a7f63bd4]{width:8vw;float:left}.category .number[data-v-a7f63bd4]{padding-left:6.6vw}.category .avatar[data-v-a7f63bd4],\n.category .number[data-v-a7f63bd4],\n.item .list .number[data-v-a7f63bd4]{float:left}.category .fans[data-v-a7f63bd4],\n.item .list .fans[data-v-a7f63bd4]{float:right}.category .avatar[data-v-a7f63bd4]{padding-left:3.5vw}.item[data-v-a7f63bd4]{padding:0}.item .list .number .name[data-v-a7f63bd4]{font-size:4vw;line-height:8vw}.item .list[data-v-a7f63bd4]{line-height:15vw;font-size:4vw;padding:3vw}.item .list img[data-v-a7f63bd4]{float:left;width:15vw;height:15vw;border-radius:50%;margin-right:3vw}.item .list .number .lable[data-v-a7f63bd4]{line-height:0;padding:0}.item .list .number .lable .lablelist[data-v-a7f63bd4]{float:left;margin-right:1.5vw;text-align:center;font-size:3vw;border:1px solid #ddd;border-radius:2vw;line-height:0;color:#999;padding:2.5vw 2vw}.item .list .number.fr[data-v-a7f63bd4]{float:right!important}.item .list .number .lable .lablelist.collect[data-v-a7f63bd4]{border:none;padding:2.5vw 0;margin:0;float:right}.item .list .number .lable .lablelist.collect .cuIcon-like[data-v-a7f63bd4]{font-size:6vw}.item .list .number .lable .lablelist.collect .cuIcon-likefill[data-v-a7f63bd4]{font-size:6vw;color:#ffce6e}.item .list .fans[data-v-a7f63bd4]{font-weight:700}.item .list[data-v-a7f63bd4]:nth-of-type(even){background:#fcfbff}",""]),t.exports=i},6687:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},n=a;i.default=n},7703:function(t,i,e){"use strict";var a=e("ee27");e("99af"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("e3d7")),o=a(e("6687")),l=a(e("f680")),s={mixins:[o.default,l.default],components:{uniTopBar:n.default},data:function(){return{downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,empty:{tip:"~ 空空如也 ~"}},collectlist:"",userInfo:[],height:""}},onLoad:function(t){var i=this;this.height=this.StatusBar,uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data&&(i.userInfo=t.data)}})},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var i=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data?(i.userInfo=e.data,i.getcollect(t,i.userInfo.id)):i.getcollect(t)},fail:function(e){i.getcollect(t)}})},getcollect:function(t,i){var e=this,a=this;uni.request({url:"https://www.hongrensutui.com/api/index/totalcollect",data:{pagenum:t.num,pagesize:t.size,userid:i},method:"POST",success:function(i){var n=i.data.data.list,o=n.length;1==t.num&&(a.collectlist=[]),a.collectlist=a.collectlist.concat(i.data.data.list),e.mescroll.endByPage(o),setTimeout((function(){e.mescroll.endSuccess(o)}),20)},fail:function(t){a.mescroll.endErr()}})},collect:function(t){var i=this;i.userInfo.id?t.show?(uni.showToast({title:"已取消关注",icon:"none",duration:2e3}),i.collectClick(t)):(uni.showToast({title:"已加入关注",icon:"none",duration:2e3}),i.collectClick(t)):uni.showToast({title:"您还未登录，请在 我的 界面登录后操作",icon:"none",duration:3e3})},collectClick:function(t){var i=this;uni.request({url:"https://www.hongrensutui.com/api/index/collect",data:{id:i.userInfo.id,collectid:t.id},method:"POST",success:function(i){t.show=!t.show}})},navToDetailPage:function(t,i){i&&(t=t+"?id="+i),uni.navigateTo({url:"/pages/"+t})}}};i.default=s},"7af8":function(t,i,e){"use strict";e.r(i);var a=e("7703"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"83cd":function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?e("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[e("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?e("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():e("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?e("span",[t.title?e("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):e("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?e("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img&&1==t.barid?e("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e(),t.img&&1!=t.barid?e("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right2.png"}}):t._e()])])},o=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}))},"9b8e":function(t,i,e){"use strict";e.r(i);var a=e("0f5e"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},aa9f:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.auth[data-v-9df7cb58]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-9df7cb58]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-9df7cb58]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-9df7cb58]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-9df7cb58]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-9df7cb58]{height:100vh;z-index:300}.cu-bar[data-v-9df7cb58]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-9df7cb58]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-9df7cb58]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-9df7cb58]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-9df7cb58]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9df7cb58]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9df7cb58]{width:auto}.cuIcon-close[data-v-9df7cb58]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=i},b17d:function(t,i,e){var a=e("aa9f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("2d0d384a",a,!0,{sourceMap:!1,shadowMode:!1})},b647:function(t,i,e){"use strict";var a={mescrollUni:e("fd62").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("uni-top-bar"),e("v-uni-view",{staticClass:"category clearfix",style:{top:t.height+43+"px"}},[e("v-uni-view",{staticClass:"ranking"},[t._v("#")]),e("v-uni-view",{staticClass:"avatar"},[t._v("头像")]),e("v-uni-view",{staticClass:"number"},[t._v("昵称")]),e("v-uni-view",{staticClass:"fans"},[t._v("粉丝")])],1),e("v-uni-view",{staticClass:"hongren",style:{top:t.height+88+"px"}},[e("mescroll-uni",{ref:"mescrollRef",attrs:{down:t.downOption,up:t.upOption},on:{init:function(i){arguments[0]=i=t.$handleEvent(i),t.mescrollInit.apply(void 0,arguments)},down:function(i){arguments[0]=i=t.$handleEvent(i),t.downCallback.apply(void 0,arguments)},up:function(i){arguments[0]=i=t.$handleEvent(i),t.upCallback.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"item"},[t._l(t.collectlist,(function(i,a){return e("v-uni-view",{key:a,staticClass:"list clearfix",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("platform/celebrity",i.id)}}},[a<3?e("v-uni-view",{staticClass:"ranking cor-e8"},[t._v(t._s(a+1))]):t._e(),a>=3?e("v-uni-view",{staticClass:"ranking "},[t._v(t._s(a+1))]):t._e(),e("img",{attrs:{src:i["avatar"],mode:"widthFix"}}),e("v-uni-view",{staticClass:"number"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(i.nickname))]),e("v-uni-view",{staticClass:"lable clearfix"},["1"==i.pay_type?e("v-uni-view",{staticClass:"cu-tag round bg-red light"},[t._v("预付费")]):t._e(),"2"==i.pay_type?e("v-uni-view",{staticClass:"cu-tag round bg-orange light"},[t._v("纯佣金")]):t._e(),"3"==i.pay_type?e("v-uni-view",{staticClass:"cu-tag round bg-purple light"},[t._v("预付费+纯佣金")]):t._e(),t._l(i.cooperation,(function(i,a){return a<1?e("v-uni-view",{key:a,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(i))]):t._e()}))],2)],1),e("v-uni-view",{staticClass:"number fr"},[e("v-uni-view",{staticClass:"name cor-e8"},[t._v(t._s(i.fans)+"w")]),e("v-uni-view",{staticClass:"lable clearfix"},[e("v-uni-view",{staticClass:"lablelist collect",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.collect(i)}}},[e("v-uni-view",{staticClass:"lg text-gray",class:i.show?"cuIcon-likefill":"cuIcon-like"})],1)],1)],1)],1)})),""==t.collectlist&&t.collectlist.length<=0?e("v-uni-view",{staticClass:"no-data"},[t._v("暂无关注")]):t._e()],2)],1)],1)],1)},o=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}))},c4f3:function(t,i,e){"use strict";var a=e("b17d"),n=e.n(a);n.a},e3d7:function(t,i,e){"use strict";e.r(i);var a=e("83cd"),n=e("9b8e");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("c4f3");var l,s=e("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"9df7cb58",null,!1,a["a"],l);i["default"]=r.exports},e772:function(t,i,e){"use strict";e.r(i);var a=e("b647"),n=e("7af8");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("ed32");var l,s=e("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"a7f63bd4",null,!1,a["a"],l);i["default"]=r.exports},ed32:function(t,i,e){"use strict";var a=e("0284"),n=e.n(a);n.a},f680:function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},n=a;i.default=n}}]);