$(function () {
  $('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    $('.burger').toggleClass('active')
    $('.header__top').toggleClass('header__top--open')
    $('.header__top').removeClass('header__top-fixed')
    $('.overlay').toggleClass('overlay--show')
    $('body').toggleClass('overflow-hidden')
  })

  window.onscroll = function headerShow() {
    var header__top = document.querySelector('.header__top');
    if (window.pageYOffset > 200) {
      header__top.classList.add('header__top-fixed');
    }
    else {
      header__top.classList.remove('header__top-fixed');
    }
  }

  var mixer = mixitup('.directions__list');
  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })

  $('.team__sliders').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    responsive:
      [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            draggable: true,
            arrows: false,
            dots: true,
            appendDots: $('.team__dots'),
            waitForAnimate: false,

          },
        },
      ]
  })

  $('.team__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__sliders').slick('slickPrev')
  })
  $('.team__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.team__sliders').slick('slickNext')
  })

  $('.testimonials__sliders').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testimonials__dots'),
    waitForAnimate: false,
  })

  $('.testimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__sliders').slick('slickPrev')
  })
  $('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__sliders').slick('slickNext')
  })

  $('.learn__link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('learn__link--active')) {
      $(this).removeClass('learn__link--active')
      $(this).children('.learn__akord-text').slideUp()
    } else {
      $('.learn__link').removeClass('learn__link--active')
      $('.learn__akord-text').slideUp()
      $(this).addClass('learn__link--active')
      $(this).children('.learn__akord-text').slideDown()
    }
  })

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0 && $('.header__nav, .header__btn-box').hasClass('header__nav--open, header__btn-box--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  })

  $('.footer__title--slide').on('click', function () {
    $(this).next().slideToggle()
    $(this).toggleClass('footer__title--slide-active')
  })

  $(".header__top").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;    //анимируем переход на расстояние - top за 2000 мс
    $('body,html').animate({ scrollTop: top }, 2000);
  });

  wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    }
  )
  wow.init();

})
