(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-supply-details"],{"071a":function(t,i,e){"use strict";e.r(i);var a=e("23e9"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},"0f5e":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};i.default=a},"23e9":function(t,i,e){"use strict";var a=e("ee27");e("d3b7"),e("ac1f"),e("25f0"),e("5319"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(e("e3d7")),n={components:{uniTopBar:s.default},data:function(){return{modalName:null,merchantid:"",merchant:"",supplyid:"",supply:"",goods:"",yxhz:"",toptitle:"供求信息",userInfo:[],codetime:2e3,tip:!1,message:"",messagelist:"",height:"",showpage:!1}},filters:{intercept:function(t){var i="";return t&&t.length>1&&(i=t[0]+t[1]+t[2]+"****"+t[7]+t[8]+t[9]+t[10]),i},formatDate:function(t){var i=new Date(1e3*t),e=i.getFullYear(),a=i.getMonth()+1;a=a<10?"0"+a:a;var s=i.getDate();s=s<10?"0"+s:s;var n=i.getHours();n=n<10?"0"+n:n;var o=i.getMinutes();o=o<10?"0"+o:o;var r=i.getSeconds();return r=r<10?"0"+r:r,e+"-"+a+"-"+s}},onLoad:function(t){var i=this;uni.showLoading({title:"加载中,请稍后..."}),this.height=this.StatusBar,t.id&&(i.supplyid=t.id),t.mid&&(i.merchantid=t.mid),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),i.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),i.supplydetails()}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){i.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),i.supplydetails()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?i.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),i.getRandomArbitrary(0,49),i.getmessage(),i.timerInt=setInterval((function(){if(i.codetime--,i.message=i.messagelist[i.getRandomArbitrary(0,50)],i.message.celebrity&&i.message.celebrity.length>1&&(i.message.celebrity=i.message.celebrity[0]+i.message.celebrity[1]+"***"),i.message.merchant&&i.message.merchant.length>1&&(i.message.merchant=i.message.merchant[0]+i.message.merchant[1]+"***"),i.tip=!i.tip,0==i.codetime)return clearInterval(i.timerInt),void(i.codetime=2e3)}),4e3)},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(i){""!=i.data&&null!=i.data&&t.updateuser(i.data.id)}})},methods:{updateuser:function(t){var i=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(i.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),i.supplydetails()):wxlogin()}})},getRandomArbitrary:function(t,i){return Math.floor(Math.random()*(i-t)+t)},getmessage:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(i){t.messagelist=i.data.data.list,t.message=t.messagelist[t.getRandomArbitrary(0,50)],t.message.celebrity&&t.message.celebrity.length>1&&(t.message.celebrity=t.message.celebrity[0]+t.message.celebrity[1]+"***"),t.message.merchant&&t.message.merchant.length>1&&(t.message.merchant=t.message.merchant[0]+t.message.merchant[1]+"***"),t.tip=!t.tip}})},supplydetails:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/supplydetails",data:{id:t.supplyid},method:"POST",success:function(i){t.supply=i.data.data.info;var e=i.data.data.info.details;t.supply.details=e.replace(/\<img/gi,'<img style="width:100%;height:auto;display:block" '),t.supply.details&&(uni.hideLoading(),t.showpage=!0),t.share(t.supply,t.userInfo.company_id,t.userInfo.id)}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},details:function(t,i){uni.navigateTo({url:"/pages/merchant/details?id="+i})},share:function(t){function i(i,e,a){return t.apply(this,arguments)}return i.toString=function(){return t.toString()},i}((function(t,i,e){var a=t.title,s=t.title+"，点击查看详情";if(t.img)var n=t.img;else n="https://www.hongrensutui.com/uploads/share/news_logo.png";share(a,s,n,e)}))}};i.default=n},5043:function(t,i,e){var a=e("84e5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("77c4aa47",a,!0,{sourceMap:!1,shadowMode:!1})},"6b61":function(t,i,e){"use strict";e.r(i);var a=e("6d5a"),s=e("071a");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("9ebb");var o,r=e("f0c5"),u=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"2028827f",null,!1,a["a"],o);i["default"]=u.exports},"6d5a":function(t,i,e){"use strict";var a,s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.showpage?e("v-uni-view",[t.message?e("v-uni-view",{staticClass:"tipnews"},[t.tip?e("v-uni-view",{staticClass:"animated1 fadeInRight"},[e("v-uni-view",{staticClass:"cuIcon-notificationfill"}),e("span",[e("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),e("span",[t._v("网红"+t._s(t.message.celebrity))]),t._v("查看了"),e("span",[t._v("商家"+t._s(t.message.merchant))])])],1):t._e()],1):t._e(),e("v-uni-view",{staticClass:"hongren-content"},[e("v-uni-view",{staticClass:"topimg"},[e("img",{attrs:{src:t.supply["img"]}}),e("v-uni-view",{staticClass:"title ellipsis"},[t._v(t._s(t.supply.title))])],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"cu-list menu"},[e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("平台要求")])],1),t.supply.platform?e("v-uni-view",{staticClass:"action"},t._l(t.supply.platform,(function(i,a){return e("v-uni-view",{key:a,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(i))])})),1):e("v-uni-view",{staticClass:"action"},[t._v("不限")])],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("商品房类")])],1),t.supply.category?e("v-uni-view",{staticClass:"action",staticStyle:{padding:"5px 0"}},t._l(t.supply.category,(function(i,a){return e("v-uni-view",{key:a,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(i))])})),1):e("v-uni-view",{staticClass:"action"},[t._v("不限")])],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("粉丝要求")])],1),t.supply.fans?e("v-uni-view",{staticClass:"action"},[t._v(t._s(t.supply.fans)+"万以上")]):e("v-uni-view",{staticClass:"action"},[t._v("不限")])],1)],1),e("v-uni-view",{staticClass:"cu-list menu"},[e("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("合作信息")]),t.supply.nowprice?e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("券后价格")])],1),e("v-uni-view",{staticClass:"action cor-e8"},[e("span",{staticStyle:{"font-size":"3.5vw"}},[t._v("￥")]),e("span",{staticStyle:{"font-size":"4vw","font-weight":"bold"}},[t._v(t._s(t.supply.nowprice))])])],1):t._e(),t.supply.pay_type?e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("合作形式")])],1),e("v-uni-view",{staticClass:"action"},[1==t.supply.pay_type?e("v-uni-view",{staticClass:"cu-tag line-green round",staticStyle:{margin:"0"}},[t._v("预付费")]):t._e(),2==t.supply.pay_type?e("v-uni-view",{staticClass:"cu-tag line-green round",staticStyle:{margin:"0"}},[t._v("纯佣金")]):t._e(),3==t.supply.pay_type?e("v-uni-view",{staticClass:"cu-tag line-green round",staticStyle:{margin:"0"}},[t._v("预付费+纯佣金")]):t._e(),e("v-uni-view",{staticClass:"cu-tag cor-e8",staticStyle:{margin:"0","margin-left":"2vw","font-size":"4vw","font-weight":"bold",background:"#fff"}},[t._v(t._s(t.supply.commission)+"%")])],1)],1):t._e()],1),e("v-uni-view",{staticClass:"cu-list menu"},[t.supply.details?e("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("产品详情")]):t._e(),t.supply.details?e("v-uni-view",{staticClass:"supplydetails",domProps:{innerHTML:t._s(t.supply.details)}}):t._e()],1),e("v-uni-view",{staticClass:"cu-list menu"},[e("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("联系方式")]),t.supply.contact?e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("对接商务")])],1),e("v-uni-view",{staticClass:"action"},[t._v(t._s(t.supply.contact))])],1):t._e(),t.supply.mobile?e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("联系电话")])],1),e("v-uni-view",{staticClass:"action"},[t._v(t._s(t._f("intercept")(t.supply.mobile)))])],1):t._e()],1),t.supply.purpose?e("v-uni-view",{staticClass:"cu-list menu"},[e("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("意向人数")]),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-view",{staticClass:"group"},t._l(t.supply.purpose,(function(t,i){return e("v-uni-view",{key:i,staticClass:"cu-avatar round sm",style:{backgroundImage:"url(http://cdn.hongrensutui.com/uploads/hongrenicon/"+t+".jpg)"}})})),1)],1)],1)],1):t._e()],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"bg-img"},[e("img",{staticClass:"wechat",attrs:{src:"https://www.hongrensutui.com/h5/img/wechat.png",mode:"widthFix"}}),e("v-uni-view",{staticClass:"tip"},[t._v("咨询微信：zhuoyu10086")]),e("v-uni-view",{staticClass:"cu-bar justify-center text-white"},[e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[e("v-uni-view",{staticClass:"customer round shadow text-center"},[e("v-uni-view",{staticClass:"bottombtn clearfix"},[e("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Image"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showModal.apply(void 0,arguments)}}},[t._v("合作对接")])],1)],1)],1)],1):t._e()},n=[];e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}))},"83cd":function(t,i,e){"use strict";var a,s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?e("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[e("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?e("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():e("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?e("span",[t.title?e("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):e("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?e("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img&&1==t.barid?e("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e(),t.img&&1!=t.barid?e("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right2.png"}}):t._e()])])},n=[];e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}))},"84e5":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.tipnews[data-v-2028827f]{height:15vw;position:fixed;color:#fff;z-index:999999;top:24vw}.hongren-content[data-v-2028827f]{position:fixed;\ntop:0;\nleft:0;right:0;bottom:0;padding-bottom:20vw;overflow-y:scroll;overflow-x:hidden;\n\t/* background: #fff; */-webkit-transform:translateZ(0);transform:translateZ(0)}.action.avatar[data-v-2028827f]{text-align:right}.action[data-v-2028827f]{-webkit-box-flex:3;-webkit-flex:3;flex:3}.topimg[data-v-2028827f]{width:100vw;width:100vw;position:relative}.topimg img[data-v-2028827f]{width:100%;width:100%}.topimg .title[data-v-2028827f]{background-image:url(https://www.hongrensutui.com/h5/img/anli_bg.png);background-repeat:repeat-x;background-position:bottom;position:absolute;left:0;bottom:0;right:0;height:45px;padding-left:4vw;color:#fff;line-height:50px;font-size:4.4vw;font-size:500}\n\n/* 联系客服 */.customer[data-v-2028827f]{height:10vw;line-height:10vw;margin:auto;font-size:4vw;text-align:center;z-index:9990}.customer .bottombtn[data-v-2028827f]{width:94vw;height:100%;margin:auto;color:#fff;border-radius:10vw}.customer .bottombtn .offerbtn[data-v-2028827f]{width:50%;float:left;background-color:#203c60;border-top-left-radius:1.5vw;border-bottom-left-radius:1.5vw}.customer .bottombtn .custbtn[data-v-2028827f]{width:100%;float:left;background-color:#e71d36;border-radius:1.5vw\n\t/* border-bottom-right-radius:1.5vw; */}.cu-tag[data-v-2028827f]{margin:5px}\n\n/* 联系客服弹框*/.cu-modal[data-v-2028827f]{z-index:210}.cu-dialog[data-v-2028827f]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-2028827f]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-2028827f]{width:auto}.cuIcon-close[data-v-2028827f]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}.wechat[data-v-2028827f]{width:200px;height:200px}.tip[data-v-2028827f]{color:#fff;margin:2vw 0;font-size:3.4vw}.member[data-v-2028827f]{width:100vw;padding:3vw}.member .item[data-v-2028827f]{width:100%;height:24vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:3vw;background-color:#fdfdfd;padding:2vw;border-radius:1.5vw;box-shadow:0 1px 2px rgba(26,26,26,.1)}.member .item .img[data-v-2028827f]{width:20vw;height:20vw;border-radius:1.5vw;margin-right:2vw}.member .item .img uni-image[data-v-2028827f]{width:100%;height:100%;border-radius:1.5vw}.member .item .count[data-v-2028827f]{width:68vw;height:20vw}.member .item .name[data-v-2028827f]{font-size:3.5vw;height:10vw;padding:1vw 0;line-height:4vw;width:100%}.member .item .fans[data-v-2028827f]{font-size:3vw;line-height:5vw}.member .item .fans .nowprice[data-v-2028827f]{font-size:4vw;font-weight:700;margin-right:2vw}.member .item .fans .totalprice[data-v-2028827f]{font-size:3vw;text-decoration:line-through}.member .item .time[data-v-2028827f]{font-size:2.5vw;line-height:4vw}.member .item .time .commission[data-v-2028827f]{margin-right:2vw}.cu-list.menu[data-v-2028827f]{padding:0 3vw;background-color:#fff}.cu-list+.cu-list[data-v-2028827f]{margin-top:3vw}.cu-list.menu>.cu-item[data-v-2028827f]{\n\t/* min-height:40px; */padding:0}.group[data-v-2028827f]{padding:3vw}.group .cu-avatar.sm[data-v-2028827f]{margin-left:0;margin:.8vw}.supplytitle[data-v-2028827f]{padding:3vw 0;font-size:4vw;font-weight:700;position:relative}.borderleft[data-v-2028827f]{text-indent:3vw}.borderleft[data-v-2028827f]::after{content:"";width:2vw;height:10vw;background-color:#e71d36;left:0;top:3.5vw}.supplytitle.top[data-v-2028827f]{font-size:5vw}.supplydetails[data-v-2028827f]{padding:3vw 0}',""]),t.exports=i},"9b8e":function(t,i,e){"use strict";e.r(i);var a=e("0f5e"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},"9ebb":function(t,i,e){"use strict";var a=e("5043"),s=e.n(a);s.a},aa9f:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.auth[data-v-9df7cb58]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-9df7cb58]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-9df7cb58]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-9df7cb58]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-9df7cb58]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-9df7cb58]{height:100vh;z-index:300}.cu-bar[data-v-9df7cb58]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-9df7cb58]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-9df7cb58]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-9df7cb58]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-9df7cb58]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9df7cb58]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9df7cb58]{width:auto}.cuIcon-close[data-v-9df7cb58]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=i},b17d:function(t,i,e){var a=e("aa9f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("2d0d384a",a,!0,{sourceMap:!1,shadowMode:!1})},c4f3:function(t,i,e){"use strict";var a=e("b17d"),s=e.n(a);s.a},e3d7:function(t,i,e){"use strict";e.r(i);var a=e("83cd"),s=e("9b8e");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("c4f3");var o,r=e("f0c5"),u=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"9df7cb58",null,!1,a["a"],o);i["default"]=u.exports}}]);