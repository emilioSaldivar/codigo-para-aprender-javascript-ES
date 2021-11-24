"use strict"

try {//bloque de codigo que puede arrrojar algun error
    //x = 10;
    miFuncion(x);
}
catch(error){//retiene el error del bloque anterior 
    console.log(error);
}
finally{//siempre se eejecuta este bloque de codigo
    console.log("Termina la revision de errores")
}
console.log("continuamos...");


