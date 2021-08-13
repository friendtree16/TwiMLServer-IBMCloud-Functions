# 概要
IBM Cloud FunctionsにTwiMLサーバーを構築する最も簡単なサンプル

# セットアップ
パッケージインストール
```
npm install
```

Webpackバンドルをビルド
```
npm run build
```

IBM Cloud Functionsにコードをデプロイ
```
npm run deploy

// deployコマンドの内容は以下
ibmcloud fn action update hello-twilio dist/bundle.js --kind nodejs:10
```