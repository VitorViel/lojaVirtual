class Produtos_BD
{
    constructor(db)
    {
        this._db = db;
    }

    selectNaTabelaProdutos(callback) {
        var sqlConsProdutos = 'SELECT idProduto, nomeProduto, precoProduto, descricaoProduto, fotoProduto FROM produtosviel';
        console.log(sqlConsProdutos);
        this._db.query(sqlConsProdutos,(erro,resultados) =>
            callback(erro,resultados))
    }
}
module.exports = Produtos_BD;