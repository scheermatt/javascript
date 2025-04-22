const num1 = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('titulo');
const numeroTexto = document.getElementById('texto');

numeroTitulo.innerHTML = num1;
numeroTexto.innerHTML = `<p>Raiz Quadrada: ${num1 ** (0.5)}</p>`;
numeroTexto.innerHTML += `<p>${num1} é inteiro: ${Number.isInteger(num1)}</p>`;
numeroTexto.innerHTML += `<p>É NaN: ${Number.isNaN(num1)}</p>`;
numeroTexto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num1)}</p>`;
numeroTexto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num1)}</p>`;
numeroTexto.innerHTML += `<p>Com duas casas decimais: ${num1.toFixed(2)}</p>`;