<?php
// 設定ファイル読み込み
require_once 'config.php';

// ---- ページID（クエリを除外してパスのみ） ----
$page_id = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// ---- IPアドレス（Cloudflare対応）----
$ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['REMOTE_ADDR'];

// ---- User-Agent ----
$ua = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';

// ---- bot除外（必要に応じて調整）----
$bot_keywords = ['bot', 'crawl', 'spider', 'slurp'];
$ua_lower = strtolower($ua);
foreach ($bot_keywords as $bot) {
    if (strpos($ua_lower, $bot) !== false) {
        return; // botは記録しない
    }
}

// ---- PV記録 ----
$sql = "INSERT INTO page_views (page_id, viewed_at, ip, user_agent)
        VALUES (:page_id, NOW(), :ip, :ua)";
$stmt = $pdo->prepare($sql);
$stmt->execute([
    ':page_id' => $page_id,
    ':ip'      => $ip,
    ':ua'      => $ua
]);
