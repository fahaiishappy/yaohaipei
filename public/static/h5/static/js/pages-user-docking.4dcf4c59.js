(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-docking"],{"05ef":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=a},"0980":function(t,e,i){"use strict";i.r(e);var a=i("81b0"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"1b9f":function(t,e,i){"use strict";i.r(e);var a=i("e41e"),n=i("0980");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("8b32");var s,l=i("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"066d8d9d",null,!1,a["a"],s);e["default"]=r.exports},"1cb0":function(t,e,i){var a=i("627e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("b68b7a92",a,!0,{sourceMap:!1,shadowMode:!1})},3174:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):i("span",[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])])]):i("span",[t.within?i("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},o=[]},3734:function(t,e,i){"use strict";i.r(e);var a=i("3174"),n=i("75eb");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("3804");var s,l=i("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"07edaae6",null,!1,a["a"],s);e["default"]=r.exports},3804:function(t,e,i){"use strict";var a=i("1cb0"),n=i.n(a);n.a},"5e9a":function(t,e,i){var a=i("62ec");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("13404978",a,!0,{sourceMap:!1,shadowMode:!1})},"627e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},"62ec":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".hongren[data-v-066d8d9d]{bottom:0}.category[data-v-066d8d9d]{position:fixed;left:0;right:0;height:44px;line-height:44px;padding:0 3vw;font-size:4vw;color:#999;background:#f7f7f7;z-index:202;-webkit-box-shadow:1px 1px 2px rgba(26,26,26,.1);box-shadow:1px 1px 2px rgba(26,26,26,.1)}.category .ranking[data-v-066d8d9d],\n.item .list .ranking[data-v-066d8d9d]{width:8vw;float:left}.category .number[data-v-066d8d9d]{padding-left:6.6vw}.category .avatar[data-v-066d8d9d],\n.category .number[data-v-066d8d9d],\n.item .list .number[data-v-066d8d9d]{float:left}.category .fans[data-v-066d8d9d],\n.item .list .fans[data-v-066d8d9d]{float:right}.category .avatar[data-v-066d8d9d]{padding-left:3.5vw}.item[data-v-066d8d9d]{padding:0}.item .list .number .name[data-v-066d8d9d]{font-size:4vw;line-height:8vw}.item .list[data-v-066d8d9d]{line-height:15vw;font-size:4vw;padding:3vw}.item .list img[data-v-066d8d9d]{float:left;width:15vw;height:15vw;-webkit-border-radius:50%;border-radius:50%;margin-right:3vw}.item .list .number .lable[data-v-066d8d9d]{line-height:0;padding:0}.item .list .number .lable .lablelist[data-v-066d8d9d]{float:left;margin-right:1.5vw;text-align:center;font-size:3vw;border:1px solid #ddd;-webkit-border-radius:2vw;border-radius:2vw;line-height:0;color:#999;padding:2.5vw 2vw}.item .list .number.fr[data-v-066d8d9d]{float:right!important}.item .list .number .lable .lablelist.collect[data-v-066d8d9d]{border:none;padding:2.5vw 0;margin:0;float:right}.item .list .number .lable .lablelist.collect .cuIcon-like[data-v-066d8d9d]{font-size:6vw}.item .list .number .lable .lablelist.collect .cuIcon-likefill[data-v-066d8d9d]{font-size:6vw;color:#ffce6e}.item .list .fans[data-v-066d8d9d]{font-weight:700}.item .list[data-v-066d8d9d]:nth-of-type(even){background:#fcfbff}",""]),t.exports=e},"75eb":function(t,e,i){"use strict";i.r(e);var a=i("05ef"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"81b0":function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("99af"),i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("3734")),o=a(i("cea8")),s=a(i("8880")),l={mixins:[o.default,s.default],components:{uniTopBar:n.default},data:function(){return{modalName:null,content:"",chat:"",cewebrityuid:0,mid:0,setheight:200,tolast:"",contentViewHeight:300,scrollTop:0,old:{scrollTop:0},downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,empty:{tip:"~ 空空如也 ~"}},collectlist:"",userInfo:[],height:"",within:"https://www.hongrensutui.com/h5/img/xiaoxi_logo_left.png"}},filters:{formatDate:function(t){var e=new Date(1e3*t),i=(e.getFullYear(),e.getMonth()+1);i=i<10?"0"+i:i;var a=e.getDate();a=a<10?"0"+a:a;var n=e.getHours();n=n<10?"0"+n:n;var o=e.getMinutes();o=o<10?"0"+o:o;var s=e.getSeconds();return s=s<10?"0"+s:s,i+"-"+a+" "+n+":"+o+":"+s},numFilter:function(t){var e,i=t.length-1;return i<=2?e=t[0]+"**":3==i?e=t[0]+"***":4==i?e=t[0]+"****":i>=5&&(e=t[0]+"*****"),e}},onLoad:function(t){var e=this;this.height=this.StatusBar,uni.getSystemInfo({success:function(t){e.contentViewHeight=t.windowHeight-100}}),uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data&&(e.userInfo=t.data)}}),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){e.updateuser(t.data.id)},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){t.updateuser(e.data.id),uni.request({url:"https://www.hongrensutui.com/api/index/totaldocking",data:{userid:e.data.id},method:"POST",success:function(e){0!=e.data.data.num?(t.downCallback(),uni.showTabBarRedDot({index:1,text:""+e.data.data.num})):(t.downCallback(),uni.hideTabBarRedDot({index:1}))}})},fail:function(t){wxlogin()}})},methods:{upper:function(e){t("log",e," at pages/user/docking.vue:219")},lower:function(e){t("log",e," at pages/user/docking.vue:222")},scroll:function(e){t("log",e," at pages/user/docking.vue:225"),this.old.scrollTop=e.detail.scrollTop},goTop:function(t){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=0})),uni.showToast({icon:"none",title:"纵向滚动 scrollTop 值已被修改为 0"})},updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},downCallback:function(t){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var e=this;uni.getStorage({key:"userInfo",success:function(i){""!=i.data&&null!=i.data?(e.userInfo=i.data,e.getcollect(t,e.userInfo.id)):e.getcollect(t)},fail:function(i){e.getcollect(t)}})},getcollect:function(t,e){var i=this,a=this;uni.request({url:"https://www.hongrensutui.com/api/index/totaldocking",data:{pagenum:t.num,pagesize:t.size,userid:e},method:"POST",success:function(e){var n=e.data.data.list,o=n.length;1==t.num&&(a.collectlist=[]),a.collectlist=a.collectlist.concat(e.data.data.list),i.mescroll.endByPage(o),setTimeout((function(){i.mescroll.endSuccess(o)}),20)},fail:function(t){a.mescroll.endErr()}})},navToDetailPage:function(t,e,i){e&&(t=t+"?id="+e),i&&(t=t+"&judge="+i),uni.navigateTo({url:"/pages/"+t})},share:function(t){function e(e,i){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var i="红人速推 | 网红直播带货一站式服务平台",a="红人速推就是网红多 商家多，直播带货就上红人速推。",n="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(i,a,n,e)}))}};e.default=l}).call(this,i("0de9")["log"])},8880:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},n=a;e.default=n},"8b32":function(t,e,i){"use strict";var a=i("5e9a"),n=i.n(a);n.a},cea8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},n=a;e.default=n},e41e:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={mescrollUni:i("426c").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-top-bar",{attrs:{barid:1,within:t.within}}),i("v-uni-view",{staticClass:"category clearfix",style:{top:t.height+43+"px"}},[i("v-uni-view",{staticClass:"avatar"},[t._v("头像")]),i("v-uni-view",{staticClass:"number"},[t._v("昵称")]),i("v-uni-view",{staticClass:"fans"},[t._v("粉丝")])],1),i("v-uni-view",{staticClass:"hongren",style:{top:t.height+88+"px"}},[i("mescroll-uni",{ref:"mescrollRef",attrs:{down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"item"},[t._l(t.collectlist,(function(e,a){return i("v-uni-view",{key:a,staticClass:"list clearfix",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage("celebrity/details",e.cewebrityid,1)}}},[i("img",{attrs:{src:e["cewebrityavatar"],mode:"widthFix"}}),i("v-uni-view",{staticClass:"number"},[t.userInfo.card_id>0?i("v-uni-view",{staticClass:"name"},[t._v(t._s(e.cewebritynickname))]):i("v-uni-view",{staticClass:"name"},[t._v(t._s(t._f("numFilter")(e.cewebritynickname)))]),i("v-uni-view",{staticClass:"lable clearfix"},[0==e.state&&2==e.belong?i("v-uni-view",{staticClass:"ellipsis",staticStyle:{"text-align":"left",width:"35vw","font-size":"3.5vw",color:"#999","line-height":"6vw"}},[i("span",{staticClass:"cor-e8"},[t._v("新消息：")]),t._v(t._s(e.content))]):i("v-uni-view",{staticClass:"ellipsis",staticStyle:{"text-align":"left",width:"35vw","line-height":"6vw","font-size":"3.5vw",color:"#999"}},[t._v(t._s(e.content))])],1)],1),i("v-uni-view",{staticClass:"number fr"},[i("v-uni-view",{staticClass:"name cor-e8",staticStyle:{"text-align":"right"}},[t._v(t._s(e.fans)+"w")]),i("v-uni-view",{staticClass:"ellipsis",staticStyle:{"text-align":"right",width:"35vw","line-height":"6vw","font-size":"3.5vw",color:"#999"}},[t._v(t._s(t._f("formatDate")(e.createtime)))])],1)],1)})),""==t.collectlist?i("v-uni-view",{staticClass:"no-data"},[t._v("暂无消息")]):t._e()],2)],1)],1)],1)},o=[]}}]);