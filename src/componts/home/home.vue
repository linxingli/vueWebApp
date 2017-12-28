<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in lunboArray" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格菜单 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/news/newslist">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/photo/photolist">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/goods/goodsList">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>

mt-swipe {
  height: 100%;
  width: 100%;
}

mt-swipe-item {
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
}
/*九宫格样式*/

.mui-icon::before {
  content: "";
}
.mui-icon {
  width: 50px;
  height: 50px;
  display: inline-block;
  background-size: cover;
}

.mui-icon-home {
  background-image: url("../../static/images/menu3.png");
  background-size: cover;
}

.mui-icon-email {
  background-image: url("../../static/images/menu4.png");
  background-size: cover;
}

.mui-icon-chatbubble {
  background-image: url("../../static/images/menu5.png");
  background-size: cover;
}

.mui-icon-location {
  background-image: url("../../static/images/menu6.png");
  background-size: cover;
}

.mui-icon-search {
  background-image: url("../../static/images/menu9.png");
  background-size: cover;
}

.mui-icon-phone {
  background-image: url("../../static/images/menu10.png");
  background-size: cover;
}

.mui-table-view {
  background-color: #fff;
}

.mui-table-view .mui-table-view-cell {
  border: 0;
}

</style>


<script>

// 组件里面的js必须导出
// export default {} 这种是es6写法
export default {
  data() {
    return {
      lunboArray: [] //设置我们轮播图所需的模型
    }
  },
  //这个方法是Vue的生命周期方法之一，当我们实现了之后，当home.vue被创建出来的时候，就会自动调用
  created() {
    this.getLunboArrayData();
  },
  // methods对象里面定义的方法,不会自动调用,只能被别人调用,他的职责是定义方法
  methods: {
    getLunboArrayData() {
      const url = "http://vue.studyit.io/api/getlunbo";

      // this.$http.get(url).then(function(response){
      //     // console.log(response.body.message);
      //     // 将获取的数据赋值给lunboArray
      //     this.lunboArray = response.body.message;
      // });     //以下是es6的写法
        this.$http.get(url).then(response => {
        this.lunboArray = response.body.message;
      });
    }
  }
};
</script>