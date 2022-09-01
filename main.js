$(function(){

    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active')
    });
    
    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScoll: 1,
        asNavFor: '.heroes__slider-text',
        nextArrow: '<button class="slick-btn slick-prev"><img src="sezon-9.jpg" alt="prev"></button>',
        prevArrow: '<button class="slick-btn slick-next"><img src="sezon-8.jpg" alt="next"></button>',
        responsive: [
        {
            breakpoint: 769,
            settings: {
                arrows: false

            }
        }
        ]
    });

    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScoll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        arrows: false
    });
});