//saar de dos array elementos comunes

var vector1 = ['Adrian', 'Goku', 'Jenifer', 'Messi', 'Luna'];
var vector2 = ['Adrian', 'Goku', 'Jenifer', 'Messi', 'Luna'];

var array = [];

/*function mostrar(vector1, vector2){


    for(let i = 0; i < vector1.lenght; i++) {
        
        for(let j = 0; j < vector2.lenght; j++) {
            if (vector1[i] === vector2[j]) {
                array[i] = vector1[i];
            }
        }



    }

    array.forEach(element =>{
        console.log(element);
    });



}

mostrar(vector1, vector2);*/


function elementosComunes(vector1,vector2){
    const filtrado = vector1.filter(element =>{
        return vector2.includes(element);
    });

    return filtrado;
}

console.log(elementosComunes(vector1,vector2));