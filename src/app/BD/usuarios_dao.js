const ClientesControllers = require("../controllers/clientes_controllers");

class Usuarios_dao
{
    // construtor da classe
    constructor(db)
    {
        this._db = db;
    }

    selectNaTabelaUsuarios(CPF,SENHA) {
       return new Promise((resolve,reject) => {
          var sqlConsUsuarios = "SELECT * FROM Cliente WHERE cpfCliente='" + CPF + "' and senhaCliente='" + SENHA + "'";
          console.log("SELECT MONTADO = " + sqlConsUsuarios);
          this._db.query(sqlConsUsuarios, function (erro,resultado) {
              if (resultado.length > 0) {
                  var dados = resultado.length;
                  resolve(dados);
              }
              else { 
                return reject('USUÁRIO NÃO EXISTE NO BD');
              }
          })
       })
    }
}

module.exports = Usuarios_dao;