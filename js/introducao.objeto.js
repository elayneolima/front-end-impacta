let Pessoa = {
    nome: 'Paula',
    idade: 25,
    printDados: function(){
        let nome = this.nome // o this referencia o objeto diretamente, no nosso caso Pessoa. Então ele pega exatamente o que está armazenado em nome: dentro do objeto pessoa :)
        let idade = this.idade
        console.log(`Nome: ${nome}, Idade: ${idade}`)
        
    }, 
    endereco: [{logradouro: 'rua josé torres'}, {numero: 141}, {}]
    
};

if (Pessoa?.endereco[1]?.logradouro){
    console.log('Existe endereço e existe logradouro na posição 1!')
};


 
let Pet = function(nome, idade){
    this.nome = nome // propriedade nome que recebe como parametro
    this.idade = idade 
}

//podemos adcionar uma herança! 
Pet.prototype.getNome = function(){
    console.log(this.nome)
}

let rex = new Pet ('Rex', 10)
console.log(rex)

let sophia = new Pet ('Sophia', 2)
console.log(sophia)


/*
HERANÇA:

Objeto veiculo: Tem cor, placa, rodas
A partir do objeto veiculo podemos criar outros objetos
como Carro, Caminhão, Moto e cada uma deles podem tem caracteristicas especificas
ISSO SE CHAMA HERANÇA

No JS chamamos isso de Prototype, ou portotipagem. 

ex.: Criamos um objeto chamado Pet, instanciamos exibe o portotype. O prototype significa que ele 
herdou caracteristicas de outro objeto! 

Poderiamos por exemplo imprimir as prorpriedades

console.log(pet.)
*/ 

let teste = [10, 20] // o js transforma o array em objeto isso porque o array herda metodos 
console.log(teste.join('-'))




//quando damos o new, estamos armazenando uma referncia pra memora onde ele fica armazenado
// A variavel pet está referenciando o objeto Pet, um apontamento para pet. 

let x = 10; 
let y = x; 

// se o valor de x alterar o valor, a y nao altera mais se x altera para 12, y continuua com 11
// se fossem objetos, quando mudassem x y tb mudaria;



Pessoa.printDados()
console.log(Pessoa)


// let x = Pessoa;
// x.idade = 8;
// console.log(x) // recebe o endereço do objeto

// let y = x;
// console.log(y) // tem o mesmo endereço do objeto

// Pessoa.printIdade() ; 

// Pessoa.peso = '90'
// Pessoa.printNome = function(){
//     console.log(Pessoa.nome)
// }



// console.log(Pessoa )

// let nome = Pessoa.nome;
// console.log(nome);

// let idadep = Pessoa ['idade']
// console.log(idadep)