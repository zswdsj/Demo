
$(function(){		
//导航菜单
	$('li[topnav]').hover(function(){
		var $_this=$(this)
		var it = $_this.attr('attr');
		if(it === 'undefined') return false;
		var heht = $(this).find('#' + it).height() + "px";
		
		function wsy(){
			$_this.find('.submnua').height(heht);
			$_this.find('.submnua').stop(true,true).animate({height:'show'},{
				queue:false,
				duration:700,
				easing:'easeOutBounce'
			});
		}
		timer=setTimeout(wsy,300);
	},function(){
		clearTimeout(timer);
		$(this).find('.submnua').stop(true,true).slideUp(0);
	});  

});
$(function(){
	$('.us2').animate({opacity:'0'});
	$('.user_1>li').hover(function(){
		$(this).find('.us1').stop(true).animate({opacity:'0'},1000);
		$(this).find('.us2').stop(true).animate({opacity:'1'},1000);
	},function(){
		$(this).find('.us1').stop(true).animate({opacity:'1'},1000);
		$(this).find('.us2').stop(true).animate({opacity:'0'},1000);
	});
		
});


$(function() {
    //功能树
		$(".case_left .c5").addClass("animated rubberBand").show();
			setTimeout(function(){
				$(".case_left .c2").addClass("animated zoomInUp").show();
			},500);
				setTimeout(function(){
			$(".case_left .c1").addClass("animated rubberBand").show();
			},800);
				setTimeout(function(){
			$(".case_left .c7").addClass("animated tada").show();
			},1600);
				setTimeout(function(){
			$(".case_left .c3").addClass("animated fadeInRight").show();
			},2100);
				setTimeout(function(){
			$(".case_left .c4").addClass("animated fadeInLeftBig").show();
			},1200);
				setTimeout(function(){
			$(".case_left .c6").addClass("animated rubberBand").show();
			},1400);
				setTimeout(function(){
			$(".case_left .c8").addClass("animated fadeInUpBig").show();
			},1800);
				setTimeout(function(){
			$(".case_left .c9").addClass("animated rubberBand").show();
			},2000);
				setTimeout(function(){
			$(".case_left .c10").addClass("animated rubberBand").show();
			},1500);
			
				setTimeout(function(){
			$(".case_left li").removeClass("animated rubberBand");
			},2800);
			
			//发展历程
			setTimeout(function(){
				$(".course_1").addClass("animated zoomInUp").show();
			},200);
			
				setTimeout(function(){
			$(".course_2").addClass("animated rubberBand").show();
			},1000);
			
				setTimeout(function(){
			$(".course_3").addClass("animated tada").show();
			},1700);
			
				setTimeout(function(){
			$(".course_4").addClass("animated fadeInRight").show();
			},2200);
				
			
	$.fn.toTop = function(options) {
		var defaults = {			
			showHeight:180,
			speed : 1000
		};
		var options = $.extend(defaults,options);
		var $toTop = $(this);
		var $shu = $(".shu");
		var $c1 = $(".c1");
		var $c2 = $(".c2");
		var $c3 = $(".c3");
		var $c4 = $(".c4");
		var $c5 = $(".c5");
		var $c6 = $(".c6");
		var $c7 = $(".c7");
		var $c8 = $(".c8");
		var $c9 = $(".c9");
		var $c10 = $(".c10");
		
		$('.case_left li').hover(function(){
				if($(this).hasClass('zuosu')){
					$(this).stop(true,true).animate({width:'200px'},300);	
				}
				},function(){
					if($(this).hasClass('zuosu')){
					$(this).stop(true,true).animate({width:'80px'},300);
					}
				});
		
		$toTop.scroll(function(){
			var scrolltop=$(this).scrollTop();
			var top = $(window).scrollTop()+20;		
			if(scrolltop>=options.showHeight){	
				$(".case_left li").addClass("zuosu");
				$(".case_left li").addClass("zuosu_1");
				$(".case_left li").removeClass("block");
				$shu.stop(true).animate({ height:'0px'},1000);
				$c1.stop(true,true).animate({ left:'80px',top: top + "px",width:"80px",height:"80px"},400);
				$c2.stop(true,true).animate({ left:'80px',top: top+100 + "px",width:"80px",height:"80px"},600);
				$c3.stop(true,true).animate({ left:'80px',top: top+200 + "px",width:"80px",height:"80px"},800);
				$c4.stop(true,true).animate({ left:'80px',top: top+300 + "px",width:"80px",height:"80px"},1000);
				$c5.stop(true,true).animate({ left:'0px',top: top-50 + "px",width:"80px",height:"80px"},500);
				$c6.stop(true,true).animate({ left:'0px',top: top+50 + "px",width:"80px",height:"80px"},700);
				$c7.stop(true,true).animate({ left:'0px',top: top+150 + "px",width:"80px",height:"80px"},900);
				$c8.stop(true,true).animate({ left:'0px',top: top+250 + "px",width:"80px",height:"80px"},1100);
				$c9.stop(true,true).animate({ left:'0px',top: top+350 + "px",width:"80px",height:"80px"},1200);
				$c10.stop(true,true).animate({ left:'80px',top: top+400 + "px",width:"80px",height:"80px"},1200);
				
			}
			else{
				$shu.stop(true).animate({ height:'600px'},1000);
				$(".case_left li").removeClass("zuosu");
				$(".case_left li").addClass("block");
				$c1.stop(true,true).animate({ left:'410px',top:"240px",width:"150px",height:"150px"},400);
				$c2.stop(true,true).animate({ left:'735px',top:"75px",width:"140px",height:"140px"},600);
				$c3.stop(true,true).animate({ left:'830px',top:"228px",width:"160px",height:"160px" },800);
				$c4.stop(true,true).animate({ left:'720px',top:"380px",width:"140px",height:"140px"},1000);
				$c5.stop(true,true).animate({ left:'525px',top:"60px",width:"140px",height:"140px"},500);
				$c6.stop(true,true).animate({ left:'300px',top:"100px",width:"140px",height:"140px"},700);
				$c7.stop(true,true).animate({left:'200px',top:"250px",width:"140px",height:"140px" },900);
				$c8.stop(true,true).animate({ left:'360px',top:"400px",width:"130px",height:"130px" },1100);
				$c9.stop(true,true).animate({ left:'540px',top:"435px",width:"130px",height:"130px"},1200);
				$c10.stop(true,true).animate({ left:'610px',top:"225px",width:"130px",height:"130px"},1200);
			}
			
		});	
			//按钮收缩
	}

	
});


window.onload=function (){
	var aBout=document.getElementById("")	
	
}