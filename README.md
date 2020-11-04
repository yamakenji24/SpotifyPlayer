# Spotify Player
[![Software License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Release GitHub Page](https://github.com/yamakenji24/SpotifyPlayer/workflows/Release%20GitHub%20Page/badge.svg?branch=master)

## 概要
Spotify APIを利用した音楽再生アプリです．React+Redux, TypeScriptを利用して管理しています． 

### とりあえず動作確認
以下サイトから、動作を確認できると思います(要ログイン)  
[spotifyplayer.io](https://yamakenji24.github.io/SpotifyPlayer/)

### 手元で動かす
#### 事前作業
Spotify API からid, secret, uri, scope等々を取得しておく  
[spotify for developer](https://developer.spotify.com/dashboard/login)

#### リポジトリから

```
1. git pull origin master
2. npm ci
3. .env にspotify api から取得した情報を記入(.env.sampleを参考に)
4. npm start
```

Class Componentで記述した際の詳細は記事にまとめていますので参考にどうぞ．  
[React+Reduxで音楽検索アプリを作ってみた](https://qiita.com/yamakenji/items/b94fa2ab104679b29b3a)
