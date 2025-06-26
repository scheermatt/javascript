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

const session = require('express-session');
const mongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');
// CRUD   -> CREATE, READ, UPDATE, DELETE
// METODO -> POST    GET   PUT     DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato
const sessionOptions = session({
    secret: 'meu segredo',
    store: mongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
        httpOnly: true // Não permite acesso ao cookie via JavaScript
    }
});
app.use(sessionOptions);
app.use(flash());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src','views'));
app.set('view engine', 'ejs');
app.use(middlewareGlobal);
app.use(routes);


app.on('pronto', () => {
    app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000. Aperte CTRL + C para parar o Servidor');
    });
});
