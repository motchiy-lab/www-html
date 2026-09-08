<?php
$title = "寄付のお願い";
include_once __DIR__ . '/components/header.php';
// JSONデータを読み込む
$json_data = file_get_contents(__DIR__ . '/dataset/expenses.json');
$data = json_decode($json_data, true);

// 合計金額を計算する
$total_amount = 0;
foreach ($data as $item) {
    if (isset($item['name']) && $item['name'] === 'expenses' && isset($item['data'])) {
        foreach ($item['data'] as $expense) {
            $total_amount += (int)($expense['amount'] ?? 0);
        }
    }
}
?>


<section class="section">
  <h2>寄付のお願い</h2>
  <p>このサービスは個人で開発・運営しています。
    <br>サーバー費用や開発時間はすべて自費でまかなっており、継続的な改善のために寄付を受け付けています。</p>
  <p>もしサービスが役に立ったと感じていただけたら、寄付をご検討いただけると嬉しいです。</p>
  <a href="#how-to" class="link-btn">寄付方法を見る</a>
</section>

<section class="section" id="how-to">
  <h2>寄付方法</h2>
  <h3>Amazonギフト券</h3>
  <p>以下のメールアドレスに，eギフトカードを送ってください</p>
  <a href="mailto:donate@motchiy.com">donate@motchiy.com</a>
  <br>
  <a href="https://www.amazon.co.jp/dp/B006DTLXSK?ref=altParentAsins_treatment_text_from_Any_to_Amazon&customizationToken=undefined&th=1">￥150～￥200,000</a>
</section>

<section class="section">
  <h2>寄付していただいた方へ</h2>
  <p>寄付していただいた方には、感謝の気持ちを込めて特別な機能や限定コンテンツを提供する予定です。</p>
</section>

<section class="section">
  <h2>収支報告</h2>
  <p>寄付金の使い道や収支状況については、定期的に報告する予定です。<br>透明性を大切にしていきます。</p>
  <?php include __DIR__ . "/components/report.php"; ?>
</section>

<section class="section">
  <h2>最後に</h2>
  <p>このサービスをより良くするために、皆様のご支援とフィードバックをお待ちしています。<br>
  今後もよろしくお願いします。</p>
</section>

<?php include_once __DIR__ . '/components/footer.php'; ?>
