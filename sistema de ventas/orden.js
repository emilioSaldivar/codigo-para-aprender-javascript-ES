class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS (){
        return 5;
    }

    //constuctor
    constuctor (){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    get idOrden (){
        return this.idOrden;
    }
    agregarProductos(producto){
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }
        else{
            console.log("No se pueden agregar mas productos a la lista de productos.")
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto._precio;
        }
    }
    mostrarOrden(){
        let productosOrden = ""
        for(let producto of this._productos){
            productosOrden += producto.toStirng() + " ";
        }
        console.log( `Orden: ${this._idOrden} Total: ${this.calcularTotal}, Productos: ${productosOrden} `);
    }
}

