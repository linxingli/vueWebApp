<template>
  <div>
    <!-- 购物车选项 -->
    <div v-for="(item,index) in buyCartListOK" :key="item.id" class="cart_item">
      <mt-switch @change="getTotal" v-model="item.value"></mt-switch>
      <div class="pic"><img :src="item.thumb_path" alt=""></div>
      <div class="center">
        <div class="title">{{item.title}}</div>
        <p class="price_num">
          <span>{{item.sell_price}}</span>&nbsp;&nbsp;&nbsp;
          <span> 已选数量 {{item.count}}</span>
        </p>
      </div>
      <mt-button :disabled="!item.value" @click="delBuyCart(item.id,index)" type="danger" size="small" >删除</mt-button>
    </div>
    <!-- 总计 -->
    <div class="total">
      <div class="left">
        <p>总计（不含运费）</p>
        <p>已经勾商品 <span class="total_count">{{totalCounts}}</span> 件，总价 <span class="total_price"> &yen; {{totalPrices}}</span> 元</p>
      </div>
      <mt-button type="danger" size="normal">去结算</mt-button>
    </div>
  </div>
</template>

<style scoped>
.total_count,.total_price {
  color: red;
  font-size: 20px;
}
.total {
  display:flex;
  /* 主轴方向：左右靠边，中间等距 */
  justify-content: space-between;
  /* 每一个上下居中 */
  align-items: center;
  padding: 10px;
  background-color: #ddd;
}
.left {
  margin-top: 20px;
}
.left p:first-of-type {
  color: #000;
  font-size: 18px;
}

.title{
  color: deepskyblue;
  font-size: 16px;

}
.price_num span:first-of-type {
  color: red;
  font-size: 15px;
}
.price_num span:last-of-type {
  font-size: 13px;
}
.cart_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.pic {
  width:70px;
  height: 70px;
  padding: 5px;
  border: 1px solid #ccc;
  margin-left: 5px;
  margin-right: 5px;
}
.pic img {
  width: 100%;
  height: 100%;
}
.center {
  padding: 10px;  
  flex: 1;
  height: 80px;  
  box-sizing: border-box;
  margin-right: 5px;  
}
.title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;
  overflow: hidden;
}
</style>


<script> 
  import { MessageBox } from 'mint-ui';
  import common from '../../common/common.js';
  export default{
    data(){
      return{
        buyCartList:[],
        buyCartListOK:[],
        // 总件数
        totalCounts:0,
        // 总价格
        totalPrices:0
      }
    },
    created(){
      // 获取购物车数据
      this.buyCartList = this.$store.getters.getGoodsList
      // console.log(this.buyCartList);
      // 定义一个临时obj 存放 {87:2,88:3}
      const tempObj = {}
      // 遍历this.buyCartList，判断：id相同项累加count
      this.buyCartList.forEach(element => {
        // 是否已存在tempObj[element.goodsid]
        if(tempObj[element.goodsid]){
          // 是，则累加
          tempObj[element.goodsid] += element.count
        }else{
          // 否，则新建
          tempObj[element.goodsid] = element.count
        }
      });
      // 将tempObj {87: 6, 88: 2} 转成数组，.join方法转成字符串 87,88
      const tempArr = [];
      for(var key in tempObj){
        tempArr.push(key)
      }    
      // 拼成url 发送请求获取数据
      const url = `${common.apiHost}api/goods/getshopcarlist/${tempArr.join()}`;
      // 遍历获取的数据数组
      this.$http.get(url).then(response=>{

        // 给response.body.message数组添加count/value属性
        response.body.message.forEach(element => {
          element.count = tempObj[element.id];
          element.value = true;
        });
        this.buyCartListOK = response.body.message;
        // console.log(this.buyCartListOK);
        this.getTotal();
      
      });
    },
    updated(){
      // this.getTotal();   // 找了1小时的bug
    },
    methods:{
      // 计算总计的方法
      getTotal(){
        let jianshu = 0;
        let zonjinger = 0;
        // 遍历buyCartListOK
        // console.log(this.buyCartListOK);
        if(this.buyCartListOK.length){
          this.buyCartListOK.forEach(element => {
            // 判断buyCartListOK.value == true
            if(element.value){
              // 累加buyCartListOK.count 总件数
            jianshu += element.count;
              // 累加 （buyCartListOK.count * buyCartListOK.price） 总价格
            zonjinger += (element.sell_price*element.count);
            }
          });
        }
        this.totalCounts = jianshu;
        this.totalPrices = zonjinger;
      },
      // 点击删除购物车单项
      delBuyCart(id,index){
        MessageBox.confirm('请您三思~').then(action => {
          // 根据goodsid删除仓库里面数据
          this.$store.commit('delGoodsById',id);
          // 根据index删除buyCartListOK的单条数据
          this.buyCartListOK.splice(index,1)
          // 调用计算方法
          this.getTotal();
        },cancel=>{
      });
      }  
    }
  }
</script>