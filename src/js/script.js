$(document).ready(function(){
  $('.carousel__photo').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    /* asNavFor: '.carousel__descr', */
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow_left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow_right.svg"></button>',
  });

  /* $('.carousel__descr').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor : '.carousel__photo',
    centerMode: true,
  }); */





});

