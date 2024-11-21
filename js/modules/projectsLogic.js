export function setupProjectsLogic() {
  const projectCards = document.querySelectorAll(".project-card");
  const showMoreBtn = document.getElementById("show-more-btn");
  const showLessBtn = document.getElementById("show-less-btn");
  const noMoreProjects = document.getElementById("no-more-projects");

  let visibleCount = getInitialVisibleCount();

  function getInitialVisibleCount() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) return 1; // Móviles
    if (screenWidth <= 1024) return 2; // Tablets
    return 6; // Escritorios
  }

  function updateVisibility() {
    projectCards.forEach((card, index) => {
      card.style.display = index < visibleCount ? "block" : "none";
    });

    // Mostrar u ocultar los botones y el mensaje "No hay más proyectos"
    showMoreBtn.style.display =
      visibleCount >= projectCards.length ? "none" : "inline-block";

    showLessBtn.style.display =
      visibleCount > getInitialVisibleCount() ? "inline-block" : "none";

    noMoreProjects.style.display =
      visibleCount >= projectCards.length ? "block" : "none";
  }

  // Evento para mostrar más proyectos
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      visibleCount += 3; // Mostrar 3 más
      updateVisibility();
    });
  }

  // Evento para mostrar menos proyectos
  if (showLessBtn) {
    showLessBtn.addEventListener("click", () => {
      visibleCount = getInitialVisibleCount(); // Reinicia la cantidad visible
      updateVisibility();
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
