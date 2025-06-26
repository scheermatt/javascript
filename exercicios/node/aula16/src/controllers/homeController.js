
exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Este é o título da página',
        numeros: [1, 2, 3, 4, 5],
        frutas: ['Maçã', 'Pera', 'Uva', 'Banana'],
        pessoa: {
            nome: 'Matheus',
            sobrenome: 'Scheer'
        }
    });
    return;
}


exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}
