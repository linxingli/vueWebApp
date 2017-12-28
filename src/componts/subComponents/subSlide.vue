<template>
  <div>
    <mt-swipe :auto="slideTime">
      <mt-swipe-item v-for="(item,index) in lunboArray" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<style scoped>
  div {
    height: 300px;
    width: 100%
  }
  
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

</style>

<script>
// 导入common.js
import common from '../../common/common.js';

export default {
  data() {
    return {
      lunboArray: [] //设置轮播图所需的模型
    };
  },
  props:['slideUrl','slideTime'],  //使用该轮播图子组件时需要传入slideUrl和slideTime
  
  //这个方法是Vue的生命周期方法之一，当我们实现了之后，当home.vue被创建出来的时候，就会自动调用
  created() {
    this.getLunboArrayData();
    // console.log(this.slideUrl);
  },
  // methods对象里面定义的方法,不会自动调用,只能被别人调用,他的职责是定义方法
  methods: {
    getLunboArrayData() {
      const url = `${common.apiHost}${this.slideUrl}`;
      // console.log(url);

      // this.$http.get(url).then(function(response){
          // console.log(response.body.message);
      //     // 将获取的数据赋值给lunboArray
      //     this.lunboArray = response.body.message;
      // });     //以下是es6的写法
      this.$http.get(url).then(response => {
        this.lunboArray = response.body.message;
        
        if(this.lunboArray[0].src){
          this.lunboArray.forEach(element => {
            element.img = element.src
          });
        }   
        // console.log(this.lunboArray);

      });
    }
  }
}
</script>

