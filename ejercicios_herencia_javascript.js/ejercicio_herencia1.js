class Persona{
    //atributos
    static contador_objetos = 0;

    //constructor
    constructor( nombre, apellido, edad, ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.id_persona = ++Persona.contador_objetos;
    }
    //metodos
    get getIdPersona(){
        return this.id_persona;
    }
    get getNombre(){
        return this.nombre;
    }
    set setNombre( nombre ){
        this.nombre = nombre;
    }
    get getApellido(){
        return this.apellido;
    }
    set setApellido(apellido){
        this.apellido = apellido;
    }
    get getEdad(){
        return this.edad;
    }
    set setEdad (edad){
        this.edad = edad;
    }
    toStirng(){
        return `Id: ${this.id_persona} ${this.nombre} ${this.apellido}, Edad: ${this.edad}`;
    }
}
class Empleado extends Persona{
    //atributos
    //constructor
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this.idEmpleado = Persona.contador_objetos;
        this.sueldo = sueldo;
    }
    //metodos
    get getIdEmpleado(){
        return this.idEmpleado;
    }
    get getSueldo(){
        return this.sueldo;
    }
    set setSueldo(sueldo){
        this.sueldo = sueldo;
    }
    toStirng(){
        return `${super.toStirng()}, sueldo: ${this.sueldo}`;
    }
}
class Cliente extends Persona{
    //atributos
    //constructor
    constructor( nombre, apellido, edad, fecha_registro){
        super(nombre, apellido, edad);
        this.fecha_registro = fecha_registro;
        this.id_cliente = Persona.contador_objetos;
    }
    //metodos
    get getIdCliente(){
        return this.id_cliente;
    }
    get getFecha(){
        return this.fecha_registro;
    }
    set setFecha(fecha_registro){
        this.fecha_registro = fecha_registro;
    }
    toStirng(){
        return `${super.toStirng()}, Fecha registro: ${this.fecha_registro}`;
    }

}
//prueba de la clase persona
let persona_prueba = new Persona("Emilio", "Saldivar", 23);
console.log( persona_prueba.toStirng() );
//prueba de la clase empleado
let empleado = new Empleado("Emilio", "Saldivar", 23, 5000000);
console.log( empleado.toStirng() );
//prueba de la clase cliente
let cliente_prueba = new Cliente("Emilio", "Saldivar", 23, "01/12/2020");
console.log( cliente_prueba.toStirng() );
