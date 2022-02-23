# Webブラウザのアプリケーション
## ディレクトリ構成について
- src/
  - assets/: 画像ファイルとかCSVとかローカル参照で使うデータを格納する場所
  - components/: React.jsのコンポーネントを格納する場所
    - admin/
    - standard/
    - common/
  - global/: HTTPヘルパモジュールやCSSのようなグローバルに使用するものを格納する場所
  - store/: Redux関連
    - actions/
    - reducers/
    - ...
  - index.js: エントリーポイント
  - react-app-env.d.ts: 独自の型定義
  - router.js: ルーティング設定