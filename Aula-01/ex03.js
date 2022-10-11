const leitor = require("readline-sync");

const genero = leitor.question("Qual e o seu genero? ");

let altura = leitor.questionFloat("Qual e a sua altura? ");

let pesoIdealHomem = (72.7 * altura - 58).toFixed(2);
let pesoIdealMulher = (62.1 * altura - 44.7).toFixed(2);

console.log(
  `Para voce que e do sexo ${genero} o seu peso ideal e: ${pesoIdealMulher} Kilos`
);
