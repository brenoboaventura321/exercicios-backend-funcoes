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
    ],
    imprimirResumo: function(){
        let quantidadeTotal= this.calcularTotalDeItens();
        let precoTotal= this.calcularTotalAPagar();

        console.log(
        `Cliente: ${this.nomeDoCliente}
        Total de Itens: ${quantidadeTotal}
        Total a pagar: R$ ${(precoTotal/100).toFixed(2)}`
        )
    },
    addProduto: function(novoProduto){
        for (const itemDoCarrinho of this.produtos){
            if (novoProduto.id === itemDoCarrinho.id){
                itemDoCarrinho.id +=1;
            }else {
                this.produtos.push(novoProduto);
            }
        }
    
    },
    imprimirDetalhes: function(){
        let quantidadeTotal= this.calcularTotalDeItens();
        let precoTotal= this.calcularTotalAPagar();

        console.log(`Cliente: ${this.nomeDoCliente}`)
        for (const i of this.produtos){
            console.log(`
            Item ${i.id} - ${i.nome} - ${i.qtd} und - R$ ${(i.precoUnit/100).toFixed(2)}`);
        };
        console.log(`
            Total de itens: ${quantidadeTotal} itens
            Total a pagar: R$ ${(precoTotal/100).toFixed(2)}`
        );
    },
    calcularTotalDeItens:function(){
        let quantidadeTotal= 0;
        for (const i of this.produtos){
            quantidadeTotal += i.qtd;
        };
        return quantidadeTotal;
    },
    calcularTotalAPagar:function(){
        let precoTotal= 0;
        for (const i of this.produtos){
            precoTotal += i.precoUnit*i.qtd;
        };
        return precoTotal;
    },
    calcularDesconto:function(){
        
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
};

const novoTenis= {
    id: 3,
    nome: "Sapato",
    qtd: 1,
    precoUnit: 10000
};

//carrinho.addProduto(novaBermuda);
//carrinho.addProduto(novoTenis);
//carrinho.imprimirResumo();
carrinho.imprimirDetalhes();