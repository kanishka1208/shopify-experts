$('.slider-main').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.slider-nav',
    autoplay: true,
    fade: true,
    autoplaySpeed: 0,
    speed: 1500,
  });
  
  $('.slider-nav').slick({
  slidesToShow: 4,
  asNavFor: '.slider-main',
  vertical: true,
  focusOnSelect: true,
  autoplay: true,
  centerMode: true,
    slideToScroll: 1,
    autoplaySpeed: 0,
    speed: 1500,
  });
  
  $(window).on('resize orientationchange', function() {
  if ($(window).width() > 1200) {
  $('.slider-nav').slick('unslick');
  $('.slider-nav').slick({
  slidesToShow: 4,
  asNavFor: '.slider-main',
  vertical: true,
  focusOnSelect: true,
  autoplay: true,
  centerMode: true,
  });
  }
  });
  