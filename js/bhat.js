﻿//当前显示页面
var currentIndex = 0;
//登录用户Id
var userId;
//登录用户名
var userName = $("#hiddenUserName").val();
//发送反馈次数 <=1
var flag=0;
//当前接收反馈条数
var num=0;
//ajax对象
var xmlhttp;
//页面主题图像显示状态
var showflag=false;
//客户端规格
var winWidth = 0;var winHeight = 0;
function findDimensions() //函数：获取尺寸
{

      //获取窗口宽度

      if (window.innerWidth)

          winWidth = window.innerWidth;

      else if ((document.body) && (document.body.clientWidth))

          winWidth = document.body.clientWidth;

     //获取窗口高度

     if (window.innerHeight)

          winHeight = window.innerHeight;

     else if ((document.body) && (document.body.clientHeight))

          winHeight = document.body.clientHeight;

     //通过深入Document内部对body进行检测，获取窗口大小

     if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth)

     {

          winHeight = document.documentElement.clientHeight;

          winWidth = document.documentElement.clientWidth;

     }
}
findDimensions();
//创建ajax对象函数
function creatXML(){

	var obj;

	if (window.XMLHttpRequest)

  	{// code for IE7+, Firefox, Chrome, Opera, Safari

  		obj=new XMLHttpRequest();

  	}

	else

  	{// code for IE6, IE5

  		obj=new ActiveXObject("Microsoft.XMLHTTP");

  	}

return obj;

}

xmlhttp = creatXML();

//ajax save

function sendMe()

{

if(flag>=1) return false;

var msg = document.getElementById("msg").value;

document.getElementById("dialog").innerHTML="<h3 style='color:pink;margin-top:20px;'>Taking Me To Your Heart...</h3>";

document.getElementById("dialog").style.height="70px";

if(trim(msg)=="") return false;

showYou(msg);

xmlhttp.onreadystatechange=function()

  {

  if (xmlhttp.readyState==4 && xmlhttp.status==200)

    {

      document.getElementById("dialog").innerHTML="<h3 style='color:purple;margin-top:20px;'>Success ^_^ </h3>";

      alert("Success");

      closeDiv("dialog");     

    }

  }

flag=1;

xmlhttp.open("POST","php/receiveYou.php",true);

xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

xmlhttp.send("msg="+msg);

}

//ajax get

function findYou()

{

xmlhttp.onreadystatechange=function()

  {

  if (xmlhttp.readyState==4 && xmlhttp.status==200)

    {

    //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;

     showYou(xmlhttp.responseText);

    }

  }

xmlhttp.open("GET","php/findYou.php?num="+num+"&random="+Math.random(),true);

xmlhttp.send();

}

 

setInterval(function(){findYou();},300000);

 

function showYou(msgs){

  if(msgs=="") return false;

  else if(msgs.lastIndexOf(";")==msgs.length-1)msgs = msgs.substring(0,msgs.length-1);

  var myDiv = document.getElementById("myDiv");

  var msg = msgs.split(";");

  num = num + msg.length;

  for(var x=0;x<msg.length;x++){

     var soBeauty = "<label style='font-size:"+Math.round(Math.random()*30+10)+"px;color:rgb("+Math.round(Math.random()*254+1)+","+Math.round(Math.random()*254+1)+","+Math.round(Math.random()*254+1)+");padding:5px;position:absolute;left:"+Math.round(Math.random()*(winWidth-100))+"px;top:"+Math.round(Math.random()*(winHeight-50))+"px;'>"+msg[x]+"</label>";

     myDiv.innerHTML = myDiv.innerHTML+soBeauty;

  }

}

 

function closeDiv(id){

var obj = document.getElementById(id);

	obj.parentNode.removeChild(obj);

}

 

function trim(str){

	return str.replace(/(^\s*)|(\s*$)/g, "");

}

var clickedObj;

function changePanel(obj){

	if(obj==clickedObj) return false;

	currentIndex = obj.name;

	obj.onmouseover=null;

	obj.onmouseout=null;

	if(clickedObj){

		clickedObj.style.backgroundColor="#555D5F";

			clickedObj.onmouseover=function(){this.style.backgroundColor="purple";snowing(this.name);}

		clickedObj.onmouseout=function(){this.style.backgroundColor="#555D5F";}

	}

	obj.style.backgroundColor="pink";

	clickedObj = obj;

	switch (obj.name){

	  case "0":

		unloadYou();

		unloadSnow();

		if(document.getElementById("dialog")) document.getElementById("dialog").style.display="block"; 

		break;

	  case "1":

		unloadSnow();

		loadChatDiv();

			break;

	  case "2":

		loadSnow();

		break;

	  case "3":

		unloadSnow();

		loadBlog();

		break;

	  case "4":

		unloadSnow();

		break;

	  case "5":

		unloadSnow();

		break;

	  case "6":

		unloadSnow();

		break;

	  case "7":

		unloadSnow();

		break;

	  default:

		unloadSnow();

		break;

	}

}

