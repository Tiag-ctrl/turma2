const express = require ('express');
const rotasProdutos = require('./Rotas/rotasProdutos');


let app = express();

app.get('/', (req,res)=> res.send("Ola mundo, eu sou o miguel cabeca de pastel filho do Tiagao bonitao S2"));
app.get('/contatos', (req,res)=> res.send("Pagina dos contatos"));

app.use('/produtos',rotasProdutos);



app.listen(3000, ()=> console.log("servidor rodando na porta 3000"))