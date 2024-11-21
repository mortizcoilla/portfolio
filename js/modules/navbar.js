export function setupNavbar() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");
    const navbar = document.getElementById("navbar");
    const heroSection = document.getElementById("hero");
  
    const handleNavbarTransparency = () => {
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        navbar.classList.toggle("transparent", heroBottom > 50);
        navbar.classList.toggle("scrolled", heroBottom <= 50);
      }
    };
  
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        navLinks.classList.remove("open");
      });
    });
  
    if (hamburgerMenu && navLinks) {
      hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
    }
  
    window.addEventListener("scroll", handleNavbarTransparency);
    handleNavbarTransparency();
  }
  