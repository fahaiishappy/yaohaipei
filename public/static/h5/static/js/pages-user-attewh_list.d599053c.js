(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-attewh_list"],{"0a9c":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?a("span",{staticClass:"clearfix"},[t.within?a("img",{staticClass:"logo_left",style:{marginLeft:"44px"},attrs:{src:t.within,mode:"heightFix"}}):a("span",[t.title?a("span",{staticClass:"title"},[t._v(t._s(t.title))]):a("span",{staticClass:"title"},[t._v("红人速推")])])]):a("span",[t.within?a("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):a("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},"31c5":function(t,e,a){"use strict";var i=a("af51"),n=a.n(i);n.a},4674:function(t,e,a){"use strict";a.r(e);var i=a("7137"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"5ad0":function(t,e,a){"use strict";a.r(e);var i=a("0a9c"),n=a("4674");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("8234");var o,r=a("f0c5"),u=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"e6b68380",null,!1,i["a"],o);e["default"]=u.exports},7137:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=i},8234:function(t,e,a){"use strict";var i=a("886b"),n=a.n(i);n.a},"886b":function(t,e,a){var i=a("c170");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("10320662",i,!0,{sourceMap:!1,shadowMode:!1})},"8cb6":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".hongren[data-v-213565e5]{bottom:0;z-index:200}.category[data-v-213565e5]{padding:0 3vw;font-size:4vw;color:#999;position:fixed;width:100%;height:44px;line-height:44px;z-index:202;background:#f7f7f7;-webkit-box-shadow:0 1px 2px rgba(26,26,26,.1);box-shadow:0 1px 2px rgba(26,26,26,.1);display:-webkit-box;display:-webkit-flex;display:flex;text-align:center}.list .ranking[data-v-213565e5],\r\n.category .ranking[data-v-213565e5]{width:8vw}.list .avatar[data-v-213565e5],\r\n.category .avatar[data-v-213565e5]{width:15vw}.list .number[data-v-213565e5],\r\n.category .number[data-v-213565e5]{text-align:left;padding-left:3vw;-webkit-box-flex:1;-webkit-flex:1;flex:1}.list .operation[data-v-213565e5],\r\n.category .operation[data-v-213565e5]{text-align:right;width:14vw}.list[data-v-213565e5]{padding:3vw;display:-webkit-box;display:-webkit-flex;display:flex}.list[data-v-213565e5]:nth-of-type(even){background:#fcfbff}.list .ranking[data-v-213565e5]{font-size:4.5vw;text-align:center;line-height:15vw}.list .avatar[data-v-213565e5]{width:15vw;height:15vw}.list .avatar img[data-v-213565e5]{width:100%;height:100%;-webkit-border-radius:50%;border-radius:50%}.list .number[data-v-213565e5]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.list .number .title[data-v-213565e5]{height:10vw;line-height:10vw}.list[data-v-213565e5]:last-child{margin-bottom:0}.list .operation span[data-v-213565e5]{line-height:15vw;font-size:5vw}.list .operation .cuIcon-writefill[data-v-213565e5]{margin-right:2vw}.paymentbtn[data-v-213565e5]{font-size:4.8vw;font-weight:700;margin:auto;width:80vw;text-align:center;line-height:12vw;-webkit-border-radius:12vw;border-radius:12vw;background-color:#e71d36;color:#fff;-webkit-box-shadow:0 0 0 3px hsla(0,0%,87.1%,.3);box-shadow:0 0 0 3px hsla(0,0%,87.1%,.3)}",""]),t.exports=e},af51:function(t,e,a){var i=a("8cb6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("c67abc2a",i,!0,{sourceMap:!1,shadowMode:!1})},b5d5:function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5ad0")),s={components:{uniTopBar:n.default},data:function(){return{manage:"",managelength:0,paymentbtn:!0,userInfo:"",height:"",toptitle:"入驻中心",within:"https://www.hongrensutui.com/h5/img/ruzhu_logo_left.png"}},onShow:function(){var t=this;this.height=this.StatusBar,uni.getStorage({key:"userInfo",success:function(e){t.getuserinfo(e.data.id)}})},methods:{getuserinfo:function(t){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){e.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.Releaselist(e.userInfo.id)}})},Releaselist:function(t){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/Releaselist",data:{mid:t},method:"POST",success:function(t){t.data.data.info?(e.manage=t.data.data.info,e.managelength=e.manage.length,e.managelength>=20&&(e.paymentbtn=!1)):e.manage=""}})},publishnum:function(){uni.showToast({title:"红人入驻已达上限！",icon:"none",duration:3e3})},cewebritydel:function(t){var e=this;uni.showModal({title:"提示",content:"您确定要删除该红人么？",success:function(a){a.confirm&&uni.request({url:"https://www.hongrensutui.com/api/index/cewebritydel",data:{id:t},method:"POST",success:function(t){uni.showToast({title:t.data.data.msg,icon:"none",duration:2e3}),e.Releaselist(e.userInfo.id)}})}})},navToDetailPage:function(t,e){e&&(t=t+"?id="+e),uni.navigateTo({url:"/pages/"+t})}}};e.default=s},bce8:function(t,e,a){"use strict";a.r(e);var i=a("c324"),n=a("dfd2");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("31c5");var o,r=a("f0c5"),u=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"213565e5",null,!1,i["a"],o);e["default"]=u.exports},c170:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.cu-bar[data-v-e6b68380]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-e6b68380]{margin-left:3vw;height:30px}.cuIcon-back[data-v-e6b68380]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-e6b68380]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-e6b68380]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-e6b68380]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-e6b68380]{width:auto}.cuIcon-close[data-v-e6b68380]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},c324:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("uni-top-bar",{attrs:{title:t.toptitle,within:t.within}}),a("v-uni-view",{staticClass:"category clearfix",style:{top:t.height+43+"px"}},[a("v-uni-view",{staticClass:"ranking"},[t._v("#")]),a("v-uni-view",{staticClass:"avatar"},[t._v("头像")]),a("v-uni-view",{staticClass:"number"},[t._v("名称")]),a("v-uni-view",{staticClass:"operation"},[t._v("操作")])],1),a("v-uni-view",{staticClass:"hongren",style:{top:t.height+88+"px"}},[t._l(t.manage,(function(e,i){return a("v-uni-view",{key:i,staticClass:"list"},[i<3?a("v-uni-view",{staticClass:"ranking cor-e8"},[t._v(t._s(i+1))]):t._e(),i>=3?a("v-uni-view",{staticClass:"ranking "},[t._v(t._s(i+1))]):t._e(),a("v-uni-view",{staticClass:"avatar"},[a("img",{attrs:{src:e["avatar"],mode:"widthFix"}})]),a("v-uni-view",{staticClass:"number"},[a("v-uni-view",{staticClass:"title ellipsis2"},[t._v(t._s(e.nickname))]),1==e.examine?a("v-uni-view",{staticClass:"cu-tag round bg-grey light sm"},[t._v("审核中")]):t._e(),2==e.examine?a("v-uni-view",{staticClass:"cu-tag round bg-grey light sm"},[t._v("审核通过")]):t._e(),3==e.examine?a("v-uni-view",{staticClass:"cu-tag round bg-grey light sm"},[t._v("审核未通过")]):t._e()],1),1!=e.examine?a("v-uni-view",{staticClass:"operation"},[a("span",{staticClass:"cuIcon-writefill text-green",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage("user/attewh",e.id)}}}),a("span",{staticClass:"cuIcon-deletefill text-red",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cewebritydel(e.id)}}})]):t._e()],1)})),""==t.manage&&t.manage.length<=0?a("v-uni-view",{staticClass:"no-data"},[t._v("暂无入驻红人")]):t._e(),a("v-uni-view",{staticClass:"padding-xl"},[t.paymentbtn?a("v-uni-view",{staticClass:"paymentbtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("user/attewh")}}},[t._v("入驻红人（"+t._s(t.managelength)+"/20）")]):a("v-uni-view",{staticClass:"paymentbtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.publishnum.apply(void 0,arguments)}}},[t._v("入驻红人（"+t._s(t.managelength)+"/20）")])],1)],2)],1)},s=[]},dfd2:function(t,e,a){"use strict";a.r(e);var i=a("b5d5"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a}}]);