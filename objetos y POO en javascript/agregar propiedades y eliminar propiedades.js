let persona = {
    //atributos
    nombre: "Emilio",
    apellido: "Saldivar",
    email: "emiliomatasc@gmail.com",
    edad: 23,
    //metodos
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

//agg y borrar propiedades de forma dinamica

persona.ci = 5057016;


console.log( persona );


//eliminar propidades de objetos de forma dinamica
delete persona.ci ;

console.log( persona );
