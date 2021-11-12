let edad ="18";
const adulto = 18;

edad = Number(edad);
//isNan verifica si es o no un numero retorna una expre. booleana
(isNaN(edad)) ?  console.log("No es un numero"): console.log( "Si es un numero ");
//operador ternario
let resultado = (edad >= adulto) ? "La persona es mayor de edad, puede votar" : "La persona es menor de edad, muy joven para votar";

console.log( resultado );