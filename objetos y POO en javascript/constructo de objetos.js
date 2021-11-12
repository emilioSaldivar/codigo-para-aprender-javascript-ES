//constructor
function Persona(nombre, apellido, email){
    
    //atributos del objeto
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    
    //metodo del objeto Persona
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let hijo = new Persona("Emilio", "Saldivar", "emiliomatasc@gmail.com");

console.log(hijo);

let madre = new Persona("Florentina", "Caputo", "flore@gmial.com");

console.log(madre);

hijo.nombre = "Matias";

console.log(hijo);

console.log( madre.nombreCompleto() );

let miObjeto = new Object();

let miObjeto2 = {};

let miCadena = new String( "esta es una cadena" );

let miCadena2 = "Otra forma de escribir una cadena";

console.log ( miCadena + "\n" + miCadena2 );
