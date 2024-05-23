const express = require('express')
const mustacheExpress = require('mustache-express')

const app = express()

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname + "/src/views")

app.use(express.urlencoded({ extended: true }))

// ROTAS
app.get('/', (req, res) => {
    let erro_valor = req.query.erro_valor

    res.render('index', { erro_valor })
})

app.post('/resultado', (req, res) => {
    let v1 = Number(req.body.v1)
    let v2 = Number(req.body.v2)
    let op = req.body.op

    if(isNaN(v1) || isNaN(v2)) {
        res.redirect('/?erro_valor=true')
    } else {
        v3 = v1 + v2
        res.render('resultado', { v1, v2, op , v3 })
    }

})

const PORT = 5500
app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`)
})