
interface Titulos{
    setTitulo(color);
    getTitUlo();
}

function DecoradorClase(target: Function){
    target.prototype.saludar = function(){
        console.log('hola q tal');
    }

}
@DecoradorClase
/*export*/ class Jugadores implements Titulos{

    private nombre: string;
    private posicion: string;
    private goles: number;
    private asistencias: number;
    private valor: number;

  constructor(nombre, posicion, goles, asistencias, valor){
    this.nombre = nombre;
    this.posicion = posicion;
    this.goles = goles;
    this.asistencias = asistencias;
    this.valor = valor;
  }

  setTitulo(color: any) {
      
  }

    getTitUlo() {
    
    }
    public setNombre(nombre:string){
        this.nombre = nombre;
    }

    public getNombre(){
        return this.nombre;
    }

    public getClub(nombre:string, club:string){
        console.log(nombre, club);
    }
}


class Persona extends Jugadores{
    public edad: number;

    constructor(nombre, posicion, goles, asistencias, valor, edad){
    super(nombre, posicion, goles, asistencias, valor);
        this.edad=edad;
    }
    setEdad(edad: number){
        this.edad = edad;
    }

    getEdad():number{
        return this.edad;
    }
}
var Persona1 = new Persona('Leo Messi', 'Mediocampo', 100, 70, 1000,45);
Persona1.setEdad(45);
console.log(Persona1,Persona1.getNombre+ ' es un genio');

var jugador1 = new Jugadores('Leo Messi', 'Mediocampo', 100, 70, 1000);
jugador1.Saludar();
var jugador2 = new Jugadores('Cristiano Ronaldo', 'Delantero', 130, 50 ,1000);



j//ugador1.setNombre('Ronaldo Nazzario');

console.log(jugador1.getNombre());

console.log(jugador2);