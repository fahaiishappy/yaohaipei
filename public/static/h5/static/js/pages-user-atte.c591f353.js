(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-atte"],{"1eb8":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("uni-top-bar"),a("v-uni-view",{staticClass:"hongren",style:{top:t.height+43+"px"}},[a("v-uni-view",{staticClass:"bg-fff"},[a("v-uni-view",{staticClass:"tiptext"},[t._v("认证后享有更多曝光")]),a("v-uni-view",{staticClass:"flex settle"},[a("v-uni-view",{staticClass:"flex-sub bg-red light",class:{active:1==t.choice},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToatte(1)}}},[a("v-uni-view",{staticClass:"cuIcon-group_fill icon"}),1==t.choice?a("v-uni-view",{staticClass:"cuIcon-roundcheckfill"}):t._e(),a("v-uni-view",{staticClass:"title"},[t._v("红人入驻")])],1),a("v-uni-view",{staticClass:"flex-sub bg-blue light",class:{active:2==t.choice},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToatte(2)}}},[a("v-uni-view",{staticClass:"cuIcon-selectionfill icon"}),2==t.choice?a("v-uni-view",{staticClass:"cuIcon-roundcheckfill"}):t._e(),a("v-uni-view",{staticClass:"title"},[t._v("商家入驻")])],1)],1),a("v-uni-view",{staticClass:"paymentbtn",attrs:{"data-target":"Image"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage.apply(void 0,arguments)}}},[t._v("马上入驻")])],1)],1),a("v-uni-view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"bg-img"},[a("img",{staticClass:"wechat",attrs:{src:"https://www.hongrensutui.com/h5/img/wechat.png",mode:"widthFix"}}),a("v-uni-view",{staticClass:"tip"},[t._v("免费入驻微信：zhuoyu10086")]),a("v-uni-view",{staticClass:"cu-bar justify-center text-white"},[a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1)],1)},o=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}))},"4f99":function(t,e,a){var i=a("fb06");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("b0744612",i,!0,{sourceMap:!1,shadowMode:!1})},"7c4a":function(t,e,a){"use strict";a.r(e);var i=a("c4dc"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},babe:function(t,e,a){"use strict";a.r(e);var i=a("1eb8"),n=a("7c4a");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("e476");var s,c=a("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"1420fe1a",null,!1,i["a"],s);e["default"]=u.exports},c4dc:function(t,e,a){"use strict";(function(t){var i=a("ee27");a("d3b7"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("9dcd")),o={components:{uniTopBar:n.default},data:function(){return{modalName:null,choice:"",userInfo:"",height:""}},onLoad:function(t){var e=this;this.height=this.StatusBar,t.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",t.invite)),t.code?uni.getStorage({key:"invite",success:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code,invite:a.data},method:"POST",success:function(t){uni.removeStorageSync("invite"),e.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})},fail:function(a){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:t.code},method:"POST",success:function(t){e.userInfo=t.data.data.info,uni.setStorageSync("userInfo",t.data.data.info),e.share(t.data.data.info.company_id,t.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(t){e.updateuser(t.data.id)},fail:function(t){wxlogin()}})},methods:{updateuser:function(e){var a=this;e&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:e},method:"POST",success:function(e){e.data.data.info?(t.log(e.data.data.info),a.userInfo=e.data.data.info,uni.setStorageSync("userInfo",e.data.data.info),a.share(e.data.data.info.company_id,e.data.data.info.id)):wxlogin()}})},navToatte:function(t){this.choice=t},navToDetailPage:function(t){var e=this;if(e.userInfo)if(1==e.choice)if(2==e.userInfo.type)uni.navigateTo({url:"/pages/user/cewebritymanage"});else{if(1==e.userInfo.type)return uni.showToast({icon:"none",title:"您已经入驻商家，不能再入驻红人了哦！"}),!1;uni.navigateTo({url:"/pages/user/attewh"})}else if(2==e.choice)if(1==e.userInfo.type){if(1==e.userInfo.examine)return uni.showToast({icon:"none",title:"您的商家入驻信息正在审核中..."}),!1;2==e.userInfo.examine?uni.navigateTo({url:"/pages/user/supply_list"}):uni.navigateTo({url:"/pages/user/attesj"})}else{if(2==e.userInfo.type)return uni.showToast({icon:"none",title:"您已经入驻红人，不能再入驻商家了哦！"}),!1;uni.navigateTo({url:"/pages/user/attesj"})}else uni.showToast({icon:"none",title:"请选择商家或红人"});else uni.showModal({title:"提示",content:"当前未登录，是否登录",success:function(t){t.confirm&&wxlogin()}})},hideModal:function(t){this.modalName=null},share:function(t){function e(e,a){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var a="红人速推 | 网红直播带货一站式服务平台",i="红人速推就是网红多 商家多，直播带货就上红人速推。",n="https://www.hongrensutui.com/uploads/share/home_logo2.png";share(a,i,n,e)}))}};e.default=o}).call(this,a("5a52")["default"])},e476:function(t,e,a){"use strict";var i=a("4f99"),n=a.n(i);n.a},fb06:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.settle[data-v-1420fe1a]{padding:5vw}.tiptext[data-v-1420fe1a]{font-size:4.4vw;padding-top:10vw;text-align:center}.bg-fff[data-v-1420fe1a]{padding-bottom:10vw}.settle .flex-sub[data-v-1420fe1a]{position:relative;margin:5vw;text-align:center;height:45vw;border-radius:1.5vw;border:1px solid #fff}.settle .title[data-v-1420fe1a]{margin-top:26vw;font-size:4.5vw;font-weight:700}.settle .cuIcon-roundcheckfill[data-v-1420fe1a]{position:absolute;font-size:7vw;left:50%;margin-left:-3.5vw;bottom:3vw}.settle .icon[data-v-1420fe1a]{position:absolute;font-size:18vw;left:8.5vw;top:6vw}.paymentbtn[data-v-1420fe1a]{font-size:4.8vw;font-weight:700;margin:auto;width:80vw;text-align:center;line-height:12vw;border-radius:12vw;background-color:#e71d36;color:#fff;box-shadow:0 0 0 6px hsla(0,0%,87.1%,.3)}.bg-red[data-v-1420fe1a]{background-color:#fff0ff;color:#ff6f94}.bg-red.active[data-v-1420fe1a]{border:1px solid #ff6f94}.bg-blue[data-v-1420fe1a]{background-color:#f0f4ff;color:#7183ee}.bg-blue.active[data-v-1420fe1a]{border:1px solid #7183ee}.cu-dialog[data-v-1420fe1a]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-1420fe1a]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-1420fe1a]{width:auto}.cuIcon-close[data-v-1420fe1a]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}.wechat[data-v-1420fe1a]{width:200px;height:200px}.tip[data-v-1420fe1a]{color:#fff;margin:2vw 0;font-size:3.4vw}',""]),t.exports=e}}]);