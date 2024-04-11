const express = require('express')
const app    = express();
const estoque = require('./estoque')
const PORT = 8081;

app.get('/adicionar/:id/:nome/:qtd', function(req, res) {
    let id   = req.params.id;
    let nome = req.params.nome;
    let qtd  = req.params.qtd;

    let p = estoque.criarProduto(id, nome, qtd);
    estoque.adicionarProduto(p);

    res.send(p)
});

// app.get('/listar', function(req, res) {
app.get('/listar', function(req, res) {
        // res.send('Blablasla');
    res.send(estoque.listarProdutos());
});

app.get('/remover/:id', function(req, res) {
    res.send(estoque.removerProduto());
});

app.listen(PORT), function() {
    console.log('app rodando na porta' + PORT);
}