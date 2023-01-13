$(function(){

  $('.reviews__slider').slick({
    dots: true,
    arrow: true,
    fade: false,
    // autoplay: true,
    autoplaySpeed: 3000,
    infinite: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          infinite: true,
        }
      }
    ],


    prevArrow: '<div class="reviews-arrow reviews-arrow__prev"><svg class="icon-chevron"><use xlink:href="images/sprite.svg#icon-chevron" viewBox="0 0 11 18"></use></svg></div>',
    nextArrow: '<div class="reviews-arrow reviews-arrow__next"><svg class="icon-chevron"><use xlink:href="images/sprite.svg#icon-chevron" viewBox="0 0 11 18"></use></svg></div>',
  });


  $('.restaurants__list').slick({
    dots: true,
    arrows: false,
    fade: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    cssEase: 'linear',
    centerMode: true,
    responsive: [
      {
          breakpoint: 576,
          settings: {

          }
      }
    ]
  });

  $(window).on('load resize', function () {
  if ($(window).width() < 768) {
   $('.restaurants__list').slick({
    centerMode: true,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    infinite: true,
    // speed: 100,
    autoplay: true,
    // slidesToShow: 1
   });
  } else {
    $(".restaurants__list.slick-initialized").slick("unslick");
  }
});

  


  // document.addEventListener('DOMContentLoaded', () => {
	// //DOMContentLoaded означает, когда наш документ будет готов к работе, тогда начнут работать наши скрипты
  
	// //Mobile Menu
  // const menu__burgers = document.querySelector('.menu__burgers'); //находим наш бургер по селектору класса
  
  // menu__burgers.addEventListener('click', () => {
	// //Добавляем событие "клик" на бургер

  // menu__burgers.classList.toggle('menu__burgers--active'); //при клике на бургер у нас будет либо добавлятся класс, либо удаляется.
	// 	//ВАЖНО! Мы уже работаем с данным классом, поэтому тут "." не ставим, иначе в атрибут class значение добавится с "." и работать не будет.
  // });

  // //Клик вне таргета
  // document.addEventListener('click', function (e) {
  //   if (e.target !== burger && e.target !== mobileMenu) {
  //     burger.classList.remove('burger--active');
  //     mobileMenu.classList.remove('menu--active');
  //     bodyLock.classList.remove('lock');
  //   }
  // });
// };

//   $('.reviews__slider').slick({
//     dots: true,
//     arrow: true,
//     fade: false,
//     // autoplay: true,
//     autoplaySpeed: 3000,
//     infinite: false,

//     prevArrow: '<div class="reviews-arrow reviews-arrow__prev"><svg class="icon-chevron"><use xlink:href="images/sprite.svg#icon-chevron" viewBox="0 0 11 18"></use></svg></div>',
//     nextArrow: '<div class="reviews-arrow reviews-arrow__next"><svg class="icon-chevron"><use xlink:href="images/sprite.svg#icon-chevron" viewBox="0 0 11 18"></use></svg></div>',
//   });

//   $('div').on('click', function() {
//   $('slider').slick('slickNext');
// });

//  $('.restaurants__slider').slick({
//     dots: true,
//     arrow: true,
//     fade: true,
//     // autoplay: true,
//     autoplaySpeed: 3000,
//     infinite: false,
//   });



});

var mixer = mixitup('.categories__content');