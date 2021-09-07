function saque() {
    var inValor = document.getElementById("inValor");
    var outNota100 = document.getElementById("outNota100");
    var outNota50 = document.getElementById("outNota50");
    var outNota10 = document.getElementById("outNota10");
    var valor = Number(inValor.value);
    var nota100 = Math.floor(valor / 100);
    var nota50 = Math.floor((valor - (nota100 * 100)) / 50);
    var nota10 = (valor - (nota100 * 100) - (nota50 * 50)) / 10;
    if (inValor.value == "" || isNaN(valor)) {
        alert("Por favor, insira um número válido para o valor de saque");
        inValor.focus();
        return
    }
    if ((valor / 10) > Math.floor(valor / 10)) {
        alert ("Valor de saque indisponível, por favor escolha um valor de acordo com as notas disponíveis");
        inValor.focus();
        return
    }
    if (nota100 > 0) {
        outNota100.textContent= "Notas de 100 R$: " + nota100;
    }
    if (nota50 > 0) {
        outNota50.textContent= "Notas de 50 R$: " + nota50;
    }
    if (nota10 > 0) {
        outNota10.textContent= "Notas de 10 R$: " + nota10;
    }
}
var btExibir = document.getElementById("btExibir");
    btExibir.addEventListener("click", saque);