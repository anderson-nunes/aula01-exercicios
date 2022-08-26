const leitor = require("readline-sync");

const peso = leitor.questionInt("Digite quantos kilos de peixe voce pescou: ");

const pesoLimite = 50;
const excesso = peso - pesoLimite;
const valorExcesso = excesso * 4;

mensagem =
  peso > pesoLimite
    ? `Voce recebeu uma multa de R$ ${valorExcesso} reais`
    : "Você pescou dentro do peso permitido";

console.log(mensagem);
