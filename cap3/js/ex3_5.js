function raizQuadrada () {
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");
    var numero = Number(inNumero.value);
    var raizNumero = Math.sqrt(numero);
    var raizDiferenca = raizNumero - Math.floor(raizNumero);
    if (inNumero.value == "" || isNaN(numero)) {
        alert("Insira um número válido");
        inNumero.focus();
        return;
    }
    if (raizDiferenca > 0) {
        outResposta.textContent = "Não há raiz exata para " + numero;
    } else {
        outResposta.textContent = "A raiz do número " + numero + " é " + raizNumero;
    }
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", raizQuadrada)