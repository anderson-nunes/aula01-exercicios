const leitor = require("readline-sync");

const listaAlunos = [];

const quantidadeAlunos = leitor.questionInt("Digite a quantidade de alunos: ");

for (let i = 1; i <= quantidadeAlunos; i++) {
  const nome = leitor.question("Digite o nome do Aluno: ");
  const n1 = leitor.questionFloat("Digite a nota 1: ");
  const n2 = leitor.questionFloat("Digite a nota 2: ");
  const n3 = leitor.questionFloat("Digite a nota 3: ");
  const media = (n1 + n2 + n3) / 3;

  const aluno = {
    nome,
    n1,
    n2,
    n3,
    media,
  };

  listaAlunos.push(aluno);
}

const alunosAcimaDaMedia = listaAlunos.filter((aluno) => aluno.media >= 7);

const alunosAbaixoDaMedia = listaAlunos.filter((aluno) => aluno.media <= 7);

console.log(alunosAcimaDaMedia);
console.log(alunosAbaixoDaMedia);

// const quantidade = leitor.questionInt(
//   "Digite a quantidade de alunos na turma: "
// );

// const nome = leitor.question("Digite o nome do aluno: ");

// let n1 = leitor.questionFloat("Digite a primeira nota: ");

// let n2 = leitor.questionFloat("Digite a segunda nota: ");

// let n3 = leitor.questionFloat("Digite a tericeira nota: ");

// let media = (n1 + n2 + n3) / 3;

// let media;

// for (let i = media; i >= 7; i++) {
//   let mediaAluno = (n1 + n2 + n3) / 3;
//   media += mediaAluno;
// }

// let mediaGeral = media / mediaAluno;

// console.log(mediaGeral);

// for (let i = media; i <= 7; i++) {
//   console.log(`A sua média é: ${media}`);
// }
