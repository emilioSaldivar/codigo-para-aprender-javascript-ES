var nombre = "emilio";
var apellido = " Saldivar";

var nombreCompleto = nombre + apellido;
console.log(nombreCompleto);


var nombreCompleto2 ="emilio " + "Saldivar" + " Caputo";
console.log(nombreCompleto2);

//concatenamos una cadena y numeros de izquierda a derecha interpreta lo que primero e
//encuentra en este caso lo primero es una cadena entonces lo que sige tambien toma como cadena

var x = nombre + 219 + 70;//se puede utilizar parentesis para dar prioridad a la suma de los valores

console.log(x);
//primero lo suma y luego concatena cadena
x = 2020 + 1 + "emilio";

console.log(x);

