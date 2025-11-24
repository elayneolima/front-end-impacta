(function(doc){
        const btn = doc.querySelector('[data-submit-btn="btn"]')
        const form = doc.getElementById('form-cliente')
        const nome = doc.getElementById('recipient-name');
        const mensagem = doc.getElementById('message-text')
        const avisoResposta = doc.querySelector('[data-resposta="mensagem"]')
        const cep = doc.getElementById('recipient-cep');
        const logradouro = doc.getElementById('recipient-logradouro');
        
        
        
        //poderia ser focus
        nome.addEventListener('blur', ()=>{
          const cepMemory =  localStorage.getItem('dados-form')
          const convertCepMemory = JSON.parse(cepMemory)
          logradouro.value = cepMemory.logradouro
          cep.value = cepMemory.cep

        })
        
        cep.addEventListener('keyup', (event) => {
            if(event.key === 'Enter'){
              buscaPorCep(event.target.value)
              console.log('chamada da api')
            }
           
        
         
        })

        //async + await
        async function buscaPorCep(cep){
          const cepMemory =  localStorage.getItem('dados-form')

          if(!cepMemory){
             const busca = await fetch(`https://viacep.com.br/ws/${cep}/json/`) // fetch espera uma str e retorna uma promisse (obj js que contem os dados que voltam do server)
             const dados = await busca.json()

             logradouro.value = dados.logradouro
             const json = JSON.stringify({cep: cep.value, logradouro: dados.logradouro})
             return; // se ela foi chamada uma vez, significa ja armazenou e nao precisa entrar mais
          }

          const convertCepMemory = JSON.parse(cepMemory)
          logradouro.value = cepMemory.logradouro
          cep.value = cepMemory.cep

         
      

                    //chave / valor
          localStorage.setItem('dados-form', json)
          //sesionStorage é para que a informação seja deletada quando a aba for deletada, nao guarda na sessão
          
          // conosle.log(cep)
          //await é um aguardar
        }


        btn.addEventListener('click', (event) => {
            event.preventDefault();
            if(validacao()){
              enviarFormulario(form, nome.value, mensagem.value)
            }
        
         
        })

        //o que está dentro de value é uma string!
        //&& nome.value.length <= 50
        function validacao(){

          console.log(nome.value);
          if (!nome.value){
            nome.classList.add('erro')
            return false
            // console.log('entrou!');
          }

          nome.classList.remove('erro')
          return true
          
        }
        nome.addEventListener('keypress', (event) =>{
          validacao()
        })

        function enviarFormulario(form, nome, mensagem){
          const xhr = new XMLHttpRequest()//essa func construtora é do proprio js, para requisisções
          // METODO / CAMINHO
          xhr.open('POST', 'http://localhost:3001/cliente')//serve para abrir uma conexão com o servidor


         //FORMATO JSON deve ser uma string ``, as propriedades precisam estar entre asas
         const objeto = {nome: nome, mensagem: mensagem}
         const json = JSON.stringify(objeto)//converte um objeto js em string json 
         
         //aguarda uma resposta do servidor
         xhr.onreadystatechange = function(){
          if (xhr.readyState === 4 && xhr.status === 200){
            
            //converte a string que chega em um opbjeto
            const dados = JSON.parse(xhr.responseText); 
            avisoResposta.innerHTML = dados.status;
            nome.value = ''
            mensagem.value = ''
            console.log(dados.status)// é onde fica guardada a informação quevem da response
            cep.value = ''
            logradouro.value = ''
          }
          else if (xhr.readyState === 4 && xhr.status === 400){
             console.log(xhr.responseText)
          }
         }
          xhr.setRequestHeader('Content-Type', 'application/json')
         
         //ENVIO FORMATO JSON
         //JSON É UM FORMATO DE ARQUIVOI PARA ENVIAR INFO PRO SERVIDOR PRO CLIENTE ETC. 
          xhr.send(json)
        }











        // const resp = {status: 'Dados cadastrados'}
        // console.log(resp.status)
        // let Pessoa = function(nome){
        //   this.nome = nome;
        // }

        //essa função de callback nao é executando dentro do objeto e sim em outro lugar
        //por este motivo ele se perde
        // Pessoa.prototype.getNome = function(){
            // let nome = this.nome;
        //     ['ana', 'pedro'].forEach(function(elemento){
        //       if (elemento == this.nome){
        //         console.log('Achei!')
        //       }
        //     }.bind(this)) // quando mandamos o this, ele reconehce na funcao
        // }

        // let pessoa = new Pessoa('ana')
        // pessoa.getNome()

  })(document)

