const leitor = require("readline-sync");

let arrayNumeros = [];

for (let i = 0; i < 10; i++) {
  let numeros = leitor.questionFloat("Digite 10 elementos inteiros: ");
  arrayNumeros.push(numeros);
}

let calculo = arrayNumeros.map(function (item, indice) {
  if (indice % 2 == 0) {
    return item / 2;
  } else {
    return item * 3;
  }
});

console.log(calculo);
