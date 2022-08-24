const leitor = require("readline-sync");

const numero1 = leitor.questionInt("Digite o primeiro número inteiro: ");
const numero2 = leitor.questionInt("Digite o segundo número inteiro: ");
const numeroReal = leitor.questionFloat("Digite um número real: ");

const dobro = numero1 * 2 * (numero2 / 2);

const soma = numero1 * 3 + numeroReal;

const cubo = numeroReal ** 3;

console.log(dobro);
console.log(soma);
console.log(cubo);
