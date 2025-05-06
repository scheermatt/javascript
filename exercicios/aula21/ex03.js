// Escreva uma função que recebe um número e 
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = retorna o próprio número
// Usar função de números de 0 a 100




function fizzBuzz (num1) {
    if (typeof num1 !== 'number') return num1;
    if (num1 % 3 === 0 && num1 % 5 === 0) return 'fizzBuzz';
    if (num1 % 3 === 0) return 'fizz';
    if (num1 % 5 === 0) return 'buzz';
    return num1;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}