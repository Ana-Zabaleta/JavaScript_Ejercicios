//Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

const baseUrl = "https://api.nationalize.io?name=";

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const name = input.value;

  const url = baseUrl + name;

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});
