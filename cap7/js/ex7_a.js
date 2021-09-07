function categorizarAtleta () {
    var inNome = document.getElementById("inNome");
    var inIdade = document.getElementById("inIdade");
    var outResposta = document.getElementById("outResposta");
    var nome = inNome.value;
    var idade = Number(inIdade.value);
    if (nome == "" || idade == 0 || isNaN(idade)) {
        alert("Insira os dados corretamente");
        return;
    }
    var resposta = ""
    var traco = "";
    for (i = 0; i < nome.length ; i++) {
        if(nome.charAt(i) != " ") {
            traco += "-";
        } else {
            traco += " ";
        }
    }
    resposta = nome + "\n" + traco + "\nCategoria: " + categoria(idade);
    outResposta.textContent = resposta;
}

var btCategorizar = document.getElementById("btCategorizar");
btCategorizar.addEventListener("click", categorizarAtleta);

function categoria(idade) {
    var categoria = (idade <= 12) ? "Infantil" : ( idade <= 18 ) ? "Juvenil" : "Adulto";
    return categoria;
}