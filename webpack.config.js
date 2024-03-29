const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',//入口
  output: { // 输出
    filename: 'main.js',
    path: path.resolve(__dirname, 'build') // __dirname 当前路径的绝对路径
  },
  mode:'development',
  devServer: {
    contentBase: './build',
    compress: true,
    port: 8080,
    hot:true,
  },
  module: {
    rules: [ //规则
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env',]
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attributes:{
              list:[
                {
                    tag:'img',
                    attribute:"src",
                    type:"src"
                },{
                    tag:'img',
                    attribute:"data-src",
                    type:"src"
                },
              ],
            },
            minimize:true //生产模式
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use:{
            loader:'file-loader',
            options:{
                outputPath:"images/",
                publicPath:"./images",
            }
        },
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ // 打包输出HTML
      title: 'Hello World app',
      minify: { // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true// 压缩内联css
      },
      filename: 'index.html',
      template: './src/index.html'
    }),
  ]
};
