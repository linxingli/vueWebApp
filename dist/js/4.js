webpackJsonp([4],{207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(261),o=n.n(a),s=n(262),i=n(6),r=i(o.a,s.a,!1,null,null,null);r.options.__file="src\\componts\\goods\\goodsReview.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=r.exports},209:function(e,t,n){"use strict";e.exports={apiHost:"http://vue.studyit.io/"}},210:function(e,t,n){"use strict";function a(e){r||n(211)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(213),s=n.n(o),i=n(214),r=!1,u=n(6),d=a,c=u(s.a,i.a,!1,d,"data-v-9f9373ae",null);c.options.__file="src\\componts\\subComponents\\subReview.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=c.exports},211:function(e,t,n){var a=n(212);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(3)("796439cd",a,!1)},212:function(e,t,n){t=e.exports=n(2)(void 0),t.push([e.i,"\n.post_review[data-v-9f9373ae],.review_list[data-v-9f9373ae] {\n  padding: 5px;\n}\nh4[data-v-9f9373ae] {\n  padding-bottom: 5px;\n  border-bottom: 1px solid #ccc;\n}\n.bottom[data-v-9f9373ae] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;    \n  margin-bottom: 5px;\n}\n.content[data-v-9f9373ae] {\n  font-size: 15px;\n  /* 非中文换行显示 */\n  word-wrap : break-word ;\n}\n.bottom > span[data-v-9f9373ae] {\n  color: #26a2ff;\n}\n.review_item[data-v-9f9373ae] {\n  border-bottom: 1px solid #ccc;\n}\n.load_more[data-v-9f9373ae] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n",""])},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(209),o=function(e){return e&&e.__esModule?e:{default:e}}(a),s=n(7);t.default={data:function(){return{reviewArr:[],pageIndex:1,Value:""}},props:["newsid"],created:function(){this.getReviewData()},methods:{getReviewData:function(){var e=this,t=o.default.apiHost+"api/getcomments/"+this.newsid+"?pageindex="+this.pageIndex;this.$http.get(t).then(function(t){1==e.pageIndex?e.reviewArr=t.body.message:e.reviewArr=e.reviewArr.concat(t.body.message)})},LoadMoreData:function(){this.pageIndex++,this.getReviewData()},postReview:function(){var e=this.Value.trim();if(""==e||0==e.length)return(0,s.Toast)({message:"输入不能为空",position:"middle",duration:3e3}),!1;var t=o.default.apiHost+"api/postcomment/"+this.newsid;this.$http.post(t,{content:e},{emulateJSON:!0}).then(function(e){this.Value="",(0,s.Toast)({message:"添加评论成功",position:"middle",duration:3e3}),this.pageIndex=1,this.getReviewData()})}}}},214:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"post_review"},[n("h4",[e._v("提交评论")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Value,expression:"Value"}],attrs:{id:"textarea",placeholder:"请输入评论内容",cols:"30",rows:"5"},domProps:{value:e.Value},on:{input:function(t){t.target.composing||(e.Value=t.target.value)}}}),e._v(" "),n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:function(t){e.postReview()}}},[e._v("提交评论")])],1),e._v(" "),n("div",{staticClass:"review_list"},[n("h4",[e._v("评论列表")]),e._v(" "),e._l(e.reviewArr,function(t,a){return n("div",{key:a,staticClass:"review_item"},[n("p",{staticClass:"content"},[e._v(e._s(t.content))]),e._v(" "),n("p",{staticClass:"bottom"},[n("span",[e._v(e._s(t.user_name))]),e._v(" "),n("span",[e._v(e._s(e._f("fmDate")(t.add_time)))])])])}),e._v(" "),n("button",{staticClass:"load_more mint-button mint-button--danger mint-button--large is-plain",on:{click:function(t){e.LoadMoreData()}}},[e._v("加载更多")])],2)])},o=[];a._withStripped=!0;var s={render:a,staticRenderFns:o};t.a=s},261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(210),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={components:{subReview:o.default}}},262:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("subReview",{attrs:{newsid:e.$route.query.goodsid}})],1)},o=[];a._withStripped=!0;var s={render:a,staticRenderFns:o};t.a=s}});