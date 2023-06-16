import Swiper, { Navigation, Scrollbar } from "swiper";

Swiper.use(Navigation, Scrollbar);

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 2,
  navigation: {
    nextEl: ".slider-button-next",
  },
});

const cases = new Swiper(".cases", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});
