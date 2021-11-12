//metodo call

let Persona1 = {
    //atributos
    nombre: "Emilio",
    aplellido: "Saldivar",

    //metodos
    nombreCompleto: function(titulo, telefono){
        //return titulo+ ":" +  this.nombre +  " " + this.aplellido + ", " + telefono;
    }
}

let persona2 = {

    nombre : "Matias",
    aplellido: "Saldivar",


}

//uso de call

console.log(Persona1.nombreCompleto());

console.log(Persona1.nombreCompleto.call( persona2 ));

//paso de argumentos en call
console.log(Persona1.nombreCompleto.call(persona2, "Ing.", 0971722168));

