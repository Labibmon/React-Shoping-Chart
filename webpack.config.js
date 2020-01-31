/*eslint comma-dangle: [2, "never"]*/
const path = require('path');
const hwp = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const JscramblerWebpack = require('jscrambler-webpack-plugin');

const DIST_DIR = (__dirname, 'dist');

module.exports = {
  watch: true,
  entry: {
    app: path.resolve(__dirname, 'src/index.js'), 
    print: path.resolve(__dirname, 'src/print.js') },
  devServer:{
    contentBase: path.join(__dirname, './'),
    historyApiFallback: true,
    port: 3000,
    disableHostCheck: true,
    hot: true },
  output: {
    path: path.resolve(DIST_DIR),
    publicPath: "/",
    filename: 'js/Index.bundle.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules')
    ],
    extensions: ['*', '.js', '.jsx']
  },
  module:{
    rules:[{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        fix: true
      }
    },{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          {
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          }
        ]
      }
    },{
      test: /\.scss$/,
      use: [ "style-loader", "css-loader", "sass-loader" ]
    },{
      test: /\.(csv|tsv)$/,
      use: ["csv-loader"]
    },{
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'html-loader'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=1000000&mimetype=application/font-woff'
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
      options: {
        outputPath: 'images'
      }
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
      options: {
        outputPath: 'fonts'
      }
    }]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new hwp({
      template: './dist/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "build.css"
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["css/*.*", "js/*.*", "fonts/*.*", "images/*.*","*.json"]
    }),
    new JscramblerWebpack({
      enable: false,
      chunks: ['app', 'print'],
      params: [],
      applicationTypes: {}
    })
  ]
};
