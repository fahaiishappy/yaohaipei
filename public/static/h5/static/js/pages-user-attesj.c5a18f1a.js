(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-attesj"],{"04bb":function(t,a,e){var i=e("471e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("4f06").default;s("6ba4f20c",i,!0,{sourceMap:!1,shadowMode:!1})},"0b96":function(t,a,e){"use strict";(function(t){var i=e("4ea4");e("4160"),e("b680"),e("acd8"),e("4d63"),e("ac1f"),e("25f0"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=i(e("3734")),n=i(e("d81dc")),o={components:{uniTopBar:s.default,regionPicker:n.default},data:function(){return{btn:!1,modalName:null,addressData:{company:"",title:"",logo:"",license:"",category:"",platform:"",province:"",detail:"",city:"",area:"",code:"",homepage:"",shop_link:"",contact:"",mobile:"",wechat_work:""},logoimg:"",realm:"",realmdata:"",platform:"",platformdata:"",userInfo:"",height:"",examine:"",remarks:"",loadSurvey:!0,btnname:"入驻",scheduletitle:"",scheduletip:"",percent:0,totalBytesSent:0,totalBytesExpectedToSend:0,textarea:!1,toptitle:"商家入驻",within:"https://www.hongrensutui.com/h5/img/ruzhu_logo_left.png"}},onLoad:function(){var t=this;t.height=this.StatusBar,uni.getStorage({key:"userInfo",success:function(a){t.userInfo=a.data,t.addressData.mid=t.userInfo.id,t.attesj()}})},methods:{confirm:function(){return this.addressData.company?this.addressData.license?this.addressData.title?this.addressData.logo?this.addressData.detail?this.addressData.province?this.addressData.category?this.addressData.contact?this.addressData.mobile?this.checkMobile(this.addressData.mobile)?this.addressData.wechat_work?(this.btn=!0,void uni.request({url:"https://www.hongrensutui.com/api/index/Merchantadd",data:this.addressData,method:"post",header:{"Content-Type":"application/x-www-form-urlencoded"},dataType:"json",success:function(t){uni.showToast({icon:"none",title:t.data.data.info}),setTimeout((function(){uni.navigateBack({delta:2})}),2e3)},fail:function(t){uni.showToast({icon:"none",title:"入驻失败！"}),this.btn=!1}})):(uni.showToast({title:"微信号不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"联系电话格式不正确",icon:"none",duration:3e3}),!1):(uni.showToast({title:"联系电话不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"联系人不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"所属分类不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商家地区不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商家简介不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商家logo不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"品牌名称不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"营业执照不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"企业名称不能为空",icon:"none",duration:3e3}),!1)},checkMobile:function(t){return RegExp(/^1[35789]\d{9}$/).test(t)},attesj:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/attesj",data:{id:t.userInfo.id},method:"POST",success:function(a){if(a.data.data.info){t.btnname="修改";var e=a.data.data.info;t.addressData.company=e.company,t.addressData.title=e.title,t.addressData.logo=e.logo,t.addressData.license=e.license,t.addressData.category=e.category,t.addressData.platform=e.platform,t.addressData.province=e.province,t.addressData.detail=e.detail,t.addressData.city=e.city,t.addressData.area=e.area,t.addressData.code=e.code,t.addressData.homepage=e.homepage,t.addressData.shop_link=e.shop_link,t.addressData.contact=e.contact,t.addressData.mobile=e.mobile,t.addressData.wechat_work=e.wechat_work,t.examine=e.examine,t.remarks=e.remarks,t.realmdata=e.realmdata,t.platformdata=e.platformdata,t.getRealm(e.category),t.merchantplatform(e.platform),t.loadSurvey=!1,t.$nextTick((function(){t.loadSurvey=!0}))}else t.getRealm(),t.merchantplatform()}})},getRealm:function(t){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/getRealm",data:{realm:t},method:"POST",success:function(t){a.realm=t.data.data.list}})},merchantplatform:function(t){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/merchantplatform",data:{platform:t},method:"POST",success:function(t){a.platform=t.data.data.list}})},numFilter:function(t){var a=parseFloat(t).toFixed(2);return a},logoImage:function(){var t=this;t.scheduletip="",t.percent=0,uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(a){var e=t.numFilter(a.tempFiles[0].size/1024/1024);if(e>2)return uni.showToast({title:"上传图片不可超过2M！当前图片"+e+"M",icon:"none",duration:3e3}),!1;var i=a.tempFilePaths,s=uni.uploadFile({url:"https://www.hongrensutui.com/api/upload/index",filePath:i[0],name:"image",success:function(a){var e=JSON.parse(a.data);t.addressData.logo=e.data.url}});s.onProgressUpdate((function(a){t.scheduletitle="logo上传",t.modalName="schedule",t.percent=a.progress,t.totalBytesSent=t.numFilter(a.totalBytesSent/1024/1024),t.totalBytesExpectedToSend=t.numFilter(a.totalBytesExpectedToSend/1024/1024),100==a.progress&&(t.scheduletip="图片上传完成")}))}})},licenseImage:function(){var t=this,a=this;a.scheduletip="",a.percent=0,uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){var i=a.numFilter(e.tempFiles[0].size/1024/1024);if(i>2)return uni.showToast({title:"上传图片不可超过2M！当前图片"+i+"M",icon:"none",duration:3e3}),!1;var s=e.tempFilePaths,n=uni.uploadFile({url:"https://www.hongrensutui.com/api/upload/index",filePath:s[0],name:"image",success:function(a){var e=JSON.parse(a.data);t.addressData.license=e.data.url}});n.onProgressUpdate((function(t){a.scheduletitle="营业执照上传",a.modalName="schedule",a.percent=t.progress,a.totalBytesSent=a.numFilter(t.totalBytesSent/1024/1024),a.totalBytesExpectedToSend=a.numFilter(t.totalBytesExpectedToSend/1024/1024),100==t.progress&&(a.scheduletip="图片上传完成")}))}})},DelImg:function(t){var a=this;uni.showModal({title:"",content:"确定要删除图片么？",cancelText:"取消",confirmText:"确认",success:function(e){e.confirm&&("logo"==t?a.addressData.logo="":"detailimg"==t?a.addressData.detailimg="":a.addressData.license="")}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target,(t.currentTarget.dataset.target="textarea")&&(this.textarea=!0)},hideModal:function(t){this.modalName=null,this.textarea=!1},chkplatform:function(t){var a=this,e=0,i=0;this.addressData.platform="",this.platformdata="",this.platform.forEach((function(t,a){1==t.checked&&e++})),this.platform.forEach((function(t,s){1==t.checked&&(i++,i!=e?(a.addressData.platform+=t.id+",",a.platformdata+=t.name+","):(a.addressData.platform+=t.id,a.platformdata+=t.name))})),this.modalName=null},chkrealm:function(t){var a=this,e=0,i=0;this.addressData.category="",this.realmdata="",this.realm.forEach((function(t,a){1==t.checked&&e++})),this.realm.forEach((function(t,s){1==t.checked&&(i++,i!=e?(a.addressData.category+=t.id+",",a.realmdata+=t.name+","):(a.addressData.category+=t.id,a.realmdata+=t.name))})),this.modalName=null},picker_change:function(t){var a=this;a.addressData.code=t.detail.code,a.addressData.province=t.detail.value[0],a.addressData.city=t.detail.value[1],a.addressData.area=t.detail.value[2]},ChooseCheckbox:function(t){t.checked=!t.checked},notyet:function(a){var e=this;"license"==a&&uni.showModal({title:"提示",content:"您可以选择暂无营业执照入驻，在审核期您随时补上营业执照即可，或者联系客服帮您上传。",success:function(a){a.confirm?e.addressData.license="https://www.hongrensutui.com/h5/img/notyet_license.png":a.cancel&&t("log","用户点击取消"," at pages/user/attesj.vue:637")}}),"logo"==a&&uni.showModal({title:"提示",content:"您可以选择暂无logo入驻，在审核期您随时补上logo即可，或者联系客服帮你定制logo。",success:function(a){a.confirm?e.addressData.logo="https://www.hongrensutui.com/h5/img/notyet_logo.png":a.cancel&&t("log","用户点击取消"," at pages/user/attesj.vue:650")}})},Chooserealm:function(t){if(1==t.checked)t.checked=!t.checked;else{var a=0;this.realm.forEach((function(t,e){1==t.checked&&a++})),a>=8?uni.showToast({title:"所选分类不能超过8个！",icon:"none",duration:2e3}):t.checked=!t.checked}}}};a.default=o}).call(this,e("0de9")["log"])},"3f7d":function(t,a,e){"use strict";e.d(a,"b",(function(){return s})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var i={regionPicker:e("d81dc").default},s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("uni-top-bar",{attrs:{title:t.toptitle,within:t.within}}),e("v-uni-view",{staticClass:"rztitle",style:{top:t.height+43+"px"}},[t._v("商家入驻"),e("span",{staticClass:"tip"},[t._v("（ 入驻成功可发布供求信息 ）")])]),e("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+44+"px"}},[3==t.examine&&t.remarks?e("v-uni-view",{staticClass:"remarks"},[t._v("未通过原因："+t._s(t.remarks))]):t._e(),e("v-uni-view",{staticClass:"platform_list clearfix"},[e("v-uni-view",{staticClass:"list clearfix"},[e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("企业名称")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入企业名称"},model:{value:t.addressData.company,callback:function(a){t.$set(t.addressData,"company",a)},expression:"addressData.company"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("营业执照")]),e("v-uni-view",[e("v-uni-button",{staticClass:"img cu-btn shadow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.licenseImage.apply(void 0,arguments)}}},[t._v("上传执照")])],1)],1),t.addressData.license?e("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[e("v-uni-view",{staticClass:"bg-img"},[e("v-uni-image",{attrs:{src:t.addressData.license,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"cu-tag bg-red",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.DelImg("license")}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1):t._e(),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("品牌名称")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入品牌名称"},model:{value:t.addressData.title,callback:function(a){t.$set(t.addressData,"title",a)},expression:"addressData.title"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("品牌logo")]),e("v-uni-view",[e("v-uni-button",{staticClass:"img cu-btn shadow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.logoImage.apply(void 0,arguments)}}},[t._v("上传logo")])],1)],1),t.addressData.logo?e("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[e("v-uni-view",{staticClass:"bg-img"},[e("v-uni-image",{attrs:{src:t.addressData.logo,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"cu-tag bg-red",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.DelImg("logo")}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1):t._e(),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("商家简介")]),e("v-uni-view",{staticClass:"coent"},[t._v(t._s(t.addressData.detail))]),e("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"textarea"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModal.apply(void 0,arguments)}}},[t._v("输入详情")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("商家地区")]),t.addressData.province?e("v-uni-view",{staticClass:"coent"},[t._v(t._s(t.addressData.province)+","+t._s(t.addressData.city)+","+t._s(t.addressData.area))]):t._e(),t.loadSurvey?e("region-picker",{attrs:{value:t.addressData.code},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.picker_change.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"img cu-btn shadow picker"},[t._v("选择地区")])],1):t._e()],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("所属分类")]),e("v-uni-view",{staticClass:"coent"},[t._v(t._s(t.realmdata))]),e("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"realmModal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModal.apply(void 0,arguments)}}},[t._v("选择分类")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg op-0"},[t._v("*")]),t._v("拥有平台")]),e("v-uni-view",{staticClass:"coent"},[t._v(t._s(t.platformdata))]),e("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"platformModal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModal.apply(void 0,arguments)}}},[t._v("选择平台")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg op-0"},[t._v("*")]),t._v("企业官网")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入企业官网"},model:{value:t.addressData.homepage,callback:function(a){t.$set(t.addressData,"homepage",a)},expression:"addressData.homepage"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg op-0"},[t._v("*")]),t._v("店铺链接")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入店铺链接"},model:{value:t.addressData.shop_link,callback:function(a){t.$set(t.addressData,"shop_link",a)},expression:"addressData.shop_link"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("联系人")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入联系人"},model:{value:t.addressData.contact,callback:function(a){t.$set(t.addressData,"contact",a)},expression:"addressData.contact"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("联系电话")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入联系电话"},model:{value:t.addressData.mobile,callback:function(a){t.$set(t.addressData,"mobile",a)},expression:"addressData.mobile"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("微信号码")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入微信号"},model:{value:t.addressData.wechat_work,callback:function(a){t.$set(t.addressData,"wechat_work",a)},expression:"addressData.wechat_work"}})],1)],1)],1),e("v-uni-view",{staticClass:"padding-xl"},[e("v-uni-button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg confirm",attrs:{disabled:t.btn},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.confirm.apply(void 0,arguments)}}},[t._v(t._s(t.btnname))])],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"realmModal"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chkrealm.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue"}),e("v-uni-view",{staticClass:"action text-green",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chkrealm.apply(void 0,arguments)}}},[t._v("确定")])],1),e("v-uni-view",{staticClass:"realmlist"},t._l(t.realm,(function(a,i){return 0==a.pid?e("v-uni-view",{key:i,staticClass:"padding-xs"},[e("v-uni-view",[t._v(t._s(a.name))]),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},t._l(t.realm,(function(i,s){return i.pid==a.id?e("v-uni-view",{key:s,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"box cu-btn block",class:i.checked?"bg-orange":"line-orange",attrs:{"data-value":i.id},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.Chooserealm(i)}}},[t._v(t._s(i.name))])],1):t._e()})),1)],1):t._e()})),1),e("v-uni-view",{staticClass:"nothave"},[t._v("没有找到？联系客服添加分类")])],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"platformModal"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chkplatform.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue"}),e("v-uni-view",{staticClass:"action text-green",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chkplatform.apply(void 0,arguments)}}},[t._v("确定")])],1),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},t._l(t.platform,(function(a,i){return e("v-uni-view",{key:i,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"box cu-btn block",class:a.checked?"bg-orange":"line-orange",attrs:{"data-value":a.name},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChooseCheckbox(a)}}},[t._v(t._s(a.name))])],1)})),1),e("v-uni-view",{staticClass:"nothave"},[t._v("没有找到？联系客服添加分类")])],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"schedule"==t.modalName?"show":""},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-gray"},[t._v(t._s(t.scheduletitle))]),e("v-uni-view",{staticClass:"action text-green",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("确定")])],1),e("v-uni-view",{staticClass:"padding-sm"},[e("v-uni-view",{staticClass:"padding bg-white clearfix"},[e("v-uni-view",{staticClass:"cu-progress"},[e("v-uni-view",{staticClass:"bg-red",style:[{width:t.percent+"%"}]},[t._v(t._s(t.percent+"%"))])],1),e("v-uni-view",{staticStyle:{float:"left","margin-top":"2vw"}},[t._v(t._s(t.scheduletip))]),e("v-uni-view",{staticStyle:{float:"right","margin-top":"2vw"}},[t._v(t._s(t.totalBytesSent)+"MB/"+t._s(t.totalBytesExpectedToSend)+"MB")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"textarea"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t.textarea?e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-green"},[t._v("商家简介")]),e("v-uni-view",{staticClass:"action text-green",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("确定")])],1),e("v-uni-textarea",{staticStyle:{width:"100%",padding:"3vw","background-color":"#fff","text-align":"left"},attrs:{maxlength:"2000",placeholder:"请输入商家简介"},model:{value:t.addressData.detail,callback:function(a){t.$set(t.addressData,"detail",a)},expression:"addressData.detail"}})],1):t._e()],1)],1)},n=[]},"471e":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".cu-modal[data-v-7d5ced6c]{z-index:900}.rztitle[data-v-7d5ced6c]{position:fixed;left:0;right:0;font-size:4.5vw;font-weight:700;background-color:#fff;height:44px;line-height:44px;text-indent:3vw}.rztitle .tip[data-v-7d5ced6c]{font-size:4vw;font-weight:400;color:#e71d36}.cu-bar[data-v-7d5ced6c]{position:static}.cu-dialog[data-v-7d5ced6c]{max-height:60vh}.realmlist[data-v-7d5ced6c]{max-height:46vh;overflow-x:hidden;overflow-y:auto}.hongren[data-v-7d5ced6c]{bottom:0}.platform_list[data-v-7d5ced6c]{margin:3vw;background-color:#fff;-webkit-border-radius:2vw;border-radius:2vw}.platform_list .list[data-v-7d5ced6c]{overflow:hidden;-webkit-border-radius:2vw;border-radius:2vw;-webkit-box-shadow:1px 1px 2px rgba(26,26,26,.1);box-shadow:1px 1px 2px rgba(26,26,26,.1)}.cu-form-group[data-v-7d5ced6c]{margin:.5px 15px;padding:0}.cu-form-group .title[data-v-7d5ced6c]{width:24vw}.cor-e8.text-lg[data-v-7d5ced6c]{position:relative;left:-1vw;top:1vw}.cu-btn.lg[data-v-7d5ced6c]{padding:0 3vw}.nothave[data-v-7d5ced6c]{font-size:3.5vw;padding-bottom:3vw;color:#999}.op-0[data-v-7d5ced6c]{opacity:0}.bg-img[data-v-7d5ced6c]:first-child{margin:1vw 3vw}.bg-img[data-v-7d5ced6c]{margin-right:1vw 3vw 1vw 0;-webkit-box-shadow:1px 1px 2px rgba(26,26,26,.1);box-shadow:1px 1px 2px rgba(26,26,26,.1)}.cu-btn.img[data-v-7d5ced6c]{height:24px;font-size:12px;background-color:#e71d36;color:#fff;padding:0 2vw;-webkit-border-radius:5px;border-radius:5px}.text-orange[data-v-7d5ced6c], .line-orange[data-v-7d5ced6c], .lines-orange[data-v-7d5ced6c]{color:#999}.bg-orange[data-v-7d5ced6c]{background-color:#e71d36;color:#fff;-webkit-border-radius:2px;border-radius:2px}.confirm[data-v-7d5ced6c]{background-color:#e71d36}.coent[data-v-7d5ced6c]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.cu-form-group uni-picker[data-v-7d5ced6c]::after{display:none}.remarks[data-v-7d5ced6c]{text-align:center;padding:3vw 3vw;color:#e71d36;line-height:5vw;font-size:3.5vw;background-color:#fff}",""]),t.exports=a},"4ace":function(t,a,e){"use strict";e.r(a);var i=e("3f7d"),s=e("ac3d");for(var n in s)"default"!==n&&function(t){e.d(a,t,(function(){return s[t]}))}(n);e("9ed5");var o,c=e("f0c5"),l=Object(c["a"])(s["default"],i["b"],i["c"],!1,null,"7d5ced6c",null,!1,i["a"],o);a["default"]=l.exports},"9ed5":function(t,a,e){"use strict";var i=e("04bb"),s=e.n(i);s.a},ac3d:function(t,a,e){"use strict";e.r(a);var i=e("0b96"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=s.a}}]);