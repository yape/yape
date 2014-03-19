//当前显示页面
var currentIndex = 0;
//页面主题图像规格
var picH=497;var picW=1000;
//客户端规格
var winWidth = 0;var winHeight = 0;

var colors = ["red","blue","pink","yellow","black","gray","purple","green","#E8F2FE","orange","indigo"];
//登录用户Id
var userId;
//登录用户名
var userName = "";
//发送反馈次数 <=1
var flag=0;
//定时函数handler
var intv1;

var intv2;

var intv3;

var intv4;

var intvSnowing = new Array();
//
var satrtLeft = ["150px","250px","350px","450px","550px","650px","750px","850px"];
//当前接收反馈条数
var num=0;
//ajax对象
var xmlhttp;
//页面主题图像显示状态
var showflag=false;
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

//页面主题图像显示函数
function show(){

	if(showflag) return false;

	var obj = document.getElementById("a");

	obj.style.visibility="visible";

	if(obj.style.width!=picW+"px")  {return false;}

	setTimeout(function(){hiding();},5000);

	showflag=true;

}
//页面主题图像隐藏函数
function hide(){

	document.getElementById("a").style.visibility="hidden";

} 

function putFooterNav(){
	var getDiv = document.getElementById("footerNav");
	getDiv.style.position="fixed";
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	getDiv.style.left= document.documentElement.clientWidth - getDiv.offsetWidth+'px';
	getDiv.style.top = document.documentElement.clientHeight-getDiv.offsetHeight+scrollTop +'px';
	getDiv.style.display="block";
}

window.onload=function (){

//	putFooterNav();

//  findDimensions();findYou();

}
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

    //结果输出至两个文本框

    //document.form1.availHeight.value= winHeight;

    //document.form1.availWidth.value= winWidth;

    //根据winWidth布局div的left属性

    document.getElementById("love").style.left=(winWidth-310)/2+"px";

    document.getElementById("you").style.left=(winWidth-picW)/2+"px";

    document.getElementById("a").style.left=(winWidth-picW)/2+"px";

    //document.getElementById("b").style.left=(winWidth-picW)/2+"px";

    document.getElementById("menu").style.left=(winWidth-picW)/2+"px";

    document.getElementById("dialog").style.left=(winWidth-300)/2+"px";

    //document.getElementById("myDiv").style.width=winWidth+"px";

    //document.getElementById("myDiv").style.height=winHeight+"px";
}

   //调用函数，获取数值

//window.onresize=function(){putFooterNav();findDimensions;}

//隐藏动态函数
function hiding(){

	clearInterval(intv3);clearInterval(intv4);

	intv2 = setInterval(function(){hideY(40);},10);

} 

///////////////
//动态显示函数
function showing(){

	clearInterval(intv1);clearInterval(intv2);

	document.getElementById('a').style.zIndex=-1000;

	//document.getElementById('dialog').style.zIndex=-1001;

	intv3 = setInterval(function(){showX(30);},10);

}

//////

function hideX(speed){

	var obj = document.getElementById('a');

	var width = parseInt(obj.style.width.substring(0,obj.style.width.length-2));

	if(width<=speed){

		 clearInterval(intv1);

		 obj.style.zIndex=1002;

		 if(flag==0&&currentIndex=="0"){

		   document.getElementById('dialog').style.display="block";

		 }

		 document.getElementById('dialog').style.zIndex=1003;

		 showflag=false;//标记表示show函数重新起作用;

		 return false;

	}

	obj.style.width=(width-speed)+"px";

}

/////

function hideY(speed){

	var obj = document.getElementById('a');

	var height = parseInt(obj.style.height.substring(0,obj.style.height.length-2));

	if(height<=speed){

		 clearInterval(intv2);

		 intv1 = setInterval(function(){hideX(30);},10);

		 return false;

	}

	obj.style.height=(height-speed)+"px";

}

//////////////

function showX(speed){

var obj = document.getElementById('a');

var width = parseInt(obj.style.width.substring(0,obj.style.width.length-2));

if(width+speed>=picW){

	 clearInterval(intv3);

	 obj.style.width=picW+"px";

	 intv4 = setInterval(function(){showY(40);},10);

	 return false;

}

obj.style.width=(width+speed)+"px";

}

//////////////

function showY(speed){

var obj = document.getElementById('a');

var height = parseInt(obj.style.height.substring(0,obj.style.height.length-2));

if(height+speed>=picH){

	 clearInterval(intv4);

	 obj.style.height=picH+"px";

	 return false;

}

obj.style.height=(height+speed)+"px";

}

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

function loadChatDiv(){

progressing();

if(userId==null) userId = Math.round(Math.random()*1000000);

if(userName=="") userName = "Kitty";

var newXml = creatXML();

newXml.onreadystatechange=function()

  {

  if (newXml.readyState==4 && newXml.status==200)

    {

	document.getElementById("you").style.align="center";

	document.getElementById("you").style.textAlign="center";

    	document.getElementById("you").innerHTML=newXml.responseText;

	endProgress();

	startReceive();

    }

  }

newXml.open("GET","php/bhat.php",true);

newXml.send();

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