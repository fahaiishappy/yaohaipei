(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-publish"],{"215d":function(t,a,e){var i=e("a423");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("4f06").default;s("24b28a55",i,!0,{sourceMap:!1,shadowMode:!1})},6760:function(t,a,e){"use strict";var i=e("ee27");e("4160"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=i(e("9dcd")),n={components:{uniTopBar:s.default},filters:{formatDate:function(t){var a=new Date(1e3*t),e=a.getFullYear(),i=a.getMonth()+1;i=i<10?"0"+i:i;var s=a.getDate();s=s<10?"0"+s:s;var n=a.getHours();n=n<10?"0"+n:n;var o=a.getMinutes();o=o<10?"0"+o:o;var r=a.getSeconds();return r=r<10?"0"+r:r,e+"-"+i+"-"+s}},data:function(){return{modalName:null,confirmbtn:"发布",taobaourl:!1,jingdongurl:!1,pinduoduourl:!1,kuaishouurl:!1,addressData:{id:"",mid:"",title:"",totalprice:"",nowprice:"",images:"",number:"",category:"",platform:"",commission:"",starttime:"",endtime:""},category:"",platform:"",userInfo:"",height:""}},onLoad:function(t){var a=this;a.height=this.StatusBar,uni.getStorage({key:"userInfo",success:function(e){""!=e.data&&null!=e.data&&(a.userInfo=e.data,a.addressData.mid=a.userInfo.id,t.id&&(a.attesj(t.id),a.addressData.id=t.id,a.confirmbtn="修改"))}}),a.servertime(),a.merchantcategory(),a.merchantplatform()},methods:{confirm:function(){return this.addressData.title?this.addressData.images?this.addressData.category?this.addressData.totalprice?this.addressData.number?void uni.request({url:"https://www.hongrensutui.com/api/index/goodsadd",data:this.addressData,method:"post",header:{"Content-Type":"application/x-www-form-urlencoded"},dataType:"json",success:function(t){uni.showToast({icon:"none",title:t.data.data.info}),setTimeout((function(){uni.navigateBack({delta:1})}),2e3)},fail:function(t){uni.showToast({icon:"none",title:"添加失败！"}),this.btn=!1}}):(uni.showToast({title:"商品数量不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商品价格不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商家分类不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商品图片不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商品名称不能为空",icon:"none",duration:3e3}),!1)},attesj:function(t){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/goodsedit",data:{id:t},method:"POST",success:function(t){var e=t.data.data.info;a.addressData.mid=e.mid,a.addressData.title=e.title,a.addressData.totalprice=e.totalprice,a.addressData.nowprice=e.nowprice,a.addressData.images=e.images,a.addressData.number=e.number,a.addressData.category=e.category,a.addressData.platform=e.platform,a.addressData.commission=e.commission,a.addressData.starttime=e.starttime,a.addressData.endtime=e.endtime}})},servertime:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/servertime",method:"POST",success:function(a){t.addressData.starttime=t.formatDate(a.data.data.time),t.addressData.endtime=t.formatDate(a.data.data.time)}})},formatDate:function(t){var a=new Date(1e3*t),e=a.getFullYear(),i=a.getMonth()+1;i=i<10?"0"+i:i;var s=a.getDate();s=s<10?"0"+s:s;var n=a.getHours();n=n<10?"0"+n:n;var o=a.getMinutes();o=o<10?"0"+o:o;var r=a.getSeconds();return r=r<10?"0"+r:r,e+"-"+i+"-"+s},merchantcategory:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/merchantcategory",method:"POST",success:function(a){t.category=a.data.data.list}})},merchantplatform:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/merchantplatform",method:"POST",success:function(a){t.platform=a.data.data.list}})},imagesImage:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(a){var e=a.tempFilePaths;uni.uploadFile({url:"https://www.hongrensutui.com/api/upload/index",filePath:e[0],name:"image",success:function(a){var e=JSON.parse(a.data);t.addressData.images=e.data.url}})}})},DelImg:function(t){var a=this;uni.showModal({title:"",content:"确定要删除图片么？",cancelText:"取消",confirmText:"确认",success:function(t){t.confirm&&(a.addressData.images="")}})},starttime:function(t){this.addressData.starttime=t.detail.value},endtime:function(t){this.addressData.endtime=t.detail.value},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},chkplatform:function(t){var a=this,e=0,i=0;this.addressData.platform="",this.platform.forEach((function(t,a){1==t.checked&&e++})),this.platform.forEach((function(t,s){1==t.checked&&(i++,a.addressData.platform+=i!=e?t.name+",":t.name)})),this.modalName=null},chkcategory:function(t){var a=this,e=0,i=0;this.addressData.category="",this.category.forEach((function(t,a){1==t.checked&&e++})),this.category.forEach((function(t,s){1==t.checked&&(i++,a.addressData.category+=i!=e?t.name+",":t.name)})),this.modalName=null},ChooseCheckbox:function(t){t.checked=!t.checked}}};a.default=n},"8f1b":function(t,a,e){"use strict";var i=e("215d"),s=e.n(i);s.a},a423:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".rztitle[data-v-f44a7202]{position:fixed;left:0;right:0;font-size:4.5vw;font-weight:700;background-color:#fff;height:44px;line-height:44px;text-indent:3vw}.cu-bar[data-v-f44a7202]{position:static}.hongren[data-v-f44a7202]{bottom:0}.platform_list[data-v-f44a7202]{margin:3vw;background-color:#fff;border-radius:2vw}.platform_list .list[data-v-f44a7202]{overflow:hidden;border-radius:2vw;box-shadow:1px 1px 2px rgba(26,26,26,.1)}.cu-form-group[data-v-f44a7202]{margin:.5px 15px;padding:0}.cu-form-group .title[data-v-f44a7202]{width:24vw}.cor-e8.text-lg[data-v-f44a7202]{position:relative;left:-1vw;top:1vw}.cu-btn.lg[data-v-f44a7202]{padding:0 3vw}.nothave[data-v-f44a7202]{font-size:3.5vw;padding-bottom:3vw;color:#999}.op-0[data-v-f44a7202]{opacity:0}.bg-img[data-v-f44a7202]:first-child{margin:1vw 3vw}.bg-img[data-v-f44a7202]{margin-right:1vw 3vw 1vw 0;box-shadow:1px 1px 2px rgba(26,26,26,.1)}.cu-btn.img[data-v-f44a7202]{height:24px;font-size:12px;background-color:#e71d36;color:#fff;padding:0 2vw}.text-orange[data-v-f44a7202], .line-orange[data-v-f44a7202], .lines-orange[data-v-f44a7202]{color:#999}.bg-orange[data-v-f44a7202]{background-color:#e71d36;color:#fff;border-radius:2px}.confirm[data-v-f44a7202]{background-color:#e71d36}.coent[data-v-f44a7202]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.cu-form-group uni-picker[data-v-f44a7202]::after{display:none}.cu-form-group uni-picker[data-v-f44a7202]{-webkit-box-flex:0;-webkit-flex:none;flex:none;border-radius:5px}",""]),t.exports=a},b692:function(t,a,e){"use strict";var i,s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("uni-top-bar"),e("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[e("v-uni-view",{staticClass:"platform_list clearfix"},[e("v-uni-view",{staticClass:"list clearfix"},[e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("商品名称")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入商品名称"},model:{value:t.addressData.title,callback:function(a){t.$set(t.addressData,"title",a)},expression:"addressData.title"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("商品图片")]),e("v-uni-button",{staticClass:"img cu-btn shadow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.imagesImage.apply(void 0,arguments)}}},[t._v("上传图片")])],1),t.addressData.images?e("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[e("v-uni-view",{staticClass:"bg-img"},[e("v-uni-image",{attrs:{src:t.addressData.images,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"cu-tag bg-red",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.DelImg("images")}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1):t._e(),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("商品分类")]),e("v-uni-view",{staticClass:"coent"},[t._v(t._s(t.addressData.category))]),e("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"categoryModal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModal.apply(void 0,arguments)}}},[t._v("选择分类")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg op-0"},[t._v("*")]),t._v("线上平台")]),e("v-uni-view",{staticClass:"coent"},[t._v(t._s(t.addressData.platform))]),e("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"platformModal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModal.apply(void 0,arguments)}}},[t._v("选择平台")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("商品价格")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入商品价格"},model:{value:t.addressData.totalprice,callback:function(a){t.$set(t.addressData,"totalprice",a)},expression:"addressData.totalprice"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg op-0"},[t._v("*")]),t._v("劵后价")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入劵后价"},model:{value:t.addressData.nowprice,callback:function(a){t.$set(t.addressData,"nowprice",a)},expression:"addressData.nowprice"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("佣金比")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入佣金比"},model:{value:t.addressData.commission,callback:function(a){t.$set(t.addressData,"commission",a)},expression:"addressData.commission"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("商品数量")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入商品数量"},model:{value:t.addressData.number,callback:function(a){t.$set(t.addressData,"number",a)},expression:"addressData.number"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("开始时间")]),e("v-uni-input",{attrs:{type:"text",disabled:"disabled",placeholder:"请输入开始时间"},model:{value:t.addressData.starttime,callback:function(a){t.$set(t.addressData,"starttime",a)},expression:"addressData.starttime"}}),e("v-uni-picker",{staticClass:"img cu-btn shadow",attrs:{mode:"date",value:t.addressData.starttime,start:"2015-09-01",end:"2020-09-01"},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.starttime.apply(void 0,arguments)}}},[t._v("选择时间")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("结束时间")]),e("v-uni-input",{attrs:{type:"text",disabled:"disabled",placeholder:"请输入开始时间"},model:{value:t.addressData.endtime,callback:function(a){t.$set(t.addressData,"endtime",a)},expression:"addressData.endtime"}}),e("v-uni-picker",{staticClass:"img cu-btn shadow",attrs:{mode:"date",value:t.addressData.endtime,start:"2015-09-01",end:"2020-09-01"},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.endtime.apply(void 0,arguments)}}},[t._v("选择时间")])],1)],1)],1),e("v-uni-view",{staticClass:"padding-xl"},[e("v-uni-button",{staticClass:"cu-btn confirm block bg-blue margin-tb-sm lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.confirm.apply(void 0,arguments)}}},[t._v(t._s(t.confirmbtn))])],1)],1),e("v-uni-view",{staticClass:"cu-modal top-modal",class:"categoryModal"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chkcategory.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue"}),e("v-uni-view",{staticClass:"action text-green",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chkcategory.apply(void 0,arguments)}}},[t._v("确定")])],1),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},t._l(t.category,(function(a,i){return e("v-uni-view",{key:i,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"cu-btn orange block",class:a.checked?"bg-orange":"line-orange",attrs:{"data-value":a.name},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChooseCheckbox(a)}}},[t._v(t._s(a.name))])],1)})),1),e("v-uni-view",{staticClass:"nothave"},[t._v("没有找到？联系客服添加分类")])],1)],1),e("v-uni-view",{staticClass:"cu-modal top-modal",class:"platformModal"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chkplatform.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue"}),e("v-uni-view",{staticClass:"action text-green",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chkplatform.apply(void 0,arguments)}}},[t._v("确定")])],1),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},t._l(t.platform,(function(a,i){return e("v-uni-view",{key:i,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"cu-btn orange block",class:a.checked?"bg-orange":"line-orange",attrs:{"data-value":a.name},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChooseCheckbox(a)}}},[t._v(t._s(a.name))])],1)})),1),e("v-uni-view",{staticClass:"nothave"},[t._v("没有找到？联系客服添加分类")])],1)],1)],1)},n=[];e.d(a,"b",(function(){return s})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}))},bb22:function(t,a,e){"use strict";e.r(a);var i=e("b692"),s=e("c720");for(var n in s)"default"!==n&&function(t){e.d(a,t,(function(){return s[t]}))}(n);e("8f1b");var o,r=e("f0c5"),c=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"f44a7202",null,!1,i["a"],o);a["default"]=c.exports},c720:function(t,a,e){"use strict";e.r(a);var i=e("6760"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=s.a}}]);