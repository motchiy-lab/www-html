<?php
    // カテゴリ辞書の読み込み
    $categoryDict = require __DIR__ . '/../dataset/category_dict.php';

    // 1. JSONファイルを読み込む
    $jsonPath = __DIR__ . '/../dataset/expenses.json';
    $rows = [];

    if (file_exists($jsonPath)) {
        $jsonRaw = file_get_contents($jsonPath);
        $decoded = json_decode($jsonRaw, true);

        // phpMyAdmin形式のJSONからデータを抽出する
        // [ {header}, {database}, {table: { "data": [...] } } ] という構造を解析
        foreach ($decoded as $node) {
            if (isset($node['type']) && $node['type'] === 'table' && isset($node['data'])) {
                $rows = $node['data'];
                break;
            }
        }

        // 2. 最新順（IDの降順）に並び替え
        if (!empty($rows)) {
            $rows = array_reverse($rows); 
        }
    }
?>

<table>
  <thead>
    <tr>
      <th>購入したもの</th>
      <th class="amount">金額</th>
      <th>カテゴリ</th>
      <th class="purchased_at">購入日</th>
    </tr>
  </thead>

  <tbody>
    <?php foreach ($rows as $row): ?>
    <tr>
      <td>
        <?php
          // 商品名の整形
          $item = strtoupper($row['item'] ?? '');
          $item = str_replace('-', ' ', $item);
          $item = htmlspecialchars($item);

          $receiptUrl = $row['receipt_url'] ?? '';

          if (!empty($receiptUrl)) {
            // PHPMyAdminのURLエスケープ（\/）はjson_decodeで自動解除されます
            $safeUrl = htmlspecialchars($receiptUrl);
            echo "<a href=\"{$safeUrl}\" class=\"text-link\">{$item}</a>";
          } else {
            echo $item;
          }
        ?>
      </td>
      <td class="amount">
        <?= number_format((int)($row['amount'] ?? 0)) ?>円
      </td>
      <td>
        <?php
          $cat = $row['category'] ?? '';
          echo htmlspecialchars($categoryDict[$cat] ?? $cat);
        ?>
      </td>
      <td>
        <?php
          if (!empty($row['purchased_at'])) {
            $date = new DateTime($row['purchased_at']);
            echo $date->format('Y年 n月 j日');
          }
        ?>
      </td>
    </tr>
    <?php endforeach; ?>
  </tbody>
</table>