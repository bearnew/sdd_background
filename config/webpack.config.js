import path from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  context: __dirname,
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