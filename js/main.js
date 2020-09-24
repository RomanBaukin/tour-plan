var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button_next",
    prevEl: ".hotel-slider__button_prev",
  },

  //Keyboard Control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button_next",
    prevEl: ".reviews-slider__button_prev",
  },
});

$(".newsletter").parallax({ imageSrc: "../img/newsletter-bg.jpg" });
