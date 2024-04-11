let produtos = [];

function criarProduto(id, nome, qtd) {
    let produto = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    
    return produto;
}

function adicionarProduto(p) {
    produtos.push(p)
}

function listarProdutos() {
    return produtos
}

function removerProduto(id) {
    produtos = produtos.filter((p) => {
        return p.id != id
    });
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos
}