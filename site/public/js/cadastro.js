function retirarFormatacao(numeroFormatado) {
    return numeroFormatado.replace(/\D/g, '');
}

function cadastrar() {
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var emailVar = emailInput.value;
    var senhaVar = txtSenha.value;
    var confirmacaoSenhaVar = txtSenha_confirmation.value;
    var representanteEmpresaVar = inputRepresentante.value;
    var telefoneVar = retirarFormatacao(telefoneEmpresaInput.value);

    var nomeEmpresaVar = nomeEmpresaInput.value;
    var cnpjVar = retirarFormatacao(cnpjInput.value);

    // if (
    //     nomeVar == "" ||
    //     emailVar == "" ||
    //     senhaVar == "" ||
    //     confirmacaoSenhaVar == "" ||
    //     representanteEmpresaVar == "" ||
    //     telefoneVar == "" ||
    //     nomeEmpresaVar == "" ||
    //     cnpjVar == ""
    // ) {
    //     console.log("algo esta vazio")
    // }


    fetchEmpresa(nomeEmpresaVar, cnpjVar);
    // fetchUsuario(nomeVar, emailVar, senhaVar, telefoneVar, representanteEmpresaVar);

}


function fetchEmpresa(nomeEmpresaVar, cnpjVar) {
    // Enviando o valor da nova input
    fetch("/empresa/cadastrarEmpresa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeEmpresaServer: nomeEmpresaVar,
            cpnjEmpresaServer: cnpjVar
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                console.log("empresa cadastrada!")
                idAcademia = buscarFkAcademia();
                console.log(idAcademia)
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

function buscarFkAcademia() {
    fetch(`/empresa/buscaIdAcademia`, {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((id) => {
                console.log("função buscar",id[0].idAcademia);
                return
                });
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            });
}

function fetchUsuario(emailVar, senhaVar, telefoneVar, representanteEmpresaVar) {
    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            emailServer: emailVar,
            senhaServer: senhaVar,
            representanteServer: representanteEmpresaVar,
            telefoneServer: telefoneVar
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                cardErro.style.display = "block";

                mensagem_erro.innerHTML =
                    "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

                setTimeout(() => {
                    window.location = "index.html";
                }, "2000");

                limparFormulario();

            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}