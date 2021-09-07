function montarTabela() {
    if(localStorage.getItem("jogoPalavra")) {
        var palavras = localStorage.getItem("jogoPalavra").split(";");
        var dicas = localStorage.getItem("jogoPalavra").split(";");
        
        var tbPalavras = document.getElementById("tbPalavras");
        var linha, col1, col2, col3;

        for (var i = 0; i < palavras.length; i++) {
            
            linha = tbPalavras.insertRow(-1);
            col1 = linha.insertCell(0);
            col2 = linha.insertCell(1);
            col3 = linha.insertCell(2);

            col1.textContent = palavras[i];
            col2.textContent = dicas[i];
            col3.innerHTML = "<input type='checkbox'>";
        }
    }
}

var ckMostrar = document.getElementById("ckMostrar");
ckMostrar.addEventListener("change", function () {
    if (ckMostrar.checked) {
        montarTabela();
        btExcluir.className = "btn btn-danger exibe";
    } else {
        location.reload();
    }
});

var ckTodos = document.getElementById("ckTodos");
ckTodos.addEventListener("change", function () {
    var tbPalavras = document.getElementById("tbPalavras");
    var ckExcluir = tbPalavras.getElementsByTagName("input");

    var status = ckTodos.checked;
    for (var i = 1; i < ckExcluir.length; i++) {
        ckExcluir[i].checked = status;
    }
});

function removerPalavras() {
    var tbPalavras = document.getElementById("tbPalavras");
    var ckExcluir = tbPalavras.getElementById("tbPalavras");
    
    var temSelecionado = false;

    for (var i = 1; i < ckExcluir.length; i++) {
        if (ckExcluir[i].checked) {
            temSelecionado = true;
            break;
        }
    }
    if (!temSelecionado) {
        alert("Não há palavras selecionadas para exclusão");
        return;
    }
    if(confirm("Confirma Exclusão das Palavras Selecionadas?")) {

        localStorage.removeItem("jogoPalavra");
        localStorage.removeItem("jogoDica");

        palavras = "";
        dicas = "";

        for (var i = 1; i < ckExcluir.length; i++) {
            if (!ckExcluir[i].checked) {
                palavras += tbPalavras.rows[i].cells[0].textContent + ";";
                dicas += tbPalavras.rows[i].cells[i].textContent + ";";
            }
        }
        if (palavras != "") {
            localStorage.setItem("jogoPalavra", palavras.substr(0, palavras.length - 1));
            localStorage.setItem("jogoDica", dicas.substr(0, dicas.length - 1));
        }

        for (i = ckExcluir.length - 1; i > 0; i--) {
            if (ckExcluir[i].checked) {
                tbPalavras.deleteRow(i);
            }
        }
        ckExcluir[0].checked = false;
    }   
}

var btExcluir = document.getElementById("btExcluir");
btExcluir.addEventListener("click", removerPalavras);