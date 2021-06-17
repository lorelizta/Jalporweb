//        RELOJ

var actual = new Date();
console.log(actual);

setInterval(visualizarReloj, 1000);  //milisegundos

function visualizarReloj() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
// Si queremos mostrar un cero antes de las horas ejecutamos este condicional
    if (minutos < 10){ minutos = "0" + minutos; }
    if (segundos < 10){ segundos = "0" + segundos; }

    var horaActual = hora + ":" + minutos + ":" + segundos;
    document.getElementById("reloj").innerHTML = horaActual;
}