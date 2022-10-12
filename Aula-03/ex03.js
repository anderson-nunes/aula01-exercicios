const leitor = require("readline-sync");

let arrayNumeros = [];

for (let i = 0; i < 4; i++) {
  let numeros = leitor.questionInt("Digite numeros inteiros: ");
  arrayNumeros.push(numeros);
}

let calculo = arrayNumeros.map((item, indice) => {
  if (indice % 2 == 0) {
    return item / 2;
  } else {
    return item * 3;
  }
});

console.log(calculo);
