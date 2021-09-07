
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", function () {
    var inPreco = document.getElementById("inPreco");
    var outParcelas = document.getElementById("outParcelas");
    var preco = Number(inPreco.value);
    if (preco == 0 || isNaN(preco)) {
        alert("Preencha o valor corretamente");
        return;
    }
    var resposta = "Opções de Pagamento\n\n";
    for(i = 1; i <= 10; i ++) {
        resposta += i + "x de R$: " + (preco / i).toFixed(2) + "\n";
    }
    outParcelas.textContent = resposta;
});