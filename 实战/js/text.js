// JavaScript Document
var screenAnimationElements={
	'.screen-1':[
		'.screen-1__heading',
		'.screen-1__phone',
		'.screen-1__shadow',
	]
}
var screenAnimationElements={
	'.screen-2':[
		'.screen-2__heading',
		'.screen-2__phone',
		'.screen-2__subheading',
		'.screen-2__point',
		'.screen-2__point_i_1',
		'.screen-2__point_i_2',
		'.screen-2__point_i_3',
	]
}
var screenAnimationElements={
	'.screen-3':[
		'.screen-3__heading',
		'.screen-3__phone',
		'.screen-3__subheading',
		'.screen-3__features',
	]
}
var screenAnimationElements={
	'.screen-4':[
		'.screen-4__heading',
		'.screen-4__subheading',
		'.screen-4__type__item_i_1',
		'.screen-4__type__item_i_2',
		'.screen-4__type__item_i_3',
		'.screen-4__type__item_i_4',
	]
}
var screenAnimationElements={
	'.screen-5':[
		'.screen-5__heading',
		'.screen-5__bg',
		'.screen-5__subheading',
	]
}
function setScreenAnimate(screenCls){
	var screen = document.querySelector(screenCls);//获取当前屏的元素
	var animateElements=screenAnimationElements[screenCls];//需要设置动画的元素
	var isSetAnimateClass=false;//是否初始化
	var isAnimateDone=false;//是否完成动画
	screen.onclick=function(){
		if(isSetAnimateClass===false){
			for(var i=0;i<animateElements.length;i++){
				var element=document.querySelector(animateElements[i]);		
  	            var baseCls=element.getAttribute("class");				
				element.setAttribute('class',baseCls+' '+animateElements[i].substring(1)+'_animate_init');
			}
			isSetAnimateClass=true;		
			return;
		}
		if(isAnimateDone===false){
			for(var i=0;i<animateElements.length;i++){
				var element=document.querySelector(animateElements[i]);
				var baseCls=element.getAttribute("class");				element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
			}
			isAnimateDone=true;
			return;
		}
		if(isAnimateDone===true){
			for(var i=0;i<animateElements.length;i++){
				var element=document.querySelector(animateElements[i]);
				var baseCls=element.getAttribute("class");				element.setAttribute('class',baseCls.replace('_animate_done','_animate_init'));
			}true
			isAnimateDone=false;
			return;
		}
	}
}
for(k in screenAnimationElements){
	setScreenAnimate(k);
}

