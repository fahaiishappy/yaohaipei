(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-platform-celebrity"],{6213:function(t,e,a){"use strict";a.r(e);var i=a("c12e"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"9a5c":function(t,e,a){"use strict";a.r(e);var i=a("e8a0"),n=a("6213");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("c197");var s,c=a("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"fff043ec",null,!1,i["a"],s);e["default"]=r.exports},af5f:function(t,e,a){var i=a("ffad");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("4b36434c",i,!0,{sourceMap:!1,shadowMode:!1})},c12e:function(t,e,a){"use strict";(function(t){var i=a("ee27");a("d3b7"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("9dcd")),o={components:{uniTopBar:n.default},data:function(){return{modalName:null,tabCurrentIndex:0,see:!0,content:"",yxhz:"",todata:"",toptitle:"红人详情",userInfo:[],cewebrityid:"",cewebrityuid:"",codetime:2e3,tip:!1,message:"",messagelist:"",height:"",url:"https://www.hongrensutui.com/uploads/fshx/",bottombtn:!0}},filters:{formatDate:function(t){var e=new Date(1e3*t),a=e.getFullYear(),i=e.getMonth()+1;i=i<10?"0"+i:i;var n=e.getDate();n=n<10?"0"+n:n;var o=e.getHours();o=o<10?"0"+o:o;var s=e.getMinutes();s=s<10?"0"+s:s;var c=e.getSeconds();return c=c<10?"0"+c:c,a+"-"+i+"-"+n}},onLoad:function(t){var e=this;this.height=this.StatusBar,t.id&&(e.cewebrityid=t.id),e.getRandomArbitrary(0,49),e.getmessage(),e.timerInt=setInterval((function(){if(e.codetime--,e.message=e.messagelist[e.getRandomArbitrary(0,50)],e.message.celebrity=e.message.celebrity[0]+e.message.celebrity[1]+"***",e.message.merchant=e.message.merchant[0]+e.message.merchant[1]+"***",e.tip=!e.tip,0==e.codetime)return clearInterval(e.timerInt),void(e.codetime=2e3)}),4e3),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:a.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.getCewebrity()}})},fail:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.getCewebrity()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.getCewebrity()):wxlogin()}})},getRandomArbitrary:function(t,e){return Math.floor(Math.random()*(e-t)+t)},getmessage:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(e){t.messagelist=e.data.data.list,t.message=t.messagelist[t.getRandomArbitrary(0,50)],t.message.celebrity=t.message.celebrity[0]+t.message.celebrity[1]+"***",t.message.merchant=t.message.merchant[0]+t.message.merchant[1]+"***",t.tip=!t.tip}})},getCewebrity:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){e.data&&""!=e.data?(t.userInfo=e.data,uni.request({url:"https://www.hongrensutui.com/api/index/onecewebrity",data:{id:t.cewebrityid,userid:t.userInfo.id},method:"POST",success:function(a){t.content=a.data.data.list,t.share(t.content,e.data.company_id,e.data.id),t.cewebrityuid=t.content.id,t.randtime(t.content.livebroadcast),t.getCewebrityyxhz(t.content.people)}})):uni.request({url:"https://www.hongrensutui.com/api/index/onecewebrity",data:{id:t.cewebrityid},method:"POST",success:function(e){t.content=e.data.data.list,t.share(t.content,0,0),t.cewebrityuid=t.content.id,t.randtime(t.content.livebroadcast),t.getCewebrityyxhz(t.content.people)}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/onecewebrity",data:{id:t.cewebrityid},method:"POST",success:function(e){t.content=e.data.data.list,t.share(t.content,0,0),t.cewebrityuid=t.content.id,t.randtime(t.content.livebroadcast),t.getCewebrityyxhz(t.content.people)}})}})},randtime:function(t){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/randtime",data:{livebroadcast:t},method:"POST",success:function(t){e.todata=t.data.data.time}})},getCewebrityyxhz:function(t){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/getCewebrityyxhz",data:{people:t},method:"POST",success:function(t){e.yxhz=t.data.data.info}})},member:function(){var t=this;uni.navigateTo({url:"/pages/member/member?cewebrityid="+t.cewebrityid})},collect:function(t){var e=this;e.userInfo.id?t.show?(uni.showToast({title:"已取消关注",icon:"none",duration:2e3}),e.collectClick(t)):(uni.showToast({title:"已添加关注",icon:"none",duration:2e3}),e.collectClick(t)):e.modalName="login"},collectClick:function(t){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/collect",data:{id:e.userInfo.id,collectid:t.id},method:"POST",success:function(e){t.show=!t.show}})},openmember:function(){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/order",data:{openid:t.userInfo.openid,id:t.content.id},method:"POST",success:function(e){var a="/pages/platform/celebrity?id="+t.cewebrityid;callpay(JSON.parse(e.data.data.parameters),e.data.data.info,a)}}):t.modalName="login"},wxopenmember:function(){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Order/order",data:{openid:t.userInfo.xopenid,id:t.content.id},method:"POST",success:function(e){var a=e.data.data.orderid;uni.requestPayment({provider:"wxpay",timeStamp:e.data.data.wechat.payinfo.timeStamp,nonceStr:e.data.data.wechat.payinfo.nonceStr,package:e.data.data.wechat.payinfo.package,signType:e.data.data.wechat.payinfo.signType,paySign:e.data.data.wechat.payinfo.paySign,success:function(e){uni.request({url:"https://www.hongrensutui.com/api/Order/complete_order",data:{openid:t.userInfo.xopenid,id:a},method:"POST",success:function(e){uni.redirectTo({url:"/pages/platform/celebrity?id="+t.cewebrityid})}})}})}}):t.modalName="login"},lookup:function(t){var e=this;e.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/index/lookup",data:{openid:e.userInfo.openid,xopenid:e.userInfo.xopenid,cewebrityid:e.content.id},method:"POST",success:function(a){if(1==a.data.data.info.code)if("Modalfshx"==t.currentTarget.dataset.target)if(e.userInfo.card_id>=2)e.see=!1,e.tabCurrentIndex=1,2==e.userInfo.card_id&&uni.showToast({title:"您当前是中级会员！并且"+a.data.data.info.msg,icon:"none",duration:3e3}),3==e.userInfo.card_id&&uni.showToast({title:"您当前是高级会员！并且"+a.data.data.info.msg,icon:"none",duration:3e3});else switch(uni.getSystemInfoSync().platform){case"android":uni.showToast({title:"您当前会员等级不够！",icon:"none",duration:2e3}),e.modalName=t.currentTarget.dataset.target;break;case"ios":e.modalName=t.currentTarget.dataset.target;break}else e.see=!1,uni.showToast({title:a.data.data.info.msg,icon:"none",duration:2e3});else switch(uni.getSystemInfoSync().platform){case"android":uni.showToast({title:a.data.data.info.msg,icon:"none",duration:2e3}),e.modalName=t.currentTarget.dataset.target;break;case"ios":e.modalName=t.currentTarget.dataset.target;break}}}):e.modalName="login"},tabClick:function(){this.tabCurrentIndex=0,this.bottombtn=!0},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},share:function(t){function e(e,a,i){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(e,a,i){t("log",i," at pages/platform/celebrity.vue:687");var n="我是"+e.nickname+"，我在红人速推帮商家直播带货",o="已有99+个商家联系我纯佣金带货，如果你是商家，就上红人速推找我",s=e.avatar;share(n,o,s,i)})),wechatLogin:function(t){wxlogin()}}};e.default=o}).call(this,a("0de9")["log"])},c197:function(t,e,a){"use strict";var i=a("af5f"),n=a.n(i);n.a},e8a0:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("uni-top-bar",{attrs:{title:t.toptitle}}),t.message?a("v-uni-view",{staticClass:"tipnews"},[t.tip?a("v-uni-view",{staticClass:"animated1 fadeInRight"},[a("v-uni-view",{staticClass:"cuIcon-notificationfill"}),a("span",[a("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),a("span",[t._v("商家"+t._s(t.message.merchant))]),t._v("查看了"),a("span",[t._v("红人"+t._s(t.message.celebrity))])])],1):t._e()],1):t._e(),a("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[a("v-uni-view",{staticClass:"head"},[a("img",{attrs:{src:t.content["avatar"],mode:"widthFix"}}),a("v-uni-view",{staticClass:"collect",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.collect(t.content)}}},[a("v-uni-view",{staticClass:"lg text-gray",class:t.content.show?"cuIcon-likefill":"cuIcon-like"})],1)],1),a("v-uni-view",{staticClass:"flex nav"},[a("v-uni-view",{staticClass:"flex-sub padding-sm text-center",class:{active:0===t.tabCurrentIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(0)}}},[t._v("资料卡")]),a("v-uni-view",{staticClass:"flex-sub padding-sm text-center",class:{active:1===t.tabCurrentIndex},attrs:{"data-target":"Modalfshx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookup.apply(void 0,arguments)}}},[a("span",[t._v("粉丝画像")]),t.userInfo.card_id<2||!t.userInfo.card_id||t.see?a("span",{staticClass:"cuIcon-lock"}):t._e()])],1)],1),a("v-uni-view",{staticClass:"hongren-content",style:{top:t.height+193+"px"}},[a("v-uni-view",{staticClass:"item data",class:{active:0===t.tabCurrentIndex}},[a("v-uni-view",{staticClass:"flex solid-bottom"},[a("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs text-center"},[a("v-uni-view",{staticClass:"personal-title"},[t._v("昵称")]),a("v-uni-view",{staticClass:"personal-data"},[t._v(t._s(t.content.nickname))])],1),a("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs text-center"},[a("v-uni-view",{staticClass:"personal-title"},[t._v("入驻平台")]),t._l(t.content.platform,(function(e,i){return a("v-uni-view",{key:i,staticClass:"personal-data"},[t._v(t._s(e))])}))],2),a("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs text-center"},[a("v-uni-view",{staticClass:"personal-title"},[t._v("粉丝")]),a("v-uni-view",{staticClass:"personal-data cor-e8"},[t._v(t._s(t.content.fans)+"w")])],1)],1),a("v-uni-view",{staticClass:"cu-list menu sm-border"},[a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("红人分类")])],1),a("v-uni-view",{staticClass:"action"},t._l(t.content.category,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-tag round light bg-grey"},[t._v(t._s(e))])})),1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("合作形式")])],1),a("v-uni-view",{staticClass:"action"},t._l(t.content.cooperation,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-tag round light bg-grey"},[t._v(t._s(e))])})),1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("收费方式")])],1),a("v-uni-view",{staticClass:"action"},["1"==t.content.pay_type?a("v-uni-view",{staticClass:"cu-tag round light bg-grey"},[t._v("预付费")]):t._e(),"2"==t.content.pay_type?a("v-uni-view",{staticClass:"cu-tag round light bg-grey"},[t._v("纯佣金")]):t._e(),"3"==t.content.pay_type?a("v-uni-view",{staticClass:"cu-tag round light bg-grey"},[t._v("预付费+纯佣金")]):t._e()],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("参考报价")])],1),a("v-uni-view",{staticClass:"action"},[t.see?a("v-uni-view",{staticClass:"cu-tag light bg-yellow round",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookup.apply(void 0,arguments)}}},[t._v("会员免费查看")]):a("v-uni-view",{staticClass:"cu-tag light bg-yellow round"},[t._v(t._s(t.content.price))])],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("微信号码")])],1),a("v-uni-view",{staticClass:"action"},[t.see?a("v-uni-view",{staticClass:"cu-tag light bg-yellow round",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookup.apply(void 0,arguments)}}},[t._v("会员免费查看")]):a("v-uni-view",{staticClass:"cu-tag light bg-yellow round"},[t._v(t._s(t.content.wechat_work))])],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("最近直播")])],1),a("v-uni-view",{staticClass:"action"},[t.see?a("v-uni-view",{staticClass:"cu-tag light bg-yellow round",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookup.apply(void 0,arguments)}}},[t._v("会员免费查看")]):a("v-uni-text",{staticClass:"text-grey text-df"},[t._v(t._s(t._f("formatDate")(t.todata)))])],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("谁看过他")])],1),a("v-uni-view",{staticClass:"action avatar"},[a("v-uni-view",{staticClass:"cu-avatar-group"},t._l(t.yxhz,(function(e,i){return i<13?a("v-uni-view",{key:i,staticClass:"cu-avatar round sm",style:{backgroundImage:"url("+e.avatar+")"}}):t._e()})),1),t.content.people<=15?a("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.content.people)+"人")]):a("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.content.people)+"+")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"item portrait",class:{active:1===t.tabCurrentIndex}},[t.userInfo.card_id<2||!t.userInfo.card_id||t.see?a("v-uni-view",{staticClass:"plank"},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"auth"},[a("v-uni-view",{staticClass:"title"},[t._v("了解红人粉丝数据分析")]),a("v-uni-view",{staticClass:"vip",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.member.apply(void 0,arguments)}}},[t._v("成为中级会员，解锁红人画像")])],1)],1)],1):t._e(),t.cewebrityuid&&t.userInfo.card_id>0?a("v-uni-view",{staticClass:"fshx"},[a("img",{attrs:{src:t.url+t.cewebrityuid+".jpg",mode:"widthFix"}})]):t._e()],1)],1),a("v-uni-view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"bg-img"},[a("img",{staticClass:"wechat",attrs:{src:"https://www.hongrensutui.com/h5/img/wechat.png",mode:"widthFix"}}),a("v-uni-view",{staticClass:"tip"},[t._v("咨询微信：zhuoyu10086")]),a("v-uni-view",{staticClass:"cu-bar justify-center text-white"},[a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),t.bottombtn?a("v-uni-view",{staticClass:"customer round shadow text-center"},[a("v-uni-view",{staticClass:"bottombtn clearfix"},[a("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookup.apply(void 0,arguments)}}},[t._v("合作报价")]),a("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Image"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("联系客服")])],1)],1):t._e(),a("v-uni-view",{staticClass:"cu-modal",class:"Modalfshx"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"auth"},[a("v-uni-view",{staticClass:"title"},[t._v("了解红人粉丝数据分析")]),a("v-uni-view",{staticClass:"vip",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.member.apply(void 0,arguments)}}},[t._v("成为中级会员，解锁红人画像")])],1)],1)],1),a("v-uni-view",{staticClass:"cu-modal",class:"Modal"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"auth"},[a("v-uni-view",{staticClass:"title"},[t._v("一键直连红人")]),a("v-uni-view",{staticClass:"vip",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.member.apply(void 0,arguments)}}},[t._v("成为会员，免费查看")]),a("v-uni-view",{staticClass:"pay",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.openmember.apply(void 0,arguments)}}},[t._v("付费查看 (29.9元)")])],1)],1)],1),a("v-uni-view",{staticClass:"cu-modal",class:"Modalios"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"auth"},[a("v-uni-view",{staticClass:"title"},[t._v("十分抱歉，由于相关规范，小程序暂不支持查看信息。")])],1)],1)],1),a("v-uni-view",{staticClass:"cu-modal",class:"login"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"auth"},[a("v-uni-view",{staticClass:"title"},[t._v("请登录后操作！")]),a("v-uni-view",{staticClass:"loginbtn"},[a("v-uni-button",{staticClass:"close",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),a("v-uni-button",{staticClass:"login",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1)},o=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}))},ffad:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.tipnews[data-v-fff043ec]{height:15vw;position:fixed;color:#fff;z-index:999999;top:24vw}.hongren[data-v-fff043ec]{bottom:auto;box-shadow:0 1px 2px rgba(26,26,26,.1)}.head[data-v-fff043ec]{padding-top:3vw;text-align:center;background-color:#e71d36;width:100vw;height:150px}.head img[data-v-fff043ec]{width:20vw;height:20vw;border-radius:50%;margin-top:2vw;box-shadow:0 0 0 8px rgba(20,20,20,.1)}.head .name[data-v-fff043ec]{font-size:4vw;line-height:8vw;color:#fff}.head .number[data-v-fff043ec]{color:#999;font-size:3.5vw;line-height:6vw}.head .label[data-v-fff043ec]{color:orange;font-size:3vw;line-height:5vw}.flex.nav[data-v-fff043ec]{position:relative;z-index:10;margin-top:-10vw;color:#fff;font-size:3.6vw;box-shadow:1px 1px 2px hsla(0,0%,39.2%,.1)}.flex.nav .active[data-v-fff043ec]{font-size:3.8vw;font-weight:600;position:relative}.flex.nav .active[data-v-fff043ec]:after{position:absolute;content:"";width:4vw;left:50%;margin-left:-2vw;height:1vw;background:#fff;bottom:1vw}.hongren-content[data-v-fff043ec]{position:fixed;left:0;right:0;bottom:0;overflow-y:scroll;overflow-x:hidden;background:#fff;-webkit-transform:translateZ(0);transform:translateZ(0)}.item.data[data-v-fff043ec]{padding-bottom:20vw}.cu-list.menu>.cu-item .content[data-v-fff043ec]{width:23.2vw;text-align:center;text-indent:2vw}.cu-list.menu>.cu-item .action.avatar[data-v-fff043ec]{text-align:right}.cu-list.menu>.cu-item .action[data-v-fff043ec]{-webkit-box-flex:3;-webkit-flex:3;flex:3}.collect[data-v-fff043ec]{position:absolute;top:10vw;right:13vw}.collect .cuIcon-like[data-v-fff043ec],\n.collect .cuIcon-likefill[data-v-fff043ec]{font-size:8vw}.collect .cuIcon-like[data-v-fff043ec]{color:#fff}.collect .cuIcon-likefill[data-v-fff043ec]{color:#ffce6e}.customer[data-v-fff043ec]{position:fixed;bottom:6vw;left:0;right:0;height:10vw;line-height:10vw;font-size:4vw;text-align:center;z-index:210}.customer .bottombtn[data-v-fff043ec]{width:60vw;height:100%;margin:auto;color:#fff;border-radius:10vw;box-shadow:0 0 0 4px hsla(0,0%,87.1%,.3)}.customer .bottombtn .offerbtn[data-v-fff043ec]{width:50%;float:left;background-color:#203c60;border-top-left-radius:10vw;border-bottom-left-radius:10vw}.customer .bottombtn .custbtn[data-v-fff043ec]{width:50%;float:left;background-color:#e71d36;border-top-right-radius:10vw;border-bottom-right-radius:10vw}.button[data-v-fff043ec]{font-weight:700!important}.cu-dialog[data-v-fff043ec]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-fff043ec]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-fff043ec]{width:auto}.cuIcon-close[data-v-fff043ec]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}.wechat[data-v-fff043ec]{width:200px;height:200px}.tip[data-v-fff043ec]{color:#fff;margin:2vw 0;font-size:3.4vw}.flex.p-xs[data-v-fff043ec]{margin:0 3vw;padding:1vw 0}.flex-sub.padding-xs[data-v-fff043ec]{margin:5px 0;padding:5px 0;padding-left:2vw}.flex-treble.padding-xs[data-v-fff043ec]{margin:5px 0;padding:5px 0}.flex-sub[data-v-fff043ec]{line-height:4.8vw}.personal-title[data-v-fff043ec]{font-size:3.8vw;color:#999}.personal-data[data-v-fff043ec]{font-size:4vw;font-weight:500;margin-top:2vw}.botton[data-v-fff043ec]{width:30%}.padding[data-v-fff043ec]{margin-top:10vw;padding:0 3vw}.item[data-v-fff043ec]{display:none}.item.active[data-v-fff043ec]{display:block}.correct[data-v-fff043ec]{color:#0e0;position:absolute;left:0}.douyinlogo[data-v-fff043ec]{color:#ff3030}.bg-red[data-v-fff043ec]{background-color:#e71d36}.cu-dialog[data-v-fff043ec]{text-align:center;margin:auto;width:100vw;padding:20vw 10vw}.auth[data-v-fff043ec]{padding:6vw;border-radius:1.5vw;background-color:#fff}.auth .vip[data-v-fff043ec]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}.auth .pay[data-v-fff043ec]{border-radius:1.5vw;border:1px solid #ebebeb;text-align:center;color:#666;height:10vw;line-height:10vw}.auth .title[data-v-fff043ec]{color:#333;margin-bottom:4vw}.cu-modal[data-v-fff043ec]{z-index:210}.fshx[data-v-fff043ec]{width:100vw}.fshx img[data-v-fff043ec]{width:100%}.item.portrait.active[data-v-fff043ec]{width:100%;height:100%}.plank[data-v-fff043ec]{width:100%;height:100%;background:rgba(26,26,26,.3)}.cuIcon-lock[data-v-fff043ec]{margin-left:1vw}.loginbtn[data-v-fff043ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}uni-button[data-v-fff043ec]::after{display:none}uni-button[data-v-fff043ec]{position:static;display:block;margin-left:0;margin-right:0;padding-left:0;padding-right:0;box-sizing:initial;font-size:3.8vw;text-align:center;text-decoration:none;line-height:7vw;border-radius:1.5vw;-webkit-tap-highlight-color:transparent;overflow:visible;color:#333;background-color:initial;margin-top:3vw}uni-button.close[data-v-fff043ec]{\n\t/* border:1px solid #efefef; */\n\t/* padding:1vw 3vw; */}uni-button.login[data-v-fff043ec]{color:#39b54a\n\t/* color:#fff;\n\tpadding:1vw 3vw; */}',""]),t.exports=e}}]);