//dado un string y un numero,
//repetir el string tantas veces como el numero indique

function repiteme(texto,numero){
   
    let resultado='';

    for(let i = 1; i <= numero; i++){
        resultado += texto + ' ';
    }

    return resultado;
}

console.log(repiteme('adrian', 8));

//funcio prototipo Esto ES SOLO PARA JAVASCRIPT
//aplico el metodo sobre un string .. 
 String.prototype.repitme = function(numero) {//stirn.prototupe.repiteme ...
    let resultado = '';

    for(let i = 1; i <= nummero; i++){
        resultado += this+' '; //this hace referencia a el texto
    }
    return resultado;
 } 

 console.log('adrian dario lisciotti'.repiteme(5));