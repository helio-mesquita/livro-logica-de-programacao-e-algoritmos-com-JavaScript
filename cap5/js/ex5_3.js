var carros = [];
function addCarros() {
    var inModelo = document.getElementById("inModelo");
    var inPreco = document.getElementById("inPreco");
    var modelo = inModelo.value;
    var preco = Number(inPreco.value);
    var outCarros = document.getElementById("outCarros");
    if (modelo == ""){
        alert("Por favor, insira o modelo do carro");
        inModelo.focus();
        return;
    }
    if (preco == 0 || isNaN(preco)){
        alert("Por favor, insira o preço do carro corretamente");
        inPreco.focus();
        return;
    }
    carros.push({ modelo: modelo, preco: preco})
    listarTodos();
}
function listarTodos() {
    var outCarros = document.getElementById("outCarros");
    var resposta = "";
        for (var i = 0; i < carros.length; i++) {
        resposta += carros[i].modelo + " - R$:" + carros[i].preco.toFixed(2) +"\n";
    }
    outCarros.textContent = resposta;   
}
function filtrarPreco() {
    var filtro = prompt("Qual o valor máximo de compra?");
    var filtroControle = false;
    var nFiltro = Number(filtro);
    var respostaFiltro = "";
    var outCarros = document.getElementById("outCarros");
    if (filtro == 0 || isNaN(filtro)) {
        alert("Por favor, insira um número válido")
    } else {
        for(var i = 0; i < carros.length; i++) {
            if(carros[i].preco <= filtro){
                respostaFiltro += carros[i].modelo + " - R$:" + carros[i].preco +"\n";
                filtroControle = true;
            }
        }
    }
    if (respostaFiltro == ""){
        alert("Não encontramos nenhum carro com esse valor");
    } else {
    outCarros.textContent = "Carros até o valor de R$: " + nFiltro.toFixed(2) + "\n ---------------------------------------- \n" + respostaFiltro;
    }
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", addCarros);
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarTodos);
var btFiltrar = document.getElementById("btFiltrar");
btFiltrar.addEventListener("click", filtrarPreco);