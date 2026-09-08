## 特徴
- シンプルなコマンド構造
- 拡張しやすいディレクトリ構成
- オープンソース
- Discordのロールで権限を管理

## 開発環境
実行しているサーバーの情報です。
|項目|名称|バージョン|
|---|---|---|
|OS|Ubuntu Server|24.04 LTS|
|言語|Python|3.12.3|
|ソフト|tmux|3.4|

※記事を書いたときのバージョンであり、アップデートによって互換性がなくなる可能性があります。
venv(Python標準の仮想環境)にインストールしたライブラリは`requirements.txt`にまとめてあります。

## ディレクトリ構成
### Discord Bot
```
├── README.md
├── main.py
├── message.toml
├── pyproject.toml
├── requirements.txt
├── run.sh
├── settings.toml
├── setup.sh
└── src/
```

### Minecraftサーバー
```
├── server
│   ├── economy_sv
│   ├── jujutsu_sv
│   ├── lobby_sv
│   ├── proxy_sv
│   ├── rta_sv
│   └── test_sv
├── servers.toml
└── settings.toml
```


## 始め方
### 1. レポジトリをクローン
```bash
git clone https://github.com/MotchiyTuti/motchiy-discordbot-oss.git
cd motchiy-discordbot-oss
```

### 2. ボットを作成
[Discord Developer Portal](https://discord.com/developers/applications)でBotを作成します。

#### 基本権限（必須）
- View Channels
- Send Messages
- Read Message History
- Embed Links
- Attach Files

#### メッセージ・ユーティリティ系
- Add Reactions
- Use External Emojis
- Manage Messages

#### 管理機能
- Kick Members
- Ban Members
- Moderate Members
- Manage Roles
- Manage Channels
- 
#### ボイス系
なし

#### Gateway Intents
- MESSAGE CONTENT INTENT
- SERVER MEMBERS INTENT
- PRESENCE INTENT

#### 非推奨
- Administrator

#### ロール構成
- admin
- mod
- staff
- @everyone

`@everyone > staff > mod > admin`の順に、権限が強くなります。

### 3. セットアップを実行
```bash
source setup.sh --token=YOUR_TOKEN
```

### 4. 設定を編集
`settings.toml`の内容を適切なものに書き換えます。

### 5. ボットを起動
```bash
tmux new -t discordbot-oss
python3 main.py
```

## 使い方
### コマンド
先頭に`!`をつけて、Discordのテキストチャンネルに送信します。
以下は、それぞれのコマンドについての説明と使用例です。

- start
Minecraftサーバーを起動します。
すでに起動している場合、起動はできません。
`!start example`> "example"サーバーを起動
`!start all`> 設定されたすべての"デフォルトサーバー"を起動

- stop
Minecraftサーバーを停止します。
`!stop example`> "example"サーバーを停止
`!start all`> 設定されたすべての"デフォルトサーバー"を停止

- status
Minecraftサーバーの起動状態を確認します。
`!status example`> "example"サーバーの状態を確認(起動中/停止中)
`!status ls`> 起動中のすべてのサーバーを表示

- jobsconf
"Jobs Reborn"プラグインの設定を更新します。
`!jobsconf`> 設定された経済サーバーにて`/jobs reload`を実行

- dsconf
`!start all`などで起動する"デフォルトサーバー"のリストを変更します。
`!dsconf add example`> "examle"サーバーを追加
`!dsconf rem example`> "examle"サーバーを除外
`!dsconf ls`> すべての"デフォルトサーバー"を表示

- allow
ホワイトリストにユーザーを追加します。
`!allow example`> "example"ユーザーをホワイトリストに追加

- deny
ホワイトリストからユーザーを除外します。
`!deny example`> "example"ユーザーをホワイトリストから除外

- help
コマンドについての説明を表示します。
`!help`> 使用できるコマンドの一覧と、簡単な説明を表示
`!help example` > "example"コマンドについての詳細な説明と、使い方を表示

## 開発
開発を始める場合、[始め方](https://www.motchiy.com/discordbot-oss#setup)を参考にインストールしてください。

## 追加予定の機能
- Web管理画面
- ログ機能
- プラグインシステム
- APTコマンド等でのインストールを可能に

## ライセンス
[MIT License](https://licenses.opensource.jp/MIT/MIT.html)

## 著作者
- Motchiy