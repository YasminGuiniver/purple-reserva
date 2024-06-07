var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarEmpresa", function (req, res) {
    empresaController.cadastrar(req, res);
})

router.get("/buscaIdAcademia", function(req, res) {
    empresaController.buscaIdAcademia(req, res);
})

module.exports = router;