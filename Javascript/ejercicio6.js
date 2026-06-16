//hacer esto
// *****
// *   *
// *   *
// *   *
// *****

function lado(numero){
    let lado = '';

    for(let i = 0; i < numero; i++){//genero ****** y un salto de linea
        lado += '*';
    }
    return lado;
}



//console.log(lado(5));

function cuadrado(numero){
    let dibujo=lado(numero) + "\n";
    let contenido ="";
    for(let i = 0; i < (numero-2); i++){//3 vueltas
        contenido= '*';
        for(let j = 0; j <(numero-2); i++){//3 vueltas
            conttenido += ' ';

        }
        contenido += '*';
        dibujo += contenido +"\n";
    }
    dibujo += lado(numero);
    return dibujo;


}

console.log(cuadrado(5));