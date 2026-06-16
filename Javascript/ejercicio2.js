
var palabra = 'anana';

function palindromo(palabra){
    let invertido = palabra.split('').reverse().join();
    console.log(invertido);
    if (ivertido === palabra ){
        return true;
    } else {
        return false;
    }


}

console.log('la palabra '+ palabra + ' es unn palindromo ', palindromo(palabra))
