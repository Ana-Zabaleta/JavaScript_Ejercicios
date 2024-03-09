//Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros.

const parametros = (a = 10, b = 5) => {
  console.log(a + b);
};
//- Ejecuta esta función sin pasar ningún parametro
parametros();
//- Ejecuta esta función pasando un solo parametro
parametros(20);
//- Ejecuta esta función pasando dos parametros
parametros(20, 8);
