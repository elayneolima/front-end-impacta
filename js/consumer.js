(function(activeLink){
    const active = new activeLink(
        '[data-clean="item"]',
         '.menu-itens',
          'active'
        )
    active.getItens()
})(window.ActiveLink)