(function ( $ ) {
    'use strict';
    $.fn.animateCSS = function(options) {
    	var deafults = {
    		animationName : 'fadeIn',
			animationDuration : '1.5s',
			animationDelay : '0s',

		}
        var $this = $(this);

        var settings = $.extend({},deafults,options);

        $(window).load(function(){
        	animateElement();
        });

        function animateElement(){
        	$this.each( function() {
			    var $element = $(this),
			        animationName = ($element.data('view') != undefined) ? $element.data('view') : settings.animationName,
			        animationDuration = ($element.data('animation-duration') != undefined) ? $element.data('animation-duration') : settings.animationDuration,
			        animationDelay = ($element.data('animation-delay') != undefined) ? $element.data('animation-delay') : settings.animationDelay;
			      
			        $element.css({
			          	'-webkit-animation-delay':  animationDelay,
			          	'animation-delay':          animationDelay,
			          	'-webkit-animation-duration': animationDuration,
						'animation-duration': animationDuration,
			        });
			        
			        $element.waypoint(function() {
			          $element.addClass('animated ' + animationName);
			          },{
			              triggerOnce: true,
			              offset: '100%'
			        });
			});
        }
    };
 
}( jQuery ));