import fs from 'fs';

let alunos;

fs.readFile('./3_callback/alunos.json', (erro, dados) => {
  if (erro) {
    console.error(erro);
    return;
  }
  alunos = JSON.parse(dados);

  console.log('Alunos:', alunos);
});
