"use strict"

let miFuncion = function(){
    console.log("Saldudos desde mi funcion");
}
/*
const miFuncionFlecha = () =>{
    console.log("Saludos desde mi funcion flecha");
}*/
//otra forma de escribir la funcion flecha
const miFuncionFlecha = () => console.log("Saludos desde mi funcion flecha");
//otra forma
const saludar = () => "Saludos desde la funcion flecha";

miFuncion();
miFuncionFlecha();