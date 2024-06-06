const express = require('express')
const mustacheExpress = require('mustache-express')
const db = require('./src/db')
const app = express()

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
/// Diz onde estão os arquivos html
app.set('views', __dirname + '/src/views')
app.use(express.static(__dirname + '/src/public'))

/// Usar o decodificar POST do express 
app.use(express.urlencoded({ extended: true }))

app.use('/', require('./src/routes/estoqueRoutes'))


// DB
db.sync(function() {
    console.log('Banco de dados sincronizado com sucesso!')
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`🖥️  Server is running on port ${PORT}`)
})