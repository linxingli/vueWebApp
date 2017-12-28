<template>
  <div>
    <!-- 头部 -->
    <div class="top">
      <h4>{{photoInfo.title}}</h4>
      <p>
        <span>{{photoInfo.add_time | fmDate('YYYY-MM-DD HH:mm:ss')}}</span>
        <span>{{photoInfo.click}}次浏览</span>
      </p>
    </div>
    <!-- 缩略图 -->
    <div class="thumb_img">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li v-for="(item,index) in photoList" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <img class="preview-img" @click="$preview.open(index, photoList)" :src="item.src" width="90" alt="">
        </li>
      </ul>
    </div>
    <!-- 介绍 -->
    <div class="info" v-html="photoInfo.content"></div>
    <!-- 评论子组件 -->
    <sub-review :newsid="this.$route.params.photoid"></sub-review>
  </div>
</template>

<style scoped>
.top {
  padding: 5px;
}
.top h4 {
  color: deepskyblue;
}
.top p {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.info {
  padding: 5px;
  color: #333;
  font-size: 15px;
}
.mui-grid-view.mui-grid-9 {
  border: 0;
  background-color: #fff;
}
.mui-table-view.mui-grid-view .mui-table-view-cell {
  margin: 0;
  padding: 5px 0;
  border: 0;  
}
</style>


<script>
// 导入common.js
import common from "../../common/common.js";
// 导入评论子组件
import subReview from "../subComponents/subReview.vue";

// 定义组件实例
export default {
  data() {
    return {
      photoInfo: {},
      photoList:[]
    };
  },
  created() {
    // 发送请求 获取图片详情数据
    this.getPhotoInfoData();
    // 发送请求,获取九宫格图片数据
    this.getPhotoListData();

  },
  methods: {
    // 定义getPhotoInfoData方法
    getPhotoInfoData(){
      // 获取id,拼接url
      const url = `${common.apiHost}api/getimageInfo/${this.$route.params
        .photoid}`;
      // console.log(this.$route)
      // 发送请求.获取数据
      this.$http.get(url).then(function(respons) {
        // console.log(respons.body.message[0]);
        this.photoInfo = respons.body.message[0];
      });
    },
    // 定义getPhotoListData方法
    getPhotoListData(){
      // 定义url
      const url = `${common.apiHost}api/getthumimages/${this.$route.params.photoid}`
      // 发送请求 获取数据
      this.$http.get(url).then(function(response){
        // console.log(response.body.message);
        this.photoList = response.body.message;
        // 给数组this.photoList里面的每个对象添加 w: 600,h: 600
        this.photoList.forEach(element => {
          // console.log(element);
          element.w = 600;
          element.h = 600;
        });
      })
    }
  },
  // 注册评论子组件
  components: {
    subReview
  }
};
</script>