/**
 *	www.templatemo.com
 */

/* HTML document is loaded. DOM is ready.
-----------------------------------------*/
$(document).ready(function(){
		// Mobile menu
		$('.mobile-menu-icon').click(function(e){
				$('.tm-nav').toggleClass('show');
				$(e.currentTarget).toggleClass('show');
		});
  
  	// http://stackoverflow.com/questions/2851663/how-do-i-simulate-a-hover-with-a-touch-in-touch-enabled-browsers
  	$('body').bind('touchstart', function() {});
});