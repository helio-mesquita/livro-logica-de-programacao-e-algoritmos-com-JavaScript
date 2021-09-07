function convHora() {
    var inHoraBrasil = document.getElementById("inHoraBrasil");
    var outHoraFranca = document.getElementById("outHoraFranca");
    var horaBrasil = Number(inHoraBrasil.value);
    var horaFranca = Number(inHoraBrasil.value) + 5;
    if (inHoraBrasil.value == "" || isNaN(horaBrasil)) {
        alert("Preencha o campo hora corretamente");
        inHoraBrasil.focus();
        return;
    }
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24;
    }
    outHoraFranca.textContent = "A hora na França é: " + horaFranca.toFixed(2) + " horas."
}

var btHoraFranca = document.getElementById("btHoraFranca");
btHoraFranca.addEventListener("click", convHora);
