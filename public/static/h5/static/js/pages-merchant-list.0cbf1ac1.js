(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-merchant-list"],{"07f6":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t,e){e&&this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};e.default=a},"0a9c":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?n("span",{staticClass:"clearfix"},[t.within?n("img",{staticClass:"logo_left",style:{marginLeft:"44px"},attrs:{src:t.within,mode:"heightFix"}}):n("span",[t.title?n("span",{staticClass:"title"},[t._v(t._s(t.title))]):n("span",{staticClass:"title"},[t._v("红人速推")])])]):n("span",[t.within?n("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):n("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},"0b4b":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.list[data-v-c88970a4]{margin-bottom:3vw;padding:3vw;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;position:relative}.rgsh[data-v-c88970a4]{position:absolute;opacity:.6;top:8vw;right:6vw;width:25vw;height:25vw}.supplylist .list[data-v-c88970a4]:last-of-type{margin-bottom:0}.list .publisher img[data-v-c88970a4]{width:22vw;height:22vw;-webkit-border-radius:2vw;border-radius:2vw;margin-right:3vw;display:block;-webkit-box-shadow:0 1px 2px rgba(26,26,26,.1);box-shadow:0 1px 2px rgba(26,26,26,.1)}.list .number[data-v-c88970a4]{width:75%}.list .number .title[data-v-c88970a4]{font-size:4.5vw;color:#333d40;margin-bottom:1.5vw;font-weight:700}\n/* \t.list .number .title .line-green{\n\t\tcolor:#24C68A;\n\t} */.list .number .item[data-v-c88970a4]{font-size:3.54vw;color:#8899a1;padding:1vw 0}.list .number .table[data-v-c88970a4]{position:relative;color:#505f65;font-weight:700;background-image:url(https://www.hongrensutui.com/h5/img/wzbg1.png);background-repeat:no-repeat;background-position:0;display:inline-block;margin-left:2vw}.list .number .item .nowpricetip[data-v-c88970a4]{color:#ff5363;font-size:4vw;font-weight:700}.list .number .item .nowprice[data-v-c88970a4]{color:#ff5363;font-size:6vw;font-weight:700;margin-right:.5vw}.list .number .item .commission[data-v-c88970a4]{margin-left:2vw;display:inline-block;background-color:#ede1d9;color:#a5673f;font-size:3vw;-webkit-border-radius:.8vw;border-radius:.8vw;height:4.5vw;padding:0 1vw;position:relative;bottom:1vw}.list .number .item .commission[data-v-c88970a4]::after{content:" ";display:inline-block;width:0;height:100%;vertical-align:middle;margin-top:1px}.list .number .item .bg-green[data-v-c88970a4]{background-color:#d7f0db;color:#39b54a}',""]),t.exports=e},"1f1f":function(t,e,n){var a=n("cd78");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("7d07759e",a,!0,{sourceMap:!1,shadowMode:!1})},"26af":function(t,e,n){"use strict";var a=n("4ea4");n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5ad0")),o=a(n("536e")),r=a(n("77af")),s={components:{uniTopBar:i.default,AppTabs:o.default,MerchantList:r.default},data:function(){return{modalName:null,height:"400px",toptitle:"商家列表",tip:!1,message:"",messagelist:"",topheight:0,userInfo:[]}},onLoad:function(t){var e=this;t.tag&&(e.tag=t.tag,e.toptitle="精选商家",e.within="https://www.hongrensutui.com/h5/img/jingxuan_logo_left.png"),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",e.getRandomArbitrary(0,49),e.getmessage(),e.timerInt=setInterval((function(){if(e.codetime--,e.message=e.messagelist[e.getRandomArbitrary(0,50)],e.message.celebrity=e.message.celebrity[0]+e.message.celebrity[1]+"***",e.message.merchant=e.message.merchant[0]+e.message.merchant[1]+"***",e.tip=!e.tip,0==e.codetime)return clearInterval(e.timerInt),void(e.codetime=2e3)}),4e3),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:n.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.updateuser(e.data.id)}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},getRandomArbitrary:function(t,e){return Math.floor(Math.random()*(e-t)+t)},getmessage:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(e){t.messagelist=e.data.data.list,t.message=t.messagelist[t.getRandomArbitrary(0,50)],t.message.celebrity=t.message.celebrity[0]+t.message.celebrity[1]+"***",t.message.merchant=t.message.merchant[0]+t.message.merchant[1]+"***",t.tip=!t.tip}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},share:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var n="红人速推 | 平台找主播直播带货",a="已有99+个主播联系它纯佣金带货，如果你是网红，就上红人速推找它",i="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(n,a,i,e)}))}};e.default=s},"42b9":function(t,e,n){"use strict";var a=n("947f"),i=n.n(a);i.a},4674:function(t,e,n){"use strict";n.r(e);var a=n("7137"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},4740:function(t,e,n){"use strict";n.r(e);var a=n("c782"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"50f0":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},i=a;e.default=i},"51c3":function(t,e,n){"use strict";n.r(e);var a=n("26af"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"536e":function(t,e,n){"use strict";n.r(e);var a=n("b49b"),i=n("c495");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("42b9");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"e5b681a0",null,!1,a["a"],r);e["default"]=c.exports},"5ad0":function(t,e,n){"use strict";n.r(e);var a=n("0a9c"),i=n("4674");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("8234");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"e6b68380",null,!1,a["a"],r);e["default"]=c.exports},7137:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=a},"776d":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.message?n("v-uni-view",{staticClass:"tipnews"},[t.tip?n("v-uni-view",{staticClass:"animated1 fadeInRight"},[n("v-uni-view",{staticClass:"cuIcon-notificationfill"}),n("span",[n("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),n("span",[t._v("网红"+t._s(t.message.merchant))]),t._v("查看了"),n("span",[t._v("商家"+t._s(t.message.celebrity))])])],1):t._e()],1):t._e(),n("uni-top-bar",{attrs:{title:t.toptitle}}),n("MerchantList",{attrs:{tag:t.tag}})],1)},o=[]},"77af":function(t,e,n){"use strict";n.r(e);var a=n("84b4"),i=n("4740");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("a486");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"c88970a4",null,!1,a["a"],r);e["default"]=c.exports},8234:function(t,e,n){"use strict";var a=n("886b"),i=n.n(a);i.a},"84b4":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={mescrollUni:n("0777").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mescroll-uni",{ref:"mescrollRef",attrs:{height:"100%",top:t.topheight+42+"px",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},t._l(t.merchant,(function(e,a){return n("v-uni-view",{key:a,staticClass:"list",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.details(e.attestatio,e.id)}}},[n("v-uni-view",{staticClass:"publisher"},[n("img",{attrs:{src:e["logo"]}})]),n("v-uni-view",{staticClass:"number"},[n("v-uni-view",{staticClass:"title ellipsis"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"item"},[n("span",{staticClass:"cu-tag line-green round"},[t._v("营业执照已验证")]),n("span",{staticClass:"cu-tag line-green round"},[t._v("人工审核")])]),n("v-uni-view",{staticClass:"item"},[t._v("商家分类"),t._l(e.category,(function(e,a){return a<2?n("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2),e.platform.length>0?n("v-uni-view",{staticClass:"item"},[t._v("拥有平台"),t._l(e.platform,(function(e,a){return a<2?n("v-uni-view",{key:a,staticClass:"table"},[t._v(t._s(e))]):t._e()}))],2):n("v-uni-view",{staticClass:"item"},[t._v("拥有平台"),n("v-uni-view",{staticClass:"table"},[t._v("实体")])],1),n("v-uni-view",{staticClass:"item"},[t._v("入驻时间"),n("v-uni-view",{staticClass:"table"},[t._v(t._s(t._f("formatDate")(e.createtime)))])],1)],1)],1)})),1)},o=[]},"886b":function(t,e,n){var a=n("c170");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("10320662",a,!0,{sourceMap:!1,shadowMode:!1})},"947f":function(t,e,n){var a=n("ecd2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("75cc66b8",a,!0,{sourceMap:!1,shadowMode:!1})},a486:function(t,e,n){"use strict";var a=n("b99a"),i=n.n(a);i.a},b44c:function(t,e,n){"use strict";var a=n("1f1f"),i=n.n(a);i.a},b49b:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tabs&&t.tabs.length?n("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[n("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(e,a){return n("v-uni-view",{key:a,staticClass:"tab-item",class:{active:t.value===a},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tabClick(a,e)}}},[16!=e.id?n("span",[t._v(t._s(t.getTabName(e)))]):n("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),n("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},o=[]},b99a:function(t,e,n){var a=n("0b4b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("3a53a6e0",a,!0,{sourceMap:!1,shadowMode:!1})},c170:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.cu-bar[data-v-e6b68380]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-e6b68380]{margin-left:3vw;height:30px}.cuIcon-back[data-v-e6b68380]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-e6b68380]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-e6b68380]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-e6b68380]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-e6b68380]{width:auto}.cuIcon-close[data-v-e6b68380]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},c495:function(t,e,n){"use strict";n.r(e);var a=n("07f6"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},c782:function(t,e,n){"use strict";var a=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("f73f")),o=a(n("50f0")),r={mixins:[i.default,o.default],data:function(){return{merchant:"",height:"",topheight:"",downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"~ 空空如也 ~"}}}},filters:{formatDate:function(t){var e=new Date(1e3*t),n=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var i=e.getDate();i=i<10?"0"+i:i;var o=e.getHours();o=o<10?"0"+o:o;var r=e.getMinutes();r=r<10?"0"+r:r;var s=e.getSeconds();return s=s<10?"0"+s:s,n+"-"+a+"-"+i}},props:{tabs:Array,tag:String},mounted:function(){this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px"},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var e=this;e.merchantlist(t)},merchantlist:function(t){var e=this,n=this;uni.request({url:"https://www.hongrensutui.com/api/index/merchantlist",data:{tag:n.tag,pagenum:t.num,pagesize:t.size},method:"POST",success:function(a){var i=a.data.data.list,o=i.length;1==t.num&&(n.merchant=[]),n.merchant=n.merchant.concat(a.data.data.list),e.mescroll.endByPage(o),setTimeout((function(){e.mescroll.endSuccess(o)}),20)},fail:function(t){n.mescroll.endErr()}})},details:function(t,e){uni.navigateTo({url:"/pages/merchant/details?id="+e})}}};e.default=r},cd78:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.tipnews[data-v-f0e57002]{height:15vw;position:fixed;color:#fff;z-index:999999;top:12vw}.category[data-v-f0e57002]{position:fixed;padding:0 3vw;font-size:4vw;color:#999;height:44px;line-height:44px;width:100%;z-index:202;background:#f7f7f7;-webkit-box-shadow:0 1px 2px rgba(26,26,26,.1);box-shadow:0 1px 2px rgba(26,26,26,.1)}.category .ranking[data-v-f0e57002]{position:relative;top:.6vw}.category .categorybtn[data-v-f0e57002]{width:45vw;float:right}.category .fans[data-v-f0e57002]{float:right;min-width:1vw;position:relative;padding-right:3vw}.category .fans[data-v-f0e57002]:last-child{margin-right:4vw}.cuIcon-triangledownfill[data-v-f0e57002]:before{content:"\\e79b";right:-9px;top:-2px;position:absolute;font-size:6vw}.category .ranking[data-v-f0e57002]{width:8vw;float:left}.category .number[data-v-f0e57002]{padding-left:6.6vw}.category .avatar[data-v-f0e57002],\n.category .number[data-v-f0e57002]{float:left}.category .avatar[data-v-f0e57002]{padding-left:3.5vw}.category .platform[data-v-f0e57002]{float:right}.menu-mask[data-v-f0e57002]{position:absolute;left:0;right:0;bottom:44px;background:rgba(26,26,26,.6);z-index:999}.menu-mask .menu[data-v-f0e57002]{width:100%;background:#fff;padding:3vw;padding-top:6vw}.menu-mask .menu .menu-item[data-v-f0e57002]{float:left;-webkit-border-radius:1.5vw;border-radius:1.5vw;background-color:#f0f4ff;font-size:3.5vw;width:21.2vw;text-align:center;height:8vw;line-height:8vw;margin-right:3vw;margin-bottom:3vw}.menu-mask .menu .menu-item.active[data-v-f0e57002]{color:#fff;background:orange}.menu-mask .menu .menu-item[data-v-f0e57002]:nth-child(4n+0){margin-right:0}.fansone[data-v-f0e57002]{float:right}.auth[data-v-f0e57002]{padding:6vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;background-color:#fff}.auth .vip[data-v-f0e57002]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;-webkit-border-radius:1.5vw;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}.auth .title[data-v-f0e57002]{color:#333;margin-bottom:4vw}.cu-modal[data-v-f0e57002]{z-index:999999}',""]),t.exports=e},dfbf:function(t,e,n){"use strict";n.r(e);var a=n("776d"),i=n("51c3");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("b44c");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"f0e57002",null,!1,a["a"],r);e["default"]=c.exports},ecd2:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".app-tabs[data-v-e5b681a0]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;-webkit-box-shadow:0 2px 1px rgba(26,26,26,.1);box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-e5b681a0]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-e5b681a0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-e5b681a0]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-e5b681a0]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-border-radius:%?4?%;border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-e5b681a0]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=e},f73f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},i=a;e.default=i}}]);