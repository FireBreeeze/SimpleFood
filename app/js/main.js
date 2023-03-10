$(function(){

// // Initialise Carousel
// const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
//   preload: 2,
// });

// Customize Fancybox
// Fancybox.bind('[data-fancybox="gallery"]', {
//   Thumbs: false,
//   Toolbar: false,

//   closeButton: "top",

//   Carousel: {
//     Dots: true,
//     on: {
//       change: (that) => {
//         myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
//           friction: 0,
//         });
//       },
//     },
//   },
// });

  $('.tabs__top-item').on('click', function(e){

    e.preventDefault(); //отменяет стандартную обработку по ссылке
    $('.tabs__top-item').removeClass('tabs__top-item--active');
    $(this).addClass('tabs__top-item--active');

    $('.tabs__content-item').removeClass('tabs__content-item--active');
    $($(this).attr('href')).addClass('tabs__content-item--active');
  });

  $('.interesting-slide').slick({
    dots: false,
    // arrows: true,
    // fade: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 5,
    responsive: [
      { breakpoint: 1231,
        settings: {
          slidesToShow: 4,
        }
      },
      { breakpoint: 993,
        settings: {
          slidesToShow: 3,
        }
      },
      { breakpoint: 769,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 3,
        }
      },
      { breakpoint: 577,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 3,
        }
      },
    ],
    prevArrow: '<div class="arrow arrow--prev"><svg class="icon-chevron"><use xlink:href="images/sprite.svg#icon-chevron" viewBox="0 0 11 18"></use></svg></div>',
    nextArrow: '<div class="arrow arrow--next"><svg class="icon-chevron"><use xlink:href="images/sprite.svg#icon-chevron" viewBox="0 0 11 18"></use></svg></div>',
  }),

  $('.product-slide').slick({
    dots: false,
    // dots: true,
    arrows: true,
    // fade: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 577,
        settings: {
          arrows: false,
        }
      }
    ],
    prevArrow: '<div class="card-arrow card-arrow--prev"><svg class="icon-chevron"><use xlink:href="images/sprite.svg#icon-chevron" viewBox="0 0 19 32"></use></svg></div>',
    nextArrow: '<div class="card-arrow card-arrow--next"><svg class="icon-chevron"><use xlink:href="images/sprite.svg#icon-chevron" viewBox="0 0 19 32"></use></svg></div>',
  }),

$(".star").rateYo({
    starWidth: "16px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "#FFB800",
    readOnly: true,
});

 $window = $(window);
  $window.scroll(function() {
    $scrollPosition = $window.scrollTop();
    if ($scrollPosition > 50) {
      $('.header__top').addClass('header__top--bg');
    } else {
      $('.header__top').removeClass('header__top--bg');
    }
});

$window = $(window);
  $window.scroll(function() {
    $scrollPosition = $window.scrollTop();
    if ($scrollPosition > 50) {
      $('.header-page__top').addClass('.header-page__top--bg');
    } else {
      $('.header-page__top').removeClass('.header-page__top--bg');
    }
  });

   $('.menu-list__link, .logo').on("click", function(event){
    event.preventDefault();
    const scrollAnchor = $(this).attr('href');
    let scrollPoint = $(scrollAnchor).offset().top;

    if(scrollAnchor === '#gallery') {
      scrollPoint = scrollPoint - 65;
    } 

    if(scrollAnchor === '#contacts') {
      scrollPoint = scrollPoint - 65;
    }

    $('html, body').animate({scrollTop: scrollPoint}, 3500);
    return false;
  });

  $('.catalog-title__btn, .filters-open__burger').on('click', function(){
    $('.filters-open').toggleClass('filters-open--active');
    $('body').toggleClass('lock');
  });

  $('.mobil-burger').on('click', function(){
    $('.mobil-menu').toggleClass('mobil-menu--active');
    $('body').toggleClass('lock');
  });

  $('bodyClassLock').on('click', function(){
    $('.mobil-menu--active').remove('mobil-menu');
    $('body').toggleClass('lock');
  });
  //НЕ ПОЛУЧАЕТСЯ ЗАКРЫТЬ ВЫПАДАЮЩЕЕ МЕНЮ ПРИ КЛИКЕ НА ЗАТЕМНЕННУЮ ЧАСТЬ ЭКРАНА
  $('bodyClassLock').on('click', function(){
    $('.filters-open--active').remove('filters-open');
    $('body').toggleClass('lock');
  });
  

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

  $('.select-style, .product-one__input').styler();

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
    prevArrow: '<div class="reviews-arrow reviews-arrow--prev"><svg class="icon-chevron"><use xlink:href="images/sprite.svg#icon-chevron" viewBox="0 0 11 18"></use></svg></div>',
    nextArrow: '<div class="reviews-arrow reviews-arrow--next"><svg class="icon-chevron"><use xlink:href="images/sprite.svg#icon-chevron" viewBox="0 0 11 18"></use></svg></div>',
  }),

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



// $(window).on('load resize', function () {
//   if ($(window).width() < 620) {
//    $('.interesting-slide').slick({
//     arrows: true,
//     dots: false,
//     // autoplay: true,
//     slidesToShow: 5,
//     // slidesToScroll: 3,
//     infinite: true,
//       responsive: [
//       {
//         breakpoint: 621,
//         settings: {
//           dots: true,
//           arrows: false,
//         }
//       }
//     ],
//    });
//   } else {
//     $('.interesting-slide.slick-initialized').slick('unslick');
//   }
// });




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

const button = document.querySelector('.menu__seach');
const form = document.querySelector('.seach');
const popup = document.querySelector('.popup');
const burger = document.querySelector('.popup-burger');

button.addEventListener('click', () => {
  form.classList.add('open');
  popup.classList.add('popup_open');
});
burger.addEventListener('click', () => {
  form.classList.add('seach');
  popup.classList.add('popup_close');
});





var mixer = mixitup('.categories__content');

// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// Swiper.use([Navigation, Pagination]); 
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   loop: true,
//   zoom: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
