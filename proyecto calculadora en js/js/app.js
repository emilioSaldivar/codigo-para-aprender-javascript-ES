console.log( " todo va bien en la aplicacion calculadora");

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operacion no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

