//dada una cadena de texto darle la vuerlta a invertir el orden de sus caracter
//sin usar metodos propios del lenguaje.solo estructuras de ccontrol

var texto = 'hola programer debes cumplir la prueba tecnica';
let invertido = '';

function invertir(texto) {
    for( const letra of texto) {
        invertido = letra + invertido; 
    }
    console.log(invertido);
}

invertir(texto);