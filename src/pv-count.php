<?php
$title = "プレビューカウンター";
include_once "components/header.php";

require_once __DIR__ . '/components/config.php';

// DB接続
try {
    $pdo = new PDO(
        "mysql:host={$db_host};dbname={$db_name};charset=utf8mb4",
        $db_user,
        $db_pass,
        $db_options
    );
} catch (PDOException $e) {
    die("DB接続エラー: " . $e->getMessage());
}

// 現在の年月を取得
$year  = date('Y');
$month = date('m');

// 今月初と来月初（今月末までの判定用）
$start = "{$year}-{$month}-01";
$end   = date('Y-m-d', strtotime("{$start} +1 month"));

// PV集計（空のpage_idを除外する条件を追加）
$sql = "
    SELECT 
        CASE 
            WHEN page_id LIKE '%.php/%' THEN '※Vulnerability Scanning※'
            ELSE page_id 
        END AS display_id, 
        COUNT(*) AS pv
    FROM page_views
    WHERE viewed_at >= :start
      AND viewed_at < :end
      AND page_id IS NOT NULL 
      AND page_id <> ''
    GROUP BY display_id
    ORDER BY pv DESC
";
$stmt = $pdo->prepare($sql);
$stmt->execute([':start' => $start, ':end' => $end]);
$rows = $stmt->fetchAll();
?>

<section>
<h2 class="pv-title">
    <?= $year ?>年 <?= (int)$month ?>月 のPV一覧
</h2>

<table>
  <thead>
    <tr>
      <th>ページ</th>
      <th>PV</th>
    </tr>
  </thead>
  <tbody>
    <?php if (empty($rows)): ?>
      <tr>
        <td colspan="2">今月のデータはまだありません</td>
      </tr>
    <?php else: ?>
      <?php foreach ($rows as $r): ?>
      <tr>
        <td><?= htmlspecialchars($r['display_id'], ENT_QUOTES, 'UTF-8') ?></td>
        <td><?= number_format($r['pv']) ?></td>
      </tr>
      <?php endforeach; ?>
    <?php endif; ?>
  </tbody>
</table>
</section>

<?php include_once 'components/footer.php'; ?>-