(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-collect"],{"05ef":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=a},"0d6c":function(t,e,i){"use strict";i.r(e);var a=i("5559"),n=i("ab78");for(var l in n)"default"!==l&&function(t){i.d(e,t,(function(){return n[t]}))}(l);i("7cf6");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"30b9e154",null,!1,a["a"],o);e["default"]=c.exports},3734:function(t,e,i){"use strict";i.r(e);var a=i("c2d5"),n=i("75eb");for(var l in n)"default"!==l&&function(t){i.d(e,t,(function(){return n[t]}))}(l);i("d973");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"525162bc",null,!1,a["a"],o);e["default"]=c.exports},"4fb0":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.cu-bar[data-v-525162bc]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-525162bc]{margin-left:3vw;height:30px}.cuIcon-back[data-v-525162bc]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-525162bc]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-525162bc]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-525162bc]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-525162bc]{width:auto}.cuIcon-close[data-v-525162bc]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},"504e":function(t,e,i){var a=i("7054");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1e6aca34",a,!0,{sourceMap:!1,shadowMode:!1})},5559:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return l})),i.d(e,"a",(function(){return a}));var a={mescrollUni:i("426c").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-top-bar"),i("v-uni-view",{staticClass:"category clearfix",style:{top:t.height+43+"px"}},[i("v-uni-view",{staticClass:"ranking"},[t._v("#")]),i("v-uni-view",{staticClass:"avatar"},[t._v("头像")]),i("v-uni-view",{staticClass:"number"},[t._v("昵称")]),i("v-uni-view",{staticClass:"fans"},[t._v("粉丝")])],1),i("v-uni-view",{staticClass:"hongren",style:{top:t.height+88+"px"}},[i("mescroll-uni",{ref:"mescrollRef",attrs:{down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"item"},[t._l(t.collectlist,(function(e,a){return i("v-uni-view",{key:a,staticClass:"list clearfix",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage("celebrity/details",e.id)}}},[a<3?i("v-uni-view",{staticClass:"ranking cor-e8"},[t._v(t._s(a+1))]):t._e(),a>=3?i("v-uni-view",{staticClass:"ranking "},[t._v(t._s(a+1))]):t._e(),i("img",{attrs:{src:e["avatar"],mode:"widthFix"}}),i("v-uni-view",{staticClass:"number"},[t.userInfo.card_id>0?i("v-uni-view",{staticClass:"name"},[t._v(t._s(e.nickname))]):i("v-uni-view",{staticClass:"name"},[t._v(t._s(t._f("numFilter")(e.nickname)))]),i("v-uni-view",{staticClass:"lable clearfix"},["1"==e.pay_type?i("v-uni-view",{staticClass:"cu-tag round bg-red light"},[t._v("坑位费")]):t._e(),"2"==e.pay_type?i("v-uni-view",{staticClass:"cu-tag round bg-orange light"},[t._v("纯佣金")]):t._e(),"3"==e.pay_type?i("v-uni-view",{staticClass:"cu-tag round bg-purple light"},[t._v("坑位费+佣金")]):t._e(),t._l(e.cooperation,(function(e,a){return a<1?i("v-uni-view",{key:a,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(e))]):t._e()}))],2)],1),i("v-uni-view",{staticClass:"number fr"},[i("v-uni-view",{staticClass:"name cor-e8"},[t._v(t._s(e.fans)+"w")]),i("v-uni-view",{staticClass:"lable clearfix"},[i("v-uni-view",{staticClass:"lablelist collect",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.collect(e)}}},[i("v-uni-view",{staticClass:"lg text-gray",class:e.show?"cuIcon-likefill":"cuIcon-like"})],1)],1)],1)],1)})),""==t.collectlist&&t.collectlist.length<=0?i("v-uni-view",{staticClass:"no-data"},[t._v("暂无关注")]):t._e()],2)],1)],1)],1)},l=[]},5713:function(t,e,i){var a=i("4fb0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("645c1318",a,!0,{sourceMap:!1,shadowMode:!1})},7054:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".hongren[data-v-30b9e154]{bottom:0}.category[data-v-30b9e154]{position:fixed;left:0;right:0;height:44px;line-height:44px;padding:0 3vw;font-size:4vw;color:#999;background:#f7f7f7;z-index:202;-webkit-box-shadow:1px 1px 2px rgba(26,26,26,.1);box-shadow:1px 1px 2px rgba(26,26,26,.1)}.category .ranking[data-v-30b9e154],\n.item .list .ranking[data-v-30b9e154]{width:8vw;float:left}.category .number[data-v-30b9e154]{padding-left:6.6vw}.category .avatar[data-v-30b9e154],\n.category .number[data-v-30b9e154],\n.item .list .number[data-v-30b9e154]{float:left}.category .fans[data-v-30b9e154],\n.item .list .fans[data-v-30b9e154]{float:right}.category .avatar[data-v-30b9e154]{padding-left:3.5vw}.item[data-v-30b9e154]{padding:0}.item .list .number .name[data-v-30b9e154]{font-size:4vw;line-height:8vw}.item .list[data-v-30b9e154]{line-height:15vw;font-size:4vw;padding:3vw}.item .list img[data-v-30b9e154]{float:left;width:15vw;height:15vw;-webkit-border-radius:50%;border-radius:50%;margin-right:3vw}.item .list .number .lable[data-v-30b9e154]{line-height:0;padding:0}.item .list .number .lable .lablelist[data-v-30b9e154]{float:left;margin-right:1.5vw;text-align:center;font-size:3vw;border:1px solid #ddd;-webkit-border-radius:2vw;border-radius:2vw;line-height:0;color:#999;padding:2.5vw 2vw}.item .list .number.fr[data-v-30b9e154]{float:right!important}.item .list .number .lable .lablelist.collect[data-v-30b9e154]{border:none;padding:2.5vw 0;margin:0;float:right}.item .list .number .lable .lablelist.collect .cuIcon-like[data-v-30b9e154]{font-size:6vw}.item .list .number .lable .lablelist.collect .cuIcon-likefill[data-v-30b9e154]{font-size:6vw;color:#ffce6e}.item .list .fans[data-v-30b9e154]{font-weight:700}.item .list[data-v-30b9e154]:nth-of-type(even){background:#fcfbff}",""]),t.exports=e},"75eb":function(t,e,i){"use strict";i.r(e);var a=i("05ef"),n=i.n(a);for(var l in a)"default"!==l&&function(t){i.d(e,t,(function(){return a[t]}))}(l);e["default"]=n.a},"7cf6":function(t,e,i){"use strict";var a=i("504e"),n=i.n(a);n.a},8880:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},n=a;e.default=n},ab78:function(t,e,i){"use strict";i.r(e);var a=i("bc12"),n=i.n(a);for(var l in a)"default"!==l&&function(t){i.d(e,t,(function(){return a[t]}))}(l);e["default"]=n.a},bc12:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("3734")),l=a(i("cea8")),o=a(i("8880")),s={mixins:[l.default,o.default],components:{uniTopBar:n.default},data:function(){return{downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,empty:{tip:"~ 空空如也 ~"}},collectlist:"",userInfo:[],height:""}},filters:{numFilter:function(t){var e,i=t.length-1;return i<=2?e=t[0]+"**":3==i?e=t[0]+"***":4==i?e=t[0]+"****":i>=5&&(e=t[0]+"*****"),e}},onLoad:function(t){var e=this;this.height=this.StatusBar,uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data&&(e.userInfo=t.data)}})},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var e=this;uni.getStorage({key:"userInfo",success:function(i){""!=i.data&&null!=i.data?(e.userInfo=i.data,e.getcollect(t,e.userInfo.id)):e.getcollect(t)},fail:function(i){e.getcollect(t)}})},getcollect:function(t,e){var i=this,a=this;uni.request({url:"https://www.hongrensutui.com/api/index/totalcollect",data:{pagenum:t.num,pagesize:t.size,userid:e},method:"POST",success:function(e){var n=e.data.data.list,l=n.length;1==t.num&&(a.collectlist=[]),a.collectlist=a.collectlist.concat(e.data.data.list),i.mescroll.endByPage(l),setTimeout((function(){i.mescroll.endSuccess(l)}),20)},fail:function(t){a.mescroll.endErr()}})},collect:function(t){var e=this;e.userInfo.id?t.show?(uni.showToast({title:"已取消关注",icon:"none",duration:2e3}),e.collectClick(t)):(uni.showToast({title:"已加入关注",icon:"none",duration:2e3}),e.collectClick(t)):uni.showToast({title:"您还未登录，请在 我的 界面登录后操作",icon:"none",duration:3e3})},collectClick:function(t){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/collect",data:{id:e.userInfo.id,collectid:t.id},method:"POST",success:function(e){t.show=!t.show}})},navToDetailPage:function(t,e){e&&(t=t+"?id="+e),uni.navigateTo({url:"/pages/"+t})}}};e.default=s},c2d5:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return l})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):i("span",[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])])]):i("span",[t.within?i("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},l=[]},cea8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},n=a;e.default=n},d973:function(t,e,i){"use strict";var a=i("5713"),n=i.n(a);n.a}}]);