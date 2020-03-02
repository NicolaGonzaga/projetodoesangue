// configurando o servidor
const express = require("express");
const server = express();

// configurar o servidor para apresentar arquivos estáticos //
server.use(express.static("public"));

// configurando o template engine
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
  express: server,
  noCache: true
});

// lista de doadores: array //
const donors = [
  {
    name: "Diego Fernandes",
    blood: "AB+"
  },
  {
    name: "Cleiton Souza",
    blood: "B+"
  },
  {
    name: "Robson Marques",
    blood: "O+"
  },
  {
    name: "Mayk Brito",
    blood: "A+"
  }
];

//  configurando a apresentação da página
server.get("/", function(req, res) {
  return res.render("index.html", { donors });
});

server.post("/", function(req, res) {
  return res.render("index.html", {});
});

//  ligar o servidor e permitir o acesso à porta 3000 //
server.listen(3000, function() {
  console.log("iniciei o servidor!");
});
