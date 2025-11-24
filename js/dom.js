
(function(doc){

    const img = doc.querySelectorAll('.img')
    console.dir(img)

    // img.forEach // foreach nao precisamos fazer incremento, ele ja sabe que tem que fazer isso. 

    img.forEach((elemento) => {

            elemento.addEventListener('mouseover', event =>  { 
            event.target.src = 'images/cad3.svg'               // estou dizendo para pegar a imanha imagem com o target e alterar o src! 
            elemento.classList.add('borda-10')// queremos que ele coloque
        })
    
            elemento.addEventListener('mouseout', function callback(event){
            event.target.src = 'images/card1.svg'
            elemento.classList.remove('borda-10')//remove a classe 
        })


       
    }) // aqui precisamos que passe somente pelo elemento!
    
      //elemento -> passa pelas 3 imagens e essa variavel guarda a prorpia imagem
      //index é o numero que é a posição da imagem
      //mouseout
      // o listener espera uma função de callback! então ao dizer quao evento queremos, precisamos passar o que será executado
                                                               // console.dir(event.target) // objeto event tem metodos e dados a respeito do objeto a qual ele está relacionado (mouse event)
                                                               // target é o objeto img, se abrimos o target, podemos visualizar informações da imagem!
        
 
})(document) // passando o document como parametro para reduzir o nome no sletor de elementos.