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

- restart
Minecraftサーバーを再起動します。  
`!stop example`> "example"サーバー再起動  
`!start all`> 起動中のすべてのサーバーを再起動

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

- present
誕生日プレゼントを管理します。
設定されたデータベースを使用します。  
`!present`> 対話型で誕生日プレゼントの予定を追加

- help
コマンドについての説明を表示します。  
`!help`> 使用可能なコマンド一覧と，簡単な説明を表示  
`!help example`> "example"コマンドの詳細な説明と，使用例を表示