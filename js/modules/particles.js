
export function initParticles() {
    const particlesContainer = document.getElementById("hero-particles");

    const canvas = document.createElement("canvas");
    canvas.width = particlesContainer.offsetWidth ;
    canvas.height = particlesContainer.offsetHeight;
    particlesContainer.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const particlesArray = [];
    const numberOfParticles = 80;
    const interactionRadius = 100;

    let mouse = {
        x: null,
        y: null
    };

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1 + 0.5;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Reverse direction if hitting canvas edges
            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;

            // Interaction with mouse
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < interactionRadius) {
                const angle = Math.atan2(dy, dx);
                const force = (interactionRadius - distance) / interactionRadius;
                const repulsionX = Math.cos(angle) * force;
                const repulsionY = Math.sin(angle) * force;

                this.speedX -= repulsionX;
                this.speedY -= repulsionY;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.fill();
        }
    }

    function initParticlesArray() {
        particlesArray.length = 0;
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function connectParticles() {
        for (let i = 0; i < particlesArray.length; i++) {
            for (let j = i + 1; j < particlesArray.length; j++) {
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < interactionRadius / 0.75) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / (interactionRadius / 2)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray.forEach((particle) => {
            particle.update();
            particle.draw();
        });
        connectParticles();
        requestAnimationFrame(animateParticles);
    }

    window.addEventListener("resize", () => {
        canvas.width = particlesContainer.offsetWidth;
        canvas.height = particlesContainer.offsetHeight;
        initParticlesArray();
    });

    window.addEventListener("mousemove", (event) => {
        mouse.x = event.x - canvas.getBoundingClientRect().left;
        mouse.y = event.y - canvas.getBoundingClientRect().top;
    });

    window.addEventListener("mouseout", () => {
        mouse.x = null;
        mouse.y = null;
    });

    initParticlesArray();
    animateParticles();
}
