<template>
  <div>
    <!-- 因为父组件使用的是带查询参数的路由,所以要用$route.query来接收 -->
    <subReview :newsid="$route.query.goodsid"></subReview>
  </div>
</template>

<script>
  // 导入子组件
  import subReview from '../subComponents/subReview.vue';
  export default{
    // 注册子组件
    components:{
      subReview
    }
  }
</script>
