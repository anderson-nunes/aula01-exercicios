const pessoas = [
  {
    nome: "Anderson",
    idade: 36,
  },
  {
    nome: "Everton",
    idade: 25,
  },
  {
    nome: "Patricia",
    idade: 17,
  },
];

const encontrarNome = pessoas.filter((nome) => nome.nome == "Patricia");

const menorDeIdade = pessoas.filter((pessoa) => pessoa.idade < 18);

const maiorDeIdade = pessoas.filter((pessoa) => pessoa.idade >= 18);

// console.log(menorDeIdade);
// console.log(maiorDeIdade);

console.log(encontrarNome);
