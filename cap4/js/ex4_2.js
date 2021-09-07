function numerosDecrescentes() {
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");
    var numero = Number(inNumero.value);
    if (inNumero.value == 0 || isNaN(numero)) {
        alert("Digite um número válido");
        inNumero.focus();
        return
    }
    var resposta = "";
    for (var i = numero; i > 1; i--) {
        resposta = resposta + i + ", ";
        }
        resposta = resposta + i + ". ";
    
    outResposta.textContent="Entre " + numero + " e 1: "+ resposta;
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", numerosDecrescentes);