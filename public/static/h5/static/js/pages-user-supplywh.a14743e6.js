(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-supplywh"],{"378d":function(t,a,e){"use strict";var i=e("f39f"),n=e.n(i);n.a},4653:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".rztitle[data-v-b0260a48]{position:fixed;left:0;right:0;font-size:4.5vw;font-weight:700;background-color:#fff;height:44px;line-height:44px;text-indent:3vw}.cu-bar[data-v-b0260a48]{position:static}.hongren[data-v-b0260a48]{bottom:0}.platform_list[data-v-b0260a48]{margin:3vw;background-color:#fff;border-radius:2vw}.platform_list .list[data-v-b0260a48]{overflow:hidden;border-radius:2vw;box-shadow:1px 1px 2px rgba(26,26,26,.1)}.cu-form-group[data-v-b0260a48]{margin:.5px 15px;padding:0}.cu-form-group .title[data-v-b0260a48]{width:24vw}.cor-e8.text-lg[data-v-b0260a48]{position:relative;left:-1vw;top:1vw}.cu-btn.lg[data-v-b0260a48]{padding:0 3vw}.nothave[data-v-b0260a48]{font-size:3.5vw;padding-bottom:3vw;color:#999}.op-0[data-v-b0260a48]{opacity:0}.bg-img[data-v-b0260a48]:first-child{margin:1vw 3vw}.bg-img[data-v-b0260a48]{margin-right:1vw 3vw 1vw 0;box-shadow:1px 1px 2px rgba(26,26,26,.1)}.cu-btn.img[data-v-b0260a48]{height:24px;font-size:12px;background-color:#e71d36;color:#fff;padding:0 2vw}.text-orange[data-v-b0260a48], .line-orange[data-v-b0260a48], .lines-orange[data-v-b0260a48]{color:#999}.bg-orange[data-v-b0260a48]{background-color:#e71d36;color:#fff;border-radius:2px}.confirm[data-v-b0260a48]{background-color:#e71d36}.coent[data-v-b0260a48]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.cu-form-group uni-picker[data-v-b0260a48]::after{display:none}.cu-form-group uni-picker[data-v-b0260a48]{-webkit-box-flex:0;-webkit-flex:none;flex:none;border-radius:5px}",""]),t.exports=a},4674:function(t,a,e){"use strict";e.r(a);var i=e("7137"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},"5ad0":function(t,a,e){"use strict";e.r(a);var i=e("8a0d"),n=e("4674");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("378d");var o,r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"e4d1a924",null,!1,i["a"],o);a["default"]=c.exports},7137:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:{type:String},xueyuan:{type:String}},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=i},"8a0d":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?e("span",{staticClass:"clearfix"},[t.title?e("span",{staticClass:"title"},[t._v(t._s(t.title))]):e("span",{staticClass:"title"},[t._v("红人速推")])]):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])},s=[]},"8df4":function(t,a,e){"use strict";var i=e("ee71"),n=e.n(i);n.a},a05a:function(t,a,e){"use strict";e.r(a);var i=e("cd44"),n=e("a4eb");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("8df4");var o,r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"b0260a48",null,!1,i["a"],o);a["default"]=c.exports},a4eb:function(t,a,e){"use strict";e.r(a);var i=e("fe07"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},cd44:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("uni-top-bar"),e("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[e("v-uni-view",{staticClass:"platform_list clearfix"},[e("v-uni-view",{staticClass:"list clearfix"},[e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("标题")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入标题"},model:{value:t.addressData.title,callback:function(a){t.$set(t.addressData,"title",a)},expression:"addressData.title"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("产品品牌")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入产品品牌"},model:{value:t.addressData.brand,callback:function(a){t.$set(t.addressData,"brand",a)},expression:"addressData.brand"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg op-0"},[t._v("*")]),t._v("平台要求")]),e("v-uni-view",{staticClass:"coent"},[t._v(t._s(t.addressData.platform))]),e("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"platformModal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModal.apply(void 0,arguments)}}},[t._v("选择平台")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("红人领域")]),e("v-uni-view",{staticClass:"coent"},[t._v(t._s(t.addressData.category))]),e("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"categoryModal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModal.apply(void 0,arguments)}}},[t._v("选择领域")])],1),e("v-uni-view",{staticClass:"cu-form-group align-start"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg op-0"},[t._v("*")]),t._v("产品详情")]),e("v-uni-textarea",{attrs:{placeholder:"多行文本输入框"},model:{value:t.addressData.details,callback:function(a){t.$set(t.addressData,"details",a)},expression:"addressData.details"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("联系人")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入联系人"},model:{value:t.addressData.contact,callback:function(a){t.$set(t.addressData,"contact",a)},expression:"addressData.contact"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("联系电话")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入联系电话"},model:{value:t.addressData.mobile,callback:function(a){t.$set(t.addressData,"mobile",a)},expression:"addressData.mobile"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("微信号码")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入微信号"},model:{value:t.addressData.wechat_work,callback:function(a){t.$set(t.addressData,"wechat_work",a)},expression:"addressData.wechat_work"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("截止日期")]),e("v-uni-input",{attrs:{type:"text",disabled:"disabled",placeholder:"请输入开始时间"},model:{value:t.addressData.endtime,callback:function(a){t.$set(t.addressData,"endtime",a)},expression:"addressData.endtime"}}),e("v-uni-picker",{staticClass:"img cu-btn shadow",attrs:{mode:"date",value:t.addressData.endtime,start:"2015-09-01",end:"2020-09-01"},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.endtime.apply(void 0,arguments)}}},[t._v("选择时间")])],1),e("v-uni-view",{staticClass:"cu-modal top-modal",class:"categoryModal"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chkcategory.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue"}),e("v-uni-view",{staticClass:"action text-green",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chkcategory.apply(void 0,arguments)}}},[t._v("确定")])],1),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},t._l(t.category,(function(a,i){return e("v-uni-view",{key:i,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"cu-btn orange block",class:a.checked?"bg-orange":"line-orange",attrs:{"data-value":a.name},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChooseCheckbox(a)}}},[t._v(t._s(a.name))])],1)})),1),e("v-uni-view",{staticClass:"nothave"},[t._v("没有找到？联系客服添加分类")])],1)],1),e("v-uni-view",{staticClass:"cu-modal top-modal",class:"platformModal"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chkplatform.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue"}),e("v-uni-view",{staticClass:"action text-green",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chkplatform.apply(void 0,arguments)}}},[t._v("确定")])],1),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},t._l(t.platform,(function(a,i){return e("v-uni-view",{key:i,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"cu-btn orange block",class:a.checked?"bg-orange":"line-orange",attrs:{"data-value":a.name},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChooseCheckbox(a)}}},[t._v(t._s(a.name))])],1)})),1),e("v-uni-view",{staticClass:"nothave"},[t._v("没有找到？联系客服添加分类")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"padding-xl"},[e("v-uni-button",{staticClass:"cu-btn confirm block bg-blue margin-tb-sm lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.confirm.apply(void 0,arguments)}}},[t._v(t._s(t.confirmbtn))])],1)],1)],1)},s=[]},ee32:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.cu-bar[data-v-e4d1a924]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-e4d1a924]{margin-left:3vw;height:30px}.cuIcon-back[data-v-e4d1a924]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-e4d1a924]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-e4d1a924]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-e4d1a924]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-e4d1a924]{width:auto}.cuIcon-close[data-v-e4d1a924]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}',""]),t.exports=a},ee71:function(t,a,e){var i=e("4653");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("3290cb00",i,!0,{sourceMap:!1,shadowMode:!1})},f39f:function(t,a,e){var i=e("ee32");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("7be1ffd1",i,!0,{sourceMap:!1,shadowMode:!1})},fe07:function(t,a,e){"use strict";var i=e("4ea4");e("4160"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("5ad0")),s={components:{uniTopBar:n.default},filters:{formatDate:function(t){var a=new Date(1e3*t),e=a.getFullYear(),i=a.getMonth()+1;i=i<10?"0"+i:i;var n=a.getDate();n=n<10?"0"+n:n;var s=a.getHours();s=s<10?"0"+s:s;var o=a.getMinutes();o=o<10?"0"+o:o;var r=a.getSeconds();return r=r<10?"0"+r:r,e+"-"+i+"-"+n}},data:function(){return{modalName:null,confirmbtn:"发布",taobaourl:!1,jingdongurl:!1,pinduoduourl:!1,kuaishouurl:!1,addressData:{id:"",mid:"",title:"",brand:"",category:"",platform:"",details:"",endtime:"",fans:"",contact:"",mobile:"",wechat_work:"",type:1},category:"",platform:"",userInfo:"",height:""}},onLoad:function(t){var a=this;a.height=this.StatusBar,uni.getStorage({key:"userInfo",success:function(e){a.userInfo=e.data,a.addressData.mid=a.userInfo.id,t.id&&(a.attesj(t.id),a.addressData.id=t.id,a.confirmbtn="修改")}}),a.servertime(),a.merchantcategory(),a.merchantplatform()},methods:{confirm:function(){return this.addressData.title?this.addressData.images?this.addressData.category?this.addressData.totalprice?this.addressData.number?void uni.request({url:"https://www.hongrensutui.com/api/index/goodsadd",data:this.addressData,method:"post",header:{"Content-Type":"application/x-www-form-urlencoded"},dataType:"json",success:function(t){uni.showToast({icon:"none",title:t.data.data.info}),setTimeout((function(){uni.navigateBack({delta:1})}),2e3)},fail:function(t){uni.showToast({icon:"none",title:"添加失败！"}),this.btn=!1}}):(uni.showToast({title:"商品数量不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商品价格不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商家分类不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商品图片不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商品名称不能为空",icon:"none",duration:3e3}),!1)},attesj:function(t){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/goodsedit",data:{id:t},method:"POST",success:function(t){var e=t.data.data.info;a.addressData.mid=e.mid,a.addressData.title=e.title,a.addressData.brand=e.brand,a.addressData.category=e.category,a.addressData.platform=e.platform,a.addressData.details=e.details,a.addressData.endtime=e.endtime,a.addressData.fans=e.fans,a.addressData.contact=e.contact,a.addressData.mobile=e.mobile,a.addressData.wechat_work=e.wechat_work,a.addressData.type=e.type}})},servertime:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/servertime",method:"POST",success:function(a){t.addressData.starttime=t.formatDate(a.data.data.time),t.addressData.endtime=t.formatDate(a.data.data.time)}})},formatDate:function(t){var a=new Date(1e3*t),e=a.getFullYear(),i=a.getMonth()+1;i=i<10?"0"+i:i;var n=a.getDate();n=n<10?"0"+n:n;var s=a.getHours();s=s<10?"0"+s:s;var o=a.getMinutes();o=o<10?"0"+o:o;var r=a.getSeconds();return r=r<10?"0"+r:r,e+"-"+i+"-"+n},merchantcategory:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/merchantcategory",method:"POST",success:function(a){t.category=a.data.data.list}})},merchantplatform:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/merchantplatform",method:"POST",success:function(a){t.platform=a.data.data.list}})},endtime:function(t){this.addressData.endtime=t.detail.value},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},chkplatform:function(t){var a=this,e=0,i=0;this.addressData.platform="",this.platform.forEach((function(t,a){1==t.checked&&e++})),this.platform.forEach((function(t,n){1==t.checked&&(i++,a.addressData.platform+=i!=e?t.name+",":t.name)})),this.modalName=null},chkcategory:function(t){var a=this,e=0,i=0;this.addressData.category="",this.category.forEach((function(t,a){1==t.checked&&e++})),this.category.forEach((function(t,n){1==t.checked&&(i++,a.addressData.category+=i!=e?t.name+",":t.name)})),this.modalName=null},ChooseCheckbox:function(t){t.checked=!t.checked}}};a.default=s}}]);