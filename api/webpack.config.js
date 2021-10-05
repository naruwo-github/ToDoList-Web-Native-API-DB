const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    server: './server.ts'
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
  resolve: {
    extensions: [
      '.ts', '.js',
    ]
  },
  module: {
    rules: [
      {
        // TS to ES2015
        test: /\.ts$/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        // ES6~8 to ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
}