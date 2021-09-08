class carrinho_dao{


    constructor(db, id){
        this._db = db;
        this.valores = [];
        this.valorTotal = 0;
        this.id = id;
    }

    calcularValorTotal(carrinho, id){

        return new Promise((resolve, reject) => {
            console.log(carrinho.produtos[0].qtd)
            if(carrinho.produtos.length == 1 && carrinho.produtos[0].qtd == 1){
                this.valorTotal = 0;
            }
            for(var i = 0; i < carrinho.produtos.length; i++){

                let idProd = carrinho.produtos[i].idProd;
                let sql = `select precoProduto from produtosviel where idProduto = '${id}';`;

                if(carrinho.produtos[i].idProduto == id){
                    this._db.query(sql, (err, results) => {
                        this.valores.push(results[0].precoProduto);
                        this.valorTotal = this.valorTotal + results[0].precoProduto;
                        resolve(this.valorTotal)          
                    })
                }
            }
        })  
    }
    
    retornaNome(id){

        return new Promise((resolve, reject) => {
            let sql = `select nomeProduto from produtosviel where idProduto = '${id}';`;

            this._db.query(sql, (err, results) => {
                resolve(results[0].nomeProduto)
            })

        })
    }

    retornaFoto(id){

        return new Promise((resolve, reject) => {
            let sql = `select fotoProduto from produtosviel where idProduto = '${id}';`;

            this._db.query(sql, (err, results) => {
                console.log(results)
                resolve(results[0].fotoProduto)
            })

        })
    }

    retornaValorUnitario(id){

        return new Promise((resolve, reject) => {
            let sql = `select precoProduto from produtosviel where idProduto = '${id}';`;

            this._db.query(sql, (err, results) => {
                resolve(results[0].precoProduto)
            })

        })
    }
}

module.exports = carrinho_dao;