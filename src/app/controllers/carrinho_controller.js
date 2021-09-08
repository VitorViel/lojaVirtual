const carrinho_dao = require('../bd/carrinho_dao');
var db = require('../../config/database');
const carrinhoDAO = new carrinho_dao(db);


class carrinho_controller{

    calcularValorTotal(carrinho, id){
        
        return new Promise((resolve, reject) => {
            carrinhoDAO.calcularValorTotal(carrinho, id).then((results) => {
                resolve(results);
            }, (err) => {
                console.log(err)
            })
        })
    }  

    retornaNome(id){
        return new Promise((resolve, reject) => {
            carrinhoDAO.retornaNome(id).then((results) => {
                resolve(results)
            }, (err) => {
                console.log(err)
            })
        })
    }

    
    retornaFoto(id){
        return new Promise((resolve, reject) => {
            carrinhoDAO.retornaFoto(id).then((results) => {
                resolve(results)
            }, (err) => {
                console.log(err)
            })
        })
    }

    
    retornaValorUnitario(id){
        return new Promise((resolve, reject) => {
            carrinhoDAO.retornaValorUnitario(id).then((results) => {
                resolve(results)
            }, (err) => {
                console.log(err)
            })
        })
    }


}

module.exports = carrinho_controller;