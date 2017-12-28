
<template>
  <div>
      <!-- 分类列表 -->
      <div class="category">
        <ul>
          <li @click="getPhotoListData(0)" >全部</li>
          <li v-for="item in categoryList" @click="getPhotoListData(item.id)" :key="item.id">{{item.title}}</li>
        </ul>
      </div>
      <!-- 图片列表 -->
      <div class="photo">
        <ul>
          <li v-for="item in photoList" :key="item.id">
            <router-link :to="'/photo/photoInfo/'+item.id">
              <img :src="item.img_url" alt="">
              <p><span>{{item.title}}</span>
              {{item.zhaiyao}}
              </p>
            </router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<style scoped>
  /* 分类的css */
  *{
    padding: 0;
    margin: 0;
  }
  .category {
    /* 显示横向滚动条 */
    overflow-x: auto;
  }
  .category ul {
    white-space: nowrap;
    padding:0px 10px 15px 10px; 
  }
  .category li {
    list-style: none;
    display: inline-block;
    padding: 3px;
    font-size: 15px;
    color: deepskyblue;
  }
  /* 图片列表的css */
  .photo img {
    width: 100%;
  }
  .photo li {
    position: relative;    
  }
  .photo li  p {
    position: absolute;
    left: 3px;
    bottom: 4px;
    background-color:rgba(0,0,0,0.3);
    color: #fff;
  }
  .photo li  p  span {
    font-size: 16px;
    font-weight: 600;
    padding:5px;
    display: block;
  }


</style>


<script>
  // 导入common.js (导入的东西不能放在导出的default里面,负责会报错,也不符合逻辑)
  import common from '../../common/common.js'
  // 导入 indicator插件  显示数据加载中...
  import { Indicator } from 'mint-ui';

  export default{
    data(){
      return{
        categoryList:[],
        photoList:[]
      }
    },
    created(){
      // 获取分类列表数据
      this.getCategoryListData();
      // 获取图片分类列表 默认打开显示全部
      this.getPhotoListData(0);
    },
    methods:{
      // 定义获取分类列表数据的方法
      getCategoryListData:function(){
        // 使用es6的模板字符串来拼接url
        const url= `${common.apiHost}api/getimgcategory`;
        // console.log(url);
        // 发送get请求,获取数据
        this.$http.get(url).then(function(response){
            // console.log(response.body);
            this.categoryList = response.body.message;
        });
      },
      // 定义获取图片分类列表数据的方法 需要传参photoId
      getPhotoListData:function(photoId){
        // 显示数据加载中...
        Indicator.open({
          text: '数据加载中...',
          spinnerType: 'fading-circle'
        });
        const url=`${common.apiHost}api/getimages/${photoId}`
        // 发送get请求 获取数据
        this.$http.get(url).then(function(response){
            // 停止显示数据加载中...
            Indicator.close();
          // console.log(response.body.message);
          this.photoList = response.body.message;
        });
      }
    }
    // rander方法也可以渲染内容 作用和template一样
    // render:function(createElement){
    //   return createElement('h1', '我是photolist');
    // }
  }
</script>