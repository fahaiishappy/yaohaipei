(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-supply-details"],{"15fc":function(t,e,i){"use strict";var a,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-top-bar",{attrs:{title:t.toptitle}}),t.message?i("v-uni-view",{staticClass:"tipnews"},[t.tip?i("v-uni-view",{staticClass:"animated1 fadeInRight"},[i("v-uni-view",{staticClass:"cuIcon-notificationfill"}),i("span",[i("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),i("span",[t._v("红人"+t._s(t.message.celebrity))]),t._v("查看了"),i("span",[t._v("商家"+t._s(t.message.merchant))])])],1):t._e()],1):t._e(),i("v-uni-view",{staticClass:"hongren-content",style:{top:t.height+43+"px"}},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"supplytitle solid-bottom top"},[t._v(t._s(t.supply.title))]),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("截止时间")])],1),t.supply.endtime?i("v-uni-view",{staticClass:"action"},[t._v(t._s(t._f("formatDate")(t.supply.endtime)))]):i("v-uni-view",{staticClass:"action"},[t._v("不限")])],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("平台要求")])],1),t.supply.platform?i("v-uni-view",{staticClass:"action"},t._l(t.supply.platform,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(e))])})),1):i("v-uni-view",{staticClass:"action"},[t._v("不限")])],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("领域要求")])],1),t.supply.category?i("v-uni-view",{staticClass:"action"},t._l(t.supply.category,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(e))])})),1):i("v-uni-view",{staticClass:"action"},[t._v("不限")])],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("粉丝要求")])],1),t.supply.fans?i("v-uni-view",{staticClass:"action"},[t._v(t._s(t.supply.fans)+"w")]):i("v-uni-view",{staticClass:"action"},[t._v("不限")])],1)],1),i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("合作信息")]),t.supply.nowprice?i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("券后价格")])],1),i("v-uni-view",{staticClass:"action cor-e8"},[i("span",{staticStyle:{"font-size":"3.5vw"}},[t._v("￥")]),i("span",{staticStyle:{"font-size":"4vw","font-weight":"bold"}},[t._v(t._s(t.supply.nowprice))])])],1):t._e(),t.supply.pay_type?i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("合作形式")])],1),1==t.supply.pay_type?i("v-uni-view",{staticClass:"action"},[t._v("预付费")]):t._e(),2==t.supply.pay_type?i("v-uni-view",{staticClass:"action"},[t._v("纯佣金")]):t._e(),3==t.supply.pay_type?i("v-uni-view",{staticClass:"action"},[t._v("预付费+纯佣金")]):t._e()],1):t._e(),t.supply.commission?i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("佣金比例")])],1),i("v-uni-view",{staticClass:"action cor-e8"},[i("span",{staticStyle:{"font-size":"4vw","font-weight":"bold"}},[t._v(t._s(t.supply.commission)+"%")])])],1):t._e()],1),i("v-uni-view",{staticClass:"cu-list menu"},[t.supply.details?i("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("产品详情")]):t._e(),t.supply.details?i("v-uni-view",{staticClass:"supplydetails",domProps:{innerHTML:t._s(t.supply.details)}}):t._e()],1),i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("联系方式")]),t.supply.contact?i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("对接商务")])],1),i("v-uni-view",{staticClass:"action"},[t._v(t._s(t.supply.contact))])],1):t._e(),t.supply.mobile?i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("联系电话")])],1),i("v-uni-view",{staticClass:"action"},[t._v(t._s(t._f("intercept")(t.supply.mobile)))])],1):t._e()],1),i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("意向人数")]),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"group"},t._l(t.supply.purpose,(function(t,e){return i("v-uni-view",{key:e,staticClass:"cu-avatar round sm",style:{backgroundImage:"url(http://cdn.hongrensutui.com/uploads/hongrenicon/"+t+".jpg)"}})})),1)],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"bg-img"},[i("img",{staticClass:"wechat",attrs:{src:"https://www.hongrensutui.com/h5/img/wechat.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"tip"},[t._v("咨询微信：zhuoyu10086")]),i("v-uni-view",{staticClass:"cu-bar justify-center text-white"},[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"customer round shadow text-center"},[i("v-uni-view",{staticClass:"bottombtn clearfix"},[i("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Image"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("合作对接")]),i("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Image"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("查看商家")])],1)],1)],1)},n=[];i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},"16bf":function(t,e,i){"use strict";var a=i("5099"),s=i.n(a);s.a},5099:function(t,e,i){var a=i("8482");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("8e37f7de",a,!0,{sourceMap:!1,shadowMode:!1})},8482:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.tipnews[data-v-e2e5387e]{height:15vw;position:fixed;color:#fff;z-index:999999;top:24vw}.hongren-content[data-v-e2e5387e]{position:fixed;left:0;right:0;bottom:0;padding-bottom:20vw;overflow-y:scroll;overflow-x:hidden;\n\t/* background: #fff; */-webkit-transform:translateZ(0);transform:translateZ(0)}.action.avatar[data-v-e2e5387e]{text-align:right}.action[data-v-e2e5387e]{-webkit-box-flex:3;-webkit-flex:3;flex:3}\n\n/* 联系客服 */.customer[data-v-e2e5387e]{position:fixed;bottom:6vw;left:0;right:0;height:10vw;line-height:10vw;font-size:4vw;text-align:center;z-index:210}.customer .bottombtn[data-v-e2e5387e]{width:60vw;height:100%;margin:auto;color:#fff;border-radius:10vw;box-shadow:0 0 0 4px hsla(0,0%,87.1%,.3)}.customer .bottombtn .offerbtn[data-v-e2e5387e]{width:50%;float:left;background-color:#203c60;border-top-left-radius:10vw;border-bottom-left-radius:10vw}.customer .bottombtn .custbtn[data-v-e2e5387e]{width:50%;float:left;background-color:#e71d36;border-top-right-radius:10vw;border-bottom-right-radius:10vw}\n\n/* 联系客服弹框*/.cu-modal[data-v-e2e5387e]{z-index:210}.cu-dialog[data-v-e2e5387e]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-e2e5387e]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-e2e5387e]{width:auto}.cuIcon-close[data-v-e2e5387e]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}.wechat[data-v-e2e5387e]{width:200px;height:200px}.tip[data-v-e2e5387e]{color:#fff;margin:2vw 0;font-size:3.4vw}.member[data-v-e2e5387e]{width:100vw;padding:3vw}.member .item[data-v-e2e5387e]{width:100%;height:24vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:3vw;background-color:#fdfdfd;padding:2vw;border-radius:1.5vw;box-shadow:0 1px 2px rgba(26,26,26,.1)}.member .item .img[data-v-e2e5387e]{width:20vw;height:20vw;border-radius:1.5vw;margin-right:2vw}.member .item .img uni-image[data-v-e2e5387e]{width:100%;height:100%;border-radius:1.5vw}.member .item .count[data-v-e2e5387e]{width:68vw;height:20vw}.member .item .name[data-v-e2e5387e]{font-size:3.5vw;height:10vw;padding:1vw 0;line-height:4vw;width:100%}.member .item .fans[data-v-e2e5387e]{font-size:3vw;line-height:5vw}.member .item .fans .nowprice[data-v-e2e5387e]{font-size:4vw;font-weight:700;margin-right:2vw}.member .item .fans .totalprice[data-v-e2e5387e]{font-size:3vw;text-decoration:line-through}.member .item .time[data-v-e2e5387e]{font-size:2.5vw;line-height:4vw}.member .item .time .commission[data-v-e2e5387e]{margin-right:2vw}.cu-list.menu[data-v-e2e5387e]{padding:0 3vw;background-color:#fff}.cu-list+.cu-list[data-v-e2e5387e]{margin-top:3vw}.cu-list.menu>.cu-item[data-v-e2e5387e]{\n\t/* min-height:40px; */padding:0}.group[data-v-e2e5387e]{padding:3vw}.group .cu-avatar.sm[data-v-e2e5387e]{margin-left:0;margin:.8vw}.supplytitle[data-v-e2e5387e]{padding:3vw 0;font-size:4vw;font-weight:700;position:relative}.borderleft[data-v-e2e5387e]{text-indent:3vw}.borderleft[data-v-e2e5387e]::after{content:"";width:2vw;height:10vw;background-color:#e71d36;left:0;top:3.5vw}.supplytitle.top[data-v-e2e5387e]{font-size:5vw}.supplydetails[data-v-e2e5387e]{padding:3vw 0}',""]),t.exports=e},"8e5f":function(t,e,i){"use strict";i.r(e);var a=i("15fc"),s=i("c99d");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("16bf");var o,u=i("f0c5"),c=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,"e2e5387e",null,!1,a["a"],o);e["default"]=c.exports},a964:function(t,e,i){"use strict";var a=i("ee27");i("d3b7"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("9dcd")),n={components:{uniTopBar:s.default},data:function(){return{modalName:null,merchantid:"",merchant:"",supplyid:"",supply:"",goods:"",yxhz:"",toptitle:"供求信息",userInfo:[],codetime:2e3,tip:!1,message:"",messagelist:"",height:""}},filters:{intercept:function(t){var e="";return t&&t.length>1&&(e=t[0]+t[1]+t[2]+"****"+t[7]+t[8]+t[9]+t[10]),e},formatDate:function(t){var e=new Date(1e3*t),i=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var s=e.getDate();s=s<10?"0"+s:s;var n=e.getHours();n=n<10?"0"+n:n;var o=e.getMinutes();o=o<10?"0"+o:o;var u=e.getSeconds();return u=u<10?"0"+u:u,i+"-"+a+"-"+s}},onLoad:function(t){var e=this;this.height=this.StatusBar,t.id&&(e.supplyid=t.id),t.mid&&(e.merchantid=t.mid),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),e.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.supplydetails()}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){e.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.supplydetails()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),e.getRandomArbitrary(0,49),e.getmessage(),e.timerInt=setInterval((function(){if(e.codetime--,e.message=e.messagelist[e.getRandomArbitrary(0,50)],e.message.celebrity&&e.message.celebrity.length>1&&(e.message.celebrity=e.message.celebrity[0]+e.message.celebrity[1]+"***"),e.message.merchant&&e.message.merchant.length>1&&(e.message.merchant=e.message.merchant[0]+e.message.merchant[1]+"***"),e.tip=!e.tip,0==e.codetime)return clearInterval(e.timerInt),void(e.codetime=2e3)}),4e3)},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(e.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.supplydetails()):wxlogin()}})},getRandomArbitrary:function(t,e){return Math.floor(Math.random()*(e-t)+t)},getmessage:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(e){t.messagelist=e.data.data.list,t.message=t.messagelist[t.getRandomArbitrary(0,50)],t.message.celebrity&&t.message.celebrity.length>1&&(t.message.celebrity=t.message.celebrity[0]+t.message.celebrity[1]+"***"),t.message.merchant&&t.message.merchant.length>1&&(t.message.merchant=t.message.merchant[0]+t.message.merchant[1]+"***"),t.tip=!t.tip}})},supplydetails:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/supplydetails",data:{id:t.supplyid},method:"POST",success:function(e){t.supply=e.data.data.info;var i=e.data.data.info.details;t.supply.details=i.replace(/\<img/gi,'<img style="width:100%;height:auto;padding:1vw 0;border-radius: 1.5vw" ')}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},details:function(t,e){uni.navigateTo({url:"/pages/merchant/details?id="+e})},share:function(t){function e(e,i,a){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e,i){var a=merchant.title+"正在红人速推平台找主播直播带货",s="已有99+个主播联系它纯佣金带货，如果你是网红，就上红人速推找它",n=merchant.logo;share(a,s,n,i)}))}};e.default=n},c99d:function(t,e,i){"use strict";i.r(e);var a=i("a964"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a}}]);