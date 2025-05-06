/*try {
    console.log('Abri um arquivo');
    console.log('Manipulei um arquivo e deu erro');
    console.log('Fechei o arquivo');
} catch (err) {
    console.log('Tratando o erro');
} finally {
    console.log('FINALLY: Eu sempre sou executado');
}*/

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
}
try {
    const data = new Date('22-03-2001 11:35:13');
    const hora = retornaHora();
    console.log(hora);
} catch (err) {
    // Tratar erro
} finally {
    console.log('Tenha um bom dia!');
}
