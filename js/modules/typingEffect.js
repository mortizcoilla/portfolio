export function startTypingEffect() {
  const typingElement = document.getElementById("typing-effect");
  const textArray = ["Transformando datos en decisiones", "Optimizando procesos"];
  let arrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[arrayIndex].length) {
      typingElement.textContent += textArray[arrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Ajusta la velocidad de escritura
    } else {
      setTimeout(erase, 2000); // Espera antes de borrar
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50); // Ajusta la velocidad de borrado
    } else {
      arrayIndex = (arrayIndex + 1) % textArray.length;
      setTimeout(type, 500); // Espera antes de escribir de nuevo
    }
  }

  type();
}
