const leitor = require("readline-sync");

let arrayNumeros = [];

for (let i = 0; i < 10; i++) {
  let numeros = leitor.questionInt("Digite 10 numeros inteiros: ");
  arrayNumeros.push(numeros);
}

let numerosCrescente = arrayNumeros.sort((a, b) => {
  if (a < b) return -1;
});

let numerosDecrescente = arrayNumeros.sort((a, b) => {
  if (a > b) return 1;
});

// console.log(numerosCrescente);
console.log(numerosDecrescente);

// let numerosCrescente = arrayNumeros.sort(function (a, b) {
//   return a - b;
// });

// let numerosDecrescente = arrayNumeros.sort(function (a, b) {
//   return b - a;
// });

// console.log(numerosCrescente);
// console.log(numerosDecrescente);
