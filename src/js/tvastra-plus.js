const hospitalsOnboarded = document.querySelectorAll(".tvastra-plus-benefits__grid-container__item1__subdivision2__images-container figure");

hospitalsOnboarded.forEach((item, index) => {
    if (index % 2 === 0) {
        item.style.borderRight = "1px solid rgba(147, 190, 222, 0.9)";
    }
    if (index !== 0 && index !== 1) {
        item.style.borderTop = "1px solid rgba(147, 190, 222, 0.9)";
    }
});


// TVASTRA-PLUS SLIDER
$('.slick-for-tvastra-plus').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                rows: 2,
                slidesPerRow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                rows: 2,
                slidesPerRow: 2
            }
        }
    ]
});