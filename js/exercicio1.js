// 'use strict'

// let nomeDoProduto = prompt('Digite o nome do produto: ');
// let nomeDoCliente = prompt('Digite o  seu nome: ');
// let valorDaUnidade = prompt('Digite o valor unitário: ');
// let qtdDoProduto = prompt('Digite a quantidade do produto: ');

// let totalDaCompra = qtdDoProduto * valorDaUnidade; 

// console.log('###############');

// console.log(`Nome do Cliente: ${nomeDoCliente}`);
// console.log(`Produto: ${nomeDoProduto}`);
// console.log(`Valor unitário: ${valorDaUnidade}`);
// console.log(`Total da compra: ${totalDaCompra}`);

// console.log('###############');



// let entradas = ['Digite o nome do produto: ',
//                 'Digite o seu nome: ',
//                 'Digite o valor unitário: ',
//                 'Digite a quantidade do produto: '
// ]

// let camposPreenchidos = [
//                 'Produto: '+ entradaUsuario[0],
//                 'Nome Cliente: ' + entradaUsuario[1],
//                 'Valor unitário: ' + entradaUsuario[2],
//                 'Quantidade total: ' + entradaUsuario[3]
// ]

// let entradaUsuario = []

// for(let i = 0; i < entradas.length; i++){
    
//        entradaUsuario = prompt(entradas[i])
//        console.log(entradaUsuario)
// }     

//FUNCOES AUTO EXECUTAVEIS

(function(calculoTotalDaCompra){
      'use strict'
      let interromper = true; 
        while(interromper){

        const imposto = 0.2; 
        const entradas = ['Código do produto: ',
                          'Quantidade do produto: '
        ]

        const produtos = [
        ['Sabão', 2.00], // cod 1
        ['Leite', 5.60], // cod 2
        ['Açucar',4.90]  // cod 3
        ]
     
        
        const dados = []; 
        for(let i = 0; i < entradas.length; i++){
                let dado = prompt(entradas[i]);
                dados.push(dado);    
        }




        const cod = dados[0] // cod recebe o valor armazenado na posição 0 do array dados
        const produtoSelecionado = produtos[cod - 1] // produtoSelecionado recebe o valor armazenado na posição 0 do array dados e subtrai 1. 


        if(!produtoSelecionado){ // Aqui validamos se o valor inserido no campo é válido.
                alert('Esse produto não existe!');
                continue;
        }

        const totalDaCompra = calculoTotalDaCompra(dados[1], produtoSelecionado[1], imposto);


        console.log(`Produto: ${[produtoSelecionado[0]]}`); // aqui estamos acessando o array 0, da lista de produtos, quando dizemos que produtoSelecionado[0] estamos pegando a primeira posição desse array dentro do array de produtos
        console.log(`Quantidade: ${dados[1]}`); 
        console.log(`Total com imposto: ${totalDaCompra}`)


        interromper = confirm('Deseja continuar?');

        // console.log(produtoSelecionado)
        }
})(calculoTotalDaCompra) // aqui é onde passamos os parametros de um funcao autoeexec. 


//ESCOPO DE FUNCOES

// perceba que é possivel alterar e ler a variavel no escopo global
// let valor = 10
// console.log('Imprime 1: ' + valor)

// function soma(v){
//         let incremento = 1; 
//         valor = v + 1;
// }

// incremento = 30 // esse código será ignorado pois o js nao enxerga essa variavel fora da função pois ela é local. 
// console.log('Imprime 3: ' + incremento)

// soma(50);
// console.log('Imprime 2: ' + valor);

// function subtracao() {

// }


//FUNCOES DE CALLBACK
// let mensagem = mensagem => console.log(mensagem) // arrow function, se possui só um parametro e uma linha de codigo executando nao exige o nome function, os parenteses e nem as chaves, justamnete porque serve para simplificar a funcao

// let funcSoma = function (a, b, funcCB){
//        funcCB('isso é uma funcao dentro de outra funcao!')
// }

// console.log(funcSoma(10, 2, mensagem))





// CONSULTA E CALCULO DE PRODUTO USANDO FUNCAO, ARRAY E FOR

//outra forma de fazer: 



