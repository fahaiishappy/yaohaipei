(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-college-article-list"],{"0119":function(t,n,i){"use strict";var e,a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[i("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():i("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?i("span",[t.title?i("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):i("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?i("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img&&1==t.barid?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e(),t.img&&1!=t.barid?i("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right2.png"}}):t._e()])])},o=[];i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}))},"04ca":function(t,n,i){"use strict";var e=i("8256"),a=i.n(e);a.a},"107e":function(t,n,i){"use strict";i.r(n);var e=i("39b9"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a},1148:function(t,n,i){"use strict";var e=i("a691"),a=i("1d80");t.exports="".repeat||function(t){var n=String(a(this)),i="",o=e(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(i+=n);return i}},"20bd":function(t,n,i){"use strict";var e=i("bfd8"),a=i.n(e);a.a},"39b9":function(t,n,i){"use strict";i("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};n.default=e},"408a":function(t,n,i){var e=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=e(t))throw TypeError("Incorrect invocation");return+t}},"518b":function(t,n,i){"use strict";i.r(n);var e=i("cd0c"),a=i("5ecc");for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("20bd");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"2d0257c0",null,!1,e["a"],r);n["default"]=c.exports},"5ecc":function(t,n,i){"use strict";i.r(n);var e=i("fef8"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a},7117:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},a=e;n.default=a},8256:function(t,n,i){var e=i("850b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("3c3c30eb",e,!0,{sourceMap:!1,shadowMode:!1})},"850b":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'.auth[data-v-9df7cb58]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-9df7cb58]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-9df7cb58]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-9df7cb58]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-9df7cb58]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-9df7cb58]{height:100vh;z-index:300}.cu-bar[data-v-9df7cb58]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-9df7cb58]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-9df7cb58]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-9df7cb58]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-9df7cb58]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9df7cb58]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9df7cb58]{width:auto}.cuIcon-close[data-v-9df7cb58]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=n},a3e6:function(t,n,i){"use strict";i("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},a=e;n.default=a},a57d:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.videolist[data-v-2d0257c0]{background-color:#fff}.bg-fff[data-v-2d0257c0]{padding-bottom:3vw}.bg-fff .item[data-v-2d0257c0]:last-child{margin-bottom:0}.categoryimg[data-v-2d0257c0]{width:100%;display:block}.titletop[data-v-2d0257c0]{padding:5vw;font-size:4.5vw;font-weight:700;background-color:#fff;text-align:center}.titletop .name[data-v-2d0257c0]{background-image:url(https://www.hongrensutui.com/h5/img/wzbg2.png);background-repeat:repeat-x;background-position:bottom;display:inline-block;padding:0 1vw}.list[data-v-2d0257c0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:3vw;background-color:#fff;position:relative}.list .free[data-v-2d0257c0]{position:absolute;width:8vw;border-top-right-radius:1.5vw;border-bottom-left-radius:1.5vw;right:3.3vw;top:4.4vw;z-index:100}.list .information_img[data-v-2d0257c0]{width:28.8vw;height:18vw;border-radius:2vw;margin-left:3vw;border:1px solid #f5f5f5}.list .data[data-v-2d0257c0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.list .data .name[data-v-2d0257c0]{font-size:4vw;font-weight:700;line-height:6vw;color:#333;width:100%;height:12vw;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-clamp:2}.list .data .time[data-v-2d0257c0]{font-size:3.2vw;margin-top:2vw;color:#aaa;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.list .data .time .hits[data-v-2d0257c0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-left:1vw;margin-right:1.9vw;line-height:24px;font-size:12px}.list .data .time .hits .iconfont[data-v-2d0257c0]{font-size:3.5vw;margin-left:1vw}.cu-bar[data-v-2d0257c0]{position:static}.cu-dialog[data-v-2d0257c0]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-2d0257c0]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-2d0257c0]{width:auto}.bg-img[data-v-2d0257c0]{position:relative}.cuIcon-close[data-v-2d0257c0]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}.wechat[data-v-2d0257c0]{width:200px;height:200px}.tip[data-v-2d0257c0]{color:#fff;margin:2vw 0;font-size:3.4vw}.auth[data-v-2d0257c0]{padding:6vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-2d0257c0]{color:#333;margin-bottom:4vw}.more[data-v-2d0257c0]{font-size:3.4vw;text-align:center}.cu-bar.foot[data-v-2d0257c0]{z-index:199}.cu-bar.foot[data-v-2d0257c0]{position:fixed;bottom:0;left:0;right:0;width:100%;height:50px;min-height:50px;z-index:200;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar.foot .text-red[data-v-2d0257c0]{color:#e71d36}.cu-bar.foot .text-gray[data-v-2d0257c0]{color:#9eb3c2}.cu-bar.foot.tabbar.shadow[data-v-2d0257c0]{box-shadow:0 -1px 2px rgba(26,26,26,.1)}.customer[data-v-2d0257c0]{height:10vw;line-height:10vw;margin:auto;font-size:4vw;text-align:center;z-index:9990}.customer .bottombtn[data-v-2d0257c0]{width:94vw;height:100%;margin:auto;color:#fff;border-radius:10vw}.customer .bottombtn .offerbtn[data-v-2d0257c0]{width:50%;float:left;background-color:#203c60;border-top-left-radius:1.5vw;border-bottom-left-radius:1.5vw}.customer .bottombtn .custbtn[data-v-2d0257c0]{width:50%;float:left;background-color:#e71d36;border-top-right-radius:1.5vw;border-bottom-right-radius:1.5vw}.card[data-v-2d0257c0]{padding:2vw;margin:0 3vw;line-height:6vw;background-color:#f7f7f7;border-top:2px #333 solid;display:-webkit-box;display:-webkit-flex;display:flex;color:#666;-webkit-justify-content:space-around;justify-content:space-around}.card .sharecontent[data-v-2d0257c0]{font-size:4vw;text-align:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}',""]),t.exports=n},b680:function(t,n,i){"use strict";var e=i("23e7"),a=i("a691"),o=i("408a"),r=i("1148"),s=i("d039"),c=1..toFixed,d=Math.floor,l=function(t,n,i){return 0===n?i:n%2===1?l(t,n-1,i*t):l(t*t,n/2,i)},u=function(t){var n=0,i=t;while(i>=4096)n+=12,i/=4096;while(i>=2)n+=1,i/=2;return n},f=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));e({target:"Number",proto:!0,forced:f},{toFixed:function(t){var n,i,e,s,c=o(this),f=a(t),g=[0,0,0,0,0,0],h="",v="0",p=function(t,n){var i=-1,e=n;while(++i<6)e+=t*g[i],g[i]=e%1e7,e=d(e/1e7)},w=function(t){var n=6,i=0;while(--n>=0)i+=g[n],g[n]=d(i/t),i=i%t*1e7},b=function(){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==g[t]){var i=String(g[t]);n=""===n?i:n+r.call("0",7-i.length)+i}return n};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(n=u(c*l(2,69,1))-69,i=n<0?c*l(2,-n,1):c/l(2,n,1),i*=4503599627370496,n=52-n,n>0){p(0,i),e=f;while(e>=7)p(1e7,0),e-=7;p(l(10,e,1),0),e=n-1;while(e>=23)w(1<<23),e-=23;w(1<<e),p(1,1),w(2),v=b()}else p(0,i),p(1<<-n,0),v=b()+r.call("0",f);return f>0?(s=v.length,v=h+(s<=f?"0."+r.call("0",f-s)+v:v.slice(0,s-f)+"."+v.slice(s-f))):v=h+v,v}})},bfd8:function(t,n,i){var e=i("a57d");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("4840f1c8",e,!0,{sourceMap:!1,shadowMode:!1})},cd0c:function(t,n,i){"use strict";var e={mescrollUni:i("4b21").default},a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("uni-top-bar",{attrs:{title:t.toptitle}}),i("mescroll-uni",{ref:"mescrollRef",attrs:{top:t.topheight+43+"px",bottom:t.bottom,down:t.downOption,up:t.upOption},on:{init:function(n){arguments[0]=n=t.$handleEvent(n),t.mescrollInit.apply(void 0,arguments)},down:function(n){arguments[0]=n=t.$handleEvent(n),t.downCallback.apply(void 0,arguments)},up:function(n){arguments[0]=n=t.$handleEvent(n),t.upCallback.apply(void 0,arguments)}}},[t.category.img?i("img",{staticClass:"categoryimg",attrs:{src:t.category["img"],alt:"",mode:"widthFix"}}):t._e(),i("v-uni-view",{staticClass:"videolist"},[i("v-uni-view",{staticClass:"titletop"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.category.name))])],1),i("v-uni-view",{staticClass:"card"},[i("v-uni-view",{staticClass:"sharecontent"},[t._v("此栏目共有"+t._s(t.goodslength)+"个主题，持续更新中...")])],1),t._l(t.goods,(function(n,e){return i("v-uni-view",{key:e,staticClass:"list solid-bottom",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage("college/details",n)}}},[i("v-uni-view",{staticClass:"data"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(n.title))]),i("v-uni-view",{staticClass:"time"},[i("v-uni-view",{staticClass:"cu-tag round light bg-grey"},[t._v(t._s(n.category))]),i("v-uni-view",{staticClass:"hits"},[i("v-uni-view",{staticClass:"click"},[t._v(t._s(n.views)+"人已学习")])],1)],1)],1),n["img"]?i("img",{staticClass:"information_img",attrs:{src:n["img"],mode:"widthFix"}}):t._e(),n["img"]||1!=n["type"]?t._e():i("img",{staticClass:"information_img",attrs:{src:"https://www.hongrensutui.com/h5/img/nopic.png"}}),n["img"]||2!=n["type"]?t._e():i("img",{staticClass:"information_img",attrs:{src:"https://www.hongrensutui.com/h5/img/nopic2.png"}})],1)}))],2)],1),i("v-uni-view",{staticClass:"cu-modal",class:"Imageno"==t.modalName?"show":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("十分抱歉，由于相关规范，小程序暂不支持查看。")])],1)],1)],1),t.isandroid?i("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[i("v-uni-view",{staticClass:"customer round shadow text-center"},[i("v-uni-view",{staticClass:"bottombtn clearfix"},[i("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.categorymember(t.category.id)}}},[t._v(t._s(t._f("numFilter")(t.category.price))+" 购买此栏目")]),i("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Image"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.cardmember.apply(void 0,arguments)}}},[t._v(t._s(t._f("numFilter")(t.member.discountedprice))+" 全站免费看")])],1)],1)],1):t._e()],1)},o=[];i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}))},d654:function(t,n,i){"use strict";i.r(n);var e=i("0119"),a=i("107e");for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("04ca");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"9df7cb58",null,!1,e["a"],r);n["default"]=c.exports},fef8:function(t,n,i){"use strict";var e=i("ee27");i("99af"),i("b680"),i("d3b7"),i("acd8"),i("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(i("d654")),o=e(i("7117")),r=e(i("a3e6")),s={mixins:[o.default,r.default],components:{uniTopBar:a.default},data:function(){return{downOption:{auto:!0},upOption:{auto:!1,noMoreSize:4,toTop:{src:""},empty:{tip:"~ 空空如也 ~"}},userInfo:"",height:"400px",topheight:0,goods:"",toptitle:"课程列表",card_id:0,course:0,src:"",poster:"",modalName:null,id:"",category:"",bottom:"0px",member:"",goodslength:"",isandroid:!1}},filters:{numFilter:function(t){var n="";return n=isNaN(t)||""===t?" ":parseFloat(t).toFixed(0),n},numSingle:function(t,n){var i="";return i=isNaN(t)||""===t?" ":parseFloat(t/n).toFixed(2),i}},props:{tabs:Array},onLoad:function(t){var n=this,i=this;t.id&&(i.id=t.id),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",uni.request({url:"https://www.hongrensutui.com/api/index/course",success:function(t){n.course=t.data.data.course}}),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:n.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),i.userInfo=t.data.data.info}})},fail:function(n){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),i.userInfo=t.data.data.info}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?i.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),i.getmember()},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(n){""!=n.data&&null!=n.data&&t.updateuser(n.data.id)}})},methods:{updateuser:function(t){var n=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(uni.setStorageSync("userInfo",t.data.data.info),n.userInfo=t.data.data.info,n.downCallback()):wxlogin()}})},downCallback:function(){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(t){var n=this;uni.getStorage({key:"userInfo",success:function(i){""!=i.data&&null!=i.data&&(n.userInfo=i.data,n.goodslist(t))}})},goodslist:function(t){var n=this,i=this;uni.request({url:"https://www.hongrensutui.com/api/index/videolist",method:"POST",data:{mid:i.userInfo.id,id:i.id,pagenum:t.num,pagesize:t.size},success:function(e){i.category=e.data.data.category,i.goodslength=e.data.data.count;var a=e.data.data.info,o=a.length;switch(uni.getSystemInfoSync().platform){case"android":i.category.price&&(i.bottom="50px"),i.isandroid=!0;break;case"ios":i.category.price&&(i.bottom="50px"),i.isandroid=!0;break}(8==a[0].article_card_id||a[0].categoryfree)&&(i.bottom="0px",i.isandroid=!1),i.share(i.userInfo.company_id,i.userInfo.id,i.category.name),1==t.num&&(i.goods=[]),i.goods=i.goods.concat(e.data.data.info),n.mescroll.endByPage(o),setTimeout((function(){n.mescroll.endSuccess(o)}),20)},fail:function(t){i.mescroll.endErr()}})},navToDetailPage:function(t,n){1==n.free?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=2&msg=免费文章"}):8==n.article_card_id?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=学院超级会员"}):n.categoryfree?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=已购买栏目"}):n.articlefree?uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=1&msg=已购买文章"}):uni.navigateTo({url:"/pages/"+t+"?id="+n.id+"&free=0&msg=付费文章"})},hideModal:function(t){this.modalName=null},share:function(t){function n(n,i,e){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,i){var e=i+" - 红人速推学院 | 抖音、快手指定线上学习平台",a="学院涵盖抖音、快手策略打法，为业界输出专业的营销课程，点击查看详情",o="https://www.hongrensutui.com/uploads/share/college_video_logo.png";share(e,a,o,n)}))}};n.default=s}}]);