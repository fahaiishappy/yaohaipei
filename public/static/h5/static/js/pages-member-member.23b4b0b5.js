(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-member"],{"0f5e":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=a},1148:function(t,e,i){"use strict";var a=i("a691"),n=i("1d80");t.exports="".repeat||function(t){var e=String(n(this)),i="",o=a(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(i+=e);return i}},2150:function(t,e,i){"use strict";i.r(e);var a=i("4039"),n=i("6f97");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("f224");var r,d=i("f0c5"),s=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"33ed8b80",null,!1,a["a"],r);e["default"]=s.exports},4039:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-top-bar",{attrs:{title:t.toptitle}}),i("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[i("v-uni-view",{staticClass:"bg-fff"},[i("v-uni-view",{staticClass:"title",staticStyle:{"font-weight":"bold"}},[t._v("选择会员套餐"),i("span",{staticClass:"cor-e8",staticStyle:{"font-size":"3.5vw","font-weight":"bold"}},[t._v("（即将恢复原价）")])]),i("v-uni-view",{staticClass:"member"},[i("v-uni-view",{staticClass:"member-swiper"},t._l(t.member,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navmember(e.id)}}},[i("v-uni-view",{staticClass:"tab",class:t.id==e.level?"active":""},[t.id==e.level?i("v-uni-view",{staticClass:"cuIcon-roundcheckfill"}):t._e(),i("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))]),e.discountedprice?i("v-uni-view",[i("v-uni-view",{staticClass:"rate"},[t._v(t._s(e.rate)+"折")]),i("v-uni-view",{staticClass:"price"},[i("span",[t._v("￥")]),t._v(t._s(t._f("numFilter")(e.discountedprice)))]),i("v-uni-view",{staticClass:"cost-price text-grey"},[t._v("￥"+t._s(t._f("numFilter")(e.price)))])],1):i("v-uni-view",[i("v-uni-view",{staticClass:"price"},[i("span",[t._v("￥")]),t._v(t._s(t._f("numFilter")(e.price)))]),i("v-uni-view",{staticClass:"cost-price text-grey"})],1)],1)],1)})),1)],1)],1),i("v-uni-view",{staticClass:"membertip"},t._l(t.member,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item",class:t.id==e.level?"show":"hide"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(e.name)+"特权")]),i("v-uni-view",{staticClass:"introduction clearfix"},t._l(e.content,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cu-tag radius light contentlable bg-grey"},[t._v(t._s(a+1)+"、"+t._s(e))])})),1)],1)})),1)],1),i("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[i("v-uni-view",{staticClass:"customer shadow text-center"},[i("v-uni-view",{staticClass:"bottombtn clearfix"},[i("v-uni-view",{staticClass:"custbtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openmember.apply(void 0,arguments)}}},[t._v("立即开通会员")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:"login"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("请登录后操作！")]),i("v-uni-view",{staticClass:"loginbtn"},[i("v-uni-button",{staticClass:"close",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),i("v-uni-button",{staticClass:"login",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"408a":function(t,e,i){var a=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},"6f97":function(t,e,i){"use strict";i.r(e);var a=i("f0c9"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"83cd":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[i("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?i("span",[t.title?i("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):i("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?i("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img&&1==t.barid?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e(),t.img&&1!=t.barid?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right2.png"}}):t._e()])])},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"9b8e":function(t,e,i){"use strict";i.r(e);var a=i("0f5e"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},aa9f:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.auth[data-v-9df7cb58]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-9df7cb58]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-9df7cb58]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-9df7cb58]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-9df7cb58]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-9df7cb58]{height:100vh;z-index:300}.cu-bar[data-v-9df7cb58]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-9df7cb58]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-9df7cb58]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-9df7cb58]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-9df7cb58]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9df7cb58]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9df7cb58]{width:auto}.cuIcon-close[data-v-9df7cb58]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=e},ae2f:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".hongren[data-v-33ed8b80]{bottom:44px}.show[data-v-33ed8b80]{display:block!important}.hide[data-v-33ed8b80]{display:none!important}.title[data-v-33ed8b80]{padding:3vw}.privilege[data-v-33ed8b80]{padding-bottom:3vw}.privilege_tip[data-v-33ed8b80]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:3.3vw;padding:1.5vw 3vw}.mr-1[data-v-33ed8b80]{font-size:4.2vw;margin-right:2vw}.understand[data-v-33ed8b80]{text-align:center;line-height:8vw;font-size:3.5vw}.member[data-v-33ed8b80]{width:100vw;height:36vw;\r\n\t/* padding: 0 3vw; */overflow-x:scroll}.member-swiper[data-v-33ed8b80]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;padding:0 4vw}.member .item[data-v-33ed8b80]{float:left}.member .item .tab[data-v-33ed8b80]{padding:3vw;width:40vw;height:30vw;background-color:rgba(231,235,237,.3);border:1px solid #e7ebed;box-shadow:1px 1px 4px rgba(231,235,237,.2);border-radius:1.5vw;position:relative}.member .item .tab .cuIcon-roundcheckfill[data-v-33ed8b80]{position:absolute;font-size:7vw;color:#e71d36;bottom:1vw;z-index:220;right:2vw;z-index:220}.member .item .tab.active[data-v-33ed8b80]{background-color:rgba(250,219,217,.3);border:1px solid #fadbd9;box-shadow:1px 1px 2px rgba(229,77,66,.1)}.member .item .tab .name[data-v-33ed8b80]{font-size:4vw;padding-top:1vw;text-align:center;font-weight:600;color:#333}.member .item .tab .rate[data-v-33ed8b80]{position:absolute;top:0;right:0;background-color:#e71d36;color:#fff;font-size:2.6vw;padding:0 1vw;border-bottom-left-radius:1.5vw}.member .item .tab .price[data-v-33ed8b80]{color:red;padding-top:4vw;text-align:center;font-size:5.6vw;font-weight:700}.member .item .tab .price span[data-v-33ed8b80]{font-weight:700;font-size:3.5vw}.member .item .tab .average[data-v-33ed8b80]{text-align:center;font-size:3vw;padding-bottom:5vw}.member .item .tab .average.fracture[data-v-33ed8b80]{padding-bottom:0}.member .item .tab .cost-price[data-v-33ed8b80]{font-size:3vw;text-align:center;height:6vw;line-height:6vw;text-decoration:line-through}\r\n/* .member .item .tab .introduction{\r\n\tfont-size: 3.2vw;\r\n\ttext-align: center;\r\n} */.membertip[data-v-33ed8b80]{margin-top:3vw;padding:3vw;background-color:#fff}.membertip .title[data-v-33ed8b80]{padding:0;margin-bottom:3vw;font-weight:700}.membertip .item[data-v-33ed8b80]{display:-webkit-box;display:-webkit-flex;display:flex}.membertip .item .name[data-v-33ed8b80]{height:24px;line-height:24px;margin:1vw 0}.membertip .item .introduction[data-v-33ed8b80]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.membertip .item .introduction .contentlable[data-v-33ed8b80]{margin:1vw 0;margin-right:2vw}.cu-tag+.cu-tag[data-v-33ed8b80]{margin:0}.bg-red[data-v-33ed8b80]{background-color:#e71d36}.bg-red.light[data-v-33ed8b80]{background-color:#e71d36;color:#fff}.paymentbtn[data-v-33ed8b80]{font-size:4.8vw;font-weight:700;margin:auto;width:80vw;text-align:center;line-height:12vw;border-radius:12vw;background-color:#e71d36;color:#fff;box-shadow:0 0 0 3px hsla(0,0%,87.1%,.3)}.cu-modal[data-v-33ed8b80]{z-index:210}.cu-dialog[data-v-33ed8b80]{background-color:initial;width:100vw;padding:4vw;height:auto}.auth[data-v-33ed8b80]{padding:6vw;border-radius:1.5vw;background-color:#fff}.auth .vip[data-v-33ed8b80]{width:100%;height:10vw;line-height:10vw;text-align:center;color:#fff;border-radius:1.5vw;border:1px solid #e71d36;background-color:#e71d36;margin-bottom:4vw}.auth .pay[data-v-33ed8b80]{border-radius:1.5vw;border:1px solid #ebebeb;text-align:center;color:#666;height:10vw;line-height:10vw}.auth .title[data-v-33ed8b80]{color:#333;margin-bottom:4vw}.loginbtn[data-v-33ed8b80]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}uni-button[data-v-33ed8b80]::after{display:none}uni-button[data-v-33ed8b80]{position:static;display:block;margin-left:0;margin-right:0;padding-left:0;padding-right:0;box-sizing:initial;font-size:3.8vw;text-align:center;text-decoration:none;line-height:7vw;border-radius:1.5vw;-webkit-tap-highlight-color:transparent;overflow:visible;color:#333;background-color:initial;margin-top:3vw}uni-button.close[data-v-33ed8b80]{\r\n\t\t/* border:1px solid #efefef; */\r\n\t\t/* padding:1vw 3vw; */}uni-button.login[data-v-33ed8b80]{color:#39b54a\r\n\t\t/* color:#fff;\r\n\t\tpadding:1vw 3vw; */}.customer[data-v-33ed8b80]{height:10vw;line-height:10vw;margin:auto;font-size:4vw;text-align:center;z-index:9990}.customer .bottombtn[data-v-33ed8b80]{width:94vw;height:100%;margin:auto;color:#fff;border-radius:10vw}.customer .bottombtn .custbtn[data-v-33ed8b80]{width:100%;background-color:#e71d36;border-radius:1.5vw}",""]),t.exports=e},b17d:function(t,e,i){var a=i("aa9f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2d0d384a",a,!0,{sourceMap:!1,shadowMode:!1})},b680:function(t,e,i){"use strict";var a=i("23e7"),n=i("a691"),o=i("408a"),r=i("1148"),d=i("d039"),s=1..toFixed,c=Math.floor,u=function(t,e,i){return 0===e?i:e%2===1?u(t,e-1,i*t):u(t*t,e/2,i)},l=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},v=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){s.call({})}));a({target:"Number",proto:!0,forced:v},{toFixed:function(t){var e,i,a,d,s=o(this),v=n(t),f=[0,0,0,0,0,0],g="",b="0",h=function(t,e){var i=-1,a=e;while(++i<6)a+=t*f[i],f[i]=a%1e7,a=c(a/1e7)},w=function(t){var e=6,i=0;while(--e>=0)i+=f[e],f[e]=c(i/t),i=i%t*1e7},p=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var i=String(f[t]);e=""===e?i:e+r.call("0",7-i.length)+i}return e};if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(g="-",s=-s),s>1e-21)if(e=l(s*u(2,69,1))-69,i=e<0?s*u(2,-e,1):s/u(2,e,1),i*=4503599627370496,e=52-e,e>0){h(0,i),a=v;while(a>=7)h(1e7,0),a-=7;h(u(10,a,1),0),a=e-1;while(a>=23)w(1<<23),a-=23;w(1<<a),h(1,1),w(2),b=p()}else h(0,i),h(1<<-e,0),b=p()+r.call("0",v);return v>0?(d=b.length,b=g+(d<=v?"0."+r.call("0",v-d)+b:b.slice(0,d-v)+"."+b.slice(d-v))):b=g+b,b}})},c4f3:function(t,e,i){"use strict";var a=i("b17d"),n=i.n(a);n.a},e332:function(t,e,i){var a=i("ae2f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("59f9e16a",a,!0,{sourceMap:!1,shadowMode:!1})},e3d7:function(t,e,i){"use strict";i.r(e);var a=i("83cd"),n=i("9b8e");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("c4f3");var r,d=i("f0c5"),s=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"9df7cb58",null,!1,a["a"],r);e["default"]=s.exports},f0c9:function(t,e,i){"use strict";var a=i("ee27");i("b680"),i("d3b7"),i("acd8"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("e3d7")),o={components:{uniTopBar:n.default},data:function(){return{id:2,modalName:null,userInfo:[],cewebrityid:"",member:"",memberlength:"",examine:"",toptitle:"开通会员",styles:{width:"134vw"},height:""}},filters:{numFilter:function(t){var e="";return e=isNaN(t)||""===t?" ":parseFloat(t).toFixed(0),e},numSingle:function(t,e){var i="";return i=isNaN(t)||""===t?" ":parseFloat(t/e).toFixed(2),i}},onLoad:function(t){var e=this;this.height=this.StatusBar,t.id&&(e.cewebrityid=t.id),e.getmember(),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:i.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info}})},fail:function(i){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.updateuser(e.data.id)}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(e.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},getmember:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/member",data:{belong:1},method:"POST",success:function(e){t.member=e.data.data.list;var i=t.member.length;t.styles.width=32*i+6+"vw"}})},navmember:function(t){var e=this;e.id=t},openmember:function(t){var e=this;e.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/card",data:{openid:e.userInfo.openid,id:e.id},method:"POST",success:function(t){var i="/pages/platform/list";e.cewebrityid&&(i="/pages/platform/celebrity?id="+e.cewebrityid),callpay(JSON.parse(t.data.data.parameters),t.data.data.info,i)}}):wxlogin()},wxopenmember:function(){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Order/card",data:{openid:t.userInfo.xopenid,id:t.id},method:"POST",success:function(e){var i=e.data.data.orderid;uni.requestPayment({provider:"wxpay",timeStamp:e.data.data.wechat.payinfo.timeStamp,nonceStr:e.data.data.wechat.payinfo.nonceStr,package:e.data.data.wechat.payinfo.package,signType:e.data.data.wechat.payinfo.signType,paySign:e.data.data.wechat.payinfo.paySign,success:function(e){uni.request({url:"https://www.hongrensutui.com/api/Order/complete_card",data:{openid:t.userInfo.xopenid,id:i},method:"POST",success:function(e){var i="/pages/platform/list";t.cewebrityid&&(i="/pages/platform/celebrity?id="+t.cewebrityid),uni.redirectTo({url:i})}})}})}}):wxlogin()},share:function(t){function e(e,i){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var i="红人速推丨成为会员解锁更多特权",a="特权涵盖解锁带货网红联系方式、商家入驻曝光、快速匹配网红等十项优质功能，点击查看详情",n="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(i,a,n,e)}))}};e.default=o},f224:function(t,e,i){"use strict";var a=i("e332"),n=i.n(a);n.a}}]);