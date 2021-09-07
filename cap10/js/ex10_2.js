const POLTRONAS = 240;

var reservadas = [];

function montarPalco () {

    var ocupadas = [];

    if(localStorage.getItem("teatroOcupadas")) {
        ocupadas = localStorage.getItem("teatroOcupadas").split(";");
    }
    var divPalco = document.getElementById("divPalco");
    for(var i = 1; i <= POLTRONAS; i++) {
        var figure = document.createElement("figure");
        var imgStatus = document.createElement("img");

        if(ocupadas.indexOf( i.toString()) >= 0) {
            imgStatus.src = "img/ocupada.jpg";
        } else {
            imgStatus.src = "img/disponivel.jpg";
        }
        
        imgStatus.className = "poltrona";
        
        var figureCap = document.createElement("figcaption");
        
        var zeros = "";

        if ( i < 10) {
            zeros = "00"
        } else if (i < 100) {
            zeros = "0"
        }

        var num = document.createTextNode("[" + zeros + i + "]");

        figureCap.appendChild(num);
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap);

        if (i % 24 == 12) {
            figure.style.marginRight = "60px";
        }

        divPalco.appendChild(figure);

        if (i % 24 == 0) {
            var br = document.createElement("br");
            divPalco.appendChild(br);
        }
    }
}

montarPalco();

function reservarPoltrona() {
    var poltrona = Number(inPoltrona.value);

    if(poltrona <= 0 || isNaN(poltrona) || poltrona > POLTRONAS) {
        alert("Informe um número de poltrona válido");
        inPoltrona.focus();
        return;
    }

    var ocupadas = [];

    if(localStorage.getItem("teatroOcupadas")) {
        ocupadas = localStorage.getItem("teatroOcupadas").split(";");
    }

    if(ocupadas.indexOf(poltrona.toString()) >= 0) {
        alert("Poltrona " + poltrona + " já está ocupada...");
        inPoltrona.value = "";
        imPoltrona.focus();
        return;
    }

    var divPalco = document.getElementById("divPalco");
    var imgPoltrona = divPalco.getElementsByTagName("img")[poltrona-1];
    imgPoltrona.src = "img/reservada.jpg";
    reservadas.push(poltrona);
    inPoltrona.value = "";
    inPoltrona.focus();
}
var btReservar = document.getElementById("btReservar");
btReservar.addEventListener("click", reservarPoltrona);

var inPoltrona = document.getElementById("inPoltrona");
inPoltrona.addEventListener("keypress", function(tecla) {
if(tecla.keycode == 13) {
    reservarPoltrona();
    }
});

function confirmarReserva() {
    if(reservadas.length == 0) {
        alert("Não há poltronas reservadas");
        inPoltrona.focus();
        return
    }
    var divPalco = document.getElementById("divPalco");
    var ocupadas = "";

    if(localStorage.getItem("teatroOcupadas")) {
        ocupadas = localStorage.getItem("teatroOcupadas") + ";";
    }

    for (var i = 0; i < reservadas.length; i++) {
        ocupadas += reservadas[i] + ";";

        var imgPoltrona = divPalco.getElementsByTagName("img")[reservadas[i]-1];
        imgPoltrona.src = "img/ocupada.jpg";
    }
    reservadas = [];

    localStorage.setItem("teatroOcupadas", ocupadas.substr(0, ocupadas.length - 1));

}

var btConfirmar = document.getElementById("btConfirmar");
btConfirmar.addEventListener("click", confirmarReserva);