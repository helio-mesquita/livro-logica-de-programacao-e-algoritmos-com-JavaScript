var erros = [];
var sorteado = Math.floor(Math.random() * 100) + 1;
const chances = 6;
var dicas = "";

function apostarNumero(){
    var inNumero = document.getElementById("inNumero");
    var numero = Number(inNumero.value);
    if(numero <= 0 || numero>100 || isNaN(numero)){
        alert("Insira um número válido");
        inNumero.focus();
        alert
    }
    var outDica = document.getElementById("outDica");
    var outErros = document.getElementById("outErros");
    var outChanches = document.getElementById("outChances");
    if (numero == sorteado) {
        alert("Parabéns, você acertou o número!");
        btApostar.disabled = true;
        btJogar.className = "exibe";
        outDica.textContent = "Parabéns! Número sorteado: " + sorteado;
    } else { 
        if (erros.indexOf(numero) >= 0) {
            alert("Você já apostou o número "+ numero +". Tente outro...");
        } else {
            erros.push(numero);
            var numErros = erros.length;
            var numChances = chances - erros.length;
            outErros.textContent= numErros + " (" + erros.join(", ") + ")";
            outChanches = numChances;
            if (numChances == 0) {
                alert("Suas chances acabaram...");
                btApostar.disabled = true;
                btJogar.className = "exibe";
                outDica.textContent = "Game over!! Número Sorteado: " +sorteado;
            } else {
                var dica = numero < sorteado ? "maior" : "menor";
                dicas = dica;
                outDica.textContent = "Dica: tente um número " + dica + " que " + numero;
            }
        }
    }
    inNumero.value = "";
    inNumero.focus();
}

function AUTO(){
    var inNumero = document.getElementById("inNumero");
    var outDica = document.getElementById("outDica");
    var acrescimo = 50;
    var base = 50;
    for(var i = 0; i < chances; i++) {
        inNumero.value = base;
        apostarNumero();
        if(inNumero.value == sorteado){
            return;
        } else {
            if (dicas == "maior"){
                base += Math.floor(acrescimo / 2);
            } else {
               base -= Math.floor(acrescimo / 2);
            }
        } 
        acrescimo = Math.floor(acrescimo/2);
    }
}

var btAuto = document.getElementById("btAuto");
btAuto.addEventListener("click", AUTO);

var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", apostarNumero);

function jogarNovamente() {
    location.reload();
}
var btJogar = document.getElementById("btJogar");
btJogar.addEventListener("click", jogarNovamente);