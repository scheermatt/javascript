const express = require('express');
const app = express();
const routes = require('./routes.js');

// CRUD   -> CREATE, READ, UPDATE, DELETE
// METODO -> POST    GET   PUT     DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000. Aperte CTRL + C para parar o Servidor');
});