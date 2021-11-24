export default class Monitor {
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
        return `Monitor: { Marca: ${this._marca}, Tamaño: ${this._tamanhio}'' }`;
    }
}

let monitor1 = new Monitor("HP", 15);
console.log(monitor1.toStirng());