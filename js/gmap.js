var map = '';
		var center;

		function initialize() {
			var mapOptions = {
				zoom: 14,
				center: new google.maps.LatLng(37.769725, -122.462154),
				scrollwheel: false
			};

			map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

			google.maps.event.addDomListener(map, 'idle', function () {
				calculateCenter();
			});

			google.maps.event.addDomListener(window, 'resize', function () {
				map.setCenter(center);
			});
		}

		function calculateCenter() {
			center = map.getCenter();
		}

		function loadGoogleMap() {
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://goo.gl/maps/XkWH3qANccRnHGrS8' + 'callback=initialize';
			document.body.appendChild(script);
		}

		// DOM is ready
		$(function () {

			// https://css-tricks.com/snippets/jquery/smooth-scrolling/
			$('a[href*=#]:not([href=#])').click(function () {
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top
						}, 1000);
						return false;
					}
				}
			});

			// Flexslider
			$('.flexslider').flexslider({
				controlNav: false,
				directionNav: false
			});

			// Google Map
			loadGoogleMap();
		});