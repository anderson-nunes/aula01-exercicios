const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

numeros.forEach((e) => {
  const mensagem = e % 2 === 0 ? `${e} número par` : `${e} número ímpar`;
  console.log(mensagem);
});
