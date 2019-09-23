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

