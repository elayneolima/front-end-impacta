function calculoTotalDaCompra (quantidade, valorProduto, imposto = null){
        const totalDaCompraSemImposto = quantidade * valorProduto; //preciso dar retorno uma vez que agora temos um if para o total com imposto!

          if(imposto){
                const total =  totalDaCompraSemImposto + totalDaCompraSemImposto * imposto;
                return total
          }
        return totalDaCompraSemImposto
}

