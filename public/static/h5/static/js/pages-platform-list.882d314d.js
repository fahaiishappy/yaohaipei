(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-platform-list"],{"0f5e":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=a},2014:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".app-tabs[data-v-e5b681a0]{position:relative;height:42px;line-height:42px;color:#fff;font-size:3.6vw;background-color:#e71d36;box-shadow:0 2px 1px rgba(26,26,26,.1)}.app-tabs .tabs-item[data-v-e5b681a0]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;font-size:3.8vw}.app-tabs .tabs-item .tab-item[data-v-e5b681a0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-e5b681a0]{font-weight:700;font-size:4vw;color:#fff}.app-tabs .tabs-line[data-v-e5b681a0]{position:absolute;bottom:1vw;width:%?40?%;height:1vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:#fff}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-e5b681a0]{z-index:199;position:fixed;top:43px;left:0;width:100%}",""]),t.exports=e},"2e8a":function(t,e,n){"use strict";var a=n("4535"),i=n.n(a);i.a},4535:function(t,e,n){var a=n("9c52");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("9b3614f0",a,!0,{sourceMap:!1,shadowMode:!1})},"5bf5":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.item .list .ranking[data-v-46a65e60]{width:8vw;float:left}.item .list .number[data-v-46a65e60]{float:left}.item .list .fans[data-v-46a65e60]{float:right}.item[data-v-46a65e60]{padding:0}.item .list .number .name[data-v-46a65e60]{font-size:4vw;line-height:8vw}.item .list .number .name .titlename[data-v-46a65e60]{vertical-align:middle}.item .list .number .name .yueta[data-v-46a65e60]{width:8vw;border-radius:1vw;vertical-align:middle}.item .list[data-v-46a65e60]{line-height:15vw;font-size:4vw;padding:3vw}.item .list .rankingavatar[data-v-46a65e60]{float:left;width:15vw;height:15vw;border-radius:50%;margin-right:3vw}.item .list .number .lable[data-v-46a65e60]{line-height:0;padding:0}.item .list .number .lable .lablelist[data-v-46a65e60]{float:left;margin-right:1.5vw;text-align:center;font-size:3vw;border:1px solid #ddd;border-radius:2vw;line-height:0;color:#999;padding:2.5vw 2vw}.item .list .number.fr[data-v-46a65e60]{float:right!important}.item .list .number .lable .lablelist.collect[data-v-46a65e60]{border:none;padding:2.5vw 0;margin:0;float:right}.item .list .number .lable .lablelist.collect .cuIcon-like[data-v-46a65e60]{font-size:6vw}.item .list .number .lable .lablelist.collect .cuIcon-likefill[data-v-46a65e60]{font-size:6vw;color:#ffce6e}.item .list .fans[data-v-46a65e60]{font-weight:700}.item .list[data-v-46a65e60]:nth-of-type(even){background:#fcfbff}.renzheng[data-v-46a65e60]{width:9vw;border-radius:1vw;vertical-align:middle}.titlename[data-v-46a65e60]{vertical-align:middle;margin-right:1.5vw}",""]),t.exports=e},"5fcf":function(t,e,n){"use strict";var a=n("ee27");n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("e3d7")),o=a(n("89cd")),s=a(n("79cd")),c={components:{uniTopBar:i.default,AppTabs:o.default,MescrollItem:s.default},data:function(){return{modalName:null,height:"400px",tabs:["抖音","快手"],tabIndex:0,fans:"粉丝",categoryid:0,categorypid:0,categoryname:"领域",menuindex:99,fansnumindex:99,fansjudge:!1,categoryjudge:!1,categorytable:"",categorylist:"",dyindex:0,ksindex:0,tip:!1,message:"",loadSurvey:!0,topheight:0,type:0,userInfo:[],toptitle:"红人列表",TabCur:0,scrollLeft:0}},onLoad:function(t){var e=this;t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:n.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.getuserinfo(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",this.cewebritycategory(),e.getRandomArbitrary(0,49),e.timerInt=setInterval((function(){uni.getStorage({key:"message",success:function(t){if(""!=t.data&&(e.codetime--,e.message=t.data[e.getRandomArbitrary(0,50)],e.message.celebrity=e.message.celebrity[0]+e.message.celebrity[1]+"***",e.message.merchant=e.message.merchant[0]+e.message.merchant[1]+"***",e.tip=!e.tip,0==e.codetime))return clearInterval(e.timerInt),void(e.codetime=2e3)}})}),4e3)},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.getuserinfo(e.data.id)}}),uni.getStorage({key:"type",success:function(e){""!=e.data&&null!=e.data&&(t.type=e.data,t.loadSurvey=!1,t.$nextTick((function(){t.loadSurvey=!0})),uni.removeStorageSync("type"))},fail:function(e){t.type=0,t.loadSurvey=!1,t.$nextTick((function(){t.loadSurvey=!0}))}})},methods:{getRandomArbitrary:function(t,e){return Math.floor(Math.random()*(e-t)+t)},getuserinfo:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},swiperChange:function(t){this.tabIndex=t.detail.current},lookup:function(t){var e=this;if(e.userInfo.id)switch(uni.getSystemInfoSync().platform){case"android":e.modalName=t.currentTarget.dataset.target;break;case"ios":e.modalName=t.currentTarget.dataset.target;break}else e.modalName="login"},member:function(){var t=this;uni.navigateTo({url:"/pages/member/member?cewebrityid="+t.cewebrityid})},categorybtn:function(){this.fansjudge=!1,this.categoryjudge=!this.categoryjudge},fansbtn:function(){this.categoryjudge=!1,this.fansjudge=!this.fansjudge},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=90*(t.currentTarget.dataset.id-1)},menu:function(t,e,n,a){var i=this,o=this;o.menuindex=t,"不限"==e?(o.categoryid=0,o.categorypid=0,o.categoryname="领域"):(o.categoryid=e,o.categorypid=n,o.categoryname=a),o.categoryjudge=!1,this.loadSurvey=!1,this.$nextTick((function(){i.loadSurvey=!0}))},fansnum:function(t,e){var n=this,a=this;a.fansnumindex=t,a.fans="不限"==e?"粉丝量":e,a.fansjudge=!1,this.loadSurvey=!1,this.$nextTick((function(){n.loadSurvey=!0}))},cewebritycategory:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/getRealm",method:"POST",success:function(e){t.categorytable=e.data.data.table,t.categorylist=e.data.data.list}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},navToDetailPage:function(t){uni.navigateTo({url:"/pages/"+t})},wechatLogin:function(t){wxlogin()},share:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var n="红人速推 | 网红直播带货一站式服务平台",a="红人速推就是网红多 商家多，直播带货就上红人速推。",i="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(n,a,i,e)}))}};e.default=c},6687:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},i=a;e.default=i},"721a":function(t,e,n){"use strict";var a=n("7d20"),i=n.n(a);i.a},"79cd":function(t,e,n){"use strict";n.r(e);var a=n("c745"),i=n("7c17");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("a0b2");var s,c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"46a65e60",null,!1,a["a"],s);e["default"]=r.exports},"7c17":function(t,e,n){"use strict";n.r(e);var a=n("ac4a"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"7d20":function(t,e,n){var a=n("2014");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("9f9df73a",a,!0,{sourceMap:!1,shadowMode:!1})},"83cd":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?n("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[n("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?n("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():n("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?n("span",[t.title?n("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):n("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?n("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img&&1==t.barid?n("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e(),t.img&&1!=t.barid?n("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right2.png"}}):t._e()])])},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"89cd":function(t,e,n){"use strict";n.r(e);var a=n("e441"),i=n("fa06");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("721a");var s,c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"e5b681a0",null,!1,a["a"],s);e["default"]=r.exports},"8df5":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.message?n("v-uni-view",{staticClass:"tipnews"},[t.tip?n("v-uni-view",{staticClass:"animated1 fadeInRight"},[n("v-uni-view",{staticClass:"cuIcon-notificationfill"}),n("span",[n("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),n("span",[t._v("商家"+t._s(t.message.merchant))]),t._v("查看了"),n("span",[t._v("红人"+t._s(t.message.celebrity))])])],1):t._e()],1):t._e(),n("uni-top-bar",{attrs:{title:t.toptitle}}),n("app-tabs",{attrs:{tabs:t.tabs,fixed:!0,topheight:t.topheight+43},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}}),n("v-uni-view",{staticClass:"category clearfix",style:{top:t.topheight+85+"px"}},[n("v-uni-view",{staticClass:"avatar"},[t._v("头像")]),n("v-uni-view",{staticClass:"number"},[t._v("昵称")]),n("v-uni-view",{staticClass:"categorybtn"},[t.userInfo.card_id<1||!t.userInfo.card_id?n("v-uni-view",{staticClass:"fans cuIcon-triangledownfill",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookup.apply(void 0,arguments)}}},[t._v(t._s(t.fans)),n("span",{staticClass:"cuIcon-lock"})]):t._e(),t.userInfo.card_id>0?n("v-uni-view",{staticClass:"fans cuIcon-triangledownfill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansbtn.apply(void 0,arguments)}}},[t._v(t._s(t.fans))]):t._e(),t.userInfo.card_id<1||!t.userInfo.card_id?n("v-uni-view",{staticClass:"fans cuIcon-triangledownfill",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookup.apply(void 0,arguments)}}},[t._v(t._s(t.categoryname)),n("span",{staticClass:"cuIcon-lock"})]):t._e(),t.userInfo.card_id>0?n("v-uni-view",{staticClass:"fans cuIcon-triangledownfill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.categorybtn.apply(void 0,arguments)}}},[t._v(t._s(t.categoryname))]):t._e()],1)],1),n("v-uni-swiper",{staticClass:"swiper",style:{height:t.height},attrs:{top:t.topheight+43+42+44+"px",current:t.tabIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},[n("v-uni-swiper-item",[t.loadSurvey?n("mescroll-item",{key:t.dyindex,attrs:{type:t.type,userid:t.userInfo.id,i:0,index:t.tabIndex,tabs:t.tabs,fansnum:t.fansnumindex,categoryid:t.categoryid,categorypid:t.categorypid}}):t._e()],1),n("v-uni-swiper-item",[t.loadSurvey?n("mescroll-item",{key:t.ksindex,attrs:{type:t.type,userid:t.userInfo.id,i:1,index:t.tabIndex,tabs:t.tabs,fansnum:t.fansnumindex,categoryid:t.categoryid,categorypid:t.categorypid}}):t._e()],1)],1),t.categoryjudge?n("v-uni-view",{staticClass:"menu-mask",style:{top:t.topheight+130+"px"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.moveHandle.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"menu clearfix"},[n("v-uni-view",{staticClass:"clearfix",staticStyle:{"margin-top":"3vw",width:"100%"}},[n("v-uni-view",{staticClass:"menu-item",class:99==t.menuindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.menu(99,"不限")}}},[t._v("不限")])],1),n("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(t.categorytable,(function(e,a){return n("v-uni-view",{key:a,staticClass:"cu-item",class:t.TabCur==a?"text-green cur":"",attrs:{"data-id":a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(e.name))])})),1),t._l(t.categorytable,(function(e,a){return n("v-uni-view",{key:a,staticClass:"clearfix",class:t.TabCur==a?"show":"hide",staticStyle:{"margin-top":"3vw",width:"100%"}},t._l(t.categorylist,(function(a,i){return a.pid==e.id?n("v-uni-view",{key:i,staticClass:"menu-item",class:t.menuindex==i?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.menu(i,a.id,a.pid,a.name)}}},[t._v(t._s(a.name))]):t._e()})),1)}))],2)],1):t._e(),t.fansjudge?n("v-uni-view",{staticClass:"menu-mask",style:{top:t.topheight+130+"px"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.moveHandle.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"menu clearfix"},[n("v-uni-view",{staticClass:"menu-item",class:99==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(99,"不限")}}},[t._v("不限")]),n("v-uni-view",{staticClass:"menu-item",class:10==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(10,"10w以下")}}},[t._v("10w以下")]),n("v-uni-view",{staticClass:"menu-item",class:100==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(100,"10w~100w")}}},[t._v("10w~100w")]),n("v-uni-view",{staticClass:"menu-item",class:500==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(500,"100w~500w")}}},[t._v("100w~500w")]),n("v-uni-view",{staticClass:"menu-item",class:1e3==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(1e3,"500w~1000w")}}},[t._v("500w~1000w")]),n("v-uni-view",{staticClass:"menu-item",class:1001==t.fansnumindex?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fansnum(1001,"1000w以上")}}},[t._v("1000w以上")])],1)],1):t._e(),n("v-uni-view",{staticClass:"cu-modal",class:"login"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"auth"},[n("v-uni-view",{staticClass:"title"},[t._v("请登录后操作！")]),n("v-uni-view",{staticClass:"loginbtn"},[n("v-uni-button",{staticClass:"close",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),n("v-uni-button",{staticClass:"login",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"cu-modal",class:"Modal"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"auth"},[n("v-uni-view",{staticClass:"title"},[t._v("按需快速查找红人")]),n("v-uni-view",{staticClass:"vip",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.member.apply(void 0,arguments)}}},[t._v("成为会员，解锁快查")])],1)],1)],1),n("v-uni-view",{staticClass:"cu-modal",class:"Modalios"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"auth"},[n("v-uni-view",{staticClass:"title"},[t._v("十分抱歉，由于相关规范，小程序暂不支持解锁快查。")])],1)],1)],1)],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},9550:function(t,e,n){"use strict";n.r(e);var a=n("5fcf"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"9b8e":function(t,e,n){"use strict";n.r(e);var a=n("0f5e"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"9c52":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.tipnews[data-v-c04e52fc]{height:15vw;position:fixed;color:#fff;z-index:999999;top:24vw}.category[data-v-c04e52fc]{position:fixed;padding:0 3vw;font-size:4vw;color:#999;height:44px;line-height:44px;width:100%;z-index:202;background:#f7f7f7;box-shadow:0 1px 2px rgba(26,26,26,.1)}.category .ranking[data-v-c04e52fc]{position:relative;top:.6vw}.category .categorybtn[data-v-c04e52fc]{width:58vw;float:right}.category .fans[data-v-c04e52fc]{float:right;min-width:1vw;position:relative;padding-right:3vw}.category .fans[data-v-c04e52fc]:last-child{margin-right:4vw}.cuIcon-triangledownfill[data-v-c04e52fc]:before{content:"\\e79b";right:-9px;top:-2px;position:absolute;font-size:6vw}.category .ranking[data-v-c04e52fc]{width:8vw;float:left}.category .number[data-v-c04e52fc]{padding-left:6.6vw}.category .avatar[data-v-c04e52fc],\n.category .number[data-v-c04e52fc]{float:left}.category .avatar[data-v-c04e52fc]{padding-left:3.5vw}.menu-mask[data-v-c04e52fc]{position:absolute;left:0;right:0;bottom:0;background:rgba(26,26,26,.6);z-index:999}.menu-mask .menu[data-v-c04e52fc]{width:100%;background:#fff;padding:3vw}.nav .cu-item[data-v-c04e52fc]{height:30px;line-height:30px}.menu-mask .menu .menu-item[data-v-c04e52fc]{float:left;border-radius:1.5vw;background-color:#f0f4ff;font-size:3.5vw;width:21.2vw;text-align:center;height:8vw;line-height:8vw;margin-right:3vw;margin-bottom:3vw}.menu-mask .menu .menu-item.active[data-v-c04e52fc]{color:#fff;background:orange}.menu-mask .menu .menu-item[data-v-c04e52fc]:nth-child(4n+0){margin-right:0}.fansone[data-v-c04e52fc]{float:right}.auth[data-v-c04e52fc]{padding:6vw;border-radius:1.5vw;background-color:#fff}.auth .vip[data-v-c04e52fc]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}.auth .title[data-v-c04e52fc]{color:#333;margin-bottom:4vw}.cu-modal[data-v-c04e52fc]{z-index:210}.cu-dialog[data-v-c04e52fc]{background-color:initial;width:100vw;padding:4vw;height:auto}.auth[data-v-c04e52fc]{padding:6vw;border-radius:1.5vw;background-color:#fff}.auth .vip[data-v-c04e52fc]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}.auth .pay[data-v-c04e52fc]{border-radius:1.5vw;border:1px solid #ebebeb;text-align:center;color:#666;height:10vw;line-height:10vw}.auth .title[data-v-c04e52fc]{color:#333;margin-bottom:4vw}.loginbtn[data-v-c04e52fc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}uni-button[data-v-c04e52fc]::after{display:none}uni-button[data-v-c04e52fc]{position:static;display:block;margin-left:0;margin-right:0;padding-left:0;padding-right:0;box-sizing:initial;font-size:3.8vw;text-align:center;text-decoration:none;line-height:7vw;border-radius:1.5vw;-webkit-tap-highlight-color:transparent;overflow:visible;color:#333;background-color:initial;margin-top:3vw}uni-button.close[data-v-c04e52fc]{\n\t/* border:1px solid #efefef; */\n\t/* padding:1vw 3vw; */}uni-button.login[data-v-c04e52fc]{color:#39b54a\n\t/* color:#fff;\n\tpadding:1vw 3vw; */}\n/* 联系客服*/.customer[data-v-c04e52fc]{position:fixed;bottom:18vw;right:6vw;width:15vw;height:15vw;background:#e71d36;color:#fff;z-index:210;text-align:center;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.customer img[data-v-c04e52fc]{width:100%;height:100%;border-radius:50%}',""]),t.exports=e},a0b2:function(t,e,n){"use strict";var a=n("c82a"),i=n.n(a);i.a},aa9f:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.auth[data-v-9df7cb58]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-9df7cb58]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-9df7cb58]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-9df7cb58]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-9df7cb58]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-9df7cb58]{height:100vh;z-index:300}.cu-bar[data-v-9df7cb58]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-9df7cb58]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-9df7cb58]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-9df7cb58]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-9df7cb58]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9df7cb58]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9df7cb58]{width:auto}.cuIcon-close[data-v-9df7cb58]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=e},ac4a:function(t,e,n){"use strict";var a=n("ee27");n("99af"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("6687")),o=a(n("f680")),s={mixins:[i.default,o.default],data:function(){return{downOption:{auto:!1},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"~ 空空如也 ~"}},height:"400px",topheight:0,goods:[],realmid:"",fans:"不限",category:"不限",userInfo:[]}},props:{tabs:Array,userid:Number,fansnum:Number,categoryid:Number,categorypid:Number,type:Number},mounted:function(){this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px"},methods:{downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var e=this;uni.getStorage({key:"userInfo",success:function(n){""!=n.data&&null!=n.data?(e.userInfo=n.data,e.totalcewebrity(t,e.userInfo.id)):e.totalcewebrity(t)},fail:function(n){e.totalcewebrity(t)}})},totalcewebrity:function(t,e){var n=this,a=this,i=a.tabs[a.i];uni.request({url:"https://www.hongrensutui.com/api/index/totalcewebrity",data:{platform:i,type:a.type,pagenum:t.num,pagesize:t.size,userid:e,realmpid:a.categorypid,realmid:a.categoryid,fans:a.fansnum},method:"POST",success:function(e){var i=e.data.data.list,o=i.length;a.realmid=e.data.data.realmid,1==t.num&&(a.goods=[]),a.goods=a.goods.concat(e.data.data.list),n.mescroll.endByPage(o),setTimeout((function(){n.mescroll.endSuccess(o)}),20)},fail:function(t){a.mescroll.endErr()}})},collect:function(t){var e=this;e.userid?t.show?(uni.showToast({title:"已取消关注",icon:"none",duration:2e3}),e.collectClick(t)):(uni.showToast({title:"已添加关注",icon:"none",duration:2e3}),e.collectClick(t)):uni.showToast({title:"您还未登录，请在 我的 界面登录后操作",icon:"none",duration:3e3})},collectClick:function(t,e){var n=this;uni.request({url:"https://www.hongrensutui.com/api/index/collect",data:{id:n.userid,collectid:t.id},method:"POST",success:function(e){t.show=!t.show}})},navToDetailPage:function(t,e,n){e&&(t=t+"?id="+e+"&realmid="+n),uni.navigateTo({url:"/pages/"+t})}}};e.default=s},b17d:function(t,e,n){var a=n("aa9f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("2d0d384a",a,!0,{sourceMap:!1,shadowMode:!1})},c4f3:function(t,e,n){"use strict";var a=n("b17d"),i=n.n(a);i.a},c745:function(t,e,n){"use strict";var a={mescrollUni:n("fd62").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mescroll-uni",{ref:"mescrollRef",attrs:{height:"100%",top:t.topheight+43+42+44+"px",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"item"},t._l(t.goods,(function(e,a){return n("v-uni-view",{key:a,staticClass:"list clearfix",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navToDetailPage("platform/celebrity",e.id,t.realmid)}}},[n("img",{staticClass:"rankingavatar",attrs:{src:e["avatar"]}}),n("v-uni-view",{staticClass:"number"},[n("v-uni-view",{staticClass:"name"},[n("span",{staticClass:"titlename"},[t._v(t._s(e.nickname))]),n("img",{staticClass:"yueta",attrs:{src:"https://www.hongrensutui.com/h5/img/yue.png",mode:"widthFix"}})]),n("v-uni-view",{staticClass:"lable clearfix"},["1"==e.pay_type?n("v-uni-view",{staticClass:"cu-tag round bg-red light"},[t._v("预付费")]):t._e(),"2"==e.pay_type?n("v-uni-view",{staticClass:"cu-tag round bg-orange light"},[t._v("纯佣金")]):t._e(),"3"==e.pay_type?n("v-uni-view",{staticClass:"cu-tag round bg-purple light"},[t._v("预付费+佣金")]):t._e(),t._l(e.cooperation,(function(e,a){return a<2?n("v-uni-view",{key:a,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(e))]):t._e()}))],2)],1),n("v-uni-view",{staticClass:"number fr"},[n("v-uni-view",{staticClass:"name cor-e8"},[t._v(t._s(e.fans)+"w")]),n("v-uni-view",{staticClass:"lable clearfix"},[n("v-uni-view",{staticClass:"lablelist collect",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.collect(e)}}},[n("v-uni-view",{staticClass:"lg text-gray",class:e.show?"cuIcon-likefill":"cuIcon-like"})],1)],1)],1)],1)})),1)],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},c82a:function(t,e,n){var a=n("5bf5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("fbf71bd2",a,!0,{sourceMap:!1,shadowMode:!1})},e3d7:function(t,e,n){"use strict";n.r(e);var a=n("83cd"),i=n("9b8e");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("c4f3");var s,c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"9df7cb58",null,!1,a["a"],s);e["default"]=r.exports},e441:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tabs&&t.tabs.length?n("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed},style:{top:t.topheight+"px"}},[n("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(e,a){return n("v-uni-view",{key:a,staticClass:"tab-item",class:{active:t.value===a},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tabClick(a,e)}}},[16!=e.id?n("span",[t._v(t._s(t.getTabName(e)))]):n("img",{staticStyle:{width:"12vw",height:"6vw",position:"relative",top:"2vw"},attrs:{src:"https://www.hongrensutui.com/h5/img/video_tab_bg.png"}})])})),1),n("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},efbd:function(t,e,n){"use strict";n.r(e);var a=n("8df5"),i=n("9550");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("2e8a");var s,c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"c04e52fc",null,!1,a["a"],s);e["default"]=r.exports},f680:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},i=a;e.default=i},fa06:function(t,e,n){"use strict";n.r(e);var a=n("fa52"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},fa52:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{topheight:Number,tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(t,e){e&&this.value!=t&&(this.$emit("input",t),this.$emit("change",t))}}};e.default=a}}]);