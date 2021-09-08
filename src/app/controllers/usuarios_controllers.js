// chamando a classe ClientesDAO
const Usuarios_dao = require('../BD/usuarios_dao');

// instância do BD configurado
var db = require('../../config/database');

class UsuariosControllers
{
   validaAcessoUsuario()
   {
       return function(req,res) {
        // instanciando a classe usuario_dao
          const usuarioDAO = new Usuarios_dao(db);
          usuarioDAO.selectNaTabelaUsuarios(req.body.CPF,req.body.SENHA)
            .then (dados => {
                if (dados > 0) {
                    console.log('Usuário Logado com Sucesso!');
                    res.redirect('/index');
                }
            })  
            .catch(erro => { 
                console.log('Usuário não existe no registro!');
                res.redirect('/login');
            })
       }
   }
}

module.exports = UsuariosControllers;