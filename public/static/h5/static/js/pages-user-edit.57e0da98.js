(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-edit"],{"0f5e":function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{modalName:"",loginbtn:"立即登录",height:"",img:!1,left:"",logo_right:""}},mounted:function(){this.height=this.StatusBar,1==this.barid?(this.left="3vw",this.logo_right="27vw"):(this.left="11vw",this.logo_right="32vw"),this.img=!0},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=i},"340d":function(t,a,e){"use strict";var i,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("uni-top-bar"),e("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[e("v-uni-view",{staticClass:"platform_list clearfix"},[e("v-uni-view",{staticClass:"list clearfix"},[e("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[e("v-uni-view",{staticClass:"action"},[t._v("修改头像")]),e("v-uni-view",{staticClass:"action"},[t._v(t._s(t.imgList.length)+"/1")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[t._l(t.imgList,(function(a,i){return e("v-uni-view",{key:i,staticClass:"bg-img",attrs:{"data-url":t.imgList[i]},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.ViewImage.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:t.imgList[i],mode:"aspectFill"}}),e("v-uni-view",{staticClass:"cu-tag bg-red",attrs:{"data-index":i},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.DelImg.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)})),t.imgList.length<1?e("v-uni-view",{staticClass:"solids",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.ChooseImage.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):t._e()],2)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("昵称")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入企业官网"},model:{value:t.addressData.homepage,callback:function(a){t.$set(t.addressData,"homepage",a)},expression:"addressData.homepage"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("店铺链接")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入店铺链接"},model:{value:t.addressData.shop_link,callback:function(a){t.$set(t.addressData,"shop_link",a)},expression:"addressData.shop_link"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("联系人")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入联系人"},model:{value:t.addressData.contact,callback:function(a){t.$set(t.addressData,"contact",a)},expression:"addressData.contact"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("联系电话")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入联系电话"},model:{value:t.addressData.mobile,callback:function(a){t.$set(t.addressData,"mobile",a)},expression:"addressData.mobile"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("微信号")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入微信号"},model:{value:t.addressData.wechat_work,callback:function(a){t.$set(t.addressData,"wechat_work",a)},expression:"addressData.wechat_work"}})],1),e("v-uni-view",{staticClass:"cu-modal bottom-modal",class:"categoryModal"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("取消")]),e("v-uni-view",{staticClass:"action text-green",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("确定")])],1),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},t._l(t.checkbox,(function(a,i){return e("v-uni-view",{key:i,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"cu-btn orange lg block",class:a.checked?"bg-orange":"line-orange",attrs:{"data-value":a.value},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.ChooseCheckbox.apply(void 0,arguments)}}},[t._v(t._s(a.name)),a.hot?e("v-uni-view",{staticClass:"cu-tag sm round",class:a.checked?"bg-white text-orange":"bg-orange"},[t._v("HOT")]):t._e()],1)],1)})),1)],1)],1),e("v-uni-view",{staticClass:"cu-modal bottom-modal",class:"platformModal"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("取消")]),e("v-uni-view",{staticClass:"action text-green",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("确定")])],1),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},t._l(t.checkbox,(function(a,i){return e("v-uni-view",{key:i,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"cu-btn orange lg block",class:a.checked?"bg-orange":"line-orange",attrs:{"data-value":a.value},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.ChooseCheckbox.apply(void 0,arguments)}}},[t._v(t._s(a.name)),a.hot?e("v-uni-view",{staticClass:"cu-tag sm round",class:a.checked?"bg-white text-orange":"bg-orange"},[t._v("HOT")]):t._e()],1)],1)})),1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"padding-xl"},[e("v-uni-button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.confirm.apply(void 0,arguments)}}},[t._v("入驻")])],1)],1)],1)},o=[];e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}))},"38d8":function(t,a,e){"use strict";e.r(a);var i=e("340d"),n=e("7eba");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("5683");var s,c=e("f0c5"),l=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"d17dc764",null,!1,i["a"],s);a["default"]=l.exports},5683:function(t,a,e){"use strict";var i=e("b4b1"),n=e.n(i);n.a},"7eba":function(t,a,e){"use strict";e.r(a);var i=e("b36f"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"83cd":function(t,a,e){"use strict";var i,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[t.xueyuan?e("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[e("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:t.xueyuan}}),t.img?e("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e()]):t._e(),t.xueyuan?t._e():e("span",{staticStyle:{width:"100vw",height:"44px","vertical-align":"bottom"}},[1!=t.barid?e("span",[t.title?e("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v(t._s(t.title))]):e("span",{style:{marginLeft:t.left,color:"#fff",fontSize:"4vw",lineHeight:"45px"}},[t._v("红人速推")])]):t._e(),t.img&&1==t.barid?e("img",{staticClass:"logo_left",style:{top:t.height+7+"px",left:t.left},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png"}}):t._e(),t.img&&1==t.barid?e("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right.png"}}):t._e(),t.img&&1!=t.barid?e("img",{staticClass:"logo_right",style:{top:t.height+2+"px",left:t.logo_right},attrs:{src:"https://www.hongrensutui.com/h5/img/logo_right2.png"}}):t._e()])])},o=[];e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}))},"9b8e":function(t,a,e){"use strict";e.r(a);var i=e("0f5e"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},aa9f:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.auth[data-v-9df7cb58]{width:80vw;height:80vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-9df7cb58]{color:#333;font-size:5vw;line-height:12vw;border-bottom:1px solid #efefef}.auth .logo[data-v-9df7cb58]{width:18vw;height:18vw;margin:6vw auto}.auth .logo img[data-v-9df7cb58]{width:100%;height:100%;border-radius:1.5vw}.auth .tip1[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#333;font-size:4.5vw;line-height:8vw}.auth .tip2[data-v-9df7cb58]{padding:0 5vw;text-align:left;color:#999;font-size:4vw;line-height:8vw}.auth uni-button[data-v-9df7cb58]{position:static;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:initial;font-size:4.5vw;text-align:center;text-decoration:none;line-height:%?80?%;border-radius:0;-webkit-tap-highlight-color:transparent;overflow:visible;color:#fff;background-color:#08c406;border-radius:1.5vw;margin:3vw ;margin-top:5vw}.cu-modal[data-v-9df7cb58]{height:100vh;z-index:300}.cu-bar[data-v-9df7cb58]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-9df7cb58]{position:absolute;\r\n\r\n\r\nleft:3vw;\r\nwidth:90px;height:30px}.cu-bar .logo_right[data-v-9df7cb58]{position:absolute;left:27vw;width:60vw}.cuIcon-back[data-v-9df7cb58]{color:#fff;font-size:6vw;height:44px;width:44px;line-height:44px;text-align:center}.cu-dialog[data-v-9df7cb58]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-9df7cb58]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-9df7cb58]{width:auto}.cuIcon-close[data-v-9df7cb58]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=a},b17d:function(t,a,e){var i=e("aa9f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("2d0d384a",i,!0,{sourceMap:!1,shadowMode:!1})},b36f:function(t,a,e){"use strict";(function(t){var i=e("ee27");e("99af"),e("a434"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("e3d7")),o={components:{uniTopBar:n.default},data:function(){return{modalName:null,checkbox:[{value:0,name:"10元",checked:!1,hot:!1},{value:1,name:"20元",checked:!0,hot:!1},{value:2,name:"30元",checked:!0,hot:!0},{value:3,name:"60元",checked:!1,hot:!0},{value:4,name:"80元",checked:!1,hot:!1},{value:5,name:"100元",checked:!1,hot:!1}],addressData:{company:"",title:"",logo:"",license:"",category:"",platform:"",homepage:"",shop_link:"",contact:"",mobile:"",wechat_work:""},imgList:[],height:""}},onLoad:function(t){this.height=this.StatusBar,uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data||wxlogin()},fail:function(){wxlogin()}})},methods:{confirm:function(){var a=this.addressData;t("log",JSON.stringify(a)," at pages/user/edit.vue:175")},ChooseImage:function(){var t=this;uni.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(a){0!=t.imgList.length?t.imgList=t.imgList.concat(a.tempFilePaths):t.imgList=a.tempFilePaths}})},ViewImage:function(t){uni.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},DelImg:function(t){var a=this;uni.showModal({title:"",content:"确定要删除图片么？",cancelText:"取消",confirmText:"确认",success:function(e){e.confirm&&a.imgList.splice(t.currentTarget.dataset.index,1)}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},ChooseCheckbox:function(t){for(var a=this.checkbox,e=t.currentTarget.dataset.value,i=0,n=a.length;i<n;++i)if(a[i].value==e){a[i].checked=!a[i].checked;break}}}};a.default=o}).call(this,e("0de9")["log"])},b4b1:function(t,a,e){var i=e("c6f2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("407e9504",i,!0,{sourceMap:!1,shadowMode:!1})},c4f3:function(t,a,e){"use strict";var i=e("b17d"),n=e.n(i);n.a},c6f2:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".hongren[data-v-d17dc764]{bottom:0}.cu-form-group .title[data-v-d17dc764]{width:20vw}",""]),t.exports=a},e3d7:function(t,a,e){"use strict";e.r(a);var i=e("83cd"),n=e("9b8e");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("c4f3");var s,c=e("f0c5"),l=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"9df7cb58",null,!1,i["a"],s);a["default"]=l.exports}}]);