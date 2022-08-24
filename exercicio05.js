const leitor = require("readline-sync");

const diaDasemana = leitor.questionInt(
  "Digite um numero de 1 a 7 que corresponde ao dia da semana que voce deseja: "
);

let mensagem

if (diaDasemana == 1) {
  mensagem = "Domingo";
} else if (diaDasemana == 2) {
  mensagem = "Segunda-feira";
} else if (diaDasemana == 3) {
  mensagem = "Terça-feira";
} else if (diaDasemana == 4) {
  mensagem = "Quarta-feira";
} else if (diaDasemana == 5) {
  mensagem = "Quinta-feira";
} else if (diaDasemana == 6) {
  mensagem = "Sexta-feira";
} else if (diaDasemana == 7) {
  mensagem = "Sábado";
} else {
  mensagem ="Este valor não corresponde a um dia da semana";
}

console.log(mensagem);
