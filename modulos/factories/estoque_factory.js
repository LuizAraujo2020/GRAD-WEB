function criarListaDeProdutos(produtos) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Listar Produtos</title>
    </head>
    <body>
        <table>
            <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>QTD</th>
            </tr>
        ${ criarLinhas(produtos) }
        </table>
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

module.exports = {
    criarListaDeProdutos
}