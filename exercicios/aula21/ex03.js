// const num1 = Math.round(Math.random() * (100 - 0) + 0);



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

