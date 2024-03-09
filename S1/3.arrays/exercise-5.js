// Elimina el último elemento del array y muestra el primero y el último por consola.

const RickAndMortyCharacters = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

RickAndMortyCharacters.pop();

const primerPersonaje = RickAndMortyCharacters[0];
const ultimoPersonaje =
  RickAndMortyCharacters[RickAndMortyCharacters.length - 1];

console.log(primerPersonaje);
console.log(ultimoPersonaje);
