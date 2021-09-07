function imc() {
    var inNome = document.getElementById("inNome");
    var inMasculino = document.getElementById("rbMasculino");
    var inFeminino = document.getElementById("rbFeminino");
    var inAltura = document.getElementById("inAltura");
    var outResposta = document.getElementById("outResposta");
    var nome = inNome.value;
    var masculino = inMasculino.checked;
    var feminino = inFeminino.checked;
    var altura = Number(inAltura.value);
    if (nome == "" || (masculino == false && feminino == false)){
        alert("Por favor, informe o nome e selecione o sexo...");
        inNome.focus();
        return;
    }
    if(altura == 0 || isNaN(altura)){
        alert("Por favor, informe a altura corretamente...");
        inAltura.focus();
        return
    }
    if (masculino){
        var pesoIdeal = 22*(altura**2);
    } else {
        var pesoIdeal = 21*(altura**2);
    }
    outResposta.textContent= nome + ": Seu peso ideal é " + pesoIdeal.toFixed(3) + " kg";
}
//Limpar conteúdo
function limparCampos(){
    document.getElementById("inNome").value = "";
    document.getElementById("rbMasculino").checked= false;
    document.getElementById("rbFeminino").checked= false;
    document.getElementById("inAltura").value= "";
    document.getElementById("outResposta").textContent= "";
    document.getElementById(inNome). focus();
}
//Atualizar campos através do atualizar
function limparCamposF5 (){
    location.reload();
    document.getElementById("inNome").focus
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", imc);
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCamposF5);

