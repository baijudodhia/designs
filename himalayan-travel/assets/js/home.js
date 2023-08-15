var slider = tns({
    container: '.home-rooms',
    items: 1,
    controls: false,
    swipeAngle: false,
    mouseDrag: true,
    nav: false,
    navPosition: "bottom",
    responsive: {
        425: {
            items: 1,
        },
        768: {
            items: 3,
        }
    },
    speed: 300,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
});