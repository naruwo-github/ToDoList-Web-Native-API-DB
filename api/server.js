// サーバ設定

const express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require("mongoose"),
    Task = require("./models/taskModel"),
    bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// サーバとエンドポイントのルーティング
const routes = require("./api/routes/taskRoutes");
routes(app);

// 指定ポートでのリッスン（外部からのアクセスに備えて待機すること）開始
app.listen(port);