const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname + '/src/polygon-utils.ts'),
  output: {
    path: path.resolve(__dirname + '/dist/'),
    filename: 'polygon-utils.js',
    libraryTarget: 'umd',
    library: 'polygon-utils',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   loader: 'babel-loader',
      //   exclude: /node_modules/,
      // },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        query: {
          declaration: false,
        }
      },
    ]
  }
}
