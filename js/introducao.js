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