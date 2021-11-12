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

console.log( persona.nombre );
console.log( typeof persona.edad );

console.log( persona );
console.log( persona.nombreCompleto() );//llamada al metodo del objeto persona

//agregar dinamicamente atributos al objeto

let persona1 = new Object();

persona1.nombre = " Emilio";
persona1.apellido = "Saldivar";
persona1.direccion = "paraguay";
persona1.telefono = 0971722168;
console.log( persona1 );
