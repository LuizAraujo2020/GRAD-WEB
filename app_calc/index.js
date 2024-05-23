const express = require('express')
const mustacheExpress = require('mustache-express')

// const controller = require('./src/controller/calculadoraController') 
const router = require('./src/routes/calculadoraRoutes') 

const app = express()

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname + "/src/views")

app.use(express.urlencoded({ extended: true }))

// ROTAS
app.use('/', router)

const PORT = 5500
app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`)
})