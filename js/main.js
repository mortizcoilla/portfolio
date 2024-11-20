document.addEventListener("DOMContentLoaded", () => {
    // Elementos de la barra de navegación
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");
    const navbar = document.getElementById("navbar");
    const scrollToTopButton = document.getElementById("scroll-to-top");
    const currentYearElement = document.getElementById("current-year");
  
    // Mostrar el año actual en el footer
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }
  
    // Smooth scrolling
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      navLinks.classList.remove("open"); // Cerrar el menú móvil
    };
  
    // Abrir/cerrar menú hamburguesa
    if (hamburgerMenu && navLinks) {
      hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
  
      // Añadir desplazamiento suave a los enlaces
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", smoothScroll);
      });
    }
  
    // Botón para subir al inicio
    if (scrollToTopButton) {
      scrollToTopButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  
    // Cambiar fondo de la barra de navegación al hacer scroll
    if (navbar) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".skills-swiper", {
      modules: [Swiper.Navigation, Swiper.Pagination, Swiper.Autoplay],
      slidesPerView: 2,
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
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
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      },
    });
  });
  