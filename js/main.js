document.addEventListener("DOMContentLoaded", () => {
  /* ===========================
     Barra de navegación
  =========================== */
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.getElementById("nav-links");
  const navbar = document.getElementById("navbar");
  const heroSection = document.getElementById("hero");

  // Manejar transparencia de la barra de navegación
  const handleNavbarTransparency = () => {
    if (heroSection) {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      navbar.classList.toggle("transparent", heroBottom > 50);
      navbar.classList.toggle("scrolled", heroBottom <= 50);
    }
  };

  // Lógica del ícono de inicio y enlaces de navegación
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
      navLinks.classList.remove("open"); // Cerrar el menú móvil
    });
  });

  if (hamburgerMenu && navLinks) {
    hamburgerMenu.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

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
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: { delay: 3000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: { 320: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } },
  });

  /* ===========================
     Mostrar año en el footer
  =========================== */
  const currentYearElement = document.getElementById("current-year");
  if (currentYearElement) currentYearElement.textContent = new Date().getFullYear();

  /* ===========================
     Lógica para la sección Proyectos
  =========================== */
  const projectCards = document.querySelectorAll(".project-card");
  const showMoreBtn = document.getElementById("show-more-btn");
  const showLessBtn = document.getElementById("show-less-btn");
  const noMoreProjects = document.getElementById("no-more-projects");
  let visibleCount = 3; // Número inicial de proyectos visibles

  const updateVisibility = () => {
    projectCards.forEach((card, index) => {
      card.style.display = index < visibleCount ? "block" : "none";
    });

    // Mostrar u ocultar botones y mensaje
    showMoreBtn.style.display = visibleCount >= projectCards.length ? "none" : "inline-block";
    noMoreProjects.style.display = visibleCount >= projectCards.length ? "block" : "none";
    showLessBtn.style.display = visibleCount > 3 ? "inline-block" : "none";
  };

  // Eventos de los botones
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      visibleCount += 3; // Mostrar más proyectos
      updateVisibility();
    });
  }

  if (showLessBtn) {
    showLessBtn.addEventListener("click", () => {
      visibleCount = Math.max(3, visibleCount - 3); // Reducir proyectos visibles
      updateVisibility();
    });
  }

  // Inicializar la visibilidad
  updateVisibility();
});
