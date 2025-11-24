
//procurar entender porque nesse caso o objeto construtor foi a melhor opção
(function(doc, window){

    'use strict'
    const ActiveItem = function(seletorLink, parentItens, linkActive){
    this.item = doc.querySelectorAll(seletorLink)
    this.parentItens = parentItens
    this.linkActive = linkActive

    } 

    ActiveItem.prototype.getItens= function() { 
        let parentItens = this.parentItens;
        let linkActive = this.linkActive
        this.item.forEach(function(element, index){
            element.addEventListener('click', event => {
              
                const link = event.target.closest(parentItens)
                const convertToArray = Array.from(link.children)
                

                convertToArray.forEach((element) => {
                    element.firstElementChild.classList.remove(linkActive)
                })
                //$0. // seleciona o elemento clicado
                //acessa o elemento pai
                //closeest('.nomeDaClasseParaOndeQuerIr')
                //lastElementChild ou firstElementChield
                //children traz uma lista com todos os filhos

                
              
                event.target.classList.add(linkActive)// mostra o que voce clicou
            })
        })
    }

        
    let active = new ActiveItem('[data-clean="item"]', '.menu-itens', 'active'); // active aponta pro objeto ActiveItem
    window.ActiveLink = ActiveItem;

    // let activeBtn = new ActiveItem('.btn-green')
    // console.log(activeBtn.item)
    
})(document, window)