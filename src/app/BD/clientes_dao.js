class Clientes_dao
{
    // construtor da classe
    constructor(db)
    {  this._db = db;  }

    // fazendo inclusao de novo cliente no BD
    incluiClientes(Cliente) {
        return new Promise((resolve,reject) => {
            var sqlInsCliente = "INSERT INTO Cliente (nomeCliente, cpfCliente, emailCliente, senhaCliente) VALUES('" + Cliente.NOME + "','" + Cliente.CPF + "','" + Cliente.EMAIL + "','" + Cliente.SENHA + "')";
            console.log("INSERT MONTADO = " + sqlInsCliente);
            this._db.query(sqlInsCliente, function (erro) {
                if (erro) {
                    console.log(erro);
                    return reject('ERRO NA INCLUSÃO DO NOVO REGISTRO NA TAB CLIENTES NO BD');
                }
                else { return resolve();  }
            }) 
        })
    }

    // fazendo exclusão de cliente no BD
    excluiClientes(id) {
        return new Promise((resolve, reject) => {
            var sqlDel = "DELETE FROM CLIENTES WHERE idClie=" + id;
            console.log(sqlDel);
            this._db.query(sqlDel,
                function (erro) {
                    if (erro) {
                        console.log(erro);
                        return reject('EXCLUSÃO DO CLIENTE NÃO REALIZADA COM SUCESSO!');
                    }
                    resolve();
                }
            );
        });
      }
    
      // fazendo atualização dos dados do cliente no BD
      atualizaClientes(cliente) {
        return new Promise((resolve, reject) => {
            var sqlAtualiza = "UPDATE CLIENTES set nomeClie='" + cliente.nome +
                "', cpfClie='" + cliente.cpf +
                "', dataNiverClie='" + cliente.niver + "', emailClie='" +
                cliente.email + "' where idClie=" + cliente.id;
            console.log(sqlAtualiza);
            this._db.query(sqlAtualiza,
                function (erro) {
                    if (erro) {
                        console.log(erro);
                        return reject('ATUALIZAÇÃO DO CLIENTE NÃO REALIZADA COM SUCESSO!');
                    }
                    resolve();
                });
        });
      }
  
      // fazendo select dos dados de um cliente específico no BD
      consultaClientePorId(id, callback) {
        var sqlCons = 'SELECT idClie, cpfClie, emailClie, nomeClie, DATE_FORMAT(dataNiverClie,"%d/%m/%Y") as dataNiverClie FROM CLIENTES WHERE idClie=' + id;
        console.log(sqlCons);
        this._db.query(
            sqlCons,
            (erro, resultados) =>
                callback(erro, resultados)
        )
     } 
    
}  // end da classe
    
module.exports = Clientes_dao;