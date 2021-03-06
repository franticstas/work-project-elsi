//Мобильное меню
$('.header__nav-open').click(function() {
  $('.header__nav').toggleClass('show-nav');
  $('.mask').toggleClass('show');
});

$('.header__nav-close').click(function() {
  $('.header__nav').removeClass('show-nav');
  $('.header__subnav-list').removeClass('show-nav');
  $('.header__nav-arrow').removeClass('bottom-nav__item--level2-open');
  $('.header__subnav-close').removeClass('level2');
  $('.header__nav-arrow2').removeClass('bottom-nav__item--level3-open');
  $('.header__subnav-close').removeClass('level3');
  $('.header__nav-arrow3').removeClass('bottom-nav__item--level4-open');
  $('.header__subnav-close').removeClass('level4');
  $('.mask').removeClass('show');
});

$('.mask').click(function() {
  $('.header__nav').removeClass('show-nav');
  $('.header__subnav-list').removeClass('show-nav');
  $('.header__nav-arrow').removeClass('bottom-nav__item--level2-open');
  $('.header__subnav-close').removeClass('level2');
  $('.header__nav-arrow2').removeClass('bottom-nav__item--level3-open');
  $('.header__subnav-close').removeClass('level3');
  $('.header__nav-arrow3').removeClass('bottom-nav__item--level4-open');
  $('.header__subnav-close').removeClass('level4');
  $('.mask').removeClass('show');
});

//Добавление кнопки открытия меню второго уровня
let $headerNavItems = $('.header__nav-item');
$headerNavItems.each(function () {
  if ($(this).find('ul').length) {
    $(this).prepend("<button class='header__nav-arrow'></button>");
    //$(this).children('a').addClass('header-nav__item--arrow');
  }
});

//Показ кнопки возврата
$('.header__nav-arrow').click(function() {

  $(this).toggleClass('bottom-nav__item--level2-open');
  $('.header__subnav-close').addClass('level2');
});

//Добавление кнопки открытия меню третьего уровня
let $headerNavItems2 = $('.header__subnav-list > li');
$headerNavItems2.each(function () {
  if ($(this).find('ul').length) {
    $(this).prepend("<button class='header__nav-arrow2'></button>");
    //$(this).children('a').addClass('header-nav__item--arrow');
  }
});

//Добавление кнопки открытия меню четвертого уровня
let $headerNavItems3 = $('.header__subnav-list > li > ul li');
$headerNavItems3.each(function () {
  if ($(this).find('ul').length) {
    $(this).prepend("<button class='header__nav-arrow3'></button>");
    //$(this).children('a').addClass('header-nav__item--arrow');
  }
});

//Показ кнопки возврата2
$('.header__nav-arrow2').click(function() {
  $(this).addClass('bottom-nav__item--level3-open');
  $('.header__subnav-close').addClass('level3');
});

//Показ кнопки возврата3
$('.header__nav-arrow3').click(function() {
  $(this).addClass('bottom-nav__item--level4-open');
  $('.header__subnav-close').addClass('level4');
});

$('.header__subnav-close').click(function() {
  if ($(this).hasClass('level4')) {
    $('.header__nav-arrow3').removeClass('bottom-nav__item--level4-open');
    $('.header__subnav-close').removeClass('level4');
    return;
  }

  if ($(this).hasClass('level3')) {
    $('.header__nav-arrow2').removeClass('bottom-nav__item--level3-open');
    $('.header__subnav-close').removeClass('level3');
    return;
  }

  if ($(this).hasClass('level2')) {
    $('.header__nav-arrow').removeClass('bottom-nav__item--level2-open');
    $('.header__subnav-close').removeClass('level2');
    return;
  }
});

if ($(window).width() >= 1170) {
  //Показ меню второго уровня
  $( ".header__nav-item" ).on('mouseenter', function() {
    $(this).children('.header__subnav-list').fadeIn();
  });
  $( ".header__nav-item" ).on('mouseleave', function() {
    $(this).children('.header__subnav-list').fadeOut();
  });

  //Показ меню третьего уровня
  $( ".header__subnav-list li" ).on('mouseenter', function() {
    $(this).children('.header__subnav-list li > ul').fadeIn();
  });
  $( ".header__subnav-list li" ).on('mouseleave', function() {
    $(this).children('.header__subnav-list li > ul').fadeOut();
  });

  //Добавление стрелки в меню второго уровня
  let $headerNavItems = $('.header__subnav-list li');
  $headerNavItems.each(function () {
    if ($(this).find('ul').length) {
      $(this).children('a').addClass('arrow-link')
    }
  });
}

var swiperProductsMounth = new Swiper('.products-mounth__slider', {
  breakpointsInverse: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    490: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    960: {
      slidesPerView: 4,
      spaceBetween: 0
    },
    1170: {
      slidesPerView: 5,
      spaceBetween: 0
    },
  },
});

