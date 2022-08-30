const leitor = require("readline-sync");

const n = leitor.questionFloat(
  "Digite um número para calcular o seu fatorial: "
);

let fatorial = n;

for (i = 1; i < n; i++) {
  fatorial = fatorial * i;
  console.log(fatorial + "! = " + fatorial);
}
