<?php

header('Content-type: text/html;charset=utf-8');

set_time_limit(0);

$num = $_REQUEST['msgNum'];

///////

//echo "num is".$num."<br/>";

$userId = $_REQUEST['userId'];

$limitTime = 120;

///////

//echo "id is".$userId."<br/>";

$inTime = time();

while(true){

	$rs = file_get_contents("../files/chat.txt");

	if(empty($rs)) continue;

	else{

		$rss = split("\n",$rs);

		$result = "";

		for($i=$num;$i<sizeof($rss);$i++){

			if(empty($rss[$i])) {continue;}

			$m = strpos($rss[$i],"(");

			$n = strpos($rss[$i],")");
			
			if($num==0);

			else if($userId==substr($rss[$i],$m+1,$n-$m-1)) continue;

			if($result=="") $result = $rss[$i];

			else $result = $result."\n".$rss[$i];

		}

		if($num == sizeof($rss)-1||empty($result));

		else {echo (sizeof($rss)-1)."%".$result;break;}

	}

	if(time()-$inTime>=$limitTime){

		break;

	}

	sleep(1);

}

?>