document.addEventListener("DOMContentLoaded", function() {
    $(".partners-say .owl-carousel").owlCarousel({
        items: 1,
        dots: true,
        dotsEach: true,
        nav: false,
        loop: true,
        autoplay: true
    });
    $(window).scroll(function(){
        var sticky = $('header.header'),
            scroll = $(window).scrollTop();

        if (scroll >= 1) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
    $(".btn-mob").on("click", function (){
        $("body").toggleClass("fixed");
        $("html").toggleClass("fixed");
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    });
    $(".sub > a").on("click", function (event){
        event.preventDefault();
        $(this).parent(".sub").toggleClass("active");
    });
    $(".ask").on("click", function (){
        $(this).toggleClass("open");
        $(this).siblings(".answer").slideToggle();
    });
    $('.grid').masonry({
        // options
        itemSelector: '.item',
        percentPosition: true
    });

});
