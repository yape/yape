<?php
 $title = $_REQUEST['title'];
 $content = $_REQUEST['content'];
 //TODO
 $userId = $_REQUEST['userId'];
 $userId = rand(100000,999999);

 $titleToSave = $title."-urlId-".$userId."\n";
 //svae title
 file_put_contents("../files/blogTitle.txt",$titleToSave,FILE_APPEND);
 //save content
 $content = str_replace("\n","<br/>\n",$content);
 $content = "<h2>".$title."</h2>\n".$content;
 file_put_contents("../blogContents/$userId.txt",$content);
?>