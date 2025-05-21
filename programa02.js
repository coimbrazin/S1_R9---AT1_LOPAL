// 2 - Crie um programa que pergunte ao usuário 4 notas de uma disciplina escolar, armazene-as em um vetor, ao final exibas as notas armazenadas e informe ao usuário sua média.

let notas = [];
let soma = 0;

for (let i = 0; i < 4; i++) {
  let nota = parseFloat(prompt(`Digite a nota: `));
  if (!isNaN(nota) && nota >= 0) {
    notas[i] = nota;
    soma += nota;
  } else {
    alert("O valor digitado é inválido, tente novamente");
    i--;
  }
}

let mediaSoma = soma / 4;

console.log(notas);
console.log(`A média das notas é: ${mediaSoma}`);