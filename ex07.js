const leitor = require("readline-sync");

const tabuada = leitor.questionInt("Digite um número multiplo de 31: ");

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log(`${tabuada} * ${i} = ${tabuada * i}`);
  }
}
