(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-attesj"],{"0e4e":function(a,t,e){"use strict";var s=e("ee27");e("4160"),e("4d63"),e("ac1f"),e("25f0"),e("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(e("d654")),n=s(e("c0a4")),o={components:{uniTopBar:i.default,regionPicker:n.default},data:function(){return{btn:!1,modalName:null,addressData:{company:"",title:"",logo:"",license:"",category:"",platform:"",province:"",city:"",area:"",code:"",homepage:"",shop_link:"",contact:"",mobile:"",wechat_work:""},logoimg:"",realm:"",realmdata:"",platform:"",platformdata:"",userInfo:"",height:"",examine:"",remarks:"",loadSurvey:!0}},onLoad:function(){var a=this;a.height=this.StatusBar,uni.getStorage({key:"userInfo",success:function(t){a.userInfo=t.data,a.addressData.mid=a.userInfo.id,a.attesj()}})},methods:{confirm:function(){return this.addressData.company?this.addressData.license?this.addressData.title?this.addressData.logo?this.addressData.province?this.addressData.category?this.addressData.contact?this.addressData.mobile?this.checkMobile(this.addressData.mobile)?this.addressData.wechat_work?(this.btn=!0,void uni.request({url:"https://www.hongrensutui.com/api/index/Merchantadd",data:this.addressData,method:"post",header:{"Content-Type":"application/x-www-form-urlencoded"},dataType:"json",success:function(a){uni.showToast({icon:"none",title:a.data.data.info}),setTimeout((function(){uni.navigateBack({delta:2})}),2e3)},fail:function(a){uni.showToast({icon:"none",title:"入驻失败！"}),this.btn=!1}})):(uni.showToast({title:"微信号不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"联系电话格式不正确",icon:"none",duration:3e3}),!1):(uni.showToast({title:"联系电话不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"联系人不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商家分类不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商家地区不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商家logo不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"品牌名称不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"营业执照不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"企业名称不能为空",icon:"none",duration:3e3}),!1)},checkMobile:function(a){return RegExp(/^1[34578]\d{9}$/).test(a)},attesj:function(){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/attesj",data:{id:a.userInfo.id},method:"POST",success:function(t){if(t.data.data.info){var e=t.data.data.info;a.addressData.company=e.company,a.addressData.title=e.title,a.addressData.logo=e.logo,a.addressData.license=e.license,a.addressData.category=e.category,a.addressData.platform=e.platform,a.addressData.province=e.province,a.addressData.city=e.city,a.addressData.area=e.area,a.addressData.code=e.code,a.addressData.homepage=e.homepage,a.addressData.shop_link=e.shop_link,a.addressData.contact=e.contact,a.addressData.mobile=e.mobile,a.addressData.wechat_work=e.wechat_work,a.examine=e.examine,a.remarks=e.remarks,a.realmdata=e.realmdata,a.platformdata=e.platformdata,a.getRealm(e.category),a.merchantplatform(e.platform),a.loadSurvey=!1,a.$nextTick((function(){a.loadSurvey=!0}))}else a.getRealm(),a.merchantplatform()}})},getRealm:function(a){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/getRealm",data:{realm:a},method:"POST",success:function(a){t.realm=a.data.data.list}})},merchantplatform:function(a){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/merchantplatform",data:{platform:a},method:"POST",success:function(a){t.platform=a.data.data.list}})},logoImage:function(){var a=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){var e=t.tempFilePaths;uni.uploadFile({url:"https://www.hongrensutui.com/api/upload/index",filePath:e[0],name:"image",success:function(t){var e=JSON.parse(t.data);a.addressData.logo=e.data.url}})}})},licenseImage:function(){var a=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){var e=t.tempFilePaths;uni.uploadFile({url:"https://www.hongrensutui.com/api/upload/index",filePath:e[0],name:"image",success:function(t){var e=JSON.parse(t.data);a.addressData.license=e.data.url}})}})},DelImg:function(a){var t=this;uni.showModal({title:"",content:"确定要删除图片么？",cancelText:"取消",confirmText:"确认",success:function(e){e.confirm&&("logo"==a?t.addressData.logo="":t.addressData.license="")}})},showModal:function(a){this.modalName=a.currentTarget.dataset.target},hideModal:function(a){this.modalName=null},chkplatform:function(a){var t=this,e=0,s=0;this.addressData.platform="",this.platformdata="",this.platform.forEach((function(a,t){1==a.checked&&e++})),this.platform.forEach((function(a,i){1==a.checked&&(s++,s!=e?(t.addressData.platform+=a.id+",",t.platformdata+=a.name+","):(t.addressData.platform+=a.id,t.platformdata+=a.name))})),this.modalName=null},chkrealm:function(a){var t=this,e=0,s=0;this.addressData.category="",this.realmdata="",this.realm.forEach((function(a,t){1==a.checked&&e++})),this.realm.forEach((function(a,i){1==a.checked&&(s++,s!=e?(t.addressData.category+=a.id+",",t.realmdata+=a.name+","):(t.addressData.category+=a.id,t.realmdata+=a.name))})),this.modalName=null},picker_change:function(a){var t=this;t.addressData.code=a.detail.code,t.addressData.province=a.detail.value[0],t.addressData.city=a.detail.value[1],t.addressData.area=a.detail.value[2]},ChooseCheckbox:function(a){a.checked=!a.checked},Chooserealm:function(a){if(1==a.checked)a.checked=!a.checked;else{var t=0;this.realm.forEach((function(a,e){1==a.checked&&t++})),t>=8?uni.showToast({title:"所选领域不能超过8个！",icon:"none",duration:2e3}):a.checked=!a.checked}}}};t.default=o},4426:function(a,t,e){var s=e("24fb");t=s(!1),t.push([a.i,".cu-modal[data-v-4de4e499]{z-index:900}.rztitle[data-v-4de4e499]{position:fixed;left:0;right:0;font-size:4.5vw;font-weight:700;background-color:#fff;height:44px;line-height:44px;text-indent:3vw}.rztitle .tip[data-v-4de4e499]{font-size:4vw;font-weight:400;color:#e71d36}.cu-bar[data-v-4de4e499]{position:static}.cu-dialog[data-v-4de4e499]{max-height:60vh}.realmlist[data-v-4de4e499]{max-height:46vh;overflow-x:hidden;overflow-y:auto}.hongren[data-v-4de4e499]{bottom:0}.platform_list[data-v-4de4e499]{margin:3vw;background-color:#fff;border-radius:2vw}.platform_list .list[data-v-4de4e499]{overflow:hidden;border-radius:2vw;box-shadow:1px 1px 2px rgba(26,26,26,.1)}.cu-form-group[data-v-4de4e499]{margin:.5px 15px;padding:0}.cu-form-group .title[data-v-4de4e499]{width:24vw}.cor-e8.text-lg[data-v-4de4e499]{position:relative;left:-1vw;top:1vw}.cu-btn.lg[data-v-4de4e499]{padding:0 3vw}.nothave[data-v-4de4e499]{font-size:3.5vw;padding-bottom:3vw;color:#999}.op-0[data-v-4de4e499]{opacity:0}.bg-img[data-v-4de4e499]:first-child{margin:1vw 3vw}.bg-img[data-v-4de4e499]{margin-right:1vw 3vw 1vw 0;box-shadow:1px 1px 2px rgba(26,26,26,.1)}.cu-btn.img[data-v-4de4e499]{height:24px;font-size:12px;background-color:#e71d36;color:#fff;padding:0 2vw;border-radius:5px}.text-orange[data-v-4de4e499], .line-orange[data-v-4de4e499], .lines-orange[data-v-4de4e499]{color:#999}.bg-orange[data-v-4de4e499]{background-color:#e71d36;color:#fff;border-radius:2px}.confirm[data-v-4de4e499]{background-color:#e71d36}.coent[data-v-4de4e499]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.cu-form-group uni-picker[data-v-4de4e499]::after{display:none}.remarks[data-v-4de4e499]{text-align:center;padding:3vw 3vw;color:#e71d36;line-height:5vw;font-size:3.5vw;background-color:#fff}",""]),a.exports=t},a538:function(a,t,e){"use strict";e.r(t);var s=e("e8c7"),i=e("d6cd");for(var n in i)"default"!==n&&function(a){e.d(t,a,(function(){return i[a]}))}(n);e("cfe8");var o,c=e("f0c5"),l=Object(c["a"])(i["default"],s["b"],s["c"],!1,null,"4de4e499",null,!1,s["a"],o);t["default"]=l.exports},cfe8:function(a,t,e){"use strict";var s=e("f0c5f"),i=e.n(s);i.a},d6cd:function(a,t,e){"use strict";e.r(t);var s=e("0e4e"),i=e.n(s);for(var n in s)"default"!==n&&function(a){e.d(t,a,(function(){return s[a]}))}(n);t["default"]=i.a},e8c7:function(a,t,e){"use strict";var s={regionPicker:e("c0a4").default},i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",[e("uni-top-bar"),e("v-uni-view",{staticClass:"rztitle",style:{top:a.height+43+"px"}},[a._v("商家入驻"),e("span",{staticClass:"tip"},[a._v("（ 入驻成功可发布供求信息 ）")])]),e("v-uni-view",{staticClass:"hongren",style:{top:a.height+43+44+"px"}},[3==a.examine&&a.remarks?e("v-uni-view",{staticClass:"remarks"},[a._v("未通过原因："+a._s(a.remarks))]):a._e(),e("v-uni-view",{staticClass:"platform_list clearfix"},[e("v-uni-view",{staticClass:"list clearfix"},[e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("企业名称")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入企业名称"},model:{value:a.addressData.company,callback:function(t){a.$set(a.addressData,"company",t)},expression:"addressData.company"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("营业执照")]),e("v-uni-button",{staticClass:"img cu-btn shadow",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.licenseImage.apply(void 0,arguments)}}},[a._v("上传图片")])],1),a.addressData.license?e("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[e("v-uni-view",{staticClass:"bg-img"},[e("v-uni-image",{attrs:{src:a.addressData.license,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"cu-tag bg-red",on:{click:function(t){t.stopPropagation(),arguments[0]=t=a.$handleEvent(t),a.DelImg("license")}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1):a._e(),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("品牌名称")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入品牌名称"},model:{value:a.addressData.title,callback:function(t){a.$set(a.addressData,"title",t)},expression:"addressData.title"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("品牌logo")]),e("v-uni-view",{staticClass:"coent",staticStyle:{color:"red","font-size":"3.5vw"}},[a._v("请上传正方形logo")]),e("v-uni-button",{staticClass:"img cu-btn shadow",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.logoImage.apply(void 0,arguments)}}},[a._v("上传图片")])],1),a.addressData.logo?e("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[e("v-uni-view",{staticClass:"bg-img"},[e("v-uni-image",{attrs:{src:a.addressData.logo,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"cu-tag bg-red",on:{click:function(t){t.stopPropagation(),arguments[0]=t=a.$handleEvent(t),a.DelImg("logo")}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1):a._e(),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("商家地区")]),a.addressData.province?e("v-uni-view",{staticClass:"coent"},[a._v(a._s(a.addressData.province)+","+a._s(a.addressData.city)+","+a._s(a.addressData.area))]):a._e(),a.loadSurvey?e("region-picker",{attrs:{value:a.addressData.code},on:{change:function(t){arguments[0]=t=a.$handleEvent(t),a.picker_change.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"img cu-btn shadow picker"},[a._v("选择地区")])],1):a._e()],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("所属领域")]),e("v-uni-view",{staticClass:"coent"},[a._v(a._s(a.realmdata))]),e("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"realmModal"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.showModal.apply(void 0,arguments)}}},[a._v("选择领域")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg op-0"},[a._v("*")]),a._v("拥有平台")]),e("v-uni-view",{staticClass:"coent"},[a._v(a._s(a.platformdata))]),e("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"platformModal"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.showModal.apply(void 0,arguments)}}},[a._v("选择平台")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg op-0"},[a._v("*")]),a._v("企业官网")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入企业官网"},model:{value:a.addressData.homepage,callback:function(t){a.$set(a.addressData,"homepage",t)},expression:"addressData.homepage"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg op-0"},[a._v("*")]),a._v("店铺链接")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入店铺链接"},model:{value:a.addressData.shop_link,callback:function(t){a.$set(a.addressData,"shop_link",t)},expression:"addressData.shop_link"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("对接商务")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入联系人"},model:{value:a.addressData.contact,callback:function(t){a.$set(a.addressData,"contact",t)},expression:"addressData.contact"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("联系电话")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入联系电话"},model:{value:a.addressData.mobile,callback:function(t){a.$set(a.addressData,"mobile",t)},expression:"addressData.mobile"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("微信号码")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入微信号"},model:{value:a.addressData.wechat_work,callback:function(t){a.$set(a.addressData,"wechat_work",t)},expression:"addressData.wechat_work"}})],1)],1)],1),e("v-uni-view",{staticClass:"padding-xl"},[e("v-uni-button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg confirm",attrs:{disabled:a.btn},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.confirm.apply(void 0,arguments)}}},[a._v("入驻")])],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"realmModal"==a.modalName?"show":"",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.chkrealm.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(t){t.stopPropagation(),arguments[0]=t=a.$handleEvent(t)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue"}),e("v-uni-view",{staticClass:"action text-green",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.chkrealm.apply(void 0,arguments)}}},[a._v("确定")])],1),e("v-uni-view",{staticClass:"realmlist"},a._l(a.realm,(function(t,s){return 0==t.pid?e("v-uni-view",{key:s,staticClass:"padding-xs"},[e("v-uni-view",[a._v(a._s(t.name))]),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},a._l(a.realm,(function(s,i){return s.pid==t.id?e("v-uni-view",{key:i,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"box cu-btn block",class:s.checked?"bg-orange":"line-orange",attrs:{"data-value":s.id},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.Chooserealm(s)}}},[a._v(a._s(s.name))])],1):a._e()})),1)],1):a._e()})),1),e("v-uni-view",{staticClass:"nothave"},[a._v("没有找到？联系客服添加领域")])],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"platformModal"==a.modalName?"show":"",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.chkplatform.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(t){t.stopPropagation(),arguments[0]=t=a.$handleEvent(t)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue"}),e("v-uni-view",{staticClass:"action text-green",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.chkplatform.apply(void 0,arguments)}}},[a._v("确定")])],1),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},a._l(a.platform,(function(t,s){return e("v-uni-view",{key:s,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"box cu-btn block",class:t.checked?"bg-orange":"line-orange",attrs:{"data-value":t.name},on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.ChooseCheckbox(t)}}},[a._v(a._s(t.name))])],1)})),1),e("v-uni-view",{staticClass:"nothave"},[a._v("没有找到？联系客服添加分类")])],1)],1)],1)},n=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return s}))},f0c5f:function(a,t,e){var s=e("4426");"string"===typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);var i=e("4f06").default;i("6a5782c5",s,!0,{sourceMap:!1,shadowMode:!1})}}]);