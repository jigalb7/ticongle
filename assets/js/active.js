!function(n){"use strict";var a=n(window);if(a.on("load",function(){n(".preloader").fadeOut("slow",function(){n(this).remove()})}),n.fn.classyNav&&n("#alazeaNav").classyNav(),n("#searchIcon").on("click",function(){n(".search-form").toggleClass("active")}),n(".closeIcon").on("click",function(){n(".search-form").removeClass("active")}),n.fn.owlCarousel){var e=n(".hero-post-slides"),o=n(".testimonials-slides"),i=n(".portfolio-slides");e.owlCarousel({items:1,margin:0,loop:!0,nav:!1,dots:!1,autoplay:!0,center:!0,autoplayTimeout:5e3,smartSpeed:1e3}),o.owlCarousel({items:1,margin:0,loop:!0,nav:!1,dots:!0,autoplay:!0,autoplayTimeout:5e3,smartSpeed:700,animateIn:"fadeIn",animateOut:"fadeOut"}),i.owlCarousel({items:2,margin:30,loop:!0,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!0,autoplay:!1,autoplayTimeout:5e3,smartSpeed:700,center:!0})}n.fn.imagesLoaded&&n(".alazea-portfolio").imagesLoaded(function(){n(".portfolio-filter").on("click","button",function(){var a=n(this).attr("data-filter");e.isotope({filter:a})});var e=n(".alazea-portfolio").isotope({itemSelector:".single_portfolio_item",percentPosition:!0,masonry:{columnWidth:".single_portfolio_item"}})}),n.fn.magnificPopup&&(n(".portfolio-img, .product-img").magnificPopup({gallery:{enabled:!0},type:"image"}),n(".video-icon").magnificPopup({type:"iframe"})),n.fn.barfiller&&(n("#bar1").barfiller({tooltip:!0,duration:1e3,barColor:"#70c745",animateOnResize:!0}),n("#bar2").barfiller({tooltip:!0,duration:1e3,barColor:"#70c745",animateOnResize:!0}),n("#bar3").barfiller({tooltip:!0,duration:1e3,barColor:"#70c745",animateOnResize:!0}),n("#bar4").barfiller({tooltip:!0,duration:1e3,barColor:"#70c745",animateOnResize:!0})),n.fn.scrollUp&&a.scrollUp({scrollSpeed:1500,scrollText:'<i class="fa fa-angle-up"></i>'}),n.fn.counterUp&&n(".counter").counterUp({delay:10,time:2e3}),n.fn.sticky&&n(".alazea-main-menu").sticky({topSpacing:0}),n.fn.tooltip&&n('[data-toggle="tooltip"]').tooltip(),n(".slider-range-price").each(function(){var a=jQuery(this).data("min"),e=jQuery(this).data("max"),i=jQuery(this).data("unit"),o=jQuery(this).data("value-min"),t=jQuery(this).data("value-max"),l=jQuery(this).data("label-result"),r=n(this);n(this).slider({range:!0,min:a,max:e,values:[o,t],slide:function(a,e){var o=l+" "+i+e.values[0]+" - "+i+e.values[1];console.log(r),r.closest(".slider-range").find(".range-price").html(o)}})}),n('a[href="#"]').on("click",function(a){a.preventDefault()}),767<a.width()&&(new WOW).init()}(jQuery);

(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#musicaNav').classyNav();
    }

    // :: 3.0 Sliders Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlide = $('.hero-slides');
        var featured_shows = $('.featured-shows-slides');
        var music_player = $('.music-player-slides');
        var discography = $('.discography-slides');

        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
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

        featured_shows.owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 600,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        music_player.owlCarousel({
            items: 3,
            margin: 45,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 750,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });

        discography.owlCarousel({
            items: 6,
            margin: 30,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 600,
            responsive: {
                0: {
                    items: 2
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

    // :: 4.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // :: 5.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 6.0 Sticky Active Code
    if ($.fn.sticky) {
        $(".musica-main-menu").sticky({
            topSpacing: 0
        });
    }

    // :: 7.0 Progress Bar Active Code
    if ($.fn.circleProgress) {
        $('#circle').circleProgress({
            size: 160,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#cc1573',
            thickness: '4',
            reverse: true
        });
        $('#circle2').circleProgress({
            size: 160,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#cc1573',
            thickness: '4',
            reverse: true
        });
        $('#circle3').circleProgress({
            size: 160,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#cc1573',
            thickness: '4',
            reverse: true
        });
        $('#circle4').circleProgress({
            size: 160,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#cc1573',
            thickness: '4',
            reverse: true
        });
    }

    // :: 8.0 audioPlayer Active Code
    if ($.fn.audioPlayer) {
        $('audio').audioPlayer();
    }

    // :: 9.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    // :: 10.0 niceScroll Active Code
    if ($.fn.niceScroll) {
        $(".album-all-songs").niceScroll({
            background: "#fff"
        });
    }

    // :: 11.0 ScrollDown Active Code
    $("#scrollDown").on('click', function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top - 85
        }, 1500);
    });

    // :: 12.0 prevent default a click
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // :: 13.0 wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }

})(jQuery);