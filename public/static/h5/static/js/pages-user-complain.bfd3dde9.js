(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-complain"],{"26dc":function(t,a,e){"use strict";e.r(a);var i=e("96c0"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"81c5":function(t,a,e){"use strict";var i,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("uni-top-bar"),e("v-uni-view",{staticClass:"rztitle",style:{top:t.height+43+"px"}},[t._v("我要投诉")]),e("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+44+"px"}},[e("v-uni-view",{staticClass:"platform_list clearfix"},[e("v-uni-view",{staticClass:"list clearfix"},[e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg op-0"},[t._v("*")]),t._v("相关图片")]),e("v-uni-button",{staticClass:"img cu-btn shadow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.licenseImage.apply(void 0,arguments)}}},[t._v("上传图片")])],1),t.addressData.img?e("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[e("v-uni-view",{staticClass:"bg-img"},[e("v-uni-image",{attrs:{src:t.addressData.img,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"cu-tag bg-red",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.DelImg()}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1):t._e(),e("v-uni-view",{staticClass:"cu-form-group align-start"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("投诉内容")]),e("v-uni-textarea",{attrs:{fixed:"true",placeholder:"请输入投诉内容"},model:{value:t.addressData.content,callback:function(a){t.$set(t.addressData,"content",a)},expression:"addressData.content"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("联系电话")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入联系电话"},model:{value:t.addressData.mobile,callback:function(a){t.$set(t.addressData,"mobile",a)},expression:"addressData.mobile"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("微信号码")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入微信号"},model:{value:t.addressData.wechat,callback:function(a){t.$set(t.addressData,"wechat",a)},expression:"addressData.wechat"}})],1)],1)],1),e("v-uni-view",{staticClass:"padding-xl"},[e("v-uni-button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg confirm",attrs:{disabled:t.btn},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.confirm.apply(void 0,arguments)}}},[t._v("我要投诉")])],1)],1)],1)},o=[];e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}))},"96c0":function(t,a,e){"use strict";var i=e("ee27");e("4d63"),e("ac1f"),e("25f0"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("e3d7")),o=i(e("0d06")),s={components:{uniTopBar:n.default,regionPicker:o.default},data:function(){return{btn:!1,modalName:null,height:"",addressData:{mid:"",img:"",content:"",mobile:"",wechat:""}}},onLoad:function(){var t=this;t.height=this.StatusBar,uni.getStorage({key:"userInfo",success:function(a){t.userInfo=a.data,t.addressData.mid=t.userInfo.id}})},methods:{confirm:function(){return this.addressData.content?this.addressData.mobile?this.checkMobile(this.addressData.mobile)?this.addressData.wechat?(this.btn=!0,void uni.request({url:"https://www.hongrensutui.com/api/index/complain",data:this.addressData,method:"post",header:{"Content-Type":"application/x-www-form-urlencoded"},dataType:"json",success:function(t){uni.showToast({icon:"none",title:t.data.data.info}),setTimeout((function(){uni.navigateBack({delta:2})}),2e3)},fail:function(t){uni.showToast({icon:"none",title:"投诉失败！"}),this.btn=!1}})):(uni.showToast({title:"微信号不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"联系电话格式不正确",icon:"none",duration:3e3}),!1):(uni.showToast({title:"联系电话不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"投诉内容不能为空",icon:"none",duration:3e3}),!1)},checkMobile:function(t){return RegExp(/^1[34578]\d{9}$/).test(t)},licenseImage:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(a){var e=a.tempFilePaths;uni.uploadFile({url:"https://www.hongrensutui.com/api/upload/index",filePath:e[0],name:"image",success:function(a){var e=JSON.parse(a.data);t.addressData.img=e.data.url}})}})},DelImg:function(){var t=this;uni.showModal({title:"",content:"确定要删除图片么？",cancelText:"取消",confirmText:"确认",success:function(a){a.confirm&&(t.addressData.img="")}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null}}};a.default=s},c888:function(t,a,e){"use strict";e.r(a);var i=e("81c5"),n=e("26dc");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("d07a");var s,c=e("f0c5"),d=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"4efc5dd6",null,!1,i["a"],s);a["default"]=d.exports},cca0:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".rztitle[data-v-4efc5dd6]{position:fixed;left:0;right:0;font-size:4.5vw;font-weight:700;background-color:#fff;height:44px;line-height:44px;text-indent:3vw}.cu-bar[data-v-4efc5dd6]{position:static}.hongren[data-v-4efc5dd6]{bottom:0}.platform_list[data-v-4efc5dd6]{margin:3vw;background-color:#fff;border-radius:2vw}.platform_list .list[data-v-4efc5dd6]{overflow:hidden;border-radius:2vw;box-shadow:1px 1px 2px rgba(26,26,26,.1)}.cu-form-group[data-v-4efc5dd6]{margin:.5px 15px;padding:0}.cu-form-group .title[data-v-4efc5dd6]{width:24vw}.cor-e8.text-lg[data-v-4efc5dd6]{position:relative;left:-1vw;top:1vw}.cu-btn.lg[data-v-4efc5dd6]{padding:0 3vw}.nothave[data-v-4efc5dd6]{font-size:3.5vw;padding-bottom:3vw;color:#999}.op-0[data-v-4efc5dd6]{opacity:0}.bg-img[data-v-4efc5dd6]:first-child{margin:1vw 3vw}.bg-img[data-v-4efc5dd6]{margin-right:1vw 3vw 1vw 0;box-shadow:1px 1px 2px rgba(26,26,26,.1)}.cu-btn.img[data-v-4efc5dd6]{height:24px;font-size:12px;background-color:#e71d36;color:#fff;padding:0 2vw;border-radius:5px}.text-orange[data-v-4efc5dd6], .line-orange[data-v-4efc5dd6], .lines-orange[data-v-4efc5dd6]{color:#999}.bg-orange[data-v-4efc5dd6]{background-color:#e71d36;color:#fff;border-radius:2px}.confirm[data-v-4efc5dd6]{background-color:#e71d36}.coent[data-v-4efc5dd6]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.cu-form-group uni-picker[data-v-4efc5dd6]::after{display:none}",""]),t.exports=a},cca64:function(t,a,e){var i=e("cca0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("d9e65db2",i,!0,{sourceMap:!1,shadowMode:!1})},d07a:function(t,a,e){"use strict";var i=e("cca64"),n=e.n(i);n.a}}]);