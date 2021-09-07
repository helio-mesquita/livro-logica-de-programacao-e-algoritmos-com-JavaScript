function exibirConvenios () {
    var inConvenio = document.getElementById("inConvenio");
    var convTitulo = document.getElementById("convTitulo");
    if (rbSim.checked) {
        convTitulo.className = "exibe";
    } else {
        convTitulo.className = "oculta";
    }
}
var rbSim = document.getElementById("rbSim");
rbSim.addEventListener("change", exibirConvenios);

var rbNao = document.getElementById("rbNao");
rbNao.addEventListener("change", exibirConvenios);

function calcularDesconto (valor) {
    var inConvenio = document.getElementById("inConvenio");
    if(rbSim.checked){
        if (inConvenio.value == "amigoDosAnimais") {
            return valor * 0.2;
        } else {
            return valor * 0.5;
        }
    } else {
        return valor * 0.1;
    }
}

function gerarResposta () {
    var inValor = document.getElementById("inValor");
    var valor = Number(inValor.value);
    var outDesconto = document.getElementById("outDesconto");
    var outPagamento = document.getElementById("outPagamento");
    if (valor == 0 || isNaN(valor)){
        alert("Insira o valor da conta");
        return;
    }
    var desconto = calcularDesconto(valor)
    outDesconto.textContent = "Desconto R$: " + desconto.toFixed(2);
    outPagamento.textContent = "A pagar R$: " + (valor - desconto).toFixed(2);
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", gerarResposta);

