const webpack = require('webpack');
const base = require('./webpack.base.conf');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const portfinder = require('portfinder');
let PORT = 8080;
function resolve(dir) {
  return path.join(__dirname, '../', dir);
}
base.entry = {
  app: resolve('example/index.js')
};
base.devtool = 'cheap-module-eval-source-map';
base.mode = 'development';
base.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new MiniCssExtractPlugin({
    filename: './css/[name].[hash].css',
    chunkFilename: './css/[id].[hash].css'
  }),
  new HtmlWebpackPlugin({
    template: resolve('index.html'),
    inject: 'body',
    hash: true,
    chunks: ['app']
  })
);
base.devServer = {
  contentBase: resolve('dist'),
  compress: true,
  port: 8080,
  host: '0.0.0.0',
  inline: true,
  historyApiFallback: false,
  quiet: true,
  // publicPath: '/',
  proxy: {}
  // setup: function(app) {}
};
base.module.rules.push({
  test: /\.(less|css)$/,
  use: [
    'css-hot-loader', //支持热更新
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../'
      }
    },
    {
      loader: 'css-loader',
      options: { modules: false }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        config: {
          path: resolve('postcss.config.js')
        }
      }
    },
    {
      loader: 'less-loader',
      options: { javascriptEnabled: true }
    }
  ]
});
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = PORT;
  portfinder.getPort(function(err, port) {
    if (err) {
      reject(err);
    } else {
      PORT = port;
      base.devServer.port = port;
      base.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [
              `Your application is running here: http://localhost:${port}`
            ]
          }
        })
      );
      resolve(base);
    }
  });
});
