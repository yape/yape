<html>
<head>
<meta http-equiv="content-type" content="text/html;charset=utf-8"/>
<script> 
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
 
  ga('create', 'UA-47206555-1', 'kilu.de');
  ga('send', 'pageview');
 
</script>
<script type="text/javascript"> 
function trim(str){
return str.replace(/(^\s*)|(\s*$)/g, "");
}
function checkInput(){
	//alert("1");
	if(document.getElementById("title")&&document.getElementById("userIdForBlog")){//alert("2");
		var title = document.getElementById("title").value;//alert("3");
		document.getElementById("userIdForBlog").value = ""//userId;alert("4");
		if(trim(title)!=""){//&&trim(userId)!=""){//alert("5");alert("success");
			return true;
		}
	}
	alert("Error");
	return false;
}
</script>
</head>
<body bgcolor=orange align=center style="text-align:center;">
<form action="saveBlog.php" method="post">
	<div  style="text-align:center;margin:0 auto;">
	<label  style="text-align:left;">标题</label><input type="text" id="title" name="title" size="50" value="" style="line-height:15px;"/><br/>
	<input type="hidden" id="userIdForBlog" name="userId" value=""/>
	<textarea style="width:847px;height:385px;margin-top:20px;overflow:auto;" name="content"></textarea>
	</div>
	<span style="float:right;background-color:yellow;margin-top:10px;margin-right:10px;padding:0px;"><input style="background-color:blue;color:white;width:42px;height:22px;" type="submit" value="发布" onclick="return checkInput();"/></span>
</form>
<noscript>
</body> 
</noscript>
</html>