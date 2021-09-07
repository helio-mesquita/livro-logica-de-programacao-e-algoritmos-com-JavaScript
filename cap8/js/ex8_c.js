function addServico () {
    var inServicoVeiculo = document.getElementById("inServicoVeiculo");
    var servicoVeiculo = inServicoVeiculo.value;
    if(servicoVeiculo == "") {
        alert("Insira o serviço e o modelo do veículo");
        inServicoVeiculo.focus();
        return;
    }
    if (localStorage.getItem("servicos")) {
        var servicos = localStorage.getItem("servicos");
        servicos +=  ";" + servicoVeiculo;
        localStorage.setItem("servicos", servicos);
    }else {
        localStorage.setItem("servicos", servicoVeiculo)
    }
    inServicoVeiculo.value = "";
    mostrarLista()
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", addServico);

function mostrarLista () {
    var outContador = document.getElementById("outContador");
    var outServicos = document.getElementById("outServicos");
    if (localStorage.getItem("servicos")) {
        var servicos = localStorage.getItem("servicos").split(";");
        outContador.textContent = "Serviços Pendentes: " + servicos.length;
        outServicos.textContent = servicos[0]
    } else {
        outContador.textContent = "Serviços Pendentes: 0";
        outServicos.textContent = "";
    }
}

mostrarLista ();

function executarServico() {
    if (!localStorage.getItem("servicos")) {
        alert("Não há serviços cadastrados");
        return;
    } else {
        var servicos = localStorage.getItem("servicos").split(";");
        if (servicos.length == 1) {
            localStorage.removeItem("servicos")
        } else {
        servicos.shift();
        var servicosAtualizado = servicos.join(";");
        localStorage.setItem("servicos", servicosAtualizado);
        }
    }
    mostrarLista ();
}

var btExecutar = document.getElementById("btExecutar");
btExecutar.addEventListener("click", executarServico);