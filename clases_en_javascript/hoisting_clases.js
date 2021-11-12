/*let persona3 = new Persona("Emilio", "Saldivar");*/
// no es posible crear objetos sin antes haber creado la clase persona 

class Persona{
    constructor(nombre, apellido){//constructor de la clase persona
        this.nombre = nombre;
        this.apellido = apellido;
    }
    //metodos

    get nombe_completo(){
        return this.nombre + " " + this.apellido;
    }

    set _nombre (nombre){
        this.nombre = nombre;
    }
}

//creamos para practicar nuevos objetos referenciando la clase personas
let persona1 = new Persona("Emilio", "Saldivar");

console.log( persona1 );

let persona2 = new Persona("Graciela", "Arevalos");

console.log( persona2.nombe_completo );

persona2.nombre = "Lucia";

console.log( persona2.nombe_completo );