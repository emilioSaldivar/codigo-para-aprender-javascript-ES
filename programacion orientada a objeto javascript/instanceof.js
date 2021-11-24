class Empleado {
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, Departemento: ${this._departamento}`;
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log("Es una clase de tipo Gerente");
    }
    else if(tipo instanceof Empleado){
        console.log("Es una clase de tipo Empleado");
    }
    else{
        console.log("No se trata de una clase que esta funcion pueda imprimir");
    }
}

let gerenteDePrueba = new Gerente("Emilio",200000000,"IT");
let empleadoDePrueba = new Empleado("Matias", 390000000);

imprimir(gerenteDePrueba);
imprimir(empleadoDePrueba);