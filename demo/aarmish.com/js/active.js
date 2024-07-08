(function ($) {
    'use strict';

    // :: All Variables

    var bigshopWindow = $(window),
        wel_slides = $('.welcome_slides'),
        welSlidesTwo = $('.welSlideTwo');

    // :: Hero Slides Code - Home 1

    if ($.fn.owlCarousel) {
        wel_slides.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
			mouseDrag: false,
			touchDrag: true,
            dots: true,
            nav: true,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            autoplay: true,
            autoplayTimeout: 6000,
            smartSpeed: 800,
            animateIn: "fadeIn",
            animateOut: "fadeOut"
        });

        wel_slides.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        wel_slides.on('translated.owl.carousel', function () {
            var layer = wel_slides.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    }
	
	/*********************/
	
	if ($.fn.owlCarousel) {
        $(".text_slides").owlCarousel({
            items: 4,
            margin: 30,
            loop: true,
            nav: true,
			mouseDrag: true,
			touchDrag: false,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            dots: false,
            autoplay: true,
            smartSpeed: 1000,
            autoplayTimeout: 1000,
            autoplayHoverPause: false,
            responsive: {
                320: {
                    items: 1,
					mouseDrag: false,
					touchDrag: true,
                },
                480: {
                    items: 2,
					mouseDrag: false,
					touchDrag: true,
                },
                768: {
                    items: 3,
					mouseDrag: false,
					touchDrag: true,
                },
                992: {
                    items: 4,
					mouseDrag: false,
					touchDrag: true,
                }
            }
        });
    }

	 // :: Popular Brands Slide Code

    if ($.fn.owlCarousel) {
        $(".client_slide").owlCarousel({
            items: 6,
            margin: 30,
            loop: true,
            nav: false,
            dots: false,
            center: false,
            autoplay: true,
            autoplayTimeout: 1000,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 6
                }
            }
        });
    }
if ($.fn.niceSelect) {
        $('select').niceSelect();
    }


    // :: Tooltip Code

    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // :: ScrollUp Code

    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="icofont-rounded-up"></i>'
        });
    }

	if (!window.Cypress) AOS.init();

(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
  })(jQuery); 


    // :: Jarallax Code

    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // :: PreventDefault "a" Click

    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    //::  WoW Active Code

    if (bigshopWindow.width() > 767) {
        new WOW().init();
    }

})(jQuery);