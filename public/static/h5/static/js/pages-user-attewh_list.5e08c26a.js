(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-attewh_list"],{"0119":function(t,a,i){"use strict";i.r(a);var e=i("d770"),n=i("8b08");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("5e81");var o,r=i("f0c5"),u=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"a4fad2b4",null,!1,e["a"],o);a["default"]=u.exports},"05ef":function(t,a,i){"use strict";i("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=e},"264e":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".hongren[data-v-a4fad2b4]{bottom:0;z-index:200}.category[data-v-a4fad2b4]{padding:0 3vw;font-size:4vw;color:#999;position:fixed;width:100%;height:44px;line-height:44px;z-index:202;background:#f7f7f7;-webkit-box-shadow:0 1px 2px rgba(26,26,26,.1);box-shadow:0 1px 2px rgba(26,26,26,.1);display:-webkit-box;display:-webkit-flex;display:flex;text-align:center}.list .ranking[data-v-a4fad2b4],\r\n.category .ranking[data-v-a4fad2b4]{width:8vw}.list .avatar[data-v-a4fad2b4],\r\n.category .avatar[data-v-a4fad2b4]{width:15vw}.list .number[data-v-a4fad2b4],\r\n.category .number[data-v-a4fad2b4]{text-align:left;padding-left:3vw;-webkit-box-flex:1;-webkit-flex:1;flex:1}.list .operation[data-v-a4fad2b4],\r\n.category .operation[data-v-a4fad2b4]{text-align:right;width:14vw}.list[data-v-a4fad2b4]{padding:3vw;display:-webkit-box;display:-webkit-flex;display:flex}.list[data-v-a4fad2b4]:nth-of-type(even){background:#fcfbff}.list .ranking[data-v-a4fad2b4]{font-size:4.5vw;text-align:center;line-height:15vw}.list .avatar[data-v-a4fad2b4]{width:15vw;height:15vw}.list .avatar img[data-v-a4fad2b4]{width:100%;height:100%;-webkit-border-radius:50%;border-radius:50%}.list .number[data-v-a4fad2b4]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.list .number .title[data-v-a4fad2b4]{height:10vw;line-height:10vw}.list[data-v-a4fad2b4]:last-child{margin-bottom:0}.list .operation span[data-v-a4fad2b4]{line-height:15vw;font-size:5vw}.list .operation .cuIcon-writefill[data-v-a4fad2b4]{margin-right:2vw}.paymentbtn[data-v-a4fad2b4]{font-size:4.8vw;font-weight:700;margin:auto;width:80vw;text-align:center;line-height:12vw;-webkit-border-radius:12vw;border-radius:12vw;background-color:#e71d36;color:#fff;-webkit-box-shadow:0 0 0 3px hsla(0,0%,87.1%,.3);box-shadow:0 0 0 3px hsla(0,0%,87.1%,.3)}",""]),t.exports=a},3734:function(t,a,i){"use strict";i.r(a);var e=i("c2d5"),n=i("75eb");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("d973");var o,r=i("f0c5"),u=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"525162bc",null,!1,e["a"],o);a["default"]=u.exports},"4fb0":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.cu-bar[data-v-525162bc]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-525162bc]{margin-left:3vw;height:30px}.cuIcon-back[data-v-525162bc]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-525162bc]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-525162bc]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-525162bc]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-525162bc]{width:auto}.cuIcon-close[data-v-525162bc]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=a},5713:function(t,a,i){var e=i("4fb0");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("645c1318",e,!0,{sourceMap:!1,shadowMode:!1})},"5c2a":function(t,a,i){"use strict";var e=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("3734")),s={components:{uniTopBar:n.default},data:function(){return{manage:"",managelength:0,paymentbtn:!0,userInfo:"",height:"",toptitle:"入驻中心",within:"https://www.hongrensutui.com/h5/img/ruzhu_logo_left.png"}},onShow:function(){var t=this;this.height=this.StatusBar,uni.getStorage({key:"userInfo",success:function(a){t.getuserinfo(a.data.id)}})},methods:{getuserinfo:function(t){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){a.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.Releaselist(a.userInfo.id)}})},Releaselist:function(t){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/Releaselist",data:{mid:t},method:"POST",success:function(t){t.data.data.info?(a.manage=t.data.data.info,a.managelength=a.manage.length,a.managelength>=20&&(a.paymentbtn=!1)):a.manage=""}})},publishnum:function(){uni.showToast({title:"红人入驻已达上限！",icon:"none",duration:3e3})},cewebritydel:function(t){var a=this;uni.showModal({title:"提示",content:"您确定要删除该红人么？",success:function(i){i.confirm&&uni.request({url:"https://www.hongrensutui.com/api/index/cewebritydel",data:{id:t},method:"POST",success:function(t){uni.showToast({title:t.data.data.msg,icon:"none",duration:2e3}),a.Releaselist(a.userInfo.id)}})}})},navToDetailPage:function(t,a){a&&(t=t+"?id="+a),uni.navigateTo({url:"/pages/"+t})}}};a.default=s},"5e81":function(t,a,i){"use strict";var e=i("fcd9"),n=i.n(e);n.a},"75eb":function(t,a,i){"use strict";i.r(a);var e=i("05ef"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},"8b08":function(t,a,i){"use strict";i.r(a);var e=i("5c2a"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},c2d5:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):i("span",[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])])]):i("span",[t.within?i("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},d770:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("uni-top-bar",{attrs:{title:t.toptitle,within:t.within}}),i("v-uni-view",{staticClass:"category clearfix",style:{top:t.height+43+"px"}},[i("v-uni-view",{staticClass:"ranking"},[t._v("#")]),i("v-uni-view",{staticClass:"avatar"},[t._v("头像")]),i("v-uni-view",{staticClass:"number"},[t._v("名称")]),i("v-uni-view",{staticClass:"operation"},[t._v("操作")])],1),i("v-uni-view",{staticClass:"hongren",style:{top:t.height+88+"px"}},[t._l(t.manage,(function(a,e){return i("v-uni-view",{key:e,staticClass:"list"},[e<3?i("v-uni-view",{staticClass:"ranking cor-e8"},[t._v(t._s(e+1))]):t._e(),e>=3?i("v-uni-view",{staticClass:"ranking "},[t._v(t._s(e+1))]):t._e(),i("v-uni-view",{staticClass:"avatar"},[i("img",{attrs:{src:a["avatar"],mode:"widthFix"}})]),i("v-uni-view",{staticClass:"number"},[i("v-uni-view",{staticClass:"title ellipsis2"},[t._v(t._s(a.nickname))]),1==a.examine?i("v-uni-view",{staticClass:"cu-tag round bg-grey light sm"},[t._v("审核中")]):t._e(),2==a.examine?i("v-uni-view",{staticClass:"cu-tag round bg-grey light sm"},[t._v("审核通过")]):t._e(),3==a.examine?i("v-uni-view",{staticClass:"cu-tag round bg-grey light sm"},[t._v("审核未通过")]):t._e()],1),1!=a.examine?i("v-uni-view",{staticClass:"operation"},[i("span",{staticClass:"cuIcon-writefill text-green",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage("user/attewh",a.id)}}}),i("span",{staticClass:"cuIcon-deletefill text-red",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.cewebritydel(a.id)}}})]):t._e()],1)})),""==t.manage&&t.manage.length<=0?i("v-uni-view",{staticClass:"no-data"},[t._v("暂无入驻红人")]):t._e(),i("v-uni-view",{staticClass:"padding-xl"},[t.paymentbtn?i("v-uni-view",{staticClass:"paymentbtn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage("user/attewh")}}},[t._v("入驻红人（"+t._s(t.managelength)+"/20）")]):i("v-uni-view",{staticClass:"paymentbtn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.publishnum.apply(void 0,arguments)}}},[t._v("入驻红人（"+t._s(t.managelength)+"/20）")])],1)],2)],1)},s=[]},d973:function(t,a,i){"use strict";var e=i("5713"),n=i.n(e);n.a},fcd9:function(t,a,i){var e=i("264e");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("4a3d591a",e,!0,{sourceMap:!1,shadowMode:!1})}}]);