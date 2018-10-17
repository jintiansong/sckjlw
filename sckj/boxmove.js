/*
 * target (外层对象)
 * time (滚动时间)
 * num (滚动个数)
*/
function boxmove(target, time, num){
	var set=null;
	var type=1;
	var lis = target.find('li');
	var ul = target.find('ul');
	
	var ulW=ul.find('li').eq(0).width() * ul.find('li').length;
	ul.css({'width':ulW});
	if(ul.find('li').length > num){
		target.parent().find('.f-prev,.f-next').show();
	}else{
		target.parent().find('.f-prev,.f-next').hide();
		return false;
	}
	
	var liWidth =lis.eq(0).width();
	var pageWidth = (liWidth*lis.length)-(liWidth * num);
	var move = function(){
		clearTimeout(set);
		var left = ul.position().left;
		if (type==1 && left>=-pageWidth){
			left-=1;
			ul.css('left', left);
		}else if (type==0&&left<=0){
			left+=1;
			ul.css('left', left);
		}else if(left == -(pageWidth+1)){
			left=1;
			ul.css('left', left);
		}else if(left == 1){
			left = -(pageWidth+1);
			ul.css('left', left);
		}
		set = setTimeout(function () { move() }, time);
	}
	target.bind('mouseout',function(){
		set = setTimeout(function () { move() }, time);
	}).bind('mouseover',function(){
		clearTimeout(set);
	});
	target.parent().find('.f-prev').click(function(){
		if (type!=1){
			type=1;
			top=1;
		}
			set = setTimeout(function () { move() }, time);
	});
	target.parent().find('.f-next').click(function(){
		if (type!=0){
			type=0;	
			top=0;
		}
			set = setTimeout(function () { move() }, time);
	});
	move();
}