(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-college-details"],{"02f3":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?a("span",{staticClass:"clearfix"},[t.within?a("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):a("span",[t.title?a("span",{staticClass:"title"},[t._v(t._s(t.title))]):a("span",{staticClass:"title"},[t._v("红人速推")])])]):a("span",[t.within?a("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):a("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},n=[]},"26c6":function(t,e,a){var i=a("a5dc");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("590f2324",i,!0,{sourceMap:!1,shadowMode:!1})},"2cc9":function(t,e,a){"use strict";a.r(e);var i=a("4cf3"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"2ce0":function(t,e,a){"use strict";a.r(e);var i=a("e9d4"),o=a("2cc9");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("fafe");var r,s=a("f0c5"),d=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"6df761de",null,!1,i["a"],r);e["default"]=d.exports},4674:function(t,e,a){"use strict";a.r(e);var i=a("7137"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"4cf3":function(t,e,a){"use strict";var i=a("4ea4");a("b680"),a("d3b7"),a("acd8"),a("ac1f"),a("25f0"),a("5319"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("5ad0")),n=i(a("f73f")),r=i(a("50f0")),s={mixins:[n.default,r.default],components:{uniTopBar:o.default},data:function(){return{modalName:null,id:"",fab:!1,content:"",height:"",toptitle:"文章详情",title:"",member:"",free:"",category_price:"",article_price:"",userInfo:"",showpage:!1,scheduletitle:"",scheduletip:"",percent:0,totalBytesSent:0,totalBytesExpectedToSend:0}},filters:{numFilter:function(t){var e="";return e=isNaN(t)||""===t?" ":parseFloat(t).toFixed(0),e},numSingle:function(t,e){var a="";return a=isNaN(t)||""===t?" ":parseFloat(t/e).toFixed(2),a},flie_name:function(t){var e=t.split("."),a=e[e.length-2].split("/"),i=a[a.length-1],o=e[e.length-1];return i=i.length>20?"《"+i.substring(0,20)+"...》":"《"+i+"》",i+o},flie_txt:function(t){var e=t.split("."),a=e[e.length-1];return"pdf"==a?"https://www.hongrensutui.com/uploads/share/pdf_logo.png":"doc"==a||"docx"==a?"https://www.hongrensutui.com/uploads/share/doc_logo.png":"xls"==a?"https://www.hongrensutui.com/uploads/share/xls_logo.png":"xlsx"==a?"https://www.hongrensutui.com/uploads/share/xlsx_logo.png":"ppt"==a?"https://www.hongrensutui.com/uploads/share/ppt_logo.png":"pptx"==a?"https://www.hongrensutui.com/uploads/share/pptx_logo.png":"zip"==a?"https://www.hongrensutui.com/uploads/share/zip_logo.png":"rar"==a?"https://www.hongrensutui.com/uploads/share/rar_logo.png":void 0}},onLoad:function(t){var e=this;uni.showLoading({title:"加载中,请稍后..."}),this.height=this.StatusBar,e.id=t["id"],e.free=t["free"],e.msg=t["msg"],t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:a.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.collegeDetails()}})},fail:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){uni.setStorageSync("userInfo",t.data.data.info),e.userInfo=t.data.data.info,e.collegeDetails()}})}}):uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data?e.updateuser(t.data.id):wxlogin()},fail:function(t){wxlogin()}}),e.getmember()},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&t.updateuser(e.data.id)}})},methods:{updateuser:function(t){var e=this;t&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?(e.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.collegeDetails()):wxlogin()}})},getmember:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/member",data:{belong:4},method:"POST",success:function(e){t.member=e.data.data.list[0]}})},collegeDetails:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/collegeDetails",data:{mid:e.data.id,id:t.id},method:"POST",success:function(a){t.content=a.data.data.info,t.category_price=t.content.category_price,t.article_price=t.content.price;var i=a.data.data.info.content;t.content.content=i.replace(/\<img/gi,'<img style="border-radius: 1.5vw;width:100%" '),t.content&&(uni.hideLoading(),t.showpage=!0),t.share(t.content,e.data.company_id,e.data.id)}})},fail:function(e){uni.request({url:"https://www.hongrensutui.com/api/index/collegeDetails",data:{id:t.id},method:"POST",success:function(e){t.content=e.data.data.list;var a=e.data.data.list.content;t.content.content=a.replace(/\<img/gi,'<img style="border-radius: 1.5vw;width:100%" '),t.content&&(uni.hideLoading(),t.showpage=!0),t.share(t.content,0,0)}})}})},fabulous:function(){var t=this;t.fab||(t.fab=!0,t.content.fabulous=t.content.fabulous+1)},numFilter:function(t){var e=parseFloat(t).toFixed(2);return e},download:function(t){var e=this;uni.showModal({title:"文件下载",content:"是否下载此文件？",confirmText:"下载",success:function(a){if(a.confirm){e.scheduletip="",e.percent=0;var i=uni.downloadFile({url:t,success:function(t){200===t.statusCode&&uni.saveFile({tempFilePath:t.tempFilePath,success:function(t){uni.showToast({icon:"none",mask:!0,title:"文件已保存："+t.savedFilePath,duration:3e3}),setTimeout((function(){uni.openDocument({filePath:t.savedFilePath,success:function(t){}})}),1e3)}})}});i.onProgressUpdate((function(t){e.scheduletitle="文件下载",e.modalName="schedule",e.percent=t.progress,e.totalBytesSent=e.numFilter(t.totalBytesWritten/1024/1024),e.totalBytesExpectedToSend=e.numFilter(t.totalBytesExpectedToWrite/1024/1024),100==t.progress&&(e.scheduletip="文件下载完成")}))}}})},hideModal:function(t){this.modalName=null},categorymember:function(t){var e=this;e.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/categoryorder",data:{openid:e.userInfo.openid,id:t},method:"POST",success:function(t){var a="/pages/college/details?id="+e.id+"&free=1&msg=已购买栏目";callpay(JSON.parse(t.data.data.parameters),t.data.data.info,a)}}):uni.showToast({title:"请登录后操作",icon:"none",duration:2e3})},openmember:function(t){var e=this;e.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/collegeorder",data:{openid:e.userInfo.openid,id:t},method:"POST",success:function(t){var a="/pages/college/details?id="+e.id+"&free=1&msg=已购买文章";callpay(JSON.parse(t.data.data.parameters),t.data.data.info,a)}}):uni.showToast({title:"请登录后操作",icon:"none",duration:2e3})},cardmember:function(){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/card",data:{openid:t.userInfo.openid,id:8},method:"POST",success:function(e){var a="/pages/college/details?id="+t.id+"&free=1&msg=学院超级会员";callpay(JSON.parse(e.data.data.parameters),e.data.data.info,a)}}):(uni.showToast({title:"请登录后操作",icon:"none",duration:2e3}),ss)},wxcategorymember:function(t){var e=this;e.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Order/categoryorder",data:{openid:e.userInfo.xopenid,id:t},method:"POST",success:function(t){var a=t.data.data.orderid;uni.requestPayment({provider:"wxpay",timeStamp:t.data.data.wechat.payinfo.timeStamp,nonceStr:t.data.data.wechat.payinfo.nonceStr,package:t.data.data.wechat.payinfo.package,signType:t.data.data.wechat.payinfo.signType,paySign:t.data.data.wechat.payinfo.paySign,success:function(t){uni.request({url:"https://www.hongrensutui.com/api/Order/complete_categoryorder",data:{openid:e.userInfo.xopenid,id:a},method:"POST",success:function(t){var a="/pages/college/details?id="+e.id+"&free=1&msg=已购买栏目";uni.redirectTo({url:a})}})}})}}):uni.showToast({title:"请登录后操作",icon:"none",duration:2e3})},wxcardmember:function(){var t=this;t.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Order/card",data:{openid:t.userInfo.xopenid,id:8},method:"POST",success:function(e){var a=e.data.data.orderid;uni.requestPayment({provider:"wxpay",timeStamp:e.data.data.wechat.payinfo.timeStamp,nonceStr:e.data.data.wechat.payinfo.nonceStr,package:e.data.data.wechat.payinfo.package,signType:e.data.data.wechat.payinfo.signType,paySign:e.data.data.wechat.payinfo.paySign,success:function(e){uni.request({url:"https://www.hongrensutui.com/api/Order/complete_card",data:{openid:t.userInfo.xopenid,id:a},method:"POST",success:function(e){var a="/pages/college/details?id="+t.id+"&free=1&msg=学院超级会员";uni.redirectTo({url:a})}})}})}}):uni.showToast({title:"您还未登录，请登录后操作",icon:"none",duration:2e3})},share:function(t){function e(e,a,i){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e,a){var i=t.title;t.sharetitle&&(i=t.sharetitle);var o=t.title+"，点击查看详情";if(t.sharecontent&&(o=t.sharecontent),t.img)var n=t.img;else n="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(i,o,n,a)}))}};e.default=s},"50f0":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},o=i;e.default=o},5627:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.cu-bar[data-v-4dddd08a]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-4dddd08a]{margin-left:3vw;height:30px}.cuIcon-back[data-v-4dddd08a]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-4dddd08a]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-4dddd08a]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-4dddd08a]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-4dddd08a]{width:auto}.cuIcon-close[data-v-4dddd08a]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},"5ad0":function(t,e,a){"use strict";a.r(e);var i=a("02f3"),o=a("4674");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("ed98");var r,s=a("f0c5"),d=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"4dddd08a",null,!1,i["a"],r);e["default"]=d.exports},7137:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=i},a5dc:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".cu-bar[data-v-6df761de]{position:static}.hongren[data-v-6df761de]{bottom:0}.count[data-v-6df761de]{padding:5vw 3vw}.title[data-v-6df761de]{color:#333;font-size:5vw;font-weight:700}.time[data-v-6df761de]{color:#666;font-size:3.6vw;padding:3vw 0}.time .hits[data-v-6df761de]{float:right}.time .hits .iconfont[data-v-6df761de]{font-size:3.5vw;margin-left:1vw;color:#6c757d}.card[data-v-6df761de]{padding:2vw;line-height:6vw;background-color:#f7f7f7;border-top:2px #333 solid;display:-webkit-box;display:-webkit-flex;display:flex;color:#666;-webkit-justify-content:space-around;justify-content:space-around}.card .quote[data-v-6df761de]{width:5vw;height:5vw;margin-right:2vw}.card .quote img[data-v-6df761de]{width:100%}.card .sharecontent[data-v-6df761de]{font-size:4vw;-webkit-box-flex:1;-webkit-flex:1;flex:1}.data[data-v-6df761de]{color:#666;font-size:4.3vw;line-height:7vw;padding:3vw 0}.data img[data-v-6df761de]{width:100%;-webkit-border-radius:1.5vw;border-radius:1.5vw}.data[data-v-6df761de] img{margin-top:1.5vw;-webkit-border-radius:1.5vw;border-radius:1.5vw}.follow[data-v-6df761de]{padding-top:6vw;padding-bottom:4vw}.fabulous[data-v-6df761de]{width:16vw;height:16vw;left:50%;margin-left:-8vw;-webkit-border-radius:50%;border-radius:50%;padding-top:3vw}.fabulous .iconfont[data-v-6df761de]{font-size:6vw;color:#ccc}.fabulous .num[data-v-6df761de]{font-size:3.2vw;margin-top:1vw;color:#777}.fabulous.active[data-v-6df761de]{border:1px solid #f37b1d}.fabulous.active .num[data-v-6df761de],\n.fabulous.active .iconfont[data-v-6df761de]{color:#f37b1d}.encourage[data-v-6df761de]{color:#999;margin-top:3vw;font-size:3.4vw}.free[data-v-6df761de]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:100;overflow-y:scroll;overflow-x:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),color-stop(40%,hsla(0,0%,100%,0)),color-stop(50%,hsla(0,0%,100%,.2)),color-stop(55%,hsla(0,0%,100%,.4)),color-stop(60%,hsla(0,0%,100%,.6)),color-stop(65%,hsla(0,0%,100%,.8)),color-stop(80%,#fff),to(#fff));background-image:-webkit-linear-gradient(top,hsla(0,0%,100%,0),hsla(0,0%,100%,0) 40%,hsla(0,0%,100%,.2) 50%,hsla(0,0%,100%,.4) 55%,hsla(0,0%,100%,.6) 60%,hsla(0,0%,100%,.8) 65%,#fff 80%,#fff);background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,0) 40%,hsla(0,0%,100%,.2) 50%,hsla(0,0%,100%,.4) 55%,hsla(0,0%,100%,.6) 60%,hsla(0,0%,100%,.8) 65%,#fff 80%,#fff);padding-top:70vh}.free .tip_down[data-v-6df761de]{text-align:center}.free .tip_down img[data-v-6df761de]{width:8vw}.free .title[data-v-6df761de]{margin:3vw auto;font-size:4vw;width:50vw;padding:2vw 3vw;text-align:center;color:#ffb148;border:1px #ffce6e solid;background-color:#fef5eb;-webkit-border-radius:1.5vw;border-radius:1.5vw}.member[data-v-6df761de]{width:100vw;height:36vw;padding:0 3vw;overflow-x:scroll}.member-swiper[data-v-6df761de]{width:200vw}.member .item[data-v-6df761de]{float:left}.member .item .tab[data-v-6df761de]{padding:3vw;width:29.2vw;height:30vw;background-color:rgba(231,235,237,.3);margin-right:3vw;border:1px solid #e7ebed;-webkit-box-shadow:1px 1px 4px rgba(231,235,237,.2);box-shadow:1px 1px 4px rgba(231,235,237,.2);-webkit-border-radius:1.5vw;border-radius:1.5vw;position:relative;overflow:hidden}.member .item .tab.active[data-v-6df761de]{background-color:rgba(250,219,217,.3);border:1px solid #fadbd9;-webkit-box-shadow:1px 1px 2px rgba(229,77,66,.1);box-shadow:1px 1px 2px rgba(229,77,66,.1)}.member .item .tab .name[data-v-6df761de]{font-size:3.5vw;padding-top:1vw;text-align:center;font-weight:600;color:#333}.member .item .tab .rate[data-v-6df761de]{position:absolute;top:0;right:0;background-color:#e71d36;color:#fff;font-size:2.6vw;padding:0 1vw;-webkit-border-bottom-left-radius:1.5vw;border-bottom-left-radius:1.5vw}.member .item .tab .price[data-v-6df761de]{color:red;padding-top:4vw;text-align:center;font-size:5.6vw;font-weight:700}.member .item .tab .price span[data-v-6df761de]{font-weight:700;font-size:3.5vw}.member .item .tab .average[data-v-6df761de]{text-align:center;font-size:3vw;padding-bottom:5vw}.member .item .tab .average.fracture[data-v-6df761de]{padding-bottom:0}.member .item .tab .cost-price[data-v-6df761de]{font-size:3vw;text-align:center;height:6vw;line-height:6vw;text-decoration:line-through}.flie[data-v-6df761de]{margin-top:3vw;margin-bottom:1.5vw}.flie .flie_img[data-v-6df761de]{width:14vw;height:14vw;margin:0!important;display:inline-block;-webkit-border-top-left-radius:1.5vw!important;border-top-left-radius:1.5vw!important;-webkit-border-bottom-left-radius:1.5vw!important;border-bottom-left-radius:1.5vw!important;-webkit-border-top-right-radius:0!important;border-top-right-radius:0!important;-webkit-border-bottom-right-radius:0!important;border-bottom-right-radius:0!important;vertical-align:top}.flie .flie_name[data-v-6df761de]{padding:2vw;font-size:3.5vw;width:58vw;height:14vw;line-height:5vw;display:inline-block;background-color:#efefef;-webkit-border-top-right-radius:1.5vw;border-top-right-radius:1.5vw;-webkit-border-bottom-right-radius:1.5vw;border-bottom-right-radius:1.5vw;position:relative}.flie span[data-v-6df761de]{position:absolute;font-size:4vw;right:2vw;bottom:1vw}.tip[data-v-6df761de]{\n\t/* margin-top: 3vw; */width:100%;color:#ffb148;border:1px #ffce6e solid;background-color:#fef5eb;-webkit-border-radius:1.5vw;border-radius:1.5vw;padding:0 4vw}.tip .cuIcon-lock[data-v-6df761de]{color:#ffb148;margin-right:2vw;font-size:4vw;font-weight:700}.tip .tipname[data-v-6df761de]{font-size:3.5vw;line-height:12vw}.cu-bar.foot[data-v-6df761de]{z-index:199}.cu-bar.foot[data-v-6df761de]{position:fixed;bottom:0;left:0;right:0;width:100%;height:50px;min-height:50px;z-index:200;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar.foot .text-red[data-v-6df761de]{color:#e71d36}.cu-bar.foot .text-gray[data-v-6df761de]{color:#9eb3c2}.cu-bar.foot.tabbar.shadow[data-v-6df761de]{-webkit-box-shadow:0 -1px 2px rgba(26,26,26,.1);box-shadow:0 -1px 2px rgba(26,26,26,.1)}.customer[data-v-6df761de]{height:10vw;line-height:10vw;margin:auto;font-size:4vw;text-align:center;z-index:9990}.customer .bottombtn[data-v-6df761de]{width:94vw;height:100%;margin:auto;color:#fff;-webkit-border-radius:10vw;border-radius:10vw}.customer .bottombtn .offerbtn[data-v-6df761de]{width:50%;float:left;background-color:#203c60;-webkit-border-top-left-radius:1.5vw;border-top-left-radius:1.5vw;-webkit-border-bottom-left-radius:1.5vw;border-bottom-left-radius:1.5vw}.customer .bottombtn .custbtn[data-v-6df761de]{width:50%;float:left;background-color:#e71d36;-webkit-border-top-right-radius:1.5vw;border-top-right-radius:1.5vw;-webkit-border-bottom-right-radius:1.5vw;border-bottom-right-radius:1.5vw}",""]),t.exports=e},c873:function(t,e,a){var i=a("5627");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("d80083fc",i,!0,{sourceMap:!1,shadowMode:!1})},e9d4:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showpage?a("v-uni-view",[a("uni-top-bar",{attrs:{title:t.toptitle}}),a("v-uni-view",{staticClass:"hongren bg-fff",style:{top:t.height+43+"px"}},[a("v-uni-view",{staticClass:"count"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.content.title))]),a("v-uni-view",{staticClass:"time"},[t._l(t.content.type,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-tag round bg-orange light"},[1==e?a("span",[t._v("#抖音")]):t._e(),0==e?a("span",[t._v("#快手")]):t._e()])})),a("v-uni-view",{staticClass:"cu-tag round light bg-grey"},[t._v(t._s(t.content.category))]),a("v-uni-view",{staticClass:"hits"},[t._v(t._s(t.content.views)+"人已学习")])],2),t.content.sharecontent?a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"quote"},[a("img",{attrs:{src:"https://www.hongrensutui.com/uploads/share/quote.png",mode:"widthFix"}})]),a("v-uni-view",{staticClass:"sharecontent"},[t._v(t._s(t.content.sharecontent))])],1):a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"quote"},[a("img",{attrs:{src:"https://www.hongrensutui.com/uploads/share/quote.png",mode:"widthFix"}})]),a("v-uni-view",{staticClass:"sharecontent"},[t._v("红人速推学院是抖音、快手指定线上学习平台；学院涵盖抖音、快手策略打法，为业界输出专业的营销课程。")])],1),a("v-uni-view",{staticClass:"data"},[t.content.file?a("v-uni-view",[1==t.content.free||t.userInfo.card_id>1&&t.userInfo.card_id||t.content.categoryfree||t.content.articlefree?a("v-uni-view",{staticClass:"tip",staticStyle:{border:"none"}}):a("v-uni-view",{staticClass:"tip"},[a("span",{staticClass:"lg text-gray cuIcon-lock"}),a("span",{staticClass:"tipname"},[t._v("您需要加入"+t._s(t.content.category)+"，才能下载！")])]),1==t.content.free||t.userInfo.card_id>1&&t.userInfo.card_id||t.content.categoryfree||t.content.articlefree?a("v-uni-view",{staticClass:"flie",staticStyle:{"margin-top":"0"}},[a("a",{staticStyle:{color:"#333"},attrs:{href:t.content["file"],target:"_blank"}},[a("img",{staticClass:"flie_img",attrs:{src:t._f("flie_txt")(t.content["file"]),mode:"widthFix"}}),a("v-uni-view",{staticClass:"flie_name"},[t._v(t._s(t._f("flie_name")(t.content.file))),a("span",{staticClass:"lg text-gray cuIcon-unlock"})])],1)]):a("v-uni-view",{staticClass:"flie"},[a("img",{staticClass:"flie_img",attrs:{src:t._f("flie_txt")(t.content["file"]),mode:"widthFix"}}),a("v-uni-view",{staticClass:"flie_name"},[t._v(t._s(t._f("flie_name")(t.content.file))),a("span",{staticClass:"lg text-gray cuIcon-lock"})])],1)],1):t._e(),a("v-uni-view",{domProps:{innerHTML:t._s(t.content.content)}}),a("img",{class:t.content.file?"hide":"show",attrs:{src:"https://www.hongrensutui.com/h5/img/news/news_logo_750_right.png",mode:"widthFix"}})],1)],1)],1),0==t.free?a("v-uni-view",{staticClass:"free",style:{top:t.height+43+"px"}},[a("v-uni-view",{staticClass:"title"},[t._v("付费后继续查看")]),a("v-uni-view",{staticClass:"tip_down"},[a("img",{attrs:{src:"https://www.hongrensutui.com/uploads/share/tip_down.png",mode:"widthFix"}})])],1):t._e(),0==t.free?a("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[a("v-uni-view",{staticClass:"customer round shadow text-center"},[a("v-uni-view",{staticClass:"bottombtn clearfix"},[a("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.categorymember(t.content.pid)}}},[t._v(t._s(t._f("numFilter")(t.category_price))+" 购买此栏目")]),a("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Image"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cardmember.apply(void 0,arguments)}}},[t._v(t._s(t._f("numFilter")(t.member.discountedprice))+" 全站免费看")])],1)],1)],1):t._e(),a("v-uni-view",{staticClass:"cu-modal",class:"schedule"==t.modalName?"show":""},[a("v-uni-view",{staticClass:"cu-dialog",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-bar bg-white"},[a("v-uni-view",{staticClass:"action text-gray"},[t._v(t._s(t.scheduletitle))]),a("v-uni-view",{staticClass:"action text-green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("确定")])],1),a("v-uni-view",{staticClass:"padding-sm"},[a("v-uni-view",{staticClass:"padding bg-white clearfix"},[a("v-uni-view",{staticClass:"cu-progress"},[a("v-uni-view",{staticClass:"bg-red",style:[{width:t.percent+"%"}]},[t._v(t._s(t.percent+"%"))])],1),a("v-uni-view",{staticStyle:{float:"left","margin-top":"2vw"}},[t._v(t._s(t.scheduletip))]),a("v-uni-view",{staticStyle:{float:"right","margin-top":"2vw"}},[t._v(t._s(t.totalBytesSent)+"MB/"+t._s(t.totalBytesExpectedToSend)+"MB")])],1)],1)],1)],1)],1):t._e()},n=[]},ed98:function(t,e,a){"use strict";var i=a("c873"),o=a.n(i);o.a},f73f:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},o=i;e.default=o},fafe:function(t,e,a){"use strict";var i=a("26c6"),o=a.n(i);o.a}}]);