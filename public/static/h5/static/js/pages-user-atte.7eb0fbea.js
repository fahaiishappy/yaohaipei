(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-atte"],{"0f5e":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=a},"56af":function(t,e,i){"use strict";i.r(e);var a=i("da3f"),n=i("bbe7");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("9e9e");var c,r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"f3ccace6",null,!1,a["a"],c);e["default"]=s.exports},"83cd":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[i("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?i("span",[t.title?i("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):i("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?i("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img&&1==t.barid?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e(),t.img&&1!=t.barid?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right2.png"}}):t._e()])])},o=[]},"9ac3":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".hongren[data-v-f3ccace6]{bottom:44px}.show[data-v-f3ccace6]{display:block!important}.hide[data-v-f3ccace6]{display:none!important}.title[data-v-f3ccace6]{padding:3vw}.privilege[data-v-f3ccace6]{padding-bottom:3vw}.privilege_tip[data-v-f3ccace6]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:3.3vw;padding:1.5vw 3vw}.icon[data-v-f3ccace6]{position:absolute;font-size:18vw;left:10.5vw;top:1vw}.mr-1[data-v-f3ccace6]{font-size:4.2vw;margin-right:2vw}.understand[data-v-f3ccace6]{text-align:center;line-height:8vw;font-size:3.5vw}.member[data-v-f3ccace6]{width:100vw;height:36vw;\r\n\t/* padding: 0 3vw; */overflow-x:scroll}.member-swiper[data-v-f3ccace6]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;padding:0 4vw}.member .item[data-v-f3ccace6]{float:left}.member .item .tab[data-v-f3ccace6]{padding:3vw;width:40vw;height:30vw;background-color:rgba(231,235,237,.3);border:1px solid #e7ebed;box-shadow:1px 1px 4px rgba(231,235,237,.2);border-radius:1.5vw;position:relative}.member .item .tab .cuIcon-roundcheckfill[data-v-f3ccace6]{position:absolute;font-size:7vw;color:#e71d36;bottom:1vw;z-index:220;right:2vw;z-index:220}.member .item .tab.active[data-v-f3ccace6]{background-color:rgba(250,219,217,.3);border:1px solid #fadbd9;box-shadow:1px 1px 2px rgba(229,77,66,.1)}.member .item .tab .name[data-v-f3ccace6]{font-size:4vw;padding-top:18vw;text-align:center;font-weight:600;color:#333}.member .item .tab .rate[data-v-f3ccace6]{position:absolute;top:0;right:0;background-color:#e71d36;color:#fff;font-size:2.6vw;padding:0 1vw;border-bottom-left-radius:1.5vw}.member .item .tab .price[data-v-f3ccace6]{color:red;padding-top:4vw;text-align:center;font-size:5.6vw;font-weight:700}.member .item .tab .price span[data-v-f3ccace6]{font-weight:700;font-size:3.5vw}.member .item .tab .average[data-v-f3ccace6]{text-align:center;font-size:3vw;padding-bottom:5vw}.member .item .tab .average.fracture[data-v-f3ccace6]{padding-bottom:0}.member .item .tab .cost-price[data-v-f3ccace6]{font-size:3vw;text-align:center;height:6vw;line-height:6vw;text-decoration:line-through}.membertip[data-v-f3ccace6]{margin-top:3vw;padding:3vw;background-color:#fff}.membertip .title[data-v-f3ccace6]{padding:0;margin-bottom:3vw;font-weight:700}.membertip .item[data-v-f3ccace6]{display:-webkit-box;display:-webkit-flex;display:flex}.membertip .item .name[data-v-f3ccace6]{height:24px;line-height:24px;margin:1vw 0}.membertip .item .introduction[data-v-f3ccace6]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.membertip .item .introduction .contentlable[data-v-f3ccace6]{margin:1vw 0;margin-right:2vw}.cu-tag+.cu-tag[data-v-f3ccace6]{margin:0}.bg-red[data-v-f3ccace6]{background-color:#e71d36}.bg-red.light[data-v-f3ccace6]{background-color:#e71d36;color:#fff}.paymentbtn[data-v-f3ccace6]{font-size:4.8vw;font-weight:700;margin:auto;width:80vw;text-align:center;line-height:12vw;border-radius:12vw;background-color:#e71d36;color:#fff;box-shadow:0 0 0 3px hsla(0,0%,87.1%,.3)}.cu-modal[data-v-f3ccace6]{z-index:210}.cu-dialog[data-v-f3ccace6]{background-color:initial;width:100vw;padding:4vw;height:auto}.auth[data-v-f3ccace6]{padding:6vw;border-radius:1.5vw;background-color:#fff}.auth .vip[data-v-f3ccace6]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}.auth .pay[data-v-f3ccace6]{border-radius:1.5vw;border:1px solid #ebebeb;text-align:center;color:#666;height:10vw;line-height:10vw}.auth .title[data-v-f3ccace6]{color:#333;margin-bottom:4vw}.loginbtn[data-v-f3ccace6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}uni-button[data-v-f3ccace6]::after{display:none}uni-button[data-v-f3ccace6]{position:static;display:block;margin-left:0;margin-right:0;padding-left:0;padding-right:0;box-sizing:initial;font-size:3.8vw;text-align:center;text-decoration:none;line-height:7vw;border-radius:1.5vw;-webkit-tap-highlight-color:transparent;overflow:visible;color:#333;background-color:initial;margin-top:3vw}uni-button.login[data-v-f3ccace6]{color:#39b54a}.customer[data-v-f3ccace6]{height:10vw;line-height:10vw;margin:auto;font-size:4vw;text-align:center;z-index:9990}.customer .bottombtn[data-v-f3ccace6]{width:94vw;height:100%;margin:auto;color:#fff;border-radius:10vw}.customer .bottombtn .custbtn[data-v-f3ccace6]{width:100%;background-color:#e71d36;border-radius:1.5vw}.bg-red[data-v-f3ccace6]{background-color:#fff0ff;color:#ff6f94}.bg-red.active[data-v-f3ccace6]{border:1px solid #ff6f94}.bg-blue[data-v-f3ccace6]{background-color:#f0f4ff;color:#7183ee}.bg-blue.active[data-v-f3ccace6]{border:1px solid #7183ee}",""]),t.exports=e},"9b8e":function(t,e,i){"use strict";i.r(e);var a=i("0f5e"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"9e9e":function(t,e,i){"use strict";var a=i("d083"),n=i.n(a);n.a},aa9f:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.auth[data-v-9df7cb58]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-9df7cb58]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-9df7cb58]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-9df7cb58]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-9df7cb58]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-9df7cb58]{height:100vh;z-index:300}.cu-bar[data-v-9df7cb58]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-9df7cb58]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-9df7cb58]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-9df7cb58]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-9df7cb58]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9df7cb58]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9df7cb58]{width:auto}.cuIcon-close[data-v-9df7cb58]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=e},b17d:function(t,e,i){var a=i("aa9f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2d0d384a",a,!0,{sourceMap:!1,shadowMode:!1})},b46f1:function(t,e,i){"use strict";var a=i("4ea4");i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("e3d7")),o={components:{uniTopBar:n.default},data:function(){return{modalName:null,choice:2,userInfo:"",toptitle:"入驻中心",height:""}},onLoad:function(t){var e=this;this.height=this.StatusBar,t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),e.updateuser(t.data.data.info.id)}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){e.updateuser(t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){e.updateuser(t.data.id)},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.updateuser(e.data.id)}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(e.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},navToatte:function(t){this.choice=t},navToDetailPage:function(t){var e=this;if(e.userInfo)if(1==e.choice)if(2==e.userInfo.type)uni.navigateTo({url:"/pages/user/cewebritymanage"});else{if(1==e.userInfo.type)return uni.showToast({icon:"none",title:"您已经入驻商家，不能再入驻红人了哦！"}),!1;uni.navigateTo({url:"/pages/user/attewh"})}else if(2==e.choice)if(1==e.userInfo.type){if(1==e.userInfo.examine)return uni.showToast({icon:"none",title:"您的商家入驻信息正在审核中..."}),!1;2==e.userInfo.examine?uni.navigateTo({url:"/pages/user/supply_list"}):uni.navigateTo({url:"/pages/user/attesj"})}else{if(2==e.userInfo.type)return uni.showToast({icon:"none",title:"您已经入驻红人，不能再入驻商家了哦！"}),!1;uni.navigateTo({url:"/pages/user/attesj"})}else uni.showToast({icon:"none",title:"请选择商家或红人"});else uni.showModal({title:"提示",content:"当前未登录，是否登录",success:function(t){t.confirm&&wxlogin()}})},hideModal:function(t){this.modalName=null},share:function(t){function e(e,i){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var i="红人速推 | 网红直播带货一站式服务平台",a="红人速推就是网红多 商家多，直播带货就上红人速推。",n="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(i,a,n,e)}))}};e.default=o},bbe7:function(t,e,i){"use strict";i.r(e);var a=i("b46f1"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},c4f3:function(t,e,i){"use strict";var a=i("b17d"),n=i.n(a);n.a},d083:function(t,e,i){var a=i("9ac3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("f4f1d810",a,!0,{sourceMap:!1,shadowMode:!1})},da3f:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-top-bar",{attrs:{title:t.toptitle}}),i("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[i("v-uni-view",{staticClass:"bg-fff"},[i("v-uni-view",{staticClass:"title",staticStyle:{"font-weight":"bold"}},[t._v("选择入驻类型")]),i("v-uni-view",{staticClass:"member"},[i("v-uni-view",{staticClass:"member-swiper"},[i("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToatte(1)}}},[i("v-uni-view",{staticClass:"tab bg-red",class:{active:1==t.choice},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToatte(1)}}},[1==t.choice?i("v-uni-view",{staticClass:"cuIcon-roundcheckfill"}):t._e(),i("v-uni-view",{staticClass:"cuIcon-group_fill icon"}),i("v-uni-view",{staticClass:"name"},[t._v("红人入驻")])],1)],1),i("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToatte(2)}}},[i("v-uni-view",{staticClass:"tab bg-blue",class:{active:2==t.choice}},[i("v-uni-view",{staticClass:"cuIcon-selectionfill icon"}),2==t.choice?i("v-uni-view",{staticClass:"cuIcon-roundcheckfill"}):t._e(),i("v-uni-view",{staticClass:"name"},[t._v("商家入驻")])],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"membertip"},[i("v-uni-view",{staticClass:"item",class:1==t.choice?"show":"hide"},[i("v-uni-view",{staticClass:"title"},[t._v("红人入驻特权")]),i("v-uni-view",{staticClass:"introduction clearfix"},[i("v-uni-view",{staticClass:"cu-tag radius light contentlable bg-grey"},[t._v("1、入驻成功后享有更多曝光；")]),i("v-uni-view",{staticClass:"cu-tag radius light contentlable bg-grey"},[t._v("2、入驻可免费发布网红信息；")]),i("v-uni-view",{staticClass:"cu-tag radius light contentlable bg-grey"},[t._v("3、享有平台精准推送商家资源；")])],1)],1),i("v-uni-view",{staticClass:"item",class:2==t.choice?"show":"hide"},[i("v-uni-view",{staticClass:"title"},[t._v("商家入驻特权")]),i("v-uni-view",{staticClass:"introduction clearfix"},[i("v-uni-view",{staticClass:"cu-tag radius light contentlable bg-grey"},[t._v("1、入驻成功后享有更多曝光；")]),i("v-uni-view",{staticClass:"cu-tag radius light contentlable bg-grey"},[t._v("2、入驻可免费发布带货商品；")]),i("v-uni-view",{staticClass:"cu-tag radius light contentlable bg-grey"},[t._v("3、享有平台精准推送纯佣金网红资源；")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[i("v-uni-view",{staticClass:"customer shadow text-center"},[i("v-uni-view",{staticClass:"bottombtn clearfix"},[i("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Image"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage.apply(void 0,arguments)}}},[t._v("立即入驻")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"bg-img"},[i("img",{staticClass:"wechat",attrs:{src:t.service,mode:"widthFix"}}),i("v-uni-view",{staticClass:"tip"},[t._v("免费入驻微信：zhuoyu10086")]),i("v-uni-view",{staticClass:"cu-bar justify-center text-white"},[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1)],1)},o=[]},e3d7:function(t,e,i){"use strict";i.r(e);var a=i("83cd"),n=i("9b8e");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("c4f3");var c,r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"9df7cb58",null,!1,a["a"],c);e["default"]=s.exports}}]);