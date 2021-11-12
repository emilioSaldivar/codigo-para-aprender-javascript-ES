/*ejemplos de tipos de datos en JavaScript*/
/*las variables en javascript son dinamicas podemos asignarle cualquier otro valor */

var nombre = "ALGUN_NOMBRE"; //variable que almacena una cadena 

console.log(nombre);

//tipo de dato 

var numero = 12;

console.log(numero);

/*ejemplo de asignacion dinamica de variables en java
podemos saber que tipo de dato almacena imprimiengo con typeog*/

numero = "doce";

console.log(typeof numero);//retorna el tipo de dato que almacena la variable en ese momento

// tipo de dato objetos en JavaScript

var objeto = {
    nombre : "Matias",
    apellido : "Saldivar",
    telefono : "0971722168"
}

console.log(objeto);

console.log(typeof objeto);

//boolean tipo de dato

var bandera = true;//tambien puede almacenar false

console.log(bandera);
console.log(typeof bandera);

//tipo de dato funcion

function miFuncion (/*lo que recibe la funcion*/){ /*la nomenclatura de la funcion*/ }
console.log(miFuncion);
console.log(typeof miFuncion);

//tipo de dados Symbol

var simbolo = Symbol("mi simbolo");

console.log(simbolo);
console.log(typeof simbolo);

//tipo de datos class  que son funciones

class Persona{
    /*atributos y constructor*/
    constructor(nombre , apellido){//recibe los dos tipos de datos para construir un objeto de tipo persona
        this.nombre = nombre; //inicializa el atriibuto de la clase
        this.apellido = apellido;//inicializa el atributo de la classe
    }
}

console.log(Persona);
console.log(typeof Persona);

//tipo de dato undefined

var x;//variable generalizada no definida o instanciada aun

console.log(x);
console.log(typeof x);

x =  undefined;//tambien se puede asignar undefined
console.log(x);
console.log(typeof x);

//null = ausencia de valor
var y = null;
/*obs null no es un tipo de dato es un tipo object y significa ausencia de valor*/
console.log(y);
console.log(typeof y);//es un tipo de dato object

var autos = ["BMW", "AUDI", "VOLVO"];
console.log(autos);
console.log(typeof autos);

var z = "";
console.log(z);
console.log(typeof z);
