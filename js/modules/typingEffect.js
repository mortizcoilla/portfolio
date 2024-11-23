export function startTypingEffect() {
  const typingElement = document.getElementById("typing-effect");
  const textArray = ["Transformando datos en decisiones", "Optimizando procesos"];
  let arrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[arrayIndex].length) {
      typingElement.textContent = textArray[arrayIndex].substring(0, charIndex + 1); // Actualiza el texto
      charIndex++;
      setTimeout(type, 100); // Velocidad de escritura
    } else {
      setTimeout(erase, 2000); // Pausa antes de borrar
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = textArray[arrayIndex].substring(0, charIndex - 1); // Borra un carácter
      charIndex--;
      setTimeout(erase, 50); // Velocidad de borrado
    } else {
      arrayIndex = (arrayIndex + 1) % textArray.length; // Cambia al siguiente texto
      setTimeout(type, 500); // Pausa antes de escribir el siguiente
    }
  }

  type(); // Inicia el efecto
}
