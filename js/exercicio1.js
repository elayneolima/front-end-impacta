/*
Exercicio 1, JS basico Desenvolva um sistema de compra onde o usuario digitará: 
Nome do Cliente 
Nome do produto 
Quantidade que comprou 
Valor de uma unidade 


Seu programa deverá Calcular o total da comrpa e impromir as informações da compra: 

Exemplo de saida 

###################### 
Nome do Cliente: xxxxx 
Produto: xxxxx 
Valor unitário: xxxxx 
Total da compra: xxxxx 
########################## 
Obrigado e volte sempre!



// MINHA RESOLUCAO

*/
// debugger
// let entradas = ["Digite seu nome: ", "Digite o nome do Produto: ", "Digite a quantidade: ", "Digite o valor: "]

// let entradaUsuario = []; 
// for (let iteracao = 0; iteracao < entradas.length; iteracao++){
//     entradaUsuario[iteracao] = prompt(entradas[iteracao]);
// }

// let valorTotal = entradaUsuario[2] * entradaUsuario[3]

// let retornoSistema = ["Nome do Cliente: " + entradaUsuario[0], "Nome do Produto: " + entradaUsuario[1], "Valor Unitario: " + entradaUsuario[3], "Total da Compra: " + valorTotal];

// console.log(retornoSistema[])



// let nomeDoCliente = prompt("Digite seu nome: ")
// let nomeDoProduto = prompt("Digite o nome do produto: ")
// let qtdDoProduto = prompt("Digite a quantidade do produto: ")
// let valorUnitario = prompt("Digite o valor do produto")

// let totalCompra = qtdDoProduto * valorUnitario; 

// console.log("#############################");
// console.log(`Nome do Cliente: ${nomeDoCliente}`);
// console.log(`Nome do Produto: ${nomeDoProduto}`);
// console.log(`Valor Unitário: ${valorUnitario}`);
// console.log(`Total da Compra: ${totalCompra}`);
// console.log(`#############################`);
// console.log("Obrigado e Volte Sempre =D");


//RESOLUCAO PROFESSOR

// const imposto = 0.2;
// const camposSaida = [
//     'Produto: ',
//     'Valor Unitario: ',
//     'Total da compra: 20%' ,
// ];

// const produtos = [
//     ['Sabão', 2.00],   // cod 1
//     ['Leite', 5.00],   // cod 2
//     ['Açucar', 5.50],  // cod 3
// ];

// const dados = [];

// const mensagens = [
//     'codigo do produto',
//     'digite a quantidade',
// ];

// for (let i = 0; i < mensagens.length; i++) {
//     let dado = prompt(mensagens[i]);
//     dados.push(dado);
// }

// const cod = dados[0]; 
// const produtoSelecionado = produtos[cod - 1]
// const totalCompraSemImposto = dados[1] * produtoSelecionado[1]
// const totalComImposto = totalCompraSemImposto + totalComImposto * imposto 


// console.log(`${camposSaida[0]} ${produtoSelecionado[0]}`);
// console.log(`${camposSaida[1]} ${camposSaida[1]}`)
// console.log(`${camposSaida[2]} ${camposSaida[2]}`)

// console.log(`${camposSaida[2]} ${totalComImposto}`)

