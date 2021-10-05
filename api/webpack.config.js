const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    server: './server.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'node',
  node: {
    // expressを用いて起動するなら必要
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()], // expressを用いて起動する場合にエラーを回避するため必要
  module: {
    rules: [
      {
        // ES6~8 to ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}