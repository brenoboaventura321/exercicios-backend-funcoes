function imprimirResumoDoCarrinho(carrinho){
    let quantidadeTotal= 0;
    let precoTotal= 0;
    for (const i of carrinho.produtos){
        quantidadeTotal += i.qtd;
        precoTotal += i.precoUnit;
    };

    console.log(`Cliente: ${nomeDoCliente}
    Total de Itens: ${carrinho.produtos.length}
    Total a pagar: R$ ${precoTotal*quantidadeTotal}`)
};

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ]
}

imprimirResumoDoCarrinho();