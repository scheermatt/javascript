/*
console.log('Olá, Mundo!');
console.log("Olá, Mundo!");
console.log(`Olá, Mundo!`);

console.log(123456);
console.log(1234.56);
console.log(35, 42.87, 'Matheus');
*/

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject(false);

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}