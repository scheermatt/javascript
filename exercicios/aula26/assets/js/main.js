/*
function criarContador() {
    let contador = 0;
    return function () {
        return ++contador;
    };
}

const meuContador = criarContador();

console.log(meuContador()); // Saída: 1
console.log(meuContador()); // Saída: 2
console.log(meuContador()); // Saída: 3


function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Matheus');
const funcao2 = retornaFuncao('Eduardo');
console.dir(funcao);
console.dir(funcao2);


// Função que recebe outra função como argumento
function saudacao(nome, callback) {
	console.log('Olá, ' + nome + '!');
	callback();
}
// Função callback
function despedida() {
	console.log('Até Logo!');
}
// Chamando a função saudacao e passando a função despedida como callback
saudacao('Maria', despedida);

(function(parametro) {
	console.log(parametro);
})('argumento');
*/

function criaCarro(modelo, preco) {
	const desconto = preco > 50000 ? 0.1 : 0.05;
	return {
	modelo,
	preco,
	precoComDesconto() {
		return this.preco - this.preco * desconto;
	}
	};
}
const carro1 = criaCarro('SUV', 60000);
const carro2 = criaCarro('Hatch', 40000);

console.log(carro1.precoComDesconto());
console.log(carro2.precoComDesconto());