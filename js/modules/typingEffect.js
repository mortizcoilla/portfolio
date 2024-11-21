export function startTypingEffect() {
    const typingTexts = [
      "Transformando datos en decisiones",
      "Optimizando procesos de negocio",
      "Generando valor medible",
      "Hablemos ;)",
    ];
  
    let typingIndex = 0;
    let charIndex = 0;
    const typingEffectElement = document.getElementById("typing-effect");
  
    const type = () => {
      if (!typingTexts.length || !typingEffectElement) return;
  
      const currentText = typingTexts[typingIndex];
      if (charIndex < currentText.length) {
        typingEffectElement.textContent += currentText[charIndex++];
        setTimeout(type, 150); // Controla la velocidad de tipeo
      } else {
        setTimeout(() => {
          charIndex = 0;
          typingEffectElement.textContent = "";
          typingIndex = (typingIndex + 1) % typingTexts.length;
          type();
        }, 3000); // Pausa entre frases
      }
    };
  
    type(); // Inicia el efecto
  }
  