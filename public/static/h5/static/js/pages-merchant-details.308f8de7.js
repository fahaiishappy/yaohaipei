(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-merchant-details"],{"0f5e":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=i},6784:function(t,e,a){var i=a("b00e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("4e170726",i,!0,{sourceMap:!1,shadowMode:!1})},"83cd":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?a("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[a("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?a("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():a("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?a("span",[t.title?a("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):a("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?a("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img&&1==t.barid?a("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e(),t.img&&1!=t.barid?a("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right2.png"}}):t._e()])])},s=[]},"83d4":function(t,e,a){"use strict";a.r(e);var i=a("d2f4"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"9b8e":function(t,e,a){"use strict";a.r(e);var i=a("0f5e"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},aa9f:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.auth[data-v-9df7cb58]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-9df7cb58]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-9df7cb58]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-9df7cb58]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-9df7cb58]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-9df7cb58]{height:100vh;z-index:300}.cu-bar[data-v-9df7cb58]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-9df7cb58]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-9df7cb58]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-9df7cb58]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-9df7cb58]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9df7cb58]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9df7cb58]{width:auto}.cuIcon-close[data-v-9df7cb58]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=e},ac76:function(t,e,a){"use strict";var i=a("6784"),n=a.n(i);n.a},b00e:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.tipnews[data-v-10c029e9]{height:15vw;position:fixed;color:#fff;z-index:999999;top:12vw}.hongren[data-v-10c029e9]{bottom:auto;box-shadow:0 1px 2px rgba(26,26,26,.1)}.head[data-v-10c029e9]{display:-webkit-box;display:-webkit-flex;display:flex;background-color:#e71d36;width:100vw;height:100px;padding:12px 3vw}.head .logo[data-v-10c029e9]{height:20vw;text-align:center}.head .logo img[data-v-10c029e9]{width:20vw;height:20vw;margin-right:3vw;border-radius:1.5vw}.head .conpany .title[data-v-10c029e9]{color:#fff;font-size:5vw;line-height:12vw}.head .conpany .title .name[data-v-10c029e9]{vertical-align:middle}.head .conpany .title .renzheng[data-v-10c029e9]{width:14vw;vertical-align:middle;margin-left:1vw}.head .conpany .num[data-v-10c029e9]{color:#fff;font-size:3.5vw}.hongren-content[data-v-10c029e9]{position:fixed;left:0;right:0;bottom:0;padding-bottom:44px;overflow-y:scroll;overflow-x:hidden;-webkit-transform:translateZ(0);transform:translateZ(0)}.action.avatar[data-v-10c029e9]{text-align:right}.action[data-v-10c029e9]{-webkit-box-flex:3;-webkit-flex:3;flex:3}.topimg[data-v-10c029e9]{width:100vw;height:100vw;position:relative}.topimg img[data-v-10c029e9]{width:100%;height:100%}.topimg .title[data-v-10c029e9]{background-image:url(https://www.hongrensutui.com/h5/img/anli_bg.png);background-repeat:repeat-x;background-position:bottom;position:absolute;left:0;bottom:0;right:0;height:45px;padding-left:4vw;font-weight:700;color:#fff;line-height:50px;font-size:4.4vw;font-size:500}\n/* 联系客服 */.customer[data-v-10c029e9]{height:10vw;line-height:10vw;margin:auto;font-size:4vw;text-align:center;z-index:9990}.customer .bottombtn[data-v-10c029e9]{width:94vw;height:100%;margin:auto;color:#fff;border-radius:10vw}.customer .bottombtn .offerbtn[data-v-10c029e9]{width:50%;float:left;background-color:#203c60;border-top-left-radius:1.5vw;border-bottom-left-radius:1.5vw}.customer .bottombtn .custbtn[data-v-10c029e9]{width:50%;float:left;background-color:#e71d36;border-top-right-radius:1.5vw;border-bottom-right-radius:1.5vw}.cu-tag[data-v-10c029e9]{margin:5px}\n/* 联系客服弹框*/.cu-modal[data-v-10c029e9]{z-index:210}.cu-dialog[data-v-10c029e9]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-10c029e9]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-10c029e9]{width:auto}.cuIcon-close[data-v-10c029e9]:before{background-color:rgba(0,0,0,.5);padding:3vw;border-radius:50%}.service[data-v-10c029e9]{padding:3vw;background-color:#fff;border-radius:1.5vw}.service .wechat[data-v-10c029e9]{width:200px;height:200px;border-radius:3vw}.service .tip[data-v-10c029e9]{color:#333;margin-bottom:2vw;font-size:3.4vw}.member[data-v-10c029e9]{width:100vw;padding:3vw}.member .item[data-v-10c029e9]{width:100%;height:24vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:3vw;background-color:#fdfdfd;padding:2vw;border-radius:1.5vw;box-shadow:0 1px 2px rgba(26,26,26,.1)}.member .item .img[data-v-10c029e9]{width:20vw;height:20vw;border-radius:1.5vw;margin-right:2vw}.member .item .img uni-image[data-v-10c029e9]{width:100%;height:100%;border-radius:1.5vw}.member .item .count[data-v-10c029e9]{width:68vw;height:20vw}.member .item .name[data-v-10c029e9]{font-size:3.5vw;height:10vw;padding:1vw 0;line-height:4vw;width:100%}.member .item .fans[data-v-10c029e9]{font-size:3vw;line-height:5vw}.member .item .fans .nowprice[data-v-10c029e9]{font-size:4vw;font-weight:700;margin-right:2vw}.member .item .fans .totalprice[data-v-10c029e9]{font-size:3vw;text-decoration:line-through}.member .item .time[data-v-10c029e9]{font-size:2.5vw;line-height:4vw}.member .item .time .commission[data-v-10c029e9]{margin-right:2vw}.cu-list.menu[data-v-10c029e9]{padding:0 3vw;background-color:#fff}.cu-list+.cu-list[data-v-10c029e9]{margin-top:3vw}.cu-list.menu>.cu-item[data-v-10c029e9]{\n\t/* min-height:40px; */padding:0}.group[data-v-10c029e9]{padding:3vw}.group .cu-avatar.sm[data-v-10c029e9]{margin-left:0;margin:.8vw}.supplytitle[data-v-10c029e9]{padding:3vw 0;font-size:4vw;font-weight:700;position:relative}.borderleft[data-v-10c029e9]{text-indent:3vw}.borderleft[data-v-10c029e9]::after{content:"";width:2vw;height:10vw;background-color:#e71d36;left:0;top:3.5vw}.supplytitle.top[data-v-10c029e9]{font-size:5vw}.supplydetails[data-v-10c029e9]{padding:3vw 0}.supplydetailsimg img[data-v-10c029e9]{width:100%;display:block}.cu-avatar[data-v-10c029e9]{border-radius:1vw}',""]),t.exports=e},b17d:function(t,e,a){var i=a("aa9f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("2d0d384a",i,!0,{sourceMap:!1,shadowMode:!1})},c4f3:function(t,e,a){"use strict";var i=a("b17d"),n=a.n(i);n.a},d16b:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("uni-top-bar",{attrs:{title:t.toptitle}}),t.message?a("v-uni-view",{staticClass:"tipnews"},[t.tip?a("v-uni-view",{staticClass:"animated1 fadeInRight"},[a("v-uni-view",{staticClass:"cuIcon-notificationfill"}),a("span",[a("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),a("span",[t._v("红人"+t._s(t.message.celebrity))]),t._v("查看了"),a("span",[t._v("该商家")])])],1):t._e()],1):t._e(),a("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[a("v-uni-view",{staticClass:"head"},[a("v-uni-view",{staticClass:"logo"},[a("img",{attrs:{src:t.merchant["logo"]}})]),a("v-uni-view",{staticClass:"conpany"},[a("v-uni-view",{staticClass:"title"},[a("span",{staticClass:"name"},[t._v(t._s(t.merchant.title))])]),t.merchant.category?a("v-uni-view",{staticClass:"action"},t._l(t.merchant.category,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-tag sm round bg-grey light",staticStyle:{margin:"0"}},[t._v(t._s(e))])})),1):a("v-uni-view",{staticClass:"action"},[t._v("不限")])],1)],1)],1),a("v-uni-view",{staticClass:"hongren-content",style:{top:t.height+143+"px"}},[a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"cu-list menu"},[a("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("合作信息")]),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("平台要求")])],1),t.merchant.platform?a("v-uni-view",{staticClass:"action"},t._l(t.merchant.platform,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(e))])})),1):a("v-uni-view",{staticClass:"action"},[t._v("不限")])],1),t.merchant.contact?a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("对接商务")])],1),a("v-uni-view",{staticClass:"action"},[t._v(t._s(t.merchant.contact))])],1):t._e(),t.merchant.mobile?a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("联系电话")])],1),a("v-uni-view",{staticClass:"action"},[t._v(t._s(t._f("intercept")(t.merchant.mobile)))])],1):t._e()],1),a("v-uni-view",{staticClass:"cu-list menu"},[t.merchant.detail?a("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("商家简介")]):t._e(),t.merchant.detail?a("v-uni-view",{staticClass:"supplydetails",domProps:{innerHTML:t._s(t.merchant.detail)}}):t._e()],1),t.merchant.purpose?a("v-uni-view",{staticClass:"cu-list menu"},[a("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("查看人数")]),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"group"},[t._l(t.merchant.purpose,(function(t,e){return a("v-uni-view",{key:e,staticClass:"cu-avatar sm",style:{backgroundImage:"url("+t+")"}})})),t.merchant.people>100?a("span",{staticStyle:{"margin-left":"1vw",position:"relative",top:"0.5vw",color:"#8799a3"}},[t._v("等"+t._s(t.merchant.people)+"人")]):t._e()],2)],1)],1)],1):t._e(),t.merchant.purpose?a("v-uni-view",{staticClass:"cu-list menu"},[a("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("讨论留言")]),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"action"})],1)],1):t._e()],1)],1),a("v-uni-view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog",staticStyle:{width:"auto"}},[a("v-uni-view",{staticClass:"bg-img"},[a("v-uni-view",{staticClass:"service"},[a("img",{staticClass:"wechat",attrs:{src:t.config.service,mode:"widthFix"}}),a("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.config.servicetip))])],1),a("v-uni-view",{staticClass:"cu-bar justify-center text-white",staticStyle:{"margin-top":"3vw"}},[a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[a("v-uni-view",{staticClass:"customer round shadow text-center"},[a("v-uni-view",{staticClass:"bottombtn clearfix"},[a("v-uni-view",{staticClass:"offerbtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("user/atte")}}},[t._v("商家入驻")]),a("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Image"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("联系客服")])],1)],1)],1)],1)},s=[]},d2f4:function(t,e,a){"use strict";var i=a("4ea4");a("d3b7"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("e3d7")),s={components:{uniTopBar:n.default},data:function(){return{modalName:null,merchant:"",yxhz:"",toptitle:"商家详情",userInfo:[],merchantid:"",codetime:2e3,tip:!1,message:"",messagelist:"",height:"",platform:"",config:""}},filters:{intercept:function(t){var e="";return t&&t.length>1&&(e=t[0]+t[1]+t[2]+"****"+t[7]+t[8]+t[9]+t[10]),e}},onLoad:function(t){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/h5config",method:"POST",success:function(t){e.config=t.data.data.list}}),this.height=this.StatusBar,t.id&&(e.merchantid=t.id),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:a.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),e.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.getmerchant()}})},fail:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){e.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.getmerchant()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),e.getRandomArbitrary(0,49),e.getmessage(),e.timerInt=setInterval((function(){if(e.codetime--,e.message=e.messagelist[e.getRandomArbitrary(0,50)],e.message.celebrity&&e.message.celebrity.length>1&&(e.message.celebrity=e.message.celebrity[0]+e.message.celebrity[1]+"***"),e.message.merchant&&e.message.merchant.length>1&&(e.message.merchant=e.message.merchant[0]+e.message.merchant[1]+"***"),e.tip=!e.tip,0==e.codetime)return clearInterval(e.timerInt),void(e.codetime=2e3)}),4e3)},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.updateuser(e.data.id)}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(e.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.getmerchant()):wxlogin()}})},getRandomArbitrary:function(t,e){return Math.floor(Math.random()*(e-t)+t)},getmessage:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(e){t.messagelist=e.data.data.list,t.message=t.messagelist[t.getRandomArbitrary(0,50)],t.message.celebrity&&t.message.celebrity.length>1&&(t.message.celebrity=t.message.celebrity[0]+t.message.celebrity[1]+"***"),t.message.merchant&&t.message.merchant.length>1&&(t.message.merchant=t.message.merchant[0]+t.message.merchant[1]+"***"),t.tip=!t.tip}})},getmerchant:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){t.userInfo=e.data,uni.request({url:"https://www.hongrensutui.com/api/index/onemerchant",data:{id:t.merchantid},method:"POST",success:function(a){t.merchant=a.data.data.list,t.merchant.platform.length>0?t.platform=!0:t.platform=!1,t.share(t.merchant,e.data.company_id,e.data.id)}})},fail:function(e){t.userInfo=e.data,uni.request({url:"https://www.hongrensutui.com/api/index/onemerchant",data:{id:t.merchantid},method:"POST",success:function(e){t.merchant=e.data.data.list,t.merchant.platform.length>0?t.platform=!0:t.platform=!1,t.share(t.merchant,0,0)}})}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},navToDetailPage:function(t){uni.navigateTo({url:"/pages/"+t})},share:function(t){function e(e,a,i){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e,a){var i=t.title+"正在红人速推平台找主播直播带货",n="已有99+个主播联系它纯佣金带货，如果你是网红，就上红人速推找它",s=t.logo;share(i,n,s,a)}))}};e.default=s},e3d7:function(t,e,a){"use strict";a.r(e);var i=a("83cd"),n=a("9b8e");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("c4f3");var o,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"9df7cb58",null,!1,i["a"],o);e["default"]=c.exports},ea7d:function(t,e,a){"use strict";a.r(e);var i=a("d16b"),n=a("83d4");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("ac76");var o,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"10c029e9",null,!1,i["a"],o);e["default"]=c.exports}}]);