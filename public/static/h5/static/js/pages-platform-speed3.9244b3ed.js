(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-platform-speed3"],{"0119":function(t,i,a){"use strict";var e,n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?a("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[a("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?a("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():a("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?a("span",[t.title?a("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):a("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?a("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img&&1==t.barid?a("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e(),t.img&&1!=t.barid?a("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right2.png"}}):t._e()])])},o=[];a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}))},"04ca":function(t,i,a){"use strict";var e=a("8256"),n=a.n(e);n.a},"107e":function(t,i,a){"use strict";a.r(i);var e=a("39b9"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},"32fa":function(t,i,a){var e=a("8bbf");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("69af0823",e,!0,{sourceMap:!1,shadowMode:!1})},"39b9":function(t,i,a){"use strict";a("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};i.default=e},6608:function(t,i,a){"use strict";a.r(i);var e=a("b016"),n=a("ca86");for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("7187");var r,c=a("f0c5"),s=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"c471bc08",null,!1,e["a"],r);i["default"]=s.exports},7187:function(t,i,a){"use strict";var e=a("32fa"),n=a.n(e);n.a},8256:function(t,i,a){var e=a("850b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("3c3c30eb",e,!0,{sourceMap:!1,shadowMode:!1})},"850b":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'.auth[data-v-9df7cb58]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-9df7cb58]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-9df7cb58]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-9df7cb58]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-9df7cb58]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-9df7cb58]{height:100vh;z-index:300}.cu-bar[data-v-9df7cb58]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-9df7cb58]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-9df7cb58]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-9df7cb58]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-9df7cb58]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9df7cb58]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9df7cb58]{width:auto}.cuIcon-close[data-v-9df7cb58]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=i},"8bbf":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'.hongren[data-v-c471bc08]{background-image:url(https://www.hongrensutui.com/h5/img/banner_bg.png);background-repeat:no-repeat;background-position:top;background-size:100%;background-color:#fff;bottom:50px}.bg-fff[data-v-c471bc08]{margin-bottom:0}.cu-bar[data-v-c471bc08]{position:static}.nothave[data-v-c471bc08]{font-size:3.5vw;padding-bottom:3vw;color:#999}.card[data-v-c471bc08]{background-color:#fff;margin:3vw;border-radius:1.5vw}.cu-bar.foot[data-v-c471bc08]{z-index:199}.cu-bar.foot[data-v-c471bc08]{position:fixed;bottom:0;left:0;right:0;width:100%;height:50px;min-height:50px;z-index:200;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar.foot .text-red[data-v-c471bc08]{color:#e71d36}.cu-bar.foot .text-gray[data-v-c471bc08]{color:#9eb3c2}.cu-bar.foot.tabbar.shadow[data-v-c471bc08]{box-shadow:0 -1px 2px rgba(26,26,26,.1)}uni-button[data-v-c471bc08]{border-radius:100vw}.cu-btn[class*="line"][data-v-c471bc08]::after{border-radius:100vw}.cardtitle[data-v-c471bc08]{text-align:center;padding-top:25px;font-size:5vw;padding-bottom:15px;font-weight:700}.customer[data-v-c471bc08]{height:10vw;line-height:10vw;margin:auto;font-size:4vw;text-align:center;z-index:9990}.customer .bottombtn[data-v-c471bc08]{width:94vw;height:100%;margin:auto;color:#fff;border-radius:10vw}.customer .bottombtn .offerbtn[data-v-c471bc08]{width:100%;float:left;background-color:#e71d36;border-radius:10vw}.objective[data-v-c471bc08]{padding:0 10vw;font-size:4.5vw;color:#ffb759;height:44px;line-height:44px;margin:4vw 3vw;border-radius:20vw;border:#ffb759 1px solid\n\t/* box-shadow: 0 1px 2px rgba(26, 26, 26, 0.1); */}.objective.active[data-v-c471bc08]{color:#fff;background-color:#ffb759}',""]),t.exports=i},b016:function(t,i,a){"use strict";var e,n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("uni-top-bar",{attrs:{title:t.toptitle}}),a("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+"px"}},[a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"cardtitle"},[t._v("您希望网红的粉丝量有多少？")]),a("v-uni-view",{staticClass:"objective",class:99==t.id?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.objective(99)}}},[t._v("不限")]),a("v-uni-view",{staticClass:"objective",class:10==t.id?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.objective(10)}}},[t._v("10w以下")]),a("v-uni-view",{staticClass:"objective",class:100==t.id?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.objective(100)}}},[t._v("10w~100w")]),a("v-uni-view",{staticClass:"objective",class:500==t.id?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.objective(500)}}},[t._v("100w~500w")]),a("v-uni-view",{staticClass:"objective",class:1e3==t.id?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.objective(1e3)}}},[t._v("500w~1000w")]),a("v-uni-view",{staticClass:"objective",class:1001==t.id?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.objective(1001)}}},[t._v("1000w以上")])],1)],1),a("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[a("v-uni-view",{staticClass:"customer round shadow text-center"},[a("v-uni-view",{staticClass:"bottombtn clearfix"},[a("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.next.apply(void 0,arguments)}}},[t._v("下一步 (3/4)")])],1)],1)],1)],1)},o=[];a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}))},b9e2:function(t,i,a){"use strict";var e=a("ee27");a("d3b7"),a("25f0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("d654")),o={components:{uniTopBar:n.default},data:function(){return{id:"",height:"",toptitle:"红人速配",userInfo:"",addressData:[]}},onLoad:function(t){var i=this;this.height=this.StatusBar,i.addressData=JSON.parse(t.addressData),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:a.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),i.userInfo=t.data.data.info}})},fail:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),i.userInfo=t.data.data.info}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?i.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},methods:{updateuser:function(t){var i=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),i.userInfo=t.data.data.info):wxlogin()}})},objective:function(t){this.id=t,this.addressData.fans=t},next:function(){if(!this.addressData.fans)return uni.showToast({title:"请选择您希望网红的粉丝量？",icon:"none",duration:3e3}),!1;uni.navigateTo({url:"/pages/platform/speed4?addressData="+JSON.stringify(this.addressData)})},share:function(t){function i(i,a,e){return t.apply(this,arguments)}return i.toString=function(){return t.toString()},i}((function(t,i,a){var e=t.title,n=t.title+"，点击查看详情";if(t.img)var o=t.img;else o="https://www.hongrensutui.com/uploads/share/news_logo.png";share(e,n,o,a)}))}};i.default=o},ca86:function(t,i,a){"use strict";a.r(i);var e=a("b9e2"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},d654:function(t,i,a){"use strict";a.r(i);var e=a("0119"),n=a("107e");for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("04ca");var r,c=a("f0c5"),s=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"9df7cb58",null,!1,e["a"],r);i["default"]=s.exports}}]);