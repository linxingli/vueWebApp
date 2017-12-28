<template>
  <div>
    <!-- 头部 -->
    <mt-header fixed title="Vue_project"></mt-header>
    <div :class="isGoBackShow?'back':'hide back'"  @click="goBack()">&lt;返回</div>
    <!-- 中间内容部分 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view class="middle_content"></router-view>
    <!-- 底部Tabbar -->
    <mt-tabbar :class="isTabBarShow?'':'hide'" fixed>
      <mt-tab-item>
        <!-- 设置链接跳转 -->
        <router-link to="/home">
          <img src="http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
        </router-link>        
      </mt-tab-item>
      <mt-tab-item>
        <!-- 设置链接跳转 -->
        <router-link to="/category">
          <img src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
        </router-link>    
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/goods/buyCart">
          <img src="http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
          <!-- 购物车指示器 -->
          <span class="mui-badge" v-show="count" >{{count}}</span>
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <img src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  // 导入公共的vue对象 bus (实现非父子组件的数据传递)
  // import bus from './common/commonBus.js';

  export default{
    data(){
      return {
        isGoBackShow:false,
        isTabBarShow:true,
        count:0
      }
    },
    created(){
      this.isShowOrHideGoBack(this.$route.path);
      // 监听从goodsinfo传递过来的数据,并写好处理函数(接收数据)
      // bus.$on('countDataChange',(count)=>{
      //   // console.log(`这是goodsinfo发过来的count=${count}`)
      //   this.count += count
      // });
    },
    updated(){
      // 从vuex仓库获取购物车count计数
      this.count = this.$store.getters.getGoodsCount
    },
    methods:{
      goBack(){
        // 返回上一级路由
        this.$router.go(-1);
      },
      // 判断头部返回/tabBar的显示与隐藏
      isShowOrHideGoBack(path){
        if(path=='/home'){
          this.isGoBackShow = false;
          this.isTabBarShow = true;
        }else{
          this.isGoBackShow = true;          
          this.isTabBarShow = false;          
        }
      }      
    },
    // watch监听方法:如果路由发生变化,根据url做判断在哪个页面
    // (注意点:如果重载页面的话当前路由值是不会变的,此时要把判断的方法放一份在created勾子中)
    watch:{
      $route:function(){
        // console.log(this.$route.path);
        this.isShowOrHideGoBack(this.$route.path);
      }
    }
  }

</script>

<style scoped>
/* scoped 代表是私有的css,仅该组件内部使用 */
  .mui-badge {
    position: absolute;
    right: 34%;
    top: 3px;
    background-color: red;
    color: #fff;
  }
  img {
    width: 42px;
    height: 34px;
  }
  image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
  }
  .middle_content {
    margin-top: 40px;
    width: 100%;
    height: 250px;
  }
  /* 返回按钮 */
  .back {
    position: fixed;
    left: 10px;
    top: 10px;
    z-index: 9;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
  /* 返回上一页 */
  .hide {
    display: none;
  }
</style>

