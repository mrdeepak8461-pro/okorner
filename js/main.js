AOS.init();

AOS.init({
    duration: 900
});

$('.owl-carousel-1').owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 500,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})