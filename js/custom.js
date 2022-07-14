(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: 'images/1.jpg' },
            { src: 'images/2.jpg' },
            { src: 'images/3.jpg' },
            { src: 'images/4.jpg' },
            { src: 'images/5.jpg' },
            { src: 'images/6.jpg' },
            { src: 'images/7.jpg' },
            { src: 'images/8.jpg' },
            { src: 'images/9.jpg' },
            { src: 'images/10.jpg' },
            { src: 'images/11.jpg' },
            { src: 'images/12.jpg' },
            { src: 'images/13.jpg' },
            { src: 'images/14.jpg' },
            { src: 'images/15.jpg' },
            { src: 'images/16.jpg' }
        ],
        delay: 7000, // delay between slide transition
        timer: false, // disable timer
        shuffle: true, // shuffle images
        firstTransition: 'fade', // fade into first slide
        firstTransitionDuration: 5000, // ^ lasts five seconds
        transition: 'blur', // blur transition for rest of slides
        transitionDuration: 2000 // ^ lasts two seconds
    });

    // MUSIC
    //$('#music').prop("volume", 0.1); // set music volume

    // PARALLAX
    $('.home-info').tilt({
      maxTilt: 20, // max tilt
      scale: 1.3, // zoom scale
      perspective: 700, // tilt agressiveness
      speed: 3000, // enter/exit anim speed
    });

})(jQuery);
