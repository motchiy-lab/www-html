<?php
$title = "ディスコードボット";
include_once __DIR__ . "/components/header.php";
?>

<section>
  <h2 id="特徴">特徴</h2>
  <ul>
    <li>シンプルなコマンド構造</li>
    <li>拡張しやすいディレクトリ構成</li>
    <li>オープンソース</li>
    <li>Discordのロールで権限を管理</li>
  </ul>
</section>

<section>
  <h2 id="開発環境">開発環境</h2>
  <p>実行しているサーバーの情報です。</p>
  <table>
    <thead>
      <tr>
        <th>項目</th>
        <th>名称</th>
        <th>バージョン</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>OS</td>
        <td>Ubuntu Server</td>
        <td>24.04 LTS</td>
      </tr>
      <tr>
        <td>言語</td>
        <td>Python</td>
        <td>3.12.3</td>
      </tr>
      <tr>
        <td>ソフト</td>
        <td>tmux</td>
        <td>3.4</td>
      </tr>
    </tbody>
  </table>
  <p>
    ※記事を書いたときのバージョンであり、アップデートによって互換性がなくなる可能性があります。<br>
    venv(Python標準の仮想環境)にインストールしたライブラリは<code>requirements.txt</code>の通りに進めてください。
  </p>
</section>

<section>
  <h2 id="ディレクトリ構成">ディレクトリ構成</h2>
  <h3 id="discord-bot">Discord Bot</h3>
  <pre><code>├── README.md
├── main.py
├── message.toml
├── pyproject.toml
├── requirements.txt
├── run.sh
├── settings.toml
├── setup.sh
└── src/</code></pre>

  <h3 id="minecraftサーバー">Minecraftサーバー</h3>
  <pre><code>├── server
│   ├── economy_sv
│   ├── jujutsu_sv
│   ├── lobby_sv
│   ├── proxy_sv
│   ├── rta_sv
│   └── test_sv
├── servers.toml
└── settings.toml</code></pre>
</section>

<section id="setup">
  <h2 id="始め方">始め方</h2>

  <h3 id="レポジトリをクローン">1. レポジトリをクローン</h3>
  <pre><code>git clone https://github.com/MotchiyTuti/motchiy-discordbot-oss.git
cd motchiy-discordbot-oss</code></pre>

  <h3 id="ボットを作成">2. ボットを作成</h3>
  <p><a href="https://discord.com/developers/applications" class="text-link">Discord Developer Portal</a>でBotを作成します。</p>

  <h4 id="基本権限（必須）">基本権限（必須）</h4>
  <ul>
    <li>View Channels</li>
    <li>Send Messages</li>
    <li>Read Message History</li>
    <li>Embed Links</li>
    <li>Attach Files</li>
  </ul>

  <h4 id="メッセージ・ユーティリティ系">メッセージ・ユーティリティ系</h4>
  <ul>
    <li>Add Reactions</li>
    <li>Use External Emojis</li>
    <li>Manage Messages</li>
  </ul>

  <h4 id="管理機能">管理機能</h4>
  <ul>
    <li>Kick Members</li>
    <li>Ban Members</li>
    <li>Moderate Members</li>
    <li>Manage Roles</li>
    <li>Manage Channels</li>
  </ul>

  <h4 id="ボイス系">ボイス系</h4>
  <p>なし</p>

  <h4 id="gateway-intents">Gateway Intents</h4>
  <ul>
    <li>MESSAGE CONTENT INTENT</li>
    <li>SERVER MEMBERS INTENT</li>
    <li>PRESENCE INTENT</li>
  </ul>

  <h4 id="非推奨">非推奨</h4>
  <ul>
    <li>Administrator</li>
  </ul>

  <h4 id="ロール構成">ロール構成</h4>
  <ul>
    <li>admin</li>
    <li>mod</li>
    <li>staff</li>
    <li>@everyone</li>
  </ul>
  <p><code>@everyone &gt; staff &gt; mod &gt; admin</code>の順に、権限が強くなります。</p>

  <h3 id="セットアップを実行">3. セットアップを実行</h3>
  <pre><code>source setup.sh --token=YOUR_TOKEN</code></pre>

  <h3 id="設定を編集">4. 設定を編集</h3>
  <p><code>settings.toml</code>の内容を適切なものに書き換えます。</p>

  <h3 id="ボットを起動">5. ボットを起動</h3>
  <pre><code>tmux new -t discordbot-oss
python3 main.py</code></pre>
</section>

<section id="usage">
  <h2 id="使い方">使い方</h2>
  <h3 id="コマンド">コマンド</h3>
  <p>
    先頭に<code>!</code>をつけて送信します。<br>
  </p>

  <ul>
    <li>
      <p>スタート<br>
      Minecraftサーバーを起動します。<br>
      <code>!start SERVER_NAME</code>…"SERVER_NAME"を起動<br>
      <code>!start all</code>…すべてのサーバーを起動</p>
    </li>

    <li>
      <p>ストップ<br>
      Minecraftサーバーを停止します。<br>
      <code>!stop SERVER_NAME</code><br>
      <code>!stop all</code></p>
    </li>

    <li>
      <p>ステータス<br>
      起動状態を確認<br>
      <code>!status SERVER_NAME</code><br>
      <code>!status ls</code></p>
    </li>

    <li>
      <p>職業の設定を更新<br>
      <code>!jobsconf</code></p>
    </li>

    <li>
      <p>スタートアップ<br>
      デフォルトサーバー設定<br>
      <code>!startup add SERVER_NAME</code><br>
      <code>!startup rem SERVER_NAME</code><br>
      <code>!startup ls</code></p>
    </li>

    <li>
      <p>許可<br>
      ホワイトリストにユーザーを追加<br>
      <code>!allow USER_NAME</code>
    </li>

    <li>
      <p>拒否<br>
      ホワイトリストからユーザーを削除<br>
      <code>!deny USER_NAME</code></p>
    </li>

    <li>
      <p>ヘルプ<br>
      コマンドの一覧を表示<br>
      <code>!help</code><br>
      <code>!help COMMAND</code></p>
    </li>
  </ul>
</section>

<section id="divelop">
  <h2 id="開発">開発</h2>
  <p><a href="#setup" class="text-link">始め方</a>を参考にインストールしてください。</p>
</section>

<section>
  <h2 id="追加予定の機能">追加予定の機能</h2>
  <ul>
    <li>Web管理画面</li>
    <li>ログ機能</li>
    <li>プラグインシステム</li>
    <li>APT対応</li>
  </ul>
</section>

<section>
  <h2 id="ライセンス">ライセンス</h2>
  <p><a href="https://licenses.opensource.jp/MIT/MIT.html" class="text-link">MIT License</a></p>
</section>

<section>
  <h2 id="著作者">著作者</h2>
  <ul>
    <li><a href="/profile#motchiy" class="text-link">Motchiy</a></li>
  </ul>
</section>

<?php include_once __DIR__ . "/components/footer.php"; ?>