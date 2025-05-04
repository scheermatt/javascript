const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in numeros) {
    let numero = numeros[i];

    if (numero === 4) {
        console.log('Pulei o 4');
        continue;
    }

    if (numero === 6) {
        console.log('6 encontrado');
        break;
    }
    console.log(numero);

} 