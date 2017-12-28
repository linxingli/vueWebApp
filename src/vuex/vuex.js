import Vue from 'vue';
// 导入vuex第三方包
import Vuex from 'vuex';
// 基于vue的第三包需要集成一下
Vue.use(Vuex); 

// 创建仓库实例
const store = new Vuex.Store({
  // 决定仓库里面数据的类型-------数据存放的模型
  state:{
    goodsCartList:[]  // 存放购物车商品 {goodsid，count}
  },
  // 仓库状态管理-------数据的增删改方法放在这里
  mutations:{
    // 添加购物车的方法
    addGoods(state,goodsCartInfo){
      state.goodsCartList.push(goodsCartInfo)
    },
    // 根据id删除goodsCartList里的某一项
    delGoodsById(state,id){
      // 遍历goodsCartList，判断id一致选项删除 (执行删除操作时，建议从后面遍历至前)
      for(var i = state.goodsCartList.length;i--;i>0){
        if(id == state.goodsCartList[i].goodsid){
          state.goodsCartList.splice(i,1);
        } 
      }
    }
  },
  // 获取数据的方法放在这里
  getters:{
    // 获取购物车商品数量
    getGoodsCount(state){
      let count = 0;
      state.goodsCartList.forEach(function(value,index){
        count += value.count
      })
      return count
    },
    // 获取购物车商品数据
    getGoodsList(state){
      return state.goodsCartList
    }
  }
});

// 导出store
export default store