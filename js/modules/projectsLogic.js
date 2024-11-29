export function setupProjectsLogic() {
  const projectCards = document.querySelectorAll(".project-card");
  const showMoreBtn = document.getElementById("show-more-btn");
  const showLessBtn = document.getElementById("show-less-btn");
  const noMoreProjects = document.getElementById("no-more-projects");
  const projectsSection = document.getElementById("proyectos");

  let visibleCount = getInitialVisibleCount();
  let activeCategory = "all";

  // Función para obtener la cantidad inicial de proyectos visibles según el tamaño de pantalla
  function getInitialVisibleCount() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) return 1; // Móviles
    if (screenWidth <= 1024) return 2; // Tablets
    return 6; // Escritorios
  }

  // Función para actualizar la visibilidad de las tarjetas
  function updateVisibility() {
    let visibleCards = 0;

    projectCards.forEach((card) => {
      const matchesCategory =
        activeCategory === "all" || card.dataset.category === activeCategory;

      if (matchesCategory && visibleCards < visibleCount) {
        card.style.display = "block";
        visibleCards++;
      } else {
        card.style.display = "none";
      }
    });

    // Mostrar u ocultar los botones y el mensaje "No hay más proyectos"
    showMoreBtn.style.display =
      visibleCards >= projectCards.length ? "none" : "inline-block";

    showLessBtn.style.display =
      visibleCards >= projectCards.length && visibleCount > getInitialVisibleCount()
        ? "inline-block"
        : "none";

    noMoreProjects.style.display =
      visibleCards >= projectCards.length && visibleCount >= projectCards.length
        ? "block"
        : "none";
  }

  // Evento para mostrar más proyectos
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      visibleCount += 3;
      updateVisibility();
    });
  }

  // Evento para mostrar menos proyectos con scroll suave
  if (showLessBtn) {
    showLessBtn.addEventListener("click", () => {
      visibleCount = getInitialVisibleCount();
      updateVisibility();

      // Realizar scroll suave al inicio de la sección proyectos
      projectsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Recalcular el número de tarjetas visibles al cambiar el tamaño de la ventana
  window.addEventListener("resize", () => {
    visibleCount = getInitialVisibleCount();
    updateVisibility();
  });

  // Inicializar la visibilidad al cargar
  updateVisibility();
}
