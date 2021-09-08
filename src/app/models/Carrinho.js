var carrinho = null; 
var Carrinho_Controller = require('../controllers/carrinho_controller')
var carrinhoCont = new Carrinho_Controller;
class Carrinho{

    static adicionarAoCarrinho(produto){
        return new Promise((resolve, reject) => {
            if(carrinho === null){
                carrinho = {
                    produtos: [],
                    valorTotal: 0
                }
            }

            Carrinho.jaExiste(produto.idProduto).then((resolved) => {
    
                Carrinho.calcularValorTotal(this.getCarrinho(), produto.idProduto).then((valor) => {
                    carrinho.valorTotal = valor;
                })

                resolve('Você incrementou a quantidade deste produto!');
                console.log(resolved)
            }, (rejected) => {
    
                carrinho.produtos.push(produto);

                Carrinho.retornaFoto(produto.idProduto).then((foto) => {
                    produto.fotoProduto = foto;
                    console.log(`x = ${foto}`)
                })

                Carrinho.retornaNome(produto.idProduto).then((nome) => {
                    produto.nomeProduto = nome;
                })
    
                Carrinho.retornaValorUnitario(produto.idProduto).then((valorUnitario) => {
                    produto.precoProduto = valorUnitario;
                })
    
                Carrinho.calcularValorTotal(this.getCarrinho(), produto.idProduto).then((valor) => {
                    carrinho.valorTotal = valor;
                })

                console.log('produto adicionado!')
                reject('Produto adicionado!')
    
            })
        })
        

    }

    static jaExiste(id){
        return new Promise((resolve, reject) => {
            
            for(var i = 0; i <= carrinho.produtos.length; i++){

                if(carrinho.produtos.length <= 0) break;

                if(carrinho.produtos[i].idProduto == id){
                    var qtd = carrinho.produtos[i].qtd;
                    qtd = qtd + 1;
                    carrinho.produtos[i].qtd = qtd; 
                    resolve('Você incrementou a quantidade deste produto');
                    break;
                }
            }
            reject('O produto não está no carrinho!');
        })
        
    }

    static retornaNome(id){
        return new Promise((resolve, reject) => {
            carrinhoCont.retornaNome(id).then((nome) => {
                resolve(nome);
            }, (err) => {
                console.log(err)
            })
        })
    }
    static retornaFoto(id){
        return new Promise((resolve, reject) => {
            carrinhoCont.retornaFoto(id).then((nome) => {
                resolve(nome);
            }, (err) => {
                console.log(err)
            })
        })
    }
    static retornaValorUnitario(id){
        return new Promise((resolve, reject) => {
            carrinhoCont.retornaValorUnitario(id).then((valorUnit) => {
                resolve(valorUnit);
            }, (err) => {
                console.log(err)
            })
        })
    }

    static calcularValorTotal(carrinho, id){
        return new Promise((resolve, reject) => {
            carrinhoCont.calcularValorTotal(carrinho, id).then((valor) => {
                resolve(valor)
            }, (rejected) => { 
                console.log(rejected)
            })
        })
       
    }

    static getCarrinho(){
        return carrinho;
    }

    static limparCarrinho(){
        return new Promise((resolve, reject) => {
            carrinho = {
                produtos: [],
                valorTotal: 0
            }
            resolve('O carrinho foi limpo!')
        })

    }
}

module.exports = Carrinho;