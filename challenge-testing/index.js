class CarritoCompra {
    constructor(){
        this.carrito = [] ;
    }

    agregarProducto(producto){
        if (!producto || typeof producto !== 'object') {
            throw new Error('Error: El producto proporcionado no es válido.');;
        }

        if (!producto.nombre || !producto.precio) {
            throw new Error('Error: El producto debe tener un nombre y un precio.');
        }

        this.carrito.push(producto);
    }

    calcularTotal(){
        let total = 0
        for (let i = 0; i < this.carrito.length; i++) {
            total += this.carrito[i].precio * this.carrito[i].cantidad ;
        }
        return total ;
    }

    aplicarDescuento(porcentaje){
        if (!porcentaje || typeof porcentaje !== 'number') {
            throw new Error('Error: El porcentaje proporcionado no es válido.');;
        }

        if (porcentaje>100 || porcentaje<0) {
            throw new Error('Error: El porcentaje debe ser un numero entre 0 y 100.');
        }

        let precioDescontado = this.calcularTotal() * (1 - porcentaje /100 );
        return precioDescontado;
    }
}

module.exports = CarritoCompra ;