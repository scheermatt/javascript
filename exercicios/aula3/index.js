/*
console.log('Olá, Mundo!');
console.log("Olá, Mundo!");
console.log(`Olá, Mundo!`);

console.log(123456);
console.log(1234.56);
console.log(35, 42.87, 'Matheus');
*/

class Pessoa {
  constructor(nome) {
	this.nome = nome;
  }
  
  saudacao() {
	return `Olá, meu nome é ${this.nome}`;
  }
  
  // Método estático
  static criarPessoa(nome) {
	return new Pessoa(nome);
  }
}

// Chamando o método estático diretamente na classe:
const pessoa2 = Pessoa.criarPessoa("Ana");
console.log(pessoa2.saudacao()); // Saída: "Olá, meu nome é Ana"