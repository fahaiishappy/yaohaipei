(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-celebrity-list"],{"047c":function(t,e,n){"use strict";n.r(e);var a=n("f62b"),i=n("f875");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("4929");var s,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"99634eec",null,!1,a["a"],s);e["default"]=c.exports},"07f6":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t,e){e&&this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};e.default=a},"17f2":function(t,e,n){"use strict";n.r(e);var a=n("8b3d"),i=n("f89c");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("41c8");var s,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"615fdc0b",null,!1,a["a"],s);e["default"]=c.exports},"19df":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.tipnews[data-v-615fdc0b]{height:15vw;position:fixed;color:#fff;z-index:999999;top:24vw}.category[data-v-615fdc0b]{position:fixed;padding:0 3vw;font-size:4vw;color:#999;height:44px;line-height:44px;width:100%;z-index:202;background:#f7f7f7;-webkit-box-shadow:0 1px 2px rgba(26,26,26,.1);box-shadow:0 1px 2px rgba(26,26,26,.1)}.category .ranking[data-v-615fdc0b]{position:relative;top:.6vw}.category .categorybtn[data-v-615fdc0b]{width:58vw;float:right}.category .fans[data-v-615fdc0b]{float:right;min-width:1vw;position:relative;padding-right:3vw}.category .fans[data-v-615fdc0b]:last-child{margin-right:4vw}.cuIcon-triangledownfill[data-v-615fdc0b]:before{content:"\\e79b";right:-9px;top:-2px;position:absolute;font-size:6vw}.category .ranking[data-v-615fdc0b]{width:8vw;float:left}.category .number[data-v-615fdc0b]{padding-left:6.6vw}.category .avatar[data-v-615fdc0b],\n.category .number[data-v-615fdc0b]{float:left}.category .avatar[data-v-615fdc0b]{padding-left:3.5vw}.menu-mask[data-v-615fdc0b]{position:absolute;left:0;right:0;bottom:0;background:rgba(26,26,26,.6);z-index:999}.menu-mask .menu[data-v-615fdc0b]{width:100%;background:#fff;padding:3vw}.nav .cu-item[data-v-615fdc0b]{height:30px;line-height:30px}.menu-mask .menu .menu-item[data-v-615fdc0b]{float:left;-webkit-border-radius:1.5vw;border-radius:1.5vw;background-color:#f0f4ff;font-size:3.5vw;width:21.2vw;text-align:center;height:8vw;line-height:8vw;margin-right:3vw;margin-bottom:3vw}.menu-mask .menu .menu-item.active[data-v-615fdc0b]{color:#fff;background:orange}.menu-mask .menu .menu-item[data-v-615fdc0b]:nth-child(4n+0){margin-right:0}.fansone[data-v-615fdc0b]{float:right}.auth[data-v-615fdc0b]{padding:6vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;background-color:#fff}.auth .vip[data-v-615fdc0b]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;-webkit-border-radius:1.5vw;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}.auth .title[data-v-615fdc0b]{color:#333;margin-bottom:4vw}.cu-modal[data-v-615fdc0b]{z-index:210}.cu-dialog[data-v-615fdc0b]{background-color:transparent;width:100vw;padding:4vw;height:auto}.auth[data-v-615fdc0b]{padding:6vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;background-color:#fff}.auth .vip[data-v-615fdc0b]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;-webkit-border-radius:1.5vw;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}.auth .pay[data-v-615fdc0b]{-webkit-border-radius:1.5vw;border-radius:1.5vw;border:1px solid #ebebeb;text-align:center;color:#666;height:10vw;line-height:10vw}.auth .title[data-v-615fdc0b]{color:#333;margin-bottom:4vw}.loginbtn[data-v-615fdc0b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}uni-button[data-v-615fdc0b]::after{display:none}uni-button[data-v-615fdc0b]{position:static;display:block;margin-left:0;margin-right:0;padding-left:0;padding-right:0;-webkit-box-sizing:content-box;box-sizing:content-box;font-size:3.8vw;text-align:center;text-decoration:none;line-height:7vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;-webkit-tap-highlight-color:transparent;overflow:visible;color:#333;background-color:transparent;margin-top:3vw}uni-button.close[data-v-615fdc0b]{\n\t/* border:1px solid #efefef; */\n\t/* padding:1vw 3vw; */}uni-button.login[data-v-615fdc0b]{color:#39b54a\n\t/* color:#fff;\n\tpadding:1vw 3vw; */}\n/* 联系客服*/.customer[data-v-615fdc0b]{position:fixed;bottom:18vw;right:6vw;width:15vw;height:15vw;background:#e71d36;color:#fff;z-index:210;text-align:center;-webkit-box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3);box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.customer img[data-v-615fdc0b]{width:100%;height:100%;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},"41c8":function(t,e,n){"use strict";var a=n("f73a"),i=n.n(a);i.a},"42b9":function(t,e,n){"use strict";var a=n("947f"),i=n.n(a);i.a},4674:function(t,e,n){"use strict";n.r(e);var a=n("7137"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},4929:function(t,e,n){"use strict";var a=n("ca62"),i=n.n(a);i.a},"50f0":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},i=a;e.default=i},"536e":function(t,e,n){"use strict";n.r(e);var a=n("b49b"),i=n("c495");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("42b9");var s,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"e5b681a0",null,!1,a["a"],s);e["default"]=c.exports},"5ad0":function(t,e,n){"use strict";n.r(e);var a=n("6004"),i=n("4674");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("a6c7");var s,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"dca053c4",null,!1,a["a"],s);e["default"]=c.exports},6004:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?n("span",{staticClass:"clearfix"},[t.within?n("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):n("span",[t.title?n("span",{staticClass:"title"},[t._v(t._s(t.title))]):n("span",{staticClass:"title"},[t._v("红人速推")])])]):n("span",[t.within?n("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):n("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},7137:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=a},"840a":function(t,e,n){"use strict";var a=n("4ea4");n("99af"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("f73f")),o=a(n("50f0")),s={mixins:[i.default,o.default],data:function(){return{downOption:{auto:!1},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"空空如也"}},height:"400px",topheight:0,isAndroid:!0,indicatorDots:!0,autoplay:!0,interval:4e3,duration:500,cewebrity:"",selected:"",merchant:"",recmerchant:"",cewebritycount:"",merchantcount:"",news:"",banner:"",goods:""}},props:{tabs:Array,userid:Number,fansnum:Number,categoryid:Number,categorypid:Number,type:Number,pay_type:String},mounted:function(){this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px"},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var e=this;uni.getStorage({key:"userInfo",success:function(n){""!=n.data&&null!=n.data?(e.userInfo=n.data,e.supplylist(t,e.userInfo.id)):e.supplylist(t)},fail:function(n){e.supplylist(t)}})},supplylist:function(t,e){var n=this,a=this,i=a.tabs[a.i];uni.request({url:"https://www.hongrensutui.com/api/index/totalcewebrity",data:{pay_type:a.pay_type,platform:i,type:a.type,pagenum:t.num,pagesize:t.size,userid:e,realmpid:a.categorypid,realmid:a.categoryid,fans:a.fansnum},method:"POST",success:function(e){var i=e.data.data.list,o=i.length;1==t.num&&(a.goods=[]),a.goods=a.goods.concat(e.data.data.list),n.mescroll.endByPage(o),setTimeout((function(){n.mescroll.endSuccess(o)}),20)},fail:function(t){a.mescroll.endErr()}})},navToDetailPage:function(t,e){e&&(t=t+"?id="+e),uni.navigateTo({url:"/pages/"+t})},details:function(t,e){uni.navigateTo({url:"/pages/supply/details?id="+t+"&mid="+e})}}};e.default=s},"887a":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.cu-bar[data-v-99634eec]{position:fixed;width:100vw;left:0;right:0}.swiper[data-v-99634eec]{width:100vw;height:41vw}.swiper-item[data-v-99634eec]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 3vw}.uni-padding-wrap[data-v-99634eec]{padding-top:3vw;background-color:#fff}.banner[data-v-99634eec]{width:auto;height:auto;max-width:100%;max-height:100%;-webkit-border-radius:2vw;border-radius:2vw;display:block}.cardtitle[data-v-99634eec]{padding:5vw 3vw;font-size:4.5vw;font-weight:700;background-color:#fff}.cardtitle .name[data-v-99634eec]{background-image:url(https://www.hongrensutui.com/h5/img/wzbg.png);background-repeat:repeat-x;background-position:bottom;display:inline-block;padding:0 1vw}.cardtitle .gd[data-v-99634eec]{float:right;color:#999;font-size:3.5vw;font-weight:400;font-style:normal}.cardtitle .cu-tag[data-v-99634eec]{float:right}.tips[data-v-99634eec]{margin:0 3vw;padding:3vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;color:#333d40;background-color:#fef9eb}\n/*数据列表*/.list[data-v-99634eec]{margin-bottom:3vw;padding:3vw;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;position:relative}.list .avatar[data-v-99634eec]{position:relative;width:22vw;height:22vw;margin-right:3vw}.list .tip[data-v-99634eec]{position:absolute;left:0;bottom:0;width:100%;color:#fff;font-size:3.5vw;height:6vw;text-align:center;\n\t/* background-color: rgba(255,183,89,0.9); */background-color:rgba(255,206,110,.9);-webkit-border-bottom-left-radius:2vw;border-bottom-left-radius:2vw;-webkit-border-bottom-right-radius:2vw;border-bottom-right-radius:2vw}.list .tip[data-v-99634eec]::after{content:" ";display:inline-block;width:0;height:100%;vertical-align:middle;margin-top:1px}.list .platform[data-v-99634eec]{width:5vw;height:5vw;position:relative;top:-.5vw;margin-left:1vw;vertical-align:middle}.rgsh[data-v-99634eec]{position:absolute;opacity:.6;top:8vw;right:6vw;width:25vw;height:25vw}.supplylist .list[data-v-99634eec]:last-of-type{margin-bottom:0}.list .publisher img[data-v-99634eec]{width:100%;height:100%;-webkit-border-radius:2vw;border-radius:2vw;display:block;-webkit-box-shadow:0 1px 2px rgba(26,26,26,.1);box-shadow:0 1px 2px rgba(26,26,26,.1)}.list .number[data-v-99634eec]{width:75%}.list .number .title[data-v-99634eec]{font-size:4.5vw;color:#333d40}.list .number .title .line-green[data-v-99634eec]{color:#24c68a}.list .number .item[data-v-99634eec]{font-size:3.5vw;color:#8899a1;padding:1vw 0}.list .number .table[data-v-99634eec]{position:relative;color:#505f65;font-weight:700;background-image:url(https://www.hongrensutui.com/h5/img/wzbg1.png);background-repeat:no-repeat;background-position:0;display:inline-block;margin-left:2vw}.list .number .item .nowpricetip[data-v-99634eec]{color:#ff5363;font-size:4.5vw;font-weight:700}.list .number .item .nowprice[data-v-99634eec]{color:#ff5363;font-size:6vw;font-weight:700;margin-left:2vw}.list .number .item .commission[data-v-99634eec]{background-color:#ede1d9;color:#a5673f;-webkit-border-radius:1vw;border-radius:1vw;padding:.5vw 1vw;font-size:2vw;margin-left:2vw}.list .number .item .bg-green[data-v-99634eec]{background-color:#d7f0db;color:#39b54a}.list .number .item .bg-orange[data-v-99634eec]{background-color:#ffb759;color:#fff}.list .number .item .cuIcon-safe[data-v-99634eec]{font-size:3.5vw;margin-right:.5vw}.list .number .item .cuIcon-service[data-v-99634eec]{font-size:3.5vw;margin-right:.5vw}.list .number .title .nickname[data-v-99634eec]{border:1px solid #30963d;color:#30963d;-webkit-border-radius:10vw;border-radius:10vw;font-size:3vw;line-height:3vw;position:relative;top:-1px;margin-left:2vw;padding:.4vw 2vw}',""]),t.exports=e},"8b3d":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.message?n("v-uni-view",{staticClass:"tipnews"},[t.tip?n("v-uni-view",{staticClass:"animated1 fadeInRight"},[n("v-uni-view",{staticClass:"cuIcon-notificationfill"}),n("span",[n("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),n("span",[t._v("商家"+t._s(t.message.merchant))]),t._v("查看了"),n("span",[t._v("红人"+t._s(t.message.celebrity))])])],1):t._e()],1):t._e(),n("uni-top-bar",{attrs:{title:t.toptitle,within:t.within}}),n("app-tabs",{attrs:{tabs:t.tabs,fixed:!0,topheight:t.topheight+43},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}}),n("v-uni-view",{staticClass:"category clearfix",style:{top:t.topheight+85+"px"}},[n("v-uni-view",{staticClass:"avatar"},[t._v("头像")]),n("v-uni-view",{staticClass:"number"},[t._v("昵称")]),n("v-uni-view",{staticClass:"categorybtn"},[t.userInfo.card_id<1||!t.userInfo.card_id?n("v-uni-view",{staticClass:"fans cuIcon-triangledownfill",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookup.apply(void 0,arguments)}}},[t._v(t._s(t.fans)),n("span",{staticClass:"cuIcon-lock"})]):t._e(),t.userInfo.card_id>0?n("v-uni-view",{staticClass:"fans cuIcon-triangledownfill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansbtn.apply(void 0,arguments)}}},[t._v(t._s(t.fans))]):t._e(),t.userInfo.card_id<1||!t.userInfo.card_id?n("v-uni-view",{staticClass:"fans cuIcon-triangledownfill",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookup.apply(void 0,arguments)}}},[t._v(t._s(t.categoryname)),n("span",{staticClass:"cuIcon-lock"})]):t._e(),t.userInfo.card_id>0?n("v-uni-view",{staticClass:"fans cuIcon-triangledownfill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.categorybtn.apply(void 0,arguments)}}},[t._v(t._s(t.categoryname))]):t._e()],1)],1),n("v-uni-swiper",{staticClass:"swiper",style:{height:t.height},attrs:{top:t.topheight+43+42+44+"px",current:t.tabIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},[n("v-uni-swiper-item",[t.loadSurvey?n("mescroll-item",{key:t.dyindex,attrs:{pay_type:t.pay_type,type:t.type,userid:t.userInfo.id,i:0,index:t.tabIndex,tabs:t.tabs,fansnum:t.fansnumindex,categoryid:t.categoryid,categorypid:t.categorypid}}):t._e()],1),n("v-uni-swiper-item",[t.loadSurvey?n("mescroll-item",{key:t.ksindex,attrs:{pay_type:t.pay_type,type:t.type,userid:t.userInfo.id,i:1,index:t.tabIndex,tabs:t.tabs,fansnum:t.fansnumindex,categoryid:t.categoryid,categorypid:t.categorypid}}):t._e()],1)],1),t.categoryjudge?n("v-uni-view",{staticClass:"menu-mask",style:{top:t.topheight+130+"px"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.moveHandle.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"menu clearfix"},[n("v-uni-view",{staticClass:"clearfix",staticStyle:{"margin-top":"3vw",width:"100%"}},[n("v-uni-view",{staticClass:"menu-item",class:99==t.menuindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.menu(99,"不限")}}},[t._v("不限")])],1),n("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(t.categorytable,(function(e,a){return n("v-uni-view",{key:a,staticClass:"cu-item",class:t.TabCur==a?"text-green cur":"",attrs:{"data-id":a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(e.name))])})),1),t._l(t.categorytable,(function(e,a){return n("v-uni-view",{key:a,staticClass:"clearfix",class:t.TabCur==a?"show":"hide",staticStyle:{"margin-top":"3vw",width:"100%"}},t._l(t.categorylist,(function(a,i){return a.pid==e.id?n("v-uni-view",{key:i,staticClass:"menu-item",class:t.menuindex==i?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.menu(i,a.id,a.pid,a.name)}}},[t._v(t._s(a.name))]):t._e()})),1)}))],2)],1):t._e(),t.fansjudge?n("v-uni-view",{staticClass:"menu-mask",style:{top:t.topheight+130+"px"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.moveHandle.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"menu clearfix"},[n("v-uni-view",{staticClass:"menu-item",class:99==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(99,"不限")}}},[t._v("不限")]),n("v-uni-view",{staticClass:"menu-item",class:10==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(10,"10w以下")}}},[t._v("10w以下")]),n("v-uni-view",{staticClass:"menu-item",class:100==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(100,"10w~100w")}}},[t._v("10w~100w")]),n("v-uni-view",{staticClass:"menu-item",class:500==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(500,"100w~500w")}}},[t._v("100w~500w")]),n("v-uni-view",{staticClass:"menu-item",class:1e3==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(1e3,"500w~1000w")}}},[t._v("500w~1000w")]),n("v-uni-view",{staticClass:"menu-item",class:1001==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(1001,"1000w以上")}}},[t._v("1000w以上")])],1)],1):t._e(),n("v-uni-view",{staticClass:"cu-modal",class:"login"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"auth"},[n("v-uni-view",{staticClass:"title"},[t._v("请登录后操作！")]),n("v-uni-view",{staticClass:"loginbtn"},[n("v-uni-button",{staticClass:"close",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),n("v-uni-button",{staticClass:"login",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"cu-modal",class:"Modal"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"auth"},[n("v-uni-view",{staticClass:"title"},[t._v("按需快速查找红人")]),n("v-uni-view",{staticClass:"vip",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.member.apply(void 0,arguments)}}},[t._v("成为会员，解锁快查")])],1)],1)],1),n("v-uni-view",{staticClass:"cu-modal",class:"Modalios"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"auth"},[n("v-uni-view",{staticClass:"title"},[t._v("十分抱歉，由于相关规范，小程序暂不支持解锁快查。")])],1)],1)],1)],1)},o=[]},"947f":function(t,e,n){var a=n("ecd2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("75cc66b8",a,!0,{sourceMap:!1,shadowMode:!1})},a6c7:function(t,e,n){"use strict";var a=n("b8ec"),i=n.n(a);i.a},b49b:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tabs&&t.tabs.length?n("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[n("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(e,a){return n("v-uni-view",{key:a,staticClass:"tab-item",class:{active:t.value===a},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tabClick(a,e)}}},[16!=e.id?n("span",[t._v(t._s(t.getTabName(e)))]):n("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),n("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},o=[]},b8ec:function(t,e,n){var a=n("d99c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("119d75aa",a,!0,{sourceMap:!1,shadowMode:!1})},c495:function(t,e,n){"use strict";n.r(e);var a=n("07f6"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},ca62:function(t,e,n){var a=n("887a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("554bb8be",a,!0,{sourceMap:!1,shadowMode:!1})},d7ab:function(t,e,n){"use strict";var a=n("4ea4");n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5ad0")),o=a(n("536e")),s=a(n("047c")),r={components:{uniTopBar:i.default,AppTabs:o.default,MescrollItem:s.default},data:function(){return{modalName:null,height:"400px",tabs:["抖音","快手"],tabIndex:0,fans:"粉丝",categoryid:0,categorypid:0,categoryname:"领域",menuindex:99,fansnumindex:99,fansjudge:!1,categoryjudge:!1,categorytable:"",categorylist:"",dyindex:0,ksindex:0,tip:!1,message:"",loadSurvey:!0,topheight:0,type:0,userInfo:[],toptitle:"红人列表",within:"",pay_type:"",TabCur:0,scrollLeft:0}},onLoad:function(t){var e=this;t.id&&(e.pay_type=t.id,e.toptitle="纯佣主播",e.within="https://www.hongrensutui.com/h5/img/chunyong_logo_left.png"),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:n.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.getuserinfo(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",this.cewebritycategory(),e.getRandomArbitrary(0,49),e.timerInt=setInterval((function(){uni.getStorage({key:"message",success:function(t){if(""!=t.data&&(e.codetime--,e.message=t.data[e.getRandomArbitrary(0,50)],e.message.celebrity=e.message.celebrity[0]+e.message.celebrity[1]+"***",e.message.merchant=e.message.merchant[0]+e.message.merchant[1]+"***",e.tip=!e.tip,0==e.codetime))return clearInterval(e.timerInt),void(e.codetime=2e3)}})}),4e3)},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.getuserinfo(e.data.id)}}),uni.getStorage({key:"type",success:function(e){""!=e.data&&null!=e.data&&(t.type=e.data,t.loadSurvey=!1,t.$nextTick((function(){t.loadSurvey=!0})),uni.removeStorageSync("type"))},fail:function(e){t.type=0,t.loadSurvey=!1,t.$nextTick((function(){t.loadSurvey=!0}))}})},methods:{getRandomArbitrary:function(t,e){return Math.floor(Math.random()*(e-t)+t)},getuserinfo:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},swiperChange:function(t){this.tabIndex=t.detail.current},lookup:function(t){var e=this;if(e.userInfo.id)switch(uni.getSystemInfoSync().platform){case"android":e.modalName=t.currentTarget.dataset.target;break;case"ios":e.modalName=t.currentTarget.dataset.target;break}else e.modalName="login"},member:function(){var t=this;uni.navigateTo({url:"/pages/member/member?cewebrityid="+t.cewebrityid})},categorybtn:function(){this.fansjudge=!1,this.categoryjudge=!this.categoryjudge},fansbtn:function(){this.categoryjudge=!1,this.fansjudge=!this.fansjudge},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=90*(t.currentTarget.dataset.id-1)},menu:function(t,e,n,a){var i=this,o=this;o.menuindex=t,"不限"==e?(o.categoryid=0,o.categorypid=0,o.categoryname="领域"):(o.categoryid=e,o.categorypid=n,o.categoryname=a),o.categoryjudge=!1,this.loadSurvey=!1,this.$nextTick((function(){i.loadSurvey=!0}))},fansnum:function(t,e){var n=this,a=this;a.fansnumindex=t,a.fans="不限"==e?"粉丝量":e,a.fansjudge=!1,this.loadSurvey=!1,this.$nextTick((function(){n.loadSurvey=!0}))},cewebritycategory:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/getRealm",method:"POST",success:function(e){t.categorytable=e.data.data.table,t.categorylist=e.data.data.list}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},navToDetailPage:function(t){uni.navigateTo({url:"/pages/"+t})},wechatLogin:function(t){wxlogin()},share:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var n="红人速推 | 网红直播带货一站式服务平台",a="红人速推就是网红多 商家多，直播带货就上红人速推。",i="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(n,a,i,e)}))}};e.default=r},d99c:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.cu-bar[data-v-dca053c4]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-dca053c4]{margin-left:3vw;height:30px}.cuIcon-back[data-v-dca053c4]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-dca053c4]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-dca053c4]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-dca053c4]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-dca053c4]{width:auto}.cuIcon-close[data-v-dca053c4]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},ecd2:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".app-tabs[data-v-e5b681a0]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;-webkit-box-shadow:0 2px 1px rgba(26,26,26,.1);box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-e5b681a0]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-e5b681a0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-e5b681a0]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-e5b681a0]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-border-radius:%?4?%;border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-e5b681a0]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=e},f62b:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={mescrollUni:n("0777").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mescroll-uni",{ref:"mescrollRef",attrs:{height:"100%",top:t.topheight+43+42+44+"px",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"supplylist"},t._l(t.goods,(function(e,a){return n("v-uni-view",{key:a,staticClass:"list",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navToDetailPage("celebrity/details",e.id)}}},[n("v-uni-view",{staticClass:"publisher"},[n("v-uni-view",{staticClass:"avatar"},[n("img",{attrs:{src:e["avatar"]}}),1==e.pay_type?n("v-uni-view",{staticClass:"tip"},[t._v("坑位费主播")]):t._e(),2==e.pay_type?n("v-uni-view",{staticClass:"tip"},[t._v("纯佣主播")]):t._e(),3==e.pay_type?n("v-uni-view",{staticClass:"tip",staticStyle:{"background-color":"rgba(225,215,240,0.9)",color:"#6739b6"}},[t._v("坑位费+佣金")]):t._e()],1)],1),n("v-uni-view",{staticClass:"number"},[n("v-uni-view",{staticClass:"title ellipsis"},[n("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.nickname))]),"抖音"==e.platform?n("v-uni-image",{staticClass:"platform",attrs:{src:"https://www.hongrensutui.com/h5/img/douyin_sup.png"}}):t._e(),"快手"==e.platform?n("v-uni-image",{staticClass:"platform",attrs:{src:"https://www.hongrensutui.com/h5/img/kuaishou_sup.png"}}):t._e(),n("span",{staticClass:"cu-tag light bg-orange round",staticStyle:{float:"right"}},[t._v("免费咨询")])],1),n("v-uni-view",{staticClass:"item"},[t._v("拥有粉丝"),n("span",{staticClass:"nowprice"},[t._v(t._s(e.fans))]),n("span",{staticClass:"nowpricetip"},[t._v("w")])]),n("v-uni-view",{staticClass:"item"},[t._v("带货领域"),t._l(e.category,(function(e,a){return a<2?n("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),n("v-uni-view",{staticClass:"item"},[t._v("合作形式"),t._l(e.cooperation,(function(e,a){return a<2?n("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),n("v-uni-view",{staticClass:"item"},[n("span",{staticStyle:{"margin-right":"1vw"}},[t._v("谁看过他")]),t._l(e.purpose,(function(t,e){return n("v-uni-image",{key:e,staticClass:"platform",staticStyle:{"border-radius":"1vw",top:"-0.3vw"},attrs:{src:t}})})),n("v-uni-image",{staticClass:"platform",staticStyle:{"border-radius":"1vw",top:"-0.3vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/pic_more.png"}})],2)],1)],1)})),1)],1)},o=[]},f73a:function(t,e,n){var a=n("19df");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("06ac2226",a,!0,{sourceMap:!1,shadowMode:!1})},f73f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},i=a;e.default=i},f875:function(t,e,n){"use strict";n.r(e);var a=n("840a"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},f89c:function(t,e,n){"use strict";n.r(e);var a=n("d7ab"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a}}]);