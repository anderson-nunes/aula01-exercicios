const leitor = require("readline-sync");

const valorHora = leitor.questionInt(
  "Digite o valor que você ganha por hora trabalhada: "
);

const horasTrabalhadas = leitor.questionInt(
  "Digite a quantidade de horas trabalhadas no mês: "
);

const resultado = valorHora * horasTrabalhadas;

console.log(resultado);
