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