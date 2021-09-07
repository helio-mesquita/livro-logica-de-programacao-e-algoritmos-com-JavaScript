var numeros = [];
function addNumero () {
    var inNumero = document.getElementById("inNumero");
    var numero = Number(inNumero.value);
    var resposta = ""
    if (isNaN(numero)) {
        alert("Por favor, insira um número");
        inNumero.focus();
        return;
    }
    numeros.push(numero);
    resposta = "Números: " + numeros.join(", ");
    document.getElementById("outNumeros").textContent = resposta;
    inNumero.value = "";
    inNumero.focus()
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", addNumero);

function verificarOrdem () {
    if (numeros.length == 0) {
        alert("Não há números cadastrados");
        return;
    }
    var ultimoNumero = numeros.length - 1;
    var penultimoNumero = numeros.length - 2;
    var flag = 0;
    for(var i = 0; i < numeros.length; i++)
     if (numeros[ultimoNumero] - numeros[penultimoNumero] < 0) {
        flag++;
     }
     if (flag != 0) {
        document.getElementById("outResposta").textContent = "Atenção... Números não estão em ordem crescente";
    } else { 
        document.getElementById("outResposta").textContent = "Os números estão em ordem crescente";
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarOrdem);

function limpar () {
    numeros = [];
    document.getElementById("outResposta").textContent = "";
    document.getElementById("outNumeros").textContent = "";
    document.getElementById("inNumero").value = "";
    inNumero.focus()
}
document.getElementById("btLimpar").addEventListener("click", limpar);

