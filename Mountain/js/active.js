jQuery(document).ready(function($){		
	   "use strict";
		//scrollTop

        $('.scrollup').fadeOut();

        $(window).scroll(function () {

            if ($(this).scrollTop() > 200) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').on('click', function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

		// jQuery smooth scroll
        $('li a.smooth_menu').on('click', function (event) {
            var $anchor = $(this);
            var headerH = '50';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');

            event.preventDefault();
        });  

    
    	//MixitUP
        $('.all-portfolios').mixItUp({
            animation: {
                effects: 'scale'
            }
        });
		
		//mixitup-menu
        $('ul.portfolio_menu li').on('click', function () {

            $("ul.portfolio_menu li").removeClass("active");
            $(this).addClass("active");
        }); 
        
        //parallax-effect
		$(function(){
			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 40
			});
		});    

	$(".owlCarousel").owlCarousel({	
		items : 4,
		itemsDesktopSmall : [1170,4]
	});    
		   
        
  });