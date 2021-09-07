function verifTriangulo() {
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outVerificacao = document.getElementById("outVerificacao");
    var outTipo = document.getElementById("outTipo");
    var LadoA = Number(inLadoA.value);
    var LadoB = Number(inLadoB.value);
    var LadoC = Number(inLadoC.value);
    outVerificacao.textContent="";
    outTipo.textContent="";
    if (inLadoA.value == 0 || isNaN(LadoA)) {
        alert("Por favor, preencha todos os campos corretamente");
        inLadoA.focus();
        return
    }
    if (inLadoB.value == 0 || isNaN(LadoB)) {
        alert("Por favor, preencha todos os campos corretamente");
        inLadoB.focus();
        return
    }
    if (inLadoC.value == 0 || isNaN(LadoC)) {
        alert("Por favor, preencha todos os campos corretamente");
        inLadoC.focus();
        return
    }
    if (LadoA + LadoB < LadoC || LadoA + LadoC < LadoB || LadoC + LadoB < LadoA) {
        outVerificacao.textContent="Lados não podem formar um triângulo";
        return
    }
    if (LadoA == LadoB && LadoB == LadoC){
        outVerificacao.textContent="Lados podem formar um triângulo";
        outTipo.textContent="Tipo: Equilátero";
    } else if (LadoA == LadoB || LadoA == LadoC || LadoC == LadoB) {
        outVerificacao.textContent="Lados podem formar um triângulo";
        outTipo.textContent="Tipo: Isóceles";
    } else {
        outVerificacao.textContent="Lados podem formar um triângulo";
        outTipo.textContent="Tipo: Escaleno";
    }

}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verifTriangulo);