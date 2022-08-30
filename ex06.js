const leitor = require("readline-sync");

const tamanho = leitor.questionFloat("Digite o tamanho em metros quadrados da área a ser pintada: ");

const litros = tamanho / 6
const latas = litros / 18
const preco = latas * 80
const galoes = litros / 3.6

console.log(preco)


