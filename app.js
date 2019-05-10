const express = require('express');//Vou utilizar as rotas do express
const bodyParser = require('body-parser');//necessário para usar post
const mysql = require('mysql');
const app = express();//tem métodos como get, post...
app.use(bodyParser.urlencoded({ extended: true }))//Se eu trabalahr com arquivo no padrão urlencodeed
//ele vai aplicaar o middleware que vai fazer um parser que vai transformar em um objeto


//var path = require('path');



//-----------------------------------------criando conexão-----------------------------------------//
const db = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'metas'
});

db.connect( (err)  => {//Conectando
        if(err) throw err;
        console.log('MySQL conectado...');
});


/*app.get('/', function(req, res) {
        res.sendFile(path.join("C:/wamp64/www/MetaSite/public/index.html"));
});*/

//-----------------------------------------Trabalhando com as rotas-----------------------------------------//
//Fazendo Select
app.get('/select', (req, res) => {
        let sql = "SELECT * FROM tarefas";
        db.query(sql, (err, result) => {//executa a query e dps faz uma callback 
                if(err) throw err;
                res.send(result);//envia pro browser
        })
})

//Inserindo nova Tarefa
app.post('/insere', (req, res) => {//o titulo eu irei receber na url
        let post = 
                {titulo: req.body.titulo, 
                descricao: req.body.descricao, 
                grau: req.body.urgencia, 
                tipoRealizacao: req.body.tipoTarefa, 
                repeticoes: req.body.numeroRepeticoes
                }
        let sql = 'INSERT INTO tarefas SET ?';//o ? será substituido pelo que vier na variável post ali abaixo
        let query = db.query(sql, post, (err, result) => {
                if(err) throw err;
                res.send("Post added");//envia pro browser
        })
})


app.listen('3000', () => { console.log("Server iniciado") } );//startei o server