jQuery(function ($) {
    //ham-burger
    burger = document.querySelector(".burger");
    header = document.querySelector(".header");
    logo = document.querySelector(".logo");
    search = document.querySelector(".search");
    shopbag = document.querySelector(".shop-bag");
    navList = document.querySelector(".nav-list")

    burger.addEventListener('click', () => {
        header.classList.toggle('resp-nav-bar');
        logo.classList.toggle('resp-nav');
        search.classList.toggle('resp-nav');
        shopbag.classList.toggle('resp-nav');
        navList.classList.toggle('resp-nav');
    });

    //slick-slider
    $('.banner-section-container').slick({
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});
