(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-celebrity-details"],{"05ef":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String,background:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};e.default=a},"1cb0":function(t,e,i){var a=i("627e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("b68b7a92",a,!0,{sourceMap:!1,shadowMode:!1})},"314a":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.showpage?i("v-uni-view",{staticClass:"celebritydetails"},[t.message?i("v-uni-view",{staticClass:"tipnews"},[t.tip?i("v-uni-view",{staticClass:"animated1 fadeInRight"},[i("v-uni-view",{staticClass:"cuIcon-notificationfill"}),i("span",[i("span",{staticClass:"cor-ff"},[t._v(t._s(t.message.minute)+t._s(t.message.timename)+"前")]),i("span",[t._v("商家"+t._s(t.message.merchant))]),t._v("查看了"),i("span",[t._v("该主播")])])],1):t._e()],1):t._e(),i("v-uni-view",{staticClass:"hongren",style:{paddingTop:t.height+43+"px"}},[i("uni-top-bar",{attrs:{title:t.toptitle,background:t.background}}),i("v-uni-view",{staticStyle:{position:"absolute",overflow:"hidden",top:"0",left:"0",width:"100vw"}},[i("img",{staticClass:"blur2",staticStyle:{transform:"scale(1.2)",width:"100%"},attrs:{src:t.content["avatar"],mode:"widthFix"}})]),i("v-uni-view",{staticClass:"head"},[i("img",{attrs:{src:t.content["avatar"]}}),i("v-uni-view",{staticClass:"collect",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.collect(t.content)}}},[i("v-uni-view",{staticClass:"lg text-gray",class:t.content.show?"cuIcon-likefill":"cuIcon-like"})],1)],1),i("v-uni-view",{staticClass:"flex nav"},[i("v-uni-view",{staticClass:"flex-sub padding-sm text-center",class:{active:0===t.tabCurrentIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(0)}}},[t._v("资料卡")]),!t.userInfo.card_id||t.userInfo.card_id<2?i("v-uni-view",{staticClass:"flex-sub padding-sm text-center",class:{active:1===t.tabCurrentIndex},attrs:{"data-target":"Modalfshx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[i("span",[t._v("粉丝画像")]),i("span",{staticClass:"cuIcon-lock"})]):i("v-uni-view",{staticClass:"flex-sub padding-sm text-center",class:{active:1===t.tabCurrentIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(1)}}},[t._v("粉丝画像")])],1)],1),i("v-uni-view",{staticClass:"hongren-content",style:{top:t.height+193+"px"}},[i("v-uni-view",{staticClass:"item data",class:{active:0===t.tabCurrentIndex}},[i("v-uni-view",{staticClass:"flex solid-bottom"},[i("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs text-center"},[i("v-uni-view",{staticClass:"personal-title"},[t._v("红人昵称")]),t.userInfo.card_id>0?i("v-uni-view",{staticClass:"personal-data"},[t._v(t._s(t.content.nickname))]):i("v-uni-view",{staticClass:"personal-data"},[t._v(t._s(t._f("numFilter")(t.content.nickname)))])],1),i("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs text-center"},[i("v-uni-view",{staticClass:"personal-title"},[t._v("入驻平台")]),t._l(t.content.platform,(function(e,a){return i("v-uni-view",{key:a,staticClass:"personal-data"},[t._v(t._s(e))])}))],2),i("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs text-center"},[i("v-uni-view",{staticClass:"personal-title"},[t._v("拥有粉丝")]),i("v-uni-view",{staticClass:"personal-data cor-e8"},[t._v(t._s(t.content.fans)+"w")])],1)],1),i("v-uni-view",{staticClass:"cu-list menu sm-border"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("带货领域")])],1),i("v-uni-view",{staticClass:"action"},t._l(t.content.category,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cu-tag round light bg-grey"},[t._v(t._s(e))])})),1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("合作形式")])],1),i("v-uni-view",{staticClass:"action"},t._l(t.content.cooperation,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cu-tag round light bg-grey"},[t._v(t._s(e))])})),1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("收费方式")])],1),i("v-uni-view",{staticClass:"action"},["1"==t.content.pay_type?i("v-uni-view",{staticClass:"cu-tag round light bg-grey"},[t._v("坑位费")]):t._e(),"2"==t.content.pay_type?i("v-uni-view",{staticClass:"cu-tag round light bg-grey"},[t._v("纯佣金")]):t._e(),"3"==t.content.pay_type?i("v-uni-view",{staticClass:"cu-tag round light bg-grey"},[t._v("坑位费+佣金")]):t._e()],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("参考报价")])],1),i("v-uni-view",{staticClass:"action"},[!t.userInfo.card_id||t.userInfo.card_id<2?i("v-uni-view",{staticClass:"cu-tag light bg-yellow round",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("会员免费查看")]):i("v-uni-view",{staticClass:"cu-tag light bg-yellow round"},[t._v(t._s(t.content.price))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("微信号码")])],1),i("v-uni-view",{staticClass:"action"},[!t.userInfo.card_id||t.userInfo.card_id<2?i("v-uni-view",{staticClass:"cu-tag light bg-yellow round",attrs:{"data-target":"Modal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("会员免费查看")]):i("v-uni-view",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.content.wechat_work,expression:"content.wechat_work",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:function(e){return t.onCopyResult("success")},expression:"(type) => onCopyResult('success')",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:function(e){return t.onCopyResult("error")},expression:"(type) => onCopyResult('error')",arg:"error"}],staticStyle:{"font-size":"12px",color:"#fbbd08"}},[t._v(t._s(t.content.wechat_work)+" (点击复制)")])],1)],1),t.content.purpose?i("v-uni-view",{staticClass:"cu-item",staticStyle:{display:"flex","align-items":"flex-start",padding:"2vw 3vw"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("谁关注他")])],1),i("v-uni-view",{staticClass:"action"},[t._l(t.content.purpose,(function(t,e){return i("v-uni-image",{key:e,staticClass:"platform",staticStyle:{"border-radius":"1vw",top:"0.5vw","margin-bottom":"1vw"},attrs:{src:t}})})),t.content.people>100?i("span",{staticStyle:{"margin-left":"1vw",position:"relative",top:"0.5vw",color:"#8799a3"}},[t._v("等"+t._s(t.content.people)+"人感兴趣")]):t._e()],2)],1):t._e()],1)],1),i("v-uni-view",{staticClass:"item portrait",class:{active:1===t.tabCurrentIndex}},[i("v-uni-view",{staticClass:"fshx"},[i("img",{attrs:{src:t.url+t.cewebrityuid+".jpg",mode:"widthFix"}})])],1)],1),i("v-uni-view",{staticClass:"cu-modal config",class:"Image"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog",staticStyle:{width:"auto"}},[i("v-uni-view",{staticClass:"bg-img"},[i("v-uni-view",{staticClass:"service"},[i("img",{staticClass:"wechat",attrs:{src:t.config.service,mode:"widthFix"}}),i("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.config.servicetip))])],1),i("v-uni-view",{staticClass:"cu-bar justify-center text-white",staticStyle:{"margin-top":"3vw"}},[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[i("v-uni-view",{staticClass:"opening round shadow text-center"},[i("v-uni-view",{staticClass:"bottombtn clearfix"},[i("v-uni-view",{staticClass:"offerbtn",attrs:{"data-target":"docking"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showdocking.apply(void 0,arguments)}}},[t._v("私信主播"),t.num?i("span",{staticStyle:{"margin-left":"2vw",display:"inline-block",width:"4vw",height:"4vw","border-radius":"50%","background-color":"#E71D36","text-align":"center","line-height":"4vw","font-size":"3vw"}},[t._v(t._s(t.num))]):t._e()]),i("v-uni-view",{staticClass:"custbtn",attrs:{"data-target":"Modalwxlx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("微信联系")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal poptips",class:"Modalfshx"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("会员用户可查看主播粉丝画像")]),i("v-uni-view",{staticClass:"vip",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.member.apply(void 0,arguments)}}},[t._v("立即成为会员")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal poptips",class:"Modalwhdj"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("非会员最多能私信3个主播")]),i("v-uni-view",{staticClass:"vip",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.member.apply(void 0,arguments)}}},[t._v("立即成为会员")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal poptips",class:"Modalfsj"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("您还未入驻成为商家，无法私信主播")]),i("v-uni-view",{staticClass:"vip",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.atte.apply(void 0,arguments)}}},[t._v("立即免费入驻")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:"Modal"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("会员用户可免费查看")]),i("v-uni-view",{staticClass:"vip",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.member.apply(void 0,arguments)}}},[t._v("立即成为会员")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:"Modalwxlx"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[0==t.userInfo.card_id?i("v-uni-view",[i("v-uni-view",{staticClass:"title"},[t._v("会员用户可免费添加主播微信")]),i("v-uni-view",{staticClass:"vip",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.member.apply(void 0,arguments)}}},[t._v("立即成为会员")])],1):i("v-uni-view",[i("v-uni-view",{staticClass:"title"},[t._v("微信号："+t._s(t.content.wechat_work))]),i("v-uni-view",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.content.wechat_work,expression:"content.wechat_work",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:function(e){return t.onCopyResult("success")},expression:"(type) => onCopyResult('success')",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:function(e){return t.onCopyResult("error")},expression:"(type) => onCopyResult('error')",arg:"error"}],staticClass:"vip"},[t._v("点击复制")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal bottom-modal",class:"docking"==t.modalName?"show":"",staticStyle:{"z-index":"320"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hidedocking.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog",staticStyle:{padding:"0"}},[i("v-uni-view",{staticClass:"cu-bar",staticStyle:{position:"static",background:"rgb(238, 238, 238)"}},[i("v-uni-view",{staticClass:"action text-red",staticStyle:{"padding-left":"3vw"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hidedocking.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"action text-red",staticStyle:{"margin-right":"3vw"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hidedocking.apply(void 0,arguments)}}},[t._v("关闭聊天")])],1),i("v-uni-view",{staticStyle:{background:"#eee"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-scroll-view",{staticClass:"scroll-Y",style:{height:t.contentViewHeight+"px",marginBottom:"50px"},attrs:{"scroll-into-view":t.tolast,"scroll-with-animation":"true","scroll-top":t.scrollTop,"scroll-y":"true"},on:{scrolltoupper:function(e){arguments[0]=e=t.$handleEvent(e),t.upper.apply(void 0,arguments)},scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.lower.apply(void 0,arguments)},scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-chat"},[i("v-uni-view",{staticStyle:{color:"#999","font-size":"3.5vw"}},[t._v("现在可以开始聊天了")]),t._l(t.chatlist,(function(e,a){return i("v-uni-view",{key:a,attrs:{id:"item"+a}},[1==e.belong?i("v-uni-view",{staticClass:"cu-item self"},[i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{staticClass:"content bg-green shadow"},[i("v-uni-text",{staticStyle:{"font-size":"3.5vw"}},[t._v(t._s(e.content))])],1)],1),i("v-uni-view",{staticClass:"cu-avatar radius",style:{backgroundImage:"url("+t.userInfo["avatar"]+")"}}),i("v-uni-view",{staticClass:"date",staticStyle:{"text-align":"right"}},[t._v(t._s(t._f("formatDate")(e.createtime)))])],1):t._e(),2==e.belong?i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar radius",style:{backgroundImage:"url("+t.content["avatar"]+")"}}),i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{staticClass:"content shadow"},[i("v-uni-text",{staticStyle:{"font-size":"3.5vw"}},[t._v(t._s(e.content))])],1)],1),i("v-uni-view",{staticClass:"date",staticStyle:{"text-align":"left"}},[t._v(t._s(t._f("formatDate")(e.createtime)))])],1):t._e()],1)}))],2)],1),i("v-uni-view",{staticClass:"cu-bar foot input",staticStyle:{"background-color":"#eee"}},[i("v-uni-input",{staticClass:"solid-bottom",staticStyle:{"background-color":"#fff","text-align":"left","text-indent":"2vw"},attrs:{"adjust-position":!1,focus:!1,maxlength:"300","cursor-spacing":"10"},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.InputFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.InputBlur.apply(void 0,arguments)}},model:{value:t.chat,callback:function(e){t.chat=e},expression:"chat"}}),i("v-uni-button",{staticClass:"cu-btn bg-green shadow",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getchat.apply(void 0,arguments)}}},[t._v("发送")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal poptips",class:"Modalios"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("十分抱歉，由于相关规范，小程序暂不支持查看信息。")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal poplogin",class:"login"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[t._v("请登录后操作！")]),i("v-uni-view",{staticClass:"loginbtn"},[i("v-uni-button",{staticClass:"close",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("关闭")]),i("v-uni-button",{staticClass:"login",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.wechatLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)],1)],1):t._e()},s=[]},3174:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px",background:t.background}},[1!=t.barid?i("span",{staticClass:"clearfix"},[t.within?i("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):i("span",[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):i("span",{staticClass:"title"},[t._v("红人速推")])])]):i("span",[t.within?i("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):i("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},s=[]},3327:function(t,e,i){"use strict";i.r(e);var a=i("63d5"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},3734:function(t,e,i){"use strict";i.r(e);var a=i("3174"),n=i("75eb");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("3804");var o,c=i("f0c5"),l=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"07edaae6",null,!1,a["a"],o);e["default"]=l.exports},3804:function(t,e,i){"use strict";var a=i("1cb0"),n=i.n(a);n.a},"627e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.cu-bar[data-v-07edaae6]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-07edaae6]{margin-left:3vw;height:30px;display:block}.cuIcon-back[data-v-07edaae6]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-07edaae6]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-07edaae6]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-07edaae6]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-07edaae6]{width:auto}.cuIcon-close[data-v-07edaae6]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=e},"63d5":function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,s=a(i("3734")),o={components:{uniTopBar:s.default},data:function(){return{modalName:null,tabCurrentIndex:0,see:!0,content:"",yxhz:"",todata:"",toptitle:"红人详情",userInfo:[],cewebrityid:"",cewebrityuid:"",realmid:"",codetime:2e3,tip:!1,message:"",messagelist:"",height:"",url:"https://www.hongrensutui.com/uploads/fshx/",bottombtn:!0,showpage:!1,config:"",background:"transparent",chatlist:"",chat:"",cacheheight:0,setheight:200,contentViewHeight:300,tolast:"",scrollTop:0,old:{scrollTop:0},judge:"",num:"",backstage:!1}},filters:{formatDate:function(t){var e=new Date(1e3*t),i=(e.getFullYear(),e.getMonth()+1);i=i<10?"0"+i:i;var a=e.getDate();a=a<10?"0"+a:a;var n=e.getHours();n=n<10?"0"+n:n;var s=e.getMinutes();s=s<10?"0"+s:s;var o=e.getSeconds();return o=o<10?"0"+o:o,i+"-"+a+" "+n+":"+s+":"+o},numFilter:function(t){var e,i=t.length-1;return i<=2?e=t[0]+"**":3==i?e=t[0]+"***":4==i?e=t[0]+"****":i>=5&&(e=t[0]+"*****"),e}},onLoad:function(t){n=this,n.height=this.StatusBar,uni.getSystemInfo({success:function(t){n.contentViewHeight=t.windowHeight-100}}),t.id&&(n.cewebrityid=t.id),t.judge&&(n.judge=t.judge),t.realmid&&(n.realmid=t.realmid),n.timerInt=setInterval((function(){if(n.codetime--,n.message=n.messagelist[n.getRandomArbitrary(0,50)],n.message.celebrity=n.message.celebrity[0]+n.message.celebrity[1]+"***",n.message.merchant=n.message.merchant[0]+n.message.merchant[1]+"***",n.tip=!n.tip,0==n.codetime)return clearInterval(n.timerInt),void(n.codetime=2e3)}),4e3),t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code&&uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:t.code,invite:uni.getStorageSync("invite"),platform:1},method:"POST",success:function(t){uni.removeStorageSync("invite"),n.loginhandle(t.data.data.info)}}),uni.getStorage({key:"userInfo",success:function(t){n.updateuser(t.data.id)},fail:function(t){wxlogin()}}),this.pagecewebritydetails()},onHide:function(){this.backstage=!0},onShow:function(){this.backstage&&(uni.getStorage({key:"userInfo",success:function(t){n.updateuser(t.data.id)}}),this.pagecewebritydetails())},methods:{updateuser:function(t){uni.request({url:"https://www.hongrensutui.com/api/api/userinfo",data:{id:t},method:"POST",success:function(t){t.data.data.info?n.loginhandle(t.data.data.info):wxlogin()}})},loginhandle:function(t){uni.setStorageSync("userInfo",t),n.userInfo=t,uni.request({url:"https://www.hongrensutui.com/api/api/getchatlist",data:{cewebrityid:n.cewebrityid,mid:n.userInfo.id,type:2,judge:1},method:"POST",success:function(t){200==t.data.data.code&&(0!=t.data.data.num?n.num=t.data.data.num:n.num="")}})},pagecewebritydetails:function(){uni.request({url:"https://www.hongrensutui.com/api/api/pagecewebritydetails",data:{id:this.cewebrityid,userid:n.userInfo.id?n.userInfo.id:"",realmid:this.realmid},method:"POST",success:function(t){n.config=t.data.data.config,n.messagelist=t.data.data.message,n.message=n.messagelist[n.getRandomArbitrary(0,50)],n.message.celebrity=n.message.celebrity[0]+n.message.celebrity[1]+"***",n.message.merchant=n.message.merchant[0]+n.message.merchant[1]+"***",n.tip=!n.tip,n.content=t.data.data.onecewebrity,n.share(n.content),n.cewebrityuid=n.content.id,n.content.livebroadcast&&(n.showpage=!0,1==n.judge&&n.showdocking())}})},getRandomArbitrary:function(t,e){return Math.floor(Math.random()*(e-t)+t)},member:function(){uni.navigateTo({url:"/pages/member/member?cewebrityid="+n.cewebrityid})},atte:function(){uni.navigateTo({url:"/pages/user/atte?choice=2"})},navToDetailPage:function(t,e){e&&(t=t+"?id="+e),uni.navigateTo({url:"/pages/"+t})},InputFocus:function(t){setTimeout((function(){uni.getSystemInfo({success:function(t){n.cacheheight=n.contentViewHeight,n.contentViewHeight=t.windowHeight-100}})}),500),this.InputBottom=t.detail.height},InputBlur:function(t){this.contentViewHeight=this.cacheheight,this.InputBottom=0},showdocking:function(t){if(n.userInfo.id)if(n.userInfo.card_id>0)n.modalName="docking",n.getchatlist(n.cewebrityid,n.userInfo.id);else{if(1!=n.userInfo.type)return n.modalName="Modalfsj",!1;if(2!=n.userInfo.examine)return uni.showToast({title:"成功入驻的商家才可以私信主播",icon:"none",duration:3e3}),!1;uni.request({url:"https://www.hongrensutui.com/api/api/dockingnumber",data:{cewebrityid:n.cewebrityid,userid:n.userInfo.id},method:"POST",success:function(t){200==t.data.data.code?(n.modalName="docking",n.getchatlist(n.cewebrityid,n.userInfo.id)):n.modalName="Modalwhdj"}})}else n.modalName="login"},hidedocking:function(t){this.modalName=""},getchatlist:function(t,e){uni.request({url:"https://www.hongrensutui.com/api/api/getchatlist",data:{cewebrityid:t,mid:e,type:2,judge:2},method:"POST",success:function(t){200==t.data.data.code&&(n.chatlist=t.data.data.data,setTimeout((function(){n.tolast="item"+(n.chatlist.length-2)}),200))}})},getchat:function(){if(n.userInfo.id){if(""==n.chat)return uni.showToast({title:"请输入聊天内容",icon:"none",duration:3e3}),!1;uni.showToast({title:"消息发送成功",icon:"none",duration:3e3}),uni.request({url:"https://www.hongrensutui.com/api/api/getchat",data:{cewebrityid:n.cewebrityid,mid:n.userInfo.id,type:2,chat:n.chat},method:"POST",success:function(t){n.chat="",n.chatlist=t.data.data.data}})}else n.modalName="login"},collect:function(t){n.userInfo.id?t.show?(uni.showToast({title:"已取消关注",icon:"none",duration:2e3}),n.collectClick(t)):(uni.showToast({title:"已添加关注",icon:"none",duration:2e3}),n.collectClick(t)):n.modalName="login"},collectClick:function(t){uni.request({url:"https://www.hongrensutui.com/api/api/collect",data:{id:n.userInfo.id,collectid:t.id},method:"POST",success:function(e){t.show=!t.show}})},openmember:function(){n.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Pay/order",data:{openid:n.userInfo.openid,id:n.cewebrityuid},method:"POST",success:function(t){var e="/pages/celebrity/details?id="+n.cewebrityid;callpay(JSON.parse(t.data.data.parameters),t.data.data.info,e)}}):n.modalName="login"},wxopenmember:function(){n.userInfo.id?uni.request({url:"https://www.hongrensutui.com/api/Order/order",data:{openid:n.userInfo.xopenid,id:n.cewebrityuid},method:"POST",success:function(t){var e=t.data.data.orderid;uni.requestPayment({provider:"wxpay",timeStamp:t.data.data.wechat.payinfo.timeStamp,nonceStr:t.data.data.wechat.payinfo.nonceStr,package:t.data.data.wechat.payinfo.package,signType:t.data.data.wechat.payinfo.signType,paySign:t.data.data.wechat.payinfo.paySign,success:function(t){uni.request({url:"https://www.hongrensutui.com/api/Order/complete_order",data:{openid:n.userInfo.xopenid,id:e},method:"POST",success:function(t){uni.redirectTo({url:"/pages/celebrity/details?id="+n.cewebrityid})}})}})}}):n.modalName="login"},tabClick:function(t){this.tabCurrentIndex=t,this.bottombtn=!0},showModal:function(t){if(n.userInfo)if("Modal"==t.currentTarget.dataset.target)switch(uni.getSystemInfoSync().platform){case"android":n.modalName=t.currentTarget.dataset.target;break;case"ios":n.modalName=t.currentTarget.dataset.target;break;default:n.modalName=t.currentTarget.dataset.target;break}else this.modalName=t.currentTarget.dataset.target;else n.modalName="login"},hideModal:function(t){this.modalName=null},copy:function(t){uni.setClipboardData({data:t,success:function(){uni.showToast({title:"复制微信号成功！",icon:"none",duration:2e3})}})},onCopyResult:function(t){"success"===t?uni.showToast({title:"复制微信号成功！",icon:"none",duration:2e3}):uni.showToast({title:"复制微信号失败！",icon:"none",duration:2e3})},nicknameFilter:function(t){var e,i=t.length-1;return i<=2?e=t[0]+"**":3==i?e=t[0]+"***":4==i?e=t[0]+"****":i>=5&&(e=t[0]+"*****"),e},share:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t="我是"+this.nicknameFilter(n.content.nickname)+"，我在红人速推帮商家直播带货",e="已有99+个商家联系我纯佣金带货，如果你是商家，就上红人速推找我",i=n.content.avatar;share(t,e,i,n.userInfo.id)})),wechatLogin:function(t){wxlogin()},getUserInfo:function(t){uni.login({provider:"weixin",success:function(e){uni.request({url:"https://www.hongrensutui.com/api/api/user",data:{code:e.code,platform:2,userInfo:t.detail.userInfo},method:"POST",success:function(t){n.loginhandle(t.data.data.info),uni.showToast({title:"登录成功！",icon:"none",duration:2e3})}})}})},upper:function(e){t("log",e," at pages/celebrity/details.vue:927")},lower:function(e){t("log",e," at pages/celebrity/details.vue:932")},scroll:function(e){t("log",e," at pages/celebrity/details.vue:937"),this.old.scrollTop=e.detail.scrollTop}}};e.default=o}).call(this,i("0de9")["log"])},6427:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".cu-chat .cu-item .date[data-v-43fcbdbd]{bottom:0}.cu-chat .cu-item[data-v-43fcbdbd]{padding:15px 15px 20px}",""]),t.exports=e},"75eb":function(t,e,i){"use strict";i.r(e);var a=i("05ef"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},8121:function(t,e,i){var a=i("6427");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("63a4ba6f",a,!0,{sourceMap:!1,shadowMode:!1})},d250:function(t,e,i){"use strict";var a=i("8121"),n=i.n(a);n.a},f469:function(t,e,i){"use strict";i.r(e);var a=i("314a"),n=i("3327");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("d250");var o,c=i("f0c5"),l=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"43fcbdbd",null,!1,a["a"],o);e["default"]=l.exports}}]);