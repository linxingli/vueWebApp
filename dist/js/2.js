webpackJsonp([2],{201:function(e,t,n){"use strict";function o(e){r||n(230)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(232),s=n.n(a),i=n(233),r=!1,d=n(6),c=o,u=d(s.a,i.a,!1,c,"data-v-bbc169be",null);u.options.__file="src\\componts\\news\\newsInfo.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=u.exports},209:function(e,t,n){"use strict";e.exports={apiHost:"http://vue.studyit.io/"}},210:function(e,t,n){"use strict";function o(e){r||n(211)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(213),s=n.n(a),i=n(214),r=!1,d=n(6),c=o,u=d(s.a,i.a,!1,c,"data-v-9f9373ae",null);u.options.__file="src\\componts\\subComponents\\subReview.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=u.exports},211:function(e,t,n){var o=n(212);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(3)("796439cd",o,!1)},212:function(e,t,n){t=e.exports=n(2)(void 0),t.push([e.i,"\n.post_review[data-v-9f9373ae],.review_list[data-v-9f9373ae] {\n  padding: 5px;\n}\nh4[data-v-9f9373ae] {\n  padding-bottom: 5px;\n  border-bottom: 1px solid #ccc;\n}\n.bottom[data-v-9f9373ae] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;    \n  margin-bottom: 5px;\n}\n.content[data-v-9f9373ae] {\n  font-size: 15px;\n  /* 非中文换行显示 */\n  word-wrap : break-word ;\n}\n.bottom > span[data-v-9f9373ae] {\n  color: #26a2ff;\n}\n.review_item[data-v-9f9373ae] {\n  border-bottom: 1px solid #ccc;\n}\n.load_more[data-v-9f9373ae] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n",""])},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(209),a=function(e){return e&&e.__esModule?e:{default:e}}(o),s=n(7);t.default={data:function(){return{reviewArr:[],pageIndex:1,Value:""}},props:["newsid"],created:function(){this.getReviewData()},methods:{getReviewData:function(){var e=this,t=a.default.apiHost+"api/getcomments/"+this.newsid+"?pageindex="+this.pageIndex;this.$http.get(t).then(function(t){1==e.pageIndex?e.reviewArr=t.body.message:e.reviewArr=e.reviewArr.concat(t.body.message)})},LoadMoreData:function(){this.pageIndex++,this.getReviewData()},postReview:function(){var e=this.Value.trim();if(""==e||0==e.length)return(0,s.Toast)({message:"输入不能为空",position:"middle",duration:3e3}),!1;var t=a.default.apiHost+"api/postcomment/"+this.newsid;this.$http.post(t,{content:e},{emulateJSON:!0}).then(function(e){this.Value="",(0,s.Toast)({message:"添加评论成功",position:"middle",duration:3e3}),this.pageIndex=1,this.getReviewData()})}}}},214:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"post_review"},[n("h4",[e._v("提交评论")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Value,expression:"Value"}],attrs:{id:"textarea",placeholder:"请输入评论内容",cols:"30",rows:"5"},domProps:{value:e.Value},on:{input:function(t){t.target.composing||(e.Value=t.target.value)}}}),e._v(" "),n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:function(t){e.postReview()}}},[e._v("提交评论")])],1),e._v(" "),n("div",{staticClass:"review_list"},[n("h4",[e._v("评论列表")]),e._v(" "),e._l(e.reviewArr,function(t,o){return n("div",{key:o,staticClass:"review_item"},[n("p",{staticClass:"content"},[e._v(e._s(t.content))]),e._v(" "),n("p",{staticClass:"bottom"},[n("span",[e._v(e._s(t.user_name))]),e._v(" "),n("span",[e._v(e._s(e._f("fmDate")(t.add_time)))])])])}),e._v(" "),n("button",{staticClass:"load_more mint-button mint-button--danger mint-button--large is-plain",on:{click:function(t){e.LoadMoreData()}}},[e._v("加载更多")])],2)])},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};t.a=s},230:function(e,t,n){var o=n(231);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(3)("0fda3601",o,!1)},231:function(e,t,n){t=e.exports=n(2)(void 0),t.push([e.i,"\n.content  p > img[data-v-bbc169be]  {\r\n  width: 100% !important;\n}\n.top[data-v-bbc169be] {\r\n  padding: 5px;\r\n  border-bottom: 1px solid #ccc;\n}\n.title[data-v-bbc169be] {\r\n  color: #0094ff;\n}\n.info[data-v-bbc169be] {\r\n  padding: 0;\r\n  margin: 0;\r\n  margin-top: 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0 10px;\n}\n.content[data-v-bbc169be] {\r\n  padding: 5px;\n}\r\n",""])},232:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(209),s=o(a),i=n(210),r=o(i);t.default={data:function(){return{newsInfo:{}}},beforeCreate:function(){console.log("beforeCreate---newsinfo")},created:function(){console.log("created---newsinfo"),this.getNewsInfo()},beforeMount:function(){console.log("beforeMount---newsinfo")},mounted:function(){console.log("mounted---newsinfo")},beforeUpdate:function(){console.log("beforeUpdate---newsinfo")},updated:function(){console.log("updated---newsinfo")},methods:{getNewsInfo:function(){var e=s.default.apiHost+"api/getnew/"+this.$route.params.id;this.$http.get(e).then(function(e){this.newsInfo=e.body.message[0]})}},components:{subReview:r.default}}},233:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"top"},[n("h4",{staticClass:"title"},[e._v(e._s(e.newsInfo.title))]),e._v(" "),n("p",{staticClass:"info"},[n("span",[e._v(e._s(e._f("fmDate")(e.newsInfo.add_time,"YYYY-MM-DD HH:mm:ss")))]),e._v("  \n      "),n("span",[e._v(e._s(e.newsInfo.click)+"次浏览")]),e._v("  \n      "),n("span",[e._v("民生经济")])])]),e._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:e._s(e.newsInfo.content)}}),e._v(" "),e.newsInfo.id?n("subReview",{attrs:{newsid:e.newsInfo.id}}):e._e()],1)},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};t.a=s}});