// const productBrace = $("<div class='product-brace swiper-slide'/>")
//
// $('.products-card__text').hover(
//   function(){
//     $(this).addClass('products-card__text-hover');
//     $(this).parent().addClass('products-card__hover');
//     $(this).parent().after(productBrace);
//   },
//   function(){
//     $(this).parent().removeClass('products-card__text-hover');
//     $(this).parent().removeClass('products-card__hover');
//     $(".product-brace").remove()
//   }
// );

//Добавление кнопки плюс для каталога
let $catalogItem = $('.catalog__item > ul > li');
$catalogItem.each(function () {
  if ($(this).find('ul').length) {
    console.log('ddd');
    $(this).children('a').addClass("catalog__item-plus");
  }
});

$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
  $('.catalog__item-plus').on('click', f_acc);
});

function f_acc(e) {
//скрываем все кроме того, что должны открыть
  $('.catalog__item-plus ul').not($(this).next()).slideUp(700);
// открываем или скрываем блок под заголовком, по которому кликнули
  e.preventDefault();
  $(this).next().slideToggle(700);
  $(this).toggleClass('catalog__item-minus');
}

// Хак при наведении на товар в галереи
$(document).on('mouseenter', '.swiper-wrapper .swiper-slide', function() {
  $(this).closest('.swiper-overflow').addClass("swiper-overflow--hovered");
});

$(document).on('mouseleave', '.swiper-wrapper .swiper-slide', function() {
  $(this).closest('.swiper-overflow').removeClass("swiper-overflow--hovered");
});

$('.left-nav__item a').click(function(e) {
  $('.left-nav__item').find('ul').slideUp(700);

  if (!$(this).hasClass('click-link') && $(this).parent().find('ul').length) {
    console.log("dddddddd");
    e.preventDefault();
    $('.left-nav__item a').removeClass('click-link');
    $(this).addClass('click-link');
  }

  $(this).parent().find('ul').slideToggle(700);
});

//Ползунок в параметрах
var $optSl = $('.js-range-slider');
var $minPrice = $('.options__min-price');
var $maxPrice = $('.options__max-price');
var $min = $('.options__min');
var $max = $('.options__max');
$optSl.ionRangeSlider({
  hide_from_to: true,
  hide_min_max: true,
  skin: "round",

  onStart: function(data) {
    $minPrice.prop("value", data.from);
    $maxPrice.prop("value", data.to);
    $min.text(data.min);
    $max.text(data.max);
  },
  onChange: function(data) {
    $minPrice.prop("value", data.from);
    $maxPrice.prop("value", data.to);
  }
});

$optSl.ionRangeSlider({
  from: 300,
  to: 400
});

//Открытие / закрытие фильтров
$('.filter__options-title').click(function() {
  $(this).next().slideToggle(700);
  $(this).toggleClass('filter__options-title--open');
});

//Инициализация кастомного селекта
$('.select-price').select2({
  minimumResultsForSearch: -1
});

if ($(window).width() <= 1169) {
//Открытие на мобилках сортировки
  $('.subcategory-sort__title').click(function () {
    $(this).next().slideToggle(700);
    //$(this).toggleClass('filter__options-title--open');
  });
}

//Открытие на мобилках фильтров
$('.products-filter__title').click(function() {
  $(this).next().slideToggle(700);
  //$(this).toggleClass('filter__options-title--open');
});

if ($(window).width() >= 768) {
  //Табы в товаре
  var tabCtrl = '.tab-control';
  var tabCont = '.tab-container';
//если нужно сделать по умолчанию активный таб, то задаем тут его индекс, иначе пишем 'false' (дада, именно в кавычках строкой)
  var defaultActive = 1;

  function tabActive(tabIndex) {
    if($(tabCtrl+' .item[data-tab='+tabIndex+']').hasClass('activeTab')) {
      return false;
    }
    $(tabCtrl).find('.item').removeClass('activeTab');
    $(tabCont).hide().removeClass('activeTabCont');
    $(tabCont+'[data-tab='+tabIndex+']').fadeIn().addClass('activeTabCont');
    $(tabCtrl+' .item[data-tab='+tabIndex+']').addClass('activeTab');
  }
  function tabInit() {
    if (defaultActive == 'false') {
      return false;
    }
    tabActive(defaultActive);
  }
  $(tabCtrl).find('.item').click(function(event) {
    var tabIndex = $(this).data('tab');
    tabActive(tabIndex)
  });
  tabInit();
//tabs end
}

if ($(window).width() <= 767) {
//Аккордеон в карточке товара
  $(document).ready(function() {
    //прикрепляем клик по заголовкам acc-head
    $('.product__tab-title').on('click', f_acc_Product);
  });

  function f_acc_Product(){
//скрываем все кроме того, что должны открыть
    $('.product__tab-hidden').not($(this).next()).slideUp(1000);
// открываем или скрываем блок под заголовоком, по которому кликнули

    $(this).next().slideToggle(1000);
    $('.product__tab-title').removeClass('product__tab-title--active');
    $(this).toggleClass('product__tab-title--active');
  }
}

//Плюс минус количество товаров
$('.minus').click(function () {
  var $input = $(this).parent().find('input');
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});
$('.plus').click(function () {
  var $input = $(this).parent().find('input');
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});
