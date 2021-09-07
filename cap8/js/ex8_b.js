function addCompra () {
    var inCompra = document.getElementById("inCompra");
    var compra = inCompra.value;
    if(compra == "") {
        alert("Insira o nome do produto");
        inCompra.focus()
        return;
    }
    if(localStorage.getItem("compras")) {
        var comprasLista = localStorage.getItem("compras") + ";" + compra;
        localStorage.setItem("compras", comprasLista);
        mostrarLista();
    } else {
        localStorage.setItem("compras", compra);
        mostrarLista();
    }
    inCompra.value = "";
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", addCompra);

function mostrarLista () {
    var outLista = document.getElementById("outLista");
    var lista = "Produtos Adicionados\n";
    lista += "-------------------------\n";
    if (!localStorage.getItem("compras")) {
        outLista.textContent = "";
    } else {
        var compras = localStorage.getItem("compras").split(";");
        compras.sort();
        for (i = 0; i < compras.length; i++) {
            lista += compras[i] + "\n";
        }
        outLista.textContent = lista;
    }
}

mostrarLista();

function limparLista () {
    if(confirm("Deseja confirmar a limpeza dos itens?")) {
        localStorage.removeItem("compras");
        mostrarLista();
    }   
}

btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparLista)