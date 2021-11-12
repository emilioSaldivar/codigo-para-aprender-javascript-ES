/* obs: los atributos estaticos se puedenacceder desde la clase o clase hija ejempoli Persona.atributo o funcion static
los atributos no pueden ser accedidos desde la clase pero si desde el objeto*/

class Persona {
    //atributos de la clase persona y constructor
    static contador_persona=0;
    static get MAXI_OJETOS (){
        return 5;
    }
    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.id_persona = Persona.contador_persona++;
    }

    // metodos de la clase
    get getApellido(){
        return this.apellido;
    }
    set setApellido(apellido){
        this.apellido = apellido;
    }
    get getNombre (){
        return this.nombre;
    }
    set setNombre ( nombre ){
        this.nombre = nombre;
    }
    nombre_completo(){
        return this.nombre + " " + this.apellido;
    }
    toString(){
        return this.nombre_completo();
    }
    //metodos static
    static saludar(){
        return console.log("saludos desde la clas static de persona");
    }
    static saludar2 ( persona ){
        console.log( persona.nombre );
    }

}
//hereda los atributos de la clase padre
class Empleado extends Persona {
    constructor(nombre, apellido, departamento ){
        super(nombre, apellido);
        this.departamento = departamento;
    }
    get getDepartamento (){
        return this.departamento;
    }
    set setDepartamento( departamento ){
        this.departamento = departamento;
    }
    //sobreescribitura
    nombre_completo(){
        return super.nombre_completo() + " " + this.departamento;
    }
}

let empleado1 = new Empleado("Emilio", "Saldivar", "IT");

console.log( empleado1.id_persona );

let persona1 = new Persona ("Gracielita", " Arevalos");
console.log( persona1.toString() );