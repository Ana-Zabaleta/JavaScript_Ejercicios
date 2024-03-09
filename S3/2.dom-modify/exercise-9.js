// Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divElements = document.querySelectorAll(".fn-insert-here");

for (const div of divElements) {
  const pElement = document.createElement("p");
  pElement.textContent = "Voy dentro!";
  div.appendChild(pElement);
}
