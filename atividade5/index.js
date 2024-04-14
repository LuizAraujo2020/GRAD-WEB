const express = require('express');
const app = express();
const PORT = 8080;

const estoque = require('./estoque');
const factory = require('../modulos/factories/estoque_factory');

// HOME
app.get('/', (req, res) => {
    res.send(factory.criarListaDeProdutos(estoque.listarProdutos()));
});

// app.get('/', function(req, res) {
//     // res.send(ui.createCalculatorPage(0, 0, 'somar', '0'));
//   res.sendFile(path.join(__dirname, '/index.html'));
// });

// CREATE
app.get('/adicionar/:nome/:qtd', (req, res) => {
    const nome = req.params.nome;
    const qtd = req.params.qtd;

    let produto = estoque.criarProduto(nome, qtd);
    estoque.adicionarProduto(produto);

    res.send(factory.criarListaDeProdutos(estoque.listarProdutos()));
});


// READ
app.get('/listar', (req, res) => {
    res.send(factory.criarListaDeProdutos(estoque.listarProdutos()));
});


// DELETE
app.get('/remover/:id', (req, res) => {
    const id = req.params.id;

    estoque.removerProduto(id);

    res.send(factory.criarListaDeProdutos(estoque.listarProdutos()));
});


// UPDATE
app.get('/editar/:id/:qtd', (req, res) => {
    const id = req.params.id;
    const qtd = req.params.qtd;

    estoque.editarProduto(id, qtd);

    res.send(factory.criarListaDeProdutos(estoque.listarProdutos()));
});

app.get('/editar', (req, res) => {
    const id = req.query.id;
    const nome = req.query.nome;
    const qtd = req.query.qtd;

    estoque.editarProduto(id, nome, qtd);

    res.send(factory.criarListaDeProdutos(estoque.listarProdutos()));
});


// DETAILS
app.get('/detalhes/:id', (req, res) => {
    const id = req.params.id;

    res.send(factory.criarDetalhesDeProduto(estoque.buscarProdutoPorID(id)));
});


/// Como se fosse a 'main' 
app.listen(PORT, function() {
    console.log('app rodando na porta: ' + PORT);
});