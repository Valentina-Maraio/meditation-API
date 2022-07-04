/*var http = require("http");
var server = http.createServer(function (call, response) {
  response.writeHead(200, {"Content-type": "text/html",});
  response.write('<h3>Basic server with Node</h3> <p>Ciao mi vedi?</p> <p>Si! Adesso nodemon funziona correttamente</p>' );
  console.log('call web');
  response.end();
});

server.listen(8000);
console.log('Execute a local server with node')*/

//invocare la libreria
var express = require('express');
var mysql = require('mysql');

var app = express();
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'meditation_db',
    //parametri dal db 
    user: '',
    password: ''
});

app.get('/', function(call, response){
    response.send('Testo inviato dal server')
})

app.get('/saluti', function(call, response){
    response.send('Ciao dalla pagina di saluti')
})

app.listen(8000, function(call, response){
    console.log("Hello Valentina")
})

