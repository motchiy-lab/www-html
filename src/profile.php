<?php
$title = "プロフィール";
include_once "components/header.php";
include_once "components/render_items.php"; // ← 共通ロジック読み込み
?>

<section class="section highlight">
  <h2>概要</h2>
  <p>
    このページでは，いろんなページへのリンクが集められています。<br>
    自分のチャンネルとか，友達のウィキとか，そんな感じです。
  </p>
</section>

<section class="section" id="motchiy">
  <h2>Motchiy</h2>
  <h3>プロフィールメッセージ</h3>
  <p>こんなのを読む暇があるなら<br>他の事した方が良いよ<br>特別な事は書いてないからね</p>

  <?php render_items_from_json("dataset/items_motchiy.json"); ?>
</section>

<section class="section" id="heiki">
  <h2>さいほうへいき</h2>
  <h3>プロフィールメッセージ</h3>
  <p>私は、真なる神。そう、汝らは我に平伏するべきである。この世の原初のあるべき姿に導こう。</p>

  <?php render_items_from_json("dataset/items_heiki.json"); ?>
</section>

<?php include_once "components/footer.php"; ?>