$(document).ready(function(){
/*mobile menu*/
	$('.main-navigation .mobile-buttonMenu').on('click', function(){
		$('.header-menu ').toggleClass('header-menu--close');
		// $('.index-main').toggleClass('index-main--mobile');
	});

	$('.header-menuLink').on('click', function(){
		$('.header-menu ').addClass('header-menu--close');
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


	/*scroll stiky menu*/
	// var h_hght = 150; // высота шапки
	// var h_mrg = 0;    // отступ когда шапка уже не видна
	                 
	// // $(function(){
	 
	//     var elem = $('.main-navigation');
	//     var top = $(this).scrollTop();
	     
	// //     if(top){
	// //         elem.css({'top': h_mrg, 'position': 'relative'});

	// //     }           
	     
	//     $(window).scroll(function(){
	//         top = $(this).scrollTop();
	         
	//         if (top < h_hght) {
	//             elem.css({'top': (h_hght-top), 'position': 'fixed'});
	//         }

	//         else if (top == 150) {
	//          	elem.css({'position': 'relative'});
	//          } 
	//     });
	 
	// });

	console.log($('.main-header').scrollTop(200));

});


// function initMap() {
//     var coordinates = {lat:48.896070, lng: 26.862417},
    
//         map = new google.maps.Map(document.getElementById('map'), {
//             center: coordinates
//         });
// }


        