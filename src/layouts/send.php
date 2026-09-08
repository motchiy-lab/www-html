<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../contact?status=invalid");
    exit;
}

$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$message = trim($_POST["message"] ?? "");

if ($name === "" || $email === "" || $message === "") {
    header("Location: ../contact?status=error");
    exit;
}

$message = str_replace(["\r\n", "\r"], "\n", $message);

$data = "------------------------------\n";
$data .= "日時: " . date("Y-m-d H:i:s") . "\n";
$data .= "名前: " . $name . "\n";
$data .= "メール: " . $email . "\n";
$data .= "内容:\n" . $message . "\n";
$data .= "------------------------------\n\n";

$file = "/var/www/html/dev/mail.txt";

if (file_put_contents($file, $data, FILE_APPEND | LOCK_EX) !== false) {
    header("Location: ../contact?status=success");
} else {
    header("Location: ../contact?status=fail");
}
exit;