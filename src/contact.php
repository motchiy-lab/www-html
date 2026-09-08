<?php
$title = "お問い合わせ";
include __DIR__ . "/components/header.php";
?>

<?php
$status = $_GET['status'] ?? null;

$buttonText = "送信";
$disabled = "";
$buttonStyle = "";

if ($status === 'success') {
  $buttonText = "送信完了";
  $disabled = "disabled";
  $buttonStyle = "background: #60ff30; cursor: not-allowed;";
} elseif ($status === 'fail') {
  $buttonText = "送信失敗";
  $disabled = "disabled";
  $buttonStyle = "background: #ea5858; cursor: not-allowed;";
} elseif ($status === 'error') {
  $buttonText = "入力エラー";
  $disabled = "disabled";
  $buttonStyle = "background: #f4ff1d; cursor: not-allowed;";
}
?>

<section class="contact-section">
  <h2>お問い合わせ</h2>

  <form class="contact-form" method="post" action="/components/send.php">
    <div class="form-row">
      <div class="form-group">
        <label for="name">お名前</label>
        <input type="text" id="name" name="name" placeholder="Motchiy" required>
      </div>

      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="email" id="email" name="email" placeholder="info@motchiy.com" required>
      </div>
    </div>

    <label for="message">お問い合わせ内容</label>
    <textarea id="message" name="message" rows="5" required></textarea>
    
    <button type="submit" <?= $disabled ?> style="<?= $buttonStyle ?>">
      <?= htmlspecialchars($buttonText, ENT_QUOTES, 'UTF-8') ?>
    </button>
  </form>
</section>

<?php include_once __DIR__ . "/components/footer.php"; ?>