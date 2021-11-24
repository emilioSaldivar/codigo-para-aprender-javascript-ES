class Producto {
    static contadorProductos = 0;
    //constructor
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    //metodos
    get idProducto(){
        return this._idProducto;
    }
    get nombre (){
        this._nombre;
    }
    set nombre( nombre ){
        this._nombre = nombre;
    }
    get precio (){
        return this._precio;
    }
    set precio( precio ){
        this._precio = precio;
    }
    toStirng(){
        return `idProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}`;
    }

}

//calse ordenes
class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS (){
        return 5;
    }
    //constuctor
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }
    get idOrden (){
        return this.idOrden;
    }
    agregarProducto(producto){
        if( this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }
        else{
            console.log('No se pueden agregar más productos');
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto._precio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = " "
        for(let producto of this._productos){
            productosOrden += "\n" + producto.toStirng() + " ";
        }
        console.log( `Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden} `);
    }
}

//pruebas
let producto1 = new Producto("Camisa", 200);
let producto2 = new Producto("Pantalon", 400);

let orden1 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();

let producto3 = new Producto("Conjunto completo", 1000);

orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);

orden2.mostrarOrden();