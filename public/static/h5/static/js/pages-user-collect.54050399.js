(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-collect"],{"0509":function(t,a,e){"use strict";var i=e("4ea4");e("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("5ad0")),l=i(e("f73f")),o=i(e("50f0")),s={mixins:[l.default,o.default],components:{uniTopBar:n.default},data:function(){return{downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,empty:{tip:"~ 空空如也 ~"}},collectlist:"",userInfo:[],height:""}},onLoad:function(t){var a=this;this.height=this.StatusBar,uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data&&(a.userInfo=t.data)}})},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var a=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data?(a.userInfo=e.data,a.getcollect(t,a.userInfo.id)):a.getcollect(t)},fail:function(e){a.getcollect(t)}})},getcollect:function(t,a){var e=this,i=this;uni.request({url:"https://www.hongrensutui.com/api/index/totalcollect",data:{pagenum:t.num,pagesize:t.size,userid:a},method:"POST",success:function(a){var n=a.data.data.list,l=n.length;1==t.num&&(i.collectlist=[]),i.collectlist=i.collectlist.concat(a.data.data.list),e.mescroll.endByPage(l),setTimeout((function(){e.mescroll.endSuccess(l)}),20)},fail:function(t){i.mescroll.endErr()}})},collect:function(t){var a=this;a.userInfo.id?t.show?(uni.showToast({title:"已取消关注",icon:"none",duration:2e3}),a.collectClick(t)):(uni.showToast({title:"已加入关注",icon:"none",duration:2e3}),a.collectClick(t)):uni.showToast({title:"您还未登录，请在 我的 界面登录后操作",icon:"none",duration:3e3})},collectClick:function(t){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/collect",data:{id:a.userInfo.id,collectid:t.id},method:"POST",success:function(a){t.show=!t.show}})},navToDetailPage:function(t,a){a&&(t=t+"?id="+a),uni.navigateTo({url:"/pages/"+t})}}};a.default=s},1578:function(t,a,e){var i=e("51a2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("ce65e83a",i,!0,{sourceMap:!1,shadowMode:!1})},"1b872":function(t,a,e){"use strict";e.r(a);var i=e("0509"),n=e.n(i);for(var l in i)"default"!==l&&function(t){e.d(a,t,(function(){return i[t]}))}(l);a["default"]=n.a},"1c4a":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return l})),e.d(a,"a",(function(){return i}));var i={mescrollUni:e("0777").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("uni-top-bar"),e("v-uni-view",{staticClass:"category clearfix",style:{top:t.height+43+"px"}},[e("v-uni-view",{staticClass:"ranking"},[t._v("#")]),e("v-uni-view",{staticClass:"avatar"},[t._v("头像")]),e("v-uni-view",{staticClass:"number"},[t._v("昵称")]),e("v-uni-view",{staticClass:"fans"},[t._v("粉丝")])],1),e("v-uni-view",{staticClass:"hongren",style:{top:t.height+88+"px"}},[e("mescroll-uni",{ref:"mescrollRef",attrs:{down:t.downOption,up:t.upOption},on:{init:function(a){arguments[0]=a=t.$handleEvent(a),t.mescrollInit.apply(void 0,arguments)},down:function(a){arguments[0]=a=t.$handleEvent(a),t.downCallback.apply(void 0,arguments)},up:function(a){arguments[0]=a=t.$handleEvent(a),t.upCallback.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"item"},[t._l(t.collectlist,(function(a,i){return e("v-uni-view",{key:i,staticClass:"list clearfix",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("celebrity/details",a.id)}}},[i<3?e("v-uni-view",{staticClass:"ranking cor-e8"},[t._v(t._s(i+1))]):t._e(),i>=3?e("v-uni-view",{staticClass:"ranking "},[t._v(t._s(i+1))]):t._e(),e("img",{attrs:{src:a["avatar"],mode:"widthFix"}}),e("v-uni-view",{staticClass:"number"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(a.nickname))]),e("v-uni-view",{staticClass:"lable clearfix"},["1"==a.pay_type?e("v-uni-view",{staticClass:"cu-tag round bg-red light"},[t._v("坑位费")]):t._e(),"2"==a.pay_type?e("v-uni-view",{staticClass:"cu-tag round bg-orange light"},[t._v("纯佣金")]):t._e(),"3"==a.pay_type?e("v-uni-view",{staticClass:"cu-tag round bg-purple light"},[t._v("坑位费+佣金")]):t._e(),t._l(a.cooperation,(function(a,i){return i<1?e("v-uni-view",{key:i,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(a))]):t._e()}))],2)],1),e("v-uni-view",{staticClass:"number fr"},[e("v-uni-view",{staticClass:"name cor-e8"},[t._v(t._s(a.fans)+"w")]),e("v-uni-view",{staticClass:"lable clearfix"},[e("v-uni-view",{staticClass:"lablelist collect",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.collect(a)}}},[e("v-uni-view",{staticClass:"lg text-gray",class:a.show?"cuIcon-likefill":"cuIcon-like"})],1)],1)],1)],1)})),""==t.collectlist&&t.collectlist.length<=0?e("v-uni-view",{staticClass:"no-data"},[t._v("暂无关注")]):t._e()],2)],1)],1)],1)},l=[]},4674:function(t,a,e){"use strict";e.r(a);var i=e("7137"),n=e.n(i);for(var l in i)"default"!==l&&function(t){e.d(a,t,(function(){return i[t]}))}(l);a["default"]=n.a},"50f0":function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},n=i;a.default=n},"51a2":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".hongren[data-v-1d7709aa]{bottom:0}.category[data-v-1d7709aa]{position:fixed;left:0;right:0;height:44px;line-height:44px;padding:0 3vw;font-size:4vw;color:#999;background:#f7f7f7;z-index:202;-webkit-box-shadow:1px 1px 2px rgba(26,26,26,.1);box-shadow:1px 1px 2px rgba(26,26,26,.1)}.category .ranking[data-v-1d7709aa],\n.item .list .ranking[data-v-1d7709aa]{width:8vw;float:left}.category .number[data-v-1d7709aa]{padding-left:6.6vw}.category .avatar[data-v-1d7709aa],\n.category .number[data-v-1d7709aa],\n.item .list .number[data-v-1d7709aa]{float:left}.category .fans[data-v-1d7709aa],\n.item .list .fans[data-v-1d7709aa]{float:right}.category .avatar[data-v-1d7709aa]{padding-left:3.5vw}.item[data-v-1d7709aa]{padding:0}.item .list .number .name[data-v-1d7709aa]{font-size:4vw;line-height:8vw}.item .list[data-v-1d7709aa]{line-height:15vw;font-size:4vw;padding:3vw}.item .list img[data-v-1d7709aa]{float:left;width:15vw;height:15vw;-webkit-border-radius:50%;border-radius:50%;margin-right:3vw}.item .list .number .lable[data-v-1d7709aa]{line-height:0;padding:0}.item .list .number .lable .lablelist[data-v-1d7709aa]{float:left;margin-right:1.5vw;text-align:center;font-size:3vw;border:1px solid #ddd;-webkit-border-radius:2vw;border-radius:2vw;line-height:0;color:#999;padding:2.5vw 2vw}.item .list .number.fr[data-v-1d7709aa]{float:right!important}.item .list .number .lable .lablelist.collect[data-v-1d7709aa]{border:none;padding:2.5vw 0;margin:0;float:right}.item .list .number .lable .lablelist.collect .cuIcon-like[data-v-1d7709aa]{font-size:6vw}.item .list .number .lable .lablelist.collect .cuIcon-likefill[data-v-1d7709aa]{font-size:6vw;color:#ffce6e}.item .list .fans[data-v-1d7709aa]{font-weight:700}.item .list[data-v-1d7709aa]:nth-of-type(even){background:#fcfbff}",""]),t.exports=a},"5ad0":function(t,a,e){"use strict";e.r(a);var i=e("6004"),n=e("4674");for(var l in n)"default"!==l&&function(t){e.d(a,t,(function(){return n[t]}))}(l);e("a6c7");var o,s=e("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"dca053c4",null,!1,i["a"],o);a["default"]=c.exports},"5e4d":function(t,a,e){"use strict";e.r(a);var i=e("1c4a"),n=e("1b872");for(var l in n)"default"!==l&&function(t){e.d(a,t,(function(){return n[t]}))}(l);e("c502");var o,s=e("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"1d7709aa",null,!1,i["a"],o);a["default"]=c.exports},6004:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return l})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?e("span",{staticClass:"clearfix"},[t.within?e("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):e("span",[t.title?e("span",{staticClass:"title"},[t._v(t._s(t.title))]):e("span",{staticClass:"title"},[t._v("红人速推")])])]):e("span",[t.within?e("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},l=[]},7137:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=i},a6c7:function(t,a,e){"use strict";var i=e("b8ec"),n=e.n(i);n.a},b8ec:function(t,a,e){var i=e("d99c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("119d75aa",i,!0,{sourceMap:!1,shadowMode:!1})},c502:function(t,a,e){"use strict";var i=e("1578"),n=e.n(i);n.a},d99c:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.cu-bar[data-v-dca053c4]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-dca053c4]{margin-left:3vw;height:30px}.cuIcon-back[data-v-dca053c4]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-dca053c4]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-dca053c4]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-dca053c4]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-dca053c4]{width:auto}.cuIcon-close[data-v-dca053c4]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=a},f73f:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},n=i;a.default=n}}]);