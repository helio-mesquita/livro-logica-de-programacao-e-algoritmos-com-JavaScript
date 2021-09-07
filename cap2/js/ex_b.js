function conta() {
    var inPreco = document.getElementById("inPreco");
    var inTempo = document.getElementById("inTempo");
    var outConta = document.getElementById("outConta");
    var conta = Math.ceil(Number(inTempo.value) / 15) * Number(inPreco.value);
    outConta.textContent = "Valor a pagar R$: " + conta.toFixed(2);
}

var btConta = document.getElementById("btConta")
btConta.addEventListener("click", conta);