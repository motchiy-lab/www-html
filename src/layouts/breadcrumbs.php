<?php
// 現在のURLパスを取得
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$parts = array_filter(explode('/', $path));

$homeName = "ホーム";
$currentPath = '';
?>

<ol class="breadcrumb-list">
  <li><a href="/"> <?php echo $homeName; ?></a></li>

  <?php 
  $count = count($parts);
  $i = 1;
  foreach ($parts as $part): 
    $currentPath .= '/' . $part;

    // 最後の階層かつ $title 変数がある場合はそれを使う
    if ($i === $count && isset($title)) {
      $displayTitle = $title;
    } else {
      $displayTitle = ucwords(str_replace(['-', '_', '.php'], ' ', urldecode($part)));
    }
  ?>
  <span class="separator"> &gt; </span>
  <li><a href="<?php echo $currentPath; ?>"><?php echo $displayTitle; ?></a></li>
  <?php 
    $i++;
  endforeach; 
  ?>
</ol>