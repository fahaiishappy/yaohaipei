(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-attewh"],{"25fc":function(a,t,e){"use strict";var s=e("a496"),i=e.n(s);i.a},"5f8e":function(a,t,e){"use strict";var s={regionPicker:e("c0a4").default},i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",[e("uni-top-bar"),e("v-uni-view",{staticClass:"rztitle",style:{top:a.height+43+"px"}},[a._v("红人入驻")]),e("v-uni-view",{staticClass:"hongren",style:{top:a.height+43+44+"px"}},[3==a.examine&&a.remarks?e("v-uni-view",{staticClass:"remarks"},[a._v("未通过原因："+a._s(a.remarks))]):a._e(),e("v-uni-view",{staticClass:"platform_list clearfix"},[e("v-uni-view",{staticClass:"list clearfix"},[e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("红人昵称")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入红人昵称"},model:{value:a.addressData.nickname,callback:function(t){a.$set(a.addressData,"nickname",t)},expression:"addressData.nickname"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("红人头像")]),e("v-uni-view",{staticClass:"coent",staticStyle:{color:"red","font-size":"3.5vw"}},[a._v("请上传正方形头像")]),e("v-uni-button",{staticClass:"img cu-btn shadow",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.avatarImage.apply(void 0,arguments)}}},[a._v("上传头像")])],1),a.addressData.avatar?e("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[e("v-uni-view",{staticClass:"bg-img"},[e("v-uni-image",{attrs:{src:a.addressData.avatar,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"cu-tag bg-red",on:{click:function(t){t.stopPropagation(),arguments[0]=t=a.$handleEvent(t),a.DelImg("avatar")}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1):a._e(),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("粉丝量(w)")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入粉丝量"},model:{value:a.addressData.fans,callback:function(t){a.$set(a.addressData,"fans",t)},expression:"addressData.fans"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("所在地区")]),a.addressData.province?e("v-uni-view",{staticClass:"coent"},[a._v(a._s(a.addressData.province)+","+a._s(a.addressData.city)+","+a._s(a.addressData.area))]):a._e(),a.loadSurvey?e("region-picker",{attrs:{value:a.addressData.code},on:{change:function(t){arguments[0]=t=a.$handleEvent(t),a.picker_change.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"img cu-btn shadow picker"},[a._v("选择地区")])],1):a._e()],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("红人分类")]),e("v-uni-view",{staticClass:"coent"},[a._v(a._s(a.addressData.category))]),e("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"categoryModal"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.showModal.apply(void 0,arguments)}}},[a._v("选择分类")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("红人标签")]),e("v-uni-view",{staticClass:"coent"},[a._v(a._s(a.addressData.tag))]),e("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"tagModal"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.showModal.apply(void 0,arguments)}}},[a._v("选择标签")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("合作形式")]),e("v-uni-view",{staticClass:"coent"},[a._v(a._s(a.addressData.cooperation))]),e("v-uni-button",{staticClass:"img cu-btn shadow",attrs:{"data-target":"cooperationModal"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.showModal.apply(void 0,arguments)}}},[a._v("合作形式")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("所属平台")]),e("v-uni-radio-group",{staticClass:"block",on:{change:function(t){arguments[0]=t=a.$handleEvent(t),a.RadioPlatform.apply(void 0,arguments)}}},[e("v-uni-view",[e("span",[a._v("抖音")]),e("v-uni-radio",{staticClass:"blue radio sm",class:"抖音"==a.addressData.platform?"checked":"",attrs:{checked:"抖音"==a.addressData.platform,value:"抖音"}})],1),e("v-uni-view",[e("span",[a._v("快手")]),e("v-uni-radio",{staticClass:"blue radio sm",class:"快手"==a.addressData.platform?"checked":"",attrs:{checked:"快手"==a.addressData.platform,value:"快手"}})],1)],1)],1),"抖音"==a.addressData.platform?e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("抖音号")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入抖音号"},model:{value:a.addressData.douyin_number,callback:function(t){a.$set(a.addressData,"douyin_number",t)},expression:"addressData.douyin_number"}})],1):a._e(),"快手"==a.addressData.platform?e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("快手号")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入快手号"},model:{value:a.addressData.kuaishou_number,callback:function(t){a.$set(a.addressData,"kuaishou_number",t)},expression:"addressData.kuaishou_number"}})],1):a._e(),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("收费形式")]),e("v-uni-radio-group",{staticClass:"block",on:{change:function(t){arguments[0]=t=a.$handleEvent(t),a.RadioCharge.apply(void 0,arguments)}}},[e("v-uni-view",[e("span",[a._v("预付费")]),e("v-uni-radio",{staticClass:"blue radio sm",class:1==a.addressData.pay_type?"checked":"",attrs:{checked:1==a.addressData.pay_type,value:"1"}})],1),e("v-uni-view",[e("span",[a._v("纯佣金")]),e("v-uni-radio",{staticClass:"blue radio sm",class:2==a.addressData.pay_type?"checked":"",attrs:{checked:2==a.addressData.pay_type,value:"2"}})],1),e("v-uni-view",[e("span",[a._v("预付+纯佣")]),e("v-uni-radio",{staticClass:"blue radio sm",class:3==a.addressData.pay_type?"checked":"",attrs:{checked:3==a.addressData.pay_type,value:"3"}})],1)],1)],1),1==a.addressData.pay_type||3==a.addressData.pay_type?e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("预付费(w)")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入预付费"},model:{value:a.charge1,callback:function(t){a.charge1=t},expression:"charge1"}})],1):a._e(),2==a.addressData.pay_type||3==a.addressData.pay_type?e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("佣金")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入佣金"},model:{value:a.charge2,callback:function(t){a.charge2=t},expression:"charge2"}})],1):a._e(),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg op-0"},[a._v("*")]),a._v("联系电话")]),e("v-uni-input",{attrs:{type:"number",placeholder:"请输入联系电话"},model:{value:a.addressData.mobile,callback:function(t){a.$set(a.addressData,"mobile",t)},expression:"addressData.mobile"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[e("span",{staticClass:"cor-e8 text-lg"},[a._v("*")]),a._v("微信号码")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入微信号"},model:{value:a.addressData.wechat_work,callback:function(t){a.$set(a.addressData,"wechat_work",t)},expression:"addressData.wechat_work"}})],1)],1)],1),e("v-uni-view",{staticClass:"padding-xl"},[e("v-uni-button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg confirm",attrs:{disabled:a.btn},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.confirm.apply(void 0,arguments)}}},[a._v("入驻")])],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"categoryModal"==a.modalName?"show":"",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.chkcategory.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(t){t.stopPropagation(),arguments[0]=t=a.$handleEvent(t)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue"}),e("v-uni-view",{staticClass:"action text-green",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.chkcategory.apply(void 0,arguments)}}},[a._v("确定")])],1),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},a._l(a.category,(function(t,s){return e("v-uni-view",{key:s,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"box cu-btn block",class:t.checked?"bg-orange":"line-orange",attrs:{"data-value":t.name},on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.ChooseCheckbox(t)}}},[a._v(a._s(t.name))])],1)})),1),e("v-uni-view",{staticClass:"nothave"},[a._v("没有找到？联系客服添加分类")])],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"tagModal"==a.modalName?"show":"",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.chktag.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(t){t.stopPropagation(),arguments[0]=t=a.$handleEvent(t)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue"}),e("v-uni-view",{staticClass:"action text-green",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.chktag.apply(void 0,arguments)}}},[a._v("确定")])],1),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},a._l(a.tag,(function(t,s){return e("v-uni-view",{key:s,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"box cu-btn block",class:t.checked?"bg-orange":"line-orange",attrs:{"data-value":t.name},on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.ChooseCheckbox(t)}}},[a._v(a._s(t.name))])],1)})),1),e("v-uni-view",{staticClass:"nothave"},[a._v("没有找到？联系客服添加分类")])],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"cooperationModal"==a.modalName?"show":"",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.chkcooperation.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(t){t.stopPropagation(),arguments[0]=t=a.$handleEvent(t)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue"}),e("v-uni-view",{staticClass:"action text-green",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.chkcooperation.apply(void 0,arguments)}}},[a._v("确定")])],1),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},a._l(a.cooperation,(function(t,s){return e("v-uni-view",{key:s,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"box cu-btn block",class:t.checked?"bg-orange":"line-orange",attrs:{"data-value":t.name},on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.ChooseCheckbox(t)}}},[a._v(a._s(t.name))])],1)})),1),e("v-uni-view",{staticClass:"nothave"},[a._v("没有找到？联系客服添加分类")])],1)],1)],1)},n=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return s}))},"7f1f":function(a,t,e){"use strict";e.r(t);var s=e("5f8e"),i=e("fd75");for(var n in i)"default"!==n&&function(a){e.d(t,a,(function(){return i[a]}))}(n);e("25fc");var o,c=e("f0c5"),r=Object(c["a"])(i["default"],s["b"],s["c"],!1,null,"3071e47c",null,!1,s["a"],o);t["default"]=r.exports},9268:function(a,t,e){"use strict";(function(a){var s=e("ee27");e("4160"),e("4d63"),e("ac1f"),e("25f0"),e("1276"),e("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(e("d654")),n={components:{uniTopBar:i.default},data:function(){return{btn:!1,modalName:null,addressData:{mid:"",nickname:"",avatar:"",fans:"",pay_type:1,price:"",category:"",tag:"",province:"",city:"",area:"",code:"",cooperation:"",platform:"抖音",douyin_number:"",kuaishou_number:"",mobile:"",wechat_work:""},charge1:"",charge2:"",category:"",tag:"",cooperation:"",userInfo:"",height:"",examine:"",remarks:"",loadSurvey:!0}},onLoad:function(a){a.id?(this.addressData.id=a.id,this.attewh(a.id)):(this.cewebritycategory(),this.cewebritytag(),this.cewebritycooperation());var t=this;this.height=this.StatusBar,uni.getStorage({key:"userInfo",success:function(a){""!=a.data&&null!=a.data&&(t.userInfo=a.data,t.addressData.mid=t.userInfo.id)}})},methods:{confirm:function(){return this.addressData.nickname?this.addressData.avatar?this.addressData.fans?this.addressData.province?this.addressData.category?this.addressData.tag?this.addressData.cooperation?"抖音"!=this.addressData.platform||this.addressData.douyin_number?"快手"!=this.addressData.platform||this.addressData.kuaishou_number?"1"!=this.addressData.pay_type||this.charge1?"2"!=this.addressData.pay_type||this.charge2?"3"!=this.addressData.pay_type||this.charge1?"3"!=this.addressData.pay_type||this.charge2?this.addressData.mobile&&!this.checkMobile(this.addressData.mobile)?(uni.showToast({title:"手机号码不正确",icon:"none",duration:3e3}),!1):this.addressData.wechat_work?("1"==this.addressData.pay_type&&(this.addressData.price=this.charge1+"w"),"2"==this.addressData.pay_type&&(this.addressData.price=this.charge2+"%"),"3"==this.addressData.pay_type&&(this.addressData.price=this.charge1+"w+"+this.charge2+"%"),void uni.request({url:"https://www.hongrensutui.com/api/index/Cewebrityadd",data:this.addressData,method:"post",header:{"Content-Type":"application/x-www-form-urlencoded"},dataType:"json",success:function(t){a("log",t.data," at pages/user/attewh.vue:370"),t.data.error?uni.showToast({icon:"none",title:t.data.message.info}):(uni.showToast({icon:"none",title:t.data.data.info}),setTimeout((function(){uni.navigateBack({delta:2})}),2e3))},fail:function(t){a("log",t," at pages/user/attewh.vue:390"),uni.showToast({icon:"none",title:"入驻失败！"}),this.btn=!1}})):(uni.showToast({title:"微信号不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"佣金不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"预付费不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"佣金不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"预付费不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"快手号不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"抖音号不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"合作形式不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"红人 标签不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"红人分类不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"所在地区不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"粉丝量不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"红人头像不能为空",icon:"none",duration:3e3}),!1):(uni.showToast({title:"红人昵称不能为空",icon:"none",duration:3e3}),!1)},attewh:function(a){var t=this,e=this;uni.request({url:"https://www.hongrensutui.com/api/index/Releasedetails",data:{id:a},method:"POST",success:function(a){if(a.data.data.list){var s=a.data.data.list;if(e.addressData.mid=s.mid,e.addressData.nickname=s.nickname,e.addressData.avatar=s.avatar,e.addressData.fans=s.fans,e.addressData.pay_type=s.pay_type,e.addressData.price=s.price,e.addressData.category=s.category,e.addressData.tag=s.tag,e.addressData.province=s.province,e.addressData.city=s.city,e.addressData.area=s.area,e.addressData.code=s.code,e.addressData.cooperation=s.cooperation,e.addressData.platform=s.platform,e.addressData.douyin_number=s.douyin_number,e.addressData.kuaishou_number=s.kuaishou_number,e.addressData.mobile=s.mobile,e.addressData.wechat_work=s.wechat_work,e.examine=s.examine,e.remarks=s.remarks,1==s.pay_type)for(var i=s.price.length-1,n=0;n<i;n++)e.charge1+=s.price[n];if(2==s.pay_type)for(var o=s.price.length-1,c=0;c<o;c++)e.charge2+=s.price[c];if(3==s.pay_type){for(var r=s.price.split("+"),d=r[0].length-1,l=r[1].length-1,u=0;u<d;u++)e.charge1+=r[0][u];for(var v=0;v<l;v++)e.charge2+=r[1][v]}t.cewebritycategory(s.category),t.cewebritytag(s.tag),t.cewebritycooperation(s.cooperation),e.loadSurvey=!1,e.$nextTick((function(){e.loadSurvey=!0}))}}})},cewebritycategory:function(a){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/cewebritycategory",data:{category:a},method:"POST",success:function(a){t.category=a.data.data.list}})},cewebritytag:function(a){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/cewebritytag",data:{tag:a},method:"POST",success:function(a){t.tag=a.data.data.list}})},cewebritycooperation:function(a){var t=this;uni.request({url:"https://www.hongrensutui.com/api/index/cewebritycooperation",data:{cooperation:a},method:"POST",success:function(a){t.cooperation=a.data.data.list}})},avatarImage:function(){var a=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){var e=t.tempFilePaths;uni.uploadFile({url:"https://www.hongrensutui.com/api/upload/index",filePath:e[0],name:"image",success:function(t){var e=JSON.parse(t.data);a.addressData.avatar=e.data.url}})}})},DelImg:function(a){var t=this;uni.showModal({title:"",content:"确定要删除图片么？",cancelText:"取消",confirmText:"确认",success:function(a){a.confirm&&(t.addressData.avatar="")}})},checkMobile:function(a){return RegExp(/^1[34578]\d{9}$/).test(a)},showModal:function(a){this.modalName=a.currentTarget.dataset.target},hideModal:function(a){this.modalName=null},chkcategory:function(a){var t=this,e=0,s=0;this.addressData.category="",this.category.forEach((function(a,t){1==a.checked&&e++})),this.category.forEach((function(a,i){1==a.checked&&(s++,t.addressData.category+=s!=e?a.name+",":a.name)})),this.modalName=null},chktag:function(a){var t=this,e=0,s=0;this.addressData.tag="",this.tag.forEach((function(a,t){1==a.checked&&e++})),this.tag.forEach((function(a,i){1==a.checked&&(s++,t.addressData.tag+=s!=e?a.name+",":a.name)})),this.modalName=null},chkplatform:function(a){var t=this,e=0,s=0;this.addressData.platform="",this.platform.forEach((function(a,t){1==a.checked&&e++})),this.platform.forEach((function(a,i){1==a.checked&&(s++,t.addressData.platform+=s!=e?a.name+",":a.name)})),this.modalName=null},chkcooperation:function(a){var t=this,e=0,s=0;this.addressData.cooperation="",this.cooperation.forEach((function(a,t){1==a.checked&&e++})),this.cooperation.forEach((function(a,i){1==a.checked&&(s++,t.addressData.cooperation+=s!=e?a.name+",":a.name)})),this.modalName=null},starttime:function(a){this.addressData.livebroadcast=a.detail.value},picker_change:function(a){var t=this;t.addressData.code=a.detail.code,t.addressData.province=a.detail.value[0],t.addressData.city=a.detail.value[1],t.addressData.area=a.detail.value[2]},RadioPlatform:function(a){this.addressData.platform=a.detail.value,"抖音"==this.addressData.platform&&(this.addressData.kuaishou_number=""),"快手"==this.addressData.platform&&(this.addressData.douyin_number="")},RadioCharge:function(a){this.addressData.pay_type=a.detail.value,"1"==this.addressData.pay_type&&(this.charge2=""),"2"==this.addressData.pay_type&&(this.charge1="")},ChooseCheckbox:function(a){a.checked=!a.checked}}};t.default=n}).call(this,e("0de9")["log"])},9495:function(a,t,e){var s=e("24fb");t=s(!1),t.push([a.i,".rztitle[data-v-3071e47c]{position:fixed;left:0;right:0;font-size:4.5vw;font-weight:700;background-color:#fff;height:44px;line-height:44px;text-indent:3vw}.cu-bar[data-v-3071e47c]{position:static}.hongren[data-v-3071e47c]{bottom:0}.platform_list[data-v-3071e47c]{margin:3vw;background-color:#fff;border-radius:2vw}.platform_list .list[data-v-3071e47c]{overflow:hidden;border-radius:2vw;box-shadow:1px 1px 2px rgba(26,26,26,.1)}.cu-form-group[data-v-3071e47c]{margin:.5px 15px;padding:0}.cu-form-group .title[data-v-3071e47c]{width:24vw}.cor-e8.text-lg[data-v-3071e47c]{position:relative;left:-1vw;top:1vw}.cu-btn.lg[data-v-3071e47c]{padding:0 3vw}.nothave[data-v-3071e47c]{font-size:3.5vw;padding-bottom:3vw;color:#999}.op-0[data-v-3071e47c]{opacity:0}.bg-img[data-v-3071e47c]:first-child{margin:1vw 3vw}.bg-img[data-v-3071e47c]{margin-right:1vw 3vw 1vw 0;box-shadow:1px 1px 2px rgba(26,26,26,.1)}.cu-btn.img[data-v-3071e47c]{height:24px;font-size:12px;background-color:#e71d36;color:#fff;padding:0 2vw}.text-orange[data-v-3071e47c], .line-orange[data-v-3071e47c], .lines-orange[data-v-3071e47c]{color:#999}.bg-orange[data-v-3071e47c]{background-color:#e71d36;color:#fff;border-radius:2px}.confirm[data-v-3071e47c]{background-color:#e71d36}.coent[data-v-3071e47c]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.cu-form-group .title.live[data-v-3071e47c]{height:auto;line-height:1.4;text-align:center}uni-radio-group[data-v-3071e47c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box!important;display:-webkit-flex!important;display:flex!important;font-size:3.5vw;-webkit-justify-content:space-around;justify-content:space-around}uni-radio-group span[data-v-3071e47c]{margin-right:1vw}.coent[data-v-3071e47c]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.cu-form-group uni-picker[data-v-3071e47c]::after{display:none}.cu-form-group uni-picker[data-v-3071e47c]{-webkit-box-flex:0;-webkit-flex:none;flex:none;border-radius:5px}.remarks[data-v-3071e47c]{text-align:center;padding:3vw 3vw;color:#e71d36;line-height:5vw;font-size:3.5vw;background-color:#fff}",""]),a.exports=t},a496:function(a,t,e){var s=e("9495");"string"===typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);var i=e("4f06").default;i("7d1dabc9",s,!0,{sourceMap:!1,shadowMode:!1})},fd75:function(a,t,e){"use strict";e.r(t);var s=e("9268"),i=e.n(s);for(var n in s)"default"!==n&&function(a){e.d(t,a,(function(){return s[a]}))}(n);t["default"]=i.a}}]);