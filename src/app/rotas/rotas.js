// chamando a classe usuarios_controler
const UsuarioControlador = require('../controllers/usuarios_controllers');
const usuarioCont = new UsuarioControlador();

const Produtos_dao = require('../controllers/produtos_controllers');
const Produtos = new Produtos_dao();

const carrinho = require('../models/Carrinho')

// chamando a classe clientes_controler
const ClienteControlador = require('../controllers/clientes_controllers');
const { render } = require('../../config/express');
const clienteCont = new ClienteControlador();

module.exports = (aplicacao) => {

    // Evitar problema com o CORS
    aplicacao.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', "http://localhost");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });


/****************  ROTAS  ****************/
aplicacao.get('/', function(req,res) {
    res.render('cadastro.ejs');
    console.log('Acessou a pagina de cadastro...');
})

aplicacao.get('/login', function(req,res) {
    res.render('login.ejs');
    console.log('Acessou a pagina de login...');
})

aplicacao.get('/carrinho', function(req,res) {
    res.render('carrinho.ejs', {
        carrinho: carrinho.getCarrinho()
    });
    console.log('Acessou a pagina de login...');
})

aplicacao.post('/validaBDUsuarios', usuarioCont.validaAcessoUsuario());

aplicacao.post('/insertBDClientes', clienteCont.insereNovoCliente());

aplicacao.get('/index', Produtos.listaProdutos());

aplicacao.post('/limparcarrinho', function(req,res){
    carrinho.limparCarrinho()
    console.log(carrinho.getCarrinho())
    res.redirect('/index')
})

aplicacao.get('/teste', (req, res) => {
    res.send(carrinho.getCarrinho())
})

aplicacao.post('/carrinho/:id', (req, res) => {
    let id = req.params.id;
    carrinho.adicionarAoCarrinho({
        "idProduto": id,
        "fotoProduto": '',
        "nomeProduto": '',
        "precoProduto": '',
        "qtd": ''
    }).then((r) => {
        console.log(r)
    }).then((err) => {
        console.log(err)
    }).catch(() => {}).finally(() => {
        res.redirect('/carrinho')
    })
})
}




