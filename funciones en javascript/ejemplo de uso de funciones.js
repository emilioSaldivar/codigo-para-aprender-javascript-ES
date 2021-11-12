const sumaValores = function(){

    let vectorDeArgumentos = [];
    let sumaDeArgumentos = 0;
    for(let i =0; i < arguments.length; i++){
        vectorDeArgumentos[i] = arguments[i];
        sumaDeArgumentos += arguments[i];
    }
    return vectorDeArgumentos, sumaDeArgumentos;
}

let vectorResultado = sumaValores(1,2,3,4,5,6,7);

console.log(vectorResultado);