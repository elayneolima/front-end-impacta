

(function (calc) {
    let interromper = true;
    while(interromper) {
        const imposto = 0.2;
        const produtos = [
            ['Sabão', 2.00], // cod 1
            ['Leite', 5.00], // cod 2
            ['Açucar',5.50], // cod 3
        ];
        const dados = [];
        const mensagens = [
            'codigo do produto',
            'digite a quantidade',
        ];

        // alert('produto não existe');
    
        for(let i = 0; i < mensagens.length; i++) {
            let dado = prompt(mensagens[i]) 
            dados.push(dado);
        }

        const cod = dados[0];
        const produtoSelecionado = produtos[cod - 1]

        if(!produtoSelecionado){
         alert("Esse produto não existe!");
        }

        const totalCompra = calc(dados[1], produtoSelecionado[1], imposto);

     

        console.log(`Produto:  ${produtoSelecionado[0]}`);
        console.log(`Valor Unitario: ${produtoSelecionado[1]}`);
        console.log(`Total da compra: ${totalCompra}`);
        console.log(`Imposto cobrado: 20%`);

        interromper = confirm('Deseja continuar');
    }


})(calculoTotalCompra)



function calculoTotalCompra(quantidade, valorProduto, imposto = null) {
    const totalCompraSemImposto = quantidade * valorProduto;
    if (imposto) {
        const total = totalCompraSemImposto + totalCompraSemImposto * imposto;
        return total;
    }
    return totalCompraSemImposto;
}

   