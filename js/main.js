// Importar módulos
import { setupDeviceDetection } from './modules/deviceDetection.js';
import { setupNavbar } from './modules/navbar.js';
import { startTypingEffect } from './modules/typingEffect.js';
import { configureSwiper } from './modules/swiperConfig.js';
import { setupProjectsLogic } from './modules/projectsLogic.js';
import { setupCategoryMenu } from './modules/categoryMenu.js';
import { updateFooterYear } from './modules/footerYear.js';

// Inicializar módulos al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  setupDeviceDetection();    // Detectar dispositivo y aplicar clases
  setupNavbar();             // Configurar la barra de navegación
  startTypingEffect();       // Iniciar el efecto de escritura en la sección Hero
  configureSwiper();         // Configurar el carrusel (Swiper) en la sección Skills
  setupProjectsLogic();      // Configurar la visibilidad de los proyectos
  setupCategoryMenu();       // Configurar el menú de categorías
  updateFooterYear();        // Actualizar dinámicamente el año en el footer
});
