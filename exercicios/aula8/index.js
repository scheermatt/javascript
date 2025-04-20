const nome = 'Matheus Eduardo';
const sobrenome = 'Scheer';
const idade = 24;
const peso = 130;
const alturaEmM = 1.88;
let imc = peso / (alturaEmM*alturaEmM);
let anoNasc = 2025 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos', 'e pesa', peso, 'kg');
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg`);
