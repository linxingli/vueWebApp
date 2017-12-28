<template>
  <div>
    <!-- 提交评论区域 -->
    <div class="post_review">
      <h4>提交评论</h4>
      <textarea id="textarea" v-model="Value" placeholder="请输入评论内容" cols="30" rows="5"></textarea>
      <mt-button type="primary" @click="postReview()" size="large">提交评论</mt-button>
    </div>
    <!-- 评论列表区域 -->
    <div class="review_list">
      <h4>评论列表</h4>

      <div v-for="(item,index) in reviewArr" :key="index" class="review_item">
        <p class="content">{{item.content}}</p>
        <p class="bottom">
          <span>{{item.user_name}}</span>
          <span>{{item.add_time | fmDate}}</span>
        </p>
      </div>

      <button @click="LoadMoreData()" class="load_more mint-button mint-button--danger mint-button--large is-plain">加载更多</button>
    </div>
  </div>
</template>

<style scoped>
  
  .post_review,.review_list {
    padding: 5px;
  }
  h4 {
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;    
    margin-bottom: 5px;    
  }
  .content {
    font-size: 15px;
    /* 非中文换行显示 */
    word-wrap : break-word ;
  }
  .bottom > span {
    color: #26a2ff;
  }
  .review_item {
    border-bottom: 1px solid #ccc;
  }
  .load_more {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>


<script>
  // 导入common.js
  import common from '../../common/common.js';
  // 导入mint UI 的js组件 Toast
  import { Toast } from 'mint-ui';

  export default {
    data(){
      return{
        // 定义评论内容数组
        reviewArr:[],
        pageIndex:1,
        Value:''
      }
    },
    props: ['newsid'],
    created(){
      // console.log("subReview---------created")
      // console.log(this.newsid)
      this.getReviewData()
    },
    methods:{
      // 定义获取评论数据的方法
      getReviewData(){
        const url=common.apiHost+'api/getcomments/'+this.newsid+'?pageindex='+this.pageIndex;
        // 发送数据请求
        this.$http.get(url).then(backData=>{
          // console.log(backData.body.message);
          if(this.pageIndex==1){
            this.reviewArr = backData.body.message;
          }else{
            this.reviewArr = this.reviewArr.concat(backData.body.message);
          }
        })
      },
      // 点击加载更多
      LoadMoreData(){
        this.pageIndex++;
        this.getReviewData()
      },
      // 提交评论
      postReview(){
        // 获取textArea内容.trim()
        var contentReview = this.Value.trim();
        // console.log(this.Value);
        // 非空判断
        if(contentReview==""||contentReview.length==0){
          // 为空  提示用户输入不能为空  retrun
          Toast({
            message: '输入不能为空',
            position: 'middle',
            duration: 3000
          });
          return false;
        }else{
          // 不为空
          // 获取id/url,发送post数据
          const urlSub=common.apiHost+'api/postcomment/'+this.newsid;
          // 发送post数据
          this.$http.post(urlSub,{content:contentReview},{emulateJSON:true}).then(function(response){
              // console.log(response.body.message)
              // 清空textarea
              this.Value = "";
              // 提示用户添加评论成功
              Toast({
                  message: '添加评论成功',
                  position: 'middle',
                  duration: 3000
                });
              // 重新渲染第一页面
              this.pageIndex = 1;
              this.getReviewData();
          });
        } 

      }
            
    }
  }
</script>