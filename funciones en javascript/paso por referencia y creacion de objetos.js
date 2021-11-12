const persona = {//este es un objeto con 2 atributos
    nombre: "Emilio",
    apellido: "Saldivar"
}


function cambiarValorPersona(p1){//funcion que se comporta como metodo
    p1.nombre = "Matias";
    p1.apellido = "Saldivar";
}

console.log(persona);

cambiarValorPersona( persona );

console.log(persona);

