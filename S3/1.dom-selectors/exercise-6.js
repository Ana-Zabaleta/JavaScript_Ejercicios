// Dado el siguiente html usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

const personajes = document.querySelectorAll('[data-function="testMe"]');
console.log(personajes[2]);
