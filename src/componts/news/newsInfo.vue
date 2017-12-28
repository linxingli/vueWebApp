<template>
  <div>
    <!-- 新闻详情区域 -->
    <div class="top">
      <h4 class="title">{{newsInfo.title}}</h4>
      <p class="info">
        <span>{{newsInfo.add_time | fmDate('YYYY-MM-DD HH:mm:ss')}}</span>&nbsp;&nbsp;
        <span>{{newsInfo.click}}次浏览</span>&nbsp;&nbsp;
        <span>民生经济</span>
      </p>
    </div>
    <div class="content" v-html="newsInfo.content"></div>
    <!-- 评论区域 -->
    <!-- 如果这里的newsid取自newsInfo里面的id则在subReview里面出现取不到的情况,原因如下??? 加个判断newsInfo是否出现的条件即可-->
    <!-- 待newsInfo.id出现时(未出现时v-if="newsInfo.id"为false,出现后为true此时子组件的结构就显示出来了),在渲染subReview结构就能获取到newsInfo.id了 -->
    <subReview v-if="newsInfo.id" :newsid="newsInfo.id"></subReview>
  </div>
</template>

<style scoped>
.content  p > img  {
  width: 100% !important;
}
 
.top {
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.title {
  color: #0094ff;
}
.info {
  padding: 0;
  margin: 0;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}
.content {
  padding: 5px;
}
</style>


<script>
// 导入common.js
import common from "../../common/common.js";
// 导入评论子组件
import subReview from "../subComponents/subReview.vue";

// 组件的js必须导出
export default {
  data() {
    return {
      newsInfo: {}
    };
  },
  // 以下为测试生命周期demo
  beforeCreate(){
    console.log('beforeCreate---newsinfo');
  },
  created() {
    console.log('created---newsinfo');
    
    this.getNewsInfo();
  },
  beforeMount(){
    console.log('beforeMount---newsinfo');    
  },
  mounted(){
    console.log('mounted---newsinfo');   
  },
  beforeUpdate(){
    console.log('beforeUpdate---newsinfo');       
  },
  updated(){
    console.log('updated---newsinfo');       
  },
  // 以上为测试生命周期钩子
  methods: {
    // 获取新闻详情数据
    getNewsInfo() {
      // 获取id 生成url
      const url = common.apiHost + "api/getnew/" + this.$route.params.id;
      // console.log(url);
      // 发送数据
      this.$http.get(url).then(function(response) {
        this.newsInfo = response.body.message[0];
        // console.log(this.newsInfo);
      });
    }
  },
  // 定义和注册评论子组件
  components: {
    // <subReview> 将只在父组件模板中可用
    subReview: subReview
  }
};
</script>