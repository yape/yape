<?php
$msg = $_REQUEST["msg"];
$userId = $_REQUEST["userId"];
$userName = $_REQUEST["userName"];
$msg = urldecode($msg);
$userId = urldecode($userId);
$userName = urldecode($userName);
if(!eregi("\n$", $msg)){
	$msg = $msg."\n";
}
date_default_timezone_set('PRC');
file_put_contents("../files/chat.txt",$userName."(".$userId.")"."[".date('Y-m-d H:i:s',time())."]:".$msg,FILE_APPEND);
?>