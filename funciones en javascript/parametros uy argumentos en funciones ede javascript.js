//declaracion funcion de tipo expresion

let sumar  = function(a=3,b=2){//se adjudican por default el 3 y el 2 y se reciben argumentos 
    console.log(arguments[0]);//se imprime el primer argumento recibido
    console.log(arguments[1]);//se imprime el segundo argumento recibido
    console.log(arguments[2]);//se imprime el tercer argumento recibido
    return a+b;
}

resultado = sumar();

console.log(resultado);

resultado = sumar(1,2,3);
//la funcion recibe el argumento por mas de que este no fue definido como parametro en la funcion
console.log(resultado);