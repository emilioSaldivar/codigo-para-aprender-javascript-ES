class Persona {
    //atributos de la clase persona y constructor
    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;

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

let persona1 = new Empleado("Emilio", "Saldivar", "IT");

console.log( persona1.getDepartamento + " " + persona1.getNombre );

//agrear parentesis al final del nombre de la funcion
console.log( persona1.nombre_completo() );