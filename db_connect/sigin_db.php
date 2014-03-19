<?php
class db_connect{
private $username='user2604652';
private $userpass='y631561058';
private $dbhost='localhost';
private $dbdatabase='db2604652-main';
private $db_connect;
public function db_connect(){
	$this->db_connect=mysql_connect($this->dbhost,$this->username,$this->userpass) or die("Unable to connect to the MySQL!");
	mysql_select_db($this->dbdatabase,$this->db_connect);
}
public function sigin($email,$password){
	//执行MySQL语句
	date_default_timezone_set('PRC');
	$currentTime = date('Y-m-d H:i:s');
	$sql = "INSERT INTO wp_users (user_email, user_pass, user_registered) VALUES ('$email','".md5($password)."','".$currentTime."')";
	$result=mysql_query($sql,$this->db_connect);
	mysql_close($this->db_connect);
	return $result;
}
public function login($email,$password){
	$sql = "select user_pass from wp_users where user_email ='$email'";
	$result=mysql_query($sql,$this->db_connect);
	if($userpass = mysql_fetch_array($result)){
		if(md5($password)==$userpass[0]) return true;
		else return false;
	}
	else return false;
}
}
?>