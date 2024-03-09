// Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.


function hacerFocus(event) {
  console.log(event.target.value);
}

const inputElement = document.querySelector("input");

inputElement.addEventListener("focus", hacerFocus);
