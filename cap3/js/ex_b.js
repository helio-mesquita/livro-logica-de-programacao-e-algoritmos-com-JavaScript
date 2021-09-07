function verifVelo() {
    var inVelPermitida = document.getElementById("inVelPermitida");
    var inVelCondutor = document.getElementById("inVelCondutor");
    var outSituacao = document.getElementById("outSituacao");
    velCondutor = Number(inVelCondutor.value);
    var semMulta = Number(inVelPermitida.value);
    var multaGrave = semMulta + (semMulta * 0.2);
    if(inVelCondutor.value == "" || isNaN(velCondutor)){
        alert("Por favor, insira a velocidade do condutor");
        inVelCondutor.focus;
        return
    }
    if(inVelPermitida == "" || isNaN(semMulta)){
        alert("Por favor, insira a velocidade do condutor");
        inVelPermitida.focus;
        return
    }
    if (velCondutor <= semMulta){
        outSituacao.textContent="Sem Multa";
    } else if(velCondutor >= multaGrave){
        outSituacao.textContent="Multa Grave";
    } else {
        outSituacao.textContent="Multa Leve";
    }
}
var btSituacao = document.getElementById("btVerificar");
btSituacao.addEventListener("click", verifVelo);