class Computadora {
    static contadorComputadoras = 0;
    //constructor
    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toStirng(){
        return `Computadora: ${this._idComputadora} \n  ${this._nombre} \n ${this._monitor.toStirng()} \n ${this._raton.toStirng()} \n ${this._teclado.toStirng()} `;
    }
}
//dispositivos de tipoEntrada
class DispositivoEntrada{
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

//raton
class Raton extends DispositivoEntrada{
    //atributos estaticos
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    //metodos
    toStirng(){
        return `Raton: [id raton: ${this._idRaton}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}

//teclado
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
//dispositivos de salida

class Monitor {
    //atributos static
    static contadorMonitores = 0;
    //constructor
    constructor(marca, tamanhio){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanhio = tamanhio;
    }
    get idMonitor (){
        return this._idMonitor;
    }
    get marca (){
        return this._marca;
    }
    get tamanhio (){
        return this._tamanhio;
    }
    set marca( marca ){
        this._marca = marca;
    }
    set tamanhio( tamanhio ){
        this._tamanhio = tamanhio;
    }
    toStirng(){
        return `Monitor: [ id monitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamanhio}'' ]`;
    }
}

//pruebas
let tecladoPrueba = new Teclado("USB", "ACER");
let monitor1 = new Monitor("SAMSUNG", 15);
let raton = new Raton("bluetooth", "DELL")

let computadora1 = new Computadora ("Compu de emilio", monitor1, raton, tecladoPrueba);

console.log(computadora1.toStirng());

//ordenes
class Orden{
    //Atributos estaticos
    static contadorOrdenes = 0;
    //constructor
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden (){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = "";
        for(let computadora of this._computadoras){
            computadorasOrden += "\n" + computadora.toStirng();
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`)
    }
}

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();