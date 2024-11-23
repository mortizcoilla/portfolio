export function initParticles() {
    const particlesContainer = document.getElementById("hero-particles");
  
    const canvas = document.createElement("canvas");
    canvas.width = particlesContainer.offsetWidth;
    canvas.height = particlesContainer.offsetHeight;
    particlesContainer.appendChild(canvas);
  
    const ctx = canvas.getContext("2d");
    const particlesArray = [];
    const numberOfParticles = 80;
  
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1 + 0.5;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }
  
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
  
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
      }
  
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.fill();
      }
    }
  
    function initParticlesArray() {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
  
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animateParticles);
    }
  
    window.addEventListener("resize", () => {
      canvas.width = particlesContainer.offsetWidth;
      canvas.height = particlesContainer.offsetHeight;
      initParticlesArray();
    });
  
    initParticlesArray();
    animateParticles();
  }
  