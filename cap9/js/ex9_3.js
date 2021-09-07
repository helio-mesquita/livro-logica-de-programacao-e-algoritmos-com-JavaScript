function adicionarFilme () {
    var inTitulo = document.getElementById("inTitulo");
    var inGenero = document.getElementById("inGenero");
    var titulo = inTitulo.value;
    var genero = inGenero.value;

    if (titulo == "" || genero == "") {
        alert("Insira corretamente os dados");
        inTitulo.focus();
        return;
    }
    var tbFilmes = document.getElementById("tbFilmes");
    inserirLinha(tbFilmes, titulo, genero);

    gravarFilme(titulo, genero);
    inTitulo.value = "";
    inGenero.value = "";
    inTitulo.focus();
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarFilme);

function inserirLinha(tabela, titulo, genero) {
    var linha = tabela.insertRow(-1);
    var col1 = linha.insertCell(0);
    var col2 = linha.insertCell(1);
    var col3 = linha.insertCell(2);

    col1.textContent = titulo;
    col2.textContent = genero;
    col3.innerHTML = "<input type='checkbox'>";
}

function gravarFilme(titulo, genero) {
    if (localStorage.getItem("filmesTitulo")) {
        var filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo;
        var filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero;

        localStorage.setItem("filmesTitulo", filmesTitulo);
        localStorage.setItem("filmesGenero", filmesGenero);
    } else {

        localStorage.setItem("filmesTitulo", titulo);
        localStorage.setItem("filmesGenero", genero);
    }
}

function recuperarFilmes() {
    if(localStorage.getItem("filmesTitulo")) {
        var titulos = localStorage.getItem("filmesTitulo").split(";");
        var generos = localStorage.getItem("filmesGenero").split(";");
        var tbFilmes = document.getElementById("tbFilmes");
        for (var i = 0; i < titulos.length; i++) {
            inserirLinha(tbFilmes, titulos[i], generos[i]);
        }
    }
}

recuperarFilmes();

var ckTodos = document.getElementById("ckTodos");
ckTodos.addEventListener("change", function (){
    var tbFilmes = document.getElementById("tbFilmes");
    var ckExcluir = tbFilmes.getElementsByTagName("input");

    var status = ckTodos.checked;

    for (var i = 1; i < ckExcluir.length; i++) {
        ckExcluir[i].checked = status;
    }
});

function removerFilmes () {
    var tbFilmes = document.getElementById("tbFilmes");
    var ckExcluir = tbFilmes.getElementsByTagName("input");
    var temSelecionado = false;
    for (var i = 1; i < ckExcluir.length; i++) {
        if (ckExcluir[i].checked) {
            temSelecionado = true;
            break;
        }
    }
    if (!temSelecionado) {
        alert("Não há filmes selecionados para a exclusão");
        return;
    }
    if (confirm("Confirma Exclusão dos Filmes Selecionados?")) {
        localStorage.removeItem("filmesTitulo");
        localStorage.removeItem("filmesGenero");
        for (i = 1; i < ckExcluir.length; i++) {
            if (!ckExcluir[i].checked) {
                var titulo = tbFilmes.rows[i].cells[0].textContent;
                var genero = tbFilmes.rows[i].cells[1].textContent;
                gravarFilme(titulo, genero);
            }
        }
        for (i = ckExcluir.length - 1; i > 0; i--) {
            if (ckExcluir[i].checked) {
                tbFilmes.deleteRow(i);
            }
        }
        ckExcluir[0].checked = false;
    }   
}

var btExcluir = document.getElementById("btExcluir");
btExcluir.addEventListener("click", removerFilmes)