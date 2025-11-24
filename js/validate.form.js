(function(doc){
        const btn = doc.querySelector('[data-submit-btn="btn"]')
        const form = doc.getElementById('form-cliente')
        const nome = doc.getElementById('recipient-name');
        const mensagem = doc.getElementById('message-text')
        const avisoResposta = doc.querySelector('[data-resposta="mensagem"]')

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
         const objeto = {nome : nome, mensagem: mensagem }
         const json = JSON.stringify(objeto)//converte um objeto js em string json 
         
         //aguarda uma resposta do servidor
         xhr.onreadystatechange = function(){
          if (xhr.readyState === 4 && xhr.status === 200){
            
            //converte a string que chega em um opbjeto
            const dados = JSON.parse(xhr.responseText); 
            avisoResposta.innerHTML = dados.status;
            console.log(dados.status)// é onde fica guardada a informação quevem da response
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

  })(document)

