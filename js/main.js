document.addEventListener("DOMContentLoaded", () => {
  /* ===========================
     Detectar dispositivo mediante User Agent
  =========================== */
  const isMobileDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
  };

  const isTabletDevice = () => {
    const screenWidth = window.innerWidth;
    return screenWidth >= 768 && screenWidth <= 1024;
  };

  if (isMobileDevice()) {
    console.log("Dispositivo móvil detectado.");
    document.body.classList.add("mobile");
  } else if (isTabletDevice()) {
    console.log("Tablet detectada.");
    document.body.classList.add("tablet");
  } else {
    console.log("Dispositivo de escritorio detectado.");
    document.body.classList.add("desktop");
  }

  /* ===========================
     Barra de navegación
  =========================== */
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.getElementById("nav-links");
  const navbar = document.getElementById("navbar");
  const heroSection = document.getElementById("hero");

  // Manejar transparencia de la barra de navegación al hacer scroll
  const handleNavbarTransparency = () => {
    if (heroSection) {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      navbar.classList.toggle("transparent", heroBottom > 50);
      navbar.classList.toggle("scrolled", heroBottom <= 50);
    }
  };

  // Desplazamiento suave para los enlaces de navegación
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      navLinks.classList.remove("open"); // Cierra el menú móvil
    });
  });

  // Abrir o cerrar el menú móvil (hamburguesa)
  if (hamburgerMenu && navLinks) {
    hamburgerMenu.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // Escuchar eventos de scroll para actualizar la transparencia de la barra
  window.addEventListener("scroll", handleNavbarTransparency);
  handleNavbarTransparency();

  /* ===========================
     Efecto de escritura (Hero)
  =========================== */
  const typingTexts = [
    "Transformando datos en decisiones",
    "Optimizando procesos de negocio",
    "Generando valor medible",
    "Hablemos ;)",
  ];
  let typingIndex = 0,
    charIndex = 0;
  const typingEffectElement = document.getElementById("typing-effect");

  const startTypingEffect = () => {
    if (!typingTexts.length || !typingEffectElement) return;

    const currentText = typingTexts[typingIndex];
    if (charIndex < currentText.length) {
      typingEffectElement.textContent += currentText[charIndex++];
      setTimeout(startTypingEffect, 150);
    } else {
      setTimeout(() => {
        charIndex = 0;
        typingEffectElement.textContent = "";
        typingIndex = (typingIndex + 1) % typingTexts.length;
        startTypingEffect();
      }, 3000);
    }
  };

  startTypingEffect();

  /* ===========================
     Swiper (Skills)
  =========================== */
  new Swiper(".skills-swiper", {
    slidesPerView: 1, // Predeterminado para móviles
    spaceBetween: 20,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 15 }, // Móviles
      768: { slidesPerView: 2, spaceBetween: 20 }, // Tablets
      1024: { slidesPerView: 4, spaceBetween: 25 }, // Escritorios
    },
  });

  /* ===========================
     Lógica para la sección Proyectos
  =========================== */
  const projectCards = document.querySelectorAll(".project-card");
  const showMoreBtn = document.getElementById("show-more-btn");
  const noMoreProjects = document.getElementById("no-more-projects");

  let visibleCount = getInitialVisibleCount();

  function getInitialVisibleCount() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) return 1; // Móviles
    if (screenWidth <= 1024) return 2; // Tablets
    return 6; // Escritorios
  }

  const updateVisibility = () => {
    projectCards.forEach((card, index) => {
      card.style.display = index < visibleCount ? "block" : "none";
    });

    // Mostrar u ocultar el botón "Mostrar más" y el mensaje
    showMoreBtn.style.display = visibleCount >= projectCards.length ? "none" : "inline-block";
    noMoreProjects.style.display = visibleCount >= projectCards.length ? "block" : "none";
  };

  // Evento para mostrar más proyectos
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      visibleCount += 3; // Mostrar 3 más
      updateVisibility();
    });
  }

  // Recalcular el número de tarjetas visibles al cambiar el tamaño de la ventana
  window.addEventListener("resize", () => {
    visibleCount = getInitialVisibleCount();
    updateVisibility();
  });

  // Inicializar la visibilidad
  updateVisibility();

  /* ===========================
     Menú de categorías tipo hamburguesa
  =========================== */
  const categoriesHamburger = document.querySelector(".categories-hamburger .hamburger-menu");
  const categoriesList = document.querySelector(".categories-hamburger .categories-list");

  if (categoriesHamburger && categoriesList) {
    categoriesHamburger.addEventListener("click", () => {
      categoriesList.classList.toggle("open");
    });

    // Manejar clics en las categorías
    document.querySelectorAll(".categories-list .category-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        categoriesList.classList.remove("open"); // Cerrar el menú después de seleccionar
        const category = btn.dataset.category;

        projectCards.forEach((card) => {
          card.style.display =
            category === "all" || card.dataset.category === category ? "block" : "none";
        });

        // Reiniciar visibilidad en móviles
        visibleCount = getInitialVisibleCount();
        updateVisibility();
      });
    });
  }

  /* ===========================
     Mostrar año en el footer
  =========================== */
  const currentYearElement = document.getElementById("current-year");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
});
