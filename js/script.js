$(document).ready(function() {

    //Show Navigation on small devices
 	$('.nav-toggler').on('click', function(){
		
 		$(this).toggleClass('change');

 		if ( $(".collapse").parents("#nav-menu").length == 1 ) { 

 		   $('.collapse').appendTo('body').fadeToggle();

 		} else {

 		   $('.collapse').appendTo('#nav-menu').hide();

 		}

    });

    // Scroll to top button
    $(window).on('scroll', function(){
        
        if ($(this).scrollTop() > 800) {
            
            $('.scroll-top').fadeIn();
       
        } else {
            
            $('.scroll-top').fadeOut();
        }
    });

    $('.scroll-top').on('click', function(){
        
        $('html, body').animate({scrollTop : 0},800);
        
        return false;
    });

    //Toggle bettween differents tabs of the menu
    $('.menu-prices nav ul li').on('click', function(){

    	$(this).siblings().removeClass('active').end().toggleClass('active');
		
 		$($(this).data('target')).fadeIn().siblings().hide();

    });
    
    // Animation On scroll
	$(window).on("scroll", function() {
		
		$('.row .card-container').each(function() {
			
			var element = $(this),
			    element_top_position = element.offset().top-800,
				sc = $(window).scrollTop();
			
			if (sc >= element_top_position) {
				
				element.addClass("slideIn-Up" );
			}
		});
		
	});
	
});	

//Preload screen
$(window).load( function() {
	
	$('.loading-screen').fadeOut();

});