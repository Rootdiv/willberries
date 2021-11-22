import Swiper, {
  Autoplay,
  Navigation,
} from 'swiper';

Swiper.use([Autoplay, Navigation]);

const slider = () => {
  new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  });
};

export default slider;
