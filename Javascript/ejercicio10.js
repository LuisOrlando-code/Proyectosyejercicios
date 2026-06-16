//daddo dicho numero hacer una escalera
//ejemplo 4
// [-]
// [-][-]
// [-][-][-]
// [-][-][-][-]

var escal='[-]';
var dibujo=[];

function escalera(params){
    for( let i = 0; i < params; i++){
        if(i > 0){ //entra desde la segunda vuelta
            dibujo[i] = escal + dibujo[i-1];
        }else{
            dibujo[i] = escal;//pasa una vez para no dejar undefined
        }
    }
    dibujo.forEach(element =>{
        console.log(element);
    })
}

//escalera(4);

//otra forma

function escalerax(numero) {
    for(let i = 0; i < numero; i++){
        let escalones = '[-]';//lo leno en la primer vuelta

        for(let j = 0; j < i; j++){
            escalones += "[-]";
        }

        console.log(escalones);
    }
}
escalerax(4);