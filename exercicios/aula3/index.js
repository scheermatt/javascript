/*
console.log('Olá, Mundo!');
console.log("Olá, Mundo!");
console.log(`Olá, Mundo!`);

console.log(123456);
console.log(1234.56);
console.log(35, 42.87, 'Matheus');


function fibonacci(n) {
  if (n === 0) return 0; // Caso base 1
  if (n === 1) return 1; // Caso base 2
  return fibonacci(n - 1) + fibonacci(n - 2); // Chamada recursiva
}

console.log(fibonacci(6)); // Saída: 8


function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4 ) {
    console.log(valor);
};


function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };

    //...

    yield function() {
        console.log('Vim do y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();

const numeros = [5, 12, 8, 130, 44];
const maioresQueDez = numeros.filter(numero => numero > 10);

console.log(maioresQueDez); // [12, 130, 44]

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pares = numeros.filter(numero => numero % 2 === 0);
const dobrados = pares.map(numero => numero * 2);
const somados = dobrados.reduce((acumulador, numero) => acumulador + numero, 0);

const tudo = numeros.filter(numero => numero % 2 === 0).map(numero => numero * 2).reduce(
    (acumulador, numero) => acumulador + numero, 0);
console.log(pares);
console.log(dobrados);
console.log(somados);
console.log(tudo);

const frutas = ['maçã', 'banana', 'laranja'];

frutas.forEach(fruta => console.log(fruta));

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true

    });
}

const p1 = new Produto('Camiseta', 50, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}
*/

const pessoas = [
    { id: 3, nome: 'Matheus'},
    { id: 2, nome: 'Kadu' },
    { id: 1, nome: 'Nikao' }
];
/*
const novasPessoas = {};
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa };
}
*/

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

for (const pessoas of novasPessoas) { 
    console.log(pessoas);
 }