
const path = require('path');
// path.join(__dirname, '/index.html')

function criarListaDeProdutos(produtos) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Listar Produtos</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </head>
    <body>
        <h1>Lista de Produtos</h1>
        
        <form action="/adicionar" method="get">

            <label for="nome">NOME: </label>
            <input type="text" name="nome" id="nome">

            <label for="qtd">QTD: </label>
            <input type="text" name="qtd" id="qtd">
            
            <button type="submit">➕</button>
        </form>
        <br>
        <table>
            <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>QTD</th>
            </tr>
        ${ criarLinhas(produtos) }
        </table>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
}

function criarLinhas(produtos) {
    let rows = '';

    if(produtos.length > 0) {
            produtos.forEach(element => {
                rows += criarLinha(element);
            })
    } else {
        rows = criarLinhaVazia()
    }
    
    return rows;
}

function criarLinha(produto) {
    return `
        <tr>
            <td>${produto.id}</td>
            <td>${produto.nome}</td>
            <td>${produto.qtd}</td>
            
            <td>
                <form action="/remover/${produto.id}" method="get">
                    <button type="submit">❌</button>
                </form>
            </td>

            <td>
                <form action="/detalhes/${produto.id}/" method="get">
                    <button type="submit">🔎</button>
                </form>
            </td>
        </tr>
    `;
}

function criarLinhaVazia() {
    return `
        <tr>
            <td colspan="3">Nenhum produto cadastrado</td>
        </tr>
    `;
}

/// DETAILS
function criarDetalhesDeProduto(produto) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <title>Listar Produtos</title>
        
    </style>
    </head>
    <body>
        <form action="/editar">
        <label for="">ID: ${produto.id}</label><br><br>
        <input type="text" name="id" id="id" value="${produto.id}" hidden>

        <label for="">Nome</label>
        <input type="text" name="nome" id="nome" value="${produto.nome}">

        <br><br>

        <label for="">QTD</label>
        <input type="text" name="qtd" id="qtd" value="${produto.qtd}">

        <button type="submit" class="btn btn-primary">SALVAR</button>
    </form>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
}
module.exports = {
    criarListaDeProdutos,
    criarDetalhesDeProduto
}