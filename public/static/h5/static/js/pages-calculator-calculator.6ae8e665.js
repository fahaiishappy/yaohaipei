(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-calculator-calculator"],{"05ef":function(t,i,a){"use strict";a("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};i.default=e},3734:function(t,i,a){"use strict";a.r(i);var e=a("c2d5"),n=a("75eb");for(var c in n)"default"!==c&&function(t){a.d(i,t,(function(){return n[t]}))}(c);a("d973");var s,o=a("f0c5"),l=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"525162bc",null,!1,e["a"],s);i["default"]=l.exports},"4fb0":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'.cu-bar[data-v-525162bc]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-525162bc]{margin-left:3vw;height:30px}.cuIcon-back[data-v-525162bc]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-525162bc]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-525162bc]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-525162bc]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-525162bc]{width:auto}.cuIcon-close[data-v-525162bc]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=i},5713:function(t,i,a){var e=a("4fb0");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("645c1318",e,!0,{sourceMap:!1,shadowMode:!1})},6930:function(t,i,a){"use strict";var e=a("6ae0"),n=a.n(e);n.a},"6ae0":function(t,i,a){var e=a("766cb");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("b9e6dee0",e,!0,{sourceMap:!1,shadowMode:!1})},"75eb":function(t,i,a){"use strict";a.r(i);var e=a("05ef"),n=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(i,t,(function(){return e[t]}))}(c);i["default"]=n.a},"766cb":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".tipnews[data-v-7f55716a]{top:12vw}.cu-btn.img[data-v-7f55716a]{height:24px;font-size:12px;background-color:#e71d36;color:#fff;padding:0 2vw}.cu-form-group[data-v-7f55716a]{cursor:pointer}.cu-form-group uni-picker[data-v-7f55716a]{padding-right:%?40?%;position:relative}.cu-form-group uni-picker .picker[data-v-7f55716a]{text-align:center}.cu-form-group uni-picker .picker.tip[data-v-7f55716a]{text-align:center;color:#ccc}.cu-form-group uni-button .cu-tag[data-v-7f55716a]{position:absolute;top:%?8?%;right:%?8?%}.cu-form-group uni-input[data-v-7f55716a]{font-size:14px;text-align:center;padding-right:5px}.cu-form-group .title[data-v-7f55716a]{padding:0}.result[data-v-7f55716a]{width:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:3vw;padding:3vw}.result .order[data-v-7f55716a],\n.result .sale[data-v-7f55716a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.indexpage .uni-padding-wrap[data-v-7f55716a],\n.indexpage .swiper-item[data-v-7f55716a]{padding:0}.indexpage .banner[data-v-7f55716a]{-webkit-border-radius:0;border-radius:0}.celebritydetails .cu-bar.foot[data-v-7f55716a]{position:absolute}.cu-modal[data-v-7f55716a]{position:absolute}",""]),t.exports=i},"8c3f":function(t,i,a){"use strict";var e=a("4ea4");a("b680"),a("acd8"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("3734")),c={components:{uniTopBar:n.default},data:function(){return{CustomBar:this.CustomBar,modalName:null,categoryjudge:!1,menuindex:0,scrollLeft:0,categorytable:"",TabCur:0,categoryname:"",index1:-1,index2:-1,index3:-1,picker1:["专场带货","混播带货","短视频带货","宣传推广","挂橱窗"],picker2:["0.5h","1h","2h","4h","8h"],picker3:["粉丝在线高峰期","粉丝在线正常期","粉丝在线低谷期"],calculation:{fans:"",price:"",online:"",orders:"",volume:""},orderRatio:0,multiple:0,result:!1,banner:"",indicatorDots:!0,autoplay:!0,interval:4e3,duration:500}},onLoad:function(t){var i=this;i.height=this.StatusBar,i.cewebritycategory(),uni.request({url:"https://www.hongrensutui.com/api/index/getBanner",method:"POST",success:function(t){i.banner=t.data.data.list}})},methods:{getRandomArbitrary:function(t,i){return Math.floor(Math.random()*(i-t)+t)},numFilter:function(t){var i="";return i=isNaN(t)||""===t?" ":parseFloat(t).toFixed(0),i},estimate:function(){if(this.orderRatio=0,this.multiple=0,!this.categoryname)return uni.showToast({title:"请选择带货领域",icon:"none",duration:3e3}),!1;if(-1==this.index1)return uni.showToast({title:"请选择带货方式",icon:"none",duration:3e3}),!1;if(-1==this.index2)return uni.showToast({title:"请选择带货时长",icon:"none",duration:3e3}),!1;if(-1==this.index3)return uni.showToast({title:"请选择带货峰谷",icon:"none",duration:3e3}),!1;if(!this.calculation.fans)return uni.showToast({title:"请输入粉丝数",icon:"none",duration:3e3}),!1;if(!this.calculation.price)return uni.showToast({title:"请输入商品价格",icon:"none",duration:3e3}),!1;if(this.calculation.fans>8e3){var t=0;this.calculation.online=1e4*this.calculation.fans*t}if(this.calculation.fans>800&&this.calculation.fans<=8e3){t=.0073;this.calculation.online=1e4*this.calculation.fans*t}if(this.calculation.fans>500&&this.calculation.fans<=800){t=.0065;this.calculation.online=1e4*this.calculation.fans*t}if(this.calculation.fans>200&&this.calculation.fans<=500){t=.0054;this.calculation.online=1e4*this.calculation.fans*t}if(this.calculation.fans<=200){t=.0035;this.calculation.online=1e4*this.calculation.fans*t}var i=0;i=0==this.index1?18:i,i=1==this.index1?15:i,i=2==this.index1?12:i,i=3==this.index1?9:i,i=4==this.index1?6:i,this.orderRatio=this.orderRatio+i;var a=0;a=2==this.index2?1:a,a=3==this.index2?1:a,a=4==this.index2?2:a,a=5==this.index2?2:a,this.orderRatio=this.orderRatio+a;var e=0;e=0==this.index3?5:e,e=2==this.index3?-2:e,this.orderRatio=this.orderRatio+e;var n=0;n=0==this.index2?.5:n,n=1==this.index2?1:n,n=2==this.index2?1.83:n,n=3==this.index2?3.75:n,n=4==this.index2?5.53:n,n=5==this.index2?7.46:n,this.multiple=this.multiple+n,this.calculation.price>200&&(this.calculation.online=.95*this.calculation.online),this.calculation.price>200&&this.calculation.price<=500&&(this.calculation.online=.78*this.calculation.online),this.calculation.price>500&&this.calculation.price<=2e3&&(this.calculation.online=.6*this.calculation.online),this.calculation.price>2e3&&this.calculation.price<=5e3&&(this.calculation.online=.4*this.calculation.online),this.calculation.price>5e3&&this.calculation.price<=1e5&&(this.calculation.online=.2*this.calculation.online),this.calculation.price>1e4&&this.calculation.price<=5e4&&(this.calculation.online=.08*this.calculation.online),this.calculation.price>5e4&&this.calculation.price<=1e5&&(this.calculation.online=.003*this.calculation.online),this.calculation.price>1e5&&(this.calculation.online=0*this.calculation.online),this.calculation.orders=this.numFilter(this.calculation.online*this.orderRatio/100*this.multiple),this.calculation.volume=this.calculation.price*this.calculation.orders,this.result=!0},PickerChange1:function(t){this.index1=t.detail.value},PickerChange2:function(t){this.index2=t.detail.value},PickerChange3:function(t){this.index3=t.detail.value},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null,this.categoryjudge=!this.categoryjudge},categorybtn:function(){this.categoryjudge=!this.categoryjudge},cewebritycategory:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/getRealm",method:"POST",success:function(i){t.categorytable=i.data.data.table,t.categorylist=i.data.data.list}})},menu:function(t,i){var a=this;a.menuindex=t,a.categoryname=i,a.categoryjudge=!1},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=90*(t.currentTarget.dataset.id-1)}}};i.default=c},9550:function(t,i,a){"use strict";a.r(i);var e=a("8c3f"),n=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(i,t,(function(){return e[t]}))}(c);i["default"]=n.a},c2d5:function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return c})),a.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?a("span",{staticClass:"clearfix"},[t.within?a("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):a("span",[t.title?a("span",{staticClass:"title"},[t._v(t._s(t.title))]):a("span",{staticClass:"title"},[t._v("红人速推")])])]):a("span",[t.within?a("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):a("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},c=[]},d973:function(t,i,a){"use strict";var e=a("5713"),n=a.n(e);n.a},e265:function(t,i,a){"use strict";a.r(i);var e=a("edb1"),n=a("9550");for(var c in n)"default"!==c&&function(t){a.d(i,t,(function(){return n[t]}))}(c);a("6930");var s,o=a("f0c5"),l=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"7f55716a",null,!1,e["a"],s);i["default"]=l.exports},edb1:function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return c})),a.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"celebritydetails"},[a("v-uni-view",{staticClass:"bg-fff mb-0 indexpage"},[a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"page-section swiper"},[a("v-uni-view",{staticClass:"page-section-spacing"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},t._l(t.banner,(function(i,e){return"index"==i.page&&"1"==i.position?a("v-uni-swiper-item",{key:e,on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage(i.link)}}},[a("v-uni-view",{staticClass:"swiper-item"},[a("img",{staticClass:"banner",attrs:{src:i["img"],mode:"widthFix"}})])],1):t._e()})),1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"platform_list clearfix"},[a("v-uni-form",[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("带货领域")]),a("v-uni-view",{staticClass:"coent"},[t._v(t._s(t.categoryname))]),a("v-uni-button",{staticClass:"img cu-btn shadow",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.categorybtn.apply(void 0,arguments)}}},[t._v("选择领域")])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("带货方式")]),a("v-uni-picker",{attrs:{value:t.index1,range:t.picker1},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.PickerChange1.apply(void 0,arguments)}}},[t.index1>-1?a("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.picker1[t.index1]))]):a("v-uni-view",{staticClass:"picker tip"},[t._v("请选择带货方式")])],1)],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("带货时长")]),a("v-uni-picker",{attrs:{value:t.index2,range:t.picker2},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.PickerChange2.apply(void 0,arguments)}}},[t.index2>-1?a("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.picker2[t.index2]))]):a("v-uni-view",{staticClass:"picker tip"},[t._v("请选择带货时长")])],1)],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("带货峰谷")]),a("v-uni-picker",{attrs:{value:t.index3,range:t.picker3},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.PickerChange3.apply(void 0,arguments)}}},[t.index3>-1?a("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.picker3[t.index3]))]):a("v-uni-view",{staticClass:"picker tip"},[t._v("请选择带货峰谷")])],1)],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("主播粉丝")]),a("v-uni-input",{attrs:{type:"number","adjust-position":!0,placeholder:"请输入主播粉丝","placeholder-style":"color:#ccc"},model:{value:t.calculation.fans,callback:function(i){t.$set(t.calculation,"fans",i)},expression:"calculation.fans"}}),a("v-uni-view",{staticClass:"title"},[t._v("万")])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("商品价格")]),a("v-uni-input",{attrs:{type:"number","adjust-position":!0,placeholder:"请输入商品价格","placeholder-style":"color:#ccc"},model:{value:t.calculation.price,callback:function(i){t.$set(t.calculation,"price",i)},expression:"calculation.price"}}),a("v-uni-view",{staticClass:"title"},[t._v("元")])],1)],1)],1),t.result?a("v-uni-view",{staticClass:"result"},[a("v-uni-view",{staticClass:"order"},[t._v("预估订单量："+t._s(t.calculation.orders))]),a("v-uni-view",{staticClass:"sale"},[t._v("预估销售额："+t._s(t.calculation.volume))])],1):t._e(),t.categoryjudge?a("v-uni-view",{staticClass:"menu-mask",style:{top:"0"},on:{touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.moveHandle.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"menu clearfix",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i)}}},[a("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(t.categorytable,(function(i,e){return a("v-uni-view",{key:e,staticClass:"cu-item",class:t.TabCur==e?"text-green cur":"",attrs:{"data-id":e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(i.name))])})),1),t._l(t.categorytable,(function(i,e){return a("v-uni-view",{key:e,staticClass:"clearfix",class:t.TabCur==e?"show":"hide",staticStyle:{"margin-top":"3vw",width:"100%"}},t._l(t.categorylist,(function(e,n){return e.pid==i.id?a("v-uni-view",{key:n,staticClass:"menu-item",class:t.menuindex==n?"active":"",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.menu(n,e.name)}}},[t._v(t._s(e.name))]):t._e()})),1)}))],2)],1):t._e(),a("v-uni-view",{staticClass:"cu-modal drawer-modal justify-end",class:"DrawerModalR"==t.modalName?"show":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog basis-lg",style:[{top:t.CustomBar+"px",height:"calc(100vh - "+t.CustomBar+"px)"}],on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i)}}},[a("v-uni-view",{staticClass:"cu-list menu text-left"},t._l(5,(function(i,e){return a("v-uni-view",{key:e,staticClass:"cu-item arrow"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-view",[t._v("Item "+t._s(e+1))])],1)],1)})),1)],1)],1),a("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[a("v-uni-view",{staticClass:"opening round shadow text-center"},[a("v-uni-view",{staticClass:"bottombtn clearfix"},[a("v-uni-view",{staticClass:"kefubtn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.estimate.apply(void 0,arguments)}}},[t._v("开始预估计算")])],1)],1)],1)],1)},c=[]}}]);