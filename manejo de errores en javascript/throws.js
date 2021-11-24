"use strict"
let resultado = -1;

try{
    if(isNaN(resultado)) throw "No es un numero";
    else if(resultado === "") throw "Es cadena vacia";
    else if(resultado >= 0) throw "Valor positivo";
    else if(resultado < 0 ) throw "El valor es negativo";
}
catch(error){
    console.log(error);
    console.log(error.name);//si se desea saber el nombre del error
    console.log(error.message);//si queremos saber el mensaje que arroja el error
}
finally{
    console.log("Termina la revision de errores");
}