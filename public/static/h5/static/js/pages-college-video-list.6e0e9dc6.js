(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-college-video-list"],{1358:function(n,t,e){"use strict";e.r(t);var i=e("8c09"),a=e("88d1");for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);e("81ae");var s,d=e("f0c5"),r=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"70bbe80e",null,!1,i["a"],s);t["default"]=r.exports},"1bea":function(n,t,e){"use strict";var i=e("ee27");e("d3b7"),e("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(e("9dcd")),o=i(e("7f51")),s=i(e("7265")),d={mixins:[o.default,s.default],components:{uniTopBar:a.default},data:function(){return{downOption:{use:!1,isLock:!0},upOption:{use:!1,isLock:!0,toTop:{src:""}},userInfo:"",height:"400px",topheight:0,video:"",toptitle:"课程列表",card_id:0,course:0,src:"",poster:"",modalName:null,id:"",name:""}},props:{tabs:Array,bottom:String},onLoad:function(n){var t=this,e=this;n.id&&(e.id=n.id),n.name&&(e.name=n.name),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",uni.request({url:"https://www.hongrensutui.com/api/index/course",success:function(n){t.course=n.data.data.course}}),n.invite&&(uni.getStorageSync("invite")||uni.setStorageSync("invite",n.invite)),n.code?uni.getStorage({key:"invite",success:function(t){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:n.code,invite:t.data},method:"POST",success:function(n){uni.removeStorageSync("invite"),uni.setStorageSync("userInfo",n.data.data.info),e.userInfo=n.data.data.info,e.videolist(),e.share(n.data.data.info.company_id,n.data.data.info.id)}})},fail:function(t){uni.request({url:"https://www.hongrensutui.com/api/index/user",data:{code:n.code},method:"POST",success:function(n){uni.setStorageSync("userInfo",n.data.data.info),e.userInfo=n.data.data.info,e.videolist(),e.share(n.data.data.info.company_id,n.data.data.info.id)}})}}):uni.getStorage({key:"userInfo",success:function(n){""!=n.data&&null!=n.data?e.updateuser(n.data.id):wxlogin()},fail:function(n){wxlogin()}})},methods:{updateuser:function(n){var t=this;n&&uni.request({url:"https://www.hongrensutui.com/api/index/userinfo",data:{id:n},method:"POST",success:function(n){n.data.data.info?(uni.setStorageSync("userInfo",n.data.data.info),t.userInfo=n.data.data.info,t.videolist(),t.share(n.data.data.info.company_id,n.data.data.info.id)):wxlogin()}})},downCallback:function(n){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(n){},videolist:function(){var n=this;uni.request({url:"https://www.hongrensutui.com/api/index/videolist",method:"POST",data:{mid:n.userInfo.id,id:n.id},success:function(t){t.data.data.info&&(n.video=t.data.data.info)}})},test:function(n,t){var e=this;e.src=t,e.poster=n,e.modalName="Image"},navToDetailPage:function(n){uni.navigateTo({url:"/pages/college/coursedetails?id="+n})},hideModal:function(n){this.modalName=null},share:function(n){function t(t,e){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}((function(n,t){var e="红人速推学院 | 抖音、快手指定线上学习平台",i="学院涵盖抖音、快手策略打法，为业界输出专业的营销课程，点击查看详情",a="https://www.hongrensutui.com/uploads/share/college_video_logo.png";share(e,i,a,t)}))}};t.default=d},"81ae":function(n,t,e){"use strict";var i=e("e52c"),a=e.n(i);a.a},"88d1":function(n,t,e){"use strict";e.r(t);var i=e("1bea"),a=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=a.a},"8c09":function(n,t,e){"use strict";var i={mescrollUni:e("c499").default},a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("uni-top-bar",{attrs:{title:n.toptitle}}),e("mescroll-uni",{ref:"mescrollRef",attrs:{top:n.topheight+43+"px",down:n.downOption,up:n.upOption},on:{init:function(t){arguments[0]=t=n.$handleEvent(t),n.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=n.$handleEvent(t),n.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=n.$handleEvent(t),n.upCallback.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"videolist"},[e("v-uni-view",{staticClass:"titletop"},[e("v-uni-view",{staticClass:"name"},[n._v(n._s(n.name))])],1),n._l(n.video,(function(t,i){return e("v-uni-view",{key:i,staticClass:"item clearfix",attrs:{"data-target":"Image"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.navToDetailPage(t.id)}}},[1==t.free?e("img",{staticClass:"free",attrs:{src:"https://www.hongrensutui.com/h5/img/free.png",mode:"widthFix"}}):n._e(),2==t.free?e("img",{staticClass:"free",attrs:{src:"https://www.hongrensutui.com/h5/img/free2.png",mode:"widthFix"}}):n._e(),t.img?e("img",{staticClass:"ptgz",attrs:{src:t["img"],mode:"widthFix"}}):e("img",{staticClass:"ptgz",attrs:{src:"https://www.hongrensutui.com/h5/img/noimg.jpg",mode:"widthFix"}}),e("v-uni-view",{staticClass:"title"},[e("v-uni-view",{staticClass:"name"},[n._v(n._s(t.title))]),e("v-uni-view",{staticClass:"cu-tag light bg-red round sm hits"},[n._v("已有"+n._s(t.views)+"人学习")])],1)],1)}))],2),e("v-uni-view",{staticClass:"cu-modal",class:"Image"==n.modalName?"show":""},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"bg-img"},["Image"==n.modalName?e("v-uni-video",{attrs:{controls:!0,poster:n.poster,autoplay:"true",src:n.src}}):n._e(),e("v-uni-view",{staticClass:"cu-bar justify-center text-white"},[e("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.hideModal.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"Imageno"==n.modalName?"show":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"auth"},[e("v-uni-view",{staticClass:"title"},[n._v("十分抱歉，由于相关规范，小程序暂不支持查看。")])],1)],1)],1)],1)],1)},o=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}))},c121:function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.videolist[data-v-70bbe80e]{background-color:#fff}.bg-fff[data-v-70bbe80e]{padding-bottom:3vw}.bg-fff .item[data-v-70bbe80e]:last-child{margin-bottom:0}.titletop[data-v-70bbe80e]{padding:5vw 3vw;font-size:4.5vw;font-weight:700;background-color:#fff}.titletop .name[data-v-70bbe80e]{background-image:url(https://www.hongrensutui.com/h5/img/wzbg2.png);background-repeat:repeat-x;background-position:bottom;display:inline-block;padding:0 1vw}.item[data-v-70bbe80e]{margin:0 3vw;width:94vw;background-color:#f7f7f7;border-radius:1.5vw;margin-bottom:3vw;position:relative}.item .free[data-v-70bbe80e]{position:absolute;width:8vw;border-top-left-radius:1.5vw;border-bottom-right-radius:1.5vw;left:0;z-index:100}.item .ptgz[data-v-70bbe80e]{float:left;width:36vw;border-top-left-radius:1.5vw;border-bottom-left-radius:1.5vw}.item .title[data-v-70bbe80e]{border-top-right-radius:1.5vw;border-bottom-right-radius:1.5vw;float:left;padding:0 3vw;width:58vw}.item .title .name[data-v-70bbe80e]{font-size:3.8vw;font-weight:700;line-height:6vw;margin-top:2vw}.item .title .hits[data-v-70bbe80e]{font-size:2.8vw;position:relative;top:2vw;float:left}.cu-bar[data-v-70bbe80e]{position:static}.cu-dialog[data-v-70bbe80e]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-70bbe80e]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-70bbe80e]{width:auto}.bg-img[data-v-70bbe80e]{position:relative}.cuIcon-close[data-v-70bbe80e]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}.wechat[data-v-70bbe80e]{width:200px;height:200px}.tip[data-v-70bbe80e]{color:#fff;margin:2vw 0;font-size:3.4vw}.auth[data-v-70bbe80e]{padding:6vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-70bbe80e]{color:#333;margin-bottom:4vw}.more[data-v-70bbe80e]{font-size:3.4vw;text-align:center}',""]),n.exports=t},e52c:function(n,t,e){var i=e("c121");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("4e776e6e",i,!0,{sourceMap:!1,shadowMode:!1})}}]);