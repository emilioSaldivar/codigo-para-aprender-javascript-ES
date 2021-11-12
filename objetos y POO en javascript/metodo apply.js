//metodo apply
//en apply se pasas los argumentos como arreglos


let persona1 = {
    //atributos
    nombre: "Emilio",
    aplellido: "Saldivar",

    //metodos
    nombreCompleto: function(titulo, telefono){
        //return this.nombre + " " + this.aplellido;
        return titulo+ ":" +  this.nombre +  " " + this.aplellido + ", " + telefono;
    }
}

let persona2 = {

    nombre : "Matias",
    aplellido: "Saldivar",


}

//uso de apply

console.log ( persona1.nombreCompleto("Licenciado: ", "0971722168"));

let arreglo = ["Ingeniero", "0971760578"];//asi o de forma explicita el arreglo
console.log(persona1.nombreCompleto.apply( persona2, arreglo ));

{
    Nombre: "Emilio";
    Apellido: "Saldivar";
    Celular: "0971722168";
    email: "emiliomatasc@gmail.com";
}