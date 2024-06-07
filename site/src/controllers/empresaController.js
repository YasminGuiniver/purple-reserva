var empresaModel = require("../models/empresaModel");

function cadastrar(req, res) {
    var nome = req.body.nomeEmpresaServer;
    var cnpjVar = req.body.cpnjEmpresaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cnpjVar == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        empresaModel.cadastrar(nome, cnpjVar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscaIdAcademia(req, res) {
    empresaModel.buscaIdAcademia().then(function (resultado) {
        res.status(200).json(resultado);
    })
}

module.exports = {
    cadastrar,
    buscaIdAcademia
}