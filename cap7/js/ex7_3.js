function classificarCarro (ano) {
    var anoAtual = new Date().getFullYear();
    if (ano == anoAtual) {
        return "Novo";  
    } else if (anoAtual - ano <= 2) {
        return "Seminovo";
    } else {
        return "Usado";
    }
}
function CalcPrecoFinal(situacao, preco) {
    var precoFinal = 0;
    if (situacao == "Novo") {
        precoFinal = preco + (preco * 0.08);
    } else {
        precoFinal = preco + (preco * 0.1);
    } 
    return precoFinal;
    
}

function classCarroCalcPreco () {
    var inVeiculo = document.getElementById("inVeiculo");
    var inAno = document.getElementById("inAno");
    var inPrecoProp = document.getElementById("inPrecoProp");
    var outClass = document.getElementById("outClass");
    var outPrecoVenda = document.getElementById("outPrecoVenda");
    var veiculo = inVeiculo.value;
    var ano = Number(inAno.value);
    var precoProp = Number(inPrecoProp.value);
    if (veiculo == 0  || ano == 0 || isNaN(ano) || precoProp == 0 || isNaN(precoProp)){
        alert("Insira os dados corretamente");
        return
    }
    var situacao = classificarCarro(ano);
    var precoFinal = CalcPrecoFinal(situacao, precoProp);
    outClass.textContent = veiculo + " - " + situacao;
    outPrecoVenda.textContent = "Preço de venda R$: " + precoFinal.toFixed(2);
}

var btCalcClass = document.getElementById("btCalcClass");
btCalcClass.addEventListener("click", classCarroCalcPreco);