<html>
<?php
    require_once "../db_connect/sigin_db.php";
    if(!empty($_GET["sigin"])){
	$email = $_POST["email"];
	$password = $_POST["password"];
	$passwordAgain = $_POST["passwordAgain"];
	if(empty($email)){
		$error = "请输入您的e-mail地址!";
	}
	else if(!preg_match("/^([0-9A-Za-z\\-_\\.]+)@([0-9a-z]+\\.[a-z]{2,3}(\\.[a-z]{2})?)$/i",$email)){
		$error = "请输入正确的e-mail地址!";
	}
	else if(empty($password)){
		$error = "请输入密码!";
	}
	else if(empty($passwordAgain)){
		$error = "请输入验证密码!";
	}
	else if($passwordAgain!=$password){
		$error = "两次密码输入不一致!";
	}
	else{
		$db = new db_connect();
		if($db->sigin($email,$password)){
			$url = "indexN.php";
			echo "<script language='javascript' type='text/javascript'>";
			echo "window.alert('恭喜您，注册成功!');";
			echo "window.location.href='$url'";
			echo "</script>";

		}
		else {$error = "注册失败,请您稍后再试...";}
	}
     }

?>
<head>
<!-- 最新 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="http://cdn.bootcss.com/twitter-bootstrap/3.0.3/css/bootstrap.min.css">

<!-- 可选的Bootstrap主题文件（一般不用引入） -->
<!--<link rel="stylesheet" href="http://cdn.bootcss.com/twitter-bootstrap/3.0.3/css/bootstrap-theme.min.css"> -->
</head>
<body>
<div class="panel panel-default" style="width:60%;margin:20px auto;">
  <div class="panel-heading">
    <h3 class="panel-title">注册</h3>
  </div>
  <div class="panel-body">

 
<div class="container" style="width:40%;">  
   <form class="form-signin" role="form" action="signin.php?sigin=0129" method="post">
        <?php
		if(!empty($error)){
        ?>
	<div class="form-group" style="margin-top:20px;">
	<div class="alert alert-danger"><?php echo $error; ?></div>
	</div>
	<?php } ?>
	<div class="form-group">
	<label for="exampleInputEmail1">Email:</label>
	<input class="form-control" type="text" name="email" placeholder="Enter email" value="<?php echo $email; ?>" required/>
	</div>
	<div class="form-group">
	<label>密码：</label>
	<input class="form-control" type="password" name="password" placeholder="Password" value="<?php echo $password; ?>" required/>
	</div>
	<div class="form-group">
	<label>重复密码：</label>
	<input class="form-control" type="password" name="passwordAgain" placeholder="Password again" value="<?php echo $passwordAgain; ?>" required/>
	</div>
	<button type="submit" class="btn btn-primary">注册</button>
   </form>
</div>

 </div>
</div>
<noscript>
</body>
</noscript>
<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="http://cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script>

<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="http://cdn.bootcss.com/twitter-bootstrap/3.0.3/js/bootstrap.min.js"></script>
 </html>