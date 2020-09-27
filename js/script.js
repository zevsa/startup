$(document).ready(function () {
    $('.burger').click(function(){
        if(!$(this).hasClass('open')){
            $('.header-menu').css('display', 'flex');
            $('.fa-bars').hide();
            $('.fa-close').show();
            $(this).addClass('open');
        }
        else{
            $('.header-menu').css('display', 'none');
            $('.fa-bars').show();
            $('.fa-close').hide();
            $(this).removeClass('open');
        }
    })
    $('.about-slider').slick({
        slidesToShow: 4,
        prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1199.98,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    })
    $('.sponsor-slider').slick({
        arrows: false,
        dots: true
    })
});