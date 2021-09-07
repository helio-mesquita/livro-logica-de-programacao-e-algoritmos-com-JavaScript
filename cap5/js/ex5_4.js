var lista = [];
function listarTodos() {
    var resposta = "";
    if(lista.length == 0){
        alert("Nenhum aluno cadastrado");
        return;
    } else{
        for(var i = 0; i < lista.length; i++) {
        resposta += lista[i].nome + " - " + lista[i].idade + " anos \n"
        }
        document.getElementById("outResposta").textContent = resposta;
    }
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarTodos);

function addAluno() {
    var inNome = document.getElementById("inNome");
    var inIdade = document.getElementById("inIdade");
    var nome = inNome.value;
    var idade = Number(inIdade.value);
    if(nome == "") {
        alert("Por favor, insira o nome do aluno");
        inNome.focus();
        return;
    }
    if(inIdade.value == 0 || isNaN(idade)){
        alert("Por favor, insira a idade do aluno corretamente");
        inIdade.focus();
        return;
    }
    lista.push( {nome: nome, idade: idade })
    inNome.value = "";
    inIdade.value = "";
    inNome.focus();
    listarTodos();
}
btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", addAluno);

function resumirIdade(){
    if (lista.length == 0){
        alert("Não há nenhum aluno cadastrado");
        return;
    }
    var copia = lista.slice();
    copia.sort(function (a, b) {return a.idade - b.idade});
    var resumo = "";
    var aux = copia[0].idade;
    var nomes = [];
    for (var i = 0; i < copia.length; i++){
        if(copia[i].idade == aux) {
            nomes.push(copia[i].nome);
        } else {
            resumo += aux + " anos(s): " + nomes.length + " crianças(s) - ";
            resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(", ") + ")\n\n";
            aux = copia[i].idade;
            nomes = [];
            nomes.push(copia[i].nome); 
        }       
    }
    resumo += aux + " anos(s): " + nomes.length + " crianças(s) - ";
    resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n"; 
    document.getElementById("outResposta").textContent = resumo;
}
var btResumir = document.getElementById("btResumir");
btResumir.addEventListener("click", resumirIdade);