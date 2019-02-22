const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(__dirname, __filename, process.cwd())
module.exports = {
  context: path.resolve(process.cwd()),
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  },

  resolve: {
    alias: {
      
    },
    extensions: ['.ts', '.tsx'],
  },

  mode: process.env.NODE_ENV || 'development',

  entry: {
    client: './src/index.tsx',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      // {
      //   test: /\.tsx?$/,
      //   exclude: /(node_modules)/,
      //   loader: 'babel-loader'
      // }
    ],
  },

  plugins: [
    new CopyWebpackPlugin([path.resolve('./static/index.html')]),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './static/index.html',
    }),
  ],

  devtool: 'cheap-module-source-map'
}
