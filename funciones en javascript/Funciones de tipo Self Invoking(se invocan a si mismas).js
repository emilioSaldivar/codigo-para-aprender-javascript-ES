//este tipo de funciones se pueden invocar a si mismas pero no son reutilizables
//por que no son asignaddas a ninguna variable

//declaracion e invocacion de la funcion

(function(){
    console.log("La funcion se esta ejecutando")
})();//al estos parentesis se invoca a si misma y se ejecuta

(function (){
    console.log("Esta es otra funcion que se ejecuta a si misma");
})();
//solamente se puede llamar una vez y no se usa en el programa

// tambien pueden recibir argumentos

(function (a,b){
    console.log("Suma: "+ (a+b));
})(3,4);//un ejemplo sencillo de suma