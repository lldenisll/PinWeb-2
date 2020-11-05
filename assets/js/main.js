//SLIDES
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const toggle = document.querySelector('#myonoffswitch');
let auto = true; // Auto scroll
const intervalTime = 7000;
let slideInterval;

//initialized wow.js
new WOW().init();

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibiling
        current.nextElementSibling.classList.add('current');
    }
    else {
        // Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if (current.previousElementSibling) {
        // Add current to prev sibiling
        current.previousElementSibling.classList.add('current');
    }
    else {
        // Add current to last
        slides[slides.length - 1 ].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

// Button events
next.addEventListener('click', e => {
    nextSlide();
		if(auto) {
			clearInterval(slideInterval);
			slideInterval = setInterval(nextSlide, intervalTime);
		}
})
prev.addEventListener('click', e => {
    prevSlide();
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
})

// // Auto slide toggle
// toggle.addEventListener('click', e => {
//     if ( toggle.checked ) {
// 			auto = true;
// 			slideInterval = setInterval(nextSlide, intervalTime);
//     } else {
// 			auto = false;
// 			clearInterval(slideInterval);
//     }
// })

// Auto slide
if(auto) {
	slideInterval = setInterval(nextSlide, intervalTime);
}

/*
    SECTION TIMELINE
*/
(function() {

    'use strict';
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  
  })();
  $( window ).konami();
    $( '.konami-sensitive' ).konami();
  
  $( window ).konami({
          cheat: function() {
              alert( 'DESCUBRA' );
          }
      });



      //COUNTER

      
	$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};


$('#number1').jQuerySimpleCounter({end: 12,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 246,duration: 2500});

