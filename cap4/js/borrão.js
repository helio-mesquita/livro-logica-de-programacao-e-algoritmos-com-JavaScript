function gerarBlocos() {
    var inLinhas = document.getElementById("inLinhas");
    var inColunas = document.getElementById("inColunas");
    var outBloco = document.getElementById("outBloco");
    var linhas = Number(inLinhas.value);
    var colunas = Number(inColunas.value);
    if(inLinhas.value == 0 || isNaN(linhas)) {
        alert("Por favor, digite um número válido de linhas");
        inLinhas.focus();
        return;
    }
    if(inColunas.value == 0 || isNaN(colunas)){
        alert("Por favor, digite um número válido de colunas");
        inColunas.focus();
        return;
    }
    var resposta = "";
    for(var i = 0; i < linhas; i++){
        for(var x = 0; x < colunas; x++){
            resposta += "#";
        }
        resposta += "\n";
    }
    outBloco.textContent= resposta;
}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarBlocos);
