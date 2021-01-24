var express = require("express")();
express.set("view engine", "ejs");

express.get("/", function(req, res){
    res.send("<h1>Página principal</h1>");
})

express.get("/tecnologia", function(req, res){
    res.send("<h1>Página Tecnologia</h1>");
})
express.listen(3000, function(req, res){


});


// var http = require("http");

// var server = http.createServer(function(requisicao, resposta){

//     var req = requisicao.url;
//     resposta.end("<h1>Valor na tela</h1>");

// });

// server.listen(3000);