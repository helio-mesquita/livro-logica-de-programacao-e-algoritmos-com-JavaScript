function promo() {
    var inProd = document.getElementById("inProd");
    var inPreco = document.getElementById("inPreco");
    var outPromo = document.getElementById("outPromo");
    var outPreco = document.getElementById("outPreco");
    var valorTotal = Number(inPreco.value * 3);
    var precoPromo =  valorTotal - (inPreco.value / 2);
    var prod3 = precoPromo - Number(inPreco.value * 2);
    outPromo.textContent = inProd.value + " - Promoção: Leve 3 por R$: " + precoPromo.toFixed(2);
    outPreco.textContent = "O 3° produto custa apenas R$: " + prod3.toFixed(2);
}
    var btPromo = document.getElementById("btPromo");
    btPromo.addEventListener("click", promo);