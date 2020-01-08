$(function(){
    
    // Blog slider
    
$('.blog-list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
    arrows:false,
    dots:false,
  autoplaySpeed: 2000,
      responsive: [
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
       
      }
    },
           {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        
      }
    },
          {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        
      }
    },
    ]       
});
    
    
    //sticky menu
    $(window).on('scroll', function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 150){
          $('.navbar').addClass('bg')
        }
        else{
            $('.navbar').removeClass('bg')
        }
        // Closes responsive menu when a scroll link is clicked
        
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
        
         // back to top button 
        
    if(scrolling > 200){
        $('.scroll').fadeIn(500);
    }
    else{
        $('.scroll').fadeOut(500);
    }
    });
    
    $('.scroll').on('click', function(){
  $('html, body').animate({scrollTop:0},1000);  
});   
    
//animation scroll js
    
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 45
            }, 1500);
            return false;
        }
    }
}); 
    
    // type.js
    
    $(".typed").typed({
		strings: ["Coder...", "Designer...", "Developer..."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 80,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    
    //preloader
    
    $(window).on('load', function (){
     $('.preloader').delay(500).fadeOut(500);   
    });
    
   
    //counter
    
    $('.counter').counterUp({
    delay: 10,
    time: 1000
});
    
    

    
    // veno box
     $('.venobox').venobox();
    
    // feedback slider
    
$('.feedback-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
    arrows:false,
    dots:true,
  autoplaySpeed: 2000,
     
});
    
    
    // Wow js
    new WOW().init();
    
     // down-button
   
 
 

   $('.down-button').click (function() {
      $('html, body').animate({scrollTop: $('#about').offset().top }, 1500);
      return false;
    });
    
   
    
    
}); 