const leitor = require("readline-sync");
let arrayNomes = [
  "Anderson",
  "Everton",
  "Patricia",
  "Jeferson",
  "Rodolfo",
  "Maria",
  "João",
  "José",
  "Pedro",
  "Vitor",
];

function meuArray() {
  let nomes = leitor.question("Digite um nome qualquer: ");
  if (arrayNomes.includes(nomes)) {
    return "ACHEI";
  } else {
    return "NÃO ACHEI";
  }
}
console.log(meuArray());
