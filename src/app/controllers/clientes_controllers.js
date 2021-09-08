// chamando a classe ClientesDAO
const Clientes_dao = require('../BD/clientes_dao');

// instância do BD configurado
var db = require('../../config/database');

class ClientesControllers
{
    insereNovoCliente() {
        return function(req,res) {
            const clienteDAO = new Clientes_dao(db);
            clienteDAO.incluiClientes(req.body)
                .then(res.redirect('/login'))
                .catch(erro => console.log(erro));
        }
    }
}   

module.exports = ClientesControllers; 