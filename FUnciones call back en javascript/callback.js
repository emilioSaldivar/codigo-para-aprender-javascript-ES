"use strict"

//Funciones de uso callBack
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let resultado = op1 + op2;
    funcionCallback(`Resultado: ${resultado}`);
}

sumar(9, 3, imprimir);