let express = require('express'); 
let cors = require('cors')
// let cors = require('cors')
const fs = require('fs');
let app = express();

const host = 'localhost';
const port = '3001';

app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use(express.json())

app.get('/hello', (request, response) => {
    // response.send('<h1> Hello World!</h1>');
});

app.get('/cliente', (request, response) => {
    console.log(request.query);
    fs.writeFileSync('teste.json', JSON.stringify(request.query));
    response.redirect('http://127.0.0.1:5501/index.html?sucesso');
});

app.post('/cliente', (request, response) => {
    console.log("Dados: ", request.body);
    fs.writeFileSync('teste.json', JSON.stringify(request.query));
    // response.redirect('http://127.0.0.1:5501/index.html?sucesso');
    response.json({status: 'sucesso'})//erro de CORS, enviando requisisções para endereços diferentes
});

app.listen(port, host, function(){
    console.log(`Servidor em execução http://${host}:${port}`);
});
