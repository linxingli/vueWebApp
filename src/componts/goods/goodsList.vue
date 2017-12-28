<template>
  <div>
    <ul class="mui-table-view mui-grid-view">
      <li v-for="item in goodsList" :key="item.id" class="mui-table-view-cell mui-media mui-col-xs-6">
        <div class="item">
          <router-link :to="'/goods/goodsInfo/'+item.id">
            <img class="mui-media-object" :src="item.img_url">
            <div class="mui-media-body title_self">{{item.title}}</div>
            <div class="price_self">
              <span class="now">{{item.sell_price}}</span>
              <span class="old">{{item.market_price}}</span>
            </div>
            <div class="info_self">
              <span class="status">热卖中</span>
              <span class="num">剩余{{item.stock_quantity}}件</span>
            </div>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .mui-table-view.mui-grid-view .mui-table-view-cell {
    /* padding: 0; */
    margin: 0;
  }
  .item {
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object{
    width: 90%;
  }
  .title_self {
    text-align: left;
    /* padding: 5px; */
  }
  .price_self {
    margin-top: 10px;
    text-align: left;
    color: #555;
    font-size: 14px;
  }
  .now {
    color: red;
    font-size: 16px;
  }
  .old {
    text-decoration: line-through;
  }
  .info_self {
    display: flex;
    justify-content: space-between;
    color: #555;
    font-size: 14px;
  }
</style>


<script>
  // 导入common.js
  import common from '../../common/common.js';
  export default{
    data(){
      return{
        goodsList:[]
      }
    },
    created(){
      // 发送商品列表数据请求  获取数据
      this.getGoodsListData();
    },
    methods:{
      // 定义getGoodsListData
      getGoodsListData(){
        // url
        const url = `${common.apiHost}api/getgoods`
        // 发送请求 获取数据
        this.$http.get(url).then(response=>{
          // console.log(response.body.message);
          this.goodsList = response.body.message;
        });
      }
    }
  }
</script>
