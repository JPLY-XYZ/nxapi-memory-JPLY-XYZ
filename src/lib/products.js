let seed = [
    { id: 1, nombre: "Producto 1", precio: 10 },
    { id: 2, nombre: "Producto 2", precio: 20 },
    { id: 3, nombre: "Producto 3", precio: 30 }
]

let products = null;

export default function getProducts() {
    // if (products)
    //     return products;
    // if (!global._products) {
    //     products = seed;
    //     global._products = products;
    // } else {
    //     products = global._products;
    // }

    // Sólo cargamos valores iniciales una sóla vez
    if (!products) 
        products = seed;
    
    return products;
}

