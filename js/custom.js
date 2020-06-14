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

/*production text show*/
$('.production__item').mouseenter(function(){
	if(!($(this).find('.production__text').hasClass('animated'))) {
		$(this).find('.production__text').addClass('animated');
	}
	$(this).find('.production__text').addClass('fadeIn');
})
$('.production__item').mouseleave(function(){
	$(this).find('.production__text').removeClass('fadeIn');
});


});


function initMap() {
    var coordinates = {lat:48.896070, lng: 26.862417},
    
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates
        });
}


        