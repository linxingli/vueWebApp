const path = require('path');
//根据参照文件生成index.html
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js", //入口
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
            { loader: "file-loader" }
        ]
      }
    ]
  },
  // 根据参照文件生成index.html
  plugins: [
    new HtmlWebpackPlugin({
      template: "./template.html", //参照文件
      filename: "index.html" //生成的index.html
    })
  ]
};
