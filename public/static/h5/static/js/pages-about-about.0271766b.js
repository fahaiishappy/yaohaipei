(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-about"],{1148:function(t,a,n){"use strict";var e=n("a691"),i=n("1d80");t.exports="".repeat||function(t){var a=String(i(this)),n="",o=e(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(a+=a))1&o&&(n+=a);return n}},"144d":function(t,a,n){var e=n("ccc2");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("08254123",e,!0,{sourceMap:!1,shadowMode:!1})},"408a":function(t,a,n){var e=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=e(t))throw TypeError("Incorrect invocation");return+t}},"5fc0":function(t,a,n){"use strict";n.r(a);var e=n("e00d"),i=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(a,t,(function(){return e[t]}))}(o);a["default"]=i.a},ab44:function(t,a,n){"use strict";n.r(a);var e=n("d2d7"),i=n("5fc0");for(var o in i)"default"!==o&&function(t){n.d(a,t,(function(){return i[t]}))}(o);n("d18b");var r,d=n("f0c5"),u=Object(d["a"])(i["default"],e["b"],e["c"],!1,null,"3799db13",null,!1,e["a"],r);a["default"]=u.exports},b680:function(t,a,n){"use strict";var e=n("23e7"),i=n("a691"),o=n("408a"),r=n("1148"),d=n("d039"),u=1..toFixed,c=Math.floor,s=function(t,a,n){return 0===a?n:a%2===1?s(t,a-1,n*t):s(t*t,a/2,n)},l=function(t){var a=0,n=t;while(n>=4096)a+=12,n/=4096;while(n>=2)a+=1,n/=2;return a},f=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){u.call({})}));e({target:"Number",proto:!0,forced:f},{toFixed:function(t){var a,n,e,d,u=o(this),f=i(t),h=[0,0,0,0,0,0],v="",p="0",g=function(t,a){var n=-1,e=a;while(++n<6)e+=t*h[n],h[n]=e%1e7,e=c(e/1e7)},w=function(t){var a=6,n=0;while(--a>=0)n+=h[a],h[a]=c(n/t),n=n%t*1e7},b=function(){var t=6,a="";while(--t>=0)if(""!==a||0===t||0!==h[t]){var n=String(h[t]);a=""===a?n:a+r.call("0",7-n.length)+n}return a};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(v="-",u=-u),u>1e-21)if(a=l(u*s(2,69,1))-69,n=a<0?u*s(2,-a,1):u/s(2,a,1),n*=4503599627370496,a=52-a,a>0){g(0,n),e=f;while(e>=7)g(1e7,0),e-=7;g(s(10,e,1),0),e=a-1;while(e>=23)w(1<<23),e-=23;w(1<<e),g(1,1),w(2),p=b()}else g(0,n),g(1<<-a,0),p=b()+r.call("0",f);return f>0?(d=p.length,p=v+(d<=f?"0."+r.call("0",f-d)+p:p.slice(0,d-f)+"."+p.slice(d-f))):p=v+p,p}})},ccc2:function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,'.hongren[data-v-3799db13]{bottom:0}.count[data-v-3799db13]{padding:3vw}.data[data-v-3799db13]{color:#333;font-size:4.3vw;line-height:7vw;padding:0}.data[data-v-3799db13] img{border-radius:1.5vw}.data[data-v-3799db13] img:last-child{display:block;margin:auto}.paymentbtn[data-v-3799db13]{position:absolute;font-size:4.8vw;font-weight:700;bottom:6vw;left:50%;margin-left:-25vw;width:50vw;text-align:center;line-height:12vw;border-radius:12vw;background-color:#ffb759;color:#fff;z-index:210;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.customer[data-v-3799db13]{position:absolute;bottom:18vw;right:6vw;width:15vw;height:15vw;font-size:9vw;padding-top:2vw;z-index:210;text-align:center;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.cu-dialog[data-v-3799db13]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-3799db13]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-3799db13]{width:auto}.cuIcon-close[data-v-3799db13]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}.wechat[data-v-3799db13]{width:200px;height:200px}.tip[data-v-3799db13]{color:#fff;margin:2vw 0;font-size:3.4vw}.bg-red[data-v-3799db13]{background-color:#e71d36}',""]),t.exports=a},d18b:function(t,a,n){"use strict";var e=n("144d"),i=n.n(e);i.a},d2d7:function(t,a,n){"use strict";var e,i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("uni-top-bar"),n("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[n("v-uni-view",{staticClass:"count"},[n("v-uni-view",{staticClass:"data",style:{paddingBottom:t.paddingBottom}},[n("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}})],1)],1)],1),t.paymentbtn?n("v-uni-view",{staticClass:"paymentbtn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.openmember.apply(void 0,arguments)}}},[t._v(t._s(t.paymentbtntext)+"("+t._s(t._f("numFilter")(t.cardprice))+"元)")]):t._e(),n("v-uni-view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"bg-img"},[n("img",{staticClass:"wechat",attrs:{src:"https://www.hongrensutui.com/h5/img/wechat.png",mode:"widthFix"}}),n("v-uni-view",{staticClass:"tip"},[t._v("免费咨询微信：zhuoyu10086")]),n("v-uni-view",{staticClass:"cu-bar justify-center text-white"},[n("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1)],1)},o=[];n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return o})),n.d(a,"a",(function(){return e}))},e00d:function(t,a,n){"use strict";var e=n("ee27");n("b680"),n("d3b7"),n("acd8"),n("ac1f"),n("25f0"),n("5319"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e(n("9dcd")),o={components:{uniTopBar:i.default},data:function(){return{modalName:null,id:"",content:"",cardid:"",cardprice:"",userInfo:"",paymentbtntext:"立即认证",paymentbtn:!1,height:"",paddingBottom:"",backurl:location.href}},filters:{numFilter:function(t){var a="";return a=isNaN(t)||""===t?"":parseFloat(t).toFixed(0),a}},onLoad:function(t){var a=this;this.height=this.StatusBar,a.id=t["id"],"33"==a.id?a.paymentbtntext="立即认证":"34"==a.id?a.paymentbtntext="立即购买":"35"==a.id?a.paymentbtntext="立即打造":"36"==a.id&&(a.paymentbtntext="立即培训"),a.cardid=t["cardid"],this.getCewebrity(),a.cardid&&this.getCade(),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),a.share(),t.code?uni.getStorage({key:"invite",success:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:n.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),a.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){a.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?(a.userInfo=t.data,a.updateuser(t.data.id)):wxlogin(a.backurl)},fail:function(t){wxlogin(a.backurl)}})},methods:{updateuser:function(t){var a=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(self.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),a.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin(a.backurl)}})},getCewebrity:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/pageDetails",data:{id:t.id},method:"POST",success:function(a){t.content=a.data.data.list;var n=a.data.data.list.content;t.content.content=n.replace(/\<img/gi,'<img style="border-radius: 1.5vw" ')}})},getCade:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/getCade",data:{id:t.cardid},method:"POST",success:function(a){a.data.data.info&&("33"!=t.id&&(t.paymentbtn=!0,t.paddingBottom="8vw"),t.cardprice=a.data.data.info)}})},openmember:function(t){var a=this;a.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/card",data:{openid:a.userInfo.openid,id:a.cardid},method:"POST",success:function(t){callpay(JSON.parse(t.data.data.parameters),t.data.data.info)}}):(uni.showToast({title:"您还未登录，请登录后操作",icon:"none",duration:2e3}),setTimeout((function(){uni.reLaunch({url:"/pages/login/login"})}),2e3))},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},share:function(t){function a(a,n){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(t,a){var n=location.href,e="红人速推 | 网红直播带货一站式服务平台",i="红人速推就是网红多 商家多，直播带货就上红人速推。",o=n;if(t>0){var r="http://cdn.hongrensutui.com/uploads/qrcode/"+a+"rz.png";o=o+"?invite="+a}else r="http://cdn.hongrensutui.com/uploads/share/renzheng_logo.png";share(n,e,i,r,o)}))}};a.default=o}}]);