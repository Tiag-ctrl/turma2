const express = require ('express');
const ProdutoControllers = require('../Controllers/produtosControllers');
const router = express.Router();


router.get('/criar',ProdutoControllers.criarProduto);
router.get('/deletar/:id',ProdutoControllers.deletarProduto);


module.exports = router