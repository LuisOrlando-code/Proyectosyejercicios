//par o impar

var resultado;

function impar(numero1,  numero2){
    var contador = 0;
    for(let i = numero1; i <= numero2; i++){
        resultado = i % 2;
        if(resultado === 0){
            console.log(i + ' es par');
        }else{
            console.log(i + ' es impar');
            contador++;
        }
    }

    return console.log('la cantidad de impares es de ' + contador);
}

impar(1, 10);

/*resultado = numero % 2;
if(resultado == 0){
    console.log(numero + ' es par')
} else {
    console.log(numero + ' es impar')
}*/