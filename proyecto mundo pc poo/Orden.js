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