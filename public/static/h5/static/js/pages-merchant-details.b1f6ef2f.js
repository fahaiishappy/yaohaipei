(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-merchant-details"],{"0a9c":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?e("span",{staticClass:"clearfix"},[t.within?e("img",{staticClass:"logo_left",style:{marginLeft:"44px"},attrs:{src:t.within,mode:"heightFix"}}):e("span",[t.title?e("span",{staticClass:"title"},[t._v(t._s(t.title))]):e("span",{staticClass:"title"},[t._v("红人速推")])])]):e("span",[t.within?e("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},"1b08":function(t,a,e){"use strict";var i=e("4ea4");e("d3b7"),e("25f0"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("5ad0")),s={components:{uniTopBar:n.default},data:function(){return{modalName:null,merchant:"",yxhz:"",toptitle:"商家详情",userInfo:[],merchantid:"",codetime:2e3,tip:!1,message:"",messagelist:"",height:"",platform:"",config:"",liuyan:"",countent:"",currentuser:!0,notliuyan:"仅本商家可查看!"}},filters:{intercept:function(t){var a="";return t&&t.length>1&&(a=t[0]+t[1]+t[2]+"****"+t[7]+t[8]+t[9]+t[10]),a},nickname:function(t){var a="";return t&&t.length>1&&(a=t[0]+"***"),a}},onLoad:function(t){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/h5config",method:"POST",success:function(t){a.config=t.data.data.list}}),this.height=this.StatusBar,t.id&&(a.merchantid=t.id),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),a.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.getmerchant()}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){a.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.getmerchant()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?a.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),a.getRandomArbitrary(0,49),a.getmessage(),a.timerInt=setInterval((function(){if(a.codetime--,a.message=a.messagelist[a.getRandomArbitrary(0,50)],a.message.celebrity&&a.message.celebrity.length>1&&(a.message.celebrity=a.message.celebrity[0]+a.message.celebrity[1]+"***"),a.message.merchant&&a.message.merchant.length>1&&(a.message.merchant=a.message.merchant[0]+a.message.merchant[1]+"***"),a.tip=!a.tip,0==a.codetime)return clearInterval(a.timerInt),void(a.codetime=2e3)}),4e3)},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(a){""!=a.data&&null!=a.data&&t.updateuser(a.data.id)}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(a.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.getmerchant()):wxlogin()}})},getRandomArbitrary:function(t,a){return Math.floor(Math.random()*(a-t)+t)},getmessage:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(a){t.messagelist=a.data.data.list,t.message=t.messagelist[t.getRandomArbitrary(0,50)],t.message.celebrity&&t.message.celebrity.length>1&&(t.message.celebrity=t.message.celebrity[0]+t.message.celebrity[1]+"***"),t.message.merchant&&t.message.merchant.length>1&&(t.message.merchant=t.message.merchant[0]+t.message.merchant[1]+"***"),t.tip=!t.tip}})},getmerchant:function(){var t=this;uni.getStorage({key:"userInfo",success:function(a){t.userInfo=a.data,uni.request({url:"https://www.hongrensutui.com/api/index/onemerchant",data:{id:t.merchantid},method:"POST",success:function(e){t.merchant=e.data.data.list,t.merchant.platform.length>0?t.platform=!0:t.platform=!1,t.share(t.merchant,a.data.company_id,a.data.id)}})},fail:function(a){t.userInfo=a.data,uni.request({url:"https://www.hongrensutui.com/api/index/onemerchant",data:{id:t.merchantid},method:"POST",success:function(a){t.merchant=a.data.data.list,t.merchant.platform.length>0?t.platform=!0:t.platform=!1,t.share(t.merchant,0,0)}})}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},toliuyan:function(){this.modalName="liuyan"},getliuyan:function(){var t=this;uni.getStorage({key:"userInfo",success:function(a){if(!t.countent)return uni.showToast({title:"留言内容不能为空",icon:"none",duration:3e3}),!1;uni.request({url:"https://www.hongrensutui.com/api/index/getliuyan",data:{title:t.countent,merchantid:t.merchantid,mid:a.data.id,nickname:a.data.nickname,avatar:a.data.avatar},method:"post",dataType:"json",success:function(a){uni.showToast({icon:"none",title:"留言成功！"}),t.modalName=null},fail:function(t){uni.showToast({icon:"none",title:"留言失败！"})}})},fail:function(t){wxlogin()}})},navToDetailPage:function(t){uni.navigateTo({url:"/pages/"+t})},share:function(t){function a(a,e,i){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(t,a,e){var i=t.title+"正在红人速推平台找主播直播带货",n="已有99+个主播联系它纯佣金带货，如果你是网红，就上红人速推找它",s=t.logo;share(i,n,s,e)}))}};a.default=s},4674:function(t,a,e){"use strict";e.r(a);var i=e("7137"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},"5ad0":function(t,a,e){"use strict";e.r(a);var i=e("0a9c"),n=e("4674");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("8234");var c,o=e("f0c5"),r=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"e6b68380",null,!1,i["a"],c);a["default"]=r.exports},7137:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=i},"7b2f":function(t,a,e){"use strict";var i=e("f6ed"),n=e.n(i);n.a},8234:function(t,a,e){"use strict";var i=e("886b"),n=e.n(i);n.a},"886b":function(t,a,e){var i=e("c170");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("10320662",i,!0,{sourceMap:!1,shadowMode:!1})},"8d93":function(t,a,e){"use strict";e.r(a);var i=e("f9b6"),n=e("a705");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("7b2f");var c,o=e("f0c5"),r=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"4c79ad5c",null,!1,i["a"],c);a["default"]=r.exports},a705:function(t,a,e){"use strict";e.r(a);var i=e("1b08"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},c170:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.cu-bar[data-v-e6b68380]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-e6b68380]{margin-left:3vw;height:30px}.cuIcon-back[data-v-e6b68380]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-e6b68380]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-e6b68380]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-e6b68380]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-e6b68380]{width:auto}.cuIcon-close[data-v-e6b68380]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=a},e33f:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.tipnews[data-v-4c79ad5c]{height:15vw;position:fixed;color:#fff;z-index:999999;top:12vw}.hongren[data-v-4c79ad5c]{bottom:auto;-webkit-box-shadow:0 1px 2px rgba(26,26,26,.1);box-shadow:0 1px 2px rgba(26,26,26,.1)}.head[data-v-4c79ad5c]{display:-webkit-box;display:-webkit-flex;display:flex;background-color:#e71d36;width:100vw;height:100px;padding:12px 3vw}.head .logo[data-v-4c79ad5c]{height:20vw;text-align:center}.head .logo img[data-v-4c79ad5c]{width:20vw;height:20vw;margin-right:3vw;-webkit-border-radius:1.5vw;border-radius:1.5vw}.head .conpany .title[data-v-4c79ad5c]{color:#fff;font-size:5vw;line-height:12vw}.head .conpany .title .name[data-v-4c79ad5c]{vertical-align:middle}.head .conpany .title .renzheng[data-v-4c79ad5c]{width:14vw;vertical-align:middle;margin-left:1vw}.head .conpany .num[data-v-4c79ad5c]{color:#fff;font-size:3.5vw}.hongren-content[data-v-4c79ad5c]{position:fixed;left:0;right:0;bottom:0;padding-bottom:44px;overflow-y:scroll;overflow-x:hidden;-webkit-transform:translateZ(0);transform:translateZ(0)}.hongren-content .action.avatar[data-v-4c79ad5c]{text-align:right}.hongren-content .action[data-v-4c79ad5c]{-webkit-box-flex:3;-webkit-flex:3;flex:3}.topimg[data-v-4c79ad5c]{width:100vw;height:100vw;position:relative}.topimg img[data-v-4c79ad5c]{width:100%;height:100%}.topimg .title[data-v-4c79ad5c]{background-image:url(https://www.hongrensutui.com/h5/img/anli_bg.png);background-repeat:repeat-x;background-position:bottom;position:absolute;left:0;bottom:0;right:0;height:45px;padding-left:4vw;font-weight:700;color:#fff;line-height:50px;font-size:4.4vw;font-size:500}\n/* 联系客服 */.customer[data-v-4c79ad5c]{height:10vw;line-height:10vw;margin:auto;font-size:4vw;text-align:center;z-index:9990}.customer .bottombtn[data-v-4c79ad5c]{width:94vw;height:100%;margin:auto;color:#fff;-webkit-border-radius:10vw;border-radius:10vw}.customer .bottombtn .offerbtn[data-v-4c79ad5c]{width:50%;float:left;background-color:#203c60;-webkit-border-top-left-radius:1.5vw;border-top-left-radius:1.5vw;-webkit-border-bottom-left-radius:1.5vw;border-bottom-left-radius:1.5vw}.customer .bottombtn .custbtn[data-v-4c79ad5c]{width:50%;float:left;background-color:#e71d36;-webkit-border-top-right-radius:1.5vw;border-top-right-radius:1.5vw;-webkit-border-bottom-right-radius:1.5vw;border-bottom-right-radius:1.5vw}.cu-tag[data-v-4c79ad5c]{margin:5px}\n/* 联系客服弹框*/.cu-modal[data-v-4c79ad5c]{z-index:210}.config .cu-dialog[data-v-4c79ad5c]{background-color:transparent;width:auto;padding:4vw;height:auto}.config .cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-4c79ad5c]{margin:0}.config .cu-bar.tabbar .action [class*="cuIcon-"][data-v-4c79ad5c]{width:auto}.config .cuIcon-close[data-v-4c79ad5c]:before{background-color:rgba(0,0,0,.5);padding:3vw;-webkit-border-radius:50%;border-radius:50%}.config .service[data-v-4c79ad5c]{padding:3vw;background-color:#fff;-webkit-border-radius:1.5vw;border-radius:1.5vw}.config .service .wechat[data-v-4c79ad5c]{width:200px;height:200px;-webkit-border-radius:3vw;border-radius:3vw}.config .service .tip[data-v-4c79ad5c]{color:#333;margin-bottom:2vw;font-size:3.4vw}.member[data-v-4c79ad5c]{width:100vw;padding:3vw}.member .item[data-v-4c79ad5c]{width:100%;height:24vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:3vw;background-color:#fdfdfd;padding:2vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;-webkit-box-shadow:0 1px 2px rgba(26,26,26,.1);box-shadow:0 1px 2px rgba(26,26,26,.1)}.member .item .img[data-v-4c79ad5c]{width:20vw;height:20vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;margin-right:2vw}.member .item .img uni-image[data-v-4c79ad5c]{width:100%;height:100%;-webkit-border-radius:1.5vw;border-radius:1.5vw}.member .item .count[data-v-4c79ad5c]{width:68vw;height:20vw}.member .item .name[data-v-4c79ad5c]{font-size:3.5vw;height:10vw;padding:1vw 0;line-height:4vw;width:100%}.member .item .fans[data-v-4c79ad5c]{font-size:3vw;line-height:5vw}.member .item .fans .nowprice[data-v-4c79ad5c]{font-size:4vw;font-weight:700;margin-right:2vw}.member .item .fans .totalprice[data-v-4c79ad5c]{font-size:3vw;text-decoration:line-through}.member .item .time[data-v-4c79ad5c]{font-size:2.5vw;line-height:4vw}.member .item .time .commission[data-v-4c79ad5c]{margin-right:2vw}.cu-list.menu[data-v-4c79ad5c]{padding:0 3vw;background-color:#fff}.cu-list+.cu-list[data-v-4c79ad5c]{margin-top:3vw}.cu-list.menu>.cu-item[data-v-4c79ad5c]{\n\t/* min-height:40px; */padding:0}.group[data-v-4c79ad5c]{padding:3vw}.group .cu-avatar.sm[data-v-4c79ad5c]{margin-left:0;margin:.8vw}.supplytitle[data-v-4c79ad5c]{padding:3vw 0;font-size:4vw;font-weight:700;position:relative}.borderleft[data-v-4c79ad5c]{text-indent:3vw}.borderleft[data-v-4c79ad5c]::after{content:"";width:2vw;height:10vw;background-color:#e71d36;left:0;top:3.5vw}.supplytitle.top[data-v-4c79ad5c]{font-size:5vw}.supplydetails[data-v-4c79ad5c]{padding:3vw 0}.supplydetailsimg img[data-v-4c79ad5c]{width:100%;display:block}.cu-avatar[data-v-4c79ad5c]{-webkit-border-radius:1vw;border-radius:1vw}.liuyan .cu-bar[data-v-4c79ad5c]{position:static}.liuyan .close[data-v-4c79ad5c]{position:absolute}.liuyan .content[data-v-4c79ad5c]{width:100%;position:static}',""]),t.exports=a},f6ed:function(t,a,e){var i=e("e33f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("9ae720ac",i,!0,{sourceMap:!1,shadowMode:!1})},f9b6:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("uni-top-bar",{attrs:{title:t.toptitle}}),t.message?e("v-uni-view",{staticClass:"tipnews"},[t.tip?e("v-uni-view",{staticClass:"animated1 fadeInRight"},[e("v-uni-view",{staticClass:"cuIcon-notificationfill"}),e("span",[e("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),e("span",[t._v("红人"+t._s(t.message.celebrity))]),t._v("查看了"),e("span",[t._v("该商家")])])],1):t._e()],1):t._e(),e("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[e("v-uni-view",{staticClass:"head"},[e("v-uni-view",{staticClass:"logo"},[e("img",{attrs:{src:t.merchant["logo"]}})]),e("v-uni-view",{staticClass:"conpany"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"name"},[t._v(t._s(t.merchant.title))])]),t.merchant.category?e("v-uni-view",{staticClass:"action"},t._l(t.merchant.category,(function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-tag sm round bg-orange",staticStyle:{margin:"0"}},[t._v(t._s(a))])})),1):e("v-uni-view",{staticClass:"action"},[t._v("不限")])],1)],1)],1),e("v-uni-view",{staticClass:"hongren-content",style:{top:t.height+143+"px"}},[e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"cu-list menu"},[e("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("合作信息")]),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("拥有平台")])],1),t.platform?e("v-uni-view",{staticClass:"action"},t._l(t.merchant.platform,(function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(a))])})),1):e("v-uni-view",{staticClass:"action"},[t._v("不限")])],1),t.merchant.contact?e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("联系人")])],1),e("v-uni-view",{staticClass:"action"},[t._v(t._s(t.merchant.contact))])],1):t._e(),t.merchant.mobile?e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("手机号")])],1),e("v-uni-view",{staticClass:"action"},[t._v(t._s(t._f("intercept")(t.merchant.mobile)))])],1):t._e()],1),e("v-uni-view",{staticClass:"cu-list menu"},[t.merchant.detail?e("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("商家简介")]):t._e(),t.merchant.detail?e("v-uni-view",{staticClass:"supplydetails",domProps:{innerHTML:t._s(t.merchant.detail)}}):t._e()],1),t.merchant.purpose?e("v-uni-view",{staticClass:"cu-list menu"},[e("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("谁看过他")]),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-view",{staticClass:"group"},[t._l(t.merchant.purpose,(function(t,a){return e("v-uni-view",{key:a,staticClass:"cu-avatar sm",style:{backgroundImage:"url("+t+")"}})})),t.merchant.people>100?e("span",{staticStyle:{"margin-left":"1vw",position:"relative",top:"0.5vw",color:"#8799a3"}},[t._v("等"+t._s(t.merchant.people)+"人")]):t._e()],2)],1)],1)],1):t._e()],1)],1),e("v-uni-view",{staticClass:"cu-modal config",class:"Image"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",staticStyle:{width:"auto"}},[e("v-uni-view",{staticClass:"bg-img"},[e("v-uni-view",{staticClass:"service"},[e("img",{staticClass:"wechat",attrs:{src:t.config.service,mode:"widthFix"}}),e("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.config.servicetip))])],1),e("v-uni-view",{staticClass:"cu-bar justify-center text-white",staticStyle:{"margin-top":"3vw"}},[e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-modal liuyan",class:"liuyan"==t.modalName?"show":""},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[e("v-uni-view",{staticClass:"content"},[t._v("用户留言")]),e("v-uni-view",{staticClass:"action close",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),e("v-uni-view",{staticClass:"padding-xl"},[e("v-uni-input",{staticStyle:{"text-align":"left"},attrs:{type:"text",placeholder:"请输入留言内容"},model:{value:t.countent,callback:function(a){t.countent=a},expression:"countent"}})],1),e("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-button",{staticClass:"cu-btn bg-green margin-left",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.getliuyan.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[e("v-uni-view",{staticClass:"customer round shadow text-center"},[e("v-uni-view",{staticClass:"bottombtn clearfix"},[e("v-uni-view",{staticClass:"offerbtn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToDetailPage("user/atte")}}},[t._v("商家入驻")]),e("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Image"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModal.apply(void 0,arguments)}}},[t._v("联系客服")])],1)],1)],1)],1)},s=[]}}]);