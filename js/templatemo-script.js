/**
 *	www.templatemo.com
 */

/* HTML document is loaded. DOM is ready.
-----------------------------------------*/
$(document).ready(function(){

	// Mobile menu
	$('.mobile-menu-icon').click(function(){
		$('.tm-nav').toggleClass('show');
	});
  
  	// http://stackoverflow.com/questions/2851663/how-do-i-simulate-a-hover-with-a-touch-in-touch-enabled-browsers
	$('body').bind('touchstart', function() {});

	$(window).bind('scroll', function() {
		const navHeight = $(window).height() - 500;
		console.log(navHeight)
		if ($(window).scrollTop() > navHeight) {
			$('#tmHeader').addClass('fixed');
		}
		else {
			$('#tmHeader').removeClass('fixed');
		}
	});
});
