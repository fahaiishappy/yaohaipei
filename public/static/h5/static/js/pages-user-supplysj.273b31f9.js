(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-supplysj"],{"43cc":function(t,a,e){"use strict";e.r(a);var i=e("73bb"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=s.a},4674:function(t,a,e){"use strict";e.r(a);var i=e("7137"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=s.a},"5ad0":function(t,a,e){"use strict";e.r(a);var i=e("ad3a"),s=e("4674");for(var n in s)"default"!==n&&function(t){e.d(a,t,(function(){return s[t]}))}(n);e("b844");var o,c=e("f0c5"),d=Object(c["a"])(s["default"],i["b"],i["c"],!1,null,"2dee27ab",null,!1,i["a"],o);a["default"]=d.exports},7137:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"uniTopBar",props:{barid:{type:Number,default:0},title:String,within:String},data:function(){return{height:""}},mounted:function(){this.height=this.StatusBar},methods:{navigateBack:function(){uni.navigateBack()}}};a.default=i},"73bb":function(t,a,e){"use strict";var i=e("4ea4");e("4160"),e("a434"),e("b680"),e("acd8"),e("4d63"),e("ac1f"),e("25f0"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=i(e("5ad0")),n={components:{uniTopBar:s.default},filters:{formatDate:function(t){var a=new Date(1e3*t),e=a.getFullYear(),i=a.getMonth()+1;i=i<10?"0"+i:i;var s=a.getDate();s=s<10?"0"+s:s;var n=a.getHours();n=n<10?"0"+n:n;var o=a.getMinutes();o=o<10?"0"+o:o;var c=a.getSeconds();return c=c<10?"0"+c:c,e+"-"+i+"-"+s}},data:function(){return{modalName:null,confirmbtn:"发布",taobaourl:!1,jingdongurl:!1,pinduoduourl:!1,kuaishouurl:!1,addressData:{title:"",brand:"",img:"",detailimg:[],category:"",platform:"",pay_type:2,advance:"",commission:"",nowprice:"",details:"",endtime:"",fans:"",contact:"",mobile:"",wechat_work:"",type:1},realm:"",realmdata:"",platform:"",userInfo:"",height:"",examine:"",remarks:"",hackReset:!0,detailImagename:"上传图片",scheduletitle:"",scheduletip:"",percent:0,totalBytesSent:0,totalBytesExpectedToSend:0,textarea:!1}},onLoad:function(t){var a=this;a.height=this.StatusBar,uni.getStorage({key:"userInfo",success:function(e){e.data&&""!=e.data&&(a.userInfo=e.data,a.addressData.mid=a.userInfo.id,t.id?(a.supplysj(t.id),a.addressData.id=t.id,a.confirmbtn="修改"):(a.getRealm(),a.supplyplatform()))}}),a.servertime()},methods:{confirm:function(){return this.addressData.title?this.addressData.brand?this.addressData.img?this.addressData.nowprice?this.addressData.platform?this.addressData.category?this.addressData.contact?"1"!=this.addressData.pay_type||this.addressData.advance?"2"!=this.addressData.pay_type||this.addressData.commission?"3"!=this.addressData.pay_type||this.addressData.advance?"3"!=this.addressData.pay_type||this.addressData.commission?this.addressData.mobile?this.checkMobile(this.addressData.mobile)?this.addressData.wechat_work?void uni.request({url:"https://www.hongrensutui.com/api/index/supplysjadd",data:this.addressData,method:"post",header:{"Content-Type":"application/x-www-form-urlencoded"},dataType:"json",success:function(t){200==t.data.data.code?(uni.showToast({icon:"none",title:t.data.data.info}),setTimeout((function(){uni.navigateBack({delta:1})}),2e3)):uni.showToast({icon:"none",title:"发布失败！"})},fail:function(t){uni.showToast({icon:"none",title:"发布失败！"})}}):(uni.showToast({title:"微信号不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"联系电话格式不正确",icon:"none",duration:3e3}),!1):(uni.showToast({title:"联系电话不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"佣金不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"坑位费不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"佣金不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"坑位费不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"联系人不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"商品分类不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"平台要求不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"卷后价格不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"产品图片不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"产品品牌不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"标题不能为空",icon:"none",duration:3e3}),!1)},supplysj:function(t){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/supplyedit",data:{id:t},method:"POST",success:function(t){if(t.data.data.info){var e=t.data.data.info;a.addressData.mid=e.mid,a.addressData.title=e.title,a.addressData.brand=e.brand,a.addressData.img=e.img,a.addressData.detailimg=e.detailimg,a.addressData.pay_type=e.pay_type,a.addressData.advance=e.advance,a.addressData.commission=e.commission,a.addressData.nowprice=e.nowprice,a.addressData.category=e.category,a.addressData.platform=e.platform,a.addressData.details=e.details,a.addressData.endtime=e.endtime,a.addressData.fans=e.fans,a.addressData.contact=e.contact,a.addressData.mobile=e.mobile,a.addressData.wechat_work=e.wechat_work,a.addressData.type=e.type,a.examine=e.examine,a.remarks=e.remarks,a.realmdata=e.realmdata,a.getRealm(e.category),a.supplyplatform(e.platform),a.addressData.detailimg.length>0&&(a.detailImagename="继续上传",a.hackReset=!1,a.$nextTick((function(){a.hackReset=!0})))}else a.getRealm(),a.supplyplatform()}})},servertime:function(){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/servertime",method:"POST",success:function(a){t.addressData.endtime=t.formatDate(a.data.data.time)}})},formatDate:function(t){var a=new Date(1e3*t),e=a.getFullYear(),i=a.getMonth()+1;i=i<10?"0"+i:i;var s=a.getDate();s=s<10?"0"+s:s;var n=a.getHours();n=n<10?"0"+n:n;var o=a.getMinutes();o=o<10?"0"+o:o;var c=a.getSeconds();return c=c<10?"0"+c:c,e+"-"+i+"-"+s},getRealm:function(t){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/getRealm",data:{realm:t},method:"POST",success:function(t){a.realm=t.data.data.list}})},supplyplatform:function(t){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/supplyplatform",data:{platform:t},method:"POST",success:function(t){a.platform=t.data.data.list}})},checkMobile:function(t){return RegExp(/^1[35789]\d{9}$/).test(t)},endtime:function(t){this.addressData.endtime=t.detail.value},showModal:function(t){this.modalName=t.currentTarget.dataset.target,(t.currentTarget.dataset.target="textarea")&&(this.textarea=!0)},hideModal:function(t){this.modalName=null,this.textarea=!1},numFilter:function(t){var a=parseFloat(t).toFixed(2);return a},avatarImage:function(){var t=this;t.scheduletip="",t.percent=0,uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(a){var e=t.numFilter(a.tempFiles[0].size/1024/1024);if(e>2)return uni.showToast({title:"上传图片不可超过2M！当前图片"+e+"M",icon:"none",duration:3e3}),!1;var i=a.tempFilePaths,s=uni.uploadFile({url:"https://www.hongrensutui.com/api/upload/index",filePath:i[0],name:"image",success:function(a){var e=JSON.parse(a.data);t.addressData.img=e.data.url}});s.onProgressUpdate((function(a){t.scheduletitle="封面上传",t.modalName="schedule",t.percent=a.progress,t.totalBytesSent=t.numFilter(a.totalBytesSent/1024/1024),t.totalBytesExpectedToSend=t.numFilter(a.totalBytesExpectedToSend/1024/1024),100==a.progress&&(t.scheduletip="图片上传完成")}))}})},DelImg:function(){var t=this;uni.showModal({title:"",content:"确定要删除图片么？",cancelText:"取消",confirmText:"确认",success:function(a){a.confirm&&(t.addressData.img="")}})},detailImage:function(){var t=this;if(t.scheduletip="",t.percent=0,t.addressData.detailimg.length>5)return uni.showToast({title:"详情图片不能超过6个",icon:"none",duration:3e3}),!1;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(a){var e=t.numFilter(a.tempFiles[0].size/1024/1024);if(e>2)return uni.showToast({title:"上传图片不可超过2M！当前图片"+e+"M",icon:"none",duration:3e3}),!1;var i=a.tempFilePaths,s=uni.uploadFile({url:"https://www.hongrensutui.com/api/upload/index",filePath:i[0],name:"image",success:function(a){var e=JSON.parse(a.data);t.addressData.detailimg[t.addressData.detailimg.length]=e.data.url,t.detailImagename="继续上传",t.hackReset=!1,t.$nextTick((function(){t.hackReset=!0}))}});s.onProgressUpdate((function(a){t.scheduletitle="详情图片上传",t.modalName="schedule",t.percent=a.progress,t.totalBytesSent=t.numFilter(a.totalBytesSent/1024/1024),t.totalBytesExpectedToSend=t.numFilter(a.totalBytesExpectedToSend/1024/1024),100==a.progress&&(t.scheduletip="图片上传完成")}))}})},DeldetailImg:function(t){var a=this;uni.showModal({title:"",content:"确定要删除图片么？",cancelText:"取消",confirmText:"确认",success:function(e){a.addressData.detailimg.splice(t,1)}})},chkrealm:function(t){var a=this,e=0,i=0;this.addressData.category="",this.realmdata="",this.realm.forEach((function(t,a){1==t.checked&&e++})),this.realm.forEach((function(t,s){1==t.checked&&(i++,i!=e?(a.addressData.category+=t.id+",",a.realmdata+=t.name+","):(a.addressData.category+=t.id,a.realmdata+=t.name))})),this.modalName=null},chkplatform:function(t){var a=this,e=0,i=0;this.addressData.platform="",this.platform.forEach((function(t,a){1==t.checked&&e++})),this.platform.forEach((function(t,s){1==t.checked&&(i++,a.addressData.platform+=i!=e?t.name+",":t.name)})),this.modalName=null},RadioCharge:function(t){this.addressData.pay_type=t.detail.value,"1"==this.addressData.pay_type&&(this.addressData.commission=""),"2"==this.addressData.pay_type&&(this.addressData.advance="")},ChooseCheckbox:function(t){t.checked=!t.checked},Chooserealm:function(t){if(1==t.checked)t.checked=!t.checked;else{var a=0;this.realm.forEach((function(t,e){1==t.checked&&a++})),a>=8?uni.showToast({title:"所选分类不能超过8个！",icon:"none",duration:2e3}):t.checked=!t.checked}}}};a.default=n},"8d21":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return s})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("uni-top-bar"),e("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[3==t.examine&&t.remarks?e("v-uni-view",{staticClass:"remarks"},[t._v("未通过原因："+t._s(t.remarks))]):t._e(),e("v-uni-view",{staticClass:"platform_list clearfix"},[e("v-uni-view",{staticClass:"list clearfix"},[e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("标题")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入标题"},model:{value:t.addressData.title,callback:function(a){t.$set(t.addressData,"title",a)},expression:"addressData.title"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("产品品牌")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入产品品牌"},model:{value:t.addressData.brand,callback:function(a){t.$set(t.addressData,"brand",a)},expression:"addressData.brand"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("产品封面")]),e("v-uni-view",{staticClass:"coent",staticStyle:{color:"red","font-size":"3.5vw"}},[t._v("请上传正方形封面")]),e("v-uni-button",{staticClass:"img cu-btn shadow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.avatarImage.apply(void 0,arguments)}}},[t._v("上传封面")])],1),t.addressData.img?e("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[e("v-uni-view",{staticClass:"bg-img"},[e("v-uni-image",{attrs:{src:t.addressData.img,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"cu-tag bg-red",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.DelImg()}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1):t._e(),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("带货价格")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入劵后价格"},model:{value:t.addressData.nowprice,callback:function(a){t.$set(t.addressData,"nowprice",a)},expression:"addressData.nowprice"}}),e("v-uni-view",{staticClass:"title"},[t._v("元")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("带货平台")]),e("v-uni-view",{staticClass:"coent"},[t._v(t._s(t.addressData.platform))]),e("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"platformModal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModal.apply(void 0,arguments)}}},[t._v("选择平台")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("商品分类")]),e("v-uni-view",{staticClass:"coent"},[t._v(t._s(t.realmdata))]),e("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"realmModal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModal.apply(void 0,arguments)}}},[t._v("选择分类")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("收费形式")]),e("v-uni-radio-group",{staticClass:"block",on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.RadioCharge.apply(void 0,arguments)}}},[e("v-uni-view",[e("span",[t._v("坑位费")]),e("v-uni-radio",{staticClass:"blue radio sm",class:1==t.addressData.pay_type?"checked":"",attrs:{checked:1==t.addressData.pay_type,value:"1"}})],1),e("v-uni-view",[e("span",[t._v("纯佣金")]),e("v-uni-radio",{staticClass:"blue radio sm",class:2==t.addressData.pay_type?"checked":"",attrs:{checked:2==t.addressData.pay_type,value:"2"}})],1),e("v-uni-view",[e("span",[t._v("坑位+佣金")]),e("v-uni-radio",{staticClass:"blue radio sm",class:3==t.addressData.pay_type?"checked":"",attrs:{checked:3==t.addressData.pay_type,value:"3"}})],1)],1)],1),1==t.addressData.pay_type||3==t.addressData.pay_type?e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("坑位费")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入坑位费"},model:{value:t.addressData.advance,callback:function(a){t.$set(t.addressData,"advance",a)},expression:"addressData.advance"}}),e("v-uni-view",{staticClass:"title"},[t._v("万")])],1):t._e(),2==t.addressData.pay_type||3==t.addressData.pay_type?e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("佣金比")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入佣金"},model:{value:t.addressData.commission,callback:function(a){t.$set(t.addressData,"commission",a)},expression:"addressData.commission"}}),e("v-uni-view",{staticClass:"title"},[t._v("%")])],1):t._e(),e("v-uni-view",{staticClass:"cu-form-group align-start"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("产品详情")]),e("v-uni-view",{staticClass:"coent",staticStyle:{padding:"3vw 0","min-height":"50px"},attrs:{"data-target":"textarea"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModal.apply(void 0,arguments)}}},[t._v(t._s(t.addressData.details))])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("详情图片")]),e("v-uni-view",{staticClass:"coent",staticStyle:{color:"red","font-size":"3.5vw"}},[t._v("上传图片保持宽度一致")]),e("v-uni-button",{staticClass:"img cu-btn shadow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.detailImage.apply(void 0,arguments)}}},[t._v(t._s(t.detailImagename))])],1),t.hackReset?e("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},t._l(t.addressData.detailimg,(function(a,i){return e("v-uni-view",{key:i,staticClass:"bg-img"},[e("v-uni-image",{attrs:{src:a,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"cu-tag bg-red",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.DeldetailImg(i)}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)})),1):t._e(),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("粉丝要求")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入粉丝量"},model:{value:t.addressData.fans,callback:function(a){t.$set(t.addressData,"fans",a)},expression:"addressData.fans"}}),e("v-uni-view",{staticClass:"title"},[t._v("万以上")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("联系人")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入联系人"},model:{value:t.addressData.contact,callback:function(a){t.$set(t.addressData,"contact",a)},expression:"addressData.contact"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("联系电话")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入联系电话"},model:{value:t.addressData.mobile,callback:function(a){t.$set(t.addressData,"mobile",a)},expression:"addressData.mobile"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("微信号码")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入微信号"},model:{value:t.addressData.wechat_work,callback:function(a){t.$set(t.addressData,"wechat_work",a)},expression:"addressData.wechat_work"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[t._v("*")]),t._v("截止日期")]),e("v-uni-input",{attrs:{type:"text",disabled:"disabled",placeholder:"请输入开始时间"},model:{value:t.addressData.endtime,callback:function(a){t.$set(t.addressData,"endtime",a)},expression:"addressData.endtime"}}),e("v-uni-picker",{staticClass:"img cu-btn shadow",attrs:{mode:"date",value:t.addressData.endtime},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.endtime.apply(void 0,arguments)}}},[t._v("选择时间")])],1)],1)],1),e("v-uni-view",{staticClass:"padding-xl"},[e("v-uni-button",{staticClass:"cu-btn confirm block bg-blue margin-tb-sm lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.confirm.apply(void 0,arguments)}}},[t._v(t._s(t.confirmbtn))])],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"realmModal"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chkrealm.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue"}),e("v-uni-view",{staticClass:"action text-green",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chkrealm.apply(void 0,arguments)}}},[t._v("确定")])],1),e("v-uni-view",{staticClass:"realmlist"},t._l(t.realm,(function(a,i){return 0==a.pid?e("v-uni-view",{key:i,staticClass:"padding-xs"},[e("v-uni-view",[t._v(t._s(a.name))]),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},t._l(t.realm,(function(i,s){return i.pid==a.id?e("v-uni-view",{key:s,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"box cu-btn block",class:i.checked?"bg-orange":"line-orange",attrs:{"data-value":i.id},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.Chooserealm(i)}}},[t._v(t._s(i.name))])],1):t._e()})),1)],1):t._e()})),1),e("v-uni-view",{staticClass:"nothave"},[t._v("没有找到？联系客服添加分类")])],1)],1),e("v-uni-view",{staticClass:"cu-modal top-modal",class:"platformModal"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chkplatform.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue"}),e("v-uni-view",{staticClass:"action text-green",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chkplatform.apply(void 0,arguments)}}},[t._v("确定")])],1),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},t._l(t.platform,(function(a,i){return e("v-uni-view",{key:i,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"cu-btn orange block",class:a.checked?"bg-orange":"line-orange",attrs:{"data-value":a.name},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChooseCheckbox(a)}}},[t._v(t._s(a.name))])],1)})),1),e("v-uni-view",{staticClass:"nothave"},[t._v("没有找到？联系客服添加分类")])],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"schedule"==t.modalName?"show":""},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-gray"},[t._v(t._s(t.scheduletitle))]),e("v-uni-view",{staticClass:"action text-green",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("确定")])],1),e("v-uni-view",{staticClass:"padding-sm"},[e("v-uni-view",{staticClass:"padding bg-white clearfix"},[e("v-uni-view",{staticClass:"cu-progress"},[e("v-uni-view",{staticClass:"bg-red",style:[{width:t.percent+"%"}]},[t._v(t._s(t.percent+"%"))])],1),e("v-uni-view",{staticStyle:{float:"left","margin-top":"2vw"}},[t._v(t._s(t.scheduletip))]),e("v-uni-view",{staticStyle:{float:"right","margin-top":"2vw"}},[t._v(t._s(t.totalBytesSent)+"MB/"+t._s(t.totalBytesExpectedToSend)+"MB")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"textarea"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t.textarea?e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-green"},[t._v("产品详情")]),e("v-uni-view",{staticClass:"action text-green",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("确定")])],1),e("v-uni-textarea",{staticStyle:{width:"100%",padding:"3vw","background-color":"#fff","text-align":"left"},attrs:{maxlength:"2000",placeholder:"请输入产品详情"},model:{value:t.addressData.details,callback:function(a){t.$set(t.addressData,"details",a)},expression:"addressData.details"}})],1):t._e()],1)],1)},n=[]},a7c9:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.cu-bar[data-v-2dee27ab]{position:fixed;top:0;left:0;right:0;z-index:300;min-height:44px;background-color:#e71d36;-webkit-transform:translateZ(0);transform:translateZ(0)}.cu-bar .logo_left[data-v-2dee27ab]{margin-left:3vw;height:30px}.cuIcon-back[data-v-2dee27ab]{color:#fff;font-size:6vw;float:left;height:44px;width:44px;line-height:44px;text-align:center}.title[data-v-2dee27ab]{float:left;color:#fff;font-size:4vw;line-height:44px;\r\nmargin-left:44px\n}.cu-dialog[data-v-2dee27ab]{background-color:transparent;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-2dee27ab]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-2dee27ab]{width:auto}.cuIcon-close[data-v-2dee27ab]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;-webkit-border-radius:50%;border-radius:50%}',""]),t.exports=a},ad3a:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return s})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.height+44+"px",paddingTop:t.height+"px"}},[1!=t.barid?e("span",{staticClass:"clearfix"},[t.within?e("img",{staticClass:"logo_left",style:{marginLeft:"44px",float:"left"},attrs:{src:t.within,mode:"heightFix"}}):e("span",[t.title?e("span",{staticClass:"title"},[t._v(t._s(t.title))]):e("span",{staticClass:"title"},[t._v("红人速推")])])]):e("span",[t.within?e("img",{staticClass:"logo_left",attrs:{src:t.within,mode:"heightFix"}}):e("img",{staticClass:"logo_left",attrs:{src:"https://www.hongrensutui.com/h5/img/logo_left.png",mode:"heightFix"}})])])},n=[]},b844:function(t,a,e){"use strict";var i=e("e071"),s=e.n(i);s.a},c88c:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".cu-modal[data-v-7721edc8]{z-index:900}.rztitle[data-v-7721edc8]{position:fixed;left:0;right:0;font-size:4.5vw;font-weight:700;background-color:#fff;height:44px;line-height:44px;text-indent:3vw}.cu-bar[data-v-7721edc8]{position:static}.hongren[data-v-7721edc8]{bottom:0}.platform_list[data-v-7721edc8]{margin:3vw;background-color:#fff;-webkit-border-radius:2vw;border-radius:2vw}.platform_list .list[data-v-7721edc8]{overflow:hidden;-webkit-border-radius:2vw;border-radius:2vw;-webkit-box-shadow:1px 1px 2px rgba(26,26,26,.1);box-shadow:1px 1px 2px rgba(26,26,26,.1)}.cu-form-group[data-v-7721edc8]{margin:.5px 15px;padding:0}.cu-form-group .title[data-v-7721edc8]{width:24vw}.cor-e8.text-lg[data-v-7721edc8]{position:relative;left:-1vw;top:1vw}.cu-btn.lg[data-v-7721edc8]{padding:0 3vw}.cu-dialog[data-v-7721edc8]{max-height:60vh}.realmlist[data-v-7721edc8]{max-height:46vh;overflow-x:hidden;overflow-y:auto}.nothave[data-v-7721edc8]{font-size:3.5vw;padding-bottom:3vw;color:#999}.op-0[data-v-7721edc8]{opacity:0}.bg-img[data-v-7721edc8]{margin:1vw 3vw;-webkit-box-shadow:1px 1px 2px rgba(26,26,26,.1);box-shadow:1px 1px 2px rgba(26,26,26,.1)}.grid.col-4.grid-square>uni-view[data-v-7721edc8]:nth-child(4n){margin:1vw 3vw}.cu-btn.img[data-v-7721edc8]{height:24px;font-size:12px;background-color:#e71d36;color:#fff;padding:0 2vw}.text-orange[data-v-7721edc8], .line-orange[data-v-7721edc8], .lines-orange[data-v-7721edc8]{color:#999}.bg-orange[data-v-7721edc8]{background-color:#e71d36;color:#fff;-webkit-border-radius:2px;border-radius:2px}.confirm[data-v-7721edc8]{background-color:#e71d36}uni-radio-group[data-v-7721edc8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box!important;display:-webkit-flex!important;display:flex!important;font-size:3.5vw;-webkit-justify-content:space-around;justify-content:space-around}uni-radio-group span[data-v-7721edc8]{margin-right:1vw}.coent[data-v-7721edc8]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.cu-form-group uni-picker[data-v-7721edc8]::after{display:none}.cu-form-group uni-picker[data-v-7721edc8]{-webkit-box-flex:0;-webkit-flex:none;flex:none;-webkit-border-radius:5px;border-radius:5px}.remarks[data-v-7721edc8]{text-align:center;padding:3vw 3vw;color:#e71d36;line-height:5vw;font-size:3.5vw;background-color:#fff}",""]),t.exports=a},d29e:function(t,a,e){"use strict";var i=e("d53b"),s=e.n(i);s.a},d53b:function(t,a,e){var i=e("c88c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("4f06").default;s("062489a8",i,!0,{sourceMap:!1,shadowMode:!1})},d9d0:function(t,a,e){"use strict";e.r(a);var i=e("8d21"),s=e("43cc");for(var n in s)"default"!==n&&function(t){e.d(a,t,(function(){return s[t]}))}(n);e("d29e");var o,c=e("f0c5"),d=Object(c["a"])(s["default"],i["b"],i["c"],!1,null,"7721edc8",null,!1,i["a"],o);a["default"]=d.exports},e071:function(t,a,e){var i=e("a7c9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("4f06").default;s("0724fb0f",i,!0,{sourceMap:!1,shadowMode:!1})}}]);