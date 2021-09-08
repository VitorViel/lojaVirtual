const Produtos_dao = require('../BD/produtos_dao');
var db = require('../../config/database');

class ProdutosControllers
{
    listaProdutos() {
        return function (req, res) {
            const ProdutosDAO = new Produtos_dao(db);
            ProdutosDAO.selectNaTabelaProdutos(function (erro, resultados) {
                res.render('index.ejs',{
                    Produto: resultados });
            });
        }
}
}
module.exports = ProdutosControllers;