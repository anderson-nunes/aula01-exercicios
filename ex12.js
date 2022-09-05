const leitor = require("readline-sync");

let numero = leitor.questionInt("Digite um numero: ");

let somaPares = 0;
let somaImpares = 0;

while (numero < 1000) {
  if (numero % 2 == 0) {
    somaPares += numero;
    console.log(somaPares);
  } else {
    somaImpares += numero;
    console.log(somaImpares);
  }
  numero = leitor.questionInt("Digite um numero: ");
}
