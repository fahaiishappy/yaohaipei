(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-supply-details"],{4674:function(t,e,i){"use strict";i.r(e);var a=i("7137"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"513a":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.showpage?i("v-uni-view",[t.message?i("v-uni-view",{staticClass:"tipnews"},[t.tip?i("v-uni-view",{staticClass:"animated1 fadeInRight"},[i("v-uni-view",{staticClass:"cuIcon-notificationfill"}),i("span",[i("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),i("span",[t._v("网红"+t._s(t.message.celebrity))]),t._v("查看了"),i("span",[t._v("该商品")])])],1):t._e()],1):t._e(),i("v-uni-view",{staticClass:"hongren-content"},[i("v-uni-view",{staticClass:"topimg"},[i("img",{attrs:{src:t.supply["img"]}}),t.supply.brand?i("v-uni-view",{staticClass:"brand"},[i("v-uni-view",{staticClass:"pp"},[t._v(t._s(t.supply.brand))])],1):t._e(),i("v-uni-view",{staticClass:"title ellipsis"},[t._v(t._s(t.supply.title))])],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("平台要求")])],1),t.supply.platform?i("v-uni-view",{staticClass:"action"},t._l(t.supply.platform,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(e))])})),1):i("v-uni-view",{staticClass:"action"},[t._v("不限")])],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("商品分类")])],1),t.supply.category?i("v-uni-view",{staticClass:"action",staticStyle:{padding:"5px 0"}},t._l(t.supply.category,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(e))])})),1):i("v-uni-view",{staticClass:"action"},[t._v("不限")])],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("粉丝要求")])],1),t.supply.fans?i("v-uni-view",{staticClass:"action"},[t._v(t._s(t.supply.fans)+"万以上")]):i("v-uni-view",{staticClass:"action"},[t._v("不限")])],1)],1),i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("合作信息")]),t.supply.nowprice?i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("券后价格")])],1),i("v-uni-view",{staticClass:"action cor-e8"},[i("span",{staticStyle:{"font-size":"3.5vw"}},[t._v("￥")]),i("span",{staticStyle:{"font-size":"4vw","font-weight":"bold"}},[t._v(t._s(t.supply.nowprice))])])],1):t._e(),t.supply.pay_type?i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("合作形式")])],1),i("v-uni-view",{staticClass:"action"},[1==t.supply.pay_type?i("v-uni-view",{staticClass:"cu-tag line-green round",staticStyle:{margin:"0"}},[t._v("坑位费")]):t._e(),2==t.supply.pay_type?i("v-uni-view",{staticClass:"cu-tag line-green round",staticStyle:{margin:"0"}},[t._v("纯佣金")]):t._e(),3==t.supply.pay_type?i("v-uni-view",{staticClass:"cu-tag line-green round",staticStyle:{margin:"0"}},[t._v("坑位费+佣金")]):t._e(),i("v-uni-view",{staticClass:"cu-tag cor-e8",staticStyle:{margin:"0","margin-left":"2vw","font-size":"4vw","font-weight":"bold",background:"#fff"}},[t._v(t._s(t.supply.commission)+"%")])],1)],1):t._e()],1),i("v-uni-view",{staticClass:"cu-list menu"},[t.supply.details?i("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("产品详情")]):t._e(),i("v-uni-view",{staticClass:"supplycount",style:t.supplycount},[t.supply.details?i("v-uni-view",{staticClass:"supplydetails",domProps:{innerHTML:t._s(t.supply.details)}}):t._e(),t.supply.detailimg?i("v-uni-view",{staticClass:"supplydetailsimg"},t._l(t.supply.detailimg,(function(t,e){return i("img",{key:e,attrs:{src:t,mode:"widthFix"}})})),0):t._e(),t.see?i("v-uni-view",{staticClass:"see"},[i("v-uni-view",{staticClass:"cu-btn round bg-orange sm",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clicksee.apply(void 0,arguments)}}},[t._v("点击查看全部")])],1):t._e()],1)],1),i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("联系方式")]),t.supply.contact?i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("联系人")])],1),i("v-uni-view",{staticClass:"action"},[t._v(t._s(t.supply.contact))])],1):t._e(),t.supply.mobile?i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("联系电话")])],1),i("v-uni-view",{staticClass:"action"},[t._v(t._s(t._f("intercept")(t.supply.mobile)))])],1):t._e()],1),t.supply.purpose?i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("谁看过他")]),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"group"},[t._l(t.supply.purpose,(function(t,e){return i("v-uni-view",{key:e,staticClass:"cu-avatar sm",style:{backgroundImage:"url("+t+")"}})})),t.supply.people>100?i("span",{staticStyle:{"margin-left":"1vw",position:"relative",top:"0.5vw",color:"#8799a3"}},[t._v("等"+t._s(t.supply.people)+"人")]):t._e()],2)],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft",staticStyle:{display:"flex","justify-content":"space-between"}},[i("v-uni-view",[t._v("用户留言")]),t.currentuser?i("v-uni-view",{staticClass:"cu-tag bg-orange round",staticStyle:{margin:"0","text-indent":"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toliuyan.apply(void 0,arguments)}}},[t._v("我要留言")]):t._e()],1),t.liuyan.length>0?i("v-uni-view",{staticClass:"cu-list menu-avatar comment"},t._l(t.liuyan,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar round",style:"background-image:url("+e.avatar+")"}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(t._f("nickname")(e.nickname)))]),i("v-uni-view",{staticClass:"text-gray text-content text-df"},[t._v(t._s(e.title))])],1)],1)})),1):i("v-uni-view",{staticClass:"no-data"},[t._v(t._s(t.notliuyan))])],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal config",class:"Image"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog",staticStyle:{width:"auto"}},[i("v-uni-view",{staticClass:"bg-img"},[i("v-uni-view",{staticClass:"service"},[i("img",{staticClass:"wechat",attrs:{src:t.config.service,mode:"widthFix"}}),i("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.config.servicetip))])],1),i("v-uni-view",{staticClass:"cu-bar justify-center text-white",staticStyle:{"margin-top":"3vw"}},[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal liuyan",class:"liuyan"==t.modalName?"show":""},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[i("v-uni-view",{staticClass:"content"},[t._v("给商家留言")]),i("v-uni-view",{staticClass:"action close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),i("v-uni-view",{staticClass:"padding-xl",staticStyle:{"background-color":"#fff"}},[i("v-uni-input",{staticStyle:{"text-align":"left"},attrs:{type:"text",placeholder:"请输入留言内容"},model:{value:t.countent,callback:function(e){t.countent=e},expression:"countent"}})],1),i("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[i("v-uni-view",{staticClass:"action",staticStyle:{position:"relative"}},[i("v-uni-button",{staticClass:"cu-btn bg-green",staticStyle:{position:"absolute",right:"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getliuyan.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[i("v-uni-view",{staticClass:"customer round shadow text-center"},[i("v-uni-view",{staticClass:"bottombtn clearfix"},[i("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Image"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("合作对接")])],1)],1)],1)],1):t._e()},n=[]},"5ad0":function(t,e,i){"use strict";i.r(e);var a=i("6004"),s=i("4674");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("a6c7");var o,u=i("f0c5"),c=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,"dca053c4",null,!1,a["a"],o);e["default"]=c.exports},6004:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):i("span",[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])])]):i("span",[t.within?i("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},n=[]},7137:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=a},a6c7:function(t,e,i){"use strict";var a=i("b8ec"),s=i.n(a);s.a},b8ec:function(t,e,i){var a=i("d99c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("119d75aa",a,!0,{sourceMap:!1,shadowMode:!1})},c35f:function(t,e,i){"use strict";var a=i("f23f"),s=i.n(a);s.a},c662:function(t,e,i){"use strict";var a=i("4ea4");i("d3b7"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("5ad0")),n={components:{uniTopBar:s.default},data:function(){return{modalName:null,merchant:"",supplyid:"",supply:"",goods:"",yxhz:"",toptitle:"供求信息",userInfo:[],codetime:2e3,tip:!1,message:"",messagelist:"",height:"",showpage:!1,config:"",supplycount:"max-height:70vw",see:!1,liuyan:"",countent:"",currentuser:!0,notliuyan:"用户没有留言或商家设为私密!"}},filters:{intercept:function(t){var e="";return t&&t.length>1&&(e=t[0]+t[1]+t[2]+"****"+t[7]+t[8]+t[9]+t[10]),e},formatDate:function(t){var e=new Date(1e3*t),i=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var s=e.getDate();s=s<10?"0"+s:s;var n=e.getHours();n=n<10?"0"+n:n;var o=e.getMinutes();o=o<10?"0"+o:o;var u=e.getSeconds();return u=u<10?"0"+u:u,i+"-"+a+"-"+s},nickname:function(t){var e="";return t&&t.length>1&&(e=t[0]+t[1]+"***"),e}},onLoad:function(t){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/h5config",method:"POST",success:function(t){e.config=t.data.data.list}}),uni.showLoading({title:"加载中,请稍后..."}),this.height=this.StatusBar,t.id&&(e.supplyid=t.id),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),e.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.supplydetails()}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){e.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.supplydetails()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),e.getmessage(),e.timerInt=setInterval((function(){if(e.codetime--,e.message=e.messagelist[e.getRandomArbitrary(0,50)],e.message.celebrity&&e.message.celebrity.length>1&&(e.message.celebrity=e.message.celebrity[0]+e.message.celebrity[1]+"***"),e.message.merchant&&e.message.merchant.length>1&&(e.message.merchant=e.message.merchant[0]+e.message.merchant[1]+"***"),e.tip=!e.tip,0==e.codetime)return clearInterval(e.timerInt),void(e.codetime=2e3)}),4e3)},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.updateuser(e.data.id)}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(e.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.supplydetails()):wxlogin()}})},getRandomArbitrary:function(t,e){return Math.floor(Math.random()*(e-t)+t)},getmessage:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(e){t.messagelist=e.data.data.list,t.message=t.messagelist[t.getRandomArbitrary(0,50)],t.message.celebrity&&t.message.celebrity.length>1&&(t.message.celebrity=t.message.celebrity[0]+t.message.celebrity[1]+"***"),t.message.merchant&&t.message.merchant.length>1&&(t.message.merchant=t.message.merchant[0]+t.message.merchant[1]+"***"),t.tip=!t.tip}})},supplydetails:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/supplydetails",data:{id:t.supplyid},method:"POST",success:function(e){t.supply=e.data.data.info,t.see=t.supply.see;var i=e.data.data.info.details;t.supply.details=i.replace(/\<img/gi,'<img style="width:100%;height:auto;display:block" '),t.supply.mid==t.userInfo.id&&(t.currentuser=!1),t.supply.details&&(uni.hideLoading(),t.showpage=!0),t.liuyanlist(t.supply.id),t.share(t.supply,t.userInfo.company_id,t.userInfo.id)}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},clicksee:function(t){this.supplycount="height:auto",this.see=!1},details:function(t,e){uni.navigateTo({url:"/pages/merchant/details?id="+e})},liuyanlist:function(t){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/liuyan",data:{supplyid:e.supplyid},method:"POST",success:function(t){e.liuyan=t.data.data.list}})},toliuyan:function(){this.modalName="liuyan"},getliuyan:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){if(!t.countent)return uni.showToast({title:"留言内容不能为空",icon:"none",duration:3e3}),!1;uni.request({url:"https://www.hongrensutui.com/api/index/getliuyan",data:{title:t.countent,supplyid:t.supplyid,mid:e.data.id,nickname:e.data.nickname,avatar:e.data.avatar},method:"post",dataType:"json",success:function(e){uni.showToast({icon:"none",title:"留言成功，审核通过后显示！"}),t.modalName=null},fail:function(t){uni.showToast({icon:"none",title:"留言失败！"})}})},fail:function(t){wxlogin()}})},share:function(t){function e(e,i,a){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e,i){var a=t.title,s=t.title+"，点击查看详情";if(t.img)var n=t.img;else n="https://www.hongrensutui.com/uploads/share/news_logo.png";share(a,s,n,i)}))}};e.default=n},d5eb:function(t,e,i){"use strict";i.r(e);var a=i("513a"),s=i("f7b2");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("c35f");var o,u=i("f0c5"),c=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,"134eaf79",null,!1,a["a"],o);e["default"]=c.exports},d99c:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.cu-bar[data-v-dca053c4]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-dca053c4]{margin-left:3vw;height:30px}.cuIcon-back[data-v-dca053c4]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-dca053c4]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-dca053c4]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-dca053c4]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-dca053c4]{width:auto}.cuIcon-close[data-v-dca053c4]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},f23f:function(t,e,i){var a=i("f268");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("25eda80e",a,!0,{sourceMap:!1,shadowMode:!1})},f268:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.tipnews[data-v-134eaf79]{height:15vw;position:fixed;color:#fff;z-index:999999;top:12vw}.hongren-content[data-v-134eaf79]{position:fixed;\ntop:0;\nleft:0;right:0;bottom:0;padding-bottom:44px;overflow-y:scroll;overflow-x:hidden;\n\t/* background: #fff; */-webkit-transform:translateZ(0);transform:translateZ(0)}.action.avatar[data-v-134eaf79]{text-align:right}.action[data-v-134eaf79]{-webkit-box-flex:3;-webkit-flex:3;flex:3}.topimg[data-v-134eaf79]{width:100vw;height:100vw;position:relative}.topimg .brand[data-v-134eaf79]{position:absolute;top:44px;right:3vw;background:hsla(0,0%,100%,.3);-webkit-border-radius:50vw;border-radius:50vw;padding:1.5vw}.topimg .brand .pp[data-v-134eaf79]{color:#fff;height:30px;line-height:30px;padding:0 4vw;font-weight:700;font-size:4vw;background:rgba(0,0,0,.8);-webkit-border-radius:50vw;border-radius:50vw}.topimg img[data-v-134eaf79]{width:100%;height:100%}.topimg .title[data-v-134eaf79]{background-image:url(https://www.hongrensutui.com/h5/img/anli_bg.png);background-repeat:repeat-x;background-position:bottom;position:absolute;left:0;bottom:0;right:0;height:45px;padding-left:4vw;font-weight:700;color:#fff;line-height:50px;font-size:4.4vw;font-size:500}\n\n/* 联系客服 */.customer[data-v-134eaf79]{height:10vw;line-height:10vw;margin:auto;font-size:4vw;text-align:center;z-index:9990}.customer .bottombtn[data-v-134eaf79]{width:94vw;height:100%;margin:auto;color:#fff;-webkit-border-radius:10vw;border-radius:10vw}.customer .bottombtn .offerbtn[data-v-134eaf79]{width:50%;float:left;background-color:#203c60;-webkit-border-top-left-radius:1.5vw;border-top-left-radius:1.5vw;-webkit-border-bottom-left-radius:1.5vw;border-bottom-left-radius:1.5vw}.customer .bottombtn .custbtn[data-v-134eaf79]{width:100%;float:left;background-color:#e71d36;-webkit-border-radius:1.5vw;border-radius:1.5vw\n\t/* border-bottom-right-radius:1.5vw; */}.cu-tag[data-v-134eaf79]{margin:5px}\n\n/* 联系客服弹框*/.cu-modal[data-v-134eaf79]{z-index:210}.config .cu-dialog[data-v-134eaf79]{background-color:transparent;width:auto;padding:4vw;height:auto}.config .cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-134eaf79]{margin:0}.config .cu-bar.tabbar .action [class*="cuIcon-"][data-v-134eaf79]{width:auto}.config .cuIcon-close[data-v-134eaf79]:before{background-color:rgba(0,0,0,.5);padding:3vw;-webkit-border-radius:50%;border-radius:50%}.config .service[data-v-134eaf79]{padding:3vw;background-color:#fff;-webkit-border-radius:1.5vw;border-radius:1.5vw}.config .service .wechat[data-v-134eaf79]{width:200px;height:200px;-webkit-border-radius:3vw;border-radius:3vw}.config .service .tip[data-v-134eaf79]{color:#333;margin-bottom:2vw;font-size:3.4vw}.member[data-v-134eaf79]{width:100vw;padding:3vw}.member .item[data-v-134eaf79]{width:100%;height:24vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:3vw;background-color:#fdfdfd;padding:2vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;-webkit-box-shadow:0 1px 2px rgba(26,26,26,.1);box-shadow:0 1px 2px rgba(26,26,26,.1)}.member .item .img[data-v-134eaf79]{width:20vw;height:20vw;-webkit-border-radius:1.5vw;border-radius:1.5vw;margin-right:2vw}.member .item .img uni-image[data-v-134eaf79]{width:100%;height:100%;-webkit-border-radius:1.5vw;border-radius:1.5vw}.member .item .count[data-v-134eaf79]{width:68vw;height:20vw}.member .item .name[data-v-134eaf79]{font-size:3.5vw;height:10vw;padding:1vw 0;line-height:4vw;width:100%}.member .item .fans[data-v-134eaf79]{font-size:3vw;line-height:5vw}.member .item .fans .nowprice[data-v-134eaf79]{font-size:4vw;font-weight:700;margin-right:2vw}.member .item .fans .totalprice[data-v-134eaf79]{font-size:3vw;text-decoration:line-through}.member .item .time[data-v-134eaf79]{font-size:2.5vw;line-height:4vw}.member .item .time .commission[data-v-134eaf79]{margin-right:2vw}.cu-list.menu[data-v-134eaf79]{padding:0 3vw;background-color:#fff}.cu-list+.cu-list[data-v-134eaf79]{margin-top:3vw}.cu-list.menu>.cu-item[data-v-134eaf79]{\n\t/* min-height:40px; */padding:0}.group[data-v-134eaf79]{padding:3vw}.group .cu-avatar.sm[data-v-134eaf79]{margin-left:0;margin:.8vw}.supplytitle[data-v-134eaf79]{padding:3vw 0;font-size:4vw;font-weight:700;position:relative}.borderleft[data-v-134eaf79]{text-indent:3vw}.borderleft[data-v-134eaf79]::after{content:"";width:2vw;height:10vw;background-color:#e71d36;left:0;top:3.5vw}.supplytitle.top[data-v-134eaf79]{font-size:5vw}.supplycount[data-v-134eaf79]{overflow:hidden;position:relative;margin-bottom:3vw}.supplydetails[data-v-134eaf79]{padding:3vw 0}.supplydetailsimg img[data-v-134eaf79]{width:100%;display:block}.cu-avatar[data-v-134eaf79]{-webkit-border-radius:1vw;border-radius:1vw}.see[data-v-134eaf79]{background-image:url(https://www.hongrensutui.com/h5/img/anli_bg2.png);background-repeat:repeat-x;background-position:bottom;position:absolute;left:0;bottom:0;right:0;height:60px;color:#fff;line-height:60px;font-size:4vw;text-align:center}.liuyan .cu-bar[data-v-134eaf79]{position:static}.liuyan .close[data-v-134eaf79]{position:absolute}.liuyan .content[data-v-134eaf79]{width:100%;position:static}',""]),t.exports=e},f7b2:function(t,e,i){"use strict";i.r(e);var a=i("c662"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a}}]);