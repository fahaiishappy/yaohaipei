(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-attesj"],{"0866":function(a,t,e){"use strict";var i=e("399b"),s=e.n(i);s.a},"13ac":function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,".cu-modal[data-v-772a3e29]{z-index:900}.rztitle[data-v-772a3e29]{position:fixed;left:0;right:0;font-size:4.5vw;font-weight:700;background-color:#fff;height:44px;line-height:44px;text-indent:3vw}.rztitle .tip[data-v-772a3e29]{font-size:4vw;font-weight:400;color:#e71d36}.cu-bar[data-v-772a3e29]{position:static}.cu-dialog[data-v-772a3e29]{max-height:60vh}.realmlist[data-v-772a3e29]{max-height:46vh;overflow-x:hidden;overflow-y:auto}.hongren[data-v-772a3e29]{bottom:0}.platform_list[data-v-772a3e29]{margin:3vw;background-color:#fff;border-radius:2vw}.platform_list .list[data-v-772a3e29]{overflow:hidden;border-radius:2vw;box-shadow:1px 1px 2px rgba(26,26,26,.1)}.cu-form-group[data-v-772a3e29]{margin:.5px 15px;padding:0}.cu-form-group .title[data-v-772a3e29]{width:24vw}.cor-e8.text-lg[data-v-772a3e29]{position:relative;left:-1vw;top:1vw}.cu-btn.lg[data-v-772a3e29]{padding:0 3vw}.nothave[data-v-772a3e29]{font-size:3.5vw;padding-bottom:3vw;color:#999}.op-0[data-v-772a3e29]{opacity:0}.bg-img[data-v-772a3e29]:first-child{margin:1vw 3vw}.bg-img[data-v-772a3e29]{margin-right:1vw 3vw 1vw 0;box-shadow:1px 1px 2px rgba(26,26,26,.1)}.cu-btn.img[data-v-772a3e29]{height:24px;font-size:12px;background-color:#e71d36;color:#fff;padding:0 2vw;border-radius:5px}.text-orange[data-v-772a3e29], .line-orange[data-v-772a3e29], .lines-orange[data-v-772a3e29]{color:#999}.bg-orange[data-v-772a3e29]{background-color:#e71d36;color:#fff;border-radius:2px}.confirm[data-v-772a3e29]{background-color:#e71d36}.coent[data-v-772a3e29]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.cu-form-group uni-picker[data-v-772a3e29]::after{display:none}.remarks[data-v-772a3e29]{text-align:center;padding:3vw 3vw;color:#e71d36;line-height:5vw;font-size:3.5vw;background-color:#fff}",""]),a.exports=t},"16a1":function(a,t,e){"use strict";e.r(t);var i=e("437d"),s=e("8408");for(var n in s)"default"!==n&&function(a){e.d(t,a,(function(){return s[a]}))}(n);e("0866");var o,c=e("f0c5"),l=Object(c["a"])(s["default"],i["b"],i["c"],!1,null,"772a3e29",null,!1,i["a"],o);t["default"]=l.exports},"399b":function(a,t,e){var i=e("13ac");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var s=e("4f06").default;s("54873881",i,!0,{sourceMap:!1,shadowMode:!1})},"437d":function(a,t,e){"use strict";e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return i}));var i={regionPicker:e("98c5").default},s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",[e("uni-top-bar"),e("v-uni-view",{staticClass:"rztitle",style:{top:a.height+43+"px"}},[a._v("商家入驻"),e("span",{staticClass:"tip"},[a._v("（ 入驻成功可发布供求信息 ）")])]),e("v-uni-view",{staticClass:"hongren",style:{top:a.height+43+44+"px"}},[3==a.examine&&a.remarks?e("v-uni-view",{staticClass:"remarks"},[a._v("未通过原因："+a._s(a.remarks))]):a._e(),e("v-uni-view",{staticClass:"platform_list clearfix"},[e("v-uni-view",{staticClass:"list clearfix"},[e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("企业名称")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入企业名称"},model:{value:a.addressData.company,callback:function(t){a.$set(a.addressData,"company",t)},expression:"addressData.company"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("营业执照")]),e("v-uni-button",{staticClass:"img cu-btn shadow",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.licenseImage.apply(void 0,arguments)}}},[a._v("上传执照")])],1),a.addressData.license?e("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[e("v-uni-view",{staticClass:"bg-img"},[e("v-uni-image",{attrs:{src:a.addressData.license,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"cu-tag bg-red",on:{click:function(t){t.stopPropagation(),arguments[0]=t=a.$handleEvent(t),a.DelImg("license")}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1):a._e(),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("品牌名称")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入品牌名称"},model:{value:a.addressData.title,callback:function(t){a.$set(a.addressData,"title",t)},expression:"addressData.title"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("品牌logo")]),e("v-uni-view",{staticClass:"coent",staticStyle:{color:"red","font-size":"3.5vw"}},[a._v("请上传正方形logo")]),e("v-uni-button",{staticClass:"img cu-btn shadow",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.logoImage.apply(void 0,arguments)}}},[a._v("上传logo")])],1),a.addressData.logo?e("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[e("v-uni-view",{staticClass:"bg-img"},[e("v-uni-image",{attrs:{src:a.addressData.logo,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"cu-tag bg-red",on:{click:function(t){t.stopPropagation(),arguments[0]=t=a.$handleEvent(t),a.DelImg("logo")}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1):a._e(),e("v-uni-view",{staticClass:"cu-form-group align-start"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("商家简介")]),e("v-uni-view",{staticClass:"coent",staticStyle:{padding:"3vw 0","min-height":"50px"},attrs:{"data-target":"textarea"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.showModal.apply(void 0,arguments)}}},[a._v(a._s(a.addressData.detail))])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("商家地区")]),a.addressData.province?e("v-uni-view",{staticClass:"coent"},[a._v(a._s(a.addressData.province)+","+a._s(a.addressData.city)+","+a._s(a.addressData.area))]):a._e(),a.loadSurvey?e("region-picker",{attrs:{value:a.addressData.code},on:{change:function(t){arguments[0]=t=a.$handleEvent(t),a.picker_change.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"img cu-btn shadow picker"},[a._v("选择地区")])],1):a._e()],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("所属领域")]),e("v-uni-view",{staticClass:"coent"},[a._v(a._s(a.realmdata))]),e("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"realmModal"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.showModal.apply(void 0,arguments)}}},[a._v("选择领域")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg op-0"},[a._v("*")]),a._v("拥有平台")]),e("v-uni-view",{staticClass:"coent"},[a._v(a._s(a.platformdata))]),e("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"platformModal"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.showModal.apply(void 0,arguments)}}},[a._v("选择平台")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg op-0"},[a._v("*")]),a._v("企业官网")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入企业官网"},model:{value:a.addressData.homepage,callback:function(t){a.$set(a.addressData,"homepage",t)},expression:"addressData.homepage"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg op-0"},[a._v("*")]),a._v("店铺链接")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入店铺链接"},model:{value:a.addressData.shop_link,callback:function(t){a.$set(a.addressData,"shop_link",t)},expression:"addressData.shop_link"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("联系人")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入联系人"},model:{value:a.addressData.contact,callback:function(t){a.$set(a.addressData,"contact",t)},expression:"addressData.contact"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("联系电话")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入联系电话"},model:{value:a.addressData.mobile,callback:function(t){a.$set(a.addressData,"mobile",t)},expression:"addressData.mobile"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("微信号码")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入微信号"},model:{value:a.addressData.wechat_work,callback:function(t){a.$set(a.addressData,"wechat_work",t)},expression:"addressData.wechat_work"}})],1)],1)],1),e("v-uni-view",{staticClass:"padding-xl"},[e("v-uni-button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg confirm",attrs:{disabled:a.btn},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.confirm.apply(void 0,arguments)}}},[a._v(a._s(a.btnname))])],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"realmModal"==a.modalName?"show":"",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.chkrealm.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(t){t.stopPropagation(),arguments[0]=t=a.$handleEvent(t)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue"}),e("v-uni-view",{staticClass:"action text-green",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.chkrealm.apply(void 0,arguments)}}},[a._v("确定")])],1),e("v-uni-view",{staticClass:"realmlist"},a._l(a.realm,(function(t,i){return 0==t.pid?e("v-uni-view",{key:i,staticClass:"padding-xs"},[e("v-uni-view",[a._v(a._s(t.name))]),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},a._l(a.realm,(function(i,s){return i.pid==t.id?e("v-uni-view",{key:s,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"box cu-btn block",class:i.checked?"bg-orange":"line-orange",attrs:{"data-value":i.id},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.Chooserealm(i)}}},[a._v(a._s(i.name))])],1):a._e()})),1)],1):a._e()})),1),e("v-uni-view",{staticClass:"nothave"},[a._v("没有找到？联系客服添加领域")])],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"platformModal"==a.modalName?"show":"",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.chkplatform.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(t){t.stopPropagation(),arguments[0]=t=a.$handleEvent(t)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue"}),e("v-uni-view",{staticClass:"action text-green",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.chkplatform.apply(void 0,arguments)}}},[a._v("确定")])],1),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},a._l(a.platform,(function(t,i){return e("v-uni-view",{key:i,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"box cu-btn block",class:t.checked?"bg-orange":"line-orange",attrs:{"data-value":t.name},on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.ChooseCheckbox(t)}}},[a._v(a._s(t.name))])],1)})),1),e("v-uni-view",{staticClass:"nothave"},[a._v("没有找到？联系客服添加分类")])],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"schedule"==a.modalName?"show":""},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(t){t.stopPropagation(),arguments[0]=t=a.$handleEvent(t),a.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-gray"},[a._v(a._s(a.scheduletitle))]),e("v-uni-view",{staticClass:"action text-green",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.hideModal.apply(void 0,arguments)}}},[a._v("确定")])],1),e("v-uni-view",{staticClass:"padding-sm"},[e("v-uni-view",{staticClass:"padding bg-white clearfix"},[e("v-uni-view",{staticClass:"cu-progress"},[e("v-uni-view",{staticClass:"bg-red",style:[{width:a.percent+"%"}]},[a._v(a._s(a.percent+"%"))])],1),e("v-uni-view",{staticStyle:{float:"left","margin-top":"2vw"}},[a._v(a._s(a.scheduletip))]),e("v-uni-view",{staticStyle:{float:"right","margin-top":"2vw"}},[a._v(a._s(a.totalBytesSent)+"MB/"+a._s(a.totalBytesExpectedToSend)+"MB")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"textarea"==a.modalName?"show":"",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.hideModal.apply(void 0,arguments)}}},[a.textarea?e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(t){t.stopPropagation(),arguments[0]=t=a.$handleEvent(t)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-green"},[a._v("商家简介")]),e("v-uni-view",{staticClass:"action text-green",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.hideModal.apply(void 0,arguments)}}},[a._v("确定")])],1),e("v-uni-textarea",{staticStyle:{width:"100%",padding:"3vw","background-color":"#fff","text-align":"left"},attrs:{maxlength:"2000",placeholder:"请输入商家简介"},model:{value:a.addressData.detail,callback:function(t){a.$set(a.addressData,"detail",t)},expression:"addressData.detail"}})],1):a._e()],1)],1)},n=[]},"7cb3":function(a,t,e){"use strict";var i=e("4ea4");e("4160"),e("b680"),e("acd8"),e("4d63"),e("ac1f"),e("25f0"),e("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(e("5ad0")),n=i(e("98c5")),o={components:{uniTopBar:s.default,regionPicker:n.default},data:function(){return{btn:!1,modalName:null,addressData:{company:"",title:"",logo:"",license:"",category:"",platform:"",province:"",detail:"",city:"",area:"",code:"",homepage:"",shop_link:"",contact:"",mobile:"",wechat_work:""},logoimg:"",realm:"",realmdata:"",platform:"",platformdata:"",userInfo:"",height:"",examine:"",remarks:"",loadSurvey:!0,btnname:"入驻",scheduletitle:"",scheduletip:"",percent:0,totalBytesSent:0,totalBytesExpectedToSend:0,textarea:!1}},onLoad:function(){var a=this;a.height=this.StatusBar,uni.getStorage({key:"userInfo",success:function(t){a.userInfo=t.data,a.addressData.mid=a.userInfo.id,a.attesj()}})},methods:{confirm:function(){return this.addressData.company?this.addressData.license?this.addressData.title?this.addressData.logo?this.addressData.detail?this.addressData.province?this.addressData.category?this.addressData.contact?this.addressData.mobile?this.checkMobile(this.addressData.mobile)?this.addressData.wechat_work?(this.btn=!0,void uni.request({url:"https://www.hongrensutui.com/api/index/Merchantadd",data:this.addressData,method:"post",header:{"Content-Type":"application/x-www-form-urlencoded"},dataType:"json",success:function(a){uni.showToast({icon:"none",title:a.data.data.info}),setTimeout((function(){uni.navigateBack({delta:2})}),2e3)},fail:function(a){uni.showToast({icon:"none",title:"入驻失败！"}),this.btn=!1}})):(uni.showToast({title:"微信号不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"联系电话格式不正确",icon:"none",duration:3e3}),!1):(uni.showToast({title:"联系电话不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"联系人不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"所属领域不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商家地区不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商家简介不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商家logo不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"品牌名称不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"营业执照不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"企业名称不能为空",icon:"none",duration:3e3}),!1)},checkMobile:function(a){return RegExp(/^1[34578]\d{9}$/).test(a)},attesj:function(){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/attesj",data:{id:a.userInfo.id},method:"POST",success:function(t){if(t.data.data.info){a.btnname="修改";var e=t.data.data.info;a.addressData.company=e.company,a.addressData.title=e.title,a.addressData.logo=e.logo,a.addressData.license=e.license,a.addressData.category=e.category,a.addressData.platform=e.platform,a.addressData.province=e.province,a.addressData.detail=e.detail,a.addressData.city=e.city,a.addressData.area=e.area,a.addressData.code=e.code,a.addressData.homepage=e.homepage,a.addressData.shop_link=e.shop_link,a.addressData.contact=e.contact,a.addressData.mobile=e.mobile,a.addressData.wechat_work=e.wechat_work,a.examine=e.examine,a.remarks=e.remarks,a.realmdata=e.realmdata,a.platformdata=e.platformdata,a.getRealm(e.category),a.merchantplatform(e.platform),a.loadSurvey=!1,a.$nextTick((function(){a.loadSurvey=!0}))}else a.getRealm(),a.merchantplatform()}})},getRealm:function(a){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/getRealm",data:{realm:a},method:"POST",success:function(a){t.realm=a.data.data.list}})},merchantplatform:function(a){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/merchantplatform",data:{platform:a},method:"POST",success:function(a){t.platform=a.data.data.list}})},numFilter:function(a){var t=parseFloat(a).toFixed(2);return t},logoImage:function(){var a=this;a.scheduletip="",a.percent=0,uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){var e=a.numFilter(t.tempFiles[0].size/1024/1024);if(e>2)return uni.showToast({title:"上传图片不可超过2M！当前图片"+e+"M",icon:"none",duration:3e3}),!1;var i=t.tempFilePaths,s=uni.uploadFile({url:"https://www.hongrensutui.com/api/upload/index",filePath:i[0],name:"image",success:function(t){var e=JSON.parse(t.data);a.addressData.logo=e.data.url}});s.onProgressUpdate((function(t){a.scheduletitle="logo上传",a.modalName="schedule",a.percent=t.progress,a.totalBytesSent=a.numFilter(t.totalBytesSent/1024/1024),a.totalBytesExpectedToSend=a.numFilter(t.totalBytesExpectedToSend/1024/1024),100==t.progress&&(a.scheduletip="图片上传完成")}))}})},licenseImage:function(){var a=this,t=this;t.scheduletip="",t.percent=0,uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){var i=t.numFilter(e.tempFiles[0].size/1024/1024);if(i>2)return uni.showToast({title:"上传图片不可超过2M！当前图片"+i+"M",icon:"none",duration:3e3}),!1;var s=e.tempFilePaths,n=uni.uploadFile({url:"https://www.hongrensutui.com/api/upload/index",filePath:s[0],name:"image",success:function(t){var e=JSON.parse(t.data);a.addressData.license=e.data.url}});n.onProgressUpdate((function(a){t.scheduletitle="营业执照上传",t.modalName="schedule",t.percent=a.progress,t.totalBytesSent=t.numFilter(a.totalBytesSent/1024/1024),t.totalBytesExpectedToSend=t.numFilter(a.totalBytesExpectedToSend/1024/1024),100==a.progress&&(t.scheduletip="图片上传完成")}))}})},DelImg:function(a){var t=this;uni.showModal({title:"",content:"确定要删除图片么？",cancelText:"取消",confirmText:"确认",success:function(e){e.confirm&&("logo"==a?t.addressData.logo="":"detailimg"==a?t.addressData.detailimg="":t.addressData.license="")}})},showModal:function(a){this.modalName=a.currentTarget.dataset.target,(a.currentTarget.dataset.target="textarea")&&(this.textarea=!0)},hideModal:function(a){this.modalName=null,this.textarea=!1},chkplatform:function(a){var t=this,e=0,i=0;this.addressData.platform="",this.platformdata="",this.platform.forEach((function(a,t){1==a.checked&&e++})),this.platform.forEach((function(a,s){1==a.checked&&(i++,i!=e?(t.addressData.platform+=a.id+",",t.platformdata+=a.name+","):(t.addressData.platform+=a.id,t.platformdata+=a.name))})),this.modalName=null},chkrealm:function(a){var t=this,e=0,i=0;this.addressData.category="",this.realmdata="",this.realm.forEach((function(a,t){1==a.checked&&e++})),this.realm.forEach((function(a,s){1==a.checked&&(i++,i!=e?(t.addressData.category+=a.id+",",t.realmdata+=a.name+","):(t.addressData.category+=a.id,t.realmdata+=a.name))})),this.modalName=null},picker_change:function(a){var t=this;t.addressData.code=a.detail.code,t.addressData.province=a.detail.value[0],t.addressData.city=a.detail.value[1],t.addressData.area=a.detail.value[2]},ChooseCheckbox:function(a){a.checked=!a.checked},Chooserealm:function(a){if(1==a.checked)a.checked=!a.checked;else{var t=0;this.realm.forEach((function(a,e){1==a.checked&&t++})),t>=8?uni.showToast({title:"所选领域不能超过8个！",icon:"none",duration:2e3}):a.checked=!a.checked}}}};t.default=o},8408:function(a,t,e){"use strict";e.r(t);var i=e("7cb3"),s=e.n(i);for(var n in i)"default"!==n&&function(a){e.d(t,a,(function(){return i[a]}))}(n);t["default"]=s.a}}]);