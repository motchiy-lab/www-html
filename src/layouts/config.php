<?php
// DB接続設定
$db_host = 'localhost';
$db_name = 'web_db';
$db_user = 'apache2';
$db_pass = 'MXH!fhZw0k9Dm8ni';

try {
    $pdo = new PDO(
        "mysql:host=$db_host;dbname=$db_name;charset=utf8mb4",
        $db_user,
        $db_pass
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("DB接続エラー: " . $e->getMessage());
}