const timelineConfiguration = {
  loop: true,
  speed: 1000,
  direction: 'horizontal',
  slidesPerView: 2,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction', // "bullets", "fraction", "progressbar" or "custom"
    dynamicBullets: true,
    dynamicMainBullets: 3,
    clickable: true
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false
  },
  breakpoints: {
    10: {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 30
    },
    890: {
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: 0
    }
  }
};

export { timelineConfiguration };
