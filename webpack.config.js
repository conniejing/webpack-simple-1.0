var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    'build': path.resolve(__dirname, './src/main.js'),
    'vendor': path.resolve(__dirname, './src/vendor.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].bundle.js' 
    //指代的是当前chunk的一个hash版本，也就是说，在同一次编译中，每一个chunk的hash都是不一样的；而在两次编译中，如果某个chunk根本没有发生变化，那么该chunk的hash也就不会发生变化。这在缓存的层面上来说，就是把缓存的粒度精细到具体某个chunk，只要chunk不变，该chunk的浏览器缓存就可以继续使用。
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      // {
      //   test: require.resolve('jquery'),  // 此loader配置项的目标是NPM中的jquery
      //   loader: 'expose?$!expose?jQuery', // 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
      // },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
      //自动生成入口html文件
      // new HtmlWebpackPlugin({
      //   template: '',
      //   chunk: ['build', 'vendor'],
      //   title: '首页'
      // }),
      //css单独打包
      new ExtractTextPlugin("[name].css"),
      //子模块加载公用模块次数超过2次，则打包进父模块
      new webpack.optimize.CommonsChunkPlugin({
        children: true,
        minChunks: 2
      }),
      //把vendor代码单独打包
      new webpack.optimize.CommonsChunkPlugin({  
        name : "vendor",
        minChunks : Infinity
      }),
      //ProvidePlugin的机制是：当webpack加载到某个js模块里，出现了未定义且名称符合（字符串完全匹配）配置中key的变量时，会自动require配置中value所指定的js模块。
      //jquery会被打包到入口js中
      new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          'window.$': 'jquery',
      }),  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: 9001,
    proxy: {  
      '/mock/*': {
        target: 'http://localhost:8080',
        rewrite: function(req) {
          req.url = req.url.replace(/^\/mock/, '');
        }
      }
    }
  },
  devtool: '#eval-source-map'
}
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    //压缩js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // Search for equal or similar files and deduplicate them in the output.
    // Note: Don’t use it in watch mode. Only for production builds.
    new webpack.optimize.DedupePlugin(),
    // Assign the module and chunk ids by occurrence count.
    new webpack.optimize.OccurrenceOrderPlugin()
  ])
}
