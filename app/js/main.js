$(function(){

  
  $('.filter-price__input').ionRangeSlider({
     type: "double",
     prefix: "₴",
    
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },   
  });

   
  // $('.mobil-burger').add('burger--active');
  // $('.mobil-burger--active').remove('burger');

  $('.select-style').styler();

  $('.reviews__slider').slick({
    dots: true,
    arrow: true,
    // fade: false,
    // autoplay: true,
    autoplaySpeed: 3000,
    infinite: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
        }
      }
    ],
    prevArrow: '<div class="reviews-arrow reviews-arrow__prev"><svg class="icon-chevron"><use xlink:href="images/sprite.svg#icon-chevron" viewBox="0 0 11 18"></use></svg></div>',
    nextArrow: '<div class="reviews-arrow reviews-arrow__next"><svg class="icon-chevron"><use xlink:href="images/sprite.svg#icon-chevron" viewBox="0 0 11 18"></use></svg></div>',
  }),


  // $('.restaurants__list').slick({
  //   dots: true,
  //   arrows: false,
  //   fade: true,
  //   // autoplay: true,
  //   autoplaySpeed: 3000,
  //   infinite: true,
  //   cssEase: 'linear',
  //   centerMode: true
  // });

  $(window).on('load resize', function () {
  if ($(window).width() < 620) {
   $('.restaurants__list').slick({
    prevArrow: false,
    nextArrow: false,
    dots: true,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
   });
  } else {
    $(".restaurants__list.slick-initialized").slick("unslick");
  }
});

});

document.addEventListener('DOMContentLoaded', () => {
  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileMenu = document.querySelector('.mobil-menu'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobil-menu--active'); //когда меню открыто
    if (mobileMenu.classList.contains('mobil-menu--active'))  { //Проверяем, есть ли у меню активный класс
      // burger.classList.add('burger--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
    }
    else { //Когда нету активного класса у меню
      burger.classList.remove('burger--active'); //Возвращает в исходное состояние
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
      mobilMenu.classList.remove('mobil-menu'); //Возвращает в исходное состояние
    }

    document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      bodyLock.classList.remove('lock');
      mobilMenu.classList.remove('mobil-menu');  //НЕ РАБОТАЕТ
      burger.classList.remove('burger--active');
      }
    });
    
  });

});

// const button = document.querySelector('.menu__seach');
// const form = document.querySelector('#seach');
// const popup = document.querySelector('.popup');

// button.addEventListener('click', () => {
//   form.classList.add('open');
//   popup.classList.add('popup_open');
  
// });
  



var mixer = mixitup('.categories__content');