function validarNome () {
    var inNome = document.getElementById("inNome");
    var nome = inNome.value;
    if(nome.indexOf(" ") == -1) {
        return false;
    } else {
        return true;
    }
}

function obterSobrenome () {
    var inNome = document.getElementById("inNome");
    var nome = inNome.value;
    var ultimoEspaco = nome.lastIndexOf(" ");
    var sobreNome = (nome.substr(ultimoEspaco + 1)).toLowerCase();
    return sobreNome; 
}

function contarVogais () {
    var inNome = document.getElementById("inNome");
    var nome = inNome.value;
    var vogais = 0;
    for(var i = 0; i < nome.length; i++) {
        if (nome.charAt(i) == "a" || nome.charAt(i) == "e" || nome.charAt(i) == "i" || nome.charAt(i) == "o" || nome.charAt(i) == "u" ) {
            vogais++;
        }
    }
    if (vogais < 10) {
        vogais = "0" + vogais;
    }
    return vogais;
}

function gerarSenha () {
    var outSenha = document.getElementById("outSenha");
    if (!validarNome()) {
        alert("Insira o nome completo");
        return;
    }
    var resposta = obterSobrenome() + contarVogais();
    outSenha.textContent = resposta;
}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarSenha);