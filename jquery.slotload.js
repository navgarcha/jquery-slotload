/*
* jQuery SlotLoad
*
* Copyright (c) 2011-2012 Navkaran Garcha <nav_garcha@hotmail.co.uk>
*
* Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*
* Version: 0.1
* Dependencies: jQuery
*
*/

(function($) {
	$.fn.randomizer = function(options) {
		var settings = $.extend({}, $.fn.randomizer.settings, options),
			showDelay = Math.floor(settings.baseDelay + (Math.random() * 1000));
		
		this.find(settings.selector).each(function() {
			var img = $(this).css('visibility', 'hidden'),
				imgHeight = img.height();

			$('<img />').load(function() {
				var loadedImg = $(this).wrap('<div class="loading" style="display:inline-block; overflow:hidden;" />'),
					imgWrapper = loadedImg.parent();

				img.replaceWith(imgWrapper);

				setTimeout(function() {
					if(settings.arrangeOnLoad) {
						var parentWrapper = imgWrapper.removeClass('loading').parent(),
							loadedItems = imgWrapper.siblings().not('.loading');

						if(loadedItems.length) {
							imgWrapper.insertAfter(loadedItems.last());
						} else {
							imgWrapper.prependTo(parentWrapper);
						}
					}

					loadedImg.animate({
						'top': 0
					}, {
						duration: settings.speed,
						easing: 'elasticOut',
						complete: function() {
							if(typeof settings.onComplete === 'function') {
								settings.onComplete();
							}
						}
					});
				}, showDelay);
			}).attr('src', img.attr('src')).css({
				'position': 'relative',
				'top': -(imgHeight + 50)
			});
		});
		
		// Ensure plugin is chainable
		return this;
	};
	
	// Public settings
	$.fn.randomizer.settings = {
		selector: 'img',
		speed: 800,
		baseDelay: 500,
		arrangeOnLoad: false,
		placeholder: false,
		onComplete: function() {}
	};
	
	// Setup the required easing animation
	$.extend($.easing, {
		elasticOut: function (x, t, b, c, d) {
			var s = 1.70158,
				p = 0,
				a = c;
				
			if(t === 0) return b;  
			if((t/=d) == 1) return b + c;  
			if(!p) p = d * 0.3;
			if(a < Math.abs(c)) { a = c; s = p/4; }
			else s = p/(2*Math.PI) * Math.asin (c/a);
			
			return a * Math.pow(2,-10*t) * Math.sin((t*d-s) * (2*Math.PI)/p) + c + b;
		}
	});
})(jQuery);