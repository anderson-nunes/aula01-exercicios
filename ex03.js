const leitor = require("readline-sync");

const genero = leitor.question("Qual é o seu gênero? ");

let altura = leitor.question("Qual é a sua altura?  ");

let pesoIdealHomem = 72.7 * altura - 58;
let pesoIdealMulher = 62.1 * altura - 44.7;

console.log(pesoIdealHomem);
console.log(pesoIdealMulher);
