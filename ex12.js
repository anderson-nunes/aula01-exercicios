const leitor = require("readline-sync");

let numero = leitor.questionInt("Digite um numero: ");

for (let i = numero; i <= 1000; i++) {
  console.log(numero);
}
