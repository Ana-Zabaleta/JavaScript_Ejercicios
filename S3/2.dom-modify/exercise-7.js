// Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

const deleteClass = document.querySelectorAll(".fn-remove-me");

deleteClass.forEach((element) => {
  element.remove();
});