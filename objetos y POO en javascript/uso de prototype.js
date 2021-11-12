//para agregar un metodo sin agregarlo en el constructor se utiliza prototype

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

//agregamos el metodo 
Persona.prototype.telefono = 0971722168;//atributos y metodos en una function


let hijo = new Persona("Emilio", "Saldivar", "emiliomatasc@gmail.com");
//modificamos el nuevo atributo
hijo.telefono = 0971685076;
console.log(hijo.telefono);

let madre = new Persona("Florentina", "Caputo", "flore@gmial.com");

console.log(madre.telefono);

