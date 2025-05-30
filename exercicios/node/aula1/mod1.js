const nome = 'Matheus';
const sobrenome = 'Scheer';
const idade = 24;

const falaNome = () => {
    console.log(nome, sobrenome);
};
/*
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.idade = idade;
module.exports.falaNome = falaNome; */

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.idade = idade;
exports.falaNome = falaNome;

this.qualquerCoisa = 'ahahahahahah';
console.log(module.exports);