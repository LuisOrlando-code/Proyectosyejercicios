//dado una cadena de texto devolver caracter mas usado

function masUsado(params){
    
    var mapeo = {};
    var cont = 0;
    var letra_mas_repetida;

    var customizar = params.toLowerCase().replace(/[!|,.-]/gi, '');

        var arraydeletras = customizar.split('');

        for(const letra of arraydeletras ){ // bucle de elementos

            if(letra != ' '){   
                 if (mapeo[letra]){
                    mapeo[letra]++;
                 } else{
                    mapeao[lera] = 1;
                 }
            }
        }
        for (const letra in mapeo){
            if (mapeo[letra].toString().trim().length === 1 && mapeo[letra] > cont) {
                cont = mapeo[letra];
                letra_mas_repetida = letra;
            }
        }

        return letra_mas_repetida;

}
console.log('la q mas se repite es la letra ' + masUsado('adrian hace ejercicio, teste'));