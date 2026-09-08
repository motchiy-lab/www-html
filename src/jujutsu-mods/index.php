<?php
$files = array_diff(scandir(__DIR__), ['.', '..', 'index.php']);
$files = array_values($files);if (count($files) > 1) {
$zipname = 'files_' . date('Ymd_His') . '.zip';
$zip = new ZipArchive();
$tmpZip = tempnam(sys_get_temp_dir(), 'zip');
if ($zip->open($tmpZip, ZipArchive::OVERWRITE) === TRUE) {
    foreach ($files as $f) {
        $fullpath = __DIR__ . DIRECTORY_SEPARATOR . $f;
        if (is_file($fullpath)) {
            $zip->addFile($fullpath, $f);
        }
    }
    $zip->close();
    header('Content-Type: application/zip');
    header('Content-Disposition: attachment; filename="' . $zipname . '"');
    header('Content-Length: ' . filesize($tmpZip));
    readfile($tmpZip);
    unlink($tmpZip);
    exit;
}
    http_response_code(500);
    exit;
}