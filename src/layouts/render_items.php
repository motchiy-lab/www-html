<?php
function render_items_from_json($json_path) {

    // JSON 読み込み
    $items = json_decode(file_get_contents($json_path), true);

    // スマホなら2列、PCなら4列
    $columns = is_mobile() ? 2 : 4;
    $total = count($items);

    // 最終行のアイテム数（あまり）
    $last_row_count = $total % $columns;
    if ($last_row_count === 0) {
        $last_row_count = $columns;
    }

    // 最終行の開始位置
    $last_row_start = $total - $last_row_count;

    echo '<div class="item-wrap">';

    foreach ($items as $i => $item) {
        $is_last_row = ($i >= $last_row_start);
        $is_right_edge = (($i + 1) % $columns === 0);

        echo '<div class="item';
        if ($is_last_row) echo ' no-bottom';
        if ($is_right_edge) echo ' no-right';
        echo '">';

        echo '<h3>' . htmlspecialchars($item['title']) . '</h3>';

        foreach ($item['links'] as $link) {
            echo '<a href="' . htmlspecialchars($link['url']) . '" class="link-btn">'
               . htmlspecialchars($link['label']) . '</a>';
        }

        echo '</div>';
    }

    echo '</div>';
}
