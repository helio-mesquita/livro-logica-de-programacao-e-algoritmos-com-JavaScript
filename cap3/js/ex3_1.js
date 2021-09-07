function mediaAprovacao () {
    var inNome = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var outMedia = document.getElementById("outMedia");
    var outSituacao = document.getElementById("outSituacao");
    var media = (Number(inNota1.value) + Number(inNota2.value)) / 2;
    outMedia.textContent = "Média das notas: " + media.toFixed(1);
    if(media >= 7){
        outSituacao.textContent = "Parabéns, " + inNome.value + "! Você foi aprovado(a)";
        outSituacao.style.color = "blue";
    } else if(media >= 4){
        outSituacao.textContent = "Você está em exame";
        outSituacao.style.color = "green";
    } else {
        outSituacao.textContent = "Ops... Você foi reprovado!";
        outSituacao.style.color = "red";
    }
}

var btMedia = document.getElementById("btMedia");
btMedia.addEventListener("click", mediaAprovacao);
        
