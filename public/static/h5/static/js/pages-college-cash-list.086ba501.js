(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-college-cash-list"],{"032c":function(n,t,a){"use strict";a.r(t);var e=a("1163"),i=a("d660");for(var o in i)"default"!==o&&function(n){a.d(t,n,(function(){return i[n]}))}(o);a("1f36");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"55ae9ace",null,!1,e["a"],r);t["default"]=c.exports},"04ff":function(n,t,a){"use strict";var e=a("ee27");a("99af"),a("b680"),a("d3b7"),a("acd8"),a("ac1f"),a("25f0"),a("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e(a("9dcd")),o=e(a("7f51")),r=e(a("7265")),s={mixins:[o.default,r.default],components:{uniTopBar:i.default},data:function(){return{downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"~ 空空如也 ~"}},height:"400px",topheight:0,userInfo:"",goods:"",toptitle:"课程列表",card_id:0,course:0,src:"",poster:"",modalName:null,id:"",category:"",bottom:"",member:"",goodslength:"",isandroid:!1}},filters:{numFilter:function(n){var t="";return t=isNaN(n)||""===n?" ":parseFloat(n).toFixed(0),t},numSingle:function(n,t){var a="";return a=isNaN(n)||""===n?" ":parseFloat(n/t).toFixed(2),a},flie_name:function(n){var t=n.split("."),a=t[t.length-2].split("/"),e=a[a.length-1],i=t[t.length-1];return e=e.length>20?"《"+e.substring(0,20)+"...》":"《"+e+"》",e+i},flie_txt:function(n){var t=n.split("."),a=t[t.length-1];return"pdf"==a?"https://www.hongrensutui.com/uploads/share/pdf_logo.png":"doc"==a?"https://www.hongrensutui.com/uploads/share/doc_logo.png":"docx"==a?"https://www.hongrensutui.com/uploads/share/doc_logo.png":"xls"==a?"https://www.hongrensutui.com/uploads/share/xls_logo.png":"xlsx"==a?"https://www.hongrensutui.com/uploads/share/xlsx_logo.png":"ppt"==a?"https://www.hongrensutui.com/uploads/share/ppt_logo.png":"pptx"==a?"https://www.hongrensutui.com/uploads/share/pptx_logo.png":"zip"==a?"https://www.hongrensutui.com/uploads/share/zip_logo.png":"rar"==a?"https://www.hongrensutui.com/uploads/share/rar_logo.png":void 0}},props:{tabs:Array},onLoad:function(n){var t=this,a=this;n.id&&(a.id=n.id),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",uni.request({url:"https://www.hongrensutui.com/api/index/course",success:function(n){t.course=n.data.data.course}}),n.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",n.invite)),n.code?uni.getStorage({key:"invite",success:function(t){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:n.code,invite:t.data},method:"POST",success:function(n){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",n.data.data.info),a.userInfo=n.data.data.info}})},fail:function(t){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:n.code},method:"POST",success:function(n){uni.setStorageSync("userInfo",n.data.data.info),a.userInfo=n.data.data.info}})}}):uni.getStorage({key:"userInfo",success:function(n){""!=n.data&&null!=n.data?a.updateuser(n.data.id):wxlogin()},fail:function(n){wxlogin()}}),a.getmember()},methods:{updateuser:function(n){var t=this;n&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:n},method:"POST",success:function(n){n.data.data.info?(uni.setStorageSync("userInfo",n.data.data.info),t.userInfo=n.data.data.info):wxlogin()}})},downCallback:function(n){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(n){var t=this;uni.getStorage({key:"userInfo",success:function(a){""!=a.data&&null!=a.data&&(t.userInfo=a.data,t.goodslist(n))}})},goodslist:function(n){var t=this,a=this;uni.request({url:"https://www.hongrensutui.com/api/index/videolist",method:"POST",data:{mid:a.userInfo.id,id:a.id,pagenum:n.num,pagesize:n.size},success:function(e){a.category=e.data.data.category,a.goodslength=e.data.data.count;var i=e.data.data.info,o=i.length;switch(uni.getSystemInfoSync().platform){case"android":a.category.price&&(a.bottom="50px"),a.isandroid=!0;break;case"ios":a.category.price&&(a.bottom="50px"),a.isandroid=!0;break}(8==i[0].article_card_id||i[0].categoryfree)&&(a.bottom="0px",a.isandroid=!1),a.share(a.userInfo.company_id,a.userInfo.id,a.category.name),1==n.num&&(a.goods=[]),a.goods=a.goods.concat(e.data.data.info),t.mescroll.endByPage(o),setTimeout((function(){t.mescroll.endSuccess(o)}),20)},fail:function(n){a.mescroll.endErr()}})},getmember:function(){var n=this;uni.request({url:"https://www.hongrensutui.com/api/index/member",data:{belong:4},method:"POST",success:function(t){n.member=t.data.data.list[0]}})},categorymember:function(n){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/categoryorder",data:{openid:t.userInfo.openid,id:n},method:"POST",success:function(n){var a="/pages/college/cash-list?id="+t.id;callpay(JSON.parse(n.data.data.parameters),n.data.data.info,a)}}):uni.showToast({title:"请登录后操作",icon:"none",duration:2e3})},openmember:function(n){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/collegeorder",data:{openid:t.userInfo.openid,id:n},method:"POST",success:function(n){var a="/pages/college/cash-list?id="+t.id;callpay(JSON.parse(n.data.data.parameters),n.data.data.info,a)}}):uni.showToast({title:"请登录后操作",icon:"none",duration:2e3})},cardmember:function(){var n=this;n.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/card",data:{openid:n.userInfo.openid,id:8},method:"POST",success:function(t){var a="/pages/college/cash-list?id="+n.id;callpay(JSON.parse(t.data.data.parameters),t.data.data.info,a)}}):(uni.showToast({title:"请登录后操作",icon:"none",duration:2e3}),ss)},wxcategorymember:function(n){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Order/categoryorder",data:{openid:t.userInfo.xopenid,id:n},method:"POST",success:function(n){var a=n.data.data.orderid;uni.requestPayment({provider:"wxpay",timeStamp:n.data.data.wechat.payinfo.timeStamp,nonceStr:n.data.data.wechat.payinfo.nonceStr,package:n.data.data.wechat.payinfo.package,signType:n.data.data.wechat.payinfo.signType,paySign:n.data.data.wechat.payinfo.paySign,success:function(n){uni.request({url:"https://www.hongrensutui.com/api/Order/complete_categoryorder",data:{openid:t.userInfo.xopenid,id:a},method:"POST",success:function(n){var a="/pages/college/cash-list?id="+t.id;uni.redirectTo({url:a})}})}})}}):uni.showToast({title:"请登录后操作",icon:"none",duration:2e3})},wxcardmember:function(){var n=this;n.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Order/card",data:{openid:n.userInfo.xopenid,id:8},method:"POST",success:function(t){var a=t.data.data.orderid;uni.requestPayment({provider:"wxpay",timeStamp:t.data.data.wechat.payinfo.timeStamp,nonceStr:t.data.data.wechat.payinfo.nonceStr,package:t.data.data.wechat.payinfo.package,signType:t.data.data.wechat.payinfo.signType,paySign:t.data.data.wechat.payinfo.paySign,success:function(t){uni.request({url:"https://www.hongrensutui.com/api/Order/complete_card",data:{openid:n.userInfo.xopenid,id:a},method:"POST",success:function(t){var a="/pages/college/cash-list?id="+n.id;uni.redirectTo({url:a})}})}})}}):uni.showToast({title:"您还未登录，请登录后操作",icon:"none",duration:2e3})},navToDetailPage:function(n,t){switch(uni.getSystemInfoSync().platform){case"android":1==t.free?uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=2&msg=免费文章"}):8==t.article_card_id?uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=1&msg=学院超级会员"}):t.categoryfree?uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=1&msg=已购买栏目"}):t.articlefree?uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=1&msg=已购买文章"}):uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=0&msg=付费文章"});break;case"ios":1==t.free?uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=2&msg=免费文章"}):8==t.article_card_id?uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=1&msg=学院超级会员"}):t.categoryfree?uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=1&msg=已购买栏目"}):t.articlefree?uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=1&msg=已购买文章"}):uni.navigateTo({url:"/pages/"+n+"?id="+t.id+"&free=0&msg=付费文章"});break}},hideModal:function(n){this.modalName=null},share:function(n){function t(t,a,e){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}((function(n,t,a){var e=a+" - 红人速推学院 | 抖音、快手指定线上学习平台",i="学院涵盖抖音、快手策略打法，为业界输出专业的营销课程，点击查看详情",o="https://www.hongrensutui.com/uploads/share/college_video_logo.png";share(e,i,o,t)}))}};t.default=s},1148:function(n,t,a){"use strict";var e=a("a691"),i=a("1d80");n.exports="".repeat||function(n){var t=String(i(this)),a="",o=e(n);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(a+=t);return a}},1163:function(n,t,a){"use strict";var e={mescrollUni:a("c499").default},i=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",[a("uni-top-bar",{attrs:{title:n.toptitle}}),a("mescroll-uni",{ref:"mescrollRef",attrs:{top:n.topheight+43+"px",bottom:n.bottom,down:n.downOption,up:n.upOption},on:{init:function(t){arguments[0]=t=n.$handleEvent(t),n.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=n.$handleEvent(t),n.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=n.$handleEvent(t),n.upCallback.apply(void 0,arguments)}}},[n.category.img?a("img",{staticClass:"categoryimg",attrs:{src:n.category["img"],alt:"",mode:"widthFix"}}):n._e(),a("v-uni-view",{staticClass:"videolist"},[a("v-uni-view",{staticClass:"titletop"},[a("v-uni-view",{staticClass:"name"},[n._v(n._s(n.category.name))])],1),a("v-uni-view",{staticClass:"bg-fff mb-0 pb-0"},[a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"sharecontent"},[n._v("此栏目共有"+n._s(n.goodslength)+"个主题，持续更新中...")])],1)],1),n._l(n.goods,(function(t,e){return a("v-uni-view",{key:e,staticClass:"list",on:{click:function(a){arguments[0]=a=n.$handleEvent(a),n.navToDetailPage("college/details",t)}}},[a("v-uni-view",{staticClass:"data"},[a("v-uni-view",{staticClass:"name"},[n._v(n._s(t.title))]),1==t.free||8==t.article_card_id||t.categoryfree||t.articlefree?a("v-uni-view",{staticClass:"tip",staticStyle:{border:"none",margin:"0"}}):a("v-uni-view",{staticClass:"tip"},[a("span",{staticClass:"lg text-gray cuIcon-lock"}),a("span",{staticClass:"tipname"},[n._v("您需要加入"+n._s(t.category)+"，才能下载！")])]),a("v-uni-view",{staticClass:"flie"},[a("img",{staticClass:"flie_img",attrs:{src:n._f("flie_txt")(t["file"]),mode:"widthFix"}}),a("v-uni-view",{staticClass:"flie_name"},[n._v(n._s(n._f("flie_name")(t.file))),1==t.free||8==t.article_card_id||t.categoryfree||t.articlefree?a("span",{staticClass:"lg text-gray cuIcon-unlock"}):a("span",{staticClass:"lg text-gray cuIcon-lock"})])],1),a("v-uni-view",{staticClass:"time"},[a("v-uni-view",{staticClass:"cu-tag round light bg-grey",on:{click:function(a){a.stopPropagation(),arguments[0]=a=n.$handleEvent(a),n.articlelist(t.pid,t.category)}}},[n._v(n._s(t.category))]),a("v-uni-view",{staticClass:"cu-tag round light bg-orange"},[n._v(n._s(t.views)+"人已学习")])],1)],1)],1)}))],2),a("v-uni-view",{staticClass:"cu-modal",class:"Imageno"==n.modalName?"show":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"auth"},[a("v-uni-view",{staticClass:"title"},[n._v("十分抱歉，由于相关规范，小程序暂不支持查看。")])],1)],1)],1)],1),n.isandroid?a("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[a("v-uni-view",{staticClass:"customer round shadow text-center"},[a("v-uni-view",{staticClass:"bottombtn clearfix"},[a("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.categorymember(n.category.id)}}},[n._v(n._s(n._f("numFilter")(n.category.price))+" 购买此栏目")]),a("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Image"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.cardmember.apply(void 0,arguments)}}},[n._v(n._s(n._f("numFilter")(n.member.discountedprice))+" 全站免费看")])],1)],1)],1):n._e()],1)},o=[];a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return e}))},"1f36":function(n,t,a){"use strict";var e=a("8915"),i=a.n(e);i.a},"408a":function(n,t,a){var e=a("c6b6");n.exports=function(n){if("number"!=typeof n&&"Number"!=e(n))throw TypeError("Incorrect invocation");return+n}},8915:function(n,t,a){var e=a("f8f3");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=a("4f06").default;i("6b1b2539",e,!0,{sourceMap:!1,shadowMode:!1})},b680:function(n,t,a){"use strict";var e=a("23e7"),i=a("a691"),o=a("408a"),r=a("1148"),s=a("d039"),c=1..toFixed,d=Math.floor,u=function(n,t,a){return 0===t?a:t%2===1?u(n,t-1,a*n):u(n*n,t/2,a)},l=function(n){var t=0,a=n;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},f=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));e({target:"Number",proto:!0,forced:f},{toFixed:function(n){var t,a,e,s,c=o(this),f=i(n),g=[0,0,0,0,0,0],p="",v="0",w=function(n,t){var a=-1,e=t;while(++a<6)e+=n*g[a],g[a]=e%1e7,e=d(e/1e7)},h=function(n){var t=6,a=0;while(--t>=0)a+=g[t],g[t]=d(a/n),a=a%n*1e7},m=function(){var n=6,t="";while(--n>=0)if(""!==t||0===n||0!==g[n]){var a=String(g[n]);t=""===t?a:t+r.call("0",7-a.length)+a}return t};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(p="-",c=-c),c>1e-21)if(t=l(c*u(2,69,1))-69,a=t<0?c*u(2,-t,1):c/u(2,t,1),a*=4503599627370496,t=52-t,t>0){w(0,a),e=f;while(e>=7)w(1e7,0),e-=7;w(u(10,e,1),0),e=t-1;while(e>=23)h(1<<23),e-=23;h(1<<e),w(1,1),h(2),v=m()}else w(0,a),w(1<<-t,0),v=m()+r.call("0",f);return f>0?(s=v.length,v=p+(s<=f?"0."+r.call("0",f-s)+v:v.slice(0,s-f)+"."+v.slice(s-f))):v=p+v,v}})},d660:function(n,t,a){"use strict";a.r(t);var e=a("04ff"),i=a.n(e);for(var o in e)"default"!==o&&function(n){a.d(t,n,(function(){return e[n]}))}(o);t["default"]=i.a},f8f3:function(n,t,a){var e=a("24fb");t=e(!1),t.push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.videolist[data-v-55ae9ace]{background-color:#f7f7f7}.bg-fff[data-v-55ae9ace]{padding-bottom:3vw}.pb-0[data-v-55ae9ace]{padding-bottom:0}.bg-fff .item[data-v-55ae9ace]:last-child{margin-bottom:0}.categoryimg[data-v-55ae9ace]{width:100%;display:block}.titletop[data-v-55ae9ace]{padding:5vw;font-size:4.5vw;font-weight:700;background-color:#fff;text-align:center}.titletop .name[data-v-55ae9ace]{background-image:url(https://www.hongrensutui.com/h5/img/wzbg2.png);background-repeat:repeat-x;background-position:bottom;display:inline-block;padding:0 1vw}.videolist .list[data-v-55ae9ace]{padding:3vw 3vw 4vw 3vw;background-color:#fff;position:relative;margin-bottom:3vw}.videolist .list[data-v-55ae9ace]:last-child{margin-bottom:0}.list .data[data-v-55ae9ace]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.list .data .name[data-v-55ae9ace]{font-size:4vw;font-weight:700;color:#333;width:100%}.list .data .time[data-v-55ae9ace]{font-size:3.2vw;margin-top:3vw;color:#aaa;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.list .flie[data-v-55ae9ace]{margin-top:3vw}.list .flie .flie_img[data-v-55ae9ace]{width:14vw;height:14vw;display:inline-block;border-top-left-radius:1.5vw;border-bottom-left-radius:1.5vw;vertical-align:top}.list .flie .flie_name[data-v-55ae9ace]{padding:2vw;font-size:3.5vw;width:58vw;height:14vw;line-height:5vw;display:inline-block;background-color:#f7f7f7;border-top-right-radius:1.5vw;border-bottom-right-radius:1.5vw;vertical-align:top;position:relative}.list .flie span[data-v-55ae9ace]{position:absolute;font-size:4vw;right:2vw;bottom:1vw}.cu-bar[data-v-55ae9ace]{position:static}.cu-dialog[data-v-55ae9ace]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-55ae9ace]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-55ae9ace]{width:auto}.bg-img[data-v-55ae9ace]{position:relative}.cuIcon-close[data-v-55ae9ace]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}.wechat[data-v-55ae9ace]{width:200px;height:200px}.tip[data-v-55ae9ace]{color:#fff;margin:2vw 0;font-size:3.4vw}.auth[data-v-55ae9ace]{padding:6vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-55ae9ace]{color:#333;margin-bottom:4vw}.more[data-v-55ae9ace]{font-size:3.4vw;text-align:center}.tip[data-v-55ae9ace]{margin-top:3vw;width:100%;color:#ffb148;border:1px #ffce6e solid;background-color:#fef5eb;border-radius:1.5vw;padding:0 4vw}.tip .cuIcon-lock[data-v-55ae9ace]{color:#ffb148;margin-right:2vw;font-size:4vw;font-weight:700}.tip .tipname[data-v-55ae9ace]{font-size:3.5vw;line-height:12vw}.cu-bar.foot[data-v-55ae9ace]{z-index:199}.cu-bar.foot[data-v-55ae9ace]{position:fixed;bottom:0;left:0;right:0;width:100%;height:50px;min-height:50px;z-index:200;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar.foot .text-red[data-v-55ae9ace]{color:#e71d36}.cu-bar.foot .text-gray[data-v-55ae9ace]{color:#9eb3c2}.cu-bar.foot.tabbar.shadow[data-v-55ae9ace]{box-shadow:0 -1px 2px rgba(26,26,26,.1)}.customer[data-v-55ae9ace]{height:10vw;line-height:10vw;margin:auto;font-size:4vw;text-align:center;z-index:9990}.customer .bottombtn[data-v-55ae9ace]{width:94vw;height:100%;margin:auto;color:#fff;border-radius:10vw}.customer .bottombtn .offerbtn[data-v-55ae9ace]{width:50%;float:left;background-color:#203c60;border-top-left-radius:1.5vw;border-bottom-left-radius:1.5vw}.customer .bottombtn .custbtn[data-v-55ae9ace]{width:50%;float:left;background-color:#e71d36;border-top-right-radius:1.5vw;border-bottom-right-radius:1.5vw}.card[data-v-55ae9ace]{padding:2vw;margin:0 3vw;line-height:6vw;background-color:#f7f7f7;border-top:2px #333 solid;display:-webkit-box;display:-webkit-flex;display:flex;color:#666;-webkit-justify-content:space-around;justify-content:space-around}.card .sharecontent[data-v-55ae9ace]{font-size:4vw;text-align:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}',""]),n.exports=t}}]);