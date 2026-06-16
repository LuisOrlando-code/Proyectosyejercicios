'use strict'

do{
    var numero = parseInt(prompt('ingresa un numero mayor a 0', 1));
}while(numero == 0);
for(var i = 1; i < numero; i++){
    if(numero %1 == 0){
        console.log(' divisor '+ 1);
    }
}