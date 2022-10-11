const leitor = require("readline-sync");

const listaAlunos = [];

const quantidadeAlunos = leitor.questionInt("Digite a quantidade de alunos: ");

for (let i = 1; i <= quantidadeAlunos; i++) {
  const nome = leitor.question("Digite o nome do aluno: ");
  const n1 = leitor.questionFloat("Digite a primeira nota: ");
  const n2 = leitor.questionFloat("Digite a segunda nota: ");
  const n3 = leitor.questionFloat("Digite a terceira nota: ");

  const calculoMedia = (n1 + n2 + n3) / n3;
  const media = calculoMedia.toFixed(2);

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
