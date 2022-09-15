const leitor = require("readline-sync");

let array = [];

for (let i = 0; i < 4; i++) {
  let numero = leitor.questionInt("Digite alguns numeros: ");
  array.push(numero);
}

array.sort();

console.log(array);

array.sort((primeiro, segundo) => segundo - primeiro);

console.log(array);
