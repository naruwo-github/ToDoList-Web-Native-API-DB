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
4. API: [localhost:4000](http://localhost:4000) 【WIP: まだdockerで起動不可】
   1. mongoDB起動: ```mongod```(Homebrewでも可: ```brew services stop mongodb-community```)
   2. APIサーバの起動: ```api/```で```npm run start```