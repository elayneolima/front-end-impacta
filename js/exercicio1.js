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

*/

var nomeDoCliente = prompt("Digite seu nome: ")
var nomeDoProduto = prompt("Digite o nome do produto: ")
var qtdDoProduto = prompt("Digite a quantidade do produto: ")
var valorUnitario = prompt("Digite o valor do produto")

var totalCompra = qtdDoProduto * valorUnitario; 

console.log("#############################");
console.log(`Nome do Cliente: ${nomeDoCliente}`);
console.log(`Nome do Produto: ${nomeDoProduto}`);
console.log(`Valor Unitário: ${valorUnitario}`);
console.log(`Total da Compra: ${totalCompra}`);
console.log(`#############################`);
console.log("Obrigado e Volte Sempre =D");
