const base = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '../', dir);
}
base.entry = {
  app: resolve('example/index.js')
};
base.output = {
  filename: 'js/[name].js',
  path: path.resolve(__dirname, '../demo'),
  publicPath: './',
  library: 'VueLoading',
  libraryTarget: 'umd'
},

base.devtool = '#source-map';
base.mode = 'production';
base.plugins.push(
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: 'css/[name].css',
    chunkFilename: 'css/[id].css'
  }),
  new HtmlWebpackPlugin({
    template: resolve('index.html'),
    inject: 'body',
    hash: true,
    chunks: ['app']
  })
);
base.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true // set to true if you want JS source maps
    }),
    new OptimizeCSSAssetsPlugin({})
  ]
};
// base.externals = {
//   'vue': 'Vue',
// }
base.module.rules.push({
  test: /\.(less|css)$/,
  use: [
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
        sourceMap: false,
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
module.exports = base;
