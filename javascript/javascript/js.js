// JavaScript Document
var b=2;
var c;
function ac(){
	c=(b+1)%3+1;
	b++;
	var a="url(img/bg"+c+".jpg)";
	document.getElementById("q1").style.backgroundImage=a;
	document.getElementById("checkbox"+c).checked="checked";
}
function lunbo(){
	ac();
	setTimeout("lunbo();",5000);
}
setTimeout("lunbo();",0);
var radioArr=document.getElementsByName("radio");
radioArr[0].onclick=function(){
	b=2;
	ac();
};
radioArr[1].onclick=function(){
	b=3;
	ac();
};
radioArr[2].onclick=function(){
	b=4;
	ac();
};