// Change navbar style on scroll
$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
            $('.navbar .logo a').css("font-size", "25px");
            $('.border').addClass('active');
        } else {
            $('.navbar').removeClass("sticky");
            $('.navbar .logo a').css("font-size", "35px");
            $('.border').removeClass('active');
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up').addClass("show");
            $('.scroll-up').css("margin-right", "5px");

        } else {
            $('.scroll-up').removeClass("show");
            $('.scroll-up').css("margin-right", "-1px");

        }
    });

    // slide-up script
    $('.scroll-up').click(function () {
        $('html').animate({
            scrollTop: 0
        });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script
    $('.carousel').each(function(index) {
        const rtlConfig = index === 0 ? { rtl: true } : {};
        $(this).owlCarousel({
          margin: 20,
          loop: true,
          autoplay: true,
          autoplayTimeout: 2000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            1000: {
              items: 3
            }
          },
          ...rtlConfig // Spread operator to merge rtlConfig object
        });
      });
});

//PARALLAX
$(window).scroll(function () {
    parallax();
})

function parallax() {
    var wScroll = $(window).scrollTop();
    $(".parallax").css("background-position",
        "center " + (wScroll * 0.60) + "px")

    $(".parallax-2").css("background-position",
        "center " + (wScroll * 2) + "px")

    $(".parallax-box").css("top",
        -50 + (wScroll * 0.50) + "em")
}

// RECAPTCHA RESPONSIVE
$(function () {
    function rescaleCaptcha() {
        var width = $('.g-recaptcha').parent().width();
        var scale;
        if (width < 302) {
            scale = width / 302;
        } else {
            scale = 1.0;
        }
        $('.g-recaptcha').css('transform', 'scale(' + scale + ')');
        $('.g-recaptcha').css('-webkit-transform', 'scale(' + scale + ')');
        $('.g-recaptcha').css('transform-origin', '0 0');
        $('.g-recaptcha').css('-webkit-transform-origin', '0 0');
    }
    rescaleCaptcha();
    $(window).resize(function () {
        rescaleCaptcha();
    });
});

// SHOW CORRENT YEAR IN THE FOOTER
$("#corrent-year").text(new Date().getFullYear());
