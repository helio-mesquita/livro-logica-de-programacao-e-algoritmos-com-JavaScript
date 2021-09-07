function promocao() {
    var inTitulo = document.getElementById("inTitulo");
    var inPreco = document.getElementById("inPreco");
    var outTitulo = document.getElementById("outTitulo");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");
    var entrada = Number(inPreco.value / 2);
    var parcela = entrada / 12;
    outTitulo.textContent = "Promoção: " + inTitulo.value;
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);
}
var gerarPromo = document.getElementById("btPromocao");
gerarPromo.addEventListener("click", promocao);