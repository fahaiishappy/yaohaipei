(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-supply-details"],{"05ef":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};i.default=a},"1cb0":function(t,i,e){var a=e("627e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("b68b7a92",a,!0,{sourceMap:!1,shadowMode:!1})},3174:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?e("span",{staticClass:"clearfix"},[t.within?e("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):e("span",[t.title?e("span",{staticClass:"title"},[t._v(t._s(t.title))]):e("span",{staticClass:"title"},[t._v("红人速推")])])]):e("span",[t.within?e("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},n=[]},"320b":function(t,i,e){"use strict";e.r(i);var a=e("9e7b"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},3734:function(t,i,e){"use strict";e.r(i);var a=e("3174"),s=e("75eb");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("3804");var u,c=e("f0c5"),l=Object(c["a"])(s["default"],a["b"],a["c"],!1,null,"07edaae6",null,!1,a["a"],u);i["default"]=l.exports},3804:function(t,i,e){"use strict";var a=e("1cb0"),s=e.n(a);s.a},"38eb":function(t,i,e){"use strict";var a=e("9365"),s=e.n(a);s.a},"627e":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=i},"75eb":function(t,i,e){"use strict";e.r(i);var a=e("05ef"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},9365:function(t,i,e){var a=e("c3a0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("9a9ff7dc",a,!0,{sourceMap:!1,shadowMode:!1})},"9e7b":function(t,i,e){"use strict";var a=e("4ea4");e("d3b7"),e("ac1f"),e("25f0"),e("5319"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(e("3734")),n={components:{uniTopBar:s.default},data:function(){return{modalName:null,merchant:"",supplyid:"",supply:"",goods:"",yxhz:"",toptitle:"供求信息",userInfo:[],codetime:2e3,tip:!1,message:"",messagelist:"",height:"",showpage:!1,config:"",supplycount:"max-height:70vw",see:!1,liuyan:"",countent:"",currentuser:!0,notliuyan:"用户没有留言或商家设为私密!"}},filters:{intercept:function(t){var i="";return t&&t.length>1&&(i=t[0]+t[1]+t[2]+"****"+t[7]+t[8]+t[9]+t[10]),i},formatDate:function(t){var i=new Date(1e3*t),e=i.getFullYear(),a=i.getMonth()+1;a=a<10?"0"+a:a;var s=i.getDate();s=s<10?"0"+s:s;var n=i.getHours();n=n<10?"0"+n:n;var u=i.getMinutes();u=u<10?"0"+u:u;var c=i.getSeconds();return c=c<10?"0"+c:c,e+"-"+a+"-"+s},nickname:function(t){var i="";return t&&t.length>1&&(i=t[0]+t[1]+"***"),i}},onLoad:function(t){var i=this;uni.request({url:"https://www.hongrensutui.com/api/index/h5config",method:"POST",success:function(t){i.config=t.data.data.list}}),uni.showLoading({title:"加载中,请稍后..."}),this.height=this.StatusBar,t.id&&(i.supplyid=t.id),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),i.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),i.supplydetails()}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code},method:"POST",success:function(t){i.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),i.supplydetails()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?i.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),i.getmessage(),i.timerInt=setInterval((function(){if(i.codetime--,i.message=i.messagelist[i.getRandomArbitrary(0,50)],i.message.celebrity&&i.message.celebrity.length>1&&(i.message.celebrity=i.message.celebrity[0]+i.message.celebrity[1]+"***"),i.message.merchant&&i.message.merchant.length>1&&(i.message.merchant=i.message.merchant[0]+i.message.merchant[1]+"***"),i.tip=!i.tip,0==i.codetime)return clearInterval(i.timerInt),void(i.codetime=2e3)}),4e3)},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(i){""!=i.data&&null!=i.data&&t.updateuser(i.data.id)}})},methods:{updateuser:function(t){var i=this;t&&uni.request({url:"https://www.hongrensutui.com/api/api/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(i.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),i.supplydetails()):wxlogin()}})},getRandomArbitrary:function(t,i){return Math.floor(Math.random()*(i-t)+t)},getmessage:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(i){t.messagelist=i.data.data.list,t.message=t.messagelist[t.getRandomArbitrary(0,50)],t.message.celebrity&&t.message.celebrity.length>1&&(t.message.celebrity=t.message.celebrity[0]+t.message.celebrity[1]+"***"),t.message.merchant&&t.message.merchant.length>1&&(t.message.merchant=t.message.merchant[0]+t.message.merchant[1]+"***"),t.tip=!t.tip}})},atte:function(){uni.navigateTo({url:"/pages/user/atte?choice=1"})},supplydetails:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/supplydetails",data:{id:t.supplyid},method:"POST",success:function(i){t.supply=i.data.data.info,t.see=t.supply.see;var e=i.data.data.info.details;t.supply.details=e.replace(/\<img/gi,'<img style="width:100%;height:auto;display:block" '),t.supply.mid==t.userInfo.id&&(t.currentuser=!1),t.supply.title&&(uni.hideLoading(),t.showpage=!0),t.liuyanlist(t.supply.id),t.share(t.supply,t.userInfo.company_id,t.userInfo.id)}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},clicksee:function(t){this.supplycount="height:auto",this.see=!1},details:function(t){uni.navigateTo({url:"/pages/merchant/details?id="+t})},liuyanlist:function(t){var i=this;uni.request({url:"https://www.hongrensutui.com/api/index/liuyan",data:{supplyid:i.supplyid},method:"POST",success:function(t){i.liuyan=t.data.data.list}})},toliuyan:function(){this.modalName="liuyan"},getliuyan:function(){var t=this;uni.getStorage({key:"userInfo",success:function(i){if(!t.countent)return uni.showToast({title:"留言内容不能为空",icon:"none",duration:3e3}),!1;uni.request({url:"https://www.hongrensutui.com/api/index/getliuyan",data:{title:t.countent,supplyid:t.supplyid,mid:i.data.id,nickname:i.data.nickname,avatar:i.data.avatar},method:"post",dataType:"json",success:function(i){uni.showToast({icon:"none",title:"留言成功，审核通过后显示！"}),t.modalName=null},fail:function(t){uni.showToast({icon:"none",title:"留言失败！"})}})},fail:function(t){wxlogin()}})},share:function(t){function i(i,e,a){return t.apply(this,arguments)}return i.toString=function(){return t.toString()},i}((function(t,i,e){var a=t.title,s=t.title+"，点击查看详情";if(t.img)var n=t.img;else n="https://www.hongrensutui.com/uploads/share/news_logo.png";share(a,s,n,e)}))}};i.default=n},c3a0:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".hongren[data-v-0aa7b66b]{padding-bottom:44px}",""]),t.exports=i},d77a:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.showpage?e("v-uni-view",{staticClass:"supply"},[t.message?e("v-uni-view",{staticClass:"tipnews"},[t.tip?e("v-uni-view",{staticClass:"animated1 fadeInRight"},[e("v-uni-view",{staticClass:"cuIcon-notificationfill"}),e("span",[e("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),e("span",[t._v("网红"+t._s(t.message.celebrity))]),t._v("查看了"),e("span",[t._v("该商品")])])],1):t._e()],1):t._e(),e("v-uni-view",{staticClass:"hongren",style:{top:"0"}},[e("v-uni-view",{staticClass:"topimg"},[e("img",{attrs:{src:t.supply["img"]}}),t.supply.brand?e("v-uni-view",{staticClass:"brand"},[e("v-uni-view",{staticClass:"pp"},[t._v(t._s(t.supply.brand))])],1):t._e(),e("v-uni-view",{staticClass:"title ellipsis"},[t._v(t._s(t.supply.title))])],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"cu-list menu"},[e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("平台要求")])],1),t.supply.platform?e("v-uni-view",{staticClass:"action"},t._l(t.supply.platform,(function(i,a){return e("v-uni-view",{key:a,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(i))])})),1):e("v-uni-view",{staticClass:"action"},[t._v("不限")])],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("商品分类")])],1),t.supply.category?e("v-uni-view",{staticClass:"action",staticStyle:{padding:"5px 0"}},t._l(t.supply.category,(function(i,a){return e("v-uni-view",{key:a,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(i))])})),1):e("v-uni-view",{staticClass:"action"},[t._v("不限")])],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("粉丝要求")])],1),t.supply.fans?e("v-uni-view",{staticClass:"action"},[t._v(t._s(t.supply.fans)+"万以上")]):e("v-uni-view",{staticClass:"action"},[t._v("不限")])],1)],1),e("v-uni-view",{staticClass:"cu-list menu"},[e("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("合作信息")]),t.supply.nowprice?e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("券后价格")])],1),e("v-uni-view",{staticClass:"action cor-e8"},[e("span",{staticStyle:{"font-size":"3.5vw"}},[t._v("￥")]),e("span",{staticStyle:{"font-size":"4vw","font-weight":"bold"}},[t._v(t._s(t.supply.nowprice))])])],1):t._e(),t.supply.pay_type?e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("合作形式")])],1),e("v-uni-view",{staticClass:"action"},[1==t.supply.pay_type?e("v-uni-view",{staticClass:"cu-tag line-green round",staticStyle:{margin:"0"}},[t._v("坑位费")]):t._e(),2==t.supply.pay_type?e("v-uni-view",{staticClass:"cu-tag line-green round",staticStyle:{margin:"0"}},[t._v("纯佣金")]):t._e(),3==t.supply.pay_type?e("v-uni-view",{staticClass:"cu-tag line-green round",staticStyle:{margin:"0"}},[t._v("坑位费+佣金")]):t._e(),e("v-uni-view",{staticClass:"cu-tag cor-e8",staticStyle:{margin:"0","margin-left":"2vw","font-size":"4vw","font-weight":"bold",background:"#fff"}},[t._v(t._s(t.supply.commission)+"%")])],1)],1):t._e()],1),e("v-uni-view",{staticClass:"cu-list menu"},[t.supply.details?e("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("产品详情")]):t._e(),e("v-uni-view",{staticClass:"supplycount",style:t.supplycount},[t.supply.details?e("v-uni-view",{staticClass:"supplydetails",domProps:{innerHTML:t._s(t.supply.details)}}):t._e(),t.supply.detailimg?e("v-uni-view",{staticClass:"supplydetailsimg"},t._l(t.supply.detailimg,(function(t,i){return e("img",{key:i,attrs:{src:t,mode:"widthFix"}})})),0):t._e(),t.see?e("v-uni-view",{staticClass:"see"},[e("v-uni-view",{staticClass:"cu-btn round bg-orange sm",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clicksee.apply(void 0,arguments)}}},[t._v("点击查看全部")])],1):t._e()],1)],1),e("v-uni-view",{staticClass:"cu-list menu"},[e("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("联系方式")]),t.supply.contact?e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("联系人")])],1),e("v-uni-view",{staticClass:"action"},[t._v(t._s(t.supply.contact))])],1):t._e(),t.supply.mobile?e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("联系电话")])],1),e("v-uni-view",{staticClass:"action"},[t._v(t._s(t._f("intercept")(t.supply.mobile)))])],1):t._e()],1),t.supply.purpose?e("v-uni-view",{staticClass:"cu-list menu"},[e("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("谁关注过他")]),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-view",{staticClass:"group"},[t._l(t.supply.purpose,(function(t,i){return e("v-uni-view",{key:i,staticClass:"cu-avatar sm",style:{backgroundImage:"url("+t+")"}})})),t.supply.people>100?e("span",{staticStyle:{"margin-left":"1vw",position:"relative",top:"0.5vw",color:"#8799a3"}},[t._v("等"+t._s(t.supply.people)+"人感兴趣")]):t._e()],2)],1)],1)],1):t._e(),e("v-uni-view",{staticClass:"cu-list menu"},[e("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft",staticStyle:{display:"flex","justify-content":"space-between"}},[e("v-uni-view",[t._v("用户留言")]),t.currentuser?e("v-uni-view",{staticClass:"cu-tag bg-orange round",staticStyle:{margin:"0","text-indent":"0"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toliuyan.apply(void 0,arguments)}}},[t._v("我要留言")]):t._e()],1),t.liuyan.length>0?e("v-uni-view",{staticClass:"cu-list menu-avatar comment"},t._l(t.liuyan,(function(i,a){return e("v-uni-view",{key:a,staticClass:"cu-item"},[e("v-uni-view",{staticClass:"cu-avatar round",style:"background-image:url("+i.avatar+")"}),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(t._f("nickname")(i.nickname)))]),e("v-uni-view",{staticClass:"text-gray text-content text-df"},[t._v(t._s(i.title))])],1)],1)})),1):e("v-uni-view",{staticClass:"no-data"},[t._v(t._s(t.notliuyan))])],1)],1)],1),e("v-uni-view",{staticClass:"cu-modal config",class:"Image"==t.modalName?"show":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",staticStyle:{width:"auto"}},[e("v-uni-view",{staticClass:"bg-img"},[e("v-uni-view",{staticClass:"service"},[e("img",{staticClass:"wechat",attrs:{src:t.config.service,mode:"widthFix"}}),e("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.config.servicetip))])],1),e("v-uni-view",{staticClass:"cu-bar justify-center text-white",staticStyle:{"margin-top":"3vw"}},[e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-modal liuyan",class:"liuyan"==t.modalName?"show":""},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[e("v-uni-view",{staticClass:"content"},[t._v("给商家留言")]),e("v-uni-view",{staticClass:"action close",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),e("v-uni-view",{staticClass:"padding-xl",staticStyle:{"background-color":"#fff"}},[e("v-uni-input",{staticStyle:{"text-align":"left"},attrs:{type:"text",placeholder:"请输入留言内容"},model:{value:t.countent,callback:function(i){t.countent=i},expression:"countent"}})],1),e("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[e("v-uni-view",{staticClass:"action",staticStyle:{position:"relative"}},[e("v-uni-button",{staticClass:"cu-btn bg-green",staticStyle:{position:"absolute",right:"0"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getliuyan.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-modal poptips",class:"Modalwhdj"==t.modalName?"show":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"auth"},[e("v-uni-view",{staticClass:"title"},[t._v("您还未入驻成为主播，无法选品")]),e("v-uni-view",{staticClass:"vip",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.atte.apply(void 0,arguments)}}},[t._v("立即免费入驻")])],1)],1)],1),e("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[e("v-uni-view",{staticClass:"opening round shadow text-center"},[e("v-uni-view",{staticClass:"bottombtn clearfix"},[e("v-uni-view",{staticClass:"kefubtn",attrs:{"data-target":"Image"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showModal.apply(void 0,arguments)}}},[t._v("合作对接")])],1)],1)],1),e("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[e("v-uni-view",{staticClass:"opening round shadow text-center"},[e("v-uni-view",{staticClass:"bottombtn clearfix"},[e("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modalwhdj"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showModal.apply(void 0,arguments)}}},[t._v("加入选品库")]),e("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Image"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showModal.apply(void 0,arguments)}}},[t._v("联系官方")])],1)],1)],1)],1):t._e()},n=[]},ecd1:function(t,i,e){"use strict";e.r(i);var a=e("d77a"),s=e("320b");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("38eb");var u,c=e("f0c5"),l=Object(c["a"])(s["default"],a["b"],a["c"],!1,null,"0aa7b66b",null,!1,a["a"],u);i["default"]=l.exports}}]);