var clubes = [];
function addClube(){
    var inClube = document.getElementById("inClube");
    if(inClube.value == ""){
        alert("Por favor, insira o nome do clube");
        inClube.focus()
        return;
    }
    clubes.push(inClube.value);
    listarTodos();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", addClube);

function listarTodos (){
    if (clubes.length == 0){
        alert("Nenhum clube cadastrado");
        return;
    }
    var resposta = "";
    for(var i = 0; i < clubes.length; i++){
        resposta += (i + 1)+". "+clubes[i] + "\n";
    }
    document.getElementById("outResposta").textContent = resposta
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarTodos);

function mostrarTabela() {
    if(clubes.length % 2 != 0){
        alert("Número ímpar de clubes, adicione mais um para completar a tabela");
        return;
    }
    var copia = clubes.slice()
    var resposta = "";
    for(var i = 0; i < clubes.length/2; i++) {   
        resposta += copia[0] + " x " + copia[copia.length - 1] + "\n";
        copia.pop();
        copia.shift();
    }
    document.getElementById("outResposta").textContent = resposta;
}
var btTabela = document.getElementById("btTabela");
btTabela.addEventListener("click", mostrarTabela);

function limpar() {
    clubes = [];
    document.getElementById("outResposta").textContent = "";
    document.getElementById("inClube").value = "";
    document.getElementById("inClube").focus();
}
btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limpar);