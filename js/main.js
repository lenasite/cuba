$(function(){
    $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 540,
              settings: {
                arrows: false,
                dots: true
              }
            }
          ]
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

    $('.footer__item').on('click', function(){
       var p = $(this);
       p.toggleClass('active');
       p.toggleClass('noactive');
       $('.active .footer__item-list').show();
       $('.noactive .footer__item-list').hide();
    });
});