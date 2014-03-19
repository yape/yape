<?php
$msg = $_REQUEST['msg'];
$msg = urldecode($msg).";";
file_put_contents("../files/data.txt",$msg,FILE_APPEND);
?>
