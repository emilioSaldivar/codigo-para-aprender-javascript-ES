export default class DispositivoEntrada{
    //constructor
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    //metodos get
    get tipoEntrada (){
        return this._tipoEntrada;
    }
    get marca (){
        return this._marca;
    }
    //metodos set
    set tipoEntrada( tipoEntrada ){
        this._tipoEntrada = tipoEntrada;
    }
    set marca(marca){
        this._marca = marca;
    }
}
                //class teclado
class Teclado extends DispositivoEntrada {
    //atributos estaticos
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    //metodos
    get idTeclado (){
        return this._idTeclado;
    }
    toStirng(){
        return `Id Teclado: ${this._idTeclado}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}
                //Clase Raton
class Raton extends DispositivoEntrada{
    //atributos estaticos
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton( ){
        return this._idRaton;
    }
    //metodos
    toStirng(){
        return `Id raton: ${this._idRaton}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}
let tecladoPrueba = new Teclado("Emilio", "Saldivar");
let teclado2DePrueba = new Teclado("Graciela", "Arevalos");
let reton1 = new Raton("USB", "DELL");
console.log(reton1.toStirng())
console.log(tecladoPrueba.toStirng());
console.log(teclado2DePrueba.toStirng());
