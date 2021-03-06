const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
function resolve(dir) {
  return path.join(__dirname, '../', dir);
}
const config = {
  entry: {
    'vue-loading': './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    library: 'VueLoading',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', 'vue'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    // new CleanWebpackPlugin(['demo'], {
    //   root: path.resolve(__dirname, '../'), //根目录
    //   verbose: true, //开启在控制台输出信息
    //   dry: false //启用删除文件
    // }),
    new VueLoaderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([
      {
        from: resolve('static'),
        to: 'static',
        ignore: ['.*']
      }
    ])
  ],
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   loader: 'babel-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: path.resolve(__dirname, 'node_modules') // 排除文件
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  }
};
module.exports = config;
