<template>
  <div>
    <ul class="mui-table-view">
      <li v-for="item in newslistArr" :key="item.id" class="mui-table-view-cell mui-media">
        <router-link :to="'/news/newsInfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <p class="title_self">{{item.title}}</p>
            <p class="mui-ellipsis">
              <span class="time_self">{{item.add_time | fmDate('YYYY-MM-DD HH:mm')}}</span>
              <span class="category_self">点击{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .mui-table-view-cell {
    width: 100%;
  }
  .mui-table-view .mui-media-object{
    max-width: 62px;
    height: 62px;
  }
  .title_self {
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分省略号显示*/
  }
  .mui-ellipsis {
    margin-top: 25px;
    display: flex;
    /* 左右两边元素贴边显示,中间元素间隔相等 */
    justify-content: space-between;
    color: #0094ff;
  }
</style>


<script>
// 组件中的js需要手动导出
export default {
  data() {
    return {
      // 返回新闻列表数据
      newslistArr: []
    };
  },
  // 生命周期函数在该实例被创建后被调用
  created() {
    this.getNewsListData();
  },
  methods: {
    getNewsListData: function() {
      const url = "http://vue.studyit.io/api/getnewslist";

      this.$http.get(url).then(response => {
        this.newslistArr = response.body.message;
      });
    }
  }
};
</script>