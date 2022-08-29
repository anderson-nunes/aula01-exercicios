const leitor = require("readline-sync");

const codigo = leitor.questionInt(
  "Digite o codigo do produto que deseja comprar: "
);

const quantidade = leitor.questionInt(
  "Digite a quantidade do item que escolheu: "
);

switch (codigo) {
  case 100:
    console.log(`Valor total = R$ ${4.8 * quantidade} reais`);
    break;

  case 101:
    console.log(`Valor total = R$ ${3.5 * quantidade} reais`);
    break;

  case 102:
    console.log(`Valor total = R$ ${5.2 * quantidade} reais`);
    break;

  case 103:
    console.log(`Valor total = R$ ${6 * quantidade} reais`);
    break;

  case 104:
    console.log(`Valor total = R$ ${12 * quantidade} reais`);
    break;

  case 105:
    console.log(`Valor total = R$ ${4.75 * quantidade} reais`);
    break;
  default:
    console.log("Item não cadastrado");
}
