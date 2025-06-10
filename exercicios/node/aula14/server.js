require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('MongoDB conectado com sucesso!');
        app.emit('pronto');
    })
    .catch(e => console.log('Erro ao conectar no MongoDB', e));

const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');
// CRUD   -> CREATE, READ, UPDATE, DELETE
// METODO -> POST    GET   PUT     DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src','views'));
app.set('view engine', 'ejs');
app.use(meuMiddleware);
app.use(routes);


app.on('pronto', () => {
    app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000. Aperte CTRL + C para parar o Servidor');
    });
});
