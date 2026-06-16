var numero=5;

var resultado;

//console.log('tabla del ' + numero);

var multiplicacion = `Tabla del ${numero} \n`;
function tablademultiplicar(numero){
    for (let i = 1; i <= 10; i++){
        resultado (i * numero);
        //console.log(i + 'x' + numero + '=', resultado)
        multiplicacion += `${i} x ${numero} = ${resultado} \n`;
    }

    return multiplicacion;
}

console.log(tablademultiplicar(numero));