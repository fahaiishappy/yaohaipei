(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-supply-details"],{"0e09":function(t,i,e){var a=e("d550");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("73ec6ea8",a,!0,{sourceMap:!1,shadowMode:!1})},1925:function(t,i,e){"use strict";var a=e("0e09"),n=e.n(a);n.a},"378d":function(t,i,e){"use strict";var a=e("f39f"),n=e.n(a);n.a},4674:function(t,i,e){"use strict";e.r(i);var a=e("7137"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},"5ad0":function(t,i,e){"use strict";e.r(i);var a=e("8a0d"),n=e("4674");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("378d");var o,u=e("f0c5"),c=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"e4d1a924",null,!1,a["a"],o);i["default"]=c.exports},7137:function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};i.default=a},"8a0d":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?e("span",{staticClass:"clearfix"},[t.title?e("span",{staticClass:"title"},[t._v(t._s(t.title))]):e("span",{staticClass:"title"},[t._v("红人速推")])]):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])},s=[]},c662:function(t,i,e){"use strict";var a=e("4ea4");e("d3b7"),e("ac1f"),e("25f0"),e("5319"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("5ad0")),s={components:{uniTopBar:n.default},data:function(){return{modalName:null,merchant:"",supplyid:"",supply:"",goods:"",yxhz:"",toptitle:"供求信息",userInfo:[],codetime:2e3,tip:!1,message:"",messagelist:"",height:"",showpage:!1,config:"",supplycount:"max-height:70vw",see:!1,liuyan:"",countent:"",currentuser:!0,notliuyan:"用户没有留言或商家设为私密!"}},filters:{intercept:function(t){var i="";return t&&t.length>1&&(i=t[0]+t[1]+t[2]+"****"+t[7]+t[8]+t[9]+t[10]),i},formatDate:function(t){var i=new Date(1e3*t),e=i.getFullYear(),a=i.getMonth()+1;a=a<10?"0"+a:a;var n=i.getDate();n=n<10?"0"+n:n;var s=i.getHours();s=s<10?"0"+s:s;var o=i.getMinutes();o=o<10?"0"+o:o;var u=i.getSeconds();return u=u<10?"0"+u:u,e+"-"+a+"-"+n},nickname:function(t){var i="";return t&&t.length>1&&(i=t[0]+t[1]+"***"),i}},onLoad:function(t){var i=this;uni.request({url:"https://www.hongrensutui.com/api/index/h5config",method:"POST",success:function(t){i.config=t.data.data.list}}),uni.showLoading({title:"加载中,请稍后..."}),this.height=this.StatusBar,t.id&&(i.supplyid=t.id),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:e.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),i.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),i.supplydetails()}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){i.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),i.supplydetails()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?i.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),i.getmessage(),i.timerInt=setInterval((function(){if(i.codetime--,i.message=i.messagelist[i.getRandomArbitrary(0,50)],i.message.celebrity&&i.message.celebrity.length>1&&(i.message.celebrity=i.message.celebrity[0]+i.message.celebrity[1]+"***"),i.message.merchant&&i.message.merchant.length>1&&(i.message.merchant=i.message.merchant[0]+i.message.merchant[1]+"***"),i.tip=!i.tip,0==i.codetime)return clearInterval(i.timerInt),void(i.codetime=2e3)}),4e3)},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(i){""!=i.data&&null!=i.data&&t.updateuser(i.data.id)}})},methods:{updateuser:function(t){var i=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(i.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),i.supplydetails()):wxlogin()}})},getRandomArbitrary:function(t,i){return Math.floor(Math.random()*(i-t)+t)},getmessage:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/message",method:"POST",success:function(i){t.messagelist=i.data.data.list,t.message=t.messagelist[t.getRandomArbitrary(0,50)],t.message.celebrity&&t.message.celebrity.length>1&&(t.message.celebrity=t.message.celebrity[0]+t.message.celebrity[1]+"***"),t.message.merchant&&t.message.merchant.length>1&&(t.message.merchant=t.message.merchant[0]+t.message.merchant[1]+"***"),t.tip=!t.tip}})},supplydetails:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/supplydetails",data:{id:t.supplyid},method:"POST",success:function(i){t.supply=i.data.data.info,t.see=t.supply.see;var e=i.data.data.info.details;t.supply.details=e.replace(/\<img/gi,'<img style="width:100%;height:auto;display:block" '),t.supply.mid==t.userInfo.id&&(t.currentuser=!1),t.supply.details&&(uni.hideLoading(),t.showpage=!0),t.liuyanlist(t.supply.id),t.share(t.supply,t.userInfo.company_id,t.userInfo.id)}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},clicksee:function(t){this.supplycount="height:auto",this.see=!1},details:function(t,i){uni.navigateTo({url:"/pages/merchant/details?id="+i})},liuyanlist:function(t){var i=this;uni.request({url:"https://www.hongrensutui.com/api/index/liuyan",data:{supplyid:i.supplyid},method:"POST",success:function(t){i.liuyan=t.data.data.list}})},toliuyan:function(){this.modalName="liuyan"},getliuyan:function(){var t=this;uni.getStorage({key:"userInfo",success:function(i){if(!t.countent)return uni.showToast({title:"留言内容不能为空",icon:"none",duration:3e3}),!1;uni.request({url:"https://www.hongrensutui.com/api/index/getliuyan",data:{title:t.countent,supplyid:t.supplyid,mid:i.data.id,nickname:i.data.nickname,avatar:i.data.avatar},method:"post",dataType:"json",success:function(i){uni.showToast({icon:"none",title:"留言成功，审核通过后显示！"}),t.modalName=null},fail:function(t){uni.showToast({icon:"none",title:"留言失败！"})}})},fail:function(t){wxlogin()}})},share:function(t){function i(i,e,a){return t.apply(this,arguments)}return i.toString=function(){return t.toString()},i}((function(t,i,e){var a=t.title,n=t.title+"，点击查看详情";if(t.img)var s=t.img;else s="https://www.hongrensutui.com/uploads/share/news_logo.png";share(a,n,s,e)}))}};i.default=s},d550:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.tipnews[data-v-57a7d894]{height:15vw;position:fixed;color:#fff;z-index:999999;top:12vw}.hongren-content[data-v-57a7d894]{position:fixed;\ntop:0;\nleft:0;right:0;bottom:0;padding-bottom:44px;overflow-y:scroll;overflow-x:hidden;\n\t/* background: #fff; */-webkit-transform:translateZ(0);transform:translateZ(0)}.action.avatar[data-v-57a7d894]{text-align:right}.action[data-v-57a7d894]{-webkit-box-flex:3;-webkit-flex:3;flex:3}.topimg[data-v-57a7d894]{width:100vw;height:100vw;position:relative}.topimg img[data-v-57a7d894]{width:100%;height:100%}.topimg .title[data-v-57a7d894]{background-image:url(https://www.hongrensutui.com/h5/img/anli_bg.png);background-repeat:repeat-x;background-position:bottom;position:absolute;left:0;bottom:0;right:0;height:45px;padding-left:4vw;font-weight:700;color:#fff;line-height:50px;font-size:4.4vw;font-size:500}\n\n/* 联系客服 */.customer[data-v-57a7d894]{height:10vw;line-height:10vw;margin:auto;font-size:4vw;text-align:center;z-index:9990}.customer .bottombtn[data-v-57a7d894]{width:94vw;height:100%;margin:auto;color:#fff;border-radius:10vw}.customer .bottombtn .offerbtn[data-v-57a7d894]{width:50%;float:left;background-color:#203c60;border-top-left-radius:1.5vw;border-bottom-left-radius:1.5vw}.customer .bottombtn .custbtn[data-v-57a7d894]{width:100%;float:left;background-color:#e71d36;border-radius:1.5vw\n\t/* border-bottom-right-radius:1.5vw; */}.cu-tag[data-v-57a7d894]{margin:5px}\n\n/* 联系客服弹框*/.cu-modal[data-v-57a7d894]{z-index:210}.config .cu-dialog[data-v-57a7d894]{background-color:initial;width:auto;padding:4vw;height:auto}.config .cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-57a7d894]{margin:0}.config .cu-bar.tabbar .action [class*="cuIcon-"][data-v-57a7d894]{width:auto}.config .cuIcon-close[data-v-57a7d894]:before{background-color:rgba(0,0,0,.5);padding:3vw;border-radius:50%}.config .service[data-v-57a7d894]{padding:3vw;background-color:#fff;border-radius:1.5vw}.config .service .wechat[data-v-57a7d894]{width:200px;height:200px;border-radius:3vw}.config .service .tip[data-v-57a7d894]{color:#333;margin-bottom:2vw;font-size:3.4vw}.member[data-v-57a7d894]{width:100vw;padding:3vw}.member .item[data-v-57a7d894]{width:100%;height:24vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:3vw;background-color:#fdfdfd;padding:2vw;border-radius:1.5vw;box-shadow:0 1px 2px rgba(26,26,26,.1)}.member .item .img[data-v-57a7d894]{width:20vw;height:20vw;border-radius:1.5vw;margin-right:2vw}.member .item .img uni-image[data-v-57a7d894]{width:100%;height:100%;border-radius:1.5vw}.member .item .count[data-v-57a7d894]{width:68vw;height:20vw}.member .item .name[data-v-57a7d894]{font-size:3.5vw;height:10vw;padding:1vw 0;line-height:4vw;width:100%}.member .item .fans[data-v-57a7d894]{font-size:3vw;line-height:5vw}.member .item .fans .nowprice[data-v-57a7d894]{font-size:4vw;font-weight:700;margin-right:2vw}.member .item .fans .totalprice[data-v-57a7d894]{font-size:3vw;text-decoration:line-through}.member .item .time[data-v-57a7d894]{font-size:2.5vw;line-height:4vw}.member .item .time .commission[data-v-57a7d894]{margin-right:2vw}.cu-list.menu[data-v-57a7d894]{padding:0 3vw;background-color:#fff}.cu-list+.cu-list[data-v-57a7d894]{margin-top:3vw}.cu-list.menu>.cu-item[data-v-57a7d894]{\n\t/* min-height:40px; */padding:0}.group[data-v-57a7d894]{padding:3vw}.group .cu-avatar.sm[data-v-57a7d894]{margin-left:0;margin:.8vw}.supplytitle[data-v-57a7d894]{padding:3vw 0;font-size:4vw;font-weight:700;position:relative}.borderleft[data-v-57a7d894]{text-indent:3vw}.borderleft[data-v-57a7d894]::after{content:"";width:2vw;height:10vw;background-color:#e71d36;left:0;top:3.5vw}.supplytitle.top[data-v-57a7d894]{font-size:5vw}.supplycount[data-v-57a7d894]{overflow:hidden;position:relative;margin-bottom:3vw}.supplydetails[data-v-57a7d894]{padding:3vw 0}.supplydetailsimg img[data-v-57a7d894]{width:100%;display:block}.cu-avatar[data-v-57a7d894]{border-radius:1vw}.see[data-v-57a7d894]{background-image:url(https://www.hongrensutui.com/h5/img/anli_bg2.png);background-repeat:repeat-x;background-position:bottom;position:absolute;left:0;bottom:0;right:0;height:60px;color:#fff;line-height:60px;font-size:4vw;text-align:center}.liuyan .cu-bar[data-v-57a7d894]{position:static}.liuyan .close[data-v-57a7d894]{position:absolute}.liuyan .content[data-v-57a7d894]{width:100%;position:static}',""]),t.exports=i},d5eb:function(t,i,e){"use strict";e.r(i);var a=e("f3bb"),n=e("f7b2");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("1925");var o,u=e("f0c5"),c=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"57a7d894",null,!1,a["a"],o);i["default"]=c.exports},ee32:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.cu-bar[data-v-e4d1a924]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-e4d1a924]{margin-left:3vw;height:30px}.cuIcon-back[data-v-e4d1a924]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-e4d1a924]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-e4d1a924]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-e4d1a924]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-e4d1a924]{width:auto}.cuIcon-close[data-v-e4d1a924]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=i},f39f:function(t,i,e){var a=e("ee32");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("7be1ffd1",a,!0,{sourceMap:!1,shadowMode:!1})},f3bb:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.showpage?e("v-uni-view",[t.message?e("v-uni-view",{staticClass:"tipnews"},[t.tip?e("v-uni-view",{staticClass:"animated1 fadeInRight"},[e("v-uni-view",{staticClass:"cuIcon-notificationfill"}),e("span",[e("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),e("span",[t._v("网红"+t._s(t.message.celebrity))]),t._v("查看了"),e("span",[t._v("该商品")])])],1):t._e()],1):t._e(),e("v-uni-view",{staticClass:"hongren-content"},[e("v-uni-view",{staticClass:"topimg"},[e("img",{attrs:{src:t.supply["img"]}}),e("v-uni-view",{staticClass:"title ellipsis"},[t._v(t._s(t.supply.title))])],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"cu-list menu"},[e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("平台要求")])],1),t.supply.platform?e("v-uni-view",{staticClass:"action"},t._l(t.supply.platform,(function(i,a){return e("v-uni-view",{key:a,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(i))])})),1):e("v-uni-view",{staticClass:"action"},[t._v("不限")])],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("商品分类")])],1),t.supply.category?e("v-uni-view",{staticClass:"action",staticStyle:{padding:"5px 0"}},t._l(t.supply.category,(function(i,a){return e("v-uni-view",{key:a,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(i))])})),1):e("v-uni-view",{staticClass:"action"},[t._v("不限")])],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("粉丝要求")])],1),t.supply.fans?e("v-uni-view",{staticClass:"action"},[t._v(t._s(t.supply.fans)+"万以上")]):e("v-uni-view",{staticClass:"action"},[t._v("不限")])],1)],1),e("v-uni-view",{staticClass:"cu-list menu"},[e("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("合作信息")]),t.supply.nowprice?e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("券后价格")])],1),e("v-uni-view",{staticClass:"action cor-e8"},[e("span",{staticStyle:{"font-size":"3.5vw"}},[t._v("￥")]),e("span",{staticStyle:{"font-size":"4vw","font-weight":"bold"}},[t._v(t._s(t.supply.nowprice))])])],1):t._e(),t.supply.pay_type?e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("合作形式")])],1),e("v-uni-view",{staticClass:"action"},[1==t.supply.pay_type?e("v-uni-view",{staticClass:"cu-tag line-green round",staticStyle:{margin:"0"}},[t._v("坑位费")]):t._e(),2==t.supply.pay_type?e("v-uni-view",{staticClass:"cu-tag line-green round",staticStyle:{margin:"0"}},[t._v("纯佣金")]):t._e(),3==t.supply.pay_type?e("v-uni-view",{staticClass:"cu-tag line-green round",staticStyle:{margin:"0"}},[t._v("坑位费+纯佣金")]):t._e(),e("v-uni-view",{staticClass:"cu-tag cor-e8",staticStyle:{margin:"0","margin-left":"2vw","font-size":"4vw","font-weight":"bold",background:"#fff"}},[t._v(t._s(t.supply.commission)+"%")])],1)],1):t._e()],1),e("v-uni-view",{staticClass:"cu-list menu"},[t.supply.details?e("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("产品详情")]):t._e(),e("v-uni-view",{staticClass:"supplycount",style:t.supplycount},[t.supply.details?e("v-uni-view",{staticClass:"supplydetails",domProps:{innerHTML:t._s(t.supply.details)}}):t._e(),t.supply.detailimg?e("v-uni-view",{staticClass:"supplydetailsimg"},t._l(t.supply.detailimg,(function(t,i){return e("img",{key:i,attrs:{src:t,mode:"widthFix"}})})),0):t._e(),t.see?e("v-uni-view",{staticClass:"see"},[e("v-uni-view",{staticClass:"cu-btn round bg-orange sm",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clicksee.apply(void 0,arguments)}}},[t._v("点击查看全部")])],1):t._e()],1)],1),e("v-uni-view",{staticClass:"cu-list menu"},[e("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("联系方式")]),t.supply.contact?e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("联系人")])],1),e("v-uni-view",{staticClass:"action"},[t._v(t._s(t.supply.contact))])],1):t._e(),t.supply.mobile?e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-grey"},[t._v("联系电话")])],1),e("v-uni-view",{staticClass:"action"},[t._v(t._s(t._f("intercept")(t.supply.mobile)))])],1):t._e()],1),t.supply.purpose?e("v-uni-view",{staticClass:"cu-list menu"},[e("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft"},[t._v("谁看过他")]),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-view",{staticClass:"group"},[t._l(t.supply.purpose,(function(t,i){return e("v-uni-view",{key:i,staticClass:"cu-avatar sm",style:{backgroundImage:"url("+t+")"}})})),t.supply.people>100?e("span",{staticStyle:{"margin-left":"1vw",position:"relative",top:"0.5vw",color:"#8799a3"}},[t._v("等"+t._s(t.supply.people)+"人")]):t._e()],2)],1)],1)],1):t._e(),e("v-uni-view",{staticClass:"cu-list menu"},[e("v-uni-view",{staticClass:"supplytitle solid-bottom borderleft",staticStyle:{display:"flex","justify-content":"space-between"}},[e("v-uni-view",[t._v("用户留言")]),t.currentuser?e("v-uni-view",{staticClass:"cu-tag bg-orange round",staticStyle:{margin:"0","text-indent":"0"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toliuyan.apply(void 0,arguments)}}},[t._v("我要留言")]):t._e()],1),t.liuyan.length>0?e("v-uni-view",{staticClass:"cu-list menu-avatar comment"},t._l(t.liuyan,(function(i,a){return e("v-uni-view",{key:a,staticClass:"cu-item"},[e("v-uni-view",{staticClass:"cu-avatar round",style:"background-image:url("+i.avatar+")"}),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(t._f("nickname")(i.nickname)))]),e("v-uni-view",{staticClass:"text-gray text-content text-df"},[t._v(t._s(i.title))])],1)],1)})),1):e("v-uni-view",{staticClass:"no-data"},[t._v(t._s(t.notliuyan))])],1)],1)],1),e("v-uni-view",{staticClass:"cu-modal config",class:"Image"==t.modalName?"show":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",staticStyle:{width:"auto"}},[e("v-uni-view",{staticClass:"bg-img"},[e("v-uni-view",{staticClass:"service"},[e("img",{staticClass:"wechat",attrs:{src:t.config.service,mode:"widthFix"}}),e("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.config.servicetip))])],1),e("v-uni-view",{staticClass:"cu-bar justify-center text-white",staticStyle:{"margin-top":"3vw"}},[e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-modal liuyan",class:"liuyan"==t.modalName?"show":""},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[e("v-uni-view",{staticClass:"content"},[t._v("给商家留言")]),e("v-uni-view",{staticClass:"action close",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),e("v-uni-view",{staticClass:"padding-xl",staticStyle:{"background-color":"#fff"}},[e("v-uni-input",{staticStyle:{"text-align":"left"},attrs:{type:"text",placeholder:"请输入留言内容"},model:{value:t.countent,callback:function(i){t.countent=i},expression:"countent"}})],1),e("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[e("v-uni-view",{staticClass:"action",staticStyle:{position:"relative"}},[e("v-uni-button",{staticClass:"cu-btn bg-green",staticStyle:{position:"absolute",right:"0"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getliuyan.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[e("v-uni-view",{staticClass:"customer round shadow text-center"},[e("v-uni-view",{staticClass:"bottombtn clearfix"},[e("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Image"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showModal.apply(void 0,arguments)}}},[t._v("合作对接")])],1)],1)],1)],1):t._e()},s=[]},f7b2:function(t,i,e){"use strict";e.r(i);var a=e("c662"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a}}]);