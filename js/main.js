$(document).ready(function () {
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

  $(".newsletter").parallax({ imageSrc: "img/newsletter-bg.jpg" });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom_visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  $(document).keyup(function (e) {
    if (e.keyCode === 27) $(".modal__close").click();
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay_visible");
    modalDialog.addClass("modal__dialog_visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  }
  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name must be at least two letters",
        },
        email: {
          required: "Please enter your email address",
          email: "Format email address: name@domain.com",
        },
        mail: {
          required: "Please enter your email address",
          email: "Format email address: name@domain.com",
        },
        phone: {
          required: "Please enter your phone number",
          minlength: "Please enter at least 10 digits",
        },
      },
    });
  });
  // Подключение маски для поля телефон
  $('input[name="phone"]').mask("+7 (000) 000-00-00");
  // Подключение карты при наведении мыши
  var map = document.querySelector(".map__frame");
  map.addEventListener("mouseover", initMap);
  function initMap() {
    if (map.getAttribute("data-src")) {
      map.setAttribute("src", map.getAttribute("data-src"));
    }
    map.removeEventListener("mouseover", initMap);
  }
  // Инициализация библиотеки AOS
  AOS.init();
});
