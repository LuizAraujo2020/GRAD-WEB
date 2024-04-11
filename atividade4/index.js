const express = require('express');
const app  = express();
const PORT = 8080;

// Modules
const path = require('path');
const math = require('../modulos/utils/calculadora');
const ui   = require('../modulos/factories/page_factory');


app.get('/', function(req, res) {
    // res.send(ui.createCalculatorPage(0, 0, 'somar', '0'));
  res.sendFile(path.join(__dirname, '/index.html'));
});


app.get('/calculadora', (req, res) => {
    // Get inputs from URL.
    let value1 = Number(req.query.val1);
    let value2 = Number(req.query.val2);
    let operator = req.query.op;

    let result = math.performOperation(value1, value2, operator);
    
    res.send(ui.createCalculatorPage(value1, value2, operator, result));
})


app.listen(PORT, function() {
    console.log('app rodando na porta: ' + PORT);
});