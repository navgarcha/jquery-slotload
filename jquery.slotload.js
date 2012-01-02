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
    $.fn.slotload = function(options) {
        var settings = $.extend({}, $.fn.slotload.settings, options),
            showDelay = Math.floor(settings.baseDelay + (Math.random() * 500));
        
        this.find(settings.selector +'[data-load]').each(function() {
            var wrapper = $('<div class="slotload-img-wrapper '+ settings.loadingClass +'" style="display:inline-block; overflow:hidden;" />'),
                img = $(this).wrap(wrapper),
                imgSrc = img.data('load');

            $('<img />').load(function() {
                var loadedImg = $(this).hide().insertAfter(img),
                    imgHeight = loadedImg.height();
                
                // Only required to get accurate height
                loadedImg.remove();
                
                // Setup img elm for slot effect
                img.attr('src', imgSrc).css({
                    'position': 'relative',
                    'top': -(imgHeight + 50)
                });
                
                setTimeout(function() {
                    img.animate({
                        'top': 0
                    }, {
                        duration: settings.speed,
                        easing: 'elasticOut',
                        complete: settings.onComplete
                    }).parent().removeClass(settings.loadingClass);
                }, showDelay);
            }).error(function() {
                img.parent().removeClass(settings.loadingClass);
            }).attr('src', imgSrc);
        });
    
        // Ensure plugin is chainable
        return this;
    };
    
    // Public settings
    $.fn.slotload.settings = {
        selector: 'img',
        loadingClass: 'loading',
        speed: 800,
        baseDelay: 500,
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