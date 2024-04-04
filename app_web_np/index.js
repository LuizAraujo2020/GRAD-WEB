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

// iniciar o servidor
app.listen(PORT, function() {
    console.log('app rodando na porta ' + PORT);
});