function snowing(i){

	i = parseInt(i);

	id = Math.round(Math.random()*1000000);

	var cDiv = document.createElement("div");

	cDiv.id=id+"";

	cDiv.style.backgroundColor=colors[Math.round(Math.random()*10)];

	cDiv.style.position="absolute";

	cDiv.style.width="10px";

	cDiv.style.height="10px";

	cDiv.style.top="0px";

	cDiv.style.left=satrtLeft[i];

	//var divHtml = "<div id='"+id+"' style='background-color:"+colors[Math.round(Math.random()*10)]+";width:10px;height:10px;position:absolute;left:"+satrtLeft[i]+";top:0px;z-index:2000;'></div>"

	document.getElementById("you").appendChild(cDiv);

	//var snow = document.getElementById(cDiv);

	intvSnowing[id] = setInterval(function(){downing(cDiv);},10);

}

function downing(obj){

var w = parseInt(obj.style.top.substring(0,obj.style.top.length-2));

if(w<500){

    obj.style.top = (w+5)+"px";
	if(Math.random()>=0.5){
		var l = parseInt(obj.style.left.substring(0,obj.style.left.length-2));
		obj.style.left = (l+(35-Math.random()*70))+"px";
	}

}

else {

	clearInterval(intvSnowing[parseInt(obj.id)]);

	try{

    		document.getElementById("you").removeChild(obj);

   		 obj.parentNode.removeChild(obj);

	}catch(e){

		obj.style.display="none";

	}

}

}

function loadSnow(){

 var isSnowExist = document.getElementsByName("snowingSwf");

 if(isSnowExist.length>=1) return false;

 var snow = document.createElement("embed");

 snow.src="files/snowing.swf";

 snow.name = "snowingSwf";

 snow.type="application/x-shockwave-flash";

 //snow.wmode="transparent";

 snow.setAttribute("wmode","transparent");

 snow.width="1000px";

 snow.height="497px";

 snow.style.position="absolute";

 snow.style.top="0px";

 snow.style.left="0px";

 document.getElementById("you").appendChild(snow);

 //alert(snow.wmode);

 document.body.style.backgroundColor="black";

}

function unloadSnow(){

 if(document.getElementById("dialog"))document.getElementById("dialog").style.display="none";

 var isSnowExist = document.getElementsByName("snowingSwf");

 for(var i=0;i<isSnowExist.length;i++){

	isSnowExist[i].parentNode.removeChild(isSnowExist[i]);

 }

 document.body.style.backgroundColor="white";

}

function loadBlog(){

progressing();

	var newXml = creatXML();

	newXml.onreadystatechange=function()

  	{

  	if (newXml.readyState==4 && newXml.status==200)

    	{

		document.getElementById("you").style.align="center";

		document.getElementById("you").style.textAlign="center";

    		document.getElementById("you").innerHTML=newXml.responseText;

		endProgress();

   	}

  }

newXml.open("GET","php/blogIndex.php",true);

newXml.send();	

}

function unloadYou(){

document.getElementById("you").innerHTML="";

}

	var img = document.createElement("img");

	img.name="progressBar";

	img.src = "http://bxdzt.img39.wal8.com/img39/406945_20140307185338/139418987809.gif";

	img.style.verticalAlign="middle";

	img.style.marginTop = "25%";

function progressing(){

	var obj =document.getElementById("myDiv");

	obj.appendChild(img);

	obj.style.textAlign="center";

	obj.style.mozOpacity = 60;

	obj.style.opacity = 0.6;

	obj.style.filter = "alpha(opacity=60)";

	obj.style.zIndex=9999;

	obj.style.backgroundColor = "black";
	
	document.body.style.overflow="hidden";

}

function endProgress(){

	var p = document.getElementById("myDiv");

	var images = document.getElementsByName("progressBar");

	for(var i=0;i<images.length;i++){

		p.removeChild(images[i]);

	}

	p.style.zIndex = 1000;

	p.style.backgroundColor = "";

	document.body.style.overflow="auto";

}



















