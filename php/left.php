<!-- 最新 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="http://cdn.bootcss.com/twitter-bootstrap/3.0.3/css/bootstrap.min.css">
<div class="list-group">
<?php
	$rs = file_get_contents("../files/blogTitle.txt");
	$rss = split("\n",$rs);
	for($i=0;$i<sizeof($rss);$i++){
		if(empty($rss[$i])) continue;
		$rsss = split("-urlId-",$rss[$i]);
		echo "<a class='list-group-item' href='blogShow.php?urlId=".$rsss[1]."' target='right'>".$rsss[0]."</a>";
	}
?>
</div>



<!--target可以为_blank新窗口、_self本窗口、_parent父窗口、_top整个浏览器窗口、指向的frame名字-->
<div id="manage" style="position:fixed;background-color:black;top:440px;left:15px;border:1px solid yellow;padding:10px;">
<a href="writeBlog.php" target="right" style="color:white;font-size:15px;">发布博文</a><br/>
</div>
<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="http://cdn.bootcss.com/twitter-bootstrap/3.0.3/js/bootstrap.min.js"></script>