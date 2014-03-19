<?php
session_start();
if(empty($_SESSION['userName'])) header("Location: php/login.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>

<head>

<meta name="keywords" content="yapemore,WHO AM I,631561057,寒水谣,★☆," />

<meta name="description" content="yapemore" />

<meta http-equiv="content-type" content="text/html;charset=utf-8"/>

<!-- 最新 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="http://cdn.bootcss.com/twitter-bootstrap/3.0.3/css/bootstrap.min.css">

<!-- 可选的Bootstrap主题文件（一般不用引入） -->
<!--<link rel="stylesheet" href="http://cdn.bootcss.com/twitter-bootstrap/3.0.3/css/bootstrap-theme.min.css"> -->

<!--link rel="stylesheet" href="http://www.exosource.com/wp-content/themes/exosource/css/jquery-ui-1.9.2.custom.min.css" type="text/css" media="screen" /-->

<link rel="stylesheet" href="css/index.css" type="text/css" media="screen" />

<title>Who Am I</title>

</head>

<body align="center">

<?php

echo "<input type=hidden id='hiddenUserName' value=".$_SESSION['userName']."/>";

?>

<div id="main-content">
	<div class="wrap">
		<div class="inner-wrap">
			<!-- Welcome -->
			<div id="Welcome" class="anchorClass">
				<div class="feedBack" id="dialog">
					<h3 style="color:white;text-align:center;">WNNA TO SHOW ME?</h3>
					
					<input class="form-control form-control-fix" id="msg" type="text" value=""/>
					
					<p><input type="button" class="btn btn-primary" value="send" onclick="sendMe();" style="float:right;margin-right:70px;"/></p>
				</div>
			</div>
			<!-- Chat -->
			<div id="Chat" class="anchorClass">
				<div class="panel panel-default" style="width:900px;margin:10px auto;">
  					<div class="panel-heading">
    						<h3 class="panel-title">聊天信息</h3>
  					</div>
  					<div class="panel-body" style="height:300px;overflow-y:auto;" id="showMessageContainer">
  						<table width="100%" id="showMessage">
  						</table>
  					</div>
				</div>
				<div class="input-group" style="width:900px;margin:10px auto;">
  					<input id="sendValue" type="text" class="form-control" placeholder="按“Enter”发送信息" onkeypress="sendMesage(event);">
  					<span type="button" class="input-group-addon btn btn-primary" onclick="sending();">发送</span>
				</div>
			</div>
			<!-- Snowing -->
			<div id="Snowing" class="anchorClass">
				
			</div>
			<!-- Blog -->
			<div id="Blog" class="anchorClass">
				
			</div>
			<!-- Test -->
			<div id="Test" class="anchorClass">
				
			</div>
			<!-- Test1 -->
			<div id="Test1" class="anchorClass">
				
			</div>
		</div>
	</div>
</div>
<!-- -->
<div id="myDiv" style="position:absolute;left:0;top:0;width:100%;height:100%;">

</div>
<!-- 导航 -->
<div id="footer" class="wrap group" >
	<nav>
		<div id="back_active"></div>
		<ul>
			<li><a data-page-title="Welcome" data-anchor="0" href="/en" class="active">Welcome</a></li>
			<li><a data-page-title="Chat" data-anchor="1" href="/en#!our-method">Chat</a></li>
			<li><a data-page-title="Snowing" data-anchor="2" href="/en#!benefits">2</a></li>
			<li><a data-page-title="Blog" data-anchor="3" href="/en#!features">3</a></li>
			<li><a data-page-title="Test" data-anchor="4" href="/en#!options">4</a></li>
			<li><a data-page-title="Test1" data-anchor="5" href="/en#!pricing">5</a></li>
			<li><a data-page-title="Test2" data-anchor="6" href="/en#!contact">6</a></li>
		</ul>
	</nav>
</div>


<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="http://cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script>
<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="http://cdn.bootcss.com/twitter-bootstrap/3.0.3/js/bootstrap.min.js"></script>
<script src="js/bhat.js"> </script>
<!--script src="js/indexN.js"> </script-->
<script src="js/show.js"> </script>



	<!--script type='text/javascript' src='http://www.exosource.com/wp-content/themes/exosource/js/history.min.js'></script-->
	<script type='text/javascript' src='http://code.jquery.com/ui/1.9.2/jquery-ui.min.js'></script>
	<script type='text/javascript' src='http://www.exosource.com/wp-content/themes/exosource/js/jquery.mousewheel.min.js'></script>
	<!--script type='text/javascript' src='http://www.exosource.com/wp-content/themes/exosource/js/jquery.touchSwipe.min.js'></script-->
	<!--script type='text/javascript' src='http://www.exosource.com/wp-content/themes/exosource/js/bootstrap.min.js'></script-->
	<!--script type='text/javascript' src='http://www.exosource.com/wp-content/themes/exosource/js/exosource.js'></script-->
	<!--script type='text/javascript' src='http://www.exosource.com/wp-content/themes/exosource/js/footer.js'></script-->
<noscript>

</body>

</noscript>

</html>   

