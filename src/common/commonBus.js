// 这是一个公共的js文件(用时需导入)
// 导入vue第三方包
import Vue from 'vue';

// 创建一个公共的vue对象,充当非父子组件传递数据的中转站
var bus = new Vue();

// 记得一定要导出  不然比其他地方导入时会报错
export default bus