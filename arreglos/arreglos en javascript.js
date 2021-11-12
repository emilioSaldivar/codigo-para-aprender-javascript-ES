//let autos = new Array("BMW","MERCHO","VOLVO");

const autos = ["BMW","MERCHO","VOLVO"];//array se asigna una referencia en la memoria por eso const pero si se puede modificar los elemntos del array

console.log(autos);


autos[0] = "Emilio";

console.log(autos[0]);

console.log(autos[1]);

for( let i = 0; i < autos.length; i++){
    console.log(autos[i]);
}

//agregar dinamicamente en nuestro arreglo

autos.push("santana");//se agrega al final

for( let i = 0; i < autos.length; i++){
    console.log(autos[i]);
}

console.log(autos.length);

//agregar dinamicamente sin push al final del arreglo

autos[autos.length]="TESLA";

//tambien se puede dejar huecos

autos[9] = "nissan";// se dejan varios espacios

console.log(autos);

console.log(Array.isArray(autos));//pregunta si es un arreglo

console.log(autos instanceof Array); //pregunta si el objeto fue instanciado como array

