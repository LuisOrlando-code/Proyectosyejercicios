'use strict'

//var numero1=parseInt(promt("ingrese numero 1",0));
//var numero2=parseInt(promt("ingrese numero 2",0));
var numero1 = 0;
var numero2 = 0;

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1=parseInt(prompt("ingrese numero 1 mayor a cero", 0));
    numero2=parseInt(prompt("ingrese numero 2 mayor a cero", 0));
}

if(numero1 > numero2){
console.log('el numero ' +numero1+' es el mayor');

}else if(numero1 > numero2){
console.log('el numero '+numero2+' es el mayor')
}else{
    console('el numero '+ numero1+ ' es igual al numero '+numero2);
}