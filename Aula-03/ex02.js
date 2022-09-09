const leitor = require("readline-sync");

let array = [
  "abobora",
  "tomate",
  "cebola",
  "batata",
  "cenoura",
  "alface",
  "repolho",
  "beterraba",
  "mamão",
  "mandioca",
];

let arrayInvertido = [];

for (let i = array.length - 1; i >= 0; i--) {
  arrayInvertido.push(array[i]);
}

console.log(arrayInvertido);
