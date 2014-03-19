<!-- 最新 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="http://cdn.bootcss.com/twitter-bootstrap/3.0.3/css/bootstrap.min.css">
<div class="panel panel-default" style="height:90%">
<?php
$urlId = $_REQUEST["urlId"];
$rs = file_get_contents("../blogContents/".$urlId.".txt");
echo $rs;
?>
</div>