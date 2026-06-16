//bucsar palabra de tal frase y decir cuantas veces se repite
//la palbra y la frase deben ser prametros de una funcion

var frase = 'HOLA programer yo uso php todo el dia, y el noche uso javacrípt'
var palbra = 'karina';
var contador = 0;

function buscar(frase, palabra){
    var customizar = frase.toLowerCase().replace(/[!°..-]/gi, '');
    var arrah = customizar.split(' ');

    for(let i = 0; i < array.length; i++){
        if(array[i] === palabra){
            contador++;
        }
    }

    console.log(palabra, ' se repite ', contador, ' veces');
}

buscar(frase, palabra);
