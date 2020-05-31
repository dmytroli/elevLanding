$(document).ready(function(){
/*mobile menu*/
$('.main-navigation .mobile-buttonMenu').on('click', function(){
	$('.header-menu').toggleClass('header-menu--close');
	$('.index-main').toggleClass('index-main--mobile');
})

$(function() {
    if(!location.href.match(/index/)) {
        $(".parallax-window").show();
    }

}); 

});