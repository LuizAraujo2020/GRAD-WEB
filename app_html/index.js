const express         = require('express');
const mustacheExpress = require('mustache-express');
const app             = express();

app.engine('html', mustacheExpress());  // cria o motor renderizador
app.set('view engine', 'html');         //espeecifica o comportamento do express
app.set('views', __dirname + '/views'); // diz onde está os arquivos html



app.get('/', function(req, res) {
    let nome = "Carlos";                // pode buscar o nome no banco e etc...
    let data = new Date();
    res.render('index.html', {nome, data});
});

app.get('/contato', function(req, res) {
    res.render('contato.html');
});

app.post('/dados', function(req, res) {
    let nome = "Pedro";
    let data = new Date();
    res.render('index.html', {nome, data});
});

// Executando o servidor
const PORT = 8080;

/// Como se fosse a 'main' 
app.listen(PORT, function() {
    console.log('app rodando na porta: ' + PORT);
});

///npm install mustache-express@1.3.2

