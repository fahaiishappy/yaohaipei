(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-celebrity-details"],{"05ef":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=i},3327:function(t,e,a){"use strict";a.r(e);var i=a("63d5"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},3734:function(t,e,a){"use strict";a.r(e);var i=a("c2d5"),n=a("75eb");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("d973");var o,c=a("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"525162bc",null,!1,i["a"],o);e["default"]=r.exports},"4fb0":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.cu-bar[data-v-525162bc]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-525162bc]{margin-left:3vw;height:30px}.cuIcon-back[data-v-525162bc]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-525162bc]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-525162bc]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-525162bc]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-525162bc]{width:auto}.cuIcon-close[data-v-525162bc]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},5713:function(t,e,a){var i=a("4fb0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("645c1318",i,!0,{sourceMap:!1,shadowMode:!1})},"63d5":function(t,e,a){"use strict";var i=a("4ea4");a("d3b7"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("3734")),s={components:{uniTopBar:n.default},data:function(){return{modalName:null,tabCurrentIndex:0,see:!0,content:"",yxhz:"",todata:"",toptitle:"红人详情",userInfo:[],cewebrityid:"",cewebrityuid:"",realmid:"",codetime:2e3,tip:!1,message:"",messagelist:"",height:"",url:"https://www.hongrensutui.com/uploads/fshx/",bottombtn:!0,showpage:!1,config:"",background:"transparent"}},filters:{formatDate:function(t){var e=new Date(1e3*t),a=e.getFullYear(),i=e.getMonth()+1;i=i<10?"0"+i:i;var n=e.getDate();n=n<10?"0"+n:n;var s=e.getHours();s=s<10?"0"+s:s;var o=e.getMinutes();o=o<10?"0"+o:o;var c=e.getSeconds();return c=c<10?"0"+c:c,a+"-"+i+"-"+n},numFilter:function(t){var e,a=t.length-1;return a<=2?e=t[0]+"**":3==a?e=t[0]+"***":4==a?e=t[0]+"****":a>=5&&(e=t[0]+"*****"),e}},onLoad:function(t){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/h5config",method:"POST",success:function(t){e.config=t.data.data.list}}),e.height=this.StatusBar,t.id&&(e.cewebrityid=t.id),t.realmid&&(e.realmid=t.realmid),uni.showLoading({title:"加载中,请稍后..."}),e.getRandomArbitrary(0,49),e.getmessage(),e.timerInt=setInterval((function(){if(e.codetime--,e.message=e.messagelist[e.getRandomArbitrary(0,50)],e.message.celebrity=e.message.celebrity[0]+e.message.celebrity[1]+"***",e.message.merchant=e.message.merchant[0]+e.message.merchant[1]+"***",e.tip=!e.tip,0==e.codetime)return clearInterval(e.timerInt),void(e.codetime=2e3)}),4e3),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:a.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.getCewebrity()}})},fail:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.getCewebrity()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.updateuser(e.data.id)}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.getCewebrity()):wxlogin()}})},getRandomArbitrary:function(t,e){return Math.floor(Math.random()*(e-t)+t)},getmessage:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(e){t.messagelist=e.data.data.list,t.message=t.messagelist[t.getRandomArbitrary(0,50)],t.message.celebrity=t.message.celebrity[0]+t.message.celebrity[1]+"***",t.message.merchant=t.message.merchant[0]+t.message.merchant[1]+"***",t.tip=!t.tip}})},getCewebrity:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){e.data&&""!=e.data?(t.userInfo=e.data,uni.request({url:"https://www.hongrensutui.com/api/index/onecewebrity",data:{id:t.cewebrityid,userid:t.userInfo.id,realmid:t.realmid},method:"POST",success:function(a){t.content=a.data.data.list,t.share(t.content,e.data.company_id,e.data.id),t.cewebrityuid=t.content.id,t.randtime(t.content.livebroadcast),t.content.livebroadcast&&(uni.hideLoading(),t.showpage=!0)}})):uni.request({url:"https://www.hongrensutui.com/api/index/onecewebrity",data:{id:t.cewebrityid},method:"POST",success:function(e){t.content=e.data.data.list,t.share(t.content,0,0),t.cewebrityuid=t.content.id,t.randtime(t.content.livebroadcast),t.content.livebroadcast&&(uni.hideLoading(),t.showpage=!0)}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/onecewebrity",data:{id:t.cewebrityid},method:"POST",success:function(e){t.content=e.data.data.list,t.share(t.content,0,0),t.cewebrityuid=t.content.id,t.randtime(t.content.livebroadcast),t.content.livebroadcast&&(uni.hideLoading(),t.showpage=!0)}})}})},randtime:function(t){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/randtime",data:{livebroadcast:t},method:"POST",success:function(t){e.todata=t.data.data.time}})},member:function(){var t=this;uni.navigateTo({url:"/pages/member/member?cewebrityid="+t.cewebrityid})},navToDetailPage:function(t,e){e&&(t=t+"?id="+e),uni.navigateTo({url:"/pages/"+t})},collect:function(t){var e=this;e.userInfo.id?t.show?(uni.showToast({title:"已取消关注",icon:"none",duration:2e3}),e.collectClick(t)):(uni.showToast({title:"已添加关注",icon:"none",duration:2e3}),e.collectClick(t)):e.modalName="login"},collectClick:function(t){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/collect",data:{id:e.userInfo.id,collectid:t.id},method:"POST",success:function(e){t.show=!t.show}})},openmember:function(){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/order",data:{openid:t.userInfo.openid,id:t.content.id},method:"POST",success:function(e){var a="/pages/celebrity/details?id="+t.cewebrityid;callpay(JSON.parse(e.data.data.parameters),e.data.data.info,a)}}):t.modalName="login"},wxopenmember:function(){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Order/order",data:{openid:t.userInfo.xopenid,id:t.content.id},method:"POST",success:function(e){var a=e.data.data.orderid;uni.requestPayment({provider:"wxpay",timeStamp:e.data.data.wechat.payinfo.timeStamp,nonceStr:e.data.data.wechat.payinfo.nonceStr,package:e.data.data.wechat.payinfo.package,signType:e.data.data.wechat.payinfo.signType,paySign:e.data.data.wechat.payinfo.paySign,success:function(e){uni.request({url:"https://www.hongrensutui.com/api/Order/complete_order",data:{openid:t.userInfo.xopenid,id:a},method:"POST",success:function(e){uni.redirectTo({url:"/pages/celebrity/details?id="+t.cewebrityid})}})}})}}):t.modalName="login"},lookup:function(t){var e=this;e.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/index/lookup",data:{openid:e.userInfo.openid,xopenid:e.userInfo.xopenid,cewebrityid:e.content.id},method:"POST",success:function(a){if(1==a.data.data.info.code)if("Modalfshx"==t.currentTarget.dataset.target)if(e.userInfo.card_id>=2)e.see=!1,e.tabCurrentIndex=1,2==e.userInfo.card_id&&uni.showToast({title:"您当前是中级会员！并且"+a.data.data.info.msg,icon:"none",duration:3e3}),3==e.userInfo.card_id&&uni.showToast({title:"您当前是高级会员！并且"+a.data.data.info.msg,icon:"none",duration:3e3});else switch(uni.getSystemInfoSync().platform){case"android":uni.showToast({title:"您当前会员等级不够！",icon:"none",duration:2e3}),e.modalName=t.currentTarget.dataset.target;break;case"ios":e.modalName=t.currentTarget.dataset.target;break}else e.see=!1,uni.showToast({title:a.data.data.info.msg,icon:"none",duration:2e3});else switch(uni.getSystemInfoSync().platform){case"android":uni.showToast({title:a.data.data.info.msg,icon:"none",duration:2e3}),e.modalName=t.currentTarget.dataset.target;break;case"ios":e.modalName=t.currentTarget.dataset.target;break}}}):e.modalName="login"},tabClick:function(t){this.tabCurrentIndex=t,this.bottombtn=!0},showModal:function(t){var e=this;if(e.userInfo.id)if("Modal"==t.currentTarget.dataset.target)switch(uni.getSystemInfoSync().platform){case"android":e.modalName=t.currentTarget.dataset.target;break;case"ios":e.modalName=t.currentTarget.dataset.target;break;default:e.modalName=t.currentTarget.dataset.target;break}else this.modalName=t.currentTarget.dataset.target;else e.modalName="login"},hideModal:function(t){this.modalName=null},copy:function(t){uni.setClipboardData({data:t,success:function(){uni.showToast({title:"复制微信号成功"})}})},onCopyResult:function(t){"success"===t?uni.showModal({title:"复制微信号成功！"}):uni.showToast({title:"复制微信号失败",icon:"none"})},share:function(t){function e(e,a,i){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e,a){var i="我是"+t.nickname+"，我在红人速推帮商家直播带货",n="已有99+个商家联系我纯佣金带货，如果你是商家，就上红人速推找我",s=t.avatar;share(i,n,s,a)})),wechatLogin:function(t){wxlogin()}}};e.default=s},"75eb":function(t,e,a){"use strict";a.r(e);var i=a("05ef"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},8452:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showpage?a("v-uni-view",{staticClass:"celebritydetails"},[t.message?a("v-uni-view",{staticClass:"tipnews"},[t.tip?a("v-uni-view",{staticClass:"animated1 fadeInRight"},[a("v-uni-view",{staticClass:"cuIcon-notificationfill"}),a("span",[a("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),a("span",[t._v("商家"+t._s(t.message.merchant))]),t._v("查看了"),a("span",[t._v("该主播")])])],1):t._e()],1):t._e(),a("v-uni-view",{staticClass:"hongren",style:{paddingTop:t.height+43+"px"}},[a("uni-top-bar",{attrs:{title:t.toptitle,background:t.background}}),a("v-uni-view",{staticStyle:{position:"absolute",overflow:"hidden",top:"0",left:"0",width:"100vw"}},[a("img",{staticClass:"blur2",staticStyle:{transform:"scale(1.2)",width:"100%"},attrs:{src:t.content["avatar"],mode:"widthFix"}})]),a("v-uni-view",{staticClass:"head"},[a("img",{attrs:{src:t.content["avatar"]}}),a("v-uni-view",{staticClass:"collect",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.collect(t.content)}}},[a("v-uni-view",{staticClass:"lg text-gray",class:t.content.show?"cuIcon-likefill":"cuIcon-like"})],1)],1),a("v-uni-view",{staticClass:"flex nav"},[a("v-uni-view",{staticClass:"flex-sub padding-sm text-center",class:{active:0===t.tabCurrentIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(0)}}},[t._v("资料卡")]),!t.userInfo.card_id||t.userInfo.card_id<2?a("v-uni-view",{staticClass:"flex-sub padding-sm text-center",class:{active:1===t.tabCurrentIndex},attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[a("span",[t._v("粉丝画像")]),a("span",{staticClass:"cuIcon-lock"})]):a("v-uni-view",{staticClass:"flex-sub padding-sm text-center",class:{active:1===t.tabCurrentIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(1)}}},[t._v("粉丝画像")])],1)],1),a("v-uni-view",{staticClass:"hongren-content",style:{top:t.height+193+"px"}},[a("v-uni-view",{staticClass:"item data",class:{active:0===t.tabCurrentIndex}},[a("v-uni-view",{staticClass:"flex solid-bottom"},[a("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs text-center"},[a("v-uni-view",{staticClass:"personal-title"},[t._v("红人昵称")]),t.userInfo.card_id>0?a("v-uni-view",{staticClass:"personal-data"},[t._v(t._s(t.content.nickname))]):a("v-uni-view",{staticClass:"personal-data"},[t._v(t._s(t._f("numFilter")(t.content.nickname)))])],1),a("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs text-center"},[a("v-uni-view",{staticClass:"personal-title"},[t._v("入驻平台")]),t._l(t.content.platform,(function(e,i){return a("v-uni-view",{key:i,staticClass:"personal-data"},[t._v(t._s(e))])}))],2),a("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs text-center"},[a("v-uni-view",{staticClass:"personal-title"},[t._v("拥有粉丝")]),a("v-uni-view",{staticClass:"personal-data cor-e8"},[t._v(t._s(t.content.fans)+"w")])],1)],1),a("v-uni-view",{staticClass:"cu-list menu sm-border"},[a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("带货领域")])],1),a("v-uni-view",{staticClass:"action"},t._l(t.content.category,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-tag round light bg-grey"},[t._v(t._s(e))])})),1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("合作形式")])],1),a("v-uni-view",{staticClass:"action"},t._l(t.content.cooperation,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-tag round light bg-grey"},[t._v(t._s(e))])})),1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("收费方式")])],1),a("v-uni-view",{staticClass:"action"},["1"==t.content.pay_type?a("v-uni-view",{staticClass:"cu-tag round light bg-grey"},[t._v("坑位费")]):t._e(),"2"==t.content.pay_type?a("v-uni-view",{staticClass:"cu-tag round light bg-grey"},[t._v("纯佣金")]):t._e(),"3"==t.content.pay_type?a("v-uni-view",{staticClass:"cu-tag round light bg-grey"},[t._v("坑位费+佣金")]):t._e()],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("参考报价")])],1),a("v-uni-view",{staticClass:"action"},[!t.userInfo.card_id||t.userInfo.card_id<2?a("v-uni-view",{staticClass:"cu-tag light bg-yellow round",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("会员免费查看")]):a("v-uni-view",{staticClass:"cu-tag light bg-yellow round"},[t._v(t._s(t.content.price))])],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("微信号码")])],1),a("v-uni-view",{staticClass:"action"},[!t.userInfo.card_id||t.userInfo.card_id<2?a("v-uni-view",{staticClass:"cu-tag light bg-yellow round",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("会员免费查看")]):a("v-uni-view",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.content.wechat_work,expression:"content.wechat_work",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:function(e){return t.onCopyResult("success")},expression:"(type) => onCopyResult('success')",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:function(e){return t.onCopyResult("error")},expression:"(type) => onCopyResult('error')",arg:"error"}],staticStyle:{"font-size":"12px",color:"#fbbd08"}},[t._v(t._s(t.content.wechat_work)+" (点击复制)")])],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("最近直播")])],1),a("v-uni-view",{staticClass:"action"},[!t.userInfo.card_id||t.userInfo.card_id<2?a("v-uni-view",{staticClass:"cu-tag light bg-yellow round",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("会员免费查看")]):a("v-uni-text",{staticClass:"text-grey text-df"},[t._v(t._s(t._f("formatDate")(t.todata)))])],1)],1),t.content.purpose?a("v-uni-view",{staticClass:"cu-item",staticStyle:{display:"flex","align-items":"flex-start",padding:"2vw 3vw"}},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("谁看过他")])],1),a("v-uni-view",{staticClass:"action"},[t._l(t.content.purpose,(function(t,e){return a("v-uni-image",{key:e,staticClass:"platform",staticStyle:{"border-radius":"1vw",top:"0.5vw","margin-bottom":"1vw"},attrs:{src:t}})})),t.content.people>100?a("span",{staticStyle:{"margin-left":"1vw",position:"relative",top:"0.5vw",color:"#8799a3"}},[t._v("等"+t._s(t.content.people)+"人")]):t._e()],2)],1):t._e()],1)],1),a("v-uni-view",{staticClass:"item portrait",class:{active:1===t.tabCurrentIndex}},[a("v-uni-view",{staticClass:"fshx"},[a("img",{attrs:{src:t.url+t.cewebrityuid+".jpg",mode:"widthFix"}})])],1)],1),a("v-uni-view",{staticClass:"cu-modal config",class:"Image"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog",staticStyle:{width:"auto"}},[a("v-uni-view",{staticClass:"bg-img"},[a("v-uni-view",{staticClass:"service"},[a("img",{staticClass:"wechat",attrs:{src:t.config.service,mode:"widthFix"}}),a("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.config.servicetip))])],1),a("v-uni-view",{staticClass:"cu-bar justify-center text-white",staticStyle:{"margin-top":"3vw"}},[a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),!t.userInfo.card_id&&t.userInfo.card_id<2?a("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[a("v-uni-view",{staticClass:"opening round shadow text-center"},[a("v-uni-view",{staticClass:"bottombtn clearfix"},[a("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("合作对接")]),a("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Image"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("联系客服")])],1)],1)],1):t._e(),a("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[a("v-uni-view",{staticClass:"opening round shadow text-center"},[a("v-uni-view",{staticClass:"bottombtn clearfix"},[a("v-uni-view",{staticClass:"kefubtn",attrs:{"data-target":"Image"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("联系客服")])],1)],1)],1),a("v-uni-view",{staticClass:"cu-modal poptips",class:"Modalfshx"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"auth"},[a("v-uni-view",{staticClass:"title"},[t._v("了解红人粉丝数据分析")]),a("v-uni-view",{staticClass:"vip",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.member.apply(void 0,arguments)}}},[t._v("成为会员，解锁红人画像")])],1)],1)],1),a("v-uni-view",{staticClass:"cu-modal poptips",class:"Modal"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"auth"},[a("v-uni-view",{staticClass:"title"},[t._v("一键直连红人")]),a("v-uni-view",{staticClass:"vip",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.member.apply(void 0,arguments)}}},[t._v("成为会员，免费查看")])],1)],1)],1),a("v-uni-view",{staticClass:"cu-modal poptips",class:"Modalios"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"auth"},[a("v-uni-view",{staticClass:"title"},[t._v("十分抱歉，由于相关规范，小程序暂不支持查看信息。")])],1)],1)],1),a("v-uni-view",{staticClass:"cu-modal poplogin",class:"login"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"auth"},[a("v-uni-view",{staticClass:"title"},[t._v("请登录后操作！")]),a("v-uni-view",{staticClass:"loginbtn"},[a("v-uni-button",{staticClass:"close",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),a("v-uni-button",{staticClass:"login",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1):t._e()},s=[]},c2d5:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?a("span",{staticClass:"clearfix"},[t.within?a("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):a("span",[t.title?a("span",{staticClass:"title"},[t._v(t._s(t.title))]):a("span",{staticClass:"title"},[t._v("红人速推")])])]):a("span",[t.within?a("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):a("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},d973:function(t,e,a){"use strict";var i=a("5713"),n=a.n(i);n.a},f469:function(t,e,a){"use strict";a.r(e);var i=a("8452"),n=a("3327");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var o,c=a("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"3f6ece40",null,!1,i["a"],o);e["default"]=r.exports}}]);