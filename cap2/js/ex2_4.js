function conta() {
    var inPreco = document.getElementById("inPreco");
    var inConsumo = document.getElementById("inConsumo");
    var outPreco = document.getElementById("outPreco");
    var precoQuilo = Number(inPreco.value);
    var consumo = Number(inConsumo.value);
    var preco = (precoQuilo / 1000) * consumo;
    outPreco.textContent = "Valor a pagar R$: " + preco.toFixed(2);
}

var btPreco = document.getElementById("btPreco");
btPreco.addEventListener("click", conta);

