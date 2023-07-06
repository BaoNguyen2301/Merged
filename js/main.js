// nav active
$(".header__navbar .nav-link").on("click",function(){
    $(".header__navbar").find(".active").removeClass("active");
    $(this).addClass("active");
});


// count up
$('.counter').countUp({
    time: 2000,
    delay: 10
});


// owl carousel

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        455: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
