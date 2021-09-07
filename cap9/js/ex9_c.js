function adicionarClube () {
    var inClube = document.getElementById("inClube");
    var clube = inClube.value;
    if (clube == "") {
        alert("Insira o nome do clube");
        inClube.focus();
        return
    }
    var div = document.getElementById("outClubes")
    var h5 = document.createElement("h5");
    h5.className = "aDireita italico";
    var texto = document.createTextNode(clube);
    h5.appendChild(texto);
    div.appendChild(h5);

    inClube.value = "";
    inClube.focus();
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarClube);

function montarTabelas () {
    var clubes = document.getElementById("outClubes").getElementsByTagName("h5");
    if (clubes.length % 2 != 0) {
        alert("O número de clubes é ímpar, acrescente mais um para completar a tabela");
        return;
    }
    var outTabela = document.getElementById("outTabela");
    var tabela = document.createElement("table");
    tabela.className = "table table-striped";
    var titulo = document.createElement("h3");
    var textoTitulo = document.createTextNode("Tabela de Jogos");
    outTabela.appendChild(titulo);
    titulo.appendChild(textoTitulo);
    outTabela.appendChild(tabela);
    for(var i = 0; i < clubes.length; i += 2) {
            var linha = tabela.insertRow();
            var celula1 = linha.insertCell();
            var celula2 = linha.insertCell();
            var texto1 = document.createTextNode(clubes[i].textContent);
            var texto2 = document.createTextNode(clubes[i+1].textContent);
            celula1.appendChild(texto1);
            celula2.appendChild(texto2);    
    }
    btMontarTabela.disabled = true;
    btAdicionar.disabled = true;
}

var btMontarTabela = document.getElementById("btMontarTabela");
btMontarTabela.addEventListener("click", montarTabelas);

var btNovosClubes = document.getElementById("btNovosClubes");
btNovosClubes.addEventListener("click", function () {
    location.reload()
})