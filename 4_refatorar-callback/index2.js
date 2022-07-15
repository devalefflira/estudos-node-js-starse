import fs, { read } from 'fs';
import { promisify } from 'util';

const readFilePromise = promisify(fs.readFile);

let alunos;

/*
ANTES DE REFATORAR / FUNÇÃO DE CALLBACK

fs.readFile('./4_refatorar-callback/alunos.json', (erro, dados) => {
   if (erro) {
     console.error(erro);
     return;
   }
   alunos = JSON.parse(dados);

   console.log('Alunos:', alunos);
 });
*/

// APÓS A REFATORAÇÃO / PROMISE

readFilePromise('./alunos.json').then((dados) => {
  alunos = JSON.parse(dados);
  console.log('Alunos:', alunos);
}).catch((error) => {
  console.log(error);
});