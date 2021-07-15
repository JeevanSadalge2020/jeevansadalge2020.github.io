$('.slider-for-treatment-page').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
        {
            breakpoint: 1023,
            settings: "unslick"
        },
        {
            breakpoint: 480,
            settings: "unslick"
        }
    ]
});


$(window).resize(function () {
    $('.slick').not('.slick-initialized').slick('resize');
});

$(window).on('orientationchange', function () {
    $('.slick').not('.slick-initialized').slick('resize');
});

