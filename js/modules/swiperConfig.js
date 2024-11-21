export function configureSwiper() {
    // Asegúrate de que Swiper esté cargado antes de ejecutar este script
    new Swiper(".skills-swiper", {
      slidesPerView: 1, // Predeterminado para móviles
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15, // Espaciado para móviles
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20, // Espaciado para tablets
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 25, // Espaciado para escritorios
        },
      },
    });
  }
  