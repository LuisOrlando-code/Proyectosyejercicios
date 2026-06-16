import { Pipe, PiperTransfrom} from '@angular/core';

@Pipe({
    name: 'calculadora'
})

export class calculadoraPipe implements PiperTransfrom{

    transfrom(value: any, value_two: any){
        let operaciones = '
        suma: ${value+value_two} -
        Resta ${value-value_two} -
        Multipliacación: ${value*value_two} -
        División: ${value/value_two}
        ';
        return operaciones;
    }
}