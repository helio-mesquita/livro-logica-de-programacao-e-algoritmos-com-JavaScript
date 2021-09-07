function cadastrarPalavra() {
    var inPalavra = document.getElementById("inPalavra");
    var inDica = document.getElementById("inDica");
    var palavra = inPalavra.value;
    var dica = inDica.value;

    if (palavra == "" || dica == "" || palavra.indexOf(" ")>= 0) {
        alert("Informe uma palavra válida (sem espaços) e sua dica correspondente");
        inPalavra.focus();
        return;
    }
    if (localStorage.getItem("jogoPalavra")) {
        localStorage.setItem("jogoPalavra", localStorage.getItem("jogoPalavra") + ";" + palavra);
        localStorage.setItem("jogoDica", localStorage.getItem("jogoDica") + ";" + dica);
    } else {
        localStorage.setItem("jogoPalavra", palavra);
        localStorage.setItem("jogoDica", dica);
    }
    if (localStorage.getItem("jogoPalavra")) {
        alert("Ok! Palavra " + palavra + " Cadastrada com Sucesso");
    }

    inPalavra.value = "";
    inDica.value = "";
    inPalavra.focus();
}

var btCadastrar = document.getElementById("btCadastrar");
btCadastrar.addEventListener("click", cadastrarPalavra);