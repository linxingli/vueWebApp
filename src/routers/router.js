// 因为vue-router是基于vue的依赖包，所以要先导入vue
import Vue from 'vue';
// 导入vue-router
import VueRouter from 'vue-router';

Vue.use(VueRouter); // Vue.prototype.$route, Vue.prototype.$router, 集成VueRouter之后，Vue就拥有这两种属性

// 导入首页组件
const home = () => import('../componts/home/home.vue')
// import home from '../componts/home/home.vue';
// 导入分类组件
const category = () => import('../componts/category/category.vue')
// import category from '../componts/category/category.vue';
// 导入新闻列表组件
const newslist = () => import('../componts/news/newslist.vue')
// import newslist from '../componts/news/newslist.vue';
// 导入新闻详组件
const newsInfo = () => import('../componts/news/newsInfo.vue')
// import newsInfo from '../componts/news/newsInfo.vue';
// 导入图片列表组件
const photoList = () => import('../componts/photo/photolist.vue')
// import photoList from '../componts/photo/photolist.vue';
// 导入图片详情组件
const photoInfo = () => import('../componts/photo/photoinfo.vue')
// import photoInfo from '../componts/photo/photoinfo.vue';
// 导入商品列表组件
const goodsList = () => import('../componts/goods/goodsList.vue')
// import goodsList from '../componts/goods/goodsList.vue';
// 导入商品详情组件
const goodsInfo = () => import('../componts/goods/goodsInfo.vue')
// import goodsInfo from '../componts/goods/goodsInfo.vue';
// 导入图文介绍组件
const twjs = () => import('../componts/goods/twjs.vue')
// import twjs from '../componts/goods/twjs.vue';
// 导入评论子组件
const goodsReview = () => import('../componts/goods/goodsReview.vue')
// import goodsReview from '../componts/goods/goodsReview.vue';
// 导入购物车组件
const buyCart = () => import('../componts/goods/buyCart.vue')
// import buyCart from '../componts/goods/buyCart.vue';


// 定义路由规则
const routes = [
  { path: '/', redirect: '/home' },  //设置重定向 默认打开首页
  { path: '/home', component: home },
  { path: '/category', component: category },
  { path: '/news/newslist', component: newslist },
  { path: '/news/newsInfo/:id', component: newsInfo },
  { path: '/photo/photolist', component: photoList },
  { path: '/photo/photoInfo/:photoid', component: photoInfo },
  { path: '/goods/goodsList', component: goodsList },
  { path: '/goods/goodsInfo/:goodsid', component: goodsInfo },
  { path: '/goods/twjs' ,name:'/goods/twjs', component: twjs},
  { path: '/goods/goodsReview', component: goodsReview},
  { path: '/goods/buyCart', component: buyCart}
];

// 创建router实例
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

// 导出该router
export default router