//////////////////////////////////////////////////////////////////////////////////////////////////////////

var msgNum=0;


function sendMesage(e){

	
	var keynum;
	if(window.event)


		keynum = e.keyCode;


	else if(e.which)


		keynum = e.which;


	if(keynum!=13) return false;


	sending()
;

}


function sending(){
	if(userId==null||userId==""){
		window.location.href="../php/login.php";
	}
	var input = document.getElementById("sendValue");


	var msg = input.value;


	if(trim(msg)=="") return false;


	var date = new Date();


	//document.getElementById("showMessage").value=document.getElementById("showMessage").value+"You("+userId+")["+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"]:"+msg+"\n";


	//document.getElementById("showMessage").scrollTop = document.getElementById("showMessage").scrollHeight;


	var mesge = "You("+userId+")["+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"]:"+msg+"\n";
	showMessage("right",mesge);
	var xmlreq = creatXML();


	xmlreq.onreadystatechange=function()


	{


		if(xmlreq.readyState==4&&xmlreq.status==200){


		
	

	}

	
	}


	xmlreq.open("POST","../php/sendChatMsg.php",true);


	xmlreq.setRequestHeader("Content-type","application/x-www-form-urlencoded");


	xmlreq.send("msg="+msg+"&userId="+userId+"&userName="+userName);


	input.value="";


}
var receiveChatMsg;


var receiveChatMsgXml = creatXML();


receiveChatMsgXml.onreadystatechange=function()

{


	if(receiveChatMsgXml.readyState==4&&receiveChatMsgXml.status==200){


		if(trim(receiveChatMsgXml.responseText)=="") {getChatMsg();return false;}


		var x = receiveChatMsgXml.responseText.indexOf("%");


		msgNum = parseInt(receiveChatMsgXml.responseText.substring(0,x));


		//document.getElementById("showMessage").value=document.getElementById("showMessage").value+receiveChatMsgXml.responseText.substring(x+1)+"\n";


		//document.getElementById("showMessage").scrollTop = document.getElementById("showMessage").scrollHeight;
		var message = 

receiveChatMsgXml.responseText.substring(x+1)+"\n";


		showMessage("left",message);
		getChatMsg();
	}else if(receiveChatMsgXml.readyState==4&&receiveChatMsgXml.status!=200){

		getChatMsg();

	}


}


function getChatMsg(){


	if(currentIndex!=1) {
		//clearInterval(receiveChatMsg);
		return false;
	}

	if(userId==null) userId = Math.round(Math.random()*1000000);

	if(userName=="") userName = "HelloKitty";


	receiveChatMsgXml.open("GET","php/receiveChatMsg.php?msgNum="+msgNum+"&userId="+userId+"&random="+Math.random(),true);


	receiveChatMsgXml.send();


}


function startReceive(){
getChatMsg();


//receiveChatMsg = setInterval(function(){getChatMsg();},300000);


}
function showMessage(side,messagess){
var messagesT = messagess.split("\n");
for(var i=0;i<messagesT.length;i++){
	var messages = messagesT[i];
	if(messages=="") continue;
	var m = messages.indexOf("[");
	var n = messages.indexOf("]");
	var nameTemp = messages.substring(0,m);
	var time = messages.substring(m+1,n);
	var message = messages.substring(n+2);
	var userIdTemp = messages.substring(messages.indexOf("(")+1,messages.indexOf(")"));
	if(userId == userIdTemp) side = "right";
	var obj;
	if(side=="left")
		obj = $("<tr><td align='left'><div style='margin:10px;max-width:300px;'><a href='#'>"+nameTemp+"</a>:<br><span style='background-color:#5CB85C;padding:10px;text-align:left;float:left;border-radius:5px;'>"+message+"</span></div></td></tr>");
	else
		obj = $("<tr><td align='right'><div style='margin:10px;max-width:300px;'><div><a href='#'>"+nameTemp+"</a>:</div><span style='float:right;background-color:#5BC0DE;padding:10px;text-align:left;border-radius:5px;'>"+message+"</span></div></td></tr>");
	$("#showMessage").append(obj);
}
	//$("#showMessage").scrollTop = $("#showMessage").scrollHeight;


	document.getElementById("showMessageContainer").scrollTop = document.getElementById("showMessageContainer").scrollHeight;



}
window.onload=function(){findYou();}