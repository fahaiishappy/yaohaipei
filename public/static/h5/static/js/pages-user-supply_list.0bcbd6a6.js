(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-supply_list"],{"107e":function(t,a,e){"use strict";e.r(a);var i=e("39b9"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"1d83":function(t,a,e){"use strict";var i,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("uni-top-bar"),e("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[t._l(t.manage,(function(a,i){return e("v-uni-view",{key:i,staticClass:"list"},[2==a.examine?e("span",{staticClass:"cu-tag bg-green sm examine"},[t._v("审核通过")]):t._e(),3==a.examine?e("span",{staticClass:"cu-tag bg-red sm examine"},[t._v("审核未通过")]):t._e(),e("v-uni-view",{staticClass:"number"},[e("v-uni-view",{staticClass:"title ellipsis2"},[t._v(t._s(a.title))]),e("v-uni-view",{staticClass:"platform text-grey"},[t._v("平台要求："),t._l(a.platform,(function(a,i){return e("span",{key:i,staticClass:"cu-tag round light bg-orange sm"},[t._v(t._s(a))])}))],2),e("v-uni-view",{staticClass:"field text-grey"},[t._v("领域要求："),t._l(a.category,(function(a,i){return e("span",{key:i,staticClass:"cu-tag round light bg-brown sm"},[t._v(t._s(a))])}))],2),e("v-uni-view",{staticClass:"fansendtime"},[a.fans>0?e("span",{staticClass:"fans text-grey"},[t._v("粉丝要求："+t._s(a.fans)+"w")]):e("span",{staticClass:"fans text-grey"},[t._v("粉丝要求："+t._s(a.fans))]),e("span",{staticClass:"endtime text-grey"},[t._v("截止时间："+t._s(t._f("formatDate")(a.endtime)))])])],1),1!=a.examine?e("v-uni-view",{staticClass:"operation"},[e("span",{staticClass:"cuIcon-writefill text-green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("user/supplysj",a.id)}}}),e("span",{staticClass:"cuIcon-deletefill text-red",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.supplydel(a.id)}}})]):e("v-uni-view",{staticClass:"operation"},[1==a.examine?e("span",{staticClass:"text-orange"},[t._v("审核中")]):t._e()])],1)})),""==t.manage&&t.manage.length<=0?e("v-uni-view",{staticClass:"no-data"},[t._v("暂无供求")]):t._e(),e("v-uni-view",{staticClass:"padding-xl"},[t.paymentbtn?e("v-uni-view",{staticClass:"paymentbtn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.supply(t.userInfo.type)}}},[t._v("发布供求信息（"+t._s(t.managelength)+"/20）")]):e("v-uni-view",{staticClass:"paymentbtn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.publishnum.apply(void 0,arguments)}}},[t._v("发布供求信息（"+t._s(t.managelength)+"/20）")])],1)],2)],1)},o=[];e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}))},3366:function(t,a,e){"use strict";var i=e("d164"),n=e.n(i);n.a},"39b9":function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=i},"6cc6":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.auth[data-v-0ac588e7]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-0ac588e7]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-0ac588e7]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-0ac588e7]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-0ac588e7]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-0ac588e7]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-0ac588e7]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-0ac588e7]{height:100vh;z-index:300}.cu-bar[data-v-0ac588e7]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-0ac588e7]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-0ac588e7]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-0ac588e7]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-0ac588e7]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-0ac588e7]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-0ac588e7]{width:auto}.cuIcon-close[data-v-0ac588e7]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=a},"6fa2":function(t,a,e){"use strict";e.r(a);var i=e("1d83"),n=e("7fe1");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("3366");var s,r=e("f0c5"),l=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"6404bc3f",null,!1,i["a"],s);a["default"]=l.exports},"6fc3":function(t,a,e){var i=e("6cc6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("129094d4",i,!0,{sourceMap:!1,shadowMode:!1})},"7fe1":function(t,a,e){"use strict";e.r(a);var i=e("f450"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"8ca3":function(t,a,e){"use strict";var i=e("6fc3"),n=e.n(i);n.a},c74f:function(t,a,e){"use strict";var i,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?e("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[e("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?e("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():e("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?e("span",[t.title?e("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):e("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?e("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img?e("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()])])},o=[];e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}))},d164:function(t,a,e){var i=e("f186");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("7c7e841a",i,!0,{sourceMap:!1,shadowMode:!1})},d654:function(t,a,e){"use strict";e.r(a);var i=e("c74f"),n=e("107e");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("8ca3");var s,r=e("f0c5"),l=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"0ac588e7",null,!1,i["a"],s);a["default"]=l.exports},f186:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".hongren[data-v-6404bc3f]{padding-top:3vw;background-color:#fff;bottom:0;z-index:200}.category[data-v-6404bc3f]{padding:0 3vw;font-size:4vw;color:#999;position:fixed;width:100%;height:44px;line-height:44px;z-index:202;background:#f7f7f7;box-shadow:0 1px 2px rgba(26,26,26,.1);display:-webkit-box;display:-webkit-flex;display:flex;text-align:center}.list .ranking[data-v-6404bc3f],\r\n.category .ranking[data-v-6404bc3f]{width:8vw}.list .avatar[data-v-6404bc3f],\r\n.category .avatar[data-v-6404bc3f]{width:15vw}.list .number[data-v-6404bc3f],\r\n.category .number[data-v-6404bc3f]{text-align:left;-webkit-box-flex:1;-webkit-flex:1;flex:1}.list .operation[data-v-6404bc3f],\r\n.category .operation[data-v-6404bc3f]{text-align:right;width:14vw}.list[data-v-6404bc3f]{margin:0 3vw 3vw 3vw;padding:3vw;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fdfdfd;box-shadow:1px 1px 2px hsla(0,0%,39.2%,.1);border-radius:1.5vw;position:relative}.list .examine[data-v-6404bc3f]{position:absolute;top:0;right:0;border-top-right-radius:1.5vw;border-bottom-left-radius:1.5vw}.list[data-v-6404bc3f]:last-child{margin-bottom:0}.list[data-v-6404bc3f]:nth-of-type(even){background:#fcfbff}.list .ranking[data-v-6404bc3f]{font-size:4.5vw;text-align:center;line-height:24vw}.list .avatar[data-v-6404bc3f]{width:15vw;height:15vw}.list .avatar img[data-v-6404bc3f]{width:100%;height:100%;border-radius:50%}.list .number[data-v-6404bc3f]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.list .number .title[data-v-6404bc3f]{height:6vw;font-size:4vw;font-weight:700;line-height:6vw}.list .number .platform[data-v-6404bc3f],\r\n.list .number .fansendtime[data-v-6404bc3f],\r\n.list .number .field[data-v-6404bc3f]{line-height:6vw;font-size:10px}.list .number .fansendtime .fans[data-v-6404bc3f]{margin-right:2vw}.list[data-v-6404bc3f]:last-child{margin-bottom:0}.list .operation span[data-v-6404bc3f]{line-height:24vw;font-size:5vw}.list .operation .text-orange[data-v-6404bc3f]{font-size:3.8vw}.list .operation .cuIcon-writefill[data-v-6404bc3f]{margin-right:2vw}.paymentbtn[data-v-6404bc3f]{font-size:4.8vw;font-weight:700;margin:auto;width:80vw;text-align:center;line-height:12vw;border-radius:12vw;background-color:#e71d36;color:#fff;box-shadow:0 0 0 3px hsla(0,0%,87.1%,.3)}",""]),t.exports=a},f450:function(t,a,e){"use strict";var i=e("ee27");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("d654")),o={components:{uniTopBar:n.default},filters:{formatDate:function(t){var a=new Date(1e3*t),e=a.getFullYear(),i=a.getMonth()+1;i=i<10?"0"+i:i;var n=a.getDate();n=n<10?"0"+n:n;var o=a.getHours();o=o<10?"0"+o:o;var s=a.getMinutes();s=s<10?"0"+s:s;var r=a.getSeconds();return r=r<10?"0"+r:r,e+"-"+i+"-"+n}},data:function(){return{manage:"",managelength:0,paymentbtn:!0,userInfo:"",height:""}},onShow:function(){var t=this;this.height=this.StatusBar,uni.getStorage({key:"userInfo",success:function(a){""!=a.data&&null!=a.data&&(t.userInfo=a.data,t.getuserinfo())}})},methods:{getuserinfo:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t.userInfo.id},method:"POST",success:function(a){uni.setStorageSync("userInfo",a.data.data.info),t.userInfo=a.data.data.info,1==t.userInfo.type&&t.supplylistsj()}})},supplylistsj:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/supplylistsj",data:{mid:t.userInfo.id},method:"POST",success:function(a){t.manage=a.data.data.info,t.managelength=t.manage.length,t.managelength>=20&&(t.paymentbtn=!1)}})},publishnum:function(){uni.showToast({title:"红人入驻已达上限！",icon:"none",duration:3e3})},supplydel:function(t){var a=this;uni.showModal({title:"提示",content:"您确定要删除该供求信息么？",success:function(e){e.confirm&&uni.request({url:"https://www.hongrensutui.com/api/index/supplydel",data:{id:t},method:"POST",success:function(t){uni.showToast({title:t.data.data.msg,icon:"none",duration:2e3}),a.supplylistsj()}})}})},supply:function(t){1==t&&uni.navigateTo({url:"/pages/user/supplysj"}),2==t&&uni.navigateTo({url:"/pages/user/supplywh"})},navToDetailPage:function(t,a){a&&(t=t+"?id="+a),uni.navigateTo({url:"/pages/"+t})}}};a.default=o}}]);