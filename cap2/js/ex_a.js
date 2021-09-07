function promo() {
    var inMed = document.getElementById("inMed");
    var inPreco = document.getElementById("inPreco");
    var outPromo = document.getElementById("outPromo");
    var outPreco = document.getElementById("outPreco");
    var preco = Number(inPreco.value);
    var promo = Math.floor(preco * 2);
    outPromo.textContent = "Promoção de " + inMed.value;
    outPreco.textContent = "Leve 2 por apenas R$: " + promo.toFixed(2);
}

var btPromo = document.getElementById("btPromo");
btPromo.addEventListener("click", promo);