$('.flexslider').flexslider({
	directionNav: false,
	slideshowSpeed: 3000,
});


$.get('data.json',{},function(data){
	console.log(data);
	for(var i = 0; i<data.length; i++){
		
		$('#main .column').eq(i)
		.find('.imgBox img')
		.attr('src','img/'+data[i].img);
		
		$('#main .column').eq(i)
		.find('.imgBox p').html(data[i].info);
		
		$('#main .column').eq(i)
		.find('ul a').each(function(j,dom){
			console.log(dom)
			
			$(dom).html(data[i].links[j].text);
			$(dom).attr('href',data[i].links[j].url);
		})
	}
},'json');


var timer;
$('.mapSite>dt').mouseover(function(){
	$(this).find('dl').show();
	if(timer){
		clearTimeout(timer);
		timer = null;
	}
}).mouseout(function(){
	var _this = this;
	timer = setTimeout(function(){
		console.log(this)
		$(_this).find('dl').hide();
	},1000)
});
$('.mapSite>dd:last').bind('mouseover mouseout',function(){
	$(this).find('.weixin').stop().slideToggle(200);
})


var rotate = 0;
$('.friendly_links .arrows').mouseover(function(){

	rotate+=180;
	$(this).prev('div').find('.hidden').toggle(200);
	$(this).css('transform','rotate('+rotate+'deg)')
});