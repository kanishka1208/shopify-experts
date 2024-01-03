// header
const header =  document.querySelector('.header')
if(header) {
  window.onscroll = function() {scrollFunction(header.offsetHeight)};
  function scrollFunction(scollHeight) {
    if (document.body.scrollTop > scollHeight  || document.documentElement.scrollTop > scollHeight ) {
        header.classList.add('header--active');
    } else {
      header.classList.remove('header--active')
    }
  }
}

// slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

