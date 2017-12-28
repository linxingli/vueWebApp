<template>
  <div>
    <div class="num">
      <span @click="minus">-</span>
      <span> {{count}} </span>
      <span @click="add">+</span>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        count:1
      }
    },
    // 库存
    props:['stockQuantity'],
    methods:{
      // count--
      minus(){
        if(this.count<=1){
          return
        }
        this.count-=1;
        // 触发事件emit,把count传递给父组件goodsinfo
        this.$emit('countChange',this.count);
      },
      //count++
      add(){
        if(this.count >= this.stockQuantity){
          return
        }
        this.count+=1;
        // 触发事件emit,把count传递给父组件goodsinfo
        this.$emit('countChange',this.count);
      }
    }
  }
</script>

<style scoped>
  .num span {
    display: inline-block;
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
    line-height: 25px;
    text-align: center;
    margin-bottom: 10px;
  }
</style>
