// サーバ設定

const express = require('express'),
  DIST_DIR = __dirname,
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  Task = require('./models/taskModel'),
  bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/Tododb')

// CORSのサーバーサイド側の許可を設定
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Credentials', true)

  if ('OPTIONS' == req.method) {
    res.send(204) // 204: No Content
  } else {
    next()
  }
})

// webpackの設定
app.use(express.static(DIST_DIR))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// サーバとエンドポイントのルーティング
const routes = require('./routes/taskRoutes')
routes(app)

// 指定ポートでのリッスン（外部からのアクセスに備えて待機すること）開始
app.listen(port)