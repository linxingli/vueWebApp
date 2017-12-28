// 导入第三方包Vue
import Vue from 'vue';
// 导入vue-resource
import VueResource  from 'vue-resource';
// 导入App.vue组件
// var App = require('./App.vue') //es5
import App from './App.vue';  //es6的写法
// 导入mint UI
import Mint from 'mint-ui';
// 导入moment.js
import moment from 'moment';
// 导入vue-preview组件
import VuePreview from 'vue-preview';


// 基于vue的第三方包,所以用Vue.use()方法来引入
Vue.use(Mint);
Vue.use(VueResource); // Vue.prototype.$http = VueResource对象
Vue.use(VuePreview);// Vue.$preview

// 导入Mint的css    todo:生产模式时改为min.css
import 'mint-ui/lib/style.min.css';
// 导入mui的css
import './static/mui/css/mui.min.css';
// 导入全局css
import './static/css/site.css';
// 导入路由模块
import router from './routers/router.js';
// 导入vuex的store实例
import store from './vuex/vuex.js';

// 设置全局过滤器 moment （用来格式化各个页面呈现的时间格式）
Vue.filter('fmDate', function (value,formStr) {
  formStr = formStr || 'YYYY-MM-DD HH:mm:ss';
  return moment(value).format(formStr);
});

// 使用Vue框架,把App.vue作为第一个框架,第一个让用户看到的组件
// 安装vue:cnpm i vue --save    为啥使用save 因为上线后也要使用
// 创建跟实例,在根实例中,让我们的第一个展示的组件就是App.vue

// 创建根实例(view-model) ,让根实例显示App.vue
new Vue({
  el:'#app',
  // render的作用:将App.vue组件渲染出来
  // render:function(createElement){
  //   return createElement(App);
  // },    // es6支持的简写   h 是createElement的别名
  render:h=>h(App),
  router,   // 注入路由 (根据路由规则加载相应的组件进来)
  store     // 注入vuex仓库 
});
