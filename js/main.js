import { setupDeviceDetection } from './modules/deviceDetection.js';
import { setupNavbar } from './modules/navbar.js';
import { startTypingEffect } from './modules/typingEffect.js';
import { configureSwiper } from './modules/swiperConfig.js';
import { setupProjectsLogic } from './modules/projectsLogic.js';
import { setupCategoryMenu } from './modules/categoryMenu.js';
import { updateFooterYear } from './modules/footerYear.js';
import { initParticles } from './modules/particles.js';

document.addEventListener("DOMContentLoaded", () => {
  setupDeviceDetection();
  setupNavbar();
  startTypingEffect();
  configureSwiper();
  setupProjectsLogic();
  setupCategoryMenu();
  updateFooterYear();
  initParticles(); // Inicializar el efecto de partículas
});
