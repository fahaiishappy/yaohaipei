(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-supply_list"],{"05ef":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=n},"1cb0":function(t,e,a){var n=a("627e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("b68b7a92",n,!0,{sourceMap:!1,shadowMode:!1})},3174:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?a("span",{staticClass:"clearfix"},[t.within?a("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):a("span",[t.title?a("span",{staticClass:"title"},[t._v(t._s(t.title))]):a("span",{staticClass:"title"},[t._v("红人速推")])])]):a("span",[t.within?a("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):a("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},3734:function(t,e,a){"use strict";a.r(e);var n=a("3174"),i=a("75eb");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("3804");var r,o=a("f0c5"),d=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"07edaae6",null,!1,n["a"],r);e["default"]=d.exports},3804:function(t,e,a){"use strict";var n=a("1cb0"),i=a.n(n);i.a},"627e":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},"75eb":function(t,e,a){"use strict";a.r(e);var n=a("05ef"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"859c":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".hongren[data-v-4751d59e]{padding-top:3vw;background-color:#fff;bottom:0;z-index:200}.category[data-v-4751d59e]{padding:0 3vw;font-size:4vw;color:#999;position:fixed;width:100%;height:44px;line-height:44px;z-index:202;background:#f7f7f7;-webkit-box-shadow:0 1px 2px rgba(26,26,26,.1);box-shadow:0 1px 2px rgba(26,26,26,.1);display:-webkit-box;display:-webkit-flex;display:flex;text-align:center}.list .ranking[data-v-4751d59e],\r\n.category .ranking[data-v-4751d59e]{width:8vw}.list .avatar[data-v-4751d59e],\r\n.category .avatar[data-v-4751d59e]{width:15vw}.list .number[data-v-4751d59e],\r\n.category .number[data-v-4751d59e]{text-align:left;-webkit-box-flex:1;-webkit-flex:1;flex:1}.list .operation[data-v-4751d59e],\r\n.category .operation[data-v-4751d59e]{text-align:right;width:14vw}.list[data-v-4751d59e]{margin:0 3vw 3vw 3vw;padding:3vw;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fdfdfd;-webkit-box-shadow:1px 1px 2px hsla(0,0%,39.2%,.1);box-shadow:1px 1px 2px hsla(0,0%,39.2%,.1);-webkit-border-radius:1.5vw;border-radius:1.5vw;position:relative}.list .examine[data-v-4751d59e]{position:absolute;top:0;right:0;-webkit-border-top-right-radius:1.5vw;border-top-right-radius:1.5vw;-webkit-border-bottom-left-radius:1.5vw;border-bottom-left-radius:1.5vw}.list[data-v-4751d59e]:last-child{margin-bottom:0}.list[data-v-4751d59e]:nth-of-type(even){background:#fcfbff}.list .ranking[data-v-4751d59e]{font-size:4.5vw;text-align:center;line-height:24vw}.list .avatar[data-v-4751d59e]{width:15vw;height:15vw}.list .avatar img[data-v-4751d59e]{width:100%;height:100%;-webkit-border-radius:50%;border-radius:50%}.list .number[data-v-4751d59e]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.list .number .title[data-v-4751d59e]{height:6vw;font-size:4vw;font-weight:700;line-height:6vw}.list .number .platform[data-v-4751d59e],\r\n.list .number .fansendtime[data-v-4751d59e],\r\n.list .number .field[data-v-4751d59e]{line-height:6vw;font-size:10px}.list .number .fansendtime .fans[data-v-4751d59e]{margin-right:2vw}.list[data-v-4751d59e]:last-child{margin-bottom:0}.list .operation span[data-v-4751d59e]{line-height:24vw;font-size:5vw}.list .operation .text-orange[data-v-4751d59e]{font-size:3.8vw}.list .operation .cuIcon-writefill[data-v-4751d59e]{margin-right:2vw}.paymentbtn[data-v-4751d59e]{font-size:4.8vw;font-weight:700;margin:auto;width:80vw;text-align:center;line-height:12vw;-webkit-border-radius:12vw;border-radius:12vw;background-color:#e71d36;color:#fff;-webkit-box-shadow:0 0 0 3px hsla(0,0%,87.1%,.3);box-shadow:0 0 0 3px hsla(0,0%,87.1%,.3)}",""]),t.exports=e},8786:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("3734")),s={components:{uniTopBar:i.default},filters:{formatDate:function(t){var e=new Date(1e3*t),a=e.getFullYear(),n=e.getMonth()+1;n=n<10?"0"+n:n;var i=e.getDate();i=i<10?"0"+i:i;var s=e.getHours();s=s<10?"0"+s:s;var r=e.getMinutes();r=r<10?"0"+r:r;var o=e.getSeconds();return o=o<10?"0"+o:o,a+"-"+n+"-"+i}},data:function(){return{manage:"",managelength:0,paymentbtn:!0,userInfo:"",height:"",number:5}},onShow:function(){var t=this;this.height=this.StatusBar,uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&(t.userInfo=e.data,t.getuserinfo())}})},methods:{getuserinfo:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t.userInfo.id},method:"POST",success:function(e){uni.setStorageSync("userInfo",e.data.data.info),t.userInfo=e.data.data.info,1==t.userInfo.type&&t.supplylistsj()}})},supplylistsj:function(){var t=this;if(t.userInfo.bind_id>0)var e=t.userInfo.bind_id;else e=t.userInfo.id;uni.request({url:"https://www.hongrensutui.com/api/index/supplylistsj",data:{mid:e},method:"POST",success:function(e){t.manage=e.data.data.info,t.managelength=t.manage.length,2==t.userInfo.card_id&&(t.number=5,t.managelength>=5&&(t.paymentbtn=!1)),3==t.userInfo.card_id&&(t.number=20,t.managelength>=20&&(t.paymentbtn=!1))}})},publishnum:function(){uni.showToast({title:"商品发布已达上限！",icon:"none",duration:3e3})},supplydel:function(t){var e=this;uni.showModal({title:"提示",content:"您确定要删除该供求信息么？",success:function(a){a.confirm&&uni.request({url:"https://www.hongrensutui.com/api/index/supplydel",data:{id:t},method:"POST",success:function(t){uni.showToast({title:t.data.data.msg,icon:"none",duration:2e3}),e.supplylistsj()}})}})},supply:function(t){1==t&&uni.navigateTo({url:"/pages/user/supplysj"}),2==t&&uni.navigateTo({url:"/pages/user/supplywh"})},navToDetailPage:function(t,e){e&&(t=t+"?id="+e),uni.navigateTo({url:"/pages/"+t})}}};e.default=s},"88ba":function(t,e,a){"use strict";a.r(e);var n=a("e636"),i=a("ab35");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("8dc5");var r,o=a("f0c5"),d=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"4751d59e",null,!1,n["a"],r);e["default"]=d.exports},"897f":function(t,e,a){var n=a("859c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5101c5d1",n,!0,{sourceMap:!1,shadowMode:!1})},"8dc5":function(t,e,a){"use strict";var n=a("897f"),i=a.n(n);i.a},ab35:function(t,e,a){"use strict";a.r(e);var n=a("8786"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},e636:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("uni-top-bar"),a("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[t._l(t.manage,(function(e,n){return a("v-uni-view",{key:n,staticClass:"list"},[2==e.examine?a("span",{staticClass:"cu-tag bg-green sm examine"},[t._v("审核通过")]):t._e(),3==e.examine?a("span",{staticClass:"cu-tag bg-red sm examine"},[t._v("审核未通过")]):t._e(),a("v-uni-view",{staticClass:"number"},[a("v-uni-view",{staticClass:"title ellipsis2"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"platform text-grey"},[t._v("平台要求："),t._l(e.platform,(function(e,n){return a("span",{key:n,staticClass:"cu-tag round light bg-orange sm"},[t._v(t._s(e))])}))],2),a("v-uni-view",{staticClass:"field text-grey"},[t._v("所属分类："),t._l(e.category,(function(e,n){return n<3?a("span",{key:n,staticClass:"cu-tag round light bg-brown sm"},[t._v(t._s(e))]):t._e()}))],2),a("v-uni-view",{staticClass:"fansendtime"},[e.fans>0?a("span",{staticClass:"fans text-grey"},[t._v("粉丝要求："+t._s(e.fans)+"w")]):a("span",{staticClass:"fans text-grey"},[t._v("粉丝要求："+t._s(e.fans))]),a("span",{staticClass:"endtime text-grey"},[t._v("截止时间："+t._s(t._f("formatDate")(e.endtime)))])])],1),1!=e.examine?a("v-uni-view",{staticClass:"operation"},[a("span",{staticClass:"cuIcon-writefill text-green",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage("user/supplysj",e.id)}}}),a("span",{staticClass:"cuIcon-deletefill text-red",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.supplydel(e.id)}}})]):a("v-uni-view",{staticClass:"operation"},[1==e.examine?a("span",{staticClass:"text-orange"},[t._v("审核中")]):t._e()])],1)})),""==t.manage&&t.manage.length<=0?a("v-uni-view",{staticClass:"no-data"},[t._v("暂无供求")]):t._e(),a("v-uni-view",{staticClass:"padding-xl"},[t.paymentbtn?a("v-uni-view",{staticClass:"paymentbtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.supply(t.userInfo.type)}}},[t._v("发布供求信息（"+t._s(t.managelength)+"/"+t._s(t.number)+"）")]):a("v-uni-view",{staticClass:"paymentbtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.publishnum.apply(void 0,arguments)}}},[t._v("发布供求信息（"+t._s(t.managelength)+"/"+t._s(t.number)+"）")])],1)],2)],1)},s=[]}}]);