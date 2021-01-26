var express = require("./config/server");

// var routerNoticia = require("./app/routes/noticias")(express);
// var routerMain = require("./app/routes/index")(express);
// var routerForm = require("./app/routes/formulario_inclusao_noticia")(express);




express.listen(3000, function(req, res){
    console.log("Servidor Rodando");

});


// var http = require("http");

// var server = http.createServer(function(requisicao, resposta){

//     var req = requisicao.url;
//     resposta.end("<h1>Valor na tela</h1>");

// });

// server.listen(3000);