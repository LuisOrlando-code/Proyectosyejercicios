'use strict'

do{
    var numero1=parseInt(promt('ingrese numero 1', 0));
    var numero2=parseInt(promt('ingrese numero 2', 0));

} while(isNaN(numero1) || isNaN(numero2))
    if(numero1 < numero2){
       for(var i = numero1; i <= numero2; i++){
        if(i % 2 == 0){
            document.write('<br>par '+ i);
        }else{
            document.write('<br>impar '+i);
        }
       } 
    }else if(numero1 > numero2){
        for(var i = numero1;i >= numero2; i--){
            if(i % 2 == 0){
            document.write('<br>par '+ i);
        }else{
            document.write('<br>impar '+i);
        }
        }
    }else{
        if(numero1 % 2 == 0){
            document.write('<br>par ' +numero1);
        }else{
            document.write('<br>impar ' +numero1);
        }
    }