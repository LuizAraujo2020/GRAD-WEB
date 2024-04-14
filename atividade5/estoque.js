let produtos = [];

function criarProduto(nome, qtd) {
    let produto = {
        id: produtos.length,
        nome: nome,
        qtd: qtd
    }

    return produto;
}

function adicionarProduto(produto) {
    produtos.push(produto);

    return produtos;
}

function listarProdutos() {
    return produtos;
}

function editarProduto(id, qtd) {
    for (let index = 0; index < produtos.length; index++) {
        if (produtos[index].id == id) {
            produtos[index].qtd = qtd;
        }
    }
}

function removerProduto(id) {
    produtos = produtos.filter((p) => {
        return p.id != id
    })
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    editarProduto,
    removerProduto
}