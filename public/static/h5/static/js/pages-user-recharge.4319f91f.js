(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-recharge"],{"33f6":function(t,a,e){"use strict";(function(t){var i=e("ee27");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("9dcd")),s={components:{uniTopBar:n.default},data:function(){return{collectlist:"",nodata:"暂无查看记录",userInfo:[],height:""}},onLoad:function(t){var a=this;this.height=this.StatusBar,this.getsee(),uni.getStorage({key:"userInfo",success:function(t){""!=t.data&&null!=t.data&&(a.userInfo=t.data)}})},methods:{getsee:function(){var a=this;uni.getStorage({key:"userInfo",success:function(e){a.userInfo=e.data,t.log(a.userInfo),uni.request({url:"https://www.hongrensutui.com/api/index/getsee",data:{openid:a.userInfo.openid,xopenid:a.userInfo.xopenid},method:"POST",success:function(t){""!=t.data&&(a.collectlist=t.data.data.info)}})}})},collect:function(t){var a=this;a.userInfo.id?t.show?(uni.showToast({title:"已取消关注",icon:"none",duration:2e3}),a.collectClick(t)):(uni.showToast({title:"已添加关注",icon:"none",duration:2e3}),a.collectClick(t)):uni.showToast({title:"您还未登录，请在 我的 界面登录后操作",icon:"none",duration:3e3})},collectClick:function(t){var a=this;uni.request({url:"https://www.hongrensutui.com/api/index/collect",data:{id:a.userInfo.id,collectid:t.id},method:"POST",success:function(a){t.show=!t.show}})},navToDetailPage:function(t,a){a&&(t=t+"?id="+a),uni.navigateTo({url:"/pages/"+t})}}};a.default=s}).call(this,e("5a52")["default"])},"37f2":function(t,a,e){var i=e("d03c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("3a93518e",i,!0,{sourceMap:!1,shadowMode:!1})},"4a95":function(t,a,e){"use strict";e.r(a);var i=e("33f6"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},"880d":function(t,a,e){"use strict";e.r(a);var i=e("c832"),n=e("4a95");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("eac1");var l,o=e("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"585a0742",null,!1,i["a"],l);a["default"]=c.exports},c832:function(t,a,e){"use strict";var i,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("uni-top-bar"),e("v-uni-view",{staticClass:"category clearfix",style:{top:t.height+43+"px"}},[e("v-uni-view",{staticClass:"ranking"},[t._v("#")]),e("v-uni-view",{staticClass:"avatar"},[t._v("头像")]),e("v-uni-view",{staticClass:"number"},[t._v("昵称")]),e("v-uni-view",{staticClass:"fans"},[t._v("粉丝")])],1),e("v-uni-view",{staticClass:"hongren",style:{top:t.height+88+"px"}},[e("v-uni-view",{staticClass:"item"},[t._l(t.collectlist,(function(a,i){return e("v-uni-view",{key:i,staticClass:"list clearfix",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage("platform/celebrity",a.id)}}},[i<3?e("v-uni-view",{staticClass:"ranking cor-e8"},[t._v(t._s(i+1))]):t._e(),i>=3?e("v-uni-view",{staticClass:"ranking "},[t._v(t._s(i+1))]):t._e(),e("img",{attrs:{src:a["avatar"],mode:"widthFix"}}),e("v-uni-view",{staticClass:"number"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(a.nickname))]),e("v-uni-view",{staticClass:"lable clearfix"},["1"==a.pay_type?e("v-uni-view",{staticClass:"cu-tag round bg-red light"},[t._v("预付费")]):t._e(),"2"==a.pay_type?e("v-uni-view",{staticClass:"cu-tag round bg-orange light"},[t._v("纯佣金")]):t._e(),"3"==a.pay_type?e("v-uni-view",{staticClass:"cu-tag round bg-purple light"},[t._v("预付费+纯佣金")]):t._e(),t._l(a.cooperation,(function(a,i){return i<1?e("v-uni-view",{key:i,staticClass:"cu-tag round bg-grey light"},[t._v(t._s(a))]):t._e()}))],2)],1),e("v-uni-view",{staticClass:"number fr"},[e("v-uni-view",{staticClass:"name cor-e8"},[t._v(t._s(a.fans)+"w")]),e("v-uni-view",{staticClass:"lable clearfix"},[e("v-uni-view",{staticClass:"lablelist collect",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.collect(a)}}},[e("v-uni-view",{staticClass:"lg text-gray",class:a.show?"cuIcon-likefill":"cuIcon-like"})],1)],1)],1)],1)})),""==t.collectlist&&t.collectlist.length<=0?e("v-uni-view",{staticClass:"no-data"},[t._v("暂无查看记录")]):t._e()],2)],1)],1)},s=[];e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}))},d03c:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".hongren[data-v-585a0742]{bottom:0}.category[data-v-585a0742]{position:fixed;left:0;right:0;height:44px;line-height:44px;padding:0 3vw;font-size:4vw;color:#999;background:#f7f7f7;z-index:202;box-shadow:1px 1px 2px rgba(26,26,26,.1)}.category .ranking[data-v-585a0742],\n.item .list .ranking[data-v-585a0742]{width:8vw;float:left}.category .number[data-v-585a0742]{padding-left:6.6vw}.category .avatar[data-v-585a0742],\n.category .number[data-v-585a0742],\n.item .list .number[data-v-585a0742]{float:left}.category .fans[data-v-585a0742],\n.item .list .fans[data-v-585a0742]{float:right}.category .avatar[data-v-585a0742]{padding-left:3.5vw}.item[data-v-585a0742]{padding:0}.item .list .number .name[data-v-585a0742]{font-size:4vw;line-height:8vw}.item .list[data-v-585a0742]{line-height:15vw;font-size:4vw;padding:3vw}.item .list img[data-v-585a0742]{float:left;width:15vw;height:15vw;border-radius:50%;margin-right:3vw}.item .list .number .lable[data-v-585a0742]{line-height:0;padding:0}.item .list .number .lable .lablelist[data-v-585a0742]{float:left;margin-right:1.5vw;text-align:center;font-size:3vw;border:1px solid #ddd;border-radius:2vw;line-height:0;color:#999;padding:2.5vw 2vw}.item .list .number.fr[data-v-585a0742]{float:right!important}.item .list .number .lable .lablelist.collect[data-v-585a0742]{border:none;padding:2.5vw 0;margin:0;float:right}.item .list .number .lable .lablelist.collect .cuIcon-like[data-v-585a0742]{font-size:6vw}.item .list .number .lable .lablelist.collect .cuIcon-likefill[data-v-585a0742]{font-size:6vw;color:#ffce6e}.item .list .fans[data-v-585a0742]{font-weight:700}.item .list[data-v-585a0742]:nth-of-type(even){background:#fcfbff}.order_text[data-v-585a0742]{padding:10vw;color:#999}",""]),t.exports=a},eac1:function(t,a,e){"use strict";var i=e("37f2"),n=e.n(i);n.a}}]);