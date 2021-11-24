import { DispositivoEntrada } from "./Dispositivo-entrada";

class Teclado extends DispositivoEntrada {
    //atributos estaticos
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    //metodos
    toStirng(){
        return `Teclado: [id Teclado: ${this._idTeclado}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}
let tecladoPrueba = new Teclado("Emilio", "Saldivar");

console.log(tecladoPrueba.toStirng());