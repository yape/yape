<?php
	require_once "sigin_db.php";
	if(!empty($_GET["sigin"])){
	$email = $_POST["email"];
	$password = $_POST["password"];
	if(empty($email)){
		$error = "ÇëÊäÈëÄúµÄe-mailµØÖ·!";
	}
	else if(!preg_match("/^([0-9A-Za-z\\-_\\.]+)@([0-9a-z]+\\.[a-z]{2,3}(\\.[a-z]{2})?)$/i",$email)){
		$error = "ÇëÊäÈëÕýÈ·µÄe-mailµØÖ·!";
	}
	else if(empty($password)){
		$error = "ÇëÊäÈëÃÜÂë!";
	}
	else{
		$db = new db_connect();
		if($db->login($email,$password)){
			@session_start();
			$_SESSION['userName'] = $email;
			$url = "indexN.php";
			echo "<script language='javascript' type='text/javascript'>";
			echo "window.alert('µÇÂ¼³É¹¦!');";
			echo "window.location.href='$url'";
			echo "</script>";

		}
		else {$error = "µÇÂ¼Ê§°Ü,ÇëÄúÉÔºóÔÙÊÔ...";}
	}
     }

?>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">
<link rel="stylesheet" href="http://cdn.bootcss.com/twitter-bootstrap/3.0.3/css/bootstrap.min.css"/>
<link rel="stylesheet" href="http://v3.bootcss.com/examples/signin/signin.css"/>
</head>
<body>
<div class="container">

      <form class="form-signin" role="form" action="login.php?sigin=1024" method="post">
        <h2 class="form-signin-heading">Please sign in</h2>
	<?php
		if(!empty($error)){
        ?>
	<div class="form-group" style="margin-top:20px;">
	<div class="alert alert-danger"><?php echo $error; ?></div>
	</div>
	<?php } ?>
        <input name="email" type="text" class="form-control" placeholder="Email address" required autofocus>
        <input name="password" type="password" class="form-control" placeholder="Password" required>
        <label class="checkbox">
          <input name="remember" type="checkbox" value="remember-me"> Remember me
        </label>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>

    </div>
<noscript>
</body>
</noscript>
</html>