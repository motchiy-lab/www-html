<?php
$title = "規約とプライバシー";
include_once 'components/header.php';
?>

<!-- 利用規約 -->
<section class="section">
  <h2>利用規約</h1>
  <?php
    $markdown = file_get_contents('content/rules.md');
    echo $md->text($markdown);
  ?>
</section>

<!-- プライバシーポリシー -->
<section class="section">
  <h2>プライバシーポリシー</h1>
  <?php
    $markdown = file_get_contents('content/privacy-policy.md');
    echo $md->text($markdown);
  ?>
</section>

<?php include'components/footer.php'; ?>
