$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.navbar .logo a').css("font-size", "25px");
        }else{
            $('.navbar').removeClass("sticky");
            $('.navbar .logo a').css("font-size", "35px");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
            $('.scroll-up-btn').css("margin-right", "5px").css("top", "580px");
            
        }else{
            $('.scroll-up-btn').removeClass("show");
            $('.scroll-up-btn').css("margin-right", "-1px").css("top", "580px");
            
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer", "NFTs Creator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Freelancer", "NFTs Creator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

  

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: false,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

//PARALLAX

$(window).scroll(function(){
    parallax();
    })
    function parallax(){
    
    var wScroll = $(window).scrollTop();
    
    
    $(".parallax").css("background-position",
    "center "+(wScroll*0.60)+"px")
        
    $(".parallax-2").css("background-position",
    "center "+(wScroll*2)+"px")

    $(".parallax-box").css("top",
    -50+(wScroll*0.50)+"em")
    
    }

    // RECAPTCHA RESPONSIVE

    $(function(){
        function rescaleCaptcha(){
          var width = $('.g-recaptcha').parent().width();
          var scale;
          if (width < 302) {
            scale = width / 302;
          } else{
            scale = 1.0; 
          }
      
          $('.g-recaptcha').css('transform', 'scale(' + scale + ')');
          $('.g-recaptcha').css('-webkit-transform', 'scale(' + scale + ')');
          $('.g-recaptcha').css('transform-origin', '0 0');
          $('.g-recaptcha').css('-webkit-transform-origin', '0 0');
        }
      
        rescaleCaptcha();
        $( window ).resize(function() { rescaleCaptcha(); });
      
      });