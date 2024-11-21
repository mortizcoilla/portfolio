export function setupCategoryMenu() {
    const categoriesHamburger = document.querySelector(".categories-hamburger .hamburger-menu");
    const categoriesList = document.querySelector(".categories-hamburger .categories-list");
    const projectCards = document.querySelectorAll(".project-card");
  
    if (categoriesHamburger && categoriesList) {
      // Abrir y cerrar el menú de categorías
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
        });
      });
    }
  }
  