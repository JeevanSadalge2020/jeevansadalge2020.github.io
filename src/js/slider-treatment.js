$('.slick').slick({
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
// window.addEventListener("resize", removeClass);
// window.addEventListener("load", removeClass);

// function removeClass() {
//     let items = document.querySelectorAll(".world-class-expert-doctors__list__item");
//     if (window.innerWidth < 1024) {
//         items.forEach((item, index) => {
//             if (index > 3) {
//                 item.style.display = "none";
//             }
//         })
//     }
// }

$(window).resize(function () {
    $('.slick').not('.slick-initialized').slick('resize');
});

$(window).on('orientationchange', function () {
    $('.slick').not('.slick-initialized').slick('resize');
});

