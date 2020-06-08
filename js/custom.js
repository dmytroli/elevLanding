$(document).ready(function(){
/*mobile menu*/
$('.main-navigation .mobile-buttonMenu').on('click', function(){
	$('.main-header__menu-container').toggleClass('header-menu--close');
	$('.index-main').toggleClass('index-main--mobile');
});

$(function() {
    if(!location.href.match(/index/)) {
        $(".parallax-window").show();
    }

});  


// $('.production__item').mouseenter(function(){
// 	$('.production__item').find('.animated').each(function(i, el){
// 		console.log($(this));
// 		if ($(this).hasClass('fadeIn')) {
// 			$(this).removeClass('fadeIn');
// 		}
// 		console.log($(this));
// 	});
	
// 	$(this).find('.animated').addClass('fadeIn');
// });

$('.production__item').mouseenter(function(){
	if(!($(this).find('.production__text').hasClass('animated'))) {
		$(this).find('.production__text').addClass('animated');
	}
	$(this).find('.production__text').addClass('fadeIn');
})
$('.production__item').mouseleave(function(){
	$(this).find('.production__text').removeClass('fadeIn');
});



// $('.production__item').mouseout(function(){
// 	$(this).find('.production__text').removeClass('wow zoomIn');
// });


});