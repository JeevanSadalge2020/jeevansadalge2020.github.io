$('.slick-for-world-class-expert-doctors').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
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
window.addEventListener("resize", removeClass);
window.addEventListener("load", removeClass);

function removeClass() {
    let items = document.querySelectorAll(".world-class-expert-doctors__list__item");
    if (window.innerWidth < 1024) {
        items.forEach((item, index) => {
            if (index > 3) {
                item.style.display = "none";
            }
        })
    }
}

$(window).on('resize', function () {
    var win = $(this); //this = window
    if (win.width() < 1080) {
        removeClass();
        let items = document.querySelectorAll(".world-class-expert-doctors__list__item");
        items.forEach((item, index) => {
            if (index > 3) {
                item.style.display = "none";
            }
        })
    }
});


// TO APPLY SLICK WHEN SWITCHING FROM UNSLICK
$(window).resize(function () {
    $('.slick-for-world-class-expert-doctors').not('.slick-initialized').slick('resize');
});

$(window).resize(function () {
    $('.slick-for-medical-treatments').not('.slick-initialized').slick('resize');
});

// $(window).on('orientationchange', function () {
//     $('.slick-for-world-class-expert-doctors').not('.slick-initialized').slick('resize');
// });


// FEATURED MEDICAL TREATMENTS
$('.slick-for-medical-treatments').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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


// SLIDER FOR TREATMENT PAGE
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
    $('.slider-for-treatment-page').not('.slick-initialized').slick('resize');
});

$(window).on('orientationchange', function () {
    $('.slider-for-treatment-page').not('.slick-initialized').slick('resize');
});