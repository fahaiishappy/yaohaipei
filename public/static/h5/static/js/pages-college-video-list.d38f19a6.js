(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-college-video-list"],{1358:function(n,t,i){"use strict";i.r(t);var a=i("e829"),e=i("88d1");for(var o in e)"default"!==o&&function(n){i.d(t,n,(function(){return e[n]}))}(o);i("8ce6");var s,c=i("f0c5"),d=Object(c["a"])(e["default"],a["b"],a["c"],!1,null,"3f92f7c7",null,!1,a["a"],s);t["default"]=d.exports},"1bea":function(n,t,i){"use strict";(function(n){var a=i("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a(i("9dcd")),o=a(i("7f51")),s=a(i("7265")),c={mixins:[o.default,s.default],components:{uniTopBar:e.default},data:function(){return{downOption:{use:!1,isLock:!0},upOption:{use:!1,isLock:!0,toTop:{src:""}},height:"400px",topheight:0,video:"",toptitle:"课程列表",card_id:0,course:0,src:"",poster:"",modalName:null,id:"",name:""}},props:{tabs:Array,bottom:String},onLoad:function(t){var i=this,a=this;t.id&&(a.id=t.id,n("log",a.id," at pages/college/video-list.vue:90")),t.name&&(a.name=t.name,n("log",a.name," at pages/college/video-list.vue:94")),this.topheight=this.StatusBar,this.height=uni.getSystemInfoSync().windowHeight+"px",uni.request({url:"https://www.hongrensutui.com/api/index/course",success:function(n){i.course=n.data.data.course}}),a.videolist()},methods:{downCallback:function(n){this.mescroll.resetUpScroll(),this.mescroll.endSuccess()},upCallback:function(n){},videolist:function(){var n=this;uni.request({url:"https://www.hongrensutui.com/api/index/videolist",method:"POST",data:{id:n.id},success:function(t){t.data.data.info&&(n.video=t.data.data.info)}})},test:function(n,t){var i=this;i.src=t,i.poster=n,i.modalName="Image"},navToDetailPage:function(n){uni.navigateTo({url:"/pages/college/coursedetails?id="+n})},hideModal:function(n){this.modalName=null}}};t.default=c}).call(this,i("0de9")["log"])},"643f":function(n,t,i){var a=i("24fb");t=a(!1),t.push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*数据列表*/.videolist[data-v-3f92f7c7]{background-color:#fff}.bg-fff[data-v-3f92f7c7]{padding-bottom:3vw}.bg-fff .item[data-v-3f92f7c7]:last-child{margin-bottom:0}.titletop[data-v-3f92f7c7]{padding:5vw 3vw;font-size:4.5vw;font-weight:700;background-color:#fff}.titletop .name[data-v-3f92f7c7]{background-image:url(https://www.hongrensutui.com/h5/img/wzbg2.png);background-repeat:repeat-x;background-position:bottom;display:inline-block;padding:0 1vw}.item[data-v-3f92f7c7]{margin:0 3vw;width:94vw;background-color:#f7f7f7;border-radius:1.5vw;margin-bottom:3vw;position:relative}.item .free[data-v-3f92f7c7]{position:absolute;width:8vw;border-top-left-radius:1.5vw;border-bottom-right-radius:1.5vw;left:0;z-index:100}.item .ptgz[data-v-3f92f7c7]{float:left;width:36vw;border-top-left-radius:1.5vw;border-bottom-left-radius:1.5vw}.item .title[data-v-3f92f7c7]{border-top-right-radius:1.5vw;border-bottom-right-radius:1.5vw;float:left;padding:0 3vw;width:58vw}.item .title .name[data-v-3f92f7c7]{font-size:3.8vw;font-weight:700;line-height:6vw;margin-top:2vw}.item .title .hits[data-v-3f92f7c7]{font-size:2.8vw;position:relative;top:2vw;float:left}.cu-bar[data-v-3f92f7c7]{position:static}.cu-dialog[data-v-3f92f7c7]{background-color:initial;width:auto;padding:4vw;height:auto}.cu-bar .action:first-child>uni-text[class*="cuIcon-"][data-v-3f92f7c7]{margin:0}.cu-bar.tabbar .action [class*="cuIcon-"][data-v-3f92f7c7]{width:auto}.bg-img[data-v-3f92f7c7]{position:relative}.cuIcon-close[data-v-3f92f7c7]:before{background-color:rgba(0,0,0,.5);padding:1.5vw;border-radius:50%}.wechat[data-v-3f92f7c7]{width:200px;height:200px}.tip[data-v-3f92f7c7]{color:#fff;margin:2vw 0;font-size:3.4vw}.auth[data-v-3f92f7c7]{padding:6vw;border-radius:1.5vw;background-color:#fff}.auth .title[data-v-3f92f7c7]{color:#333;margin-bottom:4vw}.more[data-v-3f92f7c7]{font-size:3.4vw;text-align:center}',""]),n.exports=t},"789a":function(n,t,i){var a=i("643f");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var e=i("4f06").default;e("342b2f9e",a,!0,{sourceMap:!1,shadowMode:!1})},"88d1":function(n,t,i){"use strict";i.r(t);var a=i("1bea"),e=i.n(a);for(var o in a)"default"!==o&&function(n){i.d(t,n,(function(){return a[n]}))}(o);t["default"]=e.a},"8ce6":function(n,t,i){"use strict";var a=i("789a"),e=i.n(a);e.a},e829:function(n,t,i){"use strict";var a={mescrollUni:i("c499").default},e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",[i("uni-top-bar",{attrs:{title:n.toptitle}}),i("mescroll-uni",{ref:"mescrollRef",attrs:{top:n.topheight+43+"px",down:n.downOption,up:n.upOption},on:{init:function(t){arguments[0]=t=n.$handleEvent(t),n.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=n.$handleEvent(t),n.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=n.$handleEvent(t),n.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"videolist"},[i("v-uni-view",{staticClass:"titletop"},[i("v-uni-view",{staticClass:"name"},[n._v(n._s(n.name))])],1),n._l(n.video,(function(t,a){return i("v-uni-view",{key:a,staticClass:"item clearfix",attrs:{"data-target":"Image"},on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.navToDetailPage(t.id)}}},[1==t.free?i("img",{staticClass:"free",attrs:{src:"https://www.hongrensutui.com/h5/img/free.png",mode:"widthFix"}}):n._e(),2==t.free?i("img",{staticClass:"free",attrs:{src:"https://www.hongrensutui.com/h5/img/free2.png",mode:"widthFix"}}):n._e(),t.img?i("img",{staticClass:"ptgz",attrs:{src:t["img"],mode:"widthFix"}}):i("img",{staticClass:"ptgz",attrs:{src:"https://www.hongrensutui.com/h5/img/noimg.jpg",mode:"widthFix"}}),i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"name"},[n._v(n._s(t.title))]),i("v-uni-view",{staticClass:"cu-tag light bg-red round sm hits"},[n._v("已有"+n._s(t.views)+"人学习")])],1)],1)}))],2),i("v-uni-view",{staticClass:"cu-modal",class:"Image"==n.modalName?"show":""},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"bg-img"},["Image"==n.modalName?i("v-uni-video",{attrs:{controls:!0,poster:n.poster,autoplay:"true",src:n.src}}):n._e(),i("v-uni-view",{staticClass:"cu-bar justify-center text-white"},[i("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:"Imageno"==n.modalName?"show":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"auth"},[i("v-uni-view",{staticClass:"title"},[n._v("十分抱歉，由于相关规范，小程序暂不支持查看。")])],1)],1)],1)],1)],1)},o=[];i.d(t,"b",(function(){return e})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}))}}]);