/*
--------------------------------------------------
            OPERADOR TERNARIO
--------------------------------------------------
*/

/*
El operador ternario es un operador de JavaScript que tiene tres operandos
muy util para mejorar la legibilidad del codigo.
Ademas en React es indispensable saber el uso el operador ternario.

La sintaxis basica es la siguiente:       condición ? expr1 : expr2, en donde
si la condicion es verdadera se ejecuta la expr1, si es false se ejecuta la expr2

A continuacion estaremos realizando un ejemplo basico para poder entender mejor
*/




//Declaramos variables para la prueba
let number1 = 10;
let number2 = 20;
let respuesta = '';


//con un operador (if) normal la estructura seria asi

    if ( number1 > number2 ) {
        respuesta = `El numero1 es mayor que numero2`;
    } else {
        respuesta = `El numero2 es mayor que numero1`;
        
    }
    console.log(respuesta);
// con un operador ternario tendriamos la siguiente estructura
    respuesta= number1 > number2 ? 'El numero1 es mayor que numero2': 'El numero2 es mayor que numero1';
    console.log(respuesta);

//Ambas soluciones son correctas pero como se puede observar el operador ternario simplifica 
//la cantidad de codigo y mejora la legibilidad



