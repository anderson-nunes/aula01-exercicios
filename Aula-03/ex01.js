const leitor = require("readline-sync");

let array = [];

for (let i = 0; i < 5; i++) {
  let numeros = leitor.questionInt("Digite alguns números: ");
  array.push(numeros);
}

let numerosCrescente = array.sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});

console.log(numerosCrescente);

let numerosDecrescente = array.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
});

console.log(numerosDecrescente);
