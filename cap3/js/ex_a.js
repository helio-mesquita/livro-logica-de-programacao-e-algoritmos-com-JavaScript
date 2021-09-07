function parImpar () {
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");
    var numero = Number(inNumero.value);
    if (numero % 2 != 0) {
        outResposta.textContent = "O número " + numero + " é ímpar";
    } else {
        outResposta.textContent = "O número " + numero + " é par";
    }
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", parImpar);