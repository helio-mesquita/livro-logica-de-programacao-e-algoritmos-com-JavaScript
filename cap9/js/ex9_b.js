function exibirPartesDoNome () {
    var inNome = document.getElementById("inNome");
    var nome = inNome.value;
    
    if(nome == "" || nome.lastIndexOf(" ") == -1) {
        alert("Insira o nome completo")
        inNome.focus();
        return;
    }

    gerarPartesDoNomeColorido(nome)
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirPartesDoNome)

function gerarPartesDoNomeColorido (nome) {
    var nomeCompleto = nome;
    var partesDoNome = nomeCompleto.split(" ");
    var outPartesDoNome = document.getElementById("outPartesDoNome")
    for (var i = 0; i < partesDoNome.length; i++) {
        var h3 = document.createElement("h3");
        var texto = document.createTextNode(partesDoNome[i]);
        h3.style.color = gerarCor();
        h3.appendChild(texto);
        outPartesDoNome.appendChild(h3)
    }
}

function gerarCor() {
    var r = Math.ceil(Math.random() * 255);
    var g = Math.ceil(Math.random() * 255);
    var b = Math.ceil(Math.random() * 255);
    var cor = "rgba(" + r + ", " + g + ", " + b + ", 1)"
    return cor;
}