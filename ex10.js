const leitor = require("readline-sync");

let codigo = 1;

let total = 0;

while (codigo != 0) {
  codigo = leitor.questionInt(
    "Digite o codigo do produto que deseja comprar: "
  );
  if (codigo != 0) {
    let quantidade = leitor.questionInt(
      "Digite a quantidade do item que escolheu: "
    );

    switch (codigo) {
      case 100:
        total += quantidade * 4.8;
        console.log(`Adicionado valor R$ ${4.8 * quantidade} reais`);
        break;

      case 101:
        total += quantidade * 3.5;
        console.log(`Adicionado valor  R$ ${3.5 * quantidade} reais`);
        break;

      case 102:
        total += quantidade * 5.2;
        console.log(`Adicionado valor  R$ ${5.2 * quantidade} reais`);
        break;

      case 103:
        total += quantidade * 6;
        console.log(`Adicionado valor  R$ ${6 * quantidade} reais`);
        break;

      case 104:
        total += quantidade * 12;
        console.log(`Adicionado valor  R$ ${12 * quantidade} reais`);
        break;

      case 105:
        total += quantidade * 4.75;
        console.log(`Adicionado valor  R$ ${4.75 * quantidade} reais`);
        break;
      default:
        console.log("Item não cadastrado");
    }
  }
}

console.log(`O valor total é R$ ${total}`);
