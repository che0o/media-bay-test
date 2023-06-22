import Swiper, { Navigation, Scrollbar, Pagination } from "swiper";

Swiper.use(Navigation);

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 2,
  speed: 500,
  navigation: {
    nextEl: ".slider-button-next",
  },
});

Swiper.use(Scrollbar);

const cases = new Swiper(".cases", {
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragSize: 30,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

Swiper.use(Pagination);

const caseSlider = new Swiper(".case__slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".case-button-next",
    prevEl: ".case-button-prev",
    disabledClass: "case-button-disabled",
  },
  pagination: {
    el: ".case-pagination",
    type: "bullets",
    bulletClass: "case-pagination-bullet",
    bulletActiveClass: "case-pagination-bullet-active",
    clickable: true,
  },
});
