// alert('Hello World!')

// console.log('hello, wolrd!');


// var nome; 


// nome = "Lana";


// var valorCurso = 550.42; 
// console.log(valorCurso + 10.00);

// var idade = 10; 
// console.log(++idade);




// pagina estatica: pagina sem interação
// usado muito para debugar um código
// Js não é tipado, como ele sabe o tipo? A partir do valor que voce colocar ele entende qual tipo é. 

//typeof diz qual o tipo da variavel

/**
String: Cadeia de Caracteres que fica dentro de aspas
Number: Numero
Boolean: tipo true or false, tipo lógico
Null: Quando queremos EXPLICITAMENTE dizer ao javascript que ela nao tem valor. A variavel é definida como objetct
Undefined: quando a variavel não está recebendo nada. Nesse caso, ela foi criada mas nao foi atribuido nenhum valor.
 */


// = é sinal para atribuição
//Javasc não exige que vc informe qual o tipo de informação que voce quer adicionar na variavel
// o ponto e virgula não é exigido para finalizar um comando
//armazena um espaço na memoria e guarda uma informação que varia
// variavel nunca começa com numeros, pode começar com $ ou _ 

 // console.log('hello, wolrd!');
        // var nome; 
        // nome = "Lana";
        // var valorCurso = 550.42; 
        // console.log(valorCurso + 10.00);
        // var idade = 10; 
        // console.log(++idade);

        //concatenação ou interpolação
        // Js é case sensitive, n e N são diferentes, por exemplo.
        // var firstName = "Camila";
        // var lastName  = "da Silva";

        //há duas maneiras de concatenar
        //+ Serve para Juntar, quando o js encontrar strings ele entende que deve juntar
        //A interpolação funciona usando crases `${nomeDaVariavel} ${nomeDaOutraVariavel}`
        // var nomeCompletoC = firstName + ' ' +lastName;
        // var nomeCompletoI = `${firstName} ${lastName}`; // mais recomendado

        // console.log(nomeCompletoI);
        // console.log(nomeCompletoC);

        //operadores relacionais
        /* == compara os valores, mas quando tem uma string com numero, por exemplo, ele nao cnosegue entender
           === compara os tipos 
           != compara se os valores são diferentes
           !== compara o valor e o tipo
           >= Maior ou igual que
           > maior que
           < menor que
           <=menor ou igual
        */

        // var val1 = +'10'; //operador unario faz conversão de tipo, exemplo, + '10' está forçando a conversao dessa string para numero. 
        // var val2 = 10; 

        // var comparar = val1 !== val2;
        
        //usando o unario, a soma dessas duas variaveis é possível, pois o val1 foi convertido antes da soma.
        // var soma = val1 + val2;
        // console.log(soma);


        // sempre que voce faz uma comparacao ele retorna um bool
        // console.log(comparar);

        /*truthy e Falsy
        se refere na forma como os valores são avaliados em contextos booleanos
        
        */ 
        // var contrato = true; 
        // console.log(!contrato); 


        //estrutura de seleção

        // var notaAluno = 10;
        // var nomeAluno = 'Andrey Bastos'
        // var faltaAluno = 10;

        //se o usuario/aluno tiver uma nota >= 7 então Aprovado
        //se menor que 7 então, reprovado 
        //se a nota >= 5
        //se faltas 


        //estrutura de seleção simples
        // if(notaAluno >= 7){
        //     console.log("Aprovado!");
        // }

        // //composta
        // if(notaAluno >= 7){
        //     console.log("Aprovado!");
        // }else{
        //     console.log("Reprovado!")
        // }

        // //encadeada
        //  if(!(notaAluno) >= 7){
        //     console.log("Aprovado!");
        // }else if(notaAluno >= 5){
        //     console.log("recuperação");
        // }
        // else{
        //     console.log("Resprovado!");
        // }

        //operadores logicos para mais de uma comparação

        // V && F = F

        //|| ou pelo menos uma deve ser verdadeira
        //&& E as duas devem ser verdadeiras
        //! Não inverte 

        // if(notaAluno >=7 && !(faltaAluno esse parenteses da preferencia) <= 5){
        //     console.log("Aprovado")
        
        
        //Condicional Ternario, ele faz um if e else com mais simplicidade
        // var resultado; 

        // resultado = notaAluno >= 7 ? 'Aprovado' : 'Reprovado' 

        // console.log(resultado);


        // como pegar dados de um usuário? 
        // OBS.: Não é um recurso mais utilizado no JS

        // var nomeDoCliente = prompt('digite seu nome: ')
        // var nomeDoCliente = prompt('digite seu sobrenome: ')
        // console.log(nomeDoCliente);
        
        //Estrutura Lexica
        /*
        
        Conjuntos de regras especificas da linguagem

        - Case Sensitive
        - Palavras reservadas, são por exemplo, prompt, if, var, etc. Mas com um _ antes é possível. 
        - Quando temos duas var com mesmo nome e valores diferentes, o valor da primeira é sobrescrito. 

        */

       //ex.: 
        // var contrato = 'Fechado'
        // var contrato = 'Sobrescreve'
        // let contrato = 'Fechado'

        //let não permite que duas variaveis se repitam. 
        // debugger;
        let contrato = 'Sobrescreve' 
        contrato = 'Aberto'

        //constantes serve para que os valores armazenados nao sejam alterados. 
        
        // const naoAltera = 'Olá'// geralente usado para valores que serão somente usados e nao alterados e executa mais rapido
        // naoAltera = 'Tchau'
        

        // console.log(naoAltera);

        //Estrutura de repetição

        //for
        
        //breakpoint é uma parada obrigatória, para que ele pare em determinada linha

  

        // for(let iteração = 0; iteração < 10; iteração ++ ){ // corpo do repeat
        //     console.log("Isso está e looping")
        // }

        //criamos uma variavel com valor inicial 0
        //Depois comparamos, se a variavel é menor que 10 
        //Depois pegamos a variavel e acrescemos 1 enquanto essa variavel estiver com valor menor que 10. 

        // let iteração = 0; 
        
        //Esse while precisa de logica para ele parar ou errada, ele executa o código infinitamente
        // while(iteração < 10){
        //     console.log('---------')
        //     console.log(iteração)

        //     iteração++;
        // }

        //arrays, estrutura de dado que nos permite estruturar mais de um valor por variável. 

        //ideal usar const em arrays. 
        //para imprimir somente um dos dados, colocamos pelo seu posicionamento, começando sempre do 0 dadosPessoais[2]

        // const dadosPessoais = [4000, 5000, 8000, 5000, 4000]; 
        // console.log(dadosPessoais.length); //length informa aquantidade de itens dentro do

        // for(let iteracao = 0; iteracao < dadosPessoais.length; iteracao++ ){ // corpo do repeat
        //     console.log(dadosPessoais[iteracao])

        //     if(dadosPessoais[iteracao] <= 4000){
        //         dadosPessoais[iteracao] = 7000;
        //     }

        //     console.log(dadosPessoais[iteracao])
        // }

        
    //     const dadosPessoais = [4000, 5000, 5000, '6200', 4000]; 
    //     //length informa aquantidade de itens dentro do

    //     for(let iteracao = 0; iteracao < dadosPessoais.length; iteracao++ ){ // corpo do repeat
    //         console.log(dadosPessoais[iteracao])

    //         if(dadosPessoais[iteracao] == 6200){
    //             console.log("encontrou")
    //             break;//para o looping
    //         }
    //     console.log(dadosPessoais[iteracao])
          
    //     }


    //Funções do Js 

    /*
    Se queremos por exemplo, calcular um imposto, precisamos calcular um valor e que será utilizado em diversos arquivos
    o calculo de imposto deveria ser universal de forma que possa ser utilizado em varios lugares

    Então podemos criar um metodos/funcao, imgine que toda vez que voce criar um arquivo precisa fazer oi calculo, chega uma hora que 
    no momento de fazer a manutenção fica ruim. 
    
    Para isso, podemos usar as funções, um trecho de código que é chamado em varios lugares para resolver uma tarefa ou problema
   

   */

    // 
   //  function calculoImposto(total, taxa){
   //    return total * taxa
   //    //console.log('ola'); nada funciona após o return pois o return finalza a função
   //  }

   //  const texto = calculoImposto(10, 0.2);
   //  console.log(texto)

    //Programação funcional, significa que podemos transportar uma função dentro de uma variavel

    //essas funções anonimas permitem que voce consiga enviar uma função por parametro dentro de uma outra funcção, chamamos de funções de callback

   
    


    // se eu quero que uma funçã9o me devolva alguma coisa eu coloca return, ela vai devolver algo para outra coisa
    //metodo é quando ele está dentro de um objeto 
    // quando não está dentro de um objeto ele é uma função, mudando apenas o escopo/contexto


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

// let interromper = true;

// while(interromper){
//     let nomeDoCliente = prompt("Digite seu nome: ")
//     let nomeDoProduto = prompt("Digite o nome do produto: ")
//     let qtdDoProduto = prompt("Digite a quantidade do produto: ")
//     let valorUnitario = prompt("Digite o valor do produto")
    
//     let totalCompra = qtdDoProduto * valorUnitario; 
    
//     console.log("#############################");
//     console.log(`Nome do Cliente: ${nomeDoCliente}`);
//     console.log(`Nome do Produto: ${nomeDoProduto}`);
//     console.log(`Valor Unitário: ${valorUnitario}`);
//     console.log(`Total da Compra: ${totalCompra}`);
//     console.log(`#############################`);
//     console.log("Obrigado e Volte Sempre =D");
//     interromper = confirm("deseja continuar?")

// }



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

// todo esse código poderia estar dentro do while, enquanto o teste for verdadeiro, fará o que está la dentro
// while(true){} para que ele pare é preciso incrementar uma logica


    