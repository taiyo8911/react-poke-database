# 🎮 Poke DATABASE

Reactで作成したポケモン図鑑ウェブアプリケーションです。色別にポケモンを検索・表示できます。

![React](https://img.shields.io/badge/React-18.x-blue)
![Bulma](https://img.shields.io/badge/Bulma-CSS-00d1b2)

## 📋 概要

PokeAPIを利用して、ポケモンを色別に検索・表示するシンプルなウェブアプリです。ユーザーはドロップダウンメニューから色を選択し、該当する色のポケモンの画像を一覧表示できます。

## ✨ 機能

- 🎨 **色別検索**: 10色のカラーフィルターでポケモンを検索
  - Black（黒）
  - Blue（青）
  - Brown（茶色）
  - Gray（灰色）
  - Green（緑）
  - Pink（ピンク）
  - Purple（紫）
  - Red（赤）
  - White（白）
  - Yellow（黄色）

- 🖼️ **画像ギャラリー**: グリッドレイアウトで見やすく表示
- 📱 **レスポンシブデザイン**: モバイルにも対応

## 🛠️ 使用技術

- **フレームワーク**: React 18.x
- **言語**: JavaScript (JSX)
- **CSSフレームワーク**: [Bulma](https://bulma.io/)
- **API**: [PokeAPI](https://pokeapi.co/)
- **ビルドツール**: Vite

## 📦 インストール

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/react-poke-database.git

# ディレクトリに移動
cd react-poke-database

# 依存関係をインストール
npm install
```

## 🚀 使い方

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスしてください。

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

## 📁 プロジェクト構成

```
react-poke-database/
├── src/
│   ├── App.jsx          # メインコンポーネント
│   ├── api.js           # PokeAPI連携ロジック
│   ├── main.jsx         # エントリーポイント
│   └── App.css          # スタイル
├── public/              # 静的ファイル
└── README.md
```

## 🔧 主要コンポーネント

- **Header**: アプリケーションのヘッダー
- **Form**: 色選択のドロップダウンとリロードボタン
- **Gallery**: ポケモン画像のグリッド表示
- **Image**: 個別のポケモンカード
- **Footer**: PokeAPIへのリンク

## 🌐 API仕様

このアプリは [PokeAPI v2](https://pokeapi.co/docs/v2) を使用しています。

- **エンドポイント**: `https://pokeapi.co/api/v2/pokemon-color/{color}/`
- **画像ソース**: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png`

## 📚 参考資料

- [Reactチュートリアル1：犬画像ギャラリーを作ろう](https://zenn.dev/likr/articles/6be53ca64f29aa035f07)
- [Bulma Documentation](https://bulma.io/documentation/)
- [PokeAPI Documentation](https://pokeapi.co/docs/v2)

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🙏 謝辞

- [PokeAPI](https://pokeapi.co/) - ポケモンデータの提供
- [Bulma](https://bulma.io/) - CSSフレームワーク
