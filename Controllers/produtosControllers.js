const ProdutoControllers = {
    criarProduto : (req,res) => {
        res.send("Produto criado");
    },
    deletarProduto : (req,res) => {
        const {id} = req.params;
        res.send("Deletando produto");
    }
}

module.exports = ProdutoControllers;