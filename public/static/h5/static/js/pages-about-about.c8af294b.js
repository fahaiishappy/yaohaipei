(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-about"],{1148:function(t,e,a){"use strict";var n=a("a691"),i=a("1d80");t.exports="".repeat||function(t){var e=String(i(this)),a="",o=n(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(a+=e);return a}},"408a":function(t,e,a){var n=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},5383:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("uni-top-bar"),a("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[a("v-uni-view",{staticClass:"count"},[a("v-uni-view",{staticClass:"data",style:{paddingBottom:t.paddingBottom}},[a("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}})],1)],1)],1),t.paymentbtn?a("v-uni-view",{staticClass:"paymentbtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openmember.apply(void 0,arguments)}}},[t._v(t._s(t.paymentbtntext)+"("+t._s(t._f("numFilter")(t.cardprice))+"元)")]):t._e(),a("v-uni-view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"bg-img"},[a("img",{staticClass:"wechat",attrs:{src:"https://www.hongrensutui.com/h5/img/wechat.png",mode:"widthFix"}}),a("v-uni-view",{staticClass:"tip"},[t._v("免费咨询微信：zhuoyu10086")]),a("v-uni-view",{staticClass:"cu-bar justify-center text-white"},[a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1)],1)},o=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}))},"5fc0":function(t,e,a){"use strict";a.r(e);var n=a("e00d"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},a80a:function(t,e,a){"use strict";var n=a("bc84"),i=a.n(n);i.a},ab44:function(t,e,a){"use strict";a.r(e);var n=a("5383"),i=a("5fc0");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("a80a");var r,d=a("f0c5"),u=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"5d2eefe5",null,!1,n["a"],r);e["default"]=u.exports},ae06:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'.hongren[data-v-5d2eefe5]{bottom:0}.count[data-v-5d2eefe5]{padding:3vw}.data[data-v-5d2eefe5]{color:#333;font-size:4.3vw;line-height:7vw;padding:0}.data[data-v-5d2eefe5] img{border-radius:1.5vw}.data[data-v-5d2eefe5] img:last-child{display:block;margin:auto}.paymentbtn[data-v-5d2eefe5]{position:absolute;font-size:4.8vw;font-weight:700;bottom:6vw;left:50%;margin-left:-25vw;width:50vw;text-align:center;line-height:12vw;border-radius:12vw;background-color:#ffb759;color:#fff;z-index:210;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.customer[data-v-5d2eefe5]{position:absolute;bottom:18vw;right:6vw;width:15vw;height:15vw;font-size:9vw;padding-top:2vw;z-index:210;text-align:center;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.cu-dialog[data-v-5d2eefe5]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-5d2eefe5]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-5d2eefe5]{width:auto}.cuIcon-close[data-v-5d2eefe5]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}.wechat[data-v-5d2eefe5]{width:200px;height:200px}.tip[data-v-5d2eefe5]{color:#fff;margin:2vw 0;font-size:3.4vw}.bg-red[data-v-5d2eefe5]{background-color:#e71d36}',""]),t.exports=e},b680:function(t,e,a){"use strict";var n=a("23e7"),i=a("a691"),o=a("408a"),r=a("1148"),d=a("d039"),u=1..toFixed,c=Math.floor,s=function(t,e,a){return 0===e?a:e%2===1?s(t,e-1,a*t):s(t*t,e/2,a)},f=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},l=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){u.call({})}));n({target:"Number",proto:!0,forced:l},{toFixed:function(t){var e,a,n,d,u=o(this),l=i(t),v=[0,0,0,0,0,0],h="",p="0",w=function(t,e){var a=-1,n=e;while(++a<6)n+=t*v[a],v[a]=n%1e7,n=c(n/1e7)},g=function(t){var e=6,a=0;while(--e>=0)a+=v[e],v[e]=c(a/t),a=a%t*1e7},m=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==v[t]){var a=String(v[t]);e=""===e?a:e+r.call("0",7-a.length)+a}return e};if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(h="-",u=-u),u>1e-21)if(e=f(u*s(2,69,1))-69,a=e<0?u*s(2,-e,1):u/s(2,e,1),a*=4503599627370496,e=52-e,e>0){w(0,a),n=l;while(n>=7)w(1e7,0),n-=7;w(s(10,n,1),0),n=e-1;while(n>=23)g(1<<23),n-=23;g(1<<n),w(1,1),g(2),p=m()}else w(0,a),w(1<<-e,0),p=m()+r.call("0",l);return l>0?(d=p.length,p=h+(d<=l?"0."+r.call("0",l-d)+p:p.slice(0,d-l)+"."+p.slice(d-l))):p=h+p,p}})},bc84:function(t,e,a){var n=a("ae06");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("134844d4",n,!0,{sourceMap:!1,shadowMode:!1})},e00d:function(t,e,a){"use strict";var n=a("ee27");a("b680"),a("d3b7"),a("acd8"),a("ac1f"),a("25f0"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("9dcd")),o={components:{uniTopBar:i.default},data:function(){return{modalName:null,id:"",content:"",cardid:"",cardprice:"",userInfo:"",paymentbtntext:"立即认证",paymentbtn:!1,height:"",paddingBottom:""}},filters:{numFilter:function(t){var e="";return e=isNaN(t)||""===t?"":parseFloat(t).toFixed(0),e}},onLoad:function(t){var e=this;this.height=this.StatusBar,e.id=t["id"],"33"==e.id?e.paymentbtntext="立即认证":"34"==e.id?e.paymentbtntext="立即购买":"35"==e.id?e.paymentbtntext="立即打造":"36"==e.id&&(e.paymentbtntext="立即培训"),e.cardid=t["cardid"],this.getCewebrity(),e.cardid&&this.getCade(),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:a.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),e.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){e.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?(e.userInfo=t.data,e.updateuser(t.data.id)):wxlogin()},fail:function(t){wxlogin()}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(self.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)):wxlogin()}})},getCewebrity:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/pageDetails",data:{id:t.id},method:"POST",success:function(e){t.content=e.data.data.list;var a=e.data.data.list.content;t.content.content=a.replace(/\<img/gi,'<img style="border-radius: 1.5vw" ')}})},getCade:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/getCade",data:{id:t.cardid},method:"POST",success:function(e){e.data.data.info&&("33"!=t.id&&(t.paymentbtn=!0,t.paddingBottom="8vw"),t.cardprice=e.data.data.info)}})},openmember:function(t){var e=this;e.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/card",data:{openid:e.userInfo.openid,id:e.cardid},method:"POST",success:function(t){callpay(JSON.parse(t.data.data.parameters),t.data.data.info)}}):(uni.showToast({title:"您还未登录，请登录后操作",icon:"none",duration:2e3}),setTimeout((function(){uni.reLaunch({url:"/pages/login/login"})}),2e3))},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},share:function(t){function e(e,a){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var a="红人速推 | 网红直播带货一站式服务平台",n="红人速推就是网红多 商家多，直播带货就上红人速推。",i="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(a,n,i,e)}))}};e.default=o}}]);