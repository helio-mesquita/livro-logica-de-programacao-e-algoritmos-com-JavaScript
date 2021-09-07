function parquimetro(){
    var inValor = document.getElementById("inValor");
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outTroco");
    var valor = Number(inValor.value);
    var min30 = 1;
    var min60 = 1.75;
    var min120 = 3;
    outTempo.textContent = "";
    outTroco.textContent = "";
    if (inValor.value == 0 || isNaN(valor)){
        alert("Por favor, preenchar o compo valor corretamente");
        inValor.focus();
        return
    }
    if(valor < min30){
        alert("Valor inválido. Por favor insira um valor acima de R$ 1,00");
        inValor.focus();
        return
    }
    if (valor >= min120) {
        var troco = valor - min120;
        outTempo.textContent="Tempo: 120 min"
        if (troco > 0) {
            outTroco.textContent ="Troco R$: "+troco.toFixed(2);
        }
    } else if (valor >= min60) {
        var troco = valor - min60;
        outTempo.textContent="Tempo: 60 min"
        if (troco > 0) {
            outTroco.textContent ="Troco R$: "+troco.toFixed(2);
    }
    } else  {
        var troco = valor - min30;
        outTempo.textContent="Tempo: 30 min"
        if (troco > 0) {
            outTroco.textContent ="Troco R$: "+troco.toFixed(2);
    }
    }
}
var btDeposito = document.getElementById("btDeposito");
btDeposito.addEventListener("click", parquimetro);