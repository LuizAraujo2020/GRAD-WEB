const express           = require('express');
const mustacheExpress   = require('mustache-express');
const app               = express();

app.engine('html', mustacheExpress());

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/static'));

// Para usar o method POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/dados', function(req, res) {

    let datum = {
        name: req.body.inputName,
        endereco: req.body.inputEndereco,
        telefone: req.body.inputTelefone,
        agendamento: req.body.inputDataAgendamento,
    }

    res.render('dados', { datum });
});


const PORT = 8080;

app.listen(PORT, function() {
    console.log('Servidor rodando na porta: ' + PORT);
});


/*====== Resources:
https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters
https://getbootstrap.com/docs/4.0/utilities/flex/
https://getbootstrap.com/docs/4.3/utilities/spacing/
https://getbootstrap.com/docs/4.3/components/forms/
https://getbootstrap.com/docs/4.3/utilities/text/
https://getbootstrap.com/docs/4.3/components/buttons/
*/