// Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const listaUl = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
  const app = apps[i];
  const li = document.createElement("li");
  li.textContent = app;
  listaUl.appendChild(li);
}

document.body.appendChild(listaUl);
