'use strict'

/*var numeros=[22,78,1,12,77,18];
let ordenados = numeros.sort((a,b) => a - b);*/

var array = [];
var i=1;
function mostrar(array,opcional = ''){
    document.write('<h1>edades de personas '+opcional+'</h1>');
    
    document.write('<ul>');
    
    for(let variable in array){
        document.write('<li>'+array[variable]);    
    }

    document.write('</ul>')

    if(opcional === ''){
        console.log(array);
    }
}
 
    do{
        var elemento=parseInt(promt('ingrese una edad(solo numeros mayores a 0)',1));
        if (elemento > 0){
            array.push(elemento);
            i++;
        }
    } while( i <= 6);

    mostrar(array);

    var array_invertido=array.reverse();
    mostrar(array_invertido, 'invertido');

    var array_ordenado=array.sort(function(a,b){return a-b});

    mostrar(array_ordenado, 'ordenado');

    document.write('cantidad de elementos '+array.length);

    do {
        var edad=parseInt(promt('ingrese una edad a buscar(solo numeros mayores a 0)',1));
    } while(isNaN(edad) || edad <= 0);

    var busqueda = array.findIndex(Element => element === edad);

    if (busqueda >= 0){
        document.write('<h1>la edad de '+edad+' si se ha encontrado, esta en la posicion '+busqueda+'</h1>' )
    } else{
        document.write('<h1>la edad de '+edad+'n0 se ha encontrado');
    }