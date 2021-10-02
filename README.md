# ToDoList-Web-Native-API-DB
To Do List Application: Web app, Native app, API, DB.

## 内容
- ToDoリストのアプリケーション
  - ブラウザアプリ: React.js
  - ネイティブアプリ: Swift(iOS), Kotlin(Android)
  - API: Node.js, Express
  - データベース: MongoDB

## 実装優先順
1. APIかつDB
1. ブラウザアプリ
1. ネイティブアプリ（オプション）

## プロジェクトの実行方法
1. dockerイメージを作成（```docker-compose build```）
2. dockerコンテナの起動（```docker-compose up```）
3. ブラウザアプリ: [localhost:3000](http://localhost:3000)
4. API: [localhost:4000](http://localhost:4000)
   1. エンドポイントへのアクセス例
      1. GET: ```curl -X GET localhost:4000/tasks```
      2. POST: ```curl -X POST -H "Content-Type: application/json" -d '{...}' localhost:4000/tasks```
      3. PUT: ```curl -X PUT -H "Content-Type: application/json" -d '{...}' localhost:4000/tasks/:_id```
      4. DELETE: ```curl -X DELETE localhost:4000/tasks/:_id```
      5. レスポンスのJSONを整形して表示するには、パイプで-mjson.toolの実行の入力値にすれば良い: ``` | python -mjson.tool```
5. MongoDB: [localhost:27017](http://localhost:27017)
6. APIサーバでモックデータを使う場合は```/browser-app/json_server/```にて```$(npm bin)/json-server --watch db.json -p 4000```を実行