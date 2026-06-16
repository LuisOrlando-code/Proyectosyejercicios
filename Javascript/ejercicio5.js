// sacar el procentaje x de x numero

var numero = 1000;
var procentaje=50;

function sacarporcentaje(porcentaje, numero){
    var resultado=(numero*porcentaje)/100;
    console.log('el '+porcentaje+ 'x de ' + numero + ' es '  + resultado);
}

sacarporcentaje(procentaje, numero);