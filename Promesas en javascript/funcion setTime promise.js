"use strict"
let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;
    if (expresion)
        resolved("Resolvio correcto");
    else
        rejected("Se produjo un error");
});
/*
miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);
miPromesa.then(
    valor => console.log(valor) ).
    catch( error => console.log(error)
    );*/

let promesa = new Promise( (resolved) => {
    setTimeout( () => resolved("saludos con promesa y setTimeout"), 3000);
})

promesa.then(valor => console.log(valor));