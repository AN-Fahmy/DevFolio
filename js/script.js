$(document).ready(function(){
    /* Scroll Navbar Add Backgorund */
    let header = document.querySelector("nav");

    window.onscroll = function(){scrollDown(), scrollUp()};

    function scrollDown(){
        if(document.documentElement.scrollTop > 200){
            header.style.backgroundColor = "#000000E6";
        } else{
            header.style.backgroundColor = "transparent";
        }
    }

    /* Show And Hide Scroll Up */
    function scrollUp(){
        if(document.documentElement.scrollTop > 400){
            $(".scroll-up").css("display","block");
        } else{
            $(".scroll-up").css("display","none");
        }
    };

    /* Go Up With ScrollUp Icon */
    $(".scroll-up").click(function(){
        document.documentElement.scrollTop = 0;
    });

    /* Add And Remove Class ACtive */
    let links = document.querySelectorAll("nav .navbar-collapse .navbar-nav li");

    $(links).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    /* Type Js Home Section */
    var typed = new Typed('#element', {
        strings: ['Designer','Freelancer' , 'Photographer'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
    });

    /* Counter Portofolio Data */
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 10000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };

    $('.service .counter-service .counter .content-service .count-1').countTo({
        from: 0,
        to: 450,
        speed: 13000,
        refreshInterval: 50,
        onComplete: function(value) {
            console.debug(this);
        }
    });

    $('.service .counter-service .counter .content-service .count-2').countTo({
        from: 0,
        to: 25,
        speed: 13000,
        refreshInterval: 50,
        onComplete: function(value) {
            console.debug(this);
        }
    });

    $('.service .counter-service .counter .content-service .count-3').countTo({
        from: 0,
        to: 550,
        speed: 13000,
        refreshInterval: 50,
        onComplete: function(value) {
            console.debug(this);
        }
    });

    $('.service .counter-service .counter .content-service .count-4').countTo({
        from: 0,
        to: 48,
        speed: 13000,
        refreshInterval: 50,
        onComplete: function(value) {
            console.debug(this);
        }
    });

    /* Swiper Slider Portfolio */
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    /* Swiper Work Portfolio */
    var swiper = new Swiper(".slider-work .mySwiper", {
        rewind: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    /* CLick Image To Show Swiper Work Portfolio */
    $(".portfolio .portfolio-cards .card-image").click(function(){
        $(".portfolio .slider-work").css("display","flex");
        header.style.backgroundColor = "transparent";
    });

    /* CLick Exite To Hide Swiper Work Portfolio */
    $(".portfolio .slider-work .exit").click(function(){
        $(".portfolio .slider-work").hide(200);
        header.style.backgroundColor = "#000000E6";
    });


    let loader = document.querySelector(".intro");

    function load(){
        loader.classList.add("fade-out");
    };
    function fadeOut(){
        setInterval(load, 2000);
    };

    window.onload = fadeOut;

})

