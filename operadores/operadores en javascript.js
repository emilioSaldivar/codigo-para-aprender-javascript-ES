let num1, num2, resultado;

//suma, resta multiplocacion division modulo/resto y potenciacion
num1 = 21, num2 = 5
//modulo
resultado = num1%num2;

console.log( resultado );

//exponente

resultado = num1 ** num2;

console.log(resultado);

//pre-incremento pos-incremento

resultado = ++num1;

console.log(resultado);

resultado = num2++;

console.log(resultado);
console.log(num2);

//comparaciones
num1 = 2, num2 = "2";
let bandera = num1 == num2;//hace una comparacion sin importar el tipo de dato

console.log(bandera);


bandera = num1 === num2;//revisa el valor y tambien el tipode dato con el que fue declarado la variable

console.log(bandera);
