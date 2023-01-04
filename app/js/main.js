$(function(){

  $('.reviews__slider').slick({
    dots: true,
    arrow: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,

    prevArrow: '<div class="slick-arrow slick-prev"><svg class="icon-chevron"><use xlink:href="images/sprite.svg#icon-chevron" viewBox="0 0 11 18"></use></svg></div>',
    nextArrow: '<div class="slick-arrow slick-next"><svg class="icon-chevron"><use xlink:href="images/sprite.svg#icon-chevron" viewBox="0 0 11 18"></use></svg></div>',
  });

  $('div').on('click', function() {
  $('slider').slick('slickNext');
});


});

var mixer = mixitup('.categories__content');