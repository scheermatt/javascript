const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container'); // selecionar a parte desejada do html (nesse caso a classe container)
const div = document.createElement('div'); // para criar uma div na classe container

for (let i = 0; i < elementos.length; i++) {  // a estrutura de repetição
    const {tag, texto} = elementos[i]; // para retira a tag e texto de dentro do array elementos
    let elemento = document.createElement(tag); // para criar os elementos HTML (p, div, footer e section)
    elemento.innerHTML = texto; // para colocar os textos das semânticas da const elementos
    div.appendChild(elemento); // para colocar tudo acima na div que criamos da class container
}

container.appendChild(div); // para mostrar o conteudo no html