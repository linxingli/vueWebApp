const path = require('path');

//抽离第三方样式需要的插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//根据参照文件生成index.html
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = require('webpack')

//打包之前，删除dist目录
var CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
  // 入口
  entry:{
    //属性名称，是最终生成好的js文件名称，值是我们安装时候的第三方包的名称
    mintUi:['mint-ui'],
    moment:['moment'],
    quanjiatong:['vue','vue-router','vuex'],
    vueResource:['vue-resource'],
    vuePreview:['vue-preview'],
    axios:['axios'],
    bundle:'./src/main.js' //别忘记自己写的源代码
  },
  // 出口
  output:{
      path:path.join(__dirname,'dist'),
      filename:'js/[name].js'
  },
  module: {
    //loaders的配置
    rules: [
      {
        test: /\.vue$/,
        use: [{ loader: "vue-loader" }]
      },
      {
        test: /\.css$/,
        use: [{ loader: "vue-style-loader" }, { loader: "css-loader" }]
      },
      {
        test:/\.(ttf|png|jpg|svg|gif)$/,
        use: [
            { loader: "url-loader" }
        ]
      },
      // 下面两个对象的作用：将es6转为es5
      { 
          test: /\.js$/, 
          exclude: /node_modules/, // 忽略node_modules文件夹
          loader: "babel-loader" 
      },
      {
          test: /vue-preview.src.*?js$/,  // 最后一天打包优化的时候需要对vue-preview 进行es5转换（这是一个没有事先进行es5转换的第三方包，其他包都有预先es5转换处理的）
          loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    // 别名设置 适合后期需要换文件位置的文件使用，方便路径统一维护
    alias: {
      '@': './components'
    },
    extensions: ['.vue','.js', '.json'] //自动补全文件的后缀
  },
  plugins: [
    // 打包之前，删除dist目录，写在其它插件前面
    new CleanWebpackPlugin('dist'),
    // 根据参照文件生成index.html的插件
    // 压缩index.html的插件
    new HtmlWebpackPlugin({
      template:'./template.html',//参照文件
      filename:'index.html', //生成的index.html
      minify:{
          collapseWhitespace:true,//压缩空格
          removeComments:true,//去除注释
          minifyJS:true,//压缩js
          minifyCSS:true//压缩css
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"' //设置为生产环境，到时候到如xx.min.js
      }
    }),
    // 使用 webpack 的 DefinePlugin 来指定生产环境，以便在压缩时可以让 UglifyJS 自动删除警告代码块---来自vue文档 》生产环境部署
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false //压缩警告
        },
        comments: false //去掉版权信息等注释
    }),
    //抽离第三方包的，这里不要写bundle.js
    new webpack.optimize.CommonsChunkPlugin({
      name: ['mintUi','moment','quanjiatong','vueResource','vuePreview','axios'],
      // filename: "vendor.js"
      // (给 chunk 一个不同的名字)
  
      minChunks: Infinity,
      // (随着 entry chunk 越来越多，
      // 这个配置保证没其它的模块会打包进 vendor chunk)
    }),

    //抽离出来的样式，存放到css目录下面的styles.css
    new ExtractTextPlugin("css/styles.css")
  ]
};
