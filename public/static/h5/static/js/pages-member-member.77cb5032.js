(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-member"],{1148:function(e,t,a){"use strict";var i=a("a691"),n=a("1d80");e.exports="".repeat||function(e){var t=String(n(this)),a="",r=i(e);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(a+=t);return a}},"408a":function(e,t,a){var i=a("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=i(e))throw TypeError("Incorrect invocation");return+e}},"438b":function(e,t,a){var i=a("46f8");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("adab2fb4",i,!0,{sourceMap:!1,shadowMode:!1})},"46f8":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".hongren[data-v-4e112adb]{bottom:0}.title[data-v-4e112adb]{padding:3vw}.privilege[data-v-4e112adb]{padding-bottom:3vw}.privilege_tip[data-v-4e112adb]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:3.3vw;padding:1.5vw 3vw}.mr-1[data-v-4e112adb]{font-size:4.2vw;margin-right:2vw}.understand[data-v-4e112adb]{text-align:center;line-height:8vw;font-size:3.5vw}.member[data-v-4e112adb]{width:100vw;height:36vw;padding:0 3vw;overflow-x:scroll}.member-swiper[data-v-4e112adb]{width:200vw}.member .item[data-v-4e112adb]{float:left}.member .item .tab[data-v-4e112adb]{padding:3vw;width:29.2vw;height:30vw;background-color:rgba(231,235,237,.3);margin-right:3vw;border:1px solid #e7ebed;box-shadow:1px 1px 4px rgba(231,235,237,.2);border-radius:1.5vw;position:relative;overflow:hidden}.member .item .tab.active[data-v-4e112adb]{background-color:rgba(250,219,217,.3);border:1px solid #fadbd9;box-shadow:1px 1px 2px rgba(229,77,66,.1)}.member .item .tab .name[data-v-4e112adb]{font-size:4vw;padding-top:1vw;text-align:center;font-weight:600;color:#333}.member .item .tab .rate[data-v-4e112adb]{position:absolute;top:0;right:0;background-color:#e71d36;color:#fff;font-size:2.6vw;padding:0 1vw;border-bottom-left-radius:1.5vw}.member .item .tab .price[data-v-4e112adb]{color:red;padding-top:4vw;text-align:center;font-size:5.6vw;font-weight:700}.member .item .tab .price span[data-v-4e112adb]{font-weight:700;font-size:3.5vw}.member .item .tab .average[data-v-4e112adb]{text-align:center;font-size:3vw;padding-bottom:5vw}.member .item .tab .average.fracture[data-v-4e112adb]{padding-bottom:0}.member .item .tab .cost-price[data-v-4e112adb]{font-size:3vw;text-align:center;height:6vw;line-height:6vw;text-decoration:line-through}\r\n\r\n/* .member .item .tab .introduction{\r\n\tfont-size: 3.2vw;\r\n\ttext-align: center;\r\n} */.membertip[data-v-4e112adb]{margin-top:3vw;padding:3vw;background-color:#fff}.membertip .title[data-v-4e112adb]{padding:0;margin-bottom:3vw;font-weight:700}.membertip .item[data-v-4e112adb]{display:-webkit-box;display:-webkit-flex;display:flex}.membertip .item .name[data-v-4e112adb]{height:24px;line-height:24px;margin:1vw 0}.membertip .item .introduction[data-v-4e112adb]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.membertip .item .introduction .contentlable[data-v-4e112adb]{margin:1vw 0;margin-right:2vw}.cu-tag+.cu-tag[data-v-4e112adb]{margin:0}.bg-red[data-v-4e112adb]{background-color:#e71d36}.bg-red.light[data-v-4e112adb]{background-color:#e71d36;color:#fff}.paymentbtn[data-v-4e112adb]{font-size:4.8vw;font-weight:700;margin:auto;width:80vw;text-align:center;line-height:12vw;border-radius:12vw;background-color:#e71d36;color:#fff;box-shadow:0 0 0 3px hsla(0,0%,87.1%,.3)}",""]),e.exports=t},"5b19":function(e,t,a){"use strict";var i,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("uni-top-bar"),a("v-uni-view",{staticClass:"hongren",style:{top:e.height+43+"px"}},[a("v-uni-view",{staticClass:"bg-fff"},[a("v-uni-view",{staticClass:"title"},[e._v("选择套餐")]),a("v-uni-view",{staticClass:"member"},[a("v-uni-view",{staticClass:"member-swiper",style:e.styles},e._l(e.member,(function(t,i){return a("v-uni-view",{key:i,staticClass:"item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.navmember(t.id)}}},[a("v-uni-view",{staticClass:"tab",class:e.id==t.level?"active":""},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(t.name))]),t.discountedprice?a("v-uni-view",[a("v-uni-view",{staticClass:"rate"},[e._v(e._s(t.rate)+"折")]),a("v-uni-view",{staticClass:"price"},[a("span",[e._v("￥")]),e._v(e._s(e._f("numFilter")(t.discountedprice)))]),a("v-uni-view",{staticClass:"cost-price text-grey"},[e._v("￥"+e._s(e._f("numFilter")(t.price)))])],1):a("v-uni-view",[a("v-uni-view",{staticClass:"price"},[a("span",[e._v("￥")]),e._v(e._s(e._f("numFilter")(t.price)))]),a("v-uni-view",{staticClass:"cost-price text-grey"})],1)],1)],1)})),1)],1)],1),a("v-uni-view",{staticClass:"membertip"},[a("v-uni-view",{staticClass:"title"},[e._v("会员特权")]),e._l(e.member,(function(t,i){return a("v-uni-view",{key:i,staticClass:"item"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(t.name)+"：")]),a("v-uni-view",{staticClass:"introduction clearfix"},e._l(t.content,(function(i,n){return a("v-uni-view",{key:n,staticClass:"cu-tag round light contentlable",class:e.id==t.level?"bg-red":"bg-grey"},[e._v(e._s(i))])})),1)],1)}))],2),a("v-uni-view",{staticClass:"padding-xl"},[a("v-uni-view",{staticClass:"paymentbtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openmember.apply(void 0,arguments)}}},[e._v("立即开通")])],1)],1)],1)},r=[];a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}))},"80ac":function(e,t,a){"use strict";var i=a("438b"),n=a.n(i);n.a},a796:function(e,t,a){"use strict";a.r(t);var i=a("f784"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},b680:function(e,t,a){"use strict";var i=a("23e7"),n=a("a691"),r=a("408a"),o=a("1148"),d=a("d039"),s=1..toFixed,u=Math.floor,c=function(e,t,a){return 0===t?a:t%2===1?c(e,t-1,a*e):c(e*e,t/2,a)},l=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},v=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){s.call({})}));i({target:"Number",proto:!0,forced:v},{toFixed:function(e){var t,a,i,d,s=r(this),v=n(e),f=[0,0,0,0,0,0],m="",b="0",p=function(e,t){var a=-1,i=t;while(++a<6)i+=e*f[a],f[a]=i%1e7,i=u(i/1e7)},w=function(e){var t=6,a=0;while(--t>=0)a+=f[t],f[t]=u(a/e),a=a%e*1e7},g=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==f[e]){var a=String(f[e]);t=""===t?a:t+o.call("0",7-a.length)+a}return t};if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(m="-",s=-s),s>1e-21)if(t=l(s*c(2,69,1))-69,a=t<0?s*c(2,-t,1):s/c(2,t,1),a*=4503599627370496,t=52-t,t>0){p(0,a),i=v;while(i>=7)p(1e7,0),i-=7;p(c(10,i,1),0),i=t-1;while(i>=23)w(1<<23),i-=23;w(1<<i),p(1,1),w(2),b=g()}else p(0,a),p(1<<-t,0),b=g()+o.call("0",v);return v>0?(d=b.length,b=m+(d<=v?"0."+o.call("0",v-d)+b:b.slice(0,d-v)+"."+b.slice(d-v))):b=m+b,b}})},d970:function(e,t,a){"use strict";a.r(t);var i=a("5b19"),n=a("a796");for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("80ac");var o,d=a("f0c5"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"4e112adb",null,!1,i["a"],o);t["default"]=s.exports},f784:function(e,t,a){"use strict";(function(e){var i=a("ee27");a("b680"),a("d3b7"),a("acd8"),a("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("9dcd")),r={components:{uniTopBar:n.default},data:function(){return{id:1,userInfo:[],cewebrityid:"",member:"",memberlength:"",examine:"",styles:{width:"134vw"},height:"",backurl:location.href}},filters:{numFilter:function(e){var t="";return t=isNaN(e)||""===e?" ":parseFloat(e).toFixed(0),t},numSingle:function(e,t){var a="";return a=isNaN(e)||""===e?" ":parseFloat(e/t).toFixed(2),a}},onLoad:function(t){var a=this;this.height=this.StatusBar,t.id&&(a.cewebrityid=t.id),a.getmember(),uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?(e("log",t.data," at pages/member/member.vue:126"),a.updateuser(t.data.id)):wxlogin(a.backurl)},fail:function(e){wxlogin(a.backurl)}})},methods:{updateuser:function(e){var t=this;e&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:e},method:"POST",success:function(e){e.data.data.info?(t.userInfo=e.data.data.info,uni.setStorageSync("userInfo",e.data.data.info)):wxlogin(t.backurl)}})},getmember:function(){var e=this;uni.request({url:"https://www.hongrensutui.com/api/index/member",data:{belong:1},method:"POST",success:function(t){e.member=t.data.data.list;var a=e.member.length;e.styles.width=32*a+6+"vw"}})},navmember:function(e){var t=this;t.id=e},openmember:function(t){var a=this;e("log",a.userInfo," at pages/member/member.vue:188"),a.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/card",data:{openid:a.userInfo.openid,id:a.id},method:"POST",success:function(e){callpay(JSON.parse(e.data.data.parameters),e.data.data.info)}}):(uni.showToast({title:"您还未登录，请登录后操作",icon:"none",duration:2e3}),setTimeout((function(){uni.reLaunch({url:"/pages/login/login"})}),2e3))},wxopenmember:function(){var t=this;e("log",t.userInfo," at pages/member/member.vue:216"),t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Order/card",data:{openid:t.userInfo.xopenid,id:t.id},method:"POST",success:function(e){var a=e.data.data.orderid;uni.requestPayment({provider:"wxpay",timeStamp:e.data.data.wechat.payinfo.timeStamp,nonceStr:e.data.data.wechat.payinfo.nonceStr,package:e.data.data.wechat.payinfo.package,signType:e.data.data.wechat.payinfo.signType,paySign:e.data.data.wechat.payinfo.paySign,success:function(e){uni.request({url:"https://www.hongrensutui.com/api/Order/complete_card",data:{openid:t.userInfo.xopenid,id:a},method:"POST",success:function(e){uni.redirectTo({url:"/pages/platform/celebrity?id="+t.cewebrityid})}})}})}}):(uni.showToast({title:"您还未登录，请登录后操作",icon:"none",duration:2e3}),setTimeout((function(){uni.reLaunch({url:"/pages/login/login"})}),2e3))},navToDetailPage:function(e,t,a){t&&(e=a?e+"?id="+t+"&cardid="+a:e+"?id="+t),uni.navigateTo({url:"/pages/"+e})},share:function(e){function t(t,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t){var a=location.href,i="红人速推 | 网红直播带货一站式服务平台",n="红人速推就是网红多 商家多，直播带货就上红人速推。",r="http://cdn.hongrensutui.com/uploads/share/home_logo2.png",o=a;if(e>0)o=o+"?invite="+t;share(a,i,n,r,o)}))}};t.default=r}).call(this,a("0de9")["log"])}}]);