$(document).ready(function(){
  $('.carousel__inner').slick({
    centerMode: true,
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.svg"></button>',
    asNavFor: '.carousel__text'
  });

  $('.carousel__text').slick({
    centerMode: true,
    slidesToShow: 3,
    arrows: false,
    asNavFor: '.carousel__inner'
  });


});

