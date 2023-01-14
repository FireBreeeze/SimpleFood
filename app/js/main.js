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
  }),


  $('.restaurants__list').slick({
    dots: true,
    arrows: false,
    fade: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    cssEase: 'linear',
    centerMode: true
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

});

document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileMenu = document.querySelector('.menu'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu--active'); //когда меню открыто
    if (mobileMenu.classList.contains('menu--active'))  { //Проверяем, есть ли у меню активный класс
      burger.classList.add('burger--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
    }
    else { //Когда нету активного класса у меню
      burger.classList.remove('burger--active'); //Возвращает в исходное состояние
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
    }
  });
});

var mixer = mixitup('.categories__content');