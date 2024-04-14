const CarritoCompra = require("../index");

//agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
//calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
//aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

describe("La función agregarProducto" , () => {
    it("Debe dar error si el producto es inválido", () => {
        const testCarrito = new CarritoCompra();
        const productoInvalido = null ;

        expect( () => {
            testCarrito.agregarProducto(productoInvalido);
        }).toThrow(Error);
    })

    it("Debe dar error si el producto no tiene un precio asignado", () => {
        const testCarrito = new CarritoCompra();
        const productoSinPrecio = {nombre: "Prod 1", cantidad: 1} ;

        expect( () => {
            testCarrito.agregarProducto(productoSinPrecio);
        }).toThrow(Error);
    })

    it("Debe agregar al CarritoCompra el producto ingresado", () => {
        const testCarrito = new CarritoCompra();
        const producto = {nombre: "Prod 1", precio: 10, cantidad: 1} ;

        const inicial = testCarrito.carrito.length ;

        testCarrito.agregarProducto(producto);

        expect(testCarrito.carrito.length).toEqual(inicial+1);
    })
})

describe("La función calcularTotal" , () => {
    it("Debe calcular el precio de los elementos del carrito", () => {
        const testCarrito = new CarritoCompra();
        const producto1 = {nombre: "Prod 1", precio: 10, cantidad: 1} ;
        const producto2 = {nombre: "Prod 2", precio: 5, cantidad: 2} ;

        testCarrito.agregarProducto(producto1);
        testCarrito.agregarProducto(producto2);

        expect(testCarrito.calcularTotal()).toEqual(20);
    })
})

describe("La función aplicarDescuento" , () => {
    it("Debe dar error si el porcentaje es inválido", () => {
        const testCarrito = new CarritoCompra();
        const porcentajeInvalido = null ;

        expect( () => {
            testCarrito.aplicarDescuento(porcentajeInvalido);
        }).toThrow(Error);
    })

    it("Debe dar error si el porcentaje ingresado no es un valor entre 0 y 100", () => {
        const testCarrito = new CarritoCompra();
        const porcentajeFueraDeRango1 = 150;
        const porcentajeFueraDeRango2 = -30;

        expect( () => {
            testCarrito.aplicarDescuento(porcentajeFueraDeRango1);
        }).toThrow(Error);

        expect( () => {
            testCarrito.aplicarDescuento(porcentajeFueraDeRango2);
        }).toThrow(Error);
    })
    
    it("Debe devolver el precio del carrito con el porcentaje de descuento aplicado", () => {
        const testCarrito = new CarritoCompra();
        const producto1 = {nombre: "Prod 1", precio: 10, cantidad: 1} ;
        const producto2 = {nombre: "Prod 2", precio: 5, cantidad: 2} ;
        const testPorcentaje = 20 ;

        testCarrito.agregarProducto(producto1);
        testCarrito.agregarProducto(producto2);

        expect(testCarrito.aplicarDescuento(testPorcentaje)).toEqual(16);
    })
})

