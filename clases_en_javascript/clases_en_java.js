class Persona{
    constructor(nombre, apellido){//constructor de la clase persona
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
//creamos para practicar nuevos objetos referenciando la clase personas
let persona1 = new Persona("Emilio", "Saldivar");

console.log( persona1 );

let persona2 = new Persona("Graciela", "Arevalos");