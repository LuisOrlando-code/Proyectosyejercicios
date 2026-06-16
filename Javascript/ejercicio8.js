var numero = -67;

function invertir(numero){

    var invert = parseInt(numero.toString().split('')
    .reverse().join('')) * Math.sign(numero);
    return console.log(invert);

}

invertir(numero);