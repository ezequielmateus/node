var http = require("http");

var server = http.createServer(function(requisicao, resposta){

    var req = requisicao.url;
    resposta.end("<h1>Valor na tela</h1>");

});

server.listen(3000);