// Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.

function hacerCambio(event) {
  console.log(event.target.value);
}

const inputElement = document.querySelector("input");

inputElement.addEventListener("input", hacerCambio);
