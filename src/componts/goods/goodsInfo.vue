<template>
  <div>
    <!-- 轮播图部分 -->
    <div class="slide">
      <subSlide :slideUrl="'api/getthumimages/'+$route.params.goodsid" :slideTime="1000"></subSlide>
    </div>
    <!-- 商品信息 -->
    <div class="goods_info">
      <h4>{{GoodsData.title}}</h4>
      <div class="price">
        <span class="scj">市场价:&yen;<s>{{GoodsData.market_price}}</s></span>
        <span class="xsj">销售价:<i style="color:red">&yen;{{GoodsData.sell_price}}</i></span>
      </div>
      <!-- 数量子组件 -->
      <!-- 加v-if的作用： 确保在有数据的情况下渲染该组件,不然只会拿到undefined-->
      <subNum v-if="GoodsData.stock_quantity" :stockQuantity="GoodsData.stock_quantity" v-on:countChange="getCount"></subNum>
      <mt-button size="normal" type="primary">立即购买</mt-button>
      <mt-button size="normal" @click="sendCount" type="danger">加入购物车</mt-button>
    </div>
    <!-- 商品参数 -->
    <div class="goods_param">
      <h5>商品参数</h5>
      <p>商品货号:{{GoodsData.goods_no}}</p>
      <p>库存情况:{{GoodsData.stock_quantity}}</p>
      <p>上架时间:{{GoodsData.add_time | fmDate("YYYY-MM-DD")}}</p>
    </div>
    <!-- 操作按钮 -->
    <div class="btns">
      <mt-button size="large" @click="goToTWJS" plain type="primary">图文介绍</mt-button>
      <mt-button size="large" @click="goToReview" plain type="danger">商品评论</mt-button>
    </div>
  </div>
</template>

<style scoped>
  .slide,.goods_info,.goods_param,.btns {
    margin: 8px;
    border: 1px solid rgba(0,0,0,0.3);
    padding: 5px;
    border-radius: 5px;
  }
  
  .goods_info h4 {
    color: deepskyblue;
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  .price {
    color: #555;
    font-size: 14px;
    padding: 5px 0;
  }
  .xsj {
    font-size: 16px;    
    margin-left: 10px;    
  }
  .goods_param h5 {
    font-size: 15px;
    color: #444;
    padding: 5px 0;        
    border-bottom: 1px solid #ccc;        
  }
  .btns {
    padding: 10px;
  }
  .btns :first-child {
    margin-bottom: 10px;
  }
</style>

<script>
  import { Toast } from 'mint-ui';
  // 导入subNum子组件
  import subNum from '../subComponents/subNum.vue';
  // 导入轮播子组件
  import subSlide from '../subComponents/subSlide.vue';
  // 导入common
  import common from '../../common/common.js';
  // 导入bus (用于非父子组件的数据传递) 使用vuex的方式代替
  // import bus from '../../common/commonBus.js';

  export default{
    data(){
      return{
        GoodsData:{},
        count:1
      }
    },
    created(){
      // console.log(this.$route.params.goodsid);
      this.getGoodsData();
    },
    // 注册轮播图及subNum子组件
    components:{
      subSlide,
      subNum
    },
    methods:{
      // 定义获取商品详情的函数
      getGoodsData(){
        const url =  `${common.apiHost}api/goods/getinfo/${this.$route.params.goodsid}`;
        // console.log(url);
        this.$http.get(url).then(response=>{
          // console.log(response.body.message[0]);
          this.GoodsData = response.body.message[0];
        })
      },
      // 跳转至图文介绍的方法
      goToTWJS(){
        this.$router.push({ name:'/goods/twjs', params: { goodsid:this.$route.params.goodsid}})
      },
      // 跳转至评论
      goToReview(){
        // 带查询参数，变成 /register?plan=private
        this.$router.push({ path: '/goods/goodsReview', query: { goodsid: this.$route.params.goodsid }})
      },
      // 获取子组件发送过来的数据count
      getCount(count){
        // console.log(`我是父组件${count}`);
        this.count = count;
      },
      // 点击添加购物车后执行 发送数据给App.vue（vuex）
      sendCount(){
        Toast({
          message: '添加购物车成功',
          position: 'middle',
          duration: 2000
        });
        // bus.$emit('countDataChange',this.count);   使用vuex的方式代替
        // 存储数据至vuex
        this.$store.commit('addGoods',{goodsid:this.GoodsData.id,count:this.count});
      }
    }
  }
</script>
