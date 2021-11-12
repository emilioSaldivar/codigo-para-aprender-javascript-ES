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


//concatenacion

console.log( persona.nombre + " " + persona.apellido);

//for

for ( nombrePropiedades in persona ){
    
    console.log( persona[nombrePropiedades]);

}

//arreglos

let personaArray = Object.values ( persona );
console.log( personaArray );


//JSON
 let personaString = JSON.stringify( persona );
 console.log( personaString );

 //