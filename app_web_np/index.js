const express = require('express');
const app = express(); // criar aplicações do tipo express
const PORT = 8080;

// descreve urls
app.get('/', function(req, res){
    res.send('Pagina inicial');
}); 

app.get('/ola', function(req, res){
    res.send('Ola mundo');
}); 

app.get('/ola/:n', function(req, res){
    const n = req.params.n
    res.send('Ola mundo ' + n);
}); 


const mat = require('../modulos/utils/matematica');

app.get('/verificar0numero-primo/:n', function(req, res){
    const n = req.params.n;
    let ePrimo = mat.verificarNumeroPrimo(n);
    res.send('É primo: ' + ePrimo);
}); 

// iniciar o servidor
app.listen(PORT, function() {
    console.log('app rodando na porta ' + PORT);
});
