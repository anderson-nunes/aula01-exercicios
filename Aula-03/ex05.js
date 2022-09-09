const leitor = require("readline-sync");

let arrayNumeros = [];

for (let i = 0; i < 8; i++) {
  let numeros = leitor.questionInt("Digite alguns numeros: ");
  arrayNumeros.push(numeros);
}

let pares = function (item) {
  return !(item % 2);
};

let impares = function (item) {
  return item % 2;
};

// let numerosPar = arrayNumeros.filter(pares);
// let resultadoPar = numerosPar.sort();
// console.log(resultadoPar);

let numerosImpares = arrayNumeros.filter(impares);
let resultadoImpar = numerosImpares.sort();
console.log(resultadoImpar);
