function exibirVelas () {
    var inIdade = document.getElementById("inIdade");
    var idade = Number(inIdade.value);
    if ( idade <= 0 || idade > 120 || isNaN(idade)) {
        alert("Insira uma idade entre 1 e 120");
        inIdade.focus()
        return;
    }
    var outVelas = document.getElementById("outVelas");
    var idadeString = idade.toString();
    for (var i = 0; i < idadeString.length; i++) {
        gerarVelas(Number(idadeString.charAt(i)), outVelas);
    }
    btExibir.disabled = true;

}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirVelas)

function gerarVelas (idade, pai) {
    for (i = 0; i <= 9; i++) {
        if ( i == idade){
            var vela = document.createElement("img");
            vela.src = "img/" + idade + ".jpg";
            vela.className = "imgProg";
            vela.textoAlt = idade;
            pai.appendChild(vela);
        }
    }
}

btNovasVelas = document.getElementById("btNovasVelas")
btNovasVelas.addEventListener("click", function(){
    location.reload();
});