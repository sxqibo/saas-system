(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{1351:function(t,n,e){"use strict";var a=e("508d"),i=e.n(a);i.a},"274b":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-image",{staticClass:"logo",attrs:{mode:"heightFix",src:"/static/image/logo.png"}}),e("v-uni-view",{staticClass:"top-title"},[t._v("赛程列表")])],1),e("v-uni-view",{staticClass:"con"},[e("v-uni-view",{staticClass:"con-title"},[e("v-uni-text",{staticClass:"c1"},[t._v("开始时间")]),e("v-uni-text",{staticClass:"c2"},[t._v("赛事编号")]),e("v-uni-text",{staticClass:"c3"},[t._v("赛事名称")]),e("v-uni-text",{staticClass:"c4"},[t._v("参数人数")]),e("v-uni-text",{staticClass:"c5"},[t._v("报名时间")]),e("v-uni-text",{staticClass:"c6"},[t._v("赛事状态")])],1)],1),e("v-uni-view",{staticClass:"con conList"},[e("v-uni-view",{staticClass:"list"},t._l(t.list,(function(n,a){return e("v-uni-view",{key:a,staticClass:"con-list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoScreen(n.id,n.tenant_id)}}},[e("v-uni-text",{staticClass:"c1"},[t._v(t._s(t.toDate(n.start_time)))]),e("v-uni-text",{staticClass:"c2"},[t._v(t._s(n.match_number||""))]),e("v-uni-text",{staticClass:"c3"},[t._v(t._s(n.name.replace("//","")||""))]),e("v-uni-text",{staticClass:"c4"},[t._v(t._s(n.user_count||""))]),e("v-uni-text",{staticClass:"c5"},[t._v(t._s(t.toDate(n.signup_time)))]),e("v-uni-text",{staticClass:"c6"},[t._v(t._s(n.status_text||""))])],1)})),1)],1)],1)},i=[]},3516:function(t,n,e){"use strict";var a=e("7b12"),i=e.n(a);i.a},"508d":function(t,n,e){var a=e("c5f3");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("61634468",a,!0,{sourceMap:!1,shadowMode:!1})},"7b12":function(t,n,e){var a=e("f802");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("0f0d8f04",a,!0,{sourceMap:!1,shadowMode:!1})},"7c63":function(t,n,e){"use strict";e.r(n);var a=e("9d9b"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},"837d":function(t,n,e){"use strict";e.r(n);var a=e("274b"),i=e("7c63");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("1351"),e("3516");var c=e("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"07ed6ad2",null,!1,a["a"],void 0);n["default"]=s.exports},"9d9b":function(t,n,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("99af");var i=a(e("c7eb")),o=a(e("1da1")),c=a(e("29d7")),s={data:function(){return{list:[],nowPage:1}},onLoad:function(){var t=this;setInterval((function(){t.init()}),6e4)},onShow:function(){this.init()},methods:{init:function(){var t=this;return(0,o.default)((0,i.default)().mark((function n(){var e,a,o;return(0,i.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,c.default.getTenantId();case 2:return e=n.sent,n.next=5,t.$syncRequest({url:"match/list",data:{tenant_id:e,page:t.nowPage,limit:100}});case 5:a=n.sent,o=a.data,console.log("请求结果",o),t.list=o.data||[];case 9:case"end":return n.stop()}}),n)})))()},toDate:function(t){if(!t)return"";var n=new Date(1e3*t),e=n.getDate();e=e>9?e:"0"+e;var a=n.getHours();a=a>9?a:"0"+a;var i=n.getMinutes();return i=i>9?i:"0"+i,"".concat(e,"日").concat(a,":").concat(i)},gotoScreen:function(t,n){uni.navigateTo({url:"/pages/index/match?match_id="+t+"&tenant_id="+n})}}};n.default=s},c5f3:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"uni-page-body[data-v-07ed6ad2]{text-align:center;overflow:hidden;background-color:#000}body.?%PAGE?%[data-v-07ed6ad2]{background-color:#000}",""]),t.exports=n},f802:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-07ed6ad2]{display:flex;flex-flow:column;height:100vh}.content .top[data-v-07ed6ad2]{width:100%;display:flex;padding:%?30?% %?50?% %?20?%;position:relative}.content .top .logo[data-v-07ed6ad2]{position:absolute;height:%?70?%;z-index:5;object-fit:cover}.content .top-title[data-v-07ed6ad2]{height:%?70?%;flex:1;color:#fff;font-size:%?40?%;line-height:1;font-weight:700;font-family:微软雅黑;Letter-spacing:%?15?%;padding:0}.content .conList[data-v-07ed6ad2]{overflow:hidden;display:flex;flex:1}.content .con[data-v-07ed6ad2] ::-webkit-scrollbar{width:0!important;height:0!important;display:none}.content .con .list[data-v-07ed6ad2]{flex:1;min-height:100%;overflow-y:scroll}.content .con uni-text[data-v-07ed6ad2]{font-size:%?14?%;line-height:1;color:#fff;font-family:微软雅黑;text-align:center}.content .con .c1[data-v-07ed6ad2]{max-width:18%;min-width:10%}.content .con .c2[data-v-07ed6ad2]{max-width:18%;min-width:10%}.content .con .c3[data-v-07ed6ad2]{flex:1}.content .con .c4[data-v-07ed6ad2]{max-width:14%;min-width:10%}.content .con .c5[data-v-07ed6ad2]{max-width:18%;min-width:10%}.content .con .c6[data-v-07ed6ad2]{max-width:14%;min-width:10%}.content .con-title[data-v-07ed6ad2]{background-color:#a07725;display:flex;align-items:center;padding:%?15?% %?15?%;border-radius:%?15?%}.content .con-list[data-v-07ed6ad2]{display:flex;align-items:center;padding:%?15?% 0;margin:0 %?15?%;border-bottom:%?2?% solid #fcbd3a}.content .con-list uni-text[data-v-07ed6ad2]{font-weight:700}.content .con-list[data-v-07ed6ad2]:active, .content .con-list[data-v-07ed6ad2]:hover{background-color:#f90}',""]),t.exports=n}}]);