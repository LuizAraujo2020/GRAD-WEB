const calculadora = require('../calculadora/calculadora')

function index(req, res) {

    let erro_valor = req.query.erro_valor

    res.render('index', { erro_valor })
}

function resultado(req, res) {

    let v1 = Number(req.body.v1)
    let v2 = Number(req.body.v2)
    let op = req.body.op

    if(isNaN(v1) || isNaN(v2)) {
        res.redirect('/?erro_valor=true')
    } else {
        const v3 = calculadora(v1, v2, op)
        res.render('resultado', { v1, v2, op , v3 })
    }
}

module.exports = {
    index,
    resultado
}