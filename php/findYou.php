<?php
header('Content-type: text/html;charset=utf-8');
$num = $_REQUEST['num'];
$rs = file_get_contents("../files/data.txt");
$rss = split(";",$rs);
$result = "";
for($i=$num;$i<sizeof($rss);$i++){
  if($result=="") $result = $rss[$i];
  else $result = $result.";".$rss[$i];
}
echo $result;
?>