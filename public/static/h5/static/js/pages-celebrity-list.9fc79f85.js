(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-celebrity-list"],{"047c":function(t,n,e){"use strict";e.r(n);var a=e("7e4e"),i=e("f875");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("1ea0");var s,r=e("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"2bced423",null,!1,a["a"],s);n["default"]=c.exports},"07f6":function(t,n,e){"use strict";e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t,n){n&&this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};n.default=a},"112c":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?e("span",[t.title?e("span",{style:{marginLeft:"44px",color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):e("span",{style:{marginLeft:"44px",color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])},o=[]},"17f2":function(t,n,e){"use strict";e.r(n);var a=e("4ec2"),i=e("f89c");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("87ae");var s,r=e("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"14378334",null,!1,a["a"],s);n["default"]=c.exports},"1ea0":function(t,n,e){"use strict";var a=e("2fbe"),i=e.n(a);i.a},"2398d":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.item .list .ranking[data-v-2bced423]{width:8vw;float:left}.item .list .number[data-v-2bced423]{float:left}.item .list .fans[data-v-2bced423]{float:right}.item[data-v-2bced423]{padding:0}.item .list .number .name[data-v-2bced423]{font-size:4vw;line-height:8vw}.item .list .number .name .titlename[data-v-2bced423]{vertical-align:middle}.item .list .number .name .yueta[data-v-2bced423]{width:8vw;border-radius:1vw;vertical-align:middle}.item .list[data-v-2bced423]{line-height:15vw;font-size:4vw;padding:3vw}.item .list .rankingavatar[data-v-2bced423]{float:left;width:15vw;height:15vw;border-radius:50%;margin-right:3vw}.item .list .number .lable[data-v-2bced423]{line-height:0;padding:0}.item .list .number .lable .lablelist[data-v-2bced423]{float:left;margin-right:1.5vw;text-align:center;font-size:3vw;border:1px solid #ddd;border-radius:2vw;line-height:0;color:#999;padding:2.5vw 2vw}.item .list .number.fr[data-v-2bced423]{float:right!important}.item .list .number .lable .lablelist.collect[data-v-2bced423]{border:none;padding:2.5vw 0;margin:0;float:right}.item .list .number .lable .lablelist.collect .cuIcon-like[data-v-2bced423]{font-size:6vw}.item .list .number .lable .lablelist.collect .cuIcon-likefill[data-v-2bced423]{font-size:6vw;color:#ffce6e}.item .list .fans[data-v-2bced423]{font-weight:700}.item .list[data-v-2bced423]:nth-of-type(even){background:#fcfbff}.renzheng[data-v-2bced423]{width:9vw;border-radius:1vw;vertical-align:middle}.titlename[data-v-2bced423]{vertical-align:middle;margin-right:1.5vw}",""]),t.exports=n},"2fbe":function(t,n,e){var a=e("2398d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("f1240150",a,!0,{sourceMap:!1,shadowMode:!1})},"42b9":function(t,n,e){"use strict";var a=e("947f"),i=e.n(a);i.a},4674:function(t,n,e){"use strict";e.r(n);var a=e("7137"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},"4ec2":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[t.message?e("v-uni-view",{staticClass:"tipnews"},[t.tip?e("v-uni-view",{staticClass:"animated1 fadeInRight"},[e("v-uni-view",{staticClass:"cuIcon-notificationfill"}),e("span",[e("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),e("span",[t._v("商家"+t._s(t.message.merchant))]),t._v("查看了"),e("span",[t._v("红人"+t._s(t.message.celebrity))])])],1):t._e()],1):t._e(),e("uni-top-bar",{attrs:{title:t.toptitle}}),e("app-tabs",{attrs:{tabs:t.tabs,fixed:!0,topheight:t.topheight+43},model:{value:t.tabIndex,callback:function(n){t.tabIndex=n},expression:"tabIndex"}}),e("v-uni-view",{staticClass:"category clearfix",style:{top:t.topheight+85+"px"}},[e("v-uni-view",{staticClass:"avatar"},[t._v("头像")]),e("v-uni-view",{staticClass:"number"},[t._v("昵称")]),e("v-uni-view",{staticClass:"categorybtn"},[t.userInfo.card_id<1||!t.userInfo.card_id?e("v-uni-view",{staticClass:"fans cuIcon-triangledownfill",attrs:{"data-target":"Modal"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.lookup.apply(void 0,arguments)}}},[t._v(t._s(t.fans)),e("span",{staticClass:"cuIcon-lock"})]):t._e(),t.userInfo.card_id>0?e("v-uni-view",{staticClass:"fans cuIcon-triangledownfill",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.fansbtn.apply(void 0,arguments)}}},[t._v(t._s(t.fans))]):t._e(),t.userInfo.card_id<1||!t.userInfo.card_id?e("v-uni-view",{staticClass:"fans cuIcon-triangledownfill",attrs:{"data-target":"Modal"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.lookup.apply(void 0,arguments)}}},[t._v(t._s(t.categoryname)),e("span",{staticClass:"cuIcon-lock"})]):t._e(),t.userInfo.card_id>0?e("v-uni-view",{staticClass:"fans cuIcon-triangledownfill",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.categorybtn.apply(void 0,arguments)}}},[t._v(t._s(t.categoryname))]):t._e()],1)],1),e("v-uni-swiper",{staticClass:"swiper",style:{height:t.height},attrs:{top:t.topheight+43+42+44+"px",current:t.tabIndex},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.swiperChange.apply(void 0,arguments)}}},[e("v-uni-swiper-item",[t.loadSurvey?e("mescroll-item",{key:t.dyindex,attrs:{type:t.type,userid:t.userInfo.id,i:0,index:t.tabIndex,tabs:t.tabs,fansnum:t.fansnumindex,categoryid:t.categoryid,categorypid:t.categorypid}}):t._e()],1),e("v-uni-swiper-item",[t.loadSurvey?e("mescroll-item",{key:t.ksindex,attrs:{type:t.type,userid:t.userInfo.id,i:1,index:t.tabIndex,tabs:t.tabs,fansnum:t.fansnumindex,categoryid:t.categoryid,categorypid:t.categorypid}}):t._e()],1)],1),t.categoryjudge?e("v-uni-view",{staticClass:"menu-mask",style:{top:t.topheight+130+"px"},on:{touchmove:function(n){n.stopPropagation(),n.preventDefault(),arguments[0]=n=t.$handleEvent(n),t.moveHandle.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"menu clearfix"},[e("v-uni-view",{staticClass:"clearfix",staticStyle:{"margin-top":"3vw",width:"100%"}},[e("v-uni-view",{staticClass:"menu-item",class:99==t.menuindex?"active":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.menu(99,"不限")}}},[t._v("不限")])],1),e("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(t.categorytable,(function(n,a){return e("v-uni-view",{key:a,staticClass:"cu-item",class:t.TabCur==a?"text-green cur":"",attrs:{"data-id":a},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(n.name))])})),1),t._l(t.categorytable,(function(n,a){return e("v-uni-view",{key:a,staticClass:"clearfix",class:t.TabCur==a?"show":"hide",staticStyle:{"margin-top":"3vw",width:"100%"}},t._l(t.categorylist,(function(a,i){return a.pid==n.id?e("v-uni-view",{key:i,staticClass:"menu-item",class:t.menuindex==i?"active":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.menu(i,a.id,a.pid,a.name)}}},[t._v(t._s(a.name))]):t._e()})),1)}))],2)],1):t._e(),t.fansjudge?e("v-uni-view",{staticClass:"menu-mask",style:{top:t.topheight+130+"px"},on:{touchmove:function(n){n.stopPropagation(),n.preventDefault(),arguments[0]=n=t.$handleEvent(n),t.moveHandle.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"menu clearfix"},[e("v-uni-view",{staticClass:"menu-item",class:99==t.fansnumindex?"active":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.fansnum(99,"不限")}}},[t._v("不限")]),e("v-uni-view",{staticClass:"menu-item",class:10==t.fansnumindex?"active":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.fansnum(10,"10w以下")}}},[t._v("10w以下")]),e("v-uni-view",{staticClass:"menu-item",class:100==t.fansnumindex?"active":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.fansnum(100,"10w~100w")}}},[t._v("10w~100w")]),e("v-uni-view",{staticClass:"menu-item",class:500==t.fansnumindex?"active":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.fansnum(500,"100w~500w")}}},[t._v("100w~500w")]),e("v-uni-view",{staticClass:"menu-item",class:1e3==t.fansnumindex?"active":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.fansnum(1e3,"500w~1000w")}}},[t._v("500w~1000w")]),e("v-uni-view",{staticClass:"menu-item",class:1001==t.fansnumindex?"active":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.fansnum(1001,"1000w以上")}}},[t._v("1000w以上")])],1)],1):t._e(),e("v-uni-view",{staticClass:"cu-modal",class:"login"==t.modalName?"show":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"auth"},[e("v-uni-view",{staticClass:"title"},[t._v("请登录后操作！")]),e("v-uni-view",{staticClass:"loginbtn"},[e("v-uni-button",{staticClass:"close",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),e("v-uni-button",{staticClass:"login",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"Modal"==t.modalName?"show":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"auth"},[e("v-uni-view",{staticClass:"title"},[t._v("按需快速查找红人")]),e("v-uni-view",{staticClass:"vip",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.member.apply(void 0,arguments)}}},[t._v("成为会员，解锁快查")])],1)],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"Modalios"==t.modalName?"show":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"auth"},[e("v-uni-view",{staticClass:"title"},[t._v("十分抱歉，由于相关规范，小程序暂不支持解锁快查。")])],1)],1)],1)],1)},o=[]},"50f0":function(t,n,e){"use strict";e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},i=a;n.default=i},"536e":function(t,n,e){"use strict";e.r(n);var a=e("b49b"),i=e("c495");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("42b9");var s,r=e("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"e5b681a0",null,!1,a["a"],s);n["default"]=c.exports},"5ad0":function(t,n,e){"use strict";e.r(n);var a=e("112c"),i=e("4674");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("f3c9");var s,r=e("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"78366bab",null,!1,a["a"],s);n["default"]=c.exports},6545:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'.tipnews[data-v-14378334]{height:15vw;position:fixed;color:#fff;z-index:999999;top:24vw}.category[data-v-14378334]{position:fixed;padding:0 3vw;font-size:4vw;color:#999;height:44px;line-height:44px;width:100%;z-index:202;background:#f7f7f7;box-shadow:0 1px 2px rgba(26,26,26,.1)}.category .ranking[data-v-14378334]{position:relative;top:.6vw}.category .categorybtn[data-v-14378334]{width:58vw;float:right}.category .fans[data-v-14378334]{float:right;min-width:1vw;position:relative;padding-right:3vw}.category .fans[data-v-14378334]:last-child{margin-right:4vw}.cuIcon-triangledownfill[data-v-14378334]:before{content:"\\e79b";right:-9px;top:-2px;position:absolute;font-size:6vw}.category .ranking[data-v-14378334]{width:8vw;float:left}.category .number[data-v-14378334]{padding-left:6.6vw}.category .avatar[data-v-14378334],\n.category .number[data-v-14378334]{float:left}.category .avatar[data-v-14378334]{padding-left:3.5vw}.menu-mask[data-v-14378334]{position:absolute;left:0;right:0;bottom:0;background:rgba(26,26,26,.6);z-index:999}.menu-mask .menu[data-v-14378334]{width:100%;background:#fff;padding:3vw}.nav .cu-item[data-v-14378334]{height:30px;line-height:30px}.menu-mask .menu .menu-item[data-v-14378334]{float:left;border-radius:1.5vw;background-color:#f0f4ff;font-size:3.5vw;width:21.2vw;text-align:center;height:8vw;line-height:8vw;margin-right:3vw;margin-bottom:3vw}.menu-mask .menu .menu-item.active[data-v-14378334]{color:#fff;background:orange}.menu-mask .menu .menu-item[data-v-14378334]:nth-child(4n+0){margin-right:0}.fansone[data-v-14378334]{float:right}.auth[data-v-14378334]{padding:6vw;border-radius:1.5vw;background-color:#fff}.auth .vip[data-v-14378334]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}.auth .title[data-v-14378334]{color:#333;margin-bottom:4vw}.cu-modal[data-v-14378334]{z-index:210}.cu-dialog[data-v-14378334]{background-color:initial;width:100vw;padding:4vw;height:auto}.auth[data-v-14378334]{padding:6vw;border-radius:1.5vw;background-color:#fff}.auth .vip[data-v-14378334]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}.auth .pay[data-v-14378334]{border-radius:1.5vw;border:1px solid #ebebeb;text-align:center;color:#666;height:10vw;line-height:10vw}.auth .title[data-v-14378334]{color:#333;margin-bottom:4vw}.loginbtn[data-v-14378334]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}uni-button[data-v-14378334]::after{display:none}uni-button[data-v-14378334]{position:static;display:block;margin-left:0;margin-right:0;padding-left:0;padding-right:0;box-sizing:initial;font-size:3.8vw;text-align:center;text-decoration:none;line-height:7vw;border-radius:1.5vw;-webkit-tap-highlight-color:transparent;overflow:visible;color:#333;background-color:initial;margin-top:3vw}uni-button.close[data-v-14378334]{\n\t/* border:1px solid #efefef; */\n\t/* padding:1vw 3vw; */}uni-button.login[data-v-14378334]{color:#39b54a\n\t/* color:#fff;\n\tpadding:1vw 3vw; */}\n/* 联系客服*/.customer[data-v-14378334]{position:fixed;bottom:18vw;right:6vw;width:15vw;height:15vw;background:#e71d36;color:#fff;z-index:210;text-align:center;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.customer img[data-v-14378334]{width:100%;height:100%;border-radius:50%}',""]),t.exports=n},7137:function(t,n,e){"use strict";e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};n.default=a},"7e4e":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var a={mescrollUni:e("0777").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("mescroll-uni",{ref:"mescrollRef",attrs:{height:"100%",top:t.topheight+43+42+44+"px",down:t.downOption,up:t.upOption},on:{init:function(n){arguments[0]=n=t.$handleEvent(n),t.mescrollInit.apply(void 0,arguments)},down:function(n){arguments[0]=n=t.$handleEvent(n),t.downCallback.apply(void 0,arguments)},up:function(n){arguments[0]=n=t.$handleEvent(n),t.upCallback.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"item"},t._l(t.goods,(function(n,a){return e("v-uni-view",{key:a,staticClass:"list clearfix",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("celebrity/details",n.id,t.realmid)}}},[e("img",{staticClass:"rankingavatar",attrs:{src:n["avatar"]}}),e("v-uni-view",{staticClass:"number"},[e("v-uni-view",{staticClass:"name"},[e("span",{staticClass:"titlename"},[t._v(t._s(n.nickname))]),e("img",{staticClass:"yueta",attrs:{src:"https://www.hongrensutui.com/h5/img/yue.png",mode:"widthFix"}})]),e("v-uni-view",{staticClass:"lable clearfix"},["1"==n.pay_type?e("v-uni-view",{staticClass:"cu-tag round bg-red light"},[t._v("坑位费")]):t._e(),"2"==n.pay_type?e("v-uni-view",{staticClass:"cu-tag round bg-orange light"},[t._v("纯佣金")]):t._e(),"3"==n.pay_type?e("v-uni-view",{staticClass:"cu-tag round bg-purple light"},[t._v("坑位费+佣金")]):t._e(),t._l(n.cooperation,(function(n,a){return a<2?e("v-uni-view",{key:a,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(n))]):t._e()}))],2)],1),e("v-uni-view",{staticClass:"number fr"},[e("v-uni-view",{staticClass:"name cor-e8"},[t._v(t._s(n.fans)+"w")]),e("v-uni-view",{staticClass:"lable clearfix"},[e("v-uni-view",{staticClass:"lablelist collect",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.collect(n)}}},[e("v-uni-view",{staticClass:"lg text-gray",class:n.show?"cuIcon-likefill":"cuIcon-like"})],1)],1)],1)],1)})),1)],1)},o=[]},8009:function(t,n,e){var a=e("6545");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("ddd45480",a,!0,{sourceMap:!1,shadowMode:!1})},"840a":function(t,n,e){"use strict";var a=e("4ea4");e("99af"),e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("f73f")),o=a(e("50f0")),s={mixins:[i.default,o.default],data:function(){return{downOption:{auto:!1},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"~ 空空如也 ~"}},height:"400px",topheight:0,goods:[],realmid:"",fans:"不限",category:"不限",userInfo:[]}},props:{tabs:Array,userid:Number,fansnum:Number,categoryid:Number,categorypid:Number,type:Number},mounted:function(){this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px"},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var n=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data?(n.userInfo=e.data,n.totalcewebrity(t,n.userInfo.id)):n.totalcewebrity(t)},fail:function(e){n.totalcewebrity(t)}})},totalcewebrity:function(t,n){var e=this,a=this,i=a.tabs[a.i];uni.request({url:"https://www.hongrensutui.com/api/index/totalcewebrity",data:{platform:i,type:a.type,pagenum:t.num,pagesize:t.size,userid:n,realmpid:a.categorypid,realmid:a.categoryid,fans:a.fansnum},method:"POST",success:function(n){var i=n.data.data.list,o=i.length;a.realmid=n.data.data.realmid,1==t.num&&(a.goods=[]),a.goods=a.goods.concat(n.data.data.list),e.mescroll.endByPage(o),setTimeout((function(){e.mescroll.endSuccess(o)}),20)},fail:function(t){a.mescroll.endErr()}})},collect:function(t){var n=this;n.userid?t.show?(uni.showToast({title:"已取消关注",icon:"none",duration:2e3}),n.collectClick(t)):(uni.showToast({title:"已添加关注",icon:"none",duration:2e3}),n.collectClick(t)):uni.showToast({title:"您还未登录，请在 我的 界面登录后操作",icon:"none",duration:3e3})},collectClick:function(t,n){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/collect",data:{id:e.userid,collectid:t.id},method:"POST",success:function(n){t.show=!t.show}})},navToDetailPage:function(t,n,e){n&&(t=t+"?id="+n+"&realmid="+e),uni.navigateTo({url:"/pages/"+t})}}};n.default=s},"87ae":function(t,n,e){"use strict";var a=e("8009"),i=e.n(a);i.a},"947f":function(t,n,e){var a=e("ecd2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("75cc66b8",a,!0,{sourceMap:!1,shadowMode:!1})},"9ebb":function(t,n,e){var a=e("cf7f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("6346ab16",a,!0,{sourceMap:!1,shadowMode:!1})},b49b:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.tabs&&t.tabs.length?e("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[e("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(n,a){return e("v-uni-view",{key:a,staticClass:"tab-item",class:{active:t.value===a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(a,n)}}},[16!=n.id?e("span",[t._v(t._s(t.getTabName(n)))]):e("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),e("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},o=[]},c495:function(t,n,e){"use strict";e.r(n);var a=e("07f6"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},cf7f:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'.cu-bar[data-v-78366bab]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-78366bab]{margin-left:3vw;height:30px}.cuIcon-back[data-v-78366bab]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-78366bab]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-78366bab]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-78366bab]{width:auto}.cuIcon-close[data-v-78366bab]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=n},d7ab:function(t,n,e){"use strict";var a=e("4ea4");e("d3b7"),e("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("5ad0")),o=a(e("536e")),s=a(e("047c")),r={components:{uniTopBar:i.default,AppTabs:o.default,MescrollItem:s.default},data:function(){return{modalName:null,height:"400px",tabs:["抖音","快手"],tabIndex:0,fans:"粉丝",categoryid:0,categorypid:0,categoryname:"领域",menuindex:99,fansnumindex:99,fansjudge:!1,categoryjudge:!1,categorytable:"",categorylist:"",dyindex:0,ksindex:0,tip:!1,message:"",loadSurvey:!0,topheight:0,type:0,userInfo:[],toptitle:"红人列表",TabCur:0,scrollLeft:0}},onLoad:function(t){var n=this;t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),n.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),n.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?n.getuserinfo(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",this.cewebritycategory(),n.getRandomArbitrary(0,49),n.timerInt=setInterval((function(){uni.getStorage({key:"message",success:function(t){if(""!=t.data&&(n.codetime--,n.message=t.data[n.getRandomArbitrary(0,50)],n.message.celebrity=n.message.celebrity[0]+n.message.celebrity[1]+"***",n.message.merchant=n.message.merchant[0]+n.message.merchant[1]+"***",n.tip=!n.tip,0==n.codetime))return clearInterval(n.timerInt),void(n.codetime=2e3)}})}),4e3)},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(n){""!=n.data&&null!=n.data&&t.getuserinfo(n.data.id)}}),uni.getStorage({key:"type",success:function(n){""!=n.data&&null!=n.data&&(t.type=n.data,t.loadSurvey=!1,t.$nextTick((function(){t.loadSurvey=!0})),uni.removeStorageSync("type"))},fail:function(n){t.type=0,t.loadSurvey=!1,t.$nextTick((function(){t.loadSurvey=!0}))}})},methods:{getRandomArbitrary:function(t,n){return Math.floor(Math.random()*(n-t)+t)},getuserinfo:function(t){var n=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),n.userInfo=t.data.data.info,n.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},swiperChange:function(t){this.tabIndex=t.detail.current},lookup:function(t){var n=this;if(n.userInfo.id)switch(uni.getSystemInfoSync().platform){case"android":n.modalName=t.currentTarget.dataset.target;break;case"ios":n.modalName=t.currentTarget.dataset.target;break}else n.modalName="login"},member:function(){var t=this;uni.navigateTo({url:"/pages/member/member?cewebrityid="+t.cewebrityid})},categorybtn:function(){this.fansjudge=!1,this.categoryjudge=!this.categoryjudge},fansbtn:function(){this.categoryjudge=!1,this.fansjudge=!this.fansjudge},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=90*(t.currentTarget.dataset.id-1)},menu:function(t,n,e,a){var i=this,o=this;o.menuindex=t,"不限"==n?(o.categoryid=0,o.categorypid=0,o.categoryname="领域"):(o.categoryid=n,o.categorypid=e,o.categoryname=a),o.categoryjudge=!1,this.loadSurvey=!1,this.$nextTick((function(){i.loadSurvey=!0}))},fansnum:function(t,n){var e=this,a=this;a.fansnumindex=t,a.fans="不限"==n?"粉丝量":n,a.fansjudge=!1,this.loadSurvey=!1,this.$nextTick((function(){e.loadSurvey=!0}))},cewebritycategory:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/getRealm",method:"POST",success:function(n){t.categorytable=n.data.data.table,t.categorylist=n.data.data.list}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},navToDetailPage:function(t){uni.navigateTo({url:"/pages/"+t})},wechatLogin:function(t){wxlogin()},share:function(t){function n(n,e){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){var e="红人速推 | 网红直播带货一站式服务平台",a="红人速推就是网红多 商家多，直播带货就上红人速推。",i="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(e,a,i,n)}))}};n.default=r},ecd2:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,".app-tabs[data-v-e5b681a0]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-e5b681a0]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-e5b681a0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-e5b681a0]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-e5b681a0]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-e5b681a0]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=n},f3c9:function(t,n,e){"use strict";var a=e("9ebb"),i=e.n(a);i.a},f73f:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},i=a;n.default=i},f875:function(t,n,e){"use strict";e.r(n);var a=e("840a"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},f89c:function(t,n,e){"use strict";e.r(n);var a=e("d7ab"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a}}]);