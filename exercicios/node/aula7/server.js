const express = require('express');
const app = express();


// CRUD   -> CREATE, READ, UPDATE, DELETE
// METODO -> POST    GET   PUT     DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
        `);
});

app.post('/', (req, res) => {
    res.send('Recebi o Formulário');
})

app.get('/contato', (req, res) => {
    res.send('@matheus.scheer no Instagram')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000. Aperte CTRL + C para parar o Servidor');
});