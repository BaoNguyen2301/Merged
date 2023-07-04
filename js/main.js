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
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
