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

console.log(persona["nombre"]);


//recorrer las propiedades del objeto

for( nombrePropiedaes in persona){

    console.log( nombrePropiedaes );//se accede a las propiedades del objeto
    console.log( persona[nombrePropiedaes]);

}

