
$(document).ready(function(){

 $("#back-to-top").hide();

//μ±1??ˉì?μ?????′|óú?à?￥2?300????ò???ê±￡?ì?×aá′?ó3???￡?·??ò??ê§

$(function () {
$(window).scroll(function(){
if ($(window).scrollTop()>500){
$("#back-to-top").fadeIn(1500);
}
else
{
$("#back-to-top").fadeOut(1500);
}
});
//μ±μ??÷ì?×aá′?óoó￡???μ?ò3???￥2?????
$("#back-to-top").click(function(){
$('body,html').animate({scrollTop:0},1000);
return false;
});
});

//导航
var links = $("#nav_in ul li>a");
     var here = null;
	for(i=0; i<links.length; i++) {
		if(window.location.href.indexOf(links[i].href) != -1) {
			links[i].className = 'on';
			here = links[i];
		} else {
			links[i].className = '';
		}	
	} 
	$("a").bind('focus',function(){ 
        this.blur(); 
    });
	

	//1?óú?ò??
	$(".nav ul>li").hover(function(){
		$(".nav ul li a.on").css({borderBottomWidth:"0px"});
		$(this).children("a").addClass("on_1").css({borderBottomWidth:"3px"});
		$(this).children("a.on").css({borderBottomWidth:"3px"});
	},function(){
		$(".nav ul li>a.on").css({borderBottomWidth:"3px"});
		$(this).children("a").removeClass("on_1");
	});
	
	//μ?Dí°?àyhover1
	$('.case_a1 a').hover(function(){
		$(this).children('dt').stop().animate({opacity:'0.7'},200);
		$(this).children('dd').stop().animate({bottom:'0px'},300);
	},function(){
		$(this).children('dt').stop().animate({opacity:'1'},200);
		$(this).children('dd').stop().animate({bottom:'-56px'},300);
	});
	
	//μ?Dí°?àyhover2
	$('.case_typ1 li').hover(function(){
			$(this).find('.mask').show(200);
			$(this).find('p').addClass('animated zoomInDown').hide();
			
	},function(){
			$(this).find('.mask').hide();
			$(this).find('p').removeClass('animated zoomInDown').hide();
	});
	
	//μ?Dí°?àyhover3
	$('.case_typ li').hover(function(){
			$(this).find('.mask').slideDown(200);
			$(this).find('p').addClass('animated zoomInUp').hide();
			
	},function(){
			$(this).find('.mask').hide();
			$(this).find('p').removeClass('animated zoomInUp').hide();
	});
	
	//典型产品
	$('#product .products li').hover(function(){
		$(this).find('.show').stop(true,true).fadeIn();
		if($(this).hasClass('prod')){
			$(this).find('img').stop(true,true).animate({height:'+=60px',width:'+=300px',top:'-30px',left:'-150px'});
		}else{
			$(this).find('img').stop(true,true).animate({height:'+=60px',width:'+=60px',top:'-30px',left:'-30px'});
		}
		
		$(this).find('span').delay(1000).addClass('animated zoomInUp').show();
	},function(){
		$(this).find('.show').stop(true,true).fadeOut();
		if($(this).hasClass('prod')){
			$(this).find('img').stop(true,true).animate({height:'-=60px',width:'-=300px',top:'0px',left:'0px'});
		}else{
			$(this).find('img').stop(true,true).animate({height:'-=60px',width:'-=60px',top:'0px',left:'0px'});
		}
		
		$(this).find('span').removeClass('animated zoomInDown').hide();
	})
	

	


	
});



