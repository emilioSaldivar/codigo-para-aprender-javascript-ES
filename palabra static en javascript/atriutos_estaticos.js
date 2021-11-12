class Persona {
    //atributos de la clase persona y constructor
    static contador_objetos_persona = 0;
    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        Persona.contador_objetos_persona++;
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
let graciela = new Persona("Gracielita", "Arevalos");

console.log( empleado1.getDepartamento + " " + empleado1.getNombre );

//agrear parentesis al final del nombre de la funcion
console.log( empleado1.nombre_completo() );

console.log( empleado1.toString() );

//solo se puede usar el metodo statiic desde la clase definida
//a la clase static se le puede pasar como parametro un objeto
Persona.saludar();
Persona.saludar2( empleado1 );

//los atributos estaticos solo pueden ser accedidos desde la clase o las clases hijas
console.log( Persona.contador_objetos_persona );
console.log( Empleado.contador_objetos_persona );