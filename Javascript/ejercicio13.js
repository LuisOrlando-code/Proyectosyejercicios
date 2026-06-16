//dado un array dividirlo en tantos subarray
//como se necesario basandonos en un numero q indique su tamaño

function dividirArray(arrayIncial, numero){
    let arrayFinal = [];

    while(arraInicial.lenght > 0){
        arrayFinal.push(arrayInicial.splice(0, numero));
    }

    return arrayFinal;
}

console.log(dividirArray([1,2,3,4,5,6], 